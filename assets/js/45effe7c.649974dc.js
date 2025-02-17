"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71166],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(37953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(37953);var n=a(58860);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",slug:"react-lazy-loading",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-07-react-lazy/social-2.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/react-lazy-loading",source:"@site/blog/2024-07-12-react-lazy.md",title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",date:"2024-07-12T00:00:00.000Z",formattedDate:"July 12, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:16.045,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",slug:"react-lazy-loading",authors:"chidume_nnamdi",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-07-react-lazy/social-2.png",hide_table_of_contents:!1},prevItem:{title:"5 Best Free Platforms for Hosting Hobby Web Projects",permalink:"/blog/5-top-free-react-hosting-platforms"},nextItem:{title:"React Props Explained with Examples",permalink:"/blog/react-props"},relatedPosts:[{title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",permalink:"/blog/mantine-ui-react",formattedDate:"September 9, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:18.305,date:"2024-09-09T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"},{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"January 7, 2025",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.405,date:"2025-01-07T00:00:00.000Z"}],authorPosts:[{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"July 31, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:18.35,date:"2024-07-31T00:00:00.000Z"},{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"January 7, 2025",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.405,date:"2025-01-07T00:00:00.000Z"},{title:"Top React Admin Templates 2025",description:"We have compiled a list of the top 5 React admin templates that are currently available on the market.",permalink:"/blog/react-admin-template",formattedDate:"December 27, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.975,date:"2024-12-27T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Lazy Loading and Why Use It?",id:"what-is-lazy-loading-and-why-use-it",level:2},{value:"Improvement in Performance",id:"improvement-in-performance",level:3},{value:"Loading UI Elements",id:"loading-ui-elements",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"How Lazy Loading Works",id:"how-lazy-loading-works",level:3},{value:"What is React.lazy",id:"what-is-reactlazy",level:2},{value:"Suspense",id:"suspense",level:2},{value:"Catching Loading Errors",id:"catching-loading-errors",level:2},{value:"Route-based code-splitting",id:"route-based-code-splitting",level:2},{value:"SEO Considerations with Lazy Loading",id:"seo-considerations-with-lazy-loading",level:2},{value:"Ensure Critical Content is Accessible",id:"ensure-critical-content-is-accessible",level:3},{value:"Use Proper HTML Markup",id:"use-proper-html-markup",level:3},{value:"Intersection Observer API",id:"intersection-observer-api",level:3},{value:"Provide Fallbacks",id:"provide-fallbacks",level:3},{value:"Watch out for search engine crawls",id:"watch-out-for-search-engine-crawls",level:3},{value:"Component-based code-splitting",id:"component-based-code-splitting",level:2},{value:"Testing Lazy Loaded Components",id:"testing-lazy-loaded-components",level:2},{value:"Performance Metrics and Lazy Loading",id:"performance-metrics-and-lazy-loading",level:2},{value:"Key Performance Metrics",id:"key-performance-metrics",level:3},{value:"Measuring Performance: Tools",id:"measuring-performance-tools",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},u="wrapper";function g(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"This article was last updated on July 12, 2024, to add sections for SEO Considerations with Lazy Loading and Testing Lazy Loaded Components.")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Lazy Loading has been a concept in software development in general not just in web development. Lazy Loading can and used in desktop and mobile development. It is just another trick in making performance better in applications.\nLazy loading is a technique used to optimize the performance of a website or application. It's an approach that loads only the necessary resources when they're needed, instead of downloading everything at once. This way, users don't have to wait for all the resources to be downloaded before they can use the site or app."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-lazy-loading-and-why-use-it"},"What is Lazy Loading and Why Use It?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-reactlazy"},"What is React.lazy")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#suspense"},"Suspense")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#catching-loading-errors"},"Catching Loading Errors")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#route-based-code-splitting"},"Route-based code-splitting")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#seo-considerations-with-lazy-loading"},"SEO Considerations with Lazy Loading")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#component-based-code-splitting"},"Component-based code-splitting")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#testing-lazy-loaded-components"},"Testing Lazy Loaded Components")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#performance-metrics-and-lazy-loading"},"Performance Metrics and Lazy Loading"))),(0,n.yg)("h2",{id:"what-is-lazy-loading-and-why-use-it"},"What is Lazy Loading and Why Use It?"),(0,n.yg)("p",null,"Lazy loading is a resource-loading strategy used in the effective performance of a website or application, where all the resources are not downloaded along with the loading of the entire site; they are dynamically loaded when needed. In that way, a user doesn't need to wait for all resources to be downloaded before being able to use the site or app."),(0,n.yg)("p",null,"The essence of lazy loading is that it reduces the first-page load time, achieving quick loading and a good user experience. Particularly, it is useful for websites or applications with huge content to load only the required resources."),(0,n.yg)("h3",{id:"improvement-in-performance"},"Improvement in Performance"),(0,n.yg)("p",null,"Lazy loading makes the initial page load minimal, thus achieving a quicker load time for the page and a better user experience overall. Loading only those resources that will be used at the time means a user does not have to wait for all resources to download before using the site or app, especially for content-heavy sites or apps."),(0,n.yg)("h3",{id:"loading-ui-elements"},"Loading UI Elements"),(0,n.yg)("p",null,"Similarly, lazy loading can also be implemented for other user interface components, such as lists or images. For example, on a detail page with hundreds of images, when all the images are loaded initially, performance takes a hit. Images can then load right before they are supposed to be displayed in the viewport, thus making fewer immediate requests."),(0,n.yg)("h3",{id:"user-experience"},"User Experience"),(0,n.yg)("p",null,"Lazy loading thus increases customer retention by enhancing the user experience in terms of diminishing load time of the page and response times. Research studies have shown that approximately 95% of users are likely to leave if a webpage takes more than 2 seconds to fully upload. In this sense, lazy loading promotes stickiness through loading first and loading fast the most important parts."),(0,n.yg)("p",null,"Now let's see how lazy loading works in practice."),(0,n.yg)("h3",{id:"how-lazy-loading-works"},"How Lazy Loading Works"),(0,n.yg)("p",null,"The concept behind lazy loading is to cut initial page load time and facilitate quick page loading, which makes for a better user experience. This is more effective for websites or applications with lots of content, as it makes sure only the most necessary resources are loaded first."),(0,n.yg)("p",null,"Let's take a blog website as an example to describe how lazy loading will be effective in upping the performance of the website."),(0,n.yg)("p",null,"For the blog website, there is a home page, a list page, and a detail page. Home page: The main page of a website is the first page that users see when they access the website. List page: This lists all the different blog articles. Detail page: Shows the contents of an article in detail. We will find that this will slow down the page loading if the home page loads the list, and detail pages are also loaded with it."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Home page"),": 39KB"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"List page"),": 90 KB"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Detail page"),": 88KB")),(0,n.yg)("p",null,"We can observe that it is going to load 217KB in total of the file, just for loading the home page. We are able to avoid this by breaking up the bundle and loading them at will. When loading the home page, only the homepage is loaded. This will make the page load quickly, since at this moment we are only loading 39KB instead of all the 217 KB. To put it in a nutshell, such is the application of lazy loading in web development to speed the performance of a page up."),(0,n.yg)("p",null,"Not just pages, it is also other UI elements of a page that get lazy-loaded. For example, lists or images; they are all lazy-loaded until an actual need arises for them. Now the question is, when does a need arise?"),(0,n.yg)("p",null,"Let's expound on that: let's say in our detail page we have hundreds of images and these images will require another fetch from the server, so imagine sending a hundred requests to fetch images in a single detail page; for sure, we will begin to see the performance dip in our browser. What we will do is defer loading images so that they are loaded once they are just going to scroll inside the browser's viewport."),(0,n.yg)("p",null,"This is a good example because we can implement lazy loading of UI elements across the web page and other pages on our website. Lazy loading is an attempt to lower the page load time and improve response times for our webpages in an effort to increase customer retention. Humans are impatient, and if your web page takes more than 2 seconds to load, the chances are that 95% of users will not wait and start feeling impatient. So we will do our best to implement lazy loading\u2014to get the critical part first and fast!"),(0,n.yg)("h2",{id:"what-is-reactlazy"},"What is React.lazy"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy()")," is a powerful tool for optimizing the performance of React applications. It allows developers to import components dynamically, which can significantly reduce the size of the initial bundle and improve the overall performance of the application. In this article, we'll take a look at what ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy()")," is, how it works, and how it can be used to improve the performance of React applications."),(0,n.yg)("p",null,"React.lazy is a new feature introduced in React 16.6 that allows developers to implement lazy loading easily. It enables developers to split their code into small chunks, which can then be loaded on demand. This helps improve the performance of applications by reducing the amount of code that needs to be downloaded initially."),(0,n.yg)("p",null,"So, ",(0,n.yg)("inlineCode",{parentName:"p"},"lazy()")," is a function in the React bundle. We can import it like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { lazy } from "react";\n')),(0,n.yg)("p",null,"// OR"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'import React from "react";\nReact.lazy;\n')),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy")," utilizes dynamic import, which is a new feature of ES6 (ECMAScript 6). Dynamic import allows developers to dynamically import a module or component at runtime."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { capitalizeFirstLetter } from "./utils";\n')),(0,n.yg)("p",null,'We want to lazy load the "utils" file and to be loaded when we want to use the ',(0,n.yg)("inlineCode",{parentName:"p"},"capitalizeFirstLetter")," function. We use the ",(0,n.yg)("inlineCode",{parentName:"p"},"import")," dynamic function:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import("./utils").then((utils) => {\n  console.log(utils.capitalizeFirstLetter("nnamdi chidume"));\n});\n')),(0,n.yg)("p",null,"This will spill out the ",(0,n.yg)("inlineCode",{parentName:"p"},"utils")," file from the final bundle and load it on demand.\nComing to use ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy"),", we will first have to import the component we want to lazy load:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import LazyComponent from "./LazyComponent";\n')),(0,n.yg)("p",null,"Then, we call ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy")," passing a callback function to it. Then this callback function will call the ",(0,n.yg)("inlineCode",{parentName:"p"},"import")," function in its body and return it. Then the path of the component will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"import")," function call."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const LazyComponent = React.lazy(() => import("./LazyComponent"));\n')),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"LazyComponent")," will be split from the main bundle into its bundle. It will not load with the main bundle during the page's initial load. It will be loaded when the ",(0,n.yg)("inlineCode",{parentName:"p"},"LazyComponent")," is to be used."),(0,n.yg)("p",null,"For example, on our blog website, we have the pages: home, list, and detail. On the home page, we have links in each blog article to the detail page."),(0,n.yg)("p",null,"Our home page will be like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import DetailPage from "./DetailPage";\n\nconst DetailPage = React.lazy(() => import("./DetailPage"));\n\nexport const HomePage = () => {\n  return (\n    <ul>\n      {this.props.blogs.map((blog, index) => {\n        return <DetailPage blog={blog} />;\n      })}\n    </ul>\n  );\n};\n')),(0,n.yg)("p",null,"Now, the DetailPage component will be broken out into a separate bundle and will not be loaded in the initial load time of the HomePage.\nWhen we run this code we will get an error: ",(0,n.yg)("inlineCode",{parentName:"p"},"React component suspended while rendering, but no fallback UI was specified."),"\nThis is because a lazily loaded component with ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy")," must be wrapped inside ",(0,n.yg)("inlineCode",{parentName:"p"},"Suspense")," component."),(0,n.yg)("p",null,"What is Suspense?"),(0,n.yg)("h2",{id:"suspense"},"Suspense"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Suspense")," is a React feature that allows for components to be loaded asynchronously. It is used in conjunction with ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy"),'. Suspense is also used to display a loading indicator while the component is being fetched, or it can be used to render a fallback component if the component fails to load.\nTo use the Suspense component, we import it from the "react" package.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Suspense } from "react";\n')),(0,n.yg)("p",null,"Next, we wrap a ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy")," loaded component inside it:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"<Suspense>\n  <LazyComponent />\n</Suspense>\n")),(0,n.yg)("p",null,"This will render the LazyComponent."),(0,n.yg)("p",null,"This is bad UX practice because the user will not know that a component will load. So we need to show the UX that something is coming, we will display a UI element to indicate to the user that a UI view will be loaded."),(0,n.yg)("p",null,"To do that in Suspense, we will use the ",(0,n.yg)("inlineCode",{parentName:"p"},"fallback")," prop. Suspense uses the ",(0,n.yg)("inlineCode",{parentName:"p"},"fallback")," prop to display a UI on the page while the lazily loaded component is still being loaded."),(0,n.yg)("p",null,"Let's add ",(0,n.yg)("inlineCode",{parentName:"p"},"fallback"),' to the above code, to display "Loading" before the LazyComponent is downloaded completely and rendered:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'<Suspense fallback={"Loading..."}>\n  <LazyComponent />\n</Suspense>\n')),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"fallback")," can take a JSX element:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>\n")),(0,n.yg)("h2",{id:"catching-loading-errors"},"Catching Loading Errors"),(0,n.yg)("p",null,"When using ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy"),", it is important to catch any loading errors that might occur(for example, if a network error occurs).\nWe will wrap the Suspense component that contains our lazy-loaded components in an ErrorBoundary component. ErrorBoundary in React is like a try-catch block in JavaScript. It catches an error in a component tree without causing the errors to break the whole application."),(0,n.yg)("p",null,"A simple ErrorBoundary component is this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    logService(error, errorInfo);\n  }\n\n  render() {\n    return this.state.hasError ? (\n      <h1>Something went wrong.</h1>\n    ) : (\n      this.props.children\n    );\n  }\n}\n")),(0,n.yg)("p",null,"If there is an error in the component tree it is wrapped in, that component will not break the app rather it will render ",(0,n.yg)("inlineCode",{parentName:"p"},"Something went wrong.")," in its place. This will allow you to catch any errors that occur with the loading of the component and handle them appropriately.\nNow, we use this error boundary like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary>\n  <Suspense fallback={<div>Loading...</div>}>\n    <LazyComponent />\n  </Suspense>\n</ErrorBoundary>\n")),(0,n.yg)("h2",{id:"route-based-code-splitting"},"Route-based code-splitting"),(0,n.yg)("p",null,"Much of what we have seen here is code-splitting components used for UI sections in the application. We don't however have to lazy load all the components in our application. Doing that might lead to serious issues."),(0,n.yg)("p",null,"Finding and knowing when and which component to lazy load is quite tricky. But the thing we know for sure is that we have to lazy load Route-based components.\nRoute-based components are components that are loaded when a specified URL is navigated to our application. They are the route pages setup using react-router in our application:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\nimport Home from "./Home";\nimport About from "./About";\n\nconst App = () => (\n  <Router>\n    <Routes>\n      <Route path="/" element={<Home />} />\n      <Route path="/about" element={<About />} />\n    </Routes>\n  </Router>\n);\n')),(0,n.yg)("p",null,"We have two routes here: ",(0,n.yg)("inlineCode",{parentName:"p"},"/")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"/about"),". They each load the ",(0,n.yg)("inlineCode",{parentName:"p"},"Home")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"About")," pages respectively. The ",(0,n.yg)("inlineCode",{parentName:"p"},"Home")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"About")," components are route-based components.\nNow, these components are ideal components that are to be lazy loaded. IT will drastically reduce the overall bundle size of the application and decrease the load time of the page."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { Suspense, lazy } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nconst Home = React.lazy(() => import("./Home"));\nconst About = React.lazy(() => import("./About"));\n\nconst App = () => (\n  <Router>\n    <Suspense>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </Suspense>\n  </Router>\n);\n')),(0,n.yg)("p",null,"Now, ",(0,n.yg)("inlineCode",{parentName:"p"},"Home")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"About")," will be broken off into their separate bundles. These bundles will be loaded when any of the page routes attached to the component is loaded."),(0,n.yg)("h2",{id:"seo-considerations-with-lazy-loading"},"SEO Considerations with Lazy Loading"),(0,n.yg)("p",null,"I'd like to share with you some thoughts about how lazy loading can affect SEO, and what we need to bear in mind."),(0,n.yg)("p",null,"Lazy loading would significantly improve the performance and user experience of the website because only necessary resources are loaded at the time of need. As a result, this prevents the users from having to sit around waiting for everything to download at once. We'll just consider some SEO aspects so that search engines crawl our content effectively."),(0,n.yg)("p",null,"Here's what you need to keep in mind:"),(0,n.yg)("h3",{id:"ensure-critical-content-is-accessible"},"Ensure Critical Content is Accessible"),(0,n.yg)("p",null,"Make sure important content, and especially above-the-fold content, is not lazy-loaded. This ensures the most critical parts of our pages are visible for search engines from the get-go."),(0,n.yg)("h3",{id:"use-proper-html-markup"},"Use Proper HTML Markup"),(0,n.yg)("p",null,"Use standard HTML tags and attributes correctly. For instance, even though we are lazy-loading images, still use the ",(0,n.yg)("inlineCode",{parentName:"p"},"<img>")," tag; however, set the src attribute to a placeholder image and use the data-src attribute, or similar, for the real image URL. This will ensure search engines can interpret and index our images."),(0,n.yg)("h3",{id:"intersection-observer-api"},"Intersection Observer API"),(0,n.yg)("p",null,"Use this API to implement lazy loading; that is, this is the response to a quick and lightweight way to monitor the visibility of an element within the document so that it perfectly fits all those fancy web search engines, which support JavaScript and, by extension, makes perfect sense for creating a lazy load."),(0,n.yg)("h3",{id:"provide-fallbacks"},"Provide Fallbacks"),(0,n.yg)("p",null,"Always provide fallbacks for users and bots that may not support lazy loading. This might mean displaying a basic version of the content or ensuring that content is available without JavaScript."),(0,n.yg)("h3",{id:"watch-out-for-search-engine-crawls"},"Watch out for search engine crawls"),(0,n.yg)("p",null,"Use tools like the Google Search Console to check how search engines are crawling and indexing our pages. If we notice that important content is missing, it may be that bad lazy loading implementation is at fault. Using lazy loading correctly will help us strike a balance between performance improvement and SEO considerations."),(0,n.yg)("p",null,"Do let me know if you have any further questions!"),(0,n.yg)("h2",{id:"component-based-code-splitting"},"Component-based code-splitting"),(0,n.yg)("p",null,"We have two types of components in React. There are Route-based components and Component-based components. We have learned about Route-based components in the above section."),(0,n.yg)("p",null,"Component-based components are components that are not attached to the application's page route. They are normal components in the application used to display UI sections in the app. Most of the examples we touched on here are examples of Component-based code-splitting. Examples of components that are ideal to be code-split are Modals and Asides. This is because they are loaded eagerly on the load of the webpage.\nHeaders, dropdowns, and buttons are not to be lazily loaded because they are easily needed and are one of the most used UI elements in a webpage."),(0,n.yg)("p",null,"I wanted to share some insights on testing lazy-loaded components in our React applications. Testing these components can ensure they work correctly and are loaded efficiently. Here\u2019s a simple guide to help us get started:"),(0,n.yg)("h2",{id:"testing-lazy-loaded-components"},"Testing Lazy Loaded Components"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Setting Up the Test Environment"),":"),(0,n.yg)("p",null,"Ensure that our test setup supports lazy loading. This usually involves configuring Jest or another testing framework to work with React\u2019s ",(0,n.yg)("inlineCode",{parentName:"p"},"Suspense")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Mocking Dynamic Imports"),":"),(0,n.yg)("p",null,"When testing, we might want to mock dynamic imports to control how and when components are loaded."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Using ",(0,n.yg)("inlineCode",{parentName:"strong"},"Suspense")," for Testing"),":"),(0,n.yg)("p",null,"Wrap the lazy-loaded component with ",(0,n.yg)("inlineCode",{parentName:"p"},"Suspense")," in our tests, just as we do in our application code."),(0,n.yg)("p",null,"Here's a step-by-step example using Jest and React Testing Library:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},"// LazyComponent.js\nimport React from 'react';\n\nconst LazyComponent = () => {\n  return <div>Lazy Loaded Component</div>;\n};\n\nexport default LazyComponent;\n\n// App.js\nimport React, { Suspense, lazy } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nconst App = () => {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n};\n\nexport default App;\n\n// App.test.js\nimport React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport '@testing-library/jest-dom/extend-expect';\nimport App from './App';\n\ntest('loads and displays lazy component', async () => {\n  render(<App />);\n\n  // Check for fallback content\n  expect(screen.getByText('Loading...')).toBeInTheDocument();\n\n  // Wait for lazy component to load\n  const lazyElement = await screen.findByText('Lazy Loaded Component');\n  expect(lazyElement).toBeInTheDocument();\n});\n")),(0,n.yg)("p",null,"By following this approach, we can effectively test our lazy-loaded components to ensure they work as expected. If you have any questions or need further clarification, feel free to reach out!"),(0,n.yg)("h2",{id:"performance-metrics-and-lazy-loading"},"Performance Metrics and Lazy Loading"),(0,n.yg)("p",null,"I'd love to share some ideas about how we might measure our performance metrics and improve lazy loading in React projects. The insights derived from the metrics further drive the optimization of our applications towards providing an enhanced user experience."),(0,n.yg)("h3",{id:"key-performance-metrics"},"Key Performance Metrics"),(0,n.yg)("p",null,"Some of the key metrics we should focus on for measuring the impact on application performance in lazy loading are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"First Contentful Paint (FCP):")," The time taken up to the point when any amount of content is drawn on the screen. Lazy loading helps as it's reducing the initial bundle size, hence improving the FCP."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Time to Interactive (TTI):")," The time taken by the application to become truly interactive. Loading only what is necessary at initial load will help to reduce TTI."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Largest Contentful Paint (LCP):")," This measures the time it takes for the largest content piece to become visible. Lazy loading can be optimized to help improve LCP."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Cumulative Layout Shift (CLS):")," The total of all the unexpected layout shift scores that occurred throughout the life of the page. Lazy loaded images and components might have a tendency for less layout shifts, which results in better CLS.")),(0,n.yg)("h3",{id:"measuring-performance-tools"},"Measuring Performance: Tools"),(0,n.yg)("p",null,"These are some of the tools that enable us to quantitatively measure these performance metrics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Lighthouse:")," It is an inbuilt feature of Chrome DevTools to audit performance, accessibility, best practices, and SEO."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"WebPageTest:")," Performance details that are more in-depth, using filmstrip view and waterfall charts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Google Analytics:")," Use of custom metrics set-up that will track performance data through time."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Performance API:")," A browser's integrated Performance API can be used for measuring precise timings in an application code.")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"We started by learning the definition of lazy loading, what it means and what good it brings to web development and software development at large. In the next sections, we learned about React.lazy function and how to use it. Next, we learned examples of how to lazily load Route-based and Component-based components in our React application."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"React.lazy")," is a powerful feature of React that allows components to be loaded lazily from the server. It is a way to make components available only when they are needed, thus improving the performance of an application."))}g.isMDXComponent=!0}}]);