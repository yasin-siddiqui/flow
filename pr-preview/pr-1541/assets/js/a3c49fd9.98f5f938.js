"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4754],{4520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const r={sidebar_position:1},o="Create a basic Data Flow",a={id:"guides/create-dataflow",title:"Create a basic Data Flow",description:"This guide walks you through the process of creating an end-to-end Data Flow.",source:"@site/docs/guides/create-dataflow.md",sourceDirName:"guides",slug:"/guides/create-dataflow",permalink:"/pr-preview/pr-1541/guides/create-dataflow",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/create-dataflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flow user guides",permalink:"/pr-preview/pr-1541/guides/"},next:{title:"System-specific Data Flows",permalink:"/pr-preview/pr-1541/guides/system-specific-dataflows/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Create a capture",id:"create-a-capture",level:2},{value:"Create a materialization",id:"create-a-materialization",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-a-basic-data-flow",children:"Create a basic Data Flow"}),"\n",(0,i.jsx)(n.p,{children:"This guide walks you through the process of creating an end-to-end Data Flow."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["This guide is intended for new Flow users and briefly introduces Flow's key concepts.\nThough it's not required, you may find it helpful to read\nthe ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/#essential-concepts",children:"high level concepts"})," documentation for more detail before you begin."]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["In Estuary Flow, you create Data Flows to connect data ",(0,i.jsx)(n.strong,{children:"source"})," and ",(0,i.jsx)(n.strong,{children:"destination"})," systems."]}),"\n",(0,i.jsx)(n.p,{children:"The simplest Data Flow comprises three types of entities:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A data ",(0,i.jsx)(n.strong,{children:"capture"}),", which ingests data from an external source"]}),"\n",(0,i.jsxs)(n.li,{children:["One or more ",(0,i.jsx)(n.strong,{children:"collections"}),", which store that data in a cloud-backed data lake"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"materialization"}),", to push the data to an external destination"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The capture and materialization each rely on a ",(0,i.jsx)(n.strong,{children:"connector"}),".\nA connector is a plug-in component that interfaces between Flow and whatever data system you need to connect to.\nHere, we'll walk through how to leverage various connectors, configure them, and deploy your Data Flow."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-capture",children:"Create a capture"}),"\n",(0,i.jsxs)(n.p,{children:["You'll first create a ",(0,i.jsx)(n.strong,{children:"capture"})," to connect to your data source system.\nThis process will create one or more ",(0,i.jsx)(n.strong,{children:"collections"})," in Flow, which you can then materialize to another system."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the Flow web application at ",(0,i.jsx)(n.a,{href:"https://dashboard.estuary.dev/",children:"dashboard.estuary.dev"})," and sign in using the\ncredentials provided by your Estuary account manager."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Sources"})," tab and choose ",(0,i.jsx)(n.strong,{children:"New Capture"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose the appropriate ",(0,i.jsx)(n.strong,{children:"Connector"})," for your desired data source."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A form appears with the properties required for that connector.\nA documentation page with details about that connector appears in the side panel.\nYou can also browse the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/reference/Connectors/capture-connectors/",children:"connectors reference"})," in your browser."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Type a name for your capture."}),"\n",(0,i.jsxs)(n.p,{children:["Your capture name must begin with a ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/catalogs#namespace",children:"prefix"})," to which you ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/reference/authentication",children:"have access"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Name"})," field, click the drop-down arrow and select an available prefix.\nAppend a unique capture name after the ",(0,i.jsx)(n.code,{children:"/"})," to create the full name, for example ",(0,i.jsx)(n.code,{children:"acmeCo/myFirstCapture"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill out the required properties and click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Flow uses the provided information to initiate a connection to the source system.\nIt identifies one or more data ",(0,i.jsx)(n.strong,{children:"resources"})," \u2014 these may be tables, data streams, or something else, depending on the connector. These are each mapped to a ",(0,i.jsx)(n.strong,{children:"collection"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Output Collections"})," browser appears, showing this list of available collections.\nYou can decide which ones you want to capture."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Look over the list of available collections. All are selected by default.\nYou can remove collections you don't want to capture, change collection names, and for some connectors, modify other properties."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Narrow down a large list of available collections by typing in the ",(0,i.jsx)(n.strong,{children:"Search Bindings"})," box."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you're unsure which collections you want to keep or remove, you can look at their ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/#schemas",children:"schemas"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Output Collections"})," browser, select a collection and click the ",(0,i.jsx)(n.strong,{children:"Collection"})," tab to view its schema and collection key.\n.\nFor many source systems, you'll notice that the collection schemas are quite permissive.\nYou'll have the option to apply more restrictive schemas later, when you materialize the collections."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you made any changes to output collections, click ",(0,i.jsx)(n.strong,{children:"Next"})," again."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once you're satisfied with the configuration, click ",(0,i.jsx)(n.strong,{children:"Save and Publish"}),". You'll see a notification when the capture publishes successfully."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Materialize collections"})," to continue."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-materialization",children:"Create a materialization"}),"\n",(0,i.jsx)(n.p,{children:"Now that you've captured data into one or more collections, you can materialize it to a destination."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Find the tile for your desired data destination and click ",(0,i.jsx)(n.strong,{children:"Materialization"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The page populates with the properties required for that connector.\nMore details are on each connector are provided in the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/reference/Connectors/materialization-connectors/",children:"connectors reference"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,i.jsx)(n.code,{children:"acmeCo/myFirstMaterialization"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill out the required properties in the ",(0,i.jsx)(n.strong,{children:"Endpoint Configuration"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Flow initiates a connection with the destination system."}),"\n",(0,i.jsxs)(n.p,{children:["The Endpoint Config has collapsed and the ",(0,i.jsx)(n.strong,{children:"Source Collections"})," browser is now prominent.\nIt shows each collection you captured previously.\nAll of them will be mapped to a ",(0,i.jsx)(n.strong,{children:"resource"})," in the destination.\nAgain, these may be tables, data streams, or something else.\nWhen you publish the Data Flow, Flow will create these new resources in the destination."]}),"\n",(0,i.jsx)(n.p,{children:"Now's your chance to make changes to the collections before you materialize them."}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally remove some collections or add additional collections."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Type in the ",(0,i.jsx)(n.strong,{children:"Search Collections"})," box to find a collection."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To remove a collection, click the ",(0,i.jsx)(n.strong,{children:"x"})," in its table row. You can also click the ",(0,i.jsx)(n.strong,{children:"Remove All"})," button."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally apply a stricter schema to each collection to use for the materialization."}),"\n",(0,i.jsx)(n.p,{children:"Depending on the data source, you may have captured data with a fairly permissive schema.\nYou can tighten up the schema so it'll materialize to your destination in the correct shape.\n(This isn't necessary for database and SaaS data sources, so the option won't be available.)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Choose a collection from the list and click its ",(0,i.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Schema Inference"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,i.jsx)(n.code,{children:"readSchema"}),", to use for the materialization."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Review the new schema and click ",(0,i.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can exert even more control over the output data structure using the ",(0,i.jsx)(n.strong,{children:"Field Selector"})," on the ",(0,i.jsx)(n.strong,{children:"Config tab"}),".\n",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/guides/customize-materialization-fields",children:"Learn how."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you've made any changes to source fields, click ",(0,i.jsx)(n.strong,{children:"Next"})," again."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save and publish"}),". You'll see a notification when the full Data Flow publishes successfully."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,i.jsx)(n.p,{children:"Now that you've deployed your first Data Flow, you can explore more possibilities."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Read the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/",children:"high level concepts"})," to better understand how Flow works and what's possible."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create more complex Data Flows by mixing and matching collections in your captures and materializations. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Materialize the same collection to multiple destinations."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If a capture produces multiple collections, materialize each one to a different destination."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Materialize collections that came from different sources to the same destination."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Advanced users can modify collection ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/schemas",children:"schemas"}),", apply data ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/schemas#reductions",children:"reductions"}),",\nor transform data with a ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1541/concepts/derivations",children:"derivation"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);