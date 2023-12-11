"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Intercom",c={unversionedId:"reference/Connectors/capture-connectors/intercom",id:"reference/Connectors/capture-connectors/intercom",title:"Intercom",description:"This connector captures data from Intercom into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/intercom.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/intercom",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/intercom",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/intercom.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/instagram"},next:{title:"Iterable",permalink:"/pr-preview/pr-1277/reference/Connectors/capture-connectors/iterable"}},l={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intercom"},"Intercom"),(0,a.kt)("p",null,"This connector captures data from Intercom into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-intercom:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-intercom:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/intercom/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported through the Intercom API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-admins"},"Admins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-companies"},"Companies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes"},"Company attributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-attached-segments-1"},"Company segments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-contacts"},"Contacts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-data-attributes"},"Contact attributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-conversations"},"Conversations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/retrieve-a-conversation"},"Conversation parts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-segments"},"Segments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-tags-for-an-app"},"Tags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference/list-teams"},"Teams"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are two ways to authenticate with Intercom:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the Flow web app, you sign in directly. You'll need the username and password associated with ",(0,a.kt)("a",{parentName:"p",href:"https://www.intercom.com/help/en/articles/280-how-do-i-add-remove-or-delete-a-teammate"},"a user with full permissions")," on your Intercom workspace.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using the flowctl CLI, you configure authentication manually. You'll need the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.intercom.com/building-apps/docs/authentication-types#section-how-to-get-your-access-token"},"access token")," for you Intercom account."))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1277/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Intercom source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,"The properties in the table below reflect manual authentication using the CLI. In the Flow web app,\nyou'll sign in directly and won't need the access token."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/access_token"))),(0,a.kt)("td",{parentName:"tr",align:null},"Access token"),(0,a.kt)("td",{parentName:"tr",align:null},"Access token for making authenticated requests."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Start date"),(0,a.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource from Intercom from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("p",null,"The sample below reflects manual authentication in the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-intercom:dev\n        config:\n            access_token: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: admins\n          syncMode: full_refresh\n        target: ${PREFIX}/admins\n      - resource:\n          stream: companies\n          syncMode: incremental\n        target: ${PREFIX}/companies\n      - resource:\n          stream: company_segments\n          syncMode: incremental\n        target: ${PREFIX}/companysegments\n      - resource:\n          stream: conversations\n          syncMode: incremental\n        target: ${PREFIX}/conversations\n      - resource:\n          stream: conversation_parts\n          syncMode: incremental\n        target: ${PREFIX}/conversationparts\n      - resource:\n          stream: contacts\n          syncMode: incremental\n        target: ${PREFIX}/contacts\n      - resource:\n          stream: company_attributes\n          syncMode: full_refresh\n        target: ${PREFIX}/companyattributes\n      - resource:\n          stream: contact_attributes\n          syncMode: full_refresh\n        target: ${PREFIX}/contactattributes\n      - resource:\n          stream: segments\n          syncMode: incremental\n        target: ${PREFIX}/segments\n      - resource:\n          stream: tags\n          syncMode: full_refresh\n        target: ${PREFIX}/tags\n      - resource:\n          stream: teams\n          syncMode: full_refresh\n        target: ${PREFIX}/teams\n")))}u.isMDXComponent=!0}}]);