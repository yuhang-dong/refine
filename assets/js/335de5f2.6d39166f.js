"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40048],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),p=i,m=c["".concat(l,".").concat(p)]||c[p]||g[p]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});t(37953);var a=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",slug:"node-js-uuid",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-24-node-uuid/social.png",hide_table_of_contents:!1},l=void 0,d={permalink:"/blog/node-js-uuid",source:"@site/blog/2024-11-07-node-uuid.md",title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",date:"2024-11-07T00:00:00.000Z",formattedDate:"November 7, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.23,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",slug:"node-js-uuid",authors:"necati",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-24-node-uuid/social.png",hide_table_of_contents:!1},prevItem:{title:"React useReducer Hook - The Basics",permalink:"/blog/react-usereducer"},nextItem:{title:"Building components with Radix UI",permalink:"/blog/radix-ui"},relatedPosts:[{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"July 11, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.035,date:"2024-07-11T00:00:00.000Z"},{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2022-12-28T00:00:00.000Z"},{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",permalink:"/blog/terraform-aws",formattedDate:"September 12, 2024",authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],readingTime:9.73,date:"2024-09-12T00:00:00.000Z"}],authorPosts:[{title:"refine Hackaton Winners",description:"The winners of the Refine Open Source Hackathon are announced!",permalink:"/blog/refine-hackathon-winners",formattedDate:"February 28, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:2.36,date:"2023-02-28T00:00:00.000Z"},{title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",permalink:"/blog/react-useid",formattedDate:"May 14, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.41,date:"2024-05-14T00:00:00.000Z"},{title:"Announcing the Release of Refine v4!",description:"This release includes several new features that are designed to enhance the developer experience.",permalink:"/blog/refine-v4-announcement",formattedDate:"March 13, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.575,date:"2023-03-13T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is a UUID?",id:"what-is-a-uuid",level:2},{value:"Why Use UUIDs in Your Node.js Projects?",id:"why-use-uuids-in-your-nodejs-projects",level:2},{value:"How to Generate UUID&#39;S?",id:"how-to-generate-uuids",level:2},{value:"1. Using Node.js Crypto Module",id:"1-using-nodejs-crypto-module",level:3},{value:"2. UUID npm Package",id:"2-uuid-npm-package",level:3},{value:"Installation",id:"installation",level:4},{value:"Usage",id:"usage",level:4},{value:"API table",id:"api-table",level:4},{value:"3. Nano ID Package",id:"3-nano-id-package",level:3},{value:"Installation",id:"installation-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Understanding and Choosing the Right UUID Versions",id:"understanding-and-choosing-the-right-uuid-versions",level:2},{value:"UUIDv1 - Time-based",id:"uuidv1---time-based",level:3},{value:"UUIDv4 - Randomly Generated",id:"uuidv4---randomly-generated",level:3},{value:"UUIDv3 and UUIDv5 - Namespace-Based",id:"uuidv3-and-uuidv5---namespace-based",level:3},{value:"4. Bonus: short-uuid",id:"4-bonus-short-uuid",level:3},{value:"UUIDs in Distributed Systems and Microservices",id:"uuids-in-distributed-systems-and-microservices",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:c},p="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(p,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on November 7, 2024 to include performance considerations and advanced use cases for UUIDs in distributed systems and microservices.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In software development, it's important to make sure that each piece of data is unique to prevent overlaps and errors. Universally Unique Identifiers, or UUIDs, help solve this problem by giving each item a unique label. They\u2019re becoming crucial as more systems and services link over various networks. They make sure every piece of data remains unique, preventing any overlaps and errors."),(0,a.yg)("p",null,"In this blog post, we'll look at how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-a-uuid"},"What is a UUID?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-use-uuids-in-your-nodejs-projects"},"Why Use UUIDs in Your Node.js Projects?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-generate-uuids"},"How to Generate UUID'S?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#understanding-and-choosing-the-right-uuid-versions"},"Understanding and Choosing the Right UUID Versions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#uuids-in-distributed-systems-and-microservices"},"UUIDs in Distributed Systems and Microservices"))),(0,a.yg)("h2",{id:"what-is-a-uuid"},"What is a UUID?"),(0,a.yg)("p",null,"A UUID is a 128-bit number used to uniquely label information in computer systems, as defined in RFC 4122. There are several versions, but the ones we often use are UUIDv1 and UUIDv4. UUIDv1 generates IDs based on the time they're created and includes this timestamp. It\u2019s useful because you can trace when and where it was generated, which can help in some debugging scenarios."),(0,a.yg)("p",null,"On the other hand, UUIDv4 is totally random, providing a much higher level of security due to its unpredictability\u2014ideal for sensitive applications where privacy is a concern."),(0,a.yg)("p",null,"Each type serves distinct purposes, catering to the specific needs of data identification and security in software development."),(0,a.yg)("h2",{id:"why-use-uuids-in-your-nodejs-projects"},"Why Use UUIDs in Your Node.js Projects?"),(0,a.yg)("p",null,"Using UUIDs in Node.js enhances data uniqueness and integrity, making it ideal for distributed systems and preventing ID collisions. It facilitates data merging from different sources due to the guaranteed uniqueness of each identifier. Additionally, UUIDs increase security by making it difficult to predict IDs, protecting against unauthorized data access. They also allow for more flexible database schema design, enabling agile development and easier database migrations by handling IDs at the application level."),(0,a.yg)("p",null,"Integrating UUIDs in our Node.js applications helps us ensure that every data entry is unique\u2014this is vital for systems where multiple instances or databases need to merge or sync without conflicts. It also boosts our system's security, as the randomness of UUIDv4 makes it tough for anyone to guess the ID sequences, protecting against some forms of cyber attacks. Plus, using UUIDs lets us be more agile with our database schema, since IDs are handled at the application level, making it easier to evolve our database without messy migrations."),(0,a.yg)("h2",{id:"how-to-generate-uuids"},"How to Generate UUID'S?"),(0,a.yg)("p",null,"To generate UUIDs in a Node.js environment, you can use different methods and packages depending on your specific needs and preferences. Below, I\u2019ll guide you through three different approaches: using the built-in Node.js ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randomuuid_options"},(0,a.yg)("inlineCode",{parentName:"a"},"crypto"))," module, the popular ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/uuidjs/uuid"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid"))," npm package, and the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ai/nanoid"},(0,a.yg)("inlineCode",{parentName:"a"},"nanoid"))," npm package."),(0,a.yg)("h3",{id:"1-using-nodejs-crypto-module"},"1. Using Node.js Crypto Module"),(0,a.yg)("p",null,"Node.js includes a built-in module called ",(0,a.yg)("inlineCode",{parentName:"p"},"crypto")," that can be used to generate UUIDs, specifically UUID v4, which are random:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const crypto = require("crypto");\n\nlet uuid = crypto.randomUUID();\n')),(0,a.yg)("p",null,"This function utilizes the ",(0,a.yg)("inlineCode",{parentName:"p"},"crypto")," module's ",(0,a.yg)("inlineCode",{parentName:"p"},"randomUUID")," method to generate random bytes, which are then formatted into a UUID v4 compliant formatr."),(0,a.yg)("p",null,"When you log, you can get similar like the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"00a1dv45-dx19-2301-2471-223932594567\n")),(0,a.yg)("h3",{id:"2-uuid-npm-package"},"2. UUID npm Package"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"uuid")," npm package is a very popular choice for generating UUIDs in Node.js applications. It supports multiple versions of UUIDs:"),(0,a.yg)("h4",{id:"installation"},"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install uuid\n")),(0,a.yg)("h4",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const { v4: uuidv4 } = require(\"uuid\");\n\n// Generate a UUID v4\nconst uuid = uuidv4();\nconsole.log(`UUID: ${uuid}`);\n// \u21e8 '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'\n")),(0,a.yg)("p",null,"This package provides simple, straightforward methods for generating UUIDs and supports UUID versions 1, 3, 4, and 5."),(0,a.yg)("h4",{id:"api-table"},"API table"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidnil"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.NIL"))),(0,a.yg)("td",{parentName:"tr",align:null},"The nil UUID string (all zeros)"),(0,a.yg)("td",{parentName:"tr",align:null},"New in ",(0,a.yg)("inlineCode",{parentName:"td"},"uuid@8.3"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidparsestr"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.parse()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Convert UUID string to array of bytes"),(0,a.yg)("td",{parentName:"tr",align:null},"New in ",(0,a.yg)("inlineCode",{parentName:"td"},"uuid@8.3"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidstringifyarr-offset"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.stringify()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Convert array of bytes to UUID string"),(0,a.yg)("td",{parentName:"tr",align:null},"New in ",(0,a.yg)("inlineCode",{parentName:"td"},"uuid@8.3"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidv1options-buffer-offset"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.v1()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Create a version 1 (timestamp) UUID"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidv3name-namespace-buffer-offset"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.v3()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Create a version 3 (namespace w/ MD5) UUID"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidv4options-buffer-offset"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.v4()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Create a version 4 (random) UUID"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidv5name-namespace-buffer-offset"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.v5()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Create a version 5 (namespace w/ SHA-1) UUID"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidvalidatestr"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.validate()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Test a string to see if it is a valid UUID"),(0,a.yg)("td",{parentName:"tr",align:null},"New in ",(0,a.yg)("inlineCode",{parentName:"td"},"uuid@8.3"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#uuidversionstr"},(0,a.yg)("inlineCode",{parentName:"a"},"uuid.version()"))),(0,a.yg)("td",{parentName:"tr",align:null},"Detect RFC version of a UUID"),(0,a.yg)("td",{parentName:"tr",align:null},"New in ",(0,a.yg)("inlineCode",{parentName:"td"},"uuid@8.3"))))),(0,a.yg)("h3",{id:"3-nano-id-package"},"3. Nano ID Package"),(0,a.yg)("p",null,"Nano ID is a tiny, secure URL-friendly unique string ID generator for JavaScript, which can be used as an alternative to UUIDs. It offers a similar level of uniqueness and randomness and is a great choice when shorter IDs are needed:"),(0,a.yg)("h4",{id:"installation-1"},"Installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install nanoid\n")),(0,a.yg)("h4",{id:"usage-1"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const { nanoid } = require("nanoid");\n\n// Generate a Nano ID\nconst id = nanoid();\nconsole.log(`Nano ID: ${id}`);\n')),(0,a.yg)("p",null,"Nano ID generates URL-friendly IDs by default, which are shorter and more memory-efficient than UUIDs."),(0,a.yg)("p",null,"Each of these methods provides unique identifiers suitable for various applications, from managing database keys to tracking unique user sessions. Choose the method that best fits your project\u2019s requirements."),(0,a.yg)("h2",{id:"understanding-and-choosing-the-right-uuid-versions"},"Understanding and Choosing the Right UUID Versions"),(0,a.yg)("p",null,"What I wanted to do was to provide some views on the different UUID versions and in what cases to use each; in particular, considering how to make data identifiers unique and secure in Node.js. The following is a quick rundown of UUID versions, how they differ, and where each might be most useful."),(0,a.yg)("h3",{id:"uuidv1---time-based"},"UUIDv1 - Time-based"),(0,a.yg)("p",null,"UUIDv1 is generated based on the time it was created, and it includes a timestamp, along with the MAC address of the machine that created it. Use it where you may want traceability-while you can tell when and where the ID was generated, for example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use Case"),": When doing any form of logging or event tracking and want to find an entry's origin."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Pros"),": Timestamp informs about ID creation time and helps in debugging."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cons"),": Not truly random, it can leak information about the machine and network, which can be a security concern.")),(0,a.yg)("h3",{id:"uuidv4---randomly-generated"},"UUIDv4 - Randomly Generated"),(0,a.yg)("p",null,"UUIDv4 is generated purely by chance; there's no timestamp or any hardware-based information in the ID. Therefore, it is even safer and more unpredictable; its creation makes it ideal for applications where high security and privacy are required."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Relevant Use Case"),": User IDs or other sensitive data with which we want to minimize predictability."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Pros"),": Highly random in nature and thus ideal for privacy and security. Not very predictable, unlike UUIDv1."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Disadvantages"),": Not traceable because there is no timestamp per se; hence, not useful for tracking purposes.")),(0,a.yg)("h3",{id:"uuidv3-and-uuidv5---namespace-based"},"UUIDv3 and UUIDv5 - Namespace-Based"),(0,a.yg)("p",null,"Both UUIDv3 and UUIDv5 are generated from a name and a namespace. They differ in the hashing algorithm since UUIDv3 uses MD5, while in UUIDv5, a more secure SHA-1 is used."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use Case"),": Creation of unique IDs based on already available data; for example, generating IDs from usernames or email addresses."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Advantages"),": Deterministic generation - same input gives the same UUID, hence useful for reference consistency."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Limitations"),": The randomness is limited, as there can be nothing outside the dataset on which the model is trained. Not appropriate for cases like codes, identity numbers that require high uniqueness in different systems.")),(0,a.yg)("p",null,"While UUIDv4 often best suits most general-purpose cases with its randomness and unpredictability, UUIDv1 is good to go if traceability is required, or UUIDv5, if determinism needs to be maintained."),(0,a.yg)("h3",{id:"4-bonus-short-uuid"},"4. Bonus: short-uuid"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/oculus42/short-uuid"},"short-uuid")," simplifies the generation and translation of UUIDs into shorter or alternative formats, and vice versa."),(0,a.yg)("p",null,"The latest version, 4.0.0, brings some significant changes like improved error handling, modern ECMAScript support, and consistent-length value generation. This means you can now easily handle UUIDs in a more efficient and error-free manner."),(0,a.yg)("p",null,"To get started, you just need to install the library and use its simple API to generate or translate UUIDs. It's particularly handy when you need shorter identifiers for your application, like in URLs or database keys."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"const short = require('short-uuid');\n\n// Quick start with flickrBase58 format\nshort.generate(); // Example: 73WakrfVbNJBaAmhQtEeDv\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"short-uuid")," takes RFC4122 v4-compliant UUIDs and translates them into shorter formats."),(0,a.yg)("li",{parentName:"ul"},"Version 4.0.0 ensures consistent-length values unless otherwise specified, achieved by padding with the first character in the alphabet."),(0,a.yg)("li",{parentName:"ul"},"Translators enable conversion back and forth between RFC compliant UUIDs and shortened formats.")),(0,a.yg)("h2",{id:"uuids-in-distributed-systems-and-microservices"},"UUIDs in Distributed Systems and Microservices"),(0,a.yg)("p",null,"I thought it might be useful to touch on the role of UUIDs in distributed systems and microservices, where they really shine due to their unique properties. The following code examples demonstrate several use cases of UUIDs in distributed systems and microservices."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Generating UUIDs Independently within Multiple Services"))),(0,a.yg)("p",null,"Every microservice can generate UUIDs autonomously without depending on an integrated ID generator. Here is how you could generate UUIDs for a Node.js environment by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"uuid")," library:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'// Install uuid library if you haven\'t\n// npm install uuid\n\nconst { v4: uuidv4 } = require("uuid");\n\n// Every microservice shall create a unique UUID\nconst orderID = uuidv4();\nconsole.log(`Generated Order ID: ${orderID}`);\n')),(0,a.yg)("p",null,"This will generate a UUIDv4; those are random\u2014so they don't include timestamps or any other traceable information\u2014and therefore suitable for most use cases."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"UUIDv5 to Generate Deterministic Identifiers Based on Namespaces"))),(0,a.yg)("p",null,'This would be the reason for using UUIDv5 if you needed to have consistency across services, say using the same UUID based off of a certain identifier such as an email address. This version includes methods for generating UUIDs based on a "name" and a "namespace," guaranteeing that the same name in the same namespace always returns the same UUID:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const { v5: uuidv5 } = require("uuid");\n\n// Define a namespace -- usually a fixed UUID for a project\nconst NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"; // Example namespace UUID\n\n// Generate a UUID based on a unique name (like an email) within the namespace\nconst userID = uuidv5("user@example.com", NAMESPACE);\nconsole.log(`Generated User ID(UUIDv5): ${userID}`);\n')),(0,a.yg)("p",null,"Using UUIDv5 is useful in services that need to recreate the same UUID for a certain resource over different services."),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Using UUIDs for Database Replication in Microservices"))),(0,a.yg)("p",null,"In a microservice context, the database might be distributed or synchronized across regions or environments. UUIDs can provide unique IDs across different databases. Following is an example of UUID insertion in a MongoDB collection:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const { v4: uuidv4 } = require("uuid");\nconst MongoClient = require("mongodb").MongoClient;\n\nasync function insertOrder() {\n  const client = new MongoClient("mongodb://localhost:27017", {\n    useUnifiedTopology: true,\n  });\n  await client.connect();\n  const db = client.db("orders_db");\n  const orders = db.collection("orders");\n\n  // Generate unique UUID for the order\n  let orderID = uuidv4();\n  const newOrder = { orderID, item: "Laptop", quantity: 1 };\n\n  await orders.insertOne(newOrder);\n  console.log(`Order inserted with ID: ${orderID}`);\n\n  await client.close();\n}\n\ninsertOrder().catch(console.error);\n')),(0,a.yg)("p",null,"This helps with replicating or merging databases since UUIDs will be conflict-free and ensure the IDs are unique across replicas."),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"UUID Storing as Binary for Performance"))),(0,a.yg)("p",null,"Some databases, like MySQL, support storing UUIDs in binary format such as ",(0,a.yg)("inlineCode",{parentName:"p"},"BINARY(16)")," over ",(0,a.yg)("inlineCode",{parentName:"p"},"CHAR(36)")," to save storage size and increase performance. Here's how this might look for MySQL:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users (\n    id BINARY(16) PRIMARY KEY,\n    name VARCHAR(50)\n);\n\n-- Insert a UUID as binary\nINSERT INTO users (id, name) VALUES (UUID_TO_BIN(UUID()), 'John Doe');\n\n-- Lookup the UUID\nSELECT BIN_TO_UUID(id) as id, name FROM users;\n")),(0,a.yg)("p",null,"The result for this method will be a compact binary of UUID that is faster and more efficient for large scales of databases. These examples illustrate various ways in which UUID can be applied to distributed systems and microservices when it comes to unique, reliable, and scalable ID management."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"UUIDs are essential for ensuring data integrity and uniqueness in distributed systems. They provide a reliable way to label data and prevent ID collisions, making them ideal for applications that require secure and scalable data management. By integrating UUIDs into your Node.js projects, you can enhance your system's security, flexibility, and performance, ensuring that your data remains distinct and secure across various platforms and networks."))}m.isMDXComponent=!0}}]);