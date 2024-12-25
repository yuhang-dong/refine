"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90074],{88123:(e,n,t)=>{t.d(n,{O:()=>m});var r=t(68835),a=t(37953),o=t(86743),i=t(22938),s=t(62201);const d=({horizontalSize:e,onMouseDown:n})=>a.createElement("div",{className:(0,r.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:n,style:{left:`calc(${e}% - 5px)`}});function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const m=e=>"nextjs"===(null==e?void 0:e.template)?a.createElement(g,e):a.createElement(y,e),y=e=>{var n,t,l,m,y,g,{startRoute:f,showNavigator:h,showLineNumbers:v,showOpenInCodeSandbox:b,initialPercentage:w=50,dependencies:x,showReadOnly:P,options:N={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.A)("h-full","!gap-0"),"sp-console-header-button":(0,r.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:R="react-ts",customSetup:O,files:T,previewOnly:E,layout:k,height:C=420,wrapperClassName:I,className:L,showFiles:S=!1,showConsole:A=!1,hidePreview:M=!1}=e,D=u(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[j,W]=a.useState(!1);a.useEffect((()=>{W(!0)}),[]);const{colorMode:F}=(0,s.G)();var U,z;null!=N||(N={}),null!==(U=(y=N).resizablePanels)&&void 0!==U||(y.resizablePanels=!0),null!==(z=(g=N).editorWidthPercentage)&&void 0!==z||(g.editorWidthPercentage=null!=w?w:50);const q={showTabs:N.showTabs,showLineNumbers:N.showLineNumbers,showInlineErrors:N.showInlineErrors,wrapContent:N.wrapContent,closableTabs:N.closableTabs,initMode:N.initMode,extensions:null===(n=N.codeEditor)||void 0===n?void 0:n.extensions,extensionsKeymap:null===(t=N.codeEditor)||void 0===t?void 0:t.extensionsKeymap,readOnly:N.readOnly,showReadOnly:null!=P?P:N.showReadOnly,additionalLanguages:null===(l=N.codeEditor)||void 0===l?void 0:l.additionalLanguages},$={activeFile:N.activeFile,visibleFiles:N.visibleFiles,recompileMode:N.recompileMode,recompileDelay:N.recompileDelay,autorun:N.autorun,autoReload:N.autoReload,bundlerURL:N.bundlerURL,startRoute:N.startRoute,skipEval:N.skipEval,fileResolver:N.fileResolver,initMode:N.initMode,initModeObserverOptions:N.initModeObserverOptions,externalResources:N.externalResources,logLevel:N.logLevel,classes:N.classes},[_,B]=a.useState(!1),{onHandleMouseDown:H,horizontalSize:Y}=(({initialSize:e=50})=>{const[n,t]=a.useState(e),r=a.useRef(null),o=e=>{if(!r.current)return;const n=r.current.parentElement;if(!n)return;const{left:a,width:o}=n.getBoundingClientRect(),i=(e.clientX-a)/o*100,s=Math.min(Math.max(i,25),75);t(s),n.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const n=null===(e=r.current)||void 0===e?void 0:e.parentElement;n&&(n.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return a.useEffect((()=>(document.body.addEventListener("mousemove",o),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",o),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:n,onHandleMouseDown:a.useCallback((e=>{r.current=e.target}),[])}})({initialSize:N.editorWidthPercentage}),G=!E&&!(null==k?void 0:k.includes("col"));var X,K,V,Z,J;return a.createElement(a.Fragment,null,a.createElement("div",{className:(0,r.A)("pb-6",I)},a.createElement("div",{className:(0,r.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",L)},a.createElement(i.l5,p({key:`${R}-${F}-${j}`,customSetup:p({dependencies:x},O),files:T,options:c(p({},$),{classes:c(p({},$.classes),{"sp-layout":(0,r.A)(null===(m=$.classes)||void 0===m?void 0:m["sp-layout"],A&&"!rounded-bl-none !rounded-br-none")})}),template:R,theme:"light"===F?c(p({},o.Zw),{colors:c(p({},o.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):c(p({},o.hc),{colors:c(p({},o.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},D),a.createElement(i.am,{className:(0,r.A)("col"===k&&"!flex-col","col-reverse"===k&&"!flex-col-reverse")},S&&a.createElement(i.Lm,{autoHiddenFiles:!0,style:{height:null!==(X=N.editorHeight)&&void 0!==X?X:C}}),!E&&a.createElement(i.cW,c(p({},q),{showLineNumbers:v,closableTabs:S,initMode:"lazy",style:c(p({height:null!==(K=N.editorHeight)&&void 0!==K?K:C},(null==k?void 0:k.includes("col"))?{flex:"initial"}:{flexGrow:Y,flexShrink:Y,flexBasis:0}),{overflow:"hidden"})})),G?a.createElement(d,{onMouseDown:H,horizontalSize:Y}):null,M?null:a.createElement(a.Fragment,null,a.createElement(i.G5,{showOpenInCodeSandbox:b,startRoute:f,showNavigator:null!=h?h:N.showNavigator,showRefreshButton:N.showRefreshButton,style:c(p({display:M?"none":"flex"},(null==k?void 0:k.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-Y,flexShrink:100-Y,flexBasis:0,width:E?"100%":100-Y+"%"}),{gap:0,height:null!==(V=N.editorHeight)&&void 0!==V?V:C})},a.createElement("div",{className:"sp-custom-loading"},a.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.A)("w-12","h-12","rounded-full")}))))),A?a.createElement(i.X2,{style:c(p({height:200},(null==k?void 0:k.includes("col"))?{flex:"initial"}:{flexGrow:Y,flexShrink:Y,flexBasis:0}),{overflow:"hidden"})}):null)),a.createElement("div",{className:(0,r.A)(""),style:{height:Number(null!==(Z=N.editorHeight)&&void 0!==Z?Z:C)+2}}),a.createElement("div",{className:(0,r.A)((null==k?void 0:k.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(J=N.editorHeight)&&void 0!==J?J:C)+2}}),a.createElement("div",{className:(0,r.A)(A?"block":"hidden","h-[200px]")})),a.createElement("section",{className:"hidden max-w-0 max-h-0"},a.createElement("h6",null,"Code Example"),a.createElement("p",null,`Dependencies: ${Object.keys(null!=x?x:{}).map((e=>`${e}@${x[e]}`))}`),a.createElement("div",null,"Code Files"),Object.keys(null!=T?T:{}).map((e=>a.createElement("div",{key:e},a.createElement("div",null,`File: ${e}`),a.createElement("pre",null,`Content: ${"code"in T[e]?T[e].code:T[e]}`))))))},g=e=>{const n={hidePreview:!0,showConsole:!1};return a.createElement(y,c(p({},n,e),{template:"react-ts"}))}},37065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>E,default:()=>F,frontMatter:()=>T,metadata:()=>k,toc:()=>I});var r=t(37953),a=t(58860),o=t(88123);function i(){return r.createElement(o.O,{hidePreview:!0,showFiles:!1,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"App.tsx":{code:s,readOnly:!0},"multitenancy.ts":{code:d,readOnly:!0}}})}const s='\nimport { RefineEnterprise } from "@refinedev/enterprise";\nimport { WithTenant } from "@refinedev/multitenancy";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Outlet, Routes, Route } from "react-router";\n\nimport { multitenancyProvider } from "./multitenancy";\n\nimport { ProductsList, ProductsCreate, ProductsShow, ProductsEdit } from "./products";\n\nexport const App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <RefineEnterprise\n        multitenancyProvider={multitenancyProvider}\n        dataProvider={dataProvider("<API_URL>")}\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "products",\n            // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n            list: "/:tenantId/products",\n            show: "/:tenantId/products/:id",\n            edit: "/:tenantId/products/:id/edit",\n            create: "/:tenantId/products/create",\n          },\n        ]}\n      >\n        <Routes>\n          {/* We\'re defining the `tenantId` as a route parameter. */}\n          <Route path="/:tenantId" element={\n            <WithTenant\n              fallback={<div>Tenant not found</div>}\n              loadingComponent={<div>Loading...</div>}\n            >\n              <Outlet />\n            </WithTenant>\n          }>\n            <Route path="products" element={<ProductsList />} />\n            <Route path="products/create" element={<ProductsCreate />} />\n            <Route path="products/:id" element={<ProductsShow />} />\n            <Route path="products/:id/edit" element={<ProductsEdit />} />\n          </Route>\n        </Routes>\n      </RefineEnterprise>\n    </BrowserRouter>\n  );\n};\n'.trim(),d='\nimport type { MultiTenancyProvider } from "@refinedev/core";\nimport { useRouterAdapter } from "@refinedev/multitenancy";\nimport dataProvider from "@refinedev/simple-rest";\n\nexport type Tenant = {\n  id: string;\n  name: string;\n};\n\nexport const multitenancyProvider: MultiTenancyProvider = {\n  adapter: useRouterAdapter(),\n  fetchTenants: async () => {\n    const response = await dataProvider("<API_URL>").getList<Tenant>({\n      resource: "categories",\n      pagination: {\n        mode: "off",\n      },\n    });\n    const tenants = response.data;\n    const defaultTenant = tenants[0];\n\n    return {\n      tenants,\n      defaultTenant,\n    };\n  },\n};\n'.trim();function l(){return r.createElement(o.O,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/pages/_app.tsx":{code:p,active:!0,readOnly:!0},"/pages/[tenantId]/products/index.tsx":{code:c,readOnly:!0},"/pages/[tenantId]/products/create.tsx":{code:u,readOnly:!0},"/pages/[tenantId]/products/[id]/index.tsx":{code:m,readOnly:!0},"/pages/[tenantId]/products/[id]/edit.tsx":{code:y,readOnly:!0},"/providers/multitenancy.ts":{code:g,readOnly:!0}}})}const p='\nimport React from "react";\n\nimport { RefineEnterprise } from "@refinedev/enterprise";\nimport { WithTenant } from "@refinedev/multitenancy";\nimport routerProvider from "@refinedev/nextjs-router/pages";\nimport dataProvider from "@refinedev/simple-rest";\nimport type { AppProps } from "next/app";\n\nimport { multitenancyProvider } from "./providers/multitenancy";\n\nfunction App({ Component, pageProps }: AppProps) {\n    return (\n      <RefineEnterprise\n          multitenancyProvider={multitenancyProvider}\n          dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n      >\n        <WithTenant\n          fallback={<div>Tenant not found</div>}\n          loadingComponent={<div>Loading...</div>}\n        >\n          <Component {...pageProps} />\n        </WithTenant>\n      </RefineEnterprise>\n    );\n}\n\nexport default App;\n'.trim(),c='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),u='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),m='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const { query: { data, isLoading } } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),y='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, query, formLoading } = useForm();\n  const record = query?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),g='\nimport type { MultiTenancyProvider } from "@refinedev/enterprise";\nimport { useRouterAdapter } from "@refinedev/multitenancy";\nimport dataProvider from "@refinedev/simple-rest";\n\nexport type Tenant = {\n  id: string;\n  name: string;\n};\n\nexport const multitenancyProvider: MultiTenancyProvider = {\n  adapter: useRouterAdapter(),\n  fetchTenants: async () => {\n    const response = await dataProvider("<API_URL>").getList<Tenant>({\n      resource: "categories",\n      pagination: {\n        mode: "off",\n      },\n    });\n    const tenants = response.data;\n    const defaultTenant = tenants[0];\n\n    return {\n      tenants,\n      defaultTenant,\n    };\n  },\n};\n'.trim();function f(){return r.createElement(o.O,{hidePreview:!0,showFiles:!0,showOpenInCodeSandbox:!1,showReadOnly:!1,template:"react-ts",dependencies:{"@refinedev/core":"latest"},files:{"/app/root.tsx":{code:h,active:!0,readOnly:!0},"/app/routes/$tenantId.products._index.tsx":{code:v,readOnly:!0},"/app/routes/$tenantId.products.create.tsx":{code:b,readOnly:!0},"/app/routes/$tenantId.products.$id._index.tsx":{code:w,readOnly:!0},"/app/routes/$tenantId.products.$id.edit.tsx":{code:x,readOnly:!0},"/app/providers/multitenancy.ts":{code:P,readOnly:!0}}})}const h='\nimport React from "react";\n\nimport {\n  Links,\n  LiveReload,\n  Meta,\n  Outlet,\n  Scripts,\n  ScrollRestoration,\n} from "@remix-run/react";\n\nimport { RefineEnterprise } from "@refinedev/enterprise";\nimport { WithTenant } from "@refinedev/multitenancy";\nimport routerProvider from "@refinedev/remix-router";\nimport dataProvider from "@refinedev/simple-rest";\n\n\nimport { multitenancyProvider } from "./providers/multitenancy";\n\nexport default function App() {\n  return (\n    <html lang="en">\n      <head>\n        <Meta />\n        <Links />\n      </head>\n      <body>\n        <RefineEnterprise\n          multitenancyProvider={multitenancyProvider}\n          dataProvider={dataProvider("<API_URL>")}\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "products",\n              // We\'re prefixing the routes with `/:tenantId` to make them tenant-aware.\n              list: "/:tenantId/products",\n              show: "/:tenantId/products/:id",\n              edit: "/:tenantId/products/:id/edit",\n              create: "/:tenantId/products/create",\n            },\n          ]}\n        >\n          <WithTenant\n            fallback={<div>Tenant not found</div>}\n            loadingComponent={<div>Loading...</div>}\n          >\n            <Outlet />\n          </WithTenant>\n        </RefineEnterprise>\n        <ScrollRestoration />\n        <Scripts />\n        <LiveReload />\n      </body>\n    </html>\n  );\n}\n'.trim(),v='\nimport React from "react";\n\nimport { useList } from "@refinedev/core";\n\nexport default function ProductsList() {\n  const { data, isLoading } = useList();\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Products</h1>\n      <ul>\n        {data?.data.map((record) => (\n          <li key={record.id}>{record.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'.trim(),b='\nimport React from "react";\n\nimport { useCreate } from "@refinedev/core";\n\nexport default function ProductsCreate() {\n  const { onFinish } = useForm();\n\n  return (\n    <div>\n      <h1>Create Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" />\n        <button type="submit">Create</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),w='\nimport React from "react";\n\nimport { useShow } from "@refinedev/core";\n\nexport default function ProductsShow() {\n  const {\n    query: { data, isLoading },\n  } = useShow();\n  const record = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>{record?.name}</h1>\n      <p>{record?.description}</p>\n    </div>\n  );\n}\n'.trim(),x='\nimport React from "react";\n\nimport { useForm } from "@refinedev/core";\n\nexport default function ProductsEdit() {\n  const { onFinish, query, formLoading } = useForm();\n  const record = query?.data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Edit Product</h1>\n      <form onSubmit={(event) => { /* ... */ }}>\n        <label htmlFor="name">Name</label>\n        <input id="name" type="text" name="name" defaultValue={record?.name} />\n        <button type="submit">Save</button>\n      </form>\n    </div>\n  );\n}\n'.trim(),P='\nimport type { MultiTenancyProvider } from "@refinedev/enterprise";\nimport { useRouterAdapter } from "@refinedev/multitenancy";\nimport dataProvider from "@refinedev/simple-rest";\n\nexport type Tenant = {\n  id: string;\n  name: string;\n};\n\nexport const multiTenancyProvider: MultiTenancyProvider = {\n  adapter: useRouterAdapter(),\n  fetchTenants: async () => {\n    const response = await dataProvider("<API_URL>").getList<Tenant>({\n      resource: "categories",\n      pagination: {\n        mode: "off",\n      },\n    });\n    const tenants = response.data;\n    const defaultTenant = tenants[0];\n\n    return {\n      tenants,\n      defaultTenant,\n    };\n  },\n};\n'.trim();function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function O(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const T={title:"Multitenancy"},E=void 0,k={unversionedId:"guides-concepts/multitenancy/index",id:"guides-concepts/multitenancy/index",title:"Multitenancy",description:"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the Examples section.",source:"@site/docs/guides-concepts/multitenancy/index.md",sourceDirName:"guides-concepts/multitenancy",slug:"/guides-concepts/multitenancy/",permalink:"/docs/guides-concepts/multitenancy/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/guides-concepts/multitenancy/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1734429536,formattedLastUpdatedAt:"Dec 17, 2024",frontMatter:{title:"Multitenancy"},sidebar:"mainSidebar",previous:{title:"Audit Logs",permalink:"/docs/guides-concepts/audit-logs/"},next:{title:"Import - Export",permalink:"/docs/guides-concepts/import-export/"}},C={},I=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Implementing Multitenancy in Refine",id:"implementing-multitenancy-in-refine",level:2},{value:"1. Setting up the Multitenancy Provider",id:"1-setting-up-the-multitenancy-provider",level:3},{value:"2. Configuring Multi-tenant Routes",id:"2-configuring-multi-tenant-routes",level:3},{value:"Handling Multi-tenant Requests in Data Providers",id:"handling-multi-tenant-requests-in-data-providers",level:3},{value:"Adding a Tenant Selector to the UI",id:"adding-a-tenant-selector-to-the-ui",level:3},{value:"Examples",id:"examples",level:3}],L=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},S=L("DocThumbsUpDownFeedbackWidget"),A=L("InstallPackagesCommand"),M=L("Tabs"),D=L("TabItem"),j={toc:I},W="wrapper";function F(e){var{components:n}=e,t=O(e,["components"]);return(0,a.yg)(W,R(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){N(e,n,t[n])}))}return e}({},j,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Refine's architecture allows you to customize your app's data providers, access control and routing to support multi tenant features easily. This guide will provide you with a high level overview of the concepts and how to implement them. To see multi tenant app examples, check out the ",(0,a.yg)("a",{parentName:"p",href:"#examples"},"Examples")," section."),(0,a.yg)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,a.yg)(S,{id:"what-is-multitenancy",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Multitenancy, especially in cloud-based systems or software solutions, refers to the ability of a software application or system to serve multiple customers (tenants) simultaneously. While these customers share the same infrastructure and codebase, their data remains separate, and each customer has exclusive access to their own data."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Benefits of Multitenancy:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Resource Sharing:")," Efficient use of shared infrastructure reduces costs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cost Savings:")," Lower maintenance costs passed on to customers."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Customization:")," Each tenant can adjust settings to their needs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Easy Updates:")," System-wide updates benefit all tenants at once.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cloud Office Tools:")," Multiple organizations share document management and collaboration features."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"CRM Systems:")," Businesses manage customer interactions on a shared platform with secure, custom configurations."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ERP Systems:")," Companies use shared ERP solutions with separate data and configurations."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"E-commerce Platforms:")," Sellers run personalized storefronts on a shared backend."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"LMS Platforms:")," Schools and organizations deliver courses on a shared learning system."))),(0,a.yg)("h2",{id:"implementing-multitenancy-in-refine"},"Implementing Multitenancy in Refine"),(0,a.yg)(S,{id:"implementing-multitenancy-in-refine",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"In the next sections, we'll show you how to set up multitenancy in Refine using a route-based approach. We'll use the ",(0,a.yg)("a",{parentName:"p",href:"/docs/enterprise-edition/multitenancy/"},(0,a.yg)("inlineCode",{parentName:"a"},"multitenancyProvider"))," from the ",(0,a.yg)("inlineCode",{parentName:"p"},'"@refinedev/enterprise"')," package. This Multi-Tenancy Provider is part of the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/enterprise/"},"Refine Enterprise Edition"),". It makes managing multi-tenant applications easier by providing tools like context, hooks, and components that are designed to handle tenants.")),(0,a.yg)("h3",{id:"1-setting-up-the-multitenancy-provider"},"1. Setting up the Multitenancy Provider"),(0,a.yg)(S,{id:"1-setting-up-the-multitenancy-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"First, we need to install the ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/enterprise")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/multitenancy")," packages."),(0,a.yg)(A,{args:"@refinedev/enterprise @refinedev/multitenancy",mdxType:"InstallPackagesCommand"}),(0,a.yg)("p",null,"Then we need to change ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component to ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineEnterprise />")," in your ",(0,a.yg)("inlineCode",{parentName:"p"},"App.tsx")," file. You can use same props of ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component in ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineEnterprise />")," component."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ud83d\udea8 All the props of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component are also available in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineEnterprise />")," component with additional features.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'- import { Refine } from "@refinedev/core";\n+ import { RefineEnterprise } from "@refinedev/enterprise";\n\nexport const App = () => {\n  return (\n-    <Refine>\n+      <RefineEnterprise>\n        {/* Your app code */}\n+      </RefineEnterprise>\n-    </Refine>\n  );\n};\n')),(0,a.yg)("p",null,"After that, we need to provide the ",(0,a.yg)("a",{parentName:"p",href:"/docs/enterprise-edition/multitenancy/"},(0,a.yg)("inlineCode",{parentName:"a"},"multitenancyProvider"))," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineEnterprise />")," component. The ",(0,a.yg)("a",{parentName:"p",href:"/docs/enterprise-edition/multitenancy/"},(0,a.yg)("inlineCode",{parentName:"a"},"multitenancyProvider"))," prop accepts an object with two properties: ",(0,a.yg)("inlineCode",{parentName:"p"},"adapter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"fetchTenants"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"adapter"),": The adapter is a function that extracts the tenantId from the current route. You can use the provided ",(0,a.yg)("inlineCode",{parentName:"p"},"useRouterAdapter")," or create your own custom adapter.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"fetchTenants"),": This function is used to fetch the list of tenants. You can fetch the list of tenants from your API and return them in the format ",(0,a.yg)("inlineCode",{parentName:"p"},"{ tenants: Tenant[], defaultTenant: Tenant }"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"<WithTenant />"),": This component is required to wrap your app code. It fetches ",(0,a.yg)("inlineCode",{parentName:"p"},"tenants"),", handling the loading state and error state."),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fallback"),": You can provide a custom fallback component to be displayed while the tenant is not available."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"loadingComponent"),": You can provide a custom loading component to be displayed while the tenant is loading.")))),(0,a.yg)("p",null,"When you mount ",(0,a.yg)("inlineCode",{parentName:"p"},"<RefineEnterprise />")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"<WithTenant />")," components and provide the ",(0,a.yg)("a",{parentName:"p",href:"/docs/enterprise-edition/multitenancy/"},(0,a.yg)("inlineCode",{parentName:"a"},"multitenancyProvider"))," prop, Refine will automatically extract the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," from the route and pass it to the data provider in the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { RefineEnterprise } from "@refinedev/enterprise";\nimport { useRouterAdapter, WithTenant } from "@refinedev/multitenancy";\n\n// ... other imports\n\nconst App = () => {\n  return (\n    <RefineEnterprise\n      // ... other props\n      multitenancyProvider={{\n        adapter: useRouterAdapter(),\n        fetchTenants: async () => {\n          const response = await dataProvider(API_URL).getList<ICategory>({\n            resource: "categories",\n            pagination: {\n              mode: "off",\n            },\n          });\n          const tenants = response.data;\n          const defaultTenant = tenants[0];\n\n          return {\n            tenants,\n            defaultTenant,\n          };\n        },\n      }}\n    >\n      <WithTenant\n        fallback={<div>Tenant not found</div>}\n        loadingComponent={<div>Loading...</div>}\n      >\n        {/* Your app code */}\n      </WithTenant>\n    </RefineEnterprise>\n  );\n};\n'))),(0,a.yg)("h3",{id:"2-configuring-multi-tenant-routes"},"2. Configuring Multi-tenant Routes"),(0,a.yg)(S,{id:"2-configuring-multi-tenant-routes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We'll be using routes to determine which tenant is being selected. Once we've setup our routes, ",(0,a.yg)("inlineCode",{parentName:"p"},"useRouterAdapter")," will automatically extract the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," from the route."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note: In the examples below, we are only showing the route definitions. You may need additional code to implement styling and layout depending on your choice of UI library. Regardless of the UI library you choose, the routing implementation will be similar to the examples below.")),(0,a.yg)(M,{wrapContent:!1,mdxType:"Tabs"},(0,a.yg)(D,{value:"React Router Dom",mdxType:"TabItem"},(0,a.yg)(i,{mdxType:"ReactRouterRouteDefinitions"})),(0,a.yg)(D,{value:"Next.js",mdxType:"TabItem"},(0,a.yg)(l,{mdxType:"NextjsRouteDefinitions"})),(0,a.yg)(D,{value:"Remix",mdxType:"TabItem"},(0,a.yg)(f,{mdxType:"RemixRouteDefinitions"})))),(0,a.yg)("h3",{id:"handling-multi-tenant-requests-in-data-providers"},"Handling Multi-tenant Requests in Data Providers"),(0,a.yg)(S,{id:"handling-multi-tenant-requests-in-data-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We'll be using the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," from the route to determine which tenant is being accessed. Refine will infer the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," from the current route and pass it to the data provider in ",(0,a.yg)("inlineCode",{parentName:"p"},"meta"),". You can access the ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object in your data provider and use it in your API calls."),(0,a.yg)("p",null,"To customize the data providers, you can override each method in the data provider instance or use the ",(0,a.yg)("a",{parentName:"p",href:"/docs/packages/cli/#swizzle"},(0,a.yg)("inlineCode",{parentName:"a"},"swizzle"))," command to be fully able to customize the data provider for your needs."),(0,a.yg)("p",null,"An example implementation of a custom ",(0,a.yg)("inlineCode",{parentName:"p"},"getList")," method is shown below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import dataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "<API_URL>";\nconst baseDataProvider = dataProvider(API_URL);\n\nconst customDataProvider = {\n  ...baseDataProvider,\n  getList: async ({ resource, filters = [], meta, ...props }) => {\n    const { tenantId } = meta;\n\n    // We\'re adding the tenantId to the filters\n    // Your API may have a different way of handling this\n    if (meta?.tenantId) {\n      filters.push({\n        field: "organization",\n        operator: "eq",\n        value: meta.tenantId,\n      });\n    }\n\n    // Call the base data provider\'s getList method with the updated filters\n    return baseDataProvider.getList({\n      resource,\n      filters,\n      meta,\n      ...props,\n    });\n  },\n};\n'))),(0,a.yg)("h3",{id:"adding-a-tenant-selector-to-the-ui"},"Adding a Tenant Selector to the UI"),(0,a.yg)(S,{id:"adding-a-tenant-selector-to-the-ui",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Now we've defined our routes and data providers to use ",(0,a.yg)("inlineCode",{parentName:"p"},"tenantId")," to determine which tenant is being accessed. We'll need to add a tenant selector to the UI to allow users to switch between tenants."),(0,a.yg)("p",null,"You can use the Tenant selector components from the ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/multitenancy")," package to easily add a tenant selector to your app."),(0,a.yg)(M,{wrapContent:!1,mdxType:"Tabs"},(0,a.yg)(D,{value:"Ant Design",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { TenantSelect } from "@refinedev/multitenancy/antd";\n\n<TenantSelect />;\n'))),(0,a.yg)(D,{value:"Material UI",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { TenantSelect } from "@refinedev/multitenancy/mui";\n\n<TenantSelect />;\n'))))),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)(S,{id:"examples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Here are some examples of multi-tenant apps built with ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/enterprise/"},"Refine Enterprise Edition"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://refine.dev/templates/multitenancy-strapi/"},"Multitenancy App with Strapi")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://multitenancy-isolated.netlify.app/"},"Isolated Multitenancy App with Rest API")))))}F.isMDXComponent=!0}}]);