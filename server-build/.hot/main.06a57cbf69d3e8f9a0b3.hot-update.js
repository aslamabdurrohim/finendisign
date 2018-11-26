exports.id = "main";
exports.modules = {

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/Navbar.module.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Common/Navbar/Navbar.module.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".navbar_container {\\n    min-height: 150px;\\n    padding: 2rem;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 150px;\\n    z-index: 99;\\n    background: #fff;\\n}\\n\\n.navbar_list {\\n    display: flex;\\n    align-items: center;\\n    margin: 0;\\n    padding: 0;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/Navbar.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".navbaritem {\\n    list-style: none;\\n    font-size: 12px;\\n    font-weight: 600;\\n    margin-right: 2rem;\\n}\\n\\n.navbaritem a {\\n    line-height: 5.4em;\\n    letter-spacing: 2.5px;\\n    text-transform: none;\\n    text-decoration: none;\\n    color: #222;\\n    border-bottom: 1px solid transparent;\\n}\\n\\n.navbaritem a:visited {\\n    color: #00eaff;\\n    border-bottom-color: #00eaff;\\n}\\n\\n.navbaritem a:hover,\\n.navitem_active {\\n    border-bottom-color: #00eaff;\\n    height: 18px;\\n}\\n\\n.navbaritem_brand_wrapper {\\n    width: 100px;\\n    height: 100px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.navbaritem_brand_logo {\\n    width: 100%;\\n    height: auto;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Layout/Layout.module.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"div.layout_container_loaded {\\n    animation: fadein 1s;\\n}\\n\\n.layout_container {\\n    background: #333;\\n    color: #fff;\\n}\\n\\n.layout_main_container {\\n    margin: 150px auto 65px;\\n}\\n\\n.layout_main_wrapper {\\n    padding: 85px 30px 23px;\\n    margin: 0 120px;\\n}\\n\\n@keyframes fadein {\\n    from { opacity: 0;}\\n    to { opacity: 1;}\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Layout/Layout.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./src/components/Common/Navbar/Navbar.js":
/*!************************************************!*\
  !*** ./src/components/Common/Navbar/Navbar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ \"./src/components/Common/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarItem */ \"./src/components/Common/Navbar/NavbarItem/index.js\");\n\n\n\n\nvar Navbar = function Navbar() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar_container\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar_list\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/Navbar.js?");

/***/ }),

/***/ "./src/components/Common/Navbar/Navbar.module.css":
/*!********************************************************!*\
  !*** ./src/components/Common/Navbar/Navbar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Navbar.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/Navbar.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Navbar.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/Navbar.module.css\", function() {\n        content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Navbar.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/Navbar.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Common/Navbar/Navbar.module.css?");

/***/ }),

/***/ "./src/components/Common/Navbar/NavbarItem/NavbarItem.js":
/*!***************************************************************!*\
  !*** ./src/components/Common/Navbar/NavbarItem/NavbarItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarItem.module.css */ \"./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css\");\n/* harmony import */ var _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/logo.png */ \"./src/assets/images/logo.png\");\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar NavbarItem = function NavbarItem() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbaritem\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbaritem_brand_wrapper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Finendisgn Logo\",\n    className: _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbaritem_brand_logo\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbaritem\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    exact: true,\n    activeClassName: _NavbarItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navitem_active,\n    to: \"/contact\"\n  }, \"CONTACT\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarItem);\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/NavbarItem/NavbarItem.js?");

/***/ }),

/***/ "./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css":
/*!***********************************************************************!*\
  !*** ./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../../node_modules/cra-universal/node_modules/css-loader!./NavbarItem.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../../../node_modules/cra-universal/node_modules/css-loader!./NavbarItem.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css\", function() {\n        content = __webpack_require__(/*! !../../../../../node_modules/cra-universal/node_modules/css-loader!./NavbarItem.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css?");

/***/ }),

/***/ "./src/components/Common/Navbar/NavbarItem/index.js":
/*!**********************************************************!*\
  !*** ./src/components/Common/Navbar/NavbarItem/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavbarItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarItem */ \"./src/components/Common/Navbar/NavbarItem/NavbarItem.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_NavbarItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/NavbarItem/index.js?");

/***/ }),

/***/ "./src/components/Common/Navbar/index.js":
/*!***********************************************!*\
  !*** ./src/components/Common/Navbar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ \"./src/components/Common/Navbar/Navbar.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Common/Navbar/index.js?");

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Common_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Navbar */ \"./src/components/Common/Navbar/index.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ \"./src/components/Layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Layout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Layout, _Component);\n\n  function Layout() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Layout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      classes: [_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout_container]\n    });\n\n    return _this;\n  }\n\n  _createClass(Layout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var classes = [_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout_container, _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout_container_loaded];\n      this.setState({\n        classes: classes\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.state.classes;\n      var children = this.props.children;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.join(\" \")\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout_main_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout_main_wrapper\n      }, children))));\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout/Layout.js?");

/***/ }),

/***/ "./src/components/Layout/Layout.module.css":
/*!*************************************************!*\
  !*** ./src/components/Layout/Layout.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\", function() {\n        content = __webpack_require__(/*! !../../../node_modules/cra-universal/node_modules/css-loader!./Layout.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Layout/Layout.module.css?");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/components/Layout/Layout.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Layout/index.js?");

/***/ }),

/***/ "./src/views/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/views/Contact/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.module.css */ \"./src/views/Contact/Contact.module.css\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Contact =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Contact, _Component);\n\n  function Contact() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Contact);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      form: {\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_info\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_title\n      }, \"CONTACT ME\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Mail / Deliveries: Dan Mumford, Studio 100, Top Floor, 100 De Beauvoir Road, London N1 4EN\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Email:\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"mailto:danmumforddraws@gmail.com\",\n        target: \"_top\"\n      }, \"danmumforddraws@gmail.com\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"You can follow Dan on,\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.instagram.com/miqdad_af/\"\n      }, \"Instagram\"), \", \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://twitter/mqdfwz\"\n      }, \"Twitter\"), \"\\xA0and \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.facebook.com/miqdad.fawwaz\"\n      }, \"Facebook\"), \".\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_form\n      })));\n    }\n  }]);\n\n  return Contact;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/views/Contact/Contact.js?");

/***/ })

};