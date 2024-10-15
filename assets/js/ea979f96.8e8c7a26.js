"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74997],{58860:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var a=n(37953);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),c=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=t,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||i;return n?a.createElement(d,o(o({ref:r},u),{},{components:n})):a.createElement(d,o({ref:r},u))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[g]="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73533:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>g});n(37953);var a=n(58860);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const s={title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",slug:"terraform-aws",authors:"shingai_zivuku",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-28-terraform-aws/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/terraform-aws",source:"@site/blog/2024-09-12-terraform-aws.md",title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",date:"2024-09-12T00:00:00.000Z",formattedDate:"September 12, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.73,hasTruncateMarker:!1,authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],frontMatter:{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",slug:"terraform-aws",authors:"shingai_zivuku",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-28-terraform-aws/social.png",hide_table_of_contents:!1},prevItem:{title:"GraphQL vs REST - Key Differences and Use Cases",permalink:"/blog/graphql-vs-rest"},nextItem:{title:"A Complete guide to pnpm",permalink:"/blog/how-to-use-pnpm"},relatedPosts:[{title:"An Introduction to Using FastAPI",description:"We'll be looking at FastAPI, a modern Python microframework that simplifies the creation of web APIs using Python programming.",permalink:"/blog/introduction-to-fast-api",formattedDate:"August 8, 2023",authors:[{name:"Obisike Treasure",title:"Software Developer",imageURL:"https://github.com/Otrex.png",key:"obisike_treause"}],readingTime:15.505,date:"2023-08-08T00:00:00.000Z"},{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"GraphQL vs REST - Key Differences and Use Cases",description:"We'll explore the key differences between GraphQL and REST, and discuss the use cases where each approach excels.",permalink:"/blog/graphql-vs-rest",formattedDate:"September 12, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:18.34,date:"2024-09-12T00:00:00.000Z"}],authorPosts:[]},u={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Account and Credentials",id:"aws-account-and-credentials",level:3},{value:"AWS CLI",id:"aws-cli",level:3},{value:"Terraform",id:"terraform",level:3},{value:"Configuring AWS Credentials",id:"configuring-aws-credentials",level:2},{value:"Access Keys and Secret Keys",id:"access-keys-and-secret-keys",level:3},{value:"~/.aws/credentials File",id:"awscredentials-file",level:3},{value:"Creating a Simple Configuration",id:"creating-a-simple-configuration",level:2},{value:"State Management in Terraform",id:"state-management-in-terraform",level:2},{value:"Terraform Workspaces for Multi-Environment Management",id:"terraform-workspaces-for-multi-environment-management",level:2},{value:"Security Best Practices",id:"security-best-practices",level:2},{value:"Automating Terraform with CI/CD Pipelines",id:"automating-terraform-with-cicd-pipelines",level:2},{value:"Handling Resource Dependencies",id:"handling-resource-dependencies",level:2},{value:"Modifying Infrastructure",id:"modifying-infrastructure",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2},{value:"Cost Estimation with Terraform",id:"cost-estimation-with-terraform",level:2},{value:"Managing Secrets and Sensitive Data",id:"managing-secrets-and-sensitive-data",level:2},{value:"Using Terraform Modules",id:"using-terraform-modules",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:g},m="wrapper";function d(e){var{components:r}=e,n=o(e,["components"]);return(0,a.yg)(m,i(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(r){t(e,r,n[r])}))}return e}({},p,n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on September 12, 2024, to add sections on State Management in Terraform, Using Terraform Modules, Managing Secrets and Sensitive Data, Workspaces for Multi-Environment Management, Security Best Practices, Automating Terraform with CI/CD, Handling Resource Dependencies, and Cost Estimation with Terraform.")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Managing infrastructure across multiple environments and regions can be an operational headache for teams as applications scale. Provisioning resources manually is boring and time-consuming while scripting the process requires significant engineering effort."),(0,a.yg)("p",null,"Infrastructure as code (IaC) tools like HashCorp's Terraform provides a compelling solution - allowing you to define reusable configurations for spinning up everything from storage buckets to Kubernetes clusters."),(0,a.yg)("p",null,"In this beginner's guide, I will walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS). I will cover the prerequisites, configuring access to AWS, writing a simple Terraform configuration, modifying your infrastructure, and then cleaning up."),(0,a.yg)("p",null,"Whether you're already using AWS or looking to explore it with an IaC approach, this article will equip you with the fundamentals for provisioning just about any infrastructure you need."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#configuring-aws-credentials"},"Configuring AWS Credentials")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#creating-a-simple-configuration"},"Creating a Simple Configuration")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#state-management-in-terraform"},"State Management in Terraform")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#terraform-workspaces-for-multi-environment-management"},"Terraform Workspaces for Multi-Environment Management")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#security-best-practices"},"Security Best Practices")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#automating-terraform-with-cicd-pipelines"},"Automating Terraform with CI/CD Pipelines")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#handling-resource-dependencies"},"Handling Resource Dependencies")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#modifying-infrastructure"},"Modifying Infrastructure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#cleaning-up"},"Cleaning Up")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#cost-estimation-with-terraform"},"Cost Estimation with Terraform")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#managing-secrets-and-sensitive-data"},"Managing Secrets and Sensitive Data")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-terraform-modules"},"Using Terraform Modules"))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"Before you can start using Terraform to manage infrastructure on AWS, you need a few prerequisites:"),(0,a.yg)("h3",{id:"aws-account-and-credentials"},"AWS Account and Credentials"),(0,a.yg)("p",null,"For this guide, you need an AWS account. Accounts are free to ",(0,a.yg)("a",{parentName:"p",href:"https://portal.aws.amazon.com/gp/aws/developer/registration/index.html"},"sign up")," for. As part of the account creation process, you will create a root user who has complete access to the account."),(0,a.yg)("p",null,"For security best practices, you will be creating an IAM user with more limited permissions for Terraform to use."),(0,a.yg)("p",null,"Once you have an AWS account, under the IAM service, create a new IAM user. Be sure to save the access key and secret access key. These keys will be used by Terraform to authenticate and interact with your AWS account."),(0,a.yg)("h3",{id:"aws-cli"},"AWS CLI"),(0,a.yg)("p",null,"The AWS CLI tool allows you to manage AWS services from the command line. Install this and configure it with your access keys for Terraform to provision resources."),(0,a.yg)("p",null,"Download and ",(0,a.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"install the CLI")," for your operating system. Once installed, run ",(0,a.yg)("inlineCode",{parentName:"p"},"aws configure")," and enter your access keys when prompted."),(0,a.yg)("h3",{id:"terraform"},"Terraform"),(0,a.yg)("p",null,"Finally, go to ",(0,a.yg)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/install?product_intent=terraform"},"terraform site")," and download the Terraform binary for your system. Terraform is distributed as a single binary, so once downloaded you can run Terraform commands from your terminal."),(0,a.yg)("p",null,"Be sure to add the Terraform binary to your PATH environment variable so it is accessible system-wide."),(0,a.yg)("h2",{id:"configuring-aws-credentials"},"Configuring AWS Credentials"),(0,a.yg)("p",null,"Now that you have your AWS account set up and Terraform installed, you need to ",(0,a.yg)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration"},"configure your access credentials")," for Terraform to use when interacting with AWS."),(0,a.yg)("p",null,"Here are some of the options for specifying credentials:"),(0,a.yg)("h3",{id:"access-keys-and-secret-keys"},"Access Keys and Secret Keys"),(0,a.yg)("p",null,"When you created your IAM user, AWS generated access and secret access keys for you. These keys act as username and password for programmatically interacting with AWS through their API."),(0,a.yg)("p",null,"You can pass these directly to Terraform through environment variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export AWS_ACCESS_KEY_ID=<your_access_key>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export AWS_SECRET_ACCESS_KEY=<your_secret_key>\n")),(0,a.yg)("p",null,"Terraform will check these environment variables when needing credentials."),(0,a.yg)("h3",{id:"awscredentials-file"},"~/.aws/credentials File"),(0,a.yg)("p",null,"Another option is to save your keys in a local AWS credentials file that AWS CLI checks by default:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"[default]\naws_access_key_id = <your_access_key>\naws_secret_access_key = <your_secret_key>\n")),(0,a.yg)("p",null,"This file is located at ",(0,a.yg)("inlineCode",{parentName:"p"},"~/.aws/credentials")," on Linux/macOS. Terraform automatically checks this file for credentials to use."),(0,a.yg)("p",null,"With credentials configured through either approach, Terraform is now ready to build infrastructure on your AWS account."),(0,a.yg)("h2",{id:"creating-a-simple-configuration"},"Creating a Simple Configuration"),(0,a.yg)("p",null,"Now that Terraform can access your AWS account, let's write your first Terraform configuration file to deploy infrastructure. Terraform code is written in HCL (HashCorp Configuration Language) syntax."),(0,a.yg)("p",null,"Configuration files end in ",(0,a.yg)("inlineCode",{parentName:"p"},".tf")," and define providers and resources. You will specify that you want to use AWS as your provider."),(0,a.yg)("p",null,"Following the ",(0,a.yg)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs"},"AWS provider")," documentation, create ",(0,a.yg)("inlineCode",{parentName:"p"},"main.tf")," with the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "us-east-1"\n}\n')),(0,a.yg)("p",null,"Then define an AWS EC2 resource instance:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'resource "aws_instance" "refine-dev" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n\n  tags = {\n    Name = "refine-dev"\n  }\n}\n')),(0,a.yg)("p",null,"This configures an EC2 instance in the us-east-1 region using a free Linux image. Put together, your configuration file should look like the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "us-east-1"\n}\n\nresource "aws_instance" "refine-dev" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n}\n')),(0,a.yg)("p",null,"With your provider and initial resource defined, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform init\n")),(0,a.yg)("p",null,"This will initialize your Terraform working directory complete with plugins for the AWS provider."),(0,a.yg)("p",null,"Then run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,a.yg)("p",null,"Terraform reads your config file and outlines what infrastructure it will create. If the plan looks good, it's time to apply."),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform apply")," and Terraform will call out to AWS and create the EC2 instance."),(0,a.yg)("h2",{id:"state-management-in-terraform"},"State Management in Terraform"),(0,a.yg)("p",null,"Terraform maintains a ",(0,a.yg)("strong",{parentName:"p"},"state file")," that tracks the infrastructure it manages. To ensure consistency and collaboration across teams, we can recommend storing this state file in a remote backend like ",(0,a.yg)("strong",{parentName:"p"},"AWS S3"),", which prevents conflicts when multiple team members are working on the same infrastructure."),(0,a.yg)("p",null,"Example of remote state configuration with S3:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  backend "s3" {\n    bucket = "my-terraform-state-bucket"\n    key    = "terraform.tfstate"\n    region = "us-west-2"\n  }\n}\n')),(0,a.yg)("p",null,"By configuring remote state, team members can access the same state file, avoiding overwrites."),(0,a.yg)("h2",{id:"terraform-workspaces-for-multi-environment-management"},"Terraform Workspaces for Multi-Environment Management"),(0,a.yg)("p",null,"A section on ",(0,a.yg)("strong",{parentName:"p"},"workspaces")," will show how users can manage different environments (dev, staging, production) within the same configuration. Workspaces allow Terraform to handle separate states for each environment without duplicating configuration files."),(0,a.yg)("p",null,"Example of using workspaces:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform workspace new dev\nterraform workspace new prod\nterraform workspace select dev\n")),(0,a.yg)("h2",{id:"security-best-practices"},"Security Best Practices"),(0,a.yg)("p",null,"It\u2019s important to highlight enforcing security best practices using ",(0,a.yg)("strong",{parentName:"p"},"IAM roles and policies"),". We could also introduce ",(0,a.yg)("strong",{parentName:"p"},"Terraform Sentinel")," to enforce security policies during the ",(0,a.yg)("inlineCode",{parentName:"p"},"plan")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"apply")," stages."),(0,a.yg)("p",null,"Example of assigning an IAM role to an EC2 instance:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_iam_instance_profile" "ec2_profile" {\n  name = "example_profile"\n  role = aws_iam_role.ec2_role.name\n}\n\nresource "aws_instance" "example" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n  iam_instance_profile = aws_iam_instance_profile.ec2_profile.name\n}\n')),(0,a.yg)("h2",{id:"automating-terraform-with-cicd-pipelines"},"Automating Terraform with CI/CD Pipelines"),(0,a.yg)("p",null,"Integrating Terraform into CI/CD pipelines like ",(0,a.yg)("strong",{parentName:"p"},"GitHub Actions")," or ",(0,a.yg)("strong",{parentName:"p"},"Jenkins")," will automate infrastructure deployments. A section could include a GitHub Actions workflow example that automates ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform plan")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,a.yg)("p",null,"Example of a GitHub Actions workflow:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"name: Terraform Apply\non:\n  push:\n    branches:\n      - main\n\njobs:\n  terraform:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Plan\n        run: terraform plan\n      - name: Terraform Apply\n        run: terraform apply -auto-approve\n")),(0,a.yg)("p",null,"This allows teams to automate infrastructure provisioning and management, ensuring faster, more reliable deployments."),(0,a.yg)("h2",{id:"handling-resource-dependencies"},"Handling Resource Dependencies"),(0,a.yg)("p",null,"While Terraform automatically manages resource dependencies, users may need to explicitly define dependencies in some cases. A section on using ",(0,a.yg)("inlineCode",{parentName:"p"},"depends_on")," will help clarify resource creation order."),(0,a.yg)("p",null,"Example of managing resource dependencies:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_instance" "web" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n}\n\nresource "aws_elb" "web_elb" {\n  depends_on = [aws_instance.web]\n  instances  = [aws_instance.web.id]\n}\n')),(0,a.yg)("h2",{id:"modifying-infrastructure"},"Modifying Infrastructure"),(0,a.yg)("p",null,"A key advantage of infrastructure as code is how you can evolve your stack over time through code changes."),(0,a.yg)("p",null,"Let's make a small update to your configuration by adding some AWS tags into your resource:"),(0,a.yg)("p",null,'resource "aws_instance" "refine-dev" {\nami = "ami-0fc5d935ebf8bc3bc"\ninstance_type = "t2.micro"'),(0,a.yg)("p",null,'tags = {\nName = "refine-dev"\n}\n}'),(0,a.yg)("p",null,"After saving this update in your Terraform file, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,a.yg)("p",null,"Terraform will output the changes needed to add these tags to your EC2 instance."),(0,a.yg)("p",null,"If they look good, apply with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,a.yg)("p",null,"Your instance will then be updated in place, adding a name to your instance:"),(0,a.yg)("p",null,"Terraform does this immutably by destroying the instance and recreating it, assigning it the same IP address throughout this process."),(0,a.yg)("p",null,"This immutable approach ensures consistency across updates and provides more visibility than manually editing existing resources in the AWS console."),(0,a.yg)("p",null,"By coding your infrastructure, you gain improved collaboration, version control integration, and automation capabilities for managing changes."),(0,a.yg)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,a.yg)("p",null,"Once you\u2019re done experimenting with your infrastructure, it's best practice to clean up the resources you've created so you don't incur unnecessary charges."),(0,a.yg)("p",null,"Terraform makes this very simple - just run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"terraform destroy\n")),(0,a.yg)("p",null,"Terraform will output all resources that will be destroyed and prompt for confirmation."),(0,a.yg)("p",null,"Type yes and Terraform will delete all the related infrastructure on AWS - EC2 instances, networking components, and security groups. Here, Terraform will delete your EC2 instance."),(0,a.yg)("p",null,"This is a key advantage over console-based provisioning. With all your infrastructure described in declarative config files, Terraform knows exactly what needs to be deleted based on the state. You don't have to manually track down orphaned resources or decompress tangled dependencies."),(0,a.yg)("p",null,"Properly cleaning up infrastructure keeps your accounts lean, extends the experience to production-grade workflows, and surfaces gaps in your understanding. Make sure to always destroy your test environments when finished experimenting!"),(0,a.yg)("p",null,"You can recreate your stack easily at any time by running ",(0,a.yg)("inlineCode",{parentName:"p"},"terraform apply"),". Your configuration code serves as the single source of truth."),(0,a.yg)("h2",{id:"cost-estimation-with-terraform"},"Cost Estimation with Terraform"),(0,a.yg)("p",null,"Finally, we could include a section on cost estimation using tools like ",(0,a.yg)("strong",{parentName:"p"},"Infracost"),". This helps users estimate the cost of infrastructure before deployment, preventing unexpected AWS bills."),(0,a.yg)("p",null,"Example of cost estimation with Infracost:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"infracost breakdown --path=./path_to_your_terraform\n")),(0,a.yg)("p",null,"This provides insight into the cost impact of infrastructure decisions."),(0,a.yg)("h2",{id:"managing-secrets-and-sensitive-data"},"Managing Secrets and Sensitive Data"),(0,a.yg)("p",null,"Handling secrets like AWS access keys securely is crucial. We can include a section on managing sensitive data using ",(0,a.yg)("strong",{parentName:"p"},"environment variables")," or ",(0,a.yg)("strong",{parentName:"p"},"AWS Secrets Manager"),". This ensures sensitive information isn\u2019t hardcoded in configuration files."),(0,a.yg)("p",null,"Example of using environment variables for secrets:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export AWS_ACCESS_KEY_ID=<your_access_key>\nexport AWS_SECRET_ACCESS_KEY=<your_secret_key>\n")),(0,a.yg)("p",null,"In the Terraform configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'variable "secret_key" {\n  type      = string\n  sensitive = true\n}\n')),(0,a.yg)("h2",{id:"using-terraform-modules"},"Using Terraform Modules"),(0,a.yg)("p",null,"Modules help you ",(0,a.yg)("strong",{parentName:"p"},"re-use and organize infrastructure code"),", which is particularly useful for repetitive tasks like setting up EC2 instances or VPCs. A section on creating and using modules will help users keep their code DRY (Don\u2019t Repeat Yourself)."),(0,a.yg)("p",null,"Example of using a module for EC2 instances:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hcl"},'module "ec2_instance" {\n  source        = "./modules/ec2"\n  instance_type = "t2.micro"\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  tags = {\n    Name = "refine-dev"\n  }\n}\n')),(0,a.yg)("p",null,"By reusing modules, users can create standardized components and avoid redundant code."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Through this getting started, hopefully, you now appreciate why contractors, startups, and enterprises alike are adopting IaC practices with Terraform. I touched on several benefits like configuration files serving as the single source of truth."),(0,a.yg)("p",null,"Need to recreate something from last month? Just reapply an old config commit instead of decoding tribal knowledge and runbooks. Changes systematically pass through pull requests and can integrate with CI/CD pipelines just like application code changes. No more snowflake production hotfixes!"),(0,a.yg)("p",null,"So, what's next for you? Start by version-controlling your Terraform configurations, making them accessible to your team, and gradually converting more of your cloud infrastructure to code. As you gain experience, you'll be ready to use Terraform to manage infrastructure for production applications."),(0,a.yg)("p",null,"Thanks for following along with this getting started guide - hopefully you\u2019re feeling empowered to start down the path of harnessing infrastructure as code! What will you build next?"))}d.isMDXComponent=!0}}]);