(globalThis.webpackChunkaem_explorer=globalThis.webpackChunkaem_explorer||[]).push([[179],{"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/components/aem-link/aem-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,AemLink:()=>AemLink});var _aem_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/aem-link/aem-link.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Aem Link",component:_aem_link__WEBPACK_IMPORTED_MODULE_0__.u,argTypes:{}},AemLink=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_aem_link__WEBPACK_IMPORTED_MODULE_0__.u,{...args})).bind({});AemLink.args={text:"PackMgr",pathname:"/content/en.html"},AemLink.parameters={storySource:{source:"(\n  args: AemLinkProps\n) => <AemLinkComponent {...args} />"},...AemLink.parameters}},"./src/components/current-page-mode/current-page-mode.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurrentPageMode:()=>current_page_mode_stories_CurrentPageMode,default:()=>current_page_mode_stories});var ButtonGroup=__webpack_require__("./node_modules/@mui/material/ButtonGroup/ButtonGroup.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),theme_context=__webpack_require__("./src/contexts/theme-context.tsx"),use_aem_page=__webpack_require__("./src/hooks/use-aem-page.ts"),get_current_tab=__webpack_require__("./src/utils/get-current-tab.ts"),is_tab=__webpack_require__("./src/utils/is-tab.ts"),section=__webpack_require__("./src/components/section/section.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CurrentPageMode=()=>{const{theme}=(0,theme_context.TC)(),{openAemPage}=(0,use_aem_page.R)(),openInPageMode=async pageMode=>{const path=await(async()=>{const tab=await(0,get_current_tab.n)();if(!(0,is_tab.w)(tab))return Promise.resolve(null);const url=new URL(tab.url);if(url.pathname.startsWith("/mnt/overlay/wcm/core/content/sites/properties.html")){const path=`${url.pathname}${url.search}`.replace("/mnt/overlay/wcm/core/content/sites/properties.html?item=","");return Promise.resolve(path)}if(url.pathname.startsWith("/crx/de/index.jsp")){const path=url.hash.substring(1);return Promise.resolve(path)}const path=url.pathname.replace("/editor.html","").replace(".html","");return Promise.resolve(path)})();if(null===path)return;const pathname=((pageMode,path)=>"crxde"===pageMode?`/crx/de/index.jsp#${path}`:"properties"===pageMode?`/mnt/overlay/wcm/core/content/sites/properties.html?item=${path}`:`/editor.html${path}.html`)(pageMode,path);openAemPage(pathname)};return(0,jsx_runtime.jsxs)(section.$,{children:[(0,jsx_runtime.jsx)(section.$.Title,{children:"Open current path in"}),(0,jsx_runtime.jsxs)(ButtonGroup.Z,{fullWidth:!0,size:"compact"===theme.size?"small":"medium",children:[(0,jsx_runtime.jsx)(Tooltip.Z,{title:"Open current page in Edit mode",children:(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>openInPageMode("edit"),children:"Edit"})}),(0,jsx_runtime.jsx)(Tooltip.Z,{title:"Open current page in CRXDE",children:(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>openInPageMode("crxde"),children:"CRXDE"})}),(0,jsx_runtime.jsx)(Tooltip.Z,{title:"Open page properties for the current page",children:(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>openInPageMode("properties"),children:"Properties"})})]})]})};try{CurrentPageMode.displayName="CurrentPageMode",CurrentPageMode.__docgenInfo={description:"",displayName:"CurrentPageMode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/current-page-mode/current-page-mode.tsx#CurrentPageMode"]={docgenInfo:CurrentPageMode.__docgenInfo,name:"CurrentPageMode",path:"src/components/current-page-mode/current-page-mode.tsx#CurrentPageMode"})}catch(__react_docgen_typescript_loader_error){}const current_page_mode_stories={title:"Current Page Mode",component:CurrentPageMode,argTypes:{}},current_page_mode_stories_CurrentPageMode=(()=>(0,jsx_runtime.jsx)(CurrentPageMode,{})).bind({});current_page_mode_stories_CurrentPageMode.args={},current_page_mode_stories_CurrentPageMode.parameters={storySource:{source:"() => (\n  <CurrentPageModeComponent />\n)"},...current_page_mode_stories_CurrentPageMode.parameters}},"./src/components/footer/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>footer_stories_Footer,default:()=>footer_stories});var AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),DarkMode=__webpack_require__("./node_modules/@mui/icons-material/DarkMode.js"),LightMode=__webpack_require__("./node_modules/@mui/icons-material/LightMode.js"),UnfoldLess=__webpack_require__("./node_modules/@mui/icons-material/UnfoldLess.js"),UnfoldMore=__webpack_require__("./node_modules/@mui/icons-material/UnfoldMore.js"),theme_context=__webpack_require__("./src/contexts/theme-context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Footer=()=>{const{theme,toggleThemeSize,toggleThemeColor}=(0,theme_context.TC)();return(0,jsx_runtime.jsx)(AppBar.Z,{position:"sticky",color:"primary",sx:{top:"auto",bottom:0},children:(0,jsx_runtime.jsxs)(Toolbar.Z,{children:[(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,jsx_runtime.jsx)("img",{src:"icons/icon-128.png",alt:"AEM Explorer logo",width:"20",height:"20"}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",children:"AEM Explorer"})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{flexGrow:1}}),(0,jsx_runtime.jsx)(Tooltip.Z,{title:`Switch to\n            ${"dark"===theme.color?"light":"dark"}\n          theme`,children:(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",color:"inherit",onClick:()=>toggleThemeColor(),children:"light"===theme.color?(0,jsx_runtime.jsx)(LightMode.Z,{}):(0,jsx_runtime.jsx)(DarkMode.Z,{})})}),(0,jsx_runtime.jsx)(Tooltip.Z,{title:`Switch to ${"comfortable"===theme.size?"compact":"comfortable"} theme`,children:(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",color:"inherit",onClick:()=>toggleThemeSize(),children:"comfortable"===theme.size?(0,jsx_runtime.jsx)(UnfoldMore.Z,{}):(0,jsx_runtime.jsx)(UnfoldLess.Z,{})})})]})})};const footer_stories={title:"Footer",component:Footer,argTypes:{}},footer_stories_Footer=(()=>(0,jsx_runtime.jsx)(Footer,{})).bind({});footer_stories_Footer.args={},footer_stories_Footer.parameters={storySource:{source:"() => (\n  <FooterComponent />\n)"},...footer_stories_Footer.parameters}},"./src/components/header/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Header:()=>header_stories_Header,default:()=>header_stories});var AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Switch=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),open_in_new_tab_context=__webpack_require__("./src/contexts/open-in-new-tab-context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=()=>{const{openInNewTab,toggleOpenInNewTab}=(0,open_in_new_tab_context.K6)();return(0,jsx_runtime.jsx)(AppBar.Z,{position:"sticky",color:"primary",children:(0,jsx_runtime.jsxs)(Toolbar.Z,{variant:"dense",children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{sx:{mx:2},control:(0,jsx_runtime.jsx)(Switch.Z,{size:"small",color:"default",checked:openInNewTab,onChange:()=>toggleOpenInNewTab()}),label:"Open in new tab"}),(0,jsx_runtime.jsx)(Box.Z,{sx:{flexGrow:1}})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/header/header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/header/header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}const header_stories={title:"Header",component:Header,argTypes:{}},header_stories_Header=(()=>(0,jsx_runtime.jsx)(Header,{})).bind({});header_stories_Header.args={},header_stories_Header.parameters={storySource:{source:"() => (\n  <HeaderComponent />\n)"},...header_stories_Header.parameters}},"./src/components/links/links.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GroupWithTitle:()=>GroupWithTitle,GroupWithoutTitle:()=>GroupWithoutTitle,MultipleGroups:()=>MultipleGroups,default:()=>links_stories});var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),theme_context=__webpack_require__("./src/contexts/theme-context.tsx"),section=__webpack_require__("./src/components/section/section.tsx"),aem_link=__webpack_require__("./src/components/aem-link/aem-link.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Links=({linksGroups})=>{const{theme}=(0,theme_context.TC)();return(0,jsx_runtime.jsx)(section.$,{children:linksGroups.map((({title,id,links})=>(0,jsx_runtime.jsxs)(Box.Z,{sx:{mb:2,"&:last-child":{mb:0}},children:["comfortable"===theme.size&&(0,jsx_runtime.jsx)(Typography.Z,{variant:"body1",component:"h3",sx:{mb:1},children:title}),(0,jsx_runtime.jsx)(Stack.Z,{spacing:2,direction:"row",children:links.map((({pathname,label})=>(0,jsx_runtime.jsx)(aem_link.u,{pathname,text:label},pathname)))})]},id)))})};try{Links.displayName="Links",Links.__docgenInfo={description:"",displayName:"Links",props:{linksGroups:{defaultValue:null,description:"",name:"linksGroups",required:!0,type:{name:"{ id: string; title?: string | undefined; links: { pathname: string; label: string; }[]; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/links/links.tsx#Links"]={docgenInfo:Links.__docgenInfo,name:"Links",path:"src/components/links/links.tsx#Links"})}catch(__react_docgen_typescript_loader_error){}const links_stories={title:"Links",component:Links,argTypes:{}},Template=args=>(0,jsx_runtime.jsx)(Links,{...args}),groupWithTitle={title:"Group title",id:"group-with-title",links:[{pathname:"/path/1",label:"First link"},{pathname:"/path/2",label:"Second link"}]},groupWithoutTitle={id:"group-without-title",links:[{pathname:"/path/1",label:"First link"},{pathname:"/path/2",label:"Second link"},{pathname:"/path/3",label:"Third link"}]},GroupWithTitle=Template.bind({});GroupWithTitle.args={linksGroups:[groupWithTitle]};const GroupWithoutTitle=Template.bind({});GroupWithoutTitle.args={linksGroups:[groupWithoutTitle]};const MultipleGroups=Template.bind({});MultipleGroups.args={linksGroups:[groupWithoutTitle,groupWithTitle]},GroupWithTitle.parameters={storySource:{source:"(args: LinksProps) => (\n  <LinksComponent {...args} />\n)"},...GroupWithTitle.parameters},GroupWithoutTitle.parameters={storySource:{source:"(args: LinksProps) => (\n  <LinksComponent {...args} />\n)"},...GroupWithoutTitle.parameters},MultipleGroups.parameters={storySource:{source:"(args: LinksProps) => (\n  <LinksComponent {...args} />\n)"},...MultipleGroups.parameters}},"./src/components/mode/mode.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mode:()=>mode_stories_Mode,default:()=>mode_stories});var ToggleButton=__webpack_require__("./node_modules/@mui/material/ToggleButton/ToggleButton.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js");const wcmModes=["disabled","touch","preview","design"];var react=__webpack_require__("./node_modules/react/index.js"),open_in_new_tab_context=__webpack_require__("./src/contexts/open-in-new-tab-context.tsx"),get_current_tab=__webpack_require__("./src/utils/get-current-tab.ts");var is_tab=__webpack_require__("./src/utils/is-tab.ts"),open_url=__webpack_require__("./src/utils/open-url.ts");const getDisabledWcmUrl=tab=>{const url=new URL(tab.url),searchParams=new URLSearchParams(url.search);return searchParams.set("wcmmode","disabled"),url.search=searchParams.toString(),url.pathname.startsWith("/editor.html")&&(url.pathname=url.pathname.replace("/editor.html","")),url.toString()},previewCookies=[{name:"wcmmode",value:"preview"},{name:"cq-editor-layer.page",value:"Preview"},{name:"cq-editor-sidepanel",value:"closed"}],touchCookies=[{name:"wcmmode",value:"edit"},{name:"cq-editor-layer.page",value:"Edit"}],setCookies=async(tab,cookies)=>{const url=(tab=>{const{protocol,hostname}=new URL(tab.url);return`${protocol}//${hostname}`})(tab),pending=cookies.map((({name,value})=>chrome.cookies.set({url,path:"/",name,value})));return Promise.all(pending)},getModeUrl=(tab,mode)=>{const url=new URL(tab.url),searchParams=new URLSearchParams(url.search);return"touch"===mode||null===mode?searchParams.delete("wcmmode"):searchParams.set("wcmmode",mode),url.search=searchParams.toString(),url.pathname.startsWith("/editor.html")||(url.pathname=`/editor.html${url.pathname}`),url.toString()},setWcmMode=async(mode,openInNewTab=!1)=>{const tab=await(0,get_current_tab.n)();(0,is_tab.w)(tab)&&("disabled"!==mode?("preview"===mode&&await setCookies(tab,previewCookies),"touch"===mode&&await setCookies(tab,touchCookies),(0,open_url.Y)({tabId:tab.id,url:getModeUrl(tab,mode),openInNewTab})):((tab,openInNewTab=!1)=>{(0,open_url.Y)({tabId:tab.id,url:getDisabledWcmUrl(tab),openInNewTab})})(tab,openInNewTab))},useCurrentWcmMode=()=>{const{openInNewTab}=(0,open_in_new_tab_context.K6)(),[currentWcmMode,setCurrentWcmMode]=(0,react.useState)(null);(0,react.useEffect)((()=>{(async()=>{const{url}=await(0,get_current_tab.n)();if(void 0===url)return Promise.resolve(null);const{search}=new URL(url),mode=new URLSearchParams(search).get("wcmmode");return null===mode?Promise.resolve("touch"):(el=mode,wcmModes.includes(el)?Promise.resolve(mode):Promise.resolve(null));var el})().then((mode=>setCurrentWcmMode(mode)))}),[]);return{currentWcmMode,handleWcmModeChange:mode=>{setCurrentWcmMode(mode),setWcmMode(mode,openInNewTab)}}};var section=__webpack_require__("./src/components/section/section.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const modeNames={disabled:"Disabled",touch:"Edit",preview:"Preview",design:"Design"},modeTooltips={disabled:"WCM disabled",touch:"WCM in edit mode",preview:"WCM in preview mode",design:"WCM in design mode"},Mode=()=>{const{currentWcmMode,handleWcmModeChange}=useCurrentWcmMode();return(0,jsx_runtime.jsxs)(section.$,{children:[(0,jsx_runtime.jsx)(section.$.Title,{children:"WCM mode"}),(0,jsx_runtime.jsx)(section.$.Buttons,{value:currentWcmMode,onChange:mode=>handleWcmModeChange(mode),children:wcmModes.map((mode=>(0,jsx_runtime.jsx)(ToggleButton.Z,{value:mode,children:(0,jsx_runtime.jsx)(Tooltip.Z,{title:modeTooltips[mode],children:(0,jsx_runtime.jsx)("span",{children:modeNames[mode]})})},mode)))})]})};try{Mode.displayName="Mode",Mode.__docgenInfo={description:"",displayName:"Mode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/mode/mode.tsx#Mode"]={docgenInfo:Mode.__docgenInfo,name:"Mode",path:"src/components/mode/mode.tsx#Mode"})}catch(__react_docgen_typescript_loader_error){}const mode_stories={title:"Mode",component:Mode,argTypes:{}},mode_stories_Mode=(()=>(0,jsx_runtime.jsx)(Mode,{})).bind({});mode_stories_Mode.args={},mode_stories_Mode.parameters={storySource:{source:"() => <ModeComponent />"},...mode_stories_Mode.parameters}},"./.storybook/preview.tsx-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:()=>decorators,globalTypes:()=>globalTypes,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),theme_context=(__webpack_require__("./node_modules/@fontsource/roboto/300.css"),__webpack_require__("./node_modules/@fontsource/roboto/400.css"),__webpack_require__("./node_modules/@fontsource/roboto/500.css"),__webpack_require__("./node_modules/@fontsource/roboto/700.css"),__webpack_require__("./src/contexts/theme-context.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},globalTypes={themeColor:{name:"Theme color",description:"Global theme color",defaultValue:"dark",toolbar:{icon:"paintbrush",items:["light","dark"],showName:!0}},themeSize:{name:"Theme size",description:"Global theme size",defaultValue:"comfortable",toolbar:{icon:"zoom",items:["compact","comfortable"],showName:!0}}},decorators=[(Story,context)=>{const{themeSize,themeColor}=context.globals;return(0,jsx_runtime.jsx)(theme_context.Ni.Provider,{value:{theme:{color:themeColor,size:themeSize},toggleThemeSize:()=>{},toggleThemeColor:()=>{}},children:(0,jsx_runtime.jsx)(Story,{...context})})},(Story,context)=>{const themeColor={light:{palette:{mode:"light"}},dark:{palette:{mode:"dark"}}}[context.globals.themeColor];return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:(0,createTheme.Z)(themeColor),children:(0,jsx_runtime.jsx)(Box.Z,{sx:{minWidth:"calc(100vw - 2em)",minHeight:"calc(100vh - 2em)",bgcolor:"background.paper",p:"1em"},children:(0,jsx_runtime.jsx)(Story,{...context})})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/aem-link/aem-link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>AemLink});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_contexts_theme_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/contexts/theme-context.tsx"),_hooks_use_aem_page__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/use-aem-page.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AemLink=({pathname,text})=>{const{openAemPage}=(0,_hooks_use_aem_page__WEBPACK_IMPORTED_MODULE_1__.R)(),{theme}=(0,_contexts_theme_context__WEBPACK_IMPORTED_MODULE_0__.TC)(),buttonStyles="compact"===theme.size?{px:.75,py:.125}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{size:"small",sx:{...buttonStyles},variant:"contained",onClick:()=>openAemPage(pathname),children:text},pathname)};try{AemLink.displayName="AemLink",AemLink.__docgenInfo={description:"",displayName:"AemLink",props:{pathname:{defaultValue:null,description:"",name:"pathname",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/aem-link/aem-link.tsx#AemLink"]={docgenInfo:AemLink.__docgenInfo,name:"AemLink",path:"src/components/aem-link/aem-link.tsx#AemLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/section/section.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Section});var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js"),_contexts_theme_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/contexts/theme-context.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Section=({children})=>{const{theme}=(0,_contexts_theme_context__WEBPACK_IMPORTED_MODULE_0__.TC)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:{px:2,py:1,mb:"compact"===theme.size?1:2},children})};Section.Title=({children})=>{const{theme}=(0,_contexts_theme_context__WEBPACK_IMPORTED_MODULE_0__.TC)();return"compact"===theme.size?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{variant:"subtitle1",component:"h2",sx:{mb:1},children})})},Section.Buttons=({children,value,onChange})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{size:"small",color:"primary",value,exclusive:!0,fullWidth:!0,onChange:(event,nextValue)=>onChange(nextValue),children});try{Section.displayName="Section",Section.__docgenInfo={description:"",displayName:"Section",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/section/section.tsx#Section"]={docgenInfo:Section.__docgenInfo,name:"Section",path:"src/components/section/section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}try{Section.Buttons.displayName="Section.Buttons",Section.Buttons.__docgenInfo={description:"",displayName:"Section.Buttons",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"{} | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/section/section.tsx#Section.Buttons"]={docgenInfo:Section.Buttons.__docgenInfo,name:"Section.Buttons",path:"src/components/section/section.tsx#Section.Buttons"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/open-in-new-tab-context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K6:()=>useOpenInNewTabContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react/jsx-runtime.js");const OpenInNewTabContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({openInNewTab:!1,toggleOpenInNewTab:()=>{}}),OpenInNewTabContextProvider=({children})=>{const[openInNewTab,setOpenInNewTab]=useState(!1);useEffect((()=>{var _chrome$storage;null===(_chrome$storage=chrome.storage)||void 0===_chrome$storage||_chrome$storage.sync.get("aemExplorerOpenInNewTab",(result=>{const savedOpenInNewTab=result.aemExplorerOpenInNewTab||!1;setOpenInNewTab(savedOpenInNewTab)}))}),[]),useEffect((()=>{var _chrome$storage2;null===(_chrome$storage2=chrome.storage)||void 0===_chrome$storage2||_chrome$storage2.sync.set({aemExplorerOpenInNewTab:openInNewTab})}),[openInNewTab]);const toggleOpenInNewTab=()=>{setOpenInNewTab((newTab=>!newTab))},value=useMemo((()=>({openInNewTab,toggleOpenInNewTab})),[openInNewTab]);return _jsx(OpenInNewTabContext.Provider,{value,children})},useOpenInNewTabContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(OpenInNewTabContext);try{OpenInNewTabContextProvider.displayName="OpenInNewTabContextProvider",OpenInNewTabContextProvider.__docgenInfo={description:"",displayName:"OpenInNewTabContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/open-in-new-tab-context.tsx#OpenInNewTabContextProvider"]={docgenInfo:OpenInNewTabContextProvider.__docgenInfo,name:"OpenInNewTabContextProvider",path:"src/contexts/open-in-new-tab-context.tsx#OpenInNewTabContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/theme-context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ni:()=>ThemeContext,TC:()=>useThemeContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react/jsx-runtime.js");const light={palette:{mode:"light"}},dark={palette:{mode:"dark"}},initialState={size:"compact",color:"dark"},ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:initialState,toggleThemeSize:()=>{},toggleThemeColor:()=>{}}),themeReducer=(state,action)=>{switch(action.type){case"reset":return action.payload;case"size":return{...state,size:action.payload};case"color":return{...state,color:action.payload};default:return state}},ThemeContextProvider=({children})=>{const[theme,themeDispatch]=useReducer(themeReducer,initialState);useEffect((()=>{var _chrome$storage;null===(_chrome$storage=chrome.storage)||void 0===_chrome$storage||_chrome$storage.sync.get("aemExplorerTheme",(result=>{const savedTheme=result.aemExplorerTheme;savedTheme&&themeDispatch({type:"reset",payload:savedTheme})}))}),[]),useEffect((()=>{var _chrome$storage2;null===(_chrome$storage2=chrome.storage)||void 0===_chrome$storage2||_chrome$storage2.sync.set({aemExplorerTheme:theme})}),[theme]);const toggleThemeSize=()=>{themeDispatch({type:"size",payload:"comfortable"===theme.size?"compact":"comfortable"})},toggleThemeColor=()=>{themeDispatch({type:"color",payload:"light"===theme.color?"dark":"light"})},value=useMemo((()=>({theme,toggleThemeSize,toggleThemeColor})),[theme]);return _jsx(ThemeProvider,{theme:"dark"===theme.color?createTheme(dark):createTheme(light),children:_jsx(ThemeContext.Provider,{value,children})})},useThemeContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);try{ThemeContextProvider.displayName="ThemeContextProvider",ThemeContextProvider.__docgenInfo={description:"",displayName:"ThemeContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/theme-context.tsx#ThemeContextProvider"]={docgenInfo:ThemeContextProvider.__docgenInfo,name:"ThemeContextProvider",path:"src/contexts/theme-context.tsx#ThemeContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/use-aem-page.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useAemPage});var _utils_get_current_tab__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/get-current-tab.ts"),_utils_is_tab__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/is-tab.ts"),_utils_open_url__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/open-url.ts"),_contexts_open_in_new_tab_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/contexts/open-in-new-tab-context.tsx");const useAemPage=()=>{const{openInNewTab}=(0,_contexts_open_in_new_tab_context__WEBPACK_IMPORTED_MODULE_0__.K6)();return{openAemPage:async pathname=>{const tab=await(0,_utils_get_current_tab__WEBPACK_IMPORTED_MODULE_1__.n)();if(!(0,_utils_is_tab__WEBPACK_IMPORTED_MODULE_2__.w)(tab))return;const{origin}=new URL(tab.url),url=`${origin}${pathname}`;(0,_utils_open_url__WEBPACK_IMPORTED_MODULE_3__.Y)({tabId:tab.id,url,openInNewTab})}}}},"./src/utils/get-current-tab.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>getCurrentTab});const getCurrentTab=async()=>{if(void 0===chrome.tabs)return Promise.resolve(((tab={})=>({id:0,groupId:0,windowId:0,index:0,url:"http://localhost:4502/content/en.html",pinned:!1,highlighted:!1,active:!1,incognito:!1,selected:!1,discarded:!1,autoDiscardable:!1,...tab}))({url:window.location.href}));const[tab]=await chrome.tabs.query({active:!0,currentWindow:!0});return Promise.resolve(tab)}},"./src/utils/is-tab.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>isTab});const isTab=tab=>void 0!==tab.id&&void 0!==tab.url},"./src/utils/open-url.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>openUrl});const openUrl=({tabId,url,openInNewTab=!1})=>{const properties={url};var _chrome$tabs,_chrome$tabs2;openInNewTab?null===(_chrome$tabs=chrome.tabs)||void 0===_chrome$tabs||_chrome$tabs.create(properties):null===(_chrome$tabs2=chrome.tabs)||void 0===_chrome$tabs2||_chrome$tabs2.update(tabId,properties)}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/aem-link/aem-link.stories.tsx":"./src/components/aem-link/aem-link.stories.tsx","./components/current-page-mode/current-page-mode.stories.tsx":"./src/components/current-page-mode/current-page-mode.stories.tsx","./components/footer/footer.stories.tsx":"./src/components/footer/footer.stories.tsx","./components/header/header.stories.tsx":"./src/components/header/header.stories.tsx","./components/links/links.stories.tsx":"./src/components/links/links.stories.tsx","./components/mode/mode.stories.tsx":"./src/components/mode/mode.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[594],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.tsx-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);