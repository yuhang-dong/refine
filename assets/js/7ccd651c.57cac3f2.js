"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73367],{58860:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(37953);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},y=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=p,u=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(u,r(r({ref:t},y),{},{components:n})):a.createElement(u,r({ref:t},y))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:p,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});n(37953);var a=n(58860);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}const o={title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",slug:"typescript-mapped-types",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-29-ts-map/social.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/typescript-mapped-types",source:"@site/blog/2024-02-29-ts-map.md",title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",date:"2024-02-29T00:00:00.000Z",formattedDate:"February 29, 2024",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:11.19,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",slug:"typescript-mapped-types",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-02-29-ts-map/social.png",hide_table_of_contents:!1},prevItem:{title:"How do you wrap text content in CSS?",permalink:"/blog/css-text-wrap"},nextItem:{title:"CSS Box Shadow with 25 Examples",permalink:"/blog/box-shadow-css"},relatedPosts:[{title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",permalink:"/blog/typescript-enum",formattedDate:"January 6, 2025",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.055,date:"2025-01-06T00:00:00.000Z"},{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",description:"This post is provides a guide on how to ensure type safety to dictionaries with TypeScript.",permalink:"/blog/typescript-dictionary",formattedDate:"November 11, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:24.605,date:"2024-11-11T00:00:00.000Z"},{title:"Form Schema Validation with Zod and React Hook Form",description:"We'll explore how to use Zod schema validation with React Hook Form in a TypeScript based React application.",permalink:"/blog/zod-typescript",formattedDate:"May 21, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:22.145,date:"2024-05-21T00:00:00.000Z"}],authorPosts:[{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-satisfies-operator",formattedDate:"January 14, 2025",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.435,date:"2025-01-14T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"November 4, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.16,date:"2024-11-04T00:00:00.000Z"},{title:"Adding CRUD Actions and Authentication",description:"We'll initialize our Pixels app using Refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:29.96,date:"2023-02-16T00:00:00.000Z"}]},y={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What are Mapped Types in TypeScript?",id:"what-are-mapped-types-in-typescript",level:2},{value:"How are Mapped Types Created?",id:"how-are-mapped-types-created",level:3},{value:"What is a TS Custom Type Mapper Utility?",id:"what-is-a-ts-custom-type-mapper-utility",level:2},{value:"How Do Custom TS Type Mappers Work?",id:"how-do-custom-ts-type-mappers-work",level:3},{value:"Building Blocks of a Custom TypeScript Type Mapper Utility",id:"building-blocks-of-a-custom-typescript-type-mapper-utility",level:2},{value:"TypeScript Custom Type Mapper Building Blocks: The Index Signature Syntax",id:"typescript-custom-type-mapper-building-blocks-the-index-signature-syntax",level:3},{value:"TS Custom Type Mapper Building Blocks: Union of Types and the <code>in</code> Operator",id:"ts-custom-type-mapper-building-blocks-union-of-types-and-the-in-operator",level:3},{value:"TypeScript Custom Type Mapper: Union of Keys with <code>keyof</code>",id:"typescript-custom-type-mapper-union-of-keys-with-keyof",level:3},{value:"TypeScript Mapped Types with Generic Type Mappers",id:"typescript-mapped-types-with-generic-type-mappers",level:2},{value:"What are TS Custom Generic Type Mappers?",id:"what-are-ts-custom-generic-type-mappers",level:3},{value:"How to Define a TS Custom Generic Type Mapper Utility",id:"how-to-define-a-ts-custom-generic-type-mapper-utility",level:3},{value:"TypeScript Type Mapper Utility vs TS Mapped Type: The Difference",id:"typescript-type-mapper-utility-vs-ts-mapped-type-the-difference",level:3},{value:"TS Custom Type Mapper: Remapping with the <code>as</code> Clause",id:"ts-custom-type-mapper-remapping-with-the-as-clause",level:3},{value:"TypeScript Mapped Types: Key Filtering",id:"typescript-mapped-types-key-filtering",level:3},{value:"When to Use TS Custom Type Mappers?",id:"when-to-use-ts-custom-type-mappers",level:3},{value:"Summary",id:"summary",level:2}],c={toc:m},d="wrapper";function u(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This post provides an in-depth guide on how to derive mapped types in TypeScript."),(0,a.yg)("p",null,"A mapped type in TypeScript is a new type derived from a base type with the help of a custom type mapper utility."),(0,a.yg)("p",null,"Deriving new types with a custom type mapper is a common practice that ensures DRY (Dont' Repeat Yourself) code in a TypeScript codebase. There are a number of ways by which new types are derived in TypeScript and custom mapping is one such technique."),(0,a.yg)("p",null,"A TS type mapper builds on TypeScript's index signature syntax to transform and produce a new type from a union type."),(0,a.yg)("p",null,"In this post, we explore how to define and use custom-type mapper utilities with examples that derive new types from source types. We first understand underlying TypeScript concepts that entail deriving mapped types: the TypeScript index signature syntax, union of types, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operators. We elaborate and see how these concepts can be combined to define custom generic type mapper utilities that map passed-in type parameters into reusable type definitions. We also dig deeper and learn about ways of remapping and applying useful transformations to derived types with the help of the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," operator, and native type utilities like ",(0,a.yg)("inlineCode",{parentName:"p"},"Capitalize<>")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>"),"."),(0,a.yg)("p",null,"Steps to be covered in this post:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-are-mapped-types-in-typescript"},"What are Mapped Types in TypeScript?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-are-mapped-types-created"},"How are Mapped Types Created?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#building-blocks-of-a-custom-typescript-type-mapper-utility"},"Building Blocks of a Custom TypeScript Type Mapper Utility")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typescript-mapped-types-with-generic-type-mappers"},"TypeScript Mapped Types with Generic Type Mappers"))),(0,a.yg)("h2",{id:"what-are-mapped-types-in-typescript"},"What are Mapped Types in TypeScript?"),(0,a.yg)("p",null,"A mapped type in TypeScript is a new type derived from a source type. Mapped types can be trivial as well as complex ones manipulated by a generic type mapper. In a generically mapped type, the keys of the new type are derived by mapping to the keys of the source type."),(0,a.yg)("p",null,"Below are examples of a generically mapped type and its associated source type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"// A generically mapped type:\ntype TThemeSetters = {\n  setDefaultTheme: () => void;\n  setOrientalTheme: () => void;\n  setVikingTheme: () => void;\n  setSpringTheme: () => void;\n  setSantaTheme: () => void;\n};\n\n// Source type from which the above mapped type was derived:\ntype IThemes = {\n  default: {};\n  oriental: {};\n  viking: {};\n  spring: {};\n  santa: {};\n};\n")),(0,a.yg)("p",null,"As we can see, each of the keys in the derived type have been mapped from their corresponding source type keys."),(0,a.yg)("h3",{id:"how-are-mapped-types-created"},"How are Mapped Types Created?"),(0,a.yg)("p",null,"TypeScript mapped types are created via a custom type mapper utility. The mapper utility is defined in a way that it helps customize and transform the mapped type according to new type requirements."),(0,a.yg)("h2",{id:"what-is-a-ts-custom-type-mapper-utility"},"What is a TS Custom Type Mapper Utility?"),(0,a.yg)("p",null,"A custom-type mapper utility is usually a generic type definition that derives a new type from a source type. It takes in the source type as a parameter, performs necessary transformations, and then produces a new separate version with the desired mapped type."),(0,a.yg)("p",null,"During the transformation, the keys and values are transformed as needed. Common transformations made in a type mapper utility include changing key name patterns, the shape of their values, filtering keys, adding keys, making them ",(0,a.yg)("inlineCode",{parentName:"p"},"readonly"),", making properties optional, etc."),(0,a.yg)("p",null,"The custom generic type mapper for the above example looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TThemeSetterMapper<Source> = {\n  [Property in keyof Source as `set${Capitalize<\n    string & Property\n  >}Theme`]: () => void;\n};\n")),(0,a.yg)("h3",{id:"how-do-custom-ts-type-mappers-work"},"How Do Custom TS Type Mappers Work?"),(0,a.yg)("p",null,"As you can see in the above example, a custom type mapper leverages TypeScript's ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/glossary#index-signatures"},"index signature syntax")," to build the derived type. It uses the ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/keyof-types.html"},(0,a.yg)("inlineCode",{parentName:"a"},"keyof"))," type operator to create a union of keys from the source type, the ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing"},(0,a.yg)("inlineCode",{parentName:"a"},"in"))," narrowing operator to loop through the union keys, and assigns types to the values of each key."),(0,a.yg)("p",null,"Where necessary, it uses the ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions"},(0,a.yg)("inlineCode",{parentName:"a"},"as"))," type assertion clause to perform remapping, transformations, and conditional mapping."),(0,a.yg)("h2",{id:"building-blocks-of-a-custom-typescript-type-mapper-utility"},"Building Blocks of a Custom TypeScript Type Mapper Utility"),(0,a.yg)("p",null,"Before we get into the mechanics of the above examples, in this section, we spend some time to get a fair understanding of the above-mentioned underlying building blocks that make a custom-type mapper utility."),(0,a.yg)("h3",{id:"typescript-custom-type-mapper-building-blocks-the-index-signature-syntax"},"TypeScript Custom Type Mapper Building Blocks: The Index Signature Syntax"),(0,a.yg)("p",null,"TypeScript index signature syntax forms the most important component of a custom type mapper. An example looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TThemeAction = {\n  [key: string]: {\n    start: string;\n    end: string;\n  };\n};\n")),(0,a.yg)("p",null,"In this most basic example, we are allowing an arbitrary string property to be set inside a theme action object. The value has to be an object with ",(0,a.yg)("inlineCode",{parentName:"p"},"start")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"end")," properties, both of which must have ",(0,a.yg)("inlineCode",{parentName:"p"},"string")," values."),(0,a.yg)("p",null,"Using index signatures this way, however, is unconstrained, as we can add as many properties as we possibly could -- something that is not helpful for type specificity."),(0,a.yg)("h3",{id:"ts-custom-type-mapper-building-blocks-union-of-types-and-the-in-operator"},"TS Custom Type Mapper Building Blocks: Union of Types and the ",(0,a.yg)("inlineCode",{parentName:"h3"},"in")," Operator"),(0,a.yg)("p",null,"TypeScript custom type mappers utilize a union of types to enforce type specificity by limiting properties to members of the union. The union members are then looped over with the ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," operator and mapped to members of the new type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TThemeName = "default" | "oriental" | "viking" | "spring" | "santa";\n\ntype TThemeAction = {\n  [name in TThemeName]: {\n    start: string;\n    end: string;\n  };\n};\n')),(0,a.yg)("p",null,"In the example above, we have the ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeName")," type, which is a union of ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"s that limits the mapped type's keys to the union members. So, the index signature with the ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeName")," union maps to the following ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeAction")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TThemeAction = {\n  default: {\n    start: string;\n    end: string;\n  };\n  oriental: {\n    start: string;\n    end: string;\n  };\n  viking: {\n    start: string;\n    end: string;\n  };\n  spring: {\n    start: string;\n    end: string;\n  };\n  santa: {\n    start: string;\n    end: string;\n  };\n};\n")),(0,a.yg)("p",null,"As you can see, mapping types with index signatures is proving already useful in deriving an object type with crowded keys. Thanks to TypeScript custom type mapping, we are able to easily produce an oversized shape which we'd otherwise be overwhelmed with."),(0,a.yg)("h3",{id:"typescript-custom-type-mapper-union-of-keys-with-keyof"},"TypeScript Custom Type Mapper: Union of Keys with ",(0,a.yg)("inlineCode",{parentName:"h3"},"keyof")),(0,a.yg)("p",null,"Mapping types in TypeScript is more useful when we have a complex source type. One example would be theme definitions that typically involve a myriad of nested properties:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'interface IThemes {\n  default: {\n    /*...nested theme stuff here */\n  };\n  oriental: {\n    /*...nested theme stuff here */\n  };\n  viking: {\n    /*...nested theme stuff here */\n  };\n  spring: {\n    /*...nested theme stuff here */\n  };\n  santa: {\n    /*...nested theme stuff here */\n  };\n}\n\ntype TThemeName = keyof IThemes; // Equivalent to: "default" | "oriental" | "viking" | "spring" | "santa";\n\ntype TThemeAction = {\n  [name in TThemeName]: {\n    start: string;\n    end: string;\n  };\n}; // Produces the same TThemeAction map as in the previous example with plain union type\n')),(0,a.yg)("p",null,"In this case, we have a sophisticated ",(0,a.yg)("inlineCode",{parentName:"p"},"IThemes")," type that usually involves nested members, which pose a challenge to derive or transform types manually or using TypeScript's native utilities."),(0,a.yg)("p",null,"Notice the ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeName")," type this time. And how we are able to get the necessary union type from the source type keys (",(0,a.yg)("inlineCode",{parentName:"p"},"IThemes"),") with the ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operator. Also notice how it produces the same ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeAction")," type as in the previous occasion."),(0,a.yg)("h2",{id:"typescript-mapped-types-with-generic-type-mappers"},"TypeScript Mapped Types with Generic Type Mappers"),(0,a.yg)("p",null,"Okay, so far we have been mapping the source type directly. Custom-type mappers are efficient when they are DRY and reusable with a generic definition. So, in this section, we explore examples of generic custom-type mappers."),(0,a.yg)("h3",{id:"what-are-ts-custom-generic-type-mappers"},"What are TS Custom Generic Type Mappers?"),(0,a.yg)("p",null,"Generic type mappers in TypeScript accept the source type as a parameter and any additional parameters to perform necessary transformations on the source type's keys and values."),(0,a.yg)("h3",{id:"how-to-define-a-ts-custom-generic-type-mapper-utility"},"How to Define a TS Custom Generic Type Mapper Utility"),(0,a.yg)("p",null,"Below is an example of how to define a generic version of the above ",(0,a.yg)("inlineCode",{parentName:"p"},"TThemeAction")," type definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TAction<Actors> = {\n  [Property in keyof Actors]: {\n    start: string;\n    end: string;\n  };\n};\n\ntype TThemeAction = TAction<IThemes>; // Produces the same `TThemeAction` mapped type\n")),(0,a.yg)("p",null,"Here, we have refactored the type mapper to a generic that takes the source type (",(0,a.yg)("inlineCode",{parentName:"p"},"Actor"),") as a parameter and then uses it to make the transformations. This makes the type mapper reusable."),(0,a.yg)("p",null,"We can make the mapper more versatile by passing the value of the key as parameter as well:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type IThemes = {\n  default: {};\n  oriental: {};\n  viking: {};\n  spring: {};\n  santa: {};\n};\n\ntype TAction<Actors, Value> = {\n  [Property in keyof Actors]: Value;\n};\n\ntype TThemeAction = TAction<IThemes, { start: string; end: string }>; // Produces the same `TThemeAction` mapped type\n")),(0,a.yg)("p",null,"This time around, we are passing both the source type and the shape of the value of each key as params. This way, our type mapper is more adjustable to diverse use cases with various target shapes."),(0,a.yg)("h3",{id:"typescript-type-mapper-utility-vs-ts-mapped-type-the-difference"},"TypeScript Type Mapper Utility vs TS Mapped Type: The Difference"),(0,a.yg)("p",null,"It should be obvious by now that both the type mapper utility and the mapped type derived from it are TypeScript types. In other words, they are expressed as types."),(0,a.yg)("p",null,"One important difference is that TypeScript ",(0,a.yg)("strong",{parentName:"p"},"type mappers are type definitions"),", while mapped types are type assignments declared from those definitions."),(0,a.yg)("h3",{id:"ts-custom-type-mapper-remapping-with-the-as-clause"},"TS Custom Type Mapper: Remapping with the ",(0,a.yg)("inlineCode",{parentName:"h3"},"as")," Clause"),(0,a.yg)("p",null,"With a TypeScript type mapper, we can apply different sorts of transformations to the source keys. We can change the pattern of key identifiers, filter, or add new keys. We use the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," clause to modify the key sets and their identifiers."),(0,a.yg)("p",null,"For example, in a scenario where we need a type that describes the setter functions of all the theme items in the ",(0,a.yg)("inlineCode",{parentName:"p"},"IThemes")," object above, we can easily derive new identifiers that produce a theme setter type by transforming the key identifiers. As with the following mapper:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type IThemes = {\n  default: {};\n  oriental: {};\n  viking: {};\n  spring: {};\n  santa: {};\n};\n\ntype TThemeSetterMapper<Source> = {\n  [Property in keyof Source as `set${Capitalize<\n    string & Property\n  >}Theme`]: (theme: {}) => void;\n};\n\ntype TThemeSetters = TThemeSetterMapper<IThemes>;\n// Produces the following type:\n/*\ntype TThemeSetters = {\n    setDefaultTheme: (theme: {}) => void;\n    setOrientalTheme: (theme: {}) => void;\n    setVikingTheme: (theme: {}) => void;\n    setSpringTheme: (theme: {}) => void;\n    setSantaTheme: (theme: {}) => void;\n};\n*/\n")),(0,a.yg)("p",null,"We can refactor this even further to make the setter mapper more generic:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TSetterMapper<Source, SetterTarget> = {\n  [Property in keyof Source as `set${Capitalize<string & Property>}${Capitalize<\n    string & SetterTarget\n  >}`]: (theme: {}) => void;\n};\n\ntype TThemeSetters = TSetterMapper<IThemes, "Theme">; // Produces the same mapped type of theme setters as above\n')),(0,a.yg)("p",null,"Notice in both occasions, we are transforming the key identifiers with TypeScript's ",(0,a.yg)("inlineCode",{parentName:"p"},"Capitalize<>")," utility. Native TypeScript transformation utilities are instrumental in deriving custom-mapped types."),(0,a.yg)("h3",{id:"typescript-mapped-types-key-filtering"},"TypeScript Mapped Types: Key Filtering"),(0,a.yg)("p",null,"While deriving a mapped type, we can apply key filtering with the ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>")," utility."),(0,a.yg)("p",null,"For example, we can remove keys if we need to. Below is an example that let's us derive a mapped type with keys of our choice removed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TFilterMapper<Source, Keys> = {\n  [Property in keyof Source as Exclude<Property, Keys>]: Source[Property];\n};\n\ntype TFilteredThemes = TFilterMapper<IThemes, "santa" | "spring">;\n')),(0,a.yg)("p",null,"Here, we are using the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>")," utility to filter the keys of our choice from the union of keys generated to ",(0,a.yg)("inlineCode",{parentName:"p"},"Source"),". Passing ",(0,a.yg)("inlineCode",{parentName:"p"},"Keys")," as a parameter to the mapper allows us to selectively pass the keys to be excluded in the derived type. The resulting type has ",(0,a.yg)("inlineCode",{parentName:"p"},"santa")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"spring")," removed from its shape:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type TFilteredThemes = {\n  default: {};\n  oriental: {};\n  viking: {};\n};\n")),(0,a.yg)("p",null,"Notice again that, the ",(0,a.yg)("inlineCode",{parentName:"p"},"TFilterMapper")," is reusable. This means we can filter any source type to exclude any keys. For example, it can be used for filtering other source types:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type TNotificationOptions = {\n  desktop: boolean;\n  email: boolean;\n  mobile: boolean;\n};\n\ntype TFilteredNotificationOptions = TFilterMapper<\n  TNotificationOptions,\n  "mobile"\n>;\n// Produces the following type:\n/*\ntype TFilteredNotificationOptions = {\n    desktop: boolean;\n    email: boolean;\n};\n*/\n')),(0,a.yg)("p",null,"Notice, in this case, we have directly mapped the value to its original type with ",(0,a.yg)("inlineCode",{parentName:"p"},"Source[Property]"),"."),(0,a.yg)("h3",{id:"when-to-use-ts-custom-type-mappers"},"When to Use TS Custom Type Mappers?"),(0,a.yg)("p",null,"TypeScript mapped types are needed to derive types from key application entity types, such as configuration objects, backend API data shapes."),(0,a.yg)("p",null,"The general intent is to provide type safety to mission-critical application entities and reduce runtime errors ahead of time. In terms of developer experience, mapping complex types to newer derivations with custom-type mappers provides convenience and development efficiency."),(0,a.yg)("p",null,"Custom TypeScript Mapped Types are used for:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deriving new types with transformed keys."),(0,a.yg)("li",{parentName:"ul"},"Producing new types with filtered keys."),(0,a.yg)("li",{parentName:"ul"},"Deriving mapped types with added keys."),(0,a.yg)("li",{parentName:"ul"},"Mapping to new types with transformed values."),(0,a.yg)("li",{parentName:"ul"},"Defining reusable generic utilities."),(0,a.yg)("li",{parentName:"ul"},"Deriving safer types with ",(0,a.yg)("inlineCode",{parentName:"li"},"readonly")," properties."),(0,a.yg)("li",{parentName:"ul"},"Deriving partial types with optional properties.")),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this post, we explored in significant depth the use of TypeScript mapped types with custom type mappers. We first learned what mapped types and custom type mappers are. We then we examined the index signature syntax, union types, the ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"keyof")," operators, and how they are used in a custom type mapper in TypeScript."),(0,a.yg)("p",null,"We then explored with examples of how to derive mapped types from complex ",(0,a.yg)("inlineCode",{parentName:"p"},"IThemes")," type with the help of custom defined generic type mapper utilities. Towards the end, we covered examples that demonstrate how to transform keys and their values with the TypeScript ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," clause, ",(0,a.yg)("inlineCode",{parentName:"p"},"Exclude<>"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"Capitalize<>")," utilities."))}u.isMDXComponent=!0}}]);