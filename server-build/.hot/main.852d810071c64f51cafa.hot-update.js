exports.id = "main";
exports.modules = {

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Layout/Layout.module.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Layout/Layout.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Common_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Navbar */ \"./src/components/Common/Navbar/index.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ \"./src/components/Layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Layout = function Layout(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"layout_container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout/Layout.js?");

/***/ }),

/***/ "./src/components/Layout/Layout.module.css":
/*!*************************************************!*\
  !*** ./src/components/Layout/Layout.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\", function() {\n        content = __webpack_require__(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Layout/Layout.module.css?");

/***/ })

};