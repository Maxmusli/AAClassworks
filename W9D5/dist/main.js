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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n}\n\nDOMNodeCollection.prototype.html = function(str) {\n  if (str) {\n    for (let i = 0; i < this.arr.length; i++) {\n      this.arr[i].innerHTML = str;\n    }\n  } else {\n    return this.arr[0].innerHTML;\n  }\n};\n\nDOMNodeCollection.prototype.empty = function() {\n  for (let i = 0; i < this.arr.length; i++) {\n    this.arr[i].innerHTML = \"\";\n  }\n};\n\nDOMNodeCollection.prototype.append = function(arg) {\n  // accepts either collection, HTML element, or a string\n  switch (arg) {\n    case arg instanceof HTMLElement:\n      for(let i = 0; i < this.arr.length; i++) {\n        let node = this.arr[i];\n        node.innerHTML += arg.outerHTML;\n      }\n      break;\n    case typeof arg === \"string\":\n      for(let i = 0; i < this.arr.length; i++) {\n        let node = this.arr[i];\n        node.innerHTML += arg;\n      }\n      break;\n    case arg instanceof DOMNodeCollection:\n      let inners = \"\";\n      \n      for(let i = 0; i< arg.length; i++) {\n        inners += ars[i].outerHTML;\n      }\n\n      for(let i = 0; i < this.arr.length; i++) {\n        let node = this.arr[i];\n        node.innerHTML += inners;\n      }\n      break;\n  }\n};\n\nDOMNodeCollection.prototype.attr = function(attribute) {\n  for (let i = 0; i < this.arr.length; i++) {\n    let node = this.arr[i];\n    console.log(node);\n  }\n};\n\nDOMNodeCollection.prototype.addClass = function() {\n\n};\n\nDOMNodeCollection.prototype.removeClass = function() {\n\n};\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n  if (typeof arg === \"string\") {\n    let nodeList = document.querySelectorAll(arg);\n    nodeList = Array.from(nodeList);\n    return nodeList;\n\n  } else if (arg instanceof HTMLElement){\n    arg = Array.from(arg);\n    return DOMNodeCollection(arg);\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });