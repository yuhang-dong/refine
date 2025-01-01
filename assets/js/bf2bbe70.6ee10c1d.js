"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23993],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(37953);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=s,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},98751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});t(37953);var a=t(58860);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const i={title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social-2.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-suspense-guide",source:"@site/blog/2024-10-21-react-suspense.md",title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",date:"2024-10-21T00:00:00.000Z",formattedDate:"October 21, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:15.1,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Getting started with Astro Framework",permalink:"/blog/astro-js-guide"},nextItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},relatedPosts:[{title:"Essentials of Managing Form State with React Hook Form",description:"This post covers the essentials of form state management with React Hook Form library.",permalink:"/blog/react-hook-form",formattedDate:"November 6, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:32.685,date:"2024-11-06T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:19.94,date:"2022-09-27T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"September 11, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:14.895,date:"2024-09-11T00:00:00.000Z"}],authorPosts:[{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 16, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:15.71,date:"2024-10-16T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.95,date:"2022-09-09T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.46,date:"2022-08-20T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Suspense?",id:"what-is-react-suspense",level:2},{value:"Comparing React Suspense to Transitions",id:"comparing-react-suspense-to-transitions",level:2},{value:"Use cases of React Suspense",id:"use-cases-of-react-suspense",level:2},{value:"Fetch data using React suspense",id:"fetch-data-using-react-suspense",level:3},{value:"Lazy load components using React suspense",id:"lazy-load-components-using-react-suspense",level:3},{value:"React Suspense with Concurrent Mode Integration",id:"react-suspense-with-concurrent-mode-integration",level:3},{value:"Loading a Component with Suspense in Concurrent Mode",id:"loading-a-component-with-suspense-in-concurrent-mode",level:3},{value:"In this example:",id:"in-this-example",level:4},{value:"Why this matters",id:"why-this-matters",level:4},{value:"When to use React Suspense",id:"when-to-use-react-suspense",level:2},{value:"React suspense and Error boundaries",id:"react-suspense-and-error-boundaries",level:2},{value:"Using React Suspense along with Server-Side Rendering (SSR)",id:"using-react-suspense-along-with-server-side-rendering-ssr",level:2},{value:"How Suspense Works with SSR",id:"how-suspense-works-with-ssr",level:3},{value:"Suspense in Next.js",id:"suspense-in-nextjs",level:3},{value:"What\u2019s Happening:",id:"whats-happening",level:4},{value:"Important Considerations:",id:"important-considerations",level:4},{value:"Why It\u2019s Useful:",id:"why-its-useful",level:4},{value:"Common Mistakes When Using React Suspense",id:"common-mistakes-when-using-react-suspense",level:2},{value:"Advanced React Suspense Use Cases: Streaming and Progressive Loading",id:"advanced-react-suspense-use-cases-streaming-and-progressive-loading",level:2},{value:"Streaming Data with Suspense",id:"streaming-data-with-suspense",level:3},{value:"Progressive Loading with Suspense",id:"progressive-loading-with-suspense",level:3},{value:"Why It\u2019s Useful",id:"why-its-useful-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},g="wrapper";function h(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){s(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"This article was last updated on October 21, to include advanced use cases of React Suspense, such as streaming data and progressive loading, along with best practices for using Suspense with server-side rendering (SSR)."))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. Content delivery and site performance are important factors for web applications. You must deliver content quickly and effectively for better user experience."),(0,a.yg)("p",null,"Traditionally, you need to use state to manage the different stages when fetching data from an API. With React Suspense, you can suspend rendering a component that is still loading data and render a fallback UI. This improves both developer and user experience."),(0,a.yg)("p",null,"Similarly, you can use React suspense to split large React components into chunks and lazy load them to reduce the initial load time and bundle size."),(0,a.yg)("p",null,"In this article, we will discuss the React Suspense API and some of its common use cases. You must have a working knowledge of React and JavaScript to follow along."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-react-suspense"},"What is React Suspense?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#use-cases-of-react-suspense"},"Use cases of React Suspense")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-use-react-suspense"},"When to use React Suspense")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-suspense-and-error-boundaries"},"React suspense and Error boundaries")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-react-suspense-along-with-server-side-rendering-ssr"},"Using React Suspense along with Server-Side Rendering (SSR)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#common-mistakes-when-using-react-suspense"},"Common Mistakes When Using React Suspense")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#advanced-react-suspense-use-cases-streaming-and-progressive-loading"},"Advanced React Suspense Use Cases: Streaming and Progressive Loading"))),(0,a.yg)("h2",{id:"what-is-react-suspense"},"What is React Suspense?"),(0,a.yg)("p",null,"React Suspense is a built-in React component that you can use to declaratively render a fallback UI until its children finish loading."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<Suspense fallback={<FallbackUI />}>\n  <MyComponent />\n</Suspense>\n")),(0,a.yg)("p",null,"It's a low-level implementation that tracks a component's lifecycle and delays rendering while required data pends. It improves user experience because users won't have to view a partially loaded component before data is fully fetched and rendered."),(0,a.yg)("p",null,"For instance, if the duration it takes for a table component to load data is long, users may initially see an empty table before the component rerenders and displays a fully loaded table."),(0,a.yg)("p",null,"The Suspense API acts as a wrapper around a component to be rendered and then provides a fallback that executes before the wrapped component renders."),(0,a.yg)("p",null,"As an example, we may use React Suspense to wrap the component that renders an image and specify a loading animation as the fallback option to prevent viewers from seeing blurry images that gradually change into the original picture after it loads from a CDN or cloud storage."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// Logo is a component that fetches an image from a CDN\nimport Logo from "./Logo.js";\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n  <Logo />\n</Suspense>;\n')),(0,a.yg)("h2",{id:"comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions"),(0,a.yg)("p",null,"Despite their similarities, do not use Suspense and Transition APIs interchangeably or in the same context."),(0,a.yg)("p",null,"React Suspense tracks a component's readiness before rendering it and only offers a deferred alternative until the original component is ready for rendering."),(0,a.yg)("p",null,"Transition, on the other hand, enables you to prioritize one event over another."),(0,a.yg)("p",null,"For instance, when adding a search feature, you might want to show the user what they are entering but wait to start the search until the user finishes typing."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { startTransition } from "react";\n\n// Set the input value but don\'t initiate the search\nsetInputValue(input);\n\nstartTransition(() => {\n  // Set the final search value, then initiate search\n  setSearchQuery(input);\n});\n')),(0,a.yg)("p",null,"State updates tagged as non-urgent inside of ",(0,a.yg)("inlineCode",{parentName:"p"},"startTransition")," are interrupted if an urgent update is made while the non-urgent state is still updating. This process continues until no new urgent updates are made."),(0,a.yg)("h2",{id:"use-cases-of-react-suspense"},"Use cases of React Suspense"),(0,a.yg)("p",null,"As was discussed in the previous section, it is simple to mistake the React Suspense API for Transition and vice versa. Therefore, it's crucial to know when to use and when not to use them."),(0,a.yg)("h3",{id:"fetch-data-using-react-suspense"},"Fetch data using React suspense"),(0,a.yg)("p",null,"Traditionally, the fetch-on-render pattern is the commonest approach when fetching data from an API. With this pattern, you render the component, fetch data in a ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, update state, and the component re-renders to display the data."),(0,a.yg)("p",null,"Therefore, you need to declare state to manage the different data fetching stages. You need to display an appropriate UI when the data is still loading and an error message when an error occurs like in the example below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function MyComponent() {\n  const [data, setData] = useState();\n  const [isLoading, setIsLoading] = useState(true);\n  const [isError, setIsError] = useState(false);\n\n  useEffect(() => {\n    async function fetchData() {\n      try {\n        setIsLoading(true);\n        const data = await fetchData();\n        setData(data);\n        setIsLoading(false);\n      } catch (error) {\n        setIsError(true);\n        setIsLoading(false);\n      }\n    }\n\n    fetchData();\n  }, []);\n\n  if (isLoading) return <div>Loading data...</div>;\n  if (isError)\n    return (\n      <div>\n        Oops failed to fetch data! <a href="/home">Home page</a>\n      </div>\n    );\n\n  return (\n    <ul>\n      {data.map(({ id, name }) => {\n        return <li key={id}>{name}</li>;\n      })}\n    </ul>\n  );\n}\n')),(0,a.yg)("p",null,"The code above looks simple and easy to maintain. However, it can become complex pretty quickly in a real-world application where you fetch data from multiple data sources and work with several components concurrently. You can refactor the code above to use the Suspense API like in the example. You don't need to track the loading states manually. The temporary fallback UI is rendered while the data is still loading."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import loadData from "./api/loadData.js";\nconst data = loadData("users.json");\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n  <Users />\n</Suspense>;\n\nfunction MyComponent() {\n  const people = data.read();\n\n  return (\n    <div>\n      {people.map(({ id, name }) => {\n        <li key={id}>{name}</li>;\n      })}\n    </div>\n  );\n}\n')),(0,a.yg)("h3",{id:"lazy-load-components-using-react-suspense"},"Lazy load components using React suspense"),(0,a.yg)("p",null,"Lazy loading is an optimization technique for improving the initial load time. For large applications, loading everything at once can lead to a performance hit on initial render. With lazy load, you can defer the initial load for certain components or modules until they're about to be rendered."),(0,a.yg)("p",null,"With lazy load, you can split code into small components and import only those components you need for initial render and defer loading others until the user interacts with the application."),(0,a.yg)("p",null,"You can use the built-in ",(0,a.yg)("inlineCode",{parentName:"p"},"lazy")," function to lazy load a component. It takes a function or another thenable as argument. The function you pass to the ",(0,a.yg)("inlineCode",{parentName:"p"},"lazy")," function should return a promise."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"lazy")," function returns a React component that you can render. While lazy-loading a component, attempting to render it will suspend. Therefore, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Suspense")," component to render a lazy loaded component like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import { lazy } from "react";\nimport Loading from "./Loading.js";\n\nconst MyComponent = lazy(() => import("./MyComponent.js"));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <MyComponent />\n    </Suspense>\n  );\n}\n')),(0,a.yg)("p",null,"In the basic example above, React will import ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent")," when it's about to be rendered. While lazy-loading ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent"),", React renders the fallback ",(0,a.yg)("inlineCode",{parentName:"p"},"Loading")," component."),(0,a.yg)("h3",{id:"react-suspense-with-concurrent-mode-integration"},"React Suspense with Concurrent Mode Integration"),(0,a.yg)("p",null,"I wanted to give a quick explanation of how React Suspense works with Concurrent Mode, in case you haven\u2019t had an opportunity to dive into it yet."),(0,a.yg)("p",null,"React Suspense, coming through Concurrent Mode, will make it easier to handle asynchronous operations, like fetching data or lazy loading, while keeping ease of improvement for user experience by keeping the UI responsive. For compatibility, the basic overview of how both work together is as follows:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"How They Work Together")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"React Suspense pauses the rendering of a component until its dependencies (like data) are fully ready. While it\u2019s waiting, Suspense shows a fallback UI, which can be something like a loading spinner."),(0,a.yg)("li",{parentName:"ul"},"Concurrent Mode allows React to work on several tasks in parallel without blocking the main thread. That means this feature helps in making the app feel faster, mainly by allowing React to prioritize urgent tasks, such as user input, versus less urgent ones, like fetching data.")),(0,a.yg)("p",null,"When we put the two together, React Suspense ensures that the user is not in a situation of waiting for components to load, while Concurrent Mode makes sure user interactions are smooth, even if some components may still be fetching or rendering."),(0,a.yg)("h3",{id:"loading-a-component-with-suspense-in-concurrent-mode"},"Loading a Component with Suspense in Concurrent Mode"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Suspense, startTransition } from "react";\n\n// Loading component for fallback\nconst Loading = () => <div>Loading...</div>;\n\n// Lazy-load a component\nconst MyComponent = React.lazy(() => import("./MyComponent"));\n\nfunction App() {\n  const [input, setInput] = useState("");\n  const [searchQuery, setSearchQuery] = useState("");\n\n  const handleInputChange = (e) => {\n    const newInput = e.target.value;\n    setInput(newInput);\n\n    // Use startTransition to prioritize user typing while deferring the search\n    startTransition(() => {\n      setSearchQuery(newInput);\n    });\n  };\n\n  return (\n    <div>\n      <input\n        value={input}\n        onChange={handleInputChange}\n        placeholder="Type to search..."\n      />\n      {/* Render MyComponent with Suspense */}\n      <Suspense fallback={<Loading />}>\n        <MyComponent searchQuery={searchQuery} />\n      </Suspense>\n    </div>\n  );\n}\n')),(0,a.yg)("h4",{id:"in-this-example"},"In this example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Suspense is a wrapper for the lazy-loaded MyComponent. While fetching the component, it shows a fallback: Loading."),(0,a.yg)("li",{parentName:"ul"},"startTransition is called when the user starts typing in the input field, ensuring that the UI updates (displaying the typed text) are prioritized, and the search query is updated after the interaction with the UI is complete.")),(0,a.yg)("h4",{id:"why-this-matters"},"Why this matters"),(0,a.yg)("p",null,"The combination of Suspense and Concurrent Mode helps us strike a balance between loading times and responsiveness, improving user experience. Users aren\u2019t blocked by long-running tasks like data fetching, and they can continue interacting with the UI while React handles the heavy lifting."),(0,a.yg)("h2",{id:"when-to-use-react-suspense"},"When to use React Suspense"),(0,a.yg)("p",null,"You can use React Suspense to manage components that perform asynchronous operations such as fetching data from the server and lazy loading a component."),(0,a.yg)("p",null,"React pauses rendering a component wrapped in React suspense while it's performing an async operation and renders a temporary fallback UI until the operation is complete. This improves both developer and user experience."),(0,a.yg)("p",null,"React Suspense has several use cases:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Data Fetching"),": It allows components to wait for data before rendering. You can use libraries like Relay to integrate data fetching with Suspense."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Code Splitting"),": Suspense can dynamically load components with ",(0,a.yg)("inlineCode",{parentName:"li"},"React.lazy")," and a dynamic ",(0,a.yg)("inlineCode",{parentName:"li"},"import()"),", reducing the initial load time of your application."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Resource Loading"),": It can manage loading states for resources like images or scripts, improving the user experience during resource-intensive operations."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Concurrency in React"),": With the concurrent mode, Suspense can handle multiple tasks like data fetching, rendering, and user inputs simultaneously, making the app more responsive.")),(0,a.yg)("h2",{id:"react-suspense-and-error-boundaries"},"React suspense and Error boundaries"),(0,a.yg)("p",null,"In React , Error boundaries are components that you can use to catch errors in the application's component tree. If you don't handle it, an error in a single component can crash the entire application."),(0,a.yg)("p",null,"At the moment, you can define error boundaries using class components. A class component becomes an error boundary if it implements either the\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," method\xa0or\xa0 the ",(0,a.yg)("inlineCode",{parentName:"p"},"componentDidCatch()")," life cycle method or both as in the example below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>An error has occurred.</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n")),(0,a.yg)("p",null,"After that, you can wrap the ",(0,a.yg)("inlineCode",{parentName:"p"},"Suspense")," component using the Error boundary like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary>\n  <Suspense fallback={<Loading />}>\n    <MyComponent />\n  </Suspense>\n</ErrorBoundary>\n")),(0,a.yg)("p",null,"Instead of declaring an error boundary as in the example above, you can also use the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/bvaughn/react-error-boundary"},"React error boundary")," package. It's a popular React error boundary component. You can install it from the npm package registry using any package manager of choice."),(0,a.yg)("p",null,"The Refine blog also has an in-depth article about error boundaries. You can check it out ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/blog/react-error-boundaries/"},"here"),"."),(0,a.yg)("h2",{id:"using-react-suspense-along-with-server-side-rendering-ssr"},"Using React Suspense along with Server-Side Rendering (SSR)"),(0,a.yg)("p",null,"I just wanted to give a little overview of how React Suspense works with Server-Side Rendering, since it\u2019s a bit different compared to the usual client-side rendering."),(0,a.yg)("h3",{id:"how-suspense-works-with-ssr"},"How Suspense Works with SSR"),(0,a.yg)("p",null,"When we use SSR, the server-side render prepares the initial HTML for our app before it\u2019s delivered to a client. The issue here is that React Suspense doesn\u2019t fully support data fetching out of the box yet with SSR, but there are ways we can use it effectively with frameworks like Next.js."),(0,a.yg)("p",null,"For example, if the project is in Next.js, we can use React Suspense for code-splitting and lazy loading of components. As for data fetching, for now, we need to strictly adhere to using the built-in methods of Next.js, such as by using getServerSideProps or getStaticProps."),(0,a.yg)("h3",{id:"suspense-in-nextjs"},"Suspense in Next.js"),(0,a.yg)("p",null,"Here is a quick example of how we could integrate React Suspense with SSR in a Next.js application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// Lazy-load a heavy component\nconst HeavyComponent = React.lazy(() => import("./components/HeavyComponent"));\n\nexport default function Home({ data }) {\n  return (\n    <div>\n      {/* Suspense handles the loading of the component */}\n      <Suspense fallback={<div>Loading component...</div>}>\n        <HeavyComponent data={data} />\n      </Suspense>\n    </div>\n  );\n}\n\n// Using Next.js SSR data-fetching method\nexport async function getServerSideProps() {\n  const data = await fetchSomeData();\n  return { props: { data } };\n}\n')),(0,a.yg)("h4",{id:"whats-happening"},"What\u2019s Happening:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Suspense lazy-loads HeavyComponent, where it will only get loaded on the client-side once the server renders the initial HTML."),(0,a.yg)("li",{parentName:"ul"},"The data fetching is handled by Next.js\u2019s getServerSideProps, which fetches the data on the server-side before rendering the component.")),(0,a.yg)("h4",{id:"important-considerations"},"Important Considerations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Suspense works great with lazy-loaded components for SSR, but Suspense is not yet fully capable of handling data fetching in SSR. For now, data fetching is managed by frameworks like Next.js, where Suspense can still handle loading components and showing fallback UIs."),(0,a.yg)("li",{parentName:"ul"},"Going forward, React 18 and beyond should provide better support for Suspense data-fetching in SSR, but until then, we need to combine traditional SSR methods with Suspense for code-splitting.")),(0,a.yg)("h4",{id:"why-its-useful"},"Why It\u2019s Useful:"),(0,a.yg)("p",null,"Suspense with SSR\u2014especially in Next.js\u2014helps us improve performance by loading only the necessary components on the client side, reducing the initial bundle size. This leads to a better user experience. While we wait for full Suspense support for data fetching on the server, we can still use it to optimize how large components are loaded."),(0,a.yg)("h2",{id:"common-mistakes-when-using-react-suspense"},"Common Mistakes When Using React Suspense"),(0,a.yg)("p",null,"It's not uncommon to misuse the Suspense API because of its similarity to Transition and other APIs. For illustration:"),(0,a.yg)("p",null,"Using components that handle concurrency using ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect()"),' inside Suspense. The use of "useEffect", which is designed to manage concurrency, inside the Suspense API defeats the purpose of the API.'),(0,a.yg)("p",null,"Relay uses Suspense, however, it doesn't perform the same functions as Relay. Some users mistake Suspense for a server API request tool like Axios or Relay."),(0,a.yg)("p",null,"Another mistake people make is using ",(0,a.yg)("inlineCode",{parentName:"p"},"catch()")," to handle errors. This will cause the component to wait for the promise before rendering. Instead, use Error Boundary to handle rendering errors."),(0,a.yg)("h2",{id:"advanced-react-suspense-use-cases-streaming-and-progressive-loading"},"Advanced React Suspense Use Cases: Streaming and Progressive Loading"),(0,a.yg)("p",null,"I wanted to share some of the advanced ways we can use React Suspense, especially for streaming data and progressive loading. These techniques are super useful for real-time apps or those that handle a lot of data."),(0,a.yg)("h3",{id:"streaming-data-with-suspense"},"Streaming Data with Suspense"),(0,a.yg)("p",null,"React Suspense helps manage streaming data by pausing rendering until the initial data chunks load. As new data arrives, Suspense continues to display the already-rendered portion, offering a smoother experience."),(0,a.yg)("p",null,"For instance, imagine we\u2019re building a live chat application or a dashboard that updates with live data. With Suspense, we can start rendering the page with the first few data chunks and then progressively display more as it streams in."),(0,a.yg)("p",null,"Here\u2019s a simplified example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { Suspense } from "react";\n\nfunction StreamingComponent() {\n  const dataStream = fetchStreamData(); // Assume this returns a stream of data\n\n  return (\n    <div>\n      {dataStream.map((chunk, index) => (\n        <div key={index}>{chunk}</div>\n      ))}\n    </div>\n  );\n}\n\n<Suspense fallback={<div>Loading data...</div>}>\n  <StreamingComponent />\n</Suspense>;\n')),(0,a.yg)("p",null,"In this case, Suspense waits for the first chunk to be ready before rendering. As new data comes in, React updates the UI without needing to block the whole process."),(0,a.yg)("h3",{id:"progressive-loading-with-suspense"},"Progressive Loading with Suspense"),(0,a.yg)("p",null,"Another advanced use case is progressive loading, which helps improve user experience in large, resource-heavy apps. With progressive loading, we can prioritize the most important parts of the page first, while deferring less critical sections until later."),(0,a.yg)("p",null,"For example, if we\u2019re building a media-heavy page with lots of images or videos, we can load the essential content (like text or headings) first, while the images load progressively in the background."),(0,a.yg)("p",null,"Here\u2019s how we can do that:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import { Suspense, lazy } from "react";\n\nconst HeavyImage = lazy(() => import("./HeavyImage"));\n\nfunction MediaPage() {\n  return (\n    <div>\n      <h1>Welcome to the Media Page</h1>\n      <p>Here\u2019s some important content while the media loads:</p>\n\n      {/* Progressive loading of images */}\n      <Suspense fallback={<div>Loading images...</div>}>\n        <HeavyImage />\n      </Suspense>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"In this example, the important text and headings load first, and then Suspense progressively loads the images. This ensures a faster initial load without blocking the entire page due to heavy media content."),(0,a.yg)("h3",{id:"why-its-useful-1"},"Why It\u2019s Useful"),(0,a.yg)("p",null,"These advanced Suspense use cases are helpful for improving user experience in apps dealing with real-time data or large media files. By streaming or progressively loading content, we can:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Reduce initial load times"),": Users can see content faster, even if not all data is ready."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Improve responsiveness"),": Especially in real-time applications, users can interact with the page while more data is still loading."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Optimize performance"),": Prioritize loading critical content first to ensure it is displayed as soon as possible.")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"React suspense API comes in handy for building performant and responsive web apps. As explained above, you can use React suspense to render a lazy loaded React component or render a fallback UI while fetching data from an API. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Suspense")," component will render a fallback UI while its children are loading."),(0,a.yg)("p",null,"As you use the suspense API, be aware that only suspense-enabled functionalities such as lazy loading will activate the Suspense component out of the box."),(0,a.yg)("p",null,"At the moment, React doesn't have out-of-the-box support for suspense-enabled data fetching. However, you can use React meta frameworks such as Next.js because they integrate suspense-enabled data fetching functionality for you."),(0,a.yg)("p",null,"Similarly, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Suspense")," component doesn't detect any data you load inside a ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook or an event handler."),(0,a.yg)("p",null,"Suspense is easy to switch to; if you're interested in learning more about the API, check the ",(0,a.yg)("a",{parentName:"p",href:"https://17.reactjs.org/docs/concurrent-mode-suspense.html"},"official React documentation"),"."))}h.isMDXComponent=!0}}]);