"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70860],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=i,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>g});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"A Complete Human Resources (HR) App Built with Refine",description:"The Refine HR App showcases how to build efficient, enterprise-grade HR management solutions using Refine.js and modern technologies.",slug:"human-resources-application",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/human-resources-application",source:"@site/blog/2024-11-21-hr-app .md",title:"A Complete Human Resources (HR) App Built with Refine",description:"The Refine HR App showcases how to build efficient, enterprise-grade HR management solutions using Refine.js and modern technologies.",date:"2024-11-21T00:00:00.000Z",formattedDate:"November 21, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:2.9,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"A Complete Human Resources (HR) App Built with Refine",description:"The Refine HR App showcases how to build efficient, enterprise-grade HR management solutions using Refine.js and modern technologies.",slug:"human-resources-application",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/social.png",hide_table_of_contents:!1},prevItem:{title:"Zsh and Bash",permalink:"/blog/zsh-vs-bash"},nextItem:{title:"esbuild - Next-generation JavaScript bundler",permalink:"/blog/what-is-esbuild"},relatedPosts:[{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",permalink:"/blog/how-react-fragments-is-works",formattedDate:"June 26, 2024",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:9.085,date:"2024-06-26T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"July 10, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.835,date:"2024-07-10T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a Refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"August 9, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.655,date:"2024-08-09T00:00:00.000Z"}],authorPosts:[{title:"Top Front-End Frameworks in 2024 Worth Your Time and Effort to Master",description:"We'll talk about five frameworks \u2013 React, Refine, Angular, Svelte, and Vue. Each of these has its cool stuff to offer, making them worth the time to learn.",permalink:"/blog/best-front-end-frameworks-in-2024",formattedDate:"September 16, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:12.635,date:"2024-09-16T00:00:00.000Z"},{title:"What is Headless CMS?",description:"We'll check out what a headless CMS is and its benefits.",permalink:"/blog/headless-cms",formattedDate:"May 10, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.4,date:"2024-05-10T00:00:00.000Z"},{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"November 7, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.23,date:"2024-11-07T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features of the HR App",id:"key-features-of-the-hr-app",level:2},{value:"Login and User Selection",id:"login-and-user-selection",level:3},{value:"Overview Dashboard",id:"overview-dashboard",level:3},{value:"Time-Off Request Management",id:"time-off-request-management",level:3},{value:"Polls",id:"polls",level:3},{value:"Settings for Manager Role",id:"settings-for-manager-role",level:3},{value:"Calendar",id:"calendar",level:3},{value:"Organizational Directory",id:"organizational-directory",level:3},{value:"Expense Management",id:"expense-management",level:3},{value:"Asset Management",id:"asset-management",level:3},{value:"Employee Directory",id:"employee-directory",level:3},{value:"Technologies Used in RefineHR App",id:"technologies-used-in-refinehr-app",level:2},{value:"Suitable for Internal HR Tool-Oriented Needs",id:"suitable-for-internal-hr-tool-oriented-needs",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:g},u="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(u,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This article introduces the HR app, a powerful example of how modern technologies can simplify and streamline HR processes. Designed to meet enterprise-level needs, the app showcases how quickly and efficiently complex applications can be built using Refine."),(0,a.yg)("p",null,"While not a standalone product, this template serves as both a learning resource and an inspiration for creating your own HR solutions. The HR app enables businesses to manage employee data, track expenses, and maintain an organizational directory with ease, offering tailored features for both employees and managers."),(0,a.yg)("p",null,"\ud83d\udc49 ",(0,a.yg)("a",{parentName:"p",href:"https://hr.refine.dev/overview"},"Live Demo")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note"),": The source code for this template is exclusively available to Refine enterprise users. However, you can still explore Refine\u2019s capabilities through our ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/templates/"},"other complete app examples")," and documentation to build similar functionality for your projects."),(0,a.yg)("h2",{id:"key-features-of-the-hr-app"},"Key Features of the HR App"),(0,a.yg)("h3",{id:"login-and-user-selection"},"Login and User Selection"),(0,a.yg)("p",null,"The Login and User Selection feature ensures secure access and tailored experiences for different roles:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Employees"),": Access tools like leave balances, time-off requests, and polls."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Managers"),": Access dashboards with expense approvals, asset management, and employee oversight.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/login.png",alt:"Login"})),(0,a.yg)("p",null,"This role-based approach organizes the app and improve user productivity."),(0,a.yg)("h3",{id:"overview-dashboard"},"Overview Dashboard"),(0,a.yg)("p",null,"The Overview Dashboard provides a snapshot of essential HR data, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Leave Balances"),": Displays annual, sick, and casual leave usage."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Awaiting Requests"),": Highlights pending approvals for expenses and time off."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Polls"),": Employees can vote on workplace policies."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Time Offs"),": View upcoming and current time-off entries."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Celebrations"),": Displays anniversaries and welcomes for new hires.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/overview-manager.png",alt:"Manager"}),"\n",(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/overview-employee.png",alt:"Employee"})),(0,a.yg)("h3",{id:"time-off-request-management"},"Time-Off Request Management"),(0,a.yg)("p",null,"Employees can submit time-off requests with notes and dates. Managers can assign or review leave requests, ensuring accurate tracking."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/employee-timeoff.png",alt:"Employee"}),"\n",(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/manager-timeoff.png",alt:"Manager"})),(0,a.yg)("h3",{id:"polls"},"Polls"),(0,a.yg)("p",null,"Managers create and manage polls, collecting feedback on benefits and policies. Poll results are displayed in real-time, allowing informed decision-making."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/pools.png",alt:"Polls"})),(0,a.yg)("h3",{id:"settings-for-manager-role"},"Settings for Manager Role"),(0,a.yg)("p",null,"Managers can customize various HR aspects:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Expense Types"),": Define categories like Travel, Meals, and Training."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Policy Customization"),": Configure time-off policies, assets, and custom fields.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/settings.gif",alt:"Settings"})),(0,a.yg)("h3",{id:"calendar"},"Calendar"),(0,a.yg)("p",null,"The monthly calendar view tracks employee leaves, helping managers balance workloads effectively."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/calendar.png",alt:"Calendar"})),(0,a.yg)("h3",{id:"organizational-directory"},"Organizational Directory"),(0,a.yg)("p",null,"A visual org chart displays the company\u2019s structure with features like:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Edit Employee"),": Update department or title."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Add Department"),": Create new departments with clear hierarchies.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/organizational.gif",alt:"Org Chart"})),(0,a.yg)("h3",{id:"expense-management"},"Expense Management"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Employees"),": Submit expenses with details and attachments."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Managers"),": Assign and review expenses, ensuring financial accuracy.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/expense%20employee.png",alt:"Employee"}),"\n",(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/expense-manager.png",alt:"Manager"})),(0,a.yg)("h3",{id:"asset-management"},"Asset Management"),(0,a.yg)("p",null,"Track company assets like laptops and monitors, ensuring accountability and proper usage. Due dates ensure timely returns."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/assets-employee.png",alt:"Assets"})),(0,a.yg)("h3",{id:"employee-directory"},"Employee Directory"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-11-18-hr-app/employee.gif",alt:"Employee"})),(0,a.yg)("p",null,"A searchable employee list helps managers quickly access contact details and manage records. New employees can be added with comprehensive details."),(0,a.yg)("h2",{id:"technologies-used-in-refinehr-app"},"Technologies Used in RefineHR App"),(0,a.yg)("p",null,"Built with Refine.js, leveraging Vite for fast development and optimized builds."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"UI Framework"),": Material UI provides a consistent, professional interface."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Data Provider"),": NestJS-CRUD enables efficient data management."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Auth Provider"),": Custom Authentication ensures secure, role-based access.")),(0,a.yg)("h2",{id:"suitable-for-internal-hr-tool-oriented-needs"},"Suitable for Internal HR Tool-Oriented Needs"),(0,a.yg)("p",null,"This HR app template can be adapted for various use cases, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Recruitment and Applicant Tracking Systems"),(0,a.yg)("li",{parentName:"ul"},"Employee Engagement Platforms"),(0,a.yg)("li",{parentName:"ul"},"Workforce Planning and Time Tracking"),(0,a.yg)("li",{parentName:"ul"},"Compliance Management Systems"),(0,a.yg)("li",{parentName:"ul"},"Payroll Management Tools"),(0,a.yg)("li",{parentName:"ul"},"HR Analytics and Reporting"),(0,a.yg)("li",{parentName:"ul"},"Training and Development Management")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"The HR app template simplifies HR management by offering robust tools for employee data, expense tracking, and organizational oversight. It is customizable to meet specific business needs, streamlining HR processes for enhanced efficiency and productivity."))}d.isMDXComponent=!0}}]);