exports.id = "main";
exports.modules = {

/***/ "./src/components/Common/Button/Button.js":
/*!************************************************!*\
  !*** ./src/components/Common/Button/Button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ \"./src/components/Common/Button/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Home = function Home(_ref) {\n  var type = _ref.type,\n      classBtn = _ref.classBtn,\n      children = _ref.children;\n  var classes = \"\";\n\n  switch (classBtn) {\n    case \"submit\":\n      classes = _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button_sumit;\n      break;\n\n    default:\n      classes = _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button_home;\n      break;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: type,\n    className: classes\n  }, children);\n};\n\nHome.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Common/Button/Button.js?");

/***/ })

};