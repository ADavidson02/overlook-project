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
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nnav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  left: 0px;\n  right: 0px; }\n\nbody {\n  background: #A7D2CB;\n  background-image: url(\"https://image.freepik.com/free-vector/vector-floral-3d-seamless-pattern-background-christmas-invitation-cards-decoration_1284-41314.jpg\");\n  background-position: repeat;\n  font-family: \"Open Sans\";\n  margin: 38px 0px 0px 0px; }\n\n.title {\n  padding: 12em, 0, 0, 0;\n  color: #414141;\n  display: flex;\n  justify-content: center;\n  size: 20em; }\n\nnav ul {\n  background: #874C62;\n  width: 100%;\n  color: #414141;\n  margin: 0;\n  padding: 0.5em; }\n\nnav li {\n  display: inline;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 40px;\n  margin-bottom: 10em; }\n\n.center {\n  background-color: #A7D2CB;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 80%;\n  margin: 2em 0 0 1em;\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n  -moz-box-shadow: 0 10px 6px -6px #777;\n  box-shadow: 0 10px 6px -6px #777; }\n\n.hidden {\n  display: none; }\n\n.login {\n  margin: 8em;\n  color: #414141; }\n\n.login {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  size: 20em; }\n\n.enter {\n  background-color: #874C62;\n  border: none;\n  color: #FFFFFF;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em; }\n\n.password-error,\n.username-error {\n  color: #980008;\n  text: 4em; }\n\n.turing-logo {\n  display: block;\n  size: 10em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/guest-view.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hidden {\n  display: none; }\n\n.new-reservation-button,\n.home-button {\n  background-color: #F2D388;\n  border: none;\n  color: #414141;\n  border-radius: 4px;\n  padding: 0.5em;\n  margin-top: .5em;\n  margin-left: 2em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/manager-view.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/manager-view.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".today {\n  size: 23em; }\n\n.manager-dashboard,\n.manager {\n  color: #FFFFFF;\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: -8px 2px 9px 8px; }\n\n.hidden {\n  display: none; }\n", ""]);



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
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/sample-bookings-data.js */ "./test/sample-bookings-data.js");
/* harmony import */ var _test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_sample_bookings_data_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/sample-room-data.js */ "./test/sample-room-data.js");
/* harmony import */ var _test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_sample_room_data_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/room */ "./src/room.js");




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
  
  occupancyTotal(date, passedBookData, passedRoomData) {
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








// let roomsAvailableTonight = document.querySelector('.available-tonight');
// let hotelRevenueTonight = document.querySelector('.hotel-revenue');
// let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');
// let guestBookingDisplay = document.querySelector('.guest-bookings-display');
// let guestTotalSpent = document.querySelector('.guest-total-spent');

const domUpdates = { 
  todaysAvailable(date, passedBookData) {
    let emptyRooms = booking.availableRooms(date, passedBookData);
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `
    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date, bookData, roomData) {
    let total = bookData.totalRevenue(date, roomData);
    let todaysTotal = 
    ` 
    <div class="todays-total">
    <h3>${total}</h3>
    </div>
    `
    hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
  },

  todaysOccupancy(date, bookData, roomData) {
    let todaysPercentage = bookData.occupancyTotal(date, roomData);
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
  
  displayguestTotal(id,  passedRoomData, passedBookData, passedGuestInfo) {
    let grandTotal = passedGuestInfo.findTotalSpent(id, passedRoomData, passedBookData)
    let total = 
    `
    <div class="guest-total">
      <h3>${grandTotal}</h3>
    </div>
    `
    guestTotalSpent.insertAdjacentHTML('beforeend', total)
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
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/user */ "./src/user.js");
/* harmony import */ var _src_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/room */ "./src/room.js");
/* harmony import */ var _src_booking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/booking */ "./src/booking.js");
/* harmony import */ var _src_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/manager */ "./src/manager.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-display */ "./src/dom-display.js");
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file




// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './index.html'


console.log('This is the JavaScript entry file - your code begins here.');










// import { todaysAvailable, todaysTotalRevenue, todaysOccupancy} from './dom-display';
window.addEventListener('click', windowOnClick);
const recievedGuestData = _fetch__WEBPACK_IMPORTED_MODULE_8__["default"].fetchGuestData();
const recievedRoomData = _fetch__WEBPACK_IMPORTED_MODULE_8__["default"].fetchRoomsData();
const recievedBookingsData = _fetch__WEBPACK_IMPORTED_MODULE_8__["default"].fetchBookingsData();
const loginPage = document.querySelector('.login');
let usernameCaptured = document.querySelector('.username-input');
const passwordCaptured = document.querySelector('.password-input');
const usernameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const guestViews = document.querySelector('.user-view')
const managerViews = document.querySelector('.manager-view');
// let roomsAvailableTonight = document.querySelector('.available-tonight');
// let hotelRevenueTonight = document.querySelector('.hotel-revenue');
// let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');

// let guestBookingDisplay = document.querySelector('.guest-bookings-display');
// let guestTotalSpent = document.querySelector('.guest-total-spent');

let guestData;
let roomsData;
let bookingsData;


Promise.all([recievedGuestData, recievedRoomData, recievedBookingsData])
  .then(value => {
    guestData = value[0];
    roomsData = value[1];
    bookingsData = value[2];
  })

  function hideItem(toHide) {
    toHide.classList.add("hidden");
  }
  
  function showItem(toShow) {
  toShow.classList.remove("hidden");
}

let guestInformation
let todaysRoomData 
let todaysBookings 
let dom
   
function startApp()  {
  guestInformation = new _src_user__WEBPACK_IMPORTED_MODULE_4__["default"](guestData.users[1]);
  todaysBookings = new _src_booking__WEBPACK_IMPORTED_MODULE_6__["default"](bookingsData);
  todaysRoomData = new _src_room__WEBPACK_IMPORTED_MODULE_5__["default"](roomsData);
}

function windowOnClick(event) {
  if (event.target.classList.contains('manager-login')) {
    startApp() 
    checkManagerUsername(usernameCaptured);
    checkForPassword(passwordCaptured);
    if(checkManagerUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      let today = getTodaysDate() 
      runManger(today);
      _dom_display__WEBPACK_IMPORTED_MODULE_9__["default"].todaysAvailable(today, todaysBookings);
      _dom_display__WEBPACK_IMPORTED_MODULE_9__["default"].todaysTotalRevenue(today, todaysBookings, todaysRoomData);
      _dom_display__WEBPACK_IMPORTED_MODULE_9__["default"].todaysOccupancy(today, todaysBookings, todaysRoomData);
    }
  }
  if (event.target.classList.contains('guest-login')) {
    startApp() 
    checkGuestUsername(usernameCaptured);
    checkForPassword(passwordCaptured);
    if(checkGuestUsername(usernameCaptured) === 'good' && checkForPassword(passwordCaptured) === 'good') {
      runGuest()  
    }
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
  hideItem(loginPage)
  hideItem(guestViews)
  showItem(managerViews);
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
  let userNumber = usernameCaptured.value.slice(8,10)
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
  let allGuestBookings = guestInformation.findBookings(id, bookingsData);
  console.log(allGuestBookings)
  let sortedDates = arrangerByDate(allGuestBookings)
  let allDetails = getDetails(sortedDates)
  _dom_display__WEBPACK_IMPORTED_MODULE_9__["default"].displayGuestBookings(allDetails)
  _dom_display__WEBPACK_IMPORTED_MODULE_9__["default"].displayguestTotal(id, todaysRoomData, todaysBookings, guestInformation)
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
  let foundGuest = this.findGuest(name, passedUserData)
  let foundBookings = user.findBookings(foundGuest.id, passedBookData)
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
      return total
    }, 0)
    console.log(grandTotal)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ndWVzdC12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYW5hZ2VyLXZpZXcuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ndWVzdC12aWV3LnNjc3M/ZmE3OSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21hbmFnZXItdmlldy5zY3NzPzNhMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3R1cmluZy1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zYW1wbGUtYm9va2luZ3MtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3NhbXBsZS1yb29tLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9zYW1wbGUtdXNlci1kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBOztBQUVlLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7OztBQ3BDcEI7QUFDQSxHQUFHLGdHQUFnRztBQUNuRyxHQUFHLGlHQUFpRztBQUNwRyxHQUFHLGlHQUFpRztBQUNwRyxHQUFHO0FBQ0g7O0FBRUEsOEI7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLEdBQUcsMEdBQTBHO0FBQzdHLEdBQUcsK0ZBQStGO0FBQ2xHLEdBQUcsc0dBQXNHO0FBQ3pHLEdBQUcsc0dBQXNHO0FBQ3pHLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsR0FBRywrQkFBK0I7QUFDbEMsR0FBRywrQkFBK0I7QUFDbEMsR0FBRyxnQ0FBZ0M7QUFDbkMsR0FBRyw2QkFBNkI7QUFDaEM7O0FBRUEsMEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNBN0QyQ0I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvdmVjdG9yLWZsb3JhbC0zZC1zZWFtbGVzcy1wYXR0ZXJuLWJhY2tncm91bmQtY2hyaXN0bWFzLWludml0YXRpb24tY2FyZHMtZGVjb3JhdGlvbl8xMjg0LTQxMzE0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgbWFyZ2luOiAzOHB4IDBweCAwcHggMHB4OyB9XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDEyZW0sIDAsIDAsIDA7XFxuICBjb2xvcjogIzQxNDE0MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHNpemU6IDIwZW07IH1cXG5cXG5uYXYgdWwge1xcbiAgYmFja2dyb3VuZDogIzg3NEM2MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0MTQxNDE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbm5hdiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwZW07IH1cXG5cXG4uY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0QyQ0I7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMmVtIDAgMCAxZW07XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvZ2luIHtcXG4gIG1hcmdpbjogOGVtO1xcbiAgY29sb3I6ICM0MTQxNDE7IH1cXG5cXG4ubG9naW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBzaXplOiAyMGVtOyB9XFxuXFxuLmVudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzRDNjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luLXRvcDogLjVlbTsgfVxcblxcbi5wYXNzd29yZC1lcnJvcixcXG4udXNlcm5hbWUtZXJyb3Ige1xcbiAgY29sb3I6ICM5ODAwMDg7XFxuICB0ZXh0OiA0ZW07IH1cXG5cXG4udHVyaW5nLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBzaXplOiAxMGVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubmV3LXJlc2VydmF0aW9uLWJ1dHRvbixcXG4uaG9tZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRDM4ODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjNDE0MTQxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJlbTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZGF5IHtcXG4gIHNpemU6IDIzZW07IH1cXG5cXG4ubWFuYWdlci1kYXNoYm9hcmQsXFxuLm1hbmFnZXIge1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcGFkZGluZzogLThweCAycHggOXB4IDhweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgYm9va2luZ3NEYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLWJvb2tpbmdzLWRhdGEuanMnO1xuaW1wb3J0IHJvb21EYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcydcbmltcG9ydCBSb29tIGZyb20gJy4uL3NyYy9yb29tJztcblxuY2xhc3MgQm9va2luZyB7XG4gIGNvbnN0cnVjdG9yKGJvb2tpbmcpIHtcbiAgICB0aGlzLmJvb2tpbmcgPSBib29raW5nO1xuICB9XG4gIFxuICBhdmFpbGFibGVSb29tcyhkYXRlLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCBvY2N1cGllZFJvb20gPSBwYXNzZWRCb29rRGF0YS5maWx0ZXIoYm9vayA9PiB7XG4gICAgcmV0dXJuIGJvb2suZGF0ZSA9PT0gZGF0ZSBcbiAgICB9KVxuICAgIHJldHVybiAoMjUgLSBvY2N1cGllZFJvb20ubGVuZ3RoKVxuICB9XG4gIFxuICB0b3RhbFJldmVudWUoZGF0ZSwgcGFzc2VkQm9va0RhdGEsIHBhc3NlZFJvb21EYXRhKSB7XG4gICAgbGV0IHRvdGFsID0gMFxuICAgIGxldCBsaXN0ID0gdGhpcy5vY2N1cGllZFJvb21zKGRhdGUsIHBhc3NlZEJvb2tEYXRhKTtcbiAgICAgbGlzdC5mb3JFYWNoKHJlc2VydmF0aW9uID0+IHtcbiAgICAgIHBhc3NlZFJvb21EYXRhLmZvckVhY2goaG90ZWxSb29tID0+IHtcbiAgICAgICAgaWYoaG90ZWxSb29tLm51bWJlciA9PT0gcmVzZXJ2YXRpb24ucm9vbU51bWJlcilcbiAgICAgICAgdG90YWwgKz0gaG90ZWxSb29tLmNvc3RQZXJOaWdodFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGAkJHt0b3RhbH1gO1xuICB9XG5cbiAgb2NjdXBpZWRSb29tcyhkYXRlLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIHJldHVybiBwYXNzZWRCb29rRGF0YS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgcmV0dXJuIGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZVxuICAgIH0pXG4gIH1cbiAgXG4gIG9jY3VwYW5jeVRvdGFsKGRhdGUsIHBhc3NlZEJvb2tEYXRhLCBwYXNzZWRSb29tRGF0YSkge1xuICAgIGxldCB0YWtlblJvb21zID0gdGhpcy5vY2N1cGllZFJvb21zKGRhdGUsIHBhc3NlZEJvb2tEYXRhKVxuICAgIGxldCB0b3RhbCA9IHRha2VuUm9vbXMubGVuZ3RoIC8gcGFzc2VkUm9vbURhdGEubGVuZ3RoXG4gICAgbGV0IGZpbmFsID0gKHRvdGFsICogMTAwKVxuICAgIHJldHVybiBgJHtmaW5hbH0lYFxuICB9XG4gIFxuICBcbn1cblxuICBleHBvcnQgZGVmYXVsdCBCb29raW5nO+KAqFxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3Vlc3Qtdmlldy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2d1ZXN0LXZpZXcuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ3Vlc3Qtdmlldy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlci12aWV3LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFuYWdlci12aWV3LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21hbmFnZXItdmlldy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHVzZXJEYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXVzZXItZGF0YS5qcyc7XG5pbXBvcnQgYm9va2luZ3NEYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLWJvb2tpbmdzLWRhdGEuanMnO1xuaW1wb3J0IHJvb21EYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9zcmMvdXNlcic7XG5pbXBvcnQgUm9vbSBmcm9tICcuLi9zcmMvcm9vbSc7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuLi9zcmMvYm9va2luZyc7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuLi9zcmMvbWFuYWdlcic7XG5cbi8vIGxldCByb29tc0F2YWlsYWJsZVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhaWxhYmxlLXRvbmlnaHQnKTtcbi8vIGxldCBob3RlbFJldmVudWVUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLXJldmVudWUnKTtcbi8vIGxldCBob3RlbE9jY3VwYW5jeVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb2NjdXBhbmN5Jyk7XG4vLyBsZXQgZ3Vlc3RCb29raW5nRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1ib29raW5ncy1kaXNwbGF5Jyk7XG4vLyBsZXQgZ3Vlc3RUb3RhbFNwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LXRvdGFsLXNwZW50Jyk7XG5cbmNvbnN0IGRvbVVwZGF0ZXMgPSB7IFxuICB0b2RheXNBdmFpbGFibGUoZGF0ZSwgcGFzc2VkQm9va0RhdGEpIHtcbiAgICBsZXQgZW1wdHlSb29tcyA9IGJvb2tpbmcuYXZhaWxhYmxlUm9vbXMoZGF0ZSwgcGFzc2VkQm9va0RhdGEpO1xuICAgIGxldCByb29tQ291bnQgPSBcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInRvZGF5LWF2YWlsYWJsZVwiPlxuICAgIDxoMz4ke2VtcHR5Um9vbXN9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcm9vbXNBdmFpbGFibGVUb25pZ2h0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcm9vbUNvdW50KVxuICB9LFxuXG4gIHRvZGF5c1RvdGFsUmV2ZW51ZShkYXRlLCBib29rRGF0YSwgcm9vbURhdGEpIHtcbiAgICBsZXQgdG90YWwgPSBib29rRGF0YS50b3RhbFJldmVudWUoZGF0ZSwgcm9vbURhdGEpO1xuICAgIGxldCB0b2RheXNUb3RhbCA9IFxuICAgIGAgXG4gICAgPGRpdiBjbGFzcz1cInRvZGF5cy10b3RhbFwiPlxuICAgIDxoMz4ke3RvdGFsfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGhvdGVsUmV2ZW51ZVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNUb3RhbCk7XG4gIH0sXG5cbiAgdG9kYXlzT2NjdXBhbmN5KGRhdGUsIGJvb2tEYXRhLCByb29tRGF0YSkge1xuICAgIGxldCB0b2RheXNQZXJjZW50YWdlID0gYm9va0RhdGEub2NjdXBhbmN5VG90YWwoZGF0ZSwgcm9vbURhdGEpO1xuICAgIGxldCB0b2RheXNQZXJjZW50ID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RheXMtb2NjdXBhbmN5XCI+XG4gICAgPGgzPiR7dG9kYXlzUGVyY2VudGFnZX08L2gzPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBob3RlbE9jY3VwYW5jeVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNQZXJjZW50KVxuICB9LFxuICBcbiAgZGlzcGxheUd1ZXN0Qm9va2luZ3MoZGF0YSkge1xuICAgIGRhdGEuZm9yRWFjaChib29raW5nSW5mbz0+IHtcbiAgICAgIGxldCBndWVzdEJvb2tpbmdzID0gXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ndWVzdC1ib29raW5nc1wiPlxuICAgICAgICA8aDM+RGF0ZTogJHtib29raW5nSW5mby5kYXRlfTwvaDM+XG4gICAgICAgIDxwPlJvb20gdHlwZTogJHtib29raW5nSW5mby5yb29tSW5mby5yb29tVHlwZX08L3A+XG4gICAgICAgIDxwPkJpZGV0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmJpZGV0fTwvcD5cbiAgICAgICAgPHA+QmVkc2l6ZTogJHtib29raW5nSW5mby5yb29tSW5mby5iZWRTaXplfTwvcD5cbiAgICAgICAgPHA+bnVtYmVyIG9mIGJlZHM6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8ubnVtQmVkc308L3A+XG4gICAgICAgIDxwPmNvc3QgcGVyIG5pZ2h0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICAgIGd1ZXN0Qm9va2luZ0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBndWVzdEJvb2tpbmdzKVxuICAgIH0pO1xuICB9LFxuICBcbiAgZGlzcGxheWd1ZXN0VG90YWwoaWQsICBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEsIHBhc3NlZEd1ZXN0SW5mbykge1xuICAgIGxldCBncmFuZFRvdGFsID0gcGFzc2VkR3Vlc3RJbmZvLmZpbmRUb3RhbFNwZW50KGlkLCBwYXNzZWRSb29tRGF0YSwgcGFzc2VkQm9va0RhdGEpXG4gICAgbGV0IHRvdGFsID0gXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJndWVzdC10b3RhbFwiPlxuICAgICAgPGgzPiR7Z3JhbmRUb3RhbH08L2gzPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBndWVzdFRvdGFsU3BlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b3RhbClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImNvbnN0IHJlcXVlc3RzID0ge1xuICBmZXRjaEd1ZXN0RGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2Vyc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLy8gLnRoZW4oZGF0YSA9PiBkYXRhLmd1ZXN0RGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaFJvb21zRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEucm9vbXNEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBmZXRjaEJvb2tpbmdzRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5nc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3NEYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG4gIFxuICBwb3N0TmV3Qm9va2luZygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwidXNlcklEXCI6IDIyLFxuICAgICAgXCJkYXRlXCI6IFwiMjAxOS8wOS8yM1wiLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IDRcbiAgfSksXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfSwgIFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0czsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3R1cmluZy1sb2dvLnBuZ1wiOyIsIi8vIFRoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZVxuLy8gRG8gbm90IGRlbGV0ZSBvciByZW5hbWUgdGhpcyBmaWxlICoqKioqKioqXG5cbi8vIEFuIGV4YW1wbGUgb2YgaG93IHlvdSB0ZWxsIHdlYnBhY2sgdG8gdXNlIGEgQ1NTIChTQ1NTKSBmaWxlXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcblxuLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGFsc28gbmVlZCB0byBsaW5rIHRvIGl0IGluIHRoZSBpbmRleC5odG1sKVxuLy8gaW1wb3J0ICcuL2luZGV4Lmh0bWwnXG5pbXBvcnQgJy4vaW1hZ2VzL3R1cmluZy1sb2dvLnBuZydcblxuY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZS4nKTtcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc3JjL3VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vc3JjL3Jvb20nO1xuaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi4vc3JjL2Jvb2tpbmcnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi4vc3JjL21hbmFnZXInO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tZGlzcGxheSc7XG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL21hbmFnZXItdmlldy5zY3NzJztcbmltcG9ydCAnLi9jc3MvZ3Vlc3Qtdmlldy5zY3NzJztcbi8vIGltcG9ydCB7IHRvZGF5c0F2YWlsYWJsZSwgdG9kYXlzVG90YWxSZXZlbnVlLCB0b2RheXNPY2N1cGFuY3l9IGZyb20gJy4vZG9tLWRpc3BsYXknO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5jb25zdCByZWNpZXZlZEd1ZXN0RGF0YSA9IHJlcXVlc3RzLmZldGNoR3Vlc3REYXRhKCk7XG5jb25zdCByZWNpZXZlZFJvb21EYXRhID0gcmVxdWVzdHMuZmV0Y2hSb29tc0RhdGEoKTtcbmNvbnN0IHJlY2lldmVkQm9va2luZ3NEYXRhID0gcmVxdWVzdHMuZmV0Y2hCb29raW5nc0RhdGEoKTtcbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpO1xubGV0IHVzZXJuYW1lQ2FwdHVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkQ2FwdHVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IHVzZXJuYW1lRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtZXJyb3InKTtcbmNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtZXJyb3InKTtcbmNvbnN0IGd1ZXN0Vmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci12aWV3JylcbmNvbnN0IG1hbmFnZXJWaWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXZpZXcnKTtcbi8vIGxldCByb29tc0F2YWlsYWJsZVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhaWxhYmxlLXRvbmlnaHQnKTtcbi8vIGxldCBob3RlbFJldmVudWVUb25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLXJldmVudWUnKTtcbi8vIGxldCBob3RlbE9jY3VwYW5jeVRvbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb2NjdXBhbmN5Jyk7XG5cbi8vIGxldCBndWVzdEJvb2tpbmdEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LWJvb2tpbmdzLWRpc3BsYXknKTtcbi8vIGxldCBndWVzdFRvdGFsU3BlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3QtdG90YWwtc3BlbnQnKTtcblxubGV0IGd1ZXN0RGF0YTtcbmxldCByb29tc0RhdGE7XG5sZXQgYm9va2luZ3NEYXRhO1xuXG5cblByb21pc2UuYWxsKFtyZWNpZXZlZEd1ZXN0RGF0YSwgcmVjaWV2ZWRSb29tRGF0YSwgcmVjaWV2ZWRCb29raW5nc0RhdGFdKVxuICAudGhlbih2YWx1ZSA9PiB7XG4gICAgZ3Vlc3REYXRhID0gdmFsdWVbMF07XG4gICAgcm9vbXNEYXRhID0gdmFsdWVbMV07XG4gICAgYm9va2luZ3NEYXRhID0gdmFsdWVbMl07XG4gIH0pXG5cbiAgZnVuY3Rpb24gaGlkZUl0ZW0odG9IaWRlKSB7XG4gICAgdG9IaWRlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHNob3dJdGVtKHRvU2hvdykge1xuICB0b1Nob3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxubGV0IGd1ZXN0SW5mb3JtYXRpb25cbmxldCB0b2RheXNSb29tRGF0YSBcbmxldCB0b2RheXNCb29raW5ncyBcbmxldCBkb21cbiAgIFxuZnVuY3Rpb24gc3RhcnRBcHAoKSAge1xuICBndWVzdEluZm9ybWF0aW9uID0gbmV3IFVzZXIoZ3Vlc3REYXRhLnVzZXJzWzFdKTtcbiAgdG9kYXlzQm9va2luZ3MgPSBuZXcgQm9va2luZyhib29raW5nc0RhdGEpO1xuICB0b2RheXNSb29tRGF0YSA9IG5ldyBSb29tKHJvb21zRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21hbmFnZXItbG9naW4nKSkge1xuICAgIHN0YXJ0QXBwKCkgXG4gICAgY2hlY2tNYW5hZ2VyVXNlcm5hbWUodXNlcm5hbWVDYXB0dXJlZCk7XG4gICAgY2hlY2tGb3JQYXNzd29yZChwYXNzd29yZENhcHR1cmVkKTtcbiAgICBpZihjaGVja01hbmFnZXJVc2VybmFtZSh1c2VybmFtZUNhcHR1cmVkKSA9PT0gJ2dvb2QnICYmIGNoZWNrRm9yUGFzc3dvcmQocGFzc3dvcmRDYXB0dXJlZCkgPT09ICdnb29kJykge1xuICAgICAgbGV0IHRvZGF5ID0gZ2V0VG9kYXlzRGF0ZSgpIFxuICAgICAgcnVuTWFuZ2VyKHRvZGF5KTtcbiAgICAgIGRvbVVwZGF0ZXMudG9kYXlzQXZhaWxhYmxlKHRvZGF5LCB0b2RheXNCb29raW5ncyk7XG4gICAgICBkb21VcGRhdGVzLnRvZGF5c1RvdGFsUmV2ZW51ZSh0b2RheSwgdG9kYXlzQm9va2luZ3MsIHRvZGF5c1Jvb21EYXRhKTtcbiAgICAgIGRvbVVwZGF0ZXMudG9kYXlzT2NjdXBhbmN5KHRvZGF5LCB0b2RheXNCb29raW5ncywgdG9kYXlzUm9vbURhdGEpO1xuICAgIH1cbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ3Vlc3QtbG9naW4nKSkge1xuICAgIHN0YXJ0QXBwKCkgXG4gICAgY2hlY2tHdWVzdFVzZXJuYW1lKHVzZXJuYW1lQ2FwdHVyZWQpO1xuICAgIGNoZWNrRm9yUGFzc3dvcmQocGFzc3dvcmRDYXB0dXJlZCk7XG4gICAgaWYoY2hlY2tHdWVzdFVzZXJuYW1lKHVzZXJuYW1lQ2FwdHVyZWQpID09PSAnZ29vZCcgJiYgY2hlY2tGb3JQYXNzd29yZChwYXNzd29yZENhcHR1cmVkKSA9PT0gJ2dvb2QnKSB7XG4gICAgICBydW5HdWVzdCgpICBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tNYW5hZ2VyVXNlcm5hbWUoaW5wdXROYW1lKSB7XG4gIGhpZGVJdGVtKHVzZXJuYW1lRXJyb3IpO1xuICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHNob3dJdGVtKHVzZXJuYW1lRXJyb3IpO1xuICAgIHJldHVybiBcbiAgfSBlbHNlIGlmKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPiAwICkge1xuICAgIGxldCBjaGVja2VkVXNlcm5hbWUgPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgbGV0IGxvd2VyZWRVc2VybmFtZSA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRVc2VybmFtZSlcbiAgICBpZiAobG93ZXJlZFVzZXJuYW1lICE9PSAnbWFuYWdlcicpIHtcbiAgICAgIHNob3dJdGVtKHVzZXJuYW1lRXJyb3IpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGxvd2VyZWRVc2VybmFtZSA9PT0gJ21hbmFnZXInKVxuICAgIGhpZGVJdGVtKHVzZXJuYW1lRXJyb3IpXG4gICAgcmV0dXJuICdnb29kJ1xuICB9XG59IFxuXG5mdW5jdGlvbiBjaGVja0ZvclBhc3N3b3JkKGlucHV0UGFzc3dvcmQpIHtcbiAgaGlkZUl0ZW0ocGFzc3dvcmRFcnJvcilcbiAgaWYgKGlucHV0UGFzc3dvcmQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgc2hvd0l0ZW0ocGFzc3dvcmRFcnJvcik7XG4gICAgcmV0dXJuXG4gIH0gZWxzZSBpZiAoIGlucHV0UGFzc3dvcmQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGxldCBjaGVja2VkUGFzc3dvcmQgPSBpbnB1dFBhc3N3b3JkLnZhbHVlO1xuICAgIGxldCBsb3dlcmVkUGFzc3dvcmQgPSBsb3dlckNhc2VJbnB1dChjaGVja2VkUGFzc3dvcmQpO1xuICAgIGlmIChsb3dlcmVkUGFzc3dvcmQgIT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgICBzaG93SXRlbShwYXNzd29yZEVycm9yKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChsb3dlcmVkUGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgICByZXR1cm4gJ2dvb2QnXG4gICAgfSBcbiAgfVxufVxuXG5mdW5jdGlvbiBsb3dlckNhc2VJbnB1dChpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBydW5NYW5nZXIoZGF0ZSkge1xuICBoaWRlSXRlbShsb2dpblBhZ2UpXG4gIGhpZGVJdGVtKGd1ZXN0Vmlld3MpXG4gIHNob3dJdGVtKG1hbmFnZXJWaWV3cyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrR3Vlc3RVc2VybmFtZShpbnB1dE5hbWUpIHtcbiAgaGlkZUl0ZW0odXNlcm5hbWVFcnJvcilcbiAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICBzaG93SXRlbSh1c2VybmFtZUVycm9yKTtcbiAgICByZXR1cm4gXG4gIH0gZWxzZSBpZihpbnB1dE5hbWUudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICBsZXQgY2hlY2tlZFVzZXJuYW1lID0gaW5wdXROYW1lLnZhbHVlXG4gICAgbGV0IGxvd2VyZWRVc2VybmFtZSA9IGxvd2VyQ2FzZUlucHV0KGNoZWNrZWRVc2VybmFtZSlcbiAgICBpZiAoIWxvd2VyZWRVc2VybmFtZS5pbmNsdWRlcygnY3VzdG9tZXInKSkge1xuICAgICAgc2hvd0l0ZW0odXNlcm5hbWVFcnJvcilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAobG93ZXJlZFVzZXJuYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpKVxuICAgIHJldHVybiAnZ29vZCdcbiAgfVxufSBcblxuZnVuY3Rpb24gcnVuR3Vlc3QoKSB7XG4gIGhpZGVJdGVtKGxvZ2luUGFnZSlcbiAgaGlkZUl0ZW0obWFuYWdlclZpZXdzKVxuICBzaG93SXRlbShndWVzdFZpZXdzKVxuICBsZXQgdXNlck51bWJlciA9IHVzZXJuYW1lQ2FwdHVyZWQudmFsdWUuc2xpY2UoOCwxMClcbiAgbG9hZEd1ZXN0RGFzaGJvYXJkKCt1c2VyTnVtYmVyKVxufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNEYXRlKCkge1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiB0b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkO1xufVxuXG4vLyBmdW5jdGlvbiB0b2RheXNBdmFpbGFibGUoZGF0ZSkge1xuLy8gICBsZXQgZW1wdHlSb29tcyA9IHRvZGF5c0Jvb2tpbmdzLmF2YWlsYWJsZVJvb21zKGRhdGUpO1xuLy8gICBsZXQgcm9vbUNvdW50ID0gXG4vLyAgIGBcbi8vICAgPGRpdiBjbGFzcz1cInRvZGF5LWF2YWlsYWJsZVwiPlxuLy8gICA8aDM+JHtlbXB0eVJvb21zfTwvaDM+XG4vLyAgIDwvZGl2PlxuLy8gICBgXG4vLyAgIHJvb21zQXZhaWxhYmxlVG9uaWdodC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21Db3VudClcbi8vIH1cbi8vIFxuLy8gZnVuY3Rpb24gdG9kYXlzVG90YWxSZXZlbnVlKGRhdGUpIHtcbi8vICAgbGV0IHRvdGFsID0gdG9kYXlzQm9va2luZ3MudG90YWxSZXZlbnVlKGRhdGUsIHJvb21zRGF0YSk7XG4vLyAgIGxldCB0b2RheXNUb3RhbCA9IFxuLy8gICBgIFxuLy8gICA8ZGl2IGNsYXNzPVwidG9kYXlzLXRvdGFsXCI+XG4vLyAgIDxoMz4ke3RvdGFsfTwvaDM+XG4vLyAgIDwvZGl2PlxuLy8gICBgXG4vLyAgIGhvdGVsUmV2ZW51ZVRvbmlnaHQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNUb3RhbCk7XG4vLyB9XG4vLyBcbi8vIFxuLy8gZnVuY3Rpb24gdG9kYXlzT2NjdXBhbmN5KGRhdGUpIHtcbi8vICAgbGV0IHRvZGF5c1BlcmNlbnRhZ2UgPSB0b2RheXNCb29raW5ncy5vY2N1cGFuY3lUb3RhbChkYXRlLCByb29tc0RhdGEpO1xuLy8gICBsZXQgdG9kYXlzUGVyY2VudCA9IFxuLy8gICBgXG4vLyAgIDxkaXYgY2xhc3M9XCJ0b2RheXMtb2NjdXBhbmN5XCI+XG4vLyAgIDxoMz4ke3RvZGF5c1BlcmNlbnRhZ2V9PC9oMz5cbi8vICAgPC9kaXY+XG4vLyAgIGBcbi8vICAgaG90ZWxPY2N1cGFuY3lUb25pZ2h0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9kYXlzUGVyY2VudClcbi8vIH1cblxuXG5mdW5jdGlvbiBsb2FkR3Vlc3REYXNoYm9hcmQoaWQpIHtcbiAgbGV0IGFsbEd1ZXN0Qm9va2luZ3MgPSBndWVzdEluZm9ybWF0aW9uLmZpbmRCb29raW5ncyhpZCwgYm9va2luZ3NEYXRhKTtcbiAgY29uc29sZS5sb2coYWxsR3Vlc3RCb29raW5ncylcbiAgbGV0IHNvcnRlZERhdGVzID0gYXJyYW5nZXJCeURhdGUoYWxsR3Vlc3RCb29raW5ncylcbiAgbGV0IGFsbERldGFpbHMgPSBnZXREZXRhaWxzKHNvcnRlZERhdGVzKVxuICBkb21VcGRhdGVzLmRpc3BsYXlHdWVzdEJvb2tpbmdzKGFsbERldGFpbHMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheWd1ZXN0VG90YWwoaWQsIHRvZGF5c1Jvb21EYXRhLCB0b2RheXNCb29raW5ncywgZ3Vlc3RJbmZvcm1hdGlvbilcbn1cblxuZnVuY3Rpb24gYXJyYW5nZXJCeURhdGUoZ3Vlc3RSZXNlcnZhdGlvbnMpIHtcbiAgcmV0dXJuIGd1ZXN0UmVzZXJ2YXRpb25zLnNvcnQoKGEsYikgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKVxuICB9KVxufVxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5R3Vlc3RCb29raW5ncyhkYXRhKSB7XG4vLyAgIGRhdGEuZm9yRWFjaChib29raW5nSW5mbz0+IHtcbi8vICAgICBsZXQgZ3Vlc3RCb29raW5ncyA9IFxuLy8gICAgIGBcbi8vICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1ndWVzdC1ib29raW5nc1wiPlxuLy8gICAgICAgPGgzPkRhdGU6ICR7Ym9va2luZ0luZm8uZGF0ZX08L2gzPlxuLy8gICAgICAgPHA+Um9vbSB0eXBlOiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLnJvb21UeXBlfTwvcD5cbi8vICAgICAgIDxwPkJpZGV0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmJpZGV0fTwvcD5cbi8vICAgICAgIDxwPkJlZHNpemU6ICR7Ym9va2luZ0luZm8ucm9vbUluZm8uYmVkU2l6ZX08L3A+XG4vLyAgICAgICA8cD5udW1iZXIgb2YgYmVkczogJHtib29raW5nSW5mby5yb29tSW5mby5udW1CZWRzfTwvcD5cbi8vICAgICAgIDxwPmNvc3QgcGVyIG5pZ2h0OiAke2Jvb2tpbmdJbmZvLnJvb21JbmZvLmNvc3RQZXJOaWdodH08L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICAgIGd1ZXN0Qm9va2luZ0Rpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBndWVzdEJvb2tpbmdzKVxuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gZ2V0RGV0YWlscyhkYXRhKSB7XG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWxsRGV0YWlscywgcmVzZXJ2YXRpb24pID0+IHtcbiAgICByb29tc0RhdGEucm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgIGlmKHJvb20ubnVtYmVyID09PSByZXNlcnZhdGlvbi5yb29tTnVtYmVyKSB7XG4gICAgICAgIGFsbERldGFpbHMucHVzaCh7J2RhdGUnOnJlc2VydmF0aW9uLmRhdGUsICdyb29tSW5mbyc6IHJvb219KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFsbERldGFpbHNcbiAgfSwgW10pXG59XG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlndWVzdFRvdGFsKGlkKSB7XG4vLyAgIGxldCBncmFuZFRvdGFsID0gZ3Vlc3RJbmZvcm1hdGlvbi5maW5kVG90YWxTcGVudChpZCwgYm9va2luZ3NEYXRhLHJvb21zRGF0YSlcbi8vICAgbGV0IHRvdGFsID0gXG4vLyAgIGBcbi8vICAgPGRpdiBjbGFzcz1cImd1ZXN0LXRvdGFsXCI+XG4vLyAgICAgPGgzPiR7Z3JhbmRUb3RhbH08L2gzPlxuLy8gICA8L2Rpdj5cbi8vICAgYFxuLy8gICBndWVzdFRvdGFsU3BlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b3RhbClcbi8vIH1cblxuXG5cbiIsImltcG9ydCB1c2VyRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS11c2VyLWRhdGEuanMnO1xuaW1wb3J0IGJvb2tpbmdzRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1ib29raW5ncy1kYXRhLmpzJztcbmltcG9ydCByb29tRGF0YSBmcm9tICcuLi90ZXN0L3NhbXBsZS1yb29tLWRhdGEuanMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc3JjL3VzZXInO1xubGV0IHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSk7XG5cbmNsYXNzIE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBcbiAgZmluZEd1ZXN0KG5hbWUsIHBhc3NlZFVzZXJEYXRhKSB7XG4gICBsZXQgc2VhcmNoTmFtZSA9IG5hbWUucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbihuYW1lKXtyZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7fSk7XG4gICAgbGV0IGZvdW5kVXNlciA9IHBhc3NlZFVzZXJEYXRhLmZpbmQodXNlciA9PiB7XG4gICAgaWYodXNlci5uYW1lID09PSBzZWFyY2hOYW1lKSB7XG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgIH0pXG4gICBpZihmb3VuZFVzZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICByZXR1cm4gZm91bmRVc2VyXG4gICB9IGVsc2Uge1xuICAgICByZXR1cm4gYFNvcnJ5IG5vIHVzZXIgd2FzIGZvdW5kIHdpdGggdGhlIG5hbWUgJHtuYW1lfWBcbiAgIH1cbiAgfVxuXG4gIGZpbmRHdWVzdEJvb2tpbmdzKG5hbWUsIHBhc3NlZFVzZXJEYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICBsZXQgZm91bmRHdWVzdCA9IHRoaXMuZmluZEd1ZXN0KG5hbWUsIHBhc3NlZFVzZXJEYXRhKVxuICBsZXQgZm91bmRCb29raW5ncyA9IHVzZXIuZmluZEJvb2tpbmdzKGZvdW5kR3Vlc3QuaWQsIHBhc3NlZEJvb2tEYXRhKVxuICByZXR1cm4gZm91bmRCb29raW5nc1xuICB9XG4gIFxuICBhbW91bnRTcGVudChzZWFyY2hOYW1lLCBwYXNzZWRVc2VyRGF0YSwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKSB7XG4gICAgbGV0IGZvdW5kR3Vlc3QgPSB0aGlzLmZpbmRHdWVzdChzZWFyY2hOYW1lLCBwYXNzZWRVc2VyRGF0YSlcbiAgICBsZXQgZm91bmRUb3RhbCA9IHVzZXIuZmluZFRvdGFsU3BlbnQoZm91bmRHdWVzdC5pZCwgcGFzc2VkUm9vbURhdGEsIHBhc3NlZEJvb2tEYXRhKTtcbiAgICByZXR1cm4gZm91bmRUb3RhbFxuICB9IFxufVxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjtcblxuIiwiaW1wb3J0IHJvb21EYXRhIGZyb20gJy4uL3Rlc3Qvc2FtcGxlLXJvb20tZGF0YS5qcyc7XG5cblxuY2xhc3MgUm9vbSB7XG4gIGNvbnN0cnVjdG9yIChyb29tRGF0YSkge1xuICAgIHRoaXMucm9vbURhdGEgPSByb29tRGF0YTtcbiAgfVxuICBcbiAgZmlsdGVyVHlwZShpbnB1dCkge1xuICAgIGxldCBjaGVja0lucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuICAgIGxldCBjaG9pY2VzID0gcm9vbURhdGEucmVkdWNlKChyZXN1bHRzLCByb29tKSA9PiB7XG4gICAgICBpZihyb29tLnJvb21UeXBlID09PSBjaGVja0lucHV0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChyb29tKVxuICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0sIFtdKVxuICAgIGlmKGNob2ljZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGNob2ljZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiV2UgYXBvbG9naXplIG5vIHJvb21zIG1hdGNoIHlvdXIgc2VhcmNoLCBwbGVhc2UgYWx0ZXIgeW91ciBzZWFyY2ggYW5kIHRyeSBhZ2FpblwiXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSb29tOyIsImltcG9ydCBCb29raW5nIGZyb20gJy4uL3NyYy9ib29raW5nJztcbmltcG9ydCBSb29tIGZyb20gJy4uL3NyYy9yb29tJztcbmltcG9ydCBib29raW5nc0RhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtYm9va2luZ3MtZGF0YS5qcyc7XG5pbXBvcnQgcm9vbURhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtcm9vbS1kYXRhLmpzJztcbmltcG9ydCBndWVzdERhdGEgZnJvbSAnLi4vdGVzdC9zYW1wbGUtdXNlci1kYXRhLmpzJztcblxuY2xhc3MgVXNlciAge1xuICBjb25zdHJ1Y3RvciAoZ3Vlc3REYXRhKXtcbiAgICB0aGlzLmd1ZXN0RGF0YSA9IGd1ZXN0RGF0YTtcbiAgfVxuICBcbiAgZmluZEJvb2tpbmdzKHBhc3NlZElkLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCB0aGlzQm9va2luZ3MgPSBwYXNzZWRCb29rRGF0YS5yZWR1Y2UoKGFsbFVzZXJCb29raW5nLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy51c2VySUQgPT09IHBhc3NlZElkKSB7XG4gICAgICAgIGFsbFVzZXJCb29raW5nLnB1c2goYm9va2luZylcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxVc2VyQm9va2luZ1xuICAgIH0sIFtdKVxuICAgIHJldHVybiB0aGlzQm9va2luZ3NcbiAgfVxuICBcbiAgZmluZFRvdGFsU3BlbnQocGFzc2VkSWQsIHBhc3NlZFJvb21EYXRhLCBwYXNzZWRCb29rRGF0YSkge1xuICAgIGxldCB1c2VyQm9va2luZ3MgPSB0aGlzLmZpbmRCb29raW5ncyhwYXNzZWRJZCwgcGFzc2VkQm9va0RhdGEpO1xuICAgIGxldCBncmFuZFRvdGFsID0gdXNlckJvb2tpbmdzLnJlZHVjZSgodG90YWwsIGJvb2tpbmcpID0+IHtcbiAgICAgICBwYXNzZWRSb29tRGF0YS5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICBpZihib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgICAgdG90YWwgKz0gcm9vbS5jb3N0UGVyTmlnaHRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0sIDApXG4gICAgY29uc29sZS5sb2coZ3JhbmRUb3RhbClcbiAgICByZXR1cm4gYCQke2dyYW5kVG90YWx9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJjb25zdCBib29raW5nc0RhdGEgPSBbXG4gIHtcImlkXCI6XCI1ZndyZ3U0aTdrNTVobDZzelwiLFwidXNlcklEXCI6OSxcImRhdGVcIjpcIjIwMjAvMDQvMjJcIixcInJvb21OdW1iZXJcIjoxNSxcInJvb21TZXJ2aWNlQ2hhcmdlc1wiOltdfSxcbiAge1wiaWRcIjpcIjVmd3JndTRpN2s1NWhsNnQ1XCIsXCJ1c2VySURcIjo0MyxcImRhdGVcIjpcIjIwMjAvMDEvMjRcIixcInJvb21OdW1iZXJcIjoyNCxcInJvb21TZXJ2aWNlQ2hhcmdlc1wiOltdfSxcbiAge1wiaWRcIjpcIjVmd3JndTRpN2s1NWhsNnQ2XCIsXCJ1c2VySURcIjoxMyxcImRhdGVcIjpcIjIwMjAvMDEvMTBcIixcInJvb21OdW1iZXJcIjoxMixcInJvb21TZXJ2aWNlQ2hhcmdlc1wiOltdfSxcbiAge1wiaWRcIjpcIjVmd3JndTRpN2s1NWhsNnQ3XCIsXCJ1c2VySURcIjoyMCxcImRhdGVcIjpcIjIwMjAvMDIvMTZcIixcInJvb21OdW1iZXJcIjo3LFwicm9vbVNlcnZpY2VDaGFyZ2VzXCI6W119XG5dXG5cbm1vZHVsZS5leHBvcnRzID0gYm9va2luZ3NEYXRhOyIsIlxuXG5jb25zdCByb29tRGF0YSA9IFtcbiAge1wibnVtYmVyXCI6MSxcInJvb21UeXBlXCI6XCJyZXNpZGVudGlhbCBzdWl0ZVwiLFwiYmlkZXRcIjp0cnVlLFwiYmVkU2l6ZVwiOlwicXVlZW5cIixcIm51bUJlZHNcIjoxLFwiY29zdFBlck5pZ2h0XCI6MzU4LjR9LFxuICB7XCJudW1iZXJcIjoyLFwicm9vbVR5cGVcIjpcInN1aXRlXCIsXCJiaWRldFwiOmZhbHNlLFwiYmVkU2l6ZVwiOlwiZnVsbFwiLFwibnVtQmVkc1wiOjIsXCJjb3N0UGVyTmlnaHRcIjo0NzcuMzh9LFxuICB7XCJudW1iZXJcIjo3LFwicm9vbVR5cGVcIjpcInNpbmdsZSByb29tXCIsXCJiaWRldFwiOmZhbHNlLFwiYmVkU2l6ZVwiOlwicXVlZW5cIixcIm51bUJlZHNcIjoyLFwiY29zdFBlck5pZ2h0XCI6MjMxLjQ2fSxcbiAge1wibnVtYmVyXCI6NCxcInJvb21UeXBlXCI6XCJzaW5nbGUgcm9vbVwiLFwiYmlkZXRcIjpmYWxzZSxcImJlZFNpemVcIjpcInF1ZWVuXCIsXCJudW1CZWRzXCI6MSxcImNvc3RQZXJOaWdodFwiOjQyOS40NH0sXG4gIHtcIm51bWJlclwiOjI0LFwicm9vbVR5cGVcIjpcInN1aXRlXCIsXCJiaWRldFwiOmZhbHNlLFwiYmVkU2l6ZVwiOlwicXVlZW5cIixcIm51bUJlZHNcIjoxLFwiY29zdFBlck5pZ2h0XCI6MzI3LjI0fVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb21EYXRhO1xuXG4iLCJjb25zdCB1c2VyRGF0YSA9IFtcbiAge1wiaWRcIjoxLFwibmFtZVwiOlwiTGVhdGhhIFVsbHJpY2hcIn0sXG4gIHtcImlkXCI6MixcIm5hbWVcIjpcIlJvY2lvIFNjaHVzdGVyXCJ9LFxuICB7XCJpZFwiOjQzLFwibmFtZVwiOlwiRWFybGluZSBIYW1pbGxcIn0sXG4gIHtcImlkXCI6MjAsXCJuYW1lXCI6XCJLZW9uIEtpcmxpblwifSxcbl1cblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9