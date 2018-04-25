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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/controls.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other */ \"./src/js/other.js\");\n\n\n\n\nlet toggleDisplay = function (elem) {\n\tconsole.log(_other__WEBPACK_IMPORTED_MODULE_0__[\"wombat\"]);\n\t// Bug Fix: The first instance on page load\n\t// does not register the display block style,\n\t// even when added explicitly in main.css.\n\tif (elem.style.display === '') {\n\t\telem.style.display = 'none';\n\n\t} else {\n\t\telem.style.display = (elem.style.display === 'block') ? 'none' : 'block';\n\t}\n};\n\n\nlet toggleUserDetails = function(event) { // eslint-disable-line no-unused-vars\n\tlet userElems = Array.prototype.slice.call(event.target.parentNode.children);\n\n\tfor (let i = 0; i < userElems.length; i++) {\n\t\tlet elem = userElems[i];\n\n\t\tif (elem.nodeName === 'H3') {\n\t\t\ttoggleDisplay(elem);\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack:///./src/js/controls.js?");

/***/ }),

/***/ "./src/js/other.js":
/*!*************************!*\
  !*** ./src/js/other.js ***!
  \*************************/
/*! exports provided: wombat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wombat\", function() { return wombat; });\nconst wombat = \"wombat\";\n\n\n//# sourceURL=webpack:///./src/js/other.js?");

/***/ })

/******/ });