"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2444],{24065:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(74848),i=t(28453);const s={},o="Marketo",c={id:"reference/Connectors/capture-connectors/marketo",title:"Marketo",description:"This connector captures data from Marketo into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/marketo.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/marketo",permalink:"/pr-preview/pr-1541/reference/Connectors/capture-connectors/marketo",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/marketo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for MariaDB",permalink:"/pr-preview/pr-1541/reference/Connectors/capture-connectors/MariaDB/amazon-rds-mariadb"},next:{title:"Microsoft SQL Server",permalink:"/pr-preview/pr-1541/reference/Connectors/capture-connectors/SQLServer/"}},d={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"marketo",children:"Marketo"}),"\n",(0,n.jsx)(r.p,{children:"This connector captures data from Marketo into Flow collections."}),"\n",(0,n.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(r.a,{href:"https://ghcr.io/estuary/source-marketo:dev",children:(0,n.jsx)(r.code,{children:"ghcr.io/estuary/source-marketo:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsx)(r.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,n.jsxs)(r.p,{children:["You can find their documentation ",(0,n.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/marketo/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,n.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,n.jsx)(r.p,{children:"This connector can be used to sync the following tables from Marketo:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"activities_X"})," where X is an activity type contains information about lead activities of the type X. For example, activities_send_email contains information about lead activities related to the activity type ",(0,n.jsx)(r.code,{children:"send_email"}),". See the ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Activities/getLeadActivitiesUsingGET",children:"Marketo docs"})," for a detailed explanation of what each column means."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"activity_types."})," Contains metadata about activity types. See the ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Activities/getAllActivityTypesUsingGET",children:"Marketo docs"})," for a detailed explanation of columns."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"campaigns."})," Contains info about your Marketo campaigns. ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Campaigns/getCampaignsUsingGET",children:"Marketo docs"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"leads."})," Contains info about your Marketo leads. ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Leads/getLeadByIdUsingGET",children:"Marketo docs"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"lists."})," Contains info about your Marketo static lists. ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Static_Lists/getListByIdUsingGET",children:"Marketo docs"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"programs."})," Contains info about your Marketo programs. ",(0,n.jsx)(r.a,{href:"https://developers.marketo.com/rest-api/endpoint-reference/asset-endpoint-reference/#!/Programs/browseProgramsUsingGET",children:"Marketo docs"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"(Optional) Whitelist Estuary's IP address if needed"}),"\n",(0,n.jsx)(r.li,{children:"An API-only Marketo User Role"}),"\n",(0,n.jsx)(r.li,{children:"An Estuary Marketo API-only user"}),"\n",(0,n.jsx)(r.li,{children:"A Marketo API Custom Service"}),"\n",(0,n.jsx)(r.li,{children:"Marketo Client ID & Client Secret"}),"\n",(0,n.jsx)(r.li,{children:"Marketo Base URL"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-1541/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Marketo source connector."]}),"\n",(0,n.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/client_id"})}),(0,n.jsx)(r.td,{children:"Client ID"}),(0,n.jsx)(r.td,{children:"The Client ID of your Marketo developer application."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/client_secret"})}),(0,n.jsx)(r.td,{children:"Client Secret"}),(0,n.jsx)(r.td,{children:"The Client Secret of your Marketo developer application."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/start_date"})}),(0,n.jsx)(r.td,{children:"Start Date"}),(0,n.jsx)(r.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/domain_url"})}),(0,n.jsx)(r.td,{children:"Domain URL"}),(0,n.jsx)(r.td,{children:"Your Marketo Base URL."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/stream"})})}),(0,n.jsx)(r.td,{children:"Stream"}),(0,n.jsx)(r.td,{children:"Resource of your Marketo project from which collections are captured."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/syncMode"})})}),(0,n.jsx)(r.td,{children:"Sync Mode"}),(0,n.jsx)(r.td,{children:"Connection method."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-marketo:dev\n        config:\n          client_id: <secret>\n          client_secret: <secret>\n          start_date: 2017-01-25T00:00:00Z\n          domain_url: <your domain URL>\n    bindings:\n      - resource:\n          stream: leads\n          syncMode: full_refresh\n        target: ${PREFIX}/leads\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);