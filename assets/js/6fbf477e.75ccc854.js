"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2600],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(c,i(i({ref:n},d),{},{components:t})):r.createElement(c,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});t(37953);var r=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"multipart-upload",title:"Multipart Upload"},s=void 0,p={unversionedId:"advanced-tutorials/upload/multipart-upload",id:"advanced-tutorials/upload/multipart-upload",title:"Multipart Upload",description:"We will demonstrate how to perform a multipart upload with Refine.",source:"@site/docs/advanced-tutorials/upload/multipart-upload.md",sourceDirName:"advanced-tutorials/upload",slug:"/advanced-tutorials/upload/multipart-upload",permalink:"/docs/advanced-tutorials/upload/multipart-upload",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/main/documentation/docs/advanced-tutorials/upload/multipart-upload.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1733754224,formattedLastUpdatedAt:"Dec 9, 2024",frontMatter:{id:"multipart-upload",title:"Multipart Upload"},sidebar:"mainSidebar",previous:{title:"Base64 Upload",permalink:"/docs/advanced-tutorials/upload/base64-upload"},next:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/advanced-tutorials/web3/ethereum-signin"}},d={},u=[{value:"Create Form",id:"create-form",level:3},{value:"Edit Form",id:"edit-form",level:3},{value:"Uploading State",id:"uploading-state",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=m("DocThumbsUpDownFeedbackWidget"),c=m("CodeSandboxExample"),y={toc:u},h="wrapper";function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { Refine } from "@refinedev/core";\nimport { AuthPage, RefineThemes, ThemedLayoutV2, ErrorComponent, useNotificationProvider } from "@refinedev/antd";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router";\nimport { ConfigProvider } from "antd";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router";\nimport dataProvider from "@refinedev/simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nimport {\n    useMany as CoreUseMany,\n    useShow as RefineCoreUseShow,\n    useOne as RefineCoreUseOne,\n    useApiUrl as RefineCoreUseApiUrl,\n} from "@refinedev/core";\nimport {\n    List as RefineAntdList,\n    TextField as RefineAntdTextField,\n    useTable as RefineAntdUseTable,\n    EditButton as RefineAntdEditButton,\n    ShowButton as RefineAntdShowButton,\n    useForm as RefineAntdUseForm,\n    useSelect as RefineAntdUseSelect,\n    Create as RefineAntdCreate,\n    Edit as RefineAntdEdit,\n    Show as RefineAntdShow,\n    getValueFromEvent as RefineAntdGetValueFromEvent,\n} from "@refinedev/antd";\nimport {\n    Table as AntdTable,\n    Space as AntdSpace,\n    Form as AntdForm,\n    Select as AntdSelect,\n    Input as AntdInput,\n    Typography as AntdTypography,\n    Upload as AntdUpload,\n} from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps, sorter } = RefineAntdUseTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = CoreUseMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <RefineAntdList>\n            <AntdTable {...tableProps} rowKey="id">\n                <AntdTable.Column\n                    dataIndex="id"\n                    title="ID"\n                />\n                <AntdTable.Column dataIndex="title" title="Title" />\n                <AntdTable.Column\n                    dataIndex={["category", "id"]}\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <RefineAntdTextField value="Loading..." />;\n                        }\n\n                        return (\n                            <RefineAntdTextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <AntdTable.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <AntdSpace>\n                            <RefineAntdEditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <RefineAntdShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </AntdSpace>\n                    )}\n                />\n            </AntdTable>\n        </RefineAntdList>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = RefineAntdUseForm<IPost>();\n\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>(\n        {\n            resource: "categories",\n        },\n    );\n\n    const apiUrl = RefineCoreUseApiUrl();\n\n    return (\n        <RefineAntdCreate saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item label="Image">\n                    <AntdForm.Item\n                        name="image"\n                        valuePropName="fileList"\n                        getValueFromEvent={RefineAntdGetValueFromEvent}\n                        noStyle\n                    >\n                        <AntdUpload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </AntdUpload.Dragger>\n                    </AntdForm.Item>\n                </AntdForm.Item>\n            </AntdForm>\n        </RefineAntdCreate>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { formProps, saveButtonProps, query } =\n        RefineAntdUseForm<IPost>();\n\n    const postData = query?.data?.data;\n    const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>({\n        resource: "categories",\n        defaultValue: postData?.category.id,\n    });\n\n    const apiUrl = RefineCoreUseApiUrl();\n\n    return (\n        <RefineAntdEdit saveButtonProps={saveButtonProps}>\n            <AntdForm {...formProps} layout="vertical">\n                <AntdForm.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <AntdInput />\n                </AntdForm.Item>\n                <AntdForm.Item label="Image">\n                    <AntdForm.Item\n                        name="image"\n                        valuePropName="fileList"\n                        getValueFromEvent={RefineAntdGetValueFromEvent}\n                        noStyle\n                    >\n                        <AntdUpload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </AntdUpload.Dragger>\n                    </AntdForm.Item>\n                </Form.Item>\n            </AntdForm>\n        </RefineAntdEdit>\n    );\n};\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = RefineCoreUseShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        RefineCoreUseOne<ICategory>({\n            resource: "categories",\n            id: record?.category?.id || "",\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        <RefineAntdShow isLoading={isLoading}>\n            <AntdTypography.Title level={5}>Id</AntdTypography.Title>\n            <AntdTypography.Text>{record?.id}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>\n                AntdTypography.Title\n            </AntdTypography.Title>\n            <AntdTypography.Text>{record?.title}</AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Category</AntdTypography.Title>\n            <AntdTypography.Text>\n                {categoryIsLoading ? "Loading..." : categoryData?.data.title}\n            </AntdTypography.Text>\n\n            <AntdTypography.Title level={5}>Content</AntdTypography.Title>\n            <AntdTypography.Text>{record?.content}</AntdTypography.Text>\n        </RefineAntdShow>\n    );\n};\n')),(0,r.yg)("p",null,"We will demonstrate how to perform a multipart upload with ",(0,r.yg)("strong",{parentName:"p"},"Refine"),"."),(0,r.yg)("p",null,"Let's start with the ",(0,r.yg)("inlineCode",{parentName:"p"},"creation form")," first."),(0,r.yg)("h3",{id:"create-form"},"Create Form"),(0,r.yg)(g,{id:"create-form",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's add the image field to the post ",(0,r.yg)("inlineCode",{parentName:"p"},"creation form"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import {\n  // highlight-start\n  useApiUrl,\n  // highlight-end\n} from "@refinedev/core";\nimport {\n  // highlight-start\n  getValueFromEvent,\n  // highlight-end\n  Create,\n  useForm,\n} from "@refinedev/antd";\nimport {\n  // highlight-next-line\n  Upload,\n  Form,\n  Input,\n} from "antd";\n\nexport const PostCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  // highlight-next-line\n  const apiUrl = useApiUrl();\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item label="Image">\n          <Form.Item\n            name="image"\n            valuePropName="fileList"\n            // highlight-next-line\n            getValueFromEvent={getValueFromEvent}\n            noStyle\n          >\n            // highlight-start\n            <Upload.Dragger\n              name="file"\n              action={`${apiUrl}/media/upload`}\n              listType="picture"\n              maxCount={5}\n              multiple\n            >\n              <p className="ant-upload-text">Drag & drop a file in this area</p>\n            </Upload.Dragger>\n            // highlight-end\n          </Form.Item>\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  image: [\n    {\n      uid: string;\n      name: string;\n      url: string;\n      status: "error" | "success" | "done" | "uploading" | "removed";\n    },\n  ];\n}\n')),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"We can reach the API URL by using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-api-url"},(0,r.yg)("inlineCode",{parentName:"a"},"useApiUrl"))," hook.")),(0,r.yg)("p",null,"It will look like this."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173 previewHeight=600px",live:!0,previewOnly:!0,url:"http://localhost:5173",previewHeight:"600px"},'setInitialRoutes(["/posts/create"]);\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n              create: "/posts/create",\n              show: "/posts/show/:id",\n              edit: "/posts/edit/:id",\n            },\n          ]}\n          notificationProvider={useNotificationProvider}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route index element={<NavigateToResource />} />\n\n              <Route path="/posts">\n                <Route index element={<PostList />} />\n                <Route path="create" element={<PostCreate />} />\n                <Route path="edit/:id" element={<PostEdit />} />\n                <Route path="show/:id" element={<PostShow />} />\n              </Route>\n\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("p",null,"We currently require an upload endpoint that accepts multipart uploads. This address should be passed into the ",(0,r.yg)("inlineCode",{parentName:"p"},"action")," property of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Upload")," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n  "file": "binary"\n}\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This end-point should be ",(0,r.yg)("inlineCode",{parentName:"p"},"Content-type: multipart/form-data")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Form Data: file: binary"),".")),(0,r.yg)("p",null,"This end-point should respond similarly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n  "url": "https://example.com/uploaded-file.jpeg"\n}\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"We have to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"getValueFromEvent")," method to convert the uploaded files to ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/#UploadFile"},"Antd UploadFile")," object.")),(0,r.yg)("p",null,"This data is sent to the API when the form is submitted."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/posts"',title:'"[POST]','https://api.fake-rest.refine.dev/posts"':!0},'{\n  "title": "Test",\n  "image": [\n    {\n      "uid": "rc-upload-1620630541327-7",\n      "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n      "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n      "type": "image/jpeg",\n      "size": 70922,\n      "percent": 100,\n      "status": "done"\n    }\n  ]\n}\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The following data are required for the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/upload"},"Antd Upload")," component and all should be saved.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uid"),(0,r.yg)("td",{parentName:"tr",align:null},"Unique id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"File Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"Download URL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},"error, success, done, uploading, removed"))))),(0,r.yg)("h3",{id:"edit-form"},"Edit Form"),(0,r.yg)(g,{id:"edit-form",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's add the image field to the post editing form."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/edit.tsx"',title:'"pages/posts/edit.tsx"'},'import {\n  // highlight-start\n  useApiUrl,\n  // highlight-end\n} from "@refinedev/core";\nimport {\n  // highlight-start\n  getValueFromEvent,\n  // highlight-end\n  Edit,\n  useForm,\n} from "@refinedev/antd";\nimport {\n  // highlight-next-line\n  Upload,\n  Form,\n  Input,\n} from "antd";\n\nexport const PostEdit: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  // highlight-next-line\n  const apiUrl = useApiUrl();\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item label="Image">\n          <Form.Item\n            name="image"\n            valuePropName="fileList"\n            // highlight-next-line\n            getValueFromEvent={getValueFromEvent}\n            noStyle\n          >\n            // highlight-start\n            <Upload.Dragger\n              name="file"\n              action={`${apiUrl}/media/upload`}\n              listType="picture"\n              maxCount={5}\n              multiple\n            >\n              <p className="ant-upload-text">Drag & drop a file in this area</p>\n            </Upload.Dragger>\n            // highlight-end\n          </Form.Item>\n        </Form.Item>\n      </Form>\n    </Edit>\n  );\n};\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173 previewHeight=600px",live:!0,previewOnly:!0,url:"http://localhost:5173",previewHeight:"600px"},'setInitialRoutes(["/posts/edit/111"]);\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n              create: "/posts/create",\n              show: "/posts/show/:id",\n              edit: "/posts/edit/:id",\n            },\n          ]}\n          notificationProvider={useNotificationProvider}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route index element={<NavigateToResource />} />\n\n              <Route path="/posts">\n                <Route index element={<PostList />} />\n                <Route path="create" element={<PostCreate />} />\n                <Route path="edit/:id" element={<PostEdit />} />\n                <Route path="show/:id" element={<PostShow />} />\n              </Route>\n\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("p",null,"The request, like the one below, is sent for the edit form."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="[GET] https://api.fake-rest.refine.dev/posts/1"',title:'"[GET]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n  "id": 1,\n  "title": "Test",\n  "image": [\n    {\n      "uid": "rc-upload-1620630541327-7",\n      "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n      "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n      "type": "image/jpeg",\n      "size": 70922,\n      "percent": 100,\n      "status": "done"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"This data is sent to the API when form is submitted."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="[PUT] https://api.fake-rest.refine.dev/posts/1"',title:'"[PUT]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n  "title": "Test",\n  "image": [\n    {\n      "uid": "rc-upload-1620630541327-7",\n      "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n      "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n      "type": "image/jpeg",\n      "size": 70922,\n      "percent": 100,\n      "status": "done"\n    }\n  ]\n}\n'))),(0,r.yg)("h3",{id:"uploading-state"},"Uploading State"),(0,r.yg)(g,{id:"uploading-state",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,'You may want to disable the "Save" button in the form while the upload is going on. To do this, you can use the ',(0,r.yg)("inlineCode",{parentName:"p"},"useFileUploadState")," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useApiUrl } from "@refinedev/core";\nimport {\n  getValueFromEvent,\n  // highlight-next-line\n  useFileUploadState,\n  Create,\n  useForm,\n} from "@refinedev/antd";\nimport { Upload, Form, Input } from "antd";\n\nexport const PostCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = useForm<IPost>();\n\n  // highlight-next-line\n  const { isLoading, onChange } = useFileUploadState();\n\n  const apiUrl = useApiUrl();\n\n  return (\n    <Create\n      // highlight-start\n      saveButtonProps={{\n        ...saveButtonProps,\n        disabled: isLoading,\n      }}\n      // highlight-end\n    >\n      <Form {...formProps} layout="vertical">\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item label="Image">\n          <Form.Item\n            name="image"\n            valuePropName="fileList"\n            getValueFromEvent={getValueFromEvent}\n            noStyle\n          >\n            <Upload.Dragger\n              name="file"\n              action={`${apiUrl}/media/upload`}\n              listType="picture"\n              maxCount={5}\n              multiple\n              // highlight-next-line\n              onChange={onChange}\n            >\n              <p className="ant-upload-text">Drag & drop a file in this area</p>\n            </Upload.Dragger>\n          </Form.Item>\n        </Form.Item>\n      </Form>\n    </Create>\n  );\n};\n'))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(c,{path:"upload-antd-multipart",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);