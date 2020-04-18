require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = remax;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remax_wechat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_C__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var _page = function _page() {
  var _, _obj$a;

  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_3__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  var obj = {};
  var value = (_ = 0) !== null && _ !== void 0 ? _ : 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['page-index']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_C__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "b"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar",
    key: "my-view"
  }, props, {
    __key: "my-view"
  }), "foo", obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["FunctionalPageNavigator"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](UnBindingComponent, null), TextElement);
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_1__["createPageConfig"])(_page, "pages/index")));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = regenerator-runtime;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = remax/ali;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = remax/wechat;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);


 // 测试 case: 样式引入先后顺序

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "c ".concat(className)
  }, "c");
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page-index":"_1ZW9Y8KCrSK23n2M-ZMy7g"};

/***/ })
],[[6,0]]]);