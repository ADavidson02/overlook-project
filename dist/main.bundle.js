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
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n.guest-login {\n  color: #F2D388;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  size: 20em;\n  margin: 2em;\n  color: #414141; }\n\n.new-reservation-button, .home-button-manager, .home-button-guest, .search-guest-view {\n  background-color: #F2D388;\n  border: none;\n  color: #414141;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em;\n  margin-left: 2em; }\n\n.manager-login, .search-name {\n  background-color: #874C62;\n  border: none;\n  color: #FFFFFF;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin: 4em 0 2em 0; }\n\n.manager, .search-guest, .manager-dashboard {\n  color: #414141;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: -8px 2px 9px 8px; }\n\n.hidden {\n  display: none; }\n\n.hidden {\n  display: none; }\n\nnav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  left: 0px;\n  right: 0px;\n  height: 3.3em; }\n\nbody {\n  background: #A7D2CB;\n  background-image: url(\"https://image.freepik.com/free-vector/vector-floral-3d-seamless-pattern-background-christmas-invitation-cards-decoration_1284-41314.jpg\");\n  background-position: repeat;\n  font-family: \"Open Sans\";\n  margin: 38px 0px 0px 0px; }\n\n.title {\n  padding: 12em, 0, 0, 0;\n  color: #414141;\n  display: flex;\n  justify-content: center;\n  size: 20em; }\n\nnav ul {\n  background: #874C62;\n  width: 100%;\n  color: #414141;\n  margin: 0;\n  padding: 0.5em; }\n\nnav li {\n  display: inline;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 40px;\n  margin-bottom: 10em; }\n\n.today {\n  color: #414141;\n  size: 23em; }\n\n.center, .login {\n  background-color: #A7D2CB;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 2em 0 0 1em;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n  -moz-box-shadow: 0 10px 6px -6px #777;\n  box-shadow: 0 10px 6px -6px #777; }\n\n.hidden {\n  display: none; }\n\n.password-error,\n.username-error {\n  color: #980008;\n  text: 4em; }\n\n.turing-logo {\n  display: block;\n  size: 10em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/buttons.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/buttons.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".guest-login {\n  color: #F2D388;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  size: 20em;\n  margin: 2em;\n  color: #414141; }\n\n.new-reservation-button, .home-button-manager, .home-button-guest, .search-guest-view {\n  background-color: #F2D388;\n  border: none;\n  color: #414141;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em;\n  margin-left: 2em; }\n\n.manager-login, .search-name {\n  background-color: #874C62;\n  border: none;\n  color: #FFFFFF;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin: 4em 0 2em 0; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hidden {\n  display: none; }\n", ""]);



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
  
  availableRooms(date, passedBookData) {
    let occupiedRoom = passedBookData.filter(book => {
    return book.date === date 
    })
    return (25 - occupiedRoom.length)
  }
  
  totalRevenue(date, passedBookData, passedRoomData) {
    let total = 0
    let list = this.occupiedRooms(date, passedBookData);
     list.forEach(reservation => {
      passedRoomData.forEach(hotelRoom => {
        if(hotelRoom.number === reservation.roomNumber)
        total += hotelRoom.costPerNight
      });
    });
    return `$${total}`;
  }

  occupiedRooms(date, passedBookData) {
    return passedBookData.filter(booking => {
    return booking.date === date
    })
  }
  
  occupancyTotal(date, passedRoomData, passedBookData) {
    let takenRooms = this.occupiedRooms(date, passedBookData)
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
let user = new _src_user__WEBPACK_IMPORTED_MODULE_3__["default"](_test_sample_user_data_js__WEBPACK_IMPORTED_MODULE_0___default.a)
let manager = new _src_manager__WEBPACK_IMPORTED_MODULE_6__["default"]()

let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
let guestBookingDisplay = document.querySelector('.guest-bookings-display');
let guestTotalSpent = document.querySelector('.guest-total-spent');
let searchedGuestResult = document.querySelector('.user-search-results')


const domUpdates = { 
  todaysAvailable(date, passedBookingData) {
    let emptyRooms = booking.availableRooms(date, passedBookingData.bookings);
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `

    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, passedRoomData, passedBookData) {
    let total = booking.totalRevenue(date, passedRoomData);
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
    console.log(name)
    let displayName = 
      `
      <div class='searched-name>
        <h3>${name}</h3>
      </div>
      `
      searchedGuestResult.insertAdjacentHTML('beforeend', displayName)
  }, 

  displaySearchedGuestBookings(name, passedUserData, passedBookData) {
  
    // let searchedGuest = manager.findGuest(name, passedUserData)
    let searchedGuestBookings = manager.findGuestBookings(name.id, passedUserData, passedBookData)

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
  
  postNewBooking() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": 22,
      "date": "2019/09/23",
      "roomNumber": 4
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










// import { todaysAvailable, todaysTotalRevenue, todaysOccupancy} from './dom-display';
window.addEventListener('click', windowOnClick);
// const recievedGuestData = requests.fetchGuestData();
// const recievedRoomData = requests.fetchRoomsData();
// const recievedBookingsData = requests.fetchBookingsData();

const loginPage = document.querySelector('.login');
let usernameCaptured = document.querySelector('.username-input');
const passwordCaptured = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const guestViews = document.querySelector('.user-view')
const managerViews = document.querySelector('.manager-view')
const managerDashboard = document.querySelector('.manager-dashboard');
let homeButtonManger = document.querySelector('.home-button-manager');
let homeButtonGuest = document.querySelector('.home-button-guest')
let newReservationButton = document.querySelector('.new-reservation-button');
let searchGuestViewButton = document.querySelector('.search-guest-view');
let searchNameButton = document.querySelector('.search-name');
let searchNameInput = document.querySelector('.search-name-input');
let searchGuestTitle = document.querySelector('.search-guest');
let searchedGuestTitle = document.querySelector('.user-search-results');


// let roomsAvailableTonight = document.querySelector('.available-tonight');
// let hotelRevenueTonight = document.querySelector('.hotel-revenue');
// let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');

// let guestBookingDisplay = document.querySelector('.guest-bookings-display');
// let guestTotalSpent = document.querySelector('.guest-total-spent');

let guestData;
let roomsData;
let bookingsData;

function hideItem(toHide) {
  toHide.classList.add("hidden");
}
  
function showItem(toShow) {
  toShow.classList.remove("hidden");
}

// let guestInformation
// let todaysRoomData 
// let todaysBookings 
let dom
let user
let manager
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
    // startApp() 
    manager = new _src_manager__WEBPACK_IMPORTED_MODULE_8__["default"]()
    // checkManagerUsername(usernameCaptured);
    // checkForPassword(passwordCaptured);
    // if(checkManagerUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      let today = getTodaysDate() 
      runManger(today);
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysAvailable(today, bookingsData);
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysTotalRevenue(today, roomsData.rooms, bookingsData.bookings);
      _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].todaysOccupancy(today, roomsData, bookingsData);
    // }
  }
  if (event.target.classList.contains('guest-login')) {
    // startApp() 
    // checkGuestUsername(usernameCaptured);
    // checkForPassword(passwordCaptured);
    // if(checkGuestUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      runGuest()  
    // }
  }
  if (event.target.classList.contains('search-guest-view')) {
    hideItem(managerDashboard);
    hideItem(searchedGuestTitle)
    showItem(searchGuestViewButton);
    showItem(searchNameInput);
    showItem(homeButtonManger);
    showItem(newReservationButton);
    showItem(searchGuestTitle);
    showItem(searchNameButton)
    
    
  }
  if (event.target.classList.contains('search-name')) {
    hideItem(searchGuestTitle);
    hideItem(searchNameInput);
    hideItem(searchNameButton);
    showItem(searchedGuestTitle)
    searchGuestDatabase(searchNameInput.value, guestData, roomsData, bookingsData)
  }
  if (event.target.classList.contains('home-button-manager')) {
    hideItem(searchNameButton)
    hideItem(searchGuestTitle)
    hideItem(homeButtonManger)
    hideItem(searchNameInput)
    hideItem(searchedGuestTitle)
    showItem(managerDashboard)
    showItem(searchGuestViewButton)
    
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

function runManger(date) {
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
  showItem(guestViews)
  showItem(newReservationButton);
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

// function todaysAvailable(date) {
//   let emptyRooms = todaysBookings.availableRooms(date);
//   let roomCount = 
//   `
//   <div class="today-available">
//   <h3>${emptyRooms}</h3>
//   </div>
//   `
//   roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
// }
// 
// function todaysTotalRevenue(date) {
//   let total = todaysBookings.totalRevenue(date, roomsData);
//   let todaysTotal = 
//   ` 
//   <div class="todays-total">
//   <h3>${total}</h3>
//   </div>
//   `
//   hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
// }
// 
// 
// function todaysOccupancy(date) {
//   let todaysPercentage = todaysBookings.occupancyTotal(date, roomsData);
//   let todaysPercent = 
//   `
//   <div class="todays-occupancy">
//   <h3>${todaysPercentage}</h3>
//   </div>
//   `
//   hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
// }


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

// function displayGuestBookings(data) {
//   data.forEach(bookingInfo=> {
//     let guestBookings = 
//     `
//     <div class="current-guest-bookings">
//       <h3>Date: ${bookingInfo.date}</h3>
//       <p>Room type: ${bookingInfo.roomInfo.roomType}</p>
//       <p>Bidet: ${bookingInfo.roomInfo.bidet}</p>
//       <p>Bedsize: ${bookingInfo.roomInfo.bedSize}</p>
//       <p>number of beds: ${bookingInfo.roomInfo.numBeds}</p>
//       <p>cost per night: ${bookingInfo.roomInfo.costPerNight}</p>
//     </div>
//     `
//     guestBookingDisplay.insertAdjacentHTML('beforeend', guestBookings)
//   });
// }

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
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchedGuestName(searchedGuest.name)
  _dom_display__WEBPACK_IMPORTED_MODULE_10__["default"].displaySearchedGuest(searchedGuest, guestData, bookingsData.bookings)
}

// function displayguestTotal(id) {
//   let grandTotal = guestInformation.findTotalSpent(id, bookingsData,roomsData)
//   let total = 
//   `
//   <div class="guest-total">
//     <h3>${grandTotal}</h3>
//   </div>
//   `
//   guestTotalSpent.insertAdjacentHTML('beforeend', total)
// }





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
   let searchName = name.replace(/\w\S*/g, function(name){return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();});
    let foundUser = passedUserData.find(user => {
    if(user.name === searchName) {
      return user
    }
   })
   if(foundUser !== undefined) {
     return foundUser
   } else {
     return `Sorry no user was found with the name ${name}`
   }
  }

  findGuestBookings(name, passedUserData, passedBookData) {
  // let foundGuest = this.findGuest(name, passedUserData)
  console.log(passedBookData)
  let foundBookings = user.findBookings(name, passedBookData)
  console.log('man', name)
  return foundBookings
  }
  
  amountSpent(searchName, passedUserData, passedRoomData, passedBookData) {
    let foundGuest = this.findGuest(searchName, passedUserData)
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
  
  filterType(input) {
    let checkInput = input.toLowerCase()
    let choices = _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_0___default.a.reduce((results, room) => {
      if(room.roomType === checkInput) {
        results.push(room)
      }
        return results
    }, [])
    if(choices.length > 0) {
      return choices
    } else {
      return "We apologize no rooms match your search, please alter your search and try again"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9idXR0b25zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ndWVzdC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYW5hZ2VyLXZpZXcuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9idXR0b25zLnNjc3M/NzZmNyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2d1ZXN0LXZpZXcuc2Nzcz9mYTc5Iiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFuYWdlci12aWV3LnNjc3M/M2EyYSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhbXBsZS11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QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDdkJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDTjtBQUM0QjtBQUNSO0FBQ0M7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLGVBQWUsV0FBVztBQUMxQjtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7OztBQ25DcEI7QUFDQSxHQUFHLGdHQUFnRztBQUNuRyxHQUFHLGlHQUFpRztBQUNwRyxHQUFHLGlHQUFpRztBQUNwRyxHQUFHO0FBQ0g7O0FBRUEsOEI7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLEdBQUcsMEdBQTBHO0FBQzdHLEdBQUcsK0ZBQStGO0FBQ2xHLEdBQUcsc0dBQXNHO0FBQ3pHLEdBQUcsc0dBQXNHO0FBQ3pHLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsR0FBRywrQkFBK0I7QUFDbEMsR0FBRywrQkFBK0I7QUFDbEMsR0FBRyxnQ0FBZ0M7QUFDbkMsR0FBRyw2QkFBNkI7QUFDaEM7O0FBRUEsMEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG4uZ3Vlc3QtbG9naW4ge1xcbiAgY29sb3I6ICNGMkQzODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHNpemU6IDIwZW07XFxuICBtYXJnaW46IDJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxOyB9XFxuXFxuLm5ldy1yZXNlcnZhdGlvbi1idXR0b24sIC5ob21lLWJ1dHRvbi1tYW5hZ2VyLCAuaG9tZS1idXR0b24tZ3Vlc3QsIC5zZWFyY2gtZ3Vlc3QtdmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJEMzg4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuLm1hbmFnZXItbG9naW4sIC5zZWFyY2gtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc0QzYyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogNGVtIDAgMmVtIDA7IH1cXG5cXG4ubWFuYWdlciwgLnNlYXJjaC1ndWVzdCwgLm1hbmFnZXItZGFzaGJvYXJkIHtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcGFkZGluZzogLThweCAycHggOXB4IDhweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGhlaWdodDogMy4zZW07IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNBN0QyQ0I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvdmVjdG9yLWZsb3JhbC0zZC1zZWFtbGVzcy1wYXR0ZXJuLWJhY2tncm91bmQtY2hyaXN0bWFzLWludml0YXRpb24tY2FyZHMtZGVjb3JhdGlvbl8xMjg0LTQxMzE0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgbWFyZ2luOiAzOHB4IDBweCAwcHggMHB4OyB9XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDEyZW0sIDAsIDAsIDA7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHNpemU6IDIwZW07IH1cXG5cXG5uYXYgdWwge1xcbiAgYmFja2dyb3VuZDogIzg3NEM2MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwZW07IH1cXG5cXG4udG9kYXkge1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBzaXplOiAyM2VtOyB9XFxuXFxuLmNlbnRlciwgLmxvZ2luIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0QyQ0I7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDJlbSAwIDAgMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XFxuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NzsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5wYXNzd29yZC1lcnJvcixcXG4udXNlcm5hbWUtZXJyb3Ige1xcbiAgY29sb3I6ICM5ODAwMDg7XFxuICB0ZXh0OiA0ZW07IH1cXG5cXG4udHVyaW5nLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBzaXplOiAxMGVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ3Vlc3QtbG9naW4ge1xcbiAgY29sb3I6ICNGMkQzODg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHNpemU6IDIwZW07XFxuICBtYXJnaW46IDJlbTtcXG4gIGNvbG9yOiAjNDE0MTQxOyB9XFxuXFxuLm5ldy1yZXNlcnZhdGlvbi1idXR0b24sIC5ob21lLWJ1dHRvbi1tYW5hZ2VyLCAuaG9tZS1idXR0b24tZ3Vlc3QsIC5zZWFyY2gtZ3Vlc3QtdmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJEMzg4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tbGVmdDogMmVtOyB9XFxuXFxuLm1hbmFnZXItbG9naW4sIC5zZWFyY2gtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc0QzYyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogNGVtIDAgMmVtIDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hbmFnZXIsIC5zZWFyY2gtZ3Vlc3QsIC5tYW5hZ2VyLWRhc2hib2FyZCB7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHBhZGRpbmc6IC04cHggMnB4IDlweCA4cHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiIFxuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuXG5jbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoYm9va2luZykge1xuICAgIHRoaXMuYm9va2luZyA9IGJvb2tpbmc7XG4gIH1cbiAgXG4gIGF2YWlsYWJsZVJvb21zKGRhdGUsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IG9jY3VwaWVkUm9vbSA9IHBhc3NlZEJvb2tEYXRhLmZpbHRlcihib29rID0+IHtcbiAgICByZXR1cm4gYm9vay5kYXRlID09PSBkYXRlIFxuICAgIH0pXG4gICAgcmV0dXJuICgyNSAtIG9jY3VwaWVkUm9vbS5sZW5ndGgpXG4gIH1cbiAgXG4gIHRvdGFsUmV2ZW51ZShkYXRlLCBwYXNzZWRCb29rRGF0YSwgcGFzc2VkUm9vbURhdGEpIHtcbiAgICBsZXQgdG90YWwgPSAwXG4gICAgbGV0IGxpc3QgPSB0aGlzLm9jY3VwaWVkUm9vbXMoZGF0ZSwgcGFzc2VkQm9va0RhdGEpO1xuICAgICBsaXN0LmZvckVhY2gocmVzZXJ2YXRpb24gPT4ge1xuICAgICAgcGFzc2VkUm9vbURhdGEuZm9yRWFjaChob3RlbFJvb20gPT4ge1xuICAgICAgICBpZihob3RlbFJvb20ubnVtYmVyID09PSByZXNlcnZhdGlvbi5yb29tTnVtYmVyKVxuICAgICAgICB0b3RhbCArPSBob3RlbFJvb20uY29zdFBlck5pZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYCQke3RvdGFsfWA7XG4gIH1cblxuICBvY2N1cGllZFJvb21zKGRhdGUsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgcmV0dXJuIHBhc3NlZEJvb2tEYXRhLmZpbHRlcihib29raW5nID0+IHtcbiAgICByZXR1cm4gYm9va2luZy5kYXRlID09PSBkYXRlXG4gICAgfSlcbiAgfVxuICBcbiAgb2NjdXBhbmN5VG90YWwoZGF0ZSwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHRha2VuUm9vbXMgPSB0aGlzLm9jY3VwaWVkUm9vbXMoZGF0ZSwgcGFzc2VkQm9va0RhdGEpXG4gICAgbGV0IHRvdGFsID0gdGFrZW5Sb29tcy5sZW5ndGggLyBwYXNzZWRSb29tRGF0YS5sZW5ndGhcbiAgICBsZXQgZmluYWwgPSAodG90YWwgKiAxMDApXG4gICAgcmV0dXJuIGAke2ZpbmFsfSVgXG4gIH1cblxufVxuXG4gIGV4cG9ydCBkZWZhdWx0IEJvb2tpbmc74oCoXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYnV0dG9ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9idXR0b25zLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ndWVzdC12aWV3LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3Vlc3Qtdmlldy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ndWVzdC12aWV3LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYW5hZ2VyLXZpZXcuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYW5hZ2VyLXZpZXcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlci12aWV3LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtdXNlci1kYXRhLmpzJztcbmltcG9ydCBib29raW5nc0RhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtYm9va2luZ3MtZGF0YS5qcyc7XG5pbXBvcnQgcm9vbURhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtcm9vbS1kYXRhLmpzJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL3NyYy91c2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL3NyYy9yb29tJztcbmltcG9ydCBCb29raW5nIGZyb20gJy4uL3NyYy9ib29raW5nJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4uL3NyYy9tYW5hZ2VyJ1xubGV0IGJvb2tpbmcgPSBuZXcgQm9va2luZyhib29raW5nc0RhdGEpXG5sZXQgdXNlciA9IG5ldyBVc2VyKHVzZXJEYXRhKVxubGV0IG1hbmFnZXIgPSBuZXcgTWFuYWdlcigpXG5cbmxldCByb29tc0F2YWlsYWJsZVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhaWxhYmxlLXRvbmlnaHQnKTtcbmxldCBob3RlbFJldmVudWVUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLXJldmVudWUnKTtcbmxldCBob3RlbE9jY3VwYW5jeVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb2NjdXBhbmN5Jyk7XG5sZXQgZ3Vlc3RCb29raW5nRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1ib29raW5ncy1kaXNwbGF5Jyk7XG5sZXQgZ3Vlc3RUb3RhbFNwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LXRvdGFsLXNwZW50Jyk7XG5sZXQgc2VhcmNoZWRHdWVzdFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXNlYXJjaC1yZXN1bHRzJylcblxuXG5jb25zdCBkb21VcGRhdGVzID0geyBcbiAgdG9kYXlzQXZhaWxhYmxlKGRhdGUsIHBhc3NlZEJvb2tpbmdEYXRhKSB7XG4gICAgbGV0IGVtcHR5Um9vbXMgPSBib29raW5nLmF2YWlsYWJsZVJvb21zKGRhdGUsIHBhc3NlZEJvb2tpbmdEYXRhLmJvb2tpbmdzKTtcbiAgICBsZXQgcm9vbUNvdW50ID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1hdmFpbGFibGVcIj5cbiAgICA8aDM+JHtlbXB0eVJvb21zfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYFxuXG4gICAgcm9vbXNBdmFpbGFibGVUb25pZ2h0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcm9vbUNvdW50KVxuICB9LFxuXG4gIHRvZGF5c1RvdGFsUmV2ZW51ZShkYXRlLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgdG90YWwgPSBib29raW5nLnRvdGFsUmV2ZW51ZShkYXRlLCBwYXNzZWRSb29tRGF0YSk7XG4gICAgbGV0IHRvZGF5c1RvdGFsID0gXG4gICAgYCBcbiAgICA8ZGl2IGNsYXNzPVwidG9kYXlzLXRvdGFsXCI+XG4gICAgPGgzPiR7dG90YWx9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgaG90ZWxSZXZlbnVlVG9uaWdodC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZGF5c1RvdGFsKTtcbiAgfSxcblxuICB0b2RheXNPY2N1cGFuY3koZGF0ZSwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHRvZGF5c1BlcmNlbnRhZ2UgPSBib29raW5nLm9jY3VwYW5jeVRvdGFsKGRhdGUsIHBhc3NlZFJvb21EYXRhLnJvb21zLCBwYXNzZWRCb29rRGF0YS5ib29raW5ncyk7XG4gICAgbGV0IHRvZGF5c1BlcmNlbnQgPSBcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInRvZGF5cy1vY2N1cGFuY3lcIj5cbiAgICA8aDM+JHt0b2RheXNQZXJjZW50YWdlfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGhvdGVsT2NjdXBhbmN5VG9uaWdodC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZGF5c1BlcmNlbnQpXG4gIH0sXG4gIFxuICBkaXNwbGF5R3Vlc3RCb29raW5ncyhkYXRhKSB7XG4gICAgZGF0YS5mb3JFYWNoKGJvb2tpbmdJbmZvPT4ge1xuICAgICAgbGV0IGd1ZXN0Qm9va2luZ3MgPSBcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWd1ZXN0LWJvb2tpbmdzXCI+XG4gICAgICAgIDxoMz5EYXRlOiAke2Jvb2tpbmdJbmZvLmRhdGV9PC9oMz5cbiAgICAgICAgPHA+Um9vbSB0eXBlOiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLnJvb21UeXBlfTwvcD5cbiAgICAgICAgPHA+QmlkZXQ6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8uYmlkZXR9PC9wPlxuICAgICAgICA8cD5CZWRzaXplOiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmJlZFNpemV9PC9wPlxuICAgICAgICA8cD5udW1iZXIgb2YgYmVkczogJHtib29raW5nSW5mby5yb29tSW5mby5udW1CZWRzfTwvcD5cbiAgICAgICAgPHA+Y29zdCBwZXIgbmlnaHQ6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICAgZ3Vlc3RCb29raW5nRGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGd1ZXN0Qm9va2luZ3MpXG4gICAgfSk7XG4gIH0sXG4gIFxuICBkaXNwbGF5Z3Vlc3RUb3RhbChpZCwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IGdyYW5kVG90YWwgPSB1c2VyLmZpbmRUb3RhbFNwZW50KGlkLCBwYXNzZWRSb29tRGF0YS5yb29tcywgcGFzc2VkQm9va0RhdGEuYm9va2luZ3MpXG4gICAgbGV0IHRvdGFsID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJndWVzdC10b3RhbFwiPlxuICAgICAgPGgzPiR7Z3JhbmRUb3RhbH08L2gzPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBndWVzdFRvdGFsU3BlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b3RhbClcbiAgfSxcbiAgXG4gIFxuICBkaXNwbGF5U2VhcmNoZWRHdWVzdE5hbWUobmFtZSkge1xuICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgbGV0IGRpc3BsYXlOYW1lID0gXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPSdzZWFyY2hlZC1uYW1lPlxuICAgICAgICA8aDM+JHtuYW1lfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICAgIHNlYXJjaGVkR3Vlc3RSZXN1bHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkaXNwbGF5TmFtZSlcbiAgfSwgXG5cbiAgZGlzcGxheVNlYXJjaGVkR3Vlc3RCb29raW5ncyhuYW1lLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgXG4gICAgLy8gbGV0IHNlYXJjaGVkR3Vlc3QgPSBtYW5hZ2VyLmZpbmRHdWVzdChuYW1lLCBwYXNzZWRVc2VyRGF0YSlcbiAgICBsZXQgc2VhcmNoZWRHdWVzdEJvb2tpbmdzID0gbWFuYWdlci5maW5kR3Vlc3RCb29raW5ncyhuYW1lLmlkLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkQm9va0RhdGEpXG5cbiAgICBzZWFyY2hlZEd1ZXN0Qm9va2luZ3MuZm9yRWFjaCggYm9va2luZyA9PiB7XG4gICAgICBsZXQgZGlzcGxheVNlYXJjaGVkR3Vlc3QgPSBcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3VuZC1ndWVzdC1yZXN1bHRcIj5cbiAgICAgIDxwPiR7Ym9va2luZy5kYXRlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICAgc2VhcmNoZWRHdWVzdFJlc3VsdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRpc3BsYXlTZWFyY2hlZEd1ZXN0KVxuICAgIH0pXG4gIH1cbiAgXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImNvbnN0IHJlcXVlc3RzID0ge1xuICBmZXRjaEd1ZXN0RGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2Vyc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLy8gLnRoZW4oZGF0YSA9PiBkYXRhLmd1ZXN0RGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaFJvb21zRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEucm9vbXNEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaEJvb2tpbmdzRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3NEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBwb3N0TmV3Qm9va2luZygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwidXNlcklEXCI6IDIyLFxuICAgICAgXCJkYXRlXCI6IFwiMjAxOS8wOS8yM1wiLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IDRcbiAgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfSwgIFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0czsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3R1cmluZy1sb2dvLnBuZ1wiOyIsIi8vIFRoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZVxuLy8gRG8gbm90IGRlbGV0ZSBvciByZW5hbWUgdGhpcyBmaWxlICoqKioqKioqXG5cbi8vIEFuIGV4YW1wbGUgb2YgaG93IHlvdSB0ZWxsIHdlYnBhY2sgdG8gdXNlIGEgQ1NTIChTQ1NTKSBmaWxlXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvYnV0dG9ucy5zY3NzJztcblxuLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGFsc28gbmVlZCB0byBsaW5rIHRvIGl0IGluIHRoZSBpbmRleC5odG1sKVxuLy8gaW1wb3J0ICcuL2luZGV4Lmh0bWwnXG5pbXBvcnQgJy4vaW1hZ2VzL3R1cmluZy1sb2dvLnBuZydcblxuY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZS4nKTtcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc3JjL3VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi4vc3JjL2Jvb2tpbmcnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi4vc3JjL21hbmFnZXInO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tZGlzcGxheSc7XG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcbi8vIGltcG9ydCB7IHRvZGF5c0F2YWlsYWJsZSwgdG9kYXlzVG90YWxSZXZlbnVlLCB0b2RheXNPY2N1cGFuY3l9IGZyb20gJy4vZG9tLWRpc3BsYXknO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG4vLyBjb25zdCByZWNpZXZlZEd1ZXN0RGF0YSA9IHJlcXVlc3RzLmZldGNoR3Vlc3REYXRhKCk7XG4vLyBjb25zdCByZWNpZXZlZFJvb21EYXRhID0gcmVxdWVzdHMuZmV0Y2hSb29tc0RhdGEoKTtcbi8vIGNvbnN0IHJlY2lldmVkQm9va2luZ3NEYXRhID0gcmVxdWVzdHMuZmV0Y2hCb29raW5nc0RhdGEoKTtcblxuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luJyk7XG5sZXQgdXNlcm5hbWVDYXB0dXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZS1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRDYXB0dXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1pbnB1dCcpO1xuY29uc3QgdXNlcm5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZS1lcnJvcicpO1xuY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1lcnJvcicpO1xuY29uc3QgZ3Vlc3RWaWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXZpZXcnKVxuY29uc3QgbWFuYWdlclZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItdmlldycpXG5jb25zdCBtYW5hZ2VyRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItZGFzaGJvYXJkJyk7XG5sZXQgaG9tZUJ1dHRvbk1hbmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbi1tYW5hZ2VyJyk7XG5sZXQgaG9tZUJ1dHRvbkd1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnV0dG9uLWd1ZXN0JylcbmxldCBuZXdSZXNlcnZhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcmVzZXJ2YXRpb24tYnV0dG9uJyk7XG5sZXQgc2VhcmNoR3Vlc3RWaWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ndWVzdC12aWV3Jyk7XG5sZXQgc2VhcmNoTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbmFtZScpO1xubGV0IHNlYXJjaE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbmFtZS1pbnB1dCcpO1xubGV0IHNlYXJjaEd1ZXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWd1ZXN0Jyk7XG5sZXQgc2VhcmNoZWRHdWVzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItc2VhcmNoLXJlc3VsdHMnKTtcblxuXG4vLyBsZXQgcm9vbXNBdmFpbGFibGVUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YWlsYWJsZS10b25pZ2h0Jyk7XG4vLyBsZXQgaG90ZWxSZXZlbnVlVG9uaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3RlbC1yZXZlbnVlJyk7XG4vLyBsZXQgaG90ZWxPY2N1cGFuY3lUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLW9jY3VwYW5jeScpO1xuXG4vLyBsZXQgZ3Vlc3RCb29raW5nRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1ib29raW5ncy1kaXNwbGF5Jyk7XG4vLyBsZXQgZ3Vlc3RUb3RhbFNwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LXRvdGFsLXNwZW50Jyk7XG5cbmxldCBndWVzdERhdGE7XG5sZXQgcm9vbXNEYXRhO1xubGV0IGJvb2tpbmdzRGF0YTtcblxuZnVuY3Rpb24gaGlkZUl0ZW0odG9IaWRlKSB7XG4gIHRvSGlkZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuICBcbmZ1bmN0aW9uIHNob3dJdGVtKHRvU2hvdykge1xuICB0b1Nob3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuLy8gbGV0IGd1ZXN0SW5mb3JtYXRpb25cbi8vIGxldCB0b2RheXNSb29tRGF0YSBcbi8vIGxldCB0b2RheXNCb29raW5ncyBcbmxldCBkb21cbmxldCB1c2VyXG5sZXQgbWFuYWdlclxud2luZG93Lm9ubG9hZCA9IGdldERhdGE7XG5cbmZ1bmN0aW9uIGdldERhdGEoKSAge1xuICBjb25zdCByZWNpZXZlZEd1ZXN0RGF0YSA9IHJlcXVlc3RzLmZldGNoR3Vlc3REYXRhKCk7XG4gIGNvbnN0IHJlY2lldmVkUm9vbURhdGEgPSByZXF1ZXN0cy5mZXRjaFJvb21zRGF0YSgpO1xuICBjb25zdCByZWNpZXZlZEJvb2tpbmdzRGF0YSA9IHJlcXVlc3RzLmZldGNoQm9va2luZ3NEYXRhKCk7XG4gIFByb21pc2UuYWxsKFtyZWNpZXZlZEd1ZXN0RGF0YSwgcmVjaWV2ZWRSb29tRGF0YSwgcmVjaWV2ZWRCb29raW5nc0RhdGFdKVxuICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgIGd1ZXN0RGF0YSA9IHZhbHVlWzBdO1xuICAgICAgcm9vbXNEYXRhID0gdmFsdWVbMV07XG4gICAgICBib29raW5nc0RhdGEgPSB2YWx1ZVsyXTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYW5hZ2VyLWxvZ2luJykpIHtcbiAgICAvLyBzdGFydEFwcCgpIFxuICAgIG1hbmFnZXIgPSBuZXcgTWFuYWdlcigpXG4gICAgLy8gY2hlY2tNYW5hZ2VyVXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCk7XG4gICAgLy8gY2hlY2tGb3JQYXNzd29yZChwYXNzd29yZENhcHR1cmVkKTtcbiAgICAvLyBpZihjaGVja01hbmFnZXJVc2VybmFtZSh1c2VybmFtZUNhcHR1cmVkKSA9PT0gJ2dvb2QnICYmIGNoZWNrRm9yUGFzc3dvcmQocGFzc3dvcmRDYXB0dXJlZCkgPT09ICdnb29kJykge1xuICAgICAgbGV0IHRvZGF5ID0gZ2V0VG9kYXlzRGF0ZSgpIFxuICAgICAgcnVuTWFuZ2VyKHRvZGF5KTtcbiAgICAgIGRvbVVwZGF0ZXMudG9kYXlzQXZhaWxhYmxlKHRvZGF5LCBib29raW5nc0RhdGEpO1xuICAgICAgZG9tVXBkYXRlcy50b2RheXNUb3RhbFJldmVudWUodG9kYXksIHJvb21zRGF0YS5yb29tcywgYm9va2luZ3NEYXRhLmJvb2tpbmdzKTtcbiAgICAgIGRvbVVwZGF0ZXMudG9kYXlzT2NjdXBhbmN5KHRvZGF5LCByb29tc0RhdGEsIGJvb2tpbmdzRGF0YSk7XG4gICAgLy8gfVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdndWVzdC1sb2dpbicpKSB7XG4gICAgLy8gc3RhcnRBcHAoKSBcbiAgICAvLyBjaGVja0d1ZXN0VXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCk7XG4gICAgLy8gY2hlY2tGb3JQYXNzd29yZChwYXNzd29yZENhcHR1cmVkKTtcbiAgICAvLyBpZihjaGVja0d1ZXN0VXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCkgPT09ICdnb29kJyAmJiBjaGVja0ZvclBhc3N3b3JkKHBhc3N3b3JkQ2FwdHVyZWQpID09PSAnZ29vZCcpIHtcbiAgICAgIHJ1bkd1ZXN0KCkgIFxuICAgIC8vIH1cbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLWd1ZXN0LXZpZXcnKSkge1xuICAgIGhpZGVJdGVtKG1hbmFnZXJEYXNoYm9hcmQpO1xuICAgIGhpZGVJdGVtKHNlYXJjaGVkR3Vlc3RUaXRsZSlcbiAgICBzaG93SXRlbShzZWFyY2hHdWVzdFZpZXdCdXR0b24pO1xuICAgIHNob3dJdGVtKHNlYXJjaE5hbWVJbnB1dCk7XG4gICAgc2hvd0l0ZW0oaG9tZUJ1dHRvbk1hbmdlcik7XG4gICAgc2hvd0l0ZW0obmV3UmVzZXJ2YXRpb25CdXR0b24pO1xuICAgIHNob3dJdGVtKHNlYXJjaEd1ZXN0VGl0bGUpO1xuICAgIHNob3dJdGVtKHNlYXJjaE5hbWVCdXR0b24pXG4gICAgXG4gICAgXG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1uYW1lJykpIHtcbiAgICBoaWRlSXRlbShzZWFyY2hHdWVzdFRpdGxlKTtcbiAgICBoaWRlSXRlbShzZWFyY2hOYW1lSW5wdXQpO1xuICAgIGhpZGVJdGVtKHNlYXJjaE5hbWVCdXR0b24pO1xuICAgIHNob3dJdGVtKHNlYXJjaGVkR3Vlc3RUaXRsZSlcbiAgICBzZWFyY2hHdWVzdERhdGFiYXNlKHNlYXJjaE5hbWVJbnB1dC52YWx1ZSwgZ3Vlc3REYXRhLCByb29tc0RhdGEsIGJvb2tpbmdzRGF0YSlcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZS1idXR0b24tbWFuYWdlcicpKSB7XG4gICAgaGlkZUl0ZW0oc2VhcmNoTmFtZUJ1dHRvbilcbiAgICBoaWRlSXRlbShzZWFyY2hHdWVzdFRpdGxlKVxuICAgIGhpZGVJdGVtKGhvbWVCdXR0b25NYW5nZXIpXG4gICAgaGlkZUl0ZW0oc2VhcmNoTmFtZUlucHV0KVxuICAgIGhpZGVJdGVtKHNlYXJjaGVkR3Vlc3RUaXRsZSlcbiAgICBzaG93SXRlbShtYW5hZ2VyRGFzaGJvYXJkKVxuICAgIHNob3dJdGVtKHNlYXJjaEd1ZXN0Vmlld0J1dHRvbilcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja01hbmFnZXJVc2VybmFtZShpbnB1dE5hbWUpIHtcbiAgaGlkZUl0ZW0odXNlcm5hbWVFcnJvcik7XG4gIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgc2hvd0l0ZW0odXNlcm5hbWVFcnJvcik7XG4gICAgcmV0dXJuIFxuICB9IGVsc2UgaWYoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA+IDAgKSB7XG4gICAgbGV0IGNoZWNrZWRVc2VybmFtZSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICBsZXQgbG93ZXJlZFVzZXJuYW1lID0gbG93ZXJDYXNlSW5wdXQoY2hlY2tlZFVzZXJuYW1lKVxuICAgIGlmIChsb3dlcmVkVXNlcm5hbWUgIT09ICdtYW5hZ2VyJykge1xuICAgICAgc2hvd0l0ZW0odXNlcm5hbWVFcnJvcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAobG93ZXJlZFVzZXJuYW1lID09PSAnbWFuYWdlcicpXG4gICAgaGlkZUl0ZW0odXNlcm5hbWVFcnJvcilcbiAgICByZXR1cm4gJ2dvb2QnXG4gIH1cbn0gXG5cbmZ1bmN0aW9uIGNoZWNrRm9yUGFzc3dvcmQoaW5wdXRQYXNzd29yZCkge1xuICBoaWRlSXRlbShwYXNzd29yZEVycm9yKVxuICBpZiAoaW5wdXRQYXNzd29yZC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICBzaG93SXRlbShwYXNzd29yZEVycm9yKTtcbiAgICByZXR1cm5cbiAgfSBlbHNlIGlmICggaW5wdXRQYXNzd29yZC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoZWNrZWRQYXNzd29yZCA9IGlucHV0UGFzc3dvcmQudmFsdWU7XG4gICAgbGV0IGxvd2VyZWRQYXNzd29yZCA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRQYXNzd29yZCk7XG4gICAgaWYgKGxvd2VyZWRQYXNzd29yZCAhPT0gJ292ZXJsb29rMjAyMCcpIHtcbiAgICAgIHNob3dJdGVtKHBhc3N3b3JkRXJyb3IpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGxvd2VyZWRQYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcpIHtcbiAgICAgIHJldHVybiAnZ29vZCdcbiAgICB9IFxuICB9XG59XG5cbmZ1bmN0aW9uIGxvd2VyQ2FzZUlucHV0KGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIHJ1bk1hbmdlcihkYXRlKSB7XG4gIGhpZGVJdGVtKGxvZ2luUGFnZSk7XG4gIGhpZGVJdGVtKGd1ZXN0Vmlld3MpO1xuICBoaWRlSXRlbShzZWFyY2hOYW1lQnV0dG9uKVxuICBoaWRlSXRlbShzZWFyY2hOYW1lSW5wdXQpXG4gIHNob3dJdGVtKG1hbmFnZXJWaWV3cyk7XG4gIHNob3dJdGVtKG1hbmFnZXJEYXNoYm9hcmQpO1xuICBzaG93SXRlbShuZXdSZXNlcnZhdGlvbkJ1dHRvbik7XG4gIHNob3dJdGVtKHNlYXJjaEd1ZXN0Vmlld0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrR3Vlc3RVc2VybmFtZShpbnB1dE5hbWUpIHtcbiAgaGlkZUl0ZW0odXNlcm5hbWVFcnJvcilcbiAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICBzaG93SXRlbSh1c2VybmFtZUVycm9yKTtcbiAgICByZXR1cm4gXG4gIH0gZWxzZSBpZihpbnB1dE5hbWUudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICBsZXQgY2hlY2tlZFVzZXJuYW1lID0gaW5wdXROYW1lLnZhbHVlXG4gICAgbGV0IGxvd2VyZWRVc2VybmFtZSA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRVc2VybmFtZSlcbiAgICBpZiAoIWxvd2VyZWRVc2VybmFtZS5pbmNsdWRlcygnY3VzdG9tZXInKSkge1xuICAgICAgc2hvd0l0ZW0odXNlcm5hbWVFcnJvcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAobG93ZXJlZFVzZXJuYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpKVxuICAgIHJldHVybiAnZ29vZCdcbiAgfVxufSBcblxuZnVuY3Rpb24gcnVuR3Vlc3QoKSB7XG4gIGhpZGVJdGVtKGxvZ2luUGFnZSlcbiAgaGlkZUl0ZW0obWFuYWdlclZpZXdzKVxuICBzaG93SXRlbShndWVzdFZpZXdzKVxuICBzaG93SXRlbShuZXdSZXNlcnZhdGlvbkJ1dHRvbik7XG4gIGxldCB1c2VyTnVtYmVyID0gdXNlcm5hbWVDYXB0dXJlZC52YWx1ZS5zbGljZSg4LDEwKVxuICB1c2VyID0gbmV3IFVzZXIoK3VzZXJOdW1iZXIpXG4gIGxvYWRHdWVzdERhc2hib2FyZCgrdXNlck51bWJlcilcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlzRGF0ZSgpIHtcbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gdG9kYXkgPSB5eXl5ICsgJy8nICsgbW0gKyAnLycgKyBkZDtcbn1cblxuLy8gZnVuY3Rpb24gdG9kYXlzQXZhaWxhYmxlKGRhdGUpIHtcbi8vICAgbGV0IGVtcHR5Um9vbXMgPSB0b2RheXNCb29raW5ncy5hdmFpbGFibGVSb29tcyhkYXRlKTtcbi8vICAgbGV0IHJvb21Db3VudCA9IFxuLy8gICBgXG4vLyAgIDxkaXYgY2xhc3M9XCJ0b2RheS1hdmFpbGFibGVcIj5cbi8vICAgPGgzPiR7ZW1wdHlSb29tc308L2gzPlxuLy8gICA8L2Rpdj5cbi8vICAgYFxuLy8gICByb29tc0F2YWlsYWJsZVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tQ291bnQpXG4vLyB9XG4vLyBcbi8vIGZ1bmN0aW9uIHRvZGF5c1RvdGFsUmV2ZW51ZShkYXRlKSB7XG4vLyAgIGxldCB0b3RhbCA9IHRvZGF5c0Jvb2tpbmdzLnRvdGFsUmV2ZW51ZShkYXRlLCByb29tc0RhdGEpO1xuLy8gICBsZXQgdG9kYXlzVG90YWwgPSBcbi8vICAgYCBcbi8vICAgPGRpdiBjbGFzcz1cInRvZGF5cy10b3RhbFwiPlxuLy8gICA8aDM+JHt0b3RhbH08L2gzPlxuLy8gICA8L2Rpdj5cbi8vICAgYFxuLy8gICBob3RlbFJldmVudWVUb25pZ2h0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9kYXlzVG90YWwpO1xuLy8gfVxuLy8gXG4vLyBcbi8vIGZ1bmN0aW9uIHRvZGF5c09jY3VwYW5jeShkYXRlKSB7XG4vLyAgIGxldCB0b2RheXNQZXJjZW50YWdlID0gdG9kYXlzQm9va2luZ3Mub2NjdXBhbmN5VG90YWwoZGF0ZSwgcm9vbXNEYXRhKTtcbi8vICAgbGV0IHRvZGF5c1BlcmNlbnQgPSBcbi8vICAgYFxuLy8gICA8ZGl2IGNsYXNzPVwidG9kYXlzLW9jY3VwYW5jeVwiPlxuLy8gICA8aDM+JHt0b2RheXNQZXJjZW50YWdlfTwvaDM+XG4vLyAgIDwvZGl2PlxuLy8gICBgXG4vLyAgIGhvdGVsT2NjdXBhbmN5VG9uaWdodC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZGF5c1BlcmNlbnQpXG4vLyB9XG5cblxuZnVuY3Rpb24gbG9hZEd1ZXN0RGFzaGJvYXJkKGlkKSB7XG4gIGxldCBhbGxHdWVzdEJvb2tpbmdzID0gdXNlci5maW5kQm9va2luZ3MoaWQsIGJvb2tpbmdzRGF0YS5ib29raW5ncyk7XG4gIGxldCBzb3J0ZWREYXRlcyA9IGFycmFuZ2VyQnlEYXRlKGFsbEd1ZXN0Qm9va2luZ3MpXG4gIGxldCBhbGxEZXRhaWxzID0gZ2V0RGV0YWlscyhzb3J0ZWREYXRlcylcbiAgZG9tVXBkYXRlcy5kaXNwbGF5R3Vlc3RCb29raW5ncyhhbGxEZXRhaWxzKVxuICBkb21VcGRhdGVzLmRpc3BsYXlndWVzdFRvdGFsKGlkLCByb29tc0RhdGEsIGJvb2tpbmdzRGF0YSlcbn1cblxuZnVuY3Rpb24gYXJyYW5nZXJCeURhdGUoZ3Vlc3RSZXNlcnZhdGlvbnMpIHtcbiAgcmV0dXJuIGd1ZXN0UmVzZXJ2YXRpb25zLnNvcnQoKGEsYikgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKVxuICB9KVxufVxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5R3Vlc3RCb29raW5ncyhkYXRhKSB7XG4vLyAgIGRhdGEuZm9yRWFjaChib29raW5nSW5mbz0+IHtcbi8vICAgICBsZXQgZ3Vlc3RCb29raW5ncyA9IFxuLy8gICAgIGBcbi8vICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ndWVzdC1ib29raW5nc1wiPlxuLy8gICAgICAgPGgzPkRhdGU6ICR7Ym9va2luZ0luZm8uZGF0ZX08L2gzPlxuLy8gICAgICAgPHA+Um9vbSB0eXBlOiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLnJvb21UeXBlfTwvcD5cbi8vICAgICAgIDxwPkJpZGV0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmJpZGV0fTwvcD5cbi8vICAgICAgIDxwPkJlZHNpemU6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8uYmVkU2l6ZX08L3A+XG4vLyAgICAgICA8cD5udW1iZXIgb2YgYmVkczogJHtib29raW5nSW5mby5yb29tSW5mby5udW1CZWRzfTwvcD5cbi8vICAgICAgIDxwPmNvc3QgcGVyIG5pZ2h0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmNvc3RQZXJOaWdodH08L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICAgIGd1ZXN0Qm9va2luZ0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBndWVzdEJvb2tpbmdzKVxuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gZ2V0RGV0YWlscyhkYXRhKSB7XG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWxsRGV0YWlscywgcmVzZXJ2YXRpb24pID0+IHtcbiAgICByb29tc0RhdGEucm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgIGlmKHJvb20ubnVtYmVyID09PSByZXNlcnZhdGlvbi5yb29tTnVtYmVyKSB7XG4gICAgICAgIGFsbERldGFpbHMucHVzaCh7J2RhdGUnOnJlc2VydmF0aW9uLmRhdGUsICdyb29tSW5mbyc6IHJvb219KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFsbERldGFpbHNcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIHNlYXJjaEd1ZXN0RGF0YWJhc2UobmFtZSwgcGFzc2VkVXNlckRhdGEsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICBsZXQgc2VhcmNoZWRHdWVzdCA9IG1hbmFnZXIuZmluZEd1ZXN0KHNlYXJjaE5hbWVJbnB1dC52YWx1ZSwgZ3Vlc3REYXRhLnVzZXJzKVxuICBkb21VcGRhdGVzLmRpc3BsYXlTZWFyY2hlZEd1ZXN0TmFtZShzZWFyY2hlZEd1ZXN0Lm5hbWUpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVNlYXJjaGVkR3Vlc3Qoc2VhcmNoZWRHdWVzdCwgZ3Vlc3REYXRhLCBib29raW5nc0RhdGEuYm9va2luZ3MpXG59XG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlndWVzdFRvdGFsKGlkKSB7XG4vLyAgIGxldCBncmFuZFRvdGFsID0gZ3Vlc3RJbmZvcm1hdGlvbi5maW5kVG90YWxTcGVudChpZCwgYm9va2luZ3NEYXRhLHJvb21zRGF0YSlcbi8vICAgbGV0IHRvdGFsID0gXG4vLyAgIGBcbi8vICAgPGRpdiBjbGFzcz1cImd1ZXN0LXRvdGFsXCI+XG4vLyAgICAgPGgzPiR7Z3JhbmRUb3RhbH08L2gzPlxuLy8gICA8L2Rpdj5cbi8vICAgYFxuLy8gICBndWVzdFRvdGFsU3BlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b3RhbClcbi8vIH1cblxuXG5cbiIsImltcG9ydCB1c2VyRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS11c2VyLWRhdGEuanMnO1xuaW1wb3J0IGJvb2tpbmdzRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzJztcbmltcG9ydCByb29tRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1yb29tLWRhdGEuanMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc3JjL3VzZXInO1xubGV0IHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSk7XG5cbmNsYXNzIE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBcbiAgZmluZEd1ZXN0KG5hbWUsIHBhc3NlZFVzZXJEYXRhKSB7XG4gICBsZXQgc2VhcmNoTmFtZSA9IG5hbWUucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbihuYW1lKXtyZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7fSk7XG4gICAgbGV0IGZvdW5kVXNlciA9IHBhc3NlZFVzZXJEYXRhLmZpbmQodXNlciA9PiB7XG4gICAgaWYodXNlci5uYW1lID09PSBzZWFyY2hOYW1lKSB7XG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgIH0pXG4gICBpZihmb3VuZFVzZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICByZXR1cm4gZm91bmRVc2VyXG4gICB9IGVsc2Uge1xuICAgICByZXR1cm4gYFNvcnJ5IG5vIHVzZXIgd2FzIGZvdW5kIHdpdGggdGhlIG5hbWUgJHtuYW1lfWBcbiAgIH1cbiAgfVxuXG4gIGZpbmRHdWVzdEJvb2tpbmdzKG5hbWUsIHBhc3NlZFVzZXJEYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAvLyBsZXQgZm91bmRHdWVzdCA9IHRoaXMuZmluZEd1ZXN0KG5hbWUsIHBhc3NlZFVzZXJEYXRhKVxuICBjb25zb2xlLmxvZyhwYXNzZWRCb29rRGF0YSlcbiAgbGV0IGZvdW5kQm9va2luZ3MgPSB1c2VyLmZpbmRCb29raW5ncyhuYW1lLCBwYXNzZWRCb29rRGF0YSlcbiAgY29uc29sZS5sb2coJ21hbicsIG5hbWUpXG4gIHJldHVybiBmb3VuZEJvb2tpbmdzXG4gIH1cbiAgXG4gIGFtb3VudFNwZW50KHNlYXJjaE5hbWUsIHBhc3NlZFVzZXJEYXRhLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgZm91bmRHdWVzdCA9IHRoaXMuZmluZEd1ZXN0KHNlYXJjaE5hbWUsIHBhc3NlZFVzZXJEYXRhKVxuICAgIGxldCBmb3VuZFRvdGFsID0gdXNlci5maW5kVG90YWxTcGVudChmb3VuZEd1ZXN0LmlkLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpO1xuICAgIHJldHVybiBmb3VuZFRvdGFsXG4gIH0gXG59XG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuXG4iLCJpbXBvcnQgcm9vbURhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtcm9vbS1kYXRhLmpzJztcblxuXG5jbGFzcyBSb29tIHtcbiAgY29uc3RydWN0b3IgKHJvb21EYXRhKSB7XG4gICAgdGhpcy5yb29tRGF0YSA9IHJvb21EYXRhO1xuICB9XG4gIFxuICBmaWx0ZXJUeXBlKGlucHV0KSB7XG4gICAgbGV0IGNoZWNrSW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IGNob2ljZXMgPSByb29tRGF0YS5yZWR1Y2UoKHJlc3VsdHMsIHJvb20pID0+IHtcbiAgICAgIGlmKHJvb20ucm9vbVR5cGUgPT09IGNoZWNrSW5wdXQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJvb20pXG4gICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzXG4gICAgfSwgW10pXG4gICAgaWYoY2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gY2hvaWNlc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJXZSBhcG9sb2dpemUgbm8gcm9vbXMgbWF0Y2ggeW91ciBzZWFyY2gsIHBsZWFzZSBhbHRlciB5b3VyIHNlYXJjaCBhbmQgdHJ5IGFnYWluXCJcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJvb207IiwiaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi4vc3JjL2Jvb2tpbmcnO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuaW1wb3J0IGJvb2tpbmdzRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzJztcbmltcG9ydCByb29tRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1yb29tLWRhdGEuanMnO1xuaW1wb3J0IGd1ZXN0RGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS11c2VyLWRhdGEuanMnO1xuXG5jbGFzcyBVc2VyICB7XG4gIGNvbnN0cnVjdG9yIChndWVzdERhdGEpe1xuICAgIHRoaXMuZ3Vlc3REYXRhID0gZ3Vlc3REYXRhO1xuICB9XG4gIFxuICBmaW5kQm9va2luZ3MocGFzc2VkSWQsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHRoaXNCb29raW5ncyA9IHBhc3NlZEJvb2tEYXRhLnJlZHVjZSgoYWxsVXNlckJvb2tpbmcsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLnVzZXJJRCA9PT0gcGFzc2VkSWQpIHtcbiAgICAgICAgYWxsVXNlckJvb2tpbmcucHVzaChib29raW5nKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbFVzZXJCb29raW5nXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIHRoaXNCb29raW5nc1xuICB9XG4gIFxuICBmaW5kVG90YWxTcGVudChwYXNzZWRJZCwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IHVzZXJCb29raW5ncyA9IHRoaXMuZmluZEJvb2tpbmdzKHBhc3NlZElkLCBwYXNzZWRCb29rRGF0YSk7XG4gICAgbGV0IGdyYW5kVG90YWwgPSB1c2VyQm9va2luZ3MucmVkdWNlKCh0b3RhbCwgYm9va2luZykgPT4ge1xuICAgICAgIHBhc3NlZFJvb21EYXRhLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgIGlmKGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbCArPSByb29tLmNvc3RQZXJOaWdodFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKHRvdGFsICogMTAwMCkgLyAxMDAwKVxuICAgIH0sIDApXG4gICAgcmV0dXJuIGAkJHtncmFuZFRvdGFsfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiY29uc3QgYm9va2luZ3NEYXRhID0gW1xuICB7XCJpZFwiOlwiNWZ3cmd1NGk3azU1aGw2c3pcIixcInVzZXJJRFwiOjksXCJkYXRlXCI6XCIyMDIwLzA0LzIyXCIsXCJyb29tTnVtYmVyXCI6MTUsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0NVwiLFwidXNlcklEXCI6NDMsXCJkYXRlXCI6XCIyMDIwLzAxLzI0XCIsXCJyb29tTnVtYmVyXCI6MjQsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0NlwiLFwidXNlcklEXCI6MTMsXCJkYXRlXCI6XCIyMDIwLzAxLzEwXCIsXCJyb29tTnVtYmVyXCI6MTIsXCJyb29tU2VydmljZUNoYXJnZXNcIjpbXX0sXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZ0N1wiLFwidXNlcklEXCI6MjAsXCJkYXRlXCI6XCIyMDIwLzAyLzE2XCIsXCJyb29tTnVtYmVyXCI6NyxcInJvb21TZXJ2aWNlQ2hhcmdlc1wiOltdfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb2tpbmdzRGF0YTsiLCJcblxuY29uc3Qgcm9vbURhdGEgPSBbXG4gIHtcIm51bWJlclwiOjEsXCJyb29tVHlwZVwiOlwicmVzaWRlbnRpYWwgc3VpdGVcIixcImJpZGV0XCI6dHJ1ZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MSxcImNvc3RQZXJOaWdodFwiOjM1OC40fSxcbiAge1wibnVtYmVyXCI6MixcInJvb21UeXBlXCI6XCJzdWl0ZVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcImZ1bGxcIixcIm51bUJlZHNcIjoyLFwiY29zdFBlck5pZ2h0XCI6NDc3LjM4fSxcbiAge1wibnVtYmVyXCI6NyxcInJvb21UeXBlXCI6XCJzaW5nbGUgcm9vbVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MixcImNvc3RQZXJOaWdodFwiOjIzMS40Nn0sXG4gIHtcIm51bWJlclwiOjQsXCJyb29tVHlwZVwiOlwic2luZ2xlIHJvb21cIixcImJpZGV0XCI6ZmFsc2UsXCJiZWRTaXplXCI6XCJxdWVlblwiLFwibnVtQmVkc1wiOjEsXCJjb3N0UGVyTmlnaHRcIjo0MjkuNDR9LFxuICB7XCJudW1iZXJcIjoyNCxcInJvb21UeXBlXCI6XCJzdWl0ZVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MSxcImNvc3RQZXJOaWdodFwiOjMyNy4yNH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSByb29tRGF0YTtcblxuIiwiY29uc3QgdXNlckRhdGEgPSBbXG4gIHtcImlkXCI6MSxcIm5hbWVcIjpcIkxlYXRoYSBVbGxyaWNoXCJ9LFxuICB7XCJpZFwiOjIsXCJuYW1lXCI6XCJSb2NpbyBTY2h1c3RlclwifSxcbiAge1wiaWRcIjo0MyxcIm5hbWVcIjpcIkVhcmxpbmUgSGFtaWxsXCJ9LFxuICB7XCJpZFwiOjIwLFwibmFtZVwiOlwiS2VvbiBLaXJsaW5cIn0sXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckRhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==