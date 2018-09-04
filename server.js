/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/center/styles/about.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/center/styles/about.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".about {\\n  display: flex;\\n  flex-flow:row wrap;\\n  margin: 0;\\n  /* height: 100vh; */\\n  background-size: cover;\\n}\\nbold {\\n  font-family: 'ralewaymedium';\\n}\\n.bio > h1 {\\n  font-size: 3rem;\\n  font-family: 'bebas_neueregular';\\n  color: rgb(34, 86, 103);\\n}\\n\\n.bio {\\n  padding: 20px;\\n}\\n\\n.bio > p {\\n  text-align: justify;\\n}\\n\\n#profile_pic {\\n  float: right;\\n}\\n\\n#profile_pic {\\n  border-radius: 50%;\\n  max-height: 250px;  \\n  padding: 20px;\\n}\\n\\n.skills {\\n  display: flex;\\n  flex-flow: row wrap;\\n  padding: 20px;\\n\\n}\\n.skills > h1 {\\n  flex: 0 1 100%;\\n  font-size: 3rem;\\n  font-family: 'bebas_neueregular';\\n  color: rgb(34, 86, 103);\\n  margin: 0\\n}\\n.skill-item {\\n  flex: 0 1 auto;\\n  padding: 20px;\\n}\\n.skill-item > h3 {\\n  text-align: center;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/center/styles/about.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/center/styles/center.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./src/center/styles/center.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".center{\\n  /* height: 100vh; */\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/center/styles/center.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/center/styles/contact.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/center/styles/contact.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".contact {\\n  padding-left: 20px;\\n  height: 50vh;\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/map.jpg */ \"./src/center/styles/images/map.jpg\")) + \");\\n}\\n\\n.contact > h1 {\\n  font-size: 3rem;\\n  font-family: 'bebas_neueregular';\\n  color: rgb(34, 86, 103);\\n}\\n\\n.body {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n  /* repeat = as many times as you can fit */\\n /* auto-fit = fit as many items on the line as possible, go bigger if you need to */\\n /*minmax = (min size, max size) = the minimum size the column should be is 300px, but if there's space then give them all 1fr of that width. */\\n  grid-gap: 10px;\\n}\\n\\n.form-input {\\n  justify-self: start;\\n  background-color: rgba(255,255,255,.8);\\n  font-size: 1rem;\\n  font-family: 'ralewaylight';\\n  padding: 10px 10px;\\n  margin: 10px;\\n  width: 80%;\\n  border: 1px solid #ced4da;\\n}\\n.form-input:focus {\\n  border: 1px solid #225667;\\n}\\n\\ntextarea {\\n  min-height: 80px;\\n  max-height: 150px;\\n}\\n\\n\\n#submit-button {\\n  background-color: none;\\n  border: 1px solid #225667;\\n  color: #225667;\\n  font-size: 1.2rem;\\n  font-family: 'ralewaymedium';\\n}\\n#submit-button:hover {\\n  background-color: #225667;\\n  color: white;\\n}\\n\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/center/styles/contact.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/center/styles/project.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/center/styles/project.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".project > h1 {\\n  font-size: 3rem;\\n  font-family: 'bebas_neueregular';\\n  color: rgb(34, 86, 103);\\n}\\n\\n.project {\\n  /* background-color: aqua; */\\n  padding-left: 20px;\\n  min-height: 60vh;\\n}\\n\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\\n  grid-auto-rows: 1fr;\\n}\\n.item {\\n  padding: 20px;\\n  width: auto;\\n}\\n\\n.item > .snapshot{\\n  width: 100%;\\n  height: auto;\\n}\\n\\na > .logo{\\n  width: 50px;\\n  height: 50px;\\n  margin-left: 20px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/center/styles/project.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/footer/styles/footer.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./src/footer/styles/footer.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* to make footer stick to the bottom of the page */\\n\\n.footer {\\n  text-align: center; \\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/footer/styles/footer.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/header/components/styles/landing.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/header/components/styles/landing.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".landing {\\n  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\" + escape(__webpack_require__(/*! ./images/sf.jpg */ \"./src/header/components/styles/images/sf.jpg\")) + \");\\n  background-size: cover;\\n  min-height: 100vh;\\n}\\n\\n.title {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: white;\\n  text-align: center;\\n}\\n\\n.title>h1 {\\n  text-transform: uppercase;\\n  margin: 0;\\n  font-size: 10rem;\\n  font-family: 'bebas_neueregular', arial, sans-serif;\\n  white-space: nowrap;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/header/components/styles/landing.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/header/components/styles/navBar.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/header/components/styles/navBar.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".navbar {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: flex-end;\\n  align-items: center;\\n  color: white;\\n  background-color: black;\\n  \\n  position: -webkit-sticky; /* Safari */\\n  position: sticky;\\n  top: 0px;\\n  z-index: 1;\\n}\\n\\n.navbar> a   {\\n  padding: 10px;\\n}\\n.navbar > a:link, .navbar>a:visited {\\n  color: lavender;\\n  text-decoration: none;\\n}\\n.navbar > a:hover, .navbar > a:active {\\n  color: white;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/header/components/styles/navBar.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./header/Header */ \"./src/header/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Center = __webpack_require__(/*! ./center/Center */ \"./src/center/Center.js\");\n\nvar _Center2 = _interopRequireDefault(_Center);\n\nvar _Footer = __webpack_require__(/*! ./footer/Footer */ \"./src/footer/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _NavBar = __webpack_require__(/*! ./header/components/NavBar */ \"./src/header/components/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'site' },\n        _react2.default.createElement(\n          'div',\n          { className: 'header-center' },\n          _react2.default.createElement(_NavBar2.default, null),\n          _react2.default.createElement(_Header2.default, null),\n          _react2.default.createElement(_Center2.default, null)\n        ),\n        _react2.default.createElement(_Footer2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/center/Center.js":
/*!******************************!*\
  !*** ./src/center/Center.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _About = __webpack_require__(/*! ./components/About */ \"./src/center/components/About.js\");\n\nvar _About2 = _interopRequireDefault(_About);\n\nvar _Project = __webpack_require__(/*! ./components/Project */ \"./src/center/components/Project.js\");\n\nvar _Project2 = _interopRequireDefault(_Project);\n\nvar _Contact = __webpack_require__(/*! ./components/Contact */ \"./src/center/components/Contact.js\");\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\n__webpack_require__(/*! ./styles/center.css */ \"./src/center/styles/center.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Center = function (_Component) {\n  _inherits(Center, _Component);\n\n  function Center() {\n    _classCallCheck(this, Center);\n\n    return _possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).apply(this, arguments));\n  }\n\n  _createClass(Center, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'center' },\n        _react2.default.createElement(_About2.default, null),\n        _react2.default.createElement(_Project2.default, null),\n        _react2.default.createElement(_Contact2.default, null)\n      );\n    }\n  }]);\n\n  return Center;\n}(_react.Component);\n\nexports.default = Center;\n\n//# sourceURL=webpack:///./src/center/Center.js?");

/***/ }),

/***/ "./src/center/components/About.js":
/*!****************************************!*\
  !*** ./src/center/components/About.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../styles/about.css */ \"./src/center/styles/about.css\");\n\nvar _profile_pic = __webpack_require__(/*! ../styles/images/profile_pic.jpg */ \"./src/center/styles/images/profile_pic.jpg\");\n\nvar _profile_pic2 = _interopRequireDefault(_profile_pic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar About = function (_Component) {\n  _inherits(About, _Component);\n\n  function About() {\n    _classCallCheck(this, About);\n\n    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));\n  }\n\n  _createClass(About, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'about', className: 'about' },\n        _react2.default.createElement(\n          'div',\n          { className: 'bio' },\n          _react2.default.createElement(\n            'h1',\n            null,\n            'About'\n          ),\n          _react2.default.createElement('img', { id: 'profile_pic', src: _profile_pic2.default, alt: 'profile_pic' }),\n          _react2.default.createElement(\n            'h4',\n            null,\n            'Welcome to my website!'\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'I am a Software Developer with computer science degree and experience with both hardware and software technologies. I have a true passion for solving human problems. In the past, I achieved this through providing hardware solutions. In the present, I write elegant code to make Internet a better place for people.'\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Today, most of my personal projects are done with ',\n            _react2.default.createElement(\n              'b',\n              null,\n              ' React, Redux, Mobx, Node.js, and webpack.'\n            ),\n            ' Even though I consider myself a full stack developer, I enjoy working on front end, where I love to see my code having an direct impact on users. Yet I did back end stuff from time to time, most recently wrote a Java command to redact around 17 millions EU profiles for a company, due to GDPR policy requirements.  '\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'In my free time, I enjoy spending time with my wife, working out, biking on my cross bike, playing computer games and reading books. '\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'skills' },\n          _react2.default.createElement(\n            'h1',\n            null,\n            'Skills'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'skill-item' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Languages'\n            ),\n            _react2.default.createElement(\n              'ul',\n              null,\n              _react2.default.createElement(\n                'li',\n                null,\n                'Javascript'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Ruby'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Java'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'HTML5/CSS3'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'skill-item' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Frameworks / Libraries'\n            ),\n            _react2.default.createElement(\n              'ul',\n              null,\n              _react2.default.createElement(\n                'li',\n                null,\n                'React-Redux'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Rails'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Material-UI'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Node.js'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'skill-item' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Database'\n            ),\n            _react2.default.createElement(\n              'ul',\n              null,\n              _react2.default.createElement(\n                'li',\n                null,\n                'PostgreSQL'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'MySQL'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'ActiveRecord'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'skill-item' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Other'\n            ),\n            _react2.default.createElement(\n              'ul',\n              null,\n              _react2.default.createElement(\n                'li',\n                null,\n                'Git/Github'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Heroku'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'webpack'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'AJAX'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'RESTful APIs'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'JSX'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return About;\n}(_react.Component);\n\nexports.default = About;\n\n//# sourceURL=webpack:///./src/center/components/About.js?");

/***/ }),

/***/ "./src/center/components/Contact.js":
/*!******************************************!*\
  !*** ./src/center/components/Contact.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class, _desc, _value, _class2, _descriptor;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _mobx = __webpack_require__(/*! mobx */ \"mobx\");\n\n__webpack_require__(/*! ../styles/contact.css */ \"./src/center/styles/contact.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\nvar Contact = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {\n  _inherits(Contact, _Component);\n\n  function Contact(props) {\n    _classCallCheck(this, Contact);\n\n    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));\n\n    _initDefineProp(_this, 'formInput', _descriptor, _this);\n\n    _this.handleNameChange = function (event) {\n      _this.formInput.name = event.target.value;\n    };\n\n    _this.handleEmailChange = function (event) {\n      _this.formInput.email = event.target.value;\n    };\n\n    _this.handleMessageChange = function (event) {\n      _this.formInput.message = event.target.value;\n    };\n\n    _this.formInput = { formSubmitted: false, name: '', email: '', message: '' };\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.state = { date: new Date() };\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.timerId = setInterval(function () {\n        return _this2.tick();\n      }, 1000);\n    }\n  }, {\n    key: 'tick',\n    value: function tick() {\n      this.setState({\n        date: new Date()\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      console.log('form is submitted');\n      this.formInput.formSubmitted = true;\n      console.log(this.formInput);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'contact', className: 'contact' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Contact'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'body' },\n          _react2.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit },\n            _react2.default.createElement('input', { className: 'form-input', type: 'text', name: 'name', placeholder: 'Name', value: this.formInput.name, onChange: this.handleNameChange }),\n            _react2.default.createElement('input', { className: 'form-input', type: 'text', name: 'email', placeholder: 'Email', value: this.formInput.email, onChange: this.handleEmailChange }),\n            _react2.default.createElement('textarea', { className: 'form-input', type: 'text', name: 'message', placeholder: 'Message', value: this.formInput.message, onChange: this.handleMessageChange }),\n            _react2.default.createElement('input', { className: 'form-input', id: 'submit-button', type: 'submit', value: 'Send Message' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'info' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Daniel Mai'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              ' Milpitas, California'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              ' danielmai1728@gmail.com'\n            ),\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'p',\n                null,\n                this.state.date.toLocaleTimeString()\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              this.timerId,\n              ' '\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Contact;\n}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'formInput', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return null;\n  }\n})), _class2)) || _class;\n\nvar FormOutput = function FormOutput(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'Form Output: '\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'name: ',\n      props.name\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'email: ',\n      props.email\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'message: ',\n      props.message\n    )\n  );\n};\n\nexports.default = Contact;\n\n//# sourceURL=webpack:///./src/center/components/Contact.js?");

/***/ }),

/***/ "./src/center/components/Project.js":
/*!******************************************!*\
  !*** ./src/center/components/Project.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../styles/project.css */ \"./src/center/styles/project.css\");\n\nvar _mbudget = __webpack_require__(/*! ../styles/images/mbudget.jpg */ \"./src/center/styles/images/mbudget.jpg\");\n\nvar _mbudget2 = _interopRequireDefault(_mbudget);\n\nvar _eCommerce = __webpack_require__(/*! ../styles/images/e-commerce.jpg */ \"./src/center/styles/images/e-commerce.jpg\");\n\nvar _eCommerce2 = _interopRequireDefault(_eCommerce);\n\nvar _heroku = __webpack_require__(/*! ../styles/images/heroku.png */ \"./src/center/styles/images/heroku.png\");\n\nvar _heroku2 = _interopRequireDefault(_heroku);\n\nvar _github = __webpack_require__(/*! ../styles/images/github.png */ \"./src/center/styles/images/github.png\");\n\nvar _github2 = _interopRequireDefault(_github);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Project = function (_Component) {\n  _inherits(Project, _Component);\n\n  function Project() {\n    _classCallCheck(this, Project);\n\n    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));\n  }\n\n  _createClass(Project, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'project', className: 'project' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Portfolio'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'grid-container' },\n          _react2.default.createElement(\n            'div',\n            { className: 'item 1' },\n            _react2.default.createElement('img', { className: 'snapshot', src: _mbudget2.default }),\n            _react2.default.createElement(\n              'a',\n              { href: 'https://github.com/danielnmai/budget-webclient', target: '_blank' },\n              _react2.default.createElement('img', { className: 'logo', src: _github2.default })\n            ),\n            _react2.default.createElement(\n              'a',\n              { href: 'http://mbudget.herokuapp.com/', target: '_blank' },\n              _react2.default.createElement('img', { className: 'logo', src: _heroku2.default })\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'mBudget is a personal finance tool that can give you a typical budget based on your salary and location. Built on Ruby on Rails.'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'item 2' },\n            _react2.default.createElement('img', { className: 'snapshot', src: _eCommerce2.default }),\n            _react2.default.createElement(\n              'a',\n              { href: 'https://github.com/danielnmai/mini-capstone', target: '_blank' },\n              _react2.default.createElement('img', { className: 'logo', src: _github2.default })\n            ),\n            _react2.default.createElement(\n              'a',\n              { href: 'https://e-commerce-mini-app.herokuapp.com/', target: '_blank' },\n              _react2.default.createElement('img', { className: 'logo', src: _heroku2.default })\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'A fully functional Ruby on Rails e-commerce app with RESTful routes, complete cart and customer session functions.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Project;\n}(_react.Component);\n\nexports.default = Project;\n\n//# sourceURL=webpack:///./src/center/components/Project.js?");

/***/ }),

/***/ "./src/center/styles/about.css":
/*!*************************************!*\
  !*** ./src/center/styles/about.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader!./about.css */ \"./node_modules/css-loader/index.js!./src/center/styles/about.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/center/styles/about.css?");

/***/ }),

/***/ "./src/center/styles/center.css":
/*!**************************************!*\
  !*** ./src/center/styles/center.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader!./center.css */ \"./node_modules/css-loader/index.js!./src/center/styles/center.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/center/styles/center.css?");

/***/ }),

/***/ "./src/center/styles/contact.css":
/*!***************************************!*\
  !*** ./src/center/styles/contact.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader!./contact.css */ \"./node_modules/css-loader/index.js!./src/center/styles/contact.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/center/styles/contact.css?");

/***/ }),

/***/ "./src/center/styles/images/e-commerce.jpg":
/*!*************************************************!*\
  !*** ./src/center/styles/images/e-commerce.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"83ef364f92ae3272fb85303d3465de4f.jpg\";\n\n//# sourceURL=webpack:///./src/center/styles/images/e-commerce.jpg?");

/***/ }),

/***/ "./src/center/styles/images/github.png":
/*!*********************************************!*\
  !*** ./src/center/styles/images/github.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4f2874c655d35799198cf6062e8b39db.png\";\n\n//# sourceURL=webpack:///./src/center/styles/images/github.png?");

/***/ }),

/***/ "./src/center/styles/images/heroku.png":
/*!*********************************************!*\
  !*** ./src/center/styles/images/heroku.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/center/styles/images/heroku.png?");

/***/ }),

/***/ "./src/center/styles/images/map.jpg":
/*!******************************************!*\
  !*** ./src/center/styles/images/map.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"62c3af7d09085da357fdb8f43161d485.jpg\";\n\n//# sourceURL=webpack:///./src/center/styles/images/map.jpg?");

/***/ }),

/***/ "./src/center/styles/images/mbudget.jpg":
/*!**********************************************!*\
  !*** ./src/center/styles/images/mbudget.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dea5c73f352d97da07b970603ebd284a.jpg\";\n\n//# sourceURL=webpack:///./src/center/styles/images/mbudget.jpg?");

/***/ }),

/***/ "./src/center/styles/images/profile_pic.jpg":
/*!**************************************************!*\
  !*** ./src/center/styles/images/profile_pic.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a478057066cc0a50f075b8d54b77ef65.jpg\";\n\n//# sourceURL=webpack:///./src/center/styles/images/profile_pic.jpg?");

/***/ }),

/***/ "./src/center/styles/project.css":
/*!***************************************!*\
  !*** ./src/center/styles/project.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader!./project.css */ \"./node_modules/css-loader/index.js!./src/center/styles/project.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/center/styles/project.css?");

/***/ }),

/***/ "./src/footer/Footer.js":
/*!******************************!*\
  !*** ./src/footer/Footer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./styles/footer.css */ \"./src/footer/styles/footer.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function Footer(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'footer' },\n    _react2.default.createElement(\n      'p',\n      null,\n      'Copyright @ DANIEL MAI - 2018 All Rights Reserved. '\n    )\n  );\n};\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./src/footer/Footer.js?");

/***/ }),

/***/ "./src/footer/styles/footer.css":
/*!**************************************!*\
  !*** ./src/footer/styles/footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader!./footer.css */ \"./node_modules/css-loader/index.js!./src/footer/styles/footer.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/footer/styles/footer.css?");

/***/ }),

/***/ "./src/header/Header.js":
/*!******************************!*\
  !*** ./src/header/Header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Landing = __webpack_require__(/*! ./components/Landing */ \"./src/header/components/Landing.js\");\n\nvar _Landing2 = _interopRequireDefault(_Landing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'header' },\n        _react2.default.createElement(_Landing2.default, null)\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/header/Header.js?");

/***/ }),

/***/ "./src/header/components/Landing.js":
/*!******************************************!*\
  !*** ./src/header/components/Landing.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _NavBar = __webpack_require__(/*! ./NavBar */ \"./src/header/components/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\n__webpack_require__(/*! ./styles/landing.css */ \"./src/header/components/styles/landing.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Landing = function Landing(props) {\n  return _react2.default.createElement(\n    'div',\n    { id: 'home', className: 'landing' },\n    _react2.default.createElement(\n      'div',\n      { className: 'title' },\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Daniel Mai'\n      )\n    )\n  );\n};\n// import TypedString from './TypedString'\nexports.default = Landing;\n\n//# sourceURL=webpack:///./src/header/components/Landing.js?");

/***/ }),

/***/ "./src/header/components/NavBar.js":
/*!*****************************************!*\
  !*** ./src/header/components/NavBar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./styles/navBar.css */ \"./src/header/components/styles/navBar.css\");\n\nvar _mobxReact = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n\nvar _mobx = __webpack_require__(/*! mobx */ \"mobx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar() {\n    _classCallCheck(this, NavBar);\n\n    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));\n  }\n\n  _createClass(NavBar, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'navbar' },\n        _react2.default.createElement(\n          'a',\n          { href: '#home' },\n          'Home'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: '#project' },\n          'Projects'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: '#about' },\n          'About'\n        ),\n        _react2.default.createElement(\n          'a',\n          { href: '#contact' },\n          'Contact'\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n\nexports.default = NavBar;\n\n//# sourceURL=webpack:///./src/header/components/NavBar.js?");

/***/ }),

/***/ "./src/header/components/styles/images/sf.jpg":
/*!****************************************************!*\
  !*** ./src/header/components/styles/images/sf.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1b550b78d3711279738c0d9329e1917e.jpg\";\n\n//# sourceURL=webpack:///./src/header/components/styles/images/sf.jpg?");

/***/ }),

/***/ "./src/header/components/styles/landing.css":
/*!**************************************************!*\
  !*** ./src/header/components/styles/landing.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./landing.css */ \"./node_modules/css-loader/index.js!./src/header/components/styles/landing.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/header/components/styles/landing.css?");

/***/ }),

/***/ "./src/header/components/styles/navBar.css":
/*!*************************************************!*\
  !*** ./src/header/components/styles/navBar.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./navBar.css */ \"./node_modules/css-loader/index.js!./src/header/components/styles/navBar.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/header/components/styles/navBar.css?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ../App.js */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar config = __webpack_require__(/*! ../../webpack.config.js */ \"./webpack.config.js\");\nvar compiler = (0, _webpack2.default)(config);\n\nif (true) {\n  global.window = {};\n}\n\napp.use((0, _cors2.default)());\n\napp.use((0, _webpackDevMiddleware2.default)(compiler, {\n  publicPath: config[0].output.publicPath\n}));\n\n//Serve the app with the public bundle.js\napp.use(_express2.default.static(\"online/dist/\"));\n\napp.get(\"/\", function (req, res, next) {\n  var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));\n\n  res.send(\"\\n    <!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"description\\\" content=\\\"Personal Website\\\">\\n    <meta name=\\\"author\\\" content=\\\"Daniel Mai\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Daniel Mai</title>\\n</head>\\n<body>\\n    <!-- Root Element -->\\n    <div id=\\\"app\\\">\" + markup + \"</div>\\n    <script src=\\\"bundle.js\\\"></script>              \\n</body>\\n</html>\\n\\n\\n\\n    \");\n});\n\napp.listen(3000, function () {\n  console.log('is browser? ' + false);\n  console.log('window is not defined ' + global.window);\n  console.log(\"Server is listening on port: 3000\\n\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n//Browser Config\nvar browserConfig = {\n  entry: './src/index.js', // entry point\n  output: {\n    path: path.join(__dirname, \"online/dist\"), // place where bundled app will be served\n    filename: 'bundle.js',\n    publicPath: '/'\n  },\n  //Using webpack middleware with express server (for SSR),\n  //so no longer need webpack-dev-server\n  // devServer: {\n  //   contentBase: './src',\n  //   inline: true, // autorefresh\n  //   port: 3000 // development port server\n  // },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/, // search for js files\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      query: {\n        presets: ['env', 'react'],\n        plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']\n      }\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|jpg|gif)$/,\n      use: [{\n        loader: 'url-loader',\n        options: {\n          limit: 8192\n        }\n      }]\n    }, {\n      test: /\\.(woff|woff2)$/,\n      use: {\n        loader: \"url-loader\",\n        options: {\n          limit: 50000\n        }\n      }\n    }]\n  },\n  plugins: [new webpack.DefinePlugin({\n    __isBrowser__: \"true\"\n  })]\n  //Server Config\n};var serverConfig = {\n  entry: './src/server/index.js',\n  target: 'node',\n  externals: [nodeExternals()],\n  output: {\n    path: __dirname,\n    filename: 'server.js',\n    publicPath: '/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/, // search for js files\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      query: {\n        presets: ['env', 'react'],\n        plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']\n      }\n    }, {\n      test: /\\.css$/,\n      use: ['isomorphic-style-loader', { loader: 'css-loader' }]\n    }, {\n      test: /\\.(png|jpg|gif)$/,\n      use: [{\n        loader: 'url-loader',\n        options: {\n          limit: 8192\n        }\n      }]\n    }, {\n      test: /\\.(woff|woff2)$/,\n      use: {\n        loader: \"url-loader\",\n        options: {\n          limit: 50000\n        }\n      }\n    }]\n  },\n  plugins: [new webpack.DefinePlugin({\n    __isBrowser__: \"false\"\n  })]\n\n};\nmodule.exports = [browserConfig, serverConfig];\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });