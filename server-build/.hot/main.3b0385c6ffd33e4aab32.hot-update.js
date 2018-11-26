exports.id = "main";
exports.modules = {

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Footer/Footer.module.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Common/Footer/Footer.module.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".footer {\\n    height: 65px;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    background: #fff;\\n    position: fixed;\\n    width: 100vw;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Common/Footer/Footer.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./src/components/Common/Footer/Footer.js":
/*!************************************************!*\
  !*** ./src/components/Common/Footer/Footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ \"./src/components/Common/Footer/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Footer = function Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__[\"styles\"].footer\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Common/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Common/Footer/Footer.module.css":
/*!********************************************************!*\
  !*** ./src/components/Common/Footer/Footer.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Footer.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Footer/Footer.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Footer.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Footer/Footer.module.css\", function() {\n        content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Footer.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Footer/Footer.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Common/Footer/Footer.module.css?");

/***/ }),

/***/ "./src/components/Common/Footer/index.js":
/*!***********************************************!*\
  !*** ./src/components/Common/Footer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/components/Common/Footer/Footer.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Common/Footer/index.js?");

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Common_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Navbar */ \"./src/components/Common/Navbar/index.js\");\n/* harmony import */ var _Common_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Footer */ \"./src/components/Common/Footer/index.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./src/components/Layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar Layout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Layout, _Component);\n\n  function Layout() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Layout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      classes: [_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_container]\n    });\n\n    return _this;\n  }\n\n  _createClass(Layout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var classes = [_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_container, _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_container_loaded];\n      this.setState({\n        classes: classes\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.state.classes;\n      var children = this.props.children;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.join(\" \")\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_main_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout_main_wrapper\n      }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout/Layout.js?");

/***/ })

};