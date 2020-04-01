module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/social/facebook.js":
/*!*****************************************!*\
  !*** ./assets/icons/social/facebook.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Facebook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/social/facebook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Facebook() {
  return __jsx("svg", {
    class: "social-icon-image",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/social/instagram.js":
/*!******************************************!*\
  !*** ./assets/icons/social/instagram.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instagram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/social/instagram.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Instagram() {
  return __jsx("svg", {
    class: "social-icon-image",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-3.05176e-05 3.97163C-3.05176e-05 1.77803 1.77824 -0.000244141 3.97184 -0.000244141H9.0281C11.2217 -0.000244141 13 1.77802 13 3.97163V9.02788C13 11.2215 11.2217 12.9998 9.0281 12.9998H3.97184C1.77824 12.9998 -3.05176e-05 11.2215 -3.05176e-05 9.02789V3.97163ZM3.97184 1.281C2.48585 1.281 1.28122 2.48564 1.28122 3.97163V9.02789C1.28122 10.5139 2.48585 11.7185 3.97184 11.7185H9.0281C10.5141 11.7185 11.7187 10.5139 11.7187 9.02788V3.97163C11.7187 2.48564 10.5141 1.281 9.0281 1.281H3.97184Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.07483 6.55115C3.07483 4.64454 4.61242 3.09253 6.51702 3.09253C8.42162 3.09253 9.95921 4.64454 9.95921 6.55115C9.95921 8.45776 8.42162 10.0098 6.51702 10.0098C4.61242 10.0098 3.07483 8.45776 3.07483 6.55115ZM6.51702 4.37378C5.32709 4.37378 4.35608 5.34508 4.35608 6.55115C4.35608 7.75722 5.32709 8.72853 6.51702 8.72853C7.70695 8.72853 8.67796 7.75722 8.67796 6.55115C8.67796 5.34508 7.70695 4.37378 6.51702 4.37378Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.95062 3.87075C10.4035 3.87075 10.7706 3.50149 10.7706 3.04597C10.7706 2.59046 10.4035 2.22119 9.95062 2.22119C9.49776 2.22119 9.13065 2.59046 9.13065 3.04597C9.13065 3.50149 9.49776 3.87075 9.95062 3.87075Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/social/twitter.js":
/*!****************************************!*\
  !*** ./assets/icons/social/twitter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Twitter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/social/twitter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Twitter() {
  return __jsx("svg", {
    class: "social-icon-image",
    width: "16",
    height: "13",
    viewBox: "0 0 16 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0658 2.34438C14.7013 1.96349 15.1892 1.3604 15.419 0.641811C14.8244 0.994439 14.1658 1.25056 13.4648 1.3886C12.9034 0.7905 12.1036 0.416748 11.2185 0.416748C9.51888 0.416748 8.14096 1.79461 8.14096 3.49411C8.14096 3.7353 8.16822 3.97019 8.22068 4.19542C5.66301 4.06708 3.39543 2.84191 1.8776 0.980064C1.6127 1.43458 1.46094 1.96322 1.46094 2.52719C1.46094 3.59485 2.00428 4.5368 2.83003 5.08865C2.32553 5.07268 1.85104 4.93425 1.43608 4.70376C1.43586 4.71659 1.43586 4.72949 1.43586 4.74244C1.43586 6.23349 2.49666 7.47732 3.90448 7.75999C3.64622 7.83033 3.37436 7.86792 3.09366 7.86792C2.89537 7.86792 2.70257 7.84866 2.51471 7.81272C2.90629 9.03537 4.0428 9.92509 5.38945 9.94994C4.33623 10.7753 3.00928 11.2673 1.56749 11.2673C1.31911 11.2673 1.07413 11.2528 0.833374 11.2243C2.19527 12.0975 3.81291 12.6069 5.55081 12.6069C11.2113 12.6069 14.3067 7.91763 14.3067 3.85096C14.3067 3.71753 14.3037 3.5848 14.2978 3.45285C14.899 3.01896 15.4208 2.47694 15.8334 1.8598C15.2815 2.10456 14.6884 2.26998 14.0658 2.34438Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/add.js":
/*!********************************!*\
  !*** ./assets/icons/ui/add.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Add; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/add.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Add() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M19.49963,9.5h-9V.5a.5.5,0,0,0-1,0v9h-9a.5.5,0,1,0,0,1h9v9a.5.5,0,0,0,1,0v-9h9a.5.5,0,0,0,0-1Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/back.js":
/*!*********************************!*\
  !*** ./assets/icons/ui/back.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Back; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/back.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Back() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M15.10352.14648a.49983.49983,0,0,0-.707,0l-9.5,9.5a.49983.49983,0,0,0,0,.707l9.5,9.5a.5.5,0,0,0,.707-.707L5.957,10,15.10352.85352A.49983.49983,0,0,0,15.10352.14648Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/badge-new.js":
/*!**************************************!*\
  !*** ./assets/icons/ui/badge-new.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgeNew; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/badge-new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function BadgeNew() {
  return __jsx("span", {
    class: "badge badge-new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "New");
}

/***/ }),

/***/ "./assets/icons/ui/cook.js":
/*!*********************************!*\
  !*** ./assets/icons/ui/cook.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/cook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Cook() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M16.89453,20a.49971.49971,0,0,0,.5-.5V.5a.49971.49971,0,0,0-.5-.5,3.96717,3.96717,0,0,0-3.96289,3.96289V8.86328A1.97218,1.97218,0,0,0,14.90137,10.833h1.49316V19.5A.49971.49971,0,0,0,16.89453,20ZM14.90137,9.833a.97057.97057,0,0,1-.96973-.96973V3.96289A2.96832,2.96832,0,0,1,16.39453,1.042V9.833Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M3.10547,0a.49971.49971,0,0,0-.5.5V7.13721a1.47487,1.47487,0,0,0,1.397,1.53955H5.2373V19.5a.5.5,0,0,0,1,0V8.67676H7.47217a1.47487,1.47487,0,0,0,1.397-1.53955V.5a.5.5,0,0,0-1,0V7.13721c0,.29248-.18164.53955-.397.53955H6.2373V.5a.5.5,0,0,0-1,0V7.67676H4.00244c-.21533,0-.397-.24707-.397-.53955V.5A.49971.49971,0,0,0,3.10547,0Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/cook_solid.js":
/*!***************************************!*\
  !*** ./assets/icons/ui/cook_solid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookSolid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/cook_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CookSolid() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M16.89914-.00348a3.97329,3.97329,0,0,0-3.97,3.97v4.9a1.98036,1.98036,0,0,0,1.97,1.97h1.5v8.66a.49514.49514,0,0,0,.5.5.50142.50142,0,0,0,.5-.5v-19A.50805.50805,0,0,0,16.89914-.00348Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M8.36917-.00348a.50142.50142,0,0,0-.5.5v6.64c0,.29-.18.54-.4.54h-1.23v-7.18a.50805.50805,0,0,0-.5-.5.50142.50142,0,0,0-.5.5v7.18h-1.24c-.21,0-.39-.25-.39-.54v-6.64a.50805.50805,0,0,0-.5-.5.50142.50142,0,0,0-.5.5v6.64a1.46956,1.46956,0,0,0,1.39,1.54h1.24v10.82a.49511.49511,0,0,0,.5.5.50142.50142,0,0,0,.5-.5v-10.82h1.23a1.47746,1.47746,0,0,0,1.4-1.54v-6.64A.50146.50146,0,0,0,8.36917-.00348Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/home_solid.js":
/*!***************************************!*\
  !*** ./assets/icons/ui/home_solid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/home_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HomeApp() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M10.36371.15094a.51375.51375,0,0,0-.72754,0l-9.5,10.07544a.5.5,0,0,0,.36377.843H2.58588v8.43042a.49979.49979,0,0,0,.5.50018H7.69525a.49979.49979,0,0,0,.5-.50018V14.10358h3.60938v5.39624a.49979.49979,0,0,0,.5.50018h4.60943a.49979.49979,0,0,0,.5-.50018V11.0694H19.5a.49974.49974,0,0,0,.36328-.843Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/human.js":
/*!**********************************!*\
  !*** ./assets/icons/ui/human.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Human; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/human.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Human() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M13.24359,10.08185a5.5667,5.5667,0,1,0-6.48749.00006A10.29093,10.29093,0,0,0,0,19.5a.5.5,0,0,0,1,0,9.269,9.269,0,0,1,6.97931-8.75146,5.49125,5.49125,0,0,0,4.04126-.00007A9.26892,9.26892,0,0,1,19,19.5a.5.5,0,0,0,1,0A10.291,10.291,0,0,0,13.24359,10.08185ZM5.43311,5.56641A4.56665,4.56665,0,1,1,10,10.13379,4.57212,4.57212,0,0,1,5.43311,5.56641Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/human_solid.js":
/*!****************************************!*\
  !*** ./assets/icons/ui/human_solid.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HumanApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/human_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HumanApp() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M14.28723,10.53a6.53219,6.53219,0,0,1-8.5744,0A10.27079,10.27079,0,0,0,0,19.5a.49971.49971,0,0,0,.5.5h19a.49971.49971,0,0,0,.5-.5A10.2706,10.2706,0,0,0,14.28723,10.53Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M6.7561,10.08191a5.5609,5.5609,0,1,0-2.323-4.5155A5.53006,5.53006,0,0,0,6.7561,10.08191Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/pen_solid.js":
/*!**************************************!*\
  !*** ./assets/icons/ui/pen_solid.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PenSolid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/pen_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PenSolid() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M19.3317.72025a2.34408,2.34408,0,0,0-1.65352-.712,2.392,2.392,0,0,0-1.674.66218.61777.61777,0,0,0-.06153.07228L15.1271,1.567a.48574.48574,0,0,0-.11927.22067.50608.50608,0,0,0-.245.12117L2.23143,14.43029v.01a.35549.35549,0,0,0-.11.16006L.04117,19.29091a.52433.52433,0,0,0,.1.56006.54291.54291,0,0,0,.36.14.47632.47632,0,0,0,.2-.04L5.39177,17.8707a.4513.4513,0,0,0,.17-.11L18.09327,5.23922a.443.443,0,0,0,.12526-.22446.486.486,0,0,0,.2283-.12214l.84775-.84776A2.35468,2.35468,0,0,0,19.3317.72025ZM1.48134,18.51079,2.7415,15.66048l1.59015,1.59015Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/search.js":
/*!***********************************!*\
  !*** ./assets/icons/ui/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Search() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M15.90009,15.19305a9.154,9.154,0,1,0-.707.707l3.95343,3.95343a.5.5,0,0,0,.707-.707ZM1,9.11865A8.11865,8.11865,0,1,1,9.11865,17.2373,8.12795,8.12795,0,0,1,1,9.11865Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/search_solid.js":
/*!*****************************************!*\
  !*** ./assets/icons/ui/search_solid.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/search_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SearchApp() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M15.9,15.1933a9.154,9.154,0,1,0-.707.707l3.95343,3.95343a.49995.49995,0,0,0,.707-.707ZM9.119,17.23755a8.11866,8.11866,0,1,1,8.11816-8.11914A8.12878,8.12878,0,0,1,9.119,17.23755Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/setting.js":
/*!************************************!*\
  !*** ./assets/icons/ui/setting.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/setting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Setting() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M19.18359,7.9165H17.499a7.69624,7.69624,0,0,0-.72363-1.7456l1.19043-1.19043a.81634.81634,0,0,0,.001-1.15576l-1.792-1.79248a.81869.81869,0,0,0-1.15429.001L13.8291,3.22412A7.667,7.667,0,0,0,12.083,2.501V.81689A.81771.81771,0,0,0,11.2666,0H8.7334A.81771.81771,0,0,0,7.917.81689V2.501a7.66853,7.66853,0,0,0-1.74609.72363L4.97852,2.03223a.8196.8196,0,0,0-1.1543.001l-1.79,1.79053a.81634.81634,0,0,0-.001,1.15576L3.22461,6.17041A7.71842,7.71842,0,0,0,2.501,7.9165H.81641A.81772.81772,0,0,0,0,8.7334v2.5332a.81772.81772,0,0,0,.81641.8169H2.501a7.69624,7.69624,0,0,0,.72363,1.7456L2.0332,15.02051a.81634.81634,0,0,0,0,1.15478l1.792,1.79248a.81869.81869,0,0,0,1.15429-.001L6.1709,16.77588a7.713,7.713,0,0,0,1.74609.72363v1.6836A.81771.81771,0,0,0,8.7334,20h2.5332a.81771.81771,0,0,0,.81641-.81689v-1.6836a7.713,7.713,0,0,0,1.74609-.72363l1.19043,1.19043a.83752.83752,0,0,0,1.15527.00049l1.793-1.792a.82049.82049,0,0,0-.001-1.15429l-1.19141-1.19092A7.71842,7.71842,0,0,0,17.499,12.0835h1.68457A.81772.81772,0,0,0,20,11.2666V8.7334A.81772.81772,0,0,0,19.18359,7.9165ZM19,11.0835H17.1084a.50038.50038,0,0,0-.48828.39209,6.69662,6.69662,0,0,1-.89649,2.16259.49949.49949,0,0,0,.06836.62207l1.33789,1.33789-1.53222,1.53174-1.33789-1.3374a.49867.49867,0,0,0-.62207-.06787,6.73022,6.73022,0,0,1-2.16309.896.50045.50045,0,0,0-.3916.48828V19H8.917V17.10889a.50045.50045,0,0,0-.3916-.48828,6.73022,6.73022,0,0,1-2.16309-.896.49853.49853,0,0,0-.62207.06787L4.40234,17.13037,2.87012,15.59814,4.208,14.25977a.50026.50026,0,0,0,.06836-.62256,6.67625,6.67625,0,0,1-.89649-2.16211.50045.50045,0,0,0-.48828-.3916H1V8.9165H2.8916a.50038.50038,0,0,0,.48828-.39209,6.69662,6.69662,0,0,1,.89649-2.16259A.49949.49949,0,0,0,4.208,5.73975L2.87012,4.40186,4.40234,2.86963,5.74023,4.208a.49919.49919,0,0,0,.62207.06787,6.71552,6.71552,0,0,1,2.16309-.896A.50045.50045,0,0,0,8.917,2.8916V1h2.166V2.8916a.50045.50045,0,0,0,.3916.48828,6.7073,6.7073,0,0,1,2.16309.89551.49932.49932,0,0,0,.62207-.06787l1.33789-1.33789,1.53222,1.53223L15.792,5.74023a.50026.50026,0,0,0-.06836.62256,6.67625,6.67625,0,0,1,.89649,2.16211.50045.50045,0,0,0,.48828.3916H19Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M10,5.84033A4.15967,4.15967,0,1,0,14.16016,10,4.16473,4.16473,0,0,0,10,5.84033Zm0,7.31934A3.15967,3.15967,0,1,1,13.16016,10,3.16374,3.16374,0,0,1,10,13.15967Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/star_solid.js":
/*!***************************************!*\
  !*** ./assets/icons/ui/star_solid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StarSolid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/star_solid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function StarSolid() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M19.97461,7.73111a.50168.50168,0,0,0-.42188-.33887L13.1543,6.71841,10.457.64907a.52089.52089,0,0,0-.91406,0L6.8457,6.71841.44727,7.39224a.49934.49934,0,0,0-.28711.86328l4.71777,4.38086L3.5293,19.04556a.49965.49965,0,0,0,.74316.5332L10,16.20962l5.72754,3.36914a.49459.49459,0,0,0,.25391.06934.49931.49931,0,0,0,.48925-.60254l-1.34863-6.40918,4.71777-4.38086A.49884.49884,0,0,0,19.97461,7.73111Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/icons/ui/time.js":
/*!*********************************!*\
  !*** ./assets/icons/ui/time.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Time; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/icons/ui/time.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Time() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M10,0A10,10,0,1,0,20,10,10.01114,10.01114,0,0,0,10,0Zm0,19a9,9,0,1,1,9-9A9.01047,9.01047,0,0,1,10,19Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M10.5,8.04559V3.40186a.5.5,0,1,0-1,0V8.04559A2.02032,2.02032,0,1,0,11.95441,10.5h4.64325a.5.5,0,0,0,0-1H11.95441A2.02192,2.02192,0,0,0,10.5,8.04559ZM10,11.02441A1.02441,1.02441,0,1,1,11.02441,10,1.02547,1.02547,0,0,1,10,11.02441Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./assets/logo.js":
/*!************************!*\
  !*** ./assets/logo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kerry/ceaper/assets/logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Logo() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 342.40542 96.28959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    d: "M337.76219,18.12145,333.565,19.38568a3.60336,3.60336,0,1,0,2.07848,6.90049l4.1972-1.26423a3.60336,3.60336,0,1,0-2.07847-6.90049Z",
    fill: "#ff5445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M324.57765,6.34937l-2.07393,3.86181a3.60336,3.60336,0,1,0,6.34909,3.40969l2.07393-3.86182a3.60336,3.60336,0,1,0-6.34909-3.40968Z",
    fill: "#ff5445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M338.761,35.76845l-3.86182-2.07393a3.60336,3.60336,0,1,0-3.40969,6.34909l3.86182,2.07393a3.60336,3.60336,0,1,0,3.40969-6.34909Z",
    fill: "#ff5445",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M299.84885,39.77392V21.20625h-16.5042a1.97653,1.97653,0,0,0-1.09637,3.6211l3.09125,2.06078V63.11076l-3.09125,2.06078a1.97653,1.97653,0,0,0,1.09637,3.62111h19.14628a1.97653,1.97653,0,0,0,.95122-3.70911l-3.5933-1.97278V39.77392Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M157.38035,39.57112V55.19673c0,4.66727,2.13088,6.18926,4.46439,6.18926a6.765,6.765,0,0,0,3.95706-1.21754v4.97172a17.30235,17.30235,0,0,1-11.26229,3.95706c-4.8704,0-8.21882-1.72486-10.75521-5.78349-4.76884,4.36307-8.7259,5.98637-12.88609,5.98637a11.9636,11.9636,0,0,1-12.37852-11.97275c0-7.30548,5.27617-11.567,15.32092-13.19029l9.13191-1.522v-3.044c0-6.79815-2.43507-10.3492-8.21857-10.3492-4.05863,0-8.32013,1.72486-12.58164,5.78324l-1.42042-4.97172c5.479-6.595,12.683-9.53742,19.17666-9.53742C150.48088,20.496,157.38035,25.97506,157.38035,39.57112Zm-18.06069,9.33479c-5.47905.91309-7.20391,3.24685-7.20391,6.39214a5.22032,5.22032,0,0,0,5.58061,5.58061,8.353,8.353,0,0,0,5.27616-2.43508V48.297Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M55.73233,5.13967l1.36246-1.36975a1.97653,1.97653,0,0,1,3.37786,1.39389V18.21505a1.97652,1.97652,0,0,1-1.97652,1.97652H56.2399a1.97708,1.97708,0,0,1-1.86915-1.36227c-2.81255-8.388-8.514-12.234-16.32162-12.234-13.39329,0-22.01775,12.48008-22.01775,28.51146,0,17.55336,9.53767,27.59812,23.74262,27.59812,8.01569,0,14.71228-2.638,21.61174-8.523V60.98A39.89788,39.89788,0,0,1,35.208,70.21321C13.79918,70.21321,0,55.80538,0,35.41117,0,14.50939,14.408,0,35.208,0c6.861,0,13.12889,1.77925,17.95214,5.33756A1.97432,1.97432,0,0,0,55.73233,5.13967Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M98.62261,62.80641A19.62086,19.62086,0,0,0,111.61,58.5449v5.68193c-5.37748,3.95706-11.05941,5.58061-18.26357,5.58061-15.62537,0-26.279-9.53767-26.279-24.75727,0-14.30652,10.24789-24.5544,24.14839-24.5544,12.48008,0,20.90153,11.47047,20.90153,26.893H82.18546C82.38835,58.75283,88.67917,62.80641,98.62261,62.80641ZM82.48991,41.70679H97.50663c-.10156-8.92878-2.6382-16.5435-6.59527-16.5435C86.64985,25.16329,83.403,33.18378,82.48991,41.70679Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M223.26312,44.54284c0,15.92981-8.929,25.56905-21.91644,25.56905a24.09865,24.09865,0,0,1-13.69762-4.26151V90.60766l3.884,1.93656a1.97652,1.97652,0,0,1-.88194,3.74537H171.17a1.97652,1.97652,0,0,1-1.10259-3.61693l3.07226-2.065V26.88816l-3.07226-2.065A1.97652,1.97652,0,0,1,171.17,21.20623h16.47906v5.479A23.23437,23.23437,0,0,1,203.376,20.29289C215.24743,20.29289,223.26312,29.12035,223.26312,44.54284ZM187.64906,32.87453V59.35668a14.40539,14.40539,0,0,0,9.13191,3.24685c6.595,0,11.36386-5.88506,11.36386-16.84315,0-12.17564-5.07328-17.35024-11.161-17.35024C193.737,28.41014,190.49015,29.93213,187.64906,32.87453Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M261.94207,62.80641a19.62091,19.62091,0,0,0,12.98741-4.26151v5.68193c-5.37748,3.95706-11.05941,5.58061-18.26357,5.58061-15.62537,0-26.279-9.53767-26.279-24.75727,0-14.30652,10.24788-24.5544,24.14838-24.5544,12.48008,0,20.90154,11.47047,20.90154,26.893H245.50493C245.70781,58.75283,251.99863,62.80641,261.94207,62.80641ZM245.80938,41.70679H260.8261c-.10157-8.92878-2.63821-16.5435-6.59527-16.5435C249.96932,25.16329,246.72247,33.18378,245.80938,41.70679Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M306.835,35.01162l-2.10506-6.98877a.94852.94852,0,0,0-1.48551-.47538,3.68238,3.68238,0,0,0-1.29877,3.99466l.6245,2.07335a3.68257,3.68257,0,0,0,3.289,2.61289A.94852.94852,0,0,0,306.835,35.01162Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    d: "M319.63089,36.90711a9.15485,9.15485,0,1,0-11.5486-10.881l-1.84631.55612a.94627.94627,0,0,0-.63315,1.179l2.10432,6.98632a.94628.94628,0,0,0,1.179.63315l1.84631-.55612A9.1507,9.1507,0,0,0,319.63089,36.90711Z",
    fill: "#231e28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
}

/***/ }),

/***/ "./layouts/base.js":
/*!*************************!*\
  !*** ./layouts/base.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/header.js */ "./layouts/header.js");
/* harmony import */ var _layouts_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/footer.js */ "./layouts/footer.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/base.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BaseLayout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_layouts_header_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), props.children, __jsx(_layouts_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./layouts/footer.js":
/*!***************************!*\
  !*** ./layouts/footer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/social/instagram.js */ "./assets/icons/social/instagram.js");
/* harmony import */ var _assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/social/facebook.js */ "./assets/icons/social/facebook.js");
/* harmony import */ var _assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/social/twitter.js */ "./assets/icons/social/twitter.js");
/* harmony import */ var _assets_logo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logo.js */ "./assets/logo.js");
/* harmony import */ var _assets_icons_ui_badge_new_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/ui/badge-new.js */ "./assets/icons/ui/badge-new.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Footer = () => __jsx("div", {
  id: "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  class: "bg bg-black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  class: "section ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-container footer-app-grid",
  id: "footer-app",
  style: {
    paddingBottom: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-app-grid-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\u30AD\u30E3\u30F3\u30D1\u30FC\u306B\u3068\u3063\u3066\u3001\u6700\u9AD8\u306E\u30D1\u30FC\u30C8\u30CA\u30FC\u3092\u3054\u7528\u610F\u3057\u307E\u3059\u3002"), __jsx("a", {
  class: "button button-grey",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\u8FD1\u65E5\u30EA\u30EA\u30FC\u30B9\u4E88\u5B9A")), __jsx("div", {
  class: "footer-app-grid-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/home/hero.svg",
  alt: "hero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))))), __jsx("div", {
  class: "bg-grey",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  class: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-container ",
  id: "footer-contents",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  class: "logo-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_assets_logo_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}))), __jsx("div", {
  class: "footer-contents-grid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-terms-contents-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "\u30B5\u30FC\u30D3\u30B9"), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "\u4F7F\u3044\u65B9"), __jsx("a", {
  class: "hover-line event-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "\u8A18\u4E8B\uFF08\u6E96\u5099\u4E2D\uFF09")), __jsx("div", {
  class: "footer-terms-contents-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Ceaper"), __jsx("a", {
  class: "hover-line",
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Ceaper\u306B\u3064\u3044\u3066"), __jsx("div", {
  class: "badge-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "\u30E9\u30A4\u30BF\u30FC\u52DF\u96C6"), __jsx(_assets_icons_ui_badge_new_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "\u30D7\u30EC\u30B9"), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "\u6295\u8CC7\u306B\u95A2\u3059\u308B\u60C5\u5831")), __jsx("div", {
  class: "footer-terms-contents-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "\u30B5\u30DD\u30FC\u30C8"), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "\u3054\u610F\u898B\u30FB\u3054\u8981\u671B"), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "\u30D8\u30EB\u30D7\uFF08\u6E96\u5099\u4E2D\uFF09"), __jsx("a", {
  class: "hover-line",
  target: "_blank",
  rel: "nofollow noreferrer noopener",
  href: "mailto: support@ceaper.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "\u304A\u554F\u3044\u5408\u308F\u305B"))))), __jsx("div", {
  class: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("div", {
  class: "hr-paragraph",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("div", {
  class: "footer-container",
  id: "footer-terms",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-terms-inner1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("p", {
  class: "footer-copylight",
  style: {
    paddingLeft: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "\xA9 2020 Ceaper"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "/"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/terms",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "\u5229\u7528\u898F\u7D04")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/privacy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC        ")), __jsx("a", {
  class: "hover-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "\u5E83\u544A\u63B2\u8F09")), __jsx("div", {
  class: "footer-terms-inner2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("div", {
  class: "footer-social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx(_assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
})), __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx(_assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
})), __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx(_assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./layouts/header.js":
/*!***************************!*\
  !*** ./layouts/header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.js */ "./assets/logo.js");
/* harmony import */ var _assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/search.js */ "./assets/icons/ui/search.js");
/* harmony import */ var _assets_icons_ui_human_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ui/human.js */ "./assets/icons/ui/human.js");
/* harmony import */ var _layouts_header_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/header_mobile.js */ "./layouts/header_mobile.js");
/* harmony import */ var _layouts_header_app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/header_app.js */ "./layouts/header_app.js");
/* harmony import */ var _layouts_nav_app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/nav_app.js */ "./layouts/nav_app.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  id: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  id: "desktop-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  class: "nav-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  class: "logo-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_assets_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))), __jsx("div", {
  class: "nav-inner nav-inner-desktop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  class: "nav-controls",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  class: "search-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("span", {
  class: "search-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("span", {
  class: "search-icon-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}))), __jsx("input", {
  class: "search",
  type: "search",
  name: "q",
  placeholder: "\u6599\u7406\u3001\u6750\u6599\u3001\u30AD\u30E3\u30F3\u30D7\u9053\u5177...",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("a", {
  href: "/blog",
  class: "hover-accent articles",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "\u8A18\u4E8B\u4E00\u89A7")), __jsx("div", {
  class: "nav-controls",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/signin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  class: "hover-accent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "\u30ED\u30B0\u30A4\u30F3")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/signup",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("a", {
  class: "button icon-button button-black nav-account-button ico",
  style: {
    margin: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(_assets_icons_ui_human_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210")))))), __jsx("div", {
  id: "mobile-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(_layouts_header_mobile_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}))), __jsx("div", {
  id: "app-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx(_layouts_header_app_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
})), __jsx("div", {
  id: "app-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx(_layouts_nav_app_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./layouts/header_app.js":
/*!*******************************!*\
  !*** ./layouts/header_app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.js */ "./assets/logo.js");
/* harmony import */ var _assets_icons_ui_home_solid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/home_solid.js */ "./assets/icons/ui/home_solid.js");
/* harmony import */ var _assets_icons_ui_human_solid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ui/human_solid.js */ "./assets/icons/ui/human_solid.js");
/* harmony import */ var _assets_icons_ui_search_solid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/ui/search_solid.js */ "./assets/icons/ui/search_solid.js");
/* harmony import */ var _assets_icons_ui_back_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/ui/back.js */ "./assets/icons/ui/back.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/header_app.js";

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

const HeaderApp = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  class: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  class: "app-header-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  class: "app-header-inner app-header-inner1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx(_assets_icons_ui_back_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})))), __jsx("div", {
  class: "app-header-inner app-header-inner2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  class: "logo-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_assets_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
})))), __jsx("div", {
  class: "app-header-inner app-header-inner3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  class: "user-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  class: "user-avatar",
  style: {
    margin: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(User, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})))))))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderApp);

/***/ }),

/***/ "./layouts/header_mobile.js":
/*!**********************************!*\
  !*** ./layouts/header_mobile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.js */ "./assets/logo.js");
/* harmony import */ var _assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/search.js */ "./assets/icons/ui/search.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/header_mobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HeaderMobile = () => __jsx("div", {
  class: "nav-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  class: "logo-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_assets_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}))), __jsx("div", {
  class: "nav-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  class: "search-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("span", {
  class: "search-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))), __jsx("div", {
  class: "nav-controls",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  class: "button button-black-ol header-start-button",
  href: "/signup",
  style: {
    margin: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\u306F\u3058\u3081\u308B"))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ }),

/***/ "./layouts/nav_app.js":
/*!****************************!*\
  !*** ./layouts/nav_app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.js */ "./assets/logo.js");
/* harmony import */ var _assets_icons_ui_home_solid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/home_solid.js */ "./assets/icons/ui/home_solid.js");
/* harmony import */ var _assets_icons_ui_human_solid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ui/human_solid.js */ "./assets/icons/ui/human_solid.js");
/* harmony import */ var _assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/ui/search.js */ "./assets/icons/ui/search.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/nav_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NavApp = () => __jsx("div", {
  class: "app-nav-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  class: "app-nav-inner app-nav-active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("span", {
  class: "app-nav-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_assets_icons_ui_home_solid_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\u30DB\u30FC\u30E0"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/signin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  class: "app-nav-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("span", {
  class: "app-nav-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_assets_icons_ui_human_solid_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\u30ED\u30B0\u30A4\u30F3"))), __jsx("a", {
  class: "app-nav-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("span", {
  class: "app-nav-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(_assets_icons_ui_search_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "\u8ABF\u3079\u308B")));

/* harmony default export */ __webpack_exports__["default"] = (NavApp);

/***/ }),

/***/ "./layouts/shot_user.js":
/*!******************************!*\
  !*** ./layouts/shot_user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserShot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_ui_cook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/ui/cook.js */ "./assets/icons/ui/cook.js");
/* harmony import */ var _assets_icons_ui_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/ui/time.js */ "./assets/icons/ui/time.js");
var _jsxFileName = "/Users/kerry/ceaper/layouts/shot_user.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function User() {
  return __jsx("img", {
    src: "images/default/user.jpg",
    alt: "user image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

function RecipeImg() {
  return __jsx("img", {
    src: "images/default/food.jpg",
    alt: "recipe image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}

function UserShot() {
  return __jsx("div", {
    class: "shots-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    class: "shot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    class: "user-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    class: "user-avatar user-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    class: "user-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u30B4\u30EB\u30B4\u30F3\u30BE\u30FC\u30E9\u3068\u30C8\u30DE\u30C8\u306E\u30AB\u30D7\u30EC\u30FC\u30BC"), __jsx("a", {
    class: "user-link user-text name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u30B1\u30EA\u30FC\u5C0F\u7530"))), __jsx("div", {
    class: "shot-recipe-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    href: "/recipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(RecipeImg, {
    class: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("div", {
    class: "shot-recipe-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    class: "recipes-bio-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    class: "recipes-inner recipes-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    class: "cook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("span", {
    class: "recipes-ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_assets_icons_ui_cook_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "1135")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u30FB"), __jsx("div", {
    class: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    class: "recipes-ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_assets_icons_ui_time_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), "15\u5206")))))));
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/base.js */ "./layouts/base.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_ui_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/add.js */ "./assets/icons/ui/add.js");
/* harmony import */ var _assets_icons_ui_setting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ui/setting.js */ "./assets/icons/ui/setting.js");
/* harmony import */ var _assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/social/instagram.js */ "./assets/icons/social/instagram.js");
/* harmony import */ var _assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/social/facebook.js */ "./assets/icons/social/facebook.js");
/* harmony import */ var _assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/social/twitter.js */ "./assets/icons/social/twitter.js");
/* harmony import */ var _layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/shot_user.js */ "./layouts/shot_user.js");
/* harmony import */ var _assets_icons_ui_pen_solid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/ui/pen_solid.js */ "./assets/icons/ui/pen_solid.js");
/* harmony import */ var _assets_icons_ui_cook_solid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/ui/cook_solid.js */ "./assets/icons/ui/cook_solid.js");
/* harmony import */ var _assets_icons_ui_star_solid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/ui/star_solid.js */ "./assets/icons/ui/star_solid.js");
var _jsxFileName = "/Users/kerry/ceaper/pages/user.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function User() {
  return __jsx("img", {
    src: "images/default/user.jpg",
    alt: "user image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_layouts_base_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  id: "page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  class: "user-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  class: "contents",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  class: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  class: "user-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  class: "user-avatar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(User, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})), __jsx("div", {
  class: "user-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("p", {
  class: "user-text name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "\u30B1\u30EA\u30FC\u5C0F\u7530"), __jsx("p", {
  class: "user-bio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "\u79C1\u306F\u3001\u6599\u7406\u304C\u5927\u597D\u304D\u306A\u751F\u7C8B\u306E\u30AD\u30E3\u30F3\u30D1\u30FC\u3067\u3059\u3002\u90317\u3067\u3001\u30AD\u30E3\u30F3\u30D7\u306B\u884C\u3063\u3066\u3044\u307E\u3059\uFF01\u3088\u304F\u51FA\u6CA1\u3059\u308B\u5834\u6240\u306F\u9AD8\u5C3E\u5C71\u3067\u3059\u3002"), __jsx("div", {
  class: "user-social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(_assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})), __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx(_assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
})), __jsx("a", {
  class: "user-social-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx(_assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}))), __jsx("div", {
  class: "user-data",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  class: "user-data-inner xs-text user-data-inner-start",
  style: {
    paddingLeft: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "3"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "\u30EC\u30B7\u30D4")), __jsx("a", {
  class: "user-data-inner xs-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "134"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\u4F5C\u3063\u305F\u30EC\u30B7\u30D4")), __jsx("a", {
  class: "user-data-inner xs-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "204"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "\u30D5\u30A9\u30ED\u30EF\u30FC")), __jsx("a", {
  class: "user-data-inner xs-text user-data-inner-last",
  style: {
    paddingRight: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "13"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "\u30D5\u30A9\u30ED\u30FC"))), __jsx("a", {
  class: "button add-button button-accent ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx(_assets_icons_ui_add_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}), "\u30D5\u30A9\u30ED\u30FC"), __jsx("a", {
  class: "button setting-button button-black ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx(_assets_icons_ui_setting_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}), "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6")))))), __jsx("div", {
  class: "contents",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("div", {
  class: "section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  class: "tab-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("input", {
  id: "tab01",
  type: "radio",
  name: "tab",
  class: "tab-switch",
  checked: "checked",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), __jsx("label", {
  class: "tab-label s-text ico",
  for: "tab01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(_assets_icons_ui_pen_solid_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), "\u6295\u7A3F\u3057\u305F\u30EC\u30B7\u30D4", __jsx("span", {
  class: "tab-label-data",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "30")), __jsx("div", {
  class: "tab-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx(_layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
})), __jsx("input", {
  id: "tab02",
  type: "radio",
  name: "tab",
  class: "tab-switch",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), __jsx("label", {
  class: "tab-label s-text ico",
  for: "tab02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx(_assets_icons_ui_cook_solid_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), "\u4F5C\u3063\u305F\u30EC\u30B7\u30D4", __jsx("span", {
  class: "tab-label-data",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "6")), __jsx("div", {
  class: "tab-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx(_layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
})), __jsx("input", {
  id: "tab03",
  type: "radio",
  name: "tab",
  class: "tab-switch",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}), __jsx("label", {
  class: "tab-label s-text ico",
  for: "tab03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx(_assets_icons_ui_star_solid_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}), "\u304A\u6C17\u306B\u5165\u308A", __jsx("span", {
  class: "tab-label-data",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "102")), __jsx("div", {
  class: "tab-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx(_layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}))))))));

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kerry/ceaper/pages/user.js */"./pages/user.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=user.js.map