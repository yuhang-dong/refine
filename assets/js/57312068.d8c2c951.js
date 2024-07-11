"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84479],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var i=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(37953);var i=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",slug:"next-js-redirect",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-16-next-redirects/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/next-js-redirect",source:"@site/blog/2023-05-16-next-redirects.md",title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:8.78,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",slug:"next-js-redirect",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-16-next-redirects/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Zustand",permalink:"/blog/zustand-react-state"},nextItem:{title:"What is Vite? & Vite vs Webpack",permalink:"/blog/what-is-vite-vs-webpack"},relatedPosts:[{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",permalink:"/blog/next-js-link-component",formattedDate:"May 29, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:10.805,date:"2024-05-29T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"June 10, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.765,date:"2024-06-10T00:00:00.000Z"},{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"May 29, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:12.045,date:"2023-05-29T00:00:00.000Z"}],authorPosts:[{title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.12,date:"2022-10-31T00:00:00.000Z"},{title:"Using Material UI DataGrid component with Refine app",description:"How to use Material UI DataGrid component with Refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.9,date:"2022-08-23T00:00:00.000Z"},{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",permalink:"/blog/next-js-api-routes",formattedDate:"July 3, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.875,date:"2024-07-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is URL Redirection?",id:"what-is-url-redirection",level:2},{value:"How to make redirects in Next.js",id:"how-to-make-redirects-in-nextjs",level:2},{value:"Methods of Redirecting in Next.js",id:"methods-of-redirecting-in-nextjs",level:2},{value:"Path matching",id:"path-matching",level:3},{value:"Matching URL path using wildcard patterns",id:"matching-url-path-using-wildcard-patterns",level:4},{value:"Matching URL path using Regular expressions",id:"matching-url-path-using-regular-expressions",level:4},{value:"Redirecting Based on Header, Cookie and Query Values",id:"redirecting-based-on-header-cookie-and-query-values",level:3},{value:"Redirecting with <code>basePath</code> support",id:"redirecting-with-basepath-support",level:3},{value:"Other Methods of Performing Next.js Redirects",id:"other-methods-of-performing-nextjs-redirects",level:3},{value:"In API Routes",id:"in-api-routes",level:4},{value:"In <code>getServerSideProps</code> and <code>getStaticProps</code>",id:"in-getserversideprops-and-getstaticprops",level:4},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},g="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,i.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"The concept of URL redirection in web application development is one that is ubiquitous. We experience it almost every time during our usage of the internet. Think about the last time you were trying to sign up on a website and they asked you to sign up with Google. Remember all the pop-ups and redirects that happen before you're finally signed up to the website? Yeah, that's a typical example of URL redirection in web app development."),(0,i.yg)("p",null,"In this article, we'll examine the concept of URL redirection in Next.js, you'll learn how Next.js redirects work, how to implement them in your next project and everything else you need to know about Next.js redirects. Now, let's get started!"),(0,i.yg)("p",null,"Steps we'll cover:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#what-is-url-redirection"},"What is URL Redirection?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#how-to-make-redirects-in-nextjs"},"How to make redirects in Next.js")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#methods-of-redirecting-in-nextjs"},"Methods of Redirecting in Next.js"))),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("p",null,"Before you continue with this article, you'll need to have a Next.js 13 app or above running that you can use to try out the code examples in this article."),(0,i.yg)("p",null,"The app in this tutorial is bootstrapped with ",(0,i.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/api-reference/create-next-app"},"create-next-app"),"."),(0,i.yg)("h2",{id:"what-is-url-redirection"},"What is URL Redirection?"),(0,i.yg)("p",null,"URL Redirection is a technique used in web development for automatically changing the URL of a website from one to another. Redirects are implemented in web development using the 3XX HTTP status codes. For example, a 301 status code implies the URL you requested has moved permanently."),(0,i.yg)("p",null,"Some common use cases for performing URL redirects include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Link shortening"),(0,i.yg)("li",{parentName:"ul"},"User authentication"),(0,i.yg)("li",{parentName:"ul"},"A/B Testing"),(0,i.yg)("li",{parentName:"ul"},"Marketing campaigns"),(0,i.yg)("li",{parentName:"ul"},"Website migration"),(0,i.yg)("li",{parentName:"ul"},"Website maintenance or redesign")),(0,i.yg)("p",null,"There are two most widely used methods of redirecting in web development:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Permanent redirection: This method which uses a 301 HTTP status code is used to indicate that a URL you're requesting has permanently moved to a new web address. A good example to illustrate this is the Angelist Talent former website (",(0,i.yg)("a",{parentName:"p",href:"https://angel.co"},"https://angel.co"),") which now permanently redirects to ",(0,i.yg)("a",{parentName:"p",href:"https://wellfound.com/"},"https://wellfound.com/"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Temporary redirection: This method uses a 302 HTTP status code to indicate a redirection from a specific URL to another for a limited duration of time. For example, if you're recreating your website or adopting a new brand design, you can redirect your users to a different page to notify them about the update until the new website is up."))),(0,i.yg)("h2",{id:"how-to-make-redirects-in-nextjs"},"How to make redirects in Next.js"),(0,i.yg)("p",null,"Now that you understand what URL redirection is, let's see how you can use the technique in your Next.js app."),(0,i.yg)("p",null,"The most basic way to setup Next.js redirects is to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"redirects")," key in your ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," file."),(0,i.yg)("p",null,"The Next.js app created for us by ",(0,i.yg)("inlineCode",{parentName:"p"},"create-next-app")," comes with a ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," file by default in the app root folder. If you don't have the ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," file, you can create it now in your root folder."),(0,i.yg)("p",null,"Next, edit the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"app/page.js")," to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"export default function Home() {\n  return (\n    <>\n      <main>\n        <div>This is the home page </div>\n      </main>\n    </>\n  );\n}\n")),(0,i.yg)("p",null,"Now, create a new folder named ",(0,i.yg)("inlineCode",{parentName:"p"},"feed")," inside the ",(0,i.yg)("inlineCode",{parentName:"p"},"app")," folder and create a ",(0,i.yg)("inlineCode",{parentName:"p"},"page.js")," in it like so: ",(0,i.yg)("inlineCode",{parentName:"p"},"app/feed/page.js"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"export default function Feed() {\n  return <h1>Hello, welcome to your feed!</h1>;\n}\n")),(0,i.yg)("p",null,"Finally, edit the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," file in your app folder to this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'/** @type {import(\'next\').NextConfig} */\nconst nextConfig = {\n  async redirects() {\n    return [\n      {\n        source: "/",\n        destination: "/feed",\n        permanent: true,\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n')),(0,i.yg)("p",null,"Now if you start the development server with ",(0,i.yg)("inlineCode",{parentName:"p"},"npm run dev")," and navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"http://localhost:3000"),", instead of the app to render the home page in ",(0,i.yg)("inlineCode",{parentName:"p"},"app/page.js"),", you'll be redirected to the ",(0,i.yg)("inlineCode",{parentName:"p"},"app/feed/page.js")," page instead."),(0,i.yg)("p",null,"Here's how everything works behind the scenes:"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"redirects")," key in ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," is an async function that returns array with objects for configuring redirects in your app. You'll be using it most of the time to implement redirects in your Next.js app."),(0,i.yg)("p",null,"In the above example, we defined three objects: ",(0,i.yg)("inlineCode",{parentName:"p"},"source"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"destination")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"permanent")," to implement the redirect."),(0,i.yg)("p",null,"The configuration objects are seven in total, but the following three are required to perform any redirects."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"source")," - the original path the user requested."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"destination")," - the new path you want to route to."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"permanent")," - a boolean value. When set to true, it will utilize the 308 status code, instructing clients and search engines to cache the redirect indefinitely. If set to false, it will use the 307 status code, which is temporary and not cached.")),(0,i.yg)("p",null,"While the following four are optional and only required for specific use cases."),(0,i.yg)("p",null,"basePath - can be either false or undefined - if set to false, the basePath will not be considered during matching. This can be useful for external redirects exclusively."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"locale")," - can be either false or undefined - determines whether the locale should be excluded during matching."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"has")," - an array of has objects with the type, key and value properties."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"missing")," - an array of missing objects with the type, key and value properties.")),(0,i.yg)("h2",{id:"methods-of-redirecting-in-nextjs"},"Methods of Redirecting in Next.js"),(0,i.yg)("p",null,"Next.js provides a variety of ways to perform redirects. These include; path matching; header, cookie, and query matching; API redirecting and so on."),(0,i.yg)("h3",{id:"path-matching"},"Path matching"),(0,i.yg)("p",null,"This method involves the use of URL paths to configure how you want Next.js to perform the redirect. The example we used above is an example of using URL paths to configure Next.js redirects."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'const nextConfig = {\n  async redirects() {\n    return [\n      {\n        source: "/",\n        destination: "/feed",\n        permanent: true,\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n')),(0,i.yg)("p",null,"There are two methods we can use to match URL paths for redirects. These are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Matching URL path using wildcard patterns"),(0,i.yg)("li",{parentName:"ul"},"Matching URL path using Regular expressions")),(0,i.yg)("h4",{id:"matching-url-path-using-wildcard-patterns"},"Matching URL path using wildcard patterns"),(0,i.yg)("p",null,'You can use wildcard patterns (using asterisks) to match one or more characters in the URL path. For example, a URL path such as "/user/:username',"*",'" will match any URLs that have the word "user" followed by any string, such as, ',(0,i.yg)("inlineCode",{parentName:"p"},"/user/johndoe")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"/user/samurai"),":"),(0,i.yg)("p",null,"The example below will redirect a user that tries to access, say for example, ",(0,i.yg)("inlineCode",{parentName:"p"},"/user/johndoe")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"profile/johndoe"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  async redirects() {\n    return [\n      {\n        source: "/user/:username*",\n        destination: "/profile/:username*",\n        permanent: true,\n      },\n    ];\n  },\n};\n')),(0,i.yg)("h4",{id:"matching-url-path-using-regular-expressions"},"Matching URL path using Regular expressions"),(0,i.yg)("p",null,"Another way to configure Next.js redirects is to use regex patterns to match the URL path. To do this, you can wrap the regex pattern in parentheses. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"/posts/:slug([A-Za-z0-9]+)")," will match ",(0,i.yg)("inlineCode",{parentName:"p"},"/posts/XRTw34gFG")," but not ",(0,i.yg)("inlineCode",{parentName:"p"},"/posts/FEE$#GRgtyy"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  async redirects() {\n    return [\n      {\n        source: "/posts/:slug([A-Za-z0-9]+)",\n        destination: "/articles/:slug",\n        permanent: false,\n      },\n    ];\n  },\n};\n')),(0,i.yg)("h3",{id:"redirecting-based-on-header-cookie-and-query-values"},"Redirecting Based on Header, Cookie and Query Values"),(0,i.yg)("p",null,"You can also configure Next.js redirects based on when the values of headers, cookies or query match the ",(0,i.yg)("inlineCode",{parentName:"p"},"source")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"has")," objects or don't match the ",(0,i.yg)("inlineCode",{parentName:"p"},"missing")," object in ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js"),". Note that for the redirect to take effect, the values of ",(0,i.yg)("inlineCode",{parentName:"p"},"source")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"has")," must match while the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"missing")," must not match."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"has")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"missing")," objects can have the following fields:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"type"),": a string value that must be either ",(0,i.yg)("inlineCode",{parentName:"p"},"header"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"cookie"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"host"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"query"),".\n",(0,i.yg)("inlineCode",{parentName:"p"},"key"),": String - the key from the selected type to match against.\n",(0,i.yg)("inlineCode",{parentName:"p"},"value"),": String or undefined - the value to check for, if undefined any value will match."),(0,i.yg)("p",null,"Let's look at an example that redirects the user to a different page in the app based on cookie value."),(0,i.yg)("p",null,"Edit the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"feed/page.js")," to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'"use client";\nimport { useEffect } from "react";\n\nexport default function Feed() {\n  useEffect(() => {\n    document.cookie = "admin=true; SameSite=None; Secure";\n    console.log(document.cookie);\n  });\n\n  return <h1>Hello, welcome to your feed!</h1>;\n}\n')),(0,i.yg)("p",null,"Next, edit the content of ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'const nextConfig = {\n  async redirects() {\n    return [\n      {\n        source: "/feed",\n        has: [\n          {\n            type: "cookie",\n            key: "admin",\n            value: "true",\n          },\n        ],\n        destination: "/",\n        permanent: true,\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n')),(0,i.yg)("p",null,"In the example above, we are setting a cookie in ",(0,i.yg)("inlineCode",{parentName:"p"},"feed/page.js")," immediately after the page renders. Then we configure ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," to redirect the user from the feed page to the home page -",(0,i.yg)("inlineCode",{parentName:"p"},"localhost:3000"),"- based on the cookie value. The ",(0,i.yg)("inlineCode",{parentName:"p"},"has")," key checks if there's a cookie with a key-value pair of 'admin=true' and then applies the redirect if so."),(0,i.yg)("h3",{id:"redirecting-with-basepath-support"},"Redirecting with ",(0,i.yg)("inlineCode",{parentName:"h3"},"basePath")," support"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"basePath")," key allows you to prefix the URLs with a specific path.\nFor example, if you want to redirect users to a new version of your docs with a different path and you don't want to write the new path repeatedly, you can set the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"basePath")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'const nextConfig = {\n  basePath: "/v2",\n\n  async redirects() {\n    return [\n      {\n        source: "/v1/docs",\n        destination: "/docs/getting-started/",\n        permanent: false,\n      },\n      // ...\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n')),(0,i.yg)("p",null,"Now, when a user tries to visit the old docs at ",(0,i.yg)("inlineCode",{parentName:"p"},"/v1/docs/getting-started"),", they will be redirected to ",(0,i.yg)("inlineCode",{parentName:"p"},"/v2/docs/getting-started")," instead."),(0,i.yg)("p",null,"And if you don't want the ",(0,i.yg)("inlineCode",{parentName:"p"},"basePath")," to apply to a specific redirect you can set ",(0,i.yg)("inlineCode",{parentName:"p"},"basePath")," to false like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'const nextConfig = {\n  basePath: "/v2",\n\n  async redirects() {\n    return [\n      {\n        source: "/v1/docs",\n        destination: "/docs/getting-started/",\n        permanent: false,\n      },\n      {\n        source: "/without-basepath",\n        destination: "https://google.com", // basePath is set to false here so this URL won\'t be prefixed with `/v2`\n        basePath: false,\n        permanent: false,\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n')),(0,i.yg)("h3",{id:"other-methods-of-performing-nextjs-redirects"},"Other Methods of Performing Next.js Redirects"),(0,i.yg)("h4",{id:"in-api-routes"},"In API Routes"),(0,i.yg)("p",null,"Apart from configuring redirects using the ",(0,i.yg)("inlineCode",{parentName:"p"},"next.config.js")," file, Next.js provides other methods for doing this in different scenarios. For example, if you're building a full-stack application using Next.js API routes you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"redirect()")," method to make redirects."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { NextResponse } from "next/server";\n\nexport async function GET(request) {\n  return NextResponse.redirect("https://nextjs.org/");\n}\n')),(0,i.yg)("h4",{id:"in-getserversideprops-and-getstaticprops"},"In ",(0,i.yg)("inlineCode",{parentName:"h4"},"getServerSideProps")," and ",(0,i.yg)("inlineCode",{parentName:"h4"},"getStaticProps")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'export default function Home() {\n  return <h1>Welcome to the home page!</h1>;\n}\n\nexport const getServerSideProps = async ({ res }) => {\n  return {\n    redirect: {\n      destination: "/new-url",\n      permanent: false,\n    },\n  };\n};\n')),(0,i.yg)("br",null),(0,i.yg)("div",null,(0,i.yg)("a",{href:"https://discord.gg/refine"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In this article, we looked at the several ways through which you can leverage Next.js' capabilities to easily configure redirects based on a variety of criteria, including URL matching, query parameters, cookies, headers, and more."),(0,i.yg)("p",null,"Next.js gives you a powerful and flexible system for handling redirects in your web applications. Whether you're building a simple or complex application, the methods discussed in this article are guaranteed to work for your use cases."),(0,i.yg)("p",null,"Happy coding!"))}h.isMDXComponent=!0}}]);