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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// initialize bot
var warmUp = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = Promise;
            _context3.next = 4;
            return tab2json('https://en.wikipedia.org/wiki/List_of_soups');

          case 4:
            _context3.t1 = _context3.sent;
            _context3.next = 7;
            return tab2json('https://en.wikipedia.org/wiki/List_of_sandwiches');

          case 7:
            _context3.t2 = _context3.sent;
            _context3.t3 = [_context3.t1, _context3.t2];
            return _context3.abrupt('return', _context3.t0.all.call(_context3.t0, _context3.t3));

          case 12:
            _context3.prev = 12;
            _context3.t4 = _context3['catch'](0);
            throw _context3.t4;

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 12]]);
  }));

  return function warmUp() {
    return _ref5.apply(this, arguments);
  };
}();

// get random food item


// get image for food item
var getImg = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(img) {
    var extRegex, ext, filename;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            extRegex = new RegExp(/(?:\.)([0-9a-z]+$)/);
            ext = void 0, filename = void 0;

            // console.log(`img: ${img}`)

            if (!is.str(img)) {
              _context4.next = 21;
              break;
            }

            ext = extRegex.exec(img);

            if (is.bad(ext)) {
              _context4.next = 9;
              break;
            }

            ext = ext[1].toLowerCase();
            // console.log(`ext: ${ext}`)
            _context4.next = 10;
            break;

          case 9:
            return _context4.abrupt('return', null);

          case 10:
            if (!is.str(ext)) {
              _context4.next = 18;
              break;
            }

            // console.log(`img_in: ${img}`)
            img = img.replace(/thumb\//g, '').replace(/(\/\d*px-)/g, '/').replace(/\/[a-zA-Z0-9%$!#^&()_.-]*.{3,4}$/, '');
            // console.log(`img_out: ${img}`)
            filename = './img/' + img.replace(/\/|\./g, '_') + '.' + ext;

            if (!fs.existsSync(filename)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt('return', filename);

          case 15:
            return _context4.abrupt('return', axios({
              responseType: 'stream',
              url: 'https://' + img,
              method: 'get'
            }).then(function (response) {
              // console.log(`filename: ${typeof filename} ${filename}`)
              response.data.pipe(fs.createWriteStream(filename));
              return filename;
            }));

          case 18:
            return _context4.abrupt('return', null);

          case 19:
            _context4.next = 22;
            break;

          case 21:
            return _context4.abrupt('return', null);

          case 22:
            _context4.next = 27;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4['catch'](0);
            throw _context4.t0;

          case 27:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 24]]);
  }));

  return function getImg(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

// upload media


var upload = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(imgs) {
    var out, i, img, res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            out = [];
            _context5.prev = 1;
            i = 0;

          case 3:
            if (!(i <= imgs.length)) {
              _context5.next = 15;
              break;
            }

            if (!(i === imgs.length)) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', out);

          case 6:
            img = imgs[i];
            // console.log(`stream: ${img}`)

            if (is.bad(img)) {
              _context5.next = 12;
              break;
            }

            _context5.next = 10;
            return M.post('media', {
              file: fs.createReadStream(img)
            });

          case 10:
            res = _context5.sent;

            // console.log(JSON.stringify(res.data))
            if (/missing/g.test(res.data.url)) {
              out.push(undefined);
            } else {
              out.push(res.data.id);
            }

          case 12:
            i++;
            _context5.next = 3;
            break;

          case 15:
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5['catch'](1);
            throw _context5.t0;

          case 20:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[1, 17]]);
  }));

  return function upload(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

// filter text


// generate post
var post = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(soups, sandwiches) {
    var _getFood, _getFood2, soup, soupImg, _getFood3, _getFood4, sand, sandImg, imgIn, imgOut, media_ids, status, res;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            // console.log('Creating post')
            _getFood = getFood(soups), _getFood2 = _slicedToArray(_getFood, 2), soup = _getFood2[0], soupImg = _getFood2[1];
            _getFood3 = getFood(sandwiches), _getFood4 = _slicedToArray(_getFood3, 2), sand = _getFood4[0], sandImg = _getFood4[1];
            imgIn = [soupImg, sandImg];
            _context6.next = 6;
            return Promise.all([getImg(imgIn[0]), getImg(imgIn[1])]);

          case 6:
            imgOut = _context6.sent;
            _context6.next = 9;
            return upload(imgOut);

          case 9:
            media_ids = _context6.sent;

            // console.log(`media_ids: ${mediva_ids}`)

            status = '\uD83E\uDD63  ' + txtFilter(soup.Name) + (is.bad(soup.Origin) ? '' : ' [' + txtFilter(soup.Origin) + ']') + ' n\' \uD83E\uDD6A  ' + txtFilter(sand.Name) + (is.bad(sand.Origin) ? '' : ' [' + txtFilter(sand.Origin) + ']');

            console.log('status: ' + status);

            _context6.next = 14;
            return M.post('statuses', { status: status, media_ids: media_ids });

          case 14:
            res = _context6.sent;

            if (/error/.test(res.data)) console.log(res.data);
            _context6.next = 21;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6['catch'](0);
            throw _context6.t0;

          case 21:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 18]]);
  }));

  return function post(_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(/*! now-env */ "now-env");

var axios = __webpack_require__(/*! axios */ "axios");
var express = __webpack_require__(/*! express */ "express");
var Entities = __webpack_require__(/*! html-entities */ "html-entities").XmlEntities;
var fs = __webpack_require__(/*! fs */ "fs");
var is = __webpack_require__(/*! typa */ "typa");
var Mastodon = __webpack_require__(/*! mastodon-api */ "mastodon-api");
var striptags = __webpack_require__(/*! striptags */ "striptags");
var tabletojson = __webpack_require__(/*! tabletojson */ "tabletojson");

// initialize express
var app = express();
app.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _ref2, _ref3, soups, sandwiches;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return warmUp();

          case 3:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            soups = _ref3[0];
            sandwiches = _ref3[1];
            _context.next = 9;
            return post(soups, sandwiches);

          case 9:
            res.send('Success');
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            res.send(_context.t0);
            throw _context.t0;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(8082, function () {
  return console.log('Listening on port 8082!');
});

// initialize html entity converter
var entities = new Entities();

// initialize mastodon api
var M = new Mastodon({
  access_token: process.env.ACCESS_TOKEN,
  api_url: 'https://bofa.lol/api/v1/'
});

// download convert html table to json
function tab2json(url) {
  var _this2 = this;

  try {
    return new Promise(function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(url);

              case 2:
                data = _context2.sent;

                data = data.data;
                data = tabletojson.convert(data, {
                  stripHtmlFromCells: false,
                  stripHtmlFromHeadings: true
                });
                if (/error/.test(data)) reject(data);
                resolve(data[0]);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  } catch (err) {
    throw err;
  }
}function getFood(food) {
  // console.log('Getting food item')
  var urlRegex = new RegExp(/(?:src=\"\/\/)(.*?)(?:\")/g);
  try {
    var item = food[Math.floor(Math.random() * food.length)];
    var img = urlRegex.exec(item.Image);
    return [item, !is.bad(img) ? img[1] : null];
  } catch (err) {
    throw err;
  }
}function txtFilter(text) {
  return striptags(entities.decode(text).replace(/\[.*\]/, '').replace(/\n/, ''));
}

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),

/***/ "mastodon-api":
/*!*******************************!*\
  !*** external "mastodon-api" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mastodon-api");

/***/ }),

/***/ "now-env":
/*!**************************!*\
  !*** external "now-env" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("now-env");

/***/ }),

/***/ "striptags":
/*!****************************!*\
  !*** external "striptags" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("striptags");

/***/ }),

/***/ "tabletojson":
/*!******************************!*\
  !*** external "tabletojson" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tabletojson");

/***/ }),

/***/ "typa":
/*!***********************!*\
  !*** external "typa" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typa");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map