/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/app/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/app/controller.js":
/*!*************************************!*\
  !*** ./public/js/app/controller.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view */ \"./public/js/app/views/view.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./public/js/app/state.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_state__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elements__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst CTRL = (function(MDL, VIEW, state, elements) {\n\n\n\n\n    return {\n\n    };\n} (_models_model__WEBPACK_IMPORTED_MODULE_0__[\"MDL\"], _views_view__WEBPACK_IMPORTED_MODULE_1__[\"VIEW\"], _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"], _elements__WEBPACK_IMPORTED_MODULE_3__[\"elements\"]) );\n\n\n\n\n\n// Month here is 1-indexed (January is 1, February is 2, etc). This is\n// because we're using 0 as the day so that it returns the last day\n// of the last month, so you have to add 1 to the month number\n// so it returns the correct amount of days\nconst daysInMonth = (month, year) => {\n    return new Date(year, month, 0).getDate();\n};\n\n\n//=============================\nconst currMonth = new Date().getMonth();\nconst currYear = new Date().getFullYear();\n\n//prints date string\n// const currStringMonth = new Date().toDateString();\n// console.log(currStringMonth);\n\nconst printCalendarDays = (month, year) => {\n    // get current months days\n    const currMonthDays = daysInMonth(month, year);\n\n    // get prior months days (prior month end)\n    const prevMonthDays = daysInMonth(month - 1, year);\n\n    // subtract current months from 35 days (days to display from prior month).\n    //    ^34 will cause 35 days to be displayed; 35 causes 36 to be displayed.\n    // subtract result from prior months days (prior month start).\n    const prevMonthStart = prevMonthDays - (34 - currMonthDays);\n\n    // display result starting with prior month start, then to prior month end, then all current days.\n\n    const datesArr = [];\n\n    for(let i = prevMonthStart; i <= prevMonthDays; i++ ) {\n        datesArr.push(i);\n    }\n    for(let i = 1; i <= currMonthDays; i++ ) {\n        datesArr.push(i);\n    }\n\n    console.log(datesArr);\n    return (datesArr);\n};\n\n\nconst printHeading = () => {\n    const dateString = new Date().toDateString();\n\n    const node = document.createElement(\"div\");\n    node.classList.add(\"calendar__heading-title\");\n    node.innerHTML =`<h2>${dateString}</h2>`;\n\n    document.querySelector(\".calendar__heading\").appendChild(node);\n};\n\n\n\nprintHeading();\n\n\nprintCalendarDays(currMonth, currYear)\n    .map((item, index, arr) => {\n        const node = document.createElement(\"div\");\n        node.classList.add(\"calendar__box\");\n        node.innerHTML =\n        `\n            <p class=\"calendar__date ${item}\">${item}</p>\n        `;\n\n        console.log(typeof node);\n        return node;\n    })\n    .forEach((item, index, arr) => {\n        document.querySelector(\".calendar__dates-container\").appendChild(item);\n    });\n\n\n//# sourceURL=webpack:///./public/js/app/controller.js?");

/***/ }),

/***/ "./public/js/app/elements.js":
/*!***********************************!*\
  !*** ./public/js/app/elements.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./public/js/app/elements.js?");

/***/ }),

/***/ "./public/js/app/models/model.js":
/*!***************************************!*\
  !*** ./public/js/app/models/model.js ***!
  \***************************************/
/*! exports provided: MDL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDL\", function() { return MDL; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_state__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elements__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst MDL = {\n\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/models/model.js?");

/***/ }),

/***/ "./public/js/app/state.js":
/*!********************************!*\
  !*** ./public/js/app/state.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./public/js/app/state.js?");

/***/ }),

/***/ "./public/js/app/views/view.js":
/*!*************************************!*\
  !*** ./public/js/app/views/view.js ***!
  \*************************************/
/*! exports provided: VIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEW\", function() { return VIEW; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_state__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elements__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\nconst VIEW = {\n\n};\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/view.js?");

/***/ })

/******/ });