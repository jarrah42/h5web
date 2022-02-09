(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{"../../packages/lib/src/vis/heatmap/ColorBar.module.css":function(module,exports,__webpack_require__){module.exports={colorBar:"ColorBar_colorBar__zvOm0",gradientBar:"ColorBar_gradientBar__2-9U6",gradient:"ColorBar_gradient__1wsE5",axis:"ColorBar_axis__1F1hO",tick:"ColorBar_tick__15YpA",bound:"ColorBar_bound__2fVK4",minBound:"ColorBar_minBound__16_oG ColorBar_bound__2fVK4",maxBound:"ColorBar_maxBound__3NWcK ColorBar_bound__2fVK4"}},"../../packages/lib/src/vis/heatmap/ColorBar.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),utils=__webpack_require__("../../packages/shared/src/utils.ts"),useMeasure=__webpack_require__("../../node_modules/.pnpm/@react-hookz+web@12.1.2_react-dom@17.0.2+react@17.0.2/node_modules/@react-hookz/web/esm/useMeasure/useMeasure.js"),AxisBottom=__webpack_require__("../../node_modules/.pnpm/@visx+axis@2.4.0_react@17.0.2/node_modules/@visx/axis/esm/axis/AxisBottom.js"),react=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_default=__webpack_require__.n(react),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),axis_Axis=__webpack_require__("../../node_modules/.pnpm/@visx+axis@2.4.0_react@17.0.2/node_modules/@visx/axis/esm/axis/Axis.js"),orientation=__webpack_require__("../../node_modules/.pnpm/@visx+axis@2.4.0_react@17.0.2/node_modules/@visx/axis/esm/constants/orientation.js"),_excluded=["axisClassName","labelOffset","tickLabelProps","tickLength"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var rightTickLabelProps=function rightTickLabelProps(){return{dx:"0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"start"}};function AxisRight(_ref){var axisClassName=_ref.axisClassName,_ref$labelOffset=_ref.labelOffset,labelOffset=void 0===_ref$labelOffset?36:_ref$labelOffset,_ref$tickLabelProps=_ref.tickLabelProps,tickLabelProps=void 0===_ref$tickLabelProps?rightTickLabelProps:_ref$tickLabelProps,_ref$tickLength=_ref.tickLength,tickLength=void 0===_ref$tickLength?8:_ref$tickLength,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);return react_default.a.createElement(axis_Axis.a,_extends({axisClassName:classnames_default()("visx-axis-right",axisClassName),labelOffset:labelOffset,orientation:orientation.a.right,tickLabelProps:tickLabelProps,tickLength:tickLength},restProps))}var Tick=__webpack_require__("../../packages/lib/src/vis/shared/Tick.tsx"),vis_utils=__webpack_require__("../../packages/lib/src/vis/utils.ts"),ColorBar_module=__webpack_require__("../../packages/lib/src/vis/heatmap/ColorBar.module.css"),ColorBar_module_default=__webpack_require__.n(ColorBar_module),heatmap_utils=__webpack_require__("../../packages/lib/src/vis/heatmap/utils.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ColorBar(props){var domain=props.domain,scaleType=props.scaleType,colorMap=props.colorMap,horizontal=props.horizontal,withBounds=props.withBounds,invertColorMap=props.invertColorMap,_useMeasure=Object(useMeasure.a)(),_useMeasure2=Object(slicedToArray.a)(_useMeasure,2),barSize=_useMeasure2[0],barRef=_useMeasure2[1],gradientLength=barSize?horizontal?barSize.width:barSize.height:0,Axis=horizontal?AxisBottom.a:AxisRight,isEmptyDomain=domain[0]===domain[1],axisScale=Object(vis_utils.f)(scaleType,{domain:domain,range:horizontal?[0,Math.round(gradientLength+.5)]:[Math.round(gradientLength+.5),0]});return Object(jsx_runtime.jsxs)("div",{className:ColorBar_module_default.a.colorBar,"data-horizontal":horizontal||void 0,children:[withBounds&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{className:ColorBar_module_default.a.minBound,children:isEmptyDomain?"−∞":Object(utils.b)(domain[0])}),Object(jsx_runtime.jsx)("p",{className:ColorBar_module_default.a.maxBound,children:isEmptyDomain?"+∞":Object(utils.b)(domain[1])})]}),Object(jsx_runtime.jsx)("div",{ref:barRef,className:ColorBar_module_default.a.gradientBar,children:Object(jsx_runtime.jsx)("div",{className:ColorBar_module_default.a.gradient,"data-keep-colors":!0,style:{backgroundImage:Object(heatmap_utils.f)(Object(heatmap_utils.e)(colorMap,invertColorMap),horizontal?"right":"top",domain[0]===domain[1])}})}),gradientLength>0&&Object(jsx_runtime.jsx)("svg",{className:ColorBar_module_default.a.axis,width:horizontal?"100%":"2.5em",height:horizontal?"2.5em":"100%",children:Object(jsx_runtime.jsx)(Axis,{scale:axisScale,hideAxisLine:!0,numTicks:Object(vis_utils.d)(gradientLength),tickClassName:ColorBar_module_default.a.tick,tickComponent:Tick.a,tickFormat:axisScale.tickFormat(Object(vis_utils.d)(gradientLength),".3~g")})})]})}__webpack_exports__.a=ColorBar;try{ColorBar.displayName="ColorBar",ColorBar.__docgenInfo={description:"",displayName:"ColorBar",props:{domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"Domain"}},scaleType:{defaultValue:null,description:"",name:"scaleType",required:!0,type:{name:"VisScaleType"}},colorMap:{defaultValue:null,description:"",name:"colorMap",required:!0,type:{name:"enum",value:[{value:'"Viridis"'},{value:'"Blues"'},{value:'"Greens"'},{value:'"Greys"'},{value:'"Oranges"'},{value:'"Purples"'},{value:'"Reds"'},{value:'"Turbo"'},{value:'"Inferno"'},{value:'"Magma"'},{value:'"Plasma"'},{value:'"Cividis"'},{value:'"Warm"'},{value:'"Cool"'},{value:'"BuGn"'},{value:'"BuPu"'},{value:'"GnBu"'},{value:'"OrRd"'},{value:'"PuBuGn"'},{value:'"PuBu"'},{value:'"PuRd"'},{value:'"RdPu"'},{value:'"YlGnBu"'},{value:'"YlGn"'},{value:'"YlOrBr"'},{value:'"YlOrRd"'},{value:'"Rainbow"'},{value:'"Sinebow"'},{value:'"HSL"'},{value:'"BrBG"'},{value:'"PRGn"'},{value:'"PiYG"'},{value:'"PuOr"'},{value:'"RdBu"'},{value:'"RdGy"'},{value:'"RdYlBu"'},{value:'"RdYlGn"'},{value:'"Spectral"'}]}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},withBounds:{defaultValue:null,description:"",name:"withBounds",required:!1,type:{name:"boolean"}},invertColorMap:{defaultValue:null,description:"",name:"invertColorMap",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/lib/src/vis/heatmap/ColorBar.tsx#ColorBar"]={docgenInfo:ColorBar.__docgenInfo,name:"ColorBar",path:"../../packages/lib/src/vis/heatmap/ColorBar.tsx#ColorBar"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/lib/src/vis/heatmap/interpolators.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return INTERPOLATORS}));var d3_color__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/d3-color@3.0.1/node_modules/d3-color/src/color.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Greens.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Greys.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Purples.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-single/Reds.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/BrBG.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/PRGn.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/PiYG.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/PuOr.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/RdBu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/RdGy.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("../../node_modules/.pnpm/d3-scale-chromatic@3.0.0/node_modules/d3-scale-chromatic/src/diverging/Spectral.js");var INTERPOLATORS={Blues:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_1__.a,Greens:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__.a,Greys:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__.a,Oranges:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_4__.a,Purples:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_5__.a,Reds:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__.a,Turbo:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__.a,Viridis:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__.a,Inferno:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__.b,Magma:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__.c,Plasma:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_8__.d,Cividis:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_9__.a,Warm:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__.c,Cool:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__.a,BuGn:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_11__.a,BuPu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_12__.a,GnBu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_13__.a,OrRd:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_14__.a,PuBuGn:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_15__.a,PuBu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_16__.a,PuRd:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_17__.a,RdPu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_18__.a,YlGnBu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_19__.a,YlGn:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_20__.a,YlOrBr:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_21__.a,YlOrRd:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_22__.a,Rainbow:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_10__.b,Sinebow:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_23__.a,HSL:function interpolateHsl(t){return Object(d3_color__WEBPACK_IMPORTED_MODULE_0__.e)(360*t,1,.5).formatRgb()},BrBG:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_24__.a,PRGn:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_25__.a,PiYG:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_26__.a,PuOr:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_27__.a,RdBu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_28__.a,RdGy:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_29__.a,RdYlBu:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_30__.a,RdYlGn:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_31__.a,Spectral:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_32__.a}},"../../packages/lib/src/vis/heatmap/utils.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GRADIENT_RANGE})),__webpack_require__.d(__webpack_exports__,"h",(function(){return getVisDomain})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getSafeDomain})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getDims})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getLinearGradient})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getAxisValues})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getInterpolator})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getDataTexture}));var _home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"),three__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/three@0.135.0/node_modules/three/build/three.module.js"),_models__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/lib/src/vis/models.ts"),_scales__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/src/vis/scales.ts"),_interpolators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/lib/src/vis/heatmap/interpolators.ts"),GRADIENT_RANGE=Object(lodash__WEBPACK_IMPORTED_MODULE_2__.range)(0,1.05,.05),TEXTURE_TYPE_BY_DTYPE={int8:three__WEBPACK_IMPORTED_MODULE_3__.ByteType,int16:three__WEBPACK_IMPORTED_MODULE_3__.ShortType,int32:three__WEBPACK_IMPORTED_MODULE_3__.IntType,uint8:three__WEBPACK_IMPORTED_MODULE_3__.UnsignedByteType,uint16:three__WEBPACK_IMPORTED_MODULE_3__.UnsignedShortType,uint32:three__WEBPACK_IMPORTED_MODULE_3__.UnsignedIntType,float32:three__WEBPACK_IMPORTED_MODULE_3__.FloatType},UNSUPPORTED_TEXTURE_TYPES=new Set([three__WEBPACK_IMPORTED_MODULE_3__.UnsignedShort4444Type,three__WEBPACK_IMPORTED_MODULE_3__.UnsignedShort5551Type,three__WEBPACK_IMPORTED_MODULE_3__.UnsignedInt248Type]);function getVisDomain(customDomain,dataDomain){var _customDomain$,_customDomain$2;return[null!==(_customDomain$=customDomain[0])&&void 0!==_customDomain$?_customDomain$:dataDomain[0],null!==(_customDomain$2=customDomain[1])&&void 0!==_customDomain$2?_customDomain$2:dataDomain[1]]}function getSafeDomain(domain,fallbackDomain,scaleType){if(domain[0]>domain[1])return[fallbackDomain,{minGreater:!0}];var h5webScale=_scales__WEBPACK_IMPORTED_MODULE_5__.a[scaleType],_domain=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(domain,2),min=_domain[0],max=_domain[1],validMin=h5webScale.validMin,isMinSupported=min>=validMin,isMaxSupported=max>=validMin,safeMin=isMinSupported?min:fallbackDomain[0],safeMax=isMaxSupported?max:fallbackDomain[1],safeMinGreater=safeMin>safeMax;return[[safeMinGreater?safeMax:safeMin,safeMax],{minError:safeMinGreater?_models__WEBPACK_IMPORTED_MODULE_4__.a.CustomMaxFallback:isMinSupported?void 0:_models__WEBPACK_IMPORTED_MODULE_4__.a.InvalidMinWithScale,maxError:isMaxSupported?void 0:_models__WEBPACK_IMPORTED_MODULE_4__.a.InvalidMaxWithScale}]}function getDims(dataArray){var _dataArray$shape=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(dataArray.shape,2);return{rows:_dataArray$shape[0],cols:_dataArray$shape[1]}}function getColorStops(interpolator,minMaxOnly){if(minMaxOnly){var min=interpolator(0),max=interpolator(1);return"".concat(min,", ").concat(min," 50%, ").concat(max," 50%, ").concat(max)}return GRADIENT_RANGE.map(interpolator).join(", ")}function getLinearGradient(interpolator,direction){var minMaxOnly=arguments.length>2&&void 0!==arguments[2]&&arguments[2],colorStops=getColorStops(interpolator,minMaxOnly);return"linear-gradient(to ".concat(direction,", ").concat(colorStops,")")}function getAxisValues(rawValues,pixelCount){if(!rawValues)return Object(lodash__WEBPACK_IMPORTED_MODULE_2__.range)(pixelCount+1);if(rawValues.length===pixelCount+1)return rawValues;if(rawValues.length===pixelCount){var deltaCoord=rawValues[1]-rawValues[0];return[].concat(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(rawValues),[rawValues[rawValues.length-1]+deltaCoord])}throw new Error("Expected array to have length ".concat(pixelCount," or ").concat(pixelCount+1,", not ").concat(rawValues.length))}function getInterpolator(colorMap,reverse){var interpolator=_interpolators__WEBPACK_IMPORTED_MODULE_6__.a[colorMap];return reverse?function(t){return interpolator(1-t)}:interpolator}function getTextureFormatFromType(type){if(type===three__WEBPACK_IMPORTED_MODULE_3__.FloatType||type===three__WEBPACK_IMPORTED_MODULE_3__.HalfFloatType)return three__WEBPACK_IMPORTED_MODULE_3__.RedFormat;if(UNSUPPORTED_TEXTURE_TYPES.has(type))throw new Error("Texture type not supported");return three__WEBPACK_IMPORTED_MODULE_3__.RedIntegerFormat}function getDataTexture(values){var textureType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:TEXTURE_TYPE_BY_DTYPE[values.dtype],magFilter=arguments.length>2&&void 0!==arguments[2]?arguments[2]:three__WEBPACK_IMPORTED_MODULE_3__.NearestFilter,data=values.data,shape=values.shape,_shape=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(shape,2),rows=_shape[0],cols=_shape[1],format=getTextureFormatFromType(textureType);return new three__WEBPACK_IMPORTED_MODULE_3__.DataTexture(data,cols,rows,format,textureType,three__WEBPACK_IMPORTED_MODULE_3__.UVMapping,three__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping,three__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping,magFilter)}},"../../packages/lib/src/vis/models.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var DomainError;__webpack_require__.d(__webpack_exports__,"a",(function(){return DomainError})),function(DomainError){DomainError.MinGreater="min-greater",DomainError.InvalidMinWithScale="invalid-min-with-scale",DomainError.InvalidMaxWithScale="invalid-max-with-scale",DomainError.CustomMaxFallback="custom-max-fallback"}(DomainError||(DomainError={}))},"./src/ColorBar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ColorMapStory",(function(){return ColorMapStory})),__webpack_require__.d(__webpack_exports__,"LogScale",(function(){return LogScale})),__webpack_require__.d(__webpack_exports__,"NegativeLogScale",(function(){return NegativeLogScale})),__webpack_require__.d(__webpack_exports__,"SymLogScale",(function(){return SymLogScale})),__webpack_require__.d(__webpack_exports__,"WithBounds",(function(){return WithBounds})),__webpack_require__.d(__webpack_exports__,"EmptyDomain",(function(){return EmptyDomain})),__webpack_require__.d(__webpack_exports__,"InvertColorMap",(function(){return InvertColorMap})),__webpack_require__.d(__webpack_exports__,"ColorBarTemplate",(function(){return Template}));var _home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_h5web_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/lib/src/vis/heatmap/ColorBar.tsx"),_h5web_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/shared/src/models-vis.ts"),_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/decorators/FillHeight.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["domainMin","domainMax"],Template=function Template(args){var min=args.domainMin,max=args.domainMax,colorBarArgs=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.a)(args,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},colorBarArgs),{},{domain:[min,max]}))},Default=Template.bind({});Default.args={domainMin:.1,domainMax:1,scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.Linear,colorMap:"Viridis"};var ColorMapStory=Template.bind({});ColorMapStory.storyName="Color Map",ColorMapStory.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{colorMap:"Blues"});var LogScale=Template.bind({});LogScale.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.Log});var NegativeLogScale=Template.bind({});NegativeLogScale.storyName="Log Scale with negative domain",NegativeLogScale.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.Log,domainMin:-10,domainMax:-1});var SymLogScale=Template.bind({});SymLogScale.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{scaleType:_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.SymLog,domainMin:-6,domainMax:6});var WithBounds=Template.bind({});WithBounds.storyName="With bounds",WithBounds.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{domainMin:-235.111,domainMax:98765,withBounds:!0});var EmptyDomain=Template.bind({});EmptyDomain.storyName="Empty domain",EmptyDomain.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{domainMin:0,domainMax:0,withBounds:!0});var InvertColorMap=Template.bind({});InvertColorMap.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args),{},{invertColorMap:!0}),__webpack_exports__.default={title:"Building Blocks/ColorBar",component:_h5web_lib__WEBPACK_IMPORTED_MODULE_2__.a,decorators:[_decorators_FillHeight__WEBPACK_IMPORTED_MODULE_4__.a],parameters:{layout:"fullscreen",controls:{exclude:["domain"]}},argTypes:{domainMin:{control:{type:"range",min:-10,max:10,step:.1}},domainMax:{control:{type:"range",min:-10,max:10,step:.1}},scaleType:{control:{type:"inline-radio"},options:[_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.Linear,_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.Log,_h5web_lib__WEBPACK_IMPORTED_MODULE_3__.a.SymLog]}},excludeStories:["ColorBarTemplate"]},Default.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},Default.parameters),ColorMapStory.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},ColorMapStory.parameters),LogScale.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},LogScale.parameters),NegativeLogScale.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},NegativeLogScale.parameters),SymLogScale.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},SymLogScale.parameters),WithBounds.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},WithBounds.parameters),EmptyDomain.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},EmptyDomain.parameters),InvertColorMap.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const { domainMin: min, domainMax: max, ...colorBarArgs } = args;\n  return <ColorBar {...colorBarArgs} domain={[min, max]} />;\n}"}},InvertColorMap.parameters);try{Story.displayName="Story",Story.__docgenInfo={description:"Story function that represents a CSFv2 component example.",displayName:"Story",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ColorBar.stories.tsx#Story"]={docgenInfo:Story.__docgenInfo,name:"Story",path:"src/ColorBar.stories.tsx#Story"})}catch(__react_docgen_typescript_loader_error){}},"./src/ColorBarHorizontal.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal})),__webpack_require__.d(__webpack_exports__,"WithBounds",(function(){return WithBounds}));var _home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ColorBar.stories.tsx"),Horizontal=_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__.ColorBarTemplate.bind({});Horizontal.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args),{},{horizontal:!0});var WithBounds=_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__.ColorBarTemplate.bind({});WithBounds.args=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__.Default.args),{},{domainMin:-235.111,domainMax:98765,horizontal:!0,withBounds:!0}),__webpack_exports__.default=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},_ColorBar_stories__WEBPACK_IMPORTED_MODULE_1__.default),{},{title:"Building Blocks/ColorBar/Horizontal"}),Horizontal.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"ColorBarTemplate.bind({})"}},Horizontal.parameters),WithBounds.parameters=Object(_home_runner_work_h5web_h5web_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"ColorBarTemplate.bind({})"}},WithBounds.parameters)},"./src/decorators/FillHeight.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function FillHeight(MyStory){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"grid",height:"100vh"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyStory,{})})}__webpack_exports__.a=FillHeight;try{FillHeight.displayName="FillHeight",FillHeight.__docgenInfo={description:"",displayName:"FillHeight",props:{decorators:{defaultValue:null,description:"",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactFramework, Args>[]"}},parameters:{defaultValue:null,description:"",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"",name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:"",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactFramework, Args>[]"}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactFramework, Args>"}},play:{defaultValue:null,description:"",name:"play",required:!1,type:{name:"PlayFunction<ReactFramework, Args>"}},storyName:{defaultValue:null,description:"",name:"storyName",required:!1,type:{name:"string"}},story:{defaultValue:null,description:"",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactFramework, Args>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/decorators/FillHeight.tsx#FillHeight"]={docgenInfo:FillHeight.__docgenInfo,name:"FillHeight",path:"src/decorators/FillHeight.tsx#FillHeight"})}catch(__react_docgen_typescript_loader_error){}}}]);