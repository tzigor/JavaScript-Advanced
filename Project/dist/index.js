/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    margin: 0;\\r\\n    font-family: Lato, sans-serif;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.header {\\r\\n    height: 50px;\\r\\n    background-color: rgb(187, 224, 255);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-left: 10px;\\r\\n}\\r\\n\\r\\n.search {\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n.input {\\r\\n    width: 100px;\\r\\n    margin-right: 5px;\\r\\n}\\r\\n\\r\\n.cartContent {\\r\\n    width: 550px;\\r\\n    z-index: 2;\\r\\n    position: absolute;\\r\\n    top: 46px;\\r\\n    left: 10px;\\r\\n    background-color: white;\\r\\n    border: 1px solid #c9c8c8;\\r\\n    border-radius: 3px;\\r\\n    padding: 10px;\\r\\n    font-size: 16px;\\r\\n    box-shadow: 4px 4px 4px 0px rgba(34, 60, 80, 0.2);\\r\\n}\\r\\n\\r\\n.closeBasket {\\r\\n    margin-left: 527px;\\r\\n}\\r\\n\\r\\n.cartHeader {\\r\\n    font-weight: bold;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\r\\n    gap: 10px;\\r\\n    border-bottom: 1px solid #cccccc;\\r\\n    margin-bottom: 10px;\\r\\n    padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.cartLine {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\r\\n    gap: 10px;\\r\\n    border-bottom: 1px solid #ebebeb;\\r\\n    margin-bottom: 10px;\\r\\n    padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.cartFooter {\\r\\n    font-weight: bold;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n\\r\\n.cart-button {\\r\\n    width: 100px;\\r\\n    height: 28px;\\r\\n    color: rgb(0, 0, 0);\\r\\n    background-color: rgb(231, 231, 231);\\r\\n    border: 1px solid rgb(141, 141, 141);\\r\\n    border-radius: 3px;\\r\\n    box-shadow: 4px 4px 4px 0px rgba(34, 60, 80, 0.2);\\r\\n}\\r\\n\\r\\n.goods-list {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(6, 1fr);\\r\\n    gap: 10px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.goods-item {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    border: 1px solid rgb(207, 207, 207);\\r\\n    box-shadow: 4px 4px 6px 0px rgba(100, 100, 100, 0.2);\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.qtyButton {\\r\\n    width: 80px;\\r\\n}\\r\\n\\r\\n.basketItemBtn {\\r\\n    width: 25px;\\r\\n}\\r\\n\\r\\n.itemName {\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 60px;\\r\\n}\\r\\n\\r\\n.itemPrice {\\r\\n    align-self: flex-end;\\r\\n    margin-top: auto;\\r\\n    font-size: 18px;\\r\\n    color: rgb(160, 0, 0);\\r\\n}\\r\\n\\r\\n.totalPrice {\\r\\n    margin-left: 10px;\\r\\n    padding-top: 20px;\\r\\n    color: rgb(0, 3, 175);\\r\\n    font-size: 22px;\\r\\n}\\r\\n\\r\\n.errorMessage {\\r\\n    display: flex;\\r\\n    margin-top: 100%;\\r\\n    margin-left: 10px;\\r\\n    align-items: center;\\r\\n    padding-left: 20px;\\r\\n    width: 300px;\\r\\n    height: 40px;\\r\\n    color: white;\\r\\n    background-color: red;\\r\\n    border: 1px solid rgb(207, 207, 207);\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 4px 4px 6px 0px rgba(100, 100, 100, 0.2);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://server/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://server/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://server/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://server/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/basketItem/index.js":
/*!********************************************!*\
  !*** ./src/components/basketItem/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('basket-item', {\r\n    props: {\r\n        item: Object\r\n    },\r\n    template: `\r\n       <div class=\"cartLine\">\r\n          <div>{{ item.product_name }}</div>\r\n          <div class=\"productQty\">{{ item.quantity }} шт.</div>\r\n          <div class=\"price\">&#36;{{ item.price }}</div>\r\n          <div class=\"totalCartPrice\">&#36;{{ item.quantity * item.price }}</div>\r\n          <div>\r\n             <button @click=\"$emit('del', item.id_product)\" class=\"basketItemBtn\">-</button>\r\n             <button @click=\"$emit('add', item.id_product)\" class=\"basketItemBtn\">+</button>\r\n          </div>\r\n       </div>`\r\n}));\n\n//# sourceURL=webpack://server/./src/components/basketItem/index.js?");

/***/ }),

/***/ "./src/components/basket/index.js":
/*!****************************************!*\
  !*** ./src/components/basket/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _webServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../webServices */ \"./src/webServices.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('basket', {\r\n    data() {\r\n        return {\r\n            basketList: [],\r\n            total_price: 0\r\n        }\r\n    },\r\n    template: `\r\n    <div class=\"cartContent\">\r\n       <i @click=\"$emit('close')\" class=\"fa-regular fa-rectangle-xmark fa-lg closeBasket\" style=\"color: red\"></i>\r\n\r\n       <div class=\"cartHeader\">\r\n          <div>Название товара</div>\r\n          <div>Количество</div>\r\n          <div>Цена за шт.</div>\r\n          <div>Итого</div>\r\n          <div></div>\r\n       </div>\r\n\r\n       <basket-item v-for=\"item in this.basketList\" :item=\"item\" @add=\"addItem\" @del=\"delItem\"></basket-item>\r\n\r\n       <div class=\"cartFooter\">\r\n          Товаров в корзине на сумму: &#36;{{ this.total_price }}\r\n       </div>\r\n    </div> `,\r\n    methods: {\r\n        addItem(id_product) {\r\n            (0,_webServices__WEBPACK_IMPORTED_MODULE_0__.postServerData)(_constants__WEBPACK_IMPORTED_MODULE_1__.startURL + _constants__WEBPACK_IMPORTED_MODULE_1__.goods, 'POST', {\r\n                id_product\r\n            }).then((data) => {\r\n                this.basketList = data;\r\n                this.total_price = this.getTotalBasketPrice();\r\n            })\r\n        },\r\n        delItem(id_product) {\r\n            (0,_webServices__WEBPACK_IMPORTED_MODULE_0__.postServerData)(_constants__WEBPACK_IMPORTED_MODULE_1__.startURL + _constants__WEBPACK_IMPORTED_MODULE_1__.goods, 'DELETE', {\r\n                id_product\r\n            }).then((data) => {\r\n                this.basketList = data;\r\n                this.total_price = this.getTotalBasketPrice();\r\n            })\r\n        },\r\n        getTotalBasketPrice() {\r\n            return this.basketList.reduce((accumulator, { price = 0 }) => accumulator + price, 0);\r\n        },\r\n    },\r\n    mounted() {\r\n        (0,_webServices__WEBPACK_IMPORTED_MODULE_0__.getServerData)(_constants__WEBPACK_IMPORTED_MODULE_1__.startURL + _constants__WEBPACK_IMPORTED_MODULE_1__.basketData).then((data) => {\r\n            this.basketList = data;\r\n            this.total_price = this.getTotalBasketPrice();\r\n        });\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://server/./src/components/basket/index.js?");

/***/ }),

/***/ "./src/components/cartButton/index.js":
/*!********************************************!*\
  !*** ./src/components/cartButton/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('cart-button', {\r\n    template: `\r\n        <button class=\"cart-button\" type=\"button\" @click=\"$emit('click')\">\r\n            <slot></slot>\r\n        </button>`\r\n}));\n\n//# sourceURL=webpack://server/./src/components/cartButton/index.js?");

/***/ }),

/***/ "./src/components/goodsCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/goodsCard/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('goods-card', {\r\n    props: {\r\n        item: Object\r\n    },\r\n    template: `\r\n      <div class=\"goods-item\">\r\n          <div class=\"itemName\">{{ item.product_name }}</div>\r\n          <button class=\"qtyButton\" @click=\"this.addItem\">Добавить</button>\r\n          <div class=\"itemPrice\">&#36;{{ item.price }}</div>\r\n      </div>`,\r\n\r\n    methods: {\r\n        addItem() {\r\n            postServerData(startURL + goods, 'POST', {\r\n                id_product: this.item.id_product\r\n            })\r\n        }\r\n    }\r\n}));\n\n//# sourceURL=webpack://server/./src/components/goodsCard/index.js?");

/***/ }),

/***/ "./src/components/inputFind/index.js":
/*!*******************************************!*\
  !*** ./src/components/inputFind/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('input-find', {\r\n    template: `\r\n        <input class=\"input\" type=\"text\" @input=\"$emit('input', $event.target.value)\">\r\n    `\r\n}));\n\n//# sourceURL=webpack://server/./src/components/inputFind/index.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketData\": () => (/* binding */ basketData),\n/* harmony export */   \"catalogData\": () => (/* binding */ catalogData),\n/* harmony export */   \"goods\": () => (/* binding */ goods),\n/* harmony export */   \"startURL\": () => (/* binding */ startURL)\n/* harmony export */ });\nconst startURL = 'http://localhost:8000/';\r\nconst goods = 'catalogData';\r\nconst catalogData = 'catalogData.json';\r\nconst basketData = 'getBasket';\r\n\r\n\n\n//# sourceURL=webpack://server/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _webServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webServices */ \"./src/webServices.js\");\n/* harmony import */ var _components_cartButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cartButton */ \"./src/components/cartButton/index.js\");\n/* harmony import */ var _components_inputFind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inputFind */ \"./src/components/inputFind/index.js\");\n/* harmony import */ var _components_goodsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/goodsCard */ \"./src/components/goodsCard/index.js\");\n/* harmony import */ var _components_basketItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basketItem */ \"./src/components/basketItem/index.js\");\n/* harmony import */ var _components_basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/basket */ \"./src/components/basket/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n\r\n    let responseStatus = 200;\r\n\r\n    // Vue.component('basket', {\r\n    //     data() {\r\n    //         return {\r\n    //             basketList: [],\r\n    //             total_price: 0\r\n    //         }\r\n    //     },\r\n    //     template: `\r\n    //     <div class=\"cartContent\">\r\n    //        <i @click=\"$emit('close')\" class=\"fa-regular fa-rectangle-xmark fa-lg closeBasket\" style=\"color: red\"></i>\r\n\r\n    //        <div class=\"cartHeader\">\r\n    //           <div>Название товара</div>\r\n    //           <div>Количество</div>\r\n    //           <div>Цена за шт.</div>\r\n    //           <div>Итого</div>\r\n    //           <div></div>\r\n    //        </div>\r\n\r\n    //        <basket-item v-for=\"item in this.basketList\" :item=\"item\" @add=\"addItem\" @del=\"delItem\"></basket-item>\r\n\r\n    //        <div class=\"cartFooter\">\r\n    //           Товаров в корзине на сумму: &#36;{{ this.total_price }}\r\n    //        </div>\r\n    //     </div> `,\r\n    //     methods: {\r\n    //         addItem(id_product) {\r\n    //             postServerData(startURL + goods, 'POST', {\r\n    //                 id_product\r\n    //             }).then((data) => {\r\n    //                 this.basketList = data;\r\n    //                 this.total_price = this.getTotalBasketPrice();\r\n    //             })\r\n    //         },\r\n    //         delItem(id_product) {\r\n    //             postServerData(startURL + goods, 'DELETE', {\r\n    //                 id_product\r\n    //             }).then((data) => {\r\n    //                 this.basketList = data;\r\n    //                 this.total_price = this.getTotalBasketPrice();\r\n    //             })\r\n    //         },\r\n    //         getTotalBasketPrice() {\r\n    //             return this.basketList.reduce((accumulator, { price = 0 }) => accumulator + price, 0);\r\n    //         },\r\n    //     },\r\n    //     mounted() {\r\n    //         getServerData(startURL + basketData).then((data) => {\r\n    //             if (responseStatus !== 200) {\r\n    //                 this.showError();\r\n    //             } else {\r\n    //                 this.basketList = data;\r\n    //                 this.total_price = this.getTotalBasketPrice();\r\n    //             }\r\n    //         });\r\n    //     }\r\n    // });\r\n\r\n    const app = new Vue({\r\n        el: \"#root\",\r\n        data: {\r\n            noData: true,\r\n            basketVisible: false,\r\n            list: [],\r\n            basketList: [],\r\n            searchString: '',\r\n            serverError: false,\r\n        },\r\n        methods: {\r\n            showBasket() {\r\n                this.basketVisible = true\r\n            },\r\n            closeBasket() {\r\n                this.basketVisible = false\r\n            },\r\n            showError() {\r\n                this.responseStatus = responseStatus;\r\n                this.serverError = true;\r\n                setTimeout(() => this.serverError = false, 5000);\r\n            },\r\n        },\r\n        computed: {\r\n            getTotalPrice() {\r\n                if (this.list !== undefined)\r\n                    return this.list.reduce((accumulator, { price = 0 }) => accumulator + price, 0);\r\n            },\r\n\r\n            filteredList() {\r\n                if (this.list !== undefined)\r\n                    return this.list.filter(({ product_name }) => {\r\n                        return product_name.match(new RegExp(this.searchString, 'gui'))\r\n                    })\r\n            }\r\n        },\r\n        mounted() {\r\n            document.querySelector('body').classList.remove('hide');\r\n            (0,_webServices__WEBPACK_IMPORTED_MODULE_2__.getServerData)(_constants__WEBPACK_IMPORTED_MODULE_1__.startURL + _constants__WEBPACK_IMPORTED_MODULE_1__.catalogData).then((data) => {\r\n                if (responseStatus !== 200) {\r\n                    this.showError();\r\n                } else {\r\n                    this.list = data;\r\n                    this.noData = false;\r\n                }\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\nonload = init;\r\n\n\n//# sourceURL=webpack://server/./src/index.js?");

/***/ }),

/***/ "./src/webServices.js":
/*!****************************!*\
  !*** ./src/webServices.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerData\": () => (/* binding */ getServerData),\n/* harmony export */   \"postServerData\": () => (/* binding */ postServerData)\n/* harmony export */ });\nfunction getServerData(url) {\r\n    return fetch(url).then((res) => res.json())\r\n};\r\n\r\nfunction postServerData(url, method = 'post', body = {}) {\r\n    return fetch(\r\n        url,\r\n        {\r\n            method,\r\n            headers: {\r\n                'Content-type': 'application/json; charset=utf-8'\r\n            },\r\n            body: JSON.stringify(body)\r\n        }\r\n    ).then((res) => res.json())\r\n};\r\n\r\n\n\n//# sourceURL=webpack://server/./src/webServices.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;