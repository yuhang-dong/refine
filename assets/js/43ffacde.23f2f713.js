"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16005],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>h});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18976:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});t(96540);var n=t(15680);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"Breadcrumb",swizzle:!0},p=void 0,s={unversionedId:"ui-integrations/chakra-ui/components/breadcrumb/index",id:"ui-integrations/chakra-ui/components/breadcrumb/index",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component was built with the Chakra UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/ui-integrations/chakra-ui/components/breadcrumb/index.md",sourceDirName:"ui-integrations/chakra-ui/components/breadcrumb",slug:"/ui-integrations/chakra-ui/components/breadcrumb/",permalink:"/docs/ui-integrations/chakra-ui/components/breadcrumb/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/breadcrumb/index.md",tags:[],version:"current",lastUpdatedBy:"Yash Patil",lastUpdatedAt:1713797015,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{title:"Breadcrumb",swizzle:!0},sidebar:"mainSidebar",previous:{title:"<AuthPage />",permalink:"/docs/ui-integrations/chakra-ui/components/auth-page/"},next:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/chakra-ui/components/auto-save-indicator/"}},u={},d=[{value:"Properties",id:"properties",level:2},{value:"breadcrumbProps",id:"breadcrumbprops",level:3},{value:"showHome",id:"showhome",level:3},{value:"meta",id:"meta",level:3},{value:"hideIcons",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},m=l("DocThumbsUpDownFeedbackWidget"),h=l("PropsTable"),g={toc:d},b="wrapper";function y(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(b,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},g,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,n.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component was built with the Chakra UI ",(0,n.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," components using the ",(0,n.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-breadcrumb"},(0,n.yg)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,n.yg)("admonition",{title:"Good to know",type:"simple"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can swizzle this component with the ",(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,n.yg)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In the earlier versions of Refine, ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,n.yg)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,n.yg)("inlineCode",{parentName:"p"},"routerProvider")," API of Refine, ",(0,n.yg)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually with your router package.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In earlier versions, the home icon in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,n.yg)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,n.yg)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,n.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),".")))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"breadcrumbprops"},"breadcrumbProps"),(0,n.yg)(m,{id:"breadcrumbprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Chakra UI ",(0,n.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/breadcrumb/usage"},"Breadcrumb")," component so it can be configured with the ",(0,n.yg)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,n.yg)("h3",{id:"showhome"},"showHome"),(0,n.yg)(m,{id:"showhome",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you have a page with route ",(0,n.yg)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,n.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"false.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb showHome={true} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,n.yg)("h3",{id:"meta"},"meta"),(0,n.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,n.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,n.yg)("h3",{id:"hideicons"},"hideIcons"),(0,n.yg)(m,{id:"hideicons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,n.yg)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/chakra-ui";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-next-line\n      breadcrumb={<Breadcrumb hideIcons />}\n    >\n      ...\n    </List>\n  );\n};\n'))),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties-1"},"Properties"),(0,n.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(h,{module:"@refinedev/chakra-ui/Breadcrumb",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);