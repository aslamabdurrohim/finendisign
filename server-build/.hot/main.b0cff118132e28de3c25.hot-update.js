exports.id = "main";
exports.modules = {

/***/ "./src/views/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/views/Contact/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.module.css */ \"./src/views/Contact/Contact.module.css\");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Common_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Common/Form */ \"./src/components/Common/Form/index.js\");\n/* harmony import */ var _components_Common_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/Input */ \"./src/components/Common/Input/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar Contact =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Contact, _Component);\n\n  function Contact() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Contact);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      form: {\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSubmit\", function () {});\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleChange\", function (e) {\n      e.preventDefault();\n      var _e$target = e.target,\n          value = _e$target.value,\n          name = _e$target.name;\n\n      _this.setState(function (prevState) {\n        return {\n          form: _objectSpread({}, prevState.form, _defineProperty({}, name, value))\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: \"render\",\n    value: function render() {\n      var form = this.state.form;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_info\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_title\n      }, \"CONTACT ME\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Mail / Deliveries: Dan Mumford, Studio 100, Top Floor, 100 De Beauvoir Road, London N1 4EN\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Email:\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"mailto:danmumforddraws@gmail.com\",\n        target: \"_top\"\n      }, \"danmumforddraws@gmail.com\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"You can follow Dan on,\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.instagram.com/miqdad_af/\"\n      }, \"Instagram\"), \", \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://twitter/mqdfwz\"\n      }, \"Twitter\"), \"\\xA0and \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.facebook.com/miqdad.fawwaz\"\n      }, \"Facebook\"), \".\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_form\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onSubmit: this.handleSubmit,\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_form_container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact_form_name\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"text\",\n        name: \"fname\",\n        value: form.fname,\n        onChange: this.handleChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"text\",\n        name: \"lname\",\n        value: form.lname,\n        onChange: this.handleChange\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"email\",\n        name: \"email\",\n        value: form.email,\n        onChange: this.handleChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"text\",\n        name: \"subject\",\n        value: form.subject,\n        onChange: this.handleChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"textarea\",\n        name: \"message\",\n        value: form.message,\n        onChange: this.handleChange\n      })))));\n    }\n  }]);\n\n  return Contact;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/views/Contact/Contact.js?");

/***/ })

};