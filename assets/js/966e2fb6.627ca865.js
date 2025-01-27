"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85965],{58860:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},y=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return n?i.createElement(g,r(r({ref:t},y),{},{components:n})):i.createElement(g,r({ref:t},y))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",slug:"typescript-satisfies-operator",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-15-ts-satisfies/social-2.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/typescript-satisfies-operator",source:"@site/blog/2025-01-14-ts-satisfies.md",title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",date:"2025-01-14T00:00:00.000Z",formattedDate:"January 14, 2025",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:13.435,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",slug:"typescript-satisfies-operator",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-15-ts-satisfies/social-2.png",hide_table_of_contents:!1},prevItem:{title:"A Definitive guide on JavaScript every Method",permalink:"/blog/javascript-every-method"},nextItem:{title:"Essentials of TypeScript Classes",permalink:"/blog/typescript-classes"},relatedPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"December 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.51,date:"2024-12-17T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"December 18, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.25,date:"2024-12-18T00:00:00.000Z"},{title:"Form Schema Validation with Zod and React Hook Form",description:"We'll explore how to use Zod schema validation with React Hook Form in a TypeScript based React application.",permalink:"/blog/zod-typescript",formattedDate:"May 21, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:22.145,date:"2024-05-21T00:00:00.000Z"}],authorPosts:[{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"December 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.29,date:"2024-12-31T00:00:00.000Z"},{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",permalink:"/blog/typescript-decorators",formattedDate:"January 9, 2025",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.845,date:"2025-01-09T00:00:00.000Z"},{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"September 16, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.035,date:"2024-09-16T00:00:00.000Z"}]},y={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript Setup",id:"typescript-setup",level:3},{value:"Prior Knowledge",id:"prior-knowledge",level:3},{value:"What is the TypeScript satisfies Operator ?",id:"what-is-the-typescript-satisfies-operator-",level:2},{value:"TypeScript satisfies Leverages Contextual Typing",id:"typescript-satisfies-leverages-contextual-typing",level:3},{value:"TypeScript satisfies - Annotated Type Has Precedence Over <code>satisfies</code> Type",id:"typescript-satisfies---annotated-type-has-precedence-over-satisfies-type",level:3},{value:"TypeScript satisfies - Checking for Property Value Conformance",id:"typescript-satisfies---checking-for-property-value-conformance",level:2},{value:"TypeScript satisfies - Property Name Constraining",id:"typescript-satisfies---property-name-constraining",level:2},{value:"TypeScript satisfies - Property Name Fulfillment",id:"typescript-satisfies---property-name-fulfillment",level:2},{value:"TypeScript satisfies - Optional Member Conformance",id:"typescript-satisfies---optional-member-conformance",level:2},{value:"Advanced Use: Combining satisfies with Utility Types",id:"advanced-use-combining-satisfies-with-utility-types",level:2},{value:"Using satisfies with Pick",id:"using-satisfies-with-pick",level:3},{value:"Using satisfies with <code>Omit&lt;&gt;</code>",id:"using-satisfies-with-omit",level:3},{value:"Performance Implications and Best Practices",id:"performance-implications-and-best-practices",level:2},{value:"It&#39;s Compile-Time Only",id:"its-compile-time-only",level:3},{value:"When to Use satisfies",id:"when-to-use-satisfies",level:3},{value:"When Not to Use satisfies",id:"when-not-to-use-satisfies",level:3},{value:"Don&#39;t Go Overboard",id:"dont-go-overboard",level:3},{value:"Combine with Utility Types",id:"combine-with-utility-types",level:3},{value:"FAQs About the satisfies Operator in TypeScript",id:"faqs-about-the-satisfies-operator-in-typescript",level:2},{value:"1. What is the purpose of the satisfies operator in TypeScript?",id:"1-what-is-the-purpose-of-the-satisfies-operator-in-typescript",level:3},{value:"2. How is satisfies different from type annotations?",id:"2-how-is-satisfies-different-from-type-annotations",level:3},{value:"3. Will satisfied work with utility types like Partial or Record?",id:"3-will-satisfied-work-with-utility-types-like-partial-or-record",level:3},{value:"4. What happens when I don&#39;t specify a property if using satisfies?",id:"4-what-happens-when-i-dont-specify-a-property-if-using-satisfies",level:3},{value:"5. Can I use satisfies to validate nested object properties?",id:"5-can-i-use-satisfies-to-validate-nested-object-properties",level:3},{value:"Summary",id:"summary",level:2}],c={toc:d},m="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(m,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"This article was last updated on January 14, 2025, to include best practices for using the TypeScript satisfies operator, a detailed table comparing satisfies with type annotations and assertions, and tips for avoiding common mistakes when validating nested object types, using utility types like Partial, and working with complex type structures.")),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"This post is about how to use TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," operator to effectively apply property value conformance in complex object types with nested properties."),(0,i.yg)("p",null,"TypeScript's ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," operator comes with a few features that allow developers to check and validate the value of a variable against a given type. It was introduced in version ",(0,i.yg)("inlineCode",{parentName:"p"},"v4.9")," specifically to match type of variable values after their assignment, rather than setting an annotation prior to it."),(0,i.yg)("p",null,"As of the features added to the current iteration (dating November, 2023), ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," supports property value conformance, property name constraining and property name fulfillment -- largely associated with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," utility type. It also allows optional member conformance with partial types transformed with ",(0,i.yg)("inlineCode",{parentName:"p"},"Partial<>"),"."),(0,i.yg)("p",null,"In this post, we get into the details of using TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," while validating types of property values in a fairly nested user (",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),") object. We first consider how ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," is focused on type checking and validation of variable values, rather than their annotation. We explore examples that further illustrate type validation of nested properties of objects - which we transform with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," utility. We also understand how ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," is geared to handle associated property name constraining and fulfillment that come with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," type. In the end, we go through an example of partial member conformance with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Partial<>")," transformation utility."),(0,i.yg)("p",null,"Step by step, we'll cover the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#what-is-the-typescript-satisfies-operator-"},"What is the TypeScript satisfies Operator ?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-satisfies---checking-for-property-value-conformance"},"TypeScript satisfies - Checking for Property Value Conformance")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-satisfies---property-name-constraining"},"TypeScript satisfies - Property Name Constraining")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-satisfies---property-name-fulfillment"},"TypeScript satisfies - Property Name Fulfillment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#typescript-satisfies---optional-member-conformance"},"TypeScript satisfies - Optional Member Conformance")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#advanced-use-combining-satisfies-with-utility-types"},"Advanced Use: Combining satisfies with Utility Types")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#performance-implications-and-best-practices"},"Performance Implications and Best Practices")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#faqs-about-the-satisfies-operator-in-typescript"},"FAQs About the satisfies Operator in TypeScript"))),(0,i.yg)("h3",{id:"typescript-setup"},"TypeScript Setup"),(0,i.yg)("p",null,"Your JavaScript engine has to have TypeScript installed. It could be ",(0,i.yg)("a",{parentName:"p",href:"https://nodejs.org/en"},(0,i.yg)("strong",{parentName:"a"},"Node.js"))," in your local machine with TypeScript supported or you could use the ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/play#code"},"TypeScript Playground"),"."),(0,i.yg)("h3",{id:"prior-knowledge"},"Prior Knowledge"),(0,i.yg)("p",null,"The TypeScript concepts covered in this post range from Intermediate to Advanced. We assume you are already familiar with the following:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"},"TypeScript Union Types")),(0,i.yg)("li",{parentName:"ol"},"Typing a variable in TypeScript. If you are not already familiar with this, please go through the examples ",(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables"},"here")),(0,i.yg)("li",{parentName:"ol"},"Typing an object literal in TypeScript. More ",(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html"},"here")),(0,i.yg)("li",{parentName:"ol"},"Utility types, particularly how to transform types with the ",(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"},(0,i.yg)("inlineCode",{parentName:"a"},"Record<>"))," and ",(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype"},(0,i.yg)("inlineCode",{parentName:"a"},"Partial<>"))," utilities. Feel free to get a refesher on all TypeScript utility types from the ",(0,i.yg)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"docs here"))),(0,i.yg)("h2",{id:"what-is-the-typescript-satisfies-operator-"},"What is the TypeScript satisfies Operator ?"),(0,i.yg)("p",null,"TypeScript's ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," operator is a syntax that helps developers validate the type of a variable's value after assignment. It does this by first matching the value to the type and then remembering the internals of the matched type, i.e. the properties and methods. As such, ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," keeps track of the types of the nested property values, helps catching otherwise uncaught TypeScript errors, and complying deeply with nested property types as well. It is thus a syntax aimed specifically for validating types on nested property values of objects with certain degrees of complexity."),(0,i.yg)("p",null,"Here's a nested ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," user object example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Old Avenue",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,i.yg)("p",null,"Notice in the example that, we have used ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser")," on ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," for its value validation with ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". And ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser")," is a transformed record with ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<UserKeys, string | TAddress>")),(0,i.yg)("h3",{id:"typescript-satisfies-leverages-contextual-typing"},"TypeScript satisfies Leverages Contextual Typing"),(0,i.yg)("p",null,"It is necessary to understand that type inference before assignment is different from type validation of the assigned value with ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". In other words, ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," above has a contextual typing: its type is set to itself and then ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," checks ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),"'s internals against it to validate the types for all properties and their values, including nested ones. You can find ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),"'s type when you hover over ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),". You'll see this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"// joe's inferred type is the object itself\n\nconst joe: {\n  username: string;\n  email: string;\n  firstName: string;\n  lastName: string;\n  address: {\n    addressLine1: string;\n    addressLine2: string;\n    postCode: number;\n    city: string;\n    state: string;\n    country: string;\n  };\n};\n")),(0,i.yg)("h3",{id:"typescript-satisfies---annotated-type-has-precedence-over-satisfies-type"},"TypeScript satisfies - Annotated Type Has Precedence Over ",(0,i.yg)("inlineCode",{parentName:"h3"},"satisfies")," Type"),(0,i.yg)("p",null,"When we explicitly annotate the variable ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),", the annotated type gains precedence during type checking over the one passed to ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". We get errors indicating the annotated type's loose specificity on its nested properties. Notice the ",(0,i.yg)("inlineCode",{parentName:"p"},"2339")," error when we annotate ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\n// highlight-next-line\nconst joe: TUser = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // Property \'postCode\' does not exist on type \'string | TAddress\'. Property \'postCode\' does not exist on type \'string\'.(2339)\n')),(0,i.yg)("p",null,"In the modification above, we are using the same ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser")," type for both annotating ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," and for validating it with ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". Clearly, since annotating with ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser")," gains precedence, it doesn't keep track of the internal information we are trying to get from inside the ",(0,i.yg)("inlineCode",{parentName:"p"},"address")," object nested in ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),". TypeScript confuses the ",(0,i.yg)("inlineCode",{parentName:"p"},"TAddress")," type with the other ones typed with ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,i.yg)("p",null,"The point to be delivered here is that type inference or annotation of the variable declaration, ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),", is not the same thing as type validation of its value with ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". And ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," is not intended for annotation, but rather largely for validating conformance."),(0,i.yg)("h2",{id:"typescript-satisfies---checking-for-property-value-conformance"},"TypeScript satisfies - Checking for Property Value Conformance"),(0,i.yg)("p",null,"Annotating ",(0,i.yg)("inlineCode",{parentName:"p"},"joe")," above with ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser")," prevents access to ",(0,i.yg)("inlineCode",{parentName:"p"},"joe.address")," on the grounds of TypeScript's ",(0,i.yg)("em",{parentName:"p"},"typal dissonance")," between the union members: ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"TAddress"),". Removing it and reinstating validation with ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," restores clarity and access, because ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," keeps track of the types of all property names and values at nested levels:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,i.yg)("p",null,"Since we are using a number for ",(0,i.yg)("inlineCode",{parentName:"p"},"joe.address.postCode")," above, ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," correctly tracks it and no longer leads to the ",(0,i.yg)("inlineCode",{parentName:"p"},"2339")," error."),(0,i.yg)("h2",{id:"typescript-satisfies---property-name-constraining"},"TypeScript satisfies - Property Name Constraining"),(0,i.yg)("p",null,"Notice that we are using the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," utility to derive a record type for the user. TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," is generally used in conjunction with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," type. And as you notice already, we are applying property name constraints to limit ",(0,i.yg)("inlineCode",{parentName:"p"},"TUser"),"'s keys with: ",(0,i.yg)("inlineCode",{parentName:"p"},'type UserKeys = "username" | "email" | "firstName" | "lastName" | "address";'),"."),(0,i.yg)("p",null,"Due to this, property overloading is prevented. In the below version, ",(0,i.yg)("inlineCode",{parentName:"p"},"role")," is not included in ",(0,i.yg)("inlineCode",{parentName:"p"},"UserKeys"),", so we get a complain:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n\n  // Complains about property overloading\n  // highlight-start\n  role: "Admin", // Object literal may only specify known properties, and \'role\' does not exist in type \'TUser\'.(1360)\n  // highlight-end\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,i.yg)("h2",{id:"typescript-satisfies---property-name-fulfillment"},"TypeScript satisfies - Property Name Fulfillment"),(0,i.yg)("p",null,"Similarly, if we have a missing property in ",(0,i.yg)("inlineCode",{parentName:"p"},"joe"),", we get accused till we get all properties included:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  // lastName missing\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n  // Complains about missing property at `satisfies`\n  // highlight-next-line\n} satisfies TUser; //  Property \'lastName\' is missing in type \'{ username: string; email: string; firstName: string; address: { addressLine1: string; addressLine2: string; postCode: number; city: string; state: string; country: string; }; }\' but required in type \'TUser\'.(1360)\n')),(0,i.yg)("h2",{id:"typescript-satisfies---optional-member-conformance"},"TypeScript satisfies - Optional Member Conformance"),(0,i.yg)("p",null,"Instead of mandatory property name fulfillment, we can force an optional member conformance with a ",(0,i.yg)("inlineCode",{parentName:"p"},"Partial<>")," transformation. In the following update, there's no complains about any missing property (",(0,i.yg)("inlineCode",{parentName:"p"},"lastName"),"). We are all good:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n  // highlight-next-line\n} satisfies Partial<TUser>; // No complains about missing `lastName`\n')),(0,i.yg)("h2",{id:"advanced-use-combining-satisfies-with-utility-types"},"Advanced Use: Combining satisfies with Utility Types"),(0,i.yg)("p",null,"You know how we've been using satisfies to validate object types? Well, you can take it up a notch by combining it with other utility types like ",(0,i.yg)("inlineCode",{parentName:"p"},"Pick<>"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Omit<>")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly<>")," . These combos are super handy when you want more control over what parts of a type you're validating."),(0,i.yg)("h3",{id:"using-satisfies-with-pick"},"Using satisfies with Pick"),(0,i.yg)("p",null,"Let's say you only care about a couple of fields from a bigger type. With ",(0,i.yg)("inlineCode",{parentName:"p"},"Pick<>")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),", you can validate just those fields:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'type TUser = {\n  username: string;\n  email: string;\n  firstName: string;\n  lastName: string;\n  address: {\n    city: string;\n    state: string;\n    country: string;\n  };\n};\n\ntype UserMinimal = Pick<TUser, "username" | "email">;\n\nconst minimalUser = {\n  username: "joe_hiyden",\n  email: "joe@example.com",\n} satisfies UserMinimal;\n\nconsole.log(minimalUser.username); // "joe_hiyden"\nconsole.log(minimalUser.email); // "joe@example.com"\n')),(0,i.yg)("p",null,"See? We only checked username and email, and ignored everything else. Clean and simple!"),(0,i.yg)("h3",{id:"using-satisfies-with-omit"},"Using satisfies with ",(0,i.yg)("inlineCode",{parentName:"h3"},"Omit<>")),(0,i.yg)("p",null,"Now, imagine the opposite: you want to skip certain fields. Enter ",(0,i.yg)("inlineCode",{parentName:"p"},"Omit<>")," . Here's how it works:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'type TUser = {\n  username: string;\n  email: string;\n  firstName: string;\n  lastName: string;\n  address: {\n    city: string;\n    state: string;\n    country: string;\n  };\n};\n\ntype UserWithoutAddress = Omit<TUser, "address">;\n\nconst userWithoutAddress = {\n  username: "joe_hiyden",\n  email: "joe@example.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n} satisfies UserWithoutAddress;\n\nconsole.log(userWithoutAddress.firstName); // "Joe"\n')),(0,i.yg)("p",null,"Boom! No address field needed, but everything else is validated. This trick is a lifesaver when working with partial data."),(0,i.yg)("p",null,"By combining satisfies with utility types like ",(0,i.yg)("inlineCode",{parentName:"p"},"Pick<>")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Omit<>"),", you can create more focused and efficient type validations, keeping your code both clean and robust."),(0,i.yg)("h2",{id:"performance-implications-and-best-practices"},"Performance Implications and Best Practices"),(0,i.yg)("p",null,"Okay, let's get real for a second. While satisfies is awesome, you need to use it judiciously. Here are some tips which will keep your code efficient and clean:"),(0,i.yg)("h3",{id:"its-compile-time-only"},"It's Compile-Time Only"),(0,i.yg)("p",null,"The satisfies operator works only during TypeScript's compile-time checks. This operator doesn't generate any runtime code and hence has no impact on performance. Think of it as a safety net for your types."),(0,i.yg)("h3",{id:"when-to-use-satisfies"},"When to Use satisfies"),(0,i.yg)("p",null,"Use satisfies when:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You're working with complex objects containing many nested properties."),(0,i.yg)("li",{parentName:"ul"},"You need super strict type validation (e.g., ",(0,i.yg)("inlineCode",{parentName:"li"},"Record<>"),")."),(0,i.yg)("li",{parentName:"ul"},"The usual type annotations (: Type) aren't enough.")),(0,i.yg)("h3",{id:"when-not-to-use-satisfies"},"When Not to Use satisfies"),(0,i.yg)("p",null,"Skip it if:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You're just dealing with simple objects. A basic : Type annotation will do the job."),(0,i.yg)("li",{parentName:"ul"},"You want runtime validation. Then, zod or io-ts may be better suited.")),(0,i.yg)("h3",{id:"dont-go-overboard"},"Don't Go Overboard"),(0,i.yg)("p",null,"It's tempting to use satisfies for everything, but don't. Keep it for when type validation really matters. Otherwise, it will make your code hard to read and maintain."),(0,i.yg)("h3",{id:"combine-with-utility-types"},"Combine with Utility Types"),(0,i.yg)("p",null,"When you combine ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," with utility types like ",(0,i.yg)("inlineCode",{parentName:"p"},"Partial<>")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Pick<>")," , you can create reusable, modular type definitions. This makes your code cleaner and more maintainable."),(0,i.yg)("h2",{id:"faqs-about-the-satisfies-operator-in-typescript"},"FAQs About the satisfies Operator in TypeScript"),(0,i.yg)("p",null,"Five of the most frequently asked questions about the Satisfies operator follow, along with examples that serve to make the answer obvious."),(0,i.yg)("h3",{id:"1-what-is-the-purpose-of-the-satisfies-operator-in-typescript"},"1. What is the purpose of the satisfies operator in TypeScript?"),(0,i.yg)("p",null,"The satisfies operator checks that a value is of a certain type after assignment. It doesn't change the inferred type of the variable, but it always enforces its value to be of the type provided."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'type User = {\n  username: string;\n  age: number;\n};\n\nconst joe = {\n  username: "joe_hiyden",\n  age: 30,\n} satisfies User; // asserts `joe` fits `User`\n\nconsole.log(joe.username); // Works fine\n')),(0,i.yg)("h3",{id:"2-how-is-satisfies-different-from-type-annotations"},"2. How is satisfies different from type annotations?"),(0,i.yg)("p",null,"Type annotations (: Type) explicitly set the type of a variable. satisfies, on the other hand, validates the value and lets TypeScript infer the type of the variable."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'type User = {\n  username: string;\n  age: number;\n};\n\n// Type annotation\nconst annotatedUser: User = { username: "joe", age: 30 };\n\n// Using `satisfies`\nconst validatedUser = {\n  username: "joe",\n  age: 30,\n} satisfies User;\n\n// `validatedUser` keeps its original inferred type:\nconsole.log(typeof validatedUser); // It\'s the same object type, not forced to `User`\n')),(0,i.yg)("h3",{id:"3-will-satisfied-work-with-utility-types-like-partial-or-record"},"3. Will satisfied work with utility types like Partial or Record?"),(0,i.yg)("p",null,"Yes! The satisfies operator works great with utility types like Partial or Record to validate objects with flexible or constrained properties."),(0,i.yg)("p",null,"Using Partial"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'type User = {\n  username: string;\n  email?: string;\n  age?: number;\n};\n\nconst partialUser = {\n  username: "joe_hiyden",\n} satisfies Partial<User>; // No complaints, optional fields are fine\n\nconsole.log(partialUser.username); // "joe_hiyden"\n')),(0,i.yg)("p",null,"Using Record"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'type Roles = "admin" | "editor" | "viewer";\ntype Permissions = Record<Roles, boolean>;\n\nconst permissions = {\n  admin: true,\n  editor: false,\n  viewer: true,\n} satisfies Permissions; // Ensures all roles are covered\n')),(0,i.yg)("h3",{id:"4-what-happens-when-i-dont-specify-a-property-if-using-satisfies"},"4. What happens when I don't specify a property if using satisfies?"),(0,i.yg)("p",null,"If there is a missing property that is required by TypeScript, then it will throw an error to ensure the object fully conformed to the provided type."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"type User = {\n  username: string;\n  email: string;\n};\n\nconst incompleteUser = {\n  username: \"joe_hiyden\",\n  // Missing `email` here!\n} satisfies User; // Error: Property 'email' is missing\n")),(0,i.yg)("h3",{id:"5-can-i-use-satisfies-to-validate-nested-object-properties"},"5. Can I use satisfies to validate nested object properties?"),(0,i.yg)("p",null,"Absolutely! satisfies is particularly useful for deeply nested objects. It ensures that all nested properties match the expected types."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'type Address = {\n  city: string;\n  postalCode: string | number;\n};\n\ntype User = {\n  username: string;\n  address: Address;\n};\n\nconst nestedUser = {\n  username: "joe_hiyden",\n  address: {\n    city: "New York",\n    postalCode: 12345,\n  },\n} satisfies User;\n\nconsole.log(nestedUser.address.city); // "New York"\n')),(0,i.yg)("p",null,"If any property in address didn't match, TypeScript would catch it immediately. These FAQs cover some of the most common questions developers have about the satisfies operator."),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"In this post, we covered the ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," operator, a ",(0,i.yg)("inlineCode",{parentName:"p"},"v4.9")," addition to TypeScript. We discovered that TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," offers a set of features primarily aimed for type validation of assigned variable values and their nested properties and values. We illustrated through examples that the ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," operator is used in conjunction with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," utility type."),(0,i.yg)("p",null,"In our examples, we found out that property name constraining, fulfillment associated with a ",(0,i.yg)("inlineCode",{parentName:"p"},"Record<>")," derived type are handled well by TypeScript ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies"),". Finally, we also saw how ",(0,i.yg)("inlineCode",{parentName:"p"},"satisfies")," can be used to enforce partial member conformance with ",(0,i.yg)("inlineCode",{parentName:"p"},"Partial<>")," transformation of a variable's value."))}g.isMDXComponent=!0}}]);