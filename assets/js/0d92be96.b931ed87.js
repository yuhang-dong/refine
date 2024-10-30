"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28328],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Refine.new - Technical Architecture and Engineering Decisions Explored Part - 1",description:"We'll discuss the technical architecture, key-concepts, and engineering design decisions made during the development process of Refine.new.",slug:"refine-new-explored-part-1",authors:"batuhan",tags:["Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/social.png",is_featured:!0,hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/refine-new-explored-part-1",source:"@site/blog/2024-07-25-refine-new-part-1.md",title:"Refine.new - Technical Architecture and Engineering Decisions Explored Part - 1",description:"We'll discuss the technical architecture, key-concepts, and engineering design decisions made during the development process of Refine.new.",date:"2024-07-25T00:00:00.000Z",formattedDate:"July 25, 2024",tags:[{label:"Refine",permalink:"/blog/tags/refine"}],readingTime:10.795,hasTruncateMarker:!1,authors:[{name:"Batuhan \xd6zdemir",title:"Tech Lead at Refine",github:"https://github.com/BatuhanW",twitter:"https://twitter.com/kakamelatte",imageURL:"https://github.com/BatuhanW.png",key:"batuhan"}],frontMatter:{title:"Refine.new - Technical Architecture and Engineering Decisions Explored Part - 1",description:"We'll discuss the technical architecture, key-concepts, and engineering design decisions made during the development process of Refine.new.",slug:"refine-new-explored-part-1",authors:"batuhan",tags:["Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/social.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"git diff - Comparing Changes in Git",permalink:"/blog/git-diff-command"},nextItem:{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",permalink:"/blog/react-hook-form-vs-formik"},relatedPosts:[{title:"Refine Investment Announcement",description:"We're excited to share that Refine has successfully closed a $2.8M seed round.",permalink:"/blog/refine-investment-announcement",formattedDate:"May 6, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:1.32,date:"2024-05-06T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a Refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"August 9, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.655,date:"2024-08-09T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Refine.new?",id:"what-is-refinenew",level:2},{value:"What are the key features?",id:"what-are-the-key-features",level:2},{value:"Why we build Refine.new?",id:"why-we-build-refinenew",level:2},{value:"At this point, the create-refine-app comes into play",id:"at-this-point-the-create-refine-app-comes-into-play",level:3},{value:"Designing the Technical Architecture",id:"designing-the-technical-architecture",level:2},{value:"Generating boilerplate application based on user choices",id:"generating-boilerplate-application-based-on-user-choices",level:3},{value:"Rendering the Boilerplate Application in the Browser",id:"rendering-the-boilerplate-application-in-the-browser",level:3},{value:"Planning the User Flow",id:"planning-the-user-flow",level:3},{value:"User",id:"user",level:4},{value:"Backend",id:"backend",level:4},{value:"Refine.new",id:"refinenew",level:4},{value:"Implementation phase",id:"implementation-phase",level:2},{value:"Modify create-refine-app for NodeJS",id:"modify-create-refine-app-for-nodejs",level:3},{value:"CLI layer",id:"cli-layer",level:4},{value:"SAO package",id:"sao-package",level:4},{value:"Prepare lz-string",id:"prepare-lz-string",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},u="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(u,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Hi I'm Batuhan, Tech Lead @ Refine. Today we'll discuss the technical architecture, key-concepts, and engineering design decisions made during the development process of Refine.new. We'll provide insights for developers on the challenges we faced, the solutions we implemented, and the overall journey of building this tool."),(0,a.yg)("p",null,"This is the first of a two-part series. In part one, we will take time to share the planning and decision-making process involved in creating Refine.new as well as dealing with two big problems we identified. In part two, we get right into the detail of how these plans were brought to life in the implementation stage."),(0,a.yg)("h2",{id:"what-is-refinenew"},"What is Refine.new?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"http://refine.new"},"refine.new")," is a tool where you can generate ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/"},"Refine")," boilerplates on the browser with a combination of different libraries. You can instantly see the app preview in the browser, share it with others and download the source code."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("a",{href:"https://refine.new/"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/refine-new..gif",alt:"refine new"}))),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-are-the-key-features"},"What are the key features?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-we-build-refinenew"},"Why we build Refine.new?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#designing-the-technical-architecture"},"Designing the Technical Architecture")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#implementation-phase"},"Implementation phase"))),(0,a.yg)("h2",{id:"what-are-the-key-features"},"What are the key features?"),(0,a.yg)("p",null,"Before diving into the details, let's quickly highlight some of the key features that make Refine.new a powerful tool for developers."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Streamlined Library Integration")),(0,a.yg)("p",null,"You can mix and match different frameworks, libraries with your Refine applications."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"React platform (",(0,a.yg)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite.js"),", ",(0,a.yg)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")," or ",(0,a.yg)("a",{parentName:"li",href:"https://remix.run/"},"Remix"),"),"),(0,a.yg)("li",{parentName:"ul"},"UI framework ( ",(0,a.yg)("a",{parentName:"li",href:"https://ant.design/"},"Ant Design"),", ",(0,a.yg)("a",{parentName:"li",href:"https://mui.com/material-ui/getting-started/overview/"},"Material UI"),", ",(0,a.yg)("a",{parentName:"li",href:"https://mantine.dev/"},"Mantine"),", and ",(0,a.yg)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI"),", or headless UI option),"),(0,a.yg)("li",{parentName:"ul"},"Data Provider (REST API, ",(0,a.yg)("a",{parentName:"li",href:"https://supabase.com/"},"Supabase"),", ",(0,a.yg)("a",{parentName:"li",href:"https://strapi.io/"},"Strapi"),", ",(0,a.yg)("a",{parentName:"li",href:"https://nestjs.com/"},"NestJs"),", ",(0,a.yg)("a",{parentName:"li",href:"https://appwrite.io/"},"Appwrite"),", or ",(0,a.yg)("a",{parentName:"li",href:"https://www.airtable.com/"},"Airtable"),"),"),(0,a.yg)("li",{parentName:"ul"},"Authentication provider (Google Auth, Keycloak, Auth0, Supabase, Appwrite, Strapi, custom auth).")),(0,a.yg)("p",null,"Considering the build step options provided by refine.new, there are numerous possible project variations. With three React platforms, 5 UI frameworks, 6 data providers, and 8 authentication providers to choose from, you can create 720 different combinations, each tailored to your specific project needs."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Account-Based Boilerplate Management")),(0,a.yg)("p",null,"You can also save these boilerplates into your account to be downloaded in the future."),(0,a.yg)("p",null,"You can download the complete project code and use as a starting point for your project."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Continuous Updates and Maintenance")),(0,a.yg)("p",null,"Stay up to date. The next time you download your boilerplate, it will include the latest Refine updates. This means you can create a boilerplate with your favorite libraries once and download it in the future with updated versions."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Batteries loaded")),(0,a.yg)("p",null,"The generated application comes with a fully working Authentication, Dashboard and CRUD pages."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Quickly share previews")),(0,a.yg)("p",null,"You can easily share URLs of your boilerplates with your library combinations."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Configure in the browser")),(0,a.yg)("p",null,"You can change the theme color, logo and preview the app in real-time."),(0,a.yg)("p",null,"At the time of this post being written, 30.000+ users created more than 110.000 boilerplates using Refine.new."),(0,a.yg)("h2",{id:"why-we-build-refinenew"},"Why we build Refine.new?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," is an open-source React meta-framework designed to create CRUD-centric web applications. We\u2019ve started Refine because we wanted to have a framework that we can deliver high quality apps without compromising the flexibility. We didn\u2019t like being vendor locked to a certain UI library, react framework, any authentication or data layer."),(0,a.yg)("p",null,"Due to Refine\u2019s flexible nature, there are thousands different ways you can use Refine by mixing and matching different libraries with different UI, Data, Auth layers."),(0,a.yg)("p",null,"Starting a greenfield project is fun, but it\u2019s also stressful. The decisions you are making in the beginning, could either simplify people\u2019s lives or make them suffer for years to come. For this reason, It\u2019s a good practice to evaluate different ideas, build POCs and make the decision based on these examples. Going through this process avoid bike-shedding and allows you to make better, more based decisions."),(0,a.yg)("p",null,"If you already made your decisions and start a new project is also tedious thing to do. You need to do things repetitively over and over again. Install packages, do some imports, make some config etc.. For this reason, almost every framework has their generator to speed up this process."),(0,a.yg)("p",null,"But that doesn\u2019t solve the entire problem. Starter project for the frameworks includes bare-minimum code. Then you would need to setup your frameworks, libraries manually again."),(0,a.yg)("h3",{id:"at-this-point-the-create-refine-app-comes-into-play"},"At this point, the create-refine-app comes into play"),(0,a.yg)("p",null,"With ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app"),", we simplified this process by making it possible for Refine users to not only start a bare project, but also a way to generate a project with various libraries and frameworks already set-up. We believe it\u2019s a good DX improvement. You spend time on actually building features you need, instead of setting up things."),(0,a.yg)("p",null,"You can try the command like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm create refine-app@latest\n")),(0,a.yg)("br",null),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/cli.gif",alt:"refine new"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"We also provide an option ",(0,a.yg)("inlineCode",{parentName:"p"},"Install example pages")," which adds Blog Posts and Categories CRUD pages to your application. These create, list, edit pages are consist of tables, cards and forms. Including common components like tables, pagination, navigation buttons, forms saves even more time, and only add your customizations on top."),(0,a.yg)("p",null,"While ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," makes it quicker to generate Refine applications, there are more than 700+ combinations that you can try. Setting up an app, installing packages, running them locally could be tedious, if you want to explore many different options."),(0,a.yg)("p",null,"On top of that, it\u2019s not easy to show these apps to your colleagues as you play around. We wanted to provide a way for our users to easily share previews online, without a deployment steps."),(0,a.yg)("p",null,"Being sweet spot between low-code and full-code, we are aiming to make it easier for developers to build applications, without sacrificing flexibility or limiting their options."),(0,a.yg)("p",null,"So, speed-running the tedious application creation process in the browser sounds like a perfect idea for us. At the end of the day, you still have the code to add, remove, or change as you wish, but a big part is already set up. With create-refine-app simplifying project setup, developers can focus more on building features."),(0,a.yg)("p",null,"Now, let's dive into the technical architecture of Refine.new, exploring the design choices and solutions that made it possible."),(0,a.yg)("h2",{id:"designing-the-technical-architecture"},"Designing the Technical Architecture"),(0,a.yg)("p",null,"Once the requirements were clear, we identified two critical features:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Generating boilerplates in the backend."),"\n",(0,a.yg)("strong",{parentName:"p"},"2. Rendering the app in the browser.")),(0,a.yg)("p",null,"These features would enable us to build the rest of the project. We needed a backend to orchestrate processes and a frontend to handle user choices and communication with the backend. Then, we would optimize performance and cloud usage to ensure scalability before delivering the final product."),(0,a.yg)("h3",{id:"generating-boilerplate-application-based-on-user-choices"},"Generating boilerplate application based on user choices"),(0,a.yg)("p",null,"To streamline the process of generating boilerplate applications, we decided to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," and its templates, allowing us to reuse most of the business logic and templates without maintaining additional repositories."),(0,a.yg)("p",null,"However, adapting the CLI tool to work with a NodeJS backend and keeping the backend in sync with the git repository templates created some challenges:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"CLI Tool Adaptation:")," Since ",(0,a.yg)("inlineCode",{parentName:"li"},"create-refine-app")," was originally built as a CLI tool, it required modifications to work with a NodeJS backend."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Template Synchronization:")," We use a git repository for templates, so the backend must stay updated with these templates to keep everything consistent.")),(0,a.yg)("p",null,"We will detail the solutions to these challenges in the following sections."),(0,a.yg)("h3",{id:"rendering-the-boilerplate-application-in-the-browser"},"Rendering the Boilerplate Application in the Browser"),(0,a.yg)("p",null,"To be able to render boilerplates in the browser, we decided to use our existing solution: Live Previews ",(0,a.yg)("a",{parentName:"p",href:"https://previews.refine.dev"},"https://previews.refine.dev"),"."),(0,a.yg)("p",null,"We are already using live-previews in our documentation to render simple examples.Live previews application accepts encoded ",(0,a.yg)("inlineCode",{parentName:"p"},"lz-string"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"https://previews.refine.dev/preview?code={lz string encoded code here}")),(0,a.yg)("p",null,"And then decodes it, renders using ",(0,a.yg)("inlineCode",{parentName:"p"},"react-live")," package."),(0,a.yg)("p",null,"While we can use live previews for that, it had several challenges:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Adapting the setup to render entire applications, which we hadn't done before."),(0,a.yg)("li",{parentName:"ul"},"Ensuring the previews are responsive, fast, and reflect user changes in real-time."),(0,a.yg)("li",{parentName:"ul"},"Bundling all application TypeScript and CSS files into a single JS file."),(0,a.yg)("li",{parentName:"ul"},"Avoiding duplicate imports and exports."),(0,a.yg)("li",{parentName:"ul"},"Handling the potential length of the encoded strings."),(0,a.yg)("li",{parentName:"ul"},"Rendering NextJS and Remix applications end-to-end."),(0,a.yg)("li",{parentName:"ul"},"Managing OAuth logins.")),(0,a.yg)("h3",{id:"planning-the-user-flow"},"Planning the User Flow"),(0,a.yg)("p",null,"After identifying the solutions and addressing the challenges, the next step was to create a simple, happy-path user flow:"),(0,a.yg)("p",null,"We designed this initial flow in three parts:"),(0,a.yg)("h4",{id:"user"},"User"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Navigates to ",(0,a.yg)("a",{parentName:"li",href:"http://refine.new/"},"Refine.new"),"."),(0,a.yg)("li",{parentName:"ol"},"Selects libraries (Platform, UI Library, Data Provider, Auth Provider)")),(0,a.yg)("h4",{id:"backend"},"Backend"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Generates boilerplate files using ",(0,a.yg)("inlineCode",{parentName:"li"},"create-refine-app")," and it\u2019s templates."),(0,a.yg)("li",{parentName:"ol"},"ZIPs the files and uploads them to a bucket."),(0,a.yg)("li",{parentName:"ol"},"Compiles application source code into a single file."),(0,a.yg)("li",{parentName:"ol"},"Encodes the file content with ",(0,a.yg)("inlineCode",{parentName:"li"},"lz-string"),"."),(0,a.yg)("li",{parentName:"ol"},"Stores ",(0,a.yg)("inlineCode",{parentName:"li"},"downloadURL")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"previewString"),".")),(0,a.yg)("h4",{id:"refinenew"},"Refine.new"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Shows a button to download boilerplate using ",(0,a.yg)("inlineCode",{parentName:"li"},"downloadURL")),(0,a.yg)("li",{parentName:"ol"},"Uses ",(0,a.yg)("a",{parentName:"li",href:"http://live-previews.refine.dev"},(0,a.yg)("inlineCode",{parentName:"a"},"live-previews.refine.dev"))," in an iFrame to render preview.")),(0,a.yg)("p",null,"We can represent this flow in a diagram as follows:"),(0,a.yg)("br",null),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/user-flow.png",alt:"refine new user flow"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Having this flow decided allowed us to start planning the implementation. While this was a basic flow without much details, doing this would allow us to build additional features, improvements around it."),(0,a.yg)("p",null,"Next, let's move into the implementation phase, starting with modifying the create-refine-app for NodeJS."),(0,a.yg)("h2",{id:"implementation-phase"},"Implementation phase"),(0,a.yg)("h3",{id:"modify-create-refine-app-for-nodejs"},"Modify create-refine-app for NodeJS"),(0,a.yg)("p",null,"As mentioned earlier, we wanted to reuse ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app"),". Since we are already maintaining this project and it\u2019s templates, our updates would be useful for both create-refine app and also refine.new"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," has 2 main parts."),(0,a.yg)("br",null),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-07-25-refine-new-part-1/create-refine.png",alt:"cli flow"})),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"cli-layer"},"CLI layer"),(0,a.yg)("p",null,"It\u2019s responsible for asking initial questions like project name and also can modify SAO variables, which git repository to get templates, which git branch, having presets and passing them to SAO."),(0,a.yg)("h4",{id:"sao-package"},"SAO package"),(0,a.yg)("p",null,"It takes care of prompting additional, template specific questions to user from provided templates, providing answers as variables to the templates, generating the files, doing package installation and so on."),(0,a.yg)("p",null,"Eventually, after Commander starts the flow, it initializes a SAO instance."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const sao = new SAO({\n  generator,\n  outDir: process.cwd(),\n  logLevel: program.debug ? 4 : 1,\n  appName: appName,\n  answers: hasAnswers,\n  extras: {\n    debug: !!program.debug,\n    commitMessage: process.env.INITIAL_COMMIT_MESSAGE,\n    disableTelemetry: !!program.disableTelemetry,\n    projectType,\n    paths: {\n      sourcePath,\n    },\n    presetAnswers,\n  },\n} as Options);\n\nawait sao.run().catch((err) => {\n  // ...\n});\n")),(0,a.yg)("p",null,"We had to do some modifications to the SAO logic to make it compatible with API."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Skip additional prompts: API will already provide all required answers."),(0,a.yg)("li",{parentName:"ul"},"Disable debug mode."),(0,a.yg)("li",{parentName:"ul"},"Disable optional telemetry by default: It will be ran by our backend."),(0,a.yg)("li",{parentName:"ul"},"Skip post installation: No need to install dependencies and commit the files.")),(0,a.yg)("p",null,"So we\u2019ve added an extra prop to ",(0,a.yg)("inlineCode",{parentName:"p"},"extras")," field called ",(0,a.yg)("inlineCode",{parentName:"p"},"apiMode"),". Passing it true would take care of these changes in SAOFile."),(0,a.yg)("p",null,"Eventually, our ",(0,a.yg)("inlineCode",{parentName:"p"},"api.ts")," looked like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export interface IPreset {\n  name: string;\n  type: string;\n  answers: Record<string, string>;\n}\n\nconst generator = path.resolve(__dirname, "./");\n\nexport const api = async (\n  applicationName: string,\n  outDir: string,\n  sourcePath: string,\n  preset: IPreset, // Instead of getting from Commander, NodeJS sends these params.\n): Promise<void> => {\n  const sao = new SAO({\n    generator,\n    outDir,\n    logLevel: 1,\n    appName: applicationName,\n    answers: true,\n    extras: {\n      apiMode: true,\n      debug: false,\n      projectType: preset.type,\n      paths: {\n        sourcePath,\n      },\n      presetAnswers: preset.answers,\n    },\n  } as Options);\n\n  await sao.run().catch((err) => {\n    console.error("Error happened", err);\n  });\n};\n')),(0,a.yg)("h3",{id:"prepare-lz-string"},"Prepare lz-string"),(0,a.yg)("p",null,"Now we can create boilerplate files, next thing was to generate what we call ",(0,a.yg)("inlineCode",{parentName:"p"},"previewString"),"."),(0,a.yg)("p",null,"For that, we used ",(0,a.yg)("inlineCode",{parentName:"p"},"rollup")," with some additional plugins. Rollup allows us to bundle the project into a single file. Additionally, we used ",(0,a.yg)("inlineCode",{parentName:"p"},"rollup-plugin-import-css"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"rollup-plugin-tsconfig-paths"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"@rollup/plugin-node-resolve"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"@rollup/plugin-sucrase")," . These plugins allowed us to bundle app and eventually."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function bundleBoilerplate(boilerplate: Boilerplate) {\n  const bundle = await rollup({\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    onwarn: () => {}, // Skip bloated logs.\n    input: inputPath,\n    maxParallelFileOps: 1, // Single thread.\n    treeshake: false,\n    cache: false,\n    perf: false,\n    plugins: [\n      css(),\n      tsConfigPaths({\n        tsConfigPath: `tmp/boilerplates/${boilerplate.id}/${boilerplate.projectName}/tsconfig.json`,\n      }),\n      resolve({\n        extensions: [".ts", ".tsx"],\n      }),\n      sucrase({\n        exclude: ["**/*.css"],\n        transforms: ["typescript", "jsx"],\n      }),\n    ],\n    external: ["axios", "./reportWebVitals"],\n  });\n\n  const { output } = await bundle.generate({});\n\n  await bundle.close();\n\n  const codeOutputRaw = output[0].code;\n\n  const codeOutputArr = codeOutputRaw.split("\\n");\n\n  codeOutputArr.push("render(<App />)");\n\n  const codeOutput = codeOutputArr.join("\\n");\n\n  const compressedString = compressToEncodedURIComponent(codeOutput);\n\n  return compressedString;\n}\n')),(0,a.yg)("p",null,"Finally, we used ",(0,a.yg)("inlineCode",{parentName:"p"},"lz-string"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"compressToEncodedURIComponent")," function to encode the file into a URL compatible string to pass to our preview."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this part of the series, we explored the technical architecture and engineering decisions behind Refine.new. . We covered the process of generating boilerplate applications with ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," and the challenges of adapting it for NodeJS."),(0,a.yg)("p",null,"We also detailed rendering live previews in the browser using ",(0,a.yg)("inlineCode",{parentName:"p"},"react-live")," and addressed the associated challenges. Lastly, we outlined the initial user flow and began the implementation phase, including modifications to ",(0,a.yg)("inlineCode",{parentName:"p"},"create-refine-app")," and generating the ",(0,a.yg)("inlineCode",{parentName:"p"},"previewString"),"."),(0,a.yg)("p",null,"These steps provide a comprehensive overview of how Refine.new was designed and implemented to streamline the development process for developers."),(0,a.yg)("p",null,"In the second article of this series, we will delve into the back-end components, exploring the following topics:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Orchestrating the backend processes"),(0,a.yg)("li",{parentName:"ul"},"Handling user choices and communication with the backend"),(0,a.yg)("li",{parentName:"ul"},"Optimizing performance and cloud usage for scalability"),(0,a.yg)("li",{parentName:"ul"},"Implementing the backend architecture and addressing challenges")))}h.isMDXComponent=!0}}]);