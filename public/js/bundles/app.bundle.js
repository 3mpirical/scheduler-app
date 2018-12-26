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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view */ \"./public/js/app/views/view.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ \"./public/js/app/elements.js\");\n\n\n\n\n\n\nconst CTRL = (function(MDL, VIEW, state, elements) {\n\n    const initializeCalendar = () => {\n        state.headingMonth =  new Date().getMonth();\n        state.headingYear  =  new Date().getFullYear();\n        state.selectedDay = new Date().getDate();\n        state.selectedMonth = state.headingMonth;\n        state.selectedYear = state.headingYear;\n        VIEW.printHeading();\n        VIEW.printSelected();\n        VIEW.printCalendarDays(state.headingMonth, state.headingYear);\n        VIEW.initialHighlight();\n    };\n\nconst decrementCalendarMonth = () => {\n    if(state.headingMonth - 1 === -1) {\n        state.headingMonth = 11;\n        state.headingYear -= 1 ;\n    } else {\n        state.headingMonth -=  1;\n    }\n    VIEW.clearCalendar();\n    VIEW.printHeading();\n    VIEW.printCalendarDays(state.headingMonth, state.headingYear);\n};\nconst incrementCalendarMonth = () => {\n    if(state.headingMonth + 1 === 12) {\n        state.headingMonth = 0;\n        state.headingYear += 1;\n    } else {\n        state.headingMonth +=  1;\n    }\n    VIEW.clearCalendar();\n    VIEW.printHeading();\n    VIEW.printCalendarDays(state.headingMonth, state.headingYear);\n};\n\nconst updateSelectedBox = (event) => {\n    state.selectedDay = event.target.getAttribute(\"day\");\n    state.selectedMonth = event.target.getAttribute(\"month\");\n    state.selectedYear = event.target.getAttribute(\"year\");\n    VIEW.updateHighlight(event);\n    VIEW.clearSelected();\n    VIEW.printSelected();\n};\n\n\n    return {\n        initializeCalendar,\n        decrementCalendarMonth,\n        incrementCalendarMonth,\n        updateSelectedBox,\n    };\n} (_models_model__WEBPACK_IMPORTED_MODULE_0__[\"MDL\"], _views_view__WEBPACK_IMPORTED_MODULE_1__[\"VIEW\"], _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"], _elements__WEBPACK_IMPORTED_MODULE_3__[\"elements\"]) );\n\n\n\n// APPLICATION EXECUTION ============================\n\nCTRL.initializeCalendar();\n\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].prevMonthButt.addEventListener(\"click\", (event) => {\n    CTRL.decrementCalendarMonth();\n});\n\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].nextMonthButt.addEventListener(\"click\", (event) => {\n    CTRL.incrementCalendarMonth();\n});\n\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].calendarContainer.addEventListener(\"click\", (event) => {\n    if(event.target.matches(\".calendar__box-content\")) {\n        CTRL.updateSelectedBox(event);\n    }\n});\n\n\n//# sourceURL=webpack:///./public/js/app/controller.js?");

/***/ }),

/***/ "./public/js/app/elements.js":
/*!***********************************!*\
  !*** ./public/js/app/elements.js ***!
  \***********************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\n    calendarHeading: document.querySelector(\".calendar__heading\"),\n    calendarSelected: document.querySelector(\".calendar__selected\"),\n\n    calendarContainer: document.querySelector(\".calendar__dates-container\"),\n    calendarBoxes: [...document.querySelectorAll(\".calendar__box\")],\n\n    prevMonthButt: document.querySelector(\".previous-month\"),\n    nextMonthButt: document.querySelector(\".next-month\"),\n\n    calendarContent: () => {\n            return [...document.querySelectorAll(\".calendar__box-content\")];\n    },\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/elements.js?");

/***/ }),

/***/ "./public/js/app/models/model.js":
/*!***************************************!*\
  !*** ./public/js/app/models/model.js ***!
  \***************************************/
/*! exports provided: MDL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDL\", function() { return MDL; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n\n\n\nconst MDL = {\n\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/models/model.js?");

/***/ }),

/***/ "./public/js/app/state.js":
/*!********************************!*\
  !*** ./public/js/app/state.js ***!
  \********************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\nconst state = {\n    headingMonth: null,\n    headingYear: null,\n\n    selectedDay: null,\n    selectedMonth: null,\n    selectedYear: null,\n\n    selectedBox: null,\n    indexOfBox: null,\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/state.js?");

/***/ }),

/***/ "./public/js/app/views/_baseView.js":
/*!******************************************!*\
  !*** ./public/js/app/views/_baseView.js ***!
  \******************************************/
/*! exports provided: baseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseView\", function() { return baseView; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n\n\n\n\nconst baseView = {\n    \n    monthArr : [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\n\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/_baseView.js?");

/***/ }),

/***/ "./public/js/app/views/_calendarView.js":
/*!**********************************************!*\
  !*** ./public/js/app/views/_calendarView.js ***!
  \**********************************************/
/*! exports provided: calendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calendarView\", function() { return calendarView; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseView */ \"./public/js/app/views/_baseView.js\");\n\n\n\n\n\nconsole.log(_baseView__WEBPACK_IMPORTED_MODULE_3__[\"baseView\"].monthArr);\nconst monthArr = _baseView__WEBPACK_IMPORTED_MODULE_3__[\"baseView\"].monthArr;\n\n// local functions ==========\n// Index starts at 0 so.... January === 0\nconst daysInMonth = (month, year) => {\n    return new Date(year, month + 1 , 0).getDate();\n};\n\nconst getMonthsFirstDay = (month, year) => {\n    return new Date(year, month, 1).getDay();\n};\n\n\nconst getCalendarArray = (month, year) => {\n    // get current months total days\n    const currMonthDays = daysInMonth(month, year);\n\n    // get the total number of days in the previous month\n    const prevMonthDays = daysInMonth(month - 1, year);\n\n    //gets the number of days we want to display from previous month by subtracting the index of the first day of the week.\n    const prevMonthDaysToDisplay = getMonthsFirstDay(month, year) -1;\n\n    //finds the first day of previous month to be displayed by subtracting the total number of days in the previous month by the number of days we want to display.\n    const prevMonthStart = prevMonthDays - prevMonthDaysToDisplay;\n\n    // Builds array to append starting with the first day to display of the previous month, then all current month days, then next month's days up to a total of 42.\n    const datesArr = [];\n\n    for(let i = prevMonthStart; i <= prevMonthDays; i++ ) {\n        const node = document.createElement(\"div\");\n\n        if(month - 1 === -1) {\n            node.setAttribute(\"year\", year - 1);\n            node.setAttribute(\"month\", 11 );\n            node.setAttribute(\"day\", i);\n        } else {\n            node.setAttribute(\"year\", year);\n            node.setAttribute(\"month\", month -1);\n            node.setAttribute(\"day\", i);\n        }\n\n        node.classList.add(\"calendar__box-content\", \"dark\");\n        node.innerHTML =`<div class=\"calendar__date\">${i}</div>`;\n\n        datesArr.push(node);\n    }\n\n    for(let i = 1; i <= currMonthDays; i++ ) {\n        const node = document.createElement(\"div\");\n\n        node.setAttribute(\"year\", year);\n        node.setAttribute(\"month\", month);\n        node.setAttribute(\"day\", i);\n\n        node.classList.add(\"calendar__box-content\");\n        node.innerHTML =`<div class=\"calendar__date\">${i}</div>`;\n\n        datesArr.push(node);\n    }\n\n    for(let i = 1; i < (42 - currMonthDays - prevMonthDaysToDisplay); i++) {\n        const node = document.createElement(\"div\");\n\n        if(month + 1 === 12) {\n            node.setAttribute(\"year\", year + 1);\n            node.setAttribute(\"month\", 0 );\n            node.setAttribute(\"day\", i);\n        } else {\n            node.setAttribute(\"year\", year);\n            node.setAttribute(\"month\", month + 1);\n            node.setAttribute(\"day\", i);\n        }\n\n        node.classList.add(\"calendar__box-content\", \"dark\");\n        node.innerHTML =`<div class=\"calendar__date\">${i}</div>`;\n\n        datesArr.push(node);\n    }\n\n    return (datesArr);\n};\n\nconst clearCalendarContent = () => {\n    const contentNodes = _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarContent();\n\n    contentNodes.forEach((item, index, arr) => {\n        item.parentNode.removeChild(item);\n    });\n};\n\n\n// exported functions ==========\nconst calendarView = {\n\n    clearCalendar: function() {\n        this.clearHeading();\n        clearCalendarContent();\n    },\n\n    printCalendarDays: function(month, year) {\n        const datesArr = getCalendarArray(month, year);\n\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarBoxes\n            .forEach((item, index, arr) => {\n                item.appendChild(datesArr[index]);\n            });\n\n    },\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/_calendarView.js?");

/***/ }),

/***/ "./public/js/app/views/_headingView.js":
/*!*********************************************!*\
  !*** ./public/js/app/views/_headingView.js ***!
  \*********************************************/
/*! exports provided: headingView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headingView\", function() { return headingView; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseView */ \"./public/js/app/views/_baseView.js\");\n\n\n\n\n\nconst monthArr = _baseView__WEBPACK_IMPORTED_MODULE_3__[\"baseView\"].monthArr;\n\n\nconst headingView = {\n    \n    clearHeading: function() {\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarHeading.innerHTML = \"\";\n    },\n\n    printHeading: function() {\n        const node = document.createElement(\"div\");\n        node.classList.add(\"calendar__heading-items\");\n        node.innerHTML =`\n            <span class=\"calendar__heading-month\">${monthArr[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].headingMonth]}</span>\n            <span class=\"calendar__heading-year\">${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].headingYear}</span>`\n            ;\n\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarHeading.appendChild(node);\n    },\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/_headingView.js?");

/***/ }),

/***/ "./public/js/app/views/_highlightView.js":
/*!***********************************************!*\
  !*** ./public/js/app/views/_highlightView.js ***!
  \***********************************************/
/*! exports provided: highlightView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightView\", function() { return highlightView; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n\n\n\n\nconst highlightView = {\n    \n    initialHighlight: function() {\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarContent().forEach((item, index, arr) => {\n            if( parseInt(item.getAttribute(\"day\")) === _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedDay\n                && parseInt(item.getAttribute(\"month\")) === _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedMonth\n                && parseInt(item.getAttribute(\"year\")) === _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedYear)\n                {\n                console.log(item);\n                _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].indexOfBox = parseInt(item.parentNode.getAttribute(\"index\"));\n            }\n\n        });\n\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedBox = _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarContent()[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].indexOfBox];\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedBox.classList.add(\"highlight\");\n    },\n\n    updateHighlight: (event) => {\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].indexOfBox = parseInt(event.target.parentNode.getAttribute(\"index\"));\n\n        try {\n            _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedBox.classList.remove(\"highlight\");\n        }  catch(err) {\n            console.log(\"first box selected\");\n        }\n\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedBox = _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarContent()[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].indexOfBox];\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedBox.classList.add(\"highlight\");\n    },\n\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/_highlightView.js?");

/***/ }),

/***/ "./public/js/app/views/_selectedView.js":
/*!**********************************************!*\
  !*** ./public/js/app/views/_selectedView.js ***!
  \**********************************************/
/*! exports provided: selectedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedView\", function() { return selectedView; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _baseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseView */ \"./public/js/app/views/_baseView.js\");\n\n\n\n\n\nconst monthArr = _baseView__WEBPACK_IMPORTED_MODULE_3__[\"baseView\"].monthArr;\n\n\nconst selectedView = {\n\n    clearSelected: function() {\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarSelected.innerHTML = \"\";\n    },\n\n    printSelected: function() {\n        // const dateString = new Date(year, month, day).toDateString();\n\n        const node = document.createElement(\"div\");\n        node.classList.add(\"calendar__selected-items\");\n        node.innerHTML =`\n            <span class=\"calendar__selected-day\">${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedDay}</span>\n            <span class=\"calendar__selected-month\">${monthArr[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedMonth]}</span>\n            <span class=\"calendar__selected-year\">${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].selectedYear}</span>`\n            ;\n\n        _elements__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].calendarSelected.appendChild(node);\n    },\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/_selectedView.js?");

/***/ }),

/***/ "./public/js/app/views/view.js":
/*!*************************************!*\
  !*** ./public/js/app/views/view.js ***!
  \*************************************/
/*! exports provided: VIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEW\", function() { return VIEW; });\n/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model */ \"./public/js/app/models/model.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./public/js/app/state.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements */ \"./public/js/app/elements.js\");\n/* harmony import */ var _calendarView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_calendarView */ \"./public/js/app/views/_calendarView.js\");\n/* harmony import */ var _headingView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_headingView */ \"./public/js/app/views/_headingView.js\");\n/* harmony import */ var _selectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_selectedView */ \"./public/js/app/views/_selectedView.js\");\n/* harmony import */ var _highlightView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_highlightView */ \"./public/js/app/views/_highlightView.js\");\n\n\n\n\n\n\n\n\n\n\nconst VIEW = {\n\n    ..._calendarView__WEBPACK_IMPORTED_MODULE_3__[\"calendarView\"],\n\n    ..._headingView__WEBPACK_IMPORTED_MODULE_4__[\"headingView\"],\n\n    ..._selectedView__WEBPACK_IMPORTED_MODULE_5__[\"selectedView\"],\n\n    ..._highlightView__WEBPACK_IMPORTED_MODULE_6__[\"highlightView\"],\n\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/app/views/view.js?");

/***/ })

/******/ });