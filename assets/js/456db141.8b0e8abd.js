"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6554],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=g(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<o;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>g,toc:()=>c});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social-2.png",hide_table_of_contents:!1},l=void 0,g={permalink:"/blog/how-react-fragments-is-works",source:"@site/blog/2024-06-26-react-fragments.md",title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",date:"2024-06-26T00:00:00.000Z",formattedDate:"June 26, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.085,hasTruncateMarker:!1,authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],frontMatter:{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social-2.png",hide_table_of_contents:!1},prevItem:{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml"},nextItem:{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa"},relatedPosts:[{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"},{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"November 17, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.3,date:"2023-11-17T00:00:00.000Z"},{title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",permalink:"/blog/uselayouteffect-vs-useeffect",formattedDate:"August 9, 2024",authors:[{name:"Wisdom Ekpotu",title:"Software Engineer",imageURL:"https://github.com/wisdomekpotu.png",key:"wisdom_ekpotu"}],readingTime:13.58,date:"2024-08-09T00:00:00.000Z"}],authorPosts:[{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"July 2, 2024",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:9.245,date:"2024-07-02T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Fragment?",id:"what-is-react-fragment",level:2},{value:"React Fragment vs Div Element",id:"react-fragment-vs-div-element",level:2},{value:"Problem with using div",id:"problem-with-using-div",level:2},{value:"Advantages of Fragment",id:"advantages-of-fragment",level:2},{value:"Limitations of React Fragments",id:"limitations-of-react-fragments",level:3},{value:"Using the key prop with React fragments",id:"using-the-key-prop-with-react-fragments",level:2},{value:"Using shortcut version",id:"using-shortcut-version",level:2},{value:"Fragment in Action",id:"fragment-in-action",level:2},{value:"Other Use Cases for a React Fragment",id:"other-use-cases-for-a-react-fragment",level:3},{value:"Common Problems and Solutions",id:"common-problems-and-solutions",level:3},{value:"1. <strong>Invalid HTML Structure</strong>",id:"1-invalid-html-structure",level:4},{value:"2. <strong>Cannot Apply Styles</strong>",id:"2-cannot-apply-styles",level:4},{value:"3. <strong>Keyed Fragments</strong>",id:"3-keyed-fragments",level:4},{value:"4. <strong>Fragment Overuse</strong>",id:"4-fragment-overuse",level:4},{value:"5. <strong>Unexpected Rendering Behavior</strong>",id:"5-unexpected-rendering-behavior",level:4},{value:"6. <strong>Debugging Problems</strong>",id:"6-debugging-problems",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on Jun 26, 2024, to add new advantages, use cases and common problems sections for React Fragments")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Returning multiple elements from a component has always been problematic for React developers.\nThis is because React depends on creating a tree-like structure that is used for reconciliation. Therefore, when multiple elements are returned in the render method, the algorithm used for reconciliation will not function as expected, and the presumption that the tree will have one root node for a component will no longer be valid."),(0,a.yg)("p",null,"React Fragment fixed this problem in version 16.2 of the library."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-react-fragment"},"What is React Fragment?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-fragment-vs-div-element"},"React Fragment vs Div Element")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#problem-with-using-div"},"Problem with using div")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#advantages-of-fragment"},"Advantages of Fragment"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#limitations-of-react-fragments"},"Limitations of React Fragments")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-shortcut-version"},"Using shortcut version")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#fragment-in-action"},"Fragment in Action"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#other-use-cases-for-a-react-fragment"},"Other Use Cases for a React Fragment")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#common-problems-and-solutions"},"Common Problems and Solutions"))))),(0,a.yg)("h2",{id:"what-is-react-fragment"},"What is React Fragment?"),(0,a.yg)("p",null,"React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM."),(0,a.yg)("p",null,"To return multiple elements from a React component, you'll need to wrap the element in a root element. This approach has not been efficient and may cause issues in some cases. Eg."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"function TableData() {\n  return (\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  );\n}\n\nfunction Table() {\n  return (\n    <table>\n      <tr>\n        <TableData />\n      </tr>\n    </table>\n  );\n}\n")),(0,a.yg)("p",null,"The above code will produce the HTML equivalent below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.yg)("p",null,"So as you can see that wrapping the ",(0,a.yg)("inlineCode",{parentName:"p"},"<td>")," tags in a ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element breaks the table parent-child relationship. For things to work as expected, the ",(0,a.yg)("inlineCode",{parentName:"p"},"<td>")," tags have to be rendered individually without wrapping them in a ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element. In scenarios like this, it's better to use React Fragment."),(0,a.yg)("h2",{id:"react-fragment-vs-div-element"},"React Fragment vs Div Element"),(0,a.yg)("p",null,'In React, "Fragment" and "Div" are used interchangeably. The main difference between the two is that "Fragment" clears out all extra divs from a DOM tree while "Div" adds a div to the DOM tree.'),(0,a.yg)("p",null,"With React Fragments, we can create code that is cleaner and easier to read. It renders components more quickly and uses less memory. Every element is rendered as intended. While Div expands the DOM due to the long nested nodes that occur when there are too many HTML tags on your website."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element has more methods and properties, which causes it to consume more memory which can make the page slow load time; the prototype chain is like HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget, whereas the React fragment has fewer methods with the prototype chain DocumentFragment -> Node -> EventTarget."),(0,a.yg)("p",null,"Using fragments, you can reuse parts of your application. But, like in the table example we used in the previous section, div makes it challenging to do so. However, there are situations where using div instead of a fragment is necessary."),(0,a.yg)("p",null,"For instance, utilizing fragments does not allow you to design a component since you must wrap the target elements in a div. Additionally, you must use a div if you are adding keys to the components' elements. In light of this, you can use the two interchangeably depending on what you want your React application to accomplish."),(0,a.yg)("h2",{id:"problem-with-using-div"},"Problem with using div"),(0,a.yg)("p",null,"Let's look at some of the problems in using div in detail."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The div element expands the HTML DOM, causing the browser to consume more resources than expected."),(0,a.yg)("li",{parentName:"ul"},"When the DOM is too large, it consumes a lot of memory, causing the pages to load slowly in the browser."),(0,a.yg)("li",{parentName:"ul"},"Debugging and tracing the origin of the extra nodes becomes more difficult as the DOM grows larger and more nested."),(0,a.yg)("li",{parentName:"ul"},"Using div to render components may cause performance issues by clogging your HTML.")),(0,a.yg)("h2",{id:"advantages-of-fragment"},"Advantages of Fragment"),(0,a.yg)("p",null,"React Fragment replaces the ",(0,a.yg)("inlineCode",{parentName:"p"},"<div>")," element, which can cause issues with invalid HTML, with the following advantages."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The code readability of React Fragment is higher."),(0,a.yg)("li",{parentName:"ul"},"Because React fragments have a smaller DOM, they render faster and use less memory."),(0,a.yg)("li",{parentName:"ul"},"React Fragment allows React components to be rendered as intended without causing any parent-child relationship issues."),(0,a.yg)("li",{parentName:"ul"},"Fragments allow the return of multiple JSX elements, which addresses the issue of invalid HTML markups within react applications that were caused by the must-have constraint of only one element returning per component.")),(0,a.yg)("h3",{id:"limitations-of-react-fragments"},"Limitations of React Fragments"),(0,a.yg)("p",null,"I just wanted to point out a few things you should be aware of regarding React Fragments. Although they are great for grouping elements without having to add an extra node in the DOM, there are limitations to them."),(0,a.yg)("p",null,"First off, it is not possible to apply any CSS styles to a Fragment directly as Fragments are not fundamental DOM elements and do not render any actual element. This means that when you want to style a collection of elements, you are forced to still wrap them with a ",(0,a.yg)("inlineCode",{parentName:"p"},"<div>")," or other such container element."),(0,a.yg)("p",null,"In the case of fragments, you can't use keys. That can sometimes be a little frustrating when you work with lists of children. Keys help React identify which items have changed or been added or removed. Without the ability to assign keys, managing dynamic lists becomes tricky."),(0,a.yg)("p",null,"Finally, when we do this cleanup of the DOM, sometimes Fragments make the JSX a bit harder to read if overused. It is essential that they be used wisely; not every ",(0,a.yg)("inlineCode",{parentName:"p"},"<div>")," must be replaced with a Fragment just for it."),(0,a.yg)("h2",{id:"using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments"),(0,a.yg)("p",null,"In some cases, the key prop is required in a React application. In react, the key props are typically used to control component instances. React uses the key prop in scenarios like this to identify which items changed, removed, or added. Using the key props in a React application with fragments will be like the code snippet below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"function TableData () {\n  return  (\n       {data.map(rec=>\n        <React.Fragment key={rec.id}>\n           <td>{rec.hobby}</td>\n        </React.Fragment>\n      )}\n  );\n}\n")),(0,a.yg)("h2",{id:"using-shortcut-version"},"Using shortcut version"),(0,a.yg)("p",null,"Aside from using React Fragment, React also provides a shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," to wrap multiple elements together that works similarly to React Fragment but with a lower memory load. In a react application, the shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," is implemented as follows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<function TableData () {\n  return  (\n    <>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    <>\n  );\n}\n")),(0,a.yg)("p",null,"The above code will produce the expected HTML equivalent below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.yg)("p",null,"However, there are some drawbacks to this approach. For example, implementing the key props is impossible because the shorthand notation ",(0,a.yg)("inlineCode",{parentName:"p"},"<></>")," will not work here. After all, it cannot take an attribute."),(0,a.yg)("h2",{id:"fragment-in-action"},"Fragment in Action"),(0,a.yg)("p",null,"Now let's see how fragments are used in a React application. In the example below, we'll use the React Fragment to render a list of items in a table."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import "./App.css";\nimport React from "react";\n\nconst Table = ({ children, style }) => {\n  return <div>{children}</div>;\n};\n\nconst TableData = () => {\n  return (\n    <React.Fragment>\n      <td>John Doe</td>\n      <td>16</td>\n      <td>Developer</td>;\n    </React.Fragment>\n  );\n};\n\nfunction App() {\n  return (\n    <Table>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Occupation</th>\n      </tr>\n      <TableData />\n    </Table>\n  );\n}\nexport default App;\n')),(0,a.yg)("p",null,"In the above code snippet, we created two components that we to be rendered in our application. In the render method, we used React Fragment instead of wrapping the elements in the TableData components in a div. This way, our table data will be rendered as expected."),(0,a.yg)("h3",{id:"other-use-cases-for-a-react-fragment"},"Other Use Cases for a React Fragment"),(0,a.yg)("p",null,"React Fragments come in really handy when handling lists of elements, forms, and complex layouts. Using Fragments in a list would clean up the DOM, saving you from creating wrapper elements that are not needed for this to increase performance."),(0,a.yg)("p",null,"For forms, it helps ease the structure without adding more nodes because of multiple input elements. Furthermore, with complex layouts, when the nesting of elements is there, Fragments controls and manages the layout for proper handling and styling. Fragments make sure that the structure of a table is valid when the rows and cells of the table are being rendered; it ensures there are no layout-related problems."),(0,a.yg)("p",null,"React Fragments, conversely, help with conditional rendering because they enable you to return several elements depending on some conditions\u2014but without adding nodes, which would make your DOM dirty and your components complex to read and maintain. In any case, the use of fragments in this context helps enhance the readability, performance, and maintainability of your applications."),(0,a.yg)("h3",{id:"common-problems-and-solutions"},"Common Problems and Solutions"),(0,a.yg)("p",null,"Below are some common issues one is likely to face while working with React Fragments and how to resolve them."),(0,a.yg)("h4",{id:"1-invalid-html-structure"},"1. ",(0,a.yg)("strong",{parentName:"h4"},"Invalid HTML Structure")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Issue:")," My HTML structure is invalid when using Fragments."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," Ensure there is no breakage of HTML rules; for example, if you place table cells (",(0,a.yg)("inlineCode",{parentName:"p"},"<td>"),") outside the table row (",(0,a.yg)("inlineCode",{parentName:"p"},"<tr>"),"). Use fragments properly to maintain structural validity."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"function TableData() {\n  return (\n    <>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </>\n  );\n}\n")),(0,a.yg)("h4",{id:"2-cannot-apply-styles"},"2. ",(0,a.yg)("strong",{parentName:"h4"},"Cannot Apply Styles")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Issue:")," I can't apply styles to a Fragment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," As fragments do not render any DOM elements, you can't apply styles directly. If you want to style these elements, wrap them in a ",(0,a.yg)("inlineCode",{parentName:"p"},"<div>")," or some other appropriate container."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'function StyledComponent() {\n  return (\n    <div className="styled-container">\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </div>\n  );\n}\n')),(0,a.yg)("h4",{id:"3-keyed-fragments"},"3. ",(0,a.yg)("strong",{parentName:"h4"},"Keyed Fragments")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Issue:")," I need to use keys with my Fragments, yet the short-hand syntax doesn't support it."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," In cases where you need to pass keys, use the extended syntax for Fragments."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"function ListItems({ items }) {\n  return (\n    <>\n      {items.map((item) => (\n        <React.Fragment key={item.id}>\n          <li>{item.name}</li>\n          <li>{item.description}</li>\n        </React.Fragment>\n      ))}\n    </>\n  );\n}\n")),(0,a.yg)("h4",{id:"4-fragment-overuse"},"4. ",(0,a.yg)("strong",{parentName:"h4"},"Fragment Overuse")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Problem:")," My JSX is getting hard to read as it has too many Fragments."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," Use Fragments judiciously. Only use them when absolutely necessary to not unnecessarily convolute your JSX."),(0,a.yg)("h4",{id:"5-unexpected-rendering-behavior"},"5. ",(0,a.yg)("strong",{parentName:"h4"},"Unexpected Rendering Behavior")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Problem:")," Fragments of enclosed objects are not displayed as expected."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," Confirm if your Fragments are correctly placed, and you haven't omitted any closing tags. Also see to it that you write your component logic correctly."),(0,a.yg)("h4",{id:"6-debugging-problems"},"6. ",(0,a.yg)("strong",{parentName:"h4"},"Debugging Problems")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Issue:")," Since the Fragments are not directly visible in the DOM, debugging becomes hard."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")," Use descriptive comments or temporary wrappers while debugging. Remove the wrappers once you've resolved the issues."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"function DebugComponent() {\n  return (\n    // <div> /* debugging temporary wrapper */\n    <>\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </>\n    // </div>\n  );\n}\n")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Throughout this tutorial, you've learned about React Fragment. We started by knowing what a React Fragment is and when to use it in a React application. Then we went further to demonstrate how it's used in a practical application."))}d.isMDXComponent=!0}}]);