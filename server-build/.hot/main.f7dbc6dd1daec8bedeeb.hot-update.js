exports.id = "main";
exports.modules = {

/***/ "./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Input/Input.module.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/cra-universal/node_modules/css-loader!./src/components/Common/Input/Input.module.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/cra-universal/node_modules/css-loader/lib/css-base.js */ \"./node_modules/cra-universal/node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".input {\\n    border-radius: 0;\\n    height: 42px;\\n    font: inherit;\\n    font-weight: 400;\\n    padding: 12px;\\n    font-size: 14px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Common/Input/Input.module.css?./node_modules/cra-universal/node_modules/css-loader");

/***/ }),

/***/ "./src/components/Common/Form/Form.js":
/*!********************************************!*\
  !*** ./src/components/Common/Form/Form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Form = function Form(_ref) {\n  var className = _ref.className,\n      onSubmit = _ref.onSubmit,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: onSubmit\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/components/Common/Form/Form.js?");

/***/ }),

/***/ "./src/components/Common/Form/index.js":
/*!*********************************************!*\
  !*** ./src/components/Common/Form/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Common/Form/Form.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Common/Form/index.js?");

/***/ }),

/***/ "./src/components/Common/Input/Input.js":
/*!**********************************************!*\
  !*** ./src/components/Common/Input/Input.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.module.css */ \"./src/components/Common/Input/Input.module.css\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Input = function Input(_ref) {\n  var type = _ref.type,\n      value = _ref.value,\n      onChange = _ref.onChange;\n  var element = null;\n\n  switch (type) {\n    case \"text\":\n      element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        value: value,\n        onChange: onChange,\n        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input\n      });\n      break;\n\n    case \"textarea\":\n      element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        value: value,\n        onChange: onChange,\n        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input\n      });\n      break;\n\n    default:\n      element = null;\n      break;\n  }\n\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./src/components/Common/Input/Input.js?");

/***/ }),

/***/ "./src/components/Common/Input/Input.module.css":
/*!******************************************************!*\
  !*** ./src/components/Common/Input/Input.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Input.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Input/Input.module.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if ( true && typeof window !== 'undefined' && window.document) {\n      var removeCss = function() {};\n      module.hot.accept(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Input.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Input/Input.module.css\", function() {\n        content = __webpack_require__(/*! !../../../../node_modules/cra-universal/node_modules/css-loader!./Input.module.css */ \"./node_modules/cra-universal/node_modules/css-loader/index.js!./src/components/Common/Input/Input.module.css\");\n\n        if (typeof content === 'string') {\n          content = [[module.i, content, '']];\n        }\n\n        removeCss = insertCss(content, { replace: true });\n      });\n      module.hot.dispose(function() { removeCss(); });\n    }\n  \n\n//# sourceURL=webpack:///./src/components/Common/Input/Input.module.css?");

/***/ }),

/***/ "./src/components/Common/Input/index.js":
/*!**********************************************!*\
  !*** ./src/components/Common/Input/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ \"./src/components/Common/Input/Input.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Common/Input/index.js?");

/***/ }),

/***/ "./src/views/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/views/Contact/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.module.css */ \"./src/views/Contact/Contact.module.css\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Common_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Common/Form */ \"./src/components/Common/Form/index.js\");\n/* harmony import */ var _components_Common_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/Input */ \"./src/components/Common/Input/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar Contact =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Contact, _Component);\n\n  function Contact() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Contact);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      form: {\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_info\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_title\n      }, \"CONTACT ME\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Mail / Deliveries: Dan Mumford, Studio 100, Top Floor, 100 De Beauvoir Road, London N1 4EN\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Email:\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"mailto:danmumforddraws@gmail.com\",\n        target: \"_top\"\n      }, \"danmumforddraws@gmail.com\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"You can follow Dan on,\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.instagram.com/miqdad_af/\"\n      }, \"Instagram\"), \", \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://twitter/mqdfwz\"\n      }, \"Twitter\"), \"\\xA0and \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.facebook.com/miqdad.fawwaz\"\n      }, \"Facebook\"), \".\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_form\n      })));\n    }\n  }]);\n\n  return Contact;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/views/Contact/Contact.js?");

/***/ })

};