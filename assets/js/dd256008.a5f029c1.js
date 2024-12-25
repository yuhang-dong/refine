"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41754],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var o=a(37953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});a(37953);var o=a(58860);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const r={title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",slug:"material-ui-modal",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/social.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/material-ui-modal",source:"@site/blog/2023-05-09-material-ui-modal.md",title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",date:"2023-05-09T00:00:00.000Z",formattedDate:"May 9, 2023",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:11.215,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",slug:"material-ui-modal",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/social.png",hide_table_of_contents:!1},prevItem:{title:"refine.new - Introducing the Fastest Way to Create Refine Apps",permalink:"/blog/what-is-refine-new"},nextItem:{title:"Adding PDF Renderer",permalink:"/blog/refine-react-invoice-generator-5"},relatedPosts:[{title:"How to implement a date picker in React",description:"We\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the functionality for your use case.",permalink:"/blog/react-date-picker",formattedDate:"November 12, 2024",authors:[{name:"Irakli Tchigladze",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"irakli_tchigladze"}],readingTime:24.175,date:"2024-11-12T00:00:00.000Z"},{title:"A Guide on React Lazy Loading",description:"We will be looking at what lazy loading is, how it works, and how it can be used to improve the performance of React applications.",permalink:"/blog/react-lazy-loading",formattedDate:"July 12, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.045,date:"2024-07-12T00:00:00.000Z"},{title:"The Anatomy of the Web Development in 2024",description:"This post depicts a general picture of where web development is headed in 2024 with a focus on the Node.js/React ecosystem - and provides an inside-out report on how Refine.js is starting to make an impact as a React-based meta-framework.",permalink:"/blog/web-development",formattedDate:"December 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.205,date:"2023-12-20T00:00:00.000Z"}],authorPosts:[{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.89,date:"2024-07-03T00:00:00.000Z"},{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.47,date:"2022-12-15T00:00:00.000Z"},{title:"Material UI Icons in React",description:"A complete guide on using Material UI Icons in a React app",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.5,date:"2022-08-24T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Modal",id:"getting-started-with-material-ui-modal",level:2},{value:"Material UI Modal props",id:"material-ui-modal-props",level:2},{value:"Customizing your Material UI Modal",id:"customizing-your-material-ui-modal",level:2},{value:"Material UI Modal Transitions",id:"material-ui-modal-transitions",level:2},{value:"Nested Modals",id:"nested-modals",level:3},{value:"Optimizing Material UI Modal performance",id:"optimizing-material-ui-modal-performance",level:3},{value:"Server-side modal",id:"server-side-modal",level:3},{value:"Material UI Modal limitations",id:"material-ui-modal-limitations",level:2},{value:"Focus Trap",id:"focus-trap",level:3},{value:"Material UI Modal Accessibility",id:"material-ui-modal-accessibility",level:2},{value:"Building an Edit form popup with React and Material UI Modal",id:"building-an-edit-form-popup-with-react-and-material-ui-modal",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},u="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,o.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){n(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Material UI is a popular front-end library for React that provides a comprehensive set of tools for creating user interfaces. One of the most valuable components of Material UI is the Modal, which allows developers to create a popup window that can display important information or facilitate user input. This tutorial will explain how to use the Material UI Modal and customize it to your needs."),(0,o.yg)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,o.yg)("p",null,"Material UI is an open-source library of UI components created and maintained by Google. It employs Google's Material Design system, a visual language developed to unify the user experience across its products and platforms. Material UI components provide users with a natural and intuitive interface, making it easier to create products that look and feel the same across all devices. Material UI components are also highly customizable and can be tailored to the specific requirements of any project."),(0,o.yg)("p",null,"Material UI comprises several components and utilities that aid web design. The Material UI Modal is one of those utilities that aid visualization in a web app."),(0,o.yg)("h2",{id:"getting-started-with-material-ui-modal"},"Getting started with Material UI Modal"),(0,o.yg)("p",null,"The modal component is a solid foundation for creating dialogs, popovers, light boxes, and other interactive elements. Material UI Modal is a JavaScript library that you can use to create modal dialogs and pop-ups in web applications. It is lightweight and straightforward to use, with features such as customizing the look and feel of the modal, changing the size and position, and adding animation effects."),(0,o.yg)("p",null,"To start using the Material UI Modal, include the library and its stylesheet in your HTML page. Then you can create a modal window and customize its content, size, and animation effects. Finally, you can add the modal to the page using the ",(0,o.yg)("inlineCode",{parentName:"p"},"mui-modal")," class. With Material UI Modal, you can easily create modal windows for user interaction and feedback in your web application."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\nimport Modal from "@mui/material/Modal";\n\nconst style = {\n  position: "absolute" as "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  border: "2px solid #000",\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function BasicModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div style={{ margin: "25%" }}>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="modal-modal-title"\n        aria-describedby="modal-modal-description"\n      >\n        <Box sx={style}>\n          <Typography id="modal-modal-title" variant="h6" component="h2">\n            Modal Header\n          </Typography>\n          <Typography id="modal-modal-description" sx={{ mt: 2 }}>\n            Modal content\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"The code above illustrates how to use a simple Material UI Modal with the provided utilities to convey a message or display an alert like this:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/first-min.gif",alt:"MUI Modal"}),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note that"),': The term "modal" is sometimes used interchangeably with "dialog," but this is incorrect. A modal window describes various aspects of a user interface. An element is considered a modal if it prevents interaction with the rest of the application. In Material UI, Modal is a lower-level concept used by Dialog, Drawer, Popup and Menu components.'),(0,o.yg)("h2",{id:"material-ui-modal-props"},"Material UI Modal props"),(0,o.yg)("p",null,"Material UI Modals are components that are used to both display important information to the user and receive user input. Modals are useful when you want to limit user interaction with the rest of the page but still require user input.. Props such as the title, size, and backdrop allow you to tailor the modal to your specific requirements. You can also change the modal's content by passing a component as a prop."),(0,o.yg)("p",null,"The following is a list of the various props that you can use with the Material UI Modal component. We can access them and modify them according to our needs."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"open"),": This prop controls the Modal's visibility. It only accepts Boolean values."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"onClose"),": A callback function that is called when the Modal is closed."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"disableEscapeKeyDown"),": You can use this prop to disable the escape key press, a keyboard shortcut for closing the Modal. It only accepts Boolean values."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"fullWidth"),": This prop controls the Modal's width. It takes a Boolean value."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BackdropProps"),": This prop customizes the Modal's backdrop. It accepts a prop object."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"disableBackdropClick"),": This prop disables the backdrop click, which is the click on the Modal's outside to close it. It only accepts Boolean values\nE.t.c."),(0,o.yg)("h2",{id:"customizing-your-material-ui-modal"},"Customizing your Material UI Modal"),(0,o.yg)("p",null,"Customizing your Material UI Modal is a great way to make your website more user-friendly and visually appealing. With Material UI Modal, you can customize the look and feel of your website with a few simple steps. You can change the size, color, and other elements of the modal to match the overall design of your website. You can also add custom animations and transitions to the modal, making it more interactive and enjoyable for your users. With Material UI Modal, you can create an engaging and interactive experience for your website visitors."),(0,o.yg)("h2",{id:"material-ui-modal-transitions"},"Material UI Modal Transitions"),(0,o.yg)("p",null,"Material UI Modal transitions are used to create a smooth and seamless transition within a modal or between two different modals. You can use a ",(0,o.yg)("inlineCode",{parentName:"p"},"transition")," component to animate the modal's open/close state, but under the following conditions:"),(0,o.yg)("p",null,"It must be a direct descendant of the modal\nHave an ",(0,o.yg)("inlineCode",{parentName:"p"},"in")," prop that corresponds to the ",(0,o.yg)("inlineCode",{parentName:"p"},"open"),"/",(0,o.yg)("inlineCode",{parentName:"p"},"closed")," state\nCall the ",(0,o.yg)("inlineCode",{parentName:"p"},"onEnter")," callback prop when the enter transition begins\nCall the ",(0,o.yg)("inlineCode",{parentName:"p"},"onExited")," callback prop when the exit transition is completed"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Backdrop from "@mui/material/Backdrop";\nimport Box from "@mui/material/Box";\nimport Modal from "@mui/material/Modal";\nimport Fade from "@mui/material/Fade";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\n\nconst style = {\n  position: "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  border: "2px solid #000",\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function TransitionsModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div style={{ margin: "25%" }}>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        aria-labelledby="transition-modal-title"\n        aria-describedby="transition-modal-description"\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <Box sx={style}>\n            <Typography id="transition-modal-title" variant="h6" component="h2">\n              Modal Header\n            </Typography>\n            <Typography id="transition-modal-description" sx={{ mt: 2 }}>\n              Modal Content\n            </Typography>\n          </Box>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"When the modal is closed and fully transitioned, the ",(0,o.yg)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"onExited")," events allow it to unmount the child content like this:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/transition-min.gif",alt:"MUI Modal"}),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"nested-modals"},"Nested Modals"),(0,o.yg)("p",null,"Modal dialogs nested within other modal dialogs are known as nested modals. This feature lets users view and interact with multiple modal windows simultaneously on the same page. Nested modals can create a more complex user interface with various layers of information or simplify the user experience by providing a more efficient workflow. Nested modals can also be helpful in displaying data more understandably and providing additional context for a user's actions."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Modal from "@mui/material/Modal";\nimport Button from "@mui/material/Button";\n\nconst style = {\n  position: "absolute" as "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  border: "2px solid #000",\n  boxShadow: 24,\n  pt: 2,\n  px: 4,\n  pb: 3,\n};\n\nfunction ChildModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <React.Fragment>\n      <Button onClick={handleOpen}>Open Child Modal</Button>\n      <Modal\n        hideBackdrop\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="child-modal-title"\n        aria-describedby="child-modal-description"\n      >\n        <Box sx={{ ...style, width: 200 }}>\n          <h2 id="child-modal-title">Child Header</h2>\n          <p id="child-modal-description">Child Header Content</p>\n          <Button onClick={handleClose}>Close Child Modal</Button>\n        </Box>\n      </Modal>\n    </React.Fragment>\n  );\n}\n\nexport default function NestedModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="parent-modal-title"\n        aria-describedby="parent-modal-description"\n      >\n        <Box sx={{ ...style, width: 400 }}>\n          <h2 id="parent-modal-title">Modal Header</h2>\n          <p id="parent-modal-description">Modal content</p>\n          <ChildModal />\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"The code above showcases Material UI Modal components nested as two clickable modal components."),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/nested-min.gif",alt:"MUI Modal"}),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"optimizing-material-ui-modal-performance"},"Optimizing Material UI Modal performance"),(0,o.yg)("p",null,"Optimizing Material UI Modal performance is essential to ensure the best user experience. You can easily optimize your Material UI Modal by reducing the number of modal components, using the correct animation techniques, and avoiding unnecessary event listeners. Additionally, it is crucial to use progressive loading techniques, such as lazy loading, to prevent unnecessary resources from loading and impacting the overall performance. Lastly, developers should use proper caching strategies and optimize the loading order of assets to ensure that the modal is rendered as quickly as possible."),(0,o.yg)("p",null,"Additionally, if you need to make the content search engine friendly or render expensive component trees inside your modal while optimizing for interaction responsiveness, you should change the default behavior by enabling the 'keepMounted' prop, as shown below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"<Modal keepMounted />\n")),(0,o.yg)("h3",{id:"server-side-modal"},"Server-side modal"),(0,o.yg)("p",null,"On the server, React does not support the createPortal() API. To display the modal, disable the portal feature using the disablePortal prop."),(0,o.yg)("h2",{id:"material-ui-modal-limitations"},"Material UI Modal limitations"),(0,o.yg)("h3",{id:"focus-trap"},"Focus Trap"),(0,o.yg)("p",null,"If the component tries to escape the modal, the Material UI Modal defaults to returning the focus to the component's body. This is done to improve accessibility. However, it may cause problems with the app's overall UX. If users need to interact with another part of the page, such as a menu or navbar, you can disable the Material UI Modal default setting as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"<Modal disableEnforceFocus />\n")),(0,o.yg)("h2",{id:"material-ui-modal-accessibility"},"Material UI Modal Accessibility"),(0,o.yg)("p",null,"Material UI Modal accessibility is an important feature to consider when creating a user interface. It ensures users can effectively interact with the modal, regardless of their abilities. The modal must be visible, and the user must be able to easily access the content without any difficulty. Additionally, the modal must be accessible to users with disabilities, such as those who are visually impaired. Finally, the modal must be compatible with assistive technologies, such as screen readers, to ensure users with disabilities can access the content."),(0,o.yg)("p",null,"Here are a few ways in which you can make your Material UI Modal accessible"),(0,o.yg)("p",null,"Focus Management: The WAI-ARIA best practices for managing focus within the modal dialog should be followed by Material UI modal components. When the modal dialog is opened, the focus should be set to the modal dialog, trapped within the modal dialog, and restored to the element that opened the modal dialog when it is closed."),(0,o.yg)("p",null,"Keyboard Interaction: Material UI modal components should follow the WAI-ARIA best practices for keyboard interaction. This should include providing keyboard shortcuts to open and close the modal dialog and keyboard navigation within the modal dialog."),(0,o.yg)("p",null,"Screen Reader Support: Material UI modal components should follow the WAI-ARIA best practices for screen reader support. This should include providing roles, labels, and descriptive text for screen readers to understand and interact with the modal dialog."),(0,o.yg)("p",null,"High Contrast: Material UI modal components should provide high contrast options to ensure that users with low vision can read the content of the modal dialog."),(0,o.yg)("p",null,"Resizable Text: Material UI modal components should provide an option to resize the text within the modal dialog to ensure low-vision users can read the content."),(0,o.yg)("h2",{id:"building-an-edit-form-popup-with-react-and-material-ui-modal"},"Building an Edit form popup with React and Material UI Modal"),(0,o.yg)("p",null,"Using React and Material UI Modal to create an edit form popup is a great way to create an interactive and responsive form quickly. The Material UI Modal component allows for creating a popup with a few lines of code, and the React framework makes it simple to customize the form to the user's specific requirements. Developers can create a quick and simple edit form popup using the React and Material UI Modal combination like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\nimport Modal from "@mui/material/Modal";\nimport contactImage from "../Images/My Photo.jpg";\nimport EditIcon from "@mui/icons-material/Edit";\n\nconst style = {\n  position: "absolute",\n  top: "50%",\n  left: "50%",\n  transform: "translate(-50%, -50%)",\n  width: 400,\n  bgcolor: "background.paper",\n  border: "2px solid #000",\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function BasicModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n      <section>\n        <Button onClick={handleOpen}>\n          <p style={{ marginLeft: "75%" }}>Edit contact</p>\n          <EditIcon></EditIcon>\n        </Button>\n        <div class="img-div">\n          <img src={contactImage} alt="" />\n        </div>\n        <h2>\n          <span>Doro Onome</span>\n        </h2>\n        <h2>\n          <span>nomzykush@gmail.com</span>\n        </h2>\n        <h2>\n          <span>09015618845</span>\n        </h2>\n      </section>\n\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby="modal-modal-title"\n        aria-describedby="modal-modal-description"\n      >\n        <Box sx={style}>\n          <Typography id="modal-modal-title" variant="h6" component="h2">\n            Edit Contact Details\n          </Typography>\n          <Typography id="modal-modal-description" sx={{ mt: 2 }}>\n            <div className="edit-container">\n              <label for="">Edit Contact Name</label>\n              <input type="text" />\n              <label for="">Edit Contact Email</label>\n              <input type="text" />\n              <label for="">Edit Contact Image</label>\n              <input type="file" />\n            </div>\n\n            <button class="edit-btn">Save</button>\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"The code above represents a simple contact management page UI where users can easily edit contact details with the Material UI Modal."),(0,o.yg)("p",null,"Here\u2019s the result:"),(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/edit-form-min.gif",alt:"MUI Modal"}),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("div",null,(0,o.yg)("a",{href:"https://discord.gg/refine"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"Material UI Modal is an excellent tool for creating a modal window with a native look and feel. It provides a great user experience with its simple and intuitive design. It is also highly customizable, allowing developers to create modal windows with their custom styles. This article thoroughly reviewed the Material UI Modal component and explored a use case in the form of an editable contact page UI. With its responsive design and wide range of options, Material UI Modal is a great solution for web developers looking to create modal windows for their projects."))}h.isMDXComponent=!0}}]);