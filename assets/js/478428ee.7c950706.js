"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32016],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social-2.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/typescript-omit-utility-type",source:"@site/blog/2024-12-17-typescript-omit.md",title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",date:"2024-12-17T00:00:00.000Z",formattedDate:"December 17, 2024",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.75,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social-2.png",hide_table_of_contents:!1},nextItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},relatedPosts:[{title:"Form Schema Validation with Zod and React Hook Form",description:"We'll explore how to use Zod schema validation with React Hook Form in a TypeScript based React application.",permalink:"/blog/zod-typescript",formattedDate:"May 21, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:22.145,date:"2024-05-21T00:00:00.000Z"},{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",permalink:"/blog/typescript-decorators",formattedDate:"July 24, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.6,date:"2023-07-24T00:00:00.000Z"},{title:"TypeScript vs JavaScript - A Detailed Comparison",description:"This post provides an insightful comparison and contrast between TypeScript and its ECMA standardized forerunner, JavaScript.",permalink:"/blog/javascript-vs-typescript",formattedDate:"September 10, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.57,date:"2024-09-10T00:00:00.000Z"}],authorPosts:[{title:"Adding CRUD Pages",description:"We'll be adding CRUD pages for Company, Client and Contact resources in this post.",permalink:"/blog/refine-react-invoice-generator-3",formattedDate:"April 12, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:26.895,date:"2023-04-12T00:00:00.000Z"},{title:"Essentials of Managing Form State with React Hook Form",description:"This post covers the essentials of form state management with React Hook Form library.",permalink:"/blog/react-hook-form",formattedDate:"November 6, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:32.685,date:"2024-11-06T00:00:00.000Z"},{title:"The Anatomy of the Web Development in 2024",description:"This post depicts a general picture of where web development is headed in 2024 with a focus on the Node.js/React ecosystem - and provides an inside-out report on how Refine.js is starting to make an impact as a React-based meta-framework.",permalink:"/blog/web-development",formattedDate:"December 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.205,date:"2023-12-20T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript <code>Omit&lt;Type, Keys&gt;</code> Example",id:"typescript-omittype-keys-example",level:2},{value:"TypeScript <code>Omit&lt;&gt;</code> with Interface",id:"typescript-omit-with-interface",level:2},{value:"When to Avoid",id:"when-to-avoid",level:2},{value:"When to Use TypeScript Omit",id:"when-to-use-typescript-omit",level:2},{value:"Comparison of <code>Pick</code> and <code>Omit</code> in TypeScript",id:"comparison-of-pick-and-omit-in-typescript",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function y(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on December 17, 2024, to add sections for Use Cases of TypeScript Omit and clean introduction")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"TL;DR:")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<Type, Keys>")," utility in TypeScript helps to construct a new type by omitting certain properties from the existing type. It is perfect for reducing redundant code when certain properties are not needed."),(0,a.yg)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>"),". This is the second part of the series titled ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-pick-utility-type/"},"TypeScript Utility Type Series"),"."),(0,a.yg)("p",null,"In the previous post, we went through an example where we derived a ",(0,a.yg)("inlineCode",{parentName:"p"},"GuestUser")," type by picking a few properties from the base type, ",(0,a.yg)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We hinted that if the number of properties to be picked are more than those being discarded, picking becomes less convenient. In that case, we should prefer using ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,a.yg)("p",null,"In this post, we will consider an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," by creating a type for our ",(0,a.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity."),(0,a.yg)("p",null,"Step we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-omittype-keys-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"Omit<Type, Keys>")," Example")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-omit-with-interface"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"Omit<>")," with Interface")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-use-typescript-omit"},"When to Use TypeScript Omit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#comparison-of-pick-and-omit-in-typescript"},"Comparison of ",(0,a.yg)("inlineCode",{parentName:"a"},"Pick")," and ",(0,a.yg)("inlineCode",{parentName:"a"},"Omit")," in TypeScript"))),(0,a.yg)("h2",{id:"typescript-omittype-keys-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")," Example"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>"),", like ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>"),", takes a base type as the first argument. It takes an union type of the keys to be omitted as the second argument and returns the derived type that excludes those properties."),(0,a.yg)("p",null,"Looking back at the ERD, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity has all the same properties as ",(0,a.yg)("inlineCode",{parentName:"p"},"SuperbUser")," - except ",(0,a.yg)("inlineCode",{parentName:"p"},"roles"),":"),(0,a.yg)("div",{class:"img-container","align-items":"center"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/ts-omit-visualize.png",alt:"TypeScript Omit Type"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Deriving a ",(0,a.yg)("inlineCode",{parentName:"p"},"Subscriber")," type from the ",(0,a.yg)("inlineCode",{parentName:"p"},"SuperbUser")," plainly requires us to omit only the ",(0,a.yg)("inlineCode",{parentName:"p"},"roles")," property, as opposed to picking all the rest:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'type SuperbUser = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n};\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n')),(0,a.yg)("p",null,"So, in this case, TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," offers us convenience over ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We can now create a subscriber object that has ",(0,a.yg)("inlineCode",{parentName:"p"},"roles")," property removed from its fields:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,a.yg)("p",null,"Notice, if we navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"subscriber.roles")," it returns ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.yg)("p",null,"Now, let's try adding ",(0,a.yg)("inlineCode",{parentName:"p"},"roles")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"subscriber"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'subscriber.roles = ["Reader", "Commenter"]; // Property \'roles\' does not exist on type \'Subscriber\'.\n\nconsole.log(subscriber.roles); // ["Reader", "Commenter"]\n')),(0,a.yg)("p",null,"And TypeScript grunts:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'Subscriber'.\n")),(0,a.yg)("p",null,"If we look at ",(0,a.yg)("inlineCode",{parentName:"p"},"console.log(subscriber.roles);")," though, we can see that our assignment actually sets the property and value of ",(0,a.yg)("inlineCode",{parentName:"p"},"subscriber.roles"),". TypeScript only yells at us at development, but doesn't help us with this in runtime. JavaScript sets the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"subscribe.roles"),"."),(0,a.yg)("p",null,"So, caution there, as it is an important distinction that TypeScript is applying omit at development, not JavaScript. TypeScript does not check for any consequence of the written code ",(0,a.yg)("strong",{parentName:"p"},"after")," it is compiled to JavaScript. So, it is crucial to leverage TypeScript linter suggestions to strictly check omit while developing."),(0,a.yg)("h2",{id:"typescript-omit-with-interface"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"Omit<>")," with Interface"),(0,a.yg)("p",null,"Like it was in ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>"),", we can use an interface for ",(0,a.yg)("inlineCode",{parentName:"p"},"SuperbUser")," and the results will be the same:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n}\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,a.yg)("h2",{id:"when-to-avoid"},"When to Avoid"),(0,a.yg)("p",null,"As with ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>"),", the second argument to Typescript Omit also takes a union of keys. So, if we need to omit any other property, we can add them to the second argument with the pipe operator ",(0,a.yg)("inlineCode",{parentName:"p"},"|"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"type Subscriber = Omit<SuperbUser, 'roles' | 'firstName' | ...>;\n")),(0,a.yg)("p",null,"We should avoid using ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," and prefer ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>")," when we have more properties to omit than to pick."),(0,a.yg)("h2",{id:"when-to-use-typescript-omit"},"When to Use TypeScript Omit"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To remove sensitive fields (e.g., password) from user objects."),(0,a.yg)("li",{parentName:"ul"},"To generate simplified versions of complex types. - When most of the fields are needed but a few.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Simplifying Derived Types"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Omit comes in very handy when you have a complicated base type, but need a simplified version that doesn't contain a few fields.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'type FullUser = {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  createdAt: Date;\n};\n\n// Create a "PublicUser" type without sensitive data like \'password\' and \'createdAt\'\ntype PublicUser = Omit<FullUser, "password" | "createdAt">;\n\nconst user: PublicUser = {\n  id: 1,\n  name: "John Doe",\n  email: "johndoe@gmail.com",\n};\n\nconsole.log(user);\n/*\n  Output:\n  {\n    id: 1,\n    name: "John Doe",\n    email: "johndoe@gmail.com"\n  }\n*/\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"API Data Filtering"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Sometimes APIs or backends give you a full object when your frontend only needs a small subset of the fields. You could create a whole new type by hand. Alternatively, use Omit for quick adjustments.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'interface ApiResponse {\n  id: number;\n  username: string;\n  email: string;\n  passwordHash: string;\n  isAdmin: boolean;\n}\n\n// Create a \'FrontendUser\' without sensitive backend data\ntype FrontendUser = Omit<ApiResponse, "passwordHash" | "isAdmin">;\n\nconst frontendUser: FrontendUser = {\n  id: 101,\n  username: "frontend_dev",\n  email: "dev@example.com",\n};\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Creating Cleaner Types for Specific Contexts"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you're working with forms, UI components, or other modules, chances are you only need some of the fields from the parent, larger type: Omit comes in handy to keep your types tidy and focused.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'interface FullProduct {\n  id: string;\n  name: string;\n  description: string;\n  price: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\n// Create a \'ProductForm\' type for a UI form without metadata\ntype ProductForm = Omit<FullProduct, "id" | "createdAt" | "updatedAt">;\n\nconst formData: ProductForm = {\n  name: "Gaming Laptop",\n  description: "A powerful laptop for gaming.",\n  price: 1500,\n};\n')),(0,a.yg)("h2",{id:"comparison-of-pick-and-omit-in-typescript"},"Comparison of ",(0,a.yg)("inlineCode",{parentName:"h2"},"Pick")," and ",(0,a.yg)("inlineCode",{parentName:"h2"},"Omit")," in TypeScript"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Feature"),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"th"},"Pick")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"th"},"Omit")),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Purpose")),(0,a.yg)("td",{parentName:"tr",align:null},"Select specific fields"),(0,a.yg)("td",{parentName:"tr",align:null},"Exclude specific fields"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Syntax")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Pick<Type, Keys>")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Omit<Type, Keys>")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Use Case")),(0,a.yg)("td",{parentName:"tr",align:null},"When fewer fields are needed"),(0,a.yg)("td",{parentName:"tr",align:null},"When fewer fields are omitted"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Example")),(0,a.yg)("td",{parentName:"tr",align:null},'`type A = Pick<Type, "id"'),(0,a.yg)("td",{parentName:"tr",align:null},'"name">;`'),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'type B = Omit<Type, "password">;'))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Result")),(0,a.yg)("td",{parentName:"tr",align:null},"Includes only ",(0,a.yg)("inlineCode",{parentName:"td"},"id")," and ",(0,a.yg)("inlineCode",{parentName:"td"},"name")),(0,a.yg)("td",{parentName:"tr",align:null},"Excludes ",(0,a.yg)("inlineCode",{parentName:"td"},"password")),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this article, we delved into ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," with an example of deriving a type for our ",(0,a.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity by omitting a property from our base type, ",(0,a.yg)("inlineCode",{parentName:"p"},"SuperbUser"),". We saw that ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," is the opposite equivalent of ",(0,a.yg)("inlineCode",{parentName:"p"},"Pick<>")," and is more convenient when we want to pick more properties and omit less from a base type."),(0,a.yg)("p",null,"In the next article, we'll cover object type transformations using ",(0,a.yg)("inlineCode",{parentName:"p"},"Partial<Type>"),"."))}y.isMDXComponent=!0}}]);