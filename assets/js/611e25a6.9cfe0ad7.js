"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7780],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>b});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,b=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return r?t.createElement(b,i(i({ref:n},d),{},{components:r})):t.createElement(b,i({ref:n},d))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30038:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});r(96540);var t=r(15680);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"breadcrumb",title:"Breadcrumb",swizzle:!0},s=void 0,p={unversionedId:"api-reference/antd/components/breadcrumb",id:"version-3.xx.xx/api-reference/antd/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Ant Design's Breadcrumb components using the useBreadcrumb` hook.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/breadcrumb.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/breadcrumb",permalink:"/docs/3.xx.xx/api-reference/antd/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/breadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Yash Patil",lastUpdatedAt:1713797015,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{id:"breadcrumb",title:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button"}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},m=l("DocThumbsUpDownFeedbackWidget"),b=l("PropsTable"),h={toc:u},y="wrapper";function g(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(y,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},h,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Ant Design's ",(0,t.yg)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," components using the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},(0,t.yg)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,t.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,t.yg)("strong",{parentName:"a"},"refine CLI")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb />}\n    >\n      <p>Content of your show page...</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nconst PostList = () => {\n  return (\n    <RefineAntd.List>\n      <p>Content of your list page...</p>\n    </RefineAntd.List>\n  );\n};\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts/show/123"]}\n    resources={[\n      {\n        name: "posts",\n        icon: (\n          <RefineAntd.Icons.ProfileOutlined\n            style={{ width: "18px", height: "18px" }}\n          />\n        ),\n        show: PostShow,\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"breadcrumbprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,t.yg)(m,{id:"breadcrumbprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Ant Design ",(0,t.yg)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," component so it can be configured with the ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,t.yg)("h3",{id:"showhome"},(0,t.yg)("inlineCode",{parentName:"h3"},"showHome")),(0,t.yg)(m,{id:"showhome",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If your application has a ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb showHome={false} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,t.yg)("h3",{id:"hideicons"},(0,t.yg)("inlineCode",{parentName:"h3"},"hideIcons")),(0,t.yg)(m,{id:"hideicons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb hideIcons />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(b,{module:"@pankod/refine-antd/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://ant.design/components/breadcrumb/#API)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://ant.design/components/breadcrumb/#Breadcrumb)",mdxType:"PropsTable"})))}g.isMDXComponent=!0}}]);