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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vue = __webpack_require__(87);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(286);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(275);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	var _vueAsyncData = __webpack_require__(214);
	
	var _vueAsyncData2 = _interopRequireDefault(_vueAsyncData);
	
	var _routes = __webpack_require__(90);
	
	var _viewsAppVue = __webpack_require__(248);
	
	var _viewsAppVue2 = _interopRequireDefault(_viewsAppVue);
	
	__webpack_require__(178);
	
	__webpack_require__(176).polyfill();
	
	_vue2['default'].config.debug = true;
	
	// install router
	_vue2['default'].use(_vueRouter2['default']);
	
	// Load Resource
	_vue2['default'].use(_vueResource2['default']);
	
	// use globally
	// you can also just use `VueAsyncData.mixin` where needed
	_vue2['default'].use(_vueAsyncData2['default']);
	
	// create router
	var router = new _vueRouter2['default']({
	  saveScrollPosition: true
	});
	
	// configure router
	(0, _routes.configRouter)(router);
	
	// boostrap the app
	router.start(_vue2['default'].extend(_viewsAppVue2['default']), '#root');
	
	// just for debugging
	window.router = router;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(335)
	var extend = lang.extend
	
	extend(exports, lang)
	extend(exports, __webpack_require__(334))
	extend(exports, __webpack_require__(333))
	extend(exports, __webpack_require__(336))
	extend(exports, __webpack_require__(331))
	extend(exports, __webpack_require__(332))


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.defaultProps = defaultProps;
	exports.oneOfType = oneOfType;
	exports.oneOf = oneOf;
	exports.getPlainObject = getPlainObject;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _velocityAnimate = __webpack_require__(213);
	
	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);
	
	var _lodashLangIsPlainObject = __webpack_require__(206);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var _KeyCode2 = __webpack_require__(105);
	
	var _KeyCode3 = _interopRequireDefault(_KeyCode2);
	
	var toString = Object.prototype.toString;
	
	function animate(node, show, transitionName, done) {
	  var ok = undefined;
	
	  var complete = function complete() {
	    if (!ok) {
	      ok = true;
	      done();
	    }
	  };
	
	  node.style.display = show ? 'block' : 'none';
	
	  (0, _velocityAnimate2['default'])(node, transitionName, {
	    duration: 240,
	    complete: complete,
	    easing: 'easeInOutQuad'
	  });
	
	  return {
	    stop: function stop() {
	      (0, _velocityAnimate2['default'])(node, 'finish');
	      complete();
	    }
	  };
	}
	
	var KeyCode = _KeyCode3['default'];
	exports.KeyCode = KeyCode;
	var openAnimation = {
	  enter: function enter(node, done) {
	    return animate(node, false, 'slideDown', done);
	  },
	
	  leave: function leave(node, done) {
	    return animate(node, true, 'slideUp', done);
	  },
	
	  appear: function appear(node, done) {
	    return animate(node, false, 'slideDown', done);
	  }
	};
	
	exports.openAnimation = openAnimation;
	// 返回vue匹配的props的对象
	
	function defaultProps(props) {
	  for (var i in props) {
	    if (props.hasOwnProperty(i)) {
	      var defaultValue = props[i];
	
	      if (defaultValue.name && window[defaultValue.name] === defaultValue) {
	        props[i] = {
	          type: defaultValue,
	          'default': null
	        };
	
	        continue;
	      }
	
	      if ((0, _lodashLangIsPlainObject2['default'])(defaultValue)) continue;
	
	      var type = toString.call(defaultValue).replace('[object ', '').replace(']', '');
	
	      props[i] = {
	        type: window[type],
	        'default': defaultValue
	      };
	    }
	  }
	
	  return props;
	}
	
	function oneOfType() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var _options = args[args.length - 1];
	  var options = undefined;
	
	  if ((0, _lodashLangIsPlainObject2['default'])(_options)) {
	    options = _options;
	    args.length = args.length - 1;
	  }
	
	  var result = {
	    validator: function validator(value) {
	      for (var i = 0; i < args.length; i++) {
	        if (toString.call(value).indexOf(args[i].name) > -1) return true;
	      }
	
	      return false;
	    }
	  };
	
	  if (options) {
	    result = Object.assign({}, options, result);
	  }
	
	  return result;
	}
	
	function oneOf() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var _validList = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
	
	  return {
	    validator: function validator(value) {
	      var isValid = false;
	
	      for (var i = 0; i < _validList.length; i++) {
	        if (value === _validList[i]) {
	          isValid = true;
	          break;
	        }
	      }
	
	      return isValid;
	    }
	  };
	}
	
	function getPlainObject(vueObject) {
	  return JSON.parse(JSON.stringify(vueObject));
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}
	
	/**
	 * Interpolation delimiters. Changing these would trigger
	 * the text parser to re-compile the regular expressions.
	 *
	 * @type {Array<String>}
	 */
	
	var delimiters = ['{{', '}}']
	var unsafeDelimiters = ['{{{', '}}}']
	var textParser = __webpack_require__(25)
	
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    textParser.compileRegex()
	  }
	})
	
	Object.defineProperty(module.exports, 'unsafeDelimiters', {
	  get: function () {
	    return unsafeDelimiters
	  },
	  set: function (val) {
	    unsafeDelimiters = val
	    textParser.compileRegex()
	  }
	})


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(140)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports.warn = warn;
	exports.resolvePath = resolvePath;
	exports.isPromise = isPromise;
	exports.getRouteConfig = getRouteConfig;
	exports.resolveAsyncComponent = resolveAsyncComponent;
	exports.mapParams = mapParams;
	
	var _routeRecognizer = __webpack_require__(80);
	
	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);
	
	var genQuery = _routeRecognizer2['default'].prototype.generateQueryString;
	
	// export default for holding the Vue reference
	var _exports = {};
	exports['default'] = _exports;
	
	/**
	 * Warn stuff.
	 *
	 * @param {String} msg
	 */
	
	function warn(msg) {
	  /* istanbul ignore next */
	  if (window.console) {
	    console.warn('[vue-router] ' + msg);
	    /* istanbul ignore if */
	    if (!_exports.Vue || _exports.Vue.config.debug) {
	      console.warn(new Error('warning stack trace:').stack);
	    }
	  }
	}
	
	/**
	 * Resolve a relative path.
	 *
	 * @param {String} base
	 * @param {String} relative
	 * @param {Boolean} append
	 * @return {String}
	 */
	
	function resolvePath(base, relative, append) {
	  var query = base.match(/(\?.*)$/);
	  if (query) {
	    query = query[1];
	    base = base.slice(0, -query.length);
	  }
	  // a query!
	  if (relative.charAt(0) === '?') {
	    return base + relative;
	  }
	  var stack = base.split('/');
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue;
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }
	  return stack.join('/');
	}
	
	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */
	
	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}
	
	/**
	 * Retrive a route config field from a component instance
	 * OR a component contructor.
	 *
	 * @param {Function|Vue} component
	 * @param {String} name
	 * @return {*}
	 */
	
	function getRouteConfig(component, name) {
	  var options = component && (component.$options || component.options);
	  return options && options.route && options.route[name];
	}
	
	/**
	 * Resolve an async component factory. Have to do a dirty
	 * mock here because of Vue core's internal API depends on
	 * an ID check.
	 *
	 * @param {Object} handler
	 * @param {Function} cb
	 */
	
	var resolver = undefined;
	
	function resolveAsyncComponent(handler, cb) {
	  if (!resolver) {
	    resolver = {
	      resolve: _exports.Vue.prototype._resolveComponent,
	      $options: {
	        components: {
	          _: handler.component
	        }
	      }
	    };
	  } else {
	    resolver.$options.components._ = handler.component;
	  }
	  resolver.resolve('_', function (Component) {
	    handler.component = Component;
	    cb(Component);
	  });
	}
	
	/**
	 * Map the dynamic segments in a path to params.
	 *
	 * @param {String} path
	 * @param {Object} params
	 * @param {Object} query
	 */
	
	function mapParams(path, params, query) {
	  if (params === undefined) params = {};
	
	  path = path.replace(/:([^\/]+)/g, function (_, key) {
	    var val = params[key];
	    if (!val) {
	      warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	    }
	    return val || '';
	  });
	  if (query) {
	    path += genQuery(query);
	  }
	  return path;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(161)('wks')
	  , Symbol = __webpack_require__(29).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(165))('Symbol.' + name));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(13)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)
	
	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}
	
	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]
	
	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']
	
	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate (node) {
	  return _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	}
	
	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }
	
	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {
	
	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')
	
	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }
	
	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }
	
	  templateCache.put(templateString, frag)
	  return frag
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content)
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  _.trimNode(frag)
	  return frag
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var a = document.createElement('div')
	    a.innerHTML = '<template>1</template>'
	    return !a.cloneNode(true).firstChild.innerHTML
	  } else {
	    return false
	  }
	})()
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var t = document.createElement('textarea')
	    t.placeholder = 't'
	    return t.cloneNode(true).value === 't'
	  } else {
	    return false
	  }
	})()
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode()
	  }
	  var res = node.cloneNode(true)
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res
	    if (isRealTemplate(node)) {
	      node = node.content
	      clone = res.content
	    }
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = clone.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */
	
	exports.parse = function (template, clone, noSelector) {
	  var node, frag
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template)
	    return clone
	      ? exports.clone(template)
	      : template
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }
	
	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _IconfontVue = __webpack_require__(261);
	
	var _IconfontVue2 = _interopRequireDefault(_IconfontVue);

	exports['default'] = _IconfontVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}
	
	var p = Cache.prototype
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}
	
	module.exports = Cache


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ButtonVue = __webpack_require__(258);
	
	var _ButtonVue2 = _interopRequireDefault(_ButtonVue);
	
	var _ButtonGroupVue = __webpack_require__(259);
	
	var _ButtonGroupVue2 = _interopRequireDefault(_ButtonGroupVue);
	
	_ButtonVue2['default'].ButtonGroup = _ButtonGroupVue2['default'];
	
	exports['default'] = _ButtonVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	_.extend(exports, __webpack_require__(297))
	_.extend(exports, __webpack_require__(298))


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(13)
	var cache = new Cache(1000)
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
	var reservedArgRE = /^in$|^-?\d+/
	
	/**
	 * Parser state
	 */
	
	var str, dir
	var c, i, l, lastFilterIndex
	var inSingle, inDouble, curly, square, paren
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg (arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: _.toNumber(arg),
	      dynamic: false
	    }
	  } else {
	    var stripped = _.stripQuotes(arg)
	    var dynamic = stripped === arg
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    }
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	exports.parse = function (s) {
	
	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }
	
	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = 0
	  lastFilterIndex = 0
	  dir = {}
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(0, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim()
	  } else if (lastFilterIndex !== 0) {
	    pushFilter()
	  }
	
	  cache.put(s, dir)
	  return dir
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Cache = __webpack_require__(13)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
	// actions
	var APPEND = 0
	var PUSH = 1
	
	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12
	
	var pathStateMachine = []
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}
	
	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}
	
	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }
	
	  var code = ch.charCodeAt(0)
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch
	
	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }
	
	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }
	
	  return 'else'
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap
	
	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }
	
	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }
	
	  while (mode != null) {
	    index++
	    c = path[index]
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }
	
	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR
	
	    if (transition === ERROR) {
	      return // parse error
	    }
	
	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}
	
	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}
	
	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */
	
	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent
	if (true) {
	  warnNonExistent = function (path) {
	    _.warn(
	      'You are setting a non-existent path "' + path.raw + '" ' +
	      'on a vm instance. Consider pre-initializing the property ' +
	      'with the "data" option for more reliable reactivity ' +
	      'and better performance.'
	    )
	  }
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        obj = {}
	        if (("development") !== 'production' && last._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(last, key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        if (("development") !== 'production' && obj._isVue) {
	          warnNonExistent(path)
	        }
	        _.set(obj, key, val)
	      }
	    }
	  }
	  return true
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , createDesc = __webpack_require__(47);
	module.exports = __webpack_require__(163) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	var templateParser = __webpack_require__(9)
	var Fragment = __webpack_require__(321)
	var Cache = __webpack_require__(13)
	var linkerCache = new Cache(5000)
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	
	function FragmentFactory (vm, el) {
	  this.vm = vm
	  var template
	  var isString = typeof el === 'string'
	  if (isString || _.isTemplate(el)) {
	    template = templateParser.parse(el, true)
	  } else {
	    template = document.createDocumentFragment()
	    template.appendChild(el)
	  }
	  this.template = template
	  // linker can be cached, but only for components
	  var linker
	  var cid = vm.constructor.cid
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML)
	    linker = linkerCache.get(cacheId)
	    if (!linker) {
	      linker = compiler.compile(template, vm.$options, true)
	      linkerCache.put(cacheId, linker)
	    }
	  } else {
	    linker = compiler.compile(template, vm.$options, true)
	  }
	  this.linker = linker
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = templateParser.clone(this.template)
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)
	}
	
	module.exports = FragmentFactory


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(20)
	var Cache = __webpack_require__(13)
	var expressionCache = new Cache(1000)
	
	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = []
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore (str, i) {
	  return saved[i]
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    ("development") !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}
	
	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}
	
	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    ("development") !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}
	
	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */
	
	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(13)
	var config = __webpack_require__(4)
	var dirParser = __webpack_require__(19)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}
	
	exports.compileRegex = function () {
	  var open = escapeRegex(config.delimiters[0])
	  var close = escapeRegex(config.delimiters[1])
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0])
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1])
	  tagRE = new RegExp(
	    unsafeOpen + '(.+?)' + unsafeClose + '|' +
	    open + '(.+?)' + close,
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + unsafeOpen + '.*' + unsafeClose + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	exports.parse = function (text) {
	  if (!cache) {
	    exports.compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, html, value, first, oneTime
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    html = htmlRE.test(match[0])
	    value = html ? match[1] : match[2]
	    first = value.charCodeAt(0)
	    oneTime = first === 42 // *
	    value = oneTime
	      ? value.slice(1)
	      : value
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */
	
	exports.tokensToExp = function (tokens) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token)
	    }).join('+')
	  } else {
	    return formatToken(tokens[0], true)
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken (token, single) {
	  return token.tag
	    ? inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(4)
	var Dep = __webpack_require__(41)
	var expParser = __webpack_require__(24)
	var batcher = __webpack_require__(295)
	var uid = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher (vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _.extend(this, options)
	  }
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = Object.create(null)
	  this.newDeps = null
	  this.prevError = null // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, this.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep
	    if (!this.deps[id]) {
	      this.deps[id] = dep
	      dep.addSub(this)
	    }
	  }
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet()
	  var scope = this.scope || this.vm
	  var value
	  try {
	    value = this.getter.call(scope, scope)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? ''
	          : 'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false)
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value)
	  }
	  this.afterGet()
	  return value
	}
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm
	  if (this.filters) {
	    value = scope._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(scope, scope, value)
	  } catch (e) {
	    if (
	      ("development") !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext
	  if (true) {
	    if (
	      forContext &&
	      forContext.filters &&
	      (new RegExp(forContext.alias + '\\b')).test(this.expression)
	    ) {
	      _.warn(
	        'It seems you are using two-way binding on ' +
	        'a v-for alias (' + this.expression + '), and the ' +
	        'v-for has filters. This will not work properly. ' +
	        'Either remove the filters or use an array of ' +
	        'objects and bind to object properties instead.'
	      )
	    }
	  }
	  if (
	    forContext &&
	    forContext.alias === this.expression &&
	    !forContext.filters
	  ) {
	    if (scope.$key) { // original is an object
	      forContext.rawValue[scope.$key] = value
	    } else {
	      forContext.rawValue.$set(scope.$index, value)
	    }
	  }
	}
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = Object.create(null)
	}
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null
	  var ids = Object.keys(this.deps)
	  var i = ids.length
	  while (i--) {
	    var id = ids[i]
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	}
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync || !config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (("development") !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace')
	    }
	    batcher.push(this)
	  }
	}
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          config.debug && prevError) {
	        this.prevError = null
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          _.nextTick(function () {
	            throw prevError
	          }, 0)
	          throw e
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	    this.queued = this.shallow = false
	  }
	}
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps)
	  var i = depIds.length
	  while (i--) {
	    this.deps[depIds[i]].depend()
	  }
	}
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var depIds = Object.keys(this.deps)
	    var i = depIds.length
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */
	
	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}
	
	module.exports = Watcher


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
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
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ function(module, exports) {

	/**
	 * Promises/A+ polyfill v1.1.0 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;
	
	function Promise(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise.reject = function (r) {
	    return new Promise(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise.resolve = function (x) {
	    return new Promise(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise.all = function all(iterable) {
	    return new Promise(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolver(i), reject);
	        }
	    });
	};
	
	Promise.race = function race(iterable) {
	    return new Promise(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolve, reject);
	        }
	    });
	};
	
	var p = Promise.prototype;
	
	p.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p.notify = function notify() {
	    var promise = this;
	
	    async(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	p.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	var queue = [];
	var async = function (callback) {
	    queue.push(callback);
	
	    if (queue.length === 1) {
	        async.async();
	    }
	};
	
	async.run = function () {
	    while (queue.length) {
	        queue[0]();
	        queue.shift();
	    }
	};
	
	if (window.MutationObserver) {
	    var el = document.createElement('div');
	    var mo = new MutationObserver(async.run);
	
	    mo.observe(el, {
	        attributes: true
	    });
	
	    async.async = function () {
	        el.setAttribute("x", 0);
	    };
	} else {
	    async.async = function () {
	        setTimeout(async.run);
	    };
	}
	
	module.exports = window.Promise || Promise;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var uid = 0
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep () {
	  this.id = uid++
	  this.subs = []
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub)
	}
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this)
	}
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}
	
	module.exports = Dep


/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(28)
	    , fn   = (__webpack_require__(12).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(43)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(44)
	  , hide = __webpack_require__(21)
	  , TAG  = __webpack_require__(8)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(42);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(200),
	    isObjectLike = __webpack_require__(22);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(212)
	module.exports = __webpack_require__(129)
	module.exports.template = __webpack_require__(227)


/***/ },
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$keys = __webpack_require__(142)['default'];
	
	var _Object$create = __webpack_require__(139)['default'];
	
	exports.__esModule = true;
	exports.canReuse = canReuse;
	exports.canDeactivate = canDeactivate;
	exports.canActivate = canActivate;
	exports.deactivate = deactivate;
	exports.activate = activate;
	exports.reuse = reuse;
	
	var _util = __webpack_require__(7);
	
	/**
	 * Determine the reusability of an existing router view.
	 *
	 * @param {Directive} view
	 * @param {Object} handler
	 * @param {Transition} transition
	 */
	
	function canReuse(view, handler, transition) {
	  var component = view.childVM;
	  if (!component || !handler) {
	    return false;
	  }
	  // important: check view.Component here because it may
	  // have been changed in activate hook
	  if (view.Component !== handler.component) {
	    return false;
	  }
	  var canReuseFn = _util.getRouteConfig(component, 'canReuse');
	  return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	    to: transition.to,
	    from: transition.from
	  }) : true; // defaults to true
	}
	
	/**
	 * Check if a component can deactivate.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function canDeactivate(view, transition, next) {
	  var fromComponent = view.childVM;
	  var hook = _util.getRouteConfig(fromComponent, 'canDeactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHook(hook, fromComponent, next, {
	      expectBoolean: true
	    });
	  }
	}
	
	/**
	 * Check if a component can activate.
	 *
	 * @param {Object} handler
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function canActivate(handler, transition, next) {
	  _util.resolveAsyncComponent(handler, function (Component) {
	    // have to check due to async-ness
	    if (transition.aborted) {
	      return;
	    }
	    // determine if this component can be activated
	    var hook = _util.getRouteConfig(Component, 'canActivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, null, next, {
	        expectBoolean: true
	      });
	    }
	  });
	}
	
	/**
	 * Call deactivate hooks for existing router-views.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */
	
	function deactivate(view, transition, next) {
	  var component = view.childVM;
	  var hook = _util.getRouteConfig(component, 'deactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHooks(hook, component, next);
	  }
	}
	
	/**
	 * Activate / switch component for a router-view.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Number} depth
	 * @param {Function} [cb]
	 */
	
	function activate(view, transition, depth, cb, reuse) {
	  var handler = transition.activateQueue[depth];
	  if (!handler) {
	    // fix 1.0.0-alpha.3 compat
	    if (view._bound) {
	      view.setComponent(null);
	    }
	    cb && cb();
	    return;
	  }
	
	  var Component = view.Component = handler.component;
	  var activateHook = _util.getRouteConfig(Component, 'activate');
	  var dataHook = _util.getRouteConfig(Component, 'data');
	  var waitForData = _util.getRouteConfig(Component, 'waitForData');
	
	  view.depth = depth;
	  view.activated = false;
	
	  var component = undefined;
	  var loading = !!(dataHook && !waitForData);
	
	  // "reuse" is a flag passed down when the parent view is
	  // either reused via keep-alive or as a child of a kept-alive view.
	  // of course we can only reuse if the current kept-alive instance
	  // is of the correct type.
	  reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	  if (reuse) {
	    // just reuse
	    component = view.childVM;
	    component.$loadingRouteData = loading;
	  } else {
	    // unbuild current component. this step also destroys
	    // and removes all nested child views.
	    view.unbuild(true);
	    // handle keep-alive.
	    // if the view has keep-alive, the child vm is not actually
	    // destroyed - its nested views will still be in router's
	    // view list. We need to removed these child views and
	    // cache them on the child vm.
	    if (view.keepAlive) {
	      var views = transition.router._views;
	      var i = views.indexOf(view);
	      if (i > 0) {
	        transition.router._views = views.slice(i);
	        if (view.childVM) {
	          view.childVM._routerViews = views.slice(0, i);
	        }
	      }
	    }
	
	    // build the new component. this will also create the
	    // direct child view of the current one. it will register
	    // itself as view.childView.
	    component = view.build({
	      _meta: {
	        $loadingRouteData: loading
	      }
	    });
	    // handle keep-alive.
	    // when a kept-alive child vm is restored, we need to
	    // add its cached child views into the router's view list,
	    // and also properly update current view's child view.
	    if (view.keepAlive) {
	      component.$loadingRouteData = loading;
	      var cachedViews = component._routerViews;
	      if (cachedViews) {
	        transition.router._views = cachedViews.concat(transition.router._views);
	        view.childView = cachedViews[cachedViews.length - 1];
	        component._routerViews = null;
	      }
	    }
	  }
	
	  // cleanup the component in case the transition is aborted
	  // before the component is ever inserted.
	  var cleanup = function cleanup() {
	    component.$destroy();
	  };
	
	  // actually insert the component and trigger transition
	  var insert = function insert() {
	    if (reuse) {
	      cb && cb();
	      return;
	    }
	    var router = transition.router;
	    if (router._rendered || router._transitionOnLoad) {
	      view.transition(component);
	    } else {
	      // no transition on first render, manual transition
	      /* istanbul ignore if */
	      if (view.setCurrent) {
	        // 0.12 compat
	        view.setCurrent(component);
	      } else {
	        // 1.0
	        view.childVM = component;
	      }
	      component.$before(view.anchor, null, false);
	    }
	    cb && cb();
	  };
	
	  // called after activation hook is resolved
	  var afterActivate = function afterActivate() {
	    view.activated = true;
	    // activate the child view
	    if (view.childView) {
	      activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	    }
	    if (dataHook && waitForData) {
	      // wait until data loaded to insert
	      loadData(component, transition, dataHook, insert, cleanup);
	    } else {
	      // load data and insert at the same time
	      if (dataHook) {
	        loadData(component, transition, dataHook);
	      }
	      insert();
	    }
	  };
	
	  if (activateHook) {
	    transition.callHooks(activateHook, component, afterActivate, {
	      cleanup: cleanup
	    });
	  } else {
	    afterActivate();
	  }
	}
	
	/**
	 * Reuse a view, just reload data if necessary.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 */
	
	function reuse(view, transition) {
	  var component = view.childVM;
	  var dataHook = _util.getRouteConfig(component, 'data');
	  if (dataHook) {
	    loadData(component, transition, dataHook);
	  }
	}
	
	/**
	 * Asynchronously load and apply data to component.
	 *
	 * @param {Vue} component
	 * @param {Transition} transition
	 * @param {Function} hook
	 * @param {Function} cb
	 * @param {Function} cleanup
	 */
	
	function loadData(component, transition, hook, cb, cleanup) {
	  component.$loadingRouteData = true;
	  transition.callHooks(hook, component, function (data, onError) {
	    // merge data from multiple data hooks
	    if (Array.isArray(data) && data._needMerge) {
	      data = data.reduce(function (res, obj) {
	        if (isPlainObject(obj)) {
	          _Object$keys(obj).forEach(function (key) {
	            res[key] = obj[key];
	          });
	        }
	        return res;
	      }, _Object$create(null));
	    }
	    // handle promise sugar syntax
	    var promises = [];
	    if (isPlainObject(data)) {
	      _Object$keys(data).forEach(function (key) {
	        var val = data[key];
	        if (_util.isPromise(val)) {
	          promises.push(val.then(function (resolvedVal) {
	            component.$set(key, resolvedVal);
	          }));
	        } else {
	          component.$set(key, val);
	        }
	      });
	    }
	    if (!promises.length) {
	      component.$loadingRouteData = false;
	      cb && cb();
	    } else {
	      promises[0].constructor.all(promises).then(function (_) {
	        component.$loadingRouteData = false;
	        cb && cb();
	      }, onError);
	    }
	  }, {
	    cleanup: cleanup,
	    expectData: true
	  });
	}
	
	function isPlainObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {(function() {
	    "use strict";
	    function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
	      this.path = path;
	      this.matcher = matcher;
	      this.delegate = delegate;
	    }
	
	    $$route$recognizer$dsl$$Target.prototype = {
	      to: function(target, callback) {
	        var delegate = this.delegate;
	
	        if (delegate && delegate.willAddRoute) {
	          target = delegate.willAddRoute(this.matcher.target, target);
	        }
	
	        this.matcher.add(this.path, target);
	
	        if (callback) {
	          if (callback.length === 0) { throw new Error("You must have an argument in the function passed to `to`"); }
	          this.matcher.addChild(this.path, target, callback, this.delegate);
	        }
	        return this;
	      }
	    };
	
	    function $$route$recognizer$dsl$$Matcher(target) {
	      this.routes = {};
	      this.children = {};
	      this.target = target;
	    }
	
	    $$route$recognizer$dsl$$Matcher.prototype = {
	      add: function(path, handler) {
	        this.routes[path] = handler;
	      },
	
	      addChild: function(path, target, callback, delegate) {
	        var matcher = new $$route$recognizer$dsl$$Matcher(target);
	        this.children[path] = matcher;
	
	        var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);
	
	        if (delegate && delegate.contextEntered) {
	          delegate.contextEntered(target, match);
	        }
	
	        callback(match);
	      }
	    };
	
	    function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
	      return function(path, nestedCallback) {
	        var fullPath = startingPath + path;
	
	        if (nestedCallback) {
	          nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
	        } else {
	          return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
	        }
	      };
	    }
	
	    function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
	      var len = 0;
	      for (var i=0, l=routeArray.length; i<l; i++) {
	        len += routeArray[i].path.length;
	      }
	
	      path = path.substr(len);
	      var route = { path: path, handler: handler };
	      routeArray.push(route);
	    }
	
	    function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
	      var routes = matcher.routes;
	
	      for (var path in routes) {
	        if (routes.hasOwnProperty(path)) {
	          var routeArray = baseRoute.slice();
	          $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);
	
	          if (matcher.children[path]) {
	            $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
	          } else {
	            callback.call(binding, routeArray);
	          }
	        }
	      }
	    }
	
	    var $$route$recognizer$dsl$$default = function(callback, addRouteCallback) {
	      var matcher = new $$route$recognizer$dsl$$Matcher();
	
	      callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));
	
	      $$route$recognizer$dsl$$eachRoute([], matcher, function(route) {
	        if (addRouteCallback) { addRouteCallback(this, route); }
	        else { this.add(route); }
	      }, this);
	    };
	
	    var $$route$recognizer$$specials = [
	      '/', '.', '*', '+', '?', '|',
	      '(', ')', '[', ']', '{', '}', '\\'
	    ];
	
	    var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');
	
	    function $$route$recognizer$$isArray(test) {
	      return Object.prototype.toString.call(test) === "[object Array]";
	    }
	
	    // A Segment represents a segment in the original route description.
	    // Each Segment type provides an `eachChar` and `regex` method.
	    //
	    // The `eachChar` method invokes the callback with one or more character
	    // specifications. A character specification consumes one or more input
	    // characters.
	    //
	    // The `regex` method returns a regex fragment for the segment. If the
	    // segment is a dynamic of star segment, the regex fragment also includes
	    // a capture.
	    //
	    // A character specification contains:
	    //
	    // * `validChars`: a String with a list of all valid characters, or
	    // * `invalidChars`: a String with a list of all invalid characters
	    // * `repeat`: true if the character specification can repeat
	
	    function $$route$recognizer$$StaticSegment(string) { this.string = string; }
	    $$route$recognizer$$StaticSegment.prototype = {
	      eachChar: function(callback) {
	        var string = this.string, ch;
	
	        for (var i=0, l=string.length; i<l; i++) {
	          ch = string.charAt(i);
	          callback({ validChars: ch });
	        }
	      },
	
	      regex: function() {
	        return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
	      },
	
	      generate: function() {
	        return this.string;
	      }
	    };
	
	    function $$route$recognizer$$DynamicSegment(name) { this.name = name; }
	    $$route$recognizer$$DynamicSegment.prototype = {
	      eachChar: function(callback) {
	        callback({ invalidChars: "/", repeat: true });
	      },
	
	      regex: function() {
	        return "([^/]+)";
	      },
	
	      generate: function(params) {
	        return params[this.name];
	      }
	    };
	
	    function $$route$recognizer$$StarSegment(name) { this.name = name; }
	    $$route$recognizer$$StarSegment.prototype = {
	      eachChar: function(callback) {
	        callback({ invalidChars: "", repeat: true });
	      },
	
	      regex: function() {
	        return "(.+)";
	      },
	
	      generate: function(params) {
	        return params[this.name];
	      }
	    };
	
	    function $$route$recognizer$$EpsilonSegment() {}
	    $$route$recognizer$$EpsilonSegment.prototype = {
	      eachChar: function() {},
	      regex: function() { return ""; },
	      generate: function() { return ""; }
	    };
	
	    function $$route$recognizer$$parse(route, names, specificity) {
	      // normalize route as not starting with a "/". Recognition will
	      // also normalize.
	      if (route.charAt(0) === "/") { route = route.substr(1); }
	
	      var segments = route.split("/"), results = [];
	
	      // A routes has specificity determined by the order that its different segments
	      // appear in. This system mirrors how the magnitude of numbers written as strings
	      // works.
	      // Consider a number written as: "abc". An example would be "200". Any other number written
	      // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	      // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	      // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	      // leading symbol, "1".
	      // The rule is that symbols to the left carry more weight than symbols to the right
	      // when a number is written out as a string. In the above strings, the leading digit
	      // represents how many 100's are in the number, and it carries more weight than the middle
	      // number which represents how many 10's are in the number.
	      // This system of number magnitude works well for route specificity, too. A route written as
	      // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	      // `x`, irrespective of the other parts.
	      // Because of this similarity, we assign each type of segment a number value written as a
	      // string. We can find the specificity of compound routes by concatenating these strings
	      // together, from left to right. After we have looped through all of the segments,
	      // we convert the string to a number.
	      specificity.val = '';
	
	      for (var i=0, l=segments.length; i<l; i++) {
	        var segment = segments[i], match;
	
	        if (match = segment.match(/^:([^\/]+)$/)) {
	          results.push(new $$route$recognizer$$DynamicSegment(match[1]));
	          names.push(match[1]);
	          specificity.val += '3';
	        } else if (match = segment.match(/^\*([^\/]+)$/)) {
	          results.push(new $$route$recognizer$$StarSegment(match[1]));
	          specificity.val += '2';
	          names.push(match[1]);
	        } else if(segment === "") {
	          results.push(new $$route$recognizer$$EpsilonSegment());
	          specificity.val += '1';
	        } else {
	          results.push(new $$route$recognizer$$StaticSegment(segment));
	          specificity.val += '4';
	        }
	      }
	
	      specificity.val = +specificity.val;
	
	      return results;
	    }
	
	    // A State has a character specification and (`charSpec`) and a list of possible
	    // subsequent states (`nextStates`).
	    //
	    // If a State is an accepting state, it will also have several additional
	    // properties:
	    //
	    // * `regex`: A regular expression that is used to extract parameters from paths
	    //   that reached this accepting state.
	    // * `handlers`: Information on how to convert the list of captures into calls
	    //   to registered handlers with the specified parameters
	    // * `types`: How many static, dynamic or star segments in this route. Used to
	    //   decide which route to use if multiple registered routes match a path.
	    //
	    // Currently, State is implemented naively by looping over `nextStates` and
	    // comparing a character specification against a character. A more efficient
	    // implementation would use a hash of keys pointing at one or more next states.
	
	    function $$route$recognizer$$State(charSpec) {
	      this.charSpec = charSpec;
	      this.nextStates = [];
	    }
	
	    $$route$recognizer$$State.prototype = {
	      get: function(charSpec) {
	        var nextStates = this.nextStates;
	
	        for (var i=0, l=nextStates.length; i<l; i++) {
	          var child = nextStates[i];
	
	          var isEqual = child.charSpec.validChars === charSpec.validChars;
	          isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	          if (isEqual) { return child; }
	        }
	      },
	
	      put: function(charSpec) {
	        var state;
	
	        // If the character specification already exists in a child of the current
	        // state, just return that state.
	        if (state = this.get(charSpec)) { return state; }
	
	        // Make a new state for the character spec
	        state = new $$route$recognizer$$State(charSpec);
	
	        // Insert the new state as a child of the current state
	        this.nextStates.push(state);
	
	        // If this character specification repeats, insert the new state as a child
	        // of itself. Note that this will not trigger an infinite loop because each
	        // transition during recognition consumes a character.
	        if (charSpec.repeat) {
	          state.nextStates.push(state);
	        }
	
	        // Return the new state
	        return state;
	      },
	
	      // Find a list of child states matching the next character
	      match: function(ch) {
	        // DEBUG "Processing `" + ch + "`:"
	        var nextStates = this.nextStates,
	            child, charSpec, chars;
	
	        // DEBUG "  " + debugState(this)
	        var returned = [];
	
	        for (var i=0, l=nextStates.length; i<l; i++) {
	          child = nextStates[i];
	
	          charSpec = child.charSpec;
	
	          if (typeof (chars = charSpec.validChars) !== 'undefined') {
	            if (chars.indexOf(ch) !== -1) { returned.push(child); }
	          } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	            if (chars.indexOf(ch) === -1) { returned.push(child); }
	          }
	        }
	
	        return returned;
	      }
	
	      /** IF DEBUG
	      , debug: function() {
	        var charSpec = this.charSpec,
	            debug = "[",
	            chars = charSpec.validChars || charSpec.invalidChars;
	
	        if (charSpec.invalidChars) { debug += "^"; }
	        debug += chars;
	        debug += "]";
	
	        if (charSpec.repeat) { debug += "+"; }
	
	        return debug;
	      }
	      END IF **/
	    };
	
	    /** IF DEBUG
	    function debug(log) {
	      console.log(log);
	    }
	
	    function debugState(state) {
	      return state.nextStates.map(function(n) {
	        if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	        return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	      }).join(", ")
	    }
	    END IF **/
	
	    // Sort the routes by specificity
	    function $$route$recognizer$$sortSolutions(states) {
	      return states.sort(function(a, b) {
	        return b.specificity.val - a.specificity.val;
	      });
	    }
	
	    function $$route$recognizer$$recognizeChar(states, ch) {
	      var nextStates = [];
	
	      for (var i=0, l=states.length; i<l; i++) {
	        var state = states[i];
	
	        nextStates = nextStates.concat(state.match(ch));
	      }
	
	      return nextStates;
	    }
	
	    var $$route$recognizer$$oCreate = Object.create || function(proto) {
	      function F() {}
	      F.prototype = proto;
	      return new F();
	    };
	
	    function $$route$recognizer$$RecognizeResults(queryParams) {
	      this.queryParams = queryParams || {};
	    }
	    $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
	      splice: Array.prototype.splice,
	      slice:  Array.prototype.slice,
	      push:   Array.prototype.push,
	      length: 0,
	      queryParams: null
	    });
	
	    function $$route$recognizer$$findHandler(state, path, queryParams) {
	      var handlers = state.handlers, regex = state.regex;
	      var captures = path.match(regex), currentCapture = 1;
	      var result = new $$route$recognizer$$RecognizeResults(queryParams);
	
	      for (var i=0, l=handlers.length; i<l; i++) {
	        var handler = handlers[i], names = handler.names, params = {};
	
	        for (var j=0, m=names.length; j<m; j++) {
	          params[names[j]] = captures[currentCapture++];
	        }
	
	        result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	      }
	
	      return result;
	    }
	
	    function $$route$recognizer$$addSegment(currentState, segment) {
	      segment.eachChar(function(ch) {
	        var state;
	
	        currentState = currentState.put(ch);
	      });
	
	      return currentState;
	    }
	
	    function $$route$recognizer$$decodeQueryParamPart(part) {
	      // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	      part = part.replace(/\+/gm, '%20');
	      return decodeURIComponent(part);
	    }
	
	    // The main interface
	
	    var $$route$recognizer$$RouteRecognizer = function() {
	      this.rootState = new $$route$recognizer$$State();
	      this.names = {};
	    };
	
	
	    $$route$recognizer$$RouteRecognizer.prototype = {
	      add: function(routes, options) {
	        var currentState = this.rootState, regex = "^",
	            specificity = {},
	            handlers = [], allSegments = [], name;
	
	        var isEmpty = true;
	
	        for (var i=0, l=routes.length; i<l; i++) {
	          var route = routes[i], names = [];
	
	          var segments = $$route$recognizer$$parse(route.path, names, specificity);
	
	          allSegments = allSegments.concat(segments);
	
	          for (var j=0, m=segments.length; j<m; j++) {
	            var segment = segments[j];
	
	            if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }
	
	            isEmpty = false;
	
	            // Add a "/" for the new segment
	            currentState = currentState.put({ validChars: "/" });
	            regex += "/";
	
	            // Add a representation of the segment to the NFA and regex
	            currentState = $$route$recognizer$$addSegment(currentState, segment);
	            regex += segment.regex();
	          }
	
	          var handler = { handler: route.handler, names: names };
	          handlers.push(handler);
	        }
	
	        if (isEmpty) {
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	        }
	
	        currentState.handlers = handlers;
	        currentState.regex = new RegExp(regex + "$");
	        currentState.specificity = specificity;
	
	        if (name = options && options.as) {
	          this.names[name] = {
	            segments: allSegments,
	            handlers: handlers
	          };
	        }
	      },
	
	      handlersFor: function(name) {
	        var route = this.names[name], result = [];
	        if (!route) { throw new Error("There is no route named " + name); }
	
	        for (var i=0, l=route.handlers.length; i<l; i++) {
	          result.push(route.handlers[i]);
	        }
	
	        return result;
	      },
	
	      hasRoute: function(name) {
	        return !!this.names[name];
	      },
	
	      generate: function(name, params) {
	        var route = this.names[name], output = "";
	        if (!route) { throw new Error("There is no route named " + name); }
	
	        var segments = route.segments;
	
	        for (var i=0, l=segments.length; i<l; i++) {
	          var segment = segments[i];
	
	          if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }
	
	          output += "/";
	          output += segment.generate(params);
	        }
	
	        if (output.charAt(0) !== '/') { output = '/' + output; }
	
	        if (params && params.queryParams) {
	          output += this.generateQueryString(params.queryParams, route.handlers);
	        }
	
	        return output;
	      },
	
	      generateQueryString: function(params, handlers) {
	        var pairs = [];
	        var keys = [];
	        for(var key in params) {
	          if (params.hasOwnProperty(key)) {
	            keys.push(key);
	          }
	        }
	        keys.sort();
	        for (var i = 0, len = keys.length; i < len; i++) {
	          key = keys[i];
	          var value = params[key];
	          if (value == null) {
	            continue;
	          }
	          var pair = encodeURIComponent(key);
	          if ($$route$recognizer$$isArray(value)) {
	            for (var j = 0, l = value.length; j < l; j++) {
	              var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	              pairs.push(arrayPair);
	            }
	          } else {
	            pair += "=" + encodeURIComponent(value);
	            pairs.push(pair);
	          }
	        }
	
	        if (pairs.length === 0) { return ''; }
	
	        return "?" + pairs.join("&");
	      },
	
	      parseQueryString: function(queryString) {
	        var pairs = queryString.split("&"), queryParams = {};
	        for(var i=0; i < pairs.length; i++) {
	          var pair      = pairs[i].split('='),
	              key       = $$route$recognizer$$decodeQueryParamPart(pair[0]),
	              keyLength = key.length,
	              isArray = false,
	              value;
	          if (pair.length === 1) {
	            value = 'true';
	          } else {
	            //Handle arrays
	            if (keyLength > 2 && key.slice(keyLength -2) === '[]') {
	              isArray = true;
	              key = key.slice(0, keyLength - 2);
	              if(!queryParams[key]) {
	                queryParams[key] = [];
	              }
	            }
	            value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
	          }
	          if (isArray) {
	            queryParams[key].push(value);
	          } else {
	            queryParams[key] = value;
	          }
	        }
	        return queryParams;
	      },
	
	      recognize: function(path) {
	        var states = [ this.rootState ],
	            pathLen, i, l, queryStart, queryParams = {},
	            isSlashDropped = false;
	
	        queryStart = path.indexOf('?');
	        if (queryStart !== -1) {
	          var queryString = path.substr(queryStart + 1, path.length);
	          path = path.substr(0, queryStart);
	          queryParams = this.parseQueryString(queryString);
	        }
	
	        path = decodeURI(path);
	
	        // DEBUG GROUP path
	
	        if (path.charAt(0) !== "/") { path = "/" + path; }
	
	        pathLen = path.length;
	        if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	          path = path.substr(0, pathLen - 1);
	          isSlashDropped = true;
	        }
	
	        for (i=0, l=path.length; i<l; i++) {
	          states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
	          if (!states.length) { break; }
	        }
	
	        // END DEBUG GROUP
	
	        var solutions = [];
	        for (i=0, l=states.length; i<l; i++) {
	          if (states[i].handlers) { solutions.push(states[i]); }
	        }
	
	        states = $$route$recognizer$$sortSolutions(solutions);
	
	        var state = solutions[0];
	
	        if (state && state.handlers) {
	          // if a trailing slash was dropped and a star segment is the last segment
	          // specified, put the trailing slash back
	          if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	            path = path + "/";
	          }
	          return $$route$recognizer$$findHandler(state, path, queryParams);
	        }
	      }
	    };
	
	    $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;
	
	    $$route$recognizer$$RouteRecognizer.VERSION = '0.1.9';
	
	    var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(88)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return $$route$recognizer$$default; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = $$route$recognizer$$default;
	    } else if (typeof this !== 'undefined') {
	      this['RouteRecognizer'] = $$route$recognizer$$default;
	    }
	}).call(this);
	
	//# sourceMappingURL=route-recognizer.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)(module)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports.style = __webpack_require__(83)
	exports['class'] = __webpack_require__(303)
	exports.component = __webpack_require__(304)
	exports.prop = __webpack_require__(82)
	exports.transition = __webpack_require__(305)


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var bindingModes = __webpack_require__(4)._propBindingModes
	
	module.exports = {
	
	  bind: function () {
	
	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this.descriptor.prop
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	    var twoWay = prop.mode === bindingModes.TWO_WAY
	
	    var parentWatcher = this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }, {
	        twoWay: twoWay,
	        filters: prop.filters,
	        // important: props need to be observed on the
	        // v-for scope if present
	        scope: this._scope
	      }
	    )
	
	    // set the child initial value.
	    _.initProp(child, prop, parentWatcher.value)
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parentWatcher.set(val)
	          }
	        )
	      })
	    }
	  },
	
	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var testEl = null
	var propCache = {}
	
	module.exports = {
	
	  deep: true,
	
	  update: function (value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value
	    } else if (_.isArray(value)) {
	      this.handleObject(value.reduce(_.extend, {}))
	    } else {
	      this.handleObject(value || {})
	    }
	  },
	
	  handleObject: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var name, val
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null)
	        delete cache[name]
	      }
	    }
	    for (name in value) {
	      val = value[name]
	      if (val !== cache[name]) {
	        cache[name] = val
	        this.handleSingle(name, val)
	      }
	    }
	  },
	
	  handleSingle: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }
	
	}
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix (prop) {
	  prop = _.hyphenate(prop)
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(23)
	var isObject = _.isObject
	var uid = 0
	
	module.exports = {
	
	  priority: 2000,
	
	  params: [
	    'track-by',
	    'stagger',
	    'enter-stagger',
	    'leave-stagger'
	  ],
	
	  bind: function () {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/)
	      if (itMatch) {
	        this.iterator = itMatch[1].trim()
	        this.alias = itMatch[2].trim()
	      } else {
	        this.alias = inMatch[1].trim()
	      }
	      this.expression = inMatch[2]
	    }
	
	    if (!this.alias) {
	      ("development") !== 'production' && _.warn(
	        'Alias is required in v-for.'
	      )
	      return
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + (++uid)
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName
	    this.isOption =
	      (tag === 'OPTION' || tag === 'OPTGROUP') &&
	      this.el.parentNode.tagName === 'SELECT'
	
	    // setup anchor nodes
	    this.start = _.createAnchor('v-for-start')
	    this.end = _.createAnchor('v-for-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)
	
	    // check ref
	    this.ref = _.findRef(this.el)
	
	    // cache
	    this.cache = Object.create(null)
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el)
	  },
	
	  update: function (data) {
	    this.diff(data)
	    this.updateRef()
	    this.updateModel()
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function (data) {
	    // check if the Array was converted from an Object
	    var item = data[0]
	    var convertedFromObject = this.fromObject =
	      isObject(item) &&
	      item.hasOwnProperty('$key') &&
	      item.hasOwnProperty('$value')
	
	    var trackByKey = this.params.trackBy
	    var oldFrags = this.frags
	    var frags = this.frags = new Array(data.length)
	    var alias = this.alias
	    var iterator = this.iterator
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var init = !oldFrags
	    var i, l, frag, key, value, primitive
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i]
	      key = convertedFromObject ? item.$key : null
	      value = convertedFromObject ? item.$value : item
	      primitive = !isObject(value)
	      frag = !init && this.getCachedFrag(value, i, key)
	      if (frag) { // reusable fragment
	        frag.reused = true
	        // update $index
	        frag.scope.$index = i
	        // update $key
	        if (key) {
	          frag.scope.$key = key
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value
	        }
	      } else { // new isntance
	        frag = this.create(value, alias, i, key)
	        frag.fresh = !init
	      }
	      frags[i] = frag
	      if (init) {
	        frag.before(end)
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldFrags.length - frags.length
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i]
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag)
	        this.remove(frag, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i]
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1]
	      prevEl = targetPrev
	        ? targetPrev.staggerCb
	          ? targetPrev.staggerAnchor
	          : targetPrev.end || targetPrev.node
	        : start
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(frag, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDoc)
	      }
	      frag.reused = frag.fresh = false
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function (value, alias, index, key) {
	    var host = this._host
	    // create iteration scope
	    var parentScope = this._scope || this.vm
	    var scope = Object.create(parentScope)
	    // ref holder for the scope
	    scope.$refs = {}
	    scope.$els = {}
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope
	    // for two-way binding on alias
	    scope.$forContext = this
	    // define scope properties
	    _.defineReactive(scope, alias, value)
	    _.defineReactive(scope, '$index', index)
	    if (key) {
	      _.defineReactive(scope, '$key', key)
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      _.define(scope, '$key', null)
	    }
	    if (this.iterator) {
	      _.defineReactive(scope, this.iterator, key !== null ? key : index)
	    }
	    var frag = this.factory.create(host, scope, this._frag)
	    frag.forId = this.id
	    this.cacheFrag(value, frag, index, key)
	    return frag
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function () {
	    var ref = this.ref
	    if (!ref) return
	    var hash = (this._scope || this.vm).$refs
	    var refs
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag)
	    } else {
	      refs = {}
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag)
	      })
	    }
	    if (!hash.hasOwnProperty(ref)) {
	      _.defineReactive(hash, ref, refs)
	    } else {
	      hash[ref] = refs
	    }
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function () {
	    if (this.isOption) {
	      var parent = this.start.parentNode
	      var model = parent && parent.__v_model
	      if (model) {
	        model.forceUpdate()
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */
	
	  insert: function (frag, index, prevEl, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor
	      if (!anchor) {
	        anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vfrag__ = frag
	      }
	      _.after(anchor, prevEl)
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.before(prevEl.nextSibling)
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDoc
	   */
	
	  remove: function (frag, index, total, inDoc) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel()
	      frag.staggerCb = null
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = frag.staggerCb = _.cancellable(function () {
	        frag.staggerCb = null
	        frag.remove(true)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      frag.remove(true)
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function (frag, prevEl) {
	    frag.before(prevEl.nextSibling, false)
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function (value, frag, index, key) {
	    var trackByKey = this.params.trackBy
	    var cache = this.cache
	    var primitive = !isObject(value)
	    var id
	    if (key || trackByKey || primitive) {
	      id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      if (!cache[id]) {
	        cache[id] = frag
	      } else if (trackByKey !== '$index') {
	        ("development") !== 'production' &&
	        this.warnDuplicate(value)
	      }
	    } else {
	      id = this.id
	      if (value.hasOwnProperty(id)) {
	        if (value[id] === null) {
	          value[id] = frag
	        } else {
	          ("development") !== 'production' &&
	          this.warnDuplicate(value)
	        }
	      } else {
	        _.define(value, id, frag)
	      }
	    }
	    frag.raw = value
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function (value, index, key) {
	    var trackByKey = this.params.trackBy
	    var primitive = !isObject(value)
	    var frag
	    if (key || trackByKey || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      frag = this.cache[id]
	    } else {
	      frag = value[this.id]
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("development") !== 'production' &&
	      this.warnDuplicate(value)
	    }
	    return frag
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function (frag) {
	    var value = frag.raw
	    var trackByKey = this.params.trackBy
	    var scope = frag.scope
	    var index = scope.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = scope.hasOwnProperty('$key') && scope.$key
	    var primitive = !isObject(value)
	    if (trackByKey || key || primitive) {
	      var id = trackByKey
	        ? trackByKey === '$index'
	          ? index
	          : value[trackByKey]
	        : (key || value)
	      this.cache[id] = null
	    } else {
	      value[this.id] = null
	      frag.raw = null
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function (frag, index, total, type) {
	    type = type + 'Stagger'
	    var trans = frag.node.__v_trans
	    var hooks = trans && trans.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(frag, index, total)
	      : index * parseInt(this.params[type] || this.params.stagger, 10)
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    return value
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function (value) {
	    if (_.isArray(value)) {
	      return value
	    } else if (_.isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      return res
	    } else {
	      var type = typeof value
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    }
	  },
	
	  unbind: function () {
	    if (this.ref) {
	      (this._scope || this.vm).$refs[this.ref] = null
	    }
	    if (this.frags) {
	      var i = this.frags.length
	      var frag
	      while (i--) {
	        frag = this.frags[i]
	        this.deleteCachedFrag(frag)
	        frag.destroy()
	      }
	    }
	  }
	}
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag (frag, anchor, id) {
	  var el = frag.node.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  frag = el.__vfrag__
	  while (
	    (!frag || frag.forId !== id || !frag.inserted) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	    /* istanbul ignore if */
	    if (!el) return
	    frag = el.__vfrag__
	  }
	  return frag
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag (frag) {
	  return frag.node.__vue__ || frag.node.nextSibling.__vue__
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}
	
	if (true) {
	  module.exports.warnDuplicate = function (value) {
	    _.warn(
	      'Duplicate value found in v-for="' + this.descriptor.raw + '": ' +
	      JSON.stringify(value) + '. Use track-by="$index" if ' +
	      'you are expecting duplicate values.'
	    )
	  }
	}


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var FragmentFactory = __webpack_require__(23)
	
	module.exports = {
	
	  priority: 2000,
	
	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling
	      if (next && _.attr(next, 'v-else') !== null) {
	        _.remove(next)
	        this.elseFactory = new FragmentFactory(this.vm, next)
	      }
	      // check main block
	      this.anchor = _.createAnchor('v-if')
	      _.replace(el, this.anchor)
	      this.factory = new FragmentFactory(this.vm, el)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      if (!this.frag) {
	        this.insert()
	      }
	    } else {
	      this.remove()
	    }
	  },
	
	  insert: function () {
	    if (this.elseFrag) {
	      this.elseFrag.remove(true)
	      this.elseFrag = null
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag)
	    this.frag.before(this.anchor)
	  },
	
	  remove: function () {
	    if (this.frag) {
	      this.frag.remove(true)
	      this.frag = null
	    }
	    if (this.elseFactory) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)
	      this.elseFrag.before(this.anchor)
	    }
	  },
	
	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// text & html
	exports.text = __webpack_require__(318)
	exports.html = __webpack_require__(309)
	
	// logic control
	exports['for'] = __webpack_require__(84)
	exports['if'] = __webpack_require__(85)
	exports.show = __webpack_require__(317)
	
	// two-way binding
	exports.model = __webpack_require__(311)
	
	// event handling
	exports.on = __webpack_require__(315)
	
	// attributes
	exports.bind = __webpack_require__(306)
	
	// ref & el
	exports.el = __webpack_require__(308)
	exports.ref = __webpack_require__(316)
	
	// cloak
	exports.cloak = __webpack_require__(307)


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var extend = _.extend
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue (options) {
	  this._init(options)
	}
	
	/**
	 * Mixin global API
	 */
	
	extend(Vue, __webpack_require__(293))
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(86),
	  elementDirectives: __webpack_require__(300),
	  filters: __webpack_require__(320),
	  transitions: {},
	  components: {},
	  partials: {}
	}
	
	/**
	 * Build up the prototype
	 */
	
	var p = Vue.prototype
	
	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */
	
	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})
	
	/**
	 * Mixin internal instance methods
	 */
	
	extend(p, __webpack_require__(323))
	extend(p, __webpack_require__(322))
	extend(p, __webpack_require__(326))
	extend(p, __webpack_require__(324))
	extend(p, __webpack_require__(325))
	
	/**
	 * Mixin public API methods
	 */
	
	extend(p, __webpack_require__(290))
	extend(p, __webpack_require__(291))
	extend(p, __webpack_require__(292))
	extend(p, __webpack_require__(294))
	
	Vue.version = '1.0.3'
	module.exports = _.Vue = Vue
	
	/* istanbul ignore if */
	if (true) {
	  if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
	  }
	}


/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.configRouter = configRouter;
	
	function configRouter(router) {
	  router.map({
	    'components': {
	      component: __webpack_require__(249),
	      subRoutes: {
	        'introduce': {
	          component: __webpack_require__(252)
	        },
	
	        'getting-started': {
	          component: __webpack_require__(251)
	        },
	
	        'download': {
	          component: __webpack_require__(250)
	        },
	
	        'alert': {
	          component: __webpack_require__(236)
	        },
	
	        'button': {
	          component: __webpack_require__(239)
	        },
	
	        'badge': {
	          component: __webpack_require__(237)
	        },
	
	        'breadcrumb': {
	          component: __webpack_require__(238)
	        },
	
	        'checkbox': {
	          component: __webpack_require__(240)
	        },
	
	        'iconfont': {
	          component: __webpack_require__(241)
	        },
	
	        'upload': {
	          component: __webpack_require__(247)
	        },
	
	        // 'modal': {
	        //   component: require('../components/modal.vue')
	        // },
	
	        'radio': {
	          component: __webpack_require__(242)
	        },
	
	        'switch': {
	          component: __webpack_require__(244)
	        },
	
	        'steps': {
	          component: __webpack_require__(243)
	        },
	
	        'table': {
	          component: __webpack_require__(245)
	        },
	
	        'tag': {
	          component: __webpack_require__(246)
	        }
	      }
	    },
	
	    '*': {
	      component: __webpack_require__(253)
	    }
	  });
	
	  router.alias({
	    '/components': '/components/introduce',
	    '/docs/introduce': '/components/introduce',
	    '/docs/getting-started': '/components/getting-started',
	    '/docs/download': '/components/download'
	  });
	
	  // global before
	  // 3 options:
	  // 1. return a boolean
	  // 2. return a Promise that resolves to a boolean
	  // 3. call transition.next() or transition.abort()
	  router.beforeEach(function (transition) {
	    if (transition.to.path === '/forbidden') {
	      router.app.authenticating = true;
	      setTimeout(function () {
	        router.app.authenticating = false;
	        // alert('this route is forbidden by a global before hook')
	        transition.abort();
	      }, 3000);
	    } else {
	      transition.next();
	    }
	  });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _AlertVue = __webpack_require__(254);
	
	var _AlertVue2 = _interopRequireDefault(_AlertVue);

	exports['default'] = _AlertVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BadgeVue = __webpack_require__(255);
	
	var _BadgeVue2 = _interopRequireDefault(_BadgeVue);

	exports['default'] = _BadgeVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BreadcrumbVue = __webpack_require__(256);
	
	var _BreadcrumbVue2 = _interopRequireDefault(_BreadcrumbVue);
	
	var _BreadcrumbItemVue = __webpack_require__(257);
	
	var _BreadcrumbItemVue2 = _interopRequireDefault(_BreadcrumbItemVue);
	
	_BreadcrumbVue2['default'].BreadcrumbItem = _BreadcrumbItemVue2['default'];
	
	exports['default'] = _BreadcrumbVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _CheckboxVue = __webpack_require__(260);
	
	var _CheckboxVue2 = _interopRequireDefault(_CheckboxVue);

	exports['default'] = _CheckboxVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _RadioVue = __webpack_require__(52);
	
	var _RadioVue2 = _interopRequireDefault(_RadioVue);
	
	var _RadioGroupVue = __webpack_require__(262);
	
	var _RadioGroupVue2 = _interopRequireDefault(_RadioGroupVue);
	
	_RadioVue2['default'].RadioGroup = _RadioGroupVue2['default'];
	
	exports['default'] = _RadioVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _StepsVue = __webpack_require__(264);
	
	var _StepsVue2 = _interopRequireDefault(_StepsVue);
	
	var _StepVue = __webpack_require__(263);
	
	var _StepVue2 = _interopRequireDefault(_StepVue);
	
	_StepsVue2['default'].vStep = _StepVue2['default'];
	
	exports['default'] = _StepsVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _SwitchVue = __webpack_require__(265);
	
	var _SwitchVue2 = _interopRequireDefault(_SwitchVue);

	exports['default'] = _SwitchVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function noop() {}
	
	function defaultResolve(data) {
	  return data || [];
	}
	
	var DataSource = (function () {
	  function DataSource(config) {
	    _classCallCheck(this, DataSource);
	
	    if (config) {
	      this.init(config);
	    }
	  }
	
	  _createClass(DataSource, [{
	    key: 'init',
	    value: function init(config) {
	      this.config = config;
	      this.url = config.url || '';
	      this.resolve = config.resolve || defaultResolve;
	      this.getParams = config.getParams || noop;
	      this.getPagination = config.getPagination || noop;
	      this.headers = config.headers || {};
	      this.data = config.data || {};
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return new DataSource((0, _objectAssign2['default'])({}, this.config, config));
	    }
	  }]);
	
	  return DataSource;
	})();
	
	exports['default'] = DataSource;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DataSource = __webpack_require__(98);
	
	var _DataSource2 = _interopRequireDefault(_DataSource);
	
	var _TableVue = __webpack_require__(266);
	
	var _TableVue2 = _interopRequireDefault(_TableVue);
	
	_TableVue2['default'].DataSource = _DataSource2['default'];
	
	exports['default'] = _TableVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _TagVue = __webpack_require__(267);
	
	var _TagVue2 = _interopRequireDefault(_TagVue);

	exports['default'] = _TagVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getFileItem;
	
	function getFileItem(file, fileList) {
	  var matchWay = !file.uid ? 'byName' : 'byUid';
	
	  var target = fileList.filter(function (item) {
	    if (matchWay === 'byName') {
	      return item.name === file.name;
	    } else {
	      return item.uid === file.uid;
	    }
	  })[0];
	
	  return target;
	}
	
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _UploadsVue = __webpack_require__(270);
	
	var _UploadsVue2 = _interopRequireDefault(_UploadsVue);

	exports['default'] = _UploadsVue2['default'];
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = upload;
	function getError(option, xhr) {
	  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = option.action;
	  return err;
	}
	
	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }
	
	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}
	
	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }
	
	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function (e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }
	
	  var formData = new FormData();
	  formData.append(option.filename, option.file);
	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }
	
	  xhr.onerror = function (e) {
	    option.onError(e);
	  };
	
	  xhr.onload = function () {
	    if (xhr.status !== 200) {
	      return option.onError(getError(option, xhr), getBody(xhr));
	    }
	
	    option.onSuccess(getBody(xhr));
	  };
	
	  xhr.open('post', option.action, true);
	  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	  xhr.send(formData);
	}
	
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = uid;
	var now = +new Date();
	var index = 0;
	
	function uid() {
	  return 'ant-upload-' + now + '-' + ++index;
	}
	
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	exports['default'] = KeyCode;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsAlert = __webpack_require__(91);
	
	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);
	
	exports['default'] = {
	  data: function data() {
	    return {};
	  },
	
	  components: { vAlert: _srcComponentsAlert2['default'] },
	
	  methods: {
	    _close: function _close() {
	      console.log('我要被关闭啦！');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsBadge = __webpack_require__(92);
	
	var _srcComponentsBadge2 = _interopRequireDefault(_srcComponentsBadge);
	
	var _srcComponentsIconfont = __webpack_require__(10);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	
	  components: { vBadge: _srcComponentsBadge2['default'], vIcon: _srcComponentsIconfont2['default'] }
	
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsBreadcrumb = __webpack_require__(93);
	
	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);
	
	var _srcComponentsIconfont = __webpack_require__(10);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	
	  components: { vBreadcrumb: _srcComponentsBreadcrumb2['default'], vBreadcrumbItem: _srcComponentsBreadcrumb.BreadcrumbItem, vIcon: _srcComponentsIconfont2['default'] }
	
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsButton = __webpack_require__(14);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var _srcComponentsIconfont = __webpack_require__(10);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      loading: false
	    };
	  },
	
	  components: { vButton: _srcComponentsButton2['default'], vButtonGroup: _srcComponentsButton.ButtonGroup, vIcon: _srcComponentsIconfont2['default'] },
	
	  methods: {
	    _enterLoading: function _enterLoading() {
	      this.loading = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsCheckbox = __webpack_require__(94);
	
	var _srcComponentsCheckbox2 = _interopRequireDefault(_srcComponentsCheckbox);
	
	var _srcComponentsButton = __webpack_require__(14);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      checked: true,
	      disabled: false
	    };
	  },
	
	  components: { vCheckbox: _srcComponentsCheckbox2['default'], vButton: _srcComponentsButton2['default'] },
	
	  computed: {
	    checkedStatus: function checkedStatus() {
	      return this.checked ? '选中' : '取 消';
	    },
	
	    disabledStatus: function disabledStatus() {
	      return this.disabled ? '不可用' : '可 用';
	    }
	  },
	
	  methods: {
	    _change: function _change(e) {
	      console.log('checked=' + e.target.checked);
	    },
	
	    _toggleChecked: function _toggleChecked() {
	      this.checked = !this.checked;
	    },
	
	    _toggleDisable: function _toggleDisable() {
	      this.disabled = !this.disabled;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(143)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  ready: function ready() {
	    [].concat(_toConsumableArray(document.querySelectorAll('.anticons-list li'))).forEach(function (item, i) {
	      var client = new ZeroClipboard(item);
	
	      client.on("copy", function (event) {
	        client.setText('<v-icon type="' + item.querySelectorAll('.anticon-class')[0].innerHTML + '">');
	      });
	
	      client.on("ready", function (readyEvent) {
	        client.on("aftercopy", function (event) {
	          // `this` === `client`
	          // `event.target` === the element that was clicked
	          event.target.classList.add('copied');
	          setTimeout(function () {
	            event.target.classList.remove('copied');
	          }, 2000);
	        });
	      });
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsRadio = __webpack_require__(95);
	
	var _srcComponentsRadio2 = _interopRequireDefault(_srcComponentsRadio);
	
	var _srcComponentsButton = __webpack_require__(14);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var vRadioGroup = _srcComponentsRadio2['default'].RadioGroup;
	
	exports['default'] = {
	  data: function data() {
	    return {
	      disabled: true,
	      groupValue: 'a',
	      cityName: null
	    };
	  },
	
	  components: { vRadio: _srcComponentsRadio2['default'], vRadioGroup: vRadioGroup, vButton: _srcComponentsButton2['default'] },
	
	  methods: {
	    _change: function _change() {},
	
	    _toggleDisabled: function _toggleDisabled() {
	      this.disabled = !this.disabled;
	    },
	
	    _onGroupChange: function _onGroupChange(e) {
	      console.log('radio checked:' + e.target.value);
	      this.groupValue = e.target.value;
	    },
	
	    _onCityChange: function _onCityChange(e) {
	      console.log('当前城市: ' + e.target.name);
	      this.cityName = e.target.name;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsSteps = __webpack_require__(96);
	
	var _srcComponentsSteps2 = _interopRequireDefault(_srcComponentsSteps);
	
	exports['default'] = {
	
	  components: { vSteps: _srcComponentsSteps2['default'], vStep: _srcComponentsSteps.vStep }
	
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsSwitch = __webpack_require__(97);
	
	var _srcComponentsSwitch2 = _interopRequireDefault(_srcComponentsSwitch);
	
	var _srcComponentsButton = __webpack_require__(14);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	var _srcUtils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _srcUtils.defaultProps)({
	    prefixCls: 'ant-switch'
	  }),
	
	  data: function data() {
	    return {
	      disabled: false
	    };
	  },
	
	  components: { vSwitch: _srcComponentsSwitch2['default'], vButton: _srcComponentsButton2['default'] },
	
	  methods: {
	    _change: function _change(value) {
	      console.log('current', value);
	    },
	
	    _toogle: function _toogle() {
	      this.disabled = !this.disabled;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsTable = __webpack_require__(99);
	
	var _srcComponentsTable2 = _interopRequireDefault(_srcComponentsTable);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      columns: [{
	        title: '姓名',
	        dataIndex: 'name'
	      }, {
	        title: '年龄',
	        dataIndex: 'age'
	      }, {
	        title: '住址',
	        dataIndex: 'address'
	      }, {
	        title: '操作',
	        dataIndex: '',
	        render: function render(text, record) {
	          return '<span :class="{\'item\', true}">\n            <a href="javascript:;" @click="edit">编辑</a>\n            <span class="ant-divider"></span>\n            <a href="javascript:;" @click="del">删除</a>\n          </span>';
	        }
	      }],
	      dataSource: [{
	        key: '1',
	        name: '胡彦斌',
	        age: 32,
	        address: '西湖区湖底公园1号'
	      }, {
	        key: '2',
	        name: '胡彦祖',
	        age: 42,
	        address: '西湖区湖底公园1号'
	      }, {
	        key: '3',
	        name: '李大嘴',
	        age: 32,
	        address: '西湖区湖底公园1号'
	      }]
	    };
	  },
	
	  components: { vTable: _srcComponentsTable2['default'] },
	
	  compiled: function compiled() {
	    // debugger
	  },
	
	  methods: {
	    edit: function edit() {
	      alert('edit');
	    },
	
	    del: function del() {
	      alert('del');
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsTag = __webpack_require__(100);
	
	var _srcComponentsTag2 = _interopRequireDefault(_srcComponentsTag);
	
	exports['default'] = {
	
	  components: { vTag: _srcComponentsTag2['default'] },
	
	  methods: {
	    _onClose: function _onClose() {
	      console.log('tag 关闭');
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcComponentsUpload = __webpack_require__(102);
	
	var _srcComponentsUpload2 = _interopRequireDefault(_srcComponentsUpload);
	
	var _srcComponentsIconfont = __webpack_require__(10);
	
	var _srcComponentsIconfont2 = _interopRequireDefault(_srcComponentsIconfont);
	
	var _srcComponentsButton = __webpack_require__(14);
	
	var _srcComponentsButton2 = _interopRequireDefault(_srcComponentsButton);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      name: 'file',
	      action: '/upload',
	      onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }
	        if (info.file.status === 'done') {
	          console.log(info.file.name + ' 上传成功.');
	        } else if (info.file.status === 'error') {
	          console.log(info.file.name + ' 上传失败.');
	        }
	      },
	      defaultFileList: [{
	        uid: -1,
	        name: 'xxx.png',
	        status: 'done',
	        url: 'http://www.baidu.com/xxx.png'
	      }, {
	        uid: -2,
	        name: 'yyy.png',
	        status: 'done',
	        url: 'http://www.baidu.com/yyy.png'
	      }]
	    };
	  },
	
	  components: { vUpload: _srcComponentsUpload2['default'], vIcon: _srcComponentsIconfont2['default'], vButton: _srcComponentsButton2['default'] }
	};
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  computed: {
	    isHomePage: function isHomePage() {
	      if (this.$route.path === '/' || this.$route.path.indexOf('/?') === 0) return true;
	
	      return false;
	    },
	
	    isComponentsPage: function isComponentsPage() {
	      if (this.$route.path.indexOf('/components') === 0) return true;
	
	      return false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  data: function data() {
	    return {
	      componentsMenu: {
	        base: [{
	          name: 'button',
	          desc: '按钮'
	        }, {
	          name: 'iconfont',
	          desc: '字体图标'
	        }
	        // {
	        //   name: 'layout',
	        //   desc: '布局'
	        // }
	        ],
	        form: [{
	          name: 'checkbox',
	          desc: '多选框'
	        },
	        // {
	        //   name: 'datepicker',
	        //   desc: '日期选择框'
	        // },
	        // {
	        //   name: 'form',
	        //   desc: '表单'
	        // },
	        // {
	        //   name: 'input-number',
	        //   desc: '数字输入框'
	        // },
	        {
	          name: 'radio',
	          desc: '单选框'
	        },
	        // {
	        //   name: 'select',
	        //   desc: '选择器'
	        // },
	        // {
	        //   name: 'slider',
	        //   desc: '滑动输入条'
	        // },
	        {
	          name: 'switch',
	          desc: '开关'
	        }, {
	          name: 'upload',
	          desc: '文件上传'
	        }
	        // {
	        //   name: 'validation',
	        //   desc: '表单验证'
	        // }
	        ],
	        show: [
	        // {
	        //   name: 'alert',
	        //   desc: '警告提示'
	        // },
	        {
	          name: 'badge',
	          desc: '徽标数'
	        },
	        // {
	        //   name: 'carousel',
	        //   desc: '走马灯'
	        // },
	        // {
	        //   name: 'collapse',
	        //   desc: '折叠面板'
	        // },
	        // {
	        //   name: 'dropdown',
	        //   desc: '下拉菜单'
	        // },
	        // {
	        //   name: 'message',
	        //   desc: '全局提示'
	        // },
	        // {
	        //   name: 'modal',
	        //   desc: '对话框'
	        // },
	        // {
	        //   name: 'notification',
	        //   desc: '通知提醒框'
	        // },
	        // {
	        //   name: 'popconfirm',
	        //   desc: '气泡确认框'
	        // },
	        // {
	        //   name: 'popover',
	        //   desc: '气泡卡片'
	        // },
	        // {
	        //   name: 'progress',
	        //   desc: '进度条'
	        // },
	        // {
	        //   name: 'table',
	        //   desc: '表格'
	        // },
	        {
	          name: 'tag',
	          desc: '标签'
	        }
	        // {
	        //   name: 'timeline',
	        //   desc: '时间轴'
	        // },
	        // {
	        //   name: 'tooltip',
	        //   desc: '文字提示'
	        // },
	        // {
	        //   name: 'tree',
	        //   desc: '树形控件'
	        // }
	        ],
	        pagination: [{
	          name: 'breadcrumb',
	          desc: '面包屑'
	        },
	        // {
	        //   name: 'menu',
	        //   desc: '导航菜单'
	        // },
	        // {
	        //   name: 'pagination',
	        //   desc: '分页'
	        // },
	        {
	          name: 'steps',
	          desc: '步骤条'
	        }
	        // {
	        //   name: 'tabs',
	        //   desc: '标签页'
	        // }
	        ],
	        other: [
	          // {
	          //   name: 'affix',
	          //   desc: '固钉'
	          // },
	          // {
	          //   name: 'enter-animation',
	          //   desc: '进场动画'
	          // }
	        ]
	      }
	    };
	  },
	
	  filters: {
	    Upper: function Upper(str) {
	      var arr = str.split('-');
	
	      return arr.map(function (item) {
	        return item.substring(0, 1).toUpperCase() + item.substring(1);
	      }).join('');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	// import Animate from './base/animate.vue'
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-alert',
	    type: String,
	    closable: Boolean,
	    message: String,
	    description: String,
	    closeText: String,
	    onClose: function onClose() {}
	  }),
	
	  data: function data() {
	    return {
	      iconClass: '',
	      closeName: '',
	
	      closing: true,
	      closed: false
	    };
	  },
	
	  computed: {
	    iconClass: function iconClass() {
	      var iconClass = this.description ? 'ant-alert-with-description-icon anticon-' : 'ant-alert-icon anticon-';
	
	      switch (this.type) {
	        case 'success':
	          iconClass += 'check-circle';
	          break;
	
	        case 'info':
	          iconClass += 'info-circle';
	          break;
	
	        case 'error':
	          iconClass += 'exclamation-circle';
	          break;
	
	        case 'warn':
	          iconClass += 'question-circle';
	          break;
	
	        default:
	          iconClass += 'default';
	      }
	
	      return iconClass;
	    },
	
	    closeName: function closeName() {
	      return !this.closing ? ' ' + this.prefixCls + '-close' : '';
	    }
	  },
	
	  methods: {
	    _handleClose: function _handleClose(e) {
	      var dom = this.$el;
	      dom.style.height = dom.offsetHeight + 'px';
	
	      this.closing = false;
	
	      if (this.onClose) {
	        this.onClose.call(this, e);
	      }
	    },
	
	    _animationEnd: function _animationEnd() {
	      this.closed = true, this.closing = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-badge',
	    count: Number,
	    dot: false
	  }),
	
	  filters: {
	    short: function short(value) {
	      return value >= 100 ? '99+' : value;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-breadcrumb'
	  })
	};
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-breadcrumb',
	    href: String
	  })
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames2 = __webpack_require__(6);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-btn',
	
	    type: (0, _utils.oneOf)(['primary', 'ghost', undefined]),
	    htmlType: 'button',
	    shape: (0, _utils.oneOf)(['circle', 'circle-outline', undefined]),
	    size: (0, _utils.oneOf)(['small', 'large', undefined]),
	    loading: Boolean,
	    className: '',
	    onclick: function onclick() {}
	  }),
	
	  computed: {
	    btClasses: function btClasses() {
	      var _classnames;
	
	      var sizeCls = ({
	        'large': 'lg',
	        'small': 'sm'
	      })[this.size] || '';
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + this.type, !!this.type), _defineProperty(_classnames, this.prefixCls + '-' + this.shape, !!this.shape), _defineProperty(_classnames, this.prefixCls + '-' + sizeCls, !!sizeCls), _defineProperty(_classnames, this.prefixCls + '-loading', this.loading != null && this.loading), _defineProperty(_classnames, this.className, !!this.className), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames2 = __webpack_require__(6);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-btn-group',
	
	    size: (0, _utils.oneOf)(['large', 'small', undefined]),
	    className: ''
	  }),
	
	  computed: {
	    btgClasses: function btgClasses() {
	      var _classnames;
	
	      var sizeCls = ({
	        'large': 'lg',
	        'small': 'sm'
	      })[this.size] || '';
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + sizeCls, !!sizeCls), _defineProperty(_classnames, this.className, this.className), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames3 = __webpack_require__(6);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-checkbox',
	    style: {},
	    type: 'checkbox',
	    className: '',
	    disabled: false,
	    checked: Boolean,
	    defaultChecked: false,
	    onChange: function onChange() {}
	  }),
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.className + '-checked', this.checked), _classnames));
	    },
	
	    ckClasses: function ckClasses() {
	      var _classnames2;
	
	      return (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, this.className, !!this.className), _defineProperty(_classnames2, this.prefixCls, 1), _defineProperty(_classnames2, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames2, this.prefixCls + '-checked-' + (this.checked ? 1 : 0), !!this.checked), _defineProperty(_classnames2, this.prefixCls + '-disabled', this.disabled), _classnames2));
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  methods: {
	    _handleChange: function _handleChange(e) {
	      this.checked = e.target.checked;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames2 = __webpack_require__(6);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    className: '',
	    type: {
	      type: String,
	      require: true
	    }
	  }),
	
	  computed: {
	    iconClasses: function iconClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, 'anticon', 1), _defineProperty(_classnames, 'anticon-' + this.type, this.type), _classnames));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames3 = __webpack_require__(6);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio',
	
	    checked: Boolean,
	    defaultChecked: false,
	    value: (0, _utils.oneOfType)(String, Number),
	    onChange: function onChange() {},
	
	    disabled: Boolean,
	
	    style: {},
	    className: ''
	  }),
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.className + '-checked', this.checked), _classnames));
	    },
	
	    radioClasses: function radioClasses() {
	      var _classnames2;
	
	      return (0, _classnames4['default'])((_classnames2 = {}, _defineProperty(_classnames2, this.className, !!this.className), _defineProperty(_classnames2, this.prefixCls, true), _defineProperty(_classnames2, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames2, this.prefixCls + '-checked-' + (this.checked ? 1 : 0), !!this.checked), _defineProperty(_classnames2, this.prefixCls + '-disabled', this.disabled), _classnames2));
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  methods: {
	    _handleChange: function _handleChange(e) {
	      this.checked = e.target.checked;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _RadioVue = __webpack_require__(52);
	
	var _RadioVue2 = _interopRequireDefault(_RadioVue);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio-group',
	    type: 'radio', // or button
	    value: (0, _utils.oneOfType)(String, Number),
	    defaultValue: (0, _utils.oneOfType)(String, Number),
	    radios: [],
	    onChange: function onChange() {}
	  }),
	
	  components: { vRadio: _RadioVue2['default'] },
	
	  computed: {
	    radioClasses: function radioClasses() {
	      if (this.type === 'button') {
	        return 'ant-radio-button';
	      }
	
	      return '';
	    }
	  },
	
	  compiled: function compiled() {
	    if (this.value == null) {
	      this.value = this.defaultValue;
	    }
	  },
	
	  methods: {
	    _onRadioChange: function _onRadioChange(index, e) {
	      e.target.name = this.radios[index].name;
	      this.value = e.target.value;
	      this.onChange(e);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-steps',
	    iconPrefix: 'ant',
	    size: 'default',
	    maxDescriptionWidth: 100,
	    direction: '',
	    current: 0
	  }),
	
	  data: function data() {
	    return {
	      init: false,
	      tailWidth: 0,
	      previousStepsWidth: 0,
	      itemsWidth: []
	    };
	  },
	
	  compiled: function compiled() {
	    var _this = this;
	
	    if (this.direction === 'vertical') {
	      this.maxDescriptionWidth = 'auto';
	    }
	
	    var dom = this.$el;
	    var len = this.$el.children.length - 1;
	    this.itemsWidth = new Array(len + 1);
	
	    for (var _i = 0; _i <= len - 1; _i++) {
	      var _item = this.$el.children[_i].children;
	      this.itemsWidth[_i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth);
	    }
	
	    this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth);
	    this.previousStepsWidth = Math.floor(this.$el.offsetWidth);
	    this._update();
	
	    this.$el.children[len].style.position = 'absolute';
	
	    setTimeout(function () {
	      _this._resize();
	    });
	  },
	
	  beforeDestroy: function beforeDestroy() {
	    if (this.direction === 'vertical') {
	      return;
	    }
	
	    if (window.attachEvent) {
	      window.attachEvent('onresize', this._resize);
	    } else {
	      window.removeEventListener('resize', this._resize);
	    }
	  },
	
	  methods: {
	    _resize: function _resize() {
	      var w = Math.floor(this.$el.offsetWidth);
	      if (this.previousStepsWidth === w) {
	        return;
	      }
	      this.previousStepsWidth = w;
	      this._update();
	    },
	
	    _update: function _update() {
	      var len = this.$children.length - 1;
	      var tw = 0;
	      this.itemsWidth.forEach(function (w) {
	        tw += w;
	      });
	
	      var dw = Math.floor((this.previousStepsWidth - tw) / len) - 1;
	      if (dw <= 0) {
	        return;
	      }
	
	      this.init = true;
	      this.tailWidth = ew;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcUtils = __webpack_require__(3);
	
	var _classnames2 = __webpack_require__(6);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	exports['default'] = {
	  props: (0, _srcUtils.defaultProps)({
	    prefixCls: 'ant-switch',
	    style: {},
	    className: '',
	    disabled: Boolean,
	    checked: Boolean,
	    defaultChecked: false,
	    onChange: function onChange() {}
	  }),
	
	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	  },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.className, !!this.className), _defineProperty(_classnames, this.prefixCls, true), _defineProperty(_classnames, this.prefixCls + '-checked', this.checked), _defineProperty(_classnames, this.prefixCls + '-disabled', this.disabled), _classnames));
	    }
	  },
	
	  methods: {
	    _toggle: function _toggle() {
	      if (this.disabled) return function () {};
	
	      this.checked = !this.checked;
	      this.onChange(this.checked);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _vue = __webpack_require__(87);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _utils = __webpack_require__(3);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    rowSelection: Object,
	    pagination: Object,
	    size: 'normal',
	    dataSource: (0, _utils.oneOfType)(Array, Object),
	    columns: Array,
	    expandIconAsCell: true,
	    onChange: function onChange() {},
	
	    prefixCls: 'ant-table',
	    useFixedHeader: false,
	    bordered: false,
	    bodyStyle: Object,
	    style: Object
	  }),
	
	  data: function data() {
	    return {
	      selectedRowKeys: [],
	      filters: {},
	      loading: false,
	      sortColumn: '',
	      sortOrder: '',
	      sorter: null
	    };
	  },
	
	  ready: function ready() {
	    console.log(this.dataSource);
	  },
	
	  computed: {
	
	    isEmpty: function isEmpty() {
	      return this.dataSource && !!this.dataSource.length;
	    },
	
	    tableClass: function tableClass() {
	      var classString = this.prefixCls;
	
	      if (this.loading) {
	        classString += ' ant-table-loading';
	      }
	
	      if (this.size === 'small') {
	        classString += ' ant-table-small';
	      }
	
	      if (this.bordered) {
	        classString += ' ant-table-bordered';
	      }
	
	      return classString;
	    }
	  },
	
	  ready: function ready() {
	    console.log('true');
	    this.compileRender();
	  },
	
	  methods: {
	    compileRender: function compileRender() {
	      var $el = this.$els.render;
	
	      for (var i = 0; i < this.columns.length; i++) {
	        if (this.columns[i].render) {
	          for (var j = 0; j < this.dataSource.length; j++) {
	            var template = this.columns[i].render();
	            var CustomRender = _vue2['default'].extend({
	              template: template
	            });
	
	            var _el = $el.children[j].children[i];
	
	            // new CustomRender().$mount(_el)
	          }
	          // $el
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames2 = __webpack_require__(6);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(3);
	
	var _iconfont = __webpack_require__(10);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-tag',
	
	    href: String,
	    closable: false,
	    onClose: function onClose() {},
	    color: (0, _utils.oneOf)(['blue', 'green', 'yellow', 'red'])
	  }),
	
	  data: function data() {
	    return {
	      closed: false
	    };
	  },
	
	  components: { vIcon: _iconfont2['default'] },
	
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-' + this.color, this.color), _defineProperty(_classnames, this.prefixCls + '-close', this.closing), _classnames));
	    }
	  },
	
	  methods: {
	    _close: function _close(e) {
	      // let dom = this.$el
	      // dom.style.width = dom.offsetWidth + 'px'
	      // dom.style.height = dom.offsetHeight + 'px'
	      this.closed = true;
	      this.onClose.call(this, e);
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _request = __webpack_require__(103);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _uid = __webpack_require__(104);
	
	var _uid2 = _interopRequireDefault(_uid);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    action: String,
	    name: String,
	    multiple: Boolean,
	    data: Object,
	    onStart: function onStart() {},
	    onProgress: function onProgress() {},
	    onSuccess: function onSuccess() {},
	    onError: function onError() {},
	    beforeUpload: function beforeUpload() {}
	  }),
	
	  methods: {
	    _onChange: function _onChange(e) {
	      var files = e.target.files;
	      this._uploadFiles(files);
	    },
	
	    _onClick: function _onClick() {
	      var el = this.$els.file;
	      if (!el) return;
	
	      el.click();
	      el.value = '';
	    },
	
	    _onKeyDown: function _onKeyDown(e) {
	      if (e.key === 'Enter') {
	        this._onClick();
	      }
	    },
	
	    _onFileDrop: function _onFileDrop(e) {
	      if (e.type === 'dragover') {
	        return e.preventDefault();
	      }
	
	      var files = e.dataTransfer.files;
	      this._uploadFiles(files);
	
	      e.preventDefault();
	    },
	
	    _uploadFiles: function _uploadFiles(files) {
	      var len = files.length;
	      if (len > 0) {
	        for (var i = 0; i < len; i++) {
	          var file = files.item(i);
	          file.uid = (0, _uid2['default'])();
	          this._upload(file);
	        }
	
	        if (this.multiple) {
	          this.onStart(Array.prototype.slice.call(files));
	        } else {
	          this.onStart(Array.prototype.slice.call(files)[0]);
	        }
	      }
	    },
	
	    _upload: function _upload(file) {
	      var _this = this;
	
	      if (!this.beforeUpload) {
	        return this._post(file);
	      }
	
	      var before = this.beforeUpload(file);
	      if (before && before.then) {
	        before.then(function () {
	          _this._post(file);
	        });
	      } else if (before !== false) {
	        this._post(file);
	      }
	    },
	
	    _post: function _post(file) {
	      var _this2 = this;
	
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data();
	      }
	
	      (0, _request2['default'])({
	        action: this.action,
	        filename: this.name,
	        file: file,
	        data: data,
	        onProgress: function onProgress(e) {
	          _this2.onProgress(e, file);
	        },
	        onSuccess: function onSuccess(ret) {
	          _this2.onSuccess(ret, file);
	        },
	        onError: function onError(err, ret) {
	          _this2.onError(err, ret, file);
	        }
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _iconfont = __webpack_require__(10);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',
	
	    items: [],
	    onRemove: function onRemove() {}
	  }),
	
	  components: { vIcon: _iconfont2['default'] },
	
	  methods: {
	    _handleClose: function _handleClose(file) {
	      this.onRemove(file);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _classnames3 = __webpack_require__(6);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _AjaxUploaderVue = __webpack_require__(268);
	
	var _AjaxUploaderVue2 = _interopRequireDefault(_AjaxUploaderVue);
	
	var _UploadListVue = __webpack_require__(269);
	
	var _UploadListVue2 = _interopRequireDefault(_UploadListVue);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _getFileItem = __webpack_require__(101);
	
	var _getFileItem2 = _interopRequireDefault(_getFileItem);
	
	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	  return {
	    lastModified: file.lastModified,
	    lastModifiedDate: file.lastModifiedDate,
	    name: file.filename || file.name,
	    size: file.size,
	    type: file.type,
	    uid: file.uid,
	    response: file.response,
	    error: file.error
	  };
	}
	
	exports['default'] = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',
	
	    type: 'select',
	    name: '',
	    forceAjax: false,
	    multipart: false,
	    action: '',
	    data: {},
	    accept: '',
	    multiple: false,
	    fileList: Array,
	    defaultFileList: Array,
	    beforeUpload: function beforeUpload() {},
	    onChange: function onChange() {}
	  }),
	
	  components: { AjaxUpload: _AjaxUploaderVue2['default'], UploadList: _UploadListVue2['default'] },
	
	  computed: {
	    isDrag: function isDrag() {
	      return this.type === 'drag';
	    },
	
	    wrapClasses: function wrapClasses() {
	      var _classnames;
	
	      return (0, _classnames4['default'])((_classnames = {}, _defineProperty(_classnames, this.prefixCls, 1), _defineProperty(_classnames, this.prefixCls + '-drag', this.isDrag), _defineProperty(_classnames, this.prefixCls + '-select', !this.isDrag), _classnames));
	    },
	
	    containerClasses: function containerClasses() {
	      return (0, _classnames4['default'])(_defineProperty({}, this.prefixCls + '-drag-container', this.isDrag));
	    }
	  },
	
	  beforeCompile: function beforeCompile() {
	    this.$set('fileList', this.fileList || this.defaultFileList || []);
	  },
	
	  methods: {
	    _onStart: function _onStart(file) {
	      var targetItem = undefined;
	      var nextFileList = this.fileList.concat();
	      if (file.length > 0) {
	        targetItem = file.map(function (f) {
	          f = fileToObject(f);
	          f.status = 'uploading';
	          return f;
	        });
	        nextFileList = nextFileList.concat(file);
	      } else {
	        targetItem = fileToObject(file);
	        targetItem.status = 'uploading';
	        nextFileList.push(targetItem);
	      }
	
	      this._onChange({
	        file: targetItem,
	        fileList: nextFileList
	      });
	    },
	
	    _onProgress: function _onProgress(e, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	
	      if (targetItem) {
	        this._onChange({
	          event: e,
	          file: file,
	          fileList: this.fileList
	        });
	      }
	    },
	
	    _onSuccess: function _onSuccess(response, file) {
	      // 服务器端需要返回标准 json 字符串
	      // 否则视为失败
	      try {
	        if (typeof response === 'string') {
	          JSON.parse(response);
	        }
	      } catch (e) {
	        this._onError(new Error('No response'), response, file);
	        return;
	      }
	
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	
	      // 之前已经删除
	      if (targetItem) {
	        targetItem.status = 'done';
	        targetItem.response = response;
	
	        this._onChange({
	          file: targetItem,
	          fileList: fileList
	        });
	      }
	    },
	
	    _onError: function _onError(error, response, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	      targetItem.error = error;
	      targetItem.response = response;
	      targetItem.status = 'error';
	
	      this._handleRemove(targetItem);
	    },
	
	    _removeFile: function _removeFile(file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2['default'])(file, fileList);
	      var index = fileList.indexOf(targetItem);
	
	      if (index !== -1) {
	        fileList.splice(index, 1);
	        return fileList;
	      }
	
	      return null;
	    },
	
	    _handleRemove: function _handleRemove(file) {
	      var fileList = this._removeFile(file);
	
	      if (fileList) {
	        this._onChange({
	          file: file,
	          fileList: fileList
	        });
	      }
	    },
	
	    _handleManualRemove: function _handleManualRemove(file) {
	      file.status = 'removed';
	      this._handleRemove(file);
	    },
	
	    _getFilePlainObject: function _getFilePlainObject(fileList) {
	      var arr = [];
	      fileList.forEach(function (item) {
	        arr.push({
	          name: item.name,
	          size: item.size,
	          status: item.status,
	          type: item.type,
	          uid: item.uid,
	          response: item.response
	        });
	      });
	      return arr;
	    },
	
	    _onChange: function _onChange(info) {
	      // 1. 有设置外部属性时不改变 fileList
	      // 2. 上传中状态（info.event）不改变 fileList
	      if (info.fileList) {
	        var fileList = info.fileList;
	        // todo
	        // 用纯对象的方式来触发vue的更新，好吧，之后看看有没有好的方式
	        fileList = this._getFilePlainObject(fileList);
	        this.$set('fileList', fileList);
	      }
	      this.onChange(info);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Array$from = __webpack_require__(138)["default"];
	
	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(170);
	__webpack_require__(167);
	module.exports = __webpack_require__(12).Array.from;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(168);
	module.exports = __webpack_require__(12).Object.freeze;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(169);
	module.exports = __webpack_require__(12).Object.keys;

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(152)
	  , TAG = __webpack_require__(8)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(149);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(30)
	  , ITERATOR  = __webpack_require__(8)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(150);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(15)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(8)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(47)(1,next)});
	  __webpack_require__(48)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(159)
	  , $def            = __webpack_require__(28)
	  , $redef          = __webpack_require__(160)
	  , hide            = __webpack_require__(21)
	  , has             = __webpack_require__(44)
	  , SYMBOL_ITERATOR = __webpack_require__(8)('iterator')
	  , Iterators       = __webpack_require__(30)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(156)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(15).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(48)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(8)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(29)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(49)
	  , defined   = __webpack_require__(42);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(43)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(49)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(151)
	  , ITERATOR  = __webpack_require__(8)('iterator')
	  , Iterators = __webpack_require__(30);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(153)
	  , $def        = __webpack_require__(28)
	  , toObject    = __webpack_require__(50)
	  , call        = __webpack_require__(155)
	  , isArrayIter = __webpack_require__(154)
	  , toLength    = __webpack_require__(164)
	  , getIterFn   = __webpack_require__(166);
	$def($def.S + $def.F * !__webpack_require__(158)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(45);
	
	__webpack_require__(46)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50);
	
	__webpack_require__(46)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(162)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(157)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".head-example {\n  width: 42px;\n  height: 42px;\n  border-radius: 6px;\n  background: #eee;\n  display: inline-block;\n}", ""]);
	
	// exports


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "#components-button-demo-icon .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n\n#components-button-demo-button-group .ant-btn {\n    margin-bottom: 12px;\n    margin-right: 0;\n}", ""]);
	
	// exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-container {\n  margin-left: 260px;\n  padding: 30px 40px 120px;\n  -webkit-animation: xRightMatrix .5s ease-out;\n  animation: xRightMatrix .5s ease-out;\n  background: #fff;\n  min-height: 500px;\n}\n\n.main-container-center {\n  margin: 0 auto;\n  padding: 30px 80px 120px;\n  border-left: 1px solid #e9e9e9;\n  border-right: 1px solid #e9e9e9;\n  width: 80%;\n  height: 100%;\n}\n\n.aside-container {\n  width: 260px;\n  background: #F9F9F9;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  float: left;\n}\n\n.aside-container > ul > li {\n  overflow: hidden;\n}\n\n.aside-container li h4 {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 0 10px 46px;\n  margin: 0;\n  color: #5C6B77;\n  cursor: pointer;\n  transition: background .5s, border .5s;\n  border-left: 3px solid transparent;\n  position: relative;\n  z-index: 1;\n  background: #F9F9F9;\n  position: relative;\n}\n\n.aside-container li h4:after {\n  position: absolute;\n  top: 11px;\n  right: 30px;\n  content: \"\\E600\";\n  font-family: \"anticon\";\n  transform: scale(0.6);\n  font-size: 12px;\n  color: #5C6B76;\n  opacity: 0;\n  -webkit-transform: scale(0.6) rotate(180deg);\n  transform: scale(0.6) rotate(180deg);\n  transition: all 0.3s ease;\n}\n\n.aside-container li[open=open] h4:after {\n  -webkit-transform: scale(0.6) rotate(0deg);\n  transform: scale(0.6) rotate(0deg);\n}\n\n.aside-container li:hover h4:after {\n  opacity: 0.8;\n}\n\n.aside-container li > ul.aside-list-show {\n  display: block;\n}\n\n.aside-container li > ul li {\n  border-left: 3px solid transparent;\n}\n\n.aside-container li a {\n  line-height: 40px;\n  height: 40px;\n  display: block;\n  padding-left: 60px;\n  font-size: 14px;\n  color: #5C6B76;\n}\n\n.aside-container li.type-divider {\n  font-size: 12px;\n  -webkit-transform:  scale(0.9);\n  transform: scale(0.9);\n  transform-origin: 0 50%;\n  color: #aaa;\n  text-shadow: 0px 1px 0px #FFF;\n  margin: 6px 0 6px 48px;\n}\n\n.aside-container > ul > li > a {\n  padding-left: 46px;\n  font-size: 14px;\n  border-left: 3px solid transparent;\n}\n\n.aside-container > ul > li.current > a {\n  border-left: 0;\n}\n\n.aside-container .chinese {\n  font-size: 12px;\n  margin-left: 6px;\n  font-weight: normal;\n  opacity: 0.67;\n}\n\n.aside-container li a:hover {\n  color: #6EB4E0;\n}\n\n.aside-container .current {\n  background: #fff;\n  border-left: 3px solid #71B5DE;\n  color: #71B5DE;\n}\n\n.aside-container .current a {\n  color: #71B5DE;\n}\n\n.markdown {\n  /*color: #777;*/\n  font-size: 14px;\n  /*line-height: 1.8;\n  width: 80%;*/\n}\n\n.markdown img {\n  vertical-align: middle;\n}\n\n.markdown h1 {\n  color: #5C6B77;\n  font-weight: 600;\n}\n\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  color: #5C6B77;\n  margin: 1.8em 0 1em 0;\n  font-weight: 600;\n}\n\n.markdown hr {\n  border-radius: 10px;\n  height: 3px;\n  border: 0;\n  background: #eee;\n  margin: 20px 0;\n}\n\n.markdown code,\n.markdown kbd,\n.markdown pre,\n.markdown samp {\n  font-family: Consolas, monospace;\n}\n\n.markdown p,\n.markdown pre {\n  margin: 1.2em 0;\n  padding: 1em;\n}\n\n.markdown > ul li {\n  list-style: circle;\n  margin-left: 20px;\n  padding-left: 8px;\n}\n\n.markdown > ol li {\n  list-style: decimal;\n  margin-left: 20px;\n  padding-left: 8px;\n}\n\n.markdown code {\n  margin: 0 3px;\n}\n\n.markdown pre {\n  background: #F7F7F7;\n  border-radius: 6px;\n}\n\n/*.markdown pre code {\n  background: #F7F7F7;\n  border: none;\n  padding: 12px 20px;\n  margin: 0;\n}*/\n\n.markdown strong,\n.markdown b {\n  font-weight: 600;\n}\n\n.markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0px;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n\n.markdown > table th {\n  white-space: nowrap;\n  color: #5C6B77;\n  font-weight: 600;\n}\n\n.markdown > table th,\n.markdown > table td {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n\n.markdown > table th {\n  background: #F7F7F7;\n}\n\n.markdown blockquote {\n  font-size: 90%;\n  color: #999;\n  border-left: 4px solid #e9e9e9;\n  padding-left: 0.8em;\n  margin: 0;\n}\n\n.markdown .anchor {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  margin-left: 8px;\n}\n\n.markdown h1:hover .anchor,\n.markdown h2:hover .anchor,\n.markdown h3:hover .anchor,\n.markdown h4:hover .anchor,\n.markdown h5:hover .anchor,\n.markdown h6:hover .anchor {\n  opacity: 1;\n  display: inline-block;\n}\n\n#api ~ ul > li > p > strong ~ code {\n  background: #fff;\n  color: #CC7300;\n  border: none;\n  margin-left: 0.5em;\n}\n\n.code-boxes-col {\n  width: 100%;\n}\n\n.code-boxes-col-1-1 {\n  width: 80%;\n}\n\n.code-boxes-col-2-1 {\n  width: 49%;\n  display: inline-block;\n  vertical-align: top;\n  padding-right: 15px;\n}\n\n.code-boxes-col-2-1:last-child {\n  padding-right: 0;\n}\n\n.code-box {\n  border: 1px solid #E9E9E9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0px 15px 15px 0px;\n  transition: all 0.5s ease;\n}\n\n.code-box:hover {\n  border-color: #ccc;\n}\n\n.code-box:target {\n  border: 1px solid rgba(45, 183, 245, 0.7);\n  box-shadow: 0 0 4px rgba(45, 183, 245, 0.5);\n}\n\n.code-box:hover .code-box-meta,\n.code-box:target .code-box-meta {\n  background: #fbfbfb;\n}\n\n.code-box:hover .code-box-title,\n.code-box:target .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n\n.code-box h3 {\n  margin: 1em;\n  font-size: 14px;\n}\n\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n}\n\n.code-box .code-box-demo {\n  padding: 1.2em 1em;\n}\n\n.code-box-meta {\n  position: relative;\n  padding: 10px 15px;\n  border-radius: 0 0 6px 6px;\n  transition: background-color 0.4s ease;\n  width: 100%;\n}\n\n.code-box-meta h4,\n.code-box-meta p {\n  margin: 0;\n}\n\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  transition: all 0.4s ease;\n}\n\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E665\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  display: inline-block;\n}\n\n.code-box-meta > p {\n  font-size: 12px;\n  margin: 0.5em 0;\n  padding-right: 25px;\n}\n\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 18px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: 0.5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  transition: all 0.3s ease;\n  color: #999;\n  background: #fff;\n}\n\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n\n.code-box .collapse:hover {\n  opacity: 1;\n}\n\n.code-box .highlight {\n  overflow: hidden;\n  display: none;\n  padding: 5px;\n  border-top: 1px dashed #e9e9e9;\n}\n\n.xRightMatrix {\n  animation: xRightMatrix .5s ease-out;\n}\n\n@keyframes xRightMatrix {\n  0% {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}", ""]);
	
	// exports


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".ant-badge {\n    margin-right: 16px;\n}\n\n.ant-badge-count {\n  right: 0;\n  transform: translateX(50%);\n}", ""]);
	
	// exports


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "label.ant-radio-button > .ant-radio {\n  display: none\n}", ""]);
	
	// exports


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(338);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);
	
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;
	
	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;
	
	        enumerator._init();
	
	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };
	
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;
	
	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;
	
	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }
	
	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	    var lib$es6$promise$promise$$counter = 0;
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }
	
	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }
	
	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;
	
	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }
	
	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;
	
	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }
	
	        return child;
	      },
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(88)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(337), (function() { return this; }()), __webpack_require__(89)(module)))

/***/ },
/* 177 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 178 */
177,
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "45d809bfeeaa44603f43a5f05c92f3fc.png"

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"alert\">Alert</h1>\n<hr>\n<p>警告提示，展现需要关注的信息。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当某个页面需要向用户显示警告的信息时。</li>\n<li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\" :closable=\"true\" :on-close=\"_close\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\" :description=\"'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'\" :closable=\"true\" :on-close=\"_close\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\" :description=\"'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\" :description=\"'消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\" :description=\"'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\" :description=\"'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'成功提示的文案'\" :type=\"'success'\"></v-alert>\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\"></v-alert>\n        <v-alert :message=\"'警告提示的文案'\" :type=\"'warn'\"></v-alert>\n        <v-alert :message=\"'错误提示的文案'\" :type=\"'error'\"></v-alert>\n      </div>\n    </div>\n  </div>\n  <div class=\"code-boxes-col-2-1\">\n    <div class=\"code-box\">\n      <div class=\"code-box-demo\">\n        <v-alert :message=\"'消息提示的文案'\" :type=\"'info'\" :closable=\"true\">\n          <a slot=\"closeText\" href=\"javascript:;\">不再提醒</a>\n        </v-alert>\n      </div>\n    </div>\n  </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>必选参数，指定警告提示的样式，有四种选择<code>success</code>、<code>info</code>、<code>warn</code>、<code>error</code></td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>可选参数，默认不显示关闭按钮</td>\n<td>Boolean</td>\n<td>无</td>\n<td></td>\n<td>message</td>\n<td>必选参数，警告提示内容</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>description</td>\n<td>可选参数，警告提示的辅助性文字介绍</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>可选参数，关闭时触发的回调函数</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n<tr>\n<td>slot::closeText</td>\n<td>可选参数，自定义关闭按钮</td>\n<td>slot</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"badge\">Badge</h1>\n<hr>\n<p>图标右上角的圆形徽标数字。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>简单的徽章显示</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :count=\"5\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>超过99的会显示为99+</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :count=\"99\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n    <v-badge :count=\"200\">\n      <a href=\"javascript:;\" class=\"head-example\"></a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>99<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:count</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>200<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>没有具体的数字</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-badge :dot=\"true\">\n      <v-icon :type=\"'notification'\"></v-icon>\n    </v-badge>\n    <v-badge :dot=\"true\">\n      <a href=\"javascript:;\">一个链接</a>\n    </v-badge>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>notification<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>javascript:;<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>一个链接<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>用a标签进行包裹即可</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <a href=\"#\">\n      <v-badge :dot=\"true\">\n        <span class=\"head-example\"></span>\n      </v-badge>\n    </a>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-badge</span> <span class=\"token attr-name\" >:dot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>head-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-badge</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>展示的数字，大于 99 时显示为 99+</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>不展示数字，只有一个小红点</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"breadcrumb\">Breadcrumb</h1>\n<hr>\n<p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当系统拥有超过两级以上的层级结构时；</li>\n<li>当需要告知用户“你在哪里”时；</li>\n<li>当需要向上导航的功能时。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-breadcrumb>\n      <v-breadcrumb-item>首页</v-breadcrumb-item>\n      <v-breadcrumb-item :href=\"'#'\">应用中心</v-breadcrumb-item>\n      <v-breadcrumb-item :href=\"'#'\">应用列表</v-breadcrumb-item>\n      <v-breadcrumb-item>某应用</v-breadcrumb-item>\n    </v-breadcrumb>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>首页<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span> <span class=\"token attr-name\" >:href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>#<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>应用中心<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span> <span class=\"token attr-name\" >:href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>#<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>应用列表<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>某应用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>带图标</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-breadcrumb>\n      <v-breadcrumb-item><v-icon :type=\"'home'\"></v-icon>首页</v-breadcrumb-item>\n      <v-breadcrumb-item><v-icon :type=\"'user'\"></v-icon>应用列表</v-breadcrumb-item>\n      <v-breadcrumb-item>应用</v-breadcrumb-item>\n    </v-breadcrumb>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>home<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>首页<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>user<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>应用列表<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>应用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb-item</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-breadcrumb</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"breadcrumb\">Breadcrumb</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>router</td>\n<td>可传入 react-router 的实例</td>\n<td>Object</td>\n<td></td>\n<td>-</td>\n</tr>\n<tr>\n<td>routes</td>\n<td>router 的路由栈信息</td>\n<td>Array</td>\n<td></td>\n<td>-</td>\n</tr>\n<tr>\n<td>params</td>\n<td>路由的参数</td>\n<td>Object</td>\n<td></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"breadcrumb-item\">Breadcrumb.Item</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>href</td>\n<td>链接，如不传则不可点击</td>\n<td>string</td>\n<td></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"button\">Button</h1>\n<hr>\n<p>按钮用于开始一个即时操作。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>\n<h2 id=\"-\">如何使用</h2>\n<ul>\n<li><p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code></p>\n</li>\n<li><p>按钮的属性说明如下：</p>\n</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>设置按钮类型，可选值为 <code>primary</code> <code>ghost</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 HTML标准</td>\n<td>Enum</td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>shape</td>\n<td>设置按钮形状，可选值为 <code>circle</code> <code>circle-outline</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>size</td>\n<td>设置按钮大小，可选值为 <code>sm</code> <code>lg</code> 或者不设</td>\n<td>Enum</td>\n<td>undefined</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>设置按钮载入状态，存在为 <code>true</code>，不存在为 <code>false</code>，或直接设置值，如：<code>loading=&quot;true&quot;</code></td>\n<td>Bool</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td><code>click</code> 事件的 handler</td>\n<td>Function</td>\n<td><code>function() {}</code></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>&lt;Button&gt;Hello world!&lt;/Button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;Hello world!&lt;/button&gt;</code>，并且除了上表中的属性，其它属性都会直接传到 <code>&lt;button&gt;&lt;/button&gt;</code></li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮类型</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\">主按钮</v-button>\n    <v-button>次按钮</v-button>\n    <v-button type=\"ghost\">幽灵按钮</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>主按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>次按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮尺寸</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" size=\"large\">大号按钮</v-button>\n    <v-button type=\"primary\">中号按钮(默认)</v-button>\n    <v-button type=\"primary\" size=\"small\">小号按钮</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大号按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中号按钮(默认)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小号按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮形状</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" shape=\"circle\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"primary\" shape=\"circle\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"primary\" shape=\"circle\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <br />\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮状态</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <h4>使用 <code>disabled</code> 属性</h4>\n    <v-button type=\"primary\">主按钮</v-button>\n    <v-button type=\"primary\" disabled>主按钮(失效)</v-button>\n    <br>\n    <v-button>次按钮</v-button>\n    <v-button disabled>次按钮(失效)</v-button>\n    <br>\n    <h4>使用 <code>.disabled</code> class</h4>\n    <v-button type=\"ghost\">幽灵按钮</v-button>\n    <v-button type=\"ghost\" class=\"disabled\">幽灵按钮(失效)</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>使用 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span> 属性<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>主按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>主按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>次按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>次按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>使用 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>.disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span> class<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>幽灵按钮(失效)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮加载中</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" :loading=\"true\" size=\"large\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"true\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"true\" size=\"small\">加载中</v-button>\n    <v-button type=\"primary\" :loading=\"loading\" @click=\"_enterLoading\">点击变加载</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>加载中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:loading</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>loading<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_enterLoading<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>点击变加载<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮组合</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <h4>基本组合</h4>\n    <v-button-group>\n      <v-button type=\"primary\">确定</v-button>\n      <v-button type=\"primary\">取消</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button>左</v-button>\n      <v-button>中</v-button>\n      <v-button>右</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"primary\">左</v-button>\n      <v-button type=\"ghost\">中</v-button>\n      <v-button type=\"ghost\">中</v-button>\n      <v-button>右</v-button>\n    </v-button-group>\n    <h4>带图标按钮组合 </h4>\n    <v-button-group>\n      <v-button type=\"primary\">\n        <v-icon type=\"left\"></v-icon>\n        <span>后退</span>\n      </v-button>\n      <v-button type=\"primary\">\n        前进\n        <v-icon type=\"right\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"primary\">\n        <v-icon type=\"cloud\"></v-icon>\n      </v-button>\n      <v-button type=\"primary\">\n        <v-icon type=\"cloud-download\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <h4>多个组合</h4>\n    <v-button-group>\n      <v-button type=\"ghost\">1</v-button>\n      <v-button type=\"ghost\">2</v-button>\n      <v-button type=\"ghost\">3</v-button>\n      <v-button type=\"ghost\">4</v-button>\n      <v-button type=\"ghost\">\n        <span>前进</span>\n        <v-icon type=\"right\"></v-icon>\n      </v-button>\n    </v-button-group>\n    <h4>尺寸</h4>\n    <v-button-group size=\"large\">\n      <v-button type=\"ghost\">大</v-button>\n      <v-button type=\"ghost\">大</v-button>\n      <v-button type=\"ghost\">大</v-button>\n    </v-button-group>\n    <v-button-group>\n      <v-button type=\"ghost\">默认</v-button>\n      <v-button type=\"ghost\">默认</v-button>\n      <v-button type=\"ghost\">默认</v-button>\n    </v-button-group>\n    <v-button-group size=\"small\">\n      <v-button type=\"ghost\">小</v-button>\n      <v-button type=\"ghost\">小</v-button>\n      <v-button type=\"ghost\">小</v-button>\n    </v-button-group>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>基本组合<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>确定<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>取消<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>左<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>右<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>左<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span><span class=\"token punctuation\" >></span></span>右<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>带图标按钮组合 <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>后退<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    前进\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud-download<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>多个组合<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>3<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>4<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>前进<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>尺寸<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>大<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>默认<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button-group</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>小<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button-group</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>图标按钮</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-button type=\"primary\" shape=\"circle\" size=\"large\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\" size=\"large\">\n      <v-icon type=\"search\"></v-icon>\n      <span>大按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"primary\" shape=\"circle\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\">\n      <v-icon type=\"search\"></v-icon>\n      <span>中按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"primary\" shape=\"circle\" size=\"small\">\n      <v-icon type=\"search\"></v-icon>\n    </v-button>\n    <v-button type=\"primary\" size=\"small\">\n      <v-icon type=\"search\"></v-icon>\n      <span>小按钮</span>\n    </v-button>\n    <br>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"large\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\">\n      <v-icon type=\"search\" />\n    </v-button>\n    <v-button type=\"ghost\" shape=\"circle-outline\" size=\"small\">\n      <v-icon type=\"search\" />\n    </v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>大按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>中按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>小按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div></div>";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"checkbox\">Checkbox</h1>\n<hr>\n<p>多选框。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>需要表示开关状态/两种状态之间的切换时；</li>\n<li>和 <code>switch</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :default-checked=\"false\" :on-change=\"_change\"><span>Checkbox</span></v-checkbox>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Checkbox<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :default-checked=\"false\" :disabled=\"true\"><span>不可用</span></v-checkbox>\n    <br>\n    <v-checkbox :default-checked=\"true\" :disabled=\"true\"><span>不可用</span></v-checkbox>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>和外部组件通信</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-checkbox :checked=\"checked\" :disabled=\"disabled\"><span>{{checkedStatus}}-{{disabledStatus}}</span></v-checkbox>\n    <br>\n    <br>\n    <v-button type=\"primary\" size=\"small\" @click=\"_toggleChecked\">{{checkedStatus}}</v-button>\n    <v-button type=\"primary\" size=\"small\" @click=\"_toggleDisable\">{{disabledStatus}}</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-checkbox</span> <span class=\"token attr-name\" >:checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checked<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{checkedStatus}}-{{disabledStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-checkbox</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleChecked<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{checkedStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleDisable<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{disabledStatus}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"checkbox\">Checkbox</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>default-checked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>变化时回调函数</td>\n<td>Function(e:Event)</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"iconfont\">Iconfont</h1>\n<hr>\n<p>有含义的矢量图形，每一个图标打倒一个敌人。</p>\n<h2 id=\"-\">图标的命名规范</h2>\n<p>我们为每个图标赋予了语义化的命名。只需在 <code>&lt;v-icon&gt;</code> 标签内，制定对应的 type 属性即可。</p>\n<p>不同 type 命名规则如下:</p>\n<ul>\n<li><p>实心和描线图标保持同名，用 <code>-o</code> 来区分，比如 <code>question-circle</code>(实心) 和 <code>question-circle-o</code>(描线)；</p>\n</li>\n<li><p>命名顺序：<code>[icon名]-[描线与否]-[方向]</code>。</p>\n</li>\n</ul>\n<h2 id=\"-\">实现原理</h2>\n<p>所有的 Icon 标签最终会渲染为</p>\n<pre><code class=\"lang-html\">&lt;i class=&quot;anticon anticon-${type}&quot;&gt;&lt;/i&gt;\n</code></pre>\n<h2 id=\"-\">如何使用</h2>\n<p>使用 <code>&lt;v-icon&gt;</code> 标签申明组件，设置对应的 type 设置需要渲染的图标，示例代码如下:</p>\n<pre><code class=\"lang-html\">&lt;v-icon type=&quot;link&quot; &gt;\n</code></pre>\n<blockquote>\n<p>点击图标复制代码。</p>\n</blockquote>\n<h2 id=\"-\">图标列表</h2>\n<h3 id=\"-\">一. 方向性图标</h3>\n<ul class=\"row anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-step-backward\"></i>\n    <span class=\"anticon-class\">step-backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-step-forward\"></i>\n    <span class=\"anticon-class\">step-forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-fast-backward\"></i>\n    <span class=\"anticon-class\">fast-backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-fast-forward\"></i>\n    <span class=\"anticon-class\">fast-forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-shrink\"></i>\n    <span class=\"anticon-class\">shrink</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-arrow-salt\"></i>\n    <span class=\"anticon-class\">arrow-salt</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-down\"></i>\n    <span class=\"anticon-class\">down</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-up\"></i>\n    <span class=\"anticon-class\">up</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-left\"></i>\n    <span class=\"anticon-class\">left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-right\"></i>\n    <span class=\"anticon-class\">right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-down\"></i>\n    <span class=\"anticon-class\">caret-down</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-up\"></i>\n    <span class=\"anticon-class\">caret-up</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-left\"></i>\n    <span class=\"anticon-class\">caret-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-right\"></i>\n    <span class=\"anticon-class\">caret-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-right\"></i>\n    <span class=\"anticon-class\">caret-circle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-left\"></i>\n    <span class=\"anticon-class\">caret-circle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-o-right\"></i>\n    <span class=\"anticon-class\">caret-circle-o-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-caret-circle-o-left\"></i>\n    <span class=\"anticon-class\">caret-circle-o-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-right\"></i>\n    <span class=\"anticon-class\">circle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-left\"></i>\n    <span class=\"anticon-class\">circle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-o-right\"></i>\n    <span class=\"anticon-class\">circle-o-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-circle-o-left\"></i>\n    <span class=\"anticon-class\">circle-o-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-double-right\"></i>\n    <span class=\"anticon-class\">double-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-double-left\"></i>\n    <span class=\"anticon-class\">double-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-verticle-right\"></i>\n    <span class=\"anticon-class\">verticle-right</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-verticle-left\"></i>\n    <span class=\"anticon-class\">verticle-left</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-forward\"></i>\n    <span class=\"anticon-class\">forward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-backward\"></i>\n    <span class=\"anticon-class\">backward</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-rollback\"></i>\n    <span class=\"anticon-class\">rollback</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-retweet\"></i>\n    <span class=\"anticon-class\">retweet</span>\n  </li>\n</ul>\n<h3 id=\"-\">二. 提示建议性图标</h3>\n<ul class=\"anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-question\"></i>\n    <span class=\"anticon-class\">question</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-question-circle-o\"></i>\n    <span class=\"anticon-class\">question-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-question-circle\"></i>\n    <span class=\"anticon-class\">question-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus\"></i>\n    <span class=\"anticon-class\">plus</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus-circle-o\"></i>\n    <span class=\"anticon-class\">plus-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-plus-circle\"></i>\n    <span class=\"anticon-class\">plus-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause\"></i>\n    <span class=\"anticon-class\">pause</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause-circle-o\"></i>\n    <span class=\"anticon-class\">pause-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pause-circle\"></i>\n    <span class=\"anticon-class\">pause-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus\"></i>\n    <span class=\"anticon-class\">minus</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus-circle-o\"></i>\n    <span class=\"anticon-class\">minus-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-minus-circle\"></i>\n    <span class=\"anticon-class\">minus-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info\"></i>\n    <span class=\"anticon-class\">info</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info-circle-o\"></i>\n    <span class=\"anticon-class\">info-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-info-circle\"></i>\n    <span class=\"anticon-class\">info-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation\"></i>\n    <span class=\"anticon-class\">exclamation</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation-circle-o\"></i>\n    <span class=\"anticon-class\">exclamation-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-exclamation-circle\"></i>\n    <span class=\"anticon-class\">exclamation-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross\"></i>\n    <span class=\"anticon-class\">cross</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross-circle-o\"></i>\n    <span class=\"anticon-class\">cross-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cross-circle\"></i>\n    <span class=\"anticon-class\">cross-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check\"></i>\n    <span class=\"anticon-class\">check</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check-circle-o\"></i>\n    <span class=\"anticon-class\">check-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-check-circle\"></i>\n    <span class=\"anticon-class\">check-circle</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-clock-circle-o\"></i>\n    <span class=\"anticon-class\">clock-circle-o</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-clock-circle\"></i>\n    <span class=\"anticon-class\">clock-circle</span>\n  </li>\n</ul>\n<h3 id=\"-\">三. 网站通用图标</h3>\n<ul class=\"anticons-list clearfix\">\n  <li>\n    <i class=\"anticon anticon-lock\"></i>\n    <span class=\"anticon-class\">lock</span>\n  </li>\n    <li>\n    <i class=\"anticon anticon-unlock\"></i>\n    <span class=\"anticon-class\">unlock</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-android\"></i>\n    <span class=\"anticon-class\">android</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-apple\"></i>\n    <span class=\"anticon-class\">apple</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-area-chart\"></i>\n    <span class=\"anticon-class\">area-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-bar-chart\"></i>\n    <span class=\"anticon-class\">bar-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-bars\"></i>\n    <span class=\"anticon-class\">bars</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-book\"></i>\n    <span class=\"anticon-class\">book</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-calendar\"></i>\n    <span class=\"anticon-class\">calendar</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cloud\"></i>\n    <span class=\"anticon-class\">cloud</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-cloud-download\"></i>\n    <span class=\"anticon-class\">cloud-download</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-code\"></i>\n    <span class=\"anticon-class\">code</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-copy\"></i>\n    <span class=\"anticon-class\">copy</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-credit-card\"></i>\n    <span class=\"anticon-class\">credit-card</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-delete\"></i>\n    <span class=\"anticon-class\">delete</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-desktop\"></i>\n    <span class=\"anticon-class\">desktop</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-download-line\"></i>\n    <span class=\"anticon-class\">download-line</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-edit\"></i>\n    <span class=\"anticon-class\">edit</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-ellipsis\"></i>\n    <span class=\"anticon-class\">ellipsis</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-environment\"></i>\n    <span class=\"anticon-class\">environment</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-file\"></i>\n    <span class=\"anticon-class\">file</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-file-text\"></i>\n    <span class=\"anticon-class\">file-text</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-folder\"></i>\n    <span class=\"anticon-class\">folder</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-folder-open\"></i>\n    <span class=\"anticon-class\">folder-open</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-github\"></i>\n    <span class=\"anticon-class\">github</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-hdd\"></i>\n    <span class=\"anticon-class\">hdd</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-frown\"></i>\n    <span class=\"anticon-class\">frown</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-meh\"></i>\n    <span class=\"anticon-class\">meh</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-inbox\"></i>\n    <span class=\"anticon-class\">inbox</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-laptop\"></i>\n    <span class=\"anticon-class\">laptop</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-appstore\"></i>\n    <span class=\"anticon-class\">appstore</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-line-chart\"></i>\n    <span class=\"anticon-class\">line-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-link\"></i>\n    <span class=\"anticon-class\">link</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-logout\"></i>\n    <span class=\"anticon-class\">logout</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-mail\"></i>\n    <span class=\"anticon-class\">mail</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-menu-fold\"></i>\n    <span class=\"anticon-class\">menu-fold</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-menu-unfold\"></i>\n    <span class=\"anticon-class\">menu-unfold</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-mobile\"></i>\n    <span class=\"anticon-class\">mobile</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-notification\"></i>\n    <span class=\"anticon-class\">notification</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-paper-clip\"></i>\n    <span class=\"anticon-class\">paper-clip</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-picture\"></i>\n    <span class=\"anticon-class\">picture</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-pie-chart\"></i>\n    <span class=\"anticon-class\">pie-chart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-poweroff\"></i>\n    <span class=\"anticon-class\">poweroff</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-reload\"></i>\n    <span class=\"anticon-class\">reload</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-search\"></i>\n    <span class=\"anticon-class\">search</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-setting\"></i>\n    <span class=\"anticon-class\">setting</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-share-alt\"></i>\n    <span class=\"anticon-class\">share-alt</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-shopping-cart\"></i>\n    <span class=\"anticon-class\">shopping-cart</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-smile\"></i>\n    <span class=\"anticon-class\">smile</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tablet\"></i>\n    <span class=\"anticon-class\">tablet</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tag\"></i>\n    <span class=\"anticon-class\">tag</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-tags\"></i>\n    <span class=\"anticon-class\">tags</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-to-top\"></i>\n    <span class=\"anticon-class\">to-top</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-upload\"></i>\n    <span class=\"anticon-class\">upload</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-user\"></i>\n    <span class=\"anticon-class\">user</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-video-camera\"></i>\n    <span class=\"anticon-class\">video-camera</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-windows\"></i>\n    <span class=\"anticon-class\">windows</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-ie\"></i>\n    <span class=\"anticon-class\">ie</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-chrome\"></i>\n    <span class=\"anticon-class\">chrome</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-home\"></i>\n    <span class=\"anticon-class\">home</span>\n  </li>\n  <li>\n    <i class=\"anticon anticon-loading\"></i>\n    <span class=\"anticon-class\">loading</span>\n  </li>\n</ul>\n<style>\nul.anticons-list {\n  margin: 20px 0;\n  list-style: none;\n  width: 120%;\n  overflow: hidden;\n}\nul.anticons-list li {\n  float: left;\n  margin: 5px 5px 5px 0;\n  width: 155px;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 110px;\n  color: #5C6B77;\n  transition: all 0.2s ease;\n  position: relative;\n  padding: 0;\n}\nul.anticons-list li:hover,\nul.anticons-list li.zeroclipboard-is-hover {\n  background-color: #4BB8FF;\n  color: #fff;\n  border-radius: 4px;\n}\nul.anticons-list li.copied.zeroclipboard-is-hover {\n  color: rgba(255,255,255,0.2);\n}\nul.anticons-list li:after {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #fff;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied:after {\n  opacity: 1;\n  top: 0;\n}\n.anticon {\n  font-size: 26px;\n  margin: 12px 0 16px;\n}\n.anticon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word;\n  transform: scale(0.83);\n  font-family: Consolas;\n}\n</style>\n<p></template></p>\n</div>";

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"radio\">Radio</h1>\n<hr>\n<p>单选框。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>用于在多个备选项中选中单个状态。</li>\n<li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>最基本的用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio :on-change=\"_change\"><span>Radio</span></v-radio>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Radio<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio :default-checked=\"false\" :disabled=\"disabled\"><span>不可用</span></v-radio>\n    <br>\n    <v-radio :default-checked=\"true\" :disabled=\"disabled\"><span>不可用</span></v-radio>\n    <br>\n    <br>\n    <v-button :type=\"'primary'\" @click=\"_toggleDisabled\">Toggle disabled</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-radio</span> <span class=\"token attr-name\" >:default-checked</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>不可用<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>primary<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toggleDisabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>一组互斥的Radio配合使用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio-group\n      :on-change=\"_onGroupChange\"\n      :value=\"groupValue\"\n      :radios=\"[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]\">\n    </v-radio-group>\n    <br>\n    <br>\n    <p>你选中的是： <span>{{groupValue}}</span></p>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n&lt;v-radio-group\n  :on-change=\"_onGroupChange\"\n  :value=\"groupValue\"\n  :radios=\"[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>你选中的是： <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{groupValue}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>按钮样式的单选组合</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-radio-group\n      :type=\"'button'\"\n      :on-change=\"_onCityChange\"\n      :default-value=\"'hangzhou'\"\n      :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\">\n    </v-radio-group>\n    <div style=\"margin-top: 20px\" v-if=\"cityName\">\n      <span>你选中的是： </span><span>{{cityName}}</span>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n&lt;v-radio-group\n  :type=\"'button'\"\n  :on-change=\"_onCityChange\"\n  :default-value=\"'hangzhou'\"\n  :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\">\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-radio-group</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >margin-top</span><span class=\"token punctuation\" >:</span> 20px</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >v-if</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cityName<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>你选中的是： <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>{{cityName}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"radio\">Radio</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>value</td>\n<td>根据 value 进行比较，判断是否选中</td>\n<td>String</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"radiogroup\">RadioGroup</h3>\n<p>单选框组合，用于包裹一组 <code>Radio</code>。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>选项变化时的回调函数</td>\n<td>Function(e:Event)</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>value</td>\n<td>用于设置当前选中的值</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认选中的值</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"switch\">Switch</h1>\n<hr>\n<p>开关选择器。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>需要表示开关状态/两种状态之间的切换时；</li>\n<li>和 <code>checkbox</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>最简单的用法</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :on-change=\"_change\"></v-switch>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_change<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>不可用</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :disabled=\"disabled\"></v-switch>\n    <br>\n    <br>\n    <v-button :type=\"'primary'\" @click=\"_toogle\">Toggle disabled</v-button>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >:type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>primary<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >@click</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_toogle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle disabled<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>带文字和图标</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-switch :disabled=\"disabled\">\n      <span slot=\"checkedChildren\">开</span>\n      <span slot=\"unCheckedChildren\">关</span>\n    </v-switch>\n    <v-switch :disabled=\"disabled\">\n      <span slot=\"checkedChildren\">\n        <i class=\"anticon anticon-check\"></i>\n      </span>\n      <span slot=\"unCheckedChildren\">\n        <i class=\"anticon anticon-cross\"></i>\n      </span>\n    </v-switch>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>开<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>unCheckedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>关<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-switch</span> <span class=\"token attr-name\" >:disabled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>disabled<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-check<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >slot</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>unCheckedChildren<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-cross<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-switch</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"switch\">Switch</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>Function(checked:boolean)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>slot::checkedChildren</td>\n<td>选中时的内容</td>\n<td>slot node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>slot::unCheckedChildren</td>\n<td>非选中时的内容</td>\n<td>slot node</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"table\">Table</h1>\n<hr>\n<p>展示行列数据。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>当有大量结构化的数据需要展现时；</li>\n<li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>\n</ul>\n<h2 id=\"-\">如何使用</h2>\n<p>Table 有两种模式，本地数据和远程数据模式。</p>\n<p><strong>本地数据模式</strong>是指数据一次性载入内存，纯前端进行分页、筛选、排序等功能。</p>\n<p>通过指定表格的数据源 <code>dataSource</code> 为一个数据数组。</p>\n<p><strong>远程数据模式</strong>是更常见的业务场景，是一次只从服务端读取一页的数据放在前端，执行筛选、排序、切换页码等操作时均向后台发送请求，后台返回当页的数据和相关分页信息。</p>\n<p>通过指定表格的数据源 <code>dataSource</code> 为一个 DataSource 的实例如下。</p>\n<h2 id=\"-\">组件演示</h2>\n<div>\n  <v-table :columns=\"columns\" :data-source=\"dataSource\"></v-table>\n</div>\n<h2 id=\"api\">API</h2>\n<h3 id=\"table\">Table</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rowSelection</td>\n<td>列表项是否可选择</td>\n<td>Object</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>pagination</td>\n<td>分页器</td>\n<td>Object</td>\n<td>配置项参考 <a href=\"/components/pagination\">pagination</a>，设为 false 时不显示分页</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>正常或迷你类型</td>\n<td>String</td>\n<td><code>normal</code> or <code>small</code></td>\n<td>normal</td>\n</tr>\n<tr>\n<td>dataSource</td>\n<td>数据源，可以为数组（本地模式）或一个数据源描述对象（远程模式）</td>\n<td>Array or Object</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>columns</td>\n<td>表格列的配置描述，具体项见下表</td>\n<td>Array</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>rowKey</td>\n<td>表格列 key 的取值</td>\n<td>Function(recode, index):string</td>\n<td></td>\n<td>record.key</td>\n</tr>\n<tr>\n<td>expandIconAsCell</td>\n<td>设置展开 Icon 是否单独一列</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>分页、排序、筛选变化时触发</td>\n<td>Function(pagination, filters, sorter)</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"column\">Column</h3>\n<p>列描述数据对象，是 columns 中的一项。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>列头显示文字</td>\n<td>String or React.Element</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>dataIndex</td>\n<td>列数据在 data 中对应的 key</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>key</td>\n<td>React 需要的 key</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>render</td>\n<td>生成复杂数据的渲染函数，参数分别为当前列的值，当前列数据，列索引</td>\n<td>Function(text, record, index) {}</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>filters</td>\n<td>表头的筛选菜单项</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onFilter</td>\n<td>本地模式下，确定筛选的运行函数</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>sorter</td>\n<td>排序函数，本地模式下为一个函数，远程模式下为布尔值</td>\n<td>Function or Boolean</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>width</td>\n<td>列宽度</td>\n<td>String or Number</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"datasource\">dataSource</h3>\n<p>远程数据源配置对象。</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>数据源地址</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>resolve</td>\n<td>获得数据的解析函数，接收参数为远程数据返回的 result</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>getPagination</td>\n<td>和后台接口返回的分页数据进行适配的函数，返回值会传给表格中的分页器</td>\n<td>Function</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>getParams</td>\n<td>和后台接口接收的参数进行适配，返回值会作为请求的参数发送</td>\n<td>Function</td>\n<td></td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"tag\">Tag</h1>\n<hr>\n<p>进行标记和分类的小标签。</p>\n<h2 id=\"-\">何时使用</h2>\n<ul>\n<li>用于标记事物的属性和维度。</li>\n<li>进行分类。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>基本</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-tag>标签一</v-tag>\n    <v-tag>标签二</v-tag>\n    <v-tag closable :on-close=\"_onClose\">标签三</v-tag>\n    <v-tag href=\"http://www.baidu.com\">标签四 (链接)</v-tag>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span><span class=\"token punctuation\" >></span></span>标签一<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span><span class=\"token punctuation\" >></span></span>标签二<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >:on-close</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_onClose<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>标签三<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>http://www.baidu.com<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>标签四 (链接)<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>四种颜色的类型</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-tag closable color=\"blue\">蓝色</v-tag>\n    <v-tag closable color=\"green\">绿色</v-tag>\n    <v-tag closable color=\"yellow\">黄色</v-tag>\n    <v-tag closable color=\"red\">红色</v-tag>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>blue<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>蓝色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>green<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>绿色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>yellow<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>黄色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-tag</span> <span class=\"token attr-name\" >closable</span> <span class=\"token attr-name\" >color</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>red<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>红色<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-tag</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>href</td>\n<td>链接的地址，会传给 a 标签</td>\n<td>string</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>标签是否可以关闭</td>\n<td>boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>on-close</td>\n<td>组合时根据此项判定checked</td>\n<td>function</td>\n<td></td>\n<td>无</td>\n</tr>\n<tr>\n<td>color</td>\n<td>标签的色彩</td>\n<td>string</td>\n<td>blue green yellow red</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n</div>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"upload\">Upload</h1>\n<hr>\n<p>文件选择上传和拖拽上传控件。</p>\n<h2 id=\"-\">何时使用</h2>\n<p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>\n<ul>\n<li>当需要上传一个或一些文件时。</li>\n<li>当需要展现上传的进度时。</li>\n<li>当需要使用拖拽交互时。</li>\n</ul>\n<h2 id=\"-\">组件演示</h2>\n<div class=\"code-boxes\">\n  <div class=\"code-box code-boxes-col\">\n          <h3>点击上传</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>传入已上传的文件</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :default-file-list=\"defaultFileList\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:default-file-list</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>defaultFileList<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>拖拽上传1</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n      <p class=\"ant-upload-drag-icon\">\n        <v-icon type=\"inbox\"></v-icon>\n      </p>\n      <p class=\"ant-upload-text\">点击或将文件拖拽到此区域上传</p>\n      <p class=\"ant-upload-hint\">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>drag<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-drag-icon<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inbox<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>点击或将文件拖拽到此区域上传<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-hint<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>拖拽上传2</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <div style=\"width: 246px; height: 146px\">\n      <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n        <v-icon type=\"plus\"></v-icon>\n      </v-upload>\n    </div>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token style-attr language-css\" ><span class=\"token attr-name\" > <span class=\"token attr-name\" >style</span></span><span class=\"token punctuation\" >=\"</span><span class=\"token attr-value\" ><span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> 246px<span class=\"token punctuation\" >;</span> <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> 146px</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>drag<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n  <div class=\"code-box code-boxes-col\">\n          <h3>多文件选择</h3>\n          <div class=\"code-boxes-col-2-1 code-box-demo\">\n    <v-upload :name=\"name\" :action=\"action\" :multiple=\"true\" :on-change=\"onChange\">\n      <v-button type=\"ghost\">\n        <v-icon type=\"upload\"></v-icon> 点击上传\n      </v-button>\n    </v-upload>\n  </div>\n          <div class=\"code-boxes-col-2-1 code-box-code\"><pre>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-upload</span> <span class=\"token attr-name\" >:name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>name<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>action<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:multiple</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >:on-change</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChange<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>v-icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-icon</span><span class=\"token punctuation\" >></span></span> 点击上传\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>v-upload</span><span class=\"token punctuation\" >></span></span>\n</pre></div>\n      </div>\n</div>\n<h2 id=\"api\">API</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>可选参数, 上传的文件</td>\n<td>String</td>\n<td>file</td>\n</tr>\n<tr>\n<td>action</td>\n<td>必选参数, 上传的地址</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>data</td>\n<td>可选参数, 上传所需参数</td>\n<td>Object</td>\n<td>无</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>可选参数, 是否支持多选文件，支持 <code>ie10+</code></td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>可选参数, 接受上传的文件类型, 详见 input accept Attribute</td>\n<td>String</td>\n<td>无</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>可选参数, 上传文件改变时的状态，详见 onChange</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"onchange\">onChange</h3>\n<p>文件状态改变的回调，返回为：</p>\n<pre><code class=\"lang-js\">{\n  file: { ... },\n  fileList: [ ... ],\n  event: { ... }\n}\n</code></pre>\n<ol>\n<li><p><code>file</code> 当前操作的文件对象。</p>\n<pre><code class=\"lang-js\">{\n   uid: &#39;uid&#39;,      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n   name: &#39;xx.png&#39;   // 文件名\n   status: &#39;done&#39;,  // 状态有：uploading done error removed\n   response: &#39;{&quot;status&quot;:&quot;success&quot;}&#39;  // 服务端响应内容\n}\n</code></pre>\n<p>如果上传控件是 multiple 时，此参数将为一个对象数组 <code>[file, ...]</code>。</p>\n</li>\n<li><p><code>fileList</code> 当前的文件列表。</p>\n</li>\n<li><code>event</code> 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。</li>\n</ol>\n<h2 id=\"-\">显示下载链接</h2>\n<p>请使用 fileList 属性设置数组项的 url 属性进行展示控制。</p>\n<h2 id=\"ie-note\">IE note</h2>\n<ul>\n<li><a href=\"https://github.com/react-component/upload#ie89-note\">https://github.com/react-component/upload#ie89-note</a></li>\n</ul>\n</div>";

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"-\">下载</h1>\n<hr>\n<p>可以使用 npm 进行安装或直接下载文件。</p>\n<h2 id=\"-npm-\">从 npm 安装</h2>\n<p><strong>我们推荐使用 npm 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>\n<p>可以通过 npm 直接安装到本地，使用 <code>require</code> 或 <code>import</code> 进行引用。</p>\n<p><a href=\"https://www.npmjs.org/package/antd\"><img src=\"http://img.shields.io/npm/v/antd.svg?style=flat-square\" alt=\"npm package\"></a></p>\n<pre><code class=\"lang-bash\">$ npm install vue-antd --save\n</code></pre>\n<p>安装最新的开发版本：</p>\n<p><a href=\"https://www.npmjs.org/package/antd\"><img src=\"https://cnpmjs.org/badge/v/antd.svg?&amp;tag=beta&amp;subject=npm\" alt=\"\"></a></p>\n<pre><code class=\"lang-bash\">$ npm install vue-antd@beta --save\n</code></pre>\n<pre><code class=\"lang-json\">&quot;scripts&quot;: {\n  &quot;dev&quot;: &quot;antd server&quot;,\n  &quot;build&quot;: &quot;antd build&quot;\n}\n</code></pre>\n<style>\n.versions {\n  font-weight: bold;\n  color: #C05B4D;\n  font-family: Consolas;\n  margin-left: 0.3em;\n  background: #FFF1E7;\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n</style></div>";

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "<div class=\"markdown\"><h1 id=\"-\">快速上手</h1>\n<hr>\n<p>Ant Design Vue 致力于提供给程序员愉悦的开发体验。</p>\n<h2 id=\"-\">标准项目</h2>\n<p>实际项目开发中，你会需要 CommonJS 、JSX 构建、打包部署等一系列工程化的需求。\n提供了一套 <code>npm</code> + <code>webpack</code> 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。</p>\n<h3 id=\"3-\">3. 使用组件</h3>\n<h3 id=\"4-\">4. 开发调试</h3>\n<p>一键启动调试，访问 <a href=\"http://127.0.0.1:8000\">http://127.0.0.1:8000</a> 查看效果。</p>\n<pre><code class=\"lang-bash\">$ npm run dev\n</code></pre>\n<h3 id=\"5-\">5. 构建和部署</h3>\n<pre><code class=\"lang-bash\">$ npm run build\n</code></pre>\n<p>入口文件会构建到 <code>dist</code> 目录中，你可以自由部署到不同环境中进行引用。</p>\n<blockquote>\n<p>上述例子用于帮助你理解 Ant Design Vue 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。</p>\n</blockquote>\n<h2 id=\"-\">兼容性</h2>\n<p>Ant Design Vue 支持所有的现代浏览器。</p>\n<h2 id=\"-\">小甜点</h2>\n<ul>\n<li>你可以享用 <code>npm</code> 生态圈里的所有模块。</li>\n<li>我们使用了 <code>babel</code> 的写法来提升编码的愉悦感。</li>\n</ul>\n</div>";

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"markdown\"><h1 id=\"ant-design-of-vue\">Ant Design of Vue</h1>\n<hr>\n<p>这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。</p>\n<p><div class=\"pic-plus\">\n  <img width=\"150\" src=\"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg\">\n  <span>+</span>\n  <img width=\"150\" src=\"" + __webpack_require__(179) + "\">\n</div></p>\n<style>\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n</style>\n<h2 id=\"-\">特性</h2>\n<ul>\n<li>Designed as Ant Design.</li>\n<li>基于 Vue 的组件化开发模式。</li>\n<li>背靠 npm 生态圈。</li>\n<li>基于 webpack 的调试构建方案，支持 ES6。</li>\n</ul>\n<h2 id=\"-\">示例</h2>\n<h2 id=\"-\">版本</h2>\n<h2 id=\"-\">链接</h2>\n<ul>\n<li><a href=\"/vue-antd/\">首页</a></li>\n<li><a href=\"/introduce\">文档</a></li>\n<li><a href=\"/components/\">组件</a></li>\n</ul>\n<h2 id=\"-\">谁在使用</h2>\n<ul>\n<li>本人</li>\n</ul>\n<h2 id=\"-\">如何贡献</h2>\n<p>我们欢迎任何形式的贡献，有任何建议或意见您可以进行 <a href=\"https://github.com/okoala/vue-antd/pulls\">Pull Request</a>，或者给我们<a href=\"https://github.com/ant-design/ant-design/issues\">提问</a>。</p>\n</div>";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(197);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(194),
	    keysIn = __webpack_require__(207);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 196 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(202);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(196);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(205);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(198),
	    isLength = __webpack_require__(31);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 201 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(199),
	    isLength = __webpack_require__(31),
	    isObjectLike = __webpack_require__(22);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(204),
	    isObjectLike = __webpack_require__(22);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(195),
	    isArguments = __webpack_require__(51),
	    isObjectLike = __webpack_require__(22);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(51),
	    isArray = __webpack_require__(203),
	    isIndex = __webpack_require__(201),
	    isLength = __webpack_require__(31),
	    isObject = __webpack_require__(32);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./components.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./components.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Badge.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	   Velocity jQuery Shim
	*************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	;(function (window) {
	    /***************
	         Setup
	    ***************/
	
	    /* If jQuery is already loaded, there's no point in loading this shim. */
	    if (window.jQuery) {
	        return;
	    }
	
	    /* jQuery base. */
	    var $ = function (selector, context) {
	        return new $.fn.init(selector, context);
	    };
	
	    /********************
	       Private Methods
	    ********************/
	
	    /* jQuery */
	    $.isWindow = function (obj) {
	        /* jshint eqeqeq: false */
	        return obj != null && obj == obj.window;
	    };
	
	    /* jQuery */
	    $.type = function (obj) {
	        if (obj == null) {
	            return obj + "";
	        }
	
	        return typeof obj === "object" || typeof obj === "function" ?
	            class2type[toString.call(obj)] || "object" :
	            typeof obj;
	    };
	
	    /* jQuery */
	    $.isArray = Array.isArray || function (obj) {
	        return $.type(obj) === "array";
	    };
	
	    /* jQuery */
	    function isArraylike (obj) {
	        var length = obj.length,
	            type = $.type(obj);
	
	        if (type === "function" || $.isWindow(obj)) {
	            return false;
	        }
	
	        if (obj.nodeType === 1 && length) {
	            return true;
	        }
	
	        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	    }
	
	    /***************
	       $ Methods
	    ***************/
	
	    /* jQuery: Support removed for IE<9. */
	    $.isPlainObject = function (obj) {
	        var key;
	
	        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
	            return false;
	        }
	
	        try {
	            if (obj.constructor &&
	                !hasOwn.call(obj, "constructor") &&
	                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
	                return false;
	            }
	        } catch (e) {
	            return false;
	        }
	
	        for (key in obj) {}
	
	        return key === undefined || hasOwn.call(obj, key);
	    };
	
	    /* jQuery */
	    $.each = function(obj, callback, args) {
	        var value,
	            i = 0,
	            length = obj.length,
	            isArray = isArraylike(obj);
	
	        if (args) {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	
	        } else {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	        }
	
	        return obj;
	    };
	
	    /* Custom */
	    $.data = function (node, key, value) {
	        /* $.getData() */
	        if (value === undefined) {
	            var id = node[$.expando],
	                store = id && cache[id];
	
	            if (key === undefined) {
	                return store;
	            } else if (store) {
	                if (key in store) {
	                    return store[key];
	                }
	            }
	        /* $.setData() */
	        } else if (key !== undefined) {
	            var id = node[$.expando] || (node[$.expando] = ++$.uuid);
	
	            cache[id] = cache[id] || {};
	            cache[id][key] = value;
	
	            return value;
	        }
	    };
	
	    /* Custom */
	    $.removeData = function (node, keys) {
	        var id = node[$.expando],
	            store = id && cache[id];
	
	        if (store) {
	            $.each(keys, function(_, key) {
	                delete store[key];
	            });
	        }
	    };
	
	    /* jQuery */
	    $.extend = function () {
	        var src, copyIsArray, copy, name, options, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;
	
	        if (typeof target === "boolean") {
	            deep = target;
	
	            target = arguments[i] || {};
	            i++;
	        }
	
	        if (typeof target !== "object" && $.type(target) !== "function") {
	            target = {};
	        }
	
	        if (i === length) {
	            target = this;
	            i--;
	        }
	
	        for (; i < length; i++) {
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];
	
	                    if (target === copy) {
	                        continue;
	                    }
	
	                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && $.isArray(src) ? src : [];
	
	                        } else {
	                            clone = src && $.isPlainObject(src) ? src : {};
	                        }
	
	                        target[name] = $.extend(deep, clone, copy);
	
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }
	
	        return target;
	    };
	
	    /* jQuery 1.4.3 */
	    $.queue = function (elem, type, data) {
	        function $makeArray (arr, results) {
	            var ret = results || [];
	
	            if (arr != null) {
	                if (isArraylike(Object(arr))) {
	                    /* $.merge */
	                    (function(first, second) {
	                        var len = +second.length,
	                            j = 0,
	                            i = first.length;
	
	                        while (j < len) {
	                            first[i++] = second[j++];
	                        }
	
	                        if (len !== len) {
	                            while (second[j] !== undefined) {
	                                first[i++] = second[j++];
	                            }
	                        }
	
	                        first.length = i;
	
	                        return first;
	                    })(ret, typeof arr === "string" ? [arr] : arr);
	                } else {
	                    [].push.call(ret, arr);
	                }
	            }
	
	            return ret;
	        }
	
	        if (!elem) {
	            return;
	        }
	
	        type = (type || "fx") + "queue";
	
	        var q = $.data(elem, type);
	
	        if (!data) {
	            return q || [];
	        }
	
	        if (!q || $.isArray(data)) {
	            q = $.data(elem, type, $makeArray(data));
	        } else {
	            q.push(data);
	        }
	
	        return q;
	    };
	
	    /* jQuery 1.4.3 */
	    $.dequeue = function (elems, type) {
	        /* Custom: Embed element iteration. */
	        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
	            type = type || "fx";
	
	            var queue = $.queue(elem, type),
	                fn = queue.shift();
	
	            if (fn === "inprogress") {
	                fn = queue.shift();
	            }
	
	            if (fn) {
	                if (type === "fx") {
	                    queue.unshift("inprogress");
	                }
	
	                fn.call(elem, function() {
	                    $.dequeue(elem, type);
	                });
	            }
	        });
	    };
	
	    /******************
	       $.fn Methods
	    ******************/
	
	    /* jQuery */
	    $.fn = $.prototype = {
	        init: function (selector) {
	            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
	            if (selector.nodeType) {
	                this[0] = selector;
	
	                return this;
	            } else {
	                throw new Error("Not a DOM node.");
	            }
	        },
	
	        offset: function () {
	            /* jQuery altered code: Dropped disconnected DOM node checking. */
	            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
	
	            return {
	                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
	                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
	            };
	        },
	
	        position: function () {
	            /* jQuery */
	            function offsetParent() {
	                var offsetParent = this.offsetParent || document;
	
	                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
	                    offsetParent = offsetParent.offsetParent;
	                }
	
	                return offsetParent || document;
	            }
	
	            /* Zepto */
	            var elem = this[0],
	                offsetParent = offsetParent.apply(elem),
	                offset = this.offset(),
	                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()
	
	            offset.top -= parseFloat(elem.style.marginTop) || 0;
	            offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
	            if (offsetParent.style) {
	                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
	                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
	            }
	
	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        }
	    };
	
	    /**********************
	       Private Variables
	    **********************/
	
	    /* For $.data() */
	    var cache = {};
	    $.expando = "velocity" + (new Date().getTime());
	    $.uuid = 0;
	
	    /* For $.queue() */
	    var class2type = {},
	        hasOwn = class2type.hasOwnProperty,
	        toString = class2type.toString;
	
	    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	    for (var i = 0; i < types.length; i++) {
	        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	    }
	
	    /* Makes $(node) possible, without having to call init. */
	    $.fn.init.prototype = $.fn;
	
	    /* Globalize Velocity onto the window, and assign its Utilities property. */
	    window.Velocity = { Utilities: $ };
	})(window);
	
	/******************
	    Velocity.js
	******************/
	
	;(function (factory) {
	    /* CommonJS module. */
	    if (typeof module === "object" && typeof module.exports === "object") {
	        module.exports = factory();
	    /* AMD module. */
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Browser globals. */
	    } else {
	        factory();
	    }
	}(function() {
	return function (global, window, document, undefined) {
	
	    /***************
	        Summary
	    ***************/
	
	    /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */
	
	    /*********************
	       Helper Functions
	    *********************/
	
	    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	    var IE = (function() {
	        if (document.documentMode) {
	            return document.documentMode;
	        } else {
	            for (var i = 7; i > 4; i--) {
	                var div = document.createElement("div");
	
	                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
	                if (div.getElementsByTagName("span").length) {
	                    div = null;
	
	                    return i;
	                }
	            }
	        }
	
	        return undefined;
	    })();
	
	    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
	    var rAFShim = (function() {
	        var timeLast = 0;
	
	        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
	            var timeCurrent = (new Date()).getTime(),
	                timeDelta;
	
	            /* Dynamically set delay on a per-tick basis to match 60fps. */
	            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
	            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
	            timeLast = timeCurrent + timeDelta;
	
	            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
	        };
	    })();
	
	    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
	    function compactSparseArray (array) {
	        var index = -1,
	            length = array ? array.length : 0,
	            result = [];
	
	        while (++index < length) {
	            var value = array[index];
	
	            if (value) {
	                result.push(value);
	            }
	        }
	
	        return result;
	    }
	
	    function sanitizeElements (elements) {
	        /* Unwrap jQuery/Zepto objects. */
	        if (Type.isWrapped(elements)) {
	            elements = [].slice.call(elements);
	        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
	        } else if (Type.isNode(elements)) {
	            elements = [ elements ];
	        }
	
	        return elements;
	    }
	
	    var Type = {
	        isString: function (variable) {
	            return (typeof variable === "string");
	        },
	        isArray: Array.isArray || function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Array]";
	        },
	        isFunction: function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Function]";
	        },
	        isNode: function (variable) {
	            return variable && variable.nodeType;
	        },
	        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
	        isNodeList: function (variable) {
	            return typeof variable === "object" &&
	                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
	                variable.length !== undefined &&
	                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
	        },
	        /* Determine if variable is a wrapped jQuery or Zepto element. */
	        isWrapped: function (variable) {
	            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
	        },
	        isSVG: function (variable) {
	            return window.SVGElement && (variable instanceof window.SVGElement);
	        },
	        isEmptyObject: function (variable) {
	            for (var name in variable) {
	                return false;
	            }
	
	            return true;
	        }
	    };
	
	    /*****************
	       Dependencies
	    *****************/
	
	    var $,
	        isJQuery = false;
	
	    if (global.fn && global.fn.jquery) {
	        $ = global;
	        isJQuery = true;
	    } else {
	        $ = window.Velocity.Utilities;
	    }
	
	    if (IE <= 8 && !isJQuery) {
	        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
	    } else if (IE <= 7) {
	        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
	        jQuery.fn.velocity = jQuery.fn.animate;
	
	        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
	        return;
	    }
	
	    /*****************
	        Constants
	    *****************/
	
	    var DURATION_DEFAULT = 400,
	        EASING_DEFAULT = "swing";
	
	    /*************
	        State
	    *************/
	
	    var Velocity = {
	        /* Container for page-wide Velocity state data. */
	        State: {
	            /* Detect mobile devices to determine if mobileHA should be turned on. */
	            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
	            isAndroid: /Android/i.test(navigator.userAgent),
	            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
	            isChrome: window.chrome,
	            isFirefox: /Firefox/i.test(navigator.userAgent),
	            /* Create a cached element for re-use when checking for CSS property prefixes. */
	            prefixElement: document.createElement("div"),
	            /* Cache every prefix match to avoid repeating lookups. */
	            prefixMatches: {},
	            /* Cache the anchor used for animating window scrolling. */
	            scrollAnchor: null,
	            /* Cache the browser-specific property names associated with the scroll anchor. */
	            scrollPropertyLeft: null,
	            scrollPropertyTop: null,
	            /* Keep track of whether our RAF tick is running. */
	            isTicking: false,
	            /* Container for every in-progress call to Velocity. */
	            calls: []
	        },
	        /* Velocity's custom CSS stack. Made global for unit testing. */
	        CSS: { /* Defined below. */ },
	        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
	        Utilities: $,
	        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
	        Redirects: { /* Manually registered by the user. */ },
	        Easings: { /* Defined below. */ },
	        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
	        Promise: window.Promise,
	        /* Velocity option defaults, which can be overriden by the user. */
	        defaults: {
	            queue: "",
	            duration: DURATION_DEFAULT,
	            easing: EASING_DEFAULT,
	            begin: undefined,
	            complete: undefined,
	            progress: undefined,
	            display: undefined,
	            visibility: undefined,
	            loop: false,
	            delay: false,
	            mobileHA: true,
	            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
	            _cacheValues: true
	        },
	        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
	        init: function (element) {
	            $.data(element, "velocity", {
	                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
	                isSVG: Type.isSVG(element),
	                /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
	                isAnimating: false,
	                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	                computedStyle: null,
	                /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
	                tweensContainer: null,
	                /* The full root property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
	                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
	                rootPropertyValueCache: {},
	                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
	                transformCache: {}
	            });
	        },
	        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
	        hook: null, /* Defined below. */
	        /* Velocity-wide animation time remapping for testing purposes. */
	        mock: false,
	        version: { major: 1, minor: 2, patch: 2 },
	        /* Set to 1 or 2 (most verbose) to output debug info to console. */
	        debug: false
	    };
	
	    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
	    if (window.pageYOffset !== undefined) {
	        Velocity.State.scrollAnchor = window;
	        Velocity.State.scrollPropertyLeft = "pageXOffset";
	        Velocity.State.scrollPropertyTop = "pageYOffset";
	    } else {
	        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
	        Velocity.State.scrollPropertyLeft = "scrollLeft";
	        Velocity.State.scrollPropertyTop = "scrollTop";
	    }
	
	    /* Shorthand alias for jQuery's $.data() utility. */
	    function Data (element) {
	        /* Hardcode a reference to the plugin name. */
	        var response = $.data(element, "velocity");
	
	        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
	        return response === null ? undefined : response;
	    };
	
	    /**************
	        Easing
	    **************/
	
	    /* Step easing generator. */
	    function generateStep (steps) {
	        return function (p) {
	            return Math.round(p * steps) * (1 / steps);
	        };
	    }
	
	    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    function generateBezier (mX1, mY1, mX2, mY2) {
	        var NEWTON_ITERATIONS = 4,
	            NEWTON_MIN_SLOPE = 0.001,
	            SUBDIVISION_PRECISION = 0.0000001,
	            SUBDIVISION_MAX_ITERATIONS = 10,
	            kSplineTableSize = 11,
	            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	            float32ArraySupported = "Float32Array" in window;
	
	        /* Must contain four arguments. */
	        if (arguments.length !== 4) {
	            return false;
	        }
	
	        /* Arguments must be numbers. */
	        for (var i = 0; i < 4; ++i) {
	            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
	                return false;
	            }
	        }
	
	        /* X values must be in the [0, 1] range. */
	        mX1 = Math.min(mX1, 1);
	        mX2 = Math.min(mX2, 1);
	        mX1 = Math.max(mX1, 0);
	        mX2 = Math.max(mX2, 0);
	
	        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
	        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	        function C (aA1)      { return 3.0 * aA1; }
	
	        function calcBezier (aT, aA1, aA2) {
	            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
	        }
	
	        function getSlope (aT, aA1, aA2) {
	            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	        }
	
	        function newtonRaphsonIterate (aX, aGuessT) {
	            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	                var currentSlope = getSlope(aGuessT, mX1, mX2);
	
	                if (currentSlope === 0.0) return aGuessT;
	
	                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	                aGuessT -= currentX / currentSlope;
	            }
	
	            return aGuessT;
	        }
	
	        function calcSampleValues () {
	            for (var i = 0; i < kSplineTableSize; ++i) {
	                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	            }
	        }
	
	        function binarySubdivide (aX, aA, aB) {
	            var currentX, currentT, i = 0;
	
	            do {
	                currentT = aA + (aB - aA) / 2.0;
	                currentX = calcBezier(currentT, mX1, mX2) - aX;
	                if (currentX > 0.0) {
	                  aB = currentT;
	                } else {
	                  aA = currentT;
	                }
	            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	            return currentT;
	        }
	
	        function getTForX (aX) {
	            var intervalStart = 0.0,
	                currentSample = 1,
	                lastSample = kSplineTableSize - 1;
	
	            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
	                intervalStart += kSampleStepSize;
	            }
	
	            --currentSample;
	
	            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
	                guessForT = intervalStart + dist * kSampleStepSize,
	                initialSlope = getSlope(guessForT, mX1, mX2);
	
	            if (initialSlope >= NEWTON_MIN_SLOPE) {
	                return newtonRaphsonIterate(aX, guessForT);
	            } else if (initialSlope == 0.0) {
	                return guessForT;
	            } else {
	                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	            }
	        }
	
	        var _precomputed = false;
	
	        function precompute() {
	            _precomputed = true;
	            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
	        }
	
	        var f = function (aX) {
	            if (!_precomputed) precompute();
	            if (mX1 === mY1 && mX2 === mY2) return aX;
	            if (aX === 0) return 0;
	            if (aX === 1) return 1;
	
	            return calcBezier(getTForX(aX), mY1, mY2);
	        };
	
	        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };
	
	        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
	        f.toString = function () { return str; };
	
	        return f;
	    }
	
	    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
	    var generateSpringRK4 = (function () {
	        function springAccelerationForState (state) {
	            return (-state.tension * state.x) - (state.friction * state.v);
	        }
	
	        function springEvaluateStateWithDerivative (initialState, dt, derivative) {
	            var state = {
	                x: initialState.x + derivative.dx * dt,
	                v: initialState.v + derivative.dv * dt,
	                tension: initialState.tension,
	                friction: initialState.friction
	            };
	
	            return { dx: state.v, dv: springAccelerationForState(state) };
	        }
	
	        function springIntegrateState (state, dt) {
	            var a = {
	                    dx: state.v,
	                    dv: springAccelerationForState(state)
	                },
	                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
	                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
	                d = springEvaluateStateWithDerivative(state, dt, c),
	                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
	                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
	            state.x = state.x + dxdt * dt;
	            state.v = state.v + dvdt * dt;
	
	            return state;
	        }
	
	        return function springRK4Factory (tension, friction, duration) {
	
	            var initState = {
	                    x: -1,
	                    v: 0,
	                    tension: null,
	                    friction: null
	                },
	                path = [0],
	                time_lapsed = 0,
	                tolerance = 1 / 10000,
	                DT = 16 / 1000,
	                have_duration, dt, last_state;
	
	            tension = parseFloat(tension) || 500;
	            friction = parseFloat(friction) || 20;
	            duration = duration || null;
	
	            initState.tension = tension;
	            initState.friction = friction;
	
	            have_duration = duration !== null;
	
	            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
	            if (have_duration) {
	                /* Run the simulation without a duration. */
	                time_lapsed = springRK4Factory(tension, friction);
	                /* Compute the adjusted time delta. */
	                dt = time_lapsed / duration * DT;
	            } else {
	                dt = DT;
	            }
	
	            while (true) {
	                /* Next/step function .*/
	                last_state = springIntegrateState(last_state || initState, dt);
	                /* Store the position. */
	                path.push(1 + last_state.x);
	                time_lapsed += 16;
	                /* If the change threshold is reached, break. */
	                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
	                    break;
	                }
	            }
	
	            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */
	            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
	        };
	    }());
	
	    /* jQuery easings. */
	    Velocity.Easings = {
	        linear: function(p) { return p; },
	        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
	        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
	        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
	    };
	
	    /* CSS3 and Robert Penner easings. */
	    $.each(
	        [
	            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
	            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
	            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
	            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
	            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
	            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
	            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
	            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
	            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
	            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
	            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
	            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
	            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
	            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
	            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
	            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
	            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
	            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
	            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
	            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
	            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
	            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
	            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
	            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
	            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
	        ], function(i, easingArray) {
	            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
	        });
	
	    /* Determine the appropriate easing type given an easing input. */
	    function getEasing(value, duration) {
	        var easing = value;
	
	        /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
	        if (Type.isString(value)) {
	            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
	            if (!Velocity.Easings[value]) {
	                easing = false;
	            }
	        } else if (Type.isArray(value) && value.length === 1) {
	            easing = generateStep.apply(null, value);
	        } else if (Type.isArray(value) && value.length === 2) {
	            /* springRK4 must be passed the animation's duration. */
	            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */
	            easing = generateSpringRK4.apply(null, value.concat([ duration ]));
	        } else if (Type.isArray(value) && value.length === 4) {
	            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
	            easing = generateBezier.apply(null, value);
	        } else {
	            easing = false;
	        }
	
	        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */
	        if (easing === false) {
	            if (Velocity.Easings[Velocity.defaults.easing]) {
	                easing = Velocity.defaults.easing;
	            } else {
	                easing = EASING_DEFAULT;
	            }
	        }
	
	        return easing;
	    }
	
	    /*****************
	        CSS Stack
	    *****************/
	
	    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
	    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
	    var CSS = Velocity.CSS = {
	
	        /*************
	            RegEx
	        *************/
	
	        RegEx: {
	            isHex: /^#([A-f\d]{3}){1,2}$/i,
	            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
	            valueUnwrap: /^[A-z]+\((.*)\)$/i,
	            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
	            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
	            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
	        },
	
	        /************
	            Lists
	        ************/
	
	        Lists: {
	            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
	            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
	            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
	        },
	
	        /************
	            Hooks
	        ************/
	
	        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
	        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
	        Hooks: {
	            /********************
	                Registration
	            ********************/
	
	            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
	            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
	            templates: {
	                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
	                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
	                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
	                "backgroundPosition": [ "X Y", "0% 0%" ],
	                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
	                "perspectiveOrigin": [ "X Y", "50% 50%" ]
	            },
	
	            /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its root property. */
	            registered: {
	                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated root property's name,
	                   and the subproperty's position in the root's value. */
	            },
	            /* Convert the templates into individual hooks then append them to the registered object above. */
	            register: function () {
	                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
	                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
	                }
	
	                var rootProperty,
	                    hookTemplate,
	                    hookNames;
	
	                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */
	                if (IE) {
	                    for (rootProperty in CSS.Hooks.templates) {
	                        hookTemplate = CSS.Hooks.templates[rootProperty];
	                        hookNames = hookTemplate[0].split(" ");
	
	                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
	                        if (hookNames[0] === "Color") {
	                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
	                            hookNames.push(hookNames.shift());
	                            defaultValues.push(defaultValues.shift());
	
	                            /* Replace the existing template for the hook's root property. */
	                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
	                        }
	                    }
	                }
	
	                /* Hook registration. */
	                for (rootProperty in CSS.Hooks.templates) {
	                    hookTemplate = CSS.Hooks.templates[rootProperty];
	                    hookNames = hookTemplate[0].split(" ");
	
	                    for (var i in hookNames) {
	                        var fullHookName = rootProperty + hookNames[i],
	                            hookPosition = i;
	
	                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */
	                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
	                    }
	                }
	            },
	
	            /*****************************
	               Injection and Extraction
	            *****************************/
	
	            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
	            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
	            getRoot: function (property) {
	                var hookData = CSS.Hooks.registered[property];
	
	                if (hookData) {
	                    return hookData[0];
	                } else {
	                    /* If there was no hook match, return the property name untouched. */
	                    return property;
	                }
	            },
	            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */
	            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
	                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
	                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
	                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
	                }
	
	                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the root's default value as defined in CSS.Hooks.templates. */
	                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
	                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
	                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                }
	
	                return rootPropertyValue;
	            },
	            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
	            extractValue: function (fullHookName, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1];
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
	                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            },
	            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
	               once Velocity has updated one of its individually hooked values through tweening. */
	            injectValue: function (fullHookName, hookValue, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1],
	                        rootPropertyValueParts,
	                        rootPropertyValueUpdated;
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the rootPropertyValue string. */
	                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
	                    rootPropertyValueParts[hookPosition] = hookValue;
	                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
	                    return rootPropertyValueUpdated;
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            }
	        },
	
	        /*******************
	           Normalizations
	        *******************/
	
	        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
	        Normalizations: {
	            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */
	            registered: {
	                clip: function (type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return "clip";
	                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */
	                        case "extract":
	                            var extracted;
	
	                            /* If Velocity also extracted this value, skip extraction. */
	                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                extracted = propertyValue;
	                            } else {
	                                /* Remove the "rect()" wrapper. */
	                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
	                                /* Strip off commas. */
	                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
	                            }
	
	                            return extracted;
	                        /* Clip needs to be re-wrapped during injection. */
	                        case "inject":
	                            return "rect(" + propertyValue + ")";
	                    }
	                },
	
	                blur: function(type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
	                        case "extract":
	                            var extracted = parseFloat(propertyValue);
	
	                            /* If extracted is NaN, meaning the value isn't already extracted. */
	                            if (!(extracted || extracted === 0)) {
	                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
	                                /* If the filter string had a blur component, return just the blur value and unit type. */
	                                if (blurComponent) {
	                                    extracted = blurComponent[1];
	                                /* If the component doesn't exist, default blur to 0. */
	                                } else {
	                                    extracted = 0;
	                                }
	                            }
	
	                            return extracted;
	                        /* Blur needs to be re-wrapped during injection. */
	                        case "inject":
	                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
	                            if (!parseFloat(propertyValue)) {
	                                return "none";
	                            } else {
	                                return "blur(" + propertyValue + ")";
	                            }
	                    }
	                },
	
	                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
	                opacity: function (type, element, propertyValue) {
	                    if (IE <= 8) {
	                        switch (type) {
	                            case "name":
	                                return "filter";
	                            case "extract":
	                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
	                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
	                                if (extracted) {
	                                    /* Convert to decimal value. */
	                                    propertyValue = extracted[1] / 100;
	                                } else {
	                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
	                                    propertyValue = 1;
	                                }
	
	                                return propertyValue;
	                            case "inject":
	                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
	                                element.style.zoom = 1;
	
	                                /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
	                                if (parseFloat(propertyValue) >= 1) {
	                                    return "";
	                                } else {
	                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
	                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
	                                }
	                        }
	                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
	                    } else {
	                        switch (type) {
	                            case "name":
	                                return "opacity";
	                            case "extract":
	                                return propertyValue;
	                            case "inject":
	                                return propertyValue;
	                        }
	                    }
	                }
	            },
	
	            /*****************************
	                Batched Registrations
	            *****************************/
	
	            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
	            register: function () {
	
	                /*****************
	                    Transforms
	                *****************/
	
	                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */
	                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */
	                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */
	                if (!(IE <= 9) && !Velocity.State.isGingerbread) {
	                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
	                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
	                }
	
	                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
	                    (function() {
	                        var transformName = CSS.Lists.transformsBase[i];
	
	                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
	                            switch (type) {
	                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
	                                case "name":
	                                    return "transform";
	                                /* Transform values are cached onto a per-element transformCache object. */
	                                case "extract":
	                                    /* If this transform has yet to be assigned a value, return its null value. */
	                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
	                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
	                                        return /^scale/i.test(transformName) ? 1 : 0;
	                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
	                                    } else {
	                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
	                                    }
	                                case "inject":
	                                    var invalid = false;
	
	                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
	                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
	                                    switch (transformName.substr(0, transformName.length - 1)) {
	                                        /* Whitelist unit types for each transform. */
	                                        case "translate":
	                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
	                                            break;
	                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
	                                        case "scal":
	                                        case "scale":
	                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
	                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
	                                                propertyValue = 1;
	                                            }
	
	                                            invalid = !/(\d)$/i.test(propertyValue);
	                                            break;
	                                        case "skew":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                        case "rotate":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                    }
	
	                                    if (!invalid) {
	                                        /* As per the CSS spec, wrap the value in parentheses. */
	                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";
	                                    }
	
	                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
	                                    return Data(element).transformCache[transformName];
	                            }
	                        };
	                    })();
	                }
	
	                /*************
	                    Colors
	                *************/
	
	                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */
	                    (function () {
	                        var colorName = CSS.Lists.colors[i];
	
	                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
	                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
	                            switch (type) {
	                                case "name":
	                                    return colorName;
	                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
	                                case "extract":
	                                    var extracted;
	
	                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
	                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                        extracted = propertyValue;
	                                    } else {
	                                        var converted,
	                                            colorNames = {
	                                                black: "rgb(0, 0, 0)",
	                                                blue: "rgb(0, 0, 255)",
	                                                gray: "rgb(128, 128, 128)",
	                                                green: "rgb(0, 128, 0)",
	                                                red: "rgb(255, 0, 0)",
	                                                white: "rgb(255, 255, 255)"
	                                            };
	
	                                        /* Convert color names to rgb. */
	                                        if (/^[A-z]+$/i.test(propertyValue)) {
	                                            if (colorNames[propertyValue] !== undefined) {
	                                                converted = colorNames[propertyValue]
	                                            } else {
	                                                /* If an unmatched color name is provided, default to black. */
	                                                converted = colorNames.black;
	                                            }
	                                        /* Convert hex values to rgb. */
	                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {
	                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
	                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
	                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {
	                                            converted = colorNames.black;
	                                        }
	
	                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */
	                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                                    }
	
	                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
	                                        extracted += " 1";
	                                    }
	
	                                    return extracted;
	                                case "inject":
	                                    /* If this is IE<=8 and an alpha component exists, strip it off. */
	                                    if (IE <= 8) {
	                                        if (propertyValue.split(" ").length === 4) {
	                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
	                                        }
	                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    } else if (propertyValue.split(" ").length === 3) {
	                                        propertyValue += " 1";
	                                    }
	
	                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */
	                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
	                            }
	                        };
	                    })();
	                }
	            }
	        },
	
	        /************************
	           CSS Property Names
	        ************************/
	
	        Names: {
	            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */
	            camelCase: function (property) {
	                return property.replace(/-(\w)/g, function (match, subMatch) {
	                    return subMatch.toUpperCase();
	                });
	            },
	
	            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
	            SVGAttribute: function (property) {
	                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
	                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
	                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
	                    SVGAttributes += "|transform";
	                }
	
	                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
	            },
	
	            /* Determine whether a property should be set with a vendor prefix. */
	            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */
	            prefixCheck: function (property) {
	                /* If this property has already been checked, return the cached value. */
	                if (Velocity.State.prefixMatches[property]) {
	                    return [ Velocity.State.prefixMatches[property], true ];
	                } else {
	                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];
	
	                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
	                        var propertyPrefixed;
	
	                        if (i === 0) {
	                            propertyPrefixed = property;
	                        } else {
	                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
	                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
	                        }
	
	                        /* Check if the browser supports this property as prefixed. */
	                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
	                            /* Cache the match. */
	                            Velocity.State.prefixMatches[property] = propertyPrefixed;
	
	                            return [ propertyPrefixed, true ];
	                        }
	                    }
	
	                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
	                    return [ property, false ];
	                }
	            }
	        },
	
	        /************************
	           CSS Property Values
	        ************************/
	
	        Values: {
	            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
	            hexToRgb: function (hex) {
	                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
	                    rgbParts;
	
	                hex = hex.replace(shortformRegex, function (m, r, g, b) {
	                    return r + r + g + g + b + b;
	                });
	
	                rgbParts = longformRegex.exec(hex);
	
	                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
	            },
	
	            isCSSNullValue: function (value) {
	                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */
	                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
	                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
	                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
	            },
	
	            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
	            getUnitType: function (property) {
	                if (/^(rotate|skew)/i.test(property)) {
	                    return "deg";
	                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
	                    /* The above properties are unitless. */
	                    return "";
	                } else {
	                    /* Default to px for all other properties. */
	                    return "px";
	                }
	            },
	
	            /* HTML elements default to an associated display type when they're not set to display:none. */
	            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
	            getDisplayType: function (element) {
	                var tagName = element && element.tagName.toString().toLowerCase();
	
	                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
	                    return "inline";
	                } else if (/^(li)$/i.test(tagName)) {
	                    return "list-item";
	                } else if (/^(tr)$/i.test(tagName)) {
	                    return "table-row";
	                } else if (/^(table)$/i.test(tagName)) {
	                    return "table";
	                } else if (/^(tbody)$/i.test(tagName)) {
	                    return "table-row-group";
	                /* Default to "block" when no match is found. */
	                } else {
	                    return "block";
	                }
	            },
	
	            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
	            addClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.add(className);
	                } else {
	                    element.className += (element.className.length ? " " : "") + className;
	                }
	            },
	
	            removeClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.remove(className);
	                } else {
	                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
	                }
	            }
	        },
	
	        /****************************
	           Style Getting & Setting
	        ****************************/
	
	        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
	            /* Get an element's computed property value. */
	            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	            function computePropertyValue (element, property) {
	                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */
	                var computedValue = 0;
	
	                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
	                if (IE <= 8) {
	                    computedValue = $.css(element, property); /* GET */
	                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */
	                } else {
	                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */
	                    var toggleDisplay = false;
	
	                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
	                        toggleDisplay = true;
	                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
	                    }
	
	                    function revertDisplay () {
	                        if (toggleDisplay) {
	                            CSS.setPropertyValue(element, "display", "none");
	                        }
	                    }
	
	                    if (!forceStyleLookup) {
	                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
	                            revertDisplay();
	
	                            return contentBoxHeight;
	                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
	                            revertDisplay();
	
	                            return contentBoxWidth;
	                        }
	                    }
	
	                    var computedStyle;
	
	                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
	                    if (Data(element) === undefined) {
	                        computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If the computedStyle object has yet to be cached, do so now. */
	                    } else if (!Data(element).computedStyle) {
	                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If computedStyle is cached, use it. */
	                    } else {
	                        computedStyle = Data(element).computedStyle;
	                    }
	
	                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
	                    if (property === "borderColor") {
	                        property = "borderTopColor";
	                    }
	
	                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
	                    if (IE === 9 && property === "filter") {
	                        computedValue = computedStyle.getPropertyValue(property); /* GET */
	                    } else {
	                        computedValue = computedStyle[property];
	                    }
	
	                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */
	                    if (computedValue === "" || computedValue === null) {
	                        computedValue = element.style[property];
	                    }
	
	                    revertDisplay();
	                }
	
	                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */
	                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
	                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
	                    var position = computePropertyValue(element, "position"); /* GET */
	
	                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */
	                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */
	                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
	                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
	                        computedValue = $(element).position()[property] + "px"; /* GET */
	                    }
	                }
	
	                return computedValue;
	            }
	
	            var propertyValue;
	
	            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
	               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
	            if (CSS.Hooks.registered[property]) {
	                var hook = property,
	                    hookRoot = CSS.Hooks.getRoot(hook);
	
	                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the root property's value. */
	                if (rootPropertyValue === undefined) {
	                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
	                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
	                }
	
	                /* If this root has a normalization registered, peform the associated normalization extraction. */
	                if (CSS.Normalizations.registered[hookRoot]) {
	                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
	                }
	
	                /* Extract the hook's value. */
	                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
	            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */
	            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */
	            } else if (CSS.Normalizations.registered[property]) {
	                var normalizedPropertyName,
	                    normalizedPropertyValue;
	
	                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
	                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
	                if (normalizedPropertyName !== "transform") {
	                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
	                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
	                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
	                        normalizedPropertyValue = CSS.Hooks.templates[property][1];
	                    }
	                }
	
	                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
	            }
	
	            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
	            if (!/^[\d-]/.test(propertyValue)) {
	                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */
	                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
	                    if (/^(height|width)$/i.test(property)) {
	                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
	                        try {
	                            propertyValue = element.getBBox()[property];
	                        } catch (error) {
	                            propertyValue = 0;
	                        }
	                    /* Otherwise, access the attribute value directly. */
	                    } else {
	                        propertyValue = element.getAttribute(property);
	                    }
	                } else {
	                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
	                }
	            }
	
	            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */
	            if (CSS.Values.isCSSNullValue(propertyValue)) {
	                propertyValue = 0;
	            }
	
	            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);
	
	            return propertyValue;
	        },
	
	        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
	            var propertyName = property;
	
	            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
	            if (property === "scroll") {
	                /* If a container option is present, scroll the container instead of the browser window. */
	                if (scrollData.container) {
	                    scrollData.container["scroll" + scrollData.direction] = propertyValue;
	                /* Otherwise, Velocity defaults to scrolling the browser window. */
	                } else {
	                    if (scrollData.direction === "Left") {
	                        window.scrollTo(propertyValue, scrollData.alternateValue);
	                    } else {
	                        window.scrollTo(scrollData.alternateValue, propertyValue);
	                    }
	                }
	            } else {
	                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */
	                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
	                    /* Perform a normalization injection. */
	                    /* Note: The normalization logic handles the transformCache updating. */
	                    CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
	                    propertyName = "transform";
	                    propertyValue = Data(element).transformCache[property];
	                } else {
	                    /* Inject hooks. */
	                    if (CSS.Hooks.registered[property]) {
	                        var hookName = property,
	                            hookRoot = CSS.Hooks.getRoot(property);
	
	                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
	                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
	                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
	                        property = hookRoot;
	                    }
	
	                    /* Normalize names and values. */
	                    if (CSS.Normalizations.registered[property]) {
	                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
	                        property = CSS.Normalizations.registered[property]("name", element);
	                    }
	
	                    /* Assign the appropriate vendor prefix before performing an official style update. */
	                    propertyName = CSS.Names.prefixCheck(property)[0];
	
	                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
	                    if (IE <= 8) {
	                        try {
	                            element.style[propertyName] = propertyValue;
	                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
	                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
	                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
	                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */
	                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
	                        element.setAttribute(property, propertyValue);
	                    } else {
	                        element.style[propertyName] = propertyValue;
	                    }
	
	                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
	                }
	            }
	
	            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
	            return [ propertyName, propertyValue ];
	        },
	
	        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
	        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
	        flushTransformCache: function(element) {
	            var transformString = "";
	
	            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
	            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
	                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
	                function getTransformFloat (transformProperty) {
	                    return parseFloat(CSS.getPropertyValue(element, transformProperty));
	                }
	
	                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
	                var SVGTransforms = {
	                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
	                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
	                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
	                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
	                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
	                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
	                };
	
	                /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */
	                $.each(Data(element).transformCache, function(transformName) {
	                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */
	                    if (/^translate/i.test(transformName)) {
	                        transformName = "translate";
	                    } else if (/^scale/i.test(transformName)) {
	                        transformName = "scale";
	                    } else if (/^rotate/i.test(transformName)) {
	                        transformName = "rotate";
	                    }
	
	                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */
	                    if (SVGTransforms[transformName]) {
	                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
	                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
	                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */
	                        delete SVGTransforms[transformName];
	                    }
	                });
	            } else {
	                var transformValue,
	                    perspective;
	
	                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
	                $.each(Data(element).transformCache, function(transformName) {
	                    transformValue = Data(element).transformCache[transformName];
	
	                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
	                    if (transformName === "transformPerspective") {
	                        perspective = transformValue;
	                        return true;
	                    }
	
	                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
	                    if (IE === 9 && transformName === "rotateZ") {
	                        transformName = "rotate";
	                    }
	
	                    transformString += transformName + transformValue + " ";
	                });
	
	                /* If present, set the perspective subproperty first. */
	                if (perspective) {
	                    transformString = "perspective" + perspective + " " + transformString;
	                }
	            }
	
	            CSS.setPropertyValue(element, "transform", transformString);
	        }
	    };
	
	    /* Register hooks and normalizations. */
	    CSS.Hooks.register();
	    CSS.Normalizations.register();
	
	    /* Allow hook setting in the same fashion as jQuery's $.css(). */
	    Velocity.hook = function (elements, arg2, arg3) {
	        var value = undefined;
	
	        elements = sanitizeElements(elements);
	
	        $.each(elements, function(i, element) {
	            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /* Get property value. If an element set was passed in, only return the value for the first element. */
	            if (arg3 === undefined) {
	                if (value === undefined) {
	                    value = Velocity.CSS.getPropertyValue(element, arg2);
	                }
	            /* Set property value. */
	            } else {
	                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
	                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
	
	                /* Transform properties don't automatically set. They have to be flushed to the DOM. */
	                if (adjustedSet[0] === "transform") {
	                    Velocity.CSS.flushTransformCache(element);
	                }
	
	                value = adjustedSet;
	            }
	        });
	
	        return value;
	    };
	
	    /*****************
	        Animation
	    *****************/
	
	    var animate = function() {
	
	        /******************
	            Call Chain
	        ******************/
	
	        /* Logic for determining what to return to the call stack when exiting out of Velocity. */
	        function getChain () {
	            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
	            if (isUtility) {
	                return promiseData.promise || null;
	            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
	            } else {
	                return elementsWrapped;
	            }
	        }
	
	        /*************************
	           Arguments Assignment
	        *************************/
	
	        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */
	        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
	        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
	            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
	            isUtility,
	            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
	            elementsWrapped,
	            argumentIndex;
	
	        var elements,
	            propertiesMap,
	            options;
	
	        /* Detect jQuery/Zepto elements being animated via the $.fn method. */
	        if (Type.isWrapped(this)) {
	            isUtility = false;
	
	            argumentIndex = 0;
	            elements = this;
	            elementsWrapped = this;
	        /* Otherwise, raw elements are being animated via the utility function. */
	        } else {
	            isUtility = true;
	
	            argumentIndex = 1;
	            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
	        }
	
	        elements = sanitizeElements(elements);
	
	        if (!elements) {
	            return;
	        }
	
	        if (syntacticSugar) {
	            propertiesMap = arguments[0].properties || arguments[0].p;
	            options = arguments[0].options || arguments[0].o;
	        } else {
	            propertiesMap = arguments[argumentIndex];
	            options = arguments[argumentIndex + 1];
	        }
	
	        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */
	        var elementsLength = elements.length,
	            elementsIndex = 0;
	
	        /***************************
	            Argument Overloading
	        ***************************/
	
	        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */
	        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
	        if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
	            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
	            var startingArgumentPosition = argumentIndex + 1;
	
	            options = {};
	
	            /* Iterate through all options arguments */
	            for (var i = startingArgumentPosition; i < arguments.length; i++) {
	                /* Treat a number as a duration. Parse it out. */
	                /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */
	                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
	                    options.duration = arguments[i];
	                /* Treat strings and arrays as easings. */
	                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
	                    options.easing = arguments[i];
	                /* Treat a function as a complete callback. */
	                } else if (Type.isFunction(arguments[i])) {
	                    options.complete = arguments[i];
	                }
	            }
	        }
	
	        /***************
	            Promises
	        ***************/
	
	        var promiseData = {
	                promise: null,
	                resolver: null,
	                rejecter: null
	            };
	
	        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
	        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */
	        if (isUtility && Velocity.Promise) {
	            promiseData.promise = new Velocity.Promise(function (resolve, reject) {
	                promiseData.resolver = resolve;
	                promiseData.rejecter = reject;
	            });
	        }
	
	        /*********************
	           Action Detection
	        *********************/
	
	        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
	        var action;
	
	        switch (propertiesMap) {
	            case "scroll":
	                action = "scroll";
	                break;
	
	            case "reverse":
	                action = "reverse";
	                break;
	
	            case "finish":
	            case "finishAll":
	            case "stop":
	                /*******************
	                    Action: Stop
	                *******************/
	
	                /* Clear the currently-active delay on each targeted element. */
	                $.each(elements, function(i, element) {
	                    if (Data(element) && Data(element).delayTimer) {
	                        /* Stop the timer from triggering its cached next() function. */
	                        clearTimeout(Data(element).delayTimer.setTimeout);
	
	                        /* Manually call the next() function so that the subsequent queue items can progress. */
	                        if (Data(element).delayTimer.next) {
	                            Data(element).delayTimer.next();
	                        }
	
	                        delete Data(element).delayTimer;
	                    }
	
	                    /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */
	                    if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
	                        /* Iterate through the items in the element's queue. */
	                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                            /* The queue array can contain an "inprogress" string, which we skip. */
	                            if (Type.isFunction(item)) {
	                                item();
	                            }
	                        });
	
	                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                        $.queue(element, Type.isString(options) ? options : "", []);
	                    }
	                });
	
	                var callsToStop = [];
	
	                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */
	                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */
	                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */
	
	                /* Iterate through every active call. */
	                $.each(Velocity.State.calls, function(i, activeCall) {
	                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
	                    if (activeCall) {
	                        /* Iterate through the active call's targeted elements. */
	                        $.each(activeCall[1], function(k, activeElement) {
	                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */
	                            /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
	                            var queueName = (options === undefined) ? "" : options;
	
	                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
	                                return true;
	                            }
	
	                            /* Iterate through the calls targeted by the stop command. */
	                            $.each(elements, function(l, element) {
	                                /* Check that this call was applied to the target element. */
	                                if (element === activeElement) {
	                                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */
	                                    if (options === true || Type.isString(options)) {
	                                        /* Iterate through the items in the element's queue. */
	                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                                            /* The queue array can contain an "inprogress" string, which we skip. */
	                                            if (Type.isFunction(item)) {
	                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
	                                                item(null, true);
	                                            }
	                                        });
	
	                                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                                        $.queue(element, Type.isString(options) ? options : "", []);
	                                    }
	
	                                    if (propertiesMap === "stop") {
	                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */
	                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */
	                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {
	                                            $.each(Data(element).tweensContainer, function(m, activeTween) {
	                                                activeTween.endValue = activeTween.currentValue;
	                                            });
	                                        }
	
	                                        callsToStop.push(i);
	                                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
	                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
	                                        activeCall[2].duration = 1;
	                                    }
	                                }
	                            });
	                        });
	                    }
	                });
	
	                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
	                if (propertiesMap === "stop") {
	                    $.each(callsToStop, function(i, j) {
	                        completeCall(j, true);
	                    });
	
	                    if (promiseData.promise) {
	                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
	                        promiseData.resolver(elements);
	                    }
	                }
	
	                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
	                return getChain();
	
	            default:
	                /* Treat a non-empty plain object as a literal properties map. */
	                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
	                    action = "start";
	
	                /****************
	                    Redirects
	                ****************/
	
	                /* Check if a string matches a registered redirect (see Redirects above). */
	                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
	                    var opts = $.extend({}, options),
	                        durationOriginal = opts.duration,
	                        delayOriginal = opts.delay || 0;
	
	                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
	                    if (opts.backwards === true) {
	                        elements = $.extend(true, [], elements).reverse();
	                    }
	
	                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
	                    $.each(elements, function(elementIndex, element) {
	                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
	                        if (parseFloat(opts.stagger)) {
	                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
	                        } else if (Type.isFunction(opts.stagger)) {
	                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
	                        }
	
	                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */
	                        if (opts.drag) {
	                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
	                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
	                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
	                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
	                        }
	
	                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */
	                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
	                    });
	
	                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */
	                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */
	                    return getChain();
	                } else {
	                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
	                    if (promiseData.promise) {
	                        promiseData.rejecter(new Error(abortError));
	                    } else {
	                        console.log(abortError);
	                    }
	
	                    return getChain();
	                }
	        }
	
	        /**************************
	            Call-Wide Variables
	        **************************/
	
	        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */
	        var callUnitConversionData = {
	                lastParent: null,
	                lastPosition: null,
	                lastFontSize: null,
	                lastPercentToPxWidth: null,
	                lastPercentToPxHeight: null,
	                lastEmToPx: null,
	                remToPx: null,
	                vwToPx: null,
	                vhToPx: null
	            };
	
	        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */
	        var call = [];
	
	        /************************
	           Element Processing
	        ************************/
	
	        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */
	
	        function processElement () {
	
	            /*************************
	               Part I: Pre-Queueing
	            *************************/
	
	            /***************************
	               Element-Wide Variables
	            ***************************/
	
	            var element = this,
	                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
	                opts = $.extend({}, Velocity.defaults, options),
	                /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */
	                tweensContainer = {},
	                elementUnitConversionData;
	
	            /******************
	               Element Init
	            ******************/
	
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /******************
	               Option: Delay
	            ******************/
	
	            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
	            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
	            if (parseFloat(opts.delay) && opts.queue !== false) {
	                $.queue(element, opts.queue, function(next) {
	                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
	                    Data(element).delayTimer = {
	                        setTimeout: setTimeout(next, parseFloat(opts.delay)),
	                        next: next
	                    };
	                });
	            }
	
	            /*********************
	               Option: Duration
	            *********************/
	
	            /* Support for jQuery's named durations. */
	            switch (opts.duration.toString().toLowerCase()) {
	                case "fast":
	                    opts.duration = 200;
	                    break;
	
	                case "normal":
	                    opts.duration = DURATION_DEFAULT;
	                    break;
	
	                case "slow":
	                    opts.duration = 600;
	                    break;
	
	                default:
	                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
	                    opts.duration = parseFloat(opts.duration) || 1;
	            }
	
	            /************************
	               Global Option: Mock
	            ************************/
	
	            if (Velocity.mock !== false) {
	                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
	                if (Velocity.mock === true) {
	                    opts.duration = opts.delay = 1;
	                } else {
	                    opts.duration *= parseFloat(Velocity.mock) || 1;
	                    opts.delay *= parseFloat(Velocity.mock) || 1;
	                }
	            }
	
	            /*******************
	               Option: Easing
	            *******************/
	
	            opts.easing = getEasing(opts.easing, opts.duration);
	
	            /**********************
	               Option: Callbacks
	            **********************/
	
	            /* Callbacks must functions. Otherwise, default to null. */
	            if (opts.begin && !Type.isFunction(opts.begin)) {
	                opts.begin = null;
	            }
	
	            if (opts.progress && !Type.isFunction(opts.progress)) {
	                opts.progress = null;
	            }
	
	            if (opts.complete && !Type.isFunction(opts.complete)) {
	                opts.complete = null;
	            }
	
	            /*********************************
	               Option: Display & Visibility
	            *********************************/
	
	            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
	            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
	            if (opts.display !== undefined && opts.display !== null) {
	                opts.display = opts.display.toString().toLowerCase();
	
	                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
	                if (opts.display === "auto") {
	                    opts.display = Velocity.CSS.Values.getDisplayType(element);
	                }
	            }
	
	            if (opts.visibility !== undefined && opts.visibility !== null) {
	                opts.visibility = opts.visibility.toString().toLowerCase();
	            }
	
	            /**********************
	               Option: mobileHA
	            **********************/
	
	            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */
	            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
	            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
	            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
	            /***********************
	               Part II: Queueing
	            ***********************/
	
	            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
	            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
	            function buildQueue (next) {
	
	                /*******************
	                   Option: Begin
	                *******************/
	
	                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
	                if (opts.begin && elementsIndex === 0) {
	                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                    try {
	                        opts.begin.call(elements, elements);
	                    } catch (error) {
	                        setTimeout(function() { throw error; }, 1);
	                    }
	                }
	
	                /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/
	
	                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
	                if (action === "scroll") {
	                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
	                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
	                        scrollOffset = parseFloat(opts.offset) || 0,
	                        scrollPositionCurrent,
	                        scrollPositionCurrentAlternate,
	                        scrollPositionEnd;
	
	                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
	                    if (opts.container) {
	                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */
	                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
	                            /* Extract the raw DOM element from the jQuery wrapper. */
	                            opts.container = opts.container[0] || opts.container;
	                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */
	                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
	                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */
	                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
	                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
	                        } else {
	                            opts.container = null;
	                        }
	                    } else {
	                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */
	                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
	                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
	                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
	                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */
	                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
	                    }
	
	                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
	                    tweensContainer = {
	                        scroll: {
	                            rootPropertyValue: false,
	                            startValue: scrollPositionCurrent,
	                            currentValue: scrollPositionCurrent,
	                            endValue: scrollPositionEnd,
	                            unitType: "",
	                            easing: opts.easing,
	                            scrollData: {
	                                container: opts.container,
	                                direction: scrollDirection,
	                                alternateValue: scrollPositionCurrentAlternate
	                            }
	                        },
	                        element: element
	                    };
	
	                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
	
	                /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/
	
	                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
	                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
	                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */
	                } else if (action === "reverse") {
	                    /* Abort if there is no prior animation data to reverse to. */
	                    if (!Data(element).tweensContainer) {
	                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
	                        $.dequeue(element, opts.queue);
	
	                        return;
	                    } else {
	                        /*********************
	                           Options Parsing
	                        *********************/
	
	                        /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */
	                        if (Data(element).opts.display === "none") {
	                            Data(element).opts.display = "auto";
	                        }
	
	                        if (Data(element).opts.visibility === "hidden") {
	                            Data(element).opts.visibility = "visible";
	                        }
	
	                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
	                        Data(element).opts.loop = false;
	                        Data(element).opts.begin = null;
	                        Data(element).opts.complete = null;
	
	                        /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */
	                        if (!options.easing) {
	                            delete opts.easing;
	                        }
	
	                        if (!options.duration) {
	                            delete opts.duration;
	                        }
	
	                        /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */
	                        opts = $.extend({}, Data(element).opts, opts);
	
	                        /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/
	
	                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
	                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);
	
	                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
	                        for (var lastTween in lastTweensContainer) {
	                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
	                            if (lastTween !== "element") {
	                                var lastStartValue = lastTweensContainer[lastTween].startValue;
	
	                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
	                                lastTweensContainer[lastTween].endValue = lastStartValue;
	
	                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
	                                if (!Type.isEmptyObject(options)) {
	                                    lastTweensContainer[lastTween].easing = opts.easing;
	                                }
	
	                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
	                            }
	                        }
	
	                        tweensContainer = lastTweensContainer;
	                    }
	
	                /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/
	
	                } else if (action === "start") {
	
	                    /*************************
	                        Value Transferring
	                    *************************/
	
	                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */
	                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */
	                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	                    var lastTweensContainer;
	
	                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */
	                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {
	                        lastTweensContainer = Data(element).tweensContainer;
	                    }
	
	                    /***************************
	                       Tween Data Calculation
	                    ***************************/
	
	                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
	                    /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
	                    function parsePropertyValue (valueData, skipResolvingEasing) {
	                        var endValue = undefined,
	                            easing = undefined,
	                            startValue = undefined;
	
	                        /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
	                        if (Type.isArray(valueData)) {
	                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */
	                            endValue = valueData[0];
	
	                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */
	                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
	                                startValue = valueData[1];
	                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
	                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
	                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
	                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
	                                if (valueData[2] !== undefined) {
	                                    startValue = valueData[2];
	                                }
	                            }
	                        /* Handle the single-value format. */
	                        } else {
	                            endValue = valueData;
	                        }
	
	                        /* Default to the call's easing if a per-property easing type was not defined. */
	                        if (!skipResolvingEasing) {
	                            easing = easing || opts.easing;
	                        }
	
	                        /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
	                        if (Type.isFunction(endValue)) {
	                            endValue = endValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        if (Type.isFunction(startValue)) {
	                            startValue = startValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
	                        return [ endValue || 0, easing, startValue ];
	                    }
	
	                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
	                    $.each(propertiesMap, function(property, value) {
	                        /* Find shorthand color properties that have been passed a hex string. */
	                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
	                            /* Parse the value data for each shorthand. */
	                            var valueData = parsePropertyValue(value, true),
	                                endValue = valueData[0],
	                                easing = valueData[1],
	                                startValue = valueData[2];
	
	                            if (CSS.RegEx.isHex.test(endValue)) {
	                                /* Convert the hex strings into their RGB component arrays. */
	                                var colorComponents = [ "Red", "Green", "Blue" ],
	                                    endValueRGB = CSS.Values.hexToRgb(endValue),
	                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
	                                /* Inject the RGB component tweens into propertiesMap. */
	                                for (var i = 0; i < colorComponents.length; i++) {
	                                    var dataArray = [ endValueRGB[i] ];
	
	                                    if (easing) {
	                                        dataArray.push(easing);
	                                    }
	
	                                    if (startValueRGB !== undefined) {
	                                        dataArray.push(startValueRGB[i]);
	                                    }
	
	                                    propertiesMap[property + colorComponents[i]] = dataArray;
	                                }
	
	                                /* Remove the intermediary shorthand property entry now that we've processed it. */
	                                delete propertiesMap[property];
	                            }
	                        }
	                    });
	
	                    /* Create a tween out of each property, and append its associated data to tweensContainer. */
	                    for (var property in propertiesMap) {
	
	                        /**************************
	                           Start Value Sourcing
	                        **************************/
	
	                        /* Parse out endValue, easing, and startValue from the property's data. */
	                        var valueData = parsePropertyValue(propertiesMap[property]),
	                            endValue = valueData[0],
	                            easing = valueData[1],
	                            startValue = valueData[2];
	
	                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */
	                        property = CSS.Names.camelCase(property);
	
	                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
	                        var rootProperty = CSS.Hooks.getRoot(property),
	                            rootPropertyValue = false;
	
	                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
	                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
	                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
	                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
	
	                            continue;
	                        }
	
	                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
	                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
	                            startValue = 0;
	                        }
	
	                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */
	                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
	                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
	                            if (startValue === undefined) {
	                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
	                            }
	
	                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
	                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
	                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
	                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
	                        } else {
	                            /* Handle hooked properties. */
	                            if (CSS.Hooks.registered[property]) {
	                               if (startValue === undefined) {
	                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
	                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from rootPropertyValue. */
	                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
	                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
	                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
	                                } else {
	                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
	                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                                }
	                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
	                            } else if (startValue === undefined) {
	                                startValue = CSS.getPropertyValue(element, property); /* GET */
	                            }
	                        }
	
	                        /**************************
	                           Value Data Extraction
	                        **************************/
	
	                        var separatedValue,
	                            endValueUnitType,
	                            startValueUnitType,
	                            operator = false;
	
	                        /* Separates a property value into its numeric value and its unit type. */
	                        function separateValue (property, value) {
	                            var unitType,
	                                numericValue;
	
	                            numericValue = (value || "0")
	                                .toString()
	                                .toLowerCase()
	                                /* Match the unit type at the end of the value. */
	                                .replace(/[%A-z]+$/, function(match) {
	                                    /* Grab the unit type. */
	                                    unitType = match;
	
	                                    /* Strip the unit type off of value. */
	                                    return "";
	                                });
	
	                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
	                            if (!unitType) {
	                                unitType = CSS.Values.getUnitType(property);
	                            }
	
	                            return [ numericValue, unitType ];
	                        }
	
	                        /* Separate startValue. */
	                        separatedValue = separateValue(property, startValue);
	                        startValue = separatedValue[0];
	                        startValueUnitType = separatedValue[1];
	
	                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
	                        separatedValue = separateValue(property, endValue);
	                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
	                            operator = subMatch;
	
	                            /* Strip the operator off of the value. */
	                            return "";
	                        });
	                        endValueUnitType = separatedValue[1];
	
	                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
	                        startValue = parseFloat(startValue) || 0;
	                        endValue = parseFloat(endValue) || 0;
	
	                        /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/
	
	                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
	                        if (endValueUnitType === "%") {
	                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */
	                            if (/^(fontSize|lineHeight)$/.test(property)) {
	                                /* Convert % into an em decimal value. */
	                                endValue = endValue / 100;
	                                endValueUnitType = "em";
	                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
	                            } else if (/^scale/.test(property)) {
	                                endValue = endValue / 100;
	                                endValueUnitType = "";
	                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
	                            } else if (/(Red|Green|Blue)$/i.test(property)) {
	                                endValue = (endValue / 100) * 255;
	                                endValueUnitType = "";
	                            }
	                        }
	
	                        /***************************
	                           Unit Ratio Calculation
	                        ***************************/
	
	                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
	                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */
	                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
	                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
	                        function calculateUnitRatios () {
	
	                            /************************
	                                Same Ratio Checks
	                            ************************/
	
	                            /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */
	                            var sameRatioIndicators = {
	                                    myParent: element.parentNode || document.body, /* GET */
	                                    position: CSS.getPropertyValue(element, "position"), /* GET */
	                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
	                                },
	                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
	                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
	                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
	                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
	                            /* Store these ratio indicators call-wide for the next element to compare against. */
	                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;
	                            callUnitConversionData.lastPosition = sameRatioIndicators.position;
	                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
	                            /***************************
	                               Element-Specific Units
	                            ***************************/
	
	                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
	                            var measurement = 100,
	                                unitRatios = {};
	
	                            if (!sameEmRatio || !samePercentRatio) {
	                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
	                                Velocity.init(dummy);
	                                sameRatioIndicators.myParent.appendChild(dummy);
	
	                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
	                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
	                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
	                                });
	                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
	                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
	                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
	                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
	                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
	                                });
	                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
	                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
	                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
	                                sameRatioIndicators.myParent.removeChild(dummy);
	                            } else {
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
	                            }
	
	                            /***************************
	                               Element-Agnostic Units
	                            ***************************/
	
	                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */
	                            if (callUnitConversionData.remToPx === null) {
	                                /* Default to browsers' default fontSize of 16px in the case of 0. */
	                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
	                            }
	
	                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */
	                            if (callUnitConversionData.vwToPx === null) {
	                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
	                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
	                            }
	
	                            unitRatios.remToPx = callUnitConversionData.remToPx;
	                            unitRatios.vwToPx = callUnitConversionData.vwToPx;
	                            unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
	                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
	
	                            return unitRatios;
	                        }
	
	                        /********************
	                           Unit Conversion
	                        ********************/
	
	                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
	                        if (/[\/*]/.test(operator)) {
	                            endValueUnitType = startValueUnitType;
	                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
	                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
	                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
	                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
	                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */
	                            if (endValue === 0) {
	                                endValueUnitType = startValueUnitType;
	                            } else {
	                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
	                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
	                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
	                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
	                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
	                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
	                                switch (startValueUnitType) {
	                                    case "%":
	                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
	                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* px acts as our midpoint in the unit conversion process; do nothing. */
	                                        break;
	
	                                    default:
	                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
	                                }
	
	                                /* Invert the px ratios to convert into to the target unit. */
	                                switch (endValueUnitType) {
	                                    case "%":
	                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* startValue is already in px, do nothing; we're done. */
	                                        break;
	
	                                    default:
	                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
	                                }
	                            }
	                        }
	
	                        /*********************
	                           Relative Values
	                        *********************/
	
	                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
	                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */
	                        switch (operator) {
	                            case "+":
	                                endValue = startValue + endValue;
	                                break;
	
	                            case "-":
	                                endValue = startValue - endValue;
	                                break;
	
	                            case "*":
	                                endValue = startValue * endValue;
	                                break;
	
	                            case "/":
	                                endValue = startValue / endValue;
	                                break;
	                        }
	
	                        /**************************
	                           tweensContainer Push
	                        **************************/
	
	                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */
	                        tweensContainer[property] = {
	                            rootPropertyValue: rootPropertyValue,
	                            startValue: startValue,
	                            currentValue: startValue,
	                            endValue: endValue,
	                            unitType: endValueUnitType,
	                            easing: easing
	                        };
	
	                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
	                    }
	
	                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */
	                    tweensContainer.element = element;
	                }
	
	                /*****************
	                    Call Push
	                *****************/
	
	                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
	                if (tweensContainer.element) {
	                    /* Apply the "velocity-animating" indicator class. */
	                    CSS.Values.addClass(element, "velocity-animating");
	
	                    /* The call array houses the tweensContainers for each element being animated in the current call. */
	                    call.push(tweensContainer);
	
	                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
	                    if (opts.queue === "") {
	                        Data(element).tweensContainer = tweensContainer;
	                        Data(element).opts = opts;
	                    }
	
	                    /* Switch on the element's animating flag. */
	                    Data(element).isAnimating = true;
	
	                    /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */
	                    if (elementsIndex === elementsLength - 1) {
	                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */
	                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);
	
	                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
	                        if (Velocity.State.isTicking === false) {
	                            Velocity.State.isTicking = true;
	
	                            /* Start the tick loop. */
	                            tick();
	                        }
	                    } else {
	                        elementsIndex++;
	                    }
	                }
	            }
	
	            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
	            if (opts.queue === false) {
	                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */
	                if (opts.delay) {
	                    setTimeout(buildQueue, opts.delay);
	                } else {
	                    buildQueue();
	                }
	            /* Otherwise, the call undergoes element queueing as normal. */
	            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
	            } else {
	                $.queue(element, opts.queue, function(next, clearQueue) {
	                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
	                    if (clearQueue === true) {
	                        if (promiseData.promise) {
	                            promiseData.resolver(elements);
	                        }
	
	                        /* Do not continue with animation queueing. */
	                        return true;
	                    }
	
	                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    buildQueue(next);
	                });
	            }
	
	            /*********************
	                Auto-Dequeuing
	            *********************/
	
	            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
	            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
	            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
	            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
	                $.dequeue(element);
	            }
	        }
	
	        /**************************
	           Element Set Iteration
	        **************************/
	
	        /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */
	        $.each(elements, function(i, element) {
	            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
	            if (Type.isNode(element)) {
	                processElement.call(element);
	            }
	        });
	
	        /******************
	           Option: Loop
	        ******************/
	
	        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */
	        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
	        var opts = $.extend({}, Velocity.defaults, options),
	            reverseCallsCount;
	
	        opts.loop = parseInt(opts.loop);
	        reverseCallsCount = (opts.loop * 2) - 1;
	
	        if (opts.loop) {
	            /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
	            for (var x = 0; x < reverseCallsCount; x++) {
	                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
	                var reverseOptions = {
	                    delay: opts.delay,
	                    progress: opts.progress
	                };
	
	                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
	                if (x === reverseCallsCount - 1) {
	                    reverseOptions.display = opts.display;
	                    reverseOptions.visibility = opts.visibility;
	                    reverseOptions.complete = opts.complete;
	                }
	
	                animate(elements, "reverse", reverseOptions);
	            }
	        }
	
	        /***************
	            Chaining
	        ***************/
	
	        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
	        return getChain();
	    };
	
	    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
	    Velocity = $.extend(animate, Velocity);
	    /* For legacy support, also expose the literal animate method. */
	    Velocity.animate = animate;
	
	    /**************
	        Timing
	    **************/
	
	    /* Ticker function. */
	    var ticker = window.requestAnimationFrame || rAFShim;
	
	    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */
	    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
	    if (!Velocity.State.isMobile && document.hidden !== undefined) {
	        document.addEventListener("visibilitychange", function() {
	            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
	            if (document.hidden) {
	                ticker = function(callback) {
	                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
	                    return setTimeout(function() { callback(true) }, 16);
	                };
	
	                /* The rAF loop has been paused by the browser, so we manually restart the tick. */
	                tick();
	            } else {
	                ticker = window.requestAnimationFrame || rAFShim;
	            }
	        });
	    }
	
	    /************
	        Tick
	    ************/
	
	    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
	    function tick (timestamp) {
	        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
	        if (timestamp) {
	            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
	            var timeCurrent = (new Date).getTime();
	
	            /********************
	               Call Iteration
	            ********************/
	
	            var callsLength = Velocity.State.calls.length;
	
	            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
	            if (callsLength > 10000) {
	                Velocity.State.calls = compactSparseArray(Velocity.State.calls);
	            }
	
	            /* Iterate through each active call. */
	            for (var i = 0; i < callsLength; i++) {
	                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
	                if (!Velocity.State.calls[i]) {
	                    continue;
	                }
	
	                /************************
	                   Call-Wide Variables
	                ************************/
	
	                var callContainer = Velocity.State.calls[i],
	                    call = callContainer[0],
	                    opts = callContainer[2],
	                    timeStart = callContainer[3],
	                    firstTick = !!timeStart,
	                    tweenDummyValue = null;
	
	                /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */
	                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */
	                if (!timeStart) {
	                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
	                }
	
	                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */
	                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
	
	                /**********************
	                   Element Iteration
	                **********************/
	
	                /* For every call, iterate through each of the elements in its set. */
	                for (var j = 0, callLength = call.length; j < callLength; j++) {
	                    var tweensContainer = call[j],
	                        element = tweensContainer.element;
	
	                    /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */
	                    if (!Data(element)) {
	                        continue;
	                    }
	
	                    var transformPropertyExists = false;
	
	                    /**********************************
	                       Display & Visibility Toggling
	                    **********************************/
	
	                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
	                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
	                        if (opts.display === "flex") {
	                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
	
	                            $.each(flexValues, function(i, flexValue) {
	                                CSS.setPropertyValue(element, "display", flexValue);
	                            });
	                        }
	
	                        CSS.setPropertyValue(element, "display", opts.display);
	                    }
	
	                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
	                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                        CSS.setPropertyValue(element, "visibility", opts.visibility);
	                    }
	
	                    /************************
	                       Property Iteration
	                    ************************/
	
	                    /* For every element, iterate through each property. */
	                    for (var property in tweensContainer) {
	                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
	                        if (property !== "element") {
	                            var tween = tweensContainer[property],
	                                currentValue,
	                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
	                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
	                            /******************************
	                               Current Value Calculation
	                            ******************************/
	
	                            /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
	                            if (percentComplete === 1) {
	                                currentValue = tween.endValue;
	                            /* Otherwise, calculate currentValue based on the current delta from startValue. */
	                            } else {
	                                var tweenDelta = tween.endValue - tween.startValue;
	                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
	                                /* If no value change is occurring, don't proceed with DOM updating. */
	                                if (!firstTick && (currentValue === tween.currentValue)) {
	                                    continue;
	                                }
	                            }
	
	                            tween.currentValue = currentValue;
	
	                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */
	                            if (property === "tween") {
	                                tweenDummyValue = currentValue;
	                            } else {
	                                /******************
	                                   Hooks: Part I
	                                ******************/
	
	                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
	                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
	                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
	                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
	                                if (CSS.Hooks.registered[property]) {
	                                    var hookRoot = CSS.Hooks.getRoot(property),
	                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
	                                    if (rootPropertyValueCache) {
	                                        tween.rootPropertyValue = rootPropertyValueCache;
	                                    }
	                                }
	
	                                /*****************
	                                    DOM Update
	                                *****************/
	
	                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
	                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
	                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */
	                                                                           property,
	                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
	                                                                           tween.rootPropertyValue,
	                                                                           tween.scrollData);
	
	                                /*******************
	                                   Hooks: Part II
	                                *******************/
	
	                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
	                                if (CSS.Hooks.registered[property]) {
	                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
	                                    if (CSS.Normalizations.registered[hookRoot]) {
	                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
	                                    } else {
	                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
	                                    }
	                                }
	
	                                /***************
	                                   Transforms
	                                ***************/
	
	                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
	                                if (adjustedSetData[0] === "transform") {
	                                    transformPropertyExists = true;
	                                }
	
	                            }
	                        }
	                    }
	
	                    /****************
	                        mobileHA
	                    ****************/
	
	                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
	                    if (opts.mobileHA) {
	                        /* Don't set the null transform hack if we've already done so. */
	                        if (Data(element).transformCache.translate3d === undefined) {
	                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
	                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
	                            transformPropertyExists = true;
	                        }
	                    }
	
	                    if (transformPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	                }
	
	                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
	                if (opts.display !== undefined && opts.display !== "none") {
	                    Velocity.State.calls[i][2].display = false;
	                }
	                if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                    Velocity.State.calls[i][2].visibility = false;
	                }
	
	                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
	                if (opts.progress) {
	                    opts.progress.call(callContainer[1],
	                                       callContainer[1],
	                                       percentComplete,
	                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),
	                                       timeStart,
	                                       tweenDummyValue);
	                }
	
	                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
	                if (percentComplete === 1) {
	                    completeCall(i);
	                }
	            }
	        }
	
	        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
	        if (Velocity.State.isTicking) {
	            ticker(tick);
	        }
	    }
	
	    /**********************
	        Call Completion
	    **********************/
	
	    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
	    function completeCall (callIndex, isStopped) {
	        /* Ensure the call exists. */
	        if (!Velocity.State.calls[callIndex]) {
	            return false;
	        }
	
	        /* Pull the metadata from the call. */
	        var call = Velocity.State.calls[callIndex][0],
	            elements = Velocity.State.calls[callIndex][1],
	            opts = Velocity.State.calls[callIndex][2],
	            resolver = Velocity.State.calls[callIndex][4];
	
	        var remainingCallsExist = false;
	
	        /*************************
	           Element Finalization
	        *************************/
	
	        for (var i = 0, callLength = call.length; i < callLength; i++) {
	            var element = call[i].element;
	
	            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
	            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
	            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
	            if (!isStopped && !opts.loop) {
	                if (opts.display === "none") {
	                    CSS.setPropertyValue(element, "display", opts.display);
	                }
	
	                if (opts.visibility === "hidden") {
	                    CSS.setPropertyValue(element, "visibility", opts.visibility);
	                }
	            }
	
	            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
	            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
	                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
	                if (Data(element)) {
	                    Data(element).isAnimating = false;
	                    /* Clear the element's rootPropertyValueCache, which will become stale. */
	                    Data(element).rootPropertyValueCache = {};
	
	                    var transformHAPropertyExists = false;
	                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
	                    $.each(CSS.Lists.transforms3D, function(i, transformName) {
	                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,
	                            currentValue = Data(element).transformCache[transformName];
	
	                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
	                            transformHAPropertyExists = true;
	
	                            delete Data(element).transformCache[transformName];
	                        }
	                    });
	
	                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
	                    if (opts.mobileHA) {
	                        transformHAPropertyExists = true;
	                        delete Data(element).transformCache.translate3d;
	                    }
	
	                    /* Flush the subproperty removals to the DOM. */
	                    if (transformHAPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	
	                    /* Remove the "velocity-animating" indicator class. */
	                    CSS.Values.removeClass(element, "velocity-animating");
	                }
	            }
	
	            /*********************
	               Option: Complete
	            *********************/
	
	            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
	            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
	            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
	                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                try {
	                    opts.complete.call(elements, elements);
	                } catch (error) {
	                    setTimeout(function() { throw error; }, 1);
	                }
	            }
	
	            /**********************
	               Promise Resolving
	            **********************/
	
	            /* Note: Infinite loops don't return promises. */
	            if (resolver && opts.loop !== true) {
	                resolver(elements);
	            }
	
	            /****************************
	               Option: Loop (Infinite)
	            ****************************/
	
	            if (Data(element) && opts.loop === true && !isStopped) {
	                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
	                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
	                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 360;
	                    }
	
	                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 100;
	                    }
	                });
	
	                Velocity(element, "reverse", { loop: true, delay: opts.delay });
	            }
	
	            /***************
	               Dequeueing
	            ***************/
	
	            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
	            if (opts.queue !== false) {
	                $.dequeue(element, opts.queue);
	            }
	        }
	
	        /************************
	           Calls Array Cleanup
	        ************************/
	
	        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
	        Velocity.State.calls[callIndex] = false;
	
	        /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */
	        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
	            if (Velocity.State.calls[j] !== false) {
	                remainingCallsExist = true;
	
	                break;
	            }
	        }
	
	        if (remainingCallsExist === false) {
	            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
	            Velocity.State.isTicking = false;
	
	            /* Clear the calls array so that its length is reset. */
	            delete Velocity.State.calls;
	            Velocity.State.calls = [];
	        }
	    }
	
	    /******************
	        Frameworks
	    ******************/
	
	    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
	    global.Velocity = Velocity;
	
	    if (global !== window) {
	        /* Assign the element function to Velocity's core animate() method. */
	        global.fn.velocity = animate;
	        /* Assign the object function's defaults to Velocity's global defaults object. */
	        global.fn.velocity.defaults = Velocity.defaults;
	    }
	
	    /***********************
	       Packaged Redirects
	    ***********************/
	
	    /* slideUp, slideDown */
	    $.each([ "Down", "Up" ], function(i, direction) {
	        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                begin = opts.begin,
	                complete = opts.complete,
	                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	                inlineValues = {};
	
	            if (opts.display === undefined) {
	                /* Show the element before slideDown begins and hide the element after slideUp completes. */
	                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
	                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
	            }
	
	            opts.begin = function() {
	                /* If the user passed in a begin callback, fire it now. */
	                begin && begin.call(elements, elements);
	
	                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
	                for (var property in computedValues) {
	                    inlineValues[property] = element.style[property];
	
	                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */
	                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);
	                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
	                }
	
	                /* Force vertical overflow content to clip so that sliding works as expected. */
	                inlineValues.overflow = element.style.overflow;
	                element.style.overflow = "hidden";
	            }
	
	            opts.complete = function() {
	                /* Reset element to its pre-slide inline values once its slide animation is complete. */
	                for (var property in inlineValues) {
	                    element.style[property] = inlineValues[property];
	                }
	
	                /* If the user passed in a complete callback, fire it now. */
	                complete && complete.call(elements, elements);
	                promiseData && promiseData.resolver(elements);
	            };
	
	            Velocity(element, computedValues, opts);
	        };
	    });
	
	    /* fadeIn, fadeOut */
	    $.each([ "In", "Out" ], function(i, direction) {
	        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
	                originalComplete = opts.complete;
	
	            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */
	            if (elementsIndex !== elementsSize - 1) {
	                opts.complete = opts.begin = null;
	            } else {
	                opts.complete = function() {
	                    if (originalComplete) {
	                        originalComplete.call(elements, elements);
	                    }
	
	                    promiseData && promiseData.resolver(elements);
	                }
	            }
	
	            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
	            /* Note: We allow users to pass in "null" to skip display setting altogether. */
	            if (opts.display === undefined) {
	                opts.display = (direction === "In" ? "auto" : "none");
	            }
	
	            Velocity(this, propertiesMap, opts);
	        };
	    });
	
	    return Velocity;
	}((window.jQuery || window.Zepto || window), window, document);
	}));
	
	/******************
	   Known Issues
	******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  var vue // lazy bind
	
	  var asyncData = {
	    created: function () {
	      if (!vue) {
	        console.warn('[vue-async-data] not installed!')
	        return
	      }
	      if (this.$options.asyncData) {
	        if (this._defineMeta) {
	          // 0.12 compat
	          this._defineMeta('$loadingAsyncData', true)
	        } else {
	          // ^1.0.0-alpha
	          vue.util.defineReactive(this, '$loadingAsyncData', true)
	        }
	      }
	    },
	    compiled: function () {
	      this.reloadAsyncData()
	    },
	    methods: {
	      reloadAsyncData: function () {
	        var load = this.$options.asyncData
	        if (load) {
	          var self = this
	          var resolve = function (data) {
	            if (data) {
	              for (var key in data) {
	                self.$set(key, data[key])
	              }
	            }
	            self.$loadingAsyncData = false
	            self.$emit('async-data')
	          }
	          var reject = function (reason) {
	            var msg = '[vue] async data load failed'
	            if (reason instanceof Error) {
	              console.warn(msg)
	              throw reason
	            } else {
	              console.warn(msg + ': ' + reason)
	            }
	          }
	          this.$loadingAsyncData = true
	          var res = load.call(this, resolve, reject)
	          if (res && typeof res.then === 'function') {
	            res.then(resolve, reject)
	          }
	        }
	      }
	    }
	  }
	
	  var api = {
	    mixin: asyncData,
	    install: function (Vue, options) {
	      vue = Vue
	      Vue.options = Vue.util.mergeOptions(Vue.options, asyncData)
	    }
	  }
	
	  if(true) {
	    module.exports = api
	  } else if(typeof define === 'function' && define.amd) {
	    define(function () { return api })
	  } else if (typeof window !== 'undefined') {
	    window.VueAsyncData = api
	  }
	})()


/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "# Steps\n\n---\n\n引导用户按照流程完成任务的导航条。\n\n## 何时使用\n\n当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。\n\n## 组件演示\n\n<demo>\n  <example title=\"简单的步骤条\"></example>\n  <example title=\"迷你版\"></example>\n  <example title=\"带ICON图标的步骤条\"></example>\n  <example title=\"切换到下一步\"></example>\n  <example title=\"竖直方向的小型步骤条\"></example>\n  <example title=\"自定义状态\"></example>\n</demo>\n\n## API\n\n```js\n<v-steps>\n  <v-step title=\"第一步\"></v-step>\n  <v-step title=\"第二步\"></v-step>\n  <v-step title=\"第三步\"></v-step>\n</v-steps>\n```\n\n### Steps\n\n整体步骤条。\n\n| 参数      | 说明                                     | 类型       |  可选值 |默认值 |\n|-----------|------------------------------------------|------------|-------|--------|\n|  current | 可选参数，指定当前处理正在执行状态的步骤，从0开始记数。在子Step元素中，可以通过status属性覆盖状态。  | number | 无  | 0 |\n|  size | 可选参数，指定大小（目前只支持普通和迷你两种大小）。 | string    |  small, default | default    |\n|  direction | 可选参数，指定步骤条方向（目前支持水平和竖直两种方向，默认水平方向）。 | string    |  vertical |  无   |\n|  maxDescriptionWidth | 可选参数，指定步骤的详细描述文字的最大宽度。 | number | 无 | 100 |\n\n### Steps.Step\n\n步骤条内的每一个步。\n\n| 参数      | 说明                                     | 类型       |  可选值 |默认值 |\n|-----------|------------------------------------------|------------|-------|--------|\n|  status | 可选参数，指定状态。当不配置该属性时，会使用父Steps元素的current来自动指定状态。 | string    |  wait, process, finish | wait |\n|  title   | 必要参数，标题。 | string/jsx | 无 | 无     |\n|  description | 可选参数，步骤的详情描述。 | string/jsx | 无 | 空  |\n|  icon    | 可选参数，步骤的Icon。如果不指定，则使用默认的样式。 | string/jsx | 无  | 空 |";

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\" class=\"clearfix\">\n  <a class=\"logo\" href=\"..\">\n    <img width=\"60\" src=\"https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg\">\n    Vue Antd\n  </a>\n  <nav class=\"nav\">\n    <ul>\n      <li :class=\"{current: isHomePage}\">\n        <a href=\"..\" data-no-instant=\"\" >首页</a>\n      </li>\n      <li :class=\"{current: isComponentsPage}\">\n        <a v-link=\"{path: '/components'}\">Components</a>\n      </li>\n      <li>\n        <a target=\"_blank\" title=\"Please star me and fork me!\" alt=\"star and fork\" href=\"https://github.com/okoala/vue-antd\">Github</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n<router-view class=\"view\"></router-view>";

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<div class=\"main-wrapper\">\n  <aside class=\"aside-container\">\n    <ul>\n      <li>\n        <a v-link=\"{path: '/docs/introduce'}\" class=\"\">\n          Ant Design of Vue\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <a v-link=\"{path: '/docs/getting-started'}\" class=\"\">\n          快速上手\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <a v-link=\"{path: '/docs/download'}\" class=\"\">\n          下载\n          <span class=\"chinese\"></span>\n        </a>\n      </li>\n      <li>\n        <h4>Components</h4>\n        <ul>\n          <li class=\"type-divider\">基本</li>\n          <li v-for=\"component in componentsMenu.base\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">表单</li>\n          <li v-for=\"component in componentsMenu.form\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">展示</li>\n          <li v-for=\"component in componentsMenu.show\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">导航</li>\n          <li v-for=\"component in componentsMenu.pagination\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n          <li class=\"type-divider\">其他</li>\n          <li v-for=\"component in componentsMenu.other\">\n            <a v-link=\"{path: '/components/' + component.name}\">\n              {{component.name | Upper}}\n              <span class=\"chinese\">{{component.desc}}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </aside>\n  <section class=\"main-container\">\n    <router-view class=\"view xRightMatrix\"></router-view>\n  </section>\n</div>";

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "404 Not Found.";

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "<div v-show='!closed'>\n    <div v-if='description'>\n      <div\n        data-show={{closeing}}\n        :class=\"'ant-alert-with-description ant-alert-with-description-' + type + closeName\">\n        <i :class=\"'anticon ' + iconClass\"></i>\n        <p class='ant-alert-with-description-message'>\n          {{message}}\n        </p>\n        <span class='ant-alert-with-description-description'>\n          {{description}}\n        </span>\n        <a\n          v-if='closable'\n          @click='_handleClose'\n          class='ant-alert-with-description-close-icon'>\n          <span class='ant-alert-with-description-close-icon-x'></span>\n        </a>\n      </div>\n    </div>\n    <div v-else>\n      <div v-if='closeText'>\n        <div\n          data-show={{closing}}\n          :class=\"'ant-alert ant-alert-' + type + closeName\">\n          <i :class=\"'anticon ' + iconClass\"></i>\n          <span class='ant-alert-description'>{{message}}</span>\n          <span\n            @click='_handleClose'\n            class='ant-alert-close-text'>{{closeText}}</span>\n        </div>\n      </div>\n      <div v-else>\n        <div\n          data-show={{closing}}\n          :class=\"'ant-alert ant-alert-' + type + closeName\">\n          <i :class=\"'anticon ' + iconClass\"></i>\n          <span class='ant-alert-description'>{{message}}</span>\n          <a\n            v-if='closable'\n            @click='_handleClose'\n            class='ant-alert-close-icon'>\n            <span class='ant-alert-close-icon-x'></span>\n          </a>\n        </div>\n      </div>\n    </div>\n</div>";

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<span v-if='dot' :class=\"prefixCls\">\n  <slot></slot>\n  <sup :class=\"prefixCls + '-dot'\"></sup>\n</span>\n<span v-else :class=\"prefixCls\">\n  <slot></slot>\n  <sup v-if='count' :class=\"prefixCls + '-count'\">{{count | short}}</sup>\n</span>";

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls\">\n  <slot></slot>\n</div>";

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<span>\n  <a v-if='href' :href=\"href\" :class=\"prefixCls + '-link'\">\n    <slot></slot>\n  </a>\n  <span v-else :class=\"prefixCls + '-link'\">\n    <slot></slot>\n  </span>\n  <span :class=\"prefixCls + '-slash'\">/</span>\n</span>";

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<button :type=\"htmlType || 'button'\" :class=\"btClasses\" @click=\"onclick\">\n  <slot></slot>\n</button>";

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"btgClasses\">\n  <slot></slot>\n</div>";

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClasses\">\n  <span :class=\"ckClasses\" :style=\"style\">\n    <span :class=\"prefixCls + '-inner'\"></span>\n    <input\n      type=\"checkbox\"\n      :disabled=\"disabled\"\n      :defaultChecked=\"!!defaultChecked\"\n      :value=\"value\"\n      :class=\"prefixCls + '-input'\"\n      :checked=\"!!checked\"\n      @change=\"_handleChange\"/>\n  </span>\n  <slot></slot>\n</label>";

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"iconClasses\">\n  <slot></slot>\n</i>";

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClasses\">\n  <span :class=\"radioClasses\">\n    <span :class=\"prefixCls + '-inner'\"></span>\n    <input\n      type=\"radio\"\n      :disabled=\"disabled\"\n      :value=\"value\"\n      :checked=\"!!checked\"\n      :class=\"prefixCls + '-input'\"\n      @change=\"_handleChange\">\n  </span>\n  <slot>Radio</slot>\n</label>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls\">\n  <v-radio v-for=\"radio in radios\" :class-name=\"radioClasses\" :value=\"radio.value\" :on-change=\"_onRadioChange.bind(radio, $index)\" :checked=\"value === radio.value\"><span>{{radio.name}}</span></v-radio>\n</div>";

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"wrapClasses\" @click=\"_toggle\">\n  <span :class=\"prefixCls + '-inner'\">\n    <slot v-if=\"checked\" name=\"checkedChildren\"></slot>\n    <slot v-if=\"!checked\" name=\"unCheckedChildren\"></slot>\n  </span>\n</span>";

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<div class=\"clearfix\" :class=\"{'ant-table-empty': isEmpty}\">\n  <div :class=\"tableClass\" :style=\"style\">\n    <div v-if=\"useFixedHeader\" :class=\"prefixCls + '-header'\">\n      <table>\n        <colgroup>\n          <col v-if=\"expandIconAsCell\" :class=\"prefixCls + '-expand-icon-col'\" key=\"rc-table-expand-icon-col\"></col>\n          <col v-for=\"col in columns\" :style=\"{'width': col.width}\"></col>\n        </colgroup>\n        <thead :class=\"prefixCls + '-thead'\">\n          <tr>\n            <th v-for=\"col in columns\">{{col.title}}</th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n    <div :class=\"prefixCls + '-body'\" :style=\"bodyStyle\">\n      <table>\n        <colgroup>\n          <col v-if=\"expandIconAsCell\" :class=\"prefixCls + '-expand-icon-col'\" key=\"rc-table-expand-icon-col\"></col>\n          <col v-for=\"col in columns\" :style=\"{'width': col.width}\"></col>\n        </colgroup>\n        <thead :class=\"prefixCls + '-thead'\">\n          <tr>\n            <th v-for=\"col in columns\">{{col.title}}</th>\n          </tr>\n        </thead>\n        <tbody :class=\"prefixCls + '-tbody'\" v-el:render>\n          <tr v-for=\"data in dataSource\" :class=\"prefixCls + classString\">\n            <td v-for=\"col in columns\">{{{col.dataIndex ? data[col.dataIndex] : ''}}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>";

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"!closed\" :class=\"wrapClasses\">\n  <a :class=\"prefixCls + '-text'\" :href=\"href\"><slot></slot></a>\n  <v-icon v-if=\"closable\" type=\"cross\" @click=\"_close\"></v-icon>\n</div>";

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "<span role=\"button\"\n      tabIndex=\"0\"\n      @click=\"_onClick\"\n      @keydown=\"_onKeyDown\"\n      @drop=\"_onFileDrop\"\n      @dragover=\"_onFileDrop\">\n  <input v-el:file\n         type=\"file\"\n         style=\"display: none\"\n         :accept=\"accept\"\n         :multiple=\"multiple\"\n         @change=\"_onChange\">\n  <slot></slot>\n</span>";

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"prefixCls + '-list'\">\n  <div v-for=\"file in items\" :class=\"prefixCls + '-list-item'\" :key=\"file.uid\">\n    <v-icon v-if=\"file.status === 'done'\" type=\"check\" :class=\"prefixCls + '-success-icon'\"></v-icon>\n    <v-icon v-if=\"file.status !== 'done'\" type=\"loading\"></v-icon>\n\n    <a v-if=\"file.url\" :class=\"prefixCls + '-item-name'\" :href=\"file.url\" target=\"_blank\">{{file.name}}</a>\n    <b v-if=\"!file.url\" :class=\"prefixCls + '-item-name'\">{{file.name}}</b>\n\n    <v-icon type=\"cross\" @click=\"_handleClose(file)\"></v-icon>\n  </div>\n</div>";

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapClasses\">\n  <ajax-upload :action=\"action\"\n              :name=\"name\"\n              :multiple=\"multiple\"\n              :on-start=\"_onStart\"\n              :on-progress=\"_onProgress\"\n              :on-success=\"_onSuccess\"\n              :on-error=\"_onError\"\n              :before-upload=\"beforeUpload\">\n    <div :class=\"containerClasses\">\n      <slot></slot>\n    </div>\n  </ajax-upload>\n</div>\n<upload-list :items=\"fileList\" :on-remove=\"_handleManualRemove\" ></upload-list>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(106)
	module.exports.template = __webpack_require__(180)


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(208)
	module.exports = __webpack_require__(107)
	module.exports.template = __webpack_require__(181)


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108)
	module.exports.template = __webpack_require__(182)


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(209)
	module.exports = __webpack_require__(109)
	module.exports.template = __webpack_require__(183)


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110)
	module.exports.template = __webpack_require__(184)


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(111)
	module.exports.template = __webpack_require__(185)


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(112)
	module.exports.template = __webpack_require__(186)


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	module.exports.template = __webpack_require__(215)


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(114)
	module.exports.template = __webpack_require__(187)


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(115)
	module.exports.template = __webpack_require__(188)


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(116)
	module.exports.template = __webpack_require__(189)


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(117)
	module.exports.template = __webpack_require__(190)


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(177)
	module.exports = __webpack_require__(118)
	module.exports.template = __webpack_require__(216)


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(210)
	module.exports = __webpack_require__(119)
	module.exports.template = __webpack_require__(217)


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(191)


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(192)


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(193)


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120)
	module.exports.template = __webpack_require__(218)


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(121)
	module.exports.template = __webpack_require__(219)


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(211)
	module.exports = __webpack_require__(122)
	module.exports.template = __webpack_require__(220)


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(123)
	module.exports.template = __webpack_require__(221)


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(124)
	module.exports.template = __webpack_require__(222)


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(125)
	module.exports.template = __webpack_require__(223)


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(126)
	module.exports.template = __webpack_require__(224)


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127)
	module.exports.template = __webpack_require__(225)


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(128)
	module.exports.template = __webpack_require__(226)


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130)
	module.exports.template = __webpack_require__(228)


/***/ },
/* 263 */
/***/ function(module, exports) {



/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131)
	module.exports.template = __webpack_require__(229)


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(132)
	module.exports.template = __webpack_require__(230)


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133)
	module.exports.template = __webpack_require__(231)


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134)
	module.exports.template = __webpack_require__(232)


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(135)
	module.exports.template = __webpack_require__(233)


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136)
	module.exports.template = __webpack_require__(234)


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137)
	module.exports.template = __webpack_require__(235)


/***/ },
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */
	
	var xhr = __webpack_require__(278);
	var jsonp = __webpack_require__(276);
	var Promise = __webpack_require__(40);
	
	module.exports = function (_) {
	
	    var originUrl = _.url.parse(location.href);
	    var jsonType = {'Content-Type': 'application/json;charset=utf-8'};
	
	    function Http(url, options) {
	
	        var promise;
	
	        if (_.isPlainObject(url)) {
	            options = url;
	            url = '';
	        }
	
	        options = _.extend({url: url}, options);
	        options = _.extend(true, {},
	            Http.options, this.options, options
	        );
	
	        if (options.crossOrigin === null) {
	            options.crossOrigin = crossOrigin(options.url);
	        }
	
	        options.method = options.method.toUpperCase();
	        options.headers = _.extend({}, Http.headers.common,
	            !options.crossOrigin ? Http.headers.custom : {},
	            Http.headers[options.method.toLowerCase()],
	            options.headers
	        );
	
	        if (_.isPlainObject(options.data) && /^(GET|JSONP)$/i.test(options.method)) {
	            _.extend(options.params, options.data);
	            delete options.data;
	        }
	
	        if (options.emulateHTTP && !options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
	            options.headers['X-HTTP-Method-Override'] = options.method;
	            options.method = 'POST';
	        }
	
	        if (options.emulateJSON && _.isPlainObject(options.data)) {
	            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            options.data = _.url.params(options.data);
	        }
	
	        if (_.isObject(options.data) && /FormData/i.test(options.data.toString())) {
	            delete options.headers['Content-Type'];
	        }
	
	        if (_.isPlainObject(options.data)) {
	            options.data = JSON.stringify(options.data);
	        }
	
	        promise = (options.method == 'JSONP' ? jsonp : xhr).call(this.vm, _, options);
	        promise = extendPromise(promise.then(transformResponse, transformResponse), this.vm);
	
	        if (options.success) {
	            promise = promise.success(options.success);
	        }
	
	        if (options.error) {
	            promise = promise.error(options.error);
	        }
	
	        return promise;
	    }
	
	    function extendPromise(promise, vm) {
	
	        promise.success = function (fn) {
	
	            return extendPromise(promise.then(function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);
	
	        };
	
	        promise.error = function (fn) {
	
	            return extendPromise(promise.then(undefined, function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);
	
	        };
	
	        promise.always = function (fn) {
	
	            var cb = function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            };
	
	            return extendPromise(promise.then(cb, cb), vm);
	        };
	
	        return promise;
	    }
	
	    function transformResponse(response) {
	
	        try {
	            response.data = JSON.parse(response.responseText);
	        } catch (e) {
	            response.data = response.responseText;
	        }
	
	        return response.ok ? response : Promise.reject(response);
	    }
	
	    function crossOrigin(url) {
	
	        var requestUrl = _.url.parse(url);
	
	        return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
	    }
	
	    Http.options = {
	        method: 'get',
	        params: {},
	        data: '',
	        xhr: null,
	        jsonp: 'callback',
	        beforeSend: null,
	        crossOrigin: null,
	        emulateHTTP: false,
	        emulateJSON: false
	    };
	
	    Http.headers = {
	        put: jsonType,
	        post: jsonType,
	        patch: jsonType,
	        delete: jsonType,
	        common: {'Accept': 'application/json, text/plain, */*'},
	        custom: {'X-Requested-With': 'XMLHttpRequest'}
	    };
	
	    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {
	
	        Http[method] = function (url, data, success, options) {
	
	            if (_.isFunction(data)) {
	                options = success;
	                success = data;
	                data = undefined;
	            }
	
	            return this(url, _.extend({method: method, data: data, success: success}, options));
	        };
	    });
	
	    return _.http = Http;
	};


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */
	
	function install(Vue) {
	
	    var _ = __webpack_require__(277)(Vue);
	
	    Vue.url = __webpack_require__(280)(_);
	    Vue.http = __webpack_require__(274)(_);
	    Vue.resource = __webpack_require__(279)(_);
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function () {
	                return this._url || (this._url = _.options(Vue.url, this, this.$options.url));
	            }
	        },
	
	        $http: {
	            get: function () {
	                return this._http || (this._http = _.options(Vue.http, this, this.$options.http));
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        }
	
	    });
	}
	
	if (window.Vue) {
	    Vue.use(install);
	}
	
	module.exports = install;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP request.
	 */
	
	var Promise = __webpack_require__(40);
	
	module.exports = function (_, options) {
	
	    var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {}, script, body;
	
	    options.params[options.jsonp] = callback;
	
	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, {}, options);
	    }
	
	    return new Promise(function (resolve, reject) {
	
	        script = document.createElement('script');
	        script.src = _.url(options);
	        script.type = 'text/javascript';
	        script.async = true;
	
	        window[callback] = function (data) {
	            body = data;
	        };
	
	        var handler = function (event) {
	
	            delete window[callback];
	            document.body.removeChild(script);
	
	            if (event.type === 'load' && !body) {
	                event.type = 'error';
	            }
	
	            response.ok = event.type !== 'error';
	            response.status = response.ok ? 200 : 404;
	            response.responseText = body ? body : event.type;
	
	            (response.ok ? resolve : reject)(response);
	        };
	
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	
	};


/***/ },
/* 277 */
/***/ function(module, exports) {

	/**
	 * Utility functions.
	 */
	
	module.exports = function (Vue) {
	
	    var _ = Vue.util.extend({}, Vue.util);
	
	    _.isString = function (value) {
	        return typeof value === 'string';
	    };
	
	    _.isFunction = function (value) {
	        return typeof value === 'function';
	    };
	
	    _.options = function (fn, obj, options) {
	
	        options = options || {};
	
	        if (_.isFunction(options)) {
	            options = options.call(obj);
	        }
	
	        return _.extend(fn.bind({vm: obj, options: options}), fn, {options: options});
	    };
	
	    _.each = function (obj, iterator) {
	
	        var i, key;
	
	        if (typeof obj.length == 'number') {
	            for (i = 0; i < obj.length; i++) {
	                iterator.call(obj[i], obj[i], i);
	            }
	        } else if (_.isObject(obj)) {
	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    iterator.call(obj[key], obj[key], key);
	                }
	            }
	        }
	
	        return obj;
	    };
	
	    _.extend = function (target) {
	
	        var array = [], args = array.slice.call(arguments, 1), deep;
	
	        if (typeof target == 'boolean') {
	            deep = target;
	            target = args.shift();
	        }
	
	        args.forEach(function (arg) {
	            extend(target, arg, deep);
	        });
	
	        return target;
	    };
	
	    function extend(target, source, deep) {
	        for (var key in source) {
	            if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
	                if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
	                    target[key] = {};
	                }
	                if (_.isArray(source[key]) && !_.isArray(target[key])) {
	                    target[key] = [];
	                }
	                extend(target[key], source[key], deep);
	            } else if (source[key] !== undefined) {
	                target[key] = source[key];
	            }
	        }
	    }
	
	    return _;
	};


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp request.
	 */
	
	var Promise = __webpack_require__(40);
	var XDomain = window.XDomainRequest;
	
	module.exports = function (_, options) {
	
	    var request = new XMLHttpRequest(), promise;
	
	    if (XDomain && options.crossOrigin) {
	        request = new XDomainRequest(); options.headers = {};
	    }
	
	    if (_.isPlainObject(options.xhr)) {
	        _.extend(request, options.xhr);
	    }
	
	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, request, options);
	    }
	
	    promise = new Promise(function (resolve, reject) {
	
	        request.open(options.method, _.url(options), true);
	
	        _.each(options.headers, function (value, header) {
	            request.setRequestHeader(header, value);
	        });
	
	        var handler = function (event) {
	
	            request.ok = event.type === 'load';
	
	            if (request.ok && request.status) {
	                request.ok = request.status >= 200 && request.status < 300;
	            }
	
	            (request.ok ? resolve : reject)(request);
	        };
	
	        request.onload = handler;
	        request.onabort = handler;
	        request.onerror = handler;
	
	        request.send(options.data);
	    });
	
	    return promise;
	};


/***/ },
/* 279 */
/***/ function(module, exports) {

	/**
	 * Service for interacting with RESTful services.
	 */
	
	module.exports = function (_) {
	
	    function Resource(url, params, actions) {
	
	        var self = this, resource = {};
	
	        actions = _.extend({},
	            Resource.actions,
	            actions
	        );
	
	        _.each(actions, function (action, name) {
	
	            action = _.extend(true, {url: url, params: params || {}}, action);
	
	            resource[name] = function () {
	                return (self.$http || _.http)(opts(action, arguments));
	            };
	        });
	
	        return resource;
	    }
	
	    function opts(action, args) {
	
	        var options = _.extend({}, action), params = {}, data, success, error;
	
	        switch (args.length) {
	
	            case 4:
	
	                error = args[3];
	                success = args[2];
	
	            case 3:
	            case 2:
	
	                if (_.isFunction(args[1])) {
	
	                    if (_.isFunction(args[0])) {
	
	                        success = args[0];
	                        error = args[1];
	
	                        break;
	                    }
	
	                    success = args[1];
	                    error = args[2];
	
	                } else {
	
	                    params = args[0];
	                    data = args[1];
	                    success = args[2];
	
	                    break;
	                }
	
	            case 1:
	
	                if (_.isFunction(args[0])) {
	                    success = args[0];
	                } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                    data = args[0];
	                } else {
	                    params = args[0];
	                }
	
	                break;
	
	            case 0:
	
	                break;
	
	            default:
	
	                throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	        }
	
	        options.data = data;
	        options.params = _.extend({}, options.params, params);
	
	        if (success) {
	            options.success = success;
	        }
	
	        if (error) {
	            options.error = error;
	        }
	
	        return options;
	    }
	
	    Resource.actions = {
	
	        get: {method: 'GET'},
	        save: {method: 'POST'},
	        query: {method: 'GET'},
	        update: {method: 'PUT'},
	        remove: {method: 'DELETE'},
	        delete: {method: 'DELETE'}
	
	    };
	
	    return _.resource = Resource;
	};


/***/ },
/* 280 */
/***/ function(module, exports) {

	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	module.exports = function (_) {
	
	    function Url(url, params) {
	
	        var urlParams = {}, queryParams = {}, options = url, query;
	
	        if (!_.isPlainObject(options)) {
	            options = {url: url, params: params};
	        }
	
	        options = _.extend(true, {},
	            Url.options, this.options, options
	        );
	
	        url = options.url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {
	
	            if (options.params[name]) {
	                urlParams[name] = true;
	                return slash + encodeUriSegment(options.params[name]);
	            }
	
	            return '';
	        });
	
	        if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
	            url = options.root + '/' + url;
	        }
	
	        _.each(options.params, function (value, key) {
	            if (!urlParams[key]) {
	                queryParams[key] = value;
	            }
	        });
	
	        query = Url.params(queryParams);
	
	        if (query) {
	            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	        }
	
	        return url;
	    }
	
	    /**
	     * Url options.
	     */
	
	    Url.options = {
	        url: '',
	        root: null,
	        params: {}
	    };
	
	    /**
	     * Encodes a Url parameter string.
	     *
	     * @param {Object} obj
	     */
	
	    Url.params = function (obj) {
	
	        var params = [];
	
	        params.add = function (key, value) {
	
	            if (_.isFunction (value)) {
	                value = value();
	            }
	
	            if (value === null) {
	                value = '';
	            }
	
	            this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value));
	        };
	
	        serialize(params, obj);
	
	        return params.join('&');
	    };
	
	    /**
	     * Parse a URL and return its components.
	     *
	     * @param {String} url
	     */
	
	    Url.parse = function (url) {
	
	        if (ie) {
	            el.href = url;
	            url = el.href;
	        }
	
	        el.href = url;
	
	        return {
	            href: el.href,
	            protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	            port: el.port,
	            host: el.host,
	            hostname: el.hostname,
	            pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	            search: el.search ? el.search.replace(/^\?/, '') : '',
	            hash: el.hash ? el.hash.replace(/^#/, '') : ''
	        };
	    };
	
	    function serialize(params, obj, scope) {
	
	        var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;
	
	        _.each(obj, function (value, key) {
	
	            hash = _.isObject(value) || _.isArray(value);
	
	            if (scope) {
	                key = scope + '[' + (plain || hash ? key : '') + ']';
	            }
	
	            if (!scope && array) {
	                params.add(value.name, value.value);
	            } else if (hash) {
	                serialize(params, value, key);
	            } else {
	                params.add(key, value);
	            }
	        });
	    }
	
	    function encodeUriSegment(value) {
	
	        return encodeUriQuery(value, true).
	            replace(/%26/gi, '&').
	            replace(/%3D/gi, '=').
	            replace(/%2B/gi, '+');
	    }
	
	    function encodeUriQuery(value, spaces) {
	
	        return encodeURIComponent(value).
	            replace(/%40/gi, '@').
	            replace(/%3A/gi, ':').
	            replace(/%24/g, '$').
	            replace(/%2C/gi, ',').
	            replace(/%20/g, (spaces ? '%20' : '+'));
	    }
	
	    return _.url = Url;
	};


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var trailingSlashRE = /\/$/;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	// install v-link, which provides navigation support for
	// HTML5 history mode
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	
	  Vue.directive('link', {
	
	    bind: function bind() {
	      var _this = this;
	
	      var vm = this.vm;
	      /* istanbul ignore if */
	      if (!vm.$route) {
	        _util.warn('v-link can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      var router = vm.$route.router;
	      this.handler = function (e) {
	        // don't redirect with control keys
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        if (e.button !== 0) return;
	
	        var target = _this.target;
	        if (_this.el.tagName === 'A' || e.target === _this.el) {
	          // v-link on <a v-link="'path'">
	          e.preventDefault();
	          if (target != null) {
	            router.go(target);
	          }
	        } else {
	          // v-link delegate on <div v-link>
	          var el = e.target;
	          while (el && el.tagName !== 'A' && el !== _this.el) {
	            el = el.parentNode;
	          }
	          if (!el || el.tagName !== 'A' || !el.href) return;
	          if (sameOrigin(el)) {
	            e.preventDefault();
	            router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      };
	      this.el.addEventListener('click', this.handler);
	      // manage active link class
	      this.unwatch = vm.$watch('$route.path', _.bind(this.updateClasses, this));
	    },
	
	    update: function update(path) {
	      var router = this.vm.$route.router;
	      var append = undefined;
	      this.target = path;
	      if (_.isObject(path)) {
	        append = path.append;
	        this.exact = path.exact;
	        this.prevActiveClass = this.activeClass;
	        this.activeClass = path.activeClass;
	      }
	      path = this.path = router._stringifyPath(path);
	      this.activeRE = path && !this.exact ? new RegExp('^' + path.replace(/\/$/, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      this.updateClasses(this.vm.$route.path);
	      var isAbsolute = path.charAt(0) === '/';
	      // do not format non-hash relative paths
	      var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, append) : path;
	      if (this.el.tagName === 'A') {
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      }
	    },
	
	    updateClasses: function updateClasses(path) {
	      var el = this.el;
	      var dest = this.path;
	      var router = this.vm.$route.router;
	      var activeClass = this.activeClass || router._linkActiveClass;
	      // clear old class
	      if (this.prevActiveClass !== activeClass) {
	        _.removeClass(el, this.prevActiveClass);
	      }
	      // add new class
	      if (this.exact) {
	        if (dest === path ||
	        // also allow additional trailing slash
	        dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	          _.addClass(el, activeClass);
	        } else {
	          _.removeClass(el, activeClass);
	        }
	      } else {
	        if (this.activeRE && this.activeRE.test(path)) {
	          _.addClass(el, activeClass);
	        } else {
	          _.removeClass(el, activeClass);
	        }
	      }
	    },
	
	    unbind: function unbind() {
	      this.el.removeEventListener('click', this.handler);
	      this.unwatch && this.unwatch();
	    }
	  });
	
	  function sameOrigin(link) {
	    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var _pipeline = __webpack_require__(79);
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	  var componentDef =
	  // 0.12
	  Vue.directive('_component') ||
	  // 1.0
	  Vue.internalDirectives.component;
	  // <router-view> extends the internal component directive
	  var viewDef = _.extend({}, componentDef);
	
	  // with some overrides
	  _.extend(viewDef, {
	
	    _isRouterView: true,
	
	    bind: function bind() {
	      var route = this.vm.$route;
	      /* istanbul ignore if */
	      if (!route) {
	        _util.warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      // force dynamic directive so v-component doesn't
	      // attempt to build right now
	      this._isDynamicLiteral = true;
	      // finally, init by delegating to v-component
	      componentDef.bind.call(this);
	
	      // all we need to do here is registering this view
	      // in the router. actual component switching will be
	      // managed by the pipeline.
	      var router = this.router = route.router;
	      router._views.unshift(this);
	
	      // note the views are in reverse order.
	      var parentView = router._views[1];
	      if (parentView) {
	        // register self as a child of the parent view,
	        // instead of activating now. This is so that the
	        // child's activate hook is called after the
	        // parent's has resolved.
	        parentView.childView = this;
	      }
	
	      // handle late-rendered view
	      // two possibilities:
	      // 1. root view rendered after transition has been
	      //    validated;
	      // 2. child view rendered after parent view has been
	      //    activated.
	      var transition = route.router._currentTransition;
	      if (!parentView && transition.done || parentView && parentView.activated) {
	        var depth = parentView ? parentView.depth + 1 : 0;
	        _pipeline.activate(this, transition, depth);
	      }
	    },
	
	    unbind: function unbind() {
	      this.router._views.$remove(this);
	      componentDef.unbind.call(this);
	    }
	  });
	
	  Vue.elementDirective('router-view', viewDef);
	};
	
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var AbstractHistory = (function () {
	  function AbstractHistory(_ref) {
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, AbstractHistory);
	
	    this.onChange = onChange;
	    this.currentPath = '/';
	  }
	
	  AbstractHistory.prototype.start = function start() {
	    this.onChange('/');
	  };
	
	  AbstractHistory.prototype.stop = function stop() {
	    // noop
	  };
	
	  AbstractHistory.prototype.go = function go(path, replace, append) {
	    path = this.currentPath = this.formatPath(path, append);
	    this.onChange(path);
	  };
	
	  AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	    return path.charAt(0) === '/' ? path : _util.resolvePath(this.currentPath, path, append);
	  };
	
	  return AbstractHistory;
	})();
	
	exports['default'] = AbstractHistory;
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var HashHistory = (function () {
	  function HashHistory(_ref) {
	    var hashbang = _ref.hashbang;
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, HashHistory);
	
	    this.hashbang = hashbang;
	    this.onChange = onChange;
	  }
	
	  HashHistory.prototype.start = function start() {
	    var self = this;
	    this.listener = function () {
	      var path = location.hash;
	      var raw = path.replace(/^#!?/, '');
	      // always
	      if (raw.charAt(0) !== '/') {
	        raw = '/' + raw;
	      }
	      var formattedPath = self.formatPath(raw);
	      if (formattedPath !== path) {
	        location.replace(formattedPath);
	        return;
	      }
	      var pathToMatch = decodeURI(path.replace(/^#!?/, '') + location.search);
	      self.onChange(pathToMatch);
	    };
	    window.addEventListener('hashchange', this.listener);
	    this.listener();
	  };
	
	  HashHistory.prototype.stop = function stop() {
	    window.removeEventListener('hashchange', this.listener);
	  };
	
	  HashHistory.prototype.go = function go(path, replace, append) {
	    path = this.formatPath(path, append);
	    if (replace) {
	      location.replace(path);
	    } else {
	      location.hash = path;
	    }
	  };
	
	  HashHistory.prototype.formatPath = function formatPath(path, append) {
	    var isAbsoloute = path.charAt(0) === '/';
	    var prefix = '#' + (this.hashbang ? '!' : '');
	    return isAbsoloute ? prefix + path : prefix + _util.resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	  };
	
	  return HashHistory;
	})();
	
	exports['default'] = HashHistory;
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var hashRE = /#.*$/;
	
	var HTML5History = (function () {
	  function HTML5History(_ref) {
	    var root = _ref.root;
	    var onChange = _ref.onChange;
	
	    _classCallCheck(this, HTML5History);
	
	    if (root) {
	      // make sure there's the starting slash
	      if (root.charAt(0) !== '/') {
	        root = '/' + root;
	      }
	      // remove trailing slash
	      this.root = root.replace(/\/$/, '');
	      this.rootRE = new RegExp('^\\' + this.root);
	    } else {
	      this.root = null;
	    }
	    this.onChange = onChange;
	    // check base tag
	    var baseEl = document.querySelector('base');
	    this.base = baseEl && baseEl.getAttribute('href');
	  }
	
	  HTML5History.prototype.start = function start() {
	    var _this = this;
	
	    this.listener = function (e) {
	      var url = decodeURI(location.pathname + location.search);
	      if (_this.root) {
	        url = url.replace(_this.rootRE, '');
	      }
	      _this.onChange(url, e && e.state, location.hash);
	    };
	    window.addEventListener('popstate', this.listener);
	    this.listener();
	  };
	
	  HTML5History.prototype.stop = function stop() {
	    window.removeEventListener('popstate', this.listener);
	  };
	
	  HTML5History.prototype.go = function go(path, replace, append) {
	    var url = this.formatPath(path, append);
	    if (replace) {
	      history.replaceState({}, '', url);
	    } else {
	      // record scroll position by replacing current state
	      history.replaceState({
	        pos: {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        }
	      }, '');
	      // then push new state
	      history.pushState({}, '', url);
	    }
	    var hashMatch = path.match(hashRE);
	    var hash = hashMatch && hashMatch[0];
	    path = url
	    // strip hash so it doesn't mess up params
	    .replace(hashRE, '')
	    // remove root before matching
	    .replace(this.rootRE, '');
	    this.onChange(path, null, hash);
	  };
	
	  HTML5History.prototype.formatPath = function formatPath(path, append) {
	    return path.charAt(0) === '/'
	    // absolute path
	    ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : _util.resolvePath(this.base || location.pathname, path, append);
	  };
	
	  return HTML5History;
	})();
	
	exports['default'] = HTML5History;
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _override = __webpack_require__(287);
	
	var _override2 = _interopRequireDefault(_override);
	
	var _routeRecognizer = __webpack_require__(80);
	
	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);
	
	var _route = __webpack_require__(288);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _transition = __webpack_require__(289);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _directivesView = __webpack_require__(282);
	
	var _directivesView2 = _interopRequireDefault(_directivesView);
	
	var _directivesLink = __webpack_require__(281);
	
	var _directivesLink2 = _interopRequireDefault(_directivesLink);
	
	var _historyAbstract = __webpack_require__(283);
	
	var _historyAbstract2 = _interopRequireDefault(_historyAbstract);
	
	var _historyHash = __webpack_require__(284);
	
	var _historyHash2 = _interopRequireDefault(_historyHash);
	
	var _historyHtml5 = __webpack_require__(285);
	
	var _historyHtml52 = _interopRequireDefault(_historyHtml5);
	
	var historyBackends = {
	  abstract: _historyAbstract2['default'],
	  hash: _historyHash2['default'],
	  html5: _historyHtml52['default']
	};
	
	// late bind during install
	var Vue = undefined;
	
	/**
	 * Router constructor
	 *
	 * @param {Object} [options]
	 */
	
	var Router = (function () {
	  function Router() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var _ref$hashbang = _ref.hashbang;
	    var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	    var _ref$abstract = _ref.abstract;
	    var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	    var _ref$history = _ref.history;
	    var history = _ref$history === undefined ? false : _ref$history;
	    var _ref$saveScrollPosition = _ref.saveScrollPosition;
	    var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	    var _ref$transitionOnLoad = _ref.transitionOnLoad;
	    var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	    var _ref$suppressTransitionError = _ref.suppressTransitionError;
	    var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	    var _ref$root = _ref.root;
	    var root = _ref$root === undefined ? null : _ref$root;
	    var _ref$linkActiveClass = _ref.linkActiveClass;
	    var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	
	    _classCallCheck(this, Router);
	
	    /* istanbul ignore if */
	    if (!Router.installed) {
	      throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	    }
	
	    // Vue instances
	    this.app = null;
	    this._views = [];
	    this._children = [];
	
	    // route recognizer
	    this._recognizer = new _routeRecognizer2['default']();
	    this._guardRecognizer = new _routeRecognizer2['default']();
	
	    // state
	    this._started = false;
	    this._startCb = null;
	    this._currentRoute = {};
	    this._currentTransition = null;
	    this._previousTransition = null;
	    this._notFoundHandler = null;
	    this._notFoundRedirect = null;
	    this._beforeEachHooks = [];
	    this._afterEachHooks = [];
	
	    // feature detection
	    this._hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	
	    // trigger transition on initial render?
	    this._rendered = false;
	    this._transitionOnLoad = transitionOnLoad;
	
	    // history mode
	    this._abstract = abstract;
	    this._hashbang = hashbang;
	    this._history = this._hasPushState && history;
	
	    // other options
	    this._saveScrollPosition = saveScrollPosition;
	    this._linkActiveClass = linkActiveClass;
	    this._suppress = suppressTransitionError;
	
	    // create history object
	    var inBrowser = Vue.util.inBrowser;
	    this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	    var History = historyBackends[this.mode];
	    var self = this;
	    this.history = new History({
	      root: root,
	      hashbang: this._hashbang,
	      onChange: function onChange(path, state, anchor) {
	        self._match(path, state, anchor);
	      }
	    });
	  }
	
	  /**
	   * Allow directly passing components to a route
	   * definition.
	   *
	   * @param {String} path
	   * @param {Object} handler
	   */
	
	  // API ===================================================
	
	  /**
	  * Register a map of top-level paths.
	  *
	  * @param {Object} map
	  */
	
	  Router.prototype.map = function map(_map) {
	    for (var route in _map) {
	      this.on(route, _map[route]);
	    }
	  };
	
	  /**
	   * Register a single root-level path
	   *
	   * @param {String} rootPath
	   * @param {Object} handler
	   *                 - {String} component
	   *                 - {Object} [subRoutes]
	   *                 - {Boolean} [forceRefresh]
	   *                 - {Function} [before]
	   *                 - {Function} [after]
	   */
	
	  Router.prototype.on = function on(rootPath, handler) {
	    if (rootPath === '*') {
	      this._notFound(handler);
	    } else {
	      this._addRoute(rootPath, handler, []);
	    }
	  };
	
	  /**
	   * Set redirects.
	   *
	   * @param {Object} map
	   */
	
	  Router.prototype.redirect = function redirect(map) {
	    for (var path in map) {
	      this._addRedirect(path, map[path]);
	    }
	  };
	
	  /**
	   * Set aliases.
	   *
	   * @param {Object} map
	   */
	
	  Router.prototype.alias = function alias(map) {
	    for (var path in map) {
	      this._addAlias(path, map[path]);
	    }
	  };
	
	  /**
	   * Set global before hook.
	   *
	   * @param {Function} fn
	   */
	
	  Router.prototype.beforeEach = function beforeEach(fn) {
	    this._beforeEachHooks.push(fn);
	  };
	
	  /**
	   * Set global after hook.
	   *
	   * @param {Function} fn
	   */
	
	  Router.prototype.afterEach = function afterEach(fn) {
	    this._afterEachHooks.push(fn);
	  };
	
	  /**
	   * Navigate to a given path.
	   * The path can be an object describing a named path in
	   * the format of { name: '...', params: {}, query: {}}
	   * The path is assumed to be already decoded, and will
	   * be resolved against root (if provided)
	   *
	   * @param {String|Object} path
	   * @param {Boolean} [replace]
	   */
	
	  Router.prototype.go = function go(path) {
	    var replace = false;
	    var append = false;
	    if (Vue.util.isObject(path)) {
	      replace = path.replace;
	      append = path.append;
	    }
	    path = this._stringifyPath(path);
	    if (path) {
	      this.history.go(path, replace, append);
	    }
	  };
	
	  /**
	   * Short hand for replacing current path
	   *
	   * @param {String} path
	   */
	
	  Router.prototype.replace = function replace(path) {
	    this.go({ path: path, replace: true });
	  };
	
	  /**
	   * Start the router.
	   *
	   * @param {VueConstructor} App
	   * @param {String|Element} container
	   * @param {Function} [cb]
	   */
	
	  Router.prototype.start = function start(App, container, cb) {
	    /* istanbul ignore if */
	    if (this._started) {
	      _util.warn('already started.');
	      return;
	    }
	    this._started = true;
	    this._startCb = cb;
	    if (!this.app) {
	      /* istanbul ignore if */
	      if (!App || !container) {
	        throw new Error('Must start vue-router with a component and a ' + 'root container.');
	      }
	      this._appContainer = container;
	      this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	    }
	    this.history.start();
	  };
	
	  /**
	   * Stop listening to route changes.
	   */
	
	  Router.prototype.stop = function stop() {
	    this.history.stop();
	    this._started = false;
	  };
	
	  // Internal methods ======================================
	
	  /**
	  * Add a route containing a list of segments to the internal
	  * route recognizer. Will be called recursively to add all
	  * possible sub-routes.
	  *
	  * @param {String} path
	  * @param {Object} handler
	  * @param {Array} segments
	  */
	
	  Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	    guardComponent(path, handler);
	    handler.path = path;
	    handler.fullPath = (segments.reduce(function (path, segment) {
	      return path + segment.path;
	    }, '') + path).replace('//', '/');
	    segments.push({
	      path: path,
	      handler: handler
	    });
	    this._recognizer.add(segments, {
	      as: handler.name
	    });
	    // add sub routes
	    if (handler.subRoutes) {
	      for (var subPath in handler.subRoutes) {
	        // recursively walk all sub routes
	        this._addRoute(subPath, handler.subRoutes[subPath],
	        // pass a copy in recursion to avoid mutating
	        // across branches
	        segments.slice());
	      }
	    }
	  };
	
	  /**
	   * Set the notFound route handler.
	   *
	   * @param {Object} handler
	   */
	
	  Router.prototype._notFound = function _notFound(handler) {
	    guardComponent('*', handler);
	    this._notFoundHandler = [{ handler: handler }];
	  };
	
	  /**
	   * Add a redirect record.
	   *
	   * @param {String} path
	   * @param {String} redirectPath
	   */
	
	  Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	    if (path === '*') {
	      this._notFoundRedirect = redirectPath;
	    } else {
	      this._addGuard(path, redirectPath, this.replace);
	    }
	  };
	
	  /**
	   * Add an alias record.
	   *
	   * @param {String} path
	   * @param {String} aliasPath
	   */
	
	  Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	    this._addGuard(path, aliasPath, this._match);
	  };
	
	  /**
	   * Add a path guard.
	   *
	   * @param {String} path
	   * @param {String} mappedPath
	   * @param {Function} handler
	   */
	
	  Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	    var _this = this;
	
	    this._guardRecognizer.add([{
	      path: path,
	      handler: function handler(match, query) {
	        var realPath = _util.mapParams(mappedPath, match.params, query);
	        _handler.call(_this, realPath);
	      }
	    }]);
	  };
	
	  /**
	   * Check if a path matches any redirect records.
	   *
	   * @param {String} path
	   * @return {Boolean} - if true, will skip normal match.
	   */
	
	  Router.prototype._checkGuard = function _checkGuard(path) {
	    var matched = this._guardRecognizer.recognize(path);
	    if (matched) {
	      matched[0].handler(matched[0], matched.queryParams);
	      return true;
	    } else if (this._notFoundRedirect) {
	      matched = this._recognizer.recognize(path);
	      if (!matched) {
	        this.replace(this._notFoundRedirect);
	        return true;
	      }
	    }
	  };
	
	  /**
	   * Match a URL path and set the route context on vm,
	   * triggering view updates.
	   *
	   * @param {String} path
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */
	
	  Router.prototype._match = function _match(path, state, anchor) {
	    var _this2 = this;
	
	    if (this._checkGuard(path)) {
	      return;
	    }
	
	    var currentRoute = this._currentRoute;
	    var currentTransition = this._currentTransition;
	
	    if (currentTransition) {
	      if (currentTransition.to.path === path) {
	        // do nothing if we have an active transition going to the same path
	        return;
	      } else if (currentRoute.path === path) {
	        // We are going to the same path, but we also have an ongoing but
	        // not-yet-validated transition. Abort that transition and reset to
	        // prev transition.
	        currentTransition.aborted = true;
	        this._currentTransition = this._prevTransition;
	        return;
	      } else {
	        // going to a totally different path. abort ongoing transition.
	        currentTransition.aborted = true;
	      }
	    }
	
	    // construct new route and transition context
	    var route = new _route2['default'](path, this);
	    var transition = new _transition2['default'](this, route, currentRoute);
	
	    // current transition is updated right now.
	    // however, current route will only be updated after the transition has
	    // been validated.
	    this._prevTransition = currentTransition;
	    this._currentTransition = transition;
	
	    if (!this.app) {
	      // initial render
	      this.app = new this._appConstructor({
	        el: this._appContainer,
	        _meta: {
	          $route: route
	        }
	      });
	    }
	
	    // check global before hook
	    var beforeHooks = this._beforeEachHooks;
	    var startTransition = function startTransition() {
	      transition.start(function () {
	        _this2._postTransition(route, state, anchor);
	      });
	    };
	
	    if (beforeHooks.length) {
	      transition.runQueue(beforeHooks, function (hook, _, next) {
	        if (transition === _this2._currentTransition) {
	          transition.callHook(hook, null, next, {
	            expectBoolean: true
	          });
	        }
	      }, startTransition);
	    } else {
	      startTransition();
	    }
	
	    if (!this._rendered && this._startCb) {
	      this._startCb.call(null);
	    }
	
	    // HACK:
	    // set rendered to true after the transition start, so
	    // that components that are acitvated synchronously know
	    // whether it is the initial render.
	    this._rendered = true;
	  };
	
	  /**
	   * Set current to the new transition.
	   * This is called by the transition object when the
	   * validation of a route has succeeded.
	   *
	   * @param {Transition} transition
	   */
	
	  Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	    // set current route
	    var route = this._currentRoute = transition.to;
	    // update route context for all children
	    if (this.app.$route !== route) {
	      this.app.$route = route;
	      this._children.forEach(function (child) {
	        child.$route = route;
	      });
	    }
	    // call global after hook
	    if (this._afterEachHooks.length) {
	      this._afterEachHooks.forEach(function (hook) {
	        return hook.call(null, {
	          to: transition.to,
	          from: transition.from
	        });
	      });
	    }
	    this._currentTransition.done = true;
	  };
	
	  /**
	   * Handle stuff after the transition.
	   *
	   * @param {Route} route
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */
	
	  Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	    // handle scroll positions
	    // saved scroll positions take priority
	    // then we check if the path has an anchor
	    var pos = state && state.pos;
	    if (pos && this._saveScrollPosition) {
	      Vue.nextTick(function () {
	        window.scrollTo(pos.x, pos.y);
	      });
	    } else if (anchor) {
	      Vue.nextTick(function () {
	        var el = document.getElementById(anchor.slice(1));
	        if (el) {
	          window.scrollTo(window.scrollX, el.offsetTop);
	        }
	      });
	    }
	  };
	
	  /**
	   * Normalize named route object / string paths into
	   * a string.
	   *
	   * @param {Object|String|Number} path
	   * @return {String}
	   */
	
	  Router.prototype._stringifyPath = function _stringifyPath(path) {
	    if (path && typeof path === 'object') {
	      if (path.name) {
	        var params = path.params || {};
	        if (path.query) {
	          params.queryParams = path.query;
	        }
	        return this._recognizer.generate(path.name, params);
	      } else if (path.path) {
	        return path.path;
	      } else {
	        return '';
	      }
	    } else {
	      return path ? path + '' : '';
	    }
	  };
	
	  return Router;
	})();
	
	function guardComponent(path, handler) {
	  var comp = handler.component;
	  if (Vue.util.isPlainObject(comp)) {
	    comp = handler.component = Vue.extend(comp);
	  }
	  /* istanbul ignore if */
	  if (typeof comp !== 'function') {
	    handler.component = null;
	    _util.warn('invalid component for route "' + path + '".');
	  }
	}
	
	/* Installation */
	
	Router.installed = false;
	
	/**
	 * Installation interface.
	 * Install the necessary directives.
	 */
	
	Router.install = function (externalVue) {
	  /* istanbul ignore if */
	  if (Router.installed) {
	    _util.warn('already installed.');
	    return;
	  }
	  Vue = externalVue;
	  _override2['default'](Vue);
	  _directivesView2['default'](Vue);
	  _directivesLink2['default'](Vue);
	  _util2['default'].Vue = Vue;
	  Router.installed = true;
	};
	
	// auto install
	/* istanbul ignore if */
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(Router);
	}
	
	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Vue) {
	
	  var _ = Vue.util;
	
	  // override Vue's init and destroy process to keep track of router instances
	  var init = Vue.prototype._init;
	  Vue.prototype._init = function (options) {
	    var root = options._parent || options.parent || this;
	    var route = root.$route;
	    if (route) {
	      route.router._children.push(this);
	      if (!this.$route) {
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          _.defineReactive(this, '$route', route);
	        }
	      }
	    }
	    init.call(this, options);
	  };
	
	  var destroy = Vue.prototype._destroy;
	  Vue.prototype._destroy = function () {
	    if (!this._isBeingDestroyed) {
	      var route = this.$root.$route;
	      if (route) {
	        route.router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    }
	  };
	
	  // 1.0 only: enable route mixins
	  var strats = Vue.config.optionMergeStrategies;
	  var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	  if (strats) {
	    strats.route = function (parentVal, childVal) {
	      if (!childVal) return parentVal;
	      if (!parentVal) return childVal;
	      var ret = {};
	      _.extend(ret, parentVal);
	      for (var key in childVal) {
	        var a = ret[key];
	        var b = childVal[key];
	        // for data, activate and deactivate, we need to merge them into
	        // arrays similar to lifecycle hooks.
	        if (a && hooksToMergeRE.test(key)) {
	          ret[key] = (_.isArray(a) ? a : [a]).concat(b);
	        } else {
	          ret[key] = b;
	        }
	      }
	      return ret;
	    };
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(11)["default"];
	
	var _Object$freeze = __webpack_require__(141)["default"];
	
	exports.__esModule = true;
	var internalKeysRE = /^(component|subRoutes)$/;
	
	/**
	 * Route Context Object
	 *
	 * @param {String} path
	 * @param {Router} router
	 */
	
	var Route = function Route(path, router) {
	  var _this = this;
	
	  _classCallCheck(this, Route);
	
	  var matched = router._recognizer.recognize(path);
	  if (matched) {
	    // copy all custom fields from route configs
	    [].forEach.call(matched, function (match) {
	      for (var key in match.handler) {
	        if (!internalKeysRE.test(key)) {
	          _this[key] = match.handler[key];
	        }
	      }
	    });
	    // set query and params
	    this.query = matched.queryParams;
	    this.params = [].reduce.call(matched, function (prev, cur) {
	      if (cur.params) {
	        for (var key in cur.params) {
	          prev[key] = cur.params[key];
	        }
	      }
	      return prev;
	    }, {});
	  }
	  // expose path and router
	  this.path = path;
	  this.router = router;
	  // for internal use
	  this.matched = matched || router._notFoundHandler;
	  // Important: freeze self to prevent observation
	  _Object$freeze(this);
	};
	
	exports["default"] = Route;
	module.exports = exports["default"];

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck = __webpack_require__(11)['default'];
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(7);
	
	var _pipeline = __webpack_require__(79);
	
	/**
	 * A RouteTransition object manages the pipeline of a
	 * router-view switching process. This is also the object
	 * passed into user route hooks.
	 *
	 * @param {Router} router
	 * @param {Route} to
	 * @param {Route} from
	 */
	
	var RouteTransition = (function () {
	  function RouteTransition(router, to, from) {
	    _classCallCheck(this, RouteTransition);
	
	    this.router = router;
	    this.to = to;
	    this.from = from;
	    this.next = null;
	    this.aborted = false;
	    this.done = false;
	
	    // start by determine the queues
	
	    // the deactivate queue is an array of router-view
	    // directive instances that need to be deactivated,
	    // deepest first.
	    this.deactivateQueue = router._views;
	
	    // check the default handler of the deepest match
	    var matched = to.matched ? Array.prototype.slice.call(to.matched) : [];
	
	    // the activate queue is an array of route handlers
	    // that need to be activated
	    this.activateQueue = matched.map(function (match) {
	      return match.handler;
	    });
	  }
	
	  /**
	   * Abort current transition and return to previous location.
	   */
	
	  RouteTransition.prototype.abort = function abort() {
	    if (!this.aborted) {
	      this.aborted = true;
	      // if the root path throws an error during validation
	      // on initial load, it gets caught in an infinite loop.
	      var abortingOnLoad = !this.from.path && this.to.path === '/';
	      if (!abortingOnLoad) {
	        this.router.replace(this.from.path || '/');
	      }
	    }
	  };
	
	  /**
	   * Abort current transition and redirect to a new location.
	   *
	   * @param {String} path
	   */
	
	  RouteTransition.prototype.redirect = function redirect(path) {
	    if (!this.aborted) {
	      this.aborted = true;
	      if (typeof path === 'string') {
	        path = _util.mapParams(path, this.to.params, this.to.query);
	      } else {
	        path.params = this.to.params;
	        path.query = this.to.query;
	      }
	      this.router.replace(path);
	    }
	  };
	
	  /**
	   * A router view transition's pipeline can be described as
	   * follows, assuming we are transitioning from an existing
	   * <router-view> chain [Component A, Component B] to a new
	   * chain [Component A, Component C]:
	   *
	   *  A    A
	   *  | => |
	   *  B    C
	   *
	   * 1. Reusablity phase:
	   *   -> canReuse(A, A)
	   *   -> canReuse(B, C)
	   *   -> determine new queues:
	   *      - deactivation: [B]
	   *      - activation: [C]
	   *
	   * 2. Validation phase:
	   *   -> canDeactivate(B)
	   *   -> canActivate(C)
	   *
	   * 3. Activation phase:
	   *   -> deactivate(B)
	   *   -> activate(C)
	   *
	   * Each of these steps can be asynchronous, and any
	   * step can potentially abort the transition.
	   *
	   * @param {Function} cb
	   */
	
	  RouteTransition.prototype.start = function start(cb) {
	    var transition = this;
	    var daq = this.deactivateQueue;
	    var aq = this.activateQueue;
	    var rdaq = daq.slice().reverse();
	    var reuseQueue = undefined;
	
	    // 1. Reusability phase
	    var i = undefined;
	    for (i = 0; i < rdaq.length; i++) {
	      if (!_pipeline.canReuse(rdaq[i], aq[i], transition)) {
	        break;
	      }
	    }
	    if (i > 0) {
	      reuseQueue = rdaq.slice(0, i);
	      daq = rdaq.slice(i).reverse();
	      aq = aq.slice(i);
	    }
	
	    // 2. Validation phase
	    transition.runQueue(daq, _pipeline.canDeactivate, function () {
	      transition.runQueue(aq, _pipeline.canActivate, function () {
	        transition.runQueue(daq, _pipeline.deactivate, function () {
	          // 3. Activation phase
	
	          // Update router current route
	          transition.router._onTransitionValidated(transition);
	
	          // trigger reuse for all reused views
	          reuseQueue && reuseQueue.forEach(function (view) {
	            _pipeline.reuse(view, transition);
	          });
	
	          // the root of the chain that needs to be replaced
	          // is the top-most non-reusable view.
	          if (daq.length) {
	            var view = daq[daq.length - 1];
	            var depth = reuseQueue ? reuseQueue.length : 0;
	            _pipeline.activate(view, transition, depth, cb);
	          } else {
	            cb();
	          }
	        });
	      });
	    });
	  };
	
	  /**
	   * Asynchronously and sequentially apply a function to a
	   * queue.
	   *
	   * @param {Array} queue
	   * @param {Function} fn
	   * @param {Function} cb
	   */
	
	  RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	    var transition = this;
	    step(0);
	    function step(index) {
	      if (index >= queue.length) {
	        cb();
	      } else {
	        fn(queue[index], transition, function () {
	          step(index + 1);
	        });
	      }
	    }
	  };
	
	  /**
	   * Call a user provided route transition hook and handle
	   * the response (e.g. if the user returns a promise).
	   *
	   * If the user neither expects an argument nor returns a
	   * promise, the hook is assumed to be synchronous.
	   *
	   * @param {Function} hook
	   * @param {*} [context]
	   * @param {Function} [cb]
	   * @param {Object} [options]
	   *                 - {Boolean} expectBoolean
	   *                 - {Boolean} expectData
	   *                 - {Function} cleanup
	   */
	
	  RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	    var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	    var _ref$expectBoolean = _ref.expectBoolean;
	    var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	    var _ref$expectData = _ref.expectData;
	    var expectData = _ref$expectData === undefined ? false : _ref$expectData;
	    var cleanup = _ref.cleanup;
	
	    var transition = this;
	    var nextCalled = false;
	
	    // abort the transition
	    var abort = function abort() {
	      cleanup && cleanup();
	      transition.abort();
	    };
	
	    // handle errors
	    var onError = function onError(err) {
	      // cleanup indicates an after-activation hook,
	      // so instead of aborting we just let the transition
	      // finish.
	      cleanup ? next() : abort();
	      if (err && !transition.router._suppress) {
	        _util.warn('Uncaught error during transition: ');
	        throw err instanceof Error ? err : new Error(err);
	      }
	    };
	
	    // advance the transition to the next step
	    var next = function next(data) {
	      if (nextCalled) {
	        _util.warn('transition.next() should be called only once.');
	        return;
	      }
	      nextCalled = true;
	      if (transition.aborted) {
	        cleanup && cleanup();
	        return;
	      }
	      cb && cb(data, onError);
	    };
	
	    // expose a clone of the transition object, so that each
	    // hook gets a clean copy and prevent the user from
	    // messing with the internals.
	    var exposed = {
	      to: transition.to,
	      from: transition.from,
	      abort: abort,
	      next: next,
	      redirect: function redirect() {
	        transition.redirect.apply(transition, arguments);
	      }
	    };
	
	    // actually call the hook
	    var res = undefined;
	    try {
	      res = hook.call(context, exposed);
	    } catch (err) {
	      return onError(err);
	    }
	
	    // handle boolean/promise return values
	    var resIsPromise = _util.isPromise(res);
	    if (expectBoolean) {
	      if (typeof res === 'boolean') {
	        res ? next() : abort();
	      } else if (resIsPromise) {
	        res.then(function (ok) {
	          ok ? next() : abort();
	        }, onError);
	      } else if (!hook.length) {
	        next(res);
	      }
	    } else if (resIsPromise) {
	      res.then(next, onError);
	    } else if (expectData && isPlainOjbect(res) || !hook.length) {
	      next(res);
	    }
	  };
	
	  /**
	   * Call a single hook or an array of async hooks in series.
	   *
	   * @param {Array} hooks
	   * @param {*} context
	   * @param {Function} cb
	   * @param {Object} [options]
	   */
	
	  RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	    var _this = this;
	
	    if (Array.isArray(hooks)) {
	      (function () {
	        var res = [];
	        res._needMerge = true;
	        var onError = undefined;
	        _this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, function (r, onError) {
	              if (r) res.push(r);
	              onError = onError;
	              next();
	            }, options);
	          }
	        }, function () {
	          cb(res, onError);
	        });
	      })();
	    } else {
	      this.callHook(hooks, context, cb, options);
	    }
	  };
	
	  return RouteTransition;
	})();
	
	exports['default'] = RouteTransition;
	
	function isPlainOjbect(val) {
	  return Object.prototype.toString.call(val) === '[object Object]';
	}
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var Path = __webpack_require__(20)
	var textParser = __webpack_require__(25)
	var dirParser = __webpack_require__(19)
	var expParser = __webpack_require__(24)
	var filterRE = /[^|]\|[^|]/
	
	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @param {Boolean} [asStatement]
	 * @return {*}
	 */
	
	exports.$get = function (exp, asStatement) {
	  var res = expParser.parse(exp)
	  if (res) {
	    if (asStatement && !expParser.isSimplePath(exp)) {
	      var self = this
	      return function statementHandler () {
	        res.get.call(self, self)
	      }
	    } else {
	      try {
	        return res.get.call(this, this)
	      } catch (e) {}
	    }
	  }
	}
	
	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */
	
	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}
	
	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */
	
	exports.$delete = function (key) {
	  _.delete(this._data, key)
	}
	
	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 * @return {Function} - unwatchFn
	 */
	
	exports.$watch = function (expOrFn, cb, options) {
	  var vm = this
	  var parsed
	  if (typeof expOrFn === 'string') {
	    parsed = dirParser.parse(expOrFn)
	    expOrFn = parsed.expression
	  }
	  var watcher = new Watcher(vm, expOrFn, cb, {
	    deep: options && options.deep,
	    filters: parsed && parsed.filters
	  })
	  if (options && options.immediate) {
	    cb.call(vm, watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}
	
	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @param {Boolean} [asStatement]
	 * @return {String}
	 */
	
	exports.$eval = function (text, asStatement) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression, asStatement)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text, asStatement)
	  }
	}
	
	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    if (tokens.length === 1) {
	      return vm.$eval(tokens[0].value) + ''
	    } else {
	      return tokens.map(function (token) {
	        return token.tag
	          ? vm.$eval(token.value)
	          : token.value
	      }).join('')
	    }
	  } else {
	    return text
	  }
	}
	
	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */
	
	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = clean(data)
	  }
	  // include computed fields
	  if (!path) {
	    for (var key in this.$options.computed) {
	      data[key] = clean(this[key])
	    }
	  }
	  console.log(data)
	}
	
	/**
	 * "clean" a getter/setter converted object into a plain
	 * object copy.
	 *
	 * @param {Object} - obj
	 * @return {Object}
	 */
	
	function clean (obj) {
	  return JSON.parse(JSON.stringify(obj))
	}


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */
	
	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}
	
	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}
	
	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}
	
	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (this._isFragment) {
	    _.removeNodeRange(
	      this._fragmentStart,
	      this._fragmentEnd,
	      this, this._fragment, realCb
	    )
	  } else {
	    var op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}
	
	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */
	
	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	      ? op1
	      : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	      op(node, target, vm)
	    })
	    cb && cb()
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}
	
	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */
	
	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}
	
	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}
	
	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}
	
	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}
	
	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */
	
	exports.$emit = function (event) {
	  var cbs = this._events[event]
	  this._shouldPropagate = !cbs
	  if (cbs) {
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    var args = _.toArray(arguments, 1)
	    for (var i = 0, l = cbs.length; i < l; i++) {
	      var res = cbs[i].apply(this, args)
	      if (res === true) {
	        this._shouldPropagate = true
	      }
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (child._shouldPropagate) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$dispatch = function () {
	  this.$emit.apply(this, arguments)
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._shouldPropagate
	      ? parent.$parent
	      : null
	  }
	  return this
	}
	
	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */
	
	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(4)
	
	/**
	 * Expose useful internals
	 */
	
	exports.util = _
	exports.config = config
	exports.set = _.set
	exports.delete = _.delete
	exports.nextTick = _.nextTick
	
	/**
	 * The following are exposed for advanced usage / plugins
	 */
	
	exports.compiler = __webpack_require__(18)
	exports.FragmentFactory = __webpack_require__(23)
	exports.internalDirectives = __webpack_require__(81)
	exports.parsers = {
	  path: __webpack_require__(20),
	  text: __webpack_require__(25),
	  template: __webpack_require__(9),
	  directive: __webpack_require__(19),
	  expression: __webpack_require__(24)
	}
	
	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */
	
	exports.cid = 0
	var cid = 1
	
	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */
	
	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var isFirstExtend = Super.cid === 0
	  if (isFirstExtend && extendOptions._Ctor) {
	    return extendOptions._Ctor
	  }
	  var name = extendOptions.name || Super.options.name
	  var Sub = createClass(name || 'VueComponent')
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  // enable recursive self-lookup
	  if (name) {
	    Sub.options.components[name] = Sub
	  }
	  // cache constructor
	  if (isFirstExtend) {
	    extendOptions._Ctor = Sub
	  }
	  return Sub
	}
	
	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */
	
	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}
	
	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */
	
	exports.use = function (plugin) {
	  /* istanbul ignore if */
	  if (plugin.installed) {
	    return
	  }
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  plugin.installed = true
	  return this
	}
	
	/**
	 * Apply a global mixin by merging it into the default
	 * options.
	 */
	
	exports.mixin = function (mixin) {
	  var Vue = _.Vue
	  Vue.options = _.mergeOptions(Vue.options, mixin)
	}
	
	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */
	
	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	      return definition
	    }
	  }
	})


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	
	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */
	
	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    ("development") !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}
	
	/**
	 * Mark an instance as ready.
	 */
	
	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}
	
	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */
	
	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}
	
	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */
	
	exports.$compile = function (el, host, scope, frag) {
	  return compiler.compile(el, this.$options, true)(
	    this, el, host, scope, frag
	  )
	}


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(4)
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue () {
	  runBatcherQueue(queue)
	  internalQueueDepleted = true
	  runBatcherQueue(userQueue)
	  // dev tool hook
	  /* istanbul ignore if */
	  if (true) {
	    if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
	    }
	  }
	  resetBatcherState()
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (("development") !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flushBatcherQueue)
	    }
	  }
	}


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var dirParser = __webpack_require__(19)
	var propDef = __webpack_require__(82)
	var propBindingModes = __webpack_require__(4)._propBindingModes
	var empty = {}
	
	// regexes
	var identRE = __webpack_require__(20).identRE
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var names = Object.keys(propOptions)
	  var i = names.length
	  var options, name, attr, value, path, parsed, prop, isTitleBinding
	  while (i--) {
	    name = names[i]
	    options = propOptions[name] || empty
	
	    if (("development") !== 'production' && name === '$data') {
	      _.warn('Do not use $data as prop.')
	      continue
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name)
	    if (!identRE.test(path)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	
	    // IE title issues
	    isTitleBinding = false
	    if (name === 'title' && (el.getAttribute(':title') || el.getAttribute('v-bind:title'))) {
	      isTitleBinding = true
	    }
	
	    // first check literal version
	    attr = _.hyphenate(name)
	    value = prop.raw = _.attr(el, attr)
	    if (value === null || isTitleBinding) {
	      // then check dynamic version
	      if ((value = _.getBindAttr(el, attr)) === null) {
	        if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
	          prop.mode = propBindingModes.TWO_WAY
	        } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
	          prop.mode = propBindingModes.ONE_TIME
	        }
	      }
	      prop.raw = value
	      if (value !== null) {
	        parsed = dirParser.parse(value)
	        value = parsed.expression
	        prop.filters = parsed.filters
	        // check binding type
	        if (_.isLiteral(value)) {
	          // for expressions containing literal numbers and
	          // booleans, there's no need to setup a prop binding,
	          // so we can optimize them as a one-time set.
	          prop.optimizedLiteral = true
	        } else {
	          prop.dynamic = true
	          // check non-settable path for two-way bindings
	          if (("development") !== 'production' &&
	              prop.mode === propBindingModes.TWO_WAY &&
	              !settablePathRE.test(value)) {
	            prop.mode = propBindingModes.ONE_WAY
	            _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + value
	            )
	          }
	        }
	        prop.parentPath = value
	
	        // warn required two-way
	        if (
	          ("development") !== 'production' &&
	          options.twoWay &&
	          prop.mode !== propBindingModes.TWO_WAY
	        ) {
	          _.warn(
	            'Prop "' + name + '" expects a two-way binding type.'
	          )
	        }
	
	      } else if (options.required) {
	        // warn missing required
	        ("development") !== 'production' && _.warn(
	          'Missing required prop: ' + name
	        )
	      }
	    }
	
	    // push prop
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, scope) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value, raw
	    while (i--) {
	      prop = props[i]
	      raw = prop.raw
	      path = prop.path
	      options = prop.options
	      vm._props[path] = prop
	      if (raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(vm, options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope) // el, host, scope
	          }
	        } else {
	          ("development") !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            raw + '"'
	          )
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        raw = _.stripQuotes(raw)
	        value = _.toBoolean(_.toNumber(raw))
	        _.initProp(vm, prop, value)
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === ''
	          ? true
	          : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault (vm, options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    ("development") !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def.call(vm)
	    : def
	}


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var publicDirectives = __webpack_require__(86)
	var internalDirectives = __webpack_require__(81)
	var compileProps = __webpack_require__(296)
	var textParser = __webpack_require__(25)
	var dirParser = __webpack_require__(19)
	var templateParser = __webpack_require__(9)
	var resolveAsset = _.resolveAsset
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/
	var onRE = /^v-on:|^@/
	var argRE = /:(.*)$/
	var modifierRE = /\.[^\.]+/g
	var transitionRE = /^(v-bind:|:)?transition$/
	
	// terminal directives
	var terminalDirectives = [
	  'for',
	  'if'
	]
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	exports.compile = function (el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn (vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  var dirs = vm._directives.slice(originalDirCount)
	  dirs.sort(directiveComparator)
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind()
	  }
	  return dirs
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator (a, b) {
	  a = a.descriptor.def.priority || 0
	  b = b.descriptor.def.priority || 0
	  return a > b ? -1 : a === b ? 0 : 1
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	exports.compileAndLinkProps = function (vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	exports.compileRoot = function (el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  } else if (("development") !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    containerAttrs.forEach(function (attr) {
	      if (attr.name.indexOf('v-') === 0 || attr.name === 'transition') {
	        _.warn(
	          attr.name + ' is ignored on component ' +
	          '<' + options.el.tagName.toLowerCase() + '> because ' +
	          'the component is a fragment instance: ' +
	          'http://vuejs.org/guide/components.html#Fragment_Instance'
	        )
	      }
	    })
	  }
	
	  return function rootLinkFn (vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context
	    var contextDirs
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope)
	      }, context)
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el)
	    }, vm)
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	  }
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement (el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = textParser.parse(el.value)
	    if (tokens) {
	      el.setAttribute(':value', textParser.tokensToExp(tokens))
	      el.value = ''
	    }
	  }
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  return linkFn
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    if (token.descriptor) return
	    var parsed = dirParser.parse(token.value)
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    }
	  }
	  return el
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag)
	      }
	    }
	  }
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent (el, options) {
	  var component = _.checkComponent(el, options)
	  if (component) {
	    var descriptor = {
	      name: 'component',
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    }
	    var componentLinkFn = function (vm, el, host, scope, frag) {
	      vm._bindDir(descriptor, el, host, scope, frag)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives (el, options) {
	  // skip v-pre
	  if (_.attr(el, 'v-pre') !== null) {
	    return skip
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip
	    }
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    /* eslint-disable no-cond-assign */
	    if (value = el.getAttribute('v-' + dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	    /* eslint-enable no-cond-assign */
	  }
	}
	
	function skip () {}
	skip.terminal = true
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var parsed = dirParser.parse(value)
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  }
	  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
	    vm._bindDir(descriptor, el, host, scope, frag)
	  }
	  fn.terminal = true
	  return fn
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens
	  while (i--) {
	    attr = attrs[i]
	    name = rawName = attr.name
	    value = rawValue = attr.value
	    tokens = textParser.parse(value)
	    // reset arg
	    arg = null
	    // check modifiers
	    modifiers = parseModifiers(name)
	    name = name.replace(modifierRE, '')
	
	    // attribute interpolations
	    if (tokens) {
	      value = textParser.tokensToExp(tokens)
	      arg = name
	      pushDir('bind', publicDirectives.bind, true)
	    } else
	
	    // special attribute: transition
	    if (transitionRE.test(name)) {
	      modifiers.literal = !bindRE.test(name)
	      pushDir('transition', internalDirectives.transition)
	    } else
	
	    // event handlers
	    if (onRE.test(name)) {
	      arg = name.replace(onRE, '')
	      pushDir('on', publicDirectives.on)
	    } else
	
	    // attribute bindings
	    if (bindRE.test(name)) {
	      dirName = name.replace(bindRE, '')
	      if (dirName === 'style' || dirName === 'class') {
	        pushDir(dirName, internalDirectives[dirName])
	      } else {
	        arg = dirName
	        pushDir('bind', publicDirectives.bind)
	      }
	    } else
	
	    // normal directives
	    if (name.indexOf('v-') === 0) {
	      // check arg
	      arg = (arg = name.match(argRE)) && arg[1]
	      if (arg) {
	        name = name.replace(argRE, '')
	      }
	      // extract directive name
	      dirName = name.slice(2)
	
	      // skip v-else (when used with v-show)
	      if (dirName === 'else') {
	        continue
	      }
	
	      dirDef = resolveAsset(options, 'directives', dirName)
	
	      if (true) {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }
	
	      if (dirDef) {
	        if (_.isLiteral(value)) {
	          value = _.stripQuotes(value)
	          modifiers.literal = true
	        }
	        pushDir(dirName, dirDef)
	      }
	    }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */
	
	  function pushDir (dirName, def, interp) {
	    var parsed = dirParser.parse(value)
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      expression: parsed.expression,
	      filters: parsed.filters,
	      interp: interp
	    })
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs)
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers (name) {
	  var res = Object.create(null)
	  var match = name.match(modifierRE)
	  if (match) {
	    var i = match.length
	    while (i--) {
	      res[match[i].slice(1)] = true
	    }
	  }
	  return res
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag)
	    }
	  }
	}


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(9)
	var specialCharRE = /[^\w\-:\.]/
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("development") !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute('is') ||
	        replacer.hasAttribute(':is') ||
	        replacer.hasAttribute('v-bind:is') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // for block
	        replacer.hasAttribute('v-for') ||
	        // if block
	        replacer.hasAttribute('v-if')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    ("development") !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Watcher = __webpack_require__(27)
	var expParser = __webpack_require__(24)
	function noop () {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	
	function Directive (descriptor, vm, el, host, scope, frag) {
	  this.vm = vm
	  this.el = el
	  // copy descriptor properties
	  this.descriptor = descriptor
	  this.name = descriptor.name
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.modifiers = descriptor.modifiers
	  this.filters = descriptor.filters
	  this.literal = this.modifiers && this.modifiers.literal
	  // private
	  this._locked = false
	  this._bound = false
	  this._listeners = null
	  // link context
	  this._host = host
	  this._scope = scope
	  this._frag = frag
	  // store directives on node in dev mode
	  if (("development") !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || []
	    this.el._vue_directives.push(this)
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name
	  var descriptor = this.descriptor
	
	  // remove attribute
	  if (
	    (name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    var attr = descriptor.attr || ('v-' + name)
	    this.el.removeAttribute(attr)
	  }
	
	  // copy def properties
	  var def = descriptor.def
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	
	  // setup directive params
	  this._setupParams()
	
	  // initial bind
	  if (this.bind) {
	    this.bind()
	  }
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw)
	  } else if (
	    (this.expression || this.modifiers) &&
	    (this.update || this.twoWay) &&
	    !this._checkStatement()
	  ) {
	    // wrapped updater for context
	    var dir = this
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal)
	        }
	      }
	    } else {
	      this._update = noop
	    }
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var postProcess = this._postProcess
	      ? _.bind(this._postProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this.expression,
	      this._update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess,
	        postProcess: postProcess,
	        scope: this._scope
	      }
	    )
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind()
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return
	  }
	  var params = this.params
	  // swap the params array with a fresh object.
	  this.params = Object.create(null)
	  var i = params.length
	  var key, val, mappedKey
	  while (i--) {
	    key = params[i]
	    mappedKey = _.camelize(key)
	    val = _.attr(this.el, key)
	    if (val != null) {
	      // static
	      this.params[mappedKey] = val === '' ? true : val
	    } else {
	      // dynamic
	      val = _.getBindAttr(this.el, key)
	      if (val != null) {
	        this._setupParamWatcher(mappedKey, val)
	      }
	    }
	  }
	}
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this
	  var called = false
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key]
	      if (cb) {
	        cb.call(self, val, oldVal)
	      }
	    } else {
	      called = true
	    }
	  }, {
	    immediate: true
	  })
	  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
	}
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var scope = this._scope || this.vm
	    var handler = function () {
	      fn.call(scope, scope)
	    }
	    if (this.filters) {
	      handler = this.vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  } else if (true) {
	    _.warn(
	      'Directive.set() can only be used inside twoWay' +
	      'directives.'
	    )
	  }
	}
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */
	
	Directive.prototype.on = function (event, handler) {
	  _.on(this.el, event, handler)
	  ;(this._listeners || (this._listeners = []))
	    .push([event, handler])
	}
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    var listeners = this._listeners
	    var i
	    if (listeners) {
	      i = listeners.length
	      while (i--) {
	        _.off(this.el, listeners[i][0], listeners[i][1])
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns
	    if (unwatchFns) {
	      i = unwatchFns.length
	      while (i--) {
	        unwatchFns[i]()
	      }
	    }
	    if (("development") !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this)
	    }
	    this.vm = this.el = this._watcher = this._listeners = null
	  }
	}
	
	module.exports = Directive


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	exports.slot = __webpack_require__(302)
	exports.partial = __webpack_require__(301)


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var vIf = __webpack_require__(85)
	var FragmentFactory = __webpack_require__(23)
	
	module.exports = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function (value) {
	      vIf.remove.call(this)
	      if (value) {
	        this.insert(value)
	      }
	    }
	  },
	
	  bind: function () {
	    this.anchor = _.createAnchor('v-partial')
	    _.replace(this.el, this.anchor)
	    this.insert(this.params.name)
	  },
	
	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (true) {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial)
	      vIf.insert.call(this)
	    }
	  },
	
	  unbind: function () {
	    if (this.frag) {
	      this.frag.destroy()
	    }
	  }
	}


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(9)
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	module.exports = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  bind: function () {
	    var host = this.vm
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var slotName = this.params.name
	    if (!slotName) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          host
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      var selector = '[slot="' + slotName + '"]'
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, host)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },
	
	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },
	
	  compile: function (content, context, host) {
	    if (content && context) {
	      var scope = host
	        ? host._scope
	        : this._scope
	      this.unlink = context.$compile(
	        content, host, scope, this._frag
	      )
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },
	
	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node)
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      append(node)
	    }
	  }
	  return frag
	
	  function append (node) {
	    if (_.isTemplate(node) &&
	        !node.hasAttribute('v-if') &&
	        !node.hasAttribute('v-for')) {
	      node = templateParser.parse(node)
	    }
	    node = templateParser.clone(node)
	    frag.appendChild(node)
	  }
	}


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var addClass = _.addClass
	var removeClass = _.removeClass
	
	module.exports = {
	
	  update: function (value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value))
	    } else if (_.isPlainObject(value)) {
	      this.handleObject(value)
	    } else if (_.isArray(value)) {
	      this.handleArray(value)
	    } else {
	      this.cleanup()
	    }
	  },
	
	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },
	
	  handleArray: function (value) {
	    this.cleanup(value)
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i])
	      }
	    }
	    this.prevKeys = value.slice()
	  },
	
	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (key && (!value || !contains(value, key))) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}
	
	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}
	
	function contains (value, key) {
	  return _.isArray(value)
	    ? value.indexOf(key) > -1
	    : value.hasOwnProperty(key)
	}


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(9)
	
	module.exports = {
	
	  priority: 1500,
	
	  params: [
	    'keep-alive',
	    'transition-mode',
	    'inline-template'
	  ],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function () {
	    if (!this.el.__vue__) {
	      // check ref
	      this.ref = _.findRef(this.el)
	      var refs = (this._scope || this.vm).$refs
	      if (this.ref && !refs.hasOwnProperty(this.ref)) {
	        _.defineReactive(refs, this.ref, null)
	      }
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this.pendingComponentCb =
	      this.Component = null
	      // transition related state
	      this.pendingRemovals = 0
	      this.pendingRemovalCb = null
	      // check dynamic component params
	        // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression)
	      }
	    } else {
	      ("development") !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function (value) {
	    if (!this.literal) {
	      this.setComponent(value)
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function (value, cb) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, cb)
	      this.childVM = null
	    } else {
	      var self = this
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb)
	      })
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function (id, cb) {
	    var self = this
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id
	      self.Component = Component
	      cb()
	    })
	    this.vm._resolveComponent(id, this.pendingComponentCb)
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function (cb) {
	    // actual mount
	    this.unbuild(true)
	    var self = this
	    var activateHook = this.Component.options.activate
	    var cached = this.getCached()
	    var newComponent = this.build()
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent
	      activateHook.call(newComponent, function () {
	        self.waitingFor = null
	        self.transition(newComponent, cb)
	      })
	    } else {
	      this.transition(newComponent, cb)
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function () {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel()
	      this.pendingComponentCb = null
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function (extraOptions) {
	    var cached = this.getCached()
	    if (cached) {
	      return cached
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: templateParser.clone(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      }
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        _.extend(options, extraOptions)
	      }
	      var child = new this.Component(options)
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child
	      }
	      /* istanbul ignore if */
	      if (("development") !== 'production' &&
	          this.el.hasAttribute('transition') &&
	          child._isFragment) {
	        _.warn(
	          'Transitions will not work on a fragment instance. ' +
	          'Template: ' + child.$options.template
	        )
	      }
	      return child
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function () {
	    return this.keepAlive && this.cache[this.Component.cid]
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function (defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy()
	      this.waitingFor = null
	    }
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++
	      this.pendingRemovalCb = cb
	      var self = this
	      child.$remove(function () {
	        self.pendingRemovals--
	        if (!keepAlive) child._cleanup()
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb()
	          self.pendingRemovalCb = null
	        }
	      })
	    } else if (cb) {
	      cb()
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    // for devtool inspection
	    if (true) {
	      if (current) current._inactive = true
	      target._inactive = false
	    }
	    this.childVM = target
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb)
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Transition = __webpack_require__(330)
	
	module.exports = {
	
	  priority: 1000,
	
	  update: function (id, oldId) {
	    var el = this.el
	    // resolve on owner vm
	    var hooks = _.resolveAsset(this.vm.$options, 'transitions', id)
	    id = id || 'v'
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	
	// these input element attributes should also set their
	// corresponding properties
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	}
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	}
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/
	
	module.exports = {
	
	  priority: 850,
	
	  bind: function () {
	    var attr = this.arg
	    var tag = this.el.tagName
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (
	        disallowedInterpAttrRE.test(attr) ||
	        (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))
	      ) {
	        ("development") !== 'production' && _.warn(
	          attr + '="' + this.descriptor.raw + '": ' +
	          'attribute interpolation is not allowed in Vue.js ' +
	          'directives and special attributes.'
	        )
	        this.el.removeAttribute(attr)
	        this.invalid = true
	      }
	
	      /* istanbul ignore if */
	      if (true) {
	        var raw = attr + '="' + this.descriptor.raw + '": '
	        // warn src
	        if (attr === 'src') {
	          _.warn(
	            raw + 'interpolation in "src" attribute will cause ' +
	            'a 404 request. Use v-bind:src instead.'
	          )
	        }
	
	        // warn style
	        if (attr === 'style') {
	          _.warn(
	            raw + 'interpolation in "style" attribute will cause ' +
	            'the attribute to be discarded in Internet Explorer. ' +
	            'Use v-bind:style instead.'
	          )
	        }
	      }
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) {
	      return
	    }
	    var attr = this.arg
	    if (this.arg) {
	      this.handleSingle(attr, value)
	    } else {
	      this.handleObject(value || {})
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: __webpack_require__(83).handleObject,
	
	  handleSingle: function (attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = attr === 'value'
	        ? (value || '') // IE9 will set input.value to "null" for null...
	        : value
	    }
	    // set model props
	    var modelProp = modelProps[attr]
	    if (modelProp) {
	      this.el[modelProp] = value
	      // update v-model if present
	      var model = this.el.__v_model
	      if (model) {
	        model.listener()
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
	      this.el.removeAttribute(attr)
	      return
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	  }
	}


/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute('v-cloak')
	    })
	  }
	}


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  priority: 1500,
	
	  bind: function () {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return
	    }
	    var id = this.id = _.camelize(this.arg)
	    var refs = (this._scope || this.vm).$els
	    if (refs.hasOwnProperty(id)) {
	      refs[id] = this.el
	    } else {
	      _.defineReactive(refs, id, this.el)
	    }
	  },
	
	  unbind: function () {
	    var refs = (this._scope || this.vm).$els
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null
	    }
	  }
	}


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var templateParser = __webpack_require__(9)
	
	module.exports = {
	
	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },
	
	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },
	
	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value')
	        ? el._value
	        : self.params.number
	          ? _.toNumber(el.value)
	          : el.value
	    }
	
	    function getBooleanValue () {
	      var val = el.checked
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue
	      }
	      return val
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value
	      if (_.isArray(model)) {
	        var val = self.getValue()
	        if (el.checked) {
	          if (_.indexOf(model, val) < 0) {
	            model.push(val)
	          }
	        } else {
	          model.$remove(val)
	        }
	      } else {
	        self.set(getBooleanValue())
	      }
	    }
	
	    this.on('change', this.listener)
	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    var el = this.el
	    if (_.isArray(value)) {
	      el.checked = _.indexOf(value, this.getValue()) > -1
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = _.looseEqual(value, el._trueValue)
	      } else {
	        el.checked = !!value
	      }
	    }
	  }
	}


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	var handlers = {
	  text: __webpack_require__(314),
	  radio: __webpack_require__(312),
	  select: __webpack_require__(313),
	  checkbox: __webpack_require__(310)
	}
	
	module.exports = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      ("development") !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      ("development") !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    el.__v_model = this
	    handler.bind.call(this)
	    this.update = handler.update
	    this._unbind = handler.unbind
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  },
	
	  unbind: function () {
	    this.el.__v_model = null
	    this._unbind && this._unbind()
	  }
	}


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value
	      }
	      var val = el.value
	      if (self.params.number) {
	        val = _.toNumber(val)
	      }
	      return val
	    }
	
	    this.listener = function () {
	      self.set(self.getValue())
	    }
	    this.on('change', this.listener)
	
	    if (el.checked) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    this.el.checked = _.looseEqual(value, this.getValue())
	  }
	}


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple')
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple)
	      value = self.params.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    this.on('change', this.listener)
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true)
	    if ((multiple && initValue.length) ||
	        (!multiple && initValue !== null)) {
	      this.afterBind = this.listener
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },
	
	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var op, val
	    while (i--) {
	      op = options[i]
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      /* eslint-disable eqeqeq */
	      op.selected = multi
	        ? indexOf(value, val) > -1
	        : _.looseEqual(value, val)
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function () {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate)
	  }
	}
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue (el, multi, init) {
	  var res = multi ? [] : null
	  var op, val, selected
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i]
	    selected = init
	      ? op.hasAttribute('selected')
	      : op.selected
	    if (selected) {
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      if (multi) {
	        res.push(val)
	      } else {
	        return val
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    if (_.looseEqual(arr[i], val)) {
	      return i
	    }
	  }
	  return -1
	}


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    var isRange = el.type === 'range'
	    var lazy = this.params.lazy
	    var number = this.params.number
	    var debounce = this.params.debounce
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true
	      })
	      this.on('compositionend', function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener()
	        }
	      })
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true
	      })
	      this.on('blur', function () {
	        self.focused = false
	        self.listener()
	      })
	    }
	
	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return
	      var val = number || isRange
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value)
	        }
	      })
	    }
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener)
	      if (!lazy) {
	        jQuery(el).on('input', this.listener)
	      }
	    } else {
	      this.on('change', this.listener)
	      if (!lazy) {
	        this.on('input', this.listener)
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.on('cut', function () {
	        _.nextTick(self.listener)
	      })
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      })
	    }
	
	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this.afterBind = this.listener
	    }
	  },
	
	  update: function (value) {
	    this.el.value = _.toString(value)
	  },
	
	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener)
	      jQuery(el).off('input', this.listener)
	    }
	  }
	}


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}
	
	function keyFilter (handler, keys) {
	  var codes = keys.map(function (key) {
	    var code = keyCodes[key]
	    if (!code) {
	      code = parseInt(key, 10)
	    }
	    return code
	  })
	  return function keyHandler (e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e)
	    }
	  }
	}
	
	function stopFilter (handler) {
	  return function stopHandler (e) {
	    e.stopPropagation()
	    return handler.call(this, e)
	  }
	}
	
	function preventFilter (handler) {
	  return function preventHandler (e) {
	    e.preventDefault()
	    return handler.call(this, e)
	  }
	}
	
	module.exports = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      this.on('load', this.iframeBind)
	    }
	  },
	
	  update: function (handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {}
	    }
	
	    if (typeof handler !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'v-on:' + this.arg + '="' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler)
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler)
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers)
	      .filter(function (key) {
	        return key !== 'stop' && key !== 'prevent'
	      })
	    if (keys.length) {
	      handler = keyFilter(handler, keys)
	    }
	
	    this.reset()
	    var scope = this._scope || this.vm
	    this.handler = function (e) {
	      scope.$event = e
	      var res = handler(e)
	      scope.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },
	
	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },
	
	  unbind: function () {
	    this.reset()
	  }
	}


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	if (true) {
	  module.exports = {
	    bind: function () {
	      __webpack_require__(1).warn(
	        'v-ref:' + this.arg + ' must be used on a child ' +
	        'component. Found on <' + this.el.tagName.toLowerCase() + '>.'
	      )
	    }
	  }
	}


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	module.exports = {
	
	  bind: function () {
	    // check else block
	    var next = this.el.nextElementSibling
	    if (next && _.attr(next, 'v-else') !== null) {
	      this.elseEl = next
	    }
	  },
	
	  update: function (value) {
	    var el = this.el
	    transition.apply(el, value ? 1 : -1, function () {
	      el.style.display = value ? '' : 'none'
	    }, this.vm)
	    var elseEl = this.elseEl
	    if (elseEl) {
	      transition.apply(elseEl, value ? -1 : 1, function () {
	        elseEl.style.display = value ? 'none' : ''
	      }, this.vm)
	    }
	  }
	}


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	module.exports = {
	
	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },
	
	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Path = __webpack_require__(20)
	var toArray = __webpack_require__(84)._postProcess
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 */
	
	exports.limitBy = function (arr, n) {
	  return typeof n === 'number'
	    ? arr.slice(0, n)
	    : arr
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */
	
	exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
	  arr = toArray(arr)
	  if (search == null) {
	    return arr
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search)
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2
	  // extract and flatten keys
	  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur)
	  }, [])
	  var res = []
	  var item, key, val, j
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i]
	    val = (item && item.$value) || item
	    j = keys.length
	    if (j) {
	      while (j--) {
	        key = keys[j]
	        if ((key === '$key' && contains(item.$key, search)) ||
	            contains(Path.get(val, key), search)) {
	          res.push(item)
	          break
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item)
	    }
	  }
	  return res
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	exports.orderBy = function (arr, sortKey, reverse) {
	  arr = toArray(arr)
	  if (!sortKey) {
	    return arr
	  }
	  var order = (reverse && reverse < 0) ? -1 : 1
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (_.isObject(a) && '$value' in a) a = a.$value
	      if (_.isObject(b) && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains (val, search) {
	  var i
	  if (_.isPlainObject(val)) {
	    var keys = Object.keys(val)
	    i = keys.length
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */
	
	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency != null ? currency : '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}
	
	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */
	
	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}
	
	/**
	 * Debounce a handler function.
	 *
	 * @param {Function} handler
	 * @param {Number} delay = 300
	 * @return {Function}
	 */
	
	exports.debounce = function (handler, delay) {
	  if (!handler) return
	  if (!delay) {
	    delay = 300
	  }
	  return _.debounce(handler, delay)
	}
	
	/**
	 * Install special array filters
	 */
	
	_.extend(exports, __webpack_require__(319))


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var transition = __webpack_require__(26)
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	
	function Fragment (linker, vm, frag, host, scope, parentFrag) {
	  this.children = []
	  this.childFrags = []
	  this.vm = vm
	  this.scope = scope
	  this.inserted = false
	  this.parentFrag = parentFrag
	  if (parentFrag) {
	    parentFrag.childFrags.push(this)
	  }
	  this.unlink = linker(vm, frag, host, scope, this)
	  var single = this.single = frag.childNodes.length === 1
	  if (single) {
	    this.node = frag.childNodes[0]
	    this.before = singleBefore
	    this.remove = singleRemove
	  } else {
	    this.node = _.createAnchor('fragment-start')
	    this.end = _.createAnchor('fragment-end')
	    this.frag = frag
	    _.prepend(this.node, frag)
	    frag.appendChild(this.end)
	    this.before = multiBefore
	    this.remove = multiRemove
	  }
	  this.node.__vfrag__ = this
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i])
	  }
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook)
	  }
	}
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this)
	  }
	  this.unlink()
	}
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore (target, withTransition) {
	  this.inserted = true
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  method(this.node, target, this.vm)
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 *
	 * @param {Boolean} [destroy]
	 */
	
	function singleRemove (destroy) {
	  this.inserted = false
	  var shouldCallRemove = _.inDoc(this.node)
	  var self = this
	  transition.remove(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    if (destroy) {
	      self.destroy()
	    }
	  })
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore (target, withTransition) {
	  this.inserted = true
	  var vm = this.vm
	  var method = withTransition !== false
	    ? transition.before
	    : _.before
	  _.mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm)
	  })
	  if (_.inDoc(this.node)) {
	    this.callHook(attach)
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 *
	 * @param {Boolean} [destroy]
	 */
	
	function multiRemove (destroy) {
	  this.inserted = false
	  var self = this
	  var shouldCallRemove = _.inDoc(this.node)
	  _.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach)
	    }
	    if (destroy) {
	      self.destroy()
	    }
	  })
	}
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}
	
	module.exports = Fragment


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var inDoc = _.inDoc
	var eventRE = /^v-on:|^@/
	
	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */
	
	exports._initEvents = function () {
	  var options = this.$options
	  if (options._asComponent) {
	    registerComponentEvents(this, options.el)
	  }
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}
	
	/**
	 * Register v-on events on a child component
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 */
	
	function registerComponentEvents (vm, el) {
	  var attrs = el.attributes
	  var name, handler
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    name = attrs[i].name
	    if (eventRE.test(name)) {
	      name = name.replace(eventRE, '')
	      handler = (vm._scope || vm._context).$eval(attrs[i].value, true)
	      vm.$on(name.replace(eventRE), handler)
	    }
	  }
	}
	
	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */
	
	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}
	
	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */
	
	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      ("development") !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}
	
	/**
	 * Setup recursive attached/detached calls
	 */
	
	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}
	
	/**
	 * Callback to recursively call attached hook on children
	 */
	
	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}
	
	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */
	
	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Callback to recursively call detached hook on children
	 */
	
	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}
	
	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */
	
	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}
	
	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */
	
	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(1).mergeOptions
	var uid = 0
	
	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */
	
	exports._init = function (options) {
	
	  options = options || {}
	
	  this.$el = null
	  this.$parent = options.parent
	  this.$root = this.$parent
	    ? this.$parent.$root
	    : this
	  this.$children = []
	  this.$refs = {}       // child vm references
	  this.$els = {}        // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	
	  // a uid
	  this._uid = uid++
	
	  // a flag to avoid this being observed
	  this._isVue = true
	
	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._shouldPropagate = false // for event propagation
	
	  // fragment instance properties
	  this._isFragment = false
	  this._fragment =         // @type {DocumentFragment}
	  this._fragmentStart =    // @type {Text|Comment}
	  this._fragmentEnd = null // @type {Text|Comment}
	
	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null
	
	  // context:
	  // if this is a transcluded component, context
	  // will be the common parent vm of this instance
	  // and its host.
	  this._context = options._context || this.$parent
	
	  // scope:
	  // if this is inside an inline v-for, the scope
	  // will be the intermediate scope created for this
	  // repeat fragment. this is used for linking props
	  // and container directives.
	  this._scope = options._scope
	
	  // fragment:
	  // if this instance is compiled inside a Fragment, it
	  // needs to reigster itself as a child of that fragment
	  // for attach/detach to work properly.
	  this._frag = options._frag
	  if (this._frag) {
	    this._frag.children.push(this)
	  }
	
	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }
	
	  // set ref
	  if (options._ref) {
	    (this._scope || this._context).$refs[options._ref] = this
	  }
	
	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )
	
	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}
	
	  // call init hook
	  this._callHook('init')
	
	  // initialize data observation and scope inheritance.
	  this._initState()
	
	  // setup event system and option events.
	  this._initEvents()
	
	  // call created hook
	  this._callHook('created')
	
	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Directive = __webpack_require__(299)
	var compiler = __webpack_require__(18)
	
	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */
	
	exports._compile = function (el) {
	  var options = this.$options
	
	  // transclude and init element
	  // transclude can potentially replace original
	  // so we need to keep reference; this step also injects
	  // the template and caches the original attributes
	  // on the container node and replacer node.
	  var original = el
	  el = compiler.transclude(el, options)
	  this._initElement(el)
	
	  // root is always compiled per-instance, because
	  // container attrs and props can be different every time.
	  var contextOptions = this._context && this._context.$options
	  var rootLinker = compiler.compileRoot(el, options, contextOptions)
	
	  // compile and link the rest
	  var contentLinkFn
	  var ctor = this.constructor
	  // component compilation can be cached
	  // as long as it's not using inline-template
	  if (options._linkerCachable) {
	    contentLinkFn = ctor.linker
	    if (!contentLinkFn) {
	      contentLinkFn = ctor.linker = compiler.compile(el, options)
	    }
	  }
	
	  // link phase
	  // make sure to link root with prop scope!
	  var rootUnlinkFn = rootLinker(this, el, this._scope)
	  var contentUnlinkFn = contentLinkFn
	    ? contentLinkFn(this, el)
	    : compiler.compile(el, options)(this, el)
	
	  // register composite unlink function
	  // to be called during instance destruction
	  this._unlinkFn = function () {
	    rootUnlinkFn()
	    // passing destroying: true to avoid searching and
	    // splicing the directives
	    contentUnlinkFn(true)
	  }
	
	  // finally replace original
	  if (options.replace) {
	    _.replace(original, el)
	  }
	
	  this._isCompiled = true
	  this._callHook('compiled')
	  return el
	}
	
	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */
	
	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._fragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}
	
	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 */
	
	exports._bindDir = function (descriptor, node, host, scope, frag) {
	  this._directives.push(
	    new Directive(descriptor, this, node, host, scope, frag)
	  )
	}
	
	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */
	
	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	    // unregister ref
	    var ref = this.$options._ref
	    if (ref) {
	      var scope = this._scope || this._context
	      if (scope.$refs[ref] === this) {
	        scope.$refs[ref] = null
	      }
	    }
	  }
	  // remove self from owner fragment
	  if (this._frag) {
	    this._frag.children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}
	
	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */
	
	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._context =
	  this._scope =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */
	
	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (true) {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}
	
	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */
	
	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (true) {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        ("development") !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var compiler = __webpack_require__(18)
	var Observer = __webpack_require__(328)
	var Dep = __webpack_require__(41)
	var Watcher = __webpack_require__(27)
	
	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */
	
	exports._initState = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}
	
	/**
	 * Initialize props.
	 */
	
	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    ("development") !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compiler.compileAndLinkProps(this, el, props, this._scope)
	    : null
	}
	
	/**
	 * Initialize the data.
	 */
	
	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (("development") !== 'production' &&
	          optionsData.hasOwnProperty(prop)) {
	        _.warn(
	          'Data field "' + prop + '" is already defined ' +
	          'as a prop. Use prop default value instead.'
	        )
	      }
	      if (this._props[prop].raw !== null ||
	          !optionsData.hasOwnProperty(prop)) {
	        _.set(optionsData, prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    this._proxy(key)
	  }
	  // observe data
	  Observer.create(data, this)
	}
	
	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */
	
	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}
	
	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */
	
	exports._proxy = function (key) {
	  if (!_.isReserved(key)) {
	    // need to store ref to self here
	    // because these getter/setters might
	    // be called by child scopes via
	    // prototype inheritance.
	    var self = this
	    Object.defineProperty(self, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return self._data[key]
	      },
	      set: function proxySetter (val) {
	        self._data[key] = val
	      }
	    })
	  }
	}
	
	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */
	
	exports._unproxy = function (key) {
	  if (!_.isReserved(key)) {
	    delete this[key]
	  }
	}
	
	/**
	 * Force update on every watcher in scope.
	 */
	
	exports._digest = function () {
	  for (var i = 0, l = this._watchers.length; i < l; i++) {
	    this._watchers[i].update(true) // shallow updates
	  }
	}
	
	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */
	
	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, this)
	            : _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}
	
	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be passed down as a prop to
	 * child components.
	 */
	
	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}
	
	/**
	 * Initialize meta information like $index, $key & $value.
	 */
	
	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      _.defineReactive(this, key, metas[key])
	    }
	  }
	}


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (item) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    var index = _.indexOf(this, item)
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)
	
	module.exports = arrayMethods


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var Dep = __webpack_require__(41)
	var arrayMethods = __webpack_require__(327)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}
	
	// Static methods
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	Observer.create = function (value, vm) {
	  if (!value || typeof value !== 'object') {
	    return
	  }
	  var ob
	  if (
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    (_.isArray(value) || _.isPlainObject(value)) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]])
	  }
	}
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    Observer.create(items[i])
	  }
	}
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val)
	}
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment (target, src) {
	  target.__proto__ = src
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive (obj, key, val) {
	  var dep = new Dep()
	  var childOb = Observer.create(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return val
	    },
	    set: function metaSetter (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = Observer.create(newVal)
	      dep.notify()
	    }
	  })
	}
	
	// Attach to the util object so it can be used elsewhere.
	_.defineReactive = defineReactive
	
	module.exports = Observer


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = []
	var queued = false
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var queue = __webpack_require__(329)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'
	
	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition (el, id, hooks, vm) {
	  this.id = id
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.justEntered = false
	  this.entered = this.left = false
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}
	
	var p = Transition.prototype
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.entered = false
	  this.callHookWithCb('enter')
	  if (this.entered) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	
	  // Importnatn hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true
	  var self = this
	  setTimeout(function () {
	    self.justEntered = false
	  }, 17)
	
	  var enterDone = this.enterDone
	  var type = this.getCssTransitionType(this.enterClass)
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass)
	      this.setupCssCb(transitionEndEvent, enterDone)
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone)
	    } else {
	      enterDone()
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass)
	  }
	}
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.entered = true
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.left = false
	  this.callHookWithCb('leave')
	  if (this.left) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone()
	    } else {
	      queue.push(this.leaveNextTick)
	    }
	  }
	}
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.left = true
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	  this.op = null
	}
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false) ||
	    // element is hidden
	    isHidden(this.el)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden (el) {
	  return !(
	    el.offsetWidth &&
	    el.offsetHeight &&
	    el.getClientRects().length
	  )
	}
	
	module.exports = Transition


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  var hasAttrs = el.hasAttributes()
	  if (!exports.commonTagRE.test(tag) && tag !== 'component') {
	    if (_.resolveAsset(options, 'components', tag)) {
	      return { id: tag }
	    } else {
	      var is = hasAttrs && getIsBinding(el)
	      if (is) {
	        return is
	      } else if (true) {
	        if (
	          tag.indexOf('-') > -1 ||
	          (
	            /HTMLUnknownElement/.test(el.toString()) &&
	            // Chrome returns unknown for several HTML5 elements.
	            // https://code.google.com/p/chromium/issues/detail?id=540526
	            !/^(data|time|rtc|rb)$/.test(tag)
	          )
	        ) {
	          _.warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly?'
	          )
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el)
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding (el) {
	  // dynamic syntax
	  var exp = _.attr(el, 'is')
	  if (exp != null) {
	    return { id: exp }
	  } else {
	    exp = _.getBindAttr(el, 'is')
	    if (exp != null) {
	      return { id: exp, dynamic: true }
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    vm[key] = vm._data[key] = value
	  }
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    ("development") !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      ("development") !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}
	
	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}
	
	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Enable debug utilities.
	 */
	
	if (true) {
	
	  var config = __webpack_require__(4)
	  var hasConsole = typeof console !== 'undefined'
	
	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */
	
	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }
	
	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */
	
	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }
	
	  /**
	   * Assert asset exists
	   */
	
	  exports.assertAsset = function (val, type, id) {
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(4)
	var transition = __webpack_require__(26)
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      ("development") !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */
	
	exports.attr = function (node, attr) {
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	exports.getBindAttr = function (node, name) {
	  var val = exports.attr(node, ':' + name)
	  if (val === null) {
	    val = exports.attr(node, 'v-bind:' + name)
	  }
	  return val
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	  if (!el.className) {
	    el.removeAttribute('class')
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}
	
	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	exports.trimNode = function (node) {
	  trim(node, node.firstChild)
	  trim(node, node.lastChild)
	}
	
	function trim (parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node)
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/
	exports.findRef = function (node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name
	      if (refRE.test(name)) {
	        node.removeAttribute(name)
	        return _.camelize(name.replace(refRE, ''))
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	exports.mapNodeRange = function (node, end, op) {
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    op(node)
	    node = next
	  }
	  op(end)
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	exports.removeNodeRange = function (start, end, vm, frag, cb) {
	  var done = false
	  var removed = 0
	  var nodes = []
	  exports.mapNodeRange(start, end, function (node) {
	    if (node === end) done = true
	    nodes.push(node)
	    transition.remove(node, vm, onRemoved)
	  })
	  function onRemoved () {
	    removed++
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i])
	      }
	      cb && cb()
	    }
	  }
	}


/***/ },
/* 334 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()


/***/ },
/* 335 */
/***/ function(module, exports) {

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	exports.set = function set (obj, key, val) {
	  if (obj.hasOwnProperty(key)) {
	    obj[key] = val
	    return
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val)
	    return
	  }
	  var ob = obj.__ob__
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  ob.convert(key, val)
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._proxy(key)
	      vm._digest()
	    }
	  }
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	exports.delete = function (obj, key) {
	  if (!obj.hasOwnProperty(key)) {
	    return
	  }
	  delete obj[key]
	  var ob = obj.__ob__
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	  if (ob.vms) {
	    var i = ob.vms.length
	    while (i--) {
	      var vm = ob.vms[i]
	      vm._unproxy(key)
	      vm._digest()
	    }
	  }
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/
	exports.isLiteral = function (exp) {
	  return literalValueRE.test(exp)
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : str
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g
	exports.camelize = function (str) {
	  return str.replace(camelizeRE, toUpper)
	}
	
	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g
	exports.hyphenate = function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	exports.extend = function (to, from) {
	  var keys = Object.keys(from)
	  var i = keys.length
	  while (i--) {
	    to[keys[i]] = from[keys[i]]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isArray = Array.isArray
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	exports.indexOf = function (arr, obj) {
	  var i = arr.length
	  while (i--) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	exports.looseEqual = function (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    exports.isObject(a) && exports.isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(1)
	var config = __webpack_require__(4)
	var extend = _.extend
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null)
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      _.set(to, key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      ("development") !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("development") !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init =
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  ("development") !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        ("development") !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        components[key] = _.Vue.extend(def)
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps (options) {
	  var props = options.props
	  var i
	  if (_.isArray(props)) {
	    options.props = {}
	    i = props.length
	    while (i--) {
	      options.props[props[i]] = null
	    }
	  } else if (_.isPlainObject(props)) {
	    var keys = Object.keys(props)
	    i = keys.length
	    while (i--) {
	      var val = props[keys[i]]
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val }
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = typeof asset === 'function'
	        ? ((asset.options && asset.options.name) || asset.id)
	        : (asset.name || asset.id)
	      if (!id) {
	        ("development") !== 'production' && _.warn(
	          'Array-syntax assets must provide a "name" or "id" field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	exports.resolveAsset = function resolve (options, type, id) {
	  var assets = options[type]
	  var camelizedId
	  return assets[id] ||
	    // camelCase ID
	    assets[camelizedId = _.camelize(id)] ||
	    // Pascal Case ID
	    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
	}


/***/ },
/* 337 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 338 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ])));
//# sourceMappingURL=app.js.map