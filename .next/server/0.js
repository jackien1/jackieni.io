exports.ids = [0];
exports.modules = {

/***/ "./src/components/viewer.js":
/*!**********************************!*\
  !*** ./src/components/viewer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_model_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/model-viewer */ "@google/model-viewer");
/* harmony import */ var _google_model_viewer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_model_viewer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jackieni/dev/personal/jackieni.io/src/components/viewer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Viewer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("model-viewer", {
      src: "../../static/out.glb",
      style: {
        height: "80vh",
        width: "100vw"
      },
      "background-color": "black",
      "auto-rotate": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

/***/ })

};;
//# sourceMappingURL=0.js.map