exports.id = "main";
exports.modules = {

/***/ "../../../../src/components/Common/Button/Button.js":
/*!*************************************************************************************************!*\
  !*** /Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ \"../../../../src/components/Common/Button/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Home = function Home(_ref) {\n  var type = _ref.type,\n      classBtn = _ref.classBtn,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: type,\n    className: classBtn === \"home\" ? _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button_home : \"\"\n  }, children);\n};\n\nHome.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:////Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.js?");

/***/ }),

/***/ "../../../../src/components/Common/Button/Button.module.css":
/*!*********************************************************************************************************!*\
  !*** /Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.module.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Button.module.css */ \"../../node_modules/css-loader/index.js!../../../../src/components/Common/Button/Button.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"../../../isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Button.module.css */ \"../../node_modules/css-loader/index.js!../../../../src/components/Common/Button/Button.module.css\", function() {\n        content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Button.module.css */ \"../../node_modules/css-loader/index.js!../../../../src/components/Common/Button/Button.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:////Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.module.css?");

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../../../src/components/Common/Button/Button.module.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /Users/miqdad/Documents/Works/Projects/finendisign/node_modules/cra-universal/node_modules/css-loader!/Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.module.css ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"../../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".button_home {\\n    background: transparent;\\n    font: inherit;\\n    border: 2px solid #fff;\\n    border-radius: 0;\\n    padding: 1rem;\\n    width: 2rem;\\n    height: 1rem;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:////Users/miqdad/Documents/Works/Projects/finendisign/src/components/Common/Button/Button.module.css?/Users/miqdad/Documents/Works/Projects/finendisign/node_modules/cra-universal/node_modules/css-loader");

/***/ })

};