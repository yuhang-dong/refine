"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27050],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",slug:"docker-list-containers",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-list-containers",source:"@site/blog/2023-06-06-docker-list-containers.md",title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",date:"2023-06-06T00:00:00.000Z",formattedDate:"June 6, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.265,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",slug:"docker-list-containers",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/social.png",hide_table_of_contents:!1},prevItem:{title:"refine Open Source Hackathon 2",permalink:"/blog/refine-hackathon-2"},nextItem:{title:"refine.new - Introducing the Fastest Way to Create Refine Apps",permalink:"/blog/what-is-refine-new"},relatedPosts:[{title:"Creating testable React applications with Playwright",description:"We'll take a look at how to create testable React applications with Playwright.",permalink:"/blog/playwright-react",formattedDate:"June 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:9.29,date:"2024-06-04T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.725,date:"2024-11-27T00:00:00.000Z"},{title:"Understanding the Basics of Kubernetes CronJob",description:"CronJobs in Kubernetes is the way of running jobs automatically based on time intervals.",permalink:"/blog/kubernetes-cron-jobs",formattedDate:"December 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.52,date:"2023-12-12T00:00:00.000Z"}],authorPosts:[{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.725,date:"2024-11-27T00:00:00.000Z"},{title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",permalink:"/blog/bash-script-arguments",formattedDate:"February 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.27,date:"2024-02-22T00:00:00.000Z"},{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"Brief overview of the importance of listing Docker containers",id:"brief-overview-of-the-importance-of-listing-docker-containers",level:2},{value:"Listing Running Containers",id:"listing-running-containers",level:2},{value:"docker ps command to list only the running containers:",id:"docker-ps-command-to-list-only-the-running-containers",level:3},{value:"Explanation of the columns displayed in the output:",id:"explanation-of-the-columns-displayed-in-the-output",level:3},{value:"Listing All Containers",id:"listing-all-containers",level:2},{value:"docker ps -a command to list all containers, including the stopped ones:",id:"docker-ps--a-command-to-list-all-containers-including-the-stopped-ones",level:3},{value:"Differentiating between running and stopped containers in the output:",id:"differentiating-between-running-and-stopped-containers-in-the-output",level:3},{value:"Listing Latest Containers",id:"listing-latest-containers",level:2},{value:"docker ps -l command to list the latest created container",id:"docker-ps--l-command-to-list-the-latest-created-container",level:3},{value:"Explanation of the usefulness in scenarios where the latest container is of interest",id:"explanation-of-the-usefulness-in-scenarios-where-the-latest-container-is-of-interest",level:2},{value:"Rollback on encountering issues with the latest update:",id:"rollback-on-encountering-issues-with-the-latest-update",level:3},{value:"Limitation on resources for container deployment:",id:"limitation-on-resources-for-container-deployment",level:3},{value:"Disabling Truncation",id:"disabling-truncation",level:2},{value:"docker ps --no-trunc command to disable truncation of container names",id:"docker-ps---no-trunc-command-to-disable-truncation-of-container-names",level:3},{value:"Displaying full values in the output:",id:"displaying-full-values-in-the-output",level:3},{value:"Listing the ID Only (Quiet Mode)",id:"listing-the-id-only-quiet-mode",level:2},{value:"docker ps -q command to list only the container IDs in quiet mode",id:"docker-ps--q-command-to-list-only-the-container-ids-in-quiet-mode",level:3},{value:"Suitable for scenarios where only the container IDs are required:",id:"suitable-for-scenarios-where-only-the-container-ids-are-required",level:2},{value:"Orchestration Environment",id:"orchestration-environment",level:3},{value:"Connecting Containers",id:"connecting-containers",level:3},{value:"Viewing Container Size",id:"viewing-container-size",level:2},{value:"docker ps --size command to display the size of containers",id:"docker-ps---size-command-to-display-the-size-of-containers",level:3},{value:"Understanding the additional size column in the output.",id:"understanding-the-additional-size-column-in-the-output",level:2},{value:"Customizing the Output",id:"customizing-the-output",level:2},{value:"docker ps --format command to customize the output format using Go templates",id:"docker-ps---format-command-to-customize-the-output-format-using-go-templates",level:3},{value:"Examples of customizing the displayed information",id:"examples-of-customizing-the-displayed-information",level:2},{value:"Using Advanced Filters",id:"using-advanced-filters",level:2},{value:"docker ps --filter command to apply advanced filters for listing specific containers",id:"docker-ps---filter-command-to-apply-advanced-filters-for-listing-specific-containers",level:3},{value:"Filtering based on various criteria such as name, label, status, etc.",id:"filtering-based-on-various-criteria-such-as-name-label-status-etc",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Recap of the different options and commands covered",id:"recap-of-the-different-options-and-commands-covered",level:2},{value:"Final thoughts on the usefulness of Docker container listing",id:"final-thoughts-on-the-usefulness-of-docker-container-listing",level:2}],p={toc:u},g="wrapper";function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"brief-overview-of-the-importance-of-listing-docker-containers"},"Brief overview of the importance of listing Docker containers"),(0,a.yg)("p",null,"Listing containers is an essential task if you are working with containerized applications as this allows you to see the running container on a Docker host, monitor their health, efficiently utilize the resource, help identify potential causes of the problem, help balance loads, organize container placement, and also take care of security by checking the presence of unauthorized or malicious containers."),(0,a.yg)("h2",{id:"listing-running-containers"},"Listing Running Containers"),(0,a.yg)("h3",{id:"docker-ps-command-to-list-only-the-running-containers"},"docker ps command to list only the running containers:"),(0,a.yg)("p",null,"You might have created many containers. Some are running, but some are stopped. Now, you will execute the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps"),"\u2019 command for listing docker containers, but executing this command will show you only running containers by default."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image1.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"explanation-of-the-columns-displayed-in-the-output"},"Explanation of the columns displayed in the output:"),(0,a.yg)("p",null,"Once you have executed the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps"),"\u2019 command, you can see the following output against each running container based on seven different columns."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Container Id:")," This column contains the identity mapped to each container running.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Image:")," This is an image of each container specifically used to create that container.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Command:")," Command executed in the background to initialize and run each container.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Created:")," Timestamp when each container is created.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Status:")," The current state of each container that can be running, exited, paused, removing, restarting etc.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Ports:")," Ports are bind to each container, and they will help you to access the service inside each container by utilizing the host port. For Example, if host port 8080 is bind to container port 80, then you can be able to access the container web content by using \u2018http://localhost:8080\u2019 URL on your local machine.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Names:")," Each running container has a unique name assigned to them."))),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image2.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"listing-all-containers"},"Listing All Containers"),(0,a.yg)("h3",{id:"docker-ps--a-command-to-list-all-containers-including-the-stopped-ones"},"docker ps -a command to list all containers, including the stopped ones:"),(0,a.yg)("p",null,"If you want to see all containers, add a keyword with the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps"),"\u2019 command, i.e., \u2018-a\u2019. This command will show you all containers, whether they are running, restarting, paused, or stopped."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image3.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"differentiating-between-running-and-stopped-containers-in-the-output"},"Differentiating between running and stopped containers in the output:"),(0,a.yg)("p",null,"In the output of the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps -a"),"\u2019 command, you can distinguish between running and stopped containers by looking at the \u2018STATUS\u2019 column. If the value is \u2018up 3 hours\u2019, the container has been running for the last 3 hours, and if the value is \u2018Exited 4 hours go\u2019, the container was stopped 4 hours ago."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image4.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"listing-latest-containers"},"Listing Latest Containers"),(0,a.yg)("h3",{id:"docker-ps--l-command-to-list-the-latest-created-container"},"docker ps -l command to list the latest created container"),(0,a.yg)("p",null,"\u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps -l"),"\u2019 is used to list the latest container created, but the \u2018-l\u2019 keyword is depreciated in recent versions of docker. Instead of \u2018-l\u2019, you can use \u2018docker ps -n 1\u2019 to see the latest one. Using \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps -n 1"),"\u2019, it is important to set the limit of showing the latest containers; you must add the number of limits after the \u2018-n\u2019 keyword. For Example, if you want to list the last 5 latest containers created, then you can execute \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps -n 5"),"\u2019."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image5.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"explanation-of-the-usefulness-in-scenarios-where-the-latest-container-is-of-interest"},"Explanation of the usefulness in scenarios where the latest container is of interest"),(0,a.yg)("h3",{id:"rollback-on-encountering-issues-with-the-latest-update"},"Rollback on encountering issues with the latest update:"),(0,a.yg)("p",null,"Suppose you regularly deploy new updates to your containerized application, and anything goes wrong after the last update. In that case, this command will help you easily identify most latest containers created since the last update for immediate rollback to the older version."),(0,a.yg)("h3",{id:"limitation-on-resources-for-container-deployment"},"Limitation on resources for container deployment:"),(0,a.yg)("p",null,"Suppose you have limited resources(CPU/RAM/Storage etc.) and want an effective allocation of resources; for that, you need to have a track of the resource utilized by the most recent containers created, and this command will help you list them all to make a change in their configuration to ensure efficiency."),(0,a.yg)("h2",{id:"disabling-truncation"},"Disabling Truncation"),(0,a.yg)("h3",{id:"docker-ps---no-trunc-command-to-disable-truncation-of-container-names"},"docker ps --no-trunc command to disable truncation of container names"),(0,a.yg)("p",null,"When you run the command \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps"),"\u2019 you will find out that in output, the values of a few columns are truncating, making it difficult to understand, especially when you need full container ids or image names. For that purpose, you need to use \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps \u2013no-trunc"),"\u2019, which will turn off the docker default truncating feature and give you a full view of values in the output."),(0,a.yg)("h3",{id:"displaying-full-values-in-the-output"},"Displaying full values in the output:"),(0,a.yg)("p",null,"Following is the example output after disabling docker default truncation by using the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps \u2013no-trunc"),"\u2019 command:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image6.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"listing-the-id-only-quiet-mode"},"Listing the ID Only (Quiet Mode)"),(0,a.yg)("h3",{id:"docker-ps--q-command-to-list-only-the-container-ids-in-quiet-mode"},"docker ps -q command to list only the container IDs in quiet mode"),(0,a.yg)("p",null,"Most of the time, in the \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps"),"\u2019 command output, the additional information except Container ids is not useful for you, and instead of showing images, ports, names, etc., against each container in the output, you only want to list the container ids, then for this purpose, there is a specific command, i.e., \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps -q"),"\u2019 that will customize your output to only display container ids."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image7.PNG",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"suitable-for-scenarios-where-only-the-container-ids-are-required"},"Suitable for scenarios where only the container IDs are required:"),(0,a.yg)("h3",{id:"orchestration-environment"},"Orchestration Environment"),(0,a.yg)("p",null,"Most companies, especially enterprises, use orchestration tools like Kubernetes and docker swarm. These orchestration tools often utilize Container IDs to manage and schedule containers. You can retrieve a container ID and run operations on containers in the orchestration environment using docker ps -q."),(0,a.yg)("h3",{id:"connecting-containers"},"Connecting Containers"),(0,a.yg)("p",null,"In a distributed architecture, we usually must establish a connection between containers for resource sharing, network connectivity, and scalability. For creating a connection between containers, we need to have IDs specific to them. Using the command \u2018docker ps -q\u2019, we can quickly fetch the required ids to create a connection."),(0,a.yg)("h2",{id:"viewing-container-size"},"Viewing Container Size"),(0,a.yg)("h3",{id:"docker-ps---size-command-to-display-the-size-of-containers"},"docker ps --size command to display the size of containers"),(0,a.yg)("p",null,"As we have discussed earlier in the \u2018",(0,a.yg)("strong",{parentName:"p"},"Listing Latest Containers"),"\u2019 scenarios section that, we might have limited resources, so to avoid unnecessary usage, we need to monitor the resource utilization by each container. This specific command will facilitate us by representing the disk space utilized by each container and allow us to quickly identify containers that consume large amounts of space on the disk to take the appropriate actions."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image8.PNG",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"understanding-the-additional-size-column-in-the-output"},"Understanding the additional size column in the output."),(0,a.yg)("p",null,"The \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps --size"),"\u2019 command will add an additional column to the list of containers output that represents the Actual Size(overall size) and Virtual Size utilized by each container."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Actual Size:")," The size utilized by the writable container layer consists of the container\u2019s filesystem and any modifications made."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Virtual Size:")," If each layer in a container were to be separated and not shared, the virtual size is the total amount of disk space required. The combined size of all the container's layers, which include any shares, base pictures, and additional layers, comes under the virtual size."),(0,a.yg)("h2",{id:"customizing-the-output"},"Customizing the Output"),(0,a.yg)("h3",{id:"docker-ps---format-command-to-customize-the-output-format-using-go-templates"},"docker ps --format command to customize the output format using Go templates"),(0,a.yg)("p",null,"Suppose you want to get the customized output that will only contain the column of your choice while listing your containers. In that case, you can use \u2018docker ps\u2019 with the keyword \u2018--format\u2019 along with the Go template string that is directly integrated with docker and can be used simply with the docker command because its syntax is native to the \u2018Go Programming Language\u2019 on which the docker is itself built. The command will look something like this \u2018",(0,a.yg)("strong",{parentName:"p"},"docker ps \u2013format")," \u201c",(0,a.yg)("strong",{parentName:"p"},"GOTEMPLATE"),"\u201d \u2019."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Go Template String Syntax:"),' docker ps --format "ID: {{.ID}}, Name: {{.Names}}, Image: {{.Image}}, Status: {{.Status}}"'),(0,a.yg)("p",null,"Double curly brackets {{}} are used to denote placeholders that relate to particular container properties such as ID, Names, Image, and Status. These placeholders will be replaced by actual values when you run the command."),(0,a.yg)("h2",{id:"examples-of-customizing-the-displayed-information"},"Examples of customizing the displayed information"),(0,a.yg)("p",null,"Let\u2019s customize an output that only displays Container ID, Image, and Name:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image9.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Let\u2019s customize an output that displays the latest containers with Container ID, Status, and additional column SIZE:")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image10.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"using-advanced-filters"},"Using Advanced Filters"),(0,a.yg)("h3",{id:"docker-ps---filter-command-to-apply-advanced-filters-for-listing-specific-containers"},"docker ps --filter command to apply advanced filters for listing specific containers"),(0,a.yg)("p",null,"Docker also provides advanced filtering options that will allow you to list the containers based on different attributes and conditions of your choice. All you need to do is to add \u2018--filter\u2019 keyword with the key-value pair. \u2018Key\u2019 will be the name of an attribute of the container on which you want to filter, and \u2018Value\u2019 will be the condition you want to apply to that attribute. An interesting fact about the filter keyword is that you can repeat it multiple times with different conditions."),(0,a.yg)("h2",{id:"filtering-based-on-various-criteria-such-as-name-label-status-etc"},"Filtering based on various criteria such as name, label, status, etc."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Filtering Based on Name:")," Only show the container with the name \u2018admiring_benz\u2019(",(0,a.yg)("strong",{parentName:"p"},"Command"),": \u2018docker ps \u2013filter \u201cname=admiring_benz\u201d\u2019)"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image11.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Filtering Based on Status:")," Filter output based on different statuses e.g exited, created or running etc."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Commands"),": docker ps \u2013filter \u201cstatus=running\u201d, docker ps \u2013filter \u201cstatus=exited\u201d, docker ps \u2013filter \u201cstatus=created\u201d"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image12.png",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Filtering Based on Label:")," Filter output by using Filter keyword multiple times for status attribute and label conditioning.(",(0,a.yg)("strong",{parentName:"p"},"Command"),': docker ps --filter "status=created" --filter "label=com.example.version=1.0")'),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-06-docker-list-containers/image13.PNG",alt:"react tooltip"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("h2",{id:"recap-of-the-different-options-and-commands-covered"},"Recap of the different options and commands covered"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"'docker ps' command can be use to list all containers that are running.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"By using 'docker ps' command with other options('docker ps -n 5'/'docker ps -l', 'docker ps -a', 'docker ps -q') we can achieve the output with the list of the latest containers, containers with ids only and containers in different states(running, stopped, created, etc.)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The output of 'docker ps' command can be customized by adding a format keyword followed by the Go Template in the command(e.g docker ps \u2013format \"TEMPLATE\").")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"We can also use advance filters based on attributes to get the result with specific containers against 'docker ps' command.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The actual and Virtual size of each container can be added and viewed in additional column of the container list by using '--size' keyword with 'docker ps' command(e.g docker ps --size)."))),(0,a.yg)("h2",{id:"final-thoughts-on-the-usefulness-of-docker-container-listing"},"Final thoughts on the usefulness of Docker container listing"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Container listing is useful for container management to view all created containers comprehensively.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It is useful in connecting different containers to share resources and monitor container-specific health and performance.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Integrating container listing commands in scripts, third-party monitoring systems, and orchestration tools will help to accomplish automated workflows.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Container listing will also assist in identifying the bug in the containerized environment by using them with logging, allowing you to examine each container's details."))))}m.isMDXComponent=!0}}]);