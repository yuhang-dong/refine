"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97648],{58860:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(37953);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20240:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});t(37953);var n=t(58860);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",slug:"material-ui-card",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/social-2.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/material-ui-card",source:"@site/blog/2024-12-26-mui-card.md",title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",date:"2024-12-26T00:00:00.000Z",formattedDate:"December 26, 2024",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:13.84,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",slug:"material-ui-card",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Top React Admin Templates 2025",permalink:"/blog/react-admin-template"},nextItem:{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component"},relatedPosts:[{title:"Using Material UI DataGrid component with Refine app",description:"How to use Material UI DataGrid component with Refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.915,date:"2022-08-23T00:00:00.000Z"},{title:"React Ecosystem in 2024 - Sustaining Popularity",description:"We'll look at the React ecosystem and the tools and libraries that have been created to support React.",permalink:"/blog/react-js-ecosystem-in-2024",formattedDate:"January 11, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:25.375,date:"2024-01-11T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.565,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"May 22, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.595,date:"2024-05-22T00:00:00.000Z"},{title:"Material UI Icons in React",description:"A complete guide on using Material UI Icons in a React app",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.5,date:"2022-08-24T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.89,date:"2024-07-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Summary: What is Material UI Card?",id:"quick-summary-what-is-material-ui-card",level:3},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Card",id:"getting-started-with-material-ui-card",level:2},{value:"Other Material UI Card Variants",id:"other-material-ui-card-variants",level:2},{value:"Image Cards",id:"image-cards",level:3},{value:"Outlined Cards",id:"outlined-cards",level:3},{value:"Material UI Card Component Classes",id:"material-ui-card-component-classes",level:2},{value:"Material UI Card Interactions",id:"material-ui-card-interactions",level:2},{value:"Building a simple Blog Layout with React and Material UI Cards",id:"building-a-simple-blog-layout-with-react-and-material-ui-cards",level:2},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"Can I customize the look of Material UI Cards?",id:"can-i-customize-the-look-of-material-ui-cards",level:3},{value:"Do Material UI Cards work well on mobile devices?",id:"do-material-ui-cards-work-well-on-mobile-devices",level:3},{value:"What can I put inside a Material UI Card?",id:"what-can-i-put-inside-a-material-ui-card",level:3},{value:"Are Material UI Cards accessible?",id:"are-material-ui-cards-accessible",level:3},{value:"How do I handle card interactions like clicking or expanding?",id:"how-do-i-handle-card-interactions-like-clicking-or-expanding",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p},u="wrapper";function h(e){var{components:a}=e,t=i(e,["components"]);return(0,n.yg)(u,o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){r(e,a,t[a])}))}return e}({},m,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("h3",{id:"quick-summary-what-is-material-ui-card"},"Quick Summary: What is Material UI Card?"),(0,n.yg)("p",null,"Think of a Material UI Card as a digital container - like a paper card in real life, but for your website. It's a neat way to show related information in one place. You can put all sorts of things in it: text, pictures, buttons, and more."),(0,n.yg)("p",null,"Here's what makes Material UI Cards so useful:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"They keep information organized and tidy"),(0,n.yg)("li",{parentName:"ul"},"You can easily add images and other media"),(0,n.yg)("li",{parentName:"ul"},"They're interactive - users can click, expand, or interact with them"),(0,n.yg)("li",{parentName:"ul"},"They look great on both desktop and mobile screens"),(0,n.yg)("li",{parentName:"ul"},"You can style them however you want to match your website")),(0,n.yg)("p",null,"The best part? They're super easy to use, even if you're just starting with React!"),(0,n.yg)("p",null,"Material UI cards are an important part of modern web design. They make it simple for users to access and interact with important information, whether text, images, or a combination of the two. Developers can use Material UI to easily create powerful and interactive cards that integrate seamlessly into their website design. This article will go over the various features, benefits, and applications of Material UI cards to give web developers a thorough understanding of how the component can help them create beautiful and engaging user experiences."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#quick-summary-what-is-material-ui-card"},"Quick Summary: What is Material UI Card?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#getting-started-with-material-ui-card"},"Getting started with Material UI Card")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#other-material-ui-card-variants"},"Other Material UI Card Variants")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#material-ui-card-component-classes"},"Material UI Card Component Classes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#material-ui-card-interactions"},"Material UI Card Interactions")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#building-a-simple-blog-layout-with-react-and-material-ui-cards"},"Building a simple Blog Layout with React and Material UI Cards")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"))),(0,n.yg)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,n.yg)("p",null,"Material UI is a React-based UI framework designed to aid in the creation of consistent user interfaces across web and mobile applications. It includes a large library of components and tools to help developers easily create modern user interfaces."),(0,n.yg)("p",null,"It provides a comprehensive library of components and tools to help developers create modern user interfaces with ease. Some of which include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Input components"),(0,n.yg)("li",{parentName:"ul"},"Surface components"),(0,n.yg)("li",{parentName:"ul"},"Data Display components"),(0,n.yg)("li",{parentName:"ul"},"Navigation components"),(0,n.yg)("li",{parentName:"ul"},"Feedback components"),(0,n.yg)("li",{parentName:"ul"},"Layout components")),(0,n.yg)("p",null,"The Material UI Card is an example of the Material UI Surfaces."),(0,n.yg)("h2",{id:"getting-started-with-material-ui-card"},"Getting started with Material UI Card"),(0,n.yg)("p",null,"Cards contain information and actions about a single topic. Material UI cards are an excellent way to add a visually appealing, well-organized layout to a website quickly. They are simple to use and can be customized with various options such as colors, sizes, and images. To make a card, simply choose the card component from the Material UI library and customize it to your specifications. You can also add content to the card quickly, such as text, images, and buttons. Material UI cards are an excellent way to quickly improve the visual appeal and organization of a website."),(0,n.yg)("p",null,"Here\u2019a a demo of how to use Material UI Cards:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardActions from "@mui/material/CardActions";\nimport CardContent from "@mui/material/CardContent";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\n\nconst bull = (\n  <Box\n    component="span"\n    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}\n  >\n    \u2022\n  </Box>\n);\n\nexport default function CardDemo() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Card sx={{ maxWidth: 600 }}>\n        <CardContent>\n          <Typography variant="h3" gutterBottom>\n            A Simple Material UI Card\n          </Typography>\n          <Typography variant="h4" component="div">\n            Heading\n          </Typography>\n          <Typography sx={{ mb: 1.5 }} color="text.secondary">\n            describes the heading\n          </Typography>\n          <Typography variant="body1">\n            Card content\n            <br />\n            {\'"describes the content"\'}\n          </Typography>\n        </CardContent>\n        <CardActions>\n          <Button size="small">Card Button</Button>\n        </CardActions>\n      </Card>\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"The code above represents a simple Material UI Card component that is used to convey a message or specific information to users while they are browsing your web app."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/simple-mui-card.png",alt:"Material UI card"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Although cards can support multiple actions, UI controls, and an overflow menu, use caution and keep in mind that cards are gateways to more complex and detailed information. They should be simple to scan for relevant and actionable data. Text and images, for example, should be placed on them in a way that clearly indicates hierarchy."),(0,n.yg)("h2",{id:"other-material-ui-card-variants"},"Other Material UI Card Variants"),(0,n.yg)("h3",{id:"image-cards"},"Image Cards"),(0,n.yg)("p",null,"The image card is a more interactive card type. This card allows developers to include an image or icon, as well as a title and description. This makes it easier to convey a message to the user in a timely and effective manner."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Card from "@mui/material/Card";\nimport CardActions from "@mui/material/CardActions";\nimport CardContent from "@mui/material/CardContent";\nimport CardMedia from "@mui/material/CardMedia";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\nimport Chevrolet from "../Images/Chevrolet.jpg";\n\nexport default function MediaCard() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Card sx={{ maxWidth: 345 }}>\n        <CardMedia\n          component="img"\n          height="140"\n          image={Chevrolet}\n          alt="Chevrolet"\n        />\n        <CardContent>\n          <Typography gutterBottom variant="h5" component="div">\n            Lizard\n          </Typography>\n          <Typography variant="body2" color="text.secondary">\n            Chevrolet is an iconic American car brand known for its reliable,\n            dependable, and affordable vehicles. Founded in 1911, Chevy has\n            become one of the most recognizable car brands in the world.\n          </Typography>\n        </CardContent>\n        <CardActions>\n          <Button size="small">Share</Button>\n          <Button size="small">Learn More</Button>\n        </CardActions>\n      </Card>\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"The demo code above showcases how to use a card with an image to help reinforce the content. Here\u2019s the result:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/card-car.png",alt:"Material UI card"})),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"outlined-cards"},"Outlined Cards"),(0,n.yg)("p",null,"This variant of the Material UI Card is meant to be used when there is a need to reduce the prominence of the card, such as when it is part of a list of other cards. It has a thin border that outlines the card and a slightly less prominent title. Set variant=",(0,n.yg)("inlineCode",{parentName:"p"},"outlined")," to render an outlined card like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Card from "@mui/material/Card";\nimport CardActions from "@mui/material/CardActions";\nimport CardContent from "@mui/material/CardContent";\nimport Button from "@mui/material/Button";\nimport Typography from "@mui/material/Typography";\n\nconst bull = (\n  <Box\n    component="span"\n    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}\n  >\n    \u2022\n  </Box>\n);\n\nexport default function CardDemo() {\n  return (\n    <div style={{ margin: "25%" }}>\n      <Card sx={{ maxWidth: 600 }} variant="outlined">\n        <CardContent>\n          <Typography variant="h3" gutterBottom>\n            An Outlined Material UI Card\n          </Typography>\n          <Typography variant="h4" component="div">\n            Heading\n          </Typography>\n          <Typography sx={{ mb: 1.5 }} color="text.secondary">\n            describes the heading\n          </Typography>\n          <Typography variant="body1">\n            Card content\n            <br />\n            {\'"describes the content"\'}\n          </Typography>\n        </CardContent>\n        <CardActions>\n          <Button size="small">Card Button</Button>\n        </CardActions>\n      </Card>\n    </div>\n  );\n}\n')),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/outlined-card.png",alt:"Material UI card"})),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"material-ui-card-component-classes"},"Material UI Card Component Classes"),(0,n.yg)("p",null,"The Material UI Card Component is an excellent tool for organizing and displaying data. It includes classes for creating card containers, card titles, card contents, card images, and card actions, among other things. These classes can be used to create cards with a distinct look and feel, making them more visually appealing and understandable. Furthermore, the Material UI Card Component supports a wide range of customization options, such as custom designs, color palettes, and other UI components."),(0,n.yg)("p",null,"Some of these classes include:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<Card />")," - This is the main card class used to create the card container.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<CardActionArea/>")," - This component wraps children in a single Button, creating a ripple effect when clicked.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<CardActions/>")," - This is a flexbox component that adds 8px padding to the children and 8px horizontal padding between them. It is used to add action buttons, such as \u2018Like\u2019 or \u2018Share\u2019, to the card.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<CardContent/>")," - This component places children inside a single ",(0,n.yg)("inlineCode",{parentName:"p"},"<div>")," element and adds 16px padding to all sides. If the child is the last one in the group, it also adds an additional 24px of padding at the bottom.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<CardHeader/>")," - This class is used to generate a header within the card, which is commonly used for titles, subtitles, or other headings.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"<CardMedia/>")," - This class is used to add a media element to the card, such as an image, video, or audio clip."))),(0,n.yg)("h2",{id:"material-ui-card-interactions"},"Material UI Card Interactions"),(0,n.yg)("p",null,"Material UI Card Interactions are a Material Design feature that allows users to interact with data quickly and easily. Users can quickly scan the data and decide what action to take by using cards with a title, content, and action. This results in a more fluid, intuitive user experience, as the user can quickly access and interact with the data without having to scroll or search for it. This feature also displays a visual representation of the data to the user, making it easier to digest and comprehend the information."),(0,n.yg)("p",null,"Consider the code below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport { styled } from "@mui/material/styles";\nimport Card from "@mui/material/Card";\nimport CardHeader from "@mui/material/CardHeader";\nimport CardContent from "@mui/material/CardContent";\nimport CardActions from "@mui/material/CardActions";\nimport Collapse from "@mui/material/Collapse";\nimport Avatar from "@mui/material/Avatar";\nimport IconButton, { IconButtonProps } from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport { red } from "@mui/material/colors";\nimport FavoriteIcon from "@mui/icons-material/Favorite";\nimport ShareIcon from "@mui/icons-material/Share";\nimport ExpandMoreIcon from "@mui/icons-material/ExpandMore";\nimport MoreVertIcon from "@mui/icons-material/MoreVert";\n\ninterface ExpandMoreProps extends IconButtonProps {\n  expand: boolean;\n}\n\nconst ExpandMore = styled((props: ExpandMoreProps) => {\n  const { expand, ...other } = props;\n  return <IconButton {...other} />;\n})(({ theme, expand }) => ({\n  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",\n  marginLeft: "auto",\n  transition: theme.transitions.create("transform", {\n    duration: theme.transitions.duration.shortest,\n  }),\n}));\n\nexport default function RecipeReviewCard() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <div style={{ margin: "25%" }}>\n      <Card sx={{ maxWidth: 345 }}>\n        <CardHeader\n          avatar={\n            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">\n              D\n            </Avatar>\n          }\n          action={\n            <IconButton aria-label="settings">\n              <MoreVertIcon />\n            </IconButton>\n          }\n          title="Doro Onome Churchill"\n          subheader="nomzykush@gmail.com"\n        />\n        <CardContent>\n          <Typography variant="body2" color="text.secondary">\n            Front-end developer and Technical writer with keen attention to\n            detail and a passion for delivering content as interactive as it is\n            educational.\n          </Typography>\n        </CardContent>\n        <CardActions disableSpacing>\n          <IconButton aria-label="add to favorites">\n            <FavoriteIcon />\n          </IconButton>\n          <IconButton aria-label="share">\n            <ShareIcon />\n          </IconButton>\n          <ExpandMore\n            expand={expanded}\n            onClick={handleExpandClick}\n            aria-expanded={expanded}\n            aria-label="show more"\n          >\n            <ExpandMoreIcon />\n          </ExpandMore>\n        </CardActions>\n        <Collapse in={expanded} timeout="auto" unmountOnExit>\n          <CardContent>\n            <Typography paragraph>Chevrolet Description</Typography>\n            <Typography paragraph>\n              Chevrolet is an iconic American automobile brand founded in 1911\n              by Louis Chevrolet and William C. Durant\n            </Typography>\n            <Typography paragraph>\n              It is currently the fourth-largest automotive brand in the United\n              States and is a division of General Motors. Chevrolet has become\n              one of America\u2019s most iconic brands, producing reliable and\n              stylish cars, trucks, and SUVs for over a century. Its models\n              range from the economical Spark to the luxurious Corvette.\n            </Typography>\n            <Typography paragraph>\n              Chevrolet is also known for its commitment to safety, providing\n              advanced features like lane departure warning and front crash\n              prevention. (Discard any mussels that don&apos;t open.)\n            </Typography>\n          </CardContent>\n        </Collapse>\n      </Card>\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"The code above describes an interactive Material UI Card component that allows users to click on one of its icons to reveal more information on a specific concept related to the content of the card."),(0,n.yg)("p",null,"Here\u2019s the result:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/first-gif.gif",alt:"Material UI card"})),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"building-a-simple-blog-layout-with-react-and-material-ui-cards"},"Building a simple Blog Layout with React and Material UI Cards"),(0,n.yg)("p",null,"Using React and Material UI Cards to create a simple blog layout is an excellent way to create an engaging blog page. React components are simple to use and customize, whereas Material UI Cards are an excellent way to present content visually. React components make it simple to add posts and other content to the page, while Material UI Cards style the content and make it more engaging."),(0,n.yg)("p",null,"Here\u2019s a simple illustration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport { styled } from "@mui/material/styles";\nimport Card from "@mui/material/Card";\nimport CardHeader from "@mui/material/CardHeader";\nimport CardContent from "@mui/material/CardContent";\nimport CardActions from "@mui/material/CardActions";\nimport Collapse from "@mui/material/Collapse";\nimport Avatar from "@mui/material/Avatar";\nimport IconButton, { IconButtonProps } from "@mui/material/IconButton";\nimport Typography from "@mui/material/Typography";\nimport { blue } from "@mui/material/colors";\nimport FavoriteIcon from "@mui/icons-material/Favorite";\nimport ShareIcon from "@mui/icons-material/Share";\nimport ArrowForwardIcon from "@mui/icons-material/ArrowForward";\nimport MoreVertIcon from "@mui/icons-material/MoreVert";\n\ninterface ExpandMoreProps extends IconButtonProps {\n  expand: boolean;\n}\n\nconst ExpandMore = styled((props: ExpandMoreProps) => {\n  const { expand, ...other } = props;\n  return <IconButton {...other} />;\n})(({ theme, expand }) => ({\n  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",\n  marginLeft: "auto",\n  transition: theme.transitions.create("transform", {\n    duration: theme.transitions.duration.shortest,\n  }),\n}));\n\nexport default function RecipeReviewCard() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <>\n      <div style={{ margin: "5em", textAlign: "center" }}>\n        <h1>Blog Layout</h1>\n        <h3>Some Kind of Title</h3>\n      </div>\n\n      <div\n        style={{\n          margin: "0 25%",\n          display: "flex",\n          flexDirection: "row",\n          justifyContent: "center",\n          border: "1px solid #000",\n          padding: "2em",\n        }}\n      >\n        <hr />\n        <Card\n          sx={{ maxWidth: 345 }}\n          style={{ marginRight: "5em" }}\n          variant="outlined"\n        >\n          <CardHeader\n            avatar={\n              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">\n                B\n              </Avatar>\n            }\n            action={\n              <IconButton aria-label="settings">\n                <MoreVertIcon />\n              </IconButton>\n            }\n            title="Blog Title"\n            subheader="Blog Subtitle"\n          />\n          <CardContent>\n            <Typography variant="body2" color="text.secondary">\n              Chevrolet is one of the most recognizable and popular car brands\n              in the world. Founded in 1911 by Louis Chevrolet and William C.\n              Durant, the brand has become a symbol of quality and reliability\n            </Typography>\n          </CardContent>\n          <CardActions disableSpacing>\n            <h4>Read More</h4>\n            <ExpandMore\n              expand={expanded}\n              onClick={handleExpandClick}\n              aria-expanded={expanded}\n              aria-label="show more"\n            >\n              <ArrowForwardIcon />\n            </ExpandMore>\n          </CardActions>\n          <Collapse in={expanded} timeout="auto" unmountOnExit>\n            <CardContent>\n              <Typography paragraph>Chevrolet Description</Typography>\n              <Typography paragraph>\n                Chevrolet is an iconic American automobile brand founded in 1911\n                by Louis Chevrolet and William C. Durant\n              </Typography>\n              <Typography paragraph>\n                It is currently the fourth-largest automotive brand in the\n                United States and is a division of General Motors. Chevrolet has\n                become one of America\u2019s most iconic brands, producing reliable\n                and stylish cars, trucks, and SUVs for over a century. Its\n                models range from the economical Spark to the luxurious\n                Corvette.\n              </Typography>\n              <Typography paragraph>\n                Chevrolet is also known for its commitment to safety, providing\n                advanced features like lane departure warning and front crash\n                prevention. (Discard any mussels that don&apos;t open.)\n              </Typography>\n            </CardContent>\n          </Collapse>\n        </Card>\n\n        <Card sx={{ maxWidth: 345 }}>\n          <CardHeader\n            avatar={\n              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">\n                B\n              </Avatar>\n            }\n            action={\n              <IconButton aria-label="settings">\n                <MoreVertIcon />\n              </IconButton>\n            }\n            title="Blog Title"\n            subheader="Blog Subtitle"\n          />\n          <CardContent>\n            <Typography variant="body2" color="text.secondary">\n              Chevrolet is one of the most recognizable and popular car brands\n              in the world. Founded in 1911 by Louis Chevrolet and William C.\n              Durant, the brand has become a symbol of quality and reliability\n            </Typography>\n          </CardContent>\n          <CardActions disableSpacing>\n            <h4>Read More</h4>\n            <ExpandMore\n              expand={expanded}\n              onClick={handleExpandClick}\n              aria-expanded={expanded}\n              aria-label="show more"\n            >\n              <ArrowForwardIcon />\n            </ExpandMore>\n          </CardActions>\n          <Collapse in={expanded} timeout="auto" unmountOnExit>\n            <CardContent>\n              <Typography paragraph>Chevrolet Description</Typography>\n              <Typography paragraph>\n                Chevrolet is an iconic American automobile brand founded in 1911\n                by Louis Chevrolet and William C. Durant\n              </Typography>\n              <Typography paragraph>\n                It is currently the fourth-largest automotive brand in the\n                United States and is a division of General Motors. Chevrolet has\n                become one of America\u2019s most iconic brands, producing reliable\n                and stylish cars, trucks, and SUVs for over a century. Its\n                models range from the economical Spark to the luxurious\n                Corvette.\n              </Typography>\n              <Typography paragraph>\n                Chevrolet is also known for its commitment to safety, providing\n                advanced features like lane departure warning and front crash\n                prevention. (Discard any mussels that don&apos;t open.)\n              </Typography>\n            </CardContent>\n          </Collapse>\n        </Card>\n      </div>\n    </>\n  );\n}\n')),(0,n.yg)("p",null,"Here\u2019s the result:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/second-gif.gif",alt:"Material UI card"})),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,n.yg)("h3",{id:"can-i-customize-the-look-of-material-ui-cards"},"Can I customize the look of Material UI Cards?"),(0,n.yg)("p",null,"Absolutely! You can change pretty much everything about how a card looks. Colors, shadows, borders, spacing - it's all customizable using the ",(0,n.yg)("inlineCode",{parentName:"p"},"sx")," prop or custom styles."),(0,n.yg)("h3",{id:"do-material-ui-cards-work-well-on-mobile-devices"},"Do Material UI Cards work well on mobile devices?"),(0,n.yg)("p",null,"Yes! Cards are responsive by default and will adjust their size based on the screen. Just make sure to set appropriate width values (like maxWidth) to control how they display."),(0,n.yg)("h3",{id:"what-can-i-put-inside-a-material-ui-card"},"What can I put inside a Material UI Card?"),(0,n.yg)("p",null,"Almost anything! Common elements include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Text content"),(0,n.yg)("li",{parentName:"ul"},"Images and videos"),(0,n.yg)("li",{parentName:"ul"},"Buttons and links"),(0,n.yg)("li",{parentName:"ul"},"Icons"),(0,n.yg)("li",{parentName:"ul"},"Action areas"),(0,n.yg)("li",{parentName:"ul"},"Expandable sections")),(0,n.yg)("h3",{id:"are-material-ui-cards-accessible"},"Are Material UI Cards accessible?"),(0,n.yg)("p",null,"Yes, they're built with accessibility in mind. They work well with screen readers and can be navigated using a keyboard. Just remember to add proper ARIA labels when needed!"),(0,n.yg)("h3",{id:"how-do-i-handle-card-interactions-like-clicking-or-expanding"},"How do I handle card interactions like clicking or expanding?"),(0,n.yg)("p",null,"It's pretty straightforward! You can add onClick handlers to the Card or CardActionArea components, and use the Collapse component for expandable content. Check out our examples above to see how it works."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"This article demonstrated the significance of Material UI in web applications. We discovered that Material UI Cards are an effective way to present content in a visually appealing and user-friendly manner by describing its features, classes, and variants. They are simple to set up, offer numerous customization options, and can be used to provide a consistent user experience. We also investigated a possible application for Material UI Cards in a simple Blog Page Layout."),(0,n.yg)("p",null,"I hope you find this article valuable\nHappy Coding!"))}h.isMDXComponent=!0}}]);