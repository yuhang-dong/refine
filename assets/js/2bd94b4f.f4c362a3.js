"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5526],{58860:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>u});var a=i(37953);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=a.createContext({}),m=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=m(i),g=t,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return i?a.createElement(u,o(o({ref:n},p),{},{components:i})):a.createElement(u,o({ref:n},p))}));function u(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,o=new Array(l);o[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:t,o[1]=r;for(var m=2;m<l;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},95108:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>c});i(37953);var a=i(58860);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})),e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}const r={title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/tailwind-animations",source:"@site/blog/2024-11-05-tailwind-animations.md",title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",date:"2024-11-05T00:00:00.000Z",formattedDate:"November 5, 2024",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"}],readingTime:8.285,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"Create charts using Recharts",permalink:"/blog/recharts"},nextItem:{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice"},relatedPosts:[{title:"Building a CRUD app with Shadcn UI and Refine",description:"We demonstrate how to integrate Shadcn UI components to build a collection of components and pages within a Refine app.",permalink:"/blog/shadcn-ui",formattedDate:"March 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:31.02,date:"2024-03-19T00:00:00.000Z"},{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"August 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.115,date:"2024-08-19T00:00:00.000Z"},{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.905,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"November 6, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.085,date:"2024-11-06T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"September 6, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:20.24,date:"2024-09-06T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"September 11, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:14.895,date:"2024-09-11T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Built-in utility classes in Tailwind for animating elements",id:"built-in-utility-classes-in-tailwind-for-animating-elements",level:2},{value:"animate-none",id:"animate-none",level:3},{value:"animate-spin",id:"animate-spin",level:3},{value:"animate-ping",id:"animate-ping",level:3},{value:"animate-pulse",id:"animate-pulse",level:3},{value:"animate-bounce",id:"animate-bounce",level:2},{value:"Create custom animations in Tailwind:",id:"create-custom-animations-in-tailwind",level:2},{value:"Add keyframes to the Tailwind config file.",id:"add-keyframes-to-the-tailwind-config-file",level:3},{value:"Extend animation in the Tailwind config file.",id:"extend-animation-in-the-tailwind-config-file",level:3},{value:"Improving Mobile-Friendliness in Tailwind Animations",id:"improving-mobile-friendliness-in-tailwind-animations",level:2},{value:"Keep Animations Simple and Lightweight",id:"keep-animations-simple-and-lightweight",level:3},{value:"Use Media Queries to Control Animation on Mobile",id:"use-media-queries-to-control-animation-on-mobile",level:3},{value:"Shorten Animation Duration on Mobile",id:"shorten-animation-duration-on-mobile",level:3},{value:"Optimize Performance with GPU-Friendly Transitions",id:"optimize-performance-with-gpu-friendly-transitions",level:3},{value:"Animate elements using arbitrary values in Tailwind.",id:"animate-elements-using-arbitrary-values-in-tailwind",level:2},{value:"Making Tailwind Dance with JavaScript for Interactive Animations",id:"making-tailwind-dance-with-javascript-for-interactive-animations",level:2},{value:"JavaScript Toggle Animations",id:"javascript-toggle-animations",level:3},{value:"Animation Triggers on Scroll",id:"animation-triggers-on-scroll",level:3},{value:"Conditional Animations with JavaScript",id:"conditional-animations-with-javascript",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},g="wrapper";function u(e){var{components:n}=e,i=o(e,["components"]);return(0,a.yg)(g,l(function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(n){t(e,n,i[n])}))}return e}({},d,i),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on November 5, 2024 to include performance optimization tips and mobile-responsive techniques for improved animation handling in Tailwind CSS.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TailwindCSS")," is a widely used, utility-first ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," framework that enables developers to easily create modern, responsive, and visually appealing user interfaces. Tailwind\u2019s utility-first approach makes it easy to create ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," animations. This article will illustrate how to use ",(0,a.yg)("inlineCode",{parentName:"p"},"TailwindCSS")," to add beautiful and complicated animations to your websites or applications."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-none"},"animate-none")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-spin"},"animate-spin")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-ping"},"animate-ping")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-pulse"},"animate-pulse")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-bounce"},"animate-bounce")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file.")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#improving-mobile-friendliness-in-tailwind-animations"},"Improving Mobile-Friendliness in Tailwind Animations"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#keep-animations-simple-and-lightweight"},"Keep Animations Simple and Lightweight")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#use-media-queries-to-control-animation-on-mobile"},"Use Media Queries to Control Animation on Mobile")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#shorten-animation-duration-on-mobile"},"Shorten Animation Duration on Mobile")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#optimize-performance-with-gpu-friendly-transitions"},"Optimize Performance with GPU-Friendly Transitions")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#making-tailwind-dance-with-javascript-for-interactive-animations"},"Making Tailwind Dance with JavaScript for Interactive Animations"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#javascript-toggle-animations"},"JavaScript Toggle Animations")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#animation-triggers-on-scroll"},"Animation Triggers on Scroll")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#conditional-animations-with-javascript"},"Conditional Animations with JavaScript"))))),(0,a.yg)("h2",{id:"built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,a.yg)("p",null,"Tailwind provides built-in utility classes for an array of animations that can be added to elements."),(0,a.yg)("h3",{id:"animate-none"},"animate-none"),(0,a.yg)("p",null,"This utility class applies no animation to an element. It assures that the element is not affected by animation, even if it is contained in a parent element with an animation class."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div className="animate-none bg-blue-500 p-5">\n  <h3>Animation here</h3>\n</div>\n')),(0,a.yg)("h3",{id:"animate-spin"},"animate-spin"),(0,a.yg)("p",null,"This utility class Adds a linear spin animation to element. It can be useful on elements such as loading indicators."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <svg class="animate-spin">\n    \x3c!-- ... --\x3e\n  </svg>\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/2-min.gif",alt:"tailwind animations"})),(0,a.yg)("h3",{id:"animate-ping"},"animate-ping"),(0,a.yg)("p",null,"This utility class causes an element to scale and fade, much like a radar ping or a ripple in the sea. It can be beneficial on items that function as notification indications or attention-grabbing elements."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <span class="relative flex h-16 w-16">\n    <span\n      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"\n    ></span>\n    <span\n      class="relative inline-flex h-16 w-16 rounded-full bg-blue-500"\n    ></span>\n  </span>\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/3-min.gif",alt:"tailwind animations"})),(0,a.yg)("h3",{id:"animate-pulse"},"animate-pulse"),(0,a.yg)("p",null,"This utility class makes an element fade in and out gradually \u2013 This class is handy for things like skeleton loaders."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="h-16 w-16 animate-pulse rounded-full bg-blue-400"></div>\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/4-min.gif",alt:"tailwind animations"})),(0,a.yg)("h2",{id:"animate-bounce"},"animate-bounce"),(0,a.yg)("p",null,"This utility class adds a bounce animation to an element. It is useful for elements like scroll indicators."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="h-16 w-16 animate-bounce rounded-full bg-blue-500"></div>\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/5-min.gif",alt:"tailwind animations"})),(0,a.yg)("h2",{id:"create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,a.yg)("p",null,"Tailwind allows us to easily construct custom animations that are not provided as built-in utility classes.\nAll we need to do is define your animation's keyframes in the ",(0,a.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file and expand the theme setup to create a new animation."),(0,a.yg)("p",null,"We will illustrate this with a simple animation on the Refine logo as shown below:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/6-min.gif",alt:"tailwind animations"})),(0,a.yg)("h3",{id:"add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file."),(0,a.yg)("p",null,"We will open the ",(0,a.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file in the root directory of the project and add an empty keyframes object to the ",(0,a.yg)("inlineCode",{parentName:"p"},"theme.extend")," object. Now, inside this keyframes object, we'll add and specify our new slide animation as shown below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,a.yg)("h3",{id:"extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file."),(0,a.yg)("p",null,"After adding the values to our keyframes object in the ",(0,a.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, we create a custom animation that uses this keyframe. We will add this animation name to a new ",(0,a.yg)("inlineCode",{parentName:"p"},"animation")," object inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"theme.extend")," object as shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n      animation: {\n        "refine-slide": "refine 2s infinite",\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,a.yg)("p",null,"Next, we add the animation to the markup. To define a custom animation utility class in markup, use the format ",(0,a.yg)("inlineCode",{parentName:"p"},"animate-[nameOfAnimation]"),". In our example, the name of the custom animation we added to the ",(0,a.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file is ",(0,a.yg)("inlineCode",{parentName:"p"},"refine-slide"),", but when we specify the animation utility class in our 'HTML' markup, it is ",(0,a.yg)("inlineCode",{parentName:"p"},"animate-refine-slide"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <img\n    class="animate-refine-slide relative h-16 w-16"\n    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixkXz-MD-PkV6BOiGL5SAkJi9XGAyE9lLLQ&usqp=CAU"\n  />\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/7-min.gif",alt:"tailwind animations"})),(0,a.yg)("h2",{id:"improving-mobile-friendliness-in-tailwind-animations"},"Improving Mobile-Friendliness in Tailwind Animations"),(0,a.yg)("p",null,"I wanted to share some thoughts on optimizing Tailwind animations for mobile since it seems that getting animations to work smoothly on smaller screens can be a challenge. Mobile devices often have different performance needs, so these adjustments will help keep animations looking great without impacting load times or battery life."),(0,a.yg)("h3",{id:"keep-animations-simple-and-lightweight"},"Keep Animations Simple and Lightweight"),(0,a.yg)("p",null,"Complex animations can strain mobile resources. Stick with simpler ones like ",(0,a.yg)("inlineCode",{parentName:"p"},"animate-fade")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"animate-bounce"),", as they\u2019re lightweight and fast. Also, avoid running multiple animations at once, as it can slow down performance on low-end devices."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="h-16 w-16 animate-bounce bg-blue-500"></div>\n\x3c!-- Lightweight animation --\x3e\n')),(0,a.yg)("h3",{id:"use-media-queries-to-control-animation-on-mobile"},"Use Media Queries to Control Animation on Mobile"),(0,a.yg)("p",null,"With Tailwind\u2019s responsive utilities, you can leverage media queries to control when and where animations run. For example, you may want certain animations only on larger screens:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="h-16 w-16 bg-green-500 sm:animate-none lg:animate-ping"></div>\n')),(0,a.yg)("p",null,"In this case, the ping animation runs only on screens larger than 1024px, while the element remains static on mobile devices."),(0,a.yg)("h3",{id:"shorten-animation-duration-on-mobile"},"Shorten Animation Duration on Mobile"),(0,a.yg)("p",null,"Animations generally look better shorter on mobile, where users expect faster transitions. Adjust the duration for smaller screens using Tailwind\u2019s duration utilities:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div\n  class="h-16 w-16 animate-pulse bg-red-500 duration-500 md:duration-1000"\n></div>\n')),(0,a.yg)("p",null,"Here, the animation duration is set to 500ms on mobile and 1000ms on medium and larger screens."),(0,a.yg)("h3",{id:"optimize-performance-with-gpu-friendly-transitions"},"Optimize Performance with GPU-Friendly Transitions"),(0,a.yg)("p",null,"To ensure smoother performance on mobile, use GPU-friendly transitions like transform and opacity. These animations are easier for devices to process:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div\n  class="scale-105 transform transition-transform duration-300 hover:scale-110"\n></div>\n')),(0,a.yg)("p",null,"Using transform can help avoid layout shifts, which are more resource-intensive on mobile."),(0,a.yg)("p",null,"These tweaks should help Tailwind animations feel smooth and responsive on mobile screens."),(0,a.yg)("h2",{id:"animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind."),(0,a.yg)("p",null,"In some cases, you may want to create an animation that will only be used once in your application. Rather than extending your animations in your ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind.config.js")," file, ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," offers a better option in such scenarios by using arbitrary values. To use them, place the animation properties, separated by underscores, between a pair of square brackets following the animate keyword in the markup, as shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"animate -\n  [\n    animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction,\n  ];\n")),(0,a.yg)("p",null,'For example, if you want to create a one-off "wiggle" animation, you can declare the animation keyframes in your ',(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," file, then proceed to the markup and declare the animation as an arbitrary value as shown below:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"keyframe in ",(0,a.yg)("inlineCode",{parentName:"strong"},"CSS")," File"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-css"},"@keyframes wiggle {\n  0% {\n    transform: skewX(9deg);\n  }\n  10% {\n    transform: skewX(-8deg);\n  }\n  20% {\n    transform: skewX(7deg);\n  }\n  30% {\n    transform: skewX(-6deg);\n  }\n  40% {\n    transform: skewX(5deg);\n  }\n  50% {\n    transform: skewX(-4deg);\n  }\n  60% {\n    transform: skewX(3deg);\n  }\n  70% {\n    transform: skewX(-2deg);\n  }\n  80% {\n    transform: skewX(1deg);\n  }\n  90% {\n    transform: skewX(0deg);\n  }\n  100% {\n    transform: skewX(0deg);\n  }\n}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Markup"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div\n    class="h-16 w-16 animate-[wiggle_1s_ease-in-out_infinite] rounded-full bg-blue-500"\n  ></div>\n</div>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"View"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/8-min.gif",alt:"tailwind animations"})),(0,a.yg)("h2",{id:"making-tailwind-dance-with-javascript-for-interactive-animations"},"Making Tailwind Dance with JavaScript for Interactive Animations"),(0,a.yg)("p",null,"I wanted to share with you some tips on how to combine Tailwind with JavaScript to make animations more dynamic. This is especially useful if you want animations to respond to user interactions like clicks or scrolls. Here's a quick guide on setting up dynamic animations."),(0,a.yg)("h3",{id:"javascript-toggle-animations"},"JavaScript Toggle Animations"),(0,a.yg)("p",null,"Easily manage Tailwind's utility animations dynamically using JavaScript by adding or removing classes. For example, you may want to start an animation when a user clicks a button:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<button onclick="toggleAnimation()">Animate Box</button>\n<div id="box" class="h-16 w-16 bg-blue-500"></div>\n\n<script>\n  function toggleAnimation() {\n    const box = document.getElementById("box");\n    box.classList.toggle("animate-bounce"); // Toggle the bounce animation\n  }\n<\/script>\n')),(0,a.yg)("p",null,"In this example, each button click will start or stop the bounce animation on the box element."),(0,a.yg)("h3",{id:"animation-triggers-on-scroll"},"Animation Triggers on Scroll"),(0,a.yg)("p",null,"You can also use JavaScript to trigger animations based on the scroll position. For instance, animations can start when elements scroll into view:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'window.addEventListener("scroll", () => {\n  const element = document.getElementById("animate-on-scroll");\n  if (element.getBoundingClientRect().top < window.innerHeight) {\n    element.classList.add("animate-fade-in");\n  }\n});\n')),(0,a.yg)("p",null,"This will apply the animate-fade-in class when the element enters the viewport, making it fade in as the user scrolls down."),(0,a.yg)("h3",{id:"conditional-animations-with-javascript"},"Conditional Animations with JavaScript"),(0,a.yg)("p",null,"Using JavaScript, you can add animations conditionally, such as after a form validates successfully:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function animateOnSuccess(isValid) {\n  const icon = document.getElementById("success-icon");\n  if (isValid) {\n    icon.classList.add("animate-ping");\n  } else {\n    icon.classList.remove("animate-ping");\n  }\n}\n')),(0,a.yg)("p",null,"The example above adds a ping animation to an icon when a condition, like successful form validation, is met."),(0,a.yg)("p",null,"Using JavaScript alongside Tailwind gives you the flexibility to control animations based on user interactions, which can make the experience feel more interactive and natural."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this article, We took a dive into ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," built-in utility classes for animation as well as how to use ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," CSS's theme configuration feature to add custom animations. We also learned how to create one-off animations with ",(0,a.yg)("inlineCode",{parentName:"p"},"Tailwind")," arbitrary values.\nTailwind is an excellent ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS")," framework, and its utility-first approach, combined with its theme extension features, makes it popular among developers."))}u.isMDXComponent=!0}}]);