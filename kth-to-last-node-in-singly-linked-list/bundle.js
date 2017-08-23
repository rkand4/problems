/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__ = __webpack_require__(1);
/*********
import a single object from a file

import { scratch } from './scratch';
*********/

/*********
import a multiple objects from a file via object destructuring

import { fn1, fn2 } from './scratch';
*********/

// import { binarySearch } from './scratch';



/*********
Set global window so we can manipulate in the browser

window.scratch = scratch;
*********/
// *
// * *  *
// **** *
// ******
// ******

const a = new __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["a" /* LinkedListNode */]("Angel Food");
const b = new __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["a" /* LinkedListNode */]("Bundt");
const c = new __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["a" /* LinkedListNode */]("Cheese");
const d = new __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["a" /* LinkedListNode */]("Devil's Food");
const e = new __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["a" /* LinkedListNode */]("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

window.a = a;
window.b = b;
window.c = c;
window.d = d;
window.e = e;
window.kthToLastNode = __WEBPACK_IMPORTED_MODULE_0__kthToLastNode__["b" /* kthToLastNode */];


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/


/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/


/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

const LinkedListNode = function(value) {
  this.value = value;
  this.next = null;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedListNode;


// export const kthToLastNode = (k, head) => {
//   // Create two node references: ahead and behind
//   // Initialize ahead to the head of the list
//   // Initialize behind to the head of the list
//   let ahead = head;
//   let behind = head;
//
//   // Iterate ahead k nodes into the list
//   let count = 0;
//   while (ahead && count < k) {
//     ahead = ahead.next;
//     count++;
//   }
//
//   // Return null if k is greater than size of linked list
//   if (count < k && ahead === null) { return null; }
//
//   // Iterate each node 1 step into the list until ahead reach null
//   while (ahead) {
//     ahead = ahead.next;
//     behind = behind.next;
//   }
//
//   // Return behind
//   return behind;
// };

const kthToLastNode = (k, head) => {
  // Create two node references: ahead and behind
  // Initialize ahead to the head of the list
  // Initialize behind to the head of the list
  let ahead = head;
  let behind = head;

  // Iterate ahead k nodes into the list
  let count = 0;
  while (ahead) {
    ahead = ahead.next;
    count++;
    if (count > k) {
      behind = behind.next;
    }
  }

  // Return null if k is greater than size of linked list
  if (count < k && ahead === null) { return null; }

  // Return behind
  return behind;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = kthToLastNode;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map