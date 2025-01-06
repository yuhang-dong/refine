"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16096],{58860:(e,o,t)=>{t.d(o,{xA:()=>p,yg:()=>m});var n=t(37953);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=u(e.components);return n.createElement(s.Provider,{value:o},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},g=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return t?n.createElement(m,i(i({ref:o},p),{},{components:t})):n.createElement(m,i({ref:o},p))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},79295:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});t(37953);var n=t(58860);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})),e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",slug:"how-to-use-turborepo",authors:"muhammad_khabbab",tags:["nextjs","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-13-turborepo/social-2.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/how-to-use-turborepo",source:"@site/blog/2024-07-05-turborepo.md",title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",date:"2024-07-05T00:00:00.000Z",formattedDate:"July 5, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.565,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",slug:"how-to-use-turborepo",authors:"muhammad_khabbab",tags:["nextjs","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-13-turborepo/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows"},nextItem:{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component"},relatedPosts:[{title:"Low Code Limitations - Exploring the Risk of Vendor Lock-In",description:"We discuss the limitations and risks associated with low-code platforms and how to avoid getting stuck with one vendor.",permalink:"/blog/low-code-tools",formattedDate:"April 19, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.255,date:"2024-04-19T00:00:00.000Z"},{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",permalink:"/blog/terraform-aws",formattedDate:"September 12, 2024",authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],readingTime:9.73,date:"2024-09-12T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.36,date:"2024-01-26T00:00:00.000Z"}],authorPosts:[{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"July 2, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.295,date:"2024-07-02T00:00:00.000Z"},{title:"Docker Swarm vs. Kubernetes - DevOps Guide",description:"We'll present a detailed comparison between both Docker swarm and Kubernetes.",permalink:"/blog/docker-swarm-vs-kubernetes",formattedDate:"February 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.645,date:"2024-02-14T00:00:00.000Z"},{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",permalink:"/blog/kubectl-port-forward",formattedDate:"November 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.64,date:"2023-11-05T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Why Turborepo?",id:"why-turborepo",level:2},{value:"Unique Features of Turborepo",id:"unique-features-of-turborepo",level:2},{value:"Remote caching",id:"remote-caching",level:3},{value:"Prune now supports all package managers",id:"prune-now-supports-all-package-managers",level:3},{value:"Support for Polyrepo",id:"support-for-polyrepo",level:3},{value:"When should you use Turborepo?",id:"when-should-you-use-turborepo",level:2},{value:"How to use Turborepo?",id:"how-to-use-turborepo",level:2},{value:"Advanced Configuration Options",id:"advanced-configuration-options",level:2},{value:"Customizing Build Pipelines",id:"customizing-build-pipelines",level:3},{value:"Optimizing Build Performance",id:"optimizing-build-performance",level:3},{value:"Using Turborepo with the Existing Tools",id:"using-turborepo-with-the-existing-tools",level:2},{value:"Example: CI/CD Pipelines",id:"example-cicd-pipelines",level:3},{value:"Example: Package Managers",id:"example-package-managers",level:3},{value:"Example: Testing Frameworks",id:"example-testing-frameworks",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},g="wrapper";function m(e){var{components:o}=e,t=i(e,["components"]);return(0,n.yg)(g,r(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(o){a(e,o,t[o])}))}return e}({},d,t),{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"This article was last updated on July 05, 2024, to add sections for Advanced Configuration Options and Integrating Turborepo with Existing Tools.")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Monorepos are very popular in modern application development because of their immense benefits. A monorepo is a single repository having multiple distinct projects with well-defined associations. Note that monorepo is not a monolith; in fact, it is the opposite of a monolith."),(0,n.yg)("p",null,"It is very easy to make cross-cutting code changes across different applications (/backend, /frontend) in a single atomic commit. It also provides a single source of truth for various environmental concerns you would want to be applied uniformly across your organization. Some examples include dependency management, code reuse from shared packages, etc. Because of the powerful features of monorepo that tech giants like Google and Facebook have adopted monorepo. Even major Javascript tools like React, Next.JS, Yarn, and many others are using monorepo."),(0,n.yg)("p",null,"In this article, we will discuss ",(0,n.yg)("a",{parentName:"p",href:"https://turbo.build/"},"Turborepo")," in detail. Turborepo is one of the best tools for monorepo. It is a high-performance build system for Typescript and Javascript projects. It provides some powerful features like:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fast incremental build"),(0,n.yg)("li",{parentName:"ul"},"Local computational caching"),(0,n.yg)("li",{parentName:"ul"},"Distributed computation caching"),(0,n.yg)("li",{parentName:"ul"},"Local task orchestration"),(0,n.yg)("li",{parentName:"ul"},"Dependency graph visualization"),(0,n.yg)("li",{parentName:"ul"},"Source code sharing")),(0,n.yg)("p",null,"Today we will cover why we should use Turborepo, what are its major features and when are the best use cases for adopting it in your projects."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#why-turborepo"},"Why Turborepo?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#unique-features-of-turborepo"},"Unique Features of Turborepo"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#remote-caching"},"Remote caching")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#prune-now-supports-all-package-managers"},"Prune now supports all package managers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#support-for-polyrepo"},"Support for Polyrepo")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#when-should-you-use-turborepo"},"When should you use Turborepo?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-to-use-turborepo"},"How to use Turborepo?"))),(0,n.yg)("h2",{id:"why-turborepo"},"Why Turborepo?"),(0,n.yg)("p",null,"There was a need for a monorepo tool that could take advantage of advanced techniques with zero configuration. Something that is easy to scale and adapt while at the same time improving the speed of monorepo pipelines. Turborepo provides all these features and more."),(0,n.yg)("p",null,"The main idea behind monorepo is to never recompute the work that has already been done before. It keeps a cache of previous builds for each project and then uses it for subsequent builds. It keeps track of the output of any task you execute and then skips the work that is already done.\nTurborepo is designed to be adopted incrementally, so you can add it to our codebase in just a few minutes. It speeds up your tasks through smart scheduling, minimizing idle CPU."),(0,n.yg)("p",null,"Turborepo's magic lies in the execution of its tasks. For package installation, you can still use pnpm or npm. Turborepo complements pnpm/npm, where these package managers install your packages, and Turborepo runs your tasks efficiently."),(0,n.yg)("h2",{id:"unique-features-of-turborepo"},"Unique Features of Turborepo"),(0,n.yg)("h3",{id:"remote-caching"},"Remote caching"),(0,n.yg)("p",null,"Build caches are usually generated and checked on the local machine, so if you are reviewing your team member's code, you will also have to build it locally. Remote caching shares that cache on a global scale, turning it into a \"dropbox of your ",(0,n.yg)("inlineCode",{parentName:"p"},"dist"),' folder". Vercel offers free remote cache on Turborepo builds even if you are not hosting your application on Vercel servers.'),(0,n.yg)("p",null,"With your remote caching, builds can achieve amazingly fast build times by providing a way to share compiled computations and code artifacts on Vercel. These artifacts can be log outputs, build outputs, blobs of data, etc. Remote caching identifies any necessary artifacts already generated in the same code PR and recycles them across different machines. This recycling or reuse can be done either during Vercel build process or an external CI/CD."),(0,n.yg)("br",null),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-13-turborepo/turbopack.png",alt:"turbopack"}),(0,n.yg)("em",null," Source - ")),(0,n.yg)("br",null),(0,n.yg)("p",null,"The above image shows that the shared cache resides on the Vercel servers. You can share your cache with fellow developers and your CI server.\nRemote caching speeds up your workflow as you do not need to constantly re-compile, re-test, or re-run your unchanged code."),(0,n.yg)("h3",{id:"prune-now-supports-all-package-managers"},"Prune now supports all package managers"),(0,n.yg)("p",null,"Pruning is the process of automatically removing the overgrowth of the build cache efficiently. Pruning creates a subset of your monorepo, including pruning the dependencies in your lock file. As a result, the tool providing the pruning must also implement the logic for each workspace manager separately. The good news is that the command ",(0,n.yg)("inlineCode",{parentName:"p"}," turbo prune")," provides support for all major package managers including npm, yarn, and pnpm."),(0,n.yg)("h3",{id:"support-for-polyrepo"},"Support for Polyrepo"),(0,n.yg)("p",null,"Initially, Turborepo was focused solely on monorepo because monorepo runs plenty of tasks, and Turborepo is exceptionally fast in executing the tasks rapidly. Now Turborepo supports polyrepo too. After all, a polyrepo also executes plenty of tasks, so it is well worth utilizing Turborepo in monorepo and polyrepo. The majority of CI/CD processes duplicate a lot of work, so taking advantage of the Turborepo cache would benefit polyrepo too.\nSome of the other features of Turborepo include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Incremental builds. Turborepo will remember what you have built and skip the existing computations"),(0,n.yg)("li",{parentName:"ul"},"Context-aware hashing. Turborepo keeps track of the contents of your files, not date/time, to identify what needs to be built."),(0,n.yg)("li",{parentName:"ul"},"Zero runtime overhead. Turborepo will not interfere with your runtime code or alter your sourcemaps"),(0,n.yg)("li",{parentName:"ul"},"Pruned subsets. It speeds up your deployments by generating a subset of your monorepo with only what is required to build a specific target"),(0,n.yg)("li",{parentName:"ul"},"Integration with Lerna. If you are using lerna as your package publishing workflow, you can use Turborepo in parallel to improve the execution of your tasks."),(0,n.yg)("li",{parentName:"ul"},"Profile in your browser. You can create build profiles and import them in Edge or chrome browser to identify which tasks are running the longest.")),(0,n.yg)("h2",{id:"when-should-you-use-turborepo"},"When should you use Turborepo?"),(0,n.yg)("p",null,"Despite all the good things about monorepo, they struggle to scale. Each project in monorepo has its own ecosystem of testing, building, linting, etc. While majority of the projects will benefit from Turborepo, Turborepo will be highly beneficial for you if:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"There is a lot of dependency of scripts on each other"),(0,n.yg)("li",{parentName:"ul"},"You want to execute tasks in parallel"),(0,n.yg)("li",{parentName:"ul"},"You want top-level dependency management for JavaScript and TypeScript"),(0,n.yg)("li",{parentName:"ul"},"You want Incremental builds"),(0,n.yg)("li",{parentName:"ul"},"You want a uniform linting configuration"),(0,n.yg)("li",{parentName:"ul"},"You want caching of the build steps"),(0,n.yg)("li",{parentName:"ul"},"You want out-of-the-box hot module reload for the NextJS application for imported packages")),(0,n.yg)("h2",{id:"how-to-use-turborepo"},"How to use Turborepo?"),(0,n.yg)("p",null,"Following are some of the commands to use Turborepo:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"npx create-turbo@latest turbo-demo")," scaffolds a monorepo with different applications (API, frontend) and packages (design system and shared configs (eslint, tsconfig))"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"turbo run build")," builds all apps simultaneously. When you execute this command again, the second build completes in just 100ms because everything is cached. There are many ",(0,n.yg)("a",{parentName:"li",href:"https://turborepo.org/docs/reference/command-line-reference"},"variations")," of ",(0,n.yg)("inlineCode",{parentName:"li"},"turbo run")," command."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"turbo prune --scope=<target>")," creates a sparse/partial monorepo with a pruned lock file for a target package."),(0,n.yg)("li",{parentName:"ul"},"Remote Caching commands: ",(0,n.yg)("inlineCode",{parentName:"li"},"turbo login")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"turbo link"))),(0,n.yg)("h2",{id:"advanced-configuration-options"},"Advanced Configuration Options"),(0,n.yg)("p",null,"I have added a new section under advanced configuration options in our article on Turborepo. The following ways describe how you can configure your build process to tailor it to your project's specific needs and optimize your build performance."),(0,n.yg)("h3",{id:"customizing-build-pipelines"},"Customizing Build Pipelines"),(0,n.yg)("p",null,"Customizing build pipelines in Turborepo will allow you to tailor the process to your project's needs. Define custom pipelines that handle dependencies, outputs, and task orchestration effectively."),(0,n.yg)("p",null,"If you are willing to do deeper customization around building pipelines, you can define an additional task with its dependencies in your Turborepo configuration file. This allows you to create a build process that ties together building for multiple environments and use cases. For example, separate pipelines can be established for building, linting, and testing projects with their respective dependencies and outputs."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"module.exports = {\n  pipeline: {\n    build: {\n      dependsOn: ['^build'],\n      outputs: ['dist/**'],\n    },\n    lint: {\n      dependsOn: ['^lint'],\n      outputs: [''],\n    },\n    test: {\n      dependsOn: ['^test'],\n      outputs: ['coverage/**'],\n    },\n  },\n};\n")),(0,n.yg)("h3",{id:"optimizing-build-performance"},"Optimizing Build Performance"),(0,n.yg)("p",null,"Optimizing build performance is extremely important to speed up and run the development process efficiently. Turborepo integrates a set of more advanced techniques in the context of build optimization: caching strategies, and running tasks in parallel."),(0,n.yg)("p",null,"During the build process with Turborepo, optimization for better performance means running some parallel tasks and caching the results of those tasks. To do that, it gives you the flexibility to run tasks in parallel so the already cached results can be utilized other than executing them, again boosting the process of parallel tasking manifolds at a minimal cost of total turnaround time, using all the resources it could lay its hands on."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"module.exports = {\n  cache: {\n    build: true,\n    lint: true,\n    test: true,\n  },\n  workers: {\n    maxConcurrentTasks: 4,\n  },\n};\n")),(0,n.yg)("p",null,"With these advanced configuration features, you can customize the build and fully optimize the performance of your projects such that your projects are built quickly and efficiently."),(0,n.yg)("p",null,"."),(0,n.yg)("h2",{id:"using-turborepo-with-the-existing-tools"},"Using Turborepo with the Existing Tools"),(0,n.yg)("p",null,"By integrating Turborepo into the most popular development tools, your development workflow will be seamless and allow you to get maximum efficiency from the development process. Maybe you'd have it set up to work with CI/CD pipelines, package managers, and testing frameworks to enhance your build and deploy software processes."),(0,n.yg)("h3",{id:"example-cicd-pipelines"},"Example: CI/CD Pipelines"),(0,n.yg)("p",null,"You can adapt your existing CI/CD scripts to run Turborepo commands and be plugged into the CI/CD pipelines. This would ensure that builds, tests, and other tasks are carried out efficiently while following the continuous integration and deployment."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'# .github/workflows/ci.yml\nname: CI\n\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Install Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: "16"\n\n      - name: Install dependencies\n        run: npm install\n\n      - name: Run Turborepo build\n        run: npx turbo run build --cache-dir=.cache/turbo\n\n      - name: Run tests\n        run: npx turbo run test\n')),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Setup"),": Make sure Node.js and Turborepo are available within your CI/CD environment."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Configuration"),": Add Turborepo to your CI/CD configuration file with instructions for building and testing your projects.")),(0,n.yg)("h3",{id:"example-package-managers"},"Example: Package Managers"),(0,n.yg)("p",null,"Turborepo effectively integrates with package managers like npm, yarn, and pnpm, making it possible to manage dependencies in one centralized place. The add-on nature of Turborepo allows you to use the main features of your favorite package manager while using Turborepo's advanced features for task execution and caching."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Setup"),": Install dependencies using your favorite package manager.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Configuration"),": Configure Turborepo to understand and work with the package manager's lock file and workspace settings."))),(0,n.yg)("h3",{id:"example-testing-frameworks"},"Example: Testing Frameworks"),(0,n.yg)("p",null,"Testing is made practical with tools that come with Turborepo by being integrated into testing frameworks. By using caching features, the running of tests with commands to take advantage of the infrastructure of Turborepo enables one to achieve a fast process in this case."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Setup"),": Set up your favorite testing framework (e.g., Jest or Mocha)."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Configuration"),": Integrate test commands into the Turborepo pipeline configuration to trigger tests in the build process.")),(0,n.yg)("p",null,"Leveraging these tools with Turborepo, you can set up an integrated and seamless development environment that substantially enhances your workflow and shrinks build times."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Turborepo is a high performant and blazing-fast build tool for monorepo. With the Javascript ecosystem growing rapidly, you need a modern and efficient set of tools, especially the build tool."),(0,n.yg)("p",null,'As shown in the above picture, Turborepo is written 74% in the Go language, which means it is written with performance in mind. Clearly, the age of "JS tools in JS" is gone. Turborepo can make your pipeline 10x faster. It brings immense value out of the box with a declarative build pipeline, excellent debugging/profiling options, and great documentation.'))}m.isMDXComponent=!0}}]);