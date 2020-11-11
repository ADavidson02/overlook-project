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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n.guest-login {\n  color: #F2D388;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  size: 20em;\n  margin: 2em;\n  color: #414141; }\n\n.new-reservation-button, .home-button-manager, .home-button-guest, .search-guest-view-button, .book-room {\n  background-color: #F2D388;\n  border: none;\n  color: #414141;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em;\n  margin-left: 2em; }\n\n.manager-login, .reservation-search-button, .search-name, .filter-search, .search-filtered {\n  background-color: #874C62;\n  border: none;\n  color: #FFFFFF;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin: 4em 0 2em 0; }\n\n.book-room {\n  margin: 0 0 .5em 0; }\n\n.manager, .search-guest, .manager-dashboard {\n  color: #414141;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: -8px 2px 9px 8px; }\n\n.hidden {\n  display: none; }\n\n.hidden {\n  display: none; }\n\n.rooms-available {\n  color: #414141; }\n\nnav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  left: 0px;\n  right: 0px;\n  height: 3.3em; }\n\nbody {\n  background: #A7D2CB;\n  background-image: url(\"https://image.freepik.com/free-vector/vector-floral-3d-seamless-pattern-background-christmas-invitation-cards-decoration_1284-41314.jpg\");\n  background-position: repeat;\n  font-family: \"Open Sans\";\n  margin: 38px 0px 0px 0px; }\n\n.title {\n  padding: 12em, 0, 0, 0;\n  color: #414141;\n  display: flex;\n  justify-content: center;\n  size: 20em; }\n\nnav ul {\n  background: #874C62;\n  width: 100%;\n  color: #414141;\n  margin: 0;\n  padding: 0.5em; }\n\nnav li {\n  display: inline;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 40px;\n  margin-bottom: 10em; }\n\n.today {\n  color: #414141;\n  size: 23em; }\n\n.center, .new-reservation-search, .date-search-results, .login {\n  background-color: #A7D2CB;\n  box-sizing: content-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 2em 0 0em 1em;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n  -moz-box-shadow: 0 10px 6px -6px #777;\n  box-shadow: 0 10px 6px -6px #777; }\n\n.hidden {\n  display: none; }\n\n.password-error,\n.username-error {\n  color: #980008;\n  text: 4em; }\n\n.turing-logo {\n  display: block;\n  size: 10em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/buttons.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/buttons.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".guest-login {\n  color: #F2D388;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  size: 20em;\n  margin: 2em;\n  color: #414141; }\n\n.new-reservation-button, .home-button-manager, .home-button-guest, .search-guest-view-button, .book-room {\n  background-color: #F2D388;\n  border: none;\n  color: #414141;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em;\n  margin-left: 2em; }\n\n.manager-login, .reservation-search-button, .search-name, .filter-search, .search-filtered {\n  background-color: #874C62;\n  border: none;\n  color: #FFFFFF;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin: 4em 0 2em 0; }\n\n.book-room {\n  margin: 0 0 .5em 0; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hidden {\n  display: none; }\n\n.rooms-available {\n  color: #414141; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/manager-view.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/manager-view.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".manager, .search-guest, .manager-dashboard {\n  color: #414141;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: -8px 2px 9px 8px; }\n\n.hidden {\n  display: none; }\n", ""]);



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
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/booking.js":
/*!************************!*\
  !*** ./src/booking.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/room */ "./src/room.js");
 


class Booking {
  constructor(booking) {
    this.booking = booking;
  }
  
  
  availableRooms(date, passedRoomData, passedBookData) {
    let newDate = date.split('-').join('/')
    let foundReservations = this.findReservations(newDate, passedBookData)
    console.log('reservations', foundReservations)
    let takenRooms = []
    let busyRooms = passedRoomData.filter(room => {
        foundReservations.forEach(booking => {
          if(room.number === booking.roomNumber)
            takenRooms.push(room)
          }) 
        })
    let roomsForRent = this.roomAvailable(takenRooms, passedRoomData)
    return roomsForRent
  }
  
  roomAvailable(occupiedRooms, passedRoomData) {
    let final = passedRoomData.filter(room => {
        if(!occupiedRooms.includes(room)) {
          return room 
        }
    })
    console.log('rooms available', final)
    return final 
  }

  
  availableRoomAmount(date, passedBookData) {
    let occupiedRoom = passedBookData.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(date, passedRoomData, passedBookData) {
    let total = 0
    let list = this.findReservations(date, passedBookData);
     list.forEach(reservation => {
      passedRoomData.forEach(hotelRoom => {
        if(hotelRoom.number === reservation.roomNumber)
        total += hotelRoom.costPerNight
      });
    });
    let finalAmount = (Math.round(total * 1000) / 1000)
    return `$${finalAmount}`;
  }

  findReservations(date, passedBookData) {
    return passedBookData.filter(booking => {
    return booking.date === date
    })
  }
  
  occupancyTotal(date, passedRoomData, passedBookData) {
    let takenRooms = this.findReservations(date, passedBookData)
    console.log('takenrooms', takenRooms)
    let total = takenRooms.length / passedRoomData.length
    let final = (total * 100)
    return `${final}%`
  }

}

  /* harmony default export */ __webpack_exports__["default"] = (Booking); 


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/buttons.scss":
/*!******************************!*\
  !*** ./src/css/buttons.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./buttons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/buttons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/guest-view.scss":
/*!*********************************!*\
  !*** ./src/css/guest-view.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./guest-view.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/manager-view.scss":
/*!***********************************!*\
  !*** ./src/css/manager-view.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./manager-view.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/manager-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/dom-display.js":
/*!****************************!*\
  !*** ./src/dom-display.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/sample-user-data.js */ "./test/sample-user-data.js");
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/sample-bookings-data.js */ "./test/sample-bookings-data.js");
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test/sample-room-data.js */ "./test/sample-room-data.js");
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/user */ "./src/user.js");
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/room */ "./src/room.js");
/* harmony import */ var _src_booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/booking */ "./src/booking.js");
/* harmony import */ var _src_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/manager */ "./src/manager.js");







let booking = new _src_booking__WEBPACK_IMPORTED_MODULE_5__["default"](_test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1___default.a)
let room = new _src_room__WEBPACK_IMPORTED_MODULE_4__["default"](_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2___default.a)
let user = new _src_user__WEBPACK_IMPORTED_MODULE_3__["default"](_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0___default.a)
let manager = new _src_manager__WEBPACK_IMPORTED_MODULE_6__["default"]()
let available;
let addBookButton

let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
let guestBookingDisplay = document.querySelector('.guest-bookings-display');
let guestTotalSpent = document.querySelector('.guest-total-spent');
let searchedGuestResult = document.querySelector('.user-search-results')
const searchDateResults = document.querySelector('.date-search-results');


const domUpdates = { 
  todaysAvailable(date, passedBookingData) {
    let emptyRooms = booking.availableRoomAmount(date, passedBookingData.bookings);
  
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `

    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, passedRoomData, passedBookData) {
    let total = booking.totalRevenue(date, passedRoomData, passedBookData);
    let todaysTotal = 
    ` 
    <div class="todays-total">
    <h3>${total}</h3>
    </div>
    `
    hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
  },

  todaysOccupancy(date, passedRoomData, passedBookData) {
    let todaysPercentage = booking.occupancyTotal(date, passedRoomData.rooms, passedBookData.bookings);
    let todaysPercent = 
    `
    <div class="todays-occupancy">
    <h3>${todaysPercentage}</h3>
    </div>
    `
    hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
  },
  
  displayGuestBookings(data) {
    data.forEach(bookingInfo=> {
      let guestBookings = 
      `
      <div class="current-guest-bookings">
        <h3>Date: ${bookingInfo.date}</h3>
        <p>Room type: ${bookingInfo.roomInfo.roomType}</p>
        <p>Bidet: ${bookingInfo.roomInfo.bidet}</p>
        <p>Bedsize: ${bookingInfo.roomInfo.bedSize}</p>
        <p>number of beds: ${bookingInfo.roomInfo.numBeds}</p>
        <p>cost per night: ${bookingInfo.roomInfo.costPerNight}</p>
      </div>
      `
      guestBookingDisplay.insertAdjacentHTML('beforeend', guestBookings)
    });
  },
  
  displayguestTotal(id, passedRoomData, passedBookData) {
    let grandTotal = user.findTotalSpent(id, passedRoomData.rooms, passedBookData.bookings)
    let total = 
    `
    <div class="guest-total">
      <h3>${grandTotal}</h3>
    </div>
    `
    guestTotalSpent.insertAdjacentHTML('beforeend', total)
  },
  
  displaySearchedGuestName(name) {
    let displayName = 
      `
      <div class="searched-name">
        <h3>Guest: ${name}</h3>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('afterbegin', displayName)
  }, 

  displaySearchedGuestBookings(name, passedUserData, passedBookData) {
    let searchedGuestBookings = manager.findGuestBookings(name.id, passedUserData, passedBookData)
    if (searchedGuestBookings === undefined) {
      let displaySearchedGuest = 
      `
      <div class="found-guest-result">
        <h2>Sorry there were no bookings found for the searched name</h2>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('beforeend', displaySearchedGuest)
    } else {
      searchedGuestBookings.forEach( booking => {
        let displaySearchedGuest = 
        `
        <div class="found-guest-result">
          <p>${booking.date}</p>
        </div>
        `
        searchedGuestResult.insertAdjacentHTML('beforeend', displaySearchedGuest)
    })
    }
  },
  
  displaySearchedGuestTotal(searchName, passedUserData, passedRoomData, passedBookData) {
    let currentTotal = manager.amountSpent(searchName, passedUserData, passedRoomData, passedBookData)
    let displayTotal =
    `
    <div class="found-guest-total">
      <h3>Total amount spent ${ currentTotal}</h3>
    </div>  
    `
    searchedGuestResult.insertAdjacentHTML('afterend', displayTotal)
  },
  
  roomResults(searchDate, passedRoomData, passedBookData){ 
     available = booking.availableRooms(searchDate, passedRoomData, passedBookData)
     if (available.length === 0)  {
       let displayAvailable = 
       `
       <div class="rooms-available">
        <h2> We sincerely apologize but there are no rooms available. Please try another date.</h2>
      </div>
       `
       searchDateResults.insertAdjacentHTML('beforeend', displayAvailable);
     } else {
       available.forEach(room => {
        console.log('roomnum', room.number)
         let displayAvailable = 
         `
         <article class="rooms-available" id="${room.number}">
         <h3>Room type ${room.roomType}</h3>
         <p>Equipped with bidet ${room.bidet}</p>
         <p>Bed size ${room.bedSize}</p>
         <p>Number of beds ${room.numBeds}</p>
         <p>Price per night $${room.costPerNight}</p>
         <button class="book-room">Book</button>
         </article>
         `
         addBookButton = document.querySelector('.book-button');
         searchDateResults.insertAdjacentHTML('beforeend', displayAvailable);
       })
     }
  },
  
  showFiltered(filterInput) {
    searchDateResults.innerHTML = '';
    let filtered = room.filterType(filterInput, available)
    console.log('filtered', filtered)
    if (filtered === undefined) {
      let displayFiltered =
      `
      <div class="rooms-available">
       <h2> We sincerely apologize but there are no rooms available for that date and filter combination. Please alter your search and try again.</h2>
     </div>
      `
      searchDateResults.insertAdjacentHTML('afterbegin', displayFiltered);
    } else {
      filtered.forEach(room => {
        console.log('roomnum', room.number)
        let displayFiltered = 
        `
        <div class="rooms-available" id="${room.number}">
        <h3>Room type ${room.roomType}</h3>
        <p>Equipped with bidet ${room.bidet}</p>
        <p>Bed size ${room.bedSize}</p>
        <p>Number of beds ${room.numBeds}</p>
        <p>Price per night $${room.costPerNight}</p>
        <button class="book-room">Book</button>
        </div>
        `
        addBookButton = document.querySelector('.book-button');
        searchDateResults.insertAdjacentHTML('afterbegin', displayFiltered);
      })
    }
  
  },
}



/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const requests = {
  fetchGuestData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
      .then(response => response.json())
      // .then(data => data.guestData)
      .catch(error => console.log(error))
  },
  
  fetchRoomsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then(response => response.json())
    // .then(data => data.roomsData)
    .catch(error => console.log(error))
  },
  
  fetchBookingsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    // .then(data => data.bookingsData)
    .catch(error => console.log(error))
  },
  
  postNewBooking(userID, date, roomNumber) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: userID,
      date: date,
      roomNumber: roomNumber
  }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  },  
}

/* harmony default export */ __webpack_exports__["default"] = (requests);

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_manager_view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/manager-view.scss */ "./src/css/manager-view.scss");
/* harmony import */ var _css_manager_view_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_manager_view_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_guest_view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/guest-view.scss */ "./src/css/guest-view.scss");
/* harmony import */ var _css_guest_view_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_guest_view_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_buttons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/buttons.scss */ "./src/css/buttons.scss");
/* harmony import */ var _css_buttons_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_buttons_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/user */ "./src/user.js");
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/room */ "./src/room.js");
/* harmony import */ var _src_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/booking */ "./src/booking.js");
/* harmony import */ var _src_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/manager */ "./src/manager.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-display */ "./src/dom-display.js");
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file





// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './index.html'


console.log('This is the JavaScript entry file - your code begins here.');











window.addEventListener('click', windowOnClick);

const loginPage = document.querySelector('.login');
let usernameCaptured = document.querySelector('.username-input');
const passwordCaptured = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const guestViews = document.querySelector('.user-view')
const managerViews = document.querySelector('.manager-view')
const managerDashboard = document.querySelector('.manager-dashboard');
const guestDashboard = document.querySelector('.user-dashboard')
let homeButtonManger = document.querySelector('.home-button-manager');
let homeButtonGuest = document.querySelector('.home-button-guest')
let newReservationButton = document.querySelector('.new-reservation-button');
let searchGuestViewButton = document.querySelector('.search-guest-view-button');
let searchNameButton = document.querySelector('.search-name');
let searchNameInput = document.querySelector('.search-name-input');
let searchGuestTitle = document.querySelector('.search-guest');
let searchedGuestTitle = document.querySelector('.user-search-results');
const newReservatioView = document.querySelector('.new-reservation-search');
const searchForRoom = document.querySelector('.reservation-search-button');
const searchDateInput = document.querySelector('.reservation-calandar'); 
const searchDateResultsView = document.querySelector('.date-results-view');
const roomSearchFilterButton = document.querySelector('.filter-search');
const filterInput = document.querySelector('.filter-input');
const searchFilteredButton = document.querySelector('.search-filtered');
let searchDateResults = document.querySelector('.date-search-results');


let guestData;
let roomsData;
let bookingsData;
let dom
let user
let manager

function hideItem(toHide) {
  toHide.classList.add("hidden");
}
  
function showItem(toShow) {
  toShow.classList.remove("hidden");
}


window.onload = getData;

function getData()  {
  const recievedGuestData = _fetch__WEBPACK_IMPORTED_MODULE_9__["default"].fetchGuestData();
  const recievedRoomData = _fetch__WEBPACK_IMPORTED_MODULE_9__["default"].fetchRoomsData();
  const recievedBookingsData = _fetch__WEBPACK_IMPORTED_MODULE_9__["default"].fetchBookingsData();
  Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
    .then(value => {
      guestData = value[0];
      roomsData = value[1];
      bookingsData = value[2];
    })
}

function windowOnClick(event) {
  if (event.target.classList.contains('manager-login')) {
    checkManagerUsername(usernameCaptured);
    checkForPassword(passwordCaptured);
    manager = new _src_manager__WEBPACK_IMPORTED_MODULE_8__["default"]()
    if(checkManagerUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      let today = getTodaysDate() 
      runManger();
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysAvailable(today, bookingsData);
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysTotalRevenue(today, roomsData.rooms, bookingsData.bookings);
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysOccupancy(today, roomsData, bookingsData);
    }
  }
  if (event.target.classList.contains('guest-login')) {
    checkGuestUsername(usernameCaptured);
    checkForPassword(passwordCaptured);
    if(checkGuestUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      showItem(guestViews)
      showItem(guestDashboard)
      showItem(newReservationButton);
      runGuest()  

    }
  }
  if (event.target.classList.contains('search-guest-view-button')) {
    showItem(searchNameInput);
    showItem(homeButtonManger);
    showItem(newReservationButton);
    showItem(searchGuestTitle);
    showItem(searchNameButton)
    hideItem(managerDashboard);
    hideItem(searchedGuestTitle)
    hideItem(homeButtonGuest)
    hideItem(searchGuestViewButton)
    
  }
  if (event.target.classList.contains('search-name')) {
    showItem(searchedGuestTitle)
    hideItem(searchGuestTitle);
    hideItem(searchNameInput);
    hideItem(searchNameButton);
    hideItem(loginPage)
    searchGuestDatabase(searchNameInput.value, guestData, roomsData, bookingsData)
  }
  if (event.target.classList.contains('home-button-manager')) {
    searchNameInput.value = ' ';
    showItem(managerDashboard)
    hideItem(searchGuestViewButton)
    hideItem(searchNameButton)
    hideItem(searchGuestTitle)
    hideItem(homeButtonManger)
    hideItem(searchNameInput)
    hideItem(searchedGuestTitle)
    hideItem(homeButtonGuest)
    hideItem(searchedGuestTitle)
    showItem(searchNameButton)
  }
  
  if (event.target.classList.contains('new-reservation-button')) {
    showItem(homeButtonGuest)
    showItem(newReservatioView)
    hideItem(guestDashboard)
    hideItem(newReservationButton)
    hideItem(searchDateResultsView)
    hideItem(homeButtonManger)
    hideItem(roomSearchFilterButton)
  }
  
  if (event.target.classList.contains('reservation-search-button')) {
    hideItem(newReservatioView)
    _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].roomResults( searchDateInput.value, roomsData.rooms, bookingsData.bookings)  
    showItem(roomSearchFilterButton)
    showItem(searchDateResultsView)
  }
  
  if (event.target.classList.contains('home-button-guest')) {
    hideItem(searchDateResultsView);
    showItem(guestDashboard);
    showItem(newReservationButton);
    hideItem(homeButtonGuest);
    hideItem(searchFilteredButton);
    hideItem(filterInput)
    hideItem(roomSearchFilterButton)
    filterInput.value = '';
    searchDateResults.innerHTML = '';
  }
  
  if (event.target.classList.contains('filter-search')) {
    showItem(filterInput)
    showItem(searchFilteredButton)
    hideItem(roomSearchFilterButton)
  }
  if (event.target.classList.contains('search-filtered')) {
    debugger
    _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].showFiltered(filterInput.value);
  }
  
  if (event.target.classList.contains('book-room')) {
    console.log('user', +userNumber)
    let roomNumber = event.target.parentNode.id
    let today = getTodaysDate()
    fetch.postNewBooking(+userNumber, today, roomNumber)
  }
}

function checkManagerUsername(inputName) {
  hideItem(usernameError);
  if (inputName.value.length === 0) {
    showItem(usernameError);
    return 
  } else if(inputName.value.length > 0 ) {
    let checkedUsername = inputName.value;
    let loweredUsername = lowerCaseInput(checkedUsername)
    if (loweredUsername !== 'manager') {
      showItem(usernameError)
      return
    } else if (loweredUsername === 'manager')
    hideItem(usernameError)
    return 'good'
  }
} 

function checkForPassword(inputPassword) {
  hideItem(passwordError)
  if (inputPassword.value.length === 0) {
    showItem(passwordError);
    return
  } else if ( inputPassword.value.length > 0) {
    let checkedPassword = inputPassword.value;
    let loweredPassword = lowerCaseInput(checkedPassword);
    if (loweredPassword !== 'overlook2020') {
      showItem(passwordError)
      return
    } else if (loweredPassword === 'overlook2020') {
      return 'good'
    } 
  }
}

function lowerCaseInput(input) {
  return input.toLowerCase()
}

function runManger() {
  hideItem(loginPage);
  hideItem(guestViews);
  hideItem(searchNameButton)
  hideItem(searchNameInput)
  showItem(managerViews);
  showItem(managerDashboard);
  showItem(newReservationButton);
  showItem(searchGuestViewButton);
}

function checkGuestUsername(inputName) {
  hideItem(usernameError)
  if (inputName.value.length === 0) {
    showItem(usernameError);
    return 
  } else if(inputName.value.length > 0 ) {
    let checkedUsername = inputName.value
    let loweredUsername = lowerCaseInput(checkedUsername)
    if (!loweredUsername.includes('customer')) {
      showItem(usernameError)
      return
    } else if (loweredUsername.includes('customer'))
    return 'good'
  }
} 

function runGuest() {
  hideItem(loginPage)
  hideItem(managerViews)
  hideItem(searchDateResultsView)
  let userNumber = usernameCaptured.value.slice(8,10)
  user = new _src_user__WEBPACK_IMPORTED_MODULE_5__["default"](+userNumber)
  
  loadGuestDashboard(+userNumber)
}

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = yyyy + '/' + mm + '/' + dd;
}

function loadGuestDashboard(id) {
  let allGuestBookings = user.findBookings(id, bookingsData.bookings);
  let sortedDates = arrangerByDate(allGuestBookings)
  let allDetails = getDetails(sortedDates)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displayGuestBookings(allDetails)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displayguestTotal(id, roomsData, bookingsData)
}

function arrangerByDate(guestReservations) {
  return guestReservations.sort((a,b) => {
    return new Date(b.date) - new Date(a.date)
  })
}

function getDetails(data) {
  return data.reduce((allDetails, reservation) => {
    roomsData.rooms.forEach(room => {
      if(room.number === reservation.roomNumber) {
        allDetails.push({'date':reservation.date, 'roomInfo': room})
      }
    })
    return allDetails
  }, [])
}

function searchGuestDatabase(name, passedUserData, passedRoomData, passedBookData) {
  let searchedGuest = manager.findGuest(searchNameInput.value, guestData.users)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchedGuestBookings(searchedGuest, guestData, bookingsData.bookings)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchedGuestName(searchNameInput.value)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchedGuestTotal(searchNameInput.value, guestData.users, roomsData.rooms, bookingsData.bookings)
  searchNameInput.value = " "
}



/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/sample-user-data.js */ "./test/sample-user-data.js");
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/sample-bookings-data.js */ "./test/sample-bookings-data.js");
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test/sample-room-data.js */ "./test/sample-room-data.js");
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/user */ "./src/user.js");




let user = new _src_user__WEBPACK_IMPORTED_MODULE_3__["default"](_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0___default.a);

class Manager {
  constructor() {
  }
  
  findGuest(name, passedUserData) {
    if ( name === undefined) {
      return 
    }
   let searchName = name.replace(/\w\S*/g, function(name){return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();});
    let foundUser = passedUserData.find(user => {
    if(user.name === searchName) {
      return user
    }
   })
   if(foundUser !== undefined) {
     return foundUser
   } else if ( foundUser === undefined) {
     return `Sorry no user was found with the name ${name}`
   }
  }
  

  findGuestBookings(name, passedUserData, passedBookData) {
  let foundGuest = this.findGuest(name, passedUserData)
  if (foundGuest === undefined) {
    return 
  }
  let foundBookings = user.findBookings(foundGuest.id, passedBookData)
  
  return foundBookings
  }
  
  amountSpent(searchName, passedUserData, passedRoomData, passedBookData) {
    let foundGuest = this.findGuest(searchName, passedUserData)
    if (foundGuest === undefined) {
      return 
    }
    let foundTotal = user.findTotalSpent(foundGuest.id, passedRoomData, passedBookData);
    return foundTotal
  } 
}
/* harmony default export */ __webpack_exports__["default"] = (Manager);



/***/ }),

/***/ "./src/room.js":
/*!*********************!*\
  !*** ./src/room.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/sample-room-data.js */ "./test/sample-room-data.js");
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_0__);



class Room {
  constructor (roomData) {
    this.roomData = roomData;
  }
  
  filterType(input, passedRoomData) {
    console.log('roomjs', passedRoomData)
    let checkInput = input.toLowerCase()
    let choices = passedRoomData.reduce((results, room) => {
      if(room.roomType.includes(checkInput)) {
        results.push(room)
      }
        return results
    }, [])
    if(choices.length > 0) {
      return choices
    } else {
      return undefined
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/booking */ "./src/booking.js");
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/room */ "./src/room.js");
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test/sample-bookings-data.js */ "./test/sample-bookings-data.js");
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test/sample-room-data.js */ "./test/sample-room-data.js");
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test/sample-user-data.js */ "./test/sample-user-data.js");
/* harmony import */ var _test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_4__);






class User  {
  constructor (guestData){
    this.guestData = guestData;
  }
  
  findBookings(passedId, passedBookData) {
    let thisBookings = passedBookData.reduce((allUserBooking, booking) => {
      if (booking.userID === passedId) {
        allUserBooking.push(booking)
      }
      return allUserBooking
    }, [])
    return thisBookings
  }
  
  findTotalSpent(passedId, passedRoomData, passedBookData) {
    let userBookings = this.findBookings(passedId, passedBookData);
    let grandTotal = userBookings.reduce((total, booking) => {
       passedRoomData.forEach(room => {
        if(booking.roomNumber === room.number) {
          total += room.costPerNight
        }
      })
      return (Math.round(total * 1000) / 1000)
    }, 0)
    return `$${grandTotal}`
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./test/sample-bookings-data.js":
/*!**************************************!*\
  !*** ./test/sample-bookings-data.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const bookingsData = [
  {"id":"5fwrgu4i7k55hl6sz","userID":9,"date":"2020/04/22","roomNumber":15,"roomServiceCharges":[]},
  {"id":"5fwrgu4i7k55hl6t5","userID":43,"date":"2020/01/24","roomNumber":24,"roomServiceCharges":[]},
  {"id":"5fwrgu4i7k55hl6t6","userID":13,"date":"2020/01/10","roomNumber":12,"roomServiceCharges":[]},
  {"id":"5fwrgu4i7k55hl6t7","userID":20,"date":"2020/02/16","roomNumber":7,"roomServiceCharges":[]}
]

module.exports = bookingsData;

/***/ }),

/***/ "./test/sample-room-data.js":
/*!**********************************!*\
  !*** ./test/sample-room-data.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



const roomData = [
  {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
  {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
  {"number":7,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":2,"costPerNight":231.46},
  {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},
  {"number":24,"roomType":"suite","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":327.24}
]

module.exports = roomData;



/***/ }),

/***/ "./test/sample-user-data.js":
/*!**********************************!*\
  !*** ./test/sample-user-data.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const userData = [
  {"id":1,"name":"Leatha Ullrich"},
  {"id":2,"name":"Rocio Schuster"},
  {"id":43,"name":"Earline Hamill"},
  {"id":20,"name":"Keon Kirlin"},
]

module.exports = userData;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9idXR0b25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ndWVzdC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYW5hZ2VyLXZpZXcuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9idXR0b25zLnNjc3M/NzZmNyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2d1ZXN0LXZpZXcuc2Nzcz9mYTc5Iiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFuYWdlci12aWV3LnNjc3M/M2EyYSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhbXBsZS11c2VyLWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyx1RkFBdUYsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixlQUFlLGdCQUFnQixtQkFBbUIsRUFBRSw4R0FBOEcsOEJBQThCLGlCQUFpQixtQkFBbUIsdUJBQXVCLG1CQUFtQixxQkFBcUIscUJBQXFCLEVBQUUsZ0dBQWdHLDhCQUE4QixpQkFBaUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsd0JBQXdCLEVBQUUsZ0JBQWdCLHVCQUF1QixFQUFFLGlEQUFpRCxtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIseUJBQXlCLDhCQUE4QixFQUFFLGFBQWEsa0JBQWtCLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxzQkFBc0IsbUJBQW1CLEVBQUUsU0FBUyxrQkFBa0Isd0JBQXdCLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLEVBQUUsVUFBVSx3QkFBd0IsdUtBQXVLLGdDQUFnQywrQkFBK0IsNkJBQTZCLEVBQUUsWUFBWSwyQkFBMkIsbUJBQW1CLGtCQUFrQiw0QkFBNEIsZUFBZSxFQUFFLFlBQVksd0JBQXdCLGdCQUFnQixtQkFBbUIsY0FBYyxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQix3QkFBd0Isd0JBQXdCLHVCQUF1Qix3QkFBd0IsRUFBRSxZQUFZLG1CQUFtQixlQUFlLEVBQUUsb0VBQW9FLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGVBQWUsMEJBQTBCLDZDQUE2QywwQ0FBMEMscUNBQXFDLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSx1Q0FBdUMsbUJBQW1CLGNBQWMsRUFBRSxrQkFBa0IsbUJBQW1CLGVBQWUsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0ZwN0UsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixtQkFBbUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGVBQWUsZ0JBQWdCLG1CQUFtQixFQUFFLDhHQUE4Ryw4QkFBOEIsaUJBQWlCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHFCQUFxQixxQkFBcUIsRUFBRSxnR0FBZ0csOEJBQThCLGlCQUFpQixtQkFBbUIsdUJBQXVCLG1CQUFtQix3QkFBd0IsRUFBRSxnQkFBZ0IsdUJBQXVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNGcnVCLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxZQUFZLGtCQUFrQixFQUFFLHNCQUFzQixtQkFBbUIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0ZsRywyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsZ0RBQWdELG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsOEJBQThCLEVBQUUsYUFBYSxrQkFBa0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNGaFA7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFVO0FBQ2hCLE1BQU0scURBQVU7QUFDaEIsTUFBTSxxREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBSTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaLEVBQUUscURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFEQUFVO0FBQ1osRUFBRSxxREFBVTtBQUNaLEVBQUUscURBQVU7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9TQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ1E7QUFDUjtBQUNwQjtBQUMvQixlQUFlLGlEQUFJLENBQUMsZ0VBQVE7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxvRUFBb0U7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixxREFBcUQsS0FBSztBQUMxRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDL0N2QjtBQUFBO0FBQUE7QUFBbUQ7OztBQUduRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDZSxtRUFBSSxFOzs7Ozs7Ozs7Ozs7QUN4Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNOO0FBQzRCO0FBQ1I7QUFDQzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7O0FDbkNwQjtBQUNBLEdBQUcsZ0dBQWdHO0FBQ25HLEdBQUcsaUdBQWlHO0FBQ3BHLEdBQUcsaUdBQWlHO0FBQ3BHLEdBQUc7QUFDSDs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0EsR0FBRywwR0FBMEc7QUFDN0csR0FBRywrRkFBK0Y7QUFDbEcsR0FBRyxzR0FBc0c7QUFDekcsR0FBRyxzR0FBc0c7QUFDekcsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQSxHQUFHLCtCQUErQjtBQUNsQyxHQUFHLCtCQUErQjtBQUNsQyxHQUFHLGdDQUFnQztBQUNuQyxHQUFHLDZCQUE2QjtBQUNoQzs7QUFFQSwwQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbi5ndWVzdC1sb2dpbiB7XFxuICBjb2xvcjogI0YyRDM4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgc2l6ZTogMjBlbTtcXG4gIG1hcmdpbjogMmVtO1xcbiAgY29sb3I6ICM0MTQxNDE7IH1cXG5cXG4ubmV3LXJlc2VydmF0aW9uLWJ1dHRvbiwgLmhvbWUtYnV0dG9uLW1hbmFnZXIsIC5ob21lLWJ1dHRvbi1ndWVzdCwgLnNlYXJjaC1ndWVzdC12aWV3LWJ1dHRvbiwgLmJvb2stcm9vbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJEMzg4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuLm1hbmFnZXItbG9naW4sIC5yZXNlcnZhdGlvbi1zZWFyY2gtYnV0dG9uLCAuc2VhcmNoLW5hbWUsIC5maWx0ZXItc2VhcmNoLCAuc2VhcmNoLWZpbHRlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzRDNjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiA0ZW0gMCAyZW0gMDsgfVxcblxcbi5ib29rLXJvb20ge1xcbiAgbWFyZ2luOiAwIDAgLjVlbSAwOyB9XFxuXFxuLm1hbmFnZXIsIC5zZWFyY2gtZ3Vlc3QsIC5tYW5hZ2VyLWRhc2hib2FyZCB7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHBhZGRpbmc6IC04cHggMnB4IDlweCA4cHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ucm9vbXMtYXZhaWxhYmxlIHtcXG4gIGNvbG9yOiAjNDE0MTQxOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAzLjNlbTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI0E3RDJDQjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci92ZWN0b3ItZmxvcmFsLTNkLXNlYW1sZXNzLXBhdHRlcm4tYmFja2dyb3VuZC1jaHJpc3RtYXMtaW52aXRhdGlvbi1jYXJkcy1kZWNvcmF0aW9uXzEyODQtNDEzMTQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByZXBlYXQ7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxuICBtYXJnaW46IDM4cHggMHB4IDBweCAwcHg7IH1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZzogMTJlbSwgMCwgMCwgMDtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgc2l6ZTogMjBlbTsgfVxcblxcbm5hdiB1bCB7XFxuICBiYWNrZ3JvdW5kOiAjODc0QzYyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxubmF2IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBlbTsgfVxcblxcbi50b2RheSB7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIHNpemU6IDIzZW07IH1cXG5cXG4uY2VudGVyLCAubmV3LXJlc2VydmF0aW9uLXNlYXJjaCwgLmRhdGUtc2VhcmNoLXJlc3VsdHMsIC5sb2dpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdEMkNCO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDJlbSAwIDBlbSAxZW07XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnBhc3N3b3JkLWVycm9yLFxcbi51c2VybmFtZS1lcnJvciB7XFxuICBjb2xvcjogIzk4MDAwODtcXG4gIHRleHQ6IDRlbTsgfVxcblxcbi50dXJpbmctbG9nbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHNpemU6IDEwZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ndWVzdC1sb2dpbiB7XFxuICBjb2xvcjogI0YyRDM4ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgc2l6ZTogMjBlbTtcXG4gIG1hcmdpbjogMmVtO1xcbiAgY29sb3I6ICM0MTQxNDE7IH1cXG5cXG4ubmV3LXJlc2VydmF0aW9uLWJ1dHRvbiwgLmhvbWUtYnV0dG9uLW1hbmFnZXIsIC5ob21lLWJ1dHRvbi1ndWVzdCwgLnNlYXJjaC1ndWVzdC12aWV3LWJ1dHRvbiwgLmJvb2stcm9vbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJEMzg4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuLm1hbmFnZXItbG9naW4sIC5yZXNlcnZhdGlvbi1zZWFyY2gtYnV0dG9uLCAuc2VhcmNoLW5hbWUsIC5maWx0ZXItc2VhcmNoLCAuc2VhcmNoLWZpbHRlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzRDNjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiA0ZW0gMCAyZW0gMDsgfVxcblxcbi5ib29rLXJvb20ge1xcbiAgbWFyZ2luOiAwIDAgLjVlbSAwOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ucm9vbXMtYXZhaWxhYmxlIHtcXG4gIGNvbG9yOiAjNDE0MTQxOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFuYWdlciwgLnNlYXJjaC1ndWVzdCwgLm1hbmFnZXItZGFzaGJvYXJkIHtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcGFkZGluZzogLThweCAycHggOXB4IDhweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIgXG5pbXBvcnQgUm9vbSBmcm9tICcuLi9zcmMvcm9vbSc7XG5cbmNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3Rvcihib29raW5nKSB7XG4gICAgdGhpcy5ib29raW5nID0gYm9va2luZztcbiAgfVxuICBcbiAgXG4gIGF2YWlsYWJsZVJvb21zKGRhdGUsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCBuZXdEYXRlID0gZGF0ZS5zcGxpdCgnLScpLmpvaW4oJy8nKVxuICAgIGxldCBmb3VuZFJlc2VydmF0aW9ucyA9IHRoaXMuZmluZFJlc2VydmF0aW9ucyhuZXdEYXRlLCBwYXNzZWRCb29rRGF0YSlcbiAgICBjb25zb2xlLmxvZygncmVzZXJ2YXRpb25zJywgZm91bmRSZXNlcnZhdGlvbnMpXG4gICAgbGV0IHRha2VuUm9vbXMgPSBbXVxuICAgIGxldCBidXN5Um9vbXMgPSBwYXNzZWRSb29tRGF0YS5maWx0ZXIocm9vbSA9PiB7XG4gICAgICAgIGZvdW5kUmVzZXJ2YXRpb25zLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICAgICAgaWYocm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcilcbiAgICAgICAgICAgIHRha2VuUm9vbXMucHVzaChyb29tKVxuICAgICAgICAgIH0pIFxuICAgICAgICB9KVxuICAgIGxldCByb29tc0ZvclJlbnQgPSB0aGlzLnJvb21BdmFpbGFibGUodGFrZW5Sb29tcywgcGFzc2VkUm9vbURhdGEpXG4gICAgcmV0dXJuIHJvb21zRm9yUmVudFxuICB9XG4gIFxuICByb29tQXZhaWxhYmxlKG9jY3VwaWVkUm9vbXMsIHBhc3NlZFJvb21EYXRhKSB7XG4gICAgbGV0IGZpbmFsID0gcGFzc2VkUm9vbURhdGEuZmlsdGVyKHJvb20gPT4ge1xuICAgICAgICBpZighb2NjdXBpZWRSb29tcy5pbmNsdWRlcyhyb29tKSkge1xuICAgICAgICAgIHJldHVybiByb29tIFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygncm9vbXMgYXZhaWxhYmxlJywgZmluYWwpXG4gICAgcmV0dXJuIGZpbmFsIFxuICB9XG5cbiAgXG4gIGF2YWlsYWJsZVJvb21BbW91bnQoZGF0ZSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgb2NjdXBpZWRSb29tID0gcGFzc2VkQm9va0RhdGEuZmlsdGVyKGJvb2sgPT4ge1xuICAgIHJldHVybiBib29rLmRhdGUgPT09IGRhdGUgXG4gICAgfSlcbiAgICByZXR1cm4gKDI1IC0gb2NjdXBpZWRSb29tLmxlbmd0aClcbiAgfVxuICBcbiAgdG90YWxSZXZlbnVlKGRhdGUsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDBcbiAgICBsZXQgbGlzdCA9IHRoaXMuZmluZFJlc2VydmF0aW9ucyhkYXRlLCBwYXNzZWRCb29rRGF0YSk7XG4gICAgIGxpc3QuZm9yRWFjaChyZXNlcnZhdGlvbiA9PiB7XG4gICAgICBwYXNzZWRSb29tRGF0YS5mb3JFYWNoKGhvdGVsUm9vbSA9PiB7XG4gICAgICAgIGlmKGhvdGVsUm9vbS5udW1iZXIgPT09IHJlc2VydmF0aW9uLnJvb21OdW1iZXIpXG4gICAgICAgIHRvdGFsICs9IGhvdGVsUm9vbS5jb3N0UGVyTmlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxldCBmaW5hbEFtb3VudCA9IChNYXRoLnJvdW5kKHRvdGFsICogMTAwMCkgLyAxMDAwKVxuICAgIHJldHVybiBgJCR7ZmluYWxBbW91bnR9YDtcbiAgfVxuXG4gIGZpbmRSZXNlcnZhdGlvbnMoZGF0ZSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICByZXR1cm4gcGFzc2VkQm9va0RhdGEuZmlsdGVyKGJvb2tpbmcgPT4ge1xuICAgIHJldHVybiBib29raW5nLmRhdGUgPT09IGRhdGVcbiAgICB9KVxuICB9XG4gIFxuICBvY2N1cGFuY3lUb3RhbChkYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgdGFrZW5Sb29tcyA9IHRoaXMuZmluZFJlc2VydmF0aW9ucyhkYXRlLCBwYXNzZWRCb29rRGF0YSlcbiAgICBjb25zb2xlLmxvZygndGFrZW5yb29tcycsIHRha2VuUm9vbXMpXG4gICAgbGV0IHRvdGFsID0gdGFrZW5Sb29tcy5sZW5ndGggLyBwYXNzZWRSb29tRGF0YS5sZW5ndGhcbiAgICBsZXQgZmluYWwgPSAodG90YWwgKiAxMDApXG4gICAgcmV0dXJuIGAke2ZpbmFsfSVgXG4gIH1cblxufVxuXG4gIGV4cG9ydCBkZWZhdWx0IEJvb2tpbmc74oCoXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYnV0dG9ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ndWVzdC12aWV3LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3Vlc3Qtdmlldy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ndWVzdC12aWV3LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYW5hZ2VyLXZpZXcuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYW5hZ2VyLXZpZXcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlci12aWV3LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtdXNlci1kYXRhLmpzJztcbmltcG9ydCBib29raW5nc0RhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtYm9va2luZ3MtZGF0YS5qcyc7XG5pbXBvcnQgcm9vbURhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtcm9vbS1kYXRhLmpzJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL3NyYy91c2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL3NyYy9yb29tJztcbmltcG9ydCBCb29raW5nIGZyb20gJy4uL3NyYy9ib29raW5nJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4uL3NyYy9tYW5hZ2VyJ1xubGV0IGJvb2tpbmcgPSBuZXcgQm9va2luZyhib29raW5nc0RhdGEpXG5sZXQgcm9vbSA9IG5ldyBSb29tKHJvb21EYXRhKVxubGV0IHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSlcbmxldCBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoKVxubGV0IGF2YWlsYWJsZTtcbmxldCBhZGRCb29rQnV0dG9uXG5cbmxldCByb29tc0F2YWlsYWJsZVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhaWxhYmxlLXRvbmlnaHQnKTtcbmxldCBob3RlbFJldmVudWVUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLXJldmVudWUnKTtcbmxldCBob3RlbE9jY3VwYW5jeVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb2NjdXBhbmN5Jyk7XG5sZXQgZ3Vlc3RCb29raW5nRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1ib29raW5ncy1kaXNwbGF5Jyk7XG5sZXQgZ3Vlc3RUb3RhbFNwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LXRvdGFsLXNwZW50Jyk7XG5sZXQgc2VhcmNoZWRHdWVzdFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXNlYXJjaC1yZXN1bHRzJylcbmNvbnN0IHNlYXJjaERhdGVSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VhcmNoLXJlc3VsdHMnKTtcblxuXG5jb25zdCBkb21VcGRhdGVzID0geyBcbiAgdG9kYXlzQXZhaWxhYmxlKGRhdGUsIHBhc3NlZEJvb2tpbmdEYXRhKSB7XG4gICAgbGV0IGVtcHR5Um9vbXMgPSBib29raW5nLmF2YWlsYWJsZVJvb21BbW91bnQoZGF0ZSwgcGFzc2VkQm9va2luZ0RhdGEuYm9va2luZ3MpO1xuICBcbiAgICBsZXQgcm9vbUNvdW50ID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1hdmFpbGFibGVcIj5cbiAgICA8aDM+JHtlbXB0eVJvb21zfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYFxuXG4gICAgcm9vbXNBdmFpbGFibGVUb25pZ2h0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcm9vbUNvdW50KVxuICB9LFxuXG4gIHRvZGF5c1RvdGFsUmV2ZW51ZShkYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgdG90YWwgPSBib29raW5nLnRvdGFsUmV2ZW51ZShkYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpO1xuICAgIGxldCB0b2RheXNUb3RhbCA9IFxuICAgIGAgXG4gICAgPGRpdiBjbGFzcz1cInRvZGF5cy10b3RhbFwiPlxuICAgIDxoMz4ke3RvdGFsfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGhvdGVsUmV2ZW51ZVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNUb3RhbCk7XG4gIH0sXG5cbiAgdG9kYXlzT2NjdXBhbmN5KGRhdGUsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCB0b2RheXNQZXJjZW50YWdlID0gYm9va2luZy5vY2N1cGFuY3lUb3RhbChkYXRlLCBwYXNzZWRSb29tRGF0YS5yb29tcywgcGFzc2VkQm9va0RhdGEuYm9va2luZ3MpO1xuICAgIGxldCB0b2RheXNQZXJjZW50ID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RheXMtb2NjdXBhbmN5XCI+XG4gICAgPGgzPiR7dG9kYXlzUGVyY2VudGFnZX08L2gzPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBob3RlbE9jY3VwYW5jeVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNQZXJjZW50KVxuICB9LFxuICBcbiAgZGlzcGxheUd1ZXN0Qm9va2luZ3MoZGF0YSkge1xuICAgIGRhdGEuZm9yRWFjaChib29raW5nSW5mbz0+IHtcbiAgICAgIGxldCBndWVzdEJvb2tpbmdzID0gXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ndWVzdC1ib29raW5nc1wiPlxuICAgICAgICA8aDM+RGF0ZTogJHtib29raW5nSW5mby5kYXRlfTwvaDM+XG4gICAgICAgIDxwPlJvb20gdHlwZTogJHtib29raW5nSW5mby5yb29tSW5mby5yb29tVHlwZX08L3A+XG4gICAgICAgIDxwPkJpZGV0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmJpZGV0fTwvcD5cbiAgICAgICAgPHA+QmVkc2l6ZTogJHtib29raW5nSW5mby5yb29tSW5mby5iZWRTaXplfTwvcD5cbiAgICAgICAgPHA+bnVtYmVyIG9mIGJlZHM6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8ubnVtQmVkc308L3A+XG4gICAgICAgIDxwPmNvc3QgcGVyIG5pZ2h0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICAgIGd1ZXN0Qm9va2luZ0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBndWVzdEJvb2tpbmdzKVxuICAgIH0pO1xuICB9LFxuICBcbiAgZGlzcGxheWd1ZXN0VG90YWwoaWQsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCBncmFuZFRvdGFsID0gdXNlci5maW5kVG90YWxTcGVudChpZCwgcGFzc2VkUm9vbURhdGEucm9vbXMsIHBhc3NlZEJvb2tEYXRhLmJvb2tpbmdzKVxuICAgIGxldCB0b3RhbCA9IFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3QtdG90YWxcIj5cbiAgICAgIDxoMz4ke2dyYW5kVG90YWx9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgZ3Vlc3RUb3RhbFNwZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG90YWwpXG4gIH0sXG4gIFxuICBkaXNwbGF5U2VhcmNoZWRHdWVzdE5hbWUobmFtZSkge1xuICAgIGxldCBkaXNwbGF5TmFtZSA9IFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaGVkLW5hbWVcIj5cbiAgICAgICAgPGgzPkd1ZXN0OiAke25hbWV9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICAgc2VhcmNoZWRHdWVzdFJlc3VsdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkaXNwbGF5TmFtZSlcbiAgfSwgXG5cbiAgZGlzcGxheVNlYXJjaGVkR3Vlc3RCb29raW5ncyhuYW1lLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgc2VhcmNoZWRHdWVzdEJvb2tpbmdzID0gbWFuYWdlci5maW5kR3Vlc3RCb29raW5ncyhuYW1lLmlkLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkQm9va0RhdGEpXG4gICAgaWYgKHNlYXJjaGVkR3Vlc3RCb29raW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgZGlzcGxheVNlYXJjaGVkR3Vlc3QgPSBcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3VuZC1ndWVzdC1yZXN1bHRcIj5cbiAgICAgICAgPGgyPlNvcnJ5IHRoZXJlIHdlcmUgbm8gYm9va2luZ3MgZm91bmQgZm9yIHRoZSBzZWFyY2hlZCBuYW1lPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICAgc2VhcmNoZWRHdWVzdFJlc3VsdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRpc3BsYXlTZWFyY2hlZEd1ZXN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hlZEd1ZXN0Qm9va2luZ3MuZm9yRWFjaCggYm9va2luZyA9PiB7XG4gICAgICAgIGxldCBkaXNwbGF5U2VhcmNoZWRHdWVzdCA9IFxuICAgICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3VuZC1ndWVzdC1yZXN1bHRcIj5cbiAgICAgICAgICA8cD4ke2Jvb2tpbmcuZGF0ZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIHNlYXJjaGVkR3Vlc3RSZXN1bHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkaXNwbGF5U2VhcmNoZWRHdWVzdClcbiAgICB9KVxuICAgIH1cbiAgfSxcbiAgXG4gIGRpc3BsYXlTZWFyY2hlZEd1ZXN0VG90YWwoc2VhcmNoTmFtZSwgcGFzc2VkVXNlckRhdGEsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCBjdXJyZW50VG90YWwgPSBtYW5hZ2VyLmFtb3VudFNwZW50KHNlYXJjaE5hbWUsIHBhc3NlZFVzZXJEYXRhLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpXG4gICAgbGV0IGRpc3BsYXlUb3RhbCA9XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJmb3VuZC1ndWVzdC10b3RhbFwiPlxuICAgICAgPGgzPlRvdGFsIGFtb3VudCBzcGVudCAkeyBjdXJyZW50VG90YWx9PC9oMz5cbiAgICA8L2Rpdj4gIFxuICAgIGBcbiAgICBzZWFyY2hlZEd1ZXN0UmVzdWx0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkaXNwbGF5VG90YWwpXG4gIH0sXG4gIFxuICByb29tUmVzdWx0cyhzZWFyY2hEYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpeyBcbiAgICAgYXZhaWxhYmxlID0gYm9va2luZy5hdmFpbGFibGVSb29tcyhzZWFyY2hEYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpXG4gICAgIGlmIChhdmFpbGFibGUubGVuZ3RoID09PSAwKSAge1xuICAgICAgIGxldCBkaXNwbGF5QXZhaWxhYmxlID0gXG4gICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJyb29tcy1hdmFpbGFibGVcIj5cbiAgICAgICAgPGgyPiBXZSBzaW5jZXJlbHkgYXBvbG9naXplIGJ1dCB0aGVyZSBhcmUgbm8gcm9vbXMgYXZhaWxhYmxlLiBQbGVhc2UgdHJ5IGFub3RoZXIgZGF0ZS48L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICAgYFxuICAgICAgIHNlYXJjaERhdGVSZXN1bHRzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGlzcGxheUF2YWlsYWJsZSk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgYXZhaWxhYmxlLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb29tbnVtJywgcm9vbS5udW1iZXIpXG4gICAgICAgICBsZXQgZGlzcGxheUF2YWlsYWJsZSA9IFxuICAgICAgICAgYFxuICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tcy1hdmFpbGFibGVcIiBpZD1cIiR7cm9vbS5udW1iZXJ9XCI+XG4gICAgICAgICA8aDM+Um9vbSB0eXBlICR7cm9vbS5yb29tVHlwZX08L2gzPlxuICAgICAgICAgPHA+RXF1aXBwZWQgd2l0aCBiaWRldCAke3Jvb20uYmlkZXR9PC9wPlxuICAgICAgICAgPHA+QmVkIHNpemUgJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgICAgPHA+TnVtYmVyIG9mIGJlZHMgJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgICAgPHA+UHJpY2UgcGVyIG5pZ2h0ICQke3Jvb20uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib29rLXJvb21cIj5Cb29rPC9idXR0b24+XG4gICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICBgXG4gICAgICAgICBhZGRCb29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYnV0dG9uJyk7XG4gICAgICAgICBzZWFyY2hEYXRlUmVzdWx0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRpc3BsYXlBdmFpbGFibGUpO1xuICAgICAgIH0pXG4gICAgIH1cbiAgfSxcbiAgXG4gIHNob3dGaWx0ZXJlZChmaWx0ZXJJbnB1dCkge1xuICAgIHNlYXJjaERhdGVSZXN1bHRzLmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBmaWx0ZXJlZCA9IHJvb20uZmlsdGVyVHlwZShmaWx0ZXJJbnB1dCwgYXZhaWxhYmxlKVxuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCcsIGZpbHRlcmVkKVxuICAgIGlmIChmaWx0ZXJlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgZGlzcGxheUZpbHRlcmVkID1cbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tcy1hdmFpbGFibGVcIj5cbiAgICAgICA8aDI+IFdlIHNpbmNlcmVseSBhcG9sb2dpemUgYnV0IHRoZXJlIGFyZSBubyByb29tcyBhdmFpbGFibGUgZm9yIHRoYXQgZGF0ZSBhbmQgZmlsdGVyIGNvbWJpbmF0aW9uLiBQbGVhc2UgYWx0ZXIgeW91ciBzZWFyY2ggYW5kIHRyeSBhZ2Fpbi48L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICAgIHNlYXJjaERhdGVSZXN1bHRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRpc3BsYXlGaWx0ZXJlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb29tbnVtJywgcm9vbS5udW1iZXIpXG4gICAgICAgIGxldCBkaXNwbGF5RmlsdGVyZWQgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm9vbXMtYXZhaWxhYmxlXCIgaWQ9XCIke3Jvb20ubnVtYmVyfVwiPlxuICAgICAgICA8aDM+Um9vbSB0eXBlICR7cm9vbS5yb29tVHlwZX08L2gzPlxuICAgICAgICA8cD5FcXVpcHBlZCB3aXRoIGJpZGV0ICR7cm9vbS5iaWRldH08L3A+XG4gICAgICAgIDxwPkJlZCBzaXplICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgICAgPHA+TnVtYmVyIG9mIGJlZHMgJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgICA8cD5QcmljZSBwZXIgbmlnaHQgJCR7cm9vbS5jb3N0UGVyTmlnaHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay1yb29tXCI+Qm9vazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBhZGRCb29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYnV0dG9uJyk7XG4gICAgICAgIHNlYXJjaERhdGVSZXN1bHRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRpc3BsYXlGaWx0ZXJlZCk7XG4gICAgICB9KVxuICAgIH1cbiAgXG4gIH0sXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImNvbnN0IHJlcXVlc3RzID0ge1xuICBmZXRjaEd1ZXN0RGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2Vyc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLy8gLnRoZW4oZGF0YSA9PiBkYXRhLmd1ZXN0RGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaFJvb21zRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEucm9vbXNEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaEJvb2tpbmdzRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3NEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBwb3N0TmV3Qm9va2luZyh1c2VySUQsIGRhdGUsIHJvb21OdW1iZXIpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJJRDogdXNlcklELFxuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIHJvb21OdW1iZXI6IHJvb21OdW1iZXJcbiAgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfSwgIFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0czsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3R1cmluZy1sb2dvLnBuZ1wiOyIsIi8vIFRoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZVxuLy8gRG8gbm90IGRlbGV0ZSBvciByZW5hbWUgdGhpcyBmaWxlICoqKioqKioqXG5cbi8vIEFuIGV4YW1wbGUgb2YgaG93IHlvdSB0ZWxsIHdlYnBhY2sgdG8gdXNlIGEgQ1NTIChTQ1NTKSBmaWxlXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvYnV0dG9ucy5zY3NzJztcblxuLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGFsc28gbmVlZCB0byBsaW5rIHRvIGl0IGluIHRoZSBpbmRleC5odG1sKVxuLy8gaW1wb3J0ICcuL2luZGV4Lmh0bWwnXG5pbXBvcnQgJy4vaW1hZ2VzL3R1cmluZy1sb2dvLnBuZydcblxuY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZS4nKTtcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc3JjL3VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi4vc3JjL2Jvb2tpbmcnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi4vc3JjL21hbmFnZXInO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tZGlzcGxheSc7XG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5cbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpO1xubGV0IHVzZXJuYW1lQ2FwdHVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkQ2FwdHVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IHVzZXJuYW1lRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtZXJyb3InKTtcbmNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtZXJyb3InKTtcbmNvbnN0IGd1ZXN0Vmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci12aWV3JylcbmNvbnN0IG1hbmFnZXJWaWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXZpZXcnKVxuY29uc3QgbWFuYWdlckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWRhc2hib2FyZCcpO1xuY29uc3QgZ3Vlc3REYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1kYXNoYm9hcmQnKVxubGV0IGhvbWVCdXR0b25NYW5nZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24tbWFuYWdlcicpO1xubGV0IGhvbWVCdXR0b25HdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbi1ndWVzdCcpXG5sZXQgbmV3UmVzZXJ2YXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXJlc2VydmF0aW9uLWJ1dHRvbicpO1xubGV0IHNlYXJjaEd1ZXN0Vmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZ3Vlc3Qtdmlldy1idXR0b24nKTtcbmxldCBzZWFyY2hOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uYW1lJyk7XG5sZXQgc2VhcmNoTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uYW1lLWlucHV0Jyk7XG5sZXQgc2VhcmNoR3Vlc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZ3Vlc3QnKTtcbmxldCBzZWFyY2hlZEd1ZXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zZWFyY2gtcmVzdWx0cycpO1xuY29uc3QgbmV3UmVzZXJ2YXRpb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXJlc2VydmF0aW9uLXNlYXJjaCcpO1xuY29uc3Qgc2VhcmNoRm9yUm9vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1zZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBzZWFyY2hEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tY2FsYW5kYXInKTsgXG5jb25zdCBzZWFyY2hEYXRlUmVzdWx0c1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1yZXN1bHRzLXZpZXcnKTtcbmNvbnN0IHJvb21TZWFyY2hGaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXNlYXJjaCcpO1xuY29uc3QgZmlsdGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWlucHV0Jyk7XG5jb25zdCBzZWFyY2hGaWx0ZXJlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZmlsdGVyZWQnKTtcbmxldCBzZWFyY2hEYXRlUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlYXJjaC1yZXN1bHRzJyk7XG5cblxubGV0IGd1ZXN0RGF0YTtcbmxldCByb29tc0RhdGE7XG5sZXQgYm9va2luZ3NEYXRhO1xubGV0IGRvbVxubGV0IHVzZXJcbmxldCBtYW5hZ2VyXG5cbmZ1bmN0aW9uIGhpZGVJdGVtKHRvSGlkZSkge1xuICB0b0hpZGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cbiAgXG5mdW5jdGlvbiBzaG93SXRlbSh0b1Nob3cpIHtcbiAgdG9TaG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cblxud2luZG93Lm9ubG9hZCA9IGdldERhdGE7XG5cbmZ1bmN0aW9uIGdldERhdGEoKSAge1xuICBjb25zdCByZWNpZXZlZEd1ZXN0RGF0YSA9IHJlcXVlc3RzLmZldGNoR3Vlc3REYXRhKCk7XG4gIGNvbnN0IHJlY2lldmVkUm9vbURhdGEgPSByZXF1ZXN0cy5mZXRjaFJvb21zRGF0YSgpO1xuICBjb25zdCByZWNpZXZlZEJvb2tpbmdzRGF0YSA9IHJlcXVlc3RzLmZldGNoQm9va2luZ3NEYXRhKCk7XG4gIFByb21pc2UuYWxsKFtyZWNpZXZlZEd1ZXN0RGF0YSwgcmVjaWV2ZWRSb29tRGF0YSwgcmVjaWV2ZWRCb29raW5nc0RhdGFdKVxuICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgIGd1ZXN0RGF0YSA9IHZhbHVlWzBdO1xuICAgICAgcm9vbXNEYXRhID0gdmFsdWVbMV07XG4gICAgICBib29raW5nc0RhdGEgPSB2YWx1ZVsyXTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYW5hZ2VyLWxvZ2luJykpIHtcbiAgICBjaGVja01hbmFnZXJVc2VybmFtZSh1c2VybmFtZUNhcHR1cmVkKTtcbiAgICBjaGVja0ZvclBhc3N3b3JkKHBhc3N3b3JkQ2FwdHVyZWQpO1xuICAgIG1hbmFnZXIgPSBuZXcgTWFuYWdlcigpXG4gICAgaWYoY2hlY2tNYW5hZ2VyVXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCkgPT09ICdnb29kJyAmJiBjaGVja0ZvclBhc3N3b3JkKHBhc3N3b3JkQ2FwdHVyZWQpID09PSAnZ29vZCcpIHtcbiAgICAgIGxldCB0b2RheSA9IGdldFRvZGF5c0RhdGUoKSBcbiAgICAgIHJ1bk1hbmdlcigpO1xuICAgICAgZG9tVXBkYXRlcy50b2RheXNBdmFpbGFibGUodG9kYXksIGJvb2tpbmdzRGF0YSk7XG4gICAgICBkb21VcGRhdGVzLnRvZGF5c1RvdGFsUmV2ZW51ZSh0b2RheSwgcm9vbXNEYXRhLnJvb21zLCBib29raW5nc0RhdGEuYm9va2luZ3MpO1xuICAgICAgZG9tVXBkYXRlcy50b2RheXNPY2N1cGFuY3kodG9kYXksIHJvb21zRGF0YSwgYm9va2luZ3NEYXRhKTtcbiAgICB9XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2d1ZXN0LWxvZ2luJykpIHtcbiAgICBjaGVja0d1ZXN0VXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCk7XG4gICAgY2hlY2tGb3JQYXNzd29yZChwYXNzd29yZENhcHR1cmVkKTtcbiAgICBpZihjaGVja0d1ZXN0VXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCkgPT09ICdnb29kJyAmJiBjaGVja0ZvclBhc3N3b3JkKHBhc3N3b3JkQ2FwdHVyZWQpID09PSAnZ29vZCcpIHtcbiAgICAgIHNob3dJdGVtKGd1ZXN0Vmlld3MpXG4gICAgICBzaG93SXRlbShndWVzdERhc2hib2FyZClcbiAgICAgIHNob3dJdGVtKG5ld1Jlc2VydmF0aW9uQnV0dG9uKTtcbiAgICAgIHJ1bkd1ZXN0KCkgIFxuXG4gICAgfVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtZ3Vlc3Qtdmlldy1idXR0b24nKSkge1xuICAgIHNob3dJdGVtKHNlYXJjaE5hbWVJbnB1dCk7XG4gICAgc2hvd0l0ZW0oaG9tZUJ1dHRvbk1hbmdlcik7XG4gICAgc2hvd0l0ZW0obmV3UmVzZXJ2YXRpb25CdXR0b24pO1xuICAgIHNob3dJdGVtKHNlYXJjaEd1ZXN0VGl0bGUpO1xuICAgIHNob3dJdGVtKHNlYXJjaE5hbWVCdXR0b24pXG4gICAgaGlkZUl0ZW0obWFuYWdlckRhc2hib2FyZCk7XG4gICAgaGlkZUl0ZW0oc2VhcmNoZWRHdWVzdFRpdGxlKVxuICAgIGhpZGVJdGVtKGhvbWVCdXR0b25HdWVzdClcbiAgICBoaWRlSXRlbShzZWFyY2hHdWVzdFZpZXdCdXR0b24pXG4gICAgXG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1uYW1lJykpIHtcbiAgICBzaG93SXRlbShzZWFyY2hlZEd1ZXN0VGl0bGUpXG4gICAgaGlkZUl0ZW0oc2VhcmNoR3Vlc3RUaXRsZSk7XG4gICAgaGlkZUl0ZW0oc2VhcmNoTmFtZUlucHV0KTtcbiAgICBoaWRlSXRlbShzZWFyY2hOYW1lQnV0dG9uKTtcbiAgICBoaWRlSXRlbShsb2dpblBhZ2UpXG4gICAgc2VhcmNoR3Vlc3REYXRhYmFzZShzZWFyY2hOYW1lSW5wdXQudmFsdWUsIGd1ZXN0RGF0YSwgcm9vbXNEYXRhLCBib29raW5nc0RhdGEpXG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUtYnV0dG9uLW1hbmFnZXInKSkge1xuICAgIHNlYXJjaE5hbWVJbnB1dC52YWx1ZSA9ICcgJztcbiAgICBzaG93SXRlbShtYW5hZ2VyRGFzaGJvYXJkKVxuICAgIGhpZGVJdGVtKHNlYXJjaEd1ZXN0Vmlld0J1dHRvbilcbiAgICBoaWRlSXRlbShzZWFyY2hOYW1lQnV0dG9uKVxuICAgIGhpZGVJdGVtKHNlYXJjaEd1ZXN0VGl0bGUpXG4gICAgaGlkZUl0ZW0oaG9tZUJ1dHRvbk1hbmdlcilcbiAgICBoaWRlSXRlbShzZWFyY2hOYW1lSW5wdXQpXG4gICAgaGlkZUl0ZW0oc2VhcmNoZWRHdWVzdFRpdGxlKVxuICAgIGhpZGVJdGVtKGhvbWVCdXR0b25HdWVzdClcbiAgICBoaWRlSXRlbShzZWFyY2hlZEd1ZXN0VGl0bGUpXG4gICAgc2hvd0l0ZW0oc2VhcmNoTmFtZUJ1dHRvbilcbiAgfVxuICBcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1yZXNlcnZhdGlvbi1idXR0b24nKSkge1xuICAgIHNob3dJdGVtKGhvbWVCdXR0b25HdWVzdClcbiAgICBzaG93SXRlbShuZXdSZXNlcnZhdGlvVmlldylcbiAgICBoaWRlSXRlbShndWVzdERhc2hib2FyZClcbiAgICBoaWRlSXRlbShuZXdSZXNlcnZhdGlvbkJ1dHRvbilcbiAgICBoaWRlSXRlbShzZWFyY2hEYXRlUmVzdWx0c1ZpZXcpXG4gICAgaGlkZUl0ZW0oaG9tZUJ1dHRvbk1hbmdlcilcbiAgICBoaWRlSXRlbShyb29tU2VhcmNoRmlsdGVyQnV0dG9uKVxuICB9XG4gIFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzZXJ2YXRpb24tc2VhcmNoLWJ1dHRvbicpKSB7XG4gICAgaGlkZUl0ZW0obmV3UmVzZXJ2YXRpb1ZpZXcpXG4gICAgZG9tVXBkYXRlcy5yb29tUmVzdWx0cyggc2VhcmNoRGF0ZUlucHV0LnZhbHVlLCByb29tc0RhdGEucm9vbXMsIGJvb2tpbmdzRGF0YS5ib29raW5ncykgIFxuICAgIHNob3dJdGVtKHJvb21TZWFyY2hGaWx0ZXJCdXR0b24pXG4gICAgc2hvd0l0ZW0oc2VhcmNoRGF0ZVJlc3VsdHNWaWV3KVxuICB9XG4gIFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZS1idXR0b24tZ3Vlc3QnKSkge1xuICAgIGhpZGVJdGVtKHNlYXJjaERhdGVSZXN1bHRzVmlldyk7XG4gICAgc2hvd0l0ZW0oZ3Vlc3REYXNoYm9hcmQpO1xuICAgIHNob3dJdGVtKG5ld1Jlc2VydmF0aW9uQnV0dG9uKTtcbiAgICBoaWRlSXRlbShob21lQnV0dG9uR3Vlc3QpO1xuICAgIGhpZGVJdGVtKHNlYXJjaEZpbHRlcmVkQnV0dG9uKTtcbiAgICBoaWRlSXRlbShmaWx0ZXJJbnB1dClcbiAgICBoaWRlSXRlbShyb29tU2VhcmNoRmlsdGVyQnV0dG9uKVxuICAgIGZpbHRlcklucHV0LnZhbHVlID0gJyc7XG4gICAgc2VhcmNoRGF0ZVJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXItc2VhcmNoJykpIHtcbiAgICBzaG93SXRlbShmaWx0ZXJJbnB1dClcbiAgICBzaG93SXRlbShzZWFyY2hGaWx0ZXJlZEJ1dHRvbilcbiAgICBoaWRlSXRlbShyb29tU2VhcmNoRmlsdGVyQnV0dG9uKVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtZmlsdGVyZWQnKSkge1xuICAgIGRlYnVnZ2VyXG4gICAgZG9tVXBkYXRlcy5zaG93RmlsdGVyZWQoZmlsdGVySW5wdXQudmFsdWUpO1xuICB9XG4gIFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9vay1yb29tJykpIHtcbiAgICBjb25zb2xlLmxvZygndXNlcicsICt1c2VyTnVtYmVyKVxuICAgIGxldCByb29tTnVtYmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgICBsZXQgdG9kYXkgPSBnZXRUb2RheXNEYXRlKClcbiAgICBmZXRjaC5wb3N0TmV3Qm9va2luZygrdXNlck51bWJlciwgdG9kYXksIHJvb21OdW1iZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tNYW5hZ2VyVXNlcm5hbWUoaW5wdXROYW1lKSB7XG4gIGhpZGVJdGVtKHVzZXJuYW1lRXJyb3IpO1xuICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHNob3dJdGVtKHVzZXJuYW1lRXJyb3IpO1xuICAgIHJldHVybiBcbiAgfSBlbHNlIGlmKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPiAwICkge1xuICAgIGxldCBjaGVja2VkVXNlcm5hbWUgPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgbGV0IGxvd2VyZWRVc2VybmFtZSA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRVc2VybmFtZSlcbiAgICBpZiAobG93ZXJlZFVzZXJuYW1lICE9PSAnbWFuYWdlcicpIHtcbiAgICAgIHNob3dJdGVtKHVzZXJuYW1lRXJyb3IpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGxvd2VyZWRVc2VybmFtZSA9PT0gJ21hbmFnZXInKVxuICAgIGhpZGVJdGVtKHVzZXJuYW1lRXJyb3IpXG4gICAgcmV0dXJuICdnb29kJ1xuICB9XG59IFxuXG5mdW5jdGlvbiBjaGVja0ZvclBhc3N3b3JkKGlucHV0UGFzc3dvcmQpIHtcbiAgaGlkZUl0ZW0ocGFzc3dvcmRFcnJvcilcbiAgaWYgKGlucHV0UGFzc3dvcmQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgc2hvd0l0ZW0ocGFzc3dvcmRFcnJvcik7XG4gICAgcmV0dXJuXG4gIH0gZWxzZSBpZiAoIGlucHV0UGFzc3dvcmQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGxldCBjaGVja2VkUGFzc3dvcmQgPSBpbnB1dFBhc3N3b3JkLnZhbHVlO1xuICAgIGxldCBsb3dlcmVkUGFzc3dvcmQgPSBsb3dlckNhc2VJbnB1dChjaGVja2VkUGFzc3dvcmQpO1xuICAgIGlmIChsb3dlcmVkUGFzc3dvcmQgIT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgICBzaG93SXRlbShwYXNzd29yZEVycm9yKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChsb3dlcmVkUGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgICByZXR1cm4gJ2dvb2QnXG4gICAgfSBcbiAgfVxufVxuXG5mdW5jdGlvbiBsb3dlckNhc2VJbnB1dChpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBydW5NYW5nZXIoKSB7XG4gIGhpZGVJdGVtKGxvZ2luUGFnZSk7XG4gIGhpZGVJdGVtKGd1ZXN0Vmlld3MpO1xuICBoaWRlSXRlbShzZWFyY2hOYW1lQnV0dG9uKVxuICBoaWRlSXRlbShzZWFyY2hOYW1lSW5wdXQpXG4gIHNob3dJdGVtKG1hbmFnZXJWaWV3cyk7XG4gIHNob3dJdGVtKG1hbmFnZXJEYXNoYm9hcmQpO1xuICBzaG93SXRlbShuZXdSZXNlcnZhdGlvbkJ1dHRvbik7XG4gIHNob3dJdGVtKHNlYXJjaEd1ZXN0Vmlld0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrR3Vlc3RVc2VybmFtZShpbnB1dE5hbWUpIHtcbiAgaGlkZUl0ZW0odXNlcm5hbWVFcnJvcilcbiAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICBzaG93SXRlbSh1c2VybmFtZUVycm9yKTtcbiAgICByZXR1cm4gXG4gIH0gZWxzZSBpZihpbnB1dE5hbWUudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICBsZXQgY2hlY2tlZFVzZXJuYW1lID0gaW5wdXROYW1lLnZhbHVlXG4gICAgbGV0IGxvd2VyZWRVc2VybmFtZSA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRVc2VybmFtZSlcbiAgICBpZiAoIWxvd2VyZWRVc2VybmFtZS5pbmNsdWRlcygnY3VzdG9tZXInKSkge1xuICAgICAgc2hvd0l0ZW0odXNlcm5hbWVFcnJvcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAobG93ZXJlZFVzZXJuYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpKVxuICAgIHJldHVybiAnZ29vZCdcbiAgfVxufSBcblxuZnVuY3Rpb24gcnVuR3Vlc3QoKSB7XG4gIGhpZGVJdGVtKGxvZ2luUGFnZSlcbiAgaGlkZUl0ZW0obWFuYWdlclZpZXdzKVxuICBoaWRlSXRlbShzZWFyY2hEYXRlUmVzdWx0c1ZpZXcpXG4gIGxldCB1c2VyTnVtYmVyID0gdXNlcm5hbWVDYXB0dXJlZC52YWx1ZS5zbGljZSg4LDEwKVxuICB1c2VyID0gbmV3IFVzZXIoK3VzZXJOdW1iZXIpXG4gIFxuICBsb2FkR3Vlc3REYXNoYm9hcmQoK3VzZXJOdW1iZXIpXG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5c0RhdGUoKSB7XG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIHRvZGF5ID0geXl5eSArICcvJyArIG1tICsgJy8nICsgZGQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRHdWVzdERhc2hib2FyZChpZCkge1xuICBsZXQgYWxsR3Vlc3RCb29raW5ncyA9IHVzZXIuZmluZEJvb2tpbmdzKGlkLCBib29raW5nc0RhdGEuYm9va2luZ3MpO1xuICBsZXQgc29ydGVkRGF0ZXMgPSBhcnJhbmdlckJ5RGF0ZShhbGxHdWVzdEJvb2tpbmdzKVxuICBsZXQgYWxsRGV0YWlscyA9IGdldERldGFpbHMoc29ydGVkRGF0ZXMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheUd1ZXN0Qm9va2luZ3MoYWxsRGV0YWlscylcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Z3Vlc3RUb3RhbChpZCwgcm9vbXNEYXRhLCBib29raW5nc0RhdGEpXG59XG5cbmZ1bmN0aW9uIGFycmFuZ2VyQnlEYXRlKGd1ZXN0UmVzZXJ2YXRpb25zKSB7XG4gIHJldHVybiBndWVzdFJlc2VydmF0aW9ucy5zb3J0KChhLGIpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlscyhkYXRhKSB7XG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWxsRGV0YWlscywgcmVzZXJ2YXRpb24pID0+IHtcbiAgICByb29tc0RhdGEucm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgIGlmKHJvb20ubnVtYmVyID09PSByZXNlcnZhdGlvbi5yb29tTnVtYmVyKSB7XG4gICAgICAgIGFsbERldGFpbHMucHVzaCh7J2RhdGUnOnJlc2VydmF0aW9uLmRhdGUsICdyb29tSW5mbyc6IHJvb219KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFsbERldGFpbHNcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIHNlYXJjaEd1ZXN0RGF0YWJhc2UobmFtZSwgcGFzc2VkVXNlckRhdGEsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICBsZXQgc2VhcmNoZWRHdWVzdCA9IG1hbmFnZXIuZmluZEd1ZXN0KHNlYXJjaE5hbWVJbnB1dC52YWx1ZSwgZ3Vlc3REYXRhLnVzZXJzKVxuICBkb21VcGRhdGVzLmRpc3BsYXlTZWFyY2hlZEd1ZXN0Qm9va2luZ3Moc2VhcmNoZWRHdWVzdCwgZ3Vlc3REYXRhLCBib29raW5nc0RhdGEuYm9va2luZ3MpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVNlYXJjaGVkR3Vlc3ROYW1lKHNlYXJjaE5hbWVJbnB1dC52YWx1ZSlcbiAgZG9tVXBkYXRlcy5kaXNwbGF5U2VhcmNoZWRHdWVzdFRvdGFsKHNlYXJjaE5hbWVJbnB1dC52YWx1ZSwgZ3Vlc3REYXRhLnVzZXJzLCByb29tc0RhdGEucm9vbXMsIGJvb2tpbmdzRGF0YS5ib29raW5ncylcbiAgc2VhcmNoTmFtZUlucHV0LnZhbHVlID0gXCIgXCJcbn1cblxuIiwiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXVzZXItZGF0YS5qcyc7XG5pbXBvcnQgYm9va2luZ3NEYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLWJvb2tpbmdzLWRhdGEuanMnO1xuaW1wb3J0IHJvb21EYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9zcmMvdXNlcic7XG5sZXQgdXNlciA9IG5ldyBVc2VyKHVzZXJEYXRhKTtcblxuY2xhc3MgTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIFxuICBmaW5kR3Vlc3QobmFtZSwgcGFzc2VkVXNlckRhdGEpIHtcbiAgICBpZiAoIG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFxuICAgIH1cbiAgIGxldCBzZWFyY2hOYW1lID0gbmFtZS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uKG5hbWUpe3JldHVybiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTt9KTtcbiAgICBsZXQgZm91bmRVc2VyID0gcGFzc2VkVXNlckRhdGEuZmluZCh1c2VyID0+IHtcbiAgICBpZih1c2VyLm5hbWUgPT09IHNlYXJjaE5hbWUpIHtcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuICAgfSlcbiAgIGlmKGZvdW5kVXNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgIHJldHVybiBmb3VuZFVzZXJcbiAgIH0gZWxzZSBpZiAoIGZvdW5kVXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgIHJldHVybiBgU29ycnkgbm8gdXNlciB3YXMgZm91bmQgd2l0aCB0aGUgbmFtZSAke25hbWV9YFxuICAgfVxuICB9XG4gIFxuXG4gIGZpbmRHdWVzdEJvb2tpbmdzKG5hbWUsIHBhc3NlZFVzZXJEYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICBsZXQgZm91bmRHdWVzdCA9IHRoaXMuZmluZEd1ZXN0KG5hbWUsIHBhc3NlZFVzZXJEYXRhKVxuICBpZiAoZm91bmRHdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFxuICB9XG4gIGxldCBmb3VuZEJvb2tpbmdzID0gdXNlci5maW5kQm9va2luZ3MoZm91bmRHdWVzdC5pZCwgcGFzc2VkQm9va0RhdGEpXG4gIFxuICByZXR1cm4gZm91bmRCb29raW5nc1xuICB9XG4gIFxuICBhbW91bnRTcGVudChzZWFyY2hOYW1lLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IGZvdW5kR3Vlc3QgPSB0aGlzLmZpbmRHdWVzdChzZWFyY2hOYW1lLCBwYXNzZWRVc2VyRGF0YSlcbiAgICBpZiAoZm91bmRHdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIGxldCBmb3VuZFRvdGFsID0gdXNlci5maW5kVG90YWxTcGVudChmb3VuZEd1ZXN0LmlkLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpO1xuICAgIHJldHVybiBmb3VuZFRvdGFsXG4gIH0gXG59XG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuXG4iLCJpbXBvcnQgcm9vbURhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtcm9vbS1kYXRhLmpzJztcblxuXG5jbGFzcyBSb29tIHtcbiAgY29uc3RydWN0b3IgKHJvb21EYXRhKSB7XG4gICAgdGhpcy5yb29tRGF0YSA9IHJvb21EYXRhO1xuICB9XG4gIFxuICBmaWx0ZXJUeXBlKGlucHV0LCBwYXNzZWRSb29tRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdyb29tanMnLCBwYXNzZWRSb29tRGF0YSlcbiAgICBsZXQgY2hlY2tJbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKClcbiAgICBsZXQgY2hvaWNlcyA9IHBhc3NlZFJvb21EYXRhLnJlZHVjZSgocmVzdWx0cywgcm9vbSkgPT4ge1xuICAgICAgaWYocm9vbS5yb29tVHlwZS5pbmNsdWRlcyhjaGVja0lucHV0KSkge1xuICAgICAgICByZXN1bHRzLnB1c2gocm9vbSlcbiAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICB9LCBbXSlcbiAgICBpZihjaG9pY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBjaG9pY2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJvb207IiwiaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi4vc3JjL2Jvb2tpbmcnO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuaW1wb3J0IGJvb2tpbmdzRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzJztcbmltcG9ydCByb29tRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1yb29tLWRhdGEuanMnO1xuaW1wb3J0IGd1ZXN0RGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS11c2VyLWRhdGEuanMnO1xuXG5jbGFzcyBVc2VyICB7XG4gIGNvbnN0cnVjdG9yIChndWVzdERhdGEpe1xuICAgIHRoaXMuZ3Vlc3REYXRhID0gZ3Vlc3REYXRhO1xuICB9XG4gIFxuICBmaW5kQm9va2luZ3MocGFzc2VkSWQsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHRoaXNCb29raW5ncyA9IHBhc3NlZEJvb2tEYXRhLnJlZHVjZSgoYWxsVXNlckJvb2tpbmcsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLnVzZXJJRCA9PT0gcGFzc2VkSWQpIHtcbiAgICAgICAgYWxsVXNlckJvb2tpbmcucHVzaChib29raW5nKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbFVzZXJCb29raW5nXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIHRoaXNCb29raW5nc1xuICB9XG4gIFxuICBmaW5kVG90YWxTcGVudChwYXNzZWRJZCwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHVzZXJCb29raW5ncyA9IHRoaXMuZmluZEJvb2tpbmdzKHBhc3NlZElkLCBwYXNzZWRCb29rRGF0YSk7XG4gICAgbGV0IGdyYW5kVG90YWwgPSB1c2VyQm9va2luZ3MucmVkdWNlKCh0b3RhbCwgYm9va2luZykgPT4ge1xuICAgICAgIHBhc3NlZFJvb21EYXRhLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmKGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbCArPSByb29tLmNvc3RQZXJOaWdodFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKHRvdGFsICogMTAwMCkgLyAxMDAwKVxuICAgIH0sIDApXG4gICAgcmV0dXJuIGAkJHtncmFuZFRvdGFsfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiY29uc3QgYm9va2luZ3NEYXRhID0gW1xuICB7XCJpZFwiOlwiNWZ3cmd1NGk3azU1aGw2c3pcIixcInVzZXJJRFwiOjksXCJkYXRlXCI6XCIyMDIwLzA0LzIyXCIsXCJyb29tTnVtYmVyXCI6MTUsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0NVwiLFwidXNlcklEXCI6NDMsXCJkYXRlXCI6XCIyMDIwLzAxLzI0XCIsXCJyb29tTnVtYmVyXCI6MjQsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0NlwiLFwidXNlcklEXCI6MTMsXCJkYXRlXCI6XCIyMDIwLzAxLzEwXCIsXCJyb29tTnVtYmVyXCI6MTIsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0N1wiLFwidXNlcklEXCI6MjAsXCJkYXRlXCI6XCIyMDIwLzAyLzE2XCIsXCJyb29tTnVtYmVyXCI6NyxcInJvb21TZXJ2aWNlQ2hhcmdlc1wiOltdfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb2tpbmdzRGF0YTsiLCJcblxuY29uc3Qgcm9vbURhdGEgPSBbXG4gIHtcIm51bWJlclwiOjEsXCJyb29tVHlwZVwiOlwicmVzaWRlbnRpYWwgc3VpdGVcIixcImJpZGV0XCI6dHJ1ZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MSxcImNvc3RQZXJOaWdodFwiOjM1OC40fSxcbiAge1wibnVtYmVyXCI6MixcInJvb21UeXBlXCI6XCJzdWl0ZVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcImZ1bGxcIixcIm51bUJlZHNcIjoyLFwiY29zdFBlck5pZ2h0XCI6NDc3LjM4fSxcbiAge1wibnVtYmVyXCI6NyxcInJvb21UeXBlXCI6XCJzaW5nbGUgcm9vbVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MixcImNvc3RQZXJOaWdodFwiOjIzMS40Nn0sXG4gIHtcIm51bWJlclwiOjQsXCJyb29tVHlwZVwiOlwic2luZ2xlIHJvb21cIixcImJpZGV0XCI6ZmFsc2UsXCJiZWRTaXplXCI6XCJxdWVlblwiLFwibnVtQmVkc1wiOjEsXCJjb3N0UGVyTmlnaHRcIjo0MjkuNDR9LFxuICB7XCJudW1iZXJcIjoyNCxcInJvb21UeXBlXCI6XCJzdWl0ZVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MSxcImNvc3RQZXJOaWdodFwiOjMyNy4yNH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSByb29tRGF0YTtcblxuIiwiY29uc3QgdXNlckRhdGEgPSBbXG4gIHtcImlkXCI6MSxcIm5hbWVcIjpcIkxlYXRoYSBVbGxyaWNoXCJ9LFxuICB7XCJpZFwiOjIsXCJuYW1lXCI6XCJSb2NpbyBTY2h1c3RlclwifSxcbiAge1wiaWRcIjo0MyxcIm5hbWVcIjpcIkVhcmxpbmUgSGFtaWxsXCJ9LFxuICB7XCJpZFwiOjIwLFwibmFtZVwiOlwiS2VvbiBLaXJsaW5cIn0sXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckRhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==