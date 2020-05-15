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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react-iframe/dist/es/iframe.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-iframe/dist/es/iframe.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Iframe = function (_a) {
    var url = _a.url, allowFullScreen = _a.allowFullScreen, position = _a.position, display = _a.display, height = _a.height, width = _a.width, overflow = _a.overflow, styles = _a.styles, onLoad = _a.onLoad, onMouseOver = _a.onMouseOver, onMouseOut = _a.onMouseOut, scrolling = _a.scrolling, id = _a.id, frameBorder = _a.frameBorder, ariaHidden = _a.ariaHidden, sandbox = _a.sandbox, allow = _a.allow, className = _a.className, title = _a.title, ariaLabel = _a.ariaLabel, ariaLabelledby = _a.ariaLabelledby, name = _a.name, target = _a.target, loading = _a.loading, importance = _a.importance, referrerpolicy = _a.referrerpolicy, allowpaymentrequest = _a.allowpaymentrequest, src = _a.src;
    var defaultProps = object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
        src: src || url,
        target: target || null,
        style: {
            position: position || null,
            display: display || "block",
            overflow: overflow || null
        },
        scrolling: scrolling || null,
        allowpaymentrequest: allowpaymentrequest || null,
        importance: importance || null,
        sandbox: sandbox || null,
        loading: loading || null,
        styles: styles || null,
        name: name || null,
        className: className || null,
        referrerpolicy: referrerpolicy || null,
        title: title || null,
        allow: allow || null,
        id: id || null,
        "aria-labelledby": ariaLabelledby || null,
        "aria-hidden": ariaHidden || null,
        "aria-label": ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null
    });
    var props = Object.create(null);
    for (var _i = 0, _b = Object.keys(defaultProps); _i < _b.length; _i++) {
        var prop = _b[_i];
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }
    for (var _c = 0, _d = Object.keys(props.style); _c < _d.length; _c++) {
        var i = _d[_c];
        if (props.style[i] == null) {
            delete props.style[i];
        }
    }
    if (allowFullScreen) {
        if ("allow" in props) {
            var currentAllow = props.allow.replace("fullscreen", "");
            props.allow = ("fullscreen " + currentAllow.trim()).trim();
        }
        else {
            props.allow = "fullscreen";
        }
    }
    if (frameBorder >= 0) {
        if (!props.style.hasOwnProperty("border")) {
            props.style.border = frameBorder;
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", __assign({}, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Iframe);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/dist/es/iframe.js");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");



var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x;
var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    ToggleControl = _wp$components.ToggleControl,
    TextareaControl = _wp$components.TextareaControl;
var withState = wp.compose.withState;



var Embed = function Embed(_ref) {
  var embedData = _ref.embedData,
      className = _ref.className,
      showLinks = _ref.showLinks;

  if (embedData) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "lil-embed ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_iframe__WEBPACK_IMPORTED_MODULE_3__["default"], {
      width: "640",
      height: "360",
      src: embedData.iframeURI,
      allowFullScreen: "true",
      frameBorder: "0",
      style: "position:absolute;width:100%;height:100%;left:0"
    })), showLinks && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "lil-embed__meta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "lil-embed__meta-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: embedData.movieURI
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, embedData.movieTitle))), " ", __("From the course", "lilembed"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: embedData.courseURI
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, embedData.courseTitle)), " ", __("by", "lilembed"), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: embedData.instURI
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, embedData.instName, "."))));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null);
  }
}; // registerBlockType = this.registerBlockType.bind(this);


registerBlockType("lilembed/embed", {
  title: __("LinkedIn Learning", "lilembed"),
  icon: {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"]
  },
  category: "embed",
  attributes: {
    rawEmbedCode: {
      type: "string"
    },
    embedData: {
      type: "object"
    },
    showLinks: {
      type: "boolean",
      default: true
    }
  },
  supports: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
    align: true
  }, "align", ["wide", "full"]),
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        rawEmbedCode = _props$attributes.rawEmbedCode,
        embedData = _props$attributes.embedData,
        showLinks = _props$attributes.showLinks,
        className = props.className,
        setAttributes = props.setAttributes;

    var setEmbedData = function setEmbedData(embedDOM) {
      if (embedDOM.querySelector("iframe").getAttribute("src")) {
        setAttributes({
          embedData: {
            iframeURI: embedDOM.querySelector("iframe").getAttribute("src"),
            movieTitle: embedDOM.querySelectorAll("a")[0].innerHTML,
            movieURI: embedDOM.querySelectorAll("a")[0].getAttribute("href"),
            courseTitle: embedDOM.querySelectorAll("a")[1].innerHTML,
            courseURI: embedDOM.querySelectorAll("a")[1].getAttribute("href"),
            instName: embedDOM.querySelectorAll("a")[2].innerHTML,
            instURI: embedDOM.querySelectorAll("a")[2].getAttribute("href")
          }
        });
      } else {
        setAttributes({
          embedData: null
        });
      }
    }; // Grab newRawEmbedCode, set the value of rawEmbedCode to newRawEmbedCode.


    var onChangeRawEmbedCode = function onChangeRawEmbedCode(event) {
      event.preventDefault();

      var _event$target$childre = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(event.target.children, 1),
          formSubmit = _event$target$childre[0];

      console.log(formSubmit.value);
      var parser = new DOMParser();
      var embedDOM = parser.parseFromString(formSubmit.value, "text/html");
      setEmbedData(embedDOM);
      setAttributes({
        rawEmbedCode: formSubmit.value
      });
    };

    var onChangeShowLinks = function onChangeShowLinks(newShowLinks) {
      setAttributes({
        showLinks: newShowLinks
      });
    };

    var EmbedForm = withState({
      rawEmbedCode: ""
    })(function (_ref2) {
      var rawEmbedCode = _ref2.rawEmbedCode,
          setState = _ref2.setState;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Placeholder, {
        label: __("LinkedIn Learning Embed", "lilembed"),
        className: "lil-embed",
        instructions: __("Paste full embed code for LinkedIn Learning video", "lilembed")
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("form", {
        onSubmit: onChangeRawEmbedCode
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
        type: "text",
        value: rawEmbedCode || "",
        className: "components-placeholder__input",
        "aria-label": __("LinkedIn Learning Embed", "lilembed"),
        placeholder: __("Enter embed code here…"),
        onChange: function onChange(event) {
          return setState({
            rawEmbedCode: event.target.value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
        isPrimary: true,
        type: "submit"
      }, _x("Embed", "button label"))));
    });
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: __("LinkedIn Learning Video", "lilembed")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TextareaControl, {
      label: __("Embed code", "lilembed"),
      value: rawEmbedCode,
      onChange: onChangeRawEmbedCode
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
      className: "components-base-control__label"
    }, __("Show links", "lilembed")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToggleControl, {
      label: "Fixed Background",
      help: showLinks ? "Has fixed background." : "No fixed background.",
      checked: showLinks,
      onChange: function onChange(value) {
        setAttributes({
          showLinks: value
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "".concat(className, " lil-embed-wrapper")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Embed, {
      embedData: embedData,
      className: className,
      showLinks: showLinks
    }), embedData === undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(EmbedForm, null))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        embedData = _props$attributes2.embedData,
        showLinks = _props$attributes2.showLinks,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Embed, {
      embedData: embedData,
      className: className,
      showLinks: showLinks
    });
  }
});

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M29 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM12 26H8V12h4v14zm-2-16c-1.106 0-2-.894-2-2s.894-2 2-2c1.106 0 2 .894 2 2s-.894 2-2 2zm16 16h-4v-8c0-1.106-.894-2-2-2s-2 .894-2 2v8h-4V12h4v2.481C18.825 13.35 20.087 12 21.5 12c2.488 0 4.5 2.238 4.5 5v9z"
});

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 32 32"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0KCmltcG9ydCBSZWFjdCBmcm9tICJyZWFjdCI7Cgp2YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCJwYXRoIiwgewogIGQ6ICJNMjkgMEgzQzEuMzUgMCAwIDEuMzUgMCAzdjI2YzAgMS42NSAxLjM1IDMgMyAzaDI2YzEuNjUgMCAzLTEuMzUgMy0zVjNjMC0xLjY1LTEuMzUtMy0zLTN6TTEyIDI2SDhWMTJoNHYxNHptLTItMTZjLTEuMTA2IDAtMi0uODk0LTItMnMuODk0LTIgMi0yYzEuMTA2IDAgMiAuODk0IDIgMnMtLjg5NCAyLTIgMnptMTYgMTZoLTR2LThjMC0xLjEwNi0uODk0LTItMi0ycy0yIC44OTQtMiAydjhoLTRWMTJoNHYyLjQ4MUMxOC44MjUgMTMuMzUgMjAuMDg3IDEyIDIxLjUgMTJjMi40ODggMCA0LjUgMi4yMzggNC41IDV2OXoiCn0pOwoKdmFyIFN2Z0xvZ28gPSBmdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7CiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCJzdmciLCBfZXh0ZW5kcyh7CiAgICB2aWV3Qm94OiAiMCAwIDMyIDMyIgogIH0sIHByb3BzKSwgX3JlZik7Cn07CgpleHBvcnQgZGVmYXVsdCAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGliR2xzTFd4dloyOGlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURNeUlETXlJaUJtYVd4c1BTSWpNREF3SWlCemRISnZhMlU5SW01dmJtVWlQZ29nSUNBZ1BIQmhkR2dnWkQwaVRUSTVJREJvTFRJMll5MHhMalkxSURBdE15QXhMak0xTFRNZ00zWXlObU13SURFdU5qVWdNUzR6TlNBeklETWdNMmd5Tm1NeExqWTFJREFnTXkweExqTTFJRE10TTNZdE1qWmpNQzB4TGpZMUxURXVNelV0TXkwekxUTjZUVEV5SURJMmFDMDBkaTB4TkdnMGRqRTBlazB4TUNBeE1HTXRNUzR4TURZZ01DMHlMVEF1T0RrMExUSXRNbk13TGpnNU5DMHlJREl0TW1NeExqRXdOaUF3SURJZ01DNDRPVFFnTWlBeWN5MHdMamc1TkNBeUxUSWdNbnBOTWpZZ01qWm9MVFIyTFRoak1DMHhMakV3Tmkwd0xqZzVOQzB5TFRJdE1uTXRNaUF3TGpnNU5DMHlJREoyT0dndE5IWXRNVFJvTkhZeUxqUTRNV013TGpneU5TMHhMakV6TVNBeUxqQTROeTB5TGpRNE1TQXpMalV0TWk0ME9ERWdNaTQwT0RnZ01DQTBMalVnTWk0eU16Z2dOQzQxSURWMk9Yb2lQand2Y0dGMGFENEtQQzl6ZG1jK0NnPT0iOwpleHBvcnQgeyBTdmdMb2dvIGFzIFJlYWN0Q29tcG9uZW50IH07");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map