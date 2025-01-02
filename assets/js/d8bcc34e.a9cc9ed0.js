"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63829],{88123:(e,n,t)=>{t.d(n,{O:()=>m});var r=t(68835),o=t(37953),a=t(86743),s=t(22938),i=t(62201);const l=({horizontalSize:e,onMouseDown:n})=>o.createElement("div",{className:(0,r.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:n,style:{left:`calc(${e}% - 5px)`}});function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const m=e=>"nextjs"===(null==e?void 0:e.template)?o.createElement(b,e):o.createElement(g,e),g=e=>{var n,t,c,m,g,y,{startRoute:b,showNavigator:f,showLineNumbers:v,showOpenInCodeSandbox:w,initialPercentage:x=50,dependencies:C,showReadOnly:k,options:N={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.A)("h-full","!gap-0"),"sp-console-header-button":(0,r.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:O="react-ts",customSetup:A,files:P,previewOnly:R,layout:E,height:z=420,wrapperClassName:D,className:j,showFiles:S=!1,showConsole:T=!1,hidePreview:I=!1}=e,U=u(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[B,L]=o.useState(!1);o.useEffect((()=>{L(!0)}),[]);const{colorMode:M}=(0,i.G)();var F,W;null!=N||(N={}),null!==(F=(g=N).resizablePanels)&&void 0!==F||(g.resizablePanels=!0),null!==(W=(y=N).editorWidthPercentage)&&void 0!==W||(y.editorWidthPercentage=null!=x?x:50);const H={showTabs:N.showTabs,showLineNumbers:N.showLineNumbers,showInlineErrors:N.showInlineErrors,wrapContent:N.wrapContent,closableTabs:N.closableTabs,initMode:N.initMode,extensions:null===(n=N.codeEditor)||void 0===n?void 0:n.extensions,extensionsKeymap:null===(t=N.codeEditor)||void 0===t?void 0:t.extensionsKeymap,readOnly:N.readOnly,showReadOnly:null!=k?k:N.showReadOnly,additionalLanguages:null===(c=N.codeEditor)||void 0===c?void 0:c.additionalLanguages},$={activeFile:N.activeFile,visibleFiles:N.visibleFiles,recompileMode:N.recompileMode,recompileDelay:N.recompileDelay,autorun:N.autorun,autoReload:N.autoReload,bundlerURL:N.bundlerURL,startRoute:N.startRoute,skipEval:N.skipEval,fileResolver:N.fileResolver,initMode:N.initMode,initModeObserverOptions:N.initModeObserverOptions,externalResources:N.externalResources,logLevel:N.logLevel,classes:N.classes},[G,X]=o.useState(!1),{onHandleMouseDown:q,horizontalSize:K}=(({initialSize:e=50})=>{const[n,t]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const n=r.current.parentElement;if(!n)return;const{left:o,width:a}=n.getBoundingClientRect(),s=(e.clientX-o)/a*100,i=Math.min(Math.max(s,25),75);t(i),n.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},s=()=>{var e;const n=null===(e=r.current)||void 0===e?void 0:e.parentElement;n&&(n.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",s),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",s)})),[]),{horizontalSize:n,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:N.editorWidthPercentage}),Z=!R&&!(null==E?void 0:E.includes("col"));var _,Y,J,Q,V;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.A)("pb-6","refine-sandpack-wrapper",D)},o.createElement("div",{className:(0,r.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",j)},o.createElement(s.l5,d({key:`${O}-${M}-${B}`,customSetup:d({dependencies:C},A),files:P,options:p(d({},$),{classes:p(d({},$.classes),{"sp-layout":(0,r.A)(null===(m=$.classes)||void 0===m?void 0:m["sp-layout"],T&&"!rounded-bl-none !rounded-br-none")})}),template:O,theme:"light"===M?p(d({},a.Zw),{colors:p(d({},a.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):p(d({},a.hc),{colors:p(d({},a.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},U),o.createElement(s.am,{className:(0,r.A)("col"===E&&"!flex-col","col-reverse"===E&&"!flex-col-reverse")},S&&o.createElement(s.Lm,{autoHiddenFiles:!0,style:{height:null!==(_=N.editorHeight)&&void 0!==_?_:z}}),!R&&o.createElement(s.cW,p(d({},H),{showLineNumbers:v,closableTabs:S,initMode:"lazy",style:p(d({height:null!==(Y=N.editorHeight)&&void 0!==Y?Y:z},(null==E?void 0:E.includes("col"))?{flex:"initial"}:{flexGrow:K,flexShrink:K,flexBasis:0}),{overflow:"hidden"})})),Z?o.createElement(l,{onMouseDown:q,horizontalSize:K}):null,I?null:o.createElement(o.Fragment,null,o.createElement(s.G5,{showOpenInCodeSandbox:w,startRoute:b,showNavigator:null!=f?f:N.showNavigator,showRefreshButton:N.showRefreshButton,style:p(d({display:I?"none":"flex"},(null==E?void 0:E.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-K,flexShrink:100-K,flexBasis:0,width:R?"100%":100-K+"%"}),{gap:0,height:null!==(J=N.editorHeight)&&void 0!==J?J:z})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.A)("w-12","h-12","rounded-full")}))))),T?o.createElement(s.X2,{style:p(d({height:200},(null==E?void 0:E.includes("col"))?{flex:"initial"}:{flexGrow:K,flexShrink:K,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,r.A)(""),style:{height:Number(null!==(Q=N.editorHeight)&&void 0!==Q?Q:z)+2}}),o.createElement("div",{className:(0,r.A)((null==E?void 0:E.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(V=N.editorHeight)&&void 0!==V?V:z)+2}}),o.createElement("div",{className:(0,r.A)(T?"block":"hidden","h-[200px]")})),o.createElement(h,{files:P,dependencies:C}))},h=({files:e,dependencies:n})=>{Object.keys(null!=n?n:{}).map((e=>`${e}@${n[e]}`)).join(", ");const t=Object.keys(null!=e?e:{}).filter((n=>"string"==typeof e[n]||"object"==typeof e[n]&&!0!==e[n].hidden));return o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("h6",null,"Code Example"),t.map((n=>o.createElement("div",{"data-filename":n,key:n},o.createElement("pre",null,`// file: ${n} \n`,y(e[n]))))))},y=e=>"string"==typeof e?e:"code"in e?e.code:"",b=e=>{const n={hidePreview:!0,showConsole:!1};return o.createElement(g,p(d({},n,e),{template:"react-ts"}))}},46440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>g,metadata:()=>y,toc:()=>f});var r=t(37953),o=t(58860),a=t(88123);function s(){return r.createElement(a.O,{showNavigator:!0,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@refinedev/react-router":"latest","react-router":"^7.0.2"},startRoute:"/payments/1",files:{"/App.tsx":{code:l,hidden:!0},"/style.css":{code:c,hidden:!0},"/access-control.ts":{code:i,active:!0},"/show.tsx":{code:d}}})}const i='\nimport { AccessControlProvider } from "@refinedev/core";\n\nconst role = "editor";\n// Uncomment this line and refresh to see difference.\n// const role = "admin";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ action, resource, params }) => {\n    console.log(action, resource, params);\n\n    if (\n      role === "admin" &&\n      ["field", "refund", "approve"].includes(action)\n    ) {\n      return {\n        can: true,\n      };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n'.trim(),l='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router";\n\nimport "./style.css";\n\nimport { accessControlProvider } from "./access-control.ts";\nimport { PaymentShow } from "./show.tsx";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Refine\n      accessControlProvider={accessControlProvider}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "payments",\n            show: "/payments/:id",\n          },\n        ]}\n      >\n        <Routes>\n          <Route path="/payments/:id" element={<PaymentShow />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n}\n'.trim(),c="\nhtml {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 0;\n    padding: 12px;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\nform label, form input, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 6px;\n}\nspan + button {\n    margin-left: 6px;\n}\nul > li {\n    margin-bottom: 6px;\n}\n".trim(),d='\nimport { CanAccess, useCan } from "@refinedev/core";\n\nexport const PaymentShow: React.FC = () => {\n  const { data } = useCan({\n    resource: "payments",\n    action: "refund",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Payment Details</h1>\n      <p>\n        <b>ID</b>: <span>1</span>\n      </p>\n      <p>\n        <b>Amount</b>: <span>$100</span>\n      </p>\n      <p>\n        <b>Transaction ID</b>:\n        <span>\n          <CanAccess\n            resource="payments"\n            action="field"\n            params={{ field: "transactionId" }}\n            fallback={<>This field is only visible to admin users.</>}\n          >\n            <span>123456789</span>\n          </CanAccess>\n        </span>\n      </p>\n      <button disabled={!data?.can}>\n        {data?.can ? "Refund" : data?.reason}\n      </button>\n    </>\n  );\n};\n'.trim();function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const g={title:"Authorization"},h=void 0,y={unversionedId:"guides-concepts/authorization/index",id:"guides-concepts/authorization/index",title:"Authorization",description:"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex enterprise-level application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner.",source:"@site/docs/guides-concepts/authorization/index.md",sourceDirName:"guides-concepts/authorization",slug:"/guides-concepts/authorization/",permalink:"/docs/guides-concepts/authorization/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/guides-concepts/authorization/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1708952173,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{title:"Authorization"},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/guides-concepts/authentication/"},next:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"}},b={},f=[{value:"Access Control Provider",id:"access-control-provider",level:2},{value:"CanAccess Component",id:"canaccess-component",level:2},{value:"Router Integrations",id:"router-integrations",level:3},{value:"useCan Hook",id:"usecan-hook",level:2},{value:"Handling Authorization",id:"handling-authorization",level:2},{value:"UI Integrations",id:"ui-integrations",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3}],v=(w="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var w;const x={toc:f},C="wrapper";function k(e){var{components:n}=e,t=m(e,["components"]);return(0,o.yg)(C,u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},x,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex ",(0,o.yg)("strong",{parentName:"p"},"enterprise-level")," application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner."),(0,o.yg)("p",null,"Refine's ",(0,o.yg)("strong",{parentName:"p"},"flexible architecture")," allows you to easily implement various authorization strategies:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Role-Based Access Control (",(0,o.yg)("strong",{parentName:"li"},"RBAC"),")"),(0,o.yg)("li",{parentName:"ul"},"Attribute-Based Access Control (",(0,o.yg)("strong",{parentName:"li"},"ABAC"),")"),(0,o.yg)("li",{parentName:"ul"},"Access Control List (",(0,o.yg)("strong",{parentName:"li"},"ACL"),")")),(0,o.yg)("p",null,"With ",(0,o.yg)("strong",{parentName:"p"},"any")," authorization solution. (i.e. ",(0,o.yg)("a",{parentName:"p",href:"https://help.okta.com/wf/en-us/content/topics/workflows/connector-reference/okta/overviews/authorization.htm"},"Okta"),", ",(0,o.yg)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,o.yg)("a",{parentName:"p",href:"https://cerbos.dev"},"Cerbos"),", or more)"),(0,o.yg)("p",null,"Refine offers several features to help you implement authorization in your application:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"<CanAccess />")," component: Conditionally renders child components based on the user's access to a resource."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"useCan")," hook: Returns a value indicating whether the user has access to a resource based on the given parameters."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"UI Integrations"),": Conditionally renders UI elements such as ",(0,o.yg)("strong",{parentName:"li"},"buttons"),", ",(0,o.yg)("strong",{parentName:"li"},"menu items"),", etc. based on the user's access to a resource.")),(0,o.yg)("p",null,"In order to enable these features, Refine uses the ",(0,o.yg)("strong",{parentName:"p"},"Access Control Provider")," as an interface to connect your application with your authorization solution and provides necessary parameters to make access control decisions."),(0,o.yg)("h2",{id:"access-control-provider"},"Access Control Provider"),(0,o.yg)(v,{id:"access-control-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," is an object that contains a ",(0,o.yg)("inlineCode",{parentName:"p"},"can")," method. This method is called by Refine to understand if the user can see a certain resource or perform an action."),(0,o.yg)("p",null,"A basic ",(0,o.yg)("strong",{parentName:"p"},"Access Control Provider")," looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="access-control-provider.ts"',title:'"access-control-provider.ts"'},'import { AccessControlProvider } from "@refinedev/core";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ resource, action, params }) => {\n    console.log(resource); // products, orders, etc.\n    console.log(action); // list, edit, delete, etc.\n    console.log(params); // { id: 1 }, { id: 2 }, etc.\n\n    if (meetSomeCondition) {\n      return { can: true };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n')),(0,o.yg)("p",null,"And can be passed to ",(0,o.yg)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,o.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," prop:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport { accessControlProvider } from "./access-control-provider";\n\nexport const App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      accessControlProvider={accessControlProvider}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"To learn more about the ",(0,o.yg)("inlineCode",{parentName:"a"},"Access Control Provider"),", check out the reference page."))),(0,o.yg)("h2",{id:"canaccess-component"},"CanAccess Component"),(0,o.yg)(v,{id:"canaccess-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"CanAccess")," component can be used to wrap your ",(0,o.yg)("strong",{parentName:"p"},"pages")," or ",(0,o.yg)("strong",{parentName:"p"},"components")," to hide them from unauthorized users."),(0,o.yg)("p",null,"It calls ",(0,o.yg)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.yg)("inlineCode",{parentName:"p"},"can")," method and conditionally renders its children based on the result."),(0,o.yg)("p",null,"Here's a basic example of how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"CanAccess")," component:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { CanAccess } from "@refinedev/core";\n\nexport const ListPage = () => {\n  return (\n    <CanAccess\n      resource="products"\n      action="list"\n      fallback={<h1>You are not authorized to see this page.</h1>}\n    >\n      <>\n        <h1>Products</h1>\n        <CanAccess resource="products" action="show" params={{ id: 1 }}>\n          <Button>See Details</Button>\n        </CanAccess>\n      </>\n    </CanAccess>\n  );\n};\n')),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/components/can-access"},"To learn more about the ",(0,o.yg)("inlineCode",{parentName:"a"},"CanAccess")," component, check out the reference page."))),(0,o.yg)("h3",{id:"router-integrations"},"Router Integrations"),(0,o.yg)(v,{id:"router-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Refine's router integrations can infer ",(0,o.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"action"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"params.id")," props from the current route and pass them to the ",(0,o.yg)("inlineCode",{parentName:"p"},"<CanAccess />")," component."),(0,o.yg)("p",null,"This means you can wrap all of your routes with a single ",(0,o.yg)("inlineCode",{parentName:"p"},"<CanAccess />")," component, instead of wrapping each page individually."),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"React Router"),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Next.js"),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Remix")," integration pages for more information.")),(0,o.yg)("h2",{id:"usecan-hook"},"useCan Hook"),(0,o.yg)(v,{id:"usecan-hook",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useCan")," hook can be used to check if the user has access to a resource or action."),(0,o.yg)("p",null,"It calls ",(0,o.yg)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.yg)("inlineCode",{parentName:"p"},"can")," method and returns a value indicating whether the user has access to the resource or action."),(0,o.yg)("p",null,"Here's a basic example of how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"useCan")," hook:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { useCan } from "@refinedev/core";\n\nexport const ListPage = () => {\n  const { data } = useCan({\n    resource: "products",\n    action: "show",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Products</h1>\n      {data?.can && <Button>See Details</Button>}\n    </>\n  );\n};\n')),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},"To learn more about the ",(0,o.yg)("inlineCode",{parentName:"a"},"useCan")," hook, check out the reference page."))),(0,o.yg)("h2",{id:"handling-authorization"},"Handling Authorization"),(0,o.yg)(v,{id:"handling-authorization",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(s,{mdxType:"AccessControlExample"})),(0,o.yg)("h2",{id:"ui-integrations"},"UI Integrations"),(0,o.yg)(v,{id:"ui-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"When Access Control Provider is provided, Refine's UI Integrations automatically manages the ",(0,o.yg)("strong",{parentName:"p"},"visibility")," of their components like ",(0,o.yg)("strong",{parentName:"p"},"buttons")," and ",(0,o.yg)("strong",{parentName:"p"},"menu items"),", simplifying the management of UI."),(0,o.yg)("p",null,"These UI Integrations uses the Access Control Provider to check if a user has the necessary permissions. This check is performed without requiring manual implementation for each component, streamlining the development process.")),(0,o.yg)("h3",{id:"sider"},"Sider"),(0,o.yg)(v,{id:"sider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Sider component's ",(0,o.yg)("strong",{parentName:"p"},"menu items")," will ",(0,o.yg)("strong",{parentName:"p"},"automatically hidden")," if user don't have access."),(0,o.yg)("p",null,"Let's assume we have ",(0,o.yg)("strong",{parentName:"p"},"products")," resource."),(0,o.yg)("p",null,"Menu item of this resource will call ",(0,o.yg)("inlineCode",{parentName:"p"},"can")," method with following parameters:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{ resource: "products", action: "list" }\n')),(0,o.yg)("p",null,"And if user isn't allowed to ",(0,o.yg)("inlineCode",{parentName:"p"},"list")," products, menu item will be hidden.")),(0,o.yg)("h3",{id:"buttons"},"Buttons"),(0,o.yg)(v,{id:"buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"If you are using one of our buttons from our UI Integrations in your application, you don't need to wrap it with ",(0,o.yg)("inlineCode",{parentName:"p"},"<CanAccess />")," or use ",(0,o.yg)("inlineCode",{parentName:"p"},"useCan")," every time. These buttons will automatically be shown or hidden."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"title=button-example.ts",title:"button-example.ts"},'// Following buttons call `can` method with commented parameters.\nimport {\n  CreateButton, //  { resource: "products", action: "create", params: { resource }}\n  ListButton, //    { resource: "products", action: "list" , params: { resource }}\n  EditButton, //    { resource: "products", action: "edit", params: { id: 1, resource } }\n  ShowButton, //    { resource: "products", action: "show", params: { id: 1, resource } }\n  DeleteButton, //  { resource: "products", action: "delete", params: { id: 1, resource } }\n  CloneButton, //   { resource: "products", action: "clone", params: { id: 1, resource } }\n} from "@refinedev/antd"; // or @refinedev/chakra-ui, @refinedev/mui, @refinedev/mantine\n'))))}k.isMDXComponent=!0}}]);