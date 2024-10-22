"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42661],{58860:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var r=a(37953);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),u=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),g=t,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return a?r.createElement(m,i(i({ref:n},c),{},{components:a})):r.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},64793:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});a(37953);var r=a(58860);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const l={title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",slug:"docker-build-args-and-env-vars",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-28-docker-build-args/social.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/docker-build-args-and-env-vars",source:"@site/blog/2022-09-28-docker-build-args.md",title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",date:"2022-09-28T00:00:00.000Z",formattedDate:"September 28, 2022",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.225,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to use Docker Build Args and Environment Variables",description:"A guide for using Docker Build Args to Configure Image Builds",slug:"docker-build-args-and-env-vars",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-28-docker-build-args/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},nextItem:{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples"},relatedPosts:[{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",permalink:"/blog/postgres-on-kubernetes",formattedDate:"January 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.045,date:"2024-01-22T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2023-01-10T00:00:00.000Z"},{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.235,date:"2022-09-01T00:00:00.000Z"}],authorPosts:[{title:"Using Arguments in Bash Scripts",description:"This article will help you understand how to use arguments in bash scripts to make your scripts more flexible and reusable.",permalink:"/blog/bash-script-arguments",formattedDate:"February 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.27,date:"2024-02-22T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"July 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.845,date:"2024-07-04T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"July 2, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.295,date:"2024-07-02T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Build arg vs. Env arg",id:"build-arg-vs-env-arg",level:2},{value:"How to pass arg variables",id:"how-to-pass-arg-variables",level:2},{value:"How to pass env variables",id:"how-to-pass-env-variables",level:2},{value:"Using ENV file",id:"using-env-file",level:2},{value:"How to secure your environment variables in docker",id:"how-to-secure-your-environment-variables-in-docker",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},g="wrapper";function m(e){var{components:n}=e,a=i(e,["components"]);return(0,r.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(n){t(e,n,a[n])}))}return e}({},d,a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Containerization is a core part of modern application development, and docker containers have changed how development teams deploy their applications. As part of standard practices of containerization, it is crucial to manage the build arguments and environment variables through proper configuration instead of just hard coding them."),(0,r.yg)("p",null,"Today, we will discuss docker ARG and ENV variables in detail. We will go through various examples of dockerfile and docker compose for build arguments and env variables. As security is an inevitable part of containerization, we will discuss securing the env parameters and secrets."),(0,r.yg)("p",null,"Let\u2019s start with the difference between ARG and ENV variables and their best use cases."),(0,r.yg)("p",null,"Steps we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#build-arg-vs-env-arg"},"Build arg vs. Env arg")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-to-pass-arg-variables"},"How to pass arg variables")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-to-pass-env-variables"},"How to pass env variables")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#using-env-file"},"Using ENV file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-to-secure-your-environment-variables-in-docker"},"How to secure your environment variables in docker"))),(0,r.yg)("h2",{id:"build-arg-vs-env-arg"},"Build arg vs. Env arg"),(0,r.yg)("p",null,"ARG and ENV are dockerfile instructions through which you can apply the different configurations. However, both look pretty similar when you look at the dockerfile. Some of the notable differences between these two are below:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"ARG parameters are applied only during the docker image building process; they are unavailable once you have built the image."),(0,r.yg)("li",{parentName:"ul"},"The running containers cannot access ARG values."),(0,r.yg)("li",{parentName:"ul"},"Some examples of ARG arguments include a version of your Ubuntu or a version of a library."),(0,r.yg)("li",{parentName:"ul"},"You can specify a default value for ARG parameters in dockerfile, and you can modify them during the creation of the build"),(0,r.yg)("li",{parentName:"ul"},"You can pass ENV variables not only during the image building but also at runtime when your containers are running"),(0,r.yg)("li",{parentName:"ul"},"ENV variables are usually your API keys, database URLs, secret keys, etc."),(0,r.yg)("li",{parentName:"ul"},"Like ARG variables, the ENV can also have a default value in the dockerfile. You can override ENV values set in a Dockerfile by providing updated ENV values through your docker-compose.yml file or Docker CLI.")),(0,r.yg)("p",null,"See the below diagram to understand the difference between ARG and ENV."),(0,r.yg)("div",{class:"img-container","align-items":"center"},(0,r.yg)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-28-docker-build-args/docker-environment-build-args.png",alt:"Docker Build Arguments comparison"})),(0,r.yg)("br",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://vsupalov.com/docker-arg-vs-env/"},"Diagram Source")),(0,r.yg)("h2",{id:"how-to-pass-arg-variables"},"How to pass arg variables"),(0,r.yg)("p",null,"Find below a snippet from a dockerfile where you can see two build ARG values, one for the Ubuntu version and the other for the CUDA library version."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ARG UBUNTU_VERSION=18.01 //Default value provided\n\nFROM ubuntu:${UBUNTU_VERSION}\n\nARG CUDA_VERSION=9.0 //Default value provided\n\nRUN echo ${CUDA_VERSION}\nRUN echo ${UBUNTU_VERSION}\n")),(0,r.yg)("p",null,"In the above snippet, docker expects two values to be passed at build time. The Cuda version and Ubuntu version. Here is how you will pass these two parameters when building the image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker build -t nodejs-server -f Dockerfile.arg --build-arg UBUNTU_VERSION=18.04\n--build-arg CUDA_VERSION=10.0\n")),(0,r.yg)("p",null,"After you execute the above, the docker will build the image with Ubuntu version 18.04 and Cuda version 10.0. When passing multiple build arguments, you need to append the flag of ",(0,r.yg)("inlineCode",{parentName:"p"},"--build-arg")," for every ARG argument."),(0,r.yg)("p",null,"Note the placement of the ARG tag. As explained on the official docker site ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact"},"here"),", An ARG argument declared before \u201cFROM\u201d is outside of the build stage, so you cannot use it in any instruction after a \u201cFROM\u201d. If you want to reuse the same ARG again, you must repeat it after the \u201cFROM\u201d."),(0,r.yg)("p",null,"If you pass an ARG at build time but that ARG argument is absent from your dockerfile, you will see a warning or an error (depending on your docker version)."),(0,r.yg)("p",null,"See below an example from docker compose:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"build:\n    context: .\n    args:\n        UBUNTU_VERSION: 18.04\n        CUDA_VERSION: 10.0\n")),(0,r.yg)("p",null,"Docker compose dynamically updates the ARG values declared in the dockerfile. If we do not provide default values in the docker compose, then docker will pick the values from the shell environment in which docker compose is running. In the below example, docker will pick the values from the shell environment."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"build:\n    context: .\n    args:\n        UBUNTU_VERSION\n        CUDA_VERSION\n")),(0,r.yg)("h2",{id:"how-to-pass-env-variables"},"How to pass env variables"),(0,r.yg)("p",null,"There are many ways you can pass the ENV values, such as:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Provide their values in the dockerfile"),(0,r.yg)("li",{parentName:"ol"},"Define them in dockerfile but set their value when running a container"),(0,r.yg)("li",{parentName:"ol"},"Use ARG variables to set ENV values")),(0,r.yg)("p",null,"Here is a snippet from a dockerfile below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ARG CUDA_VERSION\n# no default value\nENV ENV_CUDA _VERSION\n\n# a default value\nENV ENV_CUDA_VERSION 18.04\n\n# this syntax is also fine\nENV ENV_CUDA _VERSION=18.04\n\n# Using ARG to set ENV\nENV ENV_CUDA_VERSION =$CUDA_VERSION\n\n")),(0,r.yg)("p",null,"Let\u2019s pass the ENV value from the command line.\n",(0,r.yg)("inlineCode",{parentName:"p"},"$ docker run -e ENV_CUDA_VERSION =18.04 alpine env")),(0,r.yg)("p",null,"If the ENV variable is present in the environment shell, then the docker will pick the value even from the shell. See the below example."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"$ docker run -e ENV_CUDA_VERSION alpine env //value will be picked from environment shell")),(0,r.yg)("p",null,"You can access the ENV value in your code through ",(0,r.yg)("inlineCode",{parentName:"p"},"process.env.ENV_CUDA_VERSION")),(0,r.yg)("p",null,"If we look at the docker compose version of ENV values, it is pretty straightforward."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'services:\n database: image: "postgres:${POSTGRES_VERSION}"\n environment:\n    DBNAME: productsdb\n     DBUSER: "${USER}\n')),(0,r.yg)("p",null,"In the above example, the value of \u201cDBNAME\u201d is static, but the value of \u201cDBUSER\u201d is dynamic. You can set the value of \u201cDBUSER\u201d parameter dynamically during the \u201cbuild\u201d or \u201cup\u201d process like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DBUSER=guest docker-compose build\nDBUSER=guest docker-compose up\n")),(0,r.yg)("p",null,"However, due to security issues, specifying the ENV value directly in the dockerfile or compose file is not recommended. Passing build arguments dynamically through the command leaves traces in the docker image. Furthermore, you can only pass a couple of ENV values through the command."),(0,r.yg)("p",null,"What if you have a dozen or more ENV parameters for dynamic substitution? That brings us to the solution of the ENV file."),(0,r.yg)("h2",{id:"using-env-file"},"Using ENV file"),(0,r.yg)("p",null,"Using ENV files is the recommended way of specifying your configuration in non-production environment. For production, especially in the cloud-based production environment, you should take advantage of a cloud-managed service (AWS parameter store, Azure key vault, etc.) for specifying values of ENV."),(0,r.yg)("p",null,"The usage of .ENV file is straightforward. Just mention key-value pairs in a file, and name it with .env extension as below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"env_var1_name=value\nenv_var1_name=value\n")),(0,r.yg)("p",null,"Now as soon as you tell docker about this file, all the ENV variables mentioned in the .ENV file will be accessible to the application code. Here is how to mention .ENV file when running docker:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run --env-file= myenvfile.env alpine env\n")),(0,r.yg)("p",null,"Similarly, you can mention your .ENV file in docker compose as below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"services:\n  web:\n    env_file: myenvfile.env\n")),(0,r.yg)("p",null,"You can also pass the .env file to docker compose as below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker-compose --env-file /path/ myenvfile.env config\n")),(0,r.yg)("p",null,"Considering that there are many places you can mention the value of an ENV parameter, you need to remember the order of priority for docker. Below is the order of preference from top to bottom, in which docker will pick the value for ENV parameters."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Compose file"),(0,r.yg)("li",{parentName:"ol"},"Shell environment variables"),(0,r.yg)("li",{parentName:"ol"},"Environment file"),(0,r.yg)("li",{parentName:"ol"},"Dockerfile")),(0,r.yg)("h2",{id:"how-to-secure-your-environment-variables-in-docker"},"How to secure your environment variables in docker"),(0,r.yg)("p",null,"The build arguments generally and ENV values especially contain sensitive information you would not like to get leaked easily. Even if you pass any build secrets through ",(0,r.yg)("inlineCode",{parentName:"p"},"\u2013build-arg")," , the secrets are still included in the docker image."),(0,r.yg)("p",null,"Security is particularly crucial for ENV values which are usually the API keys, secret keys, payment-related keys, etc. Securing your build or ENV variables is inevitable for your application. Although there are multiple ways to secure the ENV parameters, our recommended way is to use docker buildkit and ",(0,r.yg)("inlineCode",{parentName:"p"},"\u2013secret")," flag."),(0,r.yg)("p",null,"Here is how to do it:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"DOCKER_BUILDKIT=1"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add below to the top of your dockerfile. This will ensure the docker build will use the latest 1.x version of the Dockerfile syntax\n",(0,r.yg)("inlineCode",{parentName:"p"},"# syntax = docker/dockerfile:1"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--secret")," argument to docker ",(0,r.yg)("inlineCode",{parentName:"p"},"build")," command. The parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," is any string of your choice.\n",(0,r.yg)("inlineCode",{parentName:"p"},"DOCKER_BUILDKIT=1 docker build --secret id=mysecret,src=mysecrets.env..."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Now mount the file having your secrets or ENV values. The ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," here must match the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," passed in the docker build command above.\n",(0,r.yg)("inlineCode",{parentName:"p"},"RUN --mount=type=secret,id=mysecret \u2026 ")))),(0,r.yg)("p",null,"If you are using docker swarms, you can also take advantage of ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/swarm/secrets/"},"docker secrets")," to secure your configuration parameters."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Today, we discussed how to use docker ARG and ENV parameters. The ARG arguments are only available when building the image, while ENV parameters are available to the application containers during build and when the container is running."),(0,r.yg)("p",null,"We presented the relevant examples for both dockerfile and docker compose. As docker caches the image layers, securing the secret configuration and ENV variables is also a must-do task. We presented the best way to integrate your .env files with docker in a secure manner."))}m.isMDXComponent=!0}}]);