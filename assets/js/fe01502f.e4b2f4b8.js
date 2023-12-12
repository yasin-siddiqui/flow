"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="NetSuite",l={unversionedId:"reference/Connectors/capture-connectors/netsuite-odbc",id:"reference/Connectors/capture-connectors/netsuite-odbc",title:"NetSuite",description:"This connector captures data from Oracle NetSuite into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/netsuite-odbc.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/netsuite-odbc",permalink:"/reference/Connectors/capture-connectors/netsuite-odbc",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/netsuite-odbc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for MySQL",permalink:"/reference/Connectors/capture-connectors/google-cloud-sql-mysql"},next:{title:"NetSuite",permalink:"/reference/Connectors/capture-connectors/netsuite"}},p={},s=[{value:"SuiteAnalytics vs SuiteQL via REST API",id:"suiteanalytics-vs-suiteql-via-rest-api",level:2},{value:"SuiteAnalytics Connect",id:"suiteanalytics-connect",level:3},{value:"SuiteQL via REST API",id:"suiteql-via-rest-api",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"General Setup",id:"general-setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"netsuite"},"NetSuite"),(0,r.kt)("p",null,"This connector captures data from Oracle NetSuite into Flow collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-netsuite:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-netsuite:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector can be used in two different modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the NetSuite Analytics Data Warehouse using the SuiteQL REST endpoint and a custom role."),(0,r.kt)("li",{parentName:"ul"},"Connect to the NetSuite Analytics Data Warehouse using the ODBC Connector and the bundled Data Warehouse role")),(0,r.kt)("h2",{id:"suiteanalytics-vs-suiteql-via-rest-api"},"SuiteAnalytics vs SuiteQL via REST API"),(0,r.kt)("p",null,"These two different connection modes have some key differences:"),(0,r.kt)("h3",{id:"suiteanalytics-connect"},"SuiteAnalytics Connect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires the SuiteAnalytics Connect feature to be purchased on your NetSuite account"),(0,r.kt)("li",{parentName:"ul"},"Can inspect which tables (standard & custom) exist in your account"),(0,r.kt)("li",{parentName:"ul"},"Can inspect the exact data types specified on these table columns"),(0,r.kt)("li",{parentName:"ul"},"This means you can connect to any table in your account and all fields (booleans, date, and datetimes) are properly formatted in Estuary")),(0,r.kt)("h3",{id:"suiteql-via-rest-api"},"SuiteQL via REST API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom tables are not supported without manual work"),(0,r.kt)("li",{parentName:"ul"},"Some standard tables may not yet be supported and will require additional work from the Estuary team"),(0,r.kt)("li",{parentName:"ul"},"Datetime values are represented as dates without the time specification (this is a limitation of the REST API)"),(0,r.kt)("li",{parentName:"ul"},"Data types on custom columns may not be properly represented"),(0,r.kt)("li",{parentName:"ul"},"You are repsonsible for determining the right set of permissions to grant the connector, which can often be complicated and unintuitive")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle NetSuite ",(0,r.kt)("a",{parentName:"li",href:"https://system.netsuite.com/pages/customerlogin.jsp?country=US"},"account")),(0,r.kt)("li",{parentName:"ul"},"Allowed access to all Account permissions options"),(0,r.kt)("li",{parentName:"ul"},"A new integration with token-based authentication"),(0,r.kt)("li",{parentName:"ul"},"A custom role with access to objects you want to capture ",(0,r.kt)("em",{parentName:"li"},"or")," a purchased SuiteAnalytics Module. See ",(0,r.kt)("a",{parentName:"li",href:"#setup"},"setup"),"."),(0,r.kt)("li",{parentName:"ul"},"A new user assigned to the custom role"),(0,r.kt)("li",{parentName:"ul"},"Access token generated for the custom role")),(0,r.kt)("h2",{id:"general-setup"},"General Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set up required features on your NetSuite account")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Find your Account ID\xa0(also know as the "Realm"). You\'ll use this to connect with Flow.'),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your NetSuite portal, go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," > ",(0,r.kt)("strong",{parentName:"p"},"Company Information"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy your Account ID."),(0,r.kt)("p",{parentName:"li"},"If you have a production account, it will look like ",(0,r.kt)("inlineCode",{parentName:"p"},"2345678"),". If you're using a sandbox, it'll look like ",(0,r.kt)("inlineCode",{parentName:"p"},"2345678_SB2"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the required features."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," > ",(0,r.kt)("strong",{parentName:"p"},"Enable Features"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"SuiteCloud")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Manage Authentication")," section, check the checkbox labeled ",(0,r.kt)("strong",{parentName:"p"},"TOKEN-BASED AUTHENTICATION"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using the SuiteQL connection, in the ",(0,r.kt)("strong",{parentName:"p"},"SuiteTalk (Web Services)")," section, check the checkbox labeled ",(0,r.kt)("strong",{parentName:"p"},"REST WEB SERVICES"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using SuiteAnalytics Connect, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," > ",(0,r.kt)("strong",{parentName:"p"},"Analytics")," > ",(0,r.kt)("strong",{parentName:"p"},"Connectivity")," and check the checkbox labeled ",(0,r.kt)("strong",{parentName:"p"},"SuiteAnalytics Connect"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a NetSuite ",(0,r.kt)("em",{parentName:"p"},"integration")," to obtain a Consumer Key and Consumer Secret."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Integration")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Integrations")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the integration a name, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-netsuite-integration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("strong",{parentName:"p"},"State")," option is enabled.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Authentication")," section, check the ",(0,r.kt)("strong",{parentName:"p"},"Token-Based Authentication")," checkbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes."))),(0,r.kt)("p",{parentName:"li"},"Your Consumer Key and Consumer Secret will be shown once. Copy them to a safe place. They will never show up again\nand will be key to the integration working properly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using the ",(0,r.kt)("strong",{parentName:"p"},"SuiteQL")," over REST API connection, Set up a role for use with Flow."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the role a name, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-integration-role"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The easiest thing to do here is to click "Core Administrative Permissions". If you want to scope down the permissions given to the connector (which you should) you\'ll have to determine which permissions are necessary. This can get tricky because many different settings can expand the required permissions (for instance, a custom script on a record could require additional permissions).')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to the ",(0,r.kt)("strong",{parentName:"p"},"Permissions")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"p"},"Transactions")," and add all the dropdown entities with either ",(0,r.kt)("strong",{parentName:"p"},"full")," or ",(0,r.kt)("strong",{parentName:"p"},"view")," access level."))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Find Transaction")),(0,r.kt)("ol",{parentName:"li",start:6},(0,r.kt)("li",{parentName:"ol"},"(IMPORTANT) Click ",(0,r.kt)("strong",{parentName:"li"},"Setup")," an add the following entities with either ",(0,r.kt)("strong",{parentName:"li"},"full")," or ",(0,r.kt)("strong",{parentName:"li"},"view")," access level.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in using Access Tokens"),(0,r.kt)("li",{parentName:"ul"},"REST Web Services"),(0,r.kt)("li",{parentName:"ul"},"User Access Tokens")),(0,r.kt)("p",{parentName:"li"},"To allow your custom role to reflect future changes, be sure to edit these parameters again when you rename or customize any NetSuite object.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"SuiteAnalytics Connect"),' you don\'t need a custom role. Instead, you can use the bundled "Data Warehouse Integrator"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up user for use with the connector."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Manage Users"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the user you want to give access to use with Flow. In the ",(0,r.kt)("strong",{parentName:"p"},"Name")," column, click the user's name. Then, click the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("strong",{parentName:"p"},"Access")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the dropdown list, select either role you created previously (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-integration-role"),") or the ",(0,r.kt)("strong",{parentName:"p"},"Data Warehouse Integrator")," role if you are using SuiteAnalytics Connect.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate an access token."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Setup")," > ",(0,r.kt)("strong",{parentName:"p"},"Users/Roles")," > ",(0,r.kt)("strong",{parentName:"p"},"Access Tokens")," > ",(0,r.kt)("strong",{parentName:"p"},"New"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Application Name")," you created earlier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"User"),", select the user you assigned the role previously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Role"),", select the role you assigned to the user previously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Token Name"),",  give a descriptive name to the token you are creating, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary-rest-integration-token"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your changes."))),(0,r.kt)("p",{parentName:"li"},"Your Token ID and Token Secret will be shown once. Copy them to a safe place."))),(0,r.kt)("p",null,"You now have a properly configured account with the correct permissions and all the information you need to connect with Flow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Account ID (Realm)"),(0,r.kt)("li",{parentName:"ul"},"Consumer Key"),(0,r.kt)("li",{parentName:"ul"},"Consumer Secret"),(0,r.kt)("li",{parentName:"ul"},"Token ID"),(0,r.kt)("li",{parentName:"ul"},"Token Secret")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the NetSuite source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/account_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Realm"),(0,r.kt)("td",{parentName:"tr",align:null},"Netsuite realm e.g. 2344535, as for ",(0,r.kt)("inlineCode",{parentName:"td"},"production")," or 2344535_SB1, as for the ",(0,r.kt)("inlineCode",{parentName:"td"},"sandbox")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Token Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"The date to start collecting data from"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/consumer_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer key associated with your integration."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/consumer_secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer secret associated with your integration."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/token_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Token Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Access token key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/token_secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Token Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Access token secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource of your NetSuite project from which collections are captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-netsuite:dev\n        config:\n          account_id: <your account id>\n          consumer_key: <key>\n          consumer_secret: <secret>\n          token_key: <key>\n          token_secret: <secret>\n          start_date: "2023-11-01T00:00:00Z"\n    bindings:\n      - resource:\n          stream: Transaction\n        target: ${PREFIX}/Transaction\n      {...}\n')))}m.isMDXComponent=!0}}]);