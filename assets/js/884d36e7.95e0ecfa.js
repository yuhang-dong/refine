"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95252],{58860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(37953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),y=n,g=m["".concat(o,".").concat(y)]||m[y]||c[y]||i;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},98018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});a(37953);var r=a(58860);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social-2.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/typescript-partial-utility-type",source:"@site/blog/2024-12-18-typescript-partial.md",title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",date:"2024-12-18T00:00:00.000Z",formattedDate:"December 18, 2024",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.25,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Use Tailwind CSS Grid",permalink:"/blog/tailwind-grid"},nextItem:{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type"},relatedPosts:[{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.175,date:"2023-06-16T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"June 10, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.765,date:"2024-06-10T00:00:00.000Z"},{title:"Form Schema Validation with Zod and React Hook Form",description:"We'll explore how to use Zod schema validation with React Hook Form in a TypeScript based React application.",permalink:"/blog/zod-typescript",formattedDate:"May 21, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:22.145,date:"2024-05-21T00:00:00.000Z"}],authorPosts:[{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"December 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.29,date:"2024-12-31T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"December 18, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.08,date:"2024-12-18T00:00:00.000Z"},{title:"Essentials of Managing Form State with React Hook Form",description:"This post covers the essentials of form state management with React Hook Form library.",permalink:"/blog/react-hook-form",formattedDate:"November 6, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:32.685,date:"2024-11-06T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"TL;DR: What is TypeScript Partial?",id:"tldr-what-is-typescript-partial",level:3},{value:"Optional Registration Scenario",id:"optional-registration-scenario",level:2},{value:"Enter TypeScript <code>Partial&lt;Type&gt;</code>",id:"enter-typescript-partialtype",level:2},{value:"With Interfaces",id:"with-interfaces",level:2},{value:"Comparison: Pick vs Omit vs Partial",id:"comparison-pick-vs-omit-vs-partial",level:3},{value:"Common Use Cases for <code>Partial</code>",id:"common-use-cases-for-partial",level:4},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m},y="wrapper";function g(e){var{components:t}=e,a=l(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This article was last updated on November 18, 2024, to include a clear introduction to TypeScript partial and its practical use cases.")),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("h3",{id:"tldr-what-is-typescript-partial"},"TL;DR: What is TypeScript Partial?"),(0,r.yg)("p",null,"What is TypeScript Partial? ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial<Type>")," is a utility type in TypeScript which represents all properties of a given type are optional."),(0,r.yg)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial<>"),". This is the third part of the series titled ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-omit-utility-type/"},"TypeScript Utility Type Series"),"."),(0,r.yg)("p",null,"In the previous post, we went through an example where we derived a ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type by omitting a property from the base type, ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,r.yg)("p",null,"In this post, we will consider an example of ",(0,r.yg)("strong",{parentName:"p"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"strong"},"Partial<>"))," by modifying our ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type to assume a more realistic scenario."),(0,r.yg)("p",null,"Steps we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#tldr-what-is-typescript-partial"},"TL;DR: What is TypeScript Partial?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#optional-registration-scenario"},"Optional Registration Scenario")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#enter-typescript-partialtype"},"Enter TypeScript ",(0,r.yg)("inlineCode",{parentName:"a"},"Partial<Type>"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#with-interfaces"},"With Interfaces"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#comparison-pick-vs-omit-vs-partial"},"Comparison: Pick vs Omit vs Partial"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#common-use-cases-for-partial"},"Common Use Cases for ",(0,r.yg)("inlineCode",{parentName:"a"},"Partial"))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"))),(0,r.yg)("h2",{id:"optional-registration-scenario"},"Optional Registration Scenario"),(0,r.yg)("p",null,"For our blog, we would have ",(0,r.yg)("inlineCode",{parentName:"p"},"GuestUser"),"s who are not allowed to like or comment on a post. We would allow registered ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber"),"s to like and comment. So, the scenario goes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a ",(0,r.yg)("inlineCode",{parentName:"li"},"GuestUser")," must register with their ",(0,r.yg)("inlineCode",{parentName:"li"},"email")," and become a ",(0,r.yg)("inlineCode",{parentName:"li"},"Subscriber"),"."),(0,r.yg)("li",{parentName:"ul"},"they receive a link to set their password in an email sent to their ",(0,r.yg)("inlineCode",{parentName:"li"},"email"),"."),(0,r.yg)("li",{parentName:"ul"},"they are able to set their ",(0,r.yg)("inlineCode",{parentName:"li"},"password"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"firstName")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"lastName")," afterwards.")),(0,r.yg)("p",null,"In such a scenario, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type we derived previously, which effectively has the shape below, does not deliver our needs the way we want:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\nFrom TypeScript Error:\n"Type \'{ userId: number; macAddress: string; username: string; email: string; }\' is missing the following properties from type \'Subscriber\': password, firstName, lastName"\n\nFrom console:\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.yg)("p",null,"TypeScript complains about the inconformity of ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type. This is because it sets all the fields to be ",(0,r.yg)("strong",{parentName:"p"},"required")," by default. If we set ",(0,r.yg)("inlineCode",{parentName:"p"},"password"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"firstName")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"lastName")," to optional manually, it is happy:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password?: string;\n  firstName?: string;\n  lastName?: string;\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.yg)("p",null,"But this comes with the overhead of defining ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," manually in the first place and additionally then setting individual optional properties. In real APIs, it's not a good idea to define a shape manually."),(0,r.yg)("h2",{id:"enter-typescript-partialtype"},"Enter TypeScript ",(0,r.yg)("inlineCode",{parentName:"h2"},"Partial<Type>")),(0,r.yg)("p",null,"We want to remove the hassle and do this much more comfortably from the type returned from ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),". So what we want to do is set all the properties of the returned type to be optional with ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial<Type>"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type SuperbUser = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, "roles">>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,r.yg)("p",null,"No complains, which is great!"),(0,r.yg)("p",null,"So, we are now free to set values for ",(0,r.yg)("inlineCode",{parentName:"p"},"password"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"firstName")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"lastName"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'subscriber.password = "12345678";\nsubscriber.firstName = "Abdullah";\nsubscriber.lastName = "Numan";\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,r.yg)("p",null,"But, like before, TypeScript complains again if we add the properties that disrupts the shape of ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'subscriber.roles = ["Reader", "Commenter"];\n\nconsole.log(subscriber);\n// Property \'roles\' does not exist on type \'Partial<Omit<SuperbUser, "roles">>\'.\n')),(0,r.yg)("p",null,"So, the benefits of using TypeScript to derive a partial type includes its support for partial assignment of the object's properties that is allowed by JavaScript and not allowed by default TypeScript. It also warns about possible undesired assignments to the partial."),(0,r.yg)("h2",{id:"with-interfaces"},"With Interfaces"),(0,r.yg)("p",null,"We get the same result if we use an interface for our base ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n}\n\ntype Subscriber = Partial<Omit<SuperbUser, "roles">>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n};\n\nsubscriber.password = "12345678";\nsubscriber.firstName = "Abdullah";\nsubscriber.lastName = "Numan";\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,r.yg)("p",null,"We can also refactor the return type from ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," into an intermediary type, ",(0,r.yg)("inlineCode",{parentName:"p"},"StrictSubscriber"),", and pass it as the argument of ",(0,r.yg)("strong",{parentName:"p"},"TypeScript Partial"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type StrictSubscriber = Omit<SuperbUser, "roles">;\ntype Subscriber = Partial<StrictSubscriber>;\n')),(0,r.yg)("h3",{id:"comparison-pick-vs-omit-vs-partial"},"Comparison: Pick vs Omit vs Partial"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Utility Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Purpose"),(0,r.yg)("th",{parentName:"tr",align:null},"Example Usage"),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Pick<Type, Keys>")),(0,r.yg)("td",{parentName:"tr",align:null},"Creates a type with only specific keys."),(0,r.yg)("td",{parentName:"tr",align:null},'`type Guest = Pick<User, "id"'),(0,r.yg)("td",{parentName:"tr",align:null},'"name">`')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Omit<Type, Keys>")),(0,r.yg)("td",{parentName:"tr",align:null},"Excludes specified keys from a type."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'type NoEmail = Omit<User, "email">')),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Partial<Type>")),(0,r.yg)("td",{parentName:"tr",align:null},"Makes all keys of a type optional."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"type OptionalUser = Partial<User>")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h4",{id:"common-use-cases-for-partial"},"Common Use Cases for ",(0,r.yg)("inlineCode",{parentName:"h4"},"Partial")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"API Responses"),": When some of the fields are not returned at all.\nExample: Fetching user data with optional fields."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Form Handling"),": Partial data in forms that might have some input fields not filled."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Object Updates"),": Every time any part of an already existing object is updated, that does not imply all fields are modified.")),(0,r.yg)("h2",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: What is ",(0,r.yg)("inlineCode",{parentName:"strong"},"Partial<Type>")," in TypeScript?")),(0,r.yg)("p",null,"A: Well, ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial")," is a utility type that makes every property of a type optional."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: Can I use Partial with interfaces?")),(0,r.yg)("p",null,"A: Yes, absolutely, ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial")," works for both types and interfaces."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: How is Partial different from Pick?")),(0,r.yg)("p",null,"A: ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial")," makes all properties optional; ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick")," selects some properties from a type."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this post, we covered partial object transformations with using the utility transformer ",(0,r.yg)("strong",{parentName:"p"},"Partial"),". We found out that it is preferable to setting certain properties of a type to optional manually, especially when dealing with types returned from APIs."))}g.isMDXComponent=!0}}]);