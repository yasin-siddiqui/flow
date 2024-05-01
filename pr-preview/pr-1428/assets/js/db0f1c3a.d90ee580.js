"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2571],{85106:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(74848),t=r(28453);const s={sidebar_position:1},c="Bing Ads",o={id:"reference/Connectors/capture-connectors/bing-ads",title:"Bing Ads",description:"This connector captures data from Bing Ads into Flow collections via the Bing Ads API.",source:"@site/docs/reference/Connectors/capture-connectors/bing-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/bing-ads",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/bing-ads",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/bing-ads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/apache-kafka"},next:{title:"Braintree",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/braintree"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Microsoft in the Flow web app",id:"using-oauth2-to-authenticate-with-microsoft-in-the-flow-web-app",level:3},{value:"Authenticating manually using the CLI",id:"authenticating-manually-using-the-cli",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bing-ads",children:"Bing Ads"}),"\n",(0,i.jsxs)(n.p,{children:["This connector captures data from Bing Ads into Flow collections via the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/guides/?view=bingads-13",children:"Bing Ads API"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.jsx)(n.a,{href:"https://ghcr.io/estuary/source-bing-ads:dev",children:(0,i.jsx)(n.code,{children:"ghcr.io/estuary/source-bing-ads:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,i.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,i.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/bing-ads/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,i.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/customer-management-service/searchaccounts?view=bingads-13",children:"Accounts"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13",children:"Account performance reports"}),": hourly, daily, weekly, and monthly (",(0,i.jsx)(n.strong,{children:"four resources"}),")"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/campaign-management-service/getadgroupsbycampaignid?view=bingads-13",children:"Ad groups"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13",children:"Ad group performance reports"}),": hourly, daily, weekly, and monthly (",(0,i.jsx)(n.strong,{children:"four resources"}),")"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/campaign-management-service/getadsbyadgroupid?view=bingads-13",children:"Ads"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13",children:"Ad performance reports"}),": hourly, daily, weekly, and monthly (",(0,i.jsx)(n.strong,{children:"four resources"}),")."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/budgetsummaryreportrequest?view=bingads-13",children:"Budget summary report"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/campaign-management-service/getcampaignsbyaccountid?view=bingads-13",children:"Campaigns"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13",children:"Campaign performance reports"}),": hourly, daily, weekly, and monthly (",(0,i.jsx)(n.strong,{children:"four resources"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13",children:"Keyword performance reports"}),": hourly, daily, weekly, and monthly (",(0,i.jsx)(n.strong,{children:"four resources"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"This connector uses OAuth2 to authenticate with Microsoft. You can do this in the Flow web app, or configure manually if you're using the flowctl CLI."}),"\n",(0,i.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-microsoft-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Microsoft in the Flow web app"}),"\n",(0,i.jsx)(n.p,{children:"You'll need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["User credentials with ",(0,i.jsx)(n.a,{href:"https://help.ads.microsoft.com/#apex/3/en/52037/3-500",children:"access"})," to the Bing Ads account."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token",children:"developer token"})," associated with the user."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"authenticating-manually-using-the-cli",children:"Authenticating manually using the CLI"}),"\n",(0,i.jsx)(n.p,{children:"You'll need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A registered Bing Ads application with the following credentials retrieved:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Client ID"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Client Secret"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Refresh Token"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To set get these items, complete the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/guides/authentication-oauth-register?view=bingads-13",children:"Register your Bing Ads Application"})," in the Azure Portal."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["During setup, note the ",(0,i.jsx)(n.code,{children:"client_id"})," and ",(0,i.jsx)(n.code,{children:"client_secret"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Get a ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#access-token",children:"user access token"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13",children:"Redeem the user authorization code for OAuth tokens"}),", and note the ",(0,i.jsx)(n.code,{children:"refresh_token"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Bing Ads source connector."]}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,i.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-microsoft-in-the-flow-web-app",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/credentials"})})}),(0,i.jsx)(n.td,{children:"Credentials"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/credentials/auth_method"})})}),(0,i.jsx)(n.td,{children:"Authentication method"}),(0,i.jsxs)(n.td,{children:["Set to ",(0,i.jsx)(n.code,{children:"oauth2.0"})]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"oauth2.0"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/credentials/client_id"})})}),(0,i.jsx)(n.td,{children:"Client ID"}),(0,i.jsx)(n.td,{children:"The Client ID of your Microsoft Advertising developer application."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/credentials/client_secret"})})}),(0,i.jsx)(n.td,{children:"Client Secret"}),(0,i.jsx)(n.td,{children:"The Client Secret of your Microsoft Advertising developer application."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/credentials/refresh_token"})})}),(0,i.jsx)(n.td,{children:"Refresh Token"}),(0,i.jsx)(n.td,{children:"Refresh Token to renew the expired Access Token."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/developer_token"})})}),(0,i.jsx)(n.td,{children:"Developer Token"}),(0,i.jsx)(n.td,{children:"Developer token associated with user."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/reports_start_date"})})}),(0,i.jsx)(n.td,{children:"Credentials"}),(0,i.jsx)(n.td,{children:"The start date from which to begin replicating report data. Any data generated before this date will not be replicated in reports. This is a UTC date in YYYY-MM-DD format."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsxs)(n.td,{children:["Required, ",(0,i.jsx)(n.code,{children:"2020-01-01"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/tenant_id"})})}),(0,i.jsx)(n.td,{children:"Credentials"}),(0,i.jsxs)(n.td,{children:["The Tenant ID of your Microsoft Advertising developer application. Set this to ",(0,i.jsx)(n.code,{children:"common"})," unless you know you need a different value."]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Title"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required/Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/stream"})})}),(0,i.jsx)(n.td,{children:"Stream"}),(0,i.jsx)(n.td,{children:"Bing Ads resource from which a collection is captured."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"/syncMode"})})}),(0,i.jsx)(n.td,{children:"Sync Mode"}),(0,i.jsx)(n.td,{children:"Connection method."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-bing-ads:dev\n          config:\n            credentials:\n              auth_type: oauth2.0\n              client_id: 6731de76-14a6-49ae-97bc-6eba6914391e\n              client_secret: <secret>\n              refresh_token: <token>\n            developer_token: <token>\n            reports_start_date: 2020-01-01\n            tenant_id: common\n\n      bindings:\n        - resource:\n            stream: accounts\n            syncMode: full_refresh\n          target: ${PREFIX}/accounts\n       {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);