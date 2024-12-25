"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53740],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),y=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=y(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=y(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,r(r({ref:t},l),{},{components:n})):a.createElement(g,r({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,r[1]=p;for(var y=2;y<o;y++)r[y]=n[y];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>y,toc:()=>c});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"TypeScript keyof with Examples",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",slug:"typescript-keyof",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-01-ts-keyof/social.png",hide_table_of_contents:!1},s=void 0,y={permalink:"/blog/typescript-keyof",source:"@site/blog/2024-04-01-ts-keyof.md",title:"TypeScript keyof with Examples",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",date:"2024-04-01T00:00:00.000Z",formattedDate:"April 1, 2024",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:10.1,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"TypeScript keyof with Examples",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",slug:"typescript-keyof",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-01-ts-keyof/social.png",hide_table_of_contents:!1},prevItem:{title:"Django REST Framework - How to use it to create APIs?",permalink:"/blog/django-rest-framework"},nextItem:{title:"How to Change Node Version",permalink:"/blog/change-node-version"},relatedPosts:[{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"December 18, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.25,date:"2024-12-18T00:00:00.000Z"},{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",description:"This post is provides a guide on how to ensure type safety to dictionaries with TypeScript.",permalink:"/blog/typescript-dictionary",formattedDate:"November 11, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:24.605,date:"2024-11-11T00:00:00.000Z"},{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-satisfies-operator",formattedDate:"November 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.41,date:"2023-11-15T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"November 4, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.44,date:"2024-11-04T00:00:00.000Z"},{title:"Essentials of Managing Form State with React Hook Form",description:"This post covers the essentials of form state management with React Hook Form library.",permalink:"/blog/react-hook-form",formattedDate:"November 6, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:32.685,date:"2024-11-06T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"TypeScript Setup",id:"typescript-setup",level:3},{value:"What is TypeScript <code>keyof</code> ?",id:"what-is-typescript-keyof-",level:2},{value:"How TypeScript <code>keyof</code> Works",id:"how-typescript-keyof-works",level:3},{value:"TypeScript <code>keyof</code>: Object Type Keys vs Object Keys",id:"typescript-keyof-object-type-keys-vs-object-keys",level:2},{value:"TypeScript <code>keyof</code> <code>typeof</code> Pair: An <code>Object.keys()</code> Iteration Example",id:"typescript-keyof-typeof-pair-an-objectkeys-iteration-example",level:3},{value:"TypeScript <code>keyof</code>: Advanced Use Cases",id:"typescript-keyof-advanced-use-cases",level:2},{value:"Using TypeScript <code>keyof</code> in Generic Types",id:"using-typescript-keyof-in-generic-types",level:3},{value:"TypeScript <code>keyof</code> with Generic Type Mappers",id:"typescript-keyof-with-generic-type-mappers",level:3},{value:"TypeScript <code>keyof</code>: A Remapped Type Example",id:"typescript-keyof-a-remapped-type-example",level:3},{value:"TypeScript <code>keyof</code> with Utility Types",id:"typescript-keyof-with-utility-types",level:3},{value:"Summary",id:"summary",level:2}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advaced types from a source object type."),(0,a.yg)("p",null,"TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," is a trivial type manipulation operator introduced in ",(0,a.yg)("inlineCode",{parentName:"p"},"v 2.1"),". It creates a union of string and numerical literal types from the keys of the source object type. TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," typically works in conjunction with other operators such as ",(0,a.yg)("inlineCode",{parentName:"p"},"extends"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"in"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," and constructs like index signature syntax to define sophisticated types that often involve properties of important data entities in an application."),(0,a.yg)("p",null,"In this post, we learn how the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator works and explore its use cases in multiple scenarios. We first encounter a common example that involves using the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator with the ",(0,a.yg)("inlineCode",{parentName:"p"},"Object.keys()")," method. We also cover an example of TypeScript generic functions that ensures type safety using ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"extends"),"."),(0,a.yg)("p",null,"In the later part of the post, with a couple of mapped type examples using index signature syntax, we demonstrate how ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," works with ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," operators in composing mapped types of different complexity levels. Towards the end, we also show an use case of ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," with common TypeScript utility types such as ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>"),"."),(0,a.yg)("p",null,"Steps we will cover in this post:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-typescript-keyof-"},"What is TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," ?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-typescript-keyof-works"},"How TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," Works")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-object-type-keys-vs-object-keys"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof"),": Object Type Keys vs Object Keys"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-typeof-pair-an-objectkeys-iteration-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," ",(0,a.yg)("inlineCode",{parentName:"a"},"typeof")," Pair: An ",(0,a.yg)("inlineCode",{parentName:"a"},"Object.keys()")," Iteration Example")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-advanced-use-cases"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof"),": Advanced Use Cases"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-typescript-keyof-in-generic-types"},"Using TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," in Generic Types")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-with-generic-type-mappers"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," with Generic Type Mappers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-a-remapped-type-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof"),": A Remapped Type Example")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-keyof-with-utility-types"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"a"},"keyof")," with Utility Types"))))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"In order to properly follow this post and test out the examples, you need to have a JavaScript engine and you should have knowledge about at least the basics of TypeScript and utility types."),(0,a.yg)("h3",{id:"typescript-setup"},"TypeScript Setup"),(0,a.yg)("p",null,"Your JavaScript engine has to have TypeScript installed. It could be ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/en"},(0,a.yg)("strong",{parentName:"a"},"Node.js"))," in your local machine with TypeScript supported or you could use the ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/play#code"},"TypeScript Playground"),"."),(0,a.yg)("h2",{id:"what-is-typescript-keyof-"},"What is TypeScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"keyof")," ?"),(0,a.yg)("p",null,"TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," is an object type operator which generates a union type of string and numerical literal types from the keys of an existing object type. It is passed the reference type from which the union of keys are generated. The syntax looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TUnionType = keyof ExistingObjectType;\n")),(0,a.yg)("h3",{id:"how-typescript-keyof-works"},"How TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")," Works"),(0,a.yg)("p",null,"TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," takes a passed reference object type and creates a union from its keys. We can alias the resulting union as a type. An example looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TAccount = {\n  username: string;\n  email: string;\n  password: string;\n  role: string;\n};\n\ntype TAccountKeys = keyof TAccount; // Equivalent to: "username" | "email" | "password" | "role"\n')),(0,a.yg)("p",null,"Notice, the keys above in ",(0,a.yg)("inlineCode",{parentName:"p"},"TAccount")," type get coerced to ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"s in the union. If we had any key that were a ",(0,a.yg)("inlineCode",{parentName:"p"},"number"),", they would remain a numeric literal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TAccount = {\n  username: string;\n  email: string;\n  password: string;\n  4: string;\n};\n\ntype TAccountKeys = keyof TAccount; // Equivalent to: "username" | "email" | "password" | 4\n')),(0,a.yg)("h2",{id:"typescript-keyof-object-type-keys-vs-object-keys"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"keyof"),": Object Type Keys vs Object Keys"),(0,a.yg)("p",null,"It is important to note that TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," creates the union from a reference object type, not from the object itself. So, the distinction here is ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," always has to be passed the ",(0,a.yg)("strong",{parentName:"p"},"object type")," as argument, ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"not"))," the actual object."),(0,a.yg)("p",null,"Because of this, we should first have the object type that represents an object or application entity so that we can pass it to ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof"),". It can be a directly described object type, as in the above example. Or it can be an object literal type derived with the ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof")," operator as below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const account = {\n  username: "",\n  email: "",\n  password: "",\n  role: "",\n};\n\ntype TAccount = typeof account; // { username: string; email: string; password: string; role: string; }\n\ntype TAccountKeys = keyof TAccount; // Explicitly: "username" | "email" | "password" | "role"\n')),(0,a.yg)("h3",{id:"typescript-keyof-typeof-pair-an-objectkeys-iteration-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")," ",(0,a.yg)("inlineCode",{parentName:"h3"},"typeof")," Pair: An ",(0,a.yg)("inlineCode",{parentName:"h3"},"Object.keys()")," Iteration Example"),(0,a.yg)("p",null,"It is common to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof")," operator with ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," in order to derive an object type first. One use case is while iterating over an object with its keys extracted with ",(0,a.yg)("inlineCode",{parentName:"p"},"Object.keys()"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const account = {\n  username: "donald_duck",\n  email: "donald.duck@exmaple.com",\n  password: "goawaygoaway",\n  role: "admin",\n};\n\nconst accountKeys = Object.keys(account);\n\n// highlight-next-line\nconst text = accountKeys?.map(\n  (key) => `Hello, your ${key} is ${account[key as keyof typeof account]}`,\n);\nconsole.log(text);\n')),(0,a.yg)("p",null,"Here, we are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator with ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"typeof")," first gives us the literal object type from ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," which we use as ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof"),"'s type argument. And then we use the created union type to assert the ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," to be an item in the union."),(0,a.yg)("p",null,"Without the type assertion used above for the ",(0,a.yg)("inlineCode",{parentName:"p"},"key"),"s of ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," object mapped, we get an implicit ",(0,a.yg)("inlineCode",{parentName:"p"},"any")," error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// highlight-next-line\nconst text = accountKeys?.map((key) => `Hello, your ${key} is ${account[key]}`); // `account[key]` Gives the following 7053 error:\n/*\nElement implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ username: string; email: string; password: string; role: string; }'.\n  No index signature with a parameter of type 'string' was found on type '{ username: string; email: string; password: string; role: string; }'.(7053)\n*/\n")),(0,a.yg)("p",null,"This happens because TypeScript is unable to relate the inferred ",(0,a.yg)("inlineCode",{parentName:"p"},"string")," type for the keys in ",(0,a.yg)("inlineCode",{parentName:"p"},"accountKeys")," to the object literal keys in the ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," object. So, we have to resort to type assertion with ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," and set the ",(0,a.yg)("inlineCode",{parentName:"p"},"key"),"'s type to a derived union of ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"s when ",(0,a.yg)("inlineCode",{parentName:"p"},"key"),"'s context is the ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," object."),(0,a.yg)("p",null,"This is pretty handy in cases where the literal object type does not need to be aliased for repeated use."),(0,a.yg)("h2",{id:"typescript-keyof-advanced-use-cases"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h2"},"keyof"),": Advanced Use Cases"),(0,a.yg)("p",null,"There are numerous use cases where TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator is utilized. In most cases, the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator is used to ensure type safety through compatibility, and type specificity through narrowing and constraining. In the sections that follow, we elaborate the most common examples."),(0,a.yg)("h3",{id:"using-typescript-keyof-in-generic-types"},"Using TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")," in Generic Types"),(0,a.yg)("p",null,"We can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator in generic functions. Let's say we have an ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," object with a few properties. We make use of the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator to attain type compatibility in generic getter and setter methods, such as in the following code snippet:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const account = {\n  username: "donald_duck",\n  email: "donald.duck@exmaple.com",\n  password: "goawaygoaway",\n  role: "admin",\n};\n\nfunction getProp<T, K extends keyof T> (obj: T, prop: K) { return obj[prop] };\nfunction setProp<T, K extends keyof T> (obj: T, prop: K, value: T[K]) { obj[prop] = value };\n\nconsole.log(getProp(account, "email")); // "donald.duck@exmaple.com"\nconsole.log(getProp<{"name": string}, "name">(account, "email")); // 2345 Error: "name" not compatible to `account` keys\n\nsetProp(account, "role", "project manager");\nsetProp<{"name": string}, "name">(account, "role", "project manager")> // 2345 Error\n')),(0,a.yg)("p",null,"In this example, we have defined a couple of functions that take an object as argument. We are attempting to achieve type safety by assigning generic type parameters to these methods. With ",(0,a.yg)("inlineCode",{parentName:"p"},"T, K extends keyof T")," generic annotation, we are declaring whatever the type of the first type parameter is (",(0,a.yg)("inlineCode",{parentName:"p"},"T"),") is we want the second parameter (",(0,a.yg)("inlineCode",{parentName:"p"},"K"),") to be only among its keys. We then assign these type params to the functions arguments accordingly, basically saying that the first argument ",(0,a.yg)("inlineCode",{parentName:"p"},"obj")," should be of type ",(0,a.yg)("inlineCode",{parentName:"p"},"T"),", the second argument of ",(0,a.yg)("inlineCode",{parentName:"p"},"K")," and the third one ",(0,a.yg)("inlineCode",{parentName:"p"},"T[K]"),"."),(0,a.yg)("p",null,"This makes the call to ",(0,a.yg)("inlineCode",{parentName:"p"},"getProp")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"setProp")," without type params to infer the type from the passed in ",(0,a.yg)("inlineCode",{parentName:"p"},"account")," object. However, when we pass an inconsistent type param to either, TypeScript reminds with a ",(0,a.yg)("inlineCode",{parentName:"p"},"2345")," error that the types and object passed are incompatible."),(0,a.yg)("p",null,"So, ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," along with ",(0,a.yg)("inlineCode",{parentName:"p"},"extends")," in this example plays an important part in achieving type safety through compatibility in generic functions."),(0,a.yg)("h3",{id:"typescript-keyof-with-generic-type-mappers"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")," with Generic Type Mappers"),(0,a.yg)("p",null,"The TS ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator is one of the building blocks that help derive complex mapped types from a source object type. TypeScript mapped types build on top of index signature syntax to compose a new type with the object type's keys extracted with the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator."),(0,a.yg)("p",null,"Below is an example of generating a mapped type from an existing ",(0,a.yg)("inlineCode",{parentName:"p"},"TAccount")," type using a custom defined generic type mapper utility that internally uses ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TAccount = {\n  username: string;\n  email: string;\n  password: string;\n  role: string;\n};\n\ntype TEntityPropsMapper<T> = {\n  // highlight-next-line\n  [Property in keyof T]: {\n    protectedField: boolean;\n    description: string;\n  };\n};\n\ntype TAccountProps = TEntityPropsMapper<TAccount>;\n/*\n  {\n      username: {\n          protectedField: boolean;\n          description: string;\n      };\n      email: {\n          protectedField: boolean;\n          description: string;\n      };\n      password: {\n          protectedField: boolean;\n          description: string;\n      };\n      role: {\n          protectedField: boolean;\n          description: string;\n      };\n  }\n*/\n")),(0,a.yg)("p",null,"In this example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"TEntityPropsMapper<T>")," utility is a custom defined generic type mapper utility that takes the entity type (",(0,a.yg)("inlineCode",{parentName:"p"},"T"),") as argument. Internally, it generates the union of ",(0,a.yg)("inlineCode",{parentName:"p"},"T"),"'s keys with ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof T"),". It then uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," narrowing operator to loop through the union members to create a new type by applying the index signature syntax. The ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator restricts the keys to union members. The derived type has a new shape in its values."),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," like this in a custom type mapper utility helps achieve type specificity through narrowing and union constraints."),(0,a.yg)("h3",{id:"typescript-keyof-a-remapped-type-example"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof"),": A Remapped Type Example"),(0,a.yg)("p",null,"Let's now look at a modified version of the above example. We'd like to generate a remapped type that uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," operator:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TAccount = {\n  username: string;\n  email: string;\n  password: string;\n  role: string;\n};\n\ntype TEntityPropGetterMapper<T> = {\n  [Property in keyof T as `get${Capitalize<\n    string & Property\n  >}`]: () => T[Property];\n};\n\ntype TAccountProps = TEntityPropGetterMapper<TAccount>;\n/*\n  {\n    getUsername: () => string;\n    getEmail: () => string;\n    getPassword: () => string;\n    getRole: () => string;\n  }\n*/\n")),(0,a.yg)("p",null,"This time, notice that we are applying a remapping of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Property")," name to its getter method with ",(0,a.yg)("inlineCode",{parentName:"p"},"get${Capitalize<string & Property>}()"),". We are basically mapping each property key to give its respective getter method a new name. In a remapped type also, ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," plays a crucial role by constraining the keys to the generated union type."),(0,a.yg)("h3",{id:"typescript-keyof-with-utility-types"},"TypeScript ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")," with Utility Types"),(0,a.yg)("p",null,"We can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator with regular TypeScript transformation utilities."),(0,a.yg)("p",null,"For example, in a scenario where we'd like to hide some fields from the ",(0,a.yg)("inlineCode",{parentName:"p"},"TAccount")," type, we'd derive a new type from it for that purpose. Let's say, we hide the ",(0,a.yg)("inlineCode",{parentName:"p"},"password")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"role")," fields and have an object for it. And then we derive another type with exposed properties. We can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," transformation utility for this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TAccount = {\n  username: string;\n  email: string;\n  password: string;\n  role: string;\n};\n\nconst hiddenFields = {\n  password: "",\n  role: "",\n};\n\ntype TExposedAccountInfo = Omit<TAccount, keyof typeof hiddenFields>;\n/*\n{\n    username: string;\n    email: string;\n}\n*/\n\ntype TAccountLoginOptions = keyof TExposedAccountInfo; // "username" | "email"\n')),(0,a.yg)("p",null,"In this example, we have used the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator for passing the exact keys to be omitted. And they are those in the type for ",(0,a.yg)("inlineCode",{parentName:"p"},"hiddenFields"),"."),(0,a.yg)("p",null,"Notice the returned type is an object type. We have made the returned type an union with another ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"TAccountLoginOptions"),"."),(0,a.yg)("p",null,"The same union in the last ",(0,a.yg)("inlineCode",{parentName:"p"},"TAccountLoginOptions")," type can be obtained with the ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>")," utility type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TAccountLoginOptions = Exclude<keyof TAccount, keyof typeof hiddenFields>;\n")),(0,a.yg)("p",null,"The difference between them is ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," works on object types. And in contrast ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>")," is used only on union of types."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this post, we explored with examples the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator. We learned how it derives union of string and numerical literal types from the keys of an existing object type. We elaborated with a series of examples that ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," play important role in providing type safety through enforcing compatibility and type specificity through narrowing and constraints."),(0,a.yg)("p",null,"We covered the use of ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," in iterating an object with its ",(0,a.yg)("inlineCode",{parentName:"p"},"Object.keys()"),". We saw examples of generic functions and type mapper utilities that uses ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator under the hood. We also explored how to use ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator with TypeScript transformation utilities such as ",(0,a.yg)("inlineCode",{parentName:"p"},"Omit<>")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>"),"."))}g.isMDXComponent=!0}}]);