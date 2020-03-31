webpackHotUpdate("static/development/pages/user.js",{

/***/ "./layouts/shot_user.js":
/*!******************************!*\
  !*** ./layouts/shot_user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserShot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_ui_cook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/ui/cook.js */ "./assets/icons/ui/cook.js");
/* harmony import */ var _assets_icons_ui_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/ui/time.js */ "./assets/icons/ui/time.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/shot_user.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RecipeImg() {
  return __jsx("img", {
    src: "images/default/food.jpg",
    alt: "recipe image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

function UserShot() {
  return __jsx("div", {
    "class": "shot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    "class": "user-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    "class": "user-avatar user-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    "class": "user-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u30B4\u30EB\u30B4\u30F3\u30BE\u30FC\u30E9\u3068\u30C8\u30DE\u30C8\u306E\u30AB\u30D7\u30EC\u30FC\u30BC"), __jsx("a", {
    "class": "user-link user-text name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u30B1\u30EA\u30FC\u5C0F\u7530"))), __jsx("div", {
    "class": "shot-recipe-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    href: "/recipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(RecipeImg, {
    "class": "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("div", {
    "class": "shot-recipe-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    "class": "recipes-bio-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    "class": "recipes-inner recipes-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    "class": "cook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    "class": "recipes-ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_assets_icons_ui_cook_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "1135")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u30FB"), __jsx("div", {
    "class": "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("span", {
    "class": "recipes-ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_assets_icons_ui_time_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), "15\u5206")), __jsx("div", {
    "class": "shot-ingredients-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    "class": "shot-ingredients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u30C8\u30DE\u30C8, \u30B4\u30EB\u30B4\u30F3\u30BE\u30FC\u30E9, \u30D0\u30B8\u30EB, \u30AA\u30EA\u30FC\u30D6\u30AA\u30A4\u30EB, \u5869, \u9ED2\u3053\u3057\u3087\u3046"))))));
}

/***/ }),

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_ui_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/ui/add.js */ "./assets/icons/ui/add.js");
/* harmony import */ var _assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/social/instagram.js */ "./assets/icons/social/instagram.js");
/* harmony import */ var _assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/social/facebook.js */ "./assets/icons/social/facebook.js");
/* harmony import */ var _assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/social/twitter.js */ "./assets/icons/social/twitter.js");
/* harmony import */ var _layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/shot_user.js */ "./layouts/shot_user.js");
var _jsxFileName = "/Users/kerry/ceaper/pages/user.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function User() {
  return __jsx("img", {
    src: "images/default/user.jpg",
    alt: "user image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    id: "user-page",
    "class": "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    "class": "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    "class": "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    "class": "user-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    "class": "user-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    "class": "user-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    "class": "user-text name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u30B1\u30EA\u30FC\u5C0F\u7530"), __jsx("p", {
    "class": "user-bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\u79C1\u306F\u3001\u6599\u7406\u304C\u5927\u597D\u304D\u306A\u751F\u7C8B\u306E\u30AD\u30E3\u30F3\u30D1\u30FC\u3067\u3059\u3002\u90317\u3067\u3001\u30AD\u30E3\u30F3\u30D7\u306B\u884C\u3063\u3066\u3044\u307E\u3059\uFF01\u3088\u304F\u51FA\u6CA1\u3059\u308B\u5834\u6240\u306F\u9AD8\u5C3E\u5C71\u3067\u3059\u3002"), __jsx("div", {
    "class": "user-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    "class": "user-social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("a", {
    "class": "user-social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("a", {
    "class": "user-social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("div", {
    "class": "user-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    "class": "user-data-inner xs-text user-data-inner-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "134"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u4F5C\u3063\u305F\u6599\u7406")), __jsx("a", {
    "class": "user-data-inner xs-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "13"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\u30EC\u30B7\u30D4")), __jsx("a", {
    "class": "user-data-inner xs-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "204"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u30D5\u30A9\u30ED\u30EF\u30FC")), __jsx("a", {
    "class": "user-data-inner xs-text user-data-inner-last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "13"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u30D5\u30A9\u30ED\u30FC"))), __jsx("a", {
    "class": "button add-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_assets_icons_ui_add_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "\u30D5\u30A9\u30ED\u30FC"))))), __jsx("div", {
    "class": "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    "class": "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    "class": "tab-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("input", {
    id: "tab01",
    type: "radio",
    name: "tab",
    "class": "tab-switch",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("label", {
    "class": "tab-label s-text",
    "for": "tab01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u6295\u7A3F\u3057\u305F\u30EC\u30B7\u30D4"), __jsx("div", {
    "class": "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("input", {
    id: "tab02",
    type: "radio",
    name: "tab",
    "class": "tab-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("label", {
    "class": "tab-label s-text",
    "for": "tab02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u4F5C\u3063\u305F\u30EC\u30B7\u30D4"), __jsx("div", {
    "class": "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4 2"), __jsx("input", {
    id: "tab03",
    type: "radio",
    name: "tab",
    "class": "tab-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("label", {
    "class": "tab-label s-text",
    "for": "tab03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u304A\u6C17\u306B\u5165\u308A"), __jsx("div", {
    "class": "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4 3")))));
});

/***/ })

})
//# sourceMappingURL=user.js.a178b32785778df92e02.hot-update.js.map