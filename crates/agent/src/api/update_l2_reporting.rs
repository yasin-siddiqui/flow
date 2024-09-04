use super::App;
use anyhow::Context;
use std::sync::Arc;
use validator::Validate;

#[derive(Debug, serde::Deserialize, schemars::JsonSchema, Validate)]
#[serde(rename_all = "camelCase")]
pub struct Request {
    #[serde(default)]
    default_data_plane: String,
    dry_run: bool,
}

#[derive(Debug, serde::Serialize, schemars::JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Response {
    diff: serde_json::Value,
}

#[tracing::instrument(
    skip(pg_pool, publisher, id_generator),
    err(level = tracing::Level::WARN),
)]
async fn do_update_l2_reporting(
    App {
        pg_pool,
        publisher,
        id_generator,
        ..
    }: &App,
    super::Claims { sub: user_id, .. }: super::Claims,
    Request {
        default_data_plane,
        dry_run,
    }: Request,
) -> anyhow::Result<Response> {
    if let None = sqlx::query!(
        "select role_prefix from internal.user_roles($1, 'admin') where role_prefix = 'ops/'",
        user_id,
    )
    .fetch_optional(pg_pool)
    .await?
    {
        anyhow::bail!("authenticated user is not an admin of the 'ops/' tenant");
    }

    let template = include_str!("../../../../ops-catalog/reporting-L2-template.bundle.json");
    let tables::DraftCatalog { collections, .. } =
        serde_json::from_str::<models::Catalog>(template)
            .unwrap()
            .into();

    // Extract draft collection templates from the bundle.
    const L2_INFERRED_NAME: &str = "ops.us-central1.v1/inferred-schemas/L2";
    const L2_STATS_NAME: &str = "ops.us-central1.v1/catalog-stats-L2";
    let mut l2_inferred: Option<tables::DraftCollection> = None;
    let mut l2_stats: Option<tables::DraftCollection> = None;

    for row in collections {
        match row.collection.as_str() {
            L2_INFERRED_NAME => {
                l2_inferred = Some(row);
            }
            L2_STATS_NAME => {
                l2_stats = Some(row);
            }
            _ => {
                anyhow::bail!("unrecognized template collection {}", row.collection)
            }
        }
    }
    let (Some(mut l2_stats), Some(mut l2_inferred)) = (l2_stats, l2_inferred) else {
        anyhow::bail!("expected template to include L2 inferred schemas and catalog stats");
    };

    let models::Derivation {
        transforms: l2_inferred_transforms,
        ..
    } = &mut l2_inferred.model.as_mut().unwrap().derive.as_mut().unwrap();

    let models::Derivation {
        transforms: l2_stats_transforms,
        using: l2_stats_using,
        ..
    } = &mut l2_stats.model.as_mut().unwrap().derive.as_mut().unwrap();

    let models::DeriveUsing::Typescript(models::DeriveUsingTypescript {
        module: l2_stats_module_raw,
    }) = l2_stats_using
    else {
        anyhow::bail!("L2 stats derivation must be a TypeScript module")
    };

    let mut l2_stats_module =
        r#"import * as Types from 'flow/ops.us-central1.v1/catalog-stats-L2.ts';

export class Derivation extends Types.IDerivation {"#
            .to_string();

    // Remove template placeholders (they're used only for tests of reporting tasks).
    l2_inferred_transforms.clear();
    l2_stats_transforms.clear();

    // Add transforms for L1 derivations across all active data-planes.
    let data_planes = sqlx::query!(
        r#"
        select
            ops_l1_inferred_name  as "ops_l1_inferred_name: models::Collection",
            ops_l2_inferred_transform,
            ops_l1_stats_name     as "ops_l1_stats_name:    models::Collection",
            ops_l2_stats_transform
        from data_planes
        -- Data-planes without configured HMAC keys are presumed to not be ready,
        -- and we hold back from processing their L1 derivations.
        where hmac_keys != '{}'
        order by data_plane_name asc;
        "#,
    )
    .fetch_all(pg_pool)
    .await?;

    for data_plane in &data_planes {
        l2_inferred_transforms.push(models::TransformDef {
            name: models::Transform::new(&data_plane.ops_l2_inferred_transform),
            source: models::Source::Collection(data_plane.ops_l1_inferred_name.clone()),

            shuffle: models::Shuffle::Key(models::CompositeKey::new([models::JsonPointer::new(
                "/collection_name",
            )])),
            lambda: models::RawValue::from_value(&serde_json::json!(
                "select json($flow_document);"
            )),

            backfill: 0,
            disable: false,
            priority: 0,
            read_delay: None,
        });

        l2_stats_transforms.push(models::TransformDef {
            name: models::Transform::new(&data_plane.ops_l2_stats_transform),
            source: models::Source::Collection(data_plane.ops_l1_stats_name.clone()),

            backfill: 0,
            disable: false,
            lambda: models::RawValue::default(),
            priority: 0,
            read_delay: None,
            shuffle: models::Shuffle::Any,
        });

        l2_stats_module.push_str(&format!(
            r#"
    {method_name}(read: {{ doc: Types.{type_name}}}): Types.Document[] {{
        return [read.doc]
    }}"#,
            method_name = camel_case(&data_plane.ops_l2_stats_transform, false),
            type_name = format!(
                "Source{}",
                camel_case(&data_plane.ops_l2_stats_transform, true)
            )
        ));
    }

    l2_stats_module.push_str("\n}\n");
    *l2_stats_module_raw = models::RawValue::from_value(&serde_json::json!(l2_stats_module));

    let draft = tables::DraftCatalog {
        collections: tables::DraftCollections::from_iter([l2_inferred, l2_stats]),
        ..Default::default()
    };

    let pub_id = id_generator.lock().unwrap().next();
    let logs_token = uuid::Uuid::new_v4();

    let uncommitted = publisher
        .build(
            user_id,
            pub_id,
            Some(format!("publication for updating L2 reporting")),
            draft,
            logs_token,
            &default_data_plane,
        )
        .await?;

    if uncommitted.has_errors() {
        for err in uncommitted.output.errors() {
            tracing::error!(scope=%err.scope, err=format!("{:#}", err.error), "data-plane-template build error")
        }
        anyhow::bail!("data-plane-template build failed");
    }

    let (live, draft) = if !dry_run {
        let published = publisher
            .commit(uncommitted)
            .await
            .context("committing publication")?
            .error_for_status()?;

        (published.live.collections, published.draft.collections)
    } else {
        (
            uncommitted.output.live.collections,
            uncommitted.output.draft.collections,
        )
    };
    tracing::info!(%logs_token, %dry_run, "updated L2 reporting");

    let previous = serde_json::json!({
        "l2_inferred": live.get_by_key(&models::Collection::new(L2_INFERRED_NAME)).map(|r| &r.model),
        "l2_stats": live.get_by_key(&models::Collection::new(L2_STATS_NAME)).map(|r| &r.model),
    });
    let next = serde_json::json!({
        "l2_inferred": draft.get_by_key(&models::Collection::new(L2_INFERRED_NAME)).map(|r| &r.model),
        "l2_stats": draft.get_by_key(&models::Collection::new(L2_STATS_NAME)).map(|r| &r.model),
    });

    Ok(Response {
        diff: serde_json::json!(doc::diff(Some(&next), Some(&previous))),
    })
}

#[axum::debug_handler]
pub async fn update_l2_reporting(
    axum::extract::State(app): axum::extract::State<Arc<App>>,
    axum::Extension(claims): axum::Extension<super::Claims>,
    super::Request(request): super::Request<Request>,
) -> axum::response::Response {
    super::wrap(async move { do_update_l2_reporting(&app, claims, request).await }).await
}

// Copied from crates/derive-typescript/src/codegen/mod.rs
fn camel_case(name: &str, mut upper: bool) -> String {
    let mut w = String::new();

    for c in name.chars() {
        if !c.is_alphanumeric() {
            upper = true
        } else if upper {
            w.extend(c.to_uppercase());
            upper = false;
        } else {
            w.push(c);
        }
    }
    w
}