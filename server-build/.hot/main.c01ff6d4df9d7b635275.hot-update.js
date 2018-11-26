exports.id = "main";
exports.modules = {

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Button/Button.module.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Common/Button/Button.module.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".button_home {\\n    background: transparent;\\n    font: inherit;\\n    border: 2px solid #fff;\\n    border-radius: 0;\\n    padding: 0;\\n    width: 9.5rem;\\n    height: 2.5rem;\\n    color: #fff;\\n    cursor: pointer;\\n}\\n\\n.button_home:focus {\\n    outline: none;\\n}\\n\\n.button_home:hover {\\n    background: #fff;\\n    color: #000;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Common/Button/Button.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Footer/Footer.module.css":
false,

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Input/Input.module.css":
false,

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/Navbar.module.css":
false,

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css":
false,

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Layout/Layout.module.css":
false,

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/views/Contact/Contact.module.css":
false,

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cra_express_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cra-express/core */ \"@cra-express/core\");\n/* harmony import */ var _cra_express_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cra_express_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar App = __webpack_require__(/*! ../src/App */ \"./src/App.js\").default;\n\nvar clientBuildPath = path.resolve(__dirname, \"../client\");\nvar app = Object(_cra_express_core__WEBPACK_IMPORTED_MODULE_0__[\"createReactAppExpress\"])({\n  clientBuildPath: clientBuildPath,\n  universalRender: function universalRender(req, res) {\n    return React.createElement(App, null);\n  }\n});\n\nif (true) {\n  module.hot.accept(/*! ../src/App */ \"./src/App.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {\n    App = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/App'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default;\n    console.log(\"✅ Server hot reloaded App\");\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./app */ \"./server/app.js\").default;\n\nvar PORT = process.env.PORT || 3001;\napp.listen(PORT, function () {\n  console.log(\"CRA Server listening on port \".concat(PORT, \"!\"));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Home */ \"./src/views/Home/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      coba: \"\"\n    });\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Common/Button/Button.js":
/*!************************************************!*\
  !*** ./src/components/Common/Button/Button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ \"./src/components/Common/Button/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Home = function Home(_ref) {\n  var type = _ref.type,\n      classBtn = _ref.classBtn,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: type,\n    className: classBtn === \"home\" ? _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button_home : \"\"\n  }, children);\n};\n\nHome.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Common/Button/Button.js?");

/***/ }),

/***/ "./src/components/Common/Footer/Footer.js":
false,

/***/ "./src/components/Common/Footer/Footer.module.css":
false,

/***/ "./src/components/Common/Footer/index.js":
false,

/***/ "./src/components/Common/Form/Form.js":
false,

/***/ "./src/components/Common/Form/index.js":
false,

/***/ "./src/components/Common/Input/Input.js":
false,

/***/ "./src/components/Common/Input/Input.module.css":
false,

/***/ "./src/components/Common/Input/index.js":
false,

/***/ "./src/components/Common/Navbar/Navbar.js":
false,

/***/ "./src/components/Common/Navbar/Navbar.module.css":
false,

/***/ "./src/components/Common/Navbar/NavbarItem/NavbarItem.js":
false,

/***/ "./src/components/Common/Navbar/NavbarItem/NavbarItem.module.css":
false,

/***/ "./src/components/Common/Navbar/NavbarItem/index.js":
false,

/***/ "./src/components/Common/Navbar/index.js":
false,

/***/ "./src/components/Layout/Layout.js":
false,

/***/ "./src/components/Layout/Layout.module.css":
false,

/***/ "./src/components/Layout/index.js":
false,

/***/ "./src/views/Contact/Contact.js":
false,

/***/ "./src/views/Contact/Contact.module.css":
false,

/***/ "./src/views/Contact/index.js":
false,

/***/ "react-dom/server":
false,

/***/ "react-router-dom":
false

};