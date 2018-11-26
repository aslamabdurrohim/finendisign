exports.id = "main";
exports.modules = {

/***/ "./src/components/Common/Input/Input.js":
/*!**********************************************!*\
  !*** ./src/components/Common/Input/Input.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.css */ \"./src/components/Common/Input/Input.module.css\");\n/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Input = function Input(_ref) {\n  var type = _ref.type,\n      name = _ref.name,\n      value = _ref.value,\n      onChange = _ref.onChange;\n  var element = null;\n\n  switch (type) {\n    case \"text\":\n      element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        value: value,\n        name: name,\n        onChange: onChange,\n        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input\n      });\n      break;\n\n    case \"textarea\":\n      element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        value: value,\n        name: name,\n        onChange: onChange,\n        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input\n      });\n      break;\n\n    case \"email\":\n      element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"email\",\n        value: value,\n        name: name,\n        onChange: onChange,\n        className: _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input\n      });\n      break;\n\n    default:\n      element = null;\n      break;\n  }\n\n  return element;\n};\n\nInput.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./src/components/Common/Input/Input.js?");

/***/ })

};