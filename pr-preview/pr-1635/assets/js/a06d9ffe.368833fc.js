"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3344],{7867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(74848),i=n(28453);const s={description:"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format."},d="Apache Parquet Files in Amazon S3",c={id:"reference/Connectors/materialization-connectors/amazon-s3-parquet",title:"Apache Parquet Files in Amazon S3",description:"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-s3-parquet.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-s3-parquet",permalink:"/pr-preview/pr-1635/reference/Connectors/materialization-connectors/amazon-s3-parquet",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-s3-parquet.md",tags:[],version:"current",frontMatter:{description:"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format."},sidebar:"tutorialSidebar",previous:{title:"Apache Iceberg Tables in Amazon S3",permalink:"/pr-preview/pr-1635/reference/Connectors/materialization-connectors/amazon-s3-iceberg"},next:{title:"Google BigQuery",permalink:"/pr-preview/pr-1635/reference/Connectors/materialization-connectors/BigQuery"}},l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Parquet Data Types",id:"parquet-data-types",level:2},{value:"File Names",id:"file-names",level:2},{value:"Eventual Consistency",id:"eventual-consistency",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"apache-parquet-files-in-amazon-s3",children:"Apache Parquet Files in Amazon S3"}),"\n",(0,r.jsxs)(t.p,{children:["This connector materializes ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1635/concepts/materialization#delta-updates",children:"delta updates"})," of\nFlow collections into an S3 bucket in the Apache Parquet format."]}),"\n",(0,r.jsx)(t.p,{children:"The delta updates are batched within Flow, converted to CSV files, and then pushed to the S3 bucket\nat a time interval that you set. Files are limited to a configurable maximum size. Each materialized\nFlow collection will produce many separate files."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://ghcr.io/estuary/materialize-s3-parquet:dev",children:(0,r.jsx)(t.code,{children:"ghcr.io/estuary/materialize-s3-parquet:dev"})}),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["An S3 bucket to write files to. See ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html",children:"this\nguide"})," for\ninstructions on setting up a new S3 bucket."]}),"\n",(0,r.jsxs)(t.li,{children:["An AWS root or IAM user with the\n",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html",children:(0,r.jsx)(t.code,{children:"s3:PutObject"})})," permission\nfor the S3 bucket. For this user, you'll need the ",(0,r.jsx)(t.strong,{children:"access key"})," and ",(0,r.jsx)(t.strong,{children:"secret access key"}),". See\nthe ",(0,r.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help\nfinding these credentials."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Use the below properties to configure the materialization, which will direct one or more of your\nFlow collections to your bucket."}),"\n",(0,r.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/bucket"})})}),(0,r.jsx)(t.td,{children:"Bucket"}),(0,r.jsx)(t.td,{children:"Bucket to store materialized objects."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/awsAccessKeyId"})})}),(0,r.jsx)(t.td,{children:"AWS Access Key ID"}),(0,r.jsx)(t.td,{children:"Access Key ID for writing data to the bucket."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/awsSecretAccessKey"})})}),(0,r.jsx)(t.td,{children:"AWS Secret Access key"}),(0,r.jsx)(t.td,{children:"Secret Access Key for writing data to the bucket."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/region"})})}),(0,r.jsx)(t.td,{children:"Region"}),(0,r.jsx)(t.td,{children:"Region of the bucket to write to."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/uploadInterval"})})}),(0,r.jsx)(t.td,{children:"Upload Interval"}),(0,r.jsx)(t.td,{children:"Frequency at which files will be uploaded."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"5m"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/prefix"})}),(0,r.jsx)(t.td,{children:"Prefix"}),(0,r.jsx)(t.td,{children:"Optional prefix that will be used to store objects."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/fileSizeLimit"})}),(0,r.jsx)(t.td,{children:"File Size Limit"}),(0,r.jsx)(t.td,{children:"Approximate maximum size of materialized files in bytes. Defaults to 10737418240 (10 GiB) if blank."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/endpoint"})}),(0,r.jsx)(t.td,{children:"Custom S3 Endpoint"}),(0,r.jsx)(t.td,{children:"The S3 endpoint URI to connect to. Use if you're materializing to a compatible API that isn't provided by AWS. Should normally be left blank."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/parquetConfig/rowGroupRowLimit"})}),(0,r.jsx)(t.td,{children:"Row Group Row Limit"}),(0,r.jsx)(t.td,{children:"Maximum number of rows in a row group. Defaults to 1000000 if blank."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/parquetConfig/rowGroupByteLimit"})}),(0,r.jsx)(t.td,{children:"Row Group Byte Limit"}),(0,r.jsx)(t.td,{children:"Approximate maximum number of bytes in a row group. Defaults to 536870912 (512 MiB) if blank."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required/Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"/path"})})}),(0,r.jsx)(t.td,{children:"Path"}),(0,r.jsx)(t.td,{children:"The path that objects will be materialized to."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-s3-parquet:dev"\n        config:\n          bucket: bucket\n          awsAccessKeyId: <access_key_id>\n          awsSecretAccessKey: <secret_access_key>\n          region: us-east-2\n          uploadInterval: 5m\n    bindings:\n      - resource:\n          path: ${COLLECTION_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parquet-data-types",children:"Parquet Data Types"}),"\n",(0,r.jsxs)(t.p,{children:["Flow collection fields are written to Parquet files based on the data type of the field. Depending\non the field data type, the Parquet data type may be a ",(0,r.jsx)(t.a,{href:"https://parquet.apache.org/docs/file-format/types/",children:"primitive Parquet\ntype"}),", or a primitive Parquet type extended by a\n",(0,r.jsx)(t.a,{href:"https://github.com/apache/parquet-format/blob/master/LogicalTypes.md",children:"logical Parquet type"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Collection Field Data Type"}),(0,r.jsx)(t.th,{children:"Parquet Data Type"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"array"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"JSON"})," (extends ",(0,r.jsx)(t.strong,{children:"BYTE_ARRAY"}),")"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"object"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"JSON"})," (extends ",(0,r.jsx)(t.strong,{children:"BYTE_ARRAY"}),")"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"BOOLEAN"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"integer"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"INT64"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"DOUBLE"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{contentEncoding: base64}"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"BYTE_ARRAY"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: date}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"DATE"})," (extends ",(0,r.jsx)(t.strong,{children:"BYTE_ARRAY"}),")"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: date-time}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"TIMESTAMP"})," (extends ",(0,r.jsx)(t.strong,{children:"INT64"}),", UTC adjusted with microsecond precision)"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: time}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"TIME"})," (extends ",(0,r.jsx)(t.strong,{children:"INT64"}),", UTC adjusted with microsecond precision)"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: date}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"DATE"})," (extends ",(0,r.jsx)(t.strong,{children:"INT32"}),")"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: duration}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"INTERVAL"})," (extends ",(0,r.jsx)(t.strong,{children:"FIXED_LEN_BYTE_ARRAY"})," with a length of 12)"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," with ",(0,r.jsx)(t.code,{children:"{format: uuid}"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"UUID"})," (extends ",(0,r.jsx)(t.strong,{children:"FIXED_LEN_BYTE_ARRAY"})," with a length of 16)"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"string"})," (all others)"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"STRING"})," (extends ",(0,r.jsx)(t.strong,{children:"BYTE_ARRAY"}),")"]}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"file-names",children:"File Names"}),"\n",(0,r.jsx)(t.p,{children:"Materialized files are named with monotonically increasing integer values, padded with leading 0's\nso they remain lexically sortable. For example, a set of files may be materialized like this for a\ngiven collection:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"bucket/prefix/path/v0000000000/00000000000000000000.parquet\nbucket/prefix/path/v0000000000/00000000000000000001.parquet\nbucket/prefix/path/v0000000000/00000000000000000002.parquet\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here the values for ",(0,r.jsx)(t.strong,{children:"bucket"})," and ",(0,r.jsx)(t.strong,{children:"prefix"})," are from your endpoint configuration. The ",(0,r.jsx)(t.strong,{children:"path"})," is\nspecific to the binding configuration. ",(0,r.jsx)(t.strong,{children:"v0000000000"})," represents the current ",(0,r.jsx)(t.strong,{children:"backfill counter"}),"\nfor binding and will be increased if the binding is re-backfilled, along with the file names\nstarting back over from 0."]}),"\n",(0,r.jsx)(t.h2,{id:"eventual-consistency",children:"Eventual Consistency"}),"\n",(0,r.jsx)(t.p,{children:"In rare circumstances, recently materialized files may be re-written by files with the same name if\nthe materialization shard is interrupted in the middle of processing a Flow transaction and the\ntransaction must be re-started. Files that were committed as part of a completed transaction will\nnever be re-written. In this way, eventually all collection data will be written to files\neffectively-once, although inconsistencies are possible when accessing the most recently written\ndata."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);