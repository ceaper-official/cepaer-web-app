webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_ui_cross_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/ui/cross.js */ "./assets/icons/ui/cross.js");
/* harmony import */ var _assets_icons_ui_mail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/ui/mail.js */ "./assets/icons/ui/mail.js");
/* harmony import */ var _assets_icons_ui_password_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/ui/password.js */ "./assets/icons/ui/password.js");
/* harmony import */ var _assets_icons_social_google_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/social/google.js */ "./assets/icons/social/google.js");
/* harmony import */ var _assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/social/facebook.js */ "./assets/icons/social/facebook.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/kerry/ceaper/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var SignUp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp, _React$Component);

  var _super = _createSuper(SignUp);

  function SignUp() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      Component: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "selectSignUp", function () {
      return _this.setState({
        Component: SignUpOK
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      var Component = this.state.Component;
      if (Component) return __jsx(Component, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 26
        }
      });
      return __jsx("div", {
        className: "actions-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "actions-row-bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "actions-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "actions-inner card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "actions-row-close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, __jsx(_assets_icons_ui_cross_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 42
        }
      })), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210"), __jsx("div", {
        className: "action-button-wrapper input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: "input-prefix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx(_assets_icons_ui_mail_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      })), __jsx("input", {
        className: "input-inner",
        placeholder: "E\u30E1\u30FC\u30EB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      })), __jsx("div", {
        className: "action-button-wrapper input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 3
        }
      }, __jsx("span", {
        className: "input-prefix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }
      }, __jsx(_assets_icons_ui_password_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 3
        }
      })), __jsx("input", {
        className: "input-inner",
        placeholder: "\u30D1\u30B9\u30EF\u30FC\u30C9",
        type: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 3
        }
      })), __jsx("div", {
        className: "action-button-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx("button", {
        className: "button-black button",
        onClick: this.selectSignUp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210")), __jsx("p", {
        className: "xs-text grey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u4E8B\u3067\u3001Ceaper\u306E", __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/terms",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 63
        }
      }, __jsx("a", {
        className: "border-text grey xs-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      }, "\u5229\u7528\u898F\u7D04")), "\u3001", __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/privacy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "border-text grey xs-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 27
        }
      }, "\u30C7\u30FC\u30BF\u306B\u95A2\u3059\u308B\u30DD\u30EA\u30B7\u30FC\u3001Cookie\u30DD\u30EA\u30B7\u30FC")), "\u306B\u540C\u610F\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), __jsx("span", {
        className: "actions-subtitle xs-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, "\u307E\u305F\u306F"), __jsx("div", {
        className: "action-button-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx("button", {
        className: "button google-button social-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 3
        }
      }, __jsx("span", {
        className: "button-prefix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 58
        }
      }, __jsx(_assets_icons_social_google_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 90
        }
      })), __jsx("span", {
        className: "social-button-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 107
        }
      }, "Google\u3067\u4F5C\u6210"))), __jsx("div", {
        className: "action-button-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx("button", {
        className: "button facebook-button social-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "button-prefix",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 68
        }
      }, __jsx(_assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 100
        }
      })), __jsx("span", {
        className: "social-button-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 119
        }
      }, "Facebook\u3067\u4F5C\u6210"))), __jsx("div", {
        className: "hr-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "make-account-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx("p", {
        className: "xs-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, "\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u3059\u304B\uFF1F"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/signin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "xs-text hover-black accent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, "\u30ED\u30B0\u30A4\u30F3"))))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

function SignUpOK() {
  return __jsx("div", {
    className: "actions-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "actions-row-bg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "actions-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "actions-inner card",
    style: {
      paddingTop: "6rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "actions-row-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_assets_icons_ui_cross_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 40
    }
  })), __jsx("div", {
    id: "vote-wrapper",
    className: "card card-wrapper bg-green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"), __jsx("p", {
    className: "xs-text",
    style: {
      margin: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "\u5148\u7A0B\u3001\u5165\u529B\u3057\u3066\u9802\u3044\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5B9B\u306B\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u4F5C\u6210\u624B\u9806\u3092\u8A18\u8F09\u3057\u305F\u30E1\u30FC\u30EB\u3092\u304A\u9001\u308A\u3044\u305F\u3057\u307E\u3057\u305F\u3002\u5C4A\u3044\u305F\u30E1\u30FC\u30EB\u306E\u5185\u5BB9\u306B\u6CBF\u3063\u3066\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u4F5C\u6210\u624B\u7D9A\u304D\u3092\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002")))));
}

/***/ })

})
//# sourceMappingURL=signup.js.6c793c1d8cb272afd9e8.hot-update.js.map