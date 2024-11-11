"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71673],{58860:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>m});var n=o(37953);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=i,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},30066:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});o(37953);var n=o(58860);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const s={title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",slug:"low-code-tools",authors:"necati",tags:["Refine","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-19-low-code-vendor/social.png",hide_table_of_contents:!1,is_featured:!0},l=void 0,c={permalink:"/blog/low-code-tools",source:"@site/blog/2024-04-19-low-code-vendor.md",title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",date:"2024-04-19T00:00:00.000Z",formattedDate:"April 19, 2024",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.255,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",slug:"low-code-tools",authors:"necati",tags:["Refine","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-19-low-code-vendor/social.png",hide_table_of_contents:!1,is_featured:!0},prevItem:{title:"Introduction to Nest JS",permalink:"/blog/nest-js"},nextItem:{title:"Django REST Framework - How to use it to create APIs?",permalink:"/blog/django-rest-framework"},relatedPosts:[{title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",permalink:"/blog/bash-script-arguments",formattedDate:"February 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.27,date:"2024-02-22T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.78,date:"2022-07-21T00:00:00.000Z"},{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",permalink:"/blog/docker-swarm",formattedDate:"October 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-05T00:00:00.000Z"}],authorPosts:[{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",description:"We are very excited to announce that Refine has raised $1M in our first round led by 500 Istanbul.",permalink:"/blog/weve-raised-dollar1m-seed-funding",formattedDate:"June 10, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.74,date:"2022-06-10T00:00:00.000Z"},{title:"Refine Investment Announcement",description:"We're excited to share that Refine has successfully closed a $2.8M seed round.",permalink:"/blog/refine-investment-announcement",formattedDate:"May 6, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:1.32,date:"2024-05-06T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What are the low/no code tools",id:"what-are-the-lowno-code-tools",level:2},{value:"Understanding Vendor Lock-In Risk",id:"understanding-vendor-lock-in-risk",level:2},{value:"Shut down risk",id:"shut-down-risk",level:3},{value:"Citizen developer lock-in",id:"citizen-developer-lock-in",level:3},{value:"How to recognize if you&#39;re at risk?",id:"how-to-recognize-if-youre-at-risk",level:2},{value:"Lowering Risk Factors",id:"lowering-risk-factors",level:2},{value:"Alternatives and Solutions",id:"alternatives-and-solutions",level:2}],h={toc:p},u="wrapper";function m(e){var{components:t}=e,o=r(e,["components"]);return(0,n.yg)(u,a(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){i(e,t,o[t])}))}return e}({},h,o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Low code platforms have gain popularity for develop less complex applications by providing a visual, drag-and-drop interface with minimal coding."),(0,n.yg)("p",null,"While these tools promise rapid application development, they also come with limitations and risks that organizations need to be aware of. One of the most critical risks associated with low-code platforms is the potential for vendor lock-in."),(0,n.yg)("p",null,"This happens when a company relies too much on one vendor's products and services, making it too costly or complicated to switch to another provider. What's worse, if the low-code platform goes out of business, you're stuck without any support."),(0,n.yg)("p",null,'In this blog post, we\'re going to discuss a significant risk within the low-code tool ecosystem known as "vendor lock-in."'),(0,n.yg)("h2",{id:"what-are-the-lowno-code-tools"},"What are the low/no code tools"),(0,n.yg)("p",null,"Low code tools are software development platforms that enable people to create low complex applications through graphical user interfaces and configuration instead of traditional hand-coded programming. They allowing users to drag and drop application components, connect them together, and create a simple functional apps with minimal coding effort."),(0,n.yg)("p",null,'These tools are designed to simple app development, reduce the need for deep programming knowledge, and make software creation more accessible to non-developers or "citizen developers," as well as professionals looking to speed up their workflows.'),(0,n.yg)("h2",{id:"understanding-vendor-lock-in-risk"},"Understanding Vendor Lock-In Risk"),(0,n.yg)("p",null,"Vendor lock-in isn't a new dilemma, but it's become more complex with the popularity of low-code and no-code platforms. These platforms might initially appear cost-effective, offering a smooth path to low complex application development with their unique technology. However, this uniqueness can be a double-edged sword, making it difficult and costly for businesses to switch to another service if needs change or if the platform fails to meet expectations."),(0,n.yg)("p",null,"When organizations commit to a low code solution, they often invest not only financially but also in terms of time, data integration, and customized development tailored to the platform's unique environment."),(0,n.yg)("p",null,"These platforms have their own special way of doing things, using unique data setups or tools that don't play nice with other tech. If you ever want to switch to a different platform, it could mean a lot of extra work, training for their staff, and maybe even losing some functions they relied on."),(0,n.yg)("p",null,"The another catch is in their licensing and billing, which can tie you to ongoing payments as long as you use the software they helped create. This can add up quickly, making these tools far from cheap in the long run."),(0,n.yg)("p",null,"What starts as an easy solution can quickly turn into a dependency that's hard to break, requiring significant time and resources to switch to a different system or, worse, leaving businesses stranded if the platform shuts down. You may find your business dependent on a tool you can no longer afford or use effectively, leaving you in a bind. This is the trap of vendor lock-in: it starts with the convenience of easy app development but can end with your company being forced to stick with a vendor long after it's beneficial, simply because moving away would be too costly or complex."),(0,n.yg)("h3",{id:"shut-down-risk"},"Shut down risk"),(0,n.yg)("p",null,"Several low/no-code platforms have recently shut down. What happened the companies that were using these platforms?"),(0,n.yg)("p",null,"These platforms may tend to lock you into their ecosystem. The more you use and develop with them, the harder it becomes to switch to another option without significant effort and expense. This situation gets even riskier if the platform you're tied to decides to hike up prices, change features in a way that breaks your applications, or worse, as we mentioned before shut down entirely."),(0,n.yg)("p",null,"To avoid getting locked in, it's important to really look into what the platform offers, how it fits with other tech you use, and how easy it would be to move to something else later. Planning ahead and thinking about what you might need in the future can help make sure you don't end up stuck with a platform that limits your options later on."),(0,n.yg)("h3",{id:"citizen-developer-lock-in"},"Citizen developer lock-in"),(0,n.yg)("p",null,"This deep integration can lead to a scenario where moving away from the platform entails significant rework and retraining of staff."),(0,n.yg)("p",null,"When non-technical folks, or \"citizen developers,\" use low-code/no-code platforms to make apps, it's great for getting things done quickly. But there's a catch: these apps can get so tailor-made and complex that if the person who made them leaves, nobody else might know how to keep them running or update them. Plus, these platforms need some specific know-how to use right."),(0,n.yg)("p",null,"The more someone gets good at using one of these platforms, the more the organization relies on them \u2013 not just for their apps but also for their knowledge. So, if these citizen developers move on, or if the business needs to switch to a different platform, it could be a big headache because of how much they depended on that person's skills with the specific platform they were using."),(0,n.yg)("h2",{id:"how-to-recognize-if-youre-at-risk"},"How to recognize if you're at risk?"),(0,n.yg)("p",null,"Spotting the risk of getting stuck with a low-code platform starts with some clear signs."),(0,n.yg)("p",null,"First off, if you're boxed in by limited customization that forces you to stick to what the vendor offers, that's a red flag. It means you might not be able to adjust your app as your business needs change."),(0,n.yg)("p",null,"Another big warning sign is if you're dealing with a format for your data that only this vendor uses. It makes it really tough to take your data and go elsewhere without a lot of extra work and cost."),(0,n.yg)("p",null,"Also, watch out if the platform doesn't work well with other tech you're using. It can trap your tech setup, making it hard to switch without starting from scratch. When your citizen developer who's familiar with the low-code platform considers leaving, they might take their knowledge with them. This could leave you in the tough spot of finding and training someone new."),(0,n.yg)("p",null,"Be wary of complicated pricing or contracts that lock you in for a long time. Vendors might use high fees for leaving or make it expensive just to keep you from jumping ship."),(0,n.yg)("p",null,"Paying attention to these signs helps you pick a low-code platform wisely, keeping your options open and avoiding traps that lock you into one vendor."),(0,n.yg)("h2",{id:"lowering-risk-factors"},"Lowering Risk Factors"),(0,n.yg)("p",null,"To handle the problem of getting stuck with one low-code platform, companies need to plan carefully."),(0,n.yg)("p",null,"Before anything else, it's important to consider this: Am I planning to build a complex app, or do I just need something simpler or a prototype for now? If you need an enterprise-grade and complex app, you might want to think twice about using low-code tools."),(0,n.yg)("p",null,"Before choosing a platform, it's important to check how well it works with other tools, if you can easily move your data, and how flexible it is for building apps. Making sure you can keep control of your data and that the platform uses common data formats is also key."),(0,n.yg)("p",null,"Building your apps in pieces that can work on different platforms can help, too. Training your team to use a wide range of skills and technologies, not just the ones specific to the low-code platform, will make it easier to change platforms if needed. However, this raises a question: How many low-code platforms can I realistically train my developers on?"),(0,n.yg)("p",null,"Instead of investing in training for low-code tools, using meta-frameworks built on the frameworks developers are already familiar with to speed up the building process of complex enterprise apps could help avoid potential risks down the line."),(0,n.yg)("h2",{id:"alternatives-and-solutions"},"Alternatives and Solutions"),(0,n.yg)("p",null,"For businesses looking to avoid getting locked into a single vendor with low-code platforms, it's essential to look at other options."),(0,n.yg)("p",null,"A smart move is to consider open-source meta-frameworks that let you build customized and complex apps. This way, you can still get the rapid development that low-code offers but also have the flexibility and control that comes with traditional coding. Another benefit is that you don't have to train a new citizen developer every time and aren't forced to depend on them. This is because meta-frameworks are built on top of languages developers are already familiar with, making it quick and easy for them to start using them."),(0,n.yg)("p",null,"Open-source platforms have the backing of a developer community. This means they're more transparent, flexible, and open compared to closed, proprietary systems. Businesses can tweak these platforms to fit into their current setup without worrying about being stuck with one vendor or facing huge costs for making changes."),(0,n.yg)("p",null,"This approach lets businesses quickly make prototypes and less critical apps with low-code, while using open-source frameworks for major systems that need unique solutions or where there's a big risk of getting tied down to one vendor."))}m.isMDXComponent=!0}}]);