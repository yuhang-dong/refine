"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76589],{58860:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>u});var n=o(37953);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),g=a,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return o?n.createElement(u,r(r({ref:t},c),{},{components:o})):n.createElement(u,r({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},15602:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});o(37953);var n=o(58860);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",slug:"low-code",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/low-code",source:"@site/blog/2024-03-18-low-code-platforms.md",title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",date:"2024-03-18T00:00:00.000Z",formattedDate:"March 18, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.97,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",slug:"low-code",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a CRUD app with Shadcn UI and Refine",permalink:"/blog/shadcn-ui"},nextItem:{title:"JWT Authentication - What is JSON web token?",permalink:"/blog/jwt-authentication"},relatedPosts:[{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"},{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",permalink:"/blog/jwt-authentication",formattedDate:"March 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.77,date:"2024-03-11T00:00:00.000Z"},{title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",permalink:"/blog/playwright-react",formattedDate:"June 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:9.29,date:"2024-06-04T00:00:00.000Z"}],authorPosts:[{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"November 7, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.23,date:"2024-11-07T00:00:00.000Z"},{title:"refine Open Source Hackathon 2",description:"The second Refine Open Source Hackathon is an excellent opportunity for developers to showcase their skills, learn Refine and win prizes!",permalink:"/blog/refine-hackathon-2",formattedDate:"June 14, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.235,date:"2023-06-14T00:00:00.000Z"},{title:"An article guideline for Refine blog posts",description:"A guideline for writing articles",permalink:"/blog/article-guideline",formattedDate:"September 23, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.685,date:"2022-09-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"What is low code?",id:"what-is-low-code",level:2},{value:"When to use low code platforms?",id:"when-to-use-low-code-platforms",level:2},{value:"Most used Low Code Platforms in the Market",id:"most-used-low-code-platforms-in-the-market",level:2},{value:"Microsoft Powerapp",id:"microsoft-powerapp",level:3},{value:"Outsystems",id:"outsystems",level:3},{value:"Mendix",id:"mendix",level:3},{value:"Retool",id:"retool",level:3},{value:"Appian",id:"appian",level:3},{value:"What are the Limitation of low code platforms?",id:"what-are-the-limitation-of-low-code-platforms",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:m},g="wrapper";function u(e){var{components:t}=e,o=r(e,["components"]);return(0,n.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){a(e,t,o[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"what-is-low-code"},"What is low code?"),(0,n.yg)("p",null,"Low-code is a an approach to software creation designed to make the process quicker and easier by cutting down on the need for hand-coding. Instead of hand-coding code, users work within a visual interface, making use of drag-and-drop elements to bring their applications to life."),(0,n.yg)("p",null,"The Gartner has thrown a spotlight on the low-code sector, forecasting an impressive 25% growth that's set to push Low-code Application Platforms (LCAPs) to a market value of nearly $13 billion by the year 2025."),(0,n.yg)("p",null,'Low-code platforms open the doors of app development wide to those who might not have deep coding knowledge\u2014often referred to as "citizen developers." These can be anyone from project managers to business analysts who, despite lacking formal programming training, are now empowered to build app prototypes and simple apps. This democratization of app development allows professional IT teams to allocate their focus and resources on tackling more complex projects.'),(0,n.yg)("p",null,"In this article, we'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-low-code"},"What is low code?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#when-to-use-low-code-platforms"},"When to use low code platforms?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#most-used-low-code-platforms-in-the-market"},"Most used Low Code Platforms in the Market"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#microsoft-powerapp"},"Microsoft Powerapp")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#outsystems"},"Outsystems")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#appian"},"Appian")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#mendix"},"Mendix")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#retool"},"Retool")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-are-the-limitation-of-low-code-platforms"},"What are the Limitation of low code platforms?"))),(0,n.yg)("h2",{id:"when-to-use-low-code-platforms"},"When to use low code platforms?"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Fast Development for Simple Apps"),": Use low-code platforms when you want to quickly create and launch simple applications."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Prototyping:")," They're great for making early versions of products, known as prototypes or MVPs, to test ideas before fully committing to them."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Involving Non-Techies:")," These platforms allow people who don't know much about programming to take part in developing non-complex applications."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Working with Limited Resources:")," If you're short on experienced developers or budget, low-code platforms make it possible to build applications with what you have."),(0,n.yg)("p",null,"These are good when you need to develop small automation or integration tasks, and don't have any need for the whole ALM process. They fall over as soon as you try and take them to that next level, putting in processes around testing, source & change control, environment migrations, etc. are clunky at best, impossible with some systems."),(0,n.yg)("p",null,"Low-code platforms are pretty handy when you're in a rush to get an app off the ground, looking for temporary solution or when your developer team is thin on the ground."),(0,n.yg)("p",null,"Initially, they're super user-friendly, making them perfect for basic, no-complex tasks and app prototypes. But here's the rub: as your project starts to grow in complexity, the once helpful features of low-code tools can start to feel more like barriers."),(0,n.yg)("p",null,"For example, need a quick dashboard for a short-term project, or have a basic task that needs doing without pulling in your top devs? Low-code has got your back. But as soon as your needs start to get a bit more complicated, you may find yourself hitting a wall with these tools. The simplicity that makes these tools great for simple tasks ends up holding you back, making it hard to grow your project or add complicated features."),(0,n.yg)("p",null,"In short, low-code platforms are a bit of a mixed bag. They're brilliant for simple apps, temporary solutions, and prototyping, getting non-techies involved in app development, and launching simple projects rapidly. But when it comes to building something with a bit more depth you might find yourself wishing for the flexibility and control that only traditional coding can offer."),(0,n.yg)("h2",{id:"most-used-low-code-platforms-in-the-market"},"Most used Low Code Platforms in the Market"),(0,n.yg)("h3",{id:"microsoft-powerapp"},"Microsoft Powerapp"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/power-app.png",alt:"low code platforms"})),(0,n.yg)("p",null,"Part of Microsoft's Power Platform, which includes AI Builder, Dataverse, Power Automate, and Power Pages. Offers deep integration with Office 365, Dynamics 365, and other Microsoft services."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Deployment"),": Hosted by Microsoft. Uses Dataverse for data management, compatible with Dynamics SaaS, supporting both physical and virtual tables."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Application Logic"),': Features two main operation modes - "canvas apps" and "model-driven apps." Canvas apps use Power Fx, a formula language similar to Excel\'s, while model-driven apps rely on business process flows and Dataverse. Power Automate can automate processes for both.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Connectors"),": Offers over 1,000 connectors with various services and applications. Data policies help manage connector usage.")),(0,n.yg)("p",null,"Microsoft Power Apps stands out for its comprehensive integration within the Microsoft ecosystem, offering a wide range of connectors and advanced features like AI-assisted development, making it a robust choice for businesses deeply invested in Microsoft services."),(0,n.yg)("h3",{id:"outsystems"},"Outsystems"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/outsystems-2.png",alt:"low code platforms"})),(0,n.yg)("p",null,"It can be deployed as SaaS or on public cloud/on-premises. ODC is strictly an OutSystems-managed cloud service."),(0,n.yg)("p",null,"Provides web and desktop IDEs, AI-based development guidance, CI/CD pipelines, and infrastructure and security monitoring tools."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Features OutSystems UI for design consistency, integrated with Sketch, Figma, and Adobe XD, and offers a library of UI patterns and templates.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Mobile and Hybrid Apps"),": Supports Apache Cordova for mobile apps, with PWA options and plans to incorporate Ionic Capacitor for future solutions.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"AI-Assisted Development"),": Utilizes AI for data queries, application logic, and reducing production issues."))),(0,n.yg)("h3",{id:"mendix"},"Mendix"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/mendix.png",alt:"low code platforms"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Mendix LCAP"),": Offers SaaS, public, private, edge, and custom/on-premises deployments. It runs on platforms like AWS, Azure, IBM, and more."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Developer Tools"),": Studio Pro IDE caters to various developers with Mendix Assist for suggestions, and Mendix Atlas UI for UI development with reusable assets."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Cross-Platform Mobile Apps"),": Uses React Native for cross-platform native mobile apps supporting offline modes and includes AR/VR and 3D visualization."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Integration and Authentication"),": Supports OpenID-based SSO, OAuth2.0, SAML, and more. Mendix Connect allows integration with various data sources and APIs."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Event-Driven Architecture"),": Features a data broker based on Kafka for event-driven architectures, integrating with platforms like Solace.")),(0,n.yg)("h3",{id:"retool"},"Retool"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/retool-2.png",alt:"low code platforms"})),(0,n.yg)("p",null,"Offers a variety of products like Retool Mobile and Workflows. Available as Retool-hosted or self-hosted."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Design and Development"),": Lacks its own design system but supports front-end API architectures. Uses a web IDE for drag-and-drop app building with standard web technologies."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Integration and Collaboration"),": Integrates with Jira, Asana, and Basecamp for project management, and offers collaboration via Slack. Connects to databases and APIs through native connectors and supports chatbots via Twilio."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data Layer and Logic"),": Features the new Retool Database for testing, along with connectors for databases and APIs. Allows backend business logic development in Workflows, with the option to add custom code."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Governance and Identity Management"),": Implements development governance through permissions and Protected Applications, without generating editable code. Supports identity management with OAuth 2, Okta, and more.")),(0,n.yg)("h3",{id:"appian"},"Appian"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-18-low-code-platforms/appian-3.png",alt:"low code platforms"})),(0,n.yg)("p",null,"Offers various deployment, including managed cloud or customer-managed setups, and hybrid options."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Unified Data Fabric"),": Connects to various data sources in real-time, streamlining business data access."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"AI-assisted IDE"),": Simplifies app and workflow creation with a web-based environment, enabling point-and-click development without needing HTML, CSS, or JavaScript knowledge."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Appian Portals"),": Allows creation of public websites and Progressive Web Apps, supporting a microservices architecture for external user engagement."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Automation & Testing"),": Beyond low-code, offers RPA, IDP, and Process Mining."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Security & Compliance"),": Facilitates role-based permissions and single sign-on with SAML/OpenID, alongside multiple server configurations for authentication.")),(0,n.yg)("h2",{id:"what-are-the-limitation-of-low-code-platforms"},"What are the Limitation of low code platforms?"),(0,n.yg)("p",null,"Low-code platforms can speed up simple automation or integration tasks without needing advanced application lifecycle management (ALM). However, their ease of use falls short when projects require complex processes like testing, source control, and environment migration. Here are some limitations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Limited for Advanced Needs"),": While great for quick fixes or basic apps, low-code can become insufficient when projects expand in size and complexity. Trying to extend beyond their capabilities might force a complete rewrite and data migration for new features.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Ownership and Code Access"),": Transitioning to another development tool can be problematic, as some platforms retain control over the source code.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Dependency Dangers"),":"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Developer Lock-In"),": Custom functions or languages limit your choice of developers and make updates risky."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Vendor Lock-In"),": Relying on third-party tools poses risks if the vendor changes terms, increases prices, or discontinues service."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Citizen Developer Risks"),": Non-tech users might create inefficient applications that eventually need IT professionals, especially if they leave the company."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Cost Concerns"),": Ongoing subscriptions and licensing fees make low-code an expensive long-term commitment, especially with per-user pricing models.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Customization Limits"),": Users are limited to options offered in the low-code platform. Adapting to needs beyond the platform\u2019s design can be challenging, often requiring significant workarounds or external developer intervention.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Security Concerns"),": Security concerns and maintenance problems often emerge when developers begin to embed sensitive information, such as credentials, connection strings, or keys, directly into their applications.There's the risk that someone could sneak into parts of the app they shouldn't, due to weak points in how access is managed. Problems like injection attacks or shaky APIs are also big concerns.\nRelying too much on one company for your app's backbone can also be risky\u2014if they're slow to fix security holes, your app is left vulnerable. Speedy app creation is great, but it might mean security checks get skipped. Plus, making sure updates don't bring new problems, setting things up correctly from the get-go, and sticking to industry safety standards can be tough, especially for folks not deep into coding. T")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Coding not the hard part"),":\nThe biggest challenge in software development isn't the coding itself but understanding what needs to be done and handling complex scenarios. Low-code platforms simplify app creation but can't address the core complexities of programming. They allow basic app development without deep coding knowledge, yet this often leads to poorly designed, hard-to-maintain projects."))),(0,n.yg)("p",null,"The idea that anyone can build software with low-code tools overlooks the need for a solid grasp of software development principles. This approach risks creating inefficient, unreliable applications. Furthermore, the attraction of saving costs by hiring less experienced developers may lead to more issues down the line, as low-code platforms don't simplify the most challenging aspects of development: logic and complexity management."),(0,n.yg)("p",null,"In short, while low-code can kickstart app development, relying on it without understanding coding fundamentals can result in problematic software."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Low-code platforms are ideal for quick prototyping and involving non-technical users in app creation. However, as project complexity increases, the limitations of low-code platforms become apparent, often leading to challenges in scalability and customization."),(0,n.yg)("p",null,"Despite these challenges, low-code remains a useful tool for certain use cases, underscoring the importance of choosing the right approach based on project requirements. Ultimately, while low-code platforms offer a promising route for fast and accessible app development, they may not always be the best choice for more complex, long-term software projects."))}u.isMDXComponent=!0}}]);