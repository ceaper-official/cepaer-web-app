(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/global.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*BREAKPOINTS*/\nbody {\n  /*FONTS*/\n  --headings: \"Apercu\", \"Heisei Kaku Gothic\", sans-serif;\n  --paragraph: \"Ceaper Round\" , sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  font-feature-settings: \"pkna\";\n  /*PRIMARY*/\n  --accent: #ff5445;\n  --white: #fff;\n  --black: #231e2d;\n  --grey: #b0b0b0;\n  --articleText: #4f4b57;\n  /*SECONDAY*/\n  --cream: #e5ddd5;\n  --botticelli: #cadee5;\n  --basil: #cfe5ca;\n  /*OTHER*/\n  --background-color: #fff;\n  --background-grey: rgba(176,176,176, 0.1);\n  --horizontalRule: rgba(8, 8, 11, 0.15);\n  /*GRADATIONS*/\n  --articleText80:  rgba(79,75,87, .8);\n  --accent60: rgba(255, 84, 69, .6);\n  --grey60:  rgba(176,176,176,.6);\n  --grey40:  rgba(176,176,176, .4);\n  --grey20:  rgba(176,176,176,.2);\n  /*DARK*/\n  --d-articleText: #d1d1d1; }\n\n::-moz-selection {\n  background: var(--accent);\n  color: #fcfcfc; }\n\n::selection {\n  background: var(--accent);\n  color: #fcfcfc; }\n\n::-moz-selection {\n  background: var(--accent);\n  color: #fcfcfc; }\n\n.actions-row {\n  position: relative;\n  width: 100%;\n  height: 100vh; }\n  .actions-row .actions-row-bg {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 9; }\n  .actions-row .actions-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh; }\n  .actions-row .actions-inner {\n    background: var(--background-color);\n    position: relative;\n    z-index: 10;\n    text-align: center;\n    padding: 3rem 2rem;\n    overflow: visible; }\n    @media screen and (max-width: 735px) {\n      .actions-row .actions-inner {\n        margin: 1.5rem; } }\n  .actions-row .actions-row-close {\n    position: absolute;\n    right: 0;\n    top: 0;\n    /* margin: 0.8rem; */\n    z-index: 1052;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    height: 60px;\n    width: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px; }\n    .actions-row .actions-row-close svg {\n      width: 15px;\n      height: 15px; }\n  .actions-row h1 {\n    font-size: 1.8rem;\n    margin: 0 0 3rem;\n    font-weight: 500; }\n  .actions-row .action-button-wrapper {\n    display: grid;\n    margin: 1.5rem 2.5rem;\n    grid-template-columns: minmax(-webkit-max-content, 400px);\n    grid-template-columns: minmax(max-content, 400px); }\n    @media screen and (max-width: 735px) {\n      .actions-row .action-button-wrapper {\n        margin: 1.5rem 0; } }\n  .actions-row .input-inner {\n    padding: 1.2rem 2rem; }\n  .actions-row .button {\n    padding: 1.2rem 2rem; }\n  .actions-row .actions-subtitle {\n    padding: 2rem 0;\n    display: flex;\n    align-items: center; }\n    .actions-row .actions-subtitle:before {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-right: 2rem; }\n    .actions-row .actions-subtitle:after {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-left: 2rem; }\n  .actions-row p {\n    max-width: 400px;\n    margin: 2rem auto 1rem;\n    text-align: left; }\n  .actions-row .hr-text {\n    margin-top: 3.9rem; }\n  .actions-row .make-account-link {\n    display: inline-flex;\n    margin: 1.5rem 0 0; }\n    .actions-row .make-account-link p {\n      margin: 0; }\n    .actions-row .make-account-link a {\n      color: var(--accent);\n      white-space: nowrap;\n      margin-left: 1.3rem; }\n\na {\n  color: var(--articleText);\n  line-height: 1.756; }\n  @media screen and (max-width: 376px) {\n    a {\n      font-size: 1.6rem; } }\n\na:hover {\n  -webkit-text-decoration-color: var(--accent);\n          text-decoration-color: var(--accent); }\n\na.hover-accent:hover {\n  color: var(--accent); }\n  a.hover-accent:hover svg path {\n    fill: var(--accent); }\n\na.hover-black:hover {\n  color: var(--black); }\n\na.hover-white:hover {\n  color: var(--white); }\n\na.hover-line:hover {\n  text-decoration: underline;\n  -webkit-text-decoration-color: var(--black);\n          text-decoration-color: var(--black); }\n\n/*もっと見る*/\n.learn-more {\n  white-space: nowrap;\n  font-size: 1.5rem;\n  align-items: center;\n  padding-top: 2.5rem;\n  justify-content: flex-end; }\n  .learn-more svg {\n    width: 15px;\n    margin-left: 2rem; }\n  .learn-more:hover {\n    text-decoration: underline; }\n\n/*イベント無効*/\n.event-none {\n  pointer-events: none; }\n\n.border-text {\n  text-decoration: underline; }\n\n/*Fade Up*/\n.pr-half, .medium, .iconset, img.shadow, .fade-up {\n  position: relative;\n  top: 70px;\n  opacity: 0;\n  will-change: opacity,transform; }\n\n/*Fade Up Left*/\n.fade-l {\n  position: relative;\n  left: -70px;\n  opacity: 0;\n  will-change: opacity,transform; }\n\n.fade-l:first-child {\n  transition: all .6s; }\n\n.fade-l:nth-child(2n) {\n  transition: all .8s; }\n\n.fade-l:nth-child(3n) {\n  transition: all 1s; }\n\n.fade-l.moving {\n  opacity: 1;\n  left: 0; }\n\n/*Fade Up Right*/\n.fade-r {\n  position: relative;\n  left: 70px;\n  opacity: 0;\n  will-change: opacity,transform; }\n\n.fade-r:first-child {\n  transition: all .6s; }\n\n.fade-r:nth-child(2n) {\n  transition: all .8s; }\n\n.fade-r:nth-child(3n) {\n  transition: all 1s; }\n\n.fade-r.moving {\n  opacity: 1;\n  left: 0; }\n\n.pr-half:first-child {\n  transition: all .6s; }\n\n.pr-half:nth-child(2n) {\n  transition: all .8s; }\n\n.pr-half:nth-child(3n) {\n  transition: all 1s; }\n\n.pr-half.moving {\n  opacity: 1;\n  top: 0; }\n\n.medium:first-child {\n  transition: all .6s; }\n\n.medium:nth-child(2n) {\n  transition: all .8s; }\n\n.medium:nth-child(3n) {\n  transition: all 1s; }\n\n.medium.moving {\n  opacity: 1;\n  top: 0; }\n\n.iconset:first-child {\n  transition: all .6s; }\n\n.iconset:nth-child(2n) {\n  transition: all .8s; }\n\n.iconset:nth-child(3n) {\n  transition: all 1s; }\n\n.iconset.moving {\n  opacity: 1;\n  top: 0; }\n\nimg.shadow:first-child {\n  transition: all .6s; }\n\nimg.shadow:nth-child(2n) {\n  transition: all .8s; }\n\nimg.shadow:nth-child(3n) {\n  transition: all 1s; }\n\nimg.shadow.moving {\n  opacity: 1;\n  top: 0; }\n\n.fade-up:first-child {\n  transition: all .6s; }\n\n.fade-up:nth-child(2n) {\n  transition: all .8s; }\n\n.fade-up:nth-child(3n) {\n  transition: all 1s; }\n\n.fade-up:nth-child(4n) {\n  transition: all 1.2s; }\n\n.fade-up:nth-child(5n) {\n  transition: all 1.4s; }\n\n.fade-up:nth-child(6n) {\n  transition: all 1.6s; }\n\n.fade-up:nth-child(7n) {\n  transition: all 1.8s; }\n\n.fade-up:nth-child(8n) {\n  transition: all 2s; }\n\n.fade-up:nth-child(9n) {\n  transition: all 2.2s; }\n\n.fade-up.moving {\n  opacity: 1;\n  top: 0; }\n\n.articles {\n  display: none; }\n\n.badge-wrapper {\n  display: flex;\n  align-items: center;\n  white-space: nowrap; }\n\n.badge {\n  margin-left: 1rem;\n  padding: .1rem .6rem;\n  background: var(--accent);\n  color: var(--white);\n  border-radius: 4px;\n  font-size: 1.2rem;\n  pointer-events: none;\n  display: table; }\n\n.top-recipe {\n  align-items: center; }\n  .top-recipe svg {\n    width: auto;\n    height: 1em;\n    margin: 0;\n    position: relative;\n    top: -.1em; }\n\n.tag-bar-wrapper {\n  position: relative; }\n  .tag-bar-wrapper .tag-bar-ico {\n    position: absolute;\n    width: 40px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    background: var(--white);\n    z-index: 10;\n    display: flex;\n    justify-content: flex-start; }\n  .tag-bar-wrapper .tag-bar-back {\n    left: 0; }\n  .tag-bar-wrapper .tag-bar-next {\n    right: 0;\n    justify-content: flex-end; }\n\n.tag-bar {\n  overflow-x: auto;\n  white-space: nowrap;\n  margin: 0 0 2rem;\n  position: relative;\n  padding: 0 2.5rem; }\n\n.tag {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  margin: 1rem;\n  color: var(--grey); }\n  .tag:hover {\n    color: var(--black); }\n\n/*Filter*/\n.filter {\n  display: inline-block;\n  padding-left: 5rem;\n  margin-right: 1rem;\n  white-space: nowrap; }\n  .filter svg {\n    margin-right: 1rem;\n    position: relative;\n    top: -.1rem; }\n  .filter .button svg {\n    width: 15px; }\n  .filter .button:hover {\n    color: var(--black);\n    background: none; }\n\nblockquote p:before {\n  content: \"“\";\n  font-family: \"Apercu\", sans-serif; }\n\nblockquote p:after {\n  content: \"”\";\n  font-family: \"Apercu\", sans-serif;\n  margin-left: -.6em; }\n\nblockquote {\n  margin: auto; }\n\nblockquote > p {\n  font-family: var(--serif);\n  margin: 0 auto;\n  font-size: 2.6rem;\n  font-weight: 500;\n  text-align: center;\n  color: var(--primary); }\n  @media screen and (max-width: 540px) {\n    blockquote > p {\n      font-size: 2rem; } }\n  @media screen and (max-width: 376px) {\n    blockquote > p {\n      font-size: 1.8rem; } }\n\n.paragraph {\n  margin: 0 auto 3.5rem; }\n  @media screen and (max-width: 735px) {\n    .paragraph {\n      margin-bottom: 2em; } }\n\n.button {\n  padding: 1rem 2rem;\n  color: var(--accent);\n  border: 1px solid var(--accent);\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 1.4rem;\n  line-height: 1; }\n  .button:hover {\n    color: var(--white);\n    background: var(--accent); }\n\n/*アクセント*/\n.button-accent {\n  color: var(--white);\n  border: 1px solid var(--accent);\n  background: var(--accent); }\n  .button-accent svg path {\n    fill: var(--white); }\n  .button-accent:hover {\n    border: 1px solid var(--black);\n    background: var(--black); }\n\n/*ブラック*/\n.button-black {\n  color: var(--white);\n  border: 1px solid var(--black);\n  background: var(--black); }\n  .button-black svg path {\n    fill: var(--white); }\n  .button-black:hover {\n    border: 1px solid var(--accent);\n    background: var(--accent); }\n\n.button-black-ol {\n  color: var(--black);\n  border: 1px solid var(--black); }\n  .button-black-ol:hover {\n    color: var(--white);\n    background: var(--black); }\n\n/*グレーアウト*/\n.button-grey {\n  color: var(--grey);\n  border: 1px solid var(--grey);\n  pointer-events: none; }\n\n/*アクション*/\n.action-button {\n  font-size: 1.3rem;\n  padding: 0.5rem 0.7rem; }\n\n/*テキスト*/\n.button-text {\n  padding: 0.5rem 2rem;\n  color: var(--accent);\n  border-radius: 4px;\n  font-weight: 500; }\n  .button-text:hover {\n    text-decoration: underline; }\n\n/*アイコン*/\n.ico {\n  display: inline-flex;\n  align-items: center; }\n  .ico svg {\n    height: auto;\n    width: 15px;\n    margin-right: 0.5em; }\n\n.ico-back {\n  display: inline-flex;\n  align-items: center; }\n  .ico-back svg {\n    height: auto;\n    width: 15px;\n    margin-left: 0.5em; }\n\n.social-button {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black); }\n  .social-button:hover {\n    background: var(--black); }\n  .social-button .button-prefix {\n    left: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background: var(--white);\n    border-right: 1px solid var(--black); }\n    .social-button .button-prefix svg {\n      width: auto;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding: 0 1.5rem;\n      margin: 0; }\n  .social-button .social-button-inner {\n    padding-left: 50px;\n    width: 100%; }\n\n/*入力*/\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative; }\n  .input-wrapper .input-prefix {\n    left: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    align-items: center; }\n    .input-wrapper .input-prefix svg {\n      width: auto;\n      height: 15px;\n      display: flex;\n      align-items: center;\n      padding: 0 1.5rem; }\n      .input-wrapper .input-prefix svg path {\n        fill: var(--grey); }\n  .input-wrapper .input-suffix {\n    right: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    line-height: inherit; }\n    .input-wrapper .input-suffix:before {\n      content: \"\";\n      position: absolute;\n      top: 25%;\n      left: 0;\n      width: 1px;\n      height: 50%;\n      background: #dfe1ea; }\n    .input-wrapper .input-suffix a {\n      display: flex;\n      height: 100%;\n      align-items: center;\n      padding: 0 2rem; }\n  .input-wrapper .input-inner {\n    padding-left: 45px; }\n\n.input-inner {\n  padding: 1.5rem 2rem;\n  border: 1px solid var(--horizontalRule);\n  border-radius: 4px;\n  font-weight: 500; }\n  .input-inner::-webkit-input-placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem; }\n  .input-inner::-moz-placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem; }\n  .input-inner:-ms-input-placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem; }\n  .input-inner::-ms-input-placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem; }\n  .input-inner::placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem; }\n\n.select-button {\n  height: 100%;\n  width: 100%;\n  color: var(--articleText);\n  padding: 3.5rem 3rem;\n  border: 1px solid var(--horizontalRule);\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 1.4rem;\n  line-height: 1; }\n  .select-button svg {\n    width: 30px;\n    margin-right: 3rem; }\n  .select-button:hover {\n    border-color: var(--black);\n    background: var(--background-grey); }\n\n.select-button-bottom {\n  margin-bottom: 1.5rem; }\n\n.accent {\n  color: var(--accent); }\n\n.grey {\n  color: var(--grey); }\n\n/*Background*/\n.bg-accent {\n  background-color: var(--accent); }\n\n.bg-accent60 {\n  background-color: var(--accent60); }\n\n.bg-black {\n  background-color: var(--black); }\n\n.bg-grey {\n  background-color: var(--background-grey); }\n\n.contents {\n  padding: 5rem 0;\n  background: var(--bacground-color); }\n\n.contents2 {\n  padding: 10rem 0; }\n\n.contents-top2 {\n  padding-top: 10rem; }\n\n@media screen and (max-width: 540px) {\n  .contents {\n    padding: 3rem 0; }\n  .contents2 {\n    padding: 6rem 0; }\n  .contents-top2 {\n    padding-top: 6rem; } }\n\n/*Card*/\n.card {\n  border-radius: 4px;\n  overflow: hidden; }\n\n.card-wrapper {\n  padding: 2rem; }\n\n.card-border {\n  border-radius: 10px;\n  border: 1px solid var(--horizontalRule); }\n\n/*Border*/\n.border {\n  border: 1px solid var(--horizontalRule); }\n\n/*Flex*/\n.flex {\n  display: flex; }\n\n/************************FOOTER************************/\n#footer {\n  position: relative; }\n  #footer a, #footer p, #footer h6 {\n    font-size: 1.4rem; }\n    @media screen and (max-width: 735px) {\n      #footer a, #footer p, #footer h6 {\n        font-size: 1.3rem; } }\n  @media screen and (max-width: 540px) {\n    #footer {\n      margin-bottom: 56px; } }\n\n.footer-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 6rem; }\n  .footer-container p, .footer-container a {\n    margin-bottom: 0; }\n  @media screen and (max-width: 735px) {\n    .footer-container {\n      padding-bottom: 3rem;\n      display: block; } }\n\n/*アプリ・リンク*/\n#footer-app.footer-app-grid {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  grid-gap: 10rem; }\n  #footer-app.footer-app-grid h2 {\n    color: var(--white);\n    margin-bottom: 5rem;\n    font-size: 3rem; }\n  #footer-app.footer-app-grid img {\n    padding-top: 5rem; }\n  @media screen and (max-width: 735px) {\n    #footer-app.footer-app-grid {\n      grid-template-columns: 1fr;\n      grid-gap: 5rem; }\n      #footer-app.footer-app-grid h2 {\n        padding-top: 5rem; }\n      #footer-app.footer-app-grid img {\n        padding-top: 0; } }\n\n/*コンテンツ*/\n#footer-contents {\n  align-items: flex-start;\n  padding: 7rem 0 0; }\n  #footer-contents .logo-link svg {\n    width: auto;\n    height: 30px;\n    margin-bottom: 2rem; }\n  #footer-contents .footer-contents-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 5rem; }\n    @media screen and (max-width: 735px) {\n      #footer-contents .footer-contents-grid {\n        grid-template-columns: 1fr 1fr;\n        grid-gap: 2rem; } }\n  #footer-contents h6, #footer-contents a {\n    display: block;\n    padding: .5rem 0; }\n  @media screen and (max-width: 1070px) {\n    #footer-contents {\n      display: block; } }\n\n/*規約*/\n#footer-terms {\n  padding-bottom: 7rem; }\n  #footer-terms a, #footer-terms p {\n    font-size: 1.3rem;\n    display: inline;\n    padding: 0  .5rem; }\n  #footer-terms .footer-terms-inner1 {\n    padding-top: .5rem; }\n  @media screen and (max-width: 735px) {\n    #footer-terms .footer-terms-inner1 {\n      padding: .5rem 0 .7rem; }\n    #footer-terms .footer-terms-inner2 {\n      padding: .7rem 0 .5rem; }\n    #footer-terms a, #footer-terms p {\n      padding: 0 .4rem; } }\n\n/*ソーシャルメディア*/\n.footer-social svg {\n  fill: var(--black);\n  height: 20px;\n  width: auto;\n  margin: auto 1rem; }\n\n.feedback-wrapper {\n  text-align: center;\n  padding-bottom: 4rem; }\n\n.form-select {\n  padding: 2rem 0; }\n\n.select-rating-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1rem; }\n  .select-rating-wrapper svg {\n    width: auto;\n    height: 40px;\n    margin: 0; }\n  @media screen and (max-width: 735px) {\n    .select-rating-wrapper .select-button {\n      padding: 1rem 0; } }\n\n.feedback-area {\n  border-radius: 4px;\n  height: 200px;\n  border: 1px solid var(--horizontalRule);\n  line-height: 1.756;\n  font-size: 1.6rem;\n  width: 100%;\n  padding: 2rem;\n  color: var(--articleText); }\n  .feedback-area:focus {\n    border: 1px solid var(--horizontalRule); }\n\n.form-submit {\n  text-align: right;\n  display: block;\n  text-align: center; }\n\n/************************HEADER************************/\n#header {\n  width: 100%;\n  transition: .6s;\n  padding: 0 5rem;\n  border-bottom: 1px solid var(--horizontalRule);\n  background: var(--background-color); }\n  #header .logo-link {\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-right: 7rem; }\n  #header .nav-container {\n    position: relative;\n    z-index: 100;\n    padding: 2rem 0;\n    display: flex; }\n    #header .nav-container a, #header .nav-container .search {\n      font-weight: 500;\n      font-size: 1.4rem;\n      margin-right: 3.5rem; }\n    #header .nav-container .logo-link svg {\n      width: auto;\n      height: 30px; }\n\n@media screen and (min-width: 1440px) and (max-width: 735px) {\n  #header .nav-container {\n    padding-top: 3rem; } }\n  @media screen and (max-width: 540px) {\n    #header {\n      padding: 0 2rem; } }\n  @media screen and (max-width: 540px) {\n    #header {\n      display: none; } }\n\n/*LOGO*/\n#logo-desktop .change-fill {\n  fill: var(--primary); }\n\n#logo-desktop .accent {\n  fill: var(--accent); }\n\n@media screen and (max-width: 376px) {\n  #logo-desktop svg {\n    height: 25px;\n    width: auto; } }\n\n.header-move {\n  transform: translateY(-100%); }\n\n/*Search*/\n.search-wrapper {\n  position: relative;\n  box-sizing: border-box;\n  position: relative; }\n  .search-wrapper .search-icon {\n    position: absolute;\n    width: 34px;\n    top: 0px;\n    z-index: 2;\n    height: 100%;\n    left: 0px; }\n    .search-wrapper .search-icon .search-icon-inner {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      height: 100%; }\n  .search-wrapper svg {\n    width: 15px; }\n    .search-wrapper svg path {\n      fill: var(--grey); }\n  .search-wrapper ::-webkit-input-placeholder {\n    color: var(--grey);\n    font-weight: 300; }\n  .search-wrapper ::-moz-placeholder {\n    color: var(--grey);\n    font-weight: 300; }\n  .search-wrapper :-ms-input-placeholder {\n    color: var(--grey);\n    font-weight: 300; }\n  .search-wrapper ::-ms-input-placeholder {\n    color: var(--grey);\n    font-weight: 300; }\n  .search-wrapper ::placeholder {\n    color: var(--grey);\n    font-weight: 300; }\n\n.search {\n  border: 1px solid var(--horizontalRule);\n  padding: .5rem .5rem .5rem 34px;\n  border-radius: 4px;\n  width: 300px; }\n\n/*コンテンツ・デスクトップ*/\n.nav-inner {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n@media screen and (max-width: 1070px) {\n  #desktop-nav {\n    display: none; } }\n\n/*コンテンツ・モバイル*/\n#mobile-nav .nav-inner {\n  justify-content: flex-end; }\n\n#mobile-nav .search-wrapper {\n  width: 20px;\n  margin-right: 2rem; }\n  #mobile-nav .search-wrapper svg {\n    width: 20px; }\n    #mobile-nav .search-wrapper svg path {\n      fill: var(--black); }\n  #mobile-nav .search-wrapper .search-icon {\n    width: 20px;\n    display: flex;\n    left: 0;\n    justify-content: center; }\n\n@media screen and (min-width: 1070px) {\n  #mobile-nav {\n    display: none; } }\n\n/*アプリ*/\n#app-header {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 1rem 0;\n  background: var(--white); }\n  #app-header .app-header-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center; }\n    #app-header .app-header-wrapper .app-header-inner1 svg {\n      width: auto;\n      height: 17px; }\n    #app-header .app-header-wrapper .app-header-inner1 a {\n      line-height: 1; }\n    #app-header .app-header-wrapper .app-header-inner2 {\n      text-align: center; }\n      #app-header .app-header-wrapper .app-header-inner2 .logo-link svg {\n        width: auto;\n        height: 25px; }\n    #app-header .app-header-wrapper .app-header-inner3 .user-container {\n      justify-content: flex-end; }\n    #app-header .app-header-wrapper .app-header-inner3 .user-avatar {\n      width: 25px;\n      height: 25px; }\n  @media screen and (min-width: 540px) {\n    #app-header {\n      display: none; } }\n\n/*ナビ・アプリ*/\n.header-move {\n  transform: translateY(150%); }\n\n#app-nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--white);\n  border-top: 1px solid var(--horizontalRule);\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: .5s; }\n  #app-nav .app-nav-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 100%; }\n    #app-nav .app-nav-wrapper .app-nav-inner {\n      text-align: center;\n      padding: .6rem 0;\n      line-height: 1; }\n      #app-nav .app-nav-wrapper .app-nav-inner a, #app-nav .app-nav-wrapper .app-nav-inner h6 {\n        font-size: .9rem;\n        font-weight: 500;\n        line-height: 1;\n        font-family: var(--paragraph);\n        padding-top: .6em; }\n      #app-nav .app-nav-wrapper .app-nav-inner svg {\n        width: auto;\n        height: 15px; }\n      #app-nav .app-nav-wrapper .app-nav-inner .app-nav-icon {\n        display: inherit; }\n  @media screen and (min-width: 540px) {\n    #app-nav {\n      display: none; } }\n\n/*アクティブ*/\n.app-nav-active {\n  color: var(--accent); }\n  .app-nav-active svg path {\n    fill: var(--accent); }\n\n/*Other*/\n.back-arrow-ico-container {\n  transition: 0.2s transform var(--ease-out-quad);\n  opacity: 0;\n  padding-right: 30px;\n  -webkit-animation: fadein 0.3s linear forwards;\n  animation: fadein 0.3s linear forwards; }\n\n@-webkit-keyframes fadein {\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  to {\n    opacity: 1; } }\n\n@media screen and (max-width: 1280px) {\n  .back-arrow-ico-container {\n    display: none; } }\n\n.logo-link[class*=\"data-ally\"]:focus::after {\n  content: \"\";\n  position: absolute;\n  left: -10%;\n  top: -30%;\n  width: 120%;\n  height: 160%;\n  border: 2px solid var(--accent);\n  background: rgba(255, 255, 255, 0.01);\n  border-radius: 5px; }\n\n.logo-link[class*=\"back-arrow-ico-container\"] {\n  transform: translateY(-3px); }\n\n.logo-link:hover {\n  text-decoration: none; }\n\n.nav-controls {\n  position: relative;\n  display: flex;\n  align-items: center; }\n  @media screen and (max-width: 540px) {\n    .nav-controls {\n      right: -5px; } }\n\n.icon-wrapper {\n  position: relative;\n  display: flex;\n  -webkit-box-align: center;\n  padding-left: 1rem;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.3s ease;\n  margin-left: 30px; }\n\n.icon-wrapper:hover {\n  opacity: 1; }\n\n.icon-wrapper[class*=\"data-ally\"]:focus::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -30%;\n  width: 100%;\n  height: 160%;\n  border: 2px solid var(--accent);\n  background: rgba(255, 255, 255, 0.01);\n  border-radius: 5px; }\n\n.page-button {\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  color: var(--primary); }\n\n.page-button:focus,\n.page-button:hover {\n  opacity: 1;\n  text-decoration: underline; }\n\n.page-number-button {\n  font-weight: 400;\n  font-size: 18px;\n  text-decoration: none;\n  color: var(--primary); }\n\n.page-number-button:focus,\n.page-number-button:hover {\n  text-decoration: underline; }\n\n.spacer {\n  opacity: 0.3; }\n\n.spacer::before {\n  content: \"...\"; }\n\n.mobiler-reference {\n  font-weight: 400;\n  color: var(--primary); }\n\n.mobile-reference em {\n  font-style: normal;\n  color: var(--primary); }\n\n.frame {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center; }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  .frame {\n    left: -15px; } }\n\n/*Bio*/\n@media screen and (max-width: 1070px) {\n  .subheading-container .grid-controls-container {\n    margin-bottom: 50px; } }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0 auto;\n  font-weight: 700;\n  color: var(--primary);\n  font-family: var(--headings);\n  width: 100%;\n  max-width: 1500px;\n  letter-spacing: -.01em;\n  font-feature-settings: \"palt\";\n  white-space: normal; }\n\nh1, h1 *, h2, h2 * {\n  margin: 0 auto 1rem; }\n\nh3, h3 * {\n  margin: 0 auto 1rem; }\n\nh1 {\n  font-size: 5.2rem;\n  line-height: 1.35; }\n\nh2 {\n  font-size: 2.5rem;\n  line-height: 1.333; }\n\nh3 {\n  font-size: 1.9rem;\n  line-height: 1.45; }\n\nh4 {\n  font-size: 1.8rem;\n  line-height: 1.45; }\n\nh5 {\n  font-size: 2rem;\n  line-height: 1.55;\n  font-weight: 500; }\n\nh6 {\n  font-size: 1.6rem;\n  line-height: 1.756;\n  letter-spacing: 0;\n  font-family: var(--paragraph);\n  font-weight: 500; }\n  @media screen and (max-width: 376px) {\n    h6 {\n      font-size: 1.6rem; } }\n\n.h6 {\n  font-size: 1.6rem;\n  line-height: 1.756;\n  letter-spacing: 0;\n  font-weight: 500; }\n  @media screen and (max-width: 376px) {\n    .h6 {\n      font-size: 1.6rem; } }\n\n@media screen and (max-width: 1070px) {\n  h1 {\n    font-size: 3.8rem;\n    line-height: 1.2; } }\n\n@media screen and (max-width: 735px) {\n  h3 {\n    font-size: 2.2rem; } }\n\n@media screen and (max-width: 540px) {\n  h1 {\n    font-size: 3.2rem;\n    line-height: 1.3; }\n  h2 {\n    font-size: 2.2rem; }\n  h3 {\n    font-size: 1.6rem; }\n  h4 {\n    font-size: 1.6rem; }\n  h5 {\n    font-size: 1.6rem; } }\n\n/*タイトル・装飾*/\n.sections-title:before {\n  content: \" \";\n  border-left: 3px solid var(--black);\n  padding-right: 1rem; }\n\n#hero {\n  padding-top: 7rem; }\n\n/*Hero*/\n#hero {\n  background: var(--black); }\n  #hero .hero-wrapper {\n    display: grid;\n    grid-template-columns: 50% 1fr;\n    grid-column-gap: 5rem; }\n  #hero .hero-text-inner {\n    display: flex;\n    align-items: center;\n    padding-bottom: 7rem; }\n  #hero .hero-img-inner {\n    display: flex;\n    align-items: flex-end; }\n    #hero .hero-img-inner img {\n      margin: 0; }\n  #hero h1 {\n    font-size: 4rem;\n    color: var(--white); }\n  #hero p {\n    margin-bottom: 5rem;\n    color: var(--d-articleText); }\n  @media screen and (max-width: 1070px) {\n    #hero .hero-wrapper {\n      display: block; }\n    #hero .hero-text-inner {\n      padding-bottom: 6rem;\n      max-width: 650px;\n      margin: auto; }\n    #hero .hero-img-inner img {\n      max-width: 70%;\n      margin: auto; } }\n  @media screen and (max-width: 540px) {\n    #hero h1 {\n      font-size: 3rem; }\n    #hero p {\n      margin-bottom: 2rem; } }\n\n/*カテゴリータイトル*/\n.cat-title {\n  padding: 0 0 2.5rem; }\n  .cat-title h3 {\n    margin: 0;\n    font-weight: 500; }\n\n/*人気のレシピ*/\n.top-recipes {\n  counter-reset: number 0; }\n  .top-recipes a:hover .popular-recipe-wrapper h3 {\n    color: var(--accent); }\n\n.popular-recipe-wrapper {\n  display: grid;\n  grid-template-columns: 50px 200px 1fr;\n  grid-column-gap: 5rem;\n  padding: 2rem 0;\n  border-bottom: 1px solid var(--horizontalRule);\n  align-items: center; }\n  .popular-recipe-wrapper .ranking-number::before {\n    counter-increment: number 1;\n    content: counter(number);\n    font-weight: 500;\n    font-family: var(--headings);\n    font-size: 2.5rem;\n    color: var(--black);\n    display: flex;\n    line-height: 1; }\n  .popular-recipe-wrapper .ranking-number {\n    display: flex;\n    align-items: center; }\n    .popular-recipe-wrapper .ranking-number svg {\n      height: 30px;\n      margin-left: 1rem; }\n      @media screen and (max-width: 735px) {\n        .popular-recipe-wrapper .ranking-number svg {\n          height: 20px; } }\n  .popular-recipe-wrapper h3 {\n    color: var(--black); }\n  .popular-recipe-wrapper .recipes-bio-wrapper {\n    padding: 0; }\n  .popular-recipe-wrapper p {\n    margin: 1rem 0 0;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden; }\n  @media screen and (max-width: 735px) {\n    .popular-recipe-wrapper {\n      display: block; }\n      .popular-recipe-wrapper .popular-recipe-img {\n        margin: 1rem 0 2rem; } }\n\n/*ピックアップ・キーパー*/\n.ceapers-wrapper {\n  overflow: auto;\n  white-space: nowrap;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory; }\n  .ceapers-wrapper .ceaper {\n    display: inline-block;\n    height: auto;\n    margin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden; }\n    @media screen and (max-width: 376px) {\n      .ceapers-wrapper .ceaper {\n        width: 300px; } }\n    .ceapers-wrapper .ceaper .ceaper-inner .user-container {\n      justify-content: flex-start; }\n      .ceapers-wrapper .ceaper .ceaper-inner .user-container .user-avatar {\n        height: 80px;\n        width: 80px;\n        margin-right: 2rem; }\n      .ceapers-wrapper .ceaper .ceaper-inner .user-container .name {\n        font-size: 1.6rem; }\n      .ceapers-wrapper .ceaper .ceaper-inner .user-container .user-bio {\n        max-width: 300px;\n        font-size: 1.3rem;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        overflow: hidden;\n        margin-bottom: 1rem; }\n    .ceapers-wrapper .ceaper .ceaper-inner h6 {\n      color: var(--black);\n      padding: 2rem; }\n\n/*キャンプ道具から探す*/\n.scenes-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 2rem; }\n  .scenes-wrapper .scene {\n    display: inline-block;\n    height: auto;\n    width: 100%;\n    margin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden; }\n    .scenes-wrapper .scene:hover {\n      background: var(--background-grey); }\n    .scenes-wrapper .scene .scene-inner img {\n      width: 100%;\n      height: 200px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    .scenes-wrapper .scene h6 {\n      color: var(--black);\n      padding: 2rem; }\n\n/*カテゴリーから探す*/\n.cat-recipe-wrapper {\n  overflow: auto;\n  white-space: nowrap;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory; }\n  .cat-recipe-wrapper .cat-recipe {\n    display: inline-block;\n    height: auto;\n    margin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden; }\n    .cat-recipe-wrapper .cat-recipe:hover {\n      background: var(--background-grey); }\n    @media screen and (max-width: 376px) {\n      .cat-recipe-wrapper .cat-recipe {\n        width: 300px; } }\n    .cat-recipe-wrapper .cat-recipe .cat-recipe-inner {\n      text-align: center; }\n      .cat-recipe-wrapper .cat-recipe .cat-recipe-inner svg {\n        width: 50px; }\n    .cat-recipe-wrapper .cat-recipe h6 {\n      color: var(--black);\n      padding-top: 2rem; }\n\nhr:before {\n  line-height: 1.4;\n  text-indent: 0.6em;\n  letter-spacing: 0.6em;\n  content: \"・・・\";\n  color: var(--articleText); }\n\nhr {\n  position: relative;\n  width: 100%;\n  max-width: 680px;\n  text-align: center;\n  margin: 50px auto;\n  border: 0;\n  background-repeat: repeat-x;\n  box-sizing: border-box;\n  background-position: center; }\n\n@media screen and (max-width: 1070px) {\n  hr {\n    max-width: 507px; } }\n\n@media screen and (max-width: 735px) {\n  hr {\n    max-width: 486px;\n    width: calc(100vw - 40px);\n    margin: 0px auto 40px; } }\n\n@media screen and (max-width: 340px) {\n  hr {\n    padding: 0 20px; } }\n\n.hr {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule); }\n\n.hr-paragraph {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule);\n  margin: 3rem 0; }\n\n.hr-text {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule);\n  margin: 1.5rem 0; }\n\n.m-dot {\n  margin: 0 1rem; }\n\n.hr-section-title {\n  display: flex;\n  align-items: center;\n  margin: 0; }\n  .hr-section-title:before {\n    content: \"\";\n    height: 1px;\n    flex-grow: 1;\n    background-color: var(--horizontalRule);\n    margin-right: 2rem; }\n  .hr-section-title:after {\n    content: \"\";\n    height: 1px;\n    flex-grow: 1;\n    background-color: var(--horizontalRule);\n    margin-left: 2rem; }\n\nimg {\n  width: 100%;\n  max-width: 100%;\n  margin: auto;\n  height: auto;\n  display: block;\n  -webkit-animation: float;\n          animation: float; }\n\n.image-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: #ccc;\n  color: #898989;\n  font-size: 32px;\n  font-weight: 600; }\n\n.image-zoom {\n  display: block;\n  margin: 0 auto;\n  width: 100%; }\n\n@media screen and (max-width: 540px) {\n  .image-placeholder {\n    font-size: 28px; } }\n\n#article-img-b {\n  padding-bottom: 6rem; }\n  @media screen and (max-width: 376px) {\n    #article-img-b {\n      padding-bottom: 3.5rem; } }\n\nfigcaption p.small-text {\n  color: var(--grey); }\n\n/*float*/\n@-webkit-keyframes float {\n  0% {\n    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n    transform: translatey(0px); }\n  50% {\n    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);\n    transform: translatey(-15px); }\n  100% {\n    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n    transform: translatey(0px); } }\n@keyframes float {\n  0% {\n    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n    transform: translatey(0px); }\n  50% {\n    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);\n    transform: translatey(-15px); }\n  100% {\n    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n    transform: translatey(0px); } }\n\n.layout-styled {\n  position: relative;\n  background: var(--background-color);\n  min-height: 100vh; }\n\n.post-border {\n  border-bottom: 1px solid;\n  border-color: var(--grey);\n  max-width: 680px;\n  margin: 100px auto; }\n\n.full-bg {\n  height: auto;\n  width: 100vw;\n  position: relative;\n  left: 50%;\n  right: 50%;\n  margin-left: -50vw;\n  margin-right: -50vw; }\n\n/*spotify*/\n.play {\n  max-width: 680px;\n  margin: auto;\n  padding-top: 30px;\n  padding-bottom: 70px; }\n  @media screen and (max-width: 735px) {\n    .play {\n      max-width: 527px; } }\n\n.play iframe {\n  width: 100%; }\n\n#share-buttons:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n#share-buttons > div {\n  position: relative;\n  text-align: right;\n  float: right;\n  text-align: center; }\n\n#share-buttons > div > svg {\n  height: 25px;\n  fill: var(--grey); }\n  @media screen and (max-width: 376px) {\n    #share-buttons > div > svg {\n      height: 20px; } }\n\ndiv.mail > svg {\n  margin: 1rem 1.5rem 1rem 0; }\n\ndiv.twitter > svg {\n  margin: 1rem 1.5rem; }\n\ndiv.facebook > svg {\n  margin: 1rem 0 1rem 1.5rem; }\n\n#share-buttons > div:hover {\n  cursor: pointer; }\n\n#share-buttons > div:hover > svg {\n  fill: var(--accent); }\n\n/*****************Documents*****************/\n.documents .pr-section p {\n  max-width: 500px;\n  margin-left: 0; }\n\n.documents h5 {\n  margin-top: 5rem; }\n\n.documents p {\n  padding-left: 3rem; }\n  @media screen and (max-width: 376px) {\n    .documents p {\n      padding-left: 2rem; } }\n\n.documents li {\n  margin-left: 6.5rem; }\n  @media screen and (max-width: 376px) {\n    .documents li {\n      margin-left: 5.5rem; } }\n\n.doc-half h6 {\n  margin-top: 4rem;\n  margin-bottom: 1rem; }\n\n@media screen and (min-width: 735px) {\n  .doc-half {\n    width: 50%; } }\n\n@media screen and (min-width: 735px) {\n  .doc-half-l {\n    padding-right: 10%; }\n  .doc-half-r {\n    margin-left: auto;\n    padding-left: 10%; } }\n\n/*****************About*****************/\ndiv.about-summary-social a {\n  text-decoration: none; }\n  div.about-summary-social a .github {\n    margin-left: 0; }\n  div.about-summary-social a .social-icon-image path {\n    opacity: .7;\n    fill: var(--articleText); }\n  div.about-summary-social a:hover .social-icon-image path {\n    fill: var(--accent);\n    opacity: 1; }\n\n.pr-flex .about-half-l,\n.pr-flex .about-half-r {\n  padding-bottom: 12rem; }\n\n.pr-flex .about-half-4 {\n  padding-bottom: 0; }\n\n@media screen and (min-width: 735px) {\n  .pr-flex .about-half-3 {\n    padding-bottom: 0; } }\n\n@media screen and (min-width: 735px) {\n  .pr-flex .about-half-l {\n    margin-right: 1.5rem; }\n  .pr-flex .about-half-r {\n    margin-left: 1.5rem; } }\n\n/*Design*/\n.graphics {\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 3rem;\n  margin-bottom: 3rem; }\n  .graphics .graphic-center {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    content: \"\";\n    display: inline-block;\n    bottom: -50px;\n    height: 160px;\n    width: 1px;\n    background-color: var(--grey);\n    z-index: 900; }\n    .graphics .graphic-center .graphic-inner {\n      position: absolute; }\n  @media screen and (min-width: 1280px) {\n    .graphics {\n      max-width: 100%; } }\n\n.graphic {\n  display: inline-block;\n  width: 35rem;\n  height: 35rem;\n  line-height: 35rem;\n  border-radius: 50%;\n  margin: -3rem;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  mix-blend-mode: overlay;\n  font-weight: 400;\n  font-size: 2rem; }\n  @media screen and (max-width: 735px) {\n    .graphic {\n      width: 25rem;\n      height: 25rem;\n      margin: -10rem; } }\n  @media screen and (max-width: 540px) {\n    .graphic {\n      width: 15rem;\n      height: 15rem;\n      margin: -6rem;\n      font-size: 1.9rem; } }\n\n/*Ability*/\n.radar-title {\n  display: flex;\n  justify-content: center;\n  position: relative; }\n  .radar-title .radar-now:before {\n    content: \"\";\n    background: var(--accent);\n    width: 15px;\n    height: 15px;\n    opacity: .8;\n    border-radius: 50%;\n    margin-right: 1rem; }\n  .radar-title .radar-past:before {\n    content: \"\";\n    background: var(--grey);\n    opacity: .8;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    margin-right: 1rem; }\n  .radar-title h6.small-text {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    width: 100px;\n    justify-content: center;\n    margin-top: 5rem; }\n\n.radar {\n  position: relative;\n  text-align: center;\n  max-width: 412px;\n  height: auto;\n  margin: auto;\n  box-sizing: border-box; }\n  .radar .small-text {\n    margin-bottom: 0;\n    color: var(--articleText); }\n  .radar .p-icon {\n    width: auto;\n    height: 2rem;\n    margin-right: .6rem; }\n    .radar .p-icon > path, .radar .p-icon circle {\n      stroke: var(--articleText); }\n  .radar .radarR, .radar .radarL {\n    position: absolute;\n    width: 200px;\n    margin-bottom: 0; }\n  .radar .up {\n    position: absolute;\n    left: 50%;\n    top: -4rem;\n    transform: translateX(-50%);\n    -webkit-transform: translateX(-50%);\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .radar .radarR {\n    top: 50%;\n    right: -16rem;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    text-align: left; }\n  .radar .upperR {\n    top: -13rem;\n    position: absolute;\n    display: flex;\n    align-items: center; }\n  .radar .lowerR {\n    top: 10rem;\n    position: absolute;\n    display: flex;\n    align-items: center; }\n  .radar .radarL {\n    top: 50%;\n    left: -16rem;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    text-align: right; }\n  .radar .upperL {\n    top: -13rem;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n  .radar .lowerL {\n    top: 10rem;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n  .radar .bottom {\n    position: absolute;\n    bottom: -4rem;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  @media screen and (max-width: 735px) {\n    .radar {\n      max-width: 138.5px; }\n      .radar .p-icon {\n        height: 1.6rem; }\n      .radar svg {\n        height: auto;\n        width: 150px; }\n      .radar p.small-text {\n        font-size: 1.1rem; }\n      .radar .radarR, .radar .radarL {\n        width: 90px; }\n      .radar .up {\n        top: -3rem; }\n      .radar .radarR {\n        right: -10.5rem; }\n      .radar .upperR {\n        top: -6rem; }\n      .radar .lowerR {\n        top: 4rem; }\n      .radar .radarL {\n        top: 50%;\n        left: -9.5rem; }\n      .radar .upperL {\n        top: -6rem;\n        position: absolute; }\n      .radar .lowerL {\n        top: 4rem; }\n      .radar .bottom {\n        bottom: -3rem; } }\n\npath.radar-now-color {\n  fill: var(--accent); }\n\npath.radar-secondary {\n  fill: var(--horizontalRule); }\n\npath.radar-past-color {\n  fill: var(--grey); }\n\n/*skill*/\n#skill-title {\n  margin-bottom: 5rem; }\n\n.skill-wrapper {\n  padding: 0 3rem 3rem; }\n  .skill-wrapper .skill-icon {\n    color: var(--color);\n    position: relative;\n    width: 80px;\n    height: 80px;\n    contain: content;\n    display: block;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n     -ms-user-select: none;\n         user-select: none;\n    position: relative;\n    margin: auto; }\n  .skill-wrapper svg {\n    stroke-linecap: round; }\n  .skill-wrapper .skill-circle {\n    opacity: .1;\n    stroke: var(--color);\n    fill: var(--color);\n    stroke-width: 14; }\n  .skill-wrapper .skill-circle-primary {\n    fill: none;\n    stroke: var(--color);\n    stroke-width: 9;\n    transition: stroke-dasharray 1.2s; }\n  .skill-wrapper .skill-text {\n    align-items: center;\n    bottom: 0;\n    color: currentColor;\n    display: flex;\n    justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  @media screen and (max-width: 735px) {\n    .skill-wrapper {\n      padding: 0 1rem 1rem; }\n      .skill-wrapper.skill-wrapper-l {\n        padding-left: 0; }\n      .skill-wrapper.skill-wrapper-r {\n        padding-right: 0; } }\n  @media screen and (max-width: 540px) {\n    .skill-wrapper .skill-icon {\n      width: 60px;\n      height: 60px; } }\n\n.skill-bio h6.small-text {\n  text-align: center; }\n\ndiv.skillset {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 1rem; }\n  div.skillset .icon {\n    box-shadow: none;\n    margin: 0; }\n  div.skillset .icon svg {\n    width: auto;\n    height: 100px; }\n  div.skillset .icon .small-text, div.skillset a {\n    margin-bottom: 0;\n    margin-top: 1rem;\n    max-width: 300px;\n    text-align: center; }\n  div.skillset h6.small-text {\n    margin-top: 3rem; }\n  @media (min-width: 1440px) {\n    div.skillset .icon .small-text, div.skillset a {\n      font-size: 1.7rem; } }\n  @media screen and (max-width: 540px) {\n    div.skillset {\n      grid-template-columns: 1fr 1fr;\n      grid-row-gap: 4rem; }\n      div.skillset .icon {\n        padding: 1rem; }\n      div.skillset .icon svg {\n        height: 70px; } }\n\npath.skill-primary {\n  fill: var(--accent); }\n\npath.skill-secondary {\n  fill: var(--accent-bg);\n  opacity: 1; }\n\n/*****************Map*****************/\n.map-wrapper {\n  margin-top: 7rem;\n  position: relative;\n  padding-bottom: 250px;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none; }\n  .map-wrapper #map {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .map-wrapper .gmnoprint, .map-wrapper .gm-style-cc, .map-wrapper .gm-control-active {\n    display: none; }\n\n@-webkit-keyframes pulsate {\n  0% {\n    transform: scale(0.1);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    transform: scale(1.1);\n    opacity: 0; } }\n\n@keyframes pulsate {\n  0% {\n    transform: scale(0.1);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    transform: scale(1.1);\n    opacity: 0; } }\n\n.marker {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n\n.pin {\n  width: 25px;\n  height: 25px;\n  top: 0;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  background: var(--accent);\n  border: 2px solid #fcfcfc;\n  border-radius: 50%;\n  z-index: 1000; }\n\n.pin-effect {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  display: block;\n  background: var(--accent-bg);\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: pulsate 2s ease-out infinite;\n          animation: pulsate 2s ease-out infinite; }\n\nul {\n  list-style: none;\n  counter-reset: list;\n  color: var(--articleText);\n  font-size: 1.7rem; }\n  @media screen and (max-width: 376px) {\n    ul {\n      font-size: 1.6rem; } }\n\nli::before {\n  font-weight: 600;\n  font-size: inherit;\n  content: \"-\";\n  font-family: \"Apercu\",  sans-serif;\n  margin-left: -30px;\n  padding-right: 1.4rem;\n  line-height: 1.756; }\n\nli {\n  position: relative;\n  list-style: none;\n  margin: 0 auto 1.5rem;\n  margin-left: 3rem;\n  line-height: 1.756; }\n  @media screen and (max-width: 735px) {\n    li {\n      margin-bottom: 2em; } }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  ul li p {\n    padding: 0; } }\n\nul li > * {\n  display: inline; }\n\nol {\n  list-style: none;\n  counter-reset: list;\n  color: var(--articleText);\n  position: relative;\n  padding: 15px 0 30px 30px;\n  margin: 0 auto;\n  font-size: 1.7rem;\n  width: 100%;\n  max-width: 680px; }\n\n/*DESKTOP*/\n@media screen and (max-width: 1070px) {\n  ol {\n    max-width: 507px; } }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  ol {\n    max-width: 486px;\n    padding-left: 0px; } }\n\n/*PHABLET*/\n@media screen and (max-width: 540px) {\n  ol {\n    padding-left: 20px; } }\n\nol li {\n  position: relative;\n  padding-bottom: 15px; }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  ol li {\n    padding-left: 30px;\n    padding: 0; }\n  ol li p {\n    padding-left: 30px; } }\n\n/*PHABLET*/\n@media screen and (max-width: 540px) {\n  ol li {\n    padding-left: 30px; } }\n\nol li > * {\n  display: inline; }\n\nol li::before {\n  width: 3rem;\n  display: inline-block;\n  position: absolute;\n  color: var(--articleText);\n  counter-increment: list;\n  content: counter(list) \".\";\n  font-weight: 600;\n  position: absolute;\n  left: -3rem;\n  top: -0.3rem;\n  font-size: 2rem; }\n\n@media screen and (max-width: 735px) {\n  ol li::before {\n    left: 0; } }\n\n@media screen and (max-width: 540px) {\n  #page {\n    margin-top: 49px; } }\n\n#page .sub-title {\n  font-size: 1.9rem; }\n\np {\n  line-height: 1.756;\n  font-size: 1.6rem;\n  color: var(--articleText);\n  font-family: var(--paragraph);\n  margin: 0 auto 2.5rem;\n  width: 100%;\n  white-space: normal; }\n  p .p-icon svg {\n    height: 1.6rem;\n    fill: var(--articleText); }\n  @media screen and (max-width: 735px) {\n    p {\n      margin-bottom: 2em; } }\n\n.s-text {\n  font-size: 1.5rem; }\n\n.xs-text {\n  font-size: 1.3rem; }\n\n.text-row {\n  max-width: 650px;\n  margin-left: 0; }\n\n/*************************ASIDE*************************/\n.aside-container {\n  display: flex;\n  margin: 0 auto;\n  max-width: 1140px;\n  pointer-events: none;\n  z-index: 100;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30%;\n  -webkit-animation-name: progress-fade-in;\n  animation-name: progress-fade-in;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  /*DESKTOP MEDIUM*/ }\n  @media screen and (max-width: 1280px) {\n    .aside-container {\n      display: none; } }\n\n@-webkit-keyframes progress-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes progress-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes progress-fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes progress-fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.aside-align {\n  position: fixed;\n  display: flex;\n  transform: translateY(0px);\n  top: 0;\n  align-items: center;\n  height: 100vh;\n  z-index: 3;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.4s linear, visibility 0.4s linear; }\n\n.overlap-container {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.25s; }\n\n/*************************PROGRESS*************************/\n.progress-container {\n  position: relative;\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.track-line {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(88vh - 40px);\n  max-height: 425px;\n  width: 2px;\n  background-color: var(--horizontalRule);\n  opacity: 0.6;\n  overflow: hidden; }\n\n.progress-line {\n  position: absolute;\n  height: 100%;\n  top: -100%;\n  width: 2px;\n  background-color: var(--accent);\n  left: 0; }\n\n#recipe-hero h1 {\n  font-size: 3rem;\n  max-width: 550px;\n  margin: 3rem  0 1rem; }\n\n#recipe-hero .recipe-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  grid-column-gap: 5rem; }\n  #recipe-hero .recipe-wrapper p {\n    margin: 0; }\n  @media screen and (min-width: 1070px) {\n    #recipe-hero .recipe-wrapper .recipe-img .recipe-hr {\n      display: none; } }\n  @media screen and (max-width: 1070px) {\n    #recipe-hero .recipe-wrapper {\n      display: block; } }\n\n@media screen and (max-width: 376px) {\n  #recipe-hero h1 {\n    font-size: 2.3rem; } }\n\n/*データ*/\n.recipe-bio-wrapper {\n  padding: 0.5rem 0 1rem;\n  display: flex;\n  align-items: center; }\n\n.recipe-bio h6 {\n  margin-bottom: 2rem; }\n\n.recipe-data {\n  display: inline-flex;\n  font-size: 1.3rem;\n  font-feature-settings: \"palt\";\n  letter-spacing: 0.06rem; }\n  .recipe-data .cook {\n    margin-left: 0; }\n  .recipe-data .servings {\n    margin-right: 0; }\n\n/*アクション*/\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 2rem; }\n  .actions .action-button {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .actions .action-button:hover path {\n      stroke: var(--accent);\n      fill: var(--accent); }\n    .actions .action-button svg {\n      height: auto;\n      width: 20px; }\n      .actions .action-button svg path {\n        stroke: var(--grey);\n        fill: var(--grey); }\n    .actions .action-button.action-star {\n      margin: 0 1rem; }\n\n/*データ・材料*/\n.recipe-bio .flex {\n  justify-content: space-between; }\n  .recipe-bio .flex svg {\n    width: 10px;\n    margin: 0  0 2rem 1.5rem; }\n  .recipe-bio .flex .servings h6 {\n    white-space: nowrap; }\n  .recipe-bio .flex .servings .servings-number {\n    color: var(--accent); }\n\n.ingredients-wrapper {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-column-gap: 3rem;\n  grid-row-gap: 2rem;\n  color: var(--articleText); }\n\n/*データ・キャンプ道具*/\n.camp a {\n  background: var(--grey20);\n  border-radius: 15px;\n  font-size: 1.3rem;\n  padding: 0.5rem 1.1rem;\n  white-space: nowrap;\n  margin: 0 1rem 1rem 0;\n  display: inline-block; }\n  .camp a:hover {\n    background: var(--grey40); }\n\n/*クッキングリストに追加*/\n.action-make-button:hover svg path {\n  fill: var(--white); }\n\n/*線*/\n.recipe-hr {\n  border-top: 1px solid var(--horizontalRule);\n  margin: 2.5rem 0; }\n\n.recipe-hr-l {\n  border-left: 1px solid var(--horizontalRule);\n  margin: 0 2.5rem;\n  height: 25px; }\n\n/*セクションタイトル*/\n.recipe-section-title-wrapper {\n  text-align: center;\n  position: relative;\n  padding: 0 0 5rem; }\n  @media screen and (max-width: 540px) {\n    .recipe-section-title-wrapper {\n      padding: 0 0 4rem; } }\n  .recipe-section-title-wrapper .recipe-section-title {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-size: 2rem;\n    font-family: var(--headings);\n    line-height: 1.756; }\n    .recipe-section-title-wrapper .recipe-section-title .recipe-section-title-name {\n      text-decoration: underline;\n      color: var(--black); }\n      .recipe-section-title-wrapper .recipe-section-title .recipe-section-title-name:hover {\n        color: var(--accent); }\n    @media screen and (max-width: 376px) {\n      .recipe-section-title-wrapper .recipe-section-title {\n        font-size: 1.8rem; }\n        .recipe-section-title-wrapper .recipe-section-title .recipe-section-title-name {\n          font-size: 1.8rem; } }\n    .recipe-section-title-wrapper .recipe-section-title:before {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-right: 2rem; }\n    .recipe-section-title-wrapper .recipe-section-title:after {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-left: 2rem; }\n\n/*作り方*/\n.make-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 5rem;\n  counter-reset: number 0; }\n  @media screen and (max-width: 1070px) {\n    .make-wrapper {\n      grid-template-columns: 1fr 1fr; } }\n  @media screen and (max-width: 735px) {\n    .make-wrapper {\n      grid-template-columns: 1fr; } }\n  .make-wrapper .make-inner p:before {\n    counter-increment: number 1;\n    content: \" STEP \" counter(number);\n    font-weight: 500;\n    font-family: var(--headings);\n    color: var(--black);\n    display: flex; }\n  .make-wrapper .make-inner {\n    background: var(--background-grey); }\n    .make-wrapper .make-inner p {\n      margin: 0; }\n\n/*レビュー*/\n.review .rating {\n  top: 0.02rem; }\n\n.review-wrapper {\n  overflow: auto;\n  white-space: nowrap;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory; }\n  .review-wrapper .review {\n    display: inline-block;\n    height: auto;\n    width: 300px;\n    margin-right: 3rem; }\n    .review-wrapper .review p {\n      margin: 0; }\n    .review-wrapper .review .comment {\n      padding-bottom: 2rem; }\n  .review-wrapper .user-container {\n    justify-content: flex-start; }\n    .review-wrapper .user-container div.user-avatar {\n      height: 35px;\n      width: 35px; }\n  .review-wrapper .recipes-bio-wrapper {\n    padding-bottom: 0;\n    border-top: 1px solid var(--horizontalRule);\n    margin-top: 1rem; }\n  .review-wrapper .date {\n    font-size: 1.2rem; }\n\n/*レビュー・リンク*/\n.reviews-link {\n  text-decoration: underline;\n  padding-top: 6rem; }\n\n/*レビュー＆料理済リストに追加ボタン*/\n.fixed-button {\n  padding: 1.7rem;\n  border-radius: 50%;\n  background: var(--black);\n  box-shadow: transparent 0 0 0 1px, transparent 0 0 0 4px, rgba(0, 0, 0, 0.18) 0 2px 4px; }\n  .fixed-button svg {\n    width: 25px; }\n    .fixed-button svg path,\n    .fixed-button svg line {\n      stroke: var(--white); }\n\n/*レシピ・フッターメニュー*/\n.recipe-menu {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--white);\n  border-top: 1px solid var(--horizontalRule);\n  z-index: 100;\n  padding: 1.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: nowrap; }\n  .recipe-menu .recipe-menu-inner {\n    display: inline-block; }\n    .recipe-menu .recipe-menu-inner.recipe-menu-bio {\n      display: flex;\n      align-items: center;\n      font-weight: 500; }\n      .recipe-menu .recipe-menu-inner.recipe-menu-bio svg {\n        width: 30px; }\n      .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-hr-l {\n        margin: 0 5rem; }\n      .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user {\n        display: flex;\n        align-items: center; }\n        .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user .user-avatar {\n          height: 35px;\n          width: 35px; }\n        .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user h6 {\n          margin: 0;\n          font-size: 1.4rem; }\n        .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user .rating {\n          display: flex;\n          align-items: center; }\n          .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user .rating .star {\n            top: auto; }\n        .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user p {\n          margin: 0 0 0 0.4rem;\n          font-size: 1.3rem;\n          color: var(--grey); }\n      .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-bio-inner {\n        display: flex;\n        align-items: center; }\n        @media screen and (max-width: 540px) {\n          .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-bio-inner {\n            padding-left: 0; } }\n    .recipe-menu .recipe-menu-inner .recipe-menu-actions {\n      display: flex;\n      align-items: center; }\n    .recipe-menu .recipe-menu-inner svg path {\n      stroke: var(--white); }\n    .recipe-menu .recipe-menu-inner a:hover path {\n      stroke: var(--black); }\n  @media screen and (max-width: 540px) {\n    .recipe-menu .ico-button {\n      font-size: 1.3rem; }\n    .recipe-menu .recipe-menu-inner.recipe-menu-bio svg {\n      width: 25px; } }\n\n@media screen and (max-width: 1070px) {\n  .recipe-hr-l,\n  .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user {\n    display: none; } }\n\n/*アプリ*/\n@media screen and (max-width: 540px) {\n  .recipe-menu {\n    top: 0;\n    bottom: auto;\n    border-top: none;\n    border-bottom: 1px solid var(--horizontalRule); } }\n\n.recipe-menu #recipe-menu-back svg {\n  width: 15px; }\n\n@media screen and (min-width: 540px) {\n  .recipe-menu #recipe-menu-back {\n    display: none; } }\n\n/*Rating*/\n.rating {\n  position: relative;\n  display: inline-block;\n  font-size: 1.4rem;\n  top: -1px; }\n\n.star {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 50%;\n  color: var(--accent);\n  z-index: 1; }\n\n.star-bg {\n  color: var(--horizontalRule);\n  opacity: .6; }\n\n.star4 {\n  width: 80%; }\n\n/*Recipes-bio*/\n.recipes-bio-wrapper {\n  display: flex;\n  justify-content: space-between;\n  padding: .4rem 0 1rem;\n  align-items: center; }\n\n.recipes-ico {\n  color: var(--black);\n  display: flex;\n  align-items: center; }\n  .recipes-ico svg {\n    width: 15px;\n    margin-right: .5rem; }\n\n/*Data*/\n.recipes-data {\n  display: inline-flex;\n  font-size: 1.3rem;\n  font-feature-settings: \"palt\";\n  letter-spacing: .06rem;\n  width: 100%; }\n  .recipes-data div {\n    margin: 0 1rem; }\n  .recipes-data .cook {\n    margin-left: 0; }\n\n/*User*/\n.user-container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center; }\n  .user-container .user-inner {\n    display: block;\n    line-height: 1; }\n  .user-container .user-avatar {\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    margin-right: 1rem;\n    overflow: hidden; }\n  .user-container .name {\n    font-size: 1.3rem;\n    font-feature-settings: \"palt\";\n    letter-spacing: .06rem;\n    margin: 0;\n    font-weight: 500;\n    color: var(--black); }\n\n.shots-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 4rem; }\n\n.shot {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .shot .user-container {\n    justify-content: flex-start; }\n    .shot .user-container .user-avatar {\n      height: 30px;\n      width: 30px; }\n    .shot .user-container .user-inner h6, .shot .user-container .user-inner a {\n      font-size: inherit;\n      line-height: 1;\n      font-size: 1.3rem; }\n    .shot .user-container .user-inner a {\n      color: var(--articleText80);\n      font-size: 1.1rem;\n      font-weight: 400; }\n  .shot .shot-recipe-img {\n    margin: 1rem 0;\n    border-radius: 4px;\n    overflow: hidden;\n    position: relative; }\n    .shot .shot-recipe-img .shot-ingredients-wrapper {\n      width: 100%;\n      position: absolute;\n      bottom: 0;\n      opacity: 0;\n      transition: .2s;\n      background-color: rgba(0, 0, 0, 0.7);\n      pointer-events: none; }\n      .shot .shot-recipe-img .shot-ingredients-wrapper .shot-ingredients {\n        font-size: .9rem;\n        font-family: var(--paragraph);\n        color: var(--white);\n        white-space: normal;\n        line-height: 1.6;\n        padding: 1rem;\n        display: inline-flex; }\n    .shot .shot-recipe-img:hover .shot-ingredients-wrapper {\n      opacity: 1; }\n  .shot .shot-recipes-bio-wrapper {\n    font-size: 1.2rem; }\n    .shot .shot-recipes-bio-wrapper .shot-recipes-data {\n      font-size: 1.2rem;\n      display: flex; }\n      .shot .shot-recipes-bio-wrapper .shot-recipes-data span {\n        padding: 0 .3rem;\n        color: var(--articleText80); }\n        .shot .shot-recipes-bio-wrapper .shot-recipes-data span svg path {\n          fill: var(--articleText80); }\n\n.user-link:hover .name {\n  text-decoration: underline; }\n\n/*ローディング */\n.shots-loading {\n  padding: 3rem 0 7.5rem;\n  text-align: center;\n  color: var(--grey); }\n\n/*話題のレシピ*/\n.topic-wrapper {\n  overflow: auto;\n  white-space: nowrap;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory; }\n  .topic-wrapper .topic {\n    display: inline-block;\n    height: auto;\n    width: 300px;\n    margin-right: 1.5rem; }\n    @media screen and (max-width: 376px) {\n      .topic-wrapper .topic {\n        width: 260px; } }\n    .topic-wrapper .topic h6 {\n      color: var(--black);\n      padding: 0; }\n  .topic-wrapper .recipes-bio-wrapper {\n    padding-bottom: 0;\n    margin-top: 1rem; }\n\n.social-icon-outer {\n  width: 20%;\n  min-width: 220px; }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  .authors-sio {\n    width: 60%; } }\n\n.social-icon-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-width: 100%;\n  position: relative;\n  margin-left: 3.2rem;\n  text-decoration: none;\n  max-width: 16px; }\n  .social-icon-container a {\n    margin-right: 25px; }\n\n.social-icon-container:hover > svg {\n  fill: var --primary; }\n\n.social-icon-container:hover > * {\n  transition: fill 0.25s var(--ease-in-out-quad); }\n\n.social-icon-container:first-of-type {\n  margin-left: 0; }\n\n.social-icon-container:last-child {\n  margin-right: 0; }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  .social-icon-container {\n    margin: 0 2.2rem; } }\n\n.social-icons a {\n  display: inline-block; }\n\n.social-icons a:hover path {\n  fill: var(--accent); }\n\n.hidden {\n  width: 0px;\n  height: 0px;\n  visibility: hidden;\n  opacity: 0;\n  overflow: hidden;\n  display: inline-block; }\n\n.share {\n  vertical-align: middle; }\n\n#share-buttons:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n#share-buttons > div > svg {\n  height: 2rem;\n  fill: var(--articleText); }\n\ndiv.mail > svg {\n  margin: 1rem 1.5rem 1rem 0; }\n\ndiv.twitter > svg {\n  margin: 1rem 1.5rem 1rem 1.5rem; }\n\ndiv.facebook > svg {\n  margin: 1rem 0 1rem 1.5rem; }\n\n#share-buttons > div:hover {\n  cursor: pointer; }\n\n#share-buttons > div:hover > svg {\n  fill: var(--accent); }\n\n/*************************************TABLE************************************/\ntable {\n  position: relative;\n  line-height: 1.65;\n  color: var(--grey);\n  font-family: var(--paragraph);\n  margin: 0px auto 85px;\n  width: 100%;\n  max-width: 1004px;\n  overflow: hidden;\n  border-collapse: separate;\n  table-layout: fixed;\n  max-width: 680px; }\n\n/*DESKTOP*/\n@media screen and (max-width: 1070px) {\n  table {\n    margin: 0px auto 65px; } }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  table {\n    max-width: 486px; } }\n\n/*PHABLET*/\n@media screen and (max-width: 540px) {\n  table {\n    margin: 0px auto 55px; } }\n\n/*************************************TABLE CELL************************************/\ntd {\n  font-size: 16px;\n  line-height: 2em;\n  vertical-align: top; }\n\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  td {\n    font-size: 14px; } }\n\n@media screen and (max-width: 450px) {\n  th {\n    font-size: 13px; }\n  td {\n    font-size: 13px; } }\n\n/*************************************TABLE HEAD************************************/\nthead {\n  text-align: left;\n  border-collapse: collapse;\n  position: relative;\n  line-height: 1.756;\n  font-weight: 600;\n  color: var(--primary);\n  font-family: var(--paragraph); }\n\n.row {\n  padding-bottom: 9rem; }\n\n.section {\n  width: 100%;\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: 0 5rem; }\n  @media screen and (max-width: 540px) {\n    .section {\n      max-width: 100%;\n      padding: 0 2rem; } }\n  @media screen and (max-width: 735px) {\n    .section p {\n      max-width: 567px; } }\n\n.center-section {\n  max-width: 750px; }\n\n.pagination {\n  z-index: 100;\n  margin: 0;\n  margin-top: 95px;\n  padding: 0;\n  display: flex;\n  justify-content: flex-start; }\n  .pagination:hover {\n    cursor: pointer; }\n  .pagination a:hover {\n    color: var(--primary); }\n  .pagination .page-item {\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 0; }\n    .pagination .page-item .page-link {\n      display: block;\n      color: var(--grey);\n      min-width: 6rem; }\n    .pagination .page-item .page-next, .pagination .page-item .page-prev {\n      color: var(--primary); }\n    .pagination .page-item::before {\n      display: none; }\n  .pagination .active .page-link {\n    color: var(--primary); }\n\n.pagination li a {\n  text-decoration: none; }\n\nli.page-item {\n  margin-left: 10px; }\n\n.user-row {\n  text-align: center; }\n  .user-row .user-container {\n    display: block; }\n    .user-row .user-container .user-avatar {\n      margin: auto;\n      height: 100px;\n      width: 100px; }\n    .user-row .user-container .user-inner {\n      padding: 2rem 0; }\n      .user-row .user-container .user-inner .name {\n        font-size: 2.5rem;\n        font-weight: 700;\n        font-family: var(--headings); }\n      .user-row .user-container .user-inner .user-bio {\n        max-width: 450px;\n        text-align: left;\n        margin-bottom: 1rem; }\n      .user-row .user-container .user-inner .user-social svg {\n        width: auto;\n        height: 17px; }\n        .user-row .user-container .user-inner .user-social svg path {\n          fill: var(--black); }\n      .user-row .user-container .user-inner .user-social .user-social-link {\n        padding: 0 1rem; }\n        .user-row .user-container .user-inner .user-social .user-social-link:hover svg path {\n          fill: var(--accent); }\n      .user-row .user-container .user-inner .user-data {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 3.5rem 0; }\n        .user-row .user-container .user-inner .user-data .user-data-inner {\n          padding: 0 2rem;\n          border-left: 1px solid var(--horizontalRule); }\n          @media screen and (max-width: 376px) {\n            .user-row .user-container .user-inner .user-data .user-data-inner {\n              padding: 0 1.6rem; } }\n          .user-row .user-container .user-inner .user-data .user-data-inner.user-data-inner-start {\n            border: none; }\n          .user-row .user-container .user-inner .user-data .user-data-inner h6 {\n            font-size: 2.5rem;\n            font-family: var(--headings);\n            font-weight: 600;\n            color: var(--black); }\n          .user-row .user-container .user-inner .user-data .user-data-inner span {\n            color: var(--grey);\n            font-family: var(--paragraph); }\n          .user-row .user-container .user-inner .user-data .user-data-inner:hover h6 {\n            text-decoration: underline; }\n          .user-row .user-container .user-inner .user-data .user-data-inner:hover span {\n            color: var(--black); }\n\n.user-nav {\n  display: flex;\n  align-items: flex-start;\n  border-bottom: 1px solid var(--horizontalRule);\n  padding-bottom: 2rem; }\n  .user-nav .user-nav-inner {\n    padding-right: 4rem;\n    font-weight: 500;\n    color: var(--grey); }\n    @media screen and (max-width: 376px) {\n      .user-nav .user-nav-inner {\n        padding-right: 3rem; } }\n    .user-nav .user-nav-inner:hover {\n      color: var(--black); }\n\n.tab-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px 0; }\n\n.tab-wrapper:after {\n  content: '';\n  width: 100%;\n  height: 3px;\n  display: block;\n  order: -1; }\n\n.tab-label {\n  color: var(--grey);\n  white-space: nowrap;\n  border-bottom: 2px solid var(--horizontalRule);\n  font-weight: 500;\n  text-align: center;\n  padding: 2rem .5rem;\n  order: -1;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 5px 5px 0 0;\n  flex: 1 1;\n  line-height: 1;\n  justify-content: center; }\n  .tab-label:hover {\n    color: var(--black); }\n    .tab-label:hover svg path {\n      fill: var(--black); }\n  .tab-label svg path {\n    fill: var(--grey); }\n  @media screen and (max-width: 540px) {\n    .tab-label svg {\n      display: none; } }\n  @media screen and (max-width: 376px) {\n    .tab-label {\n      font-size: 1.2rem; } }\n\n.tab-label-data {\n  color: var(--grey);\n  margin-left: .4em;\n  font-size: 1.2rem; }\n\n.tab-content {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  opacity: 0; }\n\n.tab-switch:checked + .tab-label {\n  color: var(--black);\n  border-bottom: 2px solid var(--accent); }\n  .tab-switch:checked + .tab-label svg path {\n    fill: var(--black); }\n\n.tab-switch:checked + .tab-label + .tab-content {\n  height: auto;\n  overflow: auto;\n  padding-top: 5rem;\n  opacity: 1;\n  transition: .3s opacity; }\n\n.tab-switch {\n  display: none; }\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url(\"/fonts/Ceaper-Light.woff2\") format(\"woff2\"), url(\"/fons/Ceaper-Light.woff\") format(\"woff\");\n  font-weight: 300; }\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url(\"/fonts/Ceaper-Regular.woff2\") format(\"woff2\"), url(\"/fons/Ceaper-Regular.woff\") format(\"woff\");\n  font-weight: 400; }\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url(\"/fonts/Ceaper-Medium.woff2\") format(\"woff2\"), url(\"/fons/Ceaper-Medium.woff\") format(\"woff\");\n  font-weight: 500; }\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url(\"/fonts/Ceaper-Regular.woff2\") format(\"woff2\"), url(\"/fons/Ceaper-Regular.woff\") format(\"woff\");\n  font-weight: 400; }\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url(\"/fonts/Ceaper-Medium.woff2\") format(\"woff2\"), url(\"/fons/Ceaper-Medium.woff\") format(\"woff\");\n  font-weight: 500; }\n\n@font-face {\n  font-family: 'Heisei Kaku Gothic';\n  src: url(\"/fonts/Heisei-Kaku-Gothic-Medium.woff2\") format(\"woff2\"), url(\"/fons/Heisei-Kaku-Gothic-Medium.woff\") format(\"woff\");\n  font-weight: 600; }\n\n@font-face {\n  font-family: 'Heisei Kaku Gothic';\n  src: url(\"/fonts/Heisei-Kaku-Gothic-Bold.woff2\") format(\"woff2\"), url(\"/fons/Heisei-Kaku-Gothic-Bold.woff\") format(\"woff\");\n  font-weight: 700; }\n\n@font-face {\n  font-family: 'Apercu';\n  src: url(\"/fonts/Apercu-Medium.woff2\") format(\"woff2\"), url(\"/fons/Apercu-Medium.woff\") format(\"woff\");\n  font-weight: 600; }\n\n@font-face {\n  font-family: 'Apercu';\n  src: url(\"/fonts/Apercu-Bold.woff2\") format(\"woff2\"), url(\"/fons/Apercu-Bold.woff\") format(\"woff\");\n  font-weight: 700; }\n\n:root {\n  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1); }\n\n*,\n*:after,\n*:before {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n  font-size: inherit; }\n\n:root {\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  cursor: default;\n  font-size: 0.625rem;\n  line-height: 1.4; }\n\nbody {\n  font-family: \"Ceaper Round\" , sans-serif;\n  font-size: 1.6rem;\n  margin: 0;\n  font-weight: 400;\n  height: 100%;\n  padding: 0;\n  font-feature-settings: \"kern\";\n  -webkit-font-kerning: normal;\n          font-kerning: normal; }\n\na,\nbutton {\n  text-decoration: none;\n  cursor: pointer; }\n\na:focus {\n  outline: none; }\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: \"Ceaper Round\" , sans-serif;\n  color: inherit;\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  resize: none; }\n\n:focus {\n  outline: none; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace; }\n\nbutton,\nfieldset {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  outline: none;\n  background: transparent; }\n\ntable {\n  border-collapse: separate;\n  border-spacing: 0; }\n\naudio:not([controls]) {\n  display: none; }\n\ndetails {\n  display: block; }\n\ninput:active, input:focus {\n  outline: none; }\n\ninput[type=\"number\"] {\n  width: auto; }\n\nimg.Image__Zoom ~ div {\n  background: transparent !important; }\n\n.Image__Small {\n  width: 100%;\n  max-width: 680px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px; }\n  .Image__Small img {\n    width: 100%; }\n\n.Image__medium {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px; }\n  .Image__medium img {\n    width: 100%; }\n\n.Image__large {\n  width: 100%;\n  margin-bottom: 35px; }\n  .Image__large img {\n    width: 100vw;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: -50vw;\n    margin-right: -50vw; }\n\n.author-alc-section {\n  padding-left: 0;\n  padding-right: 0; }\n\n.icon-image path {\n  fill: var(--primary); }\n\n@-webkit-keyframes image-load-in {\n  0% {\n    -webkit-filter: blur(8px);\n    filter: blur(8px);\n    opacity: 0; }\n  100% {\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1; } }\n\n@keyframes image-load-in {\n  0% {\n    -webkit-filter: blur(8px);\n    filter: blur(8px);\n    opacity: 0; }\n  100% {\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1; } }\n", "",{"version":3,"sources":["global.scss","vars.scss","actions.scss","anchor.scss","animations.scss","articles.scss","badge.scss","bar.scss","blockquote.scss","button.scss","color.scss","contents.scss","footer.scss","form.scss","header.scss","headings.scss","hero.scss","home.scss","horizontal-rule.scss","image.scss","layout.scss","lists.scss","page.scss","paragraph.scss","progress.scss","recipe.scss","recipes.scss","shots.scss","social-links.scss","tables.scss","section.scss","paginator.scss","user.scss"],"names":[],"mappings":"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","file":"global.scss","sourcesContent":["@import \"vars.scss\";\n@import \"actions.scss\";\n@import \"anchor.scss\";\n@import \"animations.scss\";\n@import \"articles.scss\";\n@import \"badge.scss\";\n@import \"bar.scss\";\n@import \"blockquote.scss\";\n@import \"button.scss\";\n@import \"color.scss\";\n@import \"contents.scss\";\n@import \"footer.scss\";\n@import \"form.scss\";\n@import \"header.scss\";\n@import \"headings.scss\";\n@import \"hero.scss\";\n@import \"home.scss\";\n@import \"horizontal-rule.scss\";\n@import \"image.scss\";\n@import \"layout.scss\";\n@import \"lists.scss\";\n@import \"page.scss\";\n@import \"paragraph.scss\";\n@import \"progress.scss\";\n@import \"recipe.scss\";\n@import \"recipes.scss\";\n@import \"shots.scss\";\n@import \"social-links.scss\";\n@import \"tables.scss\";\n@import \"section.scss\";\n@import \"paginator.scss\";\n@import \"user.scss\";\n\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url('/fonts/Ceaper-Light.woff2') format('woff2'),\n       url('/fons/Ceaper-Light.woff') format('woff');\n       font-weight: 300;\n}\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url('/fonts/Ceaper-Regular.woff2') format('woff2'),\n       url('/fons/Ceaper-Regular.woff') format('woff');\n       font-weight: 400;\n}\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url('/fonts/Ceaper-Medium.woff2') format('woff2'),\n       url('/fons/Ceaper-Medium.woff') format('woff');\n       font-weight: 500;\n}\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url('/fonts/Ceaper-Regular.woff2') format('woff2'),\n       url('/fons/Ceaper-Regular.woff') format('woff');\n       font-weight: 400;\n}\n@font-face {\n  font-family: 'Ceaper Round';\n  src: url('/fonts/Ceaper-Medium.woff2') format('woff2'),\n       url('/fons/Ceaper-Medium.woff') format('woff');\n       font-weight: 500;\n}\n@font-face {\n  font-family: 'Heisei Kaku Gothic';\n  src: url('/fonts/Heisei-Kaku-Gothic-Medium.woff2') format('woff2'),\n       url('/fons/Heisei-Kaku-Gothic-Medium.woff') format('woff');\n       font-weight: 600;\n}\n@font-face {\n  font-family: 'Heisei Kaku Gothic';\n  src: url('/fonts/Heisei-Kaku-Gothic-Bold.woff2') format('woff2'),\n       url('/fons/Heisei-Kaku-Gothic-Bold.woff') format('woff');\n       font-weight: 700;\n}\n@font-face {\n  font-family: 'Apercu';\n  src: url('/fonts/Apercu-Medium.woff2') format('woff2'),\n       url('/fons/Apercu-Medium.woff') format('woff');\n       font-weight: 600;\n}\n@font-face {\n  font-family: 'Apercu';\n  src: url('/fonts/Apercu-Bold.woff2') format('woff2'),\n       url('/fons/Apercu-Bold.woff') format('woff');\n       font-weight: 700;\n}\n\n:root {\n  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);\n}\n\n*,\n*:after,\n*:before {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n  font-size: inherit;\n}\n\n:root {\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  cursor: default;\n  font-size: 0.625rem;\n  line-height: 1.4;\n}\n\nbody {\n  font-family:  \"Ceaper Round\" , sans-serif;\n  font-size: 1.6rem;\n  margin: 0;\n  font-weight: 400;\n  height: 100%;\n  padding: 0;\n  font-kerning: normal;\n}\n\na,\nbutton {\n  text-decoration: none;\n  cursor: pointer;\n}\n\na:focus {\n  outline: none;\n}\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family:  \"Ceaper Round\" , sans-serif;\n  color: inherit;\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  border: none;\n  -webkit-appearance: none;\n    -moz-appearance: none;\n  appearance: none;\n  resize: none;\n}\n:focus {\n  outline: none;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n}\n\nbutton,\nfieldset {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n\ntable {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\naudio:not([controls]) {\n  display: none;\n}\n\ndetails {\n  display: block;\n}\n\ninput {\n  &:active,\n  &:focus {\n    outline: none;\n  }\n\n  &[type=\"number\"] {\n    width: auto;\n  }\n}\n\nimg.Image__Zoom ~ div {\n  background: transparent !important;\n}\n\n.Image__Small {\n  width: 100%;\n  max-width: 680px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n\n  img {\n    width: 100%;\n  }\n}\n\n.Image__medium {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n\n  img {\n    width: 100%;\n  }\n}\n\n.Image__large {\n  width: 100%;\n  margin-bottom: 35px;\n\n  img {\n    width: 100vw;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: -50vw;\n    margin-right: -50vw;\n  }\n}\n\n.author-alc-section {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.icon-image {\n  path {\n    fill: var(--primary);\n  }\n}\n\n@-webkit-keyframes image-load-in {\n  0% {\n    -webkit-filter: blur(8px);\n    filter: blur(8px);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes image-load-in {\n  0% {\n    -webkit-filter: blur(8px);\n    filter: blur(8px);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n","/*BREAKPOINTS*/\n$phone: 376px;\n$phablet: 540px;\n$tablet: 735px;\n$desktop: 1070px;\n$desktop_medium: 1280px;\n$desktop_large: 1440px;\n\nbody{\n    /*FONTS*/\n    --headings: \"Apercu\", \"Heisei Kaku Gothic\", sans-serif;\n    --paragraph: \"Ceaper Round\" , sans-serif;\n    -webkit-text-size-adjust: 100%;\n-moz-text-size-adjust: 100%;\n-ms-text-size-adjust: 100%;\ntext-size-adjust: 100%;\n-moz-font-feature-settings: \"pkna\";\n-webkit-font-feature-settings: \"pkna\";\nfont-feature-settings: \"pkna\";\n\n    /*PRIMARY*/\n    --accent: #ff5445;\n    --white: #fff;\n    --black: #231e2d;\n    --grey: #b0b0b0;\n    --articleText: #4f4b57;\n    /*SECONDAY*/\n    --cream: #e5ddd5;\n    --botticelli: #cadee5;\n    --basil: #cfe5ca;\n    /*OTHER*/\n    --background-color: #fff;\n    --background-grey: rgba(176,176,176, 0.1);\n    --horizontalRule: rgba(8, 8, 11, 0.15);\n    /*GRADATIONS*/\n    --articleText80:  rgba(79,75,87, .8);\n    --accent60: rgba(255, 84, 69, .6);\n    --grey60:  rgba(176,176,176,.6);\n    --grey40:  rgba(176,176,176, .4);\n    --grey20:  rgba(176,176,176,.2);\n    /*DARK*/\n    --d-articleText: #d1d1d1;\n}\n\n::selection {\n    background: var(--accent);\n    color: #fcfcfc;\n}\n\n::-moz-selection {\n    background: var(--accent);\n    color: #fcfcfc;\n}\n",".actions-row {\n  position: relative;\n  width: 100%;\n  height: 100vh; //BG\n\n  & .actions-row-bg {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    background: rgba(0,0,0,.8);\n    z-index: 9;\n  }\n  //ラッパー・インナー\n  & .actions-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n\n  & .actions-inner {\n    background: var(--background-color);\n    position: relative;\n    z-index: 10;\n    text-align: center;\n    padding: 3rem 2rem;\n    overflow: visible;\n    @media screen and (max-width: $tablet) {\n      margin: 1.5rem;\n    }\n  }\n  //閉じる\n\n  .actions-row-close {\n    position: absolute;\n    right: 0;\n    top: 0;\n    /* margin: 0.8rem; */\n    z-index: 1052;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    height: 60px;\n    width: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n\n    & svg {\n      width: 15px;\n      height: 15px;\n    }\n  }\n  //タイトル\n\n  & h1 {\n    font-size: 1.8rem;\n    margin: 0 0 3rem;\n    font-weight: 500;\n  }\n  //入力\n  & .action-button-wrapper {\n    display: grid;\n    margin: 1.5rem 2.5rem;\n    grid-template-columns: minmax(max-content, 400px);\n    @media screen and (max-width: $tablet) {\n      margin: 1.5rem 0;\n    }\n  }\n\n  & .input-inner {\n    padding: 1.2rem 2rem;\n  }\n  //ボタン\n  .button {\n    padding: 1.2rem 2rem;\n  }\n\n  & .actions-subtitle {\n    padding: 2rem 0;\n    display: flex;\n    align-items: center;\n\n    &:before {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-right: 2rem;\n    }\n\n    &:after {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-left: 2rem;\n    }\n  }\n  //規約\n  & p {\n    max-width: 400px;\n    margin: 2rem auto 1rem;\n    text-align: left;\n\n    & a {}\n  }\n  //線\n  & .hr-text {\n    margin-top: 3.9rem;\n  }\n  //アカウントを作成・すでに持っている\n  & .make-account-link {\n    display: inline-flex;\n    margin: 1.5rem 0 0;\n\n    & p {\n      margin: 0;\n    }\n\n    & a {\n      color: var(--accent);\n      white-space: nowrap;\n      margin-left: 1.3rem;\n    }\n  }\n}\n","a{\n  color: var(--articleText);\n      line-height: 1.756;\n      @media screen and (max-width: $phone) {\n          font-size: 1.6rem;\n        }\n}\n\na:hover{\n  text-decoration-color: var(--accent);\n}\n\na.hover-accent:hover {\n  color: var(--accent);\n   & svg path {\n    fill: var(--accent);\n\n   }\n}\n\na.hover-black:hover {\n  color: var(--black);\n}\n\na.hover-white:hover {\n  color: var(--white);\n}\n\na.hover-line:hover {\n  text-decoration: underline;\n  text-decoration-color: var(--black);\n}\n\n/*もっと見る*/\n.learn-more {\n  white-space: nowrap;\n  font-size: 1.5rem;\nalign-items: center;\npadding-top: 2.5rem;\njustify-content: flex-end;\n  & svg{\n    width: 15px;\n    margin-left: 2rem;\n  }\n  &:hover{\n  text-decoration: underline;\n }\n}\n/*イベント無効*/\n.event-none {\n  pointer-events: none;\n}\n\n//ボーター\n.border-text {\n  text-decoration: underline;\n}\n","/*Fade Up*/\n.pr-half, .medium, .iconset, img.shadow, .fade-up {\n    position: relative;\n    top: 70px;\n    opacity: 0;\n    will-change: opacity,transform;\n}\n\n/*Fade Up Left*/\n.fade-l {\n    position: relative;\n    left: -70px;\n    opacity: 0;\n    will-change: opacity,transform;\n}\n.fade-l:first-child {\n    transition: all .6s;\n}\n.fade-l:nth-child(2n) {\n    transition: all .8s;\n}\n.fade-l:nth-child(3n)  {\n    transition: all 1s;\n}\n.fade-l.moving {\n    opacity: 1;\n    left: 0;\n}\n\n\n/*Fade Up Right*/\n.fade-r {\n    position: relative;\n    left: 70px;\n    opacity: 0;\n    will-change: opacity,transform;\n}\n.fade-r:first-child {\n    transition: all .6s;\n}\n.fade-r:nth-child(2n) {\n    transition: all .8s;\n}\n.fade-r:nth-child(3n)  {\n    transition: all 1s;\n}\n.fade-r.moving {\n    opacity: 1;\n    left: 0;\n}\n\n.pr-half:first-child {\n    transition: all .6s;\n}\n.pr-half:nth-child(2n) {\n    transition: all .8s;\n}\n.pr-half:nth-child(3n) {\n    transition: all 1s;\n}\n.pr-half.moving {\n    opacity: 1;\n    top: 0;\n}\n\n\n.medium:first-child {\n    transition: all .6s;\n}\n.medium:nth-child(2n) {\n    transition: all .8s;\n}\n.medium:nth-child(3n) {\n    transition: all 1s;\n}\n.medium.moving {\n    opacity: 1;\n    top: 0;\n}\n\n.iconset:first-child {\n    transition: all .6s;\n}\n.iconset:nth-child(2n) {\n    transition: all .8s;\n}\n.iconset:nth-child(3n) {\n    transition: all 1s;\n}\n.iconset.moving {\n    opacity: 1;\n    top: 0;\n}\n\n\nimg.shadow:first-child {\n    transition: all .6s;\n}\nimg.shadow:nth-child(2n) {\n    transition: all .8s;\n}\nimg.shadow:nth-child(3n) {\n    transition: all 1s;\n}\nimg.shadow.moving {\n    opacity: 1;\n    top: 0;\n}\n\n.fade-up:first-child {\n    transition: all .6s;\n}\n.fade-up:nth-child(2n) {\n    transition: all .8s;\n}\n.fade-up:nth-child(3n) {\n    transition: all 1s;\n}\n.fade-up:nth-child(4n) {\n    transition: all 1.2s;\n}\n.fade-up:nth-child(5n) {\n    transition: all 1.4s;\n}\n.fade-up:nth-child(6n) {\n    transition: all 1.6s;\n}\n.fade-up:nth-child(7n) {\n    transition: all 1.8s;\n}\n.fade-up:nth-child(8n) {\n    transition: all 2s;\n}\n.fade-up:nth-child(9n) {\n    transition: all 2.2s;\n}\n.fade-up.moving {\n    opacity: 1;\n    top: 0;\n}\n","//記事作成後解除する\n.articles {\n  display: none;\n}\n",".badge-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\twhite-space: nowrap;\n}\n.badge {\n\tmargin-left: 1rem;\n\tpadding: .1rem .6rem;\n\tbackground: var(--accent);\n\tcolor:  var(--white);\n\tborder-radius: 4px;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n\tdisplay: table;\n}\n\n// 1位のレシピ\n.top-recipe {\n\talign-items: center;\n& svg {\n\twidth: auto;\n\theight: 1em;\n\tmargin: 0;\n\tposition: relative;\n\ttop: -.1em;\n}}\n",".tag-bar-wrapper {\n\tposition: relative;\n\t& .tag-bar-ico {\n\t\tposition: absolute;\n\twidth: 40px;\n\ttop: 0;\n\tbottom:0;\n\tmargin: auto;\n\tbackground: var(--white);\n\tz-index: 10;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\t}\n\t& .tag-bar-back {\n\t\tleft: 0;\n\t}\n\t& .tag-bar-next {\n\tright: 0;\n\tjustify-content: flex-end;\n\t}\n}\n.tag-bar {\n\toverflow-x: auto;\n\twhite-space: nowrap;\n  margin: 0 0 2rem;\nposition: relative;\npadding: 0 2.5rem;\n}\n\n.tag {\n\tdisplay: inline-block;\n\twidth: auto;\n\theight: auto;\n\tmargin: 1rem;\n  color: var(--grey);\n\t&:hover{\n\t\tcolor: var(--black);\n\t}\n}\n\n/*Filter*/\n.filter {\n  display: inline-block;\n  padding-left: 5rem;\n  margin-right: 1rem;\n\twhite-space: nowrap;\n  & svg {\n    margin-right: 1rem;\n    position: relative;\n    top: -.1rem;\n  }\n  & .button {\n    & svg {\n      width: 15px;\n    }\n\t\t&:hover {\n\t\t\tcolor: var(--black);\n\t\t\tbackground: none;\n\t\t}\n  }\n}\n","blockquote p:before {\n  content: \"“\";\n  font-family: \"Apercu\", sans-serif;\n}\n\n\nblockquote p:after {\ncontent: \"”\";\nfont-family: \"Apercu\", sans-serif;\n  margin-left: -.6em;\n\n}\n\nblockquote {\n  margin: auto;\n}\n\nblockquote > p {\n  font-family: var(--serif);\n  margin: 0 auto;\n  font-size: 2.6rem;\n  font-weight: 500;\n  text-align: center;\n  color: var(--primary);\n  @media screen and (max-width: 540px) {\n    font-size: 2rem;\n  }\n  @media screen and (max-width: $phone) {\n      font-size: 1.8rem;\n    }\n}\n\n.paragraph  {\n  margin: 0 auto 3.5rem;\n  @media screen and (max-width: 735px) {\n      margin-bottom: 2em;\n}}\n",".button {\n  padding: 1rem 2rem;\n  color: var(--accent);\n  border: 1px solid var(--accent);\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 1.4rem;\n  line-height: 1;\n\n  &:hover {\n    color: var(--white);\n    background: var(--accent);\n  }\n}\n/*アクセント*/\n.button-accent {\n  color: var(--white);\n  border: 1px solid var(--accent);\n  background: var(--accent);\n\n  & svg {\n    & path {\n      fill: var(--white);\n    }\n  }\n\n  &:hover {\n    border: 1px solid var(--black);\n    background: var(--black);\n  }\n}\n/*ブラック*/\n.button-black {\n  color: var(--white);\n  border: 1px solid var(--black);\n  background: var(--black);\n\n  & svg {\n    path {\n      fill: var(--white);\n    }\n  }\n\n  &:hover {\n    border: 1px solid var(--accent);\n    background: var(--accent);\n  }\n}\n\n.button-black-ol {\n  color: var(--black);\n  border: 1px solid var(--black);\n\n  &:hover {\n    color: var(--white);\n    background: var(--black);\n  }\n}\n/*グレーアウト*/\n.button-grey {\n  color: var(--grey);\n  border: 1px solid var(--grey);\n  pointer-events: none;\n}\n/*アクション*/\n.action-button {\n  font-size: 1.3rem;\n  padding: 0.5rem 0.7rem;\n}\n/*テキスト*/\n.button-text {\n  padding: 0.5rem 2rem;\n  color: var(--accent);\n  border-radius: 4px;\n  font-weight: 500;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n/*アイコン*/\n.ico {\n  display: inline-flex;\n  align-items: center;\n  & svg {\n    height: auto;\n    width: 15px;\n    margin-right: 0.5em;\n  }\n}\n//アイコン・バック\n.ico-back {\n  display: inline-flex;\n  align-items: center;\n  & svg {\n    height: auto;\n    width: 15px;\n    margin-left: 0.5em;\n  }\n}\n//ソーシャル\n\n.social-button {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n\n  &:hover {\n    background: var(--black);\n  }\n\n  & .button-prefix {\n    left: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background: var(--white);\n    border-right: 1px solid var(--black);\n\n    & svg {\n      width: auto;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding: 0 1.5rem;\n      margin: 0;\n    }\n  }\n\n  & .social-button-inner {\n    padding-left: 50px;\n    width: 100%;\n  }\n}\n/*入力*/\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n\n  & .input-prefix {\n    left: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    & svg {\n      width: auto;\n      height: 15px;\n      display: flex;\n      align-items: center;\n      padding: 0 1.5rem;\n\n      & path {\n        fill: var(--grey);\n      }\n    }\n  }\n\n  & .input-suffix {\n    right: 0;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    line-height: inherit;\n\n    &:before {\n      content: \"\";\n      position: absolute;\n      top: 25%;\n      left: 0;\n      width: 1px;\n      height: 50%;\n      background: rgb(223, 225, 234);\n    }\n\n    & a {\n      display: flex;\n      height: 100%;\n      align-items: center;\n      padding: 0 2rem;\n    }\n  }\n\n  & .input-inner {\n    padding-left: 45px;\n  }\n}\n\n.input-inner {\n  padding: 1.5rem 2rem;\n  border: 1px solid var(--horizontalRule);\n  border-radius: 4px;\n  font-weight: 500;\n\n  &:hover {}\n\n  &::placeholder {\n    color: var(--grey);\n    font-weight: 400;\n    font-size: 1.3rem;\n  }\n}\n\n//フォーム・セレクトボタン\n.select-button {\n    height: 100%;\n    width: 100%;\n    color: var(--articleText);\n    padding: 3.5rem 3rem;\n    border: 1px solid var(--horizontalRule);\n    border-radius: 4px;\n    font-weight: 500;\n    font-size: 1.4rem;\n    line-height: 1;\n    & svg {\n      width: 30px;\n      margin-right: 3rem;\n    }\n    &:hover {\n      border-color: var(--black);\n      background: var(--background-grey);\n    }\n}\n\n.select-button-bottom {\n  margin-bottom: 1.5rem;\n}\n",".accent {\n  color: var(--accent);\n}\n\n.grey {\n  color: var(--grey);\n}\n\n/*Background*/\n.bg-accent {\n  background-color: var(--accent);\n}\n.bg-accent60 {\n  background-color: var(--accent60);\n}\n.bg-black {\n  background-color: var(--black);\n}\n.bg-grey {\n  background-color: var(--background-grey);\n}\n",".contents {\n  padding: 5rem 0;\n  background: var(--bacground-color);\n}\n.contents2 {\n  padding: 10rem 0;\n}\n.contents-top2 {\n  padding-top:10rem;\n}\n@media screen and (max-width: $phablet) {\n  .contents {\n    padding: 3rem 0;\n  }\n  .contents2 {\n    padding: 6rem 0;\n  }\n  .contents-top2 {\n    padding-top:6rem;\n  }\n}\n\n/*Card*/\n.card {\n  border-radius: 4px;\n  overflow: hidden;\n}\n.card-wrapper {\n  padding: 2rem;\n}\n\n.card-border {\n      border-radius: 10px;\n      border: 1px solid var(--horizontalRule);\n}\n/*Border*/\n.border {\n  border: 1px solid var(--horizontalRule);\n}\n\n/*Flex*/\n.flex {\n\tdisplay: flex;\n}\n","/************************FOOTER************************/\n#footer {\n  position: relative;\n    & a, p, h6{\n      font-size: 1.4rem;\n    @media screen and (max-width: $tablet) {\n            font-size: 1.3rem;\n      }\n}\n@media screen and (max-width: $phablet) {\n  margin-bottom: 56px;\n}\n}\n.footer-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding-bottom: 6rem;\n  & h6 {\n  }\n& p, a {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: $tablet) {\n    padding-bottom:   3rem;\n    display: block;\n}\n}\n\n/*アプリ・リンク*/\n#footer-app {\n  &.footer-app-grid {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n    grid-gap: 10rem;\n    & h2 {\n      color: var(--white);\n      margin-bottom: 5rem;\n      font-size: 3rem;\n    }\n    & img {\n      padding-top: 5rem;\n    }\n    @media screen and (max-width: $tablet) {\n      grid-template-columns: 1fr;\n      grid-gap: 5rem;\n      & h2 {\n        padding-top: 5rem;\n      }\n      & img {\n        padding-top: 0;\n      }\n}\n}\n}\n\n/*コンテンツ*/\n#footer-contents{\n  align-items: flex-start;\n  padding: 7rem 0 0;\n  &  .logo-link svg {\n    width: auto;\n    height: 30px;\n    margin-bottom: 2rem;\n}\n& .footer-contents-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 5rem;\n    @media screen and (max-width: $tablet) {\n      grid-template-columns: 1fr 1fr;\n      grid-gap: 2rem;\n}\n}\n& h6, a {\n  display: block;\n  padding: .5rem 0;\n}\n@media screen and (max-width: $desktop) {\ndisplay: block;\n}\n}\n\n\n/*規約*/\n#footer-terms {\n   padding-bottom: 7rem;\n  & a, p {\n    font-size: 1.3rem;\n    display: inline;\n    padding:0  .5rem;\n  }\n  .footer-terms-inner1 {\n    padding-top: .5rem;\n  }\n  @media screen and (max-width: $tablet) {\n    & .footer-terms-inner1 {\n      padding: .5rem 0 .7rem;\n    }\n    & .footer-terms-inner2 {\n      padding: .7rem 0 .5rem;\n    }\n    & a, p{\n      padding:0 .4rem;\n}\n}\n}\n/*ソーシャルメディア*/\n.footer-social svg {\n  fill: var(--black);\n  height: 20px;\n  width: auto;\n  margin: auto 1rem;\n}\n","//フォードバック\n.feedback-wrapper {\n  text-align: center;\n  padding-bottom: 4rem;\n}\n\n//フォーム・セレクト\n.form-select {\n  padding: 2rem 0;\n}\n//評価・セレクト\n.select-rating-wrapper {\n  display: grid;\n  grid-template-columns:  1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1rem;\n  & svg {\n    width: auto;\n    height: 40px;\n    margin: 0;\n  }\n  @media screen and (max-width: $tablet){\n    & .select-button {\n      padding: 1rem 0;\n    }\n}\n}\n\n//テキストエリア\n.feedback-area {\nborder-radius: 4px;\nheight: 200px;\nborder: 1px solid var(--horizontalRule);\nline-height: 1.756;\nfont-size: 1.6rem;\nwidth: 100%;\npadding: 2rem;\ncolor: var(--articleText);\n&:focus {\n  border: 1px solid var(--horizontalRule);\n\n}\n}\n\n\n//送信\n.form-submit {\n  text-align: right;\n  display: block;\n  text-align: center;\n}\n","/************************HEADER************************/\n#header {\n  width: 100%;\n  transition: .6s;\n      padding: 0 5rem;\n      border-bottom: 1px solid var(--horizontalRule);\n      background: var(--background-color);\n      & .logo-link {\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      margin-right: 7rem;\n    }\n    & .nav-container {\n      position: relative;\n      z-index: 100;\npadding: 2rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      & a, .search {\n        font-weight: 500;\n            font-size: 1.4rem;\n            margin-right: 3.5rem;\n      }\n      & .logo-link svg {\n        width: auto;\n        height: 30px;\n      }\n      @media (min-width: $desktop_large) {\n        & a{\n        }\n        @media screen and (max-width: $tablet) {\n          padding-top: 3rem;\n    }\n      }\n    }\n      @media screen and (max-width: 540px){\n          padding: 0 2rem;;\n      }\n      @media screen and (max-width: $phablet) {\n        display: none;\n      }\n}\n\n/*LOGO*/\n#logo-desktop {\n  .change-fill {\n    fill: var(--primary);\n  }\n\n  .accent {\n    fill: var(--accent);\n  }\n}\n\n@media screen and (max-width: $phone) {\n  #logo-desktop svg {\n      height: 25px;\n      width: auto;\n    }\n}\n\n.header-move {\n  transform: translateY(-100%);\n}\n\n/*Search*/\n.search-wrapper {\n  position: relative;\n  box-sizing: border-box;\n    position: relative;\n  & .search-icon {\n    position: absolute;\n    width: 34px;\n        top: 0px;\n        z-index: 2;\n        height: 100%;\n        left: 0px;\n        & .search-icon-inner {\n          display: flex;\n          justify-content: center;\n          width: 100%;\n          height: 100%;\n        }\n  }\n  & svg {\n        width: 15px;\n        & path {\n\n        fill: var(--grey);\n                }\n       }\n       & ::placeholder {\n         color: var(--grey);\n         font-weight: 300;\n       }\n}\n.search {\n  border: 1px solid var(--horizontalRule);\n  padding: .5rem .5rem .5rem 34px;\n  border-radius: 4px;\n  width: 300px;\n}\n\n/*コンテンツ・デスクトップ*/\n.nav-inner {\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-pack: justify;\n-ms-flex-pack: justify;\njustify-content: space-between;\n width: 100%;\n}\n\n#desktop-nav {\n  @media screen and (max-width: $desktop) {\n    display: none;\n }\n}\n/*コンテンツ・モバイル*/\n#mobile-nav {\n  & .nav-inner {\n        justify-content: flex-end;\n  }\n   & .search-wrapper  {\n     width: 20px;\n     margin-right: 2rem;\n     & svg {\n       width: 20px;\n       & path{\n         fill: var(--black);\n       }\n     }\n     & .search-icon {\n       width: 20px;\ndisplay: flex;\nleft: 0;\njustify-content: center;\n     }\n   }\n\n@media screen and (min-width: $desktop) {\n  display: none;\n}\n}\n\n/*アプリ*/\n#app-header {\n  position: fixed;\n  left: 0;\ntop: 0;\nwidth: 100%;\nz-index: 100;\n  padding: 1rem 0;\n  background: var(--white);\n  .app-header-wrapper {\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\n//バック\n.app-header-inner1 {\n  & svg {\n    width: auto;\n    height: 17px;\n  }\n  & a {\n    line-height: 1;\n  }\n}\n//ロゴ\n.app-header-inner2 {\ntext-align: center;\n  & .logo-link svg {\n    width: auto;\n    height: 25px;\n  }\n}\n//ユーザー\n.app-header-inner3 {\n& .user-container {\n  justify-content: flex-end;\n}\n & .user-avatar {\n   width: 25px;\n   height: 25px;\n }\n}\n\n  }\n  @media screen and (min-width: $phablet) {\n    display: none;\n  }\n}\n\n/*ナビ・アプリ*/\n.header-move {\n  transform: translateY(150%);\n}\n#app-nav {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: var(--white);\n    border-top: 1px solid var(--horizontalRule);\n    z-index: 100;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: .5s;\n    .app-nav-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      width: 100%;\n      .app-nav-inner {\ntext-align: center;\npadding: .6rem 0;\nline-height: 1;\n& a, h6 {\n  font-size: .9rem;\n  font-weight:500;\nline-height: 1;\nfont-family: var(--paragraph);\npadding-top: .6em;\n}\n        & svg {\n          width: auto;\n          height: 15px;\n        }\n        & .app-nav-icon {\n              display: inherit;\n        }\n      }\n    }\n  @media screen and (min-width: $phablet) {\n    display: none;\n  }\n}\n\n/*アクティブ*/\n.app-nav-active {\n  color: var(--accent);\n  & svg path{\n  fill: var(--accent);\n  }\n}\n\n\n/*Other*/\n.back-arrow-ico-container {\n  -webkit-transition: 0.2s -webkit-transform var(--ease-out-quad);\n  transition: 0.2s -webkit-transform var(--ease-out-quad);\n  -o-transition: 0.2s transform var(--ease-out-quad);\n  transition: 0.2s transform var(--ease-out-quad);\n  transition: 0.2s transform var(--ease-out-quad), 0.2s -webkit-transform var(--ease-out-quad);\n  opacity: 0;\n  padding-right: 30px;\n  -webkit-animation: fadein 0.3s linear forwards;\n  animation: fadein 0.3s linear forwards;\n}\n@-webkit-keyframes fadein {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  to {\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .back-arrow-ico-container {\n    display: none;\n  }\n}\n\n\n.logo-link[class*=\"data-ally\"]:focus::after {\n  content: \"\";\n  position: absolute;\n  left: -10%;\n  top: -30%;\n  width: 120%;\n  height: 160%;\n  border: 2px solid var(--accent);\n  background: rgba(255, 255, 255, 0.01);\n  border-radius: 5px;\n}\n\n.logo-link[class*=\"back-arrow-ico-container\"] {\n  -webkit-transform: translateY(-3px);\n  -ms-transform: translateY(-3px);\n  transform: translateY(-3px);\n}\n\n.logo-link:hover {\n  text-decoration: none;\n}\n\n.nav-controls {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n@media screen and (max-width: 540px) {\n    right: -5px;\n  }\n}\n\n.icon-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  padding-left: 1rem;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: opacity 0.3s ease;\n  -o-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  margin-left: 30px;\n}\n\n.icon-wrapper:hover {\n  opacity: 1;\n}\n\n.icon-wrapper[class*=\"data-ally\"]:focus::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -30%;\n  width: 100%;\n  height: 160%;\n  border: 2px solid var(--accent);\n  background: rgba(255, 255, 255, 0.01);\n  border-radius: 5px;\n}\n\n\n\n\n.page-button {\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  color: var(--primary);\n}\n\n.page-button:focus,\n.page-button:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n\n.page-number-button {\n  font-weight: 400;\n  font-size: 18px;\n  text-decoration: none;\n  color: var(--primary);\n}\n\n.page-number-button:focus,\n.page-number-button:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  opacity: 0.3;\n}\n\n.spacer::before {\n  content: \"...\";\n}\n\n.mobiler-reference {\n  font-weight: 400;\n  color: var(--primary);\n}\n\n.mobile-reference em {\n  font-style: normal;\n  color: var(--primary);\n}\n\n.frame {\n  position: relative;\n  z-index: 1;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n/*TABLET*/\n@media screen and (max-width: 735px) {\n  .frame {\n    left: -15px;\n  }\n}\n/*Bio*/\n@media screen and (max-width: 1070px) {\n.subheading-container .grid-controls-container {\n  margin-bottom: 50px;\n}}\n","h1, h2, h3, h4, h5, h6{\n    margin: 0 auto;\n    font-weight: 700;\n    color: var(--primary);\n    font-family: var(--headings);\n    width: 100%;\n    max-width: 1500px;\n    letter-spacing: -.01em;\n        font-feature-settings: \"palt\";\n        white-space: normal;\n}\n\nh1, h1 *, h2, h2 * {\n  margin: 0 auto 1rem;\n}\n\nh3, h3 * {\n  margin: 0 auto 1rem;\n}\n\nh1{\n  font-size: 5.2rem;\n    line-height: 1.35;\n}\n\nh2{\n    font-size: 2.5rem;\n    line-height: 1.333;\n  }\n\nh3{\n    font-size: 1.9rem;\n    line-height: 1.45;\n}\n\nh4{\n    font-size: 1.8rem;\n    line-height: 1.45;\n}\n\nh5{\n    font-size: 2rem;\n    line-height: 1.55;\n    font-weight: 500;\n}\n\nh6{\n    font-size:1.6rem;\n    line-height: 1.756;\n    letter-spacing: 0;\n    font-family: var(--paragraph);\n    font-weight: 500;\n    @media screen and (max-width: $phone) {\n      font-size: 1.6rem;\n    }\n}\n\n .h6{\n    font-size:1.6rem;\n    line-height: 1.756;\n    letter-spacing: 0;\n    font-weight: 500;\n    @media screen and (max-width: $phone) {\n      font-size: 1.6rem;\n    }\n}\n\n@media screen and (max-width: 1070px){\n    h1{\n        font-size: 3.8rem;\n        line-height: 1.2;\n    }\n}\n\n\n@media screen and (max-width: 735px){\n    h1, h2{\n    }\n    h3{\n        font-size: 2.2rem;\n    }\n}\n\n@media screen and (max-width: 540px){\n    h1{\n        font-size: 3.2rem;\n        line-height: 1.3;\n    }\n    h2{\n        font-size: 2.2rem;\n    }\n    h3{\n        font-size: 1.6rem;\n    }\n    h4{\n        font-size: 1.6rem;\n    }\n    h5{\n        font-size:  1.6rem;\n    }\n}\n\n/*タイトル・装飾*/\n.sections-title:before {\n  content: \" \";\nborder-left: 3px solid var(--black);\npadding-right: 1rem;\n}\n","#hero {\n  padding-top: 7rem;\n}\n","/*Hero*/\n#hero {\n  background: var(--black);\n  & .hero-wrapper {\n    display: grid;\n    grid-template-columns:  50% 1fr;\n    grid-column-gap: 5rem;\n  }\n  & .hero-text-inner {\n    display: flex;\n align-items: center;\n padding-bottom: 7rem;\n  }\n  & .hero-img-inner {\n    display: flex;\nalign-items: flex-end;\n& img {\n  margin: 0;\n}\n  }\n  & h1 {\n    font-size: 4rem;\n    color: var(--white);\n  }\n  & p {\n    margin-bottom: 5rem;\n    color: var(--d-articleText);\n  }\n@media screen and (max-width: $desktop) {\n  & .hero-wrapper {\n    display: block;\n  }\n  & .hero-text-inner {\n    padding-bottom: 6rem;\n    max-width: 650px;\n    margin: auto;\n  }\n  & .hero-img-inner{\n  & img {\n    max-width: 70%;\n    margin: auto;\n  }\n}\n}\n  @media screen and (max-width: $phablet) {\n    & h1 {\n      font-size: 3rem;\n    }\n    & p {\n      margin-bottom: 2rem;\n    }\n  }\n}\n\n/*カテゴリータイトル*/\n.cat-title {\n  padding: 0 0 2.5rem;\n  & h3 {\n    margin: 0;\n    font-weight: 500;\n  }\n}\n\n\n/*人気のレシピ*/\n.top-recipes {\n  counter-reset: number 0;\n  & a:hover .popular-recipe-wrapper h3 {\n    color: var(--accent);\n  }\n}\n.popular-recipe-wrapper {\n  display: grid;\n  grid-template-columns:  50px 200px 1fr;\n  grid-column-gap: 5rem;\n  padding: 2rem 0;\n  border-bottom: 1px solid var(--horizontalRule);\n  align-items: center;\n  & .ranking-number::before {\n    counter-increment: number 1;\n    content: counter(number) ;\n    font-weight: 500;\n    font-family: var(--headings);\n    font-size: 2.5rem;\n    color: var(--black);\n    display: flex;\n    line-height: 1;\n  }\n  & .ranking-number  {\n    display: flex;\n    align-items: center;\n    & svg {\n      height: 30px;\n      margin-left: 1rem;\n      @media screen and (max-width: $tablet) {\nheight: 20px;\n        }\n    }\n  }\n  & h3 {\n    color: var(--black);\n  }\n  & .recipes-bio-wrapper {\n    padding: 0;\n  }\n  & p {\n    margin: 1rem 0 0;\n    display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  }\n  @media screen and (max-width: $tablet) {\n    display: block;\n    & .popular-recipe-img {\n      margin: 1rem 0 2rem;\n    }\n}\n}\n\n\n/*ピックアップ・キーパー*/\n.ceapers-wrapper {\n\toverflow: auto;\n\twhite-space: nowrap;\n  scroll-snap-type: x mandatory;\n  & .ceaper {\n  \tdisplay: inline-block;\n  \theight: auto;\n  \tmargin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden;\n    @media screen and (max-width: $phone) {\n      width: 300px;\n}\n& .ceaper-inner {\n  & .user-container {\n    justify-content: flex-start;\n  & .user-avatar {\n    height: 80px;\nwidth: 80px;\nmargin-right: 2rem;\n  }\n& .name {\n  font-size: 1.6rem;\n}\n& .user-bio {\n  max-width: 300px;\n  font-size: 1.3rem;\n  display: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: 2;\noverflow: hidden;\nmargin-bottom: 1rem;\n}\n}\n    & h6 {\n      color: var(--black);\n      padding: 2rem;\n    }\n  }\n}}\n\n/*キャンプ道具から探す*/\n.scenes-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 2rem;\n  & .scene {\n  \tdisplay: inline-block;\n  \theight: auto;\n    width: 100%;\n  \tmargin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden;\n    &:hover{\n      background: var(--background-grey);\n    }\n& .scene-inner {\n  & img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n  }\n}\n    & h6 {\n      color: var(--black);\n      padding: 2rem;\n    }\n  }\n}\n\n\n/*カテゴリーから探す*/\n.cat-recipe-wrapper {\n\toverflow: auto;\n\twhite-space: nowrap;\n  scroll-snap-type: x mandatory;\n  & .cat-recipe {\n  \tdisplay: inline-block;\n  \theight: auto;\n  \tmargin-right: 1.5rem;\n    background-color: var(--white);\n    overflow: hidden;\n    &:hover{\n      background: var(--background-grey);\n    }\n    @media screen and (max-width: $phone) {\n      width: 300px;\n}\n& .cat-recipe-inner {\n  text-align: center;\n& svg{\n  width: 50px;\n}\n}\n    & h6 {\n      color: var(--black);\n      padding-top: 2rem;\n    }\n  }\n}\n","hr:before {\n    line-height: 1.4;\n    text-indent: 0.6em;\n    letter-spacing: 0.6em;\n    content: \"・・・\";\n    color: var(--articleText);\n}\n\nhr{\n    position: relative;\n    width: 100%;\n    max-width: 680px;\n    text-align: center;\n    margin: 50px auto;\n    border: 0;\n    background-repeat: repeat-x;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-position: center;\n}\n\n@media screen and (max-width: 1070px){\n    hr{\n        max-width: 507px;\n    }\n}\n\n@media screen and (max-width: 735px){\n    hr{\n        max-width: 486px;\n        width: calc(100vw - 40px);\n        margin: 0px auto 40px;\n    }\n}\n\n@media screen and (max-width: 340px){\n    hr{\n        padding: 0 20px;\n    }\n}\n\n.hr {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule);\n}\n\n.hr-paragraph {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule);\n  margin: 3rem 0;\n}\n\n.hr-text {\n  height: 1px;\n  width: 100%;\n  border-top: 1px solid var(--horizontalRule);\n  margin: 1.5rem 0;\n}\n\n.m-dot {\n  margin: 0 1rem;\n}\n\n//セクション・タイトル\n.hr-section-title {\n     display: flex;\n     align-items: center;\n     margin: 0;\n     &:before {\n       content: \"\";\nheight: 1px;\nflex-grow: 1;\nbackground-color: var(--horizontalRule);\nmargin-right: 2rem;\n     }\n     &:after {\n    content: \"\";\n    height: 1px;\n    flex-grow: 1;\n    background-color: var(--horizontalRule);\n    margin-left: 2rem;\n     }\n}\n","img {\n width: 100%;\n max-width: 100%;\n margin: auto;\n height: auto;\n display: block;\n animation: float;\n}\n\n\n.image-placeholder {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: #ccc;\n  color: #898989;\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.image-zoom {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n}\n@media screen and (max-width: 540px) {\n  .image-placeholder {\n    font-size: 28px;\n  }\n}\n\n#article-img-b {\n  padding-bottom: 6rem;\n  @media screen and (max-width: $phone) {\n    padding-bottom: 3.5rem;\n}\n}\n\nfigcaption p.small-text {\n  color: var(--grey);\n}\n\n/*float*/\n@keyframes float {\n\t0% {\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\tbox-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);\n\t\ttransform: translatey(-15px);\n\t}\n\t100% {\n\t\tbox-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);\n\t\ttransform: translatey(0px);\n\t}\n}\n",".layout-styled {\n  position: relative;\n  background: var(--background-color);\n  min-height: 100vh;\n}\n\n.post-border {\n  border-bottom: 1px solid;\n  border-color: var(--grey);\n  max-width: 680px;\n  margin: 100px auto;\n}\n\n.full-bg {\n  height: auto;\n  width: 100vw;\n  position: relative;\n  left: 50%;\n  right: 50%;\n  margin-left: -50vw;\n  margin-right: -50vw;\n}\n/*spotify*/\n.play {\n  max-width: 680px;\n  margin: auto;\n  padding-top: 30px;\n  padding-bottom: 70px;\n  @media screen and (max-width: $tablet) {\n    max-width: 527px;\n  }\n}\n\n.play iframe {\n  width: 100%;\n}\n\n#share-buttons:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n#share-buttons > div {\n  position: relative;\n  text-align: right;\n  float: right;\n  text-align: center;\n}\n\n#share-buttons > div > svg {\n  height: 25px;\n  fill: var(--grey);\n  @media screen and (max-width: $phone) {\n    height: 20px;\n  }\n}\n\ndiv.mail > svg {\n  margin: 1rem 1.5rem 1rem 0;\n}\n\ndiv.twitter > svg {\n  margin: 1rem 1.5rem;\n}\n\ndiv.facebook > svg {\n  margin: 1rem 0 1rem 1.5rem;\n}\n\n#share-buttons > div:hover {\n  cursor: pointer;\n}\n\n#share-buttons > div:hover > svg {\n  fill: var(--accent);\n}\n/*****************Documents*****************/\n.documents {\n  & .pr-section  p {\n    max-width: 500px;\nmargin-left: 0;}\n  & h5 {\n  margin-top:5rem;\n  }\n  & p{\n    padding-left: 3rem;\n    @media screen and (max-width: $phone) {\n      padding-left: 2rem;\n}\n  }\n  & li {\n    margin-left: 6.5rem;\n        @media screen and (max-width: $phone) {\n              margin-left: 5.5rem;\n        }\n  }\n}\n\n\n.doc-half {\n  & h6 {\n    margin-top: 4rem;\n    margin-bottom: 1rem;\n  }\n\n  & p {\n  }\n  @media screen and (min-width: $tablet) {\n    width: 50%;\n  }\n}\n@media screen and (min-width: $tablet) {\n  .doc-half-l {\npadding-right: 10%;\n  }\n\n  .doc-half-r {\n    margin-left: auto;\npadding-left: 10%;\n  }\n}\n\n/*****************About*****************/\ndiv.about-summary-social a {\n  text-decoration: none;\n  & .github {\n    margin-left: 0;\n  }\n  & .social-icon-image path {\n    opacity: .7;\n    fill: var(--articleText);\n  }\n  &:hover .social-icon-image path {\n    fill: var(--accent);\n    opacity: 1;\n  }\n}\n.pr-flex .about-half-l,\n.pr-flex .about-half-r {\n  padding-bottom: 12rem;\n}\n.pr-flex .about-half-4 {\n  padding-bottom: 0;\n}\n@media screen and (min-width: 735px){\n.pr-flex .about-half-3 {\n  padding-bottom: 0;\n}\n}\n@media screen and (min-width: $tablet) {\n  .pr-flex .about-half-l {\n    margin-right: 1.5rem;\n  }\n\n  .pr-flex .about-half-r {\n    margin-left: 1.5rem;\n  }\n}\n\n\n/*Design*/\n.graphics {\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  & .graphic-center {\n    position: absolute;\n    left: 0;\n    right:0;\n    margin: auto;\n    content: \"\";\n    display: inline-block;\n    bottom: -50px;\n    height: 160px;\n    width: 1px;\n    background-color: var(--grey);\n    z-index: 900;\n    & .graphic-inner{\n      position: absolute;\n    }\n}\n  @media screen and (min-width: $desktop_medium) {\n    max-width: 100%;\n    }\n}\n.graphic{\n  display: inline-block;\n  width: 35rem;\n  height: 35rem;\n  line-height: 35rem;\n  border-radius: 50%;\n  margin: -3rem;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  mix-blend-mode: overlay;\n  font-weight: 400;\n  font-size: 2rem;\n@media screen and (max-width: $tablet) {\n  width: 25rem;\n  height: 25rem;\n  margin: -10rem;\n}\n@media screen and (max-width: $phablet) {\n  width: 15rem;\n  height: 15rem;\n  margin: -6rem;\n  font-size: 1.9rem;\n}\n}\n\n/*Ability*/\n.radar-title {\n  display: flex;\njustify-content: center;\nposition: relative;\n& .radar-now:before {\n  content: \"\";\n  background:  var(--accent);\n  width: 15px;\n  height: 15px;\n  opacity: .8;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n& .radar-past:before {\n  content: \"\";\n  background: var(--grey);\n  opacity: .8;\n    width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n & h6.small-text {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    width: 100px;\n    justify-content: center;\n    margin-top: 5rem;\n\n  }\n}\n.radar {\n  position: relative;\n  text-align: center;\n  max-width: 412px;\n  height: auto;\n  margin: auto;\n      box-sizing: border-box;\n      & .small-text {\n        margin-bottom: 0;\n        color: var(--articleText);\n      }\n      & .p-icon {\n        width: auto;\n        height: 2rem;\n        margin-right: .6rem;\n        & > path, circle{\n          stroke: var(--articleText);\n        }\n      }\n  & .radarR, .radarL{\n    position: absolute;\n    width: 200px;\n    margin-bottom: 0;\n  }\n  & .up {\n    position: absolute;\n    left: 50%;\n      top: -4rem;\n      transform: translateX(-50%);\n      -webkit-transform: translateX(-50%);\n      display: flex;\nalign-items: center;\njustify-content: center;\n  }\n  & .radarR  {\n    top: 50%;\nright: -16rem;\ntransform: translateY(-50%);\n-webkit-transform: translateY(-50%);\ntext-align: left;\n  }\n  & .upperR {\n    top: -13rem;\n    position: absolute;\n    display: flex;\nalign-items: center;\n  }\n  & .lowerR{\n    top: 10rem;\nposition: absolute;\ndisplay: flex;\nalign-items: center;\n  }\n  & .radarL {\ntop: 50%;\nleft: -16rem;\ntransform: translateY(-50%);\n-webkit-transform: translateY(-50%);\ntext-align: right;\n  }\n  & .upperL {\n    top: -13rem;\n    position: absolute;\n    display: flex;\nalign-items: center;\njustify-content: flex-end;\n  }\n  & .lowerL{\n    top: 10rem;\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: flex-end;\n  }\n  & .bottom {\n    position: absolute;\n    bottom: -4rem;\nleft: 0;\nright: 0;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n  }\n  @media screen and (max-width: $tablet) {\n      max-width: 138.5px;\n    & .p-icon {\n      height: 1.6rem;\n    }\n    & svg{\n      height: auto;\n      width: 150px;\n    }\n    & p.small-text {\n      font-size: 1.1rem;\n    }\n    & .radarR, .radarL{\n      width: 90px;\n}\n    & .up {\n        top: -3rem;\n    }\n    & .radarR  {\n  right: -10.5rem;\n    }\n    & .upperR {\n      top: -6rem;\n    }\n    & .lowerR{\n      top: 4rem;\n    }\n    & .radarL {\n  top: 50%;\n  left: -9.5rem;\n    }\n    & .upperL {\n      top: -6rem;\n      position: absolute;\n    }\n    & .lowerL{\n      top: 4rem;\n    }\n    & .bottom {\n      bottom: -3rem;\n    }\n}\n}\n\npath.radar-now-color {\nfill: var(--accent);\n}\n\npath.radar-secondary{\nfill: var(--horizontalRule);\n}\n\npath.radar-past-color {\n  fill: var(--grey);\n}\n\n/*skill*/\n#skill-title {\n  margin-bottom: 5rem;\n}\n\n.skill-wrapper{\n  padding: 0 3rem 3rem;\n & .skill-icon {\n  color: var(--color);\n  position: relative;\n  width: 80px;\nheight: 80px;\ncontain: content;\ndisplay: block;\n-webkit-user-select: none;\nuser-select: none;\nposition: relative;\nmargin: auto;\n}\n  & svg {\nstroke-linecap: round;\n  }\n  & .skill-circle {\n    opacity: .1;\nstroke: var(--color);\nfill: var(--color);\nstroke-width: 14;\n  }\n  & .skill-circle-primary {\n    fill: none;\n    stroke: var(--color);\n    stroke-width: 9;\n    transition: stroke-dasharray 1.2s;\n  }\n  & .skill-text {\n    align-items: center;\nbottom: 0;\ncolor: currentColor;\ndisplay: flex;\njustify-content: center;\nleft: 0;\nposition: absolute;\nright: 0;\ntop: 0;\n  }\n  @media screen and (max-width: $tablet) {\n    padding:  0 1rem 1rem;\n    &.skill-wrapper-l {\n      padding-left: 0;\n    }\n    &.skill-wrapper-r {\n      padding-right: 0;\n    }\n}\n  @media screen and (max-width: $phablet) {\n     & .skill-icon {\n      width: 60px;\n    height: 60px;\n    }\n  }\n}\n\n.skill-bio h6.small-text {\n  text-align: center;\n}\n\ndiv.skillset {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 1rem;\n  & .icon {\n    box-shadow: none;\n    margin: 0;\n  }\n  & .icon svg {\n    width: auto;\n    height: 100px;\n  }\n  & .icon .small-text, a {\n    margin-bottom: 0;\n    margin-top: 1rem;\nmax-width: 300px;\ntext-align: center;\n  }\n  & h6.small-text {\n    margin-top: 3rem;\n  }\n  @media (min-width: $desktop_large) {\n    &  .icon .small-text, a{\n          font-size: 1.7rem;\n    }\n  }\n  @media screen and (max-width: $phablet) {\n    grid-template-columns: 1fr 1fr;\n    grid-row-gap: 4rem;\n    & .icon {\n      padding: 1rem;\n    }\n    & .icon svg {\n      height: 70px;\n    }\n}\n}\npath.skill-primary {\n  fill: var(--accent);\n}\n\npath.skill-secondary {\n  fill: var(--accent-bg);\n  opacity:1;\n}\n\n/*****************Map*****************/\n.map-wrapper {\n  margin-top: 7rem;\nposition: relative;\npadding-bottom: 250px;\nheight: 0;\noverflow: hidden;\npointer-events: none;\n& #map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n& .gmnoprint, .gm-style-cc, .gm-control-active {\n  display: none;\n}\n}\n\n@keyframes pulsate {\n    0% {\n    transform: scale(0.1);\n    opacity: 0;\n    }\n    50% {\n    opacity: 1;\n    }\n    100% {\n    transform: scale(1.1);\n    opacity: 0;\n    }\n}\n\n\n.marker {\n  width: 50px;\nheight: 50px;\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\nmargin: auto;\n}\n\n.pin {\n    width: 25px;\n    height: 25px;\n    top: 0;\n        left: 0;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n    background: var(--accent);\n    border: 2px solid #fcfcfc;\n    border-radius: 50%;\n    z-index: 1000;\n}\n\n.pin-effect {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 0;\n    display: block;\n    background: var(--accent-bg);\n    border-radius: 50%;\n    opacity: 0;\n    animation: pulsate 2s ease-out infinite;\n}\n","ul{\n    list-style: none;\n    counter-reset: list;\n    color: var(--articleText);\n    font-size: 1.7rem;\n      @media screen and (max-width: $phone) {\n        font-size: 1.6rem;\n      }\n}\n\nli::before {\n  font-weight: 600;\nfont-size: inherit;\ncontent: \"-\";\n  font-family: \"Apercu\",  sans-serif;\nmargin-left: -30px;\npadding-right: 1.4rem;\n    line-height: 1.756;\n}\n\nli{\n    position: relative;\n    list-style: none;\n    margin: 0 auto 1.5rem;\nmargin-left: 3rem;\nline-height: 1.756;\n@media screen and (max-width: 735px) {\n    margin-bottom: 2em;\n  }\n}\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    ul li p{\n        padding: 0;\n    }\n}\n\n\nul li > *{\n    display: inline;\n}\n\n\nol{\n    list-style: none;\n    counter-reset: list;\n    color: var(--articleText);\n    position: relative;\n    padding: 15px 0 30px 30px;\n    margin: 0 auto;\n    font-size: 1.7rem;\n    width: 100%;\n    max-width: 680px;\n}\n\n/*DESKTOP*/\n@media screen and (max-width: 1070px){\n    ol{\n        max-width: 507px;\n    }\n}\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    ol{\n        max-width: 486px;\n        padding-left: 0px;\n    }\n}\n\n/*PHABLET*/\n@media screen and (max-width: 540px){\n    ol{\n        padding-left: 20px;\n    }\n}\n\nol li{\n    position: relative;\n    padding-bottom: 15px;\n}\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    ol li{\n        padding-left: 30px;\n        padding: 0;\n    }\n    ol li p{\n        padding-left: 30px;\n    }\n}\n\n/*PHABLET*/\n@media screen and (max-width: 540px){\n    ol li{\n        padding-left: 30px;\n    }\n}\n\nol li > *{\n    display: inline;\n}\n\nol li::before {\n    width: 3rem;\n    display: inline-block;\n    position: absolute;\n    color: var(--articleText);\n    counter-increment: list;\n    content: counter(list) \".\";\n    font-weight: 600;\n    position: absolute;\n    left: -3rem;\n    top: -0.3rem;\n    font-size: 2rem;\n}\n\n@media screen and (max-width: 735px){\n    ol li::before{\n        left: 0;\n    }\n}\n","#page {\n  @media screen and (max-width: $phablet) {\n    margin-top: 49px;\n  }\n  //タイトル\n  & .title {\n\n  }\n  & .sub-title {\n    font-size: 1.9rem;\n  }\n}\n","p {\n  line-height: 1.756;\n  font-size: 1.6rem;\n  color: var(--articleText);\n  font-family: var(--paragraph);\n  margin: 0 auto 2.5rem;\n  width: 100%;\n  white-space: normal;\n  & .p-icon svg {\n    height: 1.6rem;\n    fill: var(--articleText);\n  }\n  @media screen and (max-width: 735px) {\n      margin-bottom: 2em;\n}\n}\n.s-text {\n  font-size: 1.5rem;\n}\n.xs-text {\n  font-size: 1.3rem;\n}\n\n.text-row {\n  max-width: 650px;\n  margin-left: 0;\n}\n","/*************************ASIDE*************************/\n.aside-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto;\n    max-width: 1140px;\n    pointer-events: none;\n    z-index: 100;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 30%;\n    -webkit-animation-name: progress-fade-in;\n            animation-name: progress-fade-in;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n\n    /*DESKTOP MEDIUM*/\n    @media screen and (max-width: $desktop_medium){\n        display: none;\n    }\n}\n\n@-webkit-keyframes progress-fade-in {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes progress-fade-in {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@-webkit-keyframes progress-fade-out {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n@keyframes progress-fade-out {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n.aside-align{\n    position: fixed;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-transform: translateY(0px);\n        -ms-transform: translateY(0px);\n            transform: translateY(0px);\n    top: 0;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100vh;\n    z-index: 3;\n\n    opacity: 1;\n    visibility: visible;\n    -webkit-transition: opacity 0.4s linear, visibility 0.4s linear;\n    -o-transition: opacity 0.4s linear, visibility 0.4s linear;\n    transition: opacity 0.4s linear, visibility 0.4s linear;\n}\n\n.overlap-container{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    pointer-events: none;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s;\n    -o-transition: opacity 0.25s;\n    transition: opacity 0.25s;\n}\n\n/*************************PROGRESS*************************/\n.progress-container{\n    position: relative;\n    outline: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.track-line{\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: calc(88vh - 40px);\n    max-height: 425px;\n    width: 2px;\n    background-color: var(--horizontalRule);\n    opacity: 0.6;\n    overflow: hidden;\n}\n\n.progress-line{\n    position: absolute;\n    height: 100%;\n    top: -100%;\n    width: 2px;\n    background-color: var(--accent);\n    left: 0;\n}\n","#recipe-hero {\n  & h1 {\n    font-size: 3rem;\n    max-width: 550px;\n    margin: 3rem  0 1rem;\n  }\n\n  & .recipe-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 400px;\n    grid-column-gap: 5rem;\n\n    & p {\n      margin: 0;\n    }\n    @media screen and (min-width: $desktop) {\n      & .recipe-img .recipe-hr {\n        display: none;\n      }\n    }\n    @media screen and (max-width: $desktop) {\n      display: block;\n          }\n  }\n  @media screen and (max-width: $phone) {\n    & h1 {\n      font-size: 2.3rem;\n    }\n  }\n}\n\n/*データ*/\n.recipe-bio-wrapper {\n  padding: 0.5rem 0 1rem;\n    display: flex;\n    align-items: center;\n}\n\n.recipe-bio {\n  & h6 {\n    margin-bottom: 2rem;\n  }\n}\n\n.recipe-data {\n  display: inline-flex;\n  font-size: 1.3rem;\n  font-feature-settings: \"palt\";\n  letter-spacing: 0.06rem;\n\n  & .cook {\n    margin-left: 0;\n  }\n\n  & .servings {\n    margin-right: 0;\n  }\n}\n/*アクション*/\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 2rem;\n\n  .action-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n      & path {\n        stroke: var(--accent);\n        fill: var(--accent);\n      }\n    }\n\n    & svg {\n      height: auto;\n      width: 20px;\n\n      & path {\n        stroke: var(--grey);\n        fill:var(--grey);\n      }\n    }\n\n    &.action-star {\n      margin: 0 1rem;\n    }\n  }\n}\n/*データ・材料*/\n.recipe-bio {\n  & .flex {\n    justify-content: space-between;\n    & svg {\n      width: 10px;\n        margin: 0  0 2rem 1.5rem;\n      }\n    & .servings {\n      & h6 {\n        white-space: nowrap;\n      }\n    & .servings-number {\n    color: var(--accent);\n    }\n  }\n}\n}\n.ingredients-wrapper {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-column-gap: 3rem;\n  grid-row-gap: 2rem;\n  color: var(--articleText);\n}\n/*データ・キャンプ道具*/\n.camp {\n  & a {\n    background: var(--grey20);\n    border-radius: 15px;\n    font-size: 1.3rem;\n    padding: 0.5rem 1.1rem;\n    white-space: nowrap;\n    margin: 0 1rem 1rem 0;\n    display: inline-block;\n\n    &:hover {\n      background: var(--grey40);\n    }\n  }\n}\n/*クッキングリストに追加*/\n.action-make-button {\n  & svg {\n    & path {}\n\n    & line {}\n  }\n\n  &:hover {\n    & svg {\n      & path {\n        fill: var(--white);\n      }\n    }\n  }\n}\n/*線*/\n.recipe-hr {\n  border-top: 1px solid var(--horizontalRule);\n  margin: 2.5rem 0;\n}\n\n.recipe-hr-l {\n  border-left: 1px solid var(--horizontalRule);\n  margin: 0 2.5rem;\n  height: 25px;\n}\n/*セクションタイトル*/\n.recipe-section-title-wrapper {\n  text-align: center;\n  position: relative;\n  padding: 0 0 5rem;\n  @media screen and (max-width: $phablet) {\n    padding: 0 0 4rem;\n  }\n\n  & .recipe-section-title {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-size: 2rem;\n    font-family: var(--headings);\n    line-height: 1.756;\n\n    & .recipe-section-title-name {\n      text-decoration: underline;\n      color: var(--black);\n\n      &:hover {\n        color: var(--accent);\n      }\n    }\n    @media screen and (max-width: $phone) {\n      font-size: 1.8rem;\n\n      & .recipe-section-title-name {\n        font-size: 1.8rem;\n      }\n    }\n\n    &:before {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-right: 2rem;\n    }\n\n    &:after {\n      content: \"\";\n      height: 1px;\n      flex-grow: 1;\n      background-color: var(--horizontalRule);\n      margin-left: 2rem;\n    }\n  }\n}\n/*作り方*/\n.make-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 5rem;\n  counter-reset: number 0;\n  @media screen and (max-width: $desktop) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media screen and (max-width: $tablet) {\n    grid-template-columns: 1fr;\n  }\n\n  & .make-inner p:before {\n    counter-increment: number 1;\n    content: \" STEP \"counter(number);\n    font-weight: 500;\n    font-family: var(--headings);\n    color: var(--black);\n    display: flex;\n  }\n\n  & .make-inner {\n    background: var(--background-grey);\n\n    & p {\n      margin: 0;\n    }\n  }\n}\n/*レビュー*/\n.review {\n  & .rating {\n    top: 0.02rem;\n  }\n}\n\n.review-wrapper {\n  overflow: auto;\n  white-space: nowrap;\n  scroll-snap-type: x mandatory;\n\n  & .review {\n    display: inline-block;\n    height: auto;\n    width: 300px;\n    margin-right: 3rem;\n\n    & p {\n      margin: 0;\n    }\n\n    & .comment {\n      padding-bottom: 2rem;\n    }\n  }\n\n  & .user-container {\n    justify-content: flex-start;\n\n    & div.user-avatar {\n      height: 35px;\n      width: 35px;\n    }\n  }\n\n  & .recipes-bio-wrapper {\n    padding-bottom: 0;\n    border-top: 1px solid var(--horizontalRule);\n    margin-top: 1rem;\n  }\n\n  & .date {\n    font-size: 1.2rem;\n  }\n}\n/*レビュー・リンク*/\n.reviews-link {\n  text-decoration: underline;\n  padding-top: 6rem;\n}\n/*レビュー＆料理済リストに追加ボタン*/\n.fixed-button {\n  padding: 1.7rem;\n  border-radius: 50%;\n  background: var(--black);\n  box-shadow: transparent 0 0 0 1px, transparent 0 0 0 4px, rgba(0, 0, 0, 0.18) 0 2px 4px;\n\n  & svg {\n    width: 25px;\n\n    & path,\n    line {\n      stroke: var(--white);\n    }\n  }\n}\n/*レシピ・フッターメニュー*/\n.recipe-menu {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--white);\n  border-top: 1px solid var(--horizontalRule);\n  z-index: 100;\n  padding: 1.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\nwhite-space: nowrap;\n  & .recipe-menu-inner {\n    display: inline-block;\n\n    &.recipe-menu-bio {\n      display: flex;\n      align-items: center;\n      font-weight: 500;\n\n      & svg {\n        width: 30px;\n      }\n&   .recipe-hr-l {\n  margin:  0 5rem;\n}\n      & .recipe-menu-user {\n        display: flex;\n        align-items: center;\n\n        & .user-avatar {\n          height: 35px;\n          width: 35px;\n        }\n\n        & h6 {\n          margin: 0;\n          font-size: 1.4rem;\n        }\n\n        & .rating {\n          display: flex;\n          align-items: center;\n\n          & .star {\n            top: auto;\n          }\n        }\n\n        & p {\n          margin: 0 0 0 0.4rem;\n          font-size: 1.3rem;\n          color: var(--grey);\n        }\n      }\n\n      & .recipe-menu-bio-inner {\n        display: flex;\n        align-items: center;\n        @media screen and (max-width: $phablet) {\n            padding-left: 0;\n        }\n      }\n    }\n\n    & .recipe-menu-actions {\n      display: flex;\n      align-items: center;\n    }\n\n    & svg path {\n      stroke: var(--white);\n    }\n\n    & a:hover {\n      & path {\n        stroke: var(--black);\n      }\n    }\n  }\n  @media screen and (max-width: $phablet) {\n    & .ico-button {\n      font-size: 1.3rem;\n    }\n\n    & .recipe-menu-inner.recipe-menu-bio svg {\n      width: 25px;\n    }\n  }\n}\n@media screen and (max-width: $desktop) {\n  .recipe-hr-l,\n  .recipe-menu .recipe-menu-inner.recipe-menu-bio .recipe-menu-user {\n    display: none;\n  }\n}\n/*アプリ*/\n.recipe-menu{\n@media screen and (max-width: $phablet) {\n  top: 0;\n  bottom: auto;\n  border-top: none;\n      border-bottom: 1px solid var(--horizontalRule);\n}\n#recipe-menu-back {\n  & svg {\n  width: 15px;\n}\n@media screen and (min-width: $phablet) {\n  display: none;\n}\n}\n}\n","/*Rating*/\n.rating {\n    position: relative;\n    display: inline-block;\n    font-size: 1.4rem;\n    top: -1px;\n}\n.star {\n  position: absolute;\n    top: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    width: 50%;\n    color: var(--accent);\n    z-index: 1;\n}\n.star-bg {\n    color: var(--horizontalRule);\n    opacity: .6;\n}\n.star4 {\n  width: 80%\n}\n/*Recipes-bio*/\n.recipes-bio-wrapper {\n  display: flex;\n  justify-content: space-between;\n  padding: .4rem 0 1rem;\n  align-items: center;\n}\n.recipes-ico {\n  color: var(--black);\n  display: flex;\n  align-items: center;\n  & svg {\n    width: 15px;\n    margin-right: .5rem;\n  }\n}\n/*Data*/\n.recipes-data {\n  display:inline-flex;\n  font-size: 1.3rem;\n  font-feature-settings: \"palt\";\n  letter-spacing: .06rem;\n  width: 100%;\n  & div {\n    margin: 0 1rem;\n  }\n  & .cook {\n    margin-left: 0;\n  }\n}\n\n/*User*/\n.user-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    justify-content: center;\n    & .user-inner {\n      display: block;\n      line-height: 1;\n    }\n    & .user-avatar {\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    margin-right: 1rem;\n    overflow: hidden;\n}\n& .name {\n    font-size: 1.3rem;\n    font-feature-settings: \"palt\";\n    letter-spacing: .06rem;\n    margin: 0;\n    font-weight: 500;\n    color: var(--black);\n}\n}\n",".shots-wrapper {\n    display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-gap:4rem;\n}\n.shot {\n  //タイトル&ユーザー\n  overflow:hidden;\ntext-overflow: ellipsis;\nwhite-space:nowrap;\n  & .user-container {\n    justify-content: flex-start;\n    & .user-avatar {\n      height: 30px;\n      width: 30px;\n    }\n    & .user-inner {\n      & h6, a {\n        font-size: inherit;\n        line-height: 1;\n    font-size: 1.3rem;\n      }\n      & a {\n        color: var(--articleText80);\n        font-size: 1.1rem;\n        font-weight: 400;\n      }\n    }\n  }\n  //画像\n  & .shot-recipe-img {\n    margin: 1rem 0;\n    border-radius: 4px;\n    overflow: hidden;\n    position: relative;\n    //材料\n    & .shot-ingredients-wrapper {\n          width: 100%;\n      position: absolute;\n      bottom: 0;\n      opacity: 0;\n      transition: .2s;\n      background-color:\trgba(0,0,0,.7);\n      pointer-events: none;\n\n    & .shot-ingredients {\n      font-size: .9rem;\n      font-family: var(--paragraph);\n      color: var(--white);\n      white-space: normal;\n      line-height: 1.6;\npadding: 1rem;\ndisplay: inline-flex;\n  }\n    }\n    &:hover {\n            &  .shot-ingredients-wrapper {\n        opacity: 1;\n      }\n    }\n  }\n  //情報\n  & .shot-recipes-bio-wrapper {\n    font-size: 1.2rem;\n    & .shot-recipes-data {\n      font-size: 1.2rem;\n      display: flex;\n      //中点\n      & span {\n        padding: 0 .3rem;\n        color: var(--articleText80);\n        & svg path {\n          fill: var(--articleText80);\n        }\n      }\n    }\n  }\n}\n\n.user-link:hover .name {\n  text-decoration: underline;\n}\n/*ローディング */\n.shots-loading {\n  padding: 3rem 0 7.5rem;\n  text-align: center;\n  color: var(--grey);\n}\n\n/*話題のレシピ*/\n.topic-wrapper {\n\toverflow: auto;\n\twhite-space: nowrap;\n  scroll-snap-type: x mandatory;\n  & .topic {\n  \tdisplay: inline-block;\n  \theight: auto;\n    width: 300px;\n  \tmargin-right: 1.5rem;\n    @media screen and (max-width: $phone) {\n      width: 260px;\n}\n    & h6 {\n      color: var(--black);\n      padding: 0;\n    }\n  }\n  & .recipes-bio-wrapper {\n    padding-bottom: 0;\n    margin-top: 1rem;\n  }\n}\n",".social-icon-outer{\n    width: 20%;\n    min-width: 220px;\n}\n\n/*TABLET*/\n@media screen and (max-width: $tablet){\n    .authors-sio{\n        width: 60%;\n    }\n}\n\n.social-icon-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    min-width: 100%;\n    position: relative;\n    margin-left: 3.2rem;\n    text-decoration: none;\n    max-width: 16px;\n\n    a{\n        margin-right: 25px;\n    }\n}\n\n.social-icon-container:hover > svg {\n    fill: var (--primary);\n  }\n\n.social-icon-container:hover > * {\n    -webkit-transition: fill 0.25s var(--ease-in-out-quad);\n    -o-transition: fill 0.25s var(--ease-in-out-quad);\n    transition: fill 0.25s var(--ease-in-out-quad);\n}\n\n.social-icon-container:first-of-type {\n    margin-left: 0;\n}\n\n.social-icon-container:last-child {\n    margin-right: 0;\n}\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    .social-icon-container{\n        margin: 0 2.2rem;\n    }\n}\n\n.social-icons a  {\n  display: inline-block;\n}\n\n.social-icons a:hover path {\n  fill: var(--accent);\n}\n\n.hidden{\n    width: 0px;\n    height: 0px;\n    visibility: hidden;\n    opacity: 0;\n    overflow: hidden;\n    display: inline-block;\n}\n\n\n.share{\n  vertical-align: middle;\n}\n\n#share-buttons:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n#share-buttons > div > svg {\n  height: 2rem;\n  fill: var(--articleText);\n}\n\ndiv.mail> svg {\n  margin: 1rem 1.5rem 1rem 0;\n}\n\ndiv.twitter > svg {\n  margin: 1rem 1.5rem 1rem 1.5rem;\n}\n\ndiv.facebook > svg {\n  margin: 1rem 0 1rem 1.5rem;\n}\n\n#share-buttons > div:hover {\n  cursor: pointer;\n}\n\n#share-buttons > div:hover > svg {\n  fill: var(--accent);\n}\n","/*************************************TABLE************************************/\n\ntable{\n    position: relative;\n    line-height: 1.65;\n    color: var(--grey);\n    font-family: var(--paragraph);\n    margin: 0px auto 85px;\n    width: 100%;\n    max-width: 1004px;\n    overflow: hidden;\n    border-collapse: separate;\n    table-layout: fixed;\n    max-width: 680px;\n}\n\n/*DESKTOP*/\n@media screen and (max-width: 1070px){\n    table{\n        margin: 0px auto 65px;\n    }\n}\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    table{\n        max-width: 486px;\n    }\n}\n\n/*PHABLET*/\n@media screen and (max-width: 540px){\n    table{\n        margin: 0px auto 55px;\n    }\n}\n\n/*************************************TABLE CELL************************************/\n\ntd{\n    font-size: 16px;\n    line-height: 2em;\n    vertical-align: top;\n}\n\n\n/*TABLET*/\n@media screen and (max-width: 735px){\n    td{\n        font-size: 14px;\n    }\n}\n\n@media screen and (max-width: 450px){\n    th{\n        font-size: 13px;\n    }\n        td{\n            font-size: 13px;\n        }\n}\n\n/*************************************TABLE HEAD************************************/\n\nthead{\n    text-align: left;\n    border-collapse: collapse;\n    position: relative;\n    line-height: 1.756;\n    font-weight: 600;\n    color: var(--primary);\n    font-family: var(--paragraph);\n  }\n",".row {\n  padding-bottom: 9rem;\n}\n.section{\n    width: 100%;\n    max-width: 1500px;\n    margin: 0 auto;\n    padding: 0 5rem;\n    @media screen and (max-width: 540px){\n        max-width: 100%;\n        padding: 0 2rem;;\n    }\n    p{\n        @media screen and (max-width: 735px){\n            max-width: 567px;\n        }\n    }\n}\n.center-section {\nmax-width: 750px;\n}\n",".pagination{\n    z-index: 100;\n    margin: 0;\n    margin-top: 95px;\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n\n    &:hover{\n        cursor: pointer;\n    }\n\n    a:hover{\n        color: var(--primary);\n    }\n\n    .page-item{\n        display: block;\n        width: auto;\n        height: auto;\n        padding: 0;\n\n        .page-link{\n            display: block;\n            color: var(--grey);\n            min-width: 6rem;\n        }\n\n        .page-next, .page-prev{\n            color: var(--primary);\n        }\n\n\n        &::before{\n            display: none;\n        }\n    }\n\n    .active{\n        .page-link{\n            color: var(--primary);\n        }\n    }\n}\n\n.pagination li a {\n  text-decoration: none;\n}\n\nli.page-item {\n  margin-left: 10px;\n}\n",".user-row {\n  text-align: center;\n  & .user-container {\n    display: block;\n    //画像\n    & .user-avatar {\n      margin: auto;\n      height: 100px;\nwidth: 100px;\n    }\n    //名前\n    & .user-inner {\n      padding: 2rem 0;\n      & .name {\n        font-size: 2.5rem;\n        font-weight: 700;\n        font-family: var(--headings);\n      }\n      & .user-bio {\n        max-width: 450px;\n        text-align: left;\n        margin-bottom: 1rem;\n      }\n      & .user-social {\n        & svg {\n          width: auto;\n          height: 17px;\n          & path {\n            fill: var(--black);\n          }\n        }\n        & .user-social-link {\n          padding:  0 1rem;\n          &:hover svg path{\n            fill: var(--accent);\n          }\n        }\n      }\n      //データ\n      & .user-data {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 3.5rem 0;\n        & .user-data-inner {\n          padding:  0 2rem;\n          border-left: 1px solid var(--horizontalRule);\n          @media screen and (max-width: $phone){\n            padding:  0 1.6rem;\n    }\n          &.user-data-inner-start{\n            border: none;\n          }\n          & h6 {\n            font-size: 2.5rem;\n            font-family: var(--headings);\n            font-weight: 600;\n            color: var(--black);\n          }\n          & span {\n            color: var(--grey);\n            font-family: var(--paragraph);\n          }\n          &:hover {\n            &  h6{\ntext-decoration: underline;\n           }\n            & span {\n              color: var(--black);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n//ユーザー・ナビ\n.user-nav {\n      display: flex;\n      align-items: flex-start;\n      border-bottom: 1px solid var(--horizontalRule);\n      padding-bottom: 2rem;\n      & .user-nav-inner {\n        padding-right: 4rem;\n      font-weight: 500;\n      color: var(--grey);\n      @media screen and (max-width: $phone){\n        padding-right: 3rem;\n}\n      &:hover{\n        color: var(--black);\n      }\n         }\n}\n\n.tab-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  margin:20px 0;\n}\n.tab-wrapper:after {\n  content: '';\n  width: 100%;\n  height: 3px;\n  display: block;\n  order: -1;\n}\n.tab-label {\n  color: var(--grey);\n  white-space: nowrap;\n  border-bottom: 2px solid var(--horizontalRule);\n  font-weight: 500;\n  text-align: center;\n  padding: 2rem .5rem;\n  order: -1;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 5px 5px 0 0;\n  flex: 1;\n  line-height: 1;\n  justify-content: center;\n  &:hover {\n    color: var(--black);\n    & svg path {\n      fill: var(--black);\n    }\n  }\n  & svg path {\n    fill: var(--grey);\n  }\n  @media screen and (max-width: $phablet){\n    & svg {\n      display: none;\n    }\n}\n  @media screen and (max-width: $phone){\n    font-size: 1.2rem;\n}\n}\n.tab-label-data {\n  color: var(--grey);\n  margin-left: .4em;\n  font-size: 1.2rem;\n}\n.tab-content {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.tab-switch:checked+.tab-label {\n  color: var(--black);\n  border-bottom: 2px solid var(--accent);\n  & svg path {\n    fill: var(--black);\n  }\n}\n.tab-switch:checked+.tab-label+.tab-content {\n  height: auto;\n  overflow: auto;\n  padding-top: 5rem;\n  opacity: 1;\n  transition: .3s opacity;\n}\n.tab-switch {\n  display: none;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/kerry/ceaper/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/kerry/ceaper/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map