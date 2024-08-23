"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20341],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(n),m=o,u=y["".concat(r,".").concat(m)]||y[m]||c[m]||s;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[y]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>y});n(37953);var a=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",slug:"meta-stylex",authors:"abdullah_numan",tags:["react","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-13-stylex-post/social.png",hide_table_of_contents:!1},r=void 0,p={permalink:"/blog/meta-stylex",source:"@site/blog/2023-12-13-stylex-post.md",title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",date:"2023-12-13T00:00:00.000Z",formattedDate:"December 13, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"css",permalink:"/blog/tags/css"}],readingTime:11.11,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",slug:"meta-stylex",authors:"abdullah_numan",tags:["react","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-13-stylex-post/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",permalink:"/blog/kubernetes-persistent-volumes"},nextItem:{title:"Understanding the Basics of Kubernetes CronJob",permalink:"/blog/kubernetes-cron-jobs"},relatedPosts:[{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",permalink:"/blog/material-ui-modal",formattedDate:"May 9, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:11.215,date:"2023-05-09T00:00:00.000Z"},{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.65,date:"2023-12-07T00:00:00.000Z"},{title:"How to use Material UI Tooltip",description:"We'll discover the Material UI Tooltip component with examples",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.54,date:"2022-11-29T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"February 2, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.92,date:"2024-02-02T00:00:00.000Z"},{title:"Essentials of TypeScript Classes",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-classes",formattedDate:"November 7, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.06,date:"2023-11-07T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},y=[{value:"Introduction",id:"introduction",level:2},{value:"CSS-in-JS with Stylex and TypeScript",id:"css-in-js-with-stylex-and-typescript",level:2},{value:"Styling a Next.js App with Stylex",id:"styling-a-nextjs-app-with-stylex",level:2},{value:"Creating Styles with <code>stylex.create</code>",id:"creating-styles-with-stylexcreate",level:3},{value:"<code>stylex.props</code> - Applying Styles in Stylex",id:"stylexprops---applying-styles-in-stylex",level:3},{value:"Using Stylex Variables in a Next.js App",id:"using-stylex-variables-in-a-nextjs-app",level:2},{value:"Stylex Variables - Defining and Using Variables with <code>stylex.defineVars</code>",id:"stylex-variables---defining-and-using-variables-with-stylexdefinevars",level:3},{value:"Statically Typed Styles in Stylex",id:"statically-typed-styles-in-stylex",level:2},{value:"Summary",id:"summary",level:2}],c={toc:y},m="wrapper";function u(e){var{components:t}=e,n=l(e,["components"]);return(0,a.yg)(m,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/learn/"},(0,a.yg)("strong",{parentName:"a"},"Stylex"))," is a recently (as of Dec 2023) open sourced CSS-in-JS solution developed by Meta. It allows writing atomic inline CSS styles inside React/JavaScript components, and combines the power of static CSS thanks to globally accessible CSS variables. Stylex facilitates collision-free CSS by creating unique class identifiers for each style and by mitigating specificity issues with minimal usage of collision contributors (such as pseudo-classes). These make Stylex much more deterministic, reliable and scalable than other CSS-in-JS solutions like Emotion."),(0,a.yg)("p",null,"Stylex is especially more powerful because Stylex styles are geared to be reusable and extendable across libraries. It is also equipped with compile-time props typing for Flow and has excellent support for TypeScript -- making it easily adoptable by statically typed codebases."),(0,a.yg)("p",null,"With Stylex, we can go about defining colocated styles in a React component, manipulate their rendering logic and use them accordingly inline in markups. We can declare global variables outside components, export them, and then import and use them inside a given component. Globally declared variables are useful for dynamic layouts, grid systems, color palettes, typography, spacing, sizing, responsive design as well as theming."),(0,a.yg)("p",null,"In this introductory post, we cover how to define and use Stylex styles using the ",(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/api/javascript/create/"},(0,a.yg)("inlineCode",{parentName:"a"},"stylex.create"))," and ",(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/api/javascript/props/"},(0,a.yg)("inlineCode",{parentName:"a"},"stylex.props"))," APIs in an already set up Next.js application. We expend efforts to understand some of the quirks of writing collision-free inline CSS with Stylex. While doing so, we come across snippets implementing simple style declarations, style declarations with imported Stylex variables, conditional styling as well as a responsive component using media queries. We also explore how to create variables with the ",(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/api/javascript/defineVars/"},(0,a.yg)("inlineCode",{parentName:"a"},"stylex.defineVars"))," API and use them inside components."),(0,a.yg)("p",null,"We are using ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/facebook/stylex/blob/main/apps/nextjs-example"},"this example Next.js app")," from Facebook as a base and tweaking it to build our own page and component. If you need to, please feel free to clone it, use it locally and adopt your own from it."),(0,a.yg)("h2",{id:"css-in-js-with-stylex-and-typescript"},"CSS-in-JS with Stylex and TypeScript"),(0,a.yg)("p",null,"Stylex has two core APIs: the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"props")," methods. ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.create()")," allows us to declare CSS styles with a JavaScript object. The object should have property identifiers that represent CSS classes and their values that stand for CSS rules. The ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props")," method lets us access the declared styles from within inline markups."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"stylex.defineVars")," API facilitates declaration of global Stylex variables that represent actual CSS variables and are accessible from app-wide React components. Thanks to this, Stylex variables can be used for dynamic layouts, grid systems, color palettes, spacing, sizing, theming, etc."),(0,a.yg)("p",null,"In the sections and subsections ahead, we go through code snippets illustrating the use of ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.create"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.defineVars")," methods that implemented Stylex styles to our Next.js page and component."),(0,a.yg)("p",null,"For each topic covered, we will be analyzing Stylex related changes and then try to make sense of them."),(0,a.yg)("p",null,"Most of our changes are in the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/page.tsx")," file and the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Card />")," component. We'll first focus on the ",(0,a.yg)("inlineCode",{parentName:"p"},"page.tsx")," file that houses the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Home />")," component to see how to create and apply Stylex styles."),(0,a.yg)("h2",{id:"styling-a-nextjs-app-with-stylex"},"Styling a Next.js App with Stylex"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"app/page.tsx")," file contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Home />")," component and looks like this after adding our own markup with Stylex styles:"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show Home Component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import stylex from "@stylexjs/stylex";\nimport Card from "./components/Card";\nimport { colors } from "./stylex/cssVars.stylex";\nimport { globalTokens as $ } from "./stylex/globalTokens.stylex";\n\nconst MEDIA_MOBILE = "@media (max-width: 700px)" as const;\n\nconst style = stylex.create({\n  main: {\n    margin: "auto",\n    fontFamily: $.fontMono,\n  },\n  jumbotron: {\n    border: "1px transparent solid",\n    padding: "16px 24px",\n    backgroundColor: "#e9ecef",\n  },\n  jtBody: {\n    padding: "8px 0",\n  },\n  jtHeading: {\n    margin: "12px 0",\n    fontFamily: $.fontSans,\n    fontSize: "54px",\n    fontWeight: "bold",\n    color: "#4d4d4d",\n  },\n  jtText: {\n    margin: "24px 0",\n    fontSize: "24px",\n  },\n  jtFooter: {\n    margin: "24px 0",\n  },\n  jtButton: {\n    padding: "12px 24px",\n    fontFamily: $.fontMono,\n    fontSize: "20px",\n    fontWeight: "bold",\n    color: colors.white,\n    border: "1px solid transparent",\n    borderRadius: "4px",\n    backgroundColor: colors.primary,\n    textDecoration: {\n      default: "none",\n      ":hover": "underline",\n    },\n  },\n  deck: {\n    display: "flex",\n    flexDirection: {\n      default: "row",\n      [MEDIA_MOBILE]: "column",\n    },\n    justifyContent: {\n      default: "space-between",\n      [MEDIA_MOBILE]: "center",\n    },\n    alignItems: {\n      default: "center",\n      [MEDIA_MOBILE]: "space-between",\n    },\n    margin: "24px auto",\n  },\n  cardHeading: {\n    margin: "16px 0",\n    fontFamily: $.fontMono,\n    fontSize: "32px",\n  },\n  cardText: {\n    margin: "16px 0",\n    fontFamily: $.fontSans,\n    fontSize: "16px",\n  },\n  featuredBg: {\n    backgroundColor: "orange",\n  },\n});\n\nexport default function Home() {\n  return (\n    <main {...stylex.props(style.main)}>\n      <div {...stylex.props(style.jumbotron)}>\n        <div {...stylex.props(style.jtBody)}>\n          <h1 {...stylex.props(style.jtHeading)}>Hello, world!</h1>\n          <p {...stylex.props(style.jtText)}>\n            This is a template for a simple marketing or informational website.\n            It includes a large callout called a jumbotron and three supporting\n            pieces of content. Use it as a starting point to create something\n            more unique.\n          </p>\n        </div>\n        <div {...stylex.props(style.jtFooter)}>\n          <a {...stylex.props(style.jtButton)} href="#" role="button">\n            Learn more &raquo;\n          </a>\n        </div>\n      </div>\n\n      <div {...stylex.props(style.deck)}>\n        <Card featuredBg={{ backgroundColor: "orange" }}>\n          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n          <p {...stylex.props(style.cardText)}>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n            tellus ac cursus commodo, tortor mauris condimentum nibh, ut\n            fermentum massa justo sit amet risus. Etiam porta sem malesuada\n            magna mollis euismod. Donec sed odio dui.{" "}\n          </p>\n          <p>\n            <a href="#" role="button">\n              View details &raquo;\n            </a>\n          </p>\n        </Card>\n        <Card>\n          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n          <p {...stylex.props(style.cardText)}>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n            tellus ac cursus commodo, tortor mauris condimentum nibh, ut\n            fermentum massa justo sit amet risus. Etiam porta sem malesuada\n            magna mollis euismod. Donec sed odio dui.{" "}\n          </p>\n          <p>\n            <a href="#" role="button">\n              View details &raquo;\n            </a>\n          </p>\n        </Card>\n        <Card>\n          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n          <p {...stylex.props(style.cardText)}>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n            tellus ac cursus commodo, tortor mauris condimentum nibh, ut\n            fermentum massa justo sit amet risus. Etiam porta sem malesuada\n            magna mollis euismod. Donec sed odio dui.{" "}\n          </p>\n          <p>\n            <a href="#" role="button">\n              View details &raquo;\n            </a>\n          </p>\n        </Card>\n      </div>\n    </main>\n  );\n}\n'))),(0,a.yg)("p",null,"As we can see, styling is a totally handled by Stylex. The page in browser now looks like this:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-13-stylex-post/1.png",alt:"stylex"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Let's break it down in the sections below."),(0,a.yg)("h3",{id:"creating-styles-with-stylexcreate"},"Creating Styles with ",(0,a.yg)("inlineCode",{parentName:"h3"},"stylex.create")),(0,a.yg)("p",null,"We have declared Stylex styles with the ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.create")," method:"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show stylex.create method"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const style = stylex.create({\n  main: {\n    margin: "auto",\n    fontFamily: $.fontMono,\n  },\n  jumbotron: {\n    border: "1px transparent solid",\n    padding: "16px 24px",\n    backgroundColor: "#e9ecef",\n  },\n  jtBody: {\n    padding: "8px 0",\n  },\n  jtHeading: {\n    margin: "12px 0",\n    fontFamily: $.fontSans,\n    fontSize: "54px",\n    fontWeight: "bold",\n    color: "#4d4d4d",\n  },\n  jtText: {\n    margin: "24px 0",\n    fontSize: "24px",\n  },\n  jtFooter: {\n    margin: "24px 0",\n  },\n  jtButton: {\n    padding: "12px 24px",\n    fontFamily: $.fontMono,\n    fontSize: "20px",\n    fontWeight: "bold",\n    color: colors.white,\n    border: "1px solid transparent",\n    borderRadius: "4px",\n    backgroundColor: colors.primary,\n    textDecoration: {\n      default: "none",\n      ":hover": "underline",\n    },\n  },\n  deck: {\n    display: "flex",\n    flexDirection: {\n      default: "row",\n      [MEDIA_MOBILE]: "column",\n    },\n    justifyContent: {\n      default: "space-between",\n      [MEDIA_MOBILE]: "center",\n    },\n    alignItems: {\n      default: "center",\n      [MEDIA_MOBILE]: "space-between",\n    },\n    margin: "24px auto",\n  },\n  cardHeading: {\n    margin: "16px 0",\n    fontFamily: $.fontMono,\n    fontSize: "32px",\n  },\n  cardText: {\n    margin: "16px 0",\n    fontFamily: $.fontSans,\n    fontSize: "16px",\n  },\n  featuredBg: {\n    backgroundColor: "orange",\n  },\n});\n'))),(0,a.yg)("p",null,"It takes a styles object with property indentifiers that represent a CSS class and values that compose the actual CSS rules. Under the hood, Stylex creates a CSS class with an identifier starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," for each of the Stylex style object property. When the style is applied to a JSX element with ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props"),", this generated CSS class is added to the element's ",(0,a.yg)("inlineCode",{parentName:"p"},"className")," property."),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stylex Style Declarations - Must be Statically Analyzable")),(0,a.yg)("p",null,"There are some constraints to declaring Stylex styles. For example, the style object properties"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"should not go beyond one level deep, as further nesting belongs to the element's CSS properties."),(0,a.yg)("li",{parentName:"ul"},"cannot call non-Stylex functions."),(0,a.yg)("li",{parentName:"ul"},"cannot import values from non-Stylex modules.")),(0,a.yg)("p",null,"As a general rule: Stylex style declarations ",(0,a.yg)("strong",{parentName:"p"},"must")," be statically analyzable. See a more comprehensive list ",(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/learn/styling-ui/defining-styles/#constraints"},"here"),"."),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stylex Styles with Imported Stylex Variables")),(0,a.yg)("p",null,"It is typical to import and use Stylex variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    fontFamily: $.fontMono,\n}\n")),(0,a.yg)("p",null,"Use of global Stylex variables is important for dynamic layouts, responsive design and generating variants for spacing, typography, colors and themes."),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stylex Conditional Style Definitions")),(0,a.yg)("p",null,"We can apply conditional style definitions in order to assign CSS pseudo-classes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'textDecoration: {\n  default: "none",\n  \':hover\': "underline",\n},\n')),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Stylex Media Queries")),(0,a.yg)("p",null,"We are also able to maintain responsive design with conditionally defined media queries:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'flexDirection: {\n  default: "row",\n  [MEDIA_MOBILE]: "column",\n},\njustifyContent: {\n  default: "space-between",\n  [MEDIA_MOBILE]: "center",\n},\nalignItems: {\n  default: "center",\n  [MEDIA_MOBILE]: "space-between",\n},\n')),(0,a.yg)("p",null,"With the above styles declaration, we have defined local, atomic styles intended for our JSX elements."),(0,a.yg)("h3",{id:"stylexprops---applying-styles-in-stylex"},(0,a.yg)("inlineCode",{parentName:"h3"},"stylex.props")," - Applying Styles in Stylex"),(0,a.yg)("p",null,"We are then applying the above declared styles inside our JSX markup, inline and atomically:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'return (\n  <main {...stylex.props(style.main)}>\n    <div {...stylex.props(style.jumbotron)}>\n      <div {...stylex.props(style.jtBody)}>\n        <h1 {...stylex.props(style.jtHeading)}>Hello, world!</h1>\n        <p {...stylex.props(style.jtText)}>\n          This is a template for a simple marketing or informational website. It\n          includes a large callout called a jumbotron and three supporting\n          pieces of content. Use it as a starting point to create something more\n          unique.\n        </p>\n      </div>\n      <div {...stylex.props(style.jtFooter)}>\n        <a {...stylex.props(style.jtButton)} href="#" role="button">\n          Learn more &raquo;\n        </a>\n      </div>\n    </div>\n\n    <div {...stylex.props(style.deck)}>\n      <Card featuredBg={{ backgroundColor: "orange" }}>\n        <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n        <p {...stylex.props(style.cardText)}>\n          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum\n          massa justo sit amet risus. Etiam porta sem malesuada magna mollis\n          euismod. Donec sed odio dui.{" "}\n        </p>\n        <p>\n          <a href="#" role="button">\n            View details &raquo;\n          </a>\n        </p>\n      </Card>\n      <Card>\n        <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n        <p {...stylex.props(style.cardText)}>\n          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum\n          massa justo sit amet risus. Etiam porta sem malesuada magna mollis\n          euismod. Donec sed odio dui.{" "}\n        </p>\n        <p>\n          <a href="#" role="button">\n            View details &raquo;\n          </a>\n        </p>\n      </Card>\n      <Card>\n        <h2 {...stylex.props(style.cardHeading)}>Heading</h2>\n        <p {...stylex.props(style.cardText)}>\n          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum\n          massa justo sit amet risus. Etiam porta sem malesuada magna mollis\n          euismod. Donec sed odio dui.{" "}\n        </p>\n        <p>\n          <a href="#" role="button">\n            View details &raquo;\n          </a>\n        </p>\n      </Card>\n    </div>\n  </main>\n);\n')),(0,a.yg)("p",null,"Notice, for each style applied, we are invoking the ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props")," method and passing the style object property as it's argument. Under the hood, Stylex grabs the CSS class identifier it generated with the ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," prefix and adds it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"className")," property of the JSX element."),(0,a.yg)("p",null,"We are able to pass multiple styles to ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props()")," and all get merged into a single class. When specificity becomes an issue in the merge, the last style gets ranked the most. Please feel free to learn more in ",(0,a.yg)("a",{parentName:"p",href:"https://stylexjs.com/docs/learn/styling-ui/using-styles/#merging-styles"},"this section of the docs"),"."),(0,a.yg)("h2",{id:"using-stylex-variables-in-a-nextjs-app"},"Using Stylex Variables in a Next.js App"),(0,a.yg)("p",null,"As seen above, we are already using the global Stylex variable, ",(0,a.yg)("inlineCode",{parentName:"p"},"$"),", in our ",(0,a.yg)("inlineCode",{parentName:"p"},"<Home />")," component:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"{\n    fontFamily: $.fontSans,\n}\n")),(0,a.yg)("p",null,"We are using these ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/facebook/stylex/blob/main/apps/nextjs-example/app/globalTokens.stylex.ts"},"example tokens")," from Stylex docs and using their fonts in our app. This particular example provides insight into the capabilities of Stylex variables in designing complex dynamic, responsive layouts with easily customizable variants for color, spacing, typography, theming and more."),(0,a.yg)("p",null,"Just to get an idea, in this post, we explore how to define the simplest set of color palette."),(0,a.yg)("h3",{id:"stylex-variables---defining-and-using-variables-with-stylexdefinevars"},"Stylex Variables - Defining and Using Variables with ",(0,a.yg)("inlineCode",{parentName:"h3"},"stylex.defineVars")),(0,a.yg)("p",null,"Besides modifying our page and component, in ",(0,a.yg)("inlineCode",{parentName:"p"},"app/stylex/cssVars.ts")," we've declared a set of colors using ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.defineVars"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/stylex/cssVars.ts"',title:'"app/stylex/cssVars.ts"'},'import stylex from "@stylexjs/stylex";\n\nexport const colors = stylex.defineVars({\n  primary: "#007bff",\n  secondary: "#f8f9fa",\n  white: "#f8f9fa",\n});\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"stylex.defineVars"),"'s job is to make the exported ",(0,a.yg)("inlineCode",{parentName:"p"},"colors")," variable available globally to the emitted static CSS styles and to the TS app for importing from any of its React components. In our app, we are able to use necessary colors from Stylex ",(0,a.yg)("inlineCode",{parentName:"p"},"colors"),", in ",(0,a.yg)("inlineCode",{parentName:"p"},"app/page.tsx")," as well as inside ",(0,a.yg)("inlineCode",{parentName:"p"},"<Card />"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"  backgroundColor: colors.secondary,\n")),(0,a.yg)("h2",{id:"statically-typed-styles-in-stylex"},"Statically Typed Styles in Stylex"),(0,a.yg)("p",null,"Stylex applies compile-time type-checking to style props passed to a component. It is typical of Flow, and has all the required support with TypeScript as well."),(0,a.yg)("p",null,"As an example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Card />")," component accepts a ",(0,a.yg)("inlineCode",{parentName:"p"},"featuredBg")," prop that is typed with ",(0,a.yg)("inlineCode",{parentName:"p"},"StyleXArray<any>")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import stylex from "@stylexjs/stylex";\nimport { ReactNode } from "react";\nimport { StyleXArray } from "@stylexjs/stylex/lib/StyleXTypes";\nimport { colors } from "../stylex/cssVars.stylex";\n\nconst styles = stylex.create({\n  card: {\n    margin: "32px",\n    padding: "16px",\n    border: "1px spolid transparent",\n    borderRadius: "8px",\n    backgroundColor: colors.secondary,\n  },\n});\n\ntype Props = Readonly<{\n  featuredBg?: StyleXArray<any>;\n  children: ReactNode;\n}>;\n\nexport default function Card({ featuredBg, children }: Props) {\n  return <div {...stylex.props(styles.card, featuredBg)}>{children}</div>;\n}\n')),(0,a.yg)("p",null,"Static typing of Stylex styles allows them to be typed accurately and provide type-safety and stability to our codebase."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this post, we quickly covered the basics of Stylex by applying styling in a Next.js app. We focused particularly on the core ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.create")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.props")," APIs for defining CSS-in-JS styles to our page and component. We also covered how Stylex variables are defined and used with the ",(0,a.yg)("inlineCode",{parentName:"p"},"stylex.defineVars")," method. In the end, we saw an example of how style props are statically typed with Stylex in a component."),(0,a.yg)("p",null,"These APIs make Stylex a powerful toolbox of inline and static CSS styling that helps produce reusable, extendable and performant stying as sought out by scalable large applications. Stylex is a newborn library passing through infancy and thanks to its capabilities of globally available variables, clean and lean API surface, we should be seeing much more robust and tiny UI frameworks built on top it very soon."))}u.isMDXComponent=!0}}]);