#!/usr/bin/env node
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _this = this;

var post = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(JSON.stringify(sandwiches));
            console.log(JSON.stringify(soups));

            // const res = await M.post('statuses', { status })
            // if (/error/.test(res.data)) console.log(res.data)
            // setTimeout(async () => {
            //   await post()
            // }, 3600000)

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function post() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(/*! envkey */ "envkey");
var Mastodon = __webpack_require__(/*! mastodon-api */ "mastodon-api");
var tabletojson = __webpack_require__(/*! tabletojson */ "tabletojson");

var M = new Mastodon({
  access_token: process.env.ACCESS_TOKEN,
  api_url: 'https://bofa.lol/api/v1/'
});

var sandwiches = void 0,
    soups = void 0;
tabletojson.convertUrl('https://en.wikipedia.org/wiki/List_of_sandwiches', function (json) {
  sandwiches = json;
});
tabletojson.convertUrl('https://en.wikipedia.org/wiki/List_of_soups', function (json) {
  soups = json;
});

;_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return post();

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, _this);
}))();

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi babel-polyfill ./app.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./app.js */"./app.js");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "envkey":
/*!*************************!*\
  !*** external "envkey" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("envkey");

/***/ }),

/***/ "mastodon-api":
/*!*******************************!*\
  !*** external "mastodon-api" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mastodon-api");

/***/ }),

/***/ "tabletojson":
/*!******************************!*\
  !*** external "tabletojson" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tabletojson");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map