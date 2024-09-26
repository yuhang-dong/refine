"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37959],{58860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:16.78,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"January 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:11.35,date:"2024-01-25T00:00:00.000Z"},{title:"Migrating a React-Admin Application to Refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to Refine to battle test our new framework and improve our productivity.",permalink:"/blog/migrating-a-react-admin-application-to-refine",formattedDate:"October 6, 2021",authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/umutzd",imageURL:"https://avatars.githubusercontent.com/u/22444985?v=4",key:"umut"}],readingTime:5.315,date:"2021-10-06T00:00:00.000Z"},{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.205,date:"2023-02-19T00:00:00.000Z"}],authorPosts:[{title:"Announcing the Refine Open Source Hackathon 2 Winners",description:"We're thrilled to announce the winners of the Refine Open Source Hackathon 2!",permalink:"/blog/refine-hackathon-2-winners",formattedDate:"August 4, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.005,date:"2023-08-04T00:00:00.000Z"},{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",permalink:"/blog/low-code",formattedDate:"March 18, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:8.97,date:"2024-03-18T00:00:00.000Z"},{title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",permalink:"/blog/react-useid",formattedDate:"May 14, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.41,date:"2024-05-14T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],u={toc:m},d="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,i.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,i.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,i.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,i.yg)("p",{parentName:"admonition"},"You should know that ",(0,i.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,i.yg)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"We will build an ",(0,i.yg)("strong",{parentName:"p"},"admin panel")," that supports ",(0,i.yg)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,i.yg)("strong",{parentName:"p"},"authentication"),", and a ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode")," feature using industry-standard best tools."),(0,i.yg)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including ",(0,i.yg)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,i.yg)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/"},"Refine")," to build a high-quality admin panel."))}g.isMDXComponent=!0}}]);