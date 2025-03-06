"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21798],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>p});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(p,o(o({ref:t},g),{},{components:n})):a.createElement(p,o({ref:t},g))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social-2.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/git-switch-and-git-checkout",source:"@site/blog/2024-11-27-git-switch.md",title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",date:"2024-11-27T00:00:00.000Z",formattedDate:"November 27, 2024",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:12.005,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git switch and git checkout \u2013 How to switch branches in git",description:"We will go through different use cases and examples for using git checkout and git switch.",slug:"git-switch-and-git-checkout",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch"},nextItem:{title:"Zsh and Bash",permalink:"/blog/zsh-vs-bash"},relatedPosts:[{title:"How to Change Node Version",description:"A comprehensive guide on how to change the node version.",permalink:"/blog/change-node-version",formattedDate:"March 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.11,date:"2024-03-27T00:00:00.000Z"},{title:"An Introduction to Using FastAPI",description:"We'll be looking at FastAPI, a modern Python microframework that simplifies the creation of web APIs using Python programming.",permalink:"/blog/introduction-to-fast-api",formattedDate:"January 9, 2025",authors:[{name:"Obisike Treasure",title:"Software Developer",imageURL:"https://github.com/Otrex.png",key:"obisike_treause"}],readingTime:18.805,date:"2025-01-09T00:00:00.000Z"},{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",permalink:"/blog/kubectl-exec-command",formattedDate:"October 19, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-19T00:00:00.000Z"}],authorPosts:[{title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",permalink:"/blog/git-stash",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.005,date:"2024-01-26T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",permalink:"/blog/kubectl-cheat-sheet",formattedDate:"December 15, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.235,date:"2023-12-15T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Using git checkout to switch branches",id:"using-git-checkout-to-switch-branches",level:2},{value:"Switch to an existing branch",id:"switch-to-an-existing-branch",level:3},{value:"Switch to a new branch",id:"switch-to-a-new-branch",level:3},{value:"Troubleshooting Branch Issues",id:"troubleshooting-branch-issues",level:2},{value:"Rescue the Detached HEAD State",id:"rescue-the-detached-head-state",level:3},{value:"Undoing a Commit",id:"undoing-a-commit",level:3},{value:"Recover a Deleted Branch",id:"recover-a-deleted-branch",level:3},{value:"Handling Unmerged Changes",id:"handling-unmerged-changes",level:3},{value:"Switching to a remote branch",id:"switching-to-a-remote-branch",level:3},{value:"Using git switch vs git checkout",id:"using-git-switch-vs-git-checkout",level:2},{value:"Why git switch was needed?",id:"why-git-switch-was-needed",level:3},{value:"Difference between git checkout and git reset",id:"difference-between-git-checkout-and-git-reset",level:2},{value:"Difference between git checkout and git restore",id:"difference-between-git-checkout-and-git-restore",level:2},{value:"Difference between git checkout and git Clone",id:"difference-between-git-checkout-and-git-clone",level:2},{value:"Branch Management Techniques",id:"branch-management-techniques",level:2},{value:"Performance Optimization in Branch Management",id:"performance-optimization-in-branch-management",level:2},{value:"Regular Branch Cleanup",id:"regular-branch-cleanup",level:3},{value:"Create Lightweight Branches",id:"create-lightweight-branches",level:3},{value:"Branch Change Success",id:"branch-change-success",level:3},{value:"Rebase Instead of Merge",id:"rebase-instead-of-merge",level:3},{value:"Repository Performance Monitoring",id:"repository-performance-monitoring",level:3},{value:"Using Shallow Clones",id:"using-shallow-clones",level:3}],u={toc:h},m="wrapper";function p(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on November 27, 2024, to add to update switching explanations for Git switch post.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"When working on a project, you usually work on more than one branch at a time. You also switch branches frequently based on priorities. Efficient branch switching is important to safely switch from one branch and commit your changes to the desired branch. The most famous command for switching branches has always been ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," however the newer versions of Git divided its features into specific commands. Today, we will go through different use cases and examples for using ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch"),". We will also go through some of the similar commands of Git. After reading this article, you will have strong knowledge of how to switch branches in Git and what are its companion commands."),(0,a.yg)("p",null,"Note that the command ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," is a multi-feature command which performs multiple functions like:"),(0,a.yg)("p",null,"\u2022 If it is a local branch or an explicit remote branch, it will switch to it\n\u2022 If it is a tracked path, reset it\n\u2022 If it is a remote branch, it will create a tracking branch and will switch to it\nLet's go through some examples of switching branches through ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout"),", and then we will touch upon the use of ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch"),"."),(0,a.yg)("p",null,"Switching between branches is one of the basic Git operations when one needs to work with multiple features. To switch to an already existing branch, use ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout branch_name"),". To create and switch to a new branch in one command, use ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout -b new_branch"),". For remote branches, first fetch the branch using ",(0,a.yg)("inlineCode",{parentName:"p"},"git fetch --all"),", then switch using ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout remote_branch_name"),". With newer versions of Git, ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch branch_name")," is an easier way to switch to another branch."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-git-checkout-to-switch-branches"},"Using git checkout to switch branches")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#troubleshooting-branch-issues"},"Troubleshooting Branch Issues")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-git-switch-vs-git-checkout"},"Using git switch vs git checkout")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#branch-management-techniques"},"Branch Management Techniques")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#performance-optimization-in-branch-management"},"Performance Optimization in Branch Management"))),(0,a.yg)("h2",{id:"using-git-checkout-to-switch-branches"},"Using git checkout to switch branches"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," command allows you to navigate between different branches created through the command ",(0,a.yg)("inlineCode",{parentName:"p"},"git branch"),". When you checkout a branch, it updates all the files in your working directory to match the version stored in that branch. It also informs Git to preserve all the new commits on that branch."),(0,a.yg)("p",null,"Let's try different versions of ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," command."),(0,a.yg)("h3",{id:"switch-to-an-existing-branch"},"Switch to an existing branch"),(0,a.yg)("p",null,"First, get the list of the branches through ",(0,a.yg)("inlineCode",{parentName:"p"},"git branch")),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image1.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,'The "',"*",'" shows your currently selected branch, which is "test_branch". Now let\'s switch to BranchB.'),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image2.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"To confirm the successful branch switch, execute ",(0,a.yg)("inlineCode",{parentName:"p"},"git branch")," and you will see that your current branch is now BranchB"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image3.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"switch-to-a-new-branch"},"Switch to a new branch"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout"),' command also comes with a "-b" argument which creates a new branch and automatically switches to it. Let\'s try it.'),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image4.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"The above example shows that the new branch created is the currently selected branch as well.\nWhen switching branch using ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," you might see an error as below."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image5.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"The above error appears when you have changed a file, and the branch that you are switching to also has changes for the same file too (from the latest merge point). Git will not allow switching branch until you do one of the following:"),(0,a.yg)("p",null,"\u2022 Use stash to locally stash your changes temporarily without commit\n\u2022 Force checkout, which will discard your local changes\n\u2022 Commit your changes, and then update this commit with extra changes (you can modify commits in Git until they are pushed)"),(0,a.yg)("h2",{id:"troubleshooting-branch-issues"},"Troubleshooting Branch Issues"),(0,a.yg)("p",null,"Allow me to share some tips on branch troubleshooting that will really help solve the common problems in a timely manner."),(0,a.yg)("h3",{id:"rescue-the-detached-head-state"},"Rescue the Detached HEAD State"),(0,a.yg)("p",null,"You will have a detached HEAD state when you checkout a commit that is not a branch. Here is how you solve this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create a new branch from the detached HEAD state:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git checkout -b <new-branch>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Or maybe you just want to switch back to an old branch:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git checkout <branch-name>\n")),(0,a.yg)("h3",{id:"undoing-a-commit"},"Undoing a Commit"),(0,a.yg)("p",null,"If you need to reset an unpublished commit, you can do:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To prepare changes in your working directory:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git reset --soft HEAD~1\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To discard changes:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git reset --hard HEAD~1\n")),(0,a.yg)("h3",{id:"recover-a-deleted-branch"},"Recover a Deleted Branch"),(0,a.yg)("p",null,"If you delete a branch by mistake, let's restore it with the reflog:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Find the commit hash where the branch that was deleted was pointing:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git reflog\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For the restoration of the branch:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git checkout -b <branch-name> <commit-hash>\n")),(0,a.yg)("h3",{id:"handling-unmerged-changes"},"Handling Unmerged Changes"),(0,a.yg)("p",null,"If you have any unmerged files and you wish to change branches:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Stash your changes:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git stash\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Switch branches:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git checkout <branch-name>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apply the stashed changes:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git stash apply\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"6. Check Branch Tracking Information:"),"\nUse this to see which remote branch your local branch is tracking:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git branch -vv\n")),(0,a.yg)("p",null,"This command gives you information about branches and their tracking status."),(0,a.yg)("h3",{id:"switching-to-a-remote-branch"},"Switching to a remote branch"),(0,a.yg)("p",null,"Switching between branches is one of the basic Git operations when one needs to work with multiple features. To switch to an already existing branch, use git checkout branch_name. To create and switch to a new branch in one command, use git checkout -b new_branch. For remote branches, first fetch the branch using git fetch --all, then switch using git checkout remote_branch_name. With newer versions of Git, git switch branch_name is an easier way to switch to another branch."),(0,a.yg)("p",null,"To checkout a remote branch, you will need to fetch the contents of the branch using ",(0,a.yg)("inlineCode",{parentName:"p"},"git fetch \u2013all")," first. Then use the same command ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout RemoteBranchName")," to switch to remote branch. You might have noticed that it is the same command used to switch to a local branch."),(0,a.yg)("p",null,"If you want to switch to a remote branch that does not exist as local branch in your local working directory, you can simply execute ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch remoteBranch"),". When Git is unable to find this branch in your local repository, it will assume that you want to checkout the respective remote branch with the same name. It will then create a local branch with the same name. It will also set up a tracking relationship between your remote and local branch so that ",(0,a.yg)("inlineCode",{parentName:"p"},"git pull")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"git push")," will work as intended."),(0,a.yg)("h2",{id:"using-git-switch-vs-git-checkout"},"Using git switch vs git checkout"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch")," command replaced ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," in 2020, although ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," is still a supported command. The ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout"),' command performs two functionalities; "switch branch" and "restore working tree files". To separate these two functionalities, Git introduced the ',(0,a.yg)("inlineCode",{parentName:"p"},"git switch"),' command, which replaces the "switch branch" feature of "git checkout".'),(0,a.yg)("h3",{id:"why-git-switch-was-needed"},"Why git switch was needed?"),(0,a.yg)("p",null,'Let\'s assume you have a file named "test.txt" and at the same time, you have a branch named "test". If you are on main branch and you want to checkout to branch "test", you would use the command "git checkout test" but this would checkout the file "test", this is where ',(0,a.yg)("inlineCode",{parentName:"p"},"git switch")," comes in."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch test"),' will switch to branch "test" even if you have a file "test"\n\u2022 ',(0,a.yg)("inlineCode",{parentName:"p"},"git restore"),' will discard uncommitted local changes in the file "test" even if you have a branch "test".'),(0,a.yg)("p",null,"Let's try this command."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image6.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"The above command works just the same way ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," switched branches.\nSwitching to a branch that does not exist will throw an error:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image7.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"To create a new branch and switch to it in one go, try the following example:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image8.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"To verify, just run the ",(0,a.yg)("inlineCode",{parentName:"p"},"git branch")," command to see if your current branch has been successfully switched to the newly created branch."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image9.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Another interesting argument of this command is ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch -"),". If you have to frequently switch between two branches and typing the branch name every time is cumbersome, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch -")," version, which switches to the previously checked out branch. Let's try."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image10.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"difference-between-git-checkout-and-git-reset"},"Difference between git checkout and git reset"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"git reset")," moves the current branch reference, whereas ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," just moves the head instead of the current branch reference.\n",(0,a.yg)("inlineCode",{parentName:"p"},"reset")," resets the index without changing the working tree. The below example will reset the index to match HEAD, without touching the working tree:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image11.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"Note that you will use reset to undo the staging of a modified file.\n",(0,a.yg)("inlineCode",{parentName:"p"},"checkout")," is mostly used with a branch, tag, or commit. It will reset HEAD and index to a specified commit, as well as perform the checkout of the index into the working tree at the same time. It is mostly used to discard the changes to your unstaged file(s)."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-20-git-switch/image12.png",alt:"git switch"})),(0,a.yg)("br",null),(0,a.yg)("p",null,"If your HEAD is currently set to the main branch, running ",(0,a.yg)("inlineCode",{parentName:"p"},"git reset 8e3f6r5"),' will point the main to "9e5e6a4". ',(0,a.yg)("inlineCode",{parentName:"p"},"Checkout")," on the other hand, changes the head itself."),(0,a.yg)("h2",{id:"difference-between-git-checkout-and-git-restore"},"Difference between git checkout and git restore"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"git restore")," was introduced when the functionality of ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," was broken into two separate commands ",(0,a.yg)("inlineCode",{parentName:"p"},"git switch")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"git restore"),". Apart from switching branches, ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," can also restore files to a specific commit state. This latter functionality has been extracted into ",(0,a.yg)("inlineCode",{parentName:"p"},"git restore"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"git restore")," restores the files in the working tree from index or any other commit you specify. You can also use it to restore files in index from some other commit. Note that it does not update your branch. You would use ",(0,a.yg)("inlineCode",{parentName:"p"},"git restore")," to revert non-committed changes. These changes can be in the form of the update in your working copy or the content in your index (i.e. staging area)."),(0,a.yg)("p",null,'The below command will restore "test.txt" in the index so that it matches the version in HEAD. Basically, you are telling Git to copy from HEAD to staging area / index, which is how Git reset works.\n',(0,a.yg)("inlineCode",{parentName:"p"},"git restore --staged test.txt")),(0,a.yg)("p",null,"If you want to restore both index and the working tree, then you would use the following version:\n",(0,a.yg)("inlineCode",{parentName:"p"},"git restore --source=HEAD --staged --worktree test.txt ")),(0,a.yg)("br",null),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://discord.gg/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.yg)("h2",{id:"difference-between-git-checkout-and-git-clone"},"Difference between git checkout and git Clone"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"git clone")," is used to fetch repositories you do not have. It will fetch your repositories from the remote git server. ",(0,a.yg)("inlineCode",{parentName:"p"},"git checkout")," is a powerful command with different uses, like switching branches in your current repository and restoring files file from a particular revision."),(0,a.yg)("h2",{id:"branch-management-techniques"},"Branch Management Techniques"),(0,a.yg)("p",null,"I thought I would share some advanced techniques on how to manage branches, which will streamline our workflow and keep the project organized."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Branch Naming Conventions:"),"\nBranch naming convention that is clear and consistent is important in projects with multiple contributors. So as to help us comprehend the meaning of each branch, and manage more effectively the project's process of development. Here are some common naming strategies:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Feature Branches:")," ",(0,a.yg)("inlineCode",{parentName:"li"},"feature/<feature-name>")," - New features, e.g., ",(0,a.yg)("inlineCode",{parentName:"li"},"feature/user-authentication"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Bug Fix Branches:")," ",(0,a.yg)("inlineCode",{parentName:"li"},"bugfix/<issue-number>")," - Used for fixing bugs, e.g., ",(0,a.yg)("inlineCode",{parentName:"li"},"bugfix/123-fix-login-error"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Release Branches:")," ",(0,a.yg)("inlineCode",{parentName:"li"},"release/<version>")," - Used for preparing a release, e.g., ",(0,a.yg)("inlineCode",{parentName:"li"},"release/1.0.0"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hotfix Branches:")," ",(0,a.yg)("inlineCode",{parentName:"li"},"hotfix/<issue-number>")," - For urgent fixes in production, e.g., ",(0,a.yg)("inlineCode",{parentName:"li"},"hotfix/456-patch-security-issue"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Using Pull Requests Effectively:"),"\nPull requests are one of the best ways to go over code changes and discuss them prior to merging with the main branch. Here are some tips:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Attempt to create a PR even for insignificant change."),(0,a.yg)("li",{parentName:"ul"},"Add a clear description and link to relevant issues."),(0,a.yg)("li",{parentName:"ul"},"Request reviews from the team members who are code-savvy."),(0,a.yg)("li",{parentName:"ul"},"Address the review comments quickly and update the PR.")),(0,a.yg)("h2",{id:"performance-optimization-in-branch-management"},"Performance Optimization in Branch Management"),(0,a.yg)("p",null,"I would like to share some insights into performance optimization in branch management with an attempt to streamline the workflow and improve efficiency."),(0,a.yg)("h3",{id:"regular-branch-cleanup"},"Regular Branch Cleanup"),(0,a.yg)("p",null,"The performance could be improved by cleaning the repository at regular intervals, deleting old or merged branches. It will prevent clutter, and it will be easy to spot the relevant branches."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"List merged branches:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git branch --merged\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Delete merged branches:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git branch -d <branch_name>\n")),(0,a.yg)("h3",{id:"create-lightweight-branches"},"Create Lightweight Branches"),(0,a.yg)("p",null,"Git branches are lightweight, so do keep them lean for better performance. Do not add large files directly to the branches."),(0,a.yg)("h3",{id:"branch-change-success"},"Branch Change Success"),(0,a.yg)("p",null,"Switching branches frequently can sometimes lead to performance issues, especially if there are uncommitted changes. To mitigate this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Stash changes before switching branches:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git stash\ngit checkout <branch-name>\ngit stash apply\n")),(0,a.yg)("h3",{id:"rebase-instead-of-merge"},"Rebase Instead of Merge"),(0,a.yg)("p",null,"Rebase can clean up the project history with moving or combining commits to make it easier for users to trace and can save performance of branch operations."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rebase the branch on top of the main branch:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git checkout <feature-branch>\ngit rebase main\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Lower Large File Changes:\nLarge files or binary files can slow down branch operations. Use Git LFS (Large File Storage) to efficiently handle large files.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Track a large file with Git LFS:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git lfs track <file>\n")),(0,a.yg)("h3",{id:"repository-performance-monitoring"},"Repository Performance Monitoring"),(0,a.yg)("p",null,"Monitor the performance of your repository on a regular basis to find possible bottlenecks."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Determine repository size:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"du -sh .git\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Reduce unnecessary items and optimize repository:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git gc --aggressive --prune=now\n")),(0,a.yg)("h3",{id:"using-shallow-clones"},"Using Shallow Clones"),(0,a.yg)("p",null,"Use shallow clones for large repositories to save network data and speed up the fetching."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Shallow clone with depth:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git clone --depth 1 <repository-url>\n")),(0,a.yg)("p",null,"These performance improvement techniques would help us hold an efficient and non-overburdened process of branch management."))}p.isMDXComponent=!0}}]);