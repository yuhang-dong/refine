"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94316],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(37953);var n=r(58860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and Refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","tutorial","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social-2.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/next-js-pwa",source:"@site/blog/2024-06-25-next-refine-pwa.md",title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and Refine framework, from start to finish!",date:"2024-06-25T00:00:00.000Z",formattedDate:"June 25, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"Refine",permalink:"/blog/tags/refine"}],readingTime:23.09,hasTruncateMarker:!0,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and Refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","tutorial","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works"},nextItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},relatedPosts:[{title:"Building a React Admin Dashboard with Refine",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.59,date:"2023-04-06T00:00:00.000Z"},{title:"Announcing the Release of Refine v4!",description:"This release includes several new features that are designed to enhance the developer experience.",permalink:"/blog/refine-v4-announcement",formattedDate:"March 13, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.575,date:"2023-03-13T00:00:00.000Z"},{title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",permalink:"/blog/refine-pixels-1",formattedDate:"February 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.66,date:"2023-02-14T00:00:00.000Z"}],authorPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"December 24, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:23.51,date:"2024-12-24T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"December 20, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:26.34,date:"2024-12-20T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:19.94,date:"2022-09-27T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],d={toc:u},m="wrapper";function g(e){var{components:t}=e,r=o(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"This article was last updated on Jun 25, 2024, to add new SEO considerations, accessibility, and configuring Service Worker for Next PWA apps")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Building a complex site requires a one-size-fits-all framework that not only simplifies the complexity but also integrates seamlessly with other build tools on a whim."),(0,n.yg)("p",null,"Over the years, frameworks and libraries such as React have been the go-to packages for building complex and large applications, even in the face of their susceptible nature to tiresome caveats."),(0,n.yg)("p",null,"Fast forward to today, there are several frameworks and libraries in the picture, and they all promise to do a better job than their predecessors. However, many still don't meet the flexibility mark, except for a handful of them."),(0,n.yg)("p",null,"In this article, we'll look at what Refine is and demonstrate how to use it to build a ",(0,n.yg)("strong",{parentName:"p"},"Next.js PWA")," storefront application."))}g.isMDXComponent=!0}}]);