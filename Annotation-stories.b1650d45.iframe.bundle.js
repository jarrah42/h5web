"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1544],{"../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useKeyboardEvent/useKeyboardEvent.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return useKeyboardEvent}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useSyncedRef/useSyncedRef.js"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useEventListener/useEventListener.js"),_util_const_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/util/const.js"),_util_misc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/util/misc.js"),WINDOW_OR_NULL=_util_const_js__WEBPACK_IMPORTED_MODULE_2__.jU?window:null;function useKeyboardEvent(keyOrPredicate,callback,deps,options){void 0===options&&(options={});var _a=options.event,event=void 0===_a?"keydown":_a,_b=options.target,target=void 0===_b?WINDOW_OR_NULL:_b,eventOptions=options.eventOptions,cbRef=(0,___WEBPACK_IMPORTED_MODULE_3__.x)(callback),handler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var keyFilter,predicate="function"==typeof(keyFilter=keyOrPredicate)?keyFilter:"string"==typeof keyFilter?function(ev){return ev.key===keyFilter}:keyFilter?_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.cI:_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.Vp;return function kbEventHandler(ev){predicate(ev)&&cbRef.current.call(this,ev)}}),deps);(0,___WEBPACK_IMPORTED_MODULE_4__.O)(target,event,handler,eventOptions)}},"../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useRafState/useRafState.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{j:function(){return useRafState}});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useSafeState/useSafeState.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useRafCallback/useRafCallback.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@14.2.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@react-hookz/web/esm/useUnmountEffect/useUnmountEffect.js");function useRafState(initialState){var _a=(0,___WEBPACK_IMPORTED_MODULE_0__.F)(initialState),state=_a[0],innerSetState=_a[1],_b=(0,___WEBPACK_IMPORTED_MODULE_1__.K)(innerSetState),setState=_b[0],cancelRaf=_b[1];return(0,___WEBPACK_IMPORTED_MODULE_2__.z)(cancelRaf),[state,setState]}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/grids/GridColumns.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return GridColumns}});var prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js"),_visx_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@visx+group@2.10.0_react@17.0.2/node_modules/@visx/group/esm/Group.js"),_visx_point__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@visx+point@2.6.0/node_modules/@visx/point/esm/Point.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/getTicks.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/coerceNumber.js"),_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),_excluded=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function GridColumns(_ref){var _ref$top=_ref.top,top=void 0===_ref$top?0:_ref$top,_ref$left=_ref.left,left=void 0===_ref$left?0:_ref$left,scale=_ref.scale,height=_ref.height,_ref$stroke=_ref.stroke,stroke=void 0===_ref$stroke?"#eaf0f6":_ref$stroke,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?1:_ref$strokeWidth,strokeDasharray=_ref.strokeDasharray,className=_ref.className,_ref$numTicks=_ref.numTicks,numTicks=void 0===_ref$numTicks?10:_ref$numTicks,lineStyle=_ref.lineStyle,offset=_ref.offset,tickValues=_ref.tickValues,children=_ref.children,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),ticks=null!=tickValues?tickValues:(0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.Z)(scale,numTicks),scaleOffset=(null!=offset?offset:0)+(0,_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__.Z)(scale)/2,tickLines=ticks.map((function(d,index){var _coerceNumber,x=(null!=(_coerceNumber=(0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__.Z)(scale(d)))?_coerceNumber:0)+scaleOffset;return{index:index,from:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:x,y:0}),to:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:x,y:height})}}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_group__WEBPACK_IMPORTED_MODULE_6__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("visx-columns",className),top:top,left:left},children?children({lines:tickLines}):tickLines.map((function(_ref2){var from=_ref2.from,to=_ref2.to,index=_ref2.index;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__.Z,_extends({key:"column-line-"+index,from:from,to:to,stroke:stroke,strokeWidth:strokeWidth,strokeDasharray:strokeDasharray,style:lineStyle},restProps))})))}GridColumns.propTypes={tickValues:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array,height:prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/grids/GridRows.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return GridRows}});var prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js"),_visx_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@visx+group@2.10.0_react@17.0.2/node_modules/@visx/group/esm/Group.js"),_visx_point__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@visx+point@2.6.0/node_modules/@visx/point/esm/Point.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/getTicks.js"),_visx_scale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@visx+scale@2.2.2/node_modules/@visx/scale/esm/utils/coerceNumber.js"),_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),_excluded=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function GridRows(_ref){var _ref$top=_ref.top,top=void 0===_ref$top?0:_ref$top,_ref$left=_ref.left,left=void 0===_ref$left?0:_ref$left,scale=_ref.scale,width=_ref.width,_ref$stroke=_ref.stroke,stroke=void 0===_ref$stroke?"#eaf0f6":_ref$stroke,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?1:_ref$strokeWidth,strokeDasharray=_ref.strokeDasharray,className=_ref.className,children=_ref.children,_ref$numTicks=_ref.numTicks,numTicks=void 0===_ref$numTicks?10:_ref$numTicks,lineStyle=_ref.lineStyle,offset=_ref.offset,tickValues=_ref.tickValues,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),ticks=null!=tickValues?tickValues:(0,_visx_scale__WEBPACK_IMPORTED_MODULE_2__.Z)(scale,numTicks),scaleOffset=(null!=offset?offset:0)+(0,_utils_getScaleBandwidth__WEBPACK_IMPORTED_MODULE_3__.Z)(scale)/2,tickLines=ticks.map((function(d,index){var _coerceNumber,y=(null!=(_coerceNumber=(0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__.Z)(scale(d)))?_coerceNumber:0)+scaleOffset;return{index:index,from:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:0,y:y}),to:new _visx_point__WEBPACK_IMPORTED_MODULE_5__.Z({x:width,y:y})}}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_group__WEBPACK_IMPORTED_MODULE_6__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("visx-rows",className),top:top,left:left},children?children({lines:tickLines}):tickLines.map((function(_ref2){var from=_ref2.from,to=_ref2.to,index=_ref2.index;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_visx_shape_lib_shapes_Line__WEBPACK_IMPORTED_MODULE_7__.Z,_extends({key:"row-line-"+index,from:from,to:to,stroke:stroke,strokeWidth:strokeWidth,strokeDasharray:strokeDasharray,style:lineStyle},restProps))})))}GridRows.propTypes={tickValues:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array,width:prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired}},"../../node_modules/.pnpm/@visx+grid@2.10.0_react@17.0.2/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getScaleBandwidth(scale){return"bandwidth"in scale?scale.bandwidth():0}__webpack_require__.d(__webpack_exports__,{Z:function(){return getScaleBandwidth}})},"../../node_modules/.pnpm/@visx+shape@2.10.0_react@17.0.2/node_modules/@visx/shape/lib/shapes/Line.js":function(__unused_webpack_module,exports,__webpack_require__){exports.Z=function Line(_ref){var _ref$from=_ref.from,from=void 0===_ref$from?{x:0,y:0}:_ref$from,_ref$to=_ref.to,to=void 0===_ref$to?{x:1,y:1}:_ref$to,_ref$fill=_ref.fill,fill=void 0===_ref$fill?"transparent":_ref$fill,className=_ref.className,innerRef=_ref.innerRef,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),isRectilinear=from.x===to.x||from.y===to.y;return _react.default.createElement("line",_extends({ref:innerRef,className:(0,_classnames.default)("visx-line",className),x1:from.x,y1:from.y,x2:to.x,y2:to.y,fill:fill,shapeRendering:isRectilinear?"crispEdges":"auto"},restProps))};var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js")),_classnames=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js")),_excluded=["from","to","fill","className","innerRef"];function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}},"./src/Annotation.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithZoom:function(){return WithZoom},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _h5web_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/vis/shared/VisCanvas.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/lib/src/interactions/DefaultInteractions.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/vis/shared/Annotation.tsx"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.Z,{abscissaConfig:{visDomain:[0,41],showGrid:!0},ordinateConfig:{visDomain:[0,20],showGrid:!0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_4__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{x:10,y:16,children:"HTML annotation positioned at (10, 16)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{x:10,y:6,center:!0,style:{width:180,textAlign:"center"},children:["Another annotation, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"centred"})," on (10, 6)"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{x:25,y:10,style:{display:"flex",alignItems:"center",width:320,height:75,fontSize:"0.875rem",textAlign:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{style:{flex:"1 1 0%",margin:0,padding:"0.5rem",border:"10px solid pink"},children:"Annotations don't have to contain just text. You can also draw shapes with CSS and SVG."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"visible"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{width:"100%",height:"100%",fill:"none",stroke:"darksalmon",strokeWidth:5})})]})})]})};Default.displayName="Default";var WithZoom=function WithZoom(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.Z,{abscissaConfig:{visDomain:[0,41],showGrid:!0},ordinateConfig:{visDomain:[0,20],showGrid:!0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_4__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{x:10,y:16,scaleOnZoom:!0,style:{width:230},children:"HTML annotation at (10, 16) that scales with zoom."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_h5web_lib__WEBPACK_IMPORTED_MODULE_5__.Z,{x:25,y:10,scaleOnZoom:!0,center:!0,style:{width:320,textAlign:"center"},children:["Another annotation that scales with zoom but this time"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"centred"})," on (25, 10)"]})]})};WithZoom.displayName="WithZoom",__webpack_exports__.default={title:"Building Blocks/Annotation",parameters:{layout:"fullscreen"},decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_1__.Z]},Default.parameters=Object.assign({storySource:{source:"() => (\n  <VisCanvas\n    abscissaConfig={{ visDomain: [0, 41], showGrid: true }}\n    ordinateConfig={{ visDomain: [0, 20], showGrid: true }}\n  >\n    <DefaultInteractions />\n    <Annotation x={10} y={16}>\n      HTML annotation positioned at (10, 16)\n    </Annotation>\n    <Annotation\n      x={10}\n      y={6}\n      center\n      style={{\n        width: 180,\n        textAlign: 'center',\n      }}\n    >\n      Another annotation, <strong>centred</strong> on (10, 6)\n    </Annotation>\n    <Annotation\n      x={25}\n      y={10}\n      style={{\n        display: 'flex',\n        alignItems: 'center',\n        width: 320,\n        height: 75,\n        fontSize: '0.875rem',\n        textAlign: 'center',\n      }}\n    >\n      <>\n        <p\n          style={{\n            flex: '1 1 0%',\n            margin: 0,\n            padding: '0.5rem',\n            border: '10px solid pink',\n          }}\n        >\n          Annotations don't have to contain just text. You can also draw shapes\n          with CSS and SVG.\n        </p>\n        <svg\n          style={{\n            position: 'absolute',\n            top: 0,\n            left: 0,\n            width: '100%',\n            height: '100%',\n            overflow: 'visible',\n          }}\n        >\n          <rect\n            width=\"100%\"\n            height=\"100%\"\n            fill=\"none\"\n            stroke=\"darksalmon\"\n            strokeWidth={5}\n          />\n        </svg>\n      </>\n    </Annotation>\n  </VisCanvas>\n)"}},Default.parameters),WithZoom.parameters=Object.assign({storySource:{source:"() => (\n  <VisCanvas\n    abscissaConfig={{ visDomain: [0, 41], showGrid: true }}\n    ordinateConfig={{ visDomain: [0, 20], showGrid: true }}\n  >\n    <DefaultInteractions />\n    <Annotation x={10} y={16} scaleOnZoom style={{ width: 230 }}>\n      HTML annotation at (10, 16) that scales with zoom.\n    </Annotation>\n    <Annotation\n      x={25}\n      y={10}\n      scaleOnZoom\n      center\n      style={{ width: 320, textAlign: 'center' }}\n    >\n      Another annotation that scales with zoom but this time{' '}\n      <strong>centred</strong> on (25, 10)\n    </Annotation>\n  </VisCanvas>\n)"}},WithZoom.parameters);var __namedExportsOrder=["Default","WithZoom"]},"../../packages/lib/src/interactions/AxialSelectToZoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@react-three+fiber@7.0.26_weaphyuqmcotibvxgot4zxypyi/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),three__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/three@0.141.0/node_modules/three/build/three.module.js"),_vis_shared_AxisSystemProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/lib/src/vis/shared/AxisSystemProvider.tsx"),_vis_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/vis/utils.ts"),_SelectionRect__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/lib/src/interactions/SelectionRect.tsx"),_SelectionTool__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/lib/src/interactions/SelectionTool.tsx"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/lib/src/interactions/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function AxialSelectToZoom(props){var axis=props.axis,modifierKey=props.modifierKey,disabled=props.disabled,context=(0,_vis_shared_AxisSystemProvider__WEBPACK_IMPORTED_MODULE_2__.e)(),moveCameraTo=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__._b)(),_useThree=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Ky)((function(state){return state.size})),width=_useThree.width,height=_useThree.height,camera=(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Ky)((function(state){return state.camera}));function getAxialSelection(selection){var _getVisibleDomains=(0,_vis_utils__WEBPACK_IMPORTED_MODULE_5__.Sg)(camera,context),xVisibleDomain=_getVisibleDomains.xVisibleDomain,yVisibleDomain=_getVisibleDomains.yVisibleDomain,mouseStartPoint=selection.startPoint,mouseEndPoint=selection.endPoint,startPoint="x"===axis?new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(mouseStartPoint.x,yVisibleDomain[0]):new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(xVisibleDomain[0],mouseStartPoint.y),endPoint="x"===axis?new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(mouseEndPoint.x,yVisibleDomain[1]):new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(xVisibleDomain[1],mouseEndPoint.y);return{startPoint:startPoint,endPoint:endPoint,worldStartPoint:context.dataToWorld(startPoint),worldEndPoint:context.dataToWorld(endPoint)}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SelectionTool__WEBPACK_IMPORTED_MODULE_8__.Z,{id:axis.toUpperCase()+"SelectToZoom",modifierKey:modifierKey,disabled:disabled,onSelectionEnd:function onSelectionEnd(selection){var _getAxialSelection=getAxialSelection(selection),worldStartPoint=_getAxialSelection.worldStartPoint,worldEndPoint=_getAxialSelection.worldEndPoint;if(worldStartPoint.x!==worldEndPoint.x&&worldStartPoint.y!==worldEndPoint.y){var zoomRect=(0,_utils__WEBPACK_IMPORTED_MODULE_7__.rq)(worldStartPoint,worldEndPoint),zoomRectCenter=zoomRect.center;camera.scale.set(zoomRect.width/width,zoomRect.height/height,1),camera.updateMatrixWorld(),moveCameraTo(zoomRectCenter.x,zoomRectCenter.y)}},children:function children(selection){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SelectionRect__WEBPACK_IMPORTED_MODULE_9__.Z,Object.assign({fill:"white",stroke:"black",fillOpacity:.25},getAxialSelection(selection)))}})}AxialSelectToZoom.displayName="AxialSelectToZoom",__webpack_exports__.Z=AxialSelectToZoom;try{AxialSelectToZoom.displayName="AxialSelectToZoom",AxialSelectToZoom.__docgenInfo={description:"",displayName:"AxialSelectToZoom",props:{axis:{defaultValue:null,description:"",name:"axis",required:!0,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/AxialSelectToZoom.tsx#AxialSelectToZoom"]={docgenInfo:AxialSelectToZoom.__docgenInfo,name:"AxialSelectToZoom",path:"../../packages/lib/src/interactions/AxialSelectToZoom.tsx#AxialSelectToZoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/DefaultInteractions.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js");var _interactions_Pan__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/interactions/Pan.tsx"),_interactions_SelectToZoom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/lib/src/interactions/SelectToZoom.tsx"),_interactions_XAxisZoom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/lib/src/interactions/XAxisZoom.tsx"),_interactions_YAxisZoom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/lib/src/interactions/YAxisZoom.tsx"),_interactions_Zoom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/lib/src/interactions/Zoom.tsx"),_AxialSelectToZoom__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/lib/src/interactions/AxialSelectToZoom.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["keepRatio"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DefaultInteractions(props){var keepRatio=props.keepRatio,interactions=_objectWithoutProperties(props,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[!1!==interactions.pan&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_interactions_Pan__WEBPACK_IMPORTED_MODULE_5__.Z,Object.assign({},interactions.pan)),!1!==interactions.zoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_interactions_Zoom__WEBPACK_IMPORTED_MODULE_6__.Z,Object.assign({},interactions.zoom)),!1!==interactions.xAxisZoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_interactions_XAxisZoom__WEBPACK_IMPORTED_MODULE_7__.Z,Object.assign({modifierKey:"Alt",disabled:keepRatio},interactions.xAxisZoom)),!1!==interactions.yAxisZoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_interactions_YAxisZoom__WEBPACK_IMPORTED_MODULE_8__.Z,Object.assign({modifierKey:"Shift",disabled:keepRatio},interactions.yAxisZoom)),!1!==interactions.selectToZoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_interactions_SelectToZoom__WEBPACK_IMPORTED_MODULE_9__.Z,Object.assign({keepRatio:keepRatio,modifierKey:"Control"},interactions.selectToZoom)),!1!==interactions.xSelectToZoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AxialSelectToZoom__WEBPACK_IMPORTED_MODULE_10__.Z,Object.assign({axis:"x",modifierKey:["Control","Alt"],disabled:keepRatio},interactions.xSelectToZoom)),!1!==interactions.ySelectToZoom&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AxialSelectToZoom__WEBPACK_IMPORTED_MODULE_10__.Z,Object.assign({axis:"y",modifierKey:["Control","Shift"],disabled:keepRatio},interactions.ySelectToZoom))]})}__webpack_exports__.Z=DefaultInteractions;try{DefaultInteractions.displayName="DefaultInteractions",DefaultInteractions.__docgenInfo={description:"",displayName:"DefaultInteractions",props:{keepRatio:{defaultValue:null,description:"",name:"keepRatio",required:!1,type:{name:"boolean"}},pan:{defaultValue:null,description:"",name:"pan",required:!1,type:{name:"false | Props"}},zoom:{defaultValue:null,description:"",name:"zoom",required:!1,type:{name:"false | CommonInteractionProps"}},xAxisZoom:{defaultValue:null,description:"",name:"xAxisZoom",required:!1,type:{name:"false | CommonInteractionProps"}},yAxisZoom:{defaultValue:null,description:"",name:"yAxisZoom",required:!1,type:{name:"false | CommonInteractionProps"}},selectToZoom:{defaultValue:null,description:"",name:"selectToZoom",required:!1,type:{name:'false | Omit<Props, "keepRatio">'}},xSelectToZoom:{defaultValue:null,description:"",name:"xSelectToZoom",required:!1,type:{name:'false | Omit<Props, "axis">'}},ySelectToZoom:{defaultValue:null,description:"",name:"ySelectToZoom",required:!1,type:{name:'false | Omit<Props, "axis">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/DefaultInteractions.tsx#DefaultInteractions"]={docgenInfo:DefaultInteractions.__docgenInfo,name:"DefaultInteractions",path:"../../packages/lib/src/interactions/DefaultInteractions.tsx#DefaultInteractions"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/XAxisZoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function XAxisZoom(props){var modifierKey=props.modifierKey,disabled=props.disabled,shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.X2)("XAxisZoom",{modifierKeys:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.Et)(modifierKey),disabled:disabled,button:"Wheel"});return(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.IZ)({onWheel:(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.kf)((function isZoomAllowed(sourceEvent){return{x:shouldInteract(sourceEvent),y:!1}}))}),null}__webpack_exports__.Z=XAxisZoom;try{XAxisZoom.displayName="XAxisZoom",XAxisZoom.__docgenInfo={description:"",displayName:"XAxisZoom",props:{modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/XAxisZoom.tsx#XAxisZoom"]={docgenInfo:XAxisZoom.__docgenInfo,name:"XAxisZoom",path:"../../packages/lib/src/interactions/XAxisZoom.tsx#XAxisZoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/interactions/YAxisZoom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/src/interactions/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/src/interactions/utils.ts");function YAxisZoom(props){var modifierKey=props.modifierKey,disabled=props.disabled,shouldInteract=(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.X2)("YAxisZoom",{modifierKeys:(0,_utils__WEBPACK_IMPORTED_MODULE_1__.Et)(modifierKey),disabled:disabled,button:"Wheel"});return(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.IZ)({onWheel:(0,_hooks__WEBPACK_IMPORTED_MODULE_0__.kf)((function isZoomAllowed(sourceEvent){return{x:!1,y:shouldInteract(sourceEvent)}}))}),null}__webpack_exports__.Z=YAxisZoom;try{YAxisZoom.displayName="YAxisZoom",YAxisZoom.__docgenInfo={description:"",displayName:"YAxisZoom",props:{modifierKey:{defaultValue:null,description:"",name:"modifierKey",required:!1,type:{name:"ModifierKey | ModifierKey[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/interactions/YAxisZoom.tsx#YAxisZoom"]={docgenInfo:YAxisZoom.__docgenInfo,name:"YAxisZoom",path:"../../packages/lib/src/interactions/YAxisZoom.tsx#YAxisZoom"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/vis/shared/Annotation.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.array.join.js");var three__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/.pnpm/three@0.141.0/node_modules/three/build/three.module.js"),_hooks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/lib/src/vis/hooks.ts"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/lib/src/vis/utils.ts"),_Html__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/lib/src/vis/shared/Html.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["x","y","overflowCanvas","scaleOnZoom","center","children","style"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Annotation(props){var x=props.x,y=props.y,overflowCanvas=props.overflowCanvas,scaleOnZoom=props.scaleOnZoom,center=props.center,children=props.children,style=props.style,divProps=_objectWithoutProperties(props,_excluded);if((center||scaleOnZoom)&&null!=style&&style.transform)throw new Error("Annotation with `center` and/or `scaleOnZoom` cannot have its own `transform`");var _useCameraState=(0,_hooks__WEBPACK_IMPORTED_MODULE_7__.Jk)((function(camera,context){return{htmlPt:(0,_utils__WEBPACK_IMPORTED_MODULE_8__.i2)(camera,context,new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(x,y)),cameraScale:camera.scale.clone()}}),[x,y]),htmlPt=_useCameraState.htmlPt,cameraScale=_useCameraState.cameraScale,transforms=[center?"translate(-50%, -50%)":"",scaleOnZoom?"scale("+1/cameraScale.x+", "+1/cameraScale.y+")":""];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Html__WEBPACK_IMPORTED_MODULE_10__.Z,{overflowCanvas:overflowCanvas,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",Object.assign({style:Object.assign({position:"absolute",top:htmlPt.y,left:htmlPt.x,pointerEvents:"none",transformOrigin:scaleOnZoom&&!center?"top left":void 0,transform:transforms.join(" ").trim()},style)},divProps,{children:children}))})}Annotation.displayName="Annotation",__webpack_exports__.Z=Annotation;try{Annotation.displayName="Annotation",Annotation.__docgenInfo={description:"",displayName:"Annotation",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},overflowCanvas:{defaultValue:null,description:"",name:"overflowCanvas",required:!1,type:{name:"boolean"}},scaleOnZoom:{defaultValue:null,description:"",name:"scaleOnZoom",required:!1,type:{name:"boolean"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/vis/shared/Annotation.tsx#Annotation"]={docgenInfo:Annotation.__docgenInfo,name:"Annotation",path:"../../packages/lib/src/vis/shared/Annotation.tsx#Annotation"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/modules/es.string.sub.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){var $=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/.pnpm/core-js@3.23.1/node_modules/core-js/internals/string-html-forced.js")("sub")},{sub:function sub(){return createHTML(this,"sub","","")}})}}]);