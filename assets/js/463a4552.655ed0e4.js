"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38641],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",slug:"uselayouteffect-vs-useeffect",authors:"wisdom_ekpotu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-02-react-uselayouteffect/social-2.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/uselayouteffect-vs-useeffect",source:"@site/blog/2024-08-09-react-uselayouteffect.md",title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",date:"2024-08-09T00:00:00.000Z",formattedDate:"August 9, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:13.58,hasTruncateMarker:!1,authors:[{name:"Wisdom Ekpotu",title:"Software Engineer",imageURL:"https://github.com/wisdomekpotu.png",key:"wisdom_ekpotu"}],frontMatter:{title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",slug:"uselayouteffect-vs-useeffect",authors:"wisdom_ekpotu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-02-react-uselayouteffect/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to create a notification provider with react-toastify",permalink:"/blog/react-toastify"},nextItem:{title:"Next.js 13.4's Server Actions and Data Fetching",permalink:"/blog/next-js-server-actions-and-data-fetching"},relatedPosts:[{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"December 20, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:26.34,date:"2024-12-20T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.4,date:"2022-10-07T00:00:00.000Z"},{title:"Building a React Admin Panel with PrimeReact and Refine",description:"We'll build a simple React admin Panel using Refine and PrimeReact.",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine",formattedDate:"July 26, 2023",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:42.665,date:"2023-07-26T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What are side effects in React?",id:"what-are-side-effects-in-react",level:2},{value:"The <code>useEffect</code> hook",id:"the-useeffect-hook",level:2},{value:"Syntax:",id:"syntax",level:3},{value:"What is the problem with <code>useEffect</code>?",id:"what-is-the-problem-with-useeffect",level:2},{value:"Introducing the <code>useLayoutEffect</code> hook?",id:"introducing-the-uselayouteffect-hook",level:2},{value:"How does the <code>useLayoutEffect</code> hook work",id:"how-does-the-uselayouteffect-hook-work",level:2},{value:"When should you use the <code>useLayoutEffect</code> hook?",id:"when-should-you-use-the-uselayouteffect-hook",level:2},{value:"1. Adding Smooth Scroll:",id:"1-adding-smooth-scroll",level:3},{value:"2. Animating Elements:",id:"2-animating-elements",level:3},{value:"3. Auto-focus Input Field:",id:"3-auto-focus-input-field",level:3},{value:"Comparing <code>useEffect</code> to <code>useLayoutEffect</code>",id:"comparing-useeffect-to-uselayouteffect",level:2},{value:"Benefits of using the <code>useLayoutEffect</code> hook",id:"benefits-of-using-the-uselayouteffect-hook",level:2},{value:"Pitfalls of using the <code>useLayoutEffect</code> hook",id:"pitfalls-of-using-the-uselayouteffect-hook",level:2},{value:"Best Practices for using <code>useLayoutEffect</code>",id:"best-practices-for-using-uselayouteffect",level:2},{value:"Choosing the Right Hook",id:"choosing-the-right-hook",level:2},{value:"Test React components using <code>useLayoutEffect</code>",id:"test-react-components-using-uselayouteffect",level:2},{value:"React Testing Library",id:"react-testing-library",level:3},{value:"Mocking <code>useLayoutEffect</code>",id:"mocking-uselayouteffect",level:3},{value:"Testing Manipulating the DOM",id:"testing-manipulating-the-dom",level:3},{value:"Dealing with Cleanup Effects",id:"dealing-with-cleanup-effects",level:3},{value:"Timers and Asynchronous Operations",id:"timers-and-asynchronous-operations",level:3},{value:"Conclusion",id:"conclusion",level:2}],f={toc:p},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"This article was last updated on August 09, 2024, to add sections on Testing Components that Use ",(0,o.yg)("inlineCode",{parentName:"strong"},"useLayoutEffect")," and Performance Optimization Strategies.")),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"In recent years, ",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/"},"React")," has solidified itself in the ever-changing landscape of web development as one of the most efficient ways of building highly performant and interactive user interfaces. With the introduction of a new feature called ",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/reference/react"},"Hooks"),", React has revolutionized the way developers manage stateful and reusable logic within functional components."),(0,o.yg)("p",null,"With Hooks you can use state and other React features without the need to write ES6 class components. One important hook though not very popular is the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, which allows developers to handle and perform side effects in React components."),(0,o.yg)("p",null,"In this article, you will explore the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook in-depth, how it differs from ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," and learn how to properly leverage its capabilities to enhance the user experience. Also, to follow along with this article you should have some experience working with Reactjs."),(0,o.yg)("p",null,"Steps we'll cover:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#what-are-side-effects-in-react"},"What are side effects in React?"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#the-useeffect-hook"},"The ",(0,o.yg)("inlineCode",{parentName:"a"},"useEffect")," hook"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#what-is-the-problem-with-useeffect"},"What is the problem with ",(0,o.yg)("inlineCode",{parentName:"a"},"useEffect"),"?"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#introducing-the-uselayouteffect-hook"},"Introducing the ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook?"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#how-does-the-uselayouteffect-hook-work"},"How does the ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook work"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#when-should-you-use-the-uselayouteffect-hook"},"When should you use the ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook?"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#comparing-useeffect-to-uselayouteffect"},"Comparing ",(0,o.yg)("inlineCode",{parentName:"a"},"useEffect")," to ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#benefits-of-using-the-uselayouteffect-hook"},"Benefits of using the ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#pitfalls-of-using-the-uselayouteffect-hook"},"Pitfalls of using the ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#best-practices-for-using-uselayouteffect"},"Best Practices for using ",(0,o.yg)("inlineCode",{parentName:"a"},"useLayoutEffect")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#choosing-the-right-hook"},"Choosing the Right Hook")))),(0,o.yg)("h2",{id:"what-are-side-effects-in-react"},"What are side effects in React?"),(0,o.yg)("p",null,"To truly grasp what ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," is and what it does, it's essential to have a solid understanding of side effects in React."),(0,o.yg)("p",null,"A component's primary responsibilities include rendering the user interface (UI), responding to user input and events, and re-rendering the UI as necessary. You might need to carry out some tasks or operations when working on a React project that falls outside the render cycle of the component. These are known as \"",(0,o.yg)("strong",{parentName:"p"},"Side Effects"),'".'),(0,o.yg)("p",null,"A side effect is anything that happens within your application that is not (at least not directly) related to UI rendering. For example, send HTTP requests to servers, store data in the browser's memory, and set time functions. There are no UI changes in these scenarios. In other words, React will not re-render your component for these scenarios."),(0,o.yg)("p",null,"Although they can be very helpful in our application and are a key concept in functional programming, side effects can also be challenging to manage and, if done incorrectly, can result in unexpected behavior and performance problems."),(0,o.yg)("p",null,"To handle side effects you can make use of a set of built-in hooks called ",(0,o.yg)("a",{parentName:"p",href:"https://react.dev/reference/react#effect-hooks"},"Effect Hooks")," namely; ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"useInsertionEffect"),"."),(0,o.yg)("p",null,"Among these hooks, the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook is the most used by react developers compared to the other hooks. But a question arises. Is it suitable for treating all kinds of side effects?"),(0,o.yg)("h2",{id:"the-useeffect-hook"},"The ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect")," hook"),(0,o.yg)("p",null,"If you have written React code using class components then you should be familiar with the lifecycle methods; ",(0,o.yg)("inlineCode",{parentName:"p"},"componentDidMount"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"componentDidUpdate"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"componentWillUnmount"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook is a combination of all three lifecycle methods hence it allows us to access lifecycle methods in functional components."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hooks runs ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"asynchronously"))," ie and It is commonly used to make API requests."),(0,o.yg)("h3",{id:"syntax"},"Syntax:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import React, { useEffect } from "react";\n\nfunction MyComponent() {\n  useEffect(() => {\n    // Side effect logic goes here\n    console.log("Component rendered!");\n    // Cleanup function (optional)\n    return () => {\n      console.log("Component unmounted!");\n    };\n  }, []); // Empty dependencies array, runs only on mount\n  return <div>{/* Component JSX */}</div>;\n}\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," operates once the component is fully loaded initially, and then every time there's a change in the component's state."),(0,o.yg)("h2",{id:"what-is-the-problem-with-useeffect"},"What is the problem with ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect"),"?"),(0,o.yg)("p",null,"As stated above the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook is asynchronous this has a significant drawback in that it can only be called after the component has been mounted. This implies that side effects that depend on the layout of the component cannot be carried out using ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.yg)("p",null,"Now how do we solve this problem, this is where ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," comes in."),(0,o.yg)("h2",{id:"introducing-the-uselayouteffect-hook"},"Introducing the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook?"),(0,o.yg)("p",null,"While many React developers are familiar with the widely used ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook remains overshadowed by its sibling but is still a powerful tool for improving the performance of React apps."),(0,o.yg)("p",null,"Unlike the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook runs ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"synchronously"))," which means it runs immediately after React has performed all the necessary DOM mutations but just before the browser paints the screen. It has the same API and possesses a similar syntax as the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.yg)("p",null,"This hook was introduced to solve some layout specific / niche issues that plagued devs when using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.yg)("p",null,"Syntax:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.js"',title:'"src/App.js"'},"import React, { useLayoutEffect } from 'react';\n\nfunction MyComponent() {\n  useLayoutEffect(() => {\n    // Perform side effects here\n    // This code runs after the component has rendered but before the browser paints the screen\n\n    return () => {\n      // Cleanup code here (optional)\n    };\n  }, []);\n\n  return (\n    // JSX code for your component\n  );\n}\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," is usually used together with the ",(0,o.yg)("inlineCode",{parentName:"p"},"useRef")," hook, which will allow you to get a reference to any DOM element that you can use to read layout information."),(0,o.yg)("h2",{id:"how-does-the-uselayouteffect-hook-work"},"How does the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook work"),(0,o.yg)("p",null,"Here is a basic overview of how the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook works:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The user interacts with the application."),(0,o.yg)("li",{parentName:"ul"},"The components' states change."),(0,o.yg)("li",{parentName:"ul"},"After that, the DOM is altered."),(0,o.yg)("li",{parentName:"ul"},"If the ",(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," dependencies have changed, this method is called to clean up effects from the previous render."),(0,o.yg)("li",{parentName:"ul"},"After cleanup, the ",(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook is called."),(0,o.yg)("li",{parentName:"ul"},"Changes are reflected on the browser screen.")),(0,o.yg)("h2",{id:"when-should-you-use-the-uselayouteffect-hook"},"When should you use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook?"),(0,o.yg)("h3",{id:"1-adding-smooth-scroll"},"1. Adding Smooth Scroll:"),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},'import React, { useRef, useLayoutEffect } from "react";\n\nconst SmoothScrolling = () => {\n  const containerRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const container = containerRef.current;\n\n    const handleScroll = () => {\n      // Smoothly scroll to the top of the container\n      container.scrollTo({\n        top: 0,\n        behavior: "smooth",\n      });\n    };\n\n    // Scroll to the top when the component is mounted\n    handleScroll();\n\n    // Add event listener to scroll to the top on subsequent scrolls\n    window.addEventListener("scroll", handleScroll);\n\n    return () => {\n      window.removeEventListener("scroll", handleScroll);\n    };\n  }, []);\n\n  return <div ref={containerRef}>{/* Your Content */}</div>;\n};\n')),(0,o.yg)("p",null,"In the code above, the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook is used to add smooth scrolling functionality to a container element. An event listener is set up to listen for a scroll event on the window object and invoke the ",(0,o.yg)("inlineCode",{parentName:"p"},"handlescroll")," function. The function will smoothly scroll the container to top using the scrollTo method with ",(0,o.yg)("inlineCode",{parentName:"p"},"{ top: 0, behavior: 'smooth' }")," as the options."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook will perform the initial scroll to the top when the component is mounted. A clean-up function is added to remove the event listener when the component is unmounted."),(0,o.yg)("h3",{id:"2-animating-elements"},"2. Animating Elements:"),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},'import React, { useRef, useLayoutEffect } from "react";\n\nconst AnimatingElements = () => {\n  const elementRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const element = elementRef.current;\n\n    // Animate the element\'s opacity on mount\n    element.style.opacity = 0;\n    setTimeout(() => {\n      element.style.opacity = 1;\n    }, 1000);\n\n    return () => {\n      // Clean up animation when the component unmounts\n      element.style.opacity = 0;\n    };\n  }, []);\n\n  return <div ref={elementRef}>Animate me!</div>;\n};\n')),(0,o.yg)("p",null,"The code block above demonstrates how to animate an element's opacity using the useLayoutEffect hook. An initial opacity of the element is set to 0 and then a setTimeout function is used to animate it to 1 after a delay of 1000ms."),(0,o.yg)("p",null,"Then the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook applies the animation after the component is mounted. The element's opacity is reset to 0 when the component is unmounted."),(0,o.yg)("h3",{id:"3-auto-focus-input-field"},"3. Auto-focus Input Field:"),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},'import React, { useRef, useLayoutEffect } from "react";\n\nconst AutoFocusInput = () => {\n  const inputRef = useRef(null);\n\n  useLayoutEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} />;\n};\n')),(0,o.yg)("p",null,"In the preceding code, we make use of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook to automatically focus on an input field when the component is mounted.\nWe proceed to access the input element using the ",(0,o.yg)("inlineCode",{parentName:"p"},"ref")," hook. Inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, we call the focus method on the input element to give it focus. Since we want this only to run once we will leave the dependency array empty ([])."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," For this example there is no cleanup function because there is no need to undo the focus when the component is unmounted."),(0,o.yg)("h2",{id:"comparing-useeffect-to-uselayouteffect"},"Comparing ",(0,o.yg)("inlineCode",{parentName:"h2"},"useEffect")," to ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null}),(0,o.yg)("th",{parentName:"tr",align:null},"useEffect Hook"),(0,o.yg)("th",{parentName:"tr",align:null},"useLayoutEffect Hook"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Order of Execution"),(0,o.yg)("td",{parentName:"tr",align:null},"Runs after rendering and any updates have been applied."),(0,o.yg)("td",{parentName:"tr",align:null},"Runs after rendering but before the browser paints the screen")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Scheduling"),(0,o.yg)("td",{parentName:"tr",align:null},"Schedule asynchronous operations"),(0,o.yg)("td",{parentName:"tr",align:null},"Schedules synchronous operations")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Timing"),(0,o.yg)("td",{parentName:"tr",align:null},"Runs asynchronously during the render phase."),(0,o.yg)("td",{parentName:"tr",align:null},"Runs synchronously during the commit phase.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Use Cases"),(0,o.yg)("td",{parentName:"tr",align:null},"Fetching data, subscribing to events, scheduling side effects."),(0,o.yg)("td",{parentName:"tr",align:null},"Performing measurements, synchronously modifying the DOM based on layout.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Blocking Nature"),(0,o.yg)("td",{parentName:"tr",align:null},"Non-blocking, does not delay rendering"),(0,o.yg)("td",{parentName:"tr",align:null},"Potentially blocking, may delay rendering")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Performance"),(0,o.yg)("td",{parentName:"tr",align:null},"Optimized for performance in most cases"),(0,o.yg)("td",{parentName:"tr",align:null},"Can cause performance issues if not used carefully")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Usage Considerations"),(0,o.yg)("td",{parentName:"tr",align:null},"Preferable for most side effects and effects that don't require immediate visual updates."),(0,o.yg)("td",{parentName:"tr",align:null},"Suitable for effects that need to be applied synchronously before the browser paints.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Dependencies"),(0,o.yg)("td",{parentName:"tr",align:null},"Can specify an array of dependencies to control when the effect runs."),(0,o.yg)("td",{parentName:"tr",align:null},"Similar to ",(0,o.yg)("inlineCode",{parentName:"td"},"useEffect"),", dependencies can be specified to optimize effect re-execution.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Server-side Rendering (SSR)"),(0,o.yg)("td",{parentName:"tr",align:null},"Can be used in both client-side and server-side rendering environments."),(0,o.yg)("td",{parentName:"tr",align:null},"Not recommended for server-side rendering, as it can block rendering. Use ",(0,o.yg)("inlineCode",{parentName:"td"},"useEffect")," instead.")))),(0,o.yg)("h2",{id:"benefits-of-using-the-uselayouteffect-hook"},"Benefits of using the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It ensures that layouts are very consistent throughout and are stable before the user sees it."),(0,o.yg)("li",{parentName:"ul"},"It helps prevent unnecessary re-renders or repaints by synchronizing state changes with DOM changes."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Preventing Flickering or unwanted content flashes:")," In some circumstances, utilizing useLayoutEffect can assist to eliminate visual flickering or layout shifts that might occur when elements need to be relocated or styled depending on layout information. By performing the appropriate layout changes synchronously before the browser paints, you may prevent the visual glitches that could arise if you used ",(0,o.yg)("inlineCode",{parentName:"li"},"useEffect")," and had a delay between layout changes and rendering.")),(0,o.yg)("h2",{id:"pitfalls-of-using-the-uselayouteffect-hook"},"Pitfalls of using the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"A major pitfall of this hook according to the official React docs, is that it can hurt app performance."),(0,o.yg)("li",{parentName:"ol"},"No support for Server-Side Rendering (SSR): Because SSR requires asynchronous rendering to avoid blocking the server thread, using useLayoutEffect in an SSR setup can result in mismatches between server-rendered and client-rendered content.")),(0,o.yg)("h2",{id:"best-practices-for-using-uselayouteffect"},"Best Practices for using ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")),(0,o.yg)("p",null,"When using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook in React, it's important to follow best practices to ensure that your code behaves correctly and efficiently. Here are some recommended practices for using ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," effectively:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," is a Hook, and hence must be called at the top level of your component."),(0,o.yg)("li",{parentName:"ul"},"Do not call it inside loops or conditions. If you need to do that then extract a component and move the Effect there."),(0,o.yg)("li",{parentName:"ul"},"Only use the ",(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook for side effects that depend on the layout of the component."),(0,o.yg)("li",{parentName:"ul"},"Also make use of the ",(0,o.yg)("inlineCode",{parentName:"li"},"ref")," object in order to access the current layout of the component."),(0,o.yg)("li",{parentName:"ul"},"Avoid using ",(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," to update the state of your components."),(0,o.yg)("li",{parentName:"ul"},"Avoid carrying out expensive operations and computations that could significantly cause a delay in rendering."),(0,o.yg)("li",{parentName:"ul"},"Always consider using alternatives such as ",(0,o.yg)("inlineCode",{parentName:"li"},"useEffect"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Limit the use of useLayoutEffect:")," In most circumstances, useEffect will suffice to deliver the needed functionality. Use useLayoutEffect only in situations when synchronous execution and quick access to the DOM is required."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Be mindful of dependencies:")," Just like ",(0,o.yg)("inlineCode",{parentName:"li"},"useEffect"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook also accepts an array of dependencies as the second argument. So ensure you include all the relevant dependencies to avoid unnecessary re-renders.")),(0,o.yg)("h2",{id:"choosing-the-right-hook"},"Choosing the Right Hook"),(0,o.yg)("p",null,"There is no right or wrong hook to use it all depends on your specific use case. So I would recommend starting with the",(0,o.yg)("inlineCode",{parentName:"p"},"useeffect")," hook and switching over when it causes a problem."),(0,o.yg)("h2",{id:"test-react-components-using-uselayouteffect"},"Test React components using ",(0,o.yg)("inlineCode",{parentName:"h2"},"useLayoutEffect")),(0,o.yg)("p",null,"I wanted to share some thoughts on how we can write effective tests for our components using ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hooks in our React applications. Testing is sometimes a bit burdensome because of the fact that ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," is synchronous, but if we take the right approach, we can make sure that our components behave as we expect. Here's a breakdown of some strategies:"),(0,o.yg)("h3",{id:"react-testing-library"},"React Testing Library"),(0,o.yg)("p",null,"React Testing Library is a popular choice to test React components. As ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," runs synchronously, that is an important thing to work with in our tests. For the test, we can render a component and right away verify that the side effects have occurred as expected."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect, useRef } from "react";\nimport { render, screen } from "@testing-library/react";\n\nfunction AutoFocusInput() {\n  const inputRef = useRef(null);\n\n  useLayoutEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} data-testid="auto-focus-input" />;\n}\n\ntest("focuses the input field on render", () => {\n  render(<AutoFocusInput />);\n  const input = screen.getByTestId("auto-focus-input");\n\n  expect(input).toHaveFocus();\n});\n')),(0,o.yg)("h3",{id:"mocking-uselayouteffect"},"Mocking ",(0,o.yg)("inlineCode",{parentName:"h3"},"useLayoutEffect")),(0,o.yg)("p",null,"Sometimes you would need to mock ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," to test how it interacts with other hooks or isolate its behavior. You can use Jest to mock the hook, allowing you to control its execution during tests and simulate different scenarios."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect } from "react";\nimport { render } from "@testing-library/react";\nimport { jest } from "@jest/globals";\n\nconst MyComponent = () => {\n  useLayoutEffect(() => {\n    console.log("useLayoutEffect called");\n  }, []);\n\n  return <div>Test Component</div>;\n};\n\ntest("mocks useLayoutEffect", () => {\n  const useLayoutEffectMock = jest.spyOn(React, "useLayoutEffect");\n  useLayoutEffectMock.mockImplementation(() => {\n    console.log("Mocked useLayoutEffect");\n  });\n\n  render(<MyComponent />);\n\n  expect(useLayoutEffectMock).toHaveBeenCalledTimes(1);\n  useLayoutEffectMock.mockRestore();\n});\n')),(0,o.yg)("h3",{id:"testing-manipulating-the-dom"},"Testing Manipulating the DOM"),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," is being used to manipulate the DOM for measuring elements or applying styles, it's extremely important to assert these changes in your tests. This will make sure the side effects which your hook applies happen as expected."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect, useRef } from "react";\nimport { render, screen } from "@testing-library/react";\n\nconst MeasureComponent = () => {\n  const boxRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const box = boxRef.current;\n    box.style.width = "200px";\n  }, []);\n\n  return (\n    <div ref={boxRef} data-testid="measured-box">\n      Box\n    </div>\n  );\n};\n\ntest("applies styles to the element", () => {\n  render(<MeasureComponent />);\n  const box = screen.getByTestId("measured-box");\n\n  expect(box).toHaveStyle("width: 200px");\n});\n')),(0,o.yg)("h3",{id:"dealing-with-cleanup-effects"},"Dealing with Cleanup Effects"),(0,o.yg)("p",null,"Similarly, when testing components that have an effect in ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect"),", it is important to ensure they clean up properly. This means you need to check if all event listeners are removed and, if there were any, their side effects on the DOM are removed once the component is unmounted."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect, useRef } from "react";\nimport { render, unmountComponentAtNode } from "@testing-library/react";\n\nconst EventListenerComponent = () => {\n  const divRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const handleScroll = () => {\n      console.log("Scrolling...");\n    };\n\n    window.addEventListener("scroll", handleScroll);\n\n    return () => {\n      window.removeEventListener("scroll", handleScroll);\n    };\n  }, []);\n\n  return <div ref={divRef}>Scroll Event Listener</div>;\n};\n\ntest("removes event listener on unmount", () => {\n  const { unmount } = render(<EventListenerComponent />);\n\n  const spy = jest.spyOn(window, "removeEventListener");\n  unmount();\n\n  expect(spy).toHaveBeenCalledWith("scroll", expect.any(Function));\n  spy.mockRestore();\n});\n')),(0,o.yg)("h3",{id:"timers-and-asynchronous-operations"},"Timers and Asynchronous Operations"),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," depends on some async operation or running timers, then with the help of test utilities, such as Jest's fake timers, you are sure the behavior is tested right. You will be able to manipulate time better and determine the side effects that should happen with that delay."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useLayoutEffect, useRef } from "react";\nimport { render, screen } from "@testing-library/react";\n\njest.useFakeTimers();\n\nconst DelayedEffectComponent = () => {\n  const ref = useRef(null);\n\n  useLayoutEffect(() => {\n    setTimeout(() => {\n      ref.current.textContent = "Updated Text";\n    }, 2000);\n  }, []);\n\n  return (\n    <div ref={ref} data-testid="delayed-box">\n      Initial Text\n    </div>\n  );\n};\n\ntest("updates text after delay", () => {\n  render(<DelayedEffectComponent />);\n  const box = screen.getByTestId("delayed-box");\n\n  expect(box).toHaveTextContent("Initial Text");\n\n  jest.advanceTimersByTime(2000);\n\n  expect(box).toHaveTextContent("Updated Text");\n});\n')),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"Throughout this article, you have learned a lot about ",(0,o.yg)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, similarities and differences, best practices etc. By now I am confident you know enough to properly make use of effect hooks in your applications to improve the overall experience and solve great problems."))}h.isMDXComponent=!0}}]);