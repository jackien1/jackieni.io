webpackHotUpdate("static/development/pages/memes.js",{

/***/ "./pages/memes.js":
/*!************************!*\
  !*** ./pages/memes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/navigation */ "./src/components/navigation.js");
/* harmony import */ var react_marquee_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-marquee-slider */ "./node_modules/react-marquee-slider/dist/index.js");
/* harmony import */ var react_marquee_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_marquee_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/jackieni/dev/personal/jackieni.io/pages/memes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Memes =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Memes, _Component);

  function Memes() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Memes);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Memes).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Memes, [{
    key: "render",
    value: function render() {
      var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta;
      var Photo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
        displayName: "memes__Photo",
        componentId: "sc-117bjjp-0"
      })(["width:200px;height:258px;border-radius:4px;box-shadow:0 7px 20px 0 rgba(0,0,0,0.12);object-fit:cover;object-position:top;"]);
      var photos = ["https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Boat.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/EstateMeme.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeDos.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeHeart.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeMind.png"];
      var photosAlt = ["https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeNueve.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeSiete.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/MemeUno.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/UncleMeme.png", "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/moneymeme-revised.png"];
      /*      "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/10.jpg",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/11.jpg",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/15.jpg",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/3.png",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/5.jpg",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/heart-revised.png",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/meme2.png",
            "https://s3.eu-west-3.amazonaws.com/jackieni.io/memes/Regular+Meme+1.png",
          */

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        style: {
          height: "100vh",
          backgroundColor: this.props.batmode ? "black" : "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_src_components_navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: "80vh",
          width: "100vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        style: {
          fontWeight: "bold",
          fontSize: "4vw",
          color: this.props.batmode ? "white" : "black",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Gallery"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(react_marquee_slider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        velocity: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, lodash_times__WEBPACK_IMPORTED_MODULE_12___default()(9, Number).map(function (id) {
        return __jsx(Photo, {
          src: photos[id],
          style: {
            marginLeft: "80px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        });
      })))))));
    }
  }]);

  return Memes;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var batmode = state.theme.batmode;
  return {
    batmode: batmode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Memes));

/***/ })

})
//# sourceMappingURL=memes.js.8cc3453d980aebb654fa.hot-update.js.map