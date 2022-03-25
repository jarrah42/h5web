(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/VisCanvas.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"IndexDomains",(function(){return IndexDomains})),__webpack_require__.d(__webpack_exports__,"ArbitraryDomains",(function(){return ArbitraryDomains})),__webpack_require__.d(__webpack_exports__,"LogScales",(function(){return LogScales})),__webpack_require__.d(__webpack_exports__,"AspectRatio",(function(){return AspectRatio})),__webpack_require__.d(__webpack_exports__,"NoGrid",(function(){return NoGrid})),__webpack_require__.d(__webpack_exports__,"Title",(function(){return Title})),__webpack_require__.d(__webpack_exports__,"AxisLabels",(function(){return AxisLabels})),__webpack_require__.d(__webpack_exports__,"FlippedAxes",(function(){return FlippedAxes})),__webpack_require__.d(__webpack_exports__,"InheritedStyles",(function(){return InheritedStyles}));__webpack_require__("../../node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/shared/src/models-vis.ts"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var IndexDomains=Template.bind({});IndexDomains.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,isIndexAxis:!0}};var ArbitraryDomains=Template.bind({});ArbitraryDomains.args={abscissaConfig:{visDomain:[0,3],showGrid:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0}};var LogScales=Template.bind({});LogScales.args={abscissaConfig:{visDomain:[1,10],showGrid:!0,scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a.Log},ordinateConfig:{visDomain:[-10,10],showGrid:!0,scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a.SymLog}};var AspectRatio=Template.bind({});AspectRatio.args={abscissaConfig:{visDomain:[0,16],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[0,10],showGrid:!0,isIndexAxis:!0},canvasRatio:1.6};var NoGrid=Template.bind({});NoGrid.args={abscissaConfig:{visDomain:[-5,20],showGrid:!1,isIndexAxis:!0},ordinateConfig:{visDomain:[0,2],showGrid:!1}};var Title=Template.bind({});Title.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,isIndexAxis:!0},title:"This is a graph"};var AxisLabels=Template.bind({});AxisLabels.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,label:"Abscissas"},ordinateConfig:{visDomain:[50,100],showGrid:!0,label:"Ordinates"}};var FlippedAxes=Template.bind({});FlippedAxes.args={abscissaConfig:{visDomain:[0,3],showGrid:!0,flip:!0},ordinateConfig:{visDomain:[50,100],showGrid:!0,flip:!0}};var InheritedStyles=Template.bind({});InheritedStyles.args={abscissaConfig:{visDomain:[0,50],showGrid:!0,isIndexAxis:!0,label:"X values"},ordinateConfig:{visDomain:[0,3],showGrid:!0,isIndexAxis:!0,label:"Y values"},title:"The title"},InheritedStyles.decorators=[function(VisCanvasStory){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{flex:"1 1 0%",display:"flex",fontFamily:"monospace",fontWeight:"bold",fontSize:"1.125rem"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(VisCanvasStory,{})})}],__webpack_exports__.default={title:"Building Blocks/VisCanvas",component:_h5web_lib__WEBPACK_IMPORTED_MODULE_1__.a,parameters:{layout:"fullscreen"},decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_3__.a]},IndexDomains.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},IndexDomains.parameters),ArbitraryDomains.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},ArbitraryDomains.parameters),LogScales.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},LogScales.parameters),AspectRatio.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},AspectRatio.parameters),NoGrid.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},NoGrid.parameters),Title.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},Title.parameters),AxisLabels.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},AxisLabels.parameters),FlippedAxes.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},FlippedAxes.parameters),InheritedStyles.parameters=Object.assign({storySource:{source:"(args) => <VisCanvas {...args} />"}},InheritedStyles.parameters)}}]);