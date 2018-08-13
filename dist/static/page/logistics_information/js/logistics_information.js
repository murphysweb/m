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
/******/ 	__webpack_require__.p = "//5e.dvmama.com/m/static/dist/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {




var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(18);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsRuntime = __webpack_require__(12);

var _dvdBaseJsRuntime2 = _interopRequireDefault(_dvdBaseJsRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @module dvd-base-js-ua
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Base/dvd-base-js-ua.git)
 */
exports.default = {
  // 当前页面ua
  ua: _dvdBaseJsRuntime2.default.isClient() ? navigator.userAgent : '',
  // 缓存，
  cache: {},
  /**
   * 当前ua是否匹配入参正则
   * @param regex 正则
   * @returns {boolean}
   */
  match: function match(_ref) {
    var regex = _ref.regex,
        ua = _ref.ua;

    if (Object.prototype.toString.call(regex) === '[object String]') {
      regex = new RegExp(regex, 'g');
    }
    return regex.test(ua || this.ua);
  },

  /**
   * 从缓存取匹配结果，如果未命中重新通过正则判断
   * @param cacheName {String}
   * @param regexArray {Regex}
   * @returns {boolean}
   */
  getFromCache: function getFromCache(cacheName, regexArray, ua) {
    /*// 如果未缓存过cache[cacheName]，则缓存对正则数组regStrArray匹配的结果
     if (this.cache[cacheName] === undefined) {
     // 正则数组regStrArray匹配的结果
     var cacheValue;
     for (var i in regexArray) {
     cacheValue = this.match(regexArray[i]);
     if (cacheValue) {
     break;
     }
     }
     // 缓存
     this.cache[cacheName] = cacheValue;
     }
     // 返回缓存中的值
     return this.cache[cacheName];*/

    // 正则数组regStrArray匹配的结果
    for (var i in regexArray) {
      if (this.match({ regex: regexArray[i], ua: ua })) {
        return true;
      }
    }
    return false;
  },

  /**
   * chrome浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36
  // * ios    Mozilla/5.0 (iPod; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.64 Mobile/13F69 Safari/601.1.46
  isChrome: function isChrome(ua) {
    return this.getFromCache('isChrome', ['Chrome', 'CriOS'], ua);
  },

  /**
   * uc浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-CN; MI 5 Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.3.810 U3/0.8.0 Mobile Safari/534.30
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.9.16.802 Mobile
  isUc: function isUc(ua) {
    return this.getFromCache('isUc', ['UCBrowser'], ua);
  },

  /**
   * QQ浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/6.7 Mobile Safari/537.36
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/6.0 MQQBrowser/6.7.2 Mobile/13F69 Safari/8536.25 MttCustomUA/2
  isQqBrowser: function isQqBrowser(ua) {
    return this.getFromCache('isQqBrowser', ['MQQBrowser'], ua);
  },

  /**
   * 小米系统浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.85 Mobile Safari/537.36 XiaoMi/MiuiBrowser/2.1.1
  isXiaoMiBrowser: function isXiaoMiBrowser(ua) {
    return this.getFromCache('isXiaoMiBrowser', ['XiaoMi/MiuiBrowser'], ua);
  },

  /**
   * safari浏览器
   * @returns {Boolean}
   */
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1
  isSafari: function isSafari(ua) {
    return this.getFromCache('isSafari', ['Version/\\d?[.]\\d Mobile/.* Safari/.*'], ua);
  },

  /**
   * 百度浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 baidubrowser/7.8.12.0 (Baidu; P1 6.0)
  // * ios
  isBaiduBrowser: function isBaiduBrowser(ua) {
    return this.getFromCache('isBaiduBrowser', ['baidubrowser'], ua);
  },

  /**
   * 搜狗浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5; Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.92 SDK/1.2.2.675 Mobile Safari/537.36 SogouMSE,SogouMobileBrowser/5.5.0
  // * ios
  isSougouBrowser: function isSougouBrowser(ua) {
    return this.getFromCache('isSougouBrowser', ['SogouMobileBrowser'], ua);
  },

  /**
   * 新浪微博
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 Weibo (Xiaomi-MI 5__weibo__6.6.0__android__android6.0)
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 Weibo (iPod5,1__weibo__5.4.0__iphone__os9.3.2)
  isSinaWeiBo: function isSinaWeiBo(ua) {
    return this.getFromCache('isSinaWeiBo', ['Weibo'], ua);
  },

  /**
   * QQ+QQ空间（QQ和QQ空间ua相同）
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036522 Safari/537.36 V1_AND_SQ_6.3.7_374_YYB_D QQ/6.3.7.2795 NetType/WIFI WebP/0.3.0 Pixel/1080
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 QQ/6.3.5.437 V1_IPH_SQ_6.3.5_1_APP_A Pixel/640 Core/UIWebView NetType/WIFI Mem/12
  isQq: function isQq(ua) {
    return this.getFromCache('isQq', [/QQ\/[0-9]?/]);
  },

  /**
   * 微信+朋友圈（微信和朋友圈ua相同）
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036523 Safari/537.36 MicroMessenger/6.3.18.800 NetType/WIFI Language/zh_CN
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.3.19 NetType/WIFI Language/zh_CN
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12D508 MicroMessenger/6.5.14 NetType/WIFI Language/zh_CN
  isWeiXin: function isWeiXin(ua) {
    return this.getFromCache('isWeiXin', ['MicroMessenger'], ua);
  },

  /**
   * 支付宝
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/1.0.0.100 U3/0.8.0 Mobile Safari/534.30 AlipayDefined(nt:WIFI,ws:360|640|3.0) AliApp(AP/9.6.8.053103) AlipayClient/9.6.8.053103 Language/zh-Hans
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 ChannelId(12) Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/9.6.6.05070802) AlipayClient/9.6.6.05070802 Language/zh-Hans
  isAlipay: function isAlipay(ua) {
    return this.getFromCache('isAlipay', ['AlipayClient'], ua);
  },

  /**
   * 搜狐新闻客户端
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 SohuNews/5.6.0 BuildCode/106 JsKit/1.0 (Android)
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 JsKit/1.0 (iOS)
  isSohuNewsClient: function isSohuNewsClient(ua) {
    return this.getFromCache('isSohuNewsClient', ['SohuNews', 'JsKit'], ua);
  },

  /**
   * android
   * @returns {Boolean}
   */
  isAndroid: function isAndroid(ua) {
    return this.getFromCache('isAndroid', ['Android'], ua);
  },

  /**
   * ios
   * @returns {Boolean}
   */
  isIos: function isIos(ua) {
    return this.getFromCache('isIos', ['iPhone'], ua);
  },

  /**
   * 手机端
   * @returns {Boolean}
   */
  isMobile: function isMobile(ua) {
    return this.getFromCache('isMobile', ['Mobile'], ua);
  },

  /**
   * 大V店客户端
   * @returns {Boolean}
   */
  // * android(正式环境):  Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.davdian.com/3.6.2
  // * android(beta环境):  Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.vyohui.cn/3.7.0/dvddomain=1
  // * ios(正式环境):  Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12D508 ios.davdian.com/5.0.0 /WebView=WKWeb
  isDvdApp: function isDvdApp(ua) {
    return this.getFromCache('isDvdApp', ['davdian', 'vyohui', 'bravetime'], ua);
  },

  /**
   * 获取大V店客户端版本号
   * @returns {String}
   */
  getDvdAppVersion: function getDvdAppVersion(ua) {
    var result = /(ios|android)(?:\.box)?\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)/.exec(ua || this.ua);
    if (result) {
      return result[3];
    }
  },

  /**
   * 获取大V店app当前环境
   * @returns {String}
   */
  getDvdAppEnv: function getDvdAppEnv(ua) {
    var result = /(ios|android)\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)\/(dev|beta|gray)/.exec(ua || this.ua);
    if (result) {
      return result[4];
    } else if (this.isDvdApp()) {
      return 'prod';
    } else {
      return '';
    }
    return (/(iPhone OS ([\d_]+))|(Android ([\d\.]+))/ig.exec(ua || this.ua)
    );
  },

  /**
   * 获取大V店app当前环境分支
   * @returns {String}
   */
  // Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.davdian.com/5.2.0/gray/dvddomain=1
  getDvdAppNum: function getDvdAppNum(ua) {
    var result = /(ios|android)\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)\/(dev|beta|gray)\/dvddomain=(\d+)/.exec(ua || this.ua);
    if (result) {
      return result[5] || '';
    }
  },

  /**
   * 获取ios系统版本
   * @returns {String}
   */
  getIosVersion: function getIosVersion(ua) {
    var result = /iPhone[ ]OS[ ](\d*_*\d*_*\d*)/.exec(ua || this.ua);
    if (result) {
      return result[1] ? result[1].replace(/_/g, '.') : '';
    }
  },

  /**
   * 获取android系统版本
   * @returns {String}
   */
  getAndroidVersion: function getAndroidVersion(ua) {
    var result = /android [\d._]+/.exec((ua || this.ua).toLowerCase());
    if (result) {
      return result[0] ? result[0].replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".").split(".")[0] : '';
    }
  },

  /**
   * 比较版本号
   * @param v1  版本号1
   * @param v2  版本号2
   * @returns {Number} 如果 > 0， 说明v1 > v2
   */
  compareVersion: function compareVersion(v1, v2) {
    // 用.分割版本号
    var subV1Arr = v1.split('.');
    var subV2Arr = v2.split('.');

    // 取.最多的数组长度
    var length = subV1Arr.length >= subV2Arr.length ? subV1Arr.length : subV2Arr.length;

    // 比较每个相对应的子版本号
    for (var i = 0; i < length; i++) {
      var subV1 = (subV1Arr[i] || 0) * 1;
      var subV2 = (subV2Arr[i] || 0) * 1;
      if (subV1 > subV2) {
        return 1;
      } else if (subV1 < subV2) {
        return -1;
      }
    }
    return 0;
  },

  /**
   * 获取手机系统版本号
   */
  getSysVersion: function getSysVersion(ua) {
    var result = /(?:iPhone OS ([\d_]+))|(?:Android ([\d\.]+))/ig.exec(ua || this.ua);
    return result[1] ? result[1].replace(/_/ig, '.') : result[2];
  },

  /**
   * 获取大V店app设备号
   */
  getDvdAppDeviceId: function getDvdAppDeviceId(ua) {
    var result = /\/deviceId=([^/ =]+)/.exec(ua || this.ua);
    return result ? result[1] : '';
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_factory;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(8);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(6);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {




/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(30)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(43);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsNative = __webpack_require__(10);

var _dvdServiceJsNative2 = _interopRequireDefault(_dvdServiceJsNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module dvd-service-js-util
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-util.git)
 */
exports.default = {
  /**
   * 获取文档滚动条-上方距离
   */
  getDocumentScrollTop: function getDocumentScrollTop() {
    return document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0;
  },

  /**
   * 获取文档滚动条-左侧距离
   */
  getDocumentScrollLeft: function getDocumentScrollLeft() {
    return document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0;
  },

  /**
   * 页面触底通知回调
   */
  pageScrollToBottom: function pageScrollToBottom(callback, callback_ts) {
    var ts = this;

    var lastScrollTop = 0;
    var currentScrollTop = 0;
    window.addEventListener('scroll', function () {
      currentScrollTop = ts.getDocumentScrollTop();
      if (currentScrollTop > lastScrollTop && document.documentElement.clientHeight + currentScrollTop >= document.body.clientHeight * 0.9) {
        callback_ts ? callback.call(callback_ts) : callback();
      }
      lastScrollTop = currentScrollTop;
    }, false);

    var lastY = 0;
    var currentY = 0;
    window.addEventListener('touchmove', function (event) {
      currentY = event.changedTouches[0].clientY;
      if (currentY < lastY && document.documentElement.clientHeight + currentScrollTop >= document.body.clientHeight * 0.9) {
        callback_ts ? callback.call(callback_ts) : callback();
      }
      lastY = currentY;
    }, false);
  },
  getOffsetLeft: function getOffsetLeft(node) {
    if (node.offsetParent) {
      return node.offsetLeft + this.getOffsetLeft(node.offsetParent);
    } else {
      return node.offsetLeft;
    }
  },
  getOffsetTop: function getOffsetTop(node) {
    if (node.offsetParent) {
      return node.offsetTop + this.getOffsetTop(node.offsetParent);
    } else {
      return node.offsetTop;
    }
  },

  /**
   * 获取页面基础域名
   */
  getBaseDomain: function getBaseDomain() {
    return (/(bravetime.net|vyohui.cn|davdian.com)/.exec(location.host)[0]
    );
  },

  /**
   * 获取页面二级域名
   */
  getSecondDomain: function getSecondDomain() {
    return (/(.*)[.](bravetime.net|vyohui.cn|davdian.com)/.exec(location.host)[1]
    );
  },

  /**
   * 调用该方法，说明页面需要返回刷新
   */
  backReload: function backReload() {
    var addListener = function addListener() {
      // 延迟添加事件，防止页面加载完毕后立即触发
      setTimeout(function () {
        window.addEventListener('pageshow', function () {
          location.reload();
        }, false);
      }, 1);
    };
    // 页面加载完毕后添加pageshow事件监听，只在返回时触发
    if (document.readyState === 'complete') {
      addListener();
    } else {
      window.addEventListener('load', addListener, false);
    }
  },

  /**
   * 打开新页面
   */
  open: function open(url) {
    if (_dvdBaseJsUa2.default.isDvdApp()) {
      _dvdServiceJsNative2.default.Browser.open({
        url: url
      });
    } else if (_dvdBaseJsUa2.default.isWeiXin()) {
      // 微信不支持打开新页面，且ios微信甚至连window.open方法都不支持
      location.href = url;
    } else {
      window.open(url);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsNative = __webpack_require__(10);

var _dvdServiceJsNative2 = _interopRequireDefault(_dvdServiceJsNative);

var _dvdServiceJsUtil = __webpack_require__(8);

var _dvdServiceJsUtil2 = _interopRequireDefault(_dvdServiceJsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module dvd-service-js-login
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-login.git)
 */
exports.default = {
  /**
   * @method
   * 功能: 用户是否已登录
   * 说明: 取dvdsid33-39位7个0为未登录
   */
  getDvdsid: function getDvdsid() {
    var dvdsid = _jsCookie2.default.get('dvdsid');
    return Object.prototype.toString.call(dvdsid) === '[object String]' ? dvdsid : '';
  },

  /**
   * 功能: 用户是否已登录
   * 说明: dvdsid第33-39位如果是7个0为未登录
   */
  isLogined: function isLogined() {
    var dvdsid = this.getDvdsid();
    return dvdsid && dvdsid.substr(32, 7) !== '0000000';
  },

  /**
   * 功能: 获取session id
   * 说明: 取dvdsid前32位
   */
  getSessionId: function getSessionId() {
    return this.getDvdsid().substr(0, 32);
  },

  /**
   * 功能: 获取userId
   * 说明: 取dvdsid第33-39位,并转为10进制
   */
  getUserId: function getUserId() {
    var sessionId = this.getDvdsid().substr(32, 7);
    return sessionId ? parseInt(sessionId, 16) : '';
  },

  /**
   * 功能: 获取用户身份
   * 说明: 取dvdsid第40位
   */
  getUserStatusCode: function getUserStatusCode() {
    return this.getDvdsid().substr(39, 1);
  },

  /**
   * 功能: 跳转到登录页，登录后返回
   * 说明: 调用此方法说明当前页面需要登录，如果未登录跳转登录页
   * @param param.success {Function} app中登录成功回调
   * @param param.error {Function} app中登录失败或者取消登录回调
   */
  goLoginPage: function goLoginPage(param) {
    if (_dvdBaseJsUa2.default.isDvdApp()) {
      _dvdServiceJsNative2.default.Account.login(param);
    } else {
      location.href = '/login.html?referer=' + encodeURIComponent(location.href);
      throw new Error('\u5373\u5C06\u8DF3\u8F6C\u767B\u5F55\u9875(' + location.href + ')\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
    }
  },

  /**
   * 功能: 自动跳转登录页
   * 说明: 调用此方法说明当前页面需要登录，如果未登录跳转登录页
   */
  needLogin: function needLogin(param) {
    if (!this.isLogined()) {
      this.goLoginPage(param);
      return true;
    }
    return false;
  },


  /**
   * 功能: 登录
   * @param param {Object} 复合参数
   * @param param.reload 登录成功后是否刷新页面
   * @param param.url 登录成功后的回跳地址
   * @param param.failUrl 登录失败后的回跳地址
   * @param param.urlParam {Object} 跳到登录页url后面的附带的参数（复合参数，key-value形式，每一项被转化成&xxx=xxx形式）
   */
  login: function login() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // 登录成功后是否刷新页面
    param.reload = param.reload !== undefined ? param.reload : true;

    // 如果已登录则不继续执行
    if (this.isLogined()) {
      // 如果有url则跳转url
      if (param.url) {
        if (param.open) {
          _dvdServiceJsUtil2.default.open(param.url);
          _dvdServiceJsNative2.default.Browser.open({
            url: param.url
          });
        } else {
          location.href = param.url;
        }
      }
      return;
    }

    if (_dvdBaseJsUa2.default.isDvdApp()) {
      // 唤起app登录
      _dvdServiceJsNative2.default.Account.login({
        success: function success() {
          if (param.url) {
            if (param.url.indexOf('/') === 0) {
              // 若果url是/xxx.html格式，则url前面自动补全协议和域名
              param.url = location.protocol + '//' + location.host + param.url;
            }
            // 需要app把登录后的强制刷新当前页去掉才能生效
            if (param.open) {
              _dvdServiceJsUtil2.default.open(param.url);
            } else {
              location.href = param.url;
            }
            throw new Error('\u5373\u5C06\u8DF3\u8F6C' + param.url + '\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
            // native.Browser.open({
            //   param.url,
            // });
          } else {
            if (param.reload) {
              location.reload();
            }
          }
        },
        error: function error() {
          if (param.failUrl) {
            location.href = param.failUrl;
          }
        }
      });
    } else {
      var queryString = '';
      if (param.urlParam) {
        for (var i in param.urlParam) {
          queryString += '&' + i + '=' + param.urlParam[i];
        }
      }

      // 登录成功回跳地址
      param.url = param.url || location.href;

      // 跳转H5登录页
      location.href = '/login.html?referer=' + encodeURIComponent(param.url) + queryString;
    }
    throw new Error('\u5373\u5C06\u8DF3\u8F6C\u767B\u5F55\u9875(\u767B\u5F55\u6210\u529F\u540E\u56DE\u8DF3\u5730\u5740\u4E3A\uFF1A' + param.url + ')\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
  },

  /**
   * 功能: 是否是已登录的买家
   */
  isBuyer: function isBuyer() {
    return this.isLogined() && this.getUserStatusCode() === '1';
  },

  /**
   * 功能: 是否是已登录的卖家
   */
  isSeller: function isSeller() {
    return this.isLogined() && this.getUserStatusCode() === '3';
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LiveVideo;

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsPopup = __webpack_require__(14);

var _dvdServiceJsPopup2 = _interopRequireDefault(_dvdServiceJsPopup);

var _dvdBaseJsRuntime = __webpack_require__(12);

var _dvdBaseJsRuntime2 = _interopRequireDefault(_dvdBaseJsRuntime);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
} /**
   * @module dvd-service-js-native
   * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-native.git)
   * @see http://wiki.bravetime.net/pages/viewpage.action?pageId=8192341
   */

var config = {
  // 默认分享信息
  defaultShareInfo: {
    title: 'MAMA+|大V店', // 分享标题
    desc: 'MAMA+|大V店', // 分享描述
    link: _dvdBaseJsRuntime2.default.isClient() ? window.location.href : 'https://bravetime.davdian.com', // 分享链接
    imgUrl: 'http://pic.davdian.com/free/index0925_icon1.png?x-oss-process=image/resize,m_fill,w_80' // 分享图标
  }
};

// 默认标题栏
var defaultInitHead = {
  showHead: 1, // 是否展示头部
  backOnHead: 1, // 头部返回按钮
  homeOnHead: 0, // 头部首页按钮
  shareOnHead: 0, // 头部分享按钮
  btnOnHead: 0, // 头部文字按钮
  btnText: '', // 头部文字按钮文字
  btnLink: '', // 头部文字按钮链接
  showFoot: 0 // 是否展示底部
};

// 默认标题栏
var defaultSetHead = {
  title: '',
  backBtn: '1', // 0表示头部不展示返回按钮，1表示展示
  homeBtn: '0', // 0表示头部不展示首页按钮，1表示展示
  shareBtn: '0' //0表示头部不展示分享按钮，1表示展示
  // shareMoney: '',    //0表示分享佣金为0不显示分享赚钱按钮，非0：展示分享赚钱按钮，在3.9.1之前用该字段
  // shareMoneyStr: '',   //在3.9.1中会用该字段
  // rightBtn: {    // rightBtn会覆盖其他字段
  //   text: '',
  //   textColor: '#ff4a7d',
  //   action: ''
  // },
};

/**
 * 功能: 拼接调用native的通信协议(核心方法)
 * 用法:
 * call({
      v: '3.1.0',
      host: 'Browser',
      action: 'open',
      param: param,
    });
 */
function getProtocol() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // 参数默认值
  options.param.success = options.param.success || function () {};
  options.param.error = options.param.error || function () {};
  // 回调名称
  var callbackName = 'native_callback_' + Math.random().toString().split('.')[1];
  if (_dvdBaseJsRuntime2.default.isClient()) {

    // 设置全局回调
    window[callbackName] = function (response) {
      // 多数native接口执行成功时response.code就会返回'1',执行失败时就会返回'0'。
      // 此处返回'1'时候正常回调success,但返回不等于'1'时一律执行error。
      // 如此一来,诸如Account.login这样的返回'0'|'1'|'2'的接口就可以处理'0'|'1'以外的情况了(在error中判断response === '0'|'2'|'3'|'4'|...)。
      if (response.code == '1') {
        if (options.param && options.param.success) options.param.success(response);
        if (options.param && options.param.content && options.param.content.success) {
          options.param.content.success(response);
        }
      } else {
        options.param.error(response);
      }
      // 执行完回收
      window[callbackName] = null;
    };

    // 设置分享回调
    if (options.param.shareCallBack) {
      var shareCb = options.param.shareCallBack;
      var shareCbName = 'native_share_callback_' + Math.random().toString().split('.')[1];
      window[shareCbName] = function (response) {
        // 执行业务回调
        shareCb(response);
      };
      options.param.shareCallBack = shareCbName;
    }
  }

  // 拼接唤起native协议
  var protocol = 'davdian://call.' + options.host + '.com?action=' + options.action + '&params=' + encodeURIComponent(JSON.stringify(options.param)) + '&callback=' + callbackName + '&minv=' + options.v;
  return protocol;
}

/**
 * 功能: 端内调用app
 * 用法:
 * call({
      v: '3.1.0',
      host: 'Browser',
      action: 'open',
      param: {},
    });
 */
function innerCall() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // 不在app中,直接返回
  if (!_dvdBaseJsUa2.default.isDvdApp()) return;
  // 参数检查
  if (!param.host || !param.action || !param.v) {
    throw new Error('参数不全');
  }
  // 参数默认值
  param.invalid = param.invalid || function () {
    // popup.toast("请升级您的APP到最新版");
  };

  // 当前版本高于指定版本,可以调用native,否则进行提示
  if (_dvdBaseJsUa2.default.compareVersion(_dvdBaseJsUa2.default.getDvdAppVersion(), param.v) >= 0) {
    // 客户端端内调用协议
    var protocol = getProtocol(param);

    // 是否输出调试信息
    if (param.debug) {
      // 在页面底部打印调用native协议
      var logDom = document.createElement('div');
      logDom.style.margin = '10px';
      logDom.textContent = protocol;
      document.body.appendChild(logDom);
      _dvdServiceJsPopup2.default.debug({
        title: protocol
      });
      alert(protocol);
    }

    // 日志
    console.log(protocol);

    // 调用native, timeout解决协议覆盖问题
    // location.href = protocol;

    // 调用native
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = protocol;
    document.body.appendChild(iframe);
  } else {
    // 版本错误提示
    param.invalid();
  }
}

/**
 * 功能: 端外调用app(唤起后再执行app接口)
 * 用法:
 * call({
      v: '3.1.0',
      host: 'Browser',
      action: 'open',
      param: {
        invoke: true,
        ...
      },
    });
 */
function outerCall() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var stayCurrentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // 在app中,直接返回
  if (_dvdBaseJsUa2.default.isDvdApp()) return;

  // 端内调用协议
  var protocol = getProtocol(param);

  if (_dvdBaseJsUa2.default.isAndroid()) {
    // 端外唤起协议
    var outerProtocol = 'davdian://invoke.davdian.com?cmd=' + encodeURIComponent(protocol);

    // 打印协议
    console.log(outerProtocol);

    if (_dvdBaseJsRuntime2.default.isClient()) {
      // 唤起app
      location.href = outerProtocol;

      if (!stayCurrentPage) {
        // 兜底跳转下载页
        setTimeout(function () {
          location.href = '//a.app.qq.com/o/simple.jsp?pkgname=com.davdian.seller';
        }, 3000);
      }
    }
  } else if (_dvdBaseJsUa2.default.isIos()) {
    // let env = /(davdian\.com|vyohui\.cn|bravetime\.net)/.exec(location.href)[0];

    // 端外唤起协议
    var _outerProtocol = '//invoke.davdian.com?cmd=' + encodeURIComponent(protocol);

    // 打印协议
    console.log(_outerProtocol);

    // alert(protocol)
    // alert(outerProtocol);

    if (_dvdBaseJsRuntime2.default.isClient()) {
      // 唤起app
      location.href = _outerProtocol;
    }
  }
}

/**
 * 功能: 调用native(核心方法)
 * 用法:
 * call({
      v: '3.1.0',
      host: 'Browser',
      action: 'open',
      param: {
        invoke: true,
        ...
      },
    });
 * stayCurrentPage 为true 代表从外部跳转时不跳转应用宝 留在当前页
 */
function call() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var stayCurrentPage = arguments[1];

  // 如果param.param.invoke为真,需要先唤起native再执行cmd
  var a = '';
  for (var p in param.param.content) {
    a += p + '=' + param.param.content[p];
  }
  // alert(a);
  if (param.param.invoke) {
    delete param.param.invoke;
    outerCall(param, stayCurrentPage);
  } else {
    innerCall(param);
  }
}

var native = {
  /****************************** 1、账户相关 ******************************/
  Account: {
    /**
     * 功能: 登录
     * 用法:
     * native.Account.login()
     */
    login: function login() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var debug = arguments[1];

      setTimeout(function () {
        call({
          v: '2.4.0',
          host: 'Account',
          action: 'login',
          param: param,
          debug: debug
        });
      }, 500);
    }
  },

  /****************************** 2、直播相关 ******************************/
  LiveVideo: (_LiveVideo = {
    /**
     * 功能: 跳转直播只有当App未启动，或处于首页4个tab页面时（即首页上未盖住其他页面的情况）才进行跳转，否则不进行跳转，以防止出现无法预期的异常情况
     * 用法:
     * native.LiveVideo.goTab({
        userId: "用户Id",
      })
     */
    goTab: function goTab() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.4.0',
        host: 'LiveVideo',
        action: 'goTab',
        param: param
      });
    },

    /**
     * 功能: 进入某个直播间isPlaying决定客户端在获取到状态为回顾时，是否需要提示；fromPush用来决定如何提示用户（推送和普通流程不同）
     * 用法:
     * native.LiveVideo.enterRoom({
       "liveId" : "房间号",
       "isPlaying":"1/2/3" ,// 1表示直播中，2是回放，3是整理中
       "fromPush":"0/1" // 0表示不来自于推送，1表示来自推送
      })
     */
    enterRoom: function enterRoom() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'LiveVideo',
        action: 'enterRoom',
        param: param
      });
    },

    /**
     * 功能: 进入直播申请页，若已有进行中申请，则显示申请进度（审核中或审核被拒绝）
     * 用法:
     * native.LiveVideo.applyVideoLive()
     */
    applyVideoLive: function applyVideoLive() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'LiveVideo',
        action: 'applyVideoLive',
        param: param
      });
    },

    /**
     * 功能: 展示直播申请结果
     * 用法:
     * native.LiveVideo.showApplyResult({
        "result":"0/1" // 0表示未通过，1表示通过
      })
     */
    showApplyResult: function showApplyResult() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'LiveVideo',
        action: 'showApplyResult',
        param: param
      });
    },

    /**
     * 功能: 进入某个话题列表
     * 用法:
     * native.LiveVideo.openTopicVideoList({
        "type":"video/voice",//video:视屏直播，voice:语音回顾
        "name":"话题标题" ,
        "ID":"话题ID"
      })
     */
    openTopicVideoList: function openTopicVideoList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.7.0',
        host: 'LiveVideo',
        action: 'openTopicVideoList',
        param: param
      });
    },

    /**
     * 功能: 进入全部话题列表
     * 用法:
     * native.LiveVideo.openTopicList()
     */
    openTopicList: function openTopicList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.7.0',
        host: 'LiveVideo',
        action: 'openTopicList',
        param: param
      });
    }
  }, _defineProperty(_LiveVideo, 'openTopicVideoList', function openTopicVideoList() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    call({
      v: '2.7.0',
      host: 'LiveVideo',
      action: 'openTopicVideoList',
      param: param
    });
  }), _defineProperty(_LiveVideo, 'openEssenceList', function openEssenceList() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    call({
      v: '3.4.0',
      host: 'LiveVideo',
      action: 'openEssenceList',
      param: param
    });
  }), _LiveVideo),

  /****************************** 3、用户信息 ******************************/
  PersonInfo: {
    /**
     * 功能: 查看(大V课讲师的)个人主页
     * 用法:
     * native.PersonInfo.showPersonHome({
        userId: "用户Id",
      })
     */
    showPersonHome: function showPersonHome() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'PersonInfo',
        action: 'showHomePage',
        param: param
      });
    }
  },

  /****************************** 4、浏览 ******************************/
  Browser: {
    /**
     * 功能: 打开新的webview
     * 用法:
     * native.Browser.open({
        url: 'http://18514008282.vyohui.cn/',
      });
     */
    open: function open() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'Browser',
        action: 'open',
        param: param
      });
    },

    /**
     * 功能: 关闭当前webview
     * 用法:
     * native.Browser.close();
     */
    close: function close() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.5.0',
        host: 'Browser',
        action: 'close',
        param: param
      });
    },

    /**
     * 功能: 设置native头部标题栏
     * 用法:
     * native.Browser.setHead({
        'title' : '修改后的标题',
        'backBtn' : '0/1', // 0表示头部不展示返回按钮，1表示展示
        'homeBtn' : '0/1', // 0表示头部不展示首页按钮，1表示展示
        'shareBtn' : '0/1', //0表示头部不展示分享按钮，1表示展示
        'shareMoney' : '分享获得返现数', //0表示分享返现为0不显示分享赚钱按钮，非0：展示分享赚钱按钮，在3.9.1之前用该字段
        'shareMoneyStr':'分享获取返现数显示的字符串',//在3.9.1中会用该字段
        'rightBtn' : {
          'text' : '头部右部展示的文字按钮文字',        
          'textColor':'头部右部按钮文字颜色',
          'action' : '文字按钮需要执行的JS'
        },
        'hideHead' : '0',
      })
     */
    setHead: function setHead() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var debug = arguments[1];

      call({
        v: '2.6.0',
        host: 'Browser',
        action: 'setHead',
        param: param,
        debug: debug
      });
    },

    /**
     * 功能: 初始化native头部标题栏
     * 用法:
     * native.Browser.initHead({
        content: JSON.stringify({
          showHead: 1,
          showFoot: 0,
          backOnHead: 1,
          homeOnHead: 0,
          shareOnHead: 0,
          btnOnHead: 0,
          btnText: "",
          btnLink: ""
        })
     })
     */
    initHead: function initHead() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.4.0',
        host: 'Browser',
        action: 'initHead',
        param: param
      });
    },

    /**
     * app支付
     * 用法:
     * native.Browser.pay({
        "url": "",
        "pay_type": "1",   // payType的值为0则为默认1为组团参与者，2为组团发起者。
        "openDVD": "0",     // 判断是否为开店支付：0为普通支付，1为开店支付  该参数在4.2.0之后用到
        "pay_id": "xxx",    // 支付ID
        "sign": "",
        "platform": "2",     // 直接调用支付平台，0：直接调用微信支付，1：直接调用支付宝支付。2:苹果内购
        "appleGoods_id": '',  // 苹果的商品ID(只在内购中使用)
        "iap_type": ''        // 内购的商品类型,取值范围：album(合辑音频类型)， course(大V课)，vip(购买会员)
      });
     */
    pay: function pay() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.1.0',
        host: 'Browser',
        action: 'pay',
        param: param
      });
    },

    /**
     * 功能: 添加订单选择身份证
     * 用法:
     * native.Browser.selectIdentity({
        cardName: ''
      })
     */
    selectIdentity: function selectIdentity() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.7.0',
        host: 'Browser',
        action: 'selectIdentity',
        param: param
      });
    },

    /**
     * 功能: APP中点击图片显示大图
     * 用法:
     * native.Browser.selectIdentity({
        cardName: ''
      })
     */
    showBigImage: function showBigImage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.1.0',
        host: 'Browser',
        action: 'showBigImage',
        param: param
      });
    },
    showWebHeight: function showWebHeight() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.2.0',
        host: 'Browser',
        action: 'showWebHeight',
        param: param
      });
    },
    goNativeHomePage: function goNativeHomePage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.2.0',
        host: 'Browser',
        action: 'goNativeHomePage',
        param: param
      });
    },

    /**
     * 1018爆款商品预约
     * native.Browser.goodsBook({
        goodsId: '商品Id',
        goodsTitle: '商品标题',
        goodsImage: '商品图片',
        goodsStartTime: '开抢时间',
        goodsUrl: '商品详情链接',
        goodsListUrl: '商品列表链接'
      });
     */
    goodsBook: function goodsBook() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      call({
        v: '5.1.0',
        host: 'Browser',
        action: 'goodsBook',
        param: param,
        debug: debug
      });
    },

    /**
     * 返回上一页
     * native.Browser.goBack({
        needRefresh : 0  // 是否需要刷新 1需要，0不需要，默认为不需要
      });
     */
    goBack: function goBack() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.2.0',
        host: 'Browser',
        action: 'goBack',
        param: param
      });
    },

    /**
     * 大v店金币苹果充值
     * native.Browser.payRecharge({
        "appleGoods_id": '', //苹果的商品ID(只在内购中使用)
        "priceId":"2234"
      });
     */
    payRecharge: function payRecharge() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'Browser',
        action: 'payRecharge',
        param: param
      });
    },

    /**
     * 使用苹果内购购买会员
     * native.Browser.payVip({
         "appleGoods_id": '', //苹果的商品ID(只在内购中使用)
         "dvdItemId":"2234"
      });
     */
    payVip: function payVip() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'Browser',
        action: 'payVip',
        param: param
      });
    },

    /**
     * 返回上一页
     * native.Browser.openImageBrowser({
         currentPageIndex: "1"  //"当前数据的下一页页码（当前为第2页数据则传3）"
         id: "1"  //"id"
         currentImgUrl: "http://asdsadsadd.jpg"  //"用户点击的图片地址"
         jsonString:   //"json数据，格式为string类型" 格式：{data:[{"comment":"评论内容","imageList":["imageUrl",..]},..]}
     });
     */
    openImageBrowser: function openImageBrowser() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.5.0',
        host: 'Browser',
        action: 'openImageBrowser',
        param: param
      });
    },

    /**
     * 获取地理位置
     * native.Browser.getLocation({
        "code" : "0/1" // 1表示返回成功，0表示返回失败
        "country" : "中国"  //国家
        "state"："北京"     //省
        "city":"北京"         //市
        "district":"朝阳区"  //区
        "address":"中国北京市朝阳区望京东街1号摩托罗拉大厦"
        "location":"123.342342,23.234234"  //坐标
     });
     */
    getLocation: function getLocation() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Browser',
        action: 'getLocation',
        param: param
      });
    },

    /**
     * 图片上传
     * native.Browser.uploadImage({
       "sourceType" : "0/1/2",//0表示相机拍摄；1表示相册选择；2表示弹出选择相机拍照和相册选择的框；
       "maxImageNumber": "9",   //允许一次上传的图片的最大数限制,最大设置9张;
       "compress":"0到1",//质量压缩比例 1为不压缩  0.8为压缩至原图的80%
       "tailor"："0/1",//是否要求裁剪，0,不裁剪，1，裁剪；只有单张图支持裁剪，多张图不支持裁剪；
       "biz":"业务参数"//1、新鲜事 2：商品 3：我的 4：学院直播 5：直播缩略图 6：故事妈妈
     });
     */
    uploadImage: function uploadImage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Browser',
        action: 'uploadImage',
        param: param
      });
    }
  },

  /****************************** 5、购物车 ******************************/
  ShopCart: {
    /**
     * 功能: 商品加入购物车
     * 用法:
     * native.ShopCart.open({
        "goodsID" : "商品ID",
        "cout" : "商品数量"
      });
     */
    addGoodsToShopCart: function addGoodsToShopCart() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '2.6.0',
        host: 'ShopCart',
        action: 'addGoodsToShopCart',
        param: param
      });
    }
  },

  /****************************** 6、发现社区 ******************************/
  Community: {
    /**
     * 功能: 打开发现社区
     * 用法:
     * native.Community.openCommunity(;
     */
    openCommunity: function openCommunity() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.1.0',
        host: 'Community',
        action: 'openCommunity',
        param: param
      });
    }
  },

  /****************************** 7、share分享 ******************************/
  Share: {
    /**
     * 分享卡
     * 用法:
     * native.Share.shareInfo({
        "show":"是否显示下方shareView",//0：不显示，1：显示。
        "shareType":"是否只分享图片"，//0：分享图文链接方式，1：只分享图片 （支持图片分享的分享图片、不支持分享图文链接（需要传tilte、desc、link、imgUrl））。
        "sharePlatform":"分享方式",//0：微信朋友圈，1：微信好友，2：QQ好友，3：QQ空间，4：短信，5：复制功能。
        "shareTitle":"底部特殊分享标题",
        "shareDesc":"底部特殊分享描述",
        "title":"分享标题",
        "desc":"分享内容描述",
        "link":"分享链接',
        "imgUrl":"分享图片链接",
        "bigImageUrl":"只分享图片：大图片链接",
        "shareSource":"分享统计的shareSource", //h5分享为15或者没有这个字段，原生的一定要传根据分享列表传值http://wiki.bravetime.net/pages/viewpage.action?pageId=15106888
      })
     */
    shareInfo: function shareInfo() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: param.v || '3.3.0',
        host: 'Share',
        action: 'shareInfo',
        param: param
      });
    },

    /**
     * 分享卡
     * 用法:
     * native.Share.share({
        courseId: '直播ID',
      })
     */
    shareCard: function shareCard() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.4.0',
        host: 'Share',
        action: 'cardShare',
        param: param
      });
    },

    /**
     * 素材分享
     * 用法:
     * native.Share.materialShare({
        "pageId":"素材分享页id"
      })
     */
    materialShare: function materialShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.6.0',
        host: 'Share',
        action: 'materialShare',
        param: param
      });
    },

    /**
     * 小书库分享卡分享
     * 用法:
     * native.Share.recordCardShare({
        "recordId":"打卡内容Id"
     })
     */
    recordCardShare: function recordCardShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'Share',
        action: 'recordCardShare',
        param: param
      });
    },

    /**
     * 海报分享卡分享
     * 用法:
     * native.Share.posterCardShare({
        "recordId":"打卡内容Id"
     })
     */
    posterCardShare: function posterCardShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.5.0',
        host: 'Share',
        action: 'posterCardShare',
        param: param
      });
    },

    /**
     * 单平台分享
     * 用法:
     * native.Share.singlePlatformShare({
       "shareType":"分享的内容样式"，//0：分享图文链接方式，1：只分享图片 2:只分享文字 （没有此值默认分享图文链接）
        "sharePlatform":"显示的分享平台",//0：微信朋友圈，1：微信好友，2：QQ好友，3：QQ空间，4：复制功能。
        "title":"分享标题",
        "desc":"分享内容描述",
        "link":"分享链接',
        "imgUrl":"分享图片Url"
      })
     */
    singlePlatformShare: function singlePlatformShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.5.0',
        host: 'Share',
        action: 'singlePlatformShare',
        param: param
      });
    },

    /**
     * 多图分享
     * 用法:
     * native.Share.imgListShare({
        //分享信息
        text: "分享文案",
        imgList: ["http://asdasd.png", "http://dsadwdqfqwf.png"], //json字符串
        //打点统计信息
        production: "31", //来源页面，31代表商品详情页面
        actionType: "0/1/2", // 页面点击的位置 0：默认，1：商品详情页右上角分享按钮点击调起面板 2:商品详情页一键分享按钮点击调起面板
      })
     */
    imgListShare: function imgListShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Share',
        action: 'imgListShare',
        param: param
      });
    },

    /**
     * 视频分享
     * 用法:
     * native.Share.videoShare({
        //分享信息
        imgUrl: "http://sadasdasd.png", //分享的图标
        title: "分享标题",
        text: "分享文案",
        url: "跳转链接",
        videoUrl: "http://asdisadniaondosand.mp4", //视频地址
        //打点统计信息
        production: "31", //来源页面，31代表商品详情页面
        actionType: "0/1/2", // 页面点击的位置 0：默认，1：商品详情页右上角分享按钮点击调起面板 2:商品详情页一键分享按钮点击调起面板
      })
     */
    videoShare: function videoShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Share',
        action: 'videoShare',
        param: param
      });
    },

    /**
     * 商品素材分享
     * 用法:
     * native.Share.goodsMaterialShare({
        //图文链接分享信息
        "title": "面板的标题文案",
        "desc": "面板的描述文案",
        "imgUrl": "http://sadasdasd.png", //图文链接分享的图片地址
        "shareTitle": "图文链接的分享标题",
        "shareDesc": "图文链接的分享描述",
        "url": "跳转地址",
        //素材分享信息
        "goodsImageUrl": "http://pic.jj.jpg", //h5合成的图片二维码地址
        "materials": [{
          "materialType": "1"//1表示图片，2表示视频,
          "copyWriting": "商品素材文案",
          "images": [
            "http://pic.davdian.com/supplier/2017/08/14/800_800_a906cb3d1bb9013661ccf3f977704913.jpg", //图片地址，当素材类型为1时才会有值},
            {
              "materialType": 2,//素材类型1、图片；2、视频
              "copyWriting": "商品素材文案",//文案
              //图片地址，当素材类型为1时才会有值
              "videoUrl": "http://media.davdian.com/goodsVideo/2017/06/14/ad614c02df201d91a96e1e9e2edf2177.mp4",//视频地址
              "videoImg": "http://pic.davdian.com/supplier/2017/08/14/800_800_a906cb3d1bb9013661ccf3f977704913.jpg",//视频图片地址
            },
          ],
          //打点统计信息
          "production": "31", //来源页面，31代表商品详情页面
          "actionType": "0/1/2", // 页面点击的位置 0：默认，1：商品详情页右上角分享按钮点击调起面板 2:商品详情页一键分享按钮点击调起面板}
     }],
     })
     */
    goodsMaterialShare: function goodsMaterialShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Share',
        action: 'goodsMaterialShare',
        param: param
      });
    },

    /**
     * 单图分享
     * 用法:
     * native.Share.imageShare({
        //分享信息
        "imgUrl": "http://sadasdasd.png", //分享图片url
        //打点统计信息
        "production": "31", //来源页面，31代表商品详情页面
        "actionType": "0/1/2", // 页面点击的位置 0：默认，1：商品详情页右上角分享按钮点击调起面板 2:商品详情页一键分享按钮点击调起面板
      });
     */
    imageShare: function imageShare() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Share',
        action: 'imageShare',
        param: param
      });
    }
  },

  /****************************** 8、语音直播相关 ******************************/
  VoiceLive: {
    /**
     * 功能: 打开语音直播介绍页
     * 用法:
     * native.VoiceLive.openVoiceIntro({
        "courseId":"语音直播间id",//语音直播间id，根据courseId去请求得到加载网址。
        "fromPush":"判断是否未推送",//0:代表非推送打开，1：推送打开 。
        "messageType":"推送消息类型",//只有判断为推送消息才会解析该参数 1：语音直播即将开始消息，2:语音直播问题被回答消息；
      });
     */
    openVoiceIntro: function openVoiceIntro() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.4.0',
        host: 'VoiceLive',
        action: 'openVoiceIntro',
        param: param
      });
    },

    /**
     * 功能: 打开老师信息页
     * 用法:
     * native.VoiceLive.openTeacherHome({
        "teacherId" : "老师ID"
      });
     */
    openTeacherHome: function openTeacherHome() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.4.0',
        host: 'VoiceLive',
        action: 'openTeacherHome',
        param: param
      });
    },

    /**
     * 功能: 进入直播间
     * 用法:
     * native.VoiceLive.enterVoiceRoom({
        "courseId": "语音直播间id"
      });
     */
    enterVoiceRoom: function enterVoiceRoom() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.4.0',
        host: 'VoiceLive',
        action: 'enterRoom',
        param: param
      });
    },

    /**
     * 功能: 进入全部课程列表
     * 用法:
     * native.VoiceLive.enterCourseList();
     */
    enterCourseList: function enterCourseList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.7.0',
        host: 'VoiceLive',
        action: 'enterCourseList',
        param: param
      });
    },

    /**
     * 功能: 进入语音直播
     * 用法:
     * native.VoiceLive.enterOldVoiceLiveRoom({
         "liveId": "149",//直播id
         "title": "著名亲子教育专家 卢洪波：孩子贪玩，我该怎么办？",//标题
         "status": "4",//状态（2：直播结束前 3：直播整理中 4：直播回顾）
         "intro": "分享时间:2016年07月18日（周一）14:00-15:00　　分享内容:　　很多父母一直处于困惑纠结中，孩子小的时候，父母想尽一切办法教TA玩，但是孩子从上幼儿园开始，父母开始限制TA玩，上小学后，几乎就不允许玩，然后就会发现孩子是想尽一切办法在找时间偷着玩：听课时，因为没有玩具，玩手指头；写作业时，趁着思考的间隙，玩转笔；走路时，没有足球，踢石头子......家长挂在嘴边上的话又多了一句“别玩，好好学习”“别玩，快写！”“别玩，好好走路”等等。　　　　作为父母，我们是怎么认识玩的呢？孩子的成长是否需要玩呢？到底应该让孩子玩什么，怎么玩呢？在玩中，应该培养哪些优秀好好学习”“别玩，快写！”“别玩，好好走路”等等。　　　　作为父母，我们是怎么认识玩的呢？孩子的成长是否需要玩呢？到底应该让孩子玩什么，怎么玩呢？在玩中，应该培养哪些优秀\345\223品质呢？如何实现在玩中学，学中玩的理想教育呢？PS:&nbsp;&nbsp;在大V店APP里预约听课，可以立即向分享老师提问哦！听课指南："(需要将/n、/r替换为//n、//r),//课程简介、分享描述内容
         "smallImageUrl": "http://pic.davdian.com/free/2016/07/01/320_320_d9c182776612fe1f3243b763dcf9a1b5.jpg",//分享显示图片
         "reviewUrl": "/index.php?m=default&c=live&a=liveinfo&id=149",//回顾网页
         "shareUrl": "/index.php?m=default&c=live&a=liveinfo&id=149"//分享的链接
       });
     */
    enterOldVoiceLiveRoom: function enterOldVoiceLiveRoom() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.7.0',
        host: 'VoiceLive',
        action: 'enterOldVoiceLiveRoom',
        param: param
      });
    },

    /**
     * 功能: 进入全部笔记页面
     * 用法:
     * native.VoiceLive.callAppEnterAllNote()
     });
     */
    callAppEnterAllNote: function callAppEnterAllNote() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.9.2',
        host: 'VoiceLive',
        action: 'openCourseCommentList',
        param: param
      });
    },

    /**
     * 功能: 进入写笔记页面
     * 用法:
     * native.VoiceLive.callAppEnterWriteNote()
     });
     */
    callAppEnterWriteNote: function callAppEnterWriteNote() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.1.0',
        host: 'VoiceLive',
        action: 'openCourseNoteEdit',
        param: param
      });
    }
  },

  /****************************** 9、社群 ******************************/
  CommunityChat: {
    /**
     * 功能: 打开社群
     * 用法:
     * native.CommunityChat.enterCommunityChat();
     */
    enterCommunityChat: function enterCommunityChat() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.8.0',
        host: 'CommunityChat',
        action: 'enterCommunityChat',
        param: param
      });
    },

    /**
     * 功能: 打开社群成员列表
     * 用法:
     * native.CommunityChat.enterCommunityMemberList({
        "communityId" : "社群id"
      });
     */
    enterCommunityMemberList: function enterCommunityMemberList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.8.0',
        host: 'CommunityChat',
        action: 'enterCommunityMemberList',
        param: param
      });
    }
  },

  /****************************** 10、搜索相关 ******************************/
  Search: {
    /**
     * 功能: 进入商品搜索结果页
     * 用法:
     * native.Search.enterGoodsSearchResult({
        "name" : "书包"
      });
     */
    enterGoodsSearchResult: function enterGoodsSearchResult() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.9.0',
        host: 'Search',
        action: 'enterGoodsSearchResult',
        param: param
      });
    }
  },

  /****************************** 11、H5触发cmd命令 ******************************/
  BrowserTouch: {
    /**
     * 功能: H5触发cmd客户端实现回到上一级页面
     * 用法:
     * native.BrowserTouch.goBackToRootPage();
     */
    goBackToRootPage: function goBackToRootPage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '3.9.0',
        host: 'BrowserTouch',
        action: 'goBackToRootPage',
        param: param
      });
    },

    /**
     * 功能: H5触发cmd客户端复制文案到剪切板
     * 用法:
     * native.BrowserTouch.copyText();
     */
    copyText: function copyText() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.2.0',
        host: 'BrowserTouch',
        action: 'copyText',
        param: param
      });
    },

    /**
     * 功能: 大V课显示课程编辑
     * 用法:
     * native.BrowserTouch.showCourseEdit({
        marginRight: '10',
     });
     */
    showCourseEdit: function showCourseEdit() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.2.0',
        host: 'BrowserTouch',
        action: 'showCourseEdit',
        param: param
      });
    }
  },
  /****************************** 12、H5触发cmd命令 ******************************/
  Common: {
    /**
     * 功能: H5触发cmd客户端实现回到上一级页面
     * 用法:
     * native.Common.log();
     */
    log: function log() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '4.1.0',
        host: 'Common',
        action: 'log',
        param: param
      });
    },

    /**
     * 下载图片集合
     * 用法:
     * native.Common.downloadImages({
        "imgList": [
          "http://asdasdiasndiad.png",
          "http://asdasdiasndiad.png"
        ]
      });
     */
    downloadImages: function downloadImages() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Common',
        action: 'downloadImages',
        param: param
      });
    },

    /**
     * 下载视频
     * 用法:
     * native.Common.downloadVideo({
        "videoUrl": "http://asdhisaodioasd.mp4"
      });
     */
    downloadVideo: function downloadVideo() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.6.0',
        host: 'Common',
        action: 'downloadVideo',
        param: param
      });
    }
  },

  /****************************** 13、音频command命令 ****************************/
  Audio: {
    /**
     * 功能: H5触发cmd客户端实现回到上一级页面
     * 用法:
     * native.Audio.goAudioDetail();
     */
    goAudioDetail: function goAudioDetail() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.0.0',
        host: 'Audio',
        action: 'goAudioDetail',
        param: param
      });
    },

    /**
     * 功能: H5触发cmd客户端播放暂停音频
     * 用法:
     * native.Audio.audioPlay(
     *  {
          "sortNo" : "57",//当前被点击的音频下标索引
          "alummId" : "13",//当前合辑id
          "soundId" : "声音Id", // 音频id
         }
     * );
     */
    audioPlay: function audioPlay() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (param.sortNo) {
        param.sortNo = param.sortNo.toString();
      }
      param.albumId = param.albumId.toString();
      call({
        v: '5.0.0',
        host: 'Audio',
        action: 'audioPlay',
        param: param
      });
    },

    /**
     * 功能: H5触发cmd客户端回调js告诉我们正在播放是哪一条
     * 用法:
     * native.Audio.audioLocation();
     */
    audioLocation: function audioLocation() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.0.0',
        host: 'Audio',
        action: 'audioLocation',
        param: param
      });
    },

    /**
     * 功能: H5触发cmd客户端回调js告诉我们上次听到了那一条
     * 用法:
     * native.Audio.audioLocation();
     */
    audioPlayHistory: function audioPlayHistory() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.0.0',
        host: 'Audio',
        action: 'audioPlayHistory',
        param: param
      });
    },

    /**
     * 功能:H5触发cmd客户端订阅某个音频
     * 用法:
     * native.Audio.audioSubscription();
     */
    audioSubscription: function audioSubscription() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.0.0',
        host: 'Audio',
        action: 'audioSubscription',
        param: param
      });
    }
  },

  /****************************** 14、打开二维码扫码页面command命令 ****************************/
  ScanCode: {
    /**
     * 功能: 打开二维码
     * 用法:
     * native.ScanCode.openScanCode();
     */
    openScanCode: function openScanCode() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.1.0',
        host: 'ScanCode',
        action: 'openScanCode',
        param: param
      });
    }
  },

  /****************************** 15、小书库command命令 ****************************/
  BookStore: {
    openActiveDetail: function openActiveDetail() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'openActiveDetail',
        param: param
      });
    },
    openContentDetail: function openContentDetail() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'openContentDetail',
        param: param
      });
    },
    openCustomRecord: function openCustomRecord() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'openCustomRecord',
        param: param
      });
    },
    enterPerusalList: function enterPerusalList() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'enterPerusalList',
        param: param
      });
    },
    enterPerusal: function enterPerusal() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'enterPerusal',
        param: param
      });
    },
    thumbUp: function thumbUp() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'thumbUp',
        param: param
      });
    },
    imagesBrowser: function imagesBrowser() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.3.0',
        host: 'BookStore',
        action: 'imagesBrowser',
        param: param
      });
    }
  },

  /****************************** 16、混合开发command命令 ****************************/
  AppHybrid: {
    memberPage: function memberPage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.7.0',
        host: 'AppHybrid',
        action: 'memberPage',
        param: param
      });
    },
    hidePlaceholderImage: function hidePlaceholderImage() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      call({
        v: '5.7.0',
        host: 'AppHybrid',
        action: 'hidePlaceholderImage',
        param: param
      });
    }
  },

  /****************************** 自定义便捷接口 ******************************/
  custom: {
    /**
     * 功能: 设置native分享信息
     * 用法:
     * native.custom.setShareInfo({
        title: '大V店组团包邮', // 分享标题
        desc: '一件包邮！每天上新！好货低价又包邮，抢到了就赚翻啦', // 分享描述
        link: location.href, // 分享链接
        imgUrl: 'http://pic.davdian.com/free/2016/04/09/320_320_0fc3e0dbbadd249b7f1b93a525f0adf0.jpg', // 分享图标
      });
     */
    setShareInfo: function setShareInfo() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 参数合并
      param = _jquery2.default.extend({}, config.defaultShareInfo, param);

      // 参数处理
      param.imgUrl.replace("https", "http");

      if (_dvdBaseJsRuntime2.default.isClient()) {
        // 注册全局方法供native调用
        window.iosInterface = window.iosInterface || {};
        window.iosInterface.getShareInfo = function () {
          return JSON.stringify(param);
        };
      }
    },

    /**
     * 功能: 注册事件回调,webview返回当前页面时执行。
     * 背景: ios3.9.1之后采用WKWebView,返回当前页面时不会自动刷新页面,但ios会回调js全局方法。
     * 用法:
     * native.custom.onWebviewBack({
        callback: function () {
          location.reload();
        }
      });
     */
    onWebviewBack: function onWebviewBack() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_dvdBaseJsRuntime2.default.isClient()) {
        // 参数处理
        param.callback = param.callback || function () {
          location.reload();
        };
      }

      if (typeof window !== 'undefined') {
        // 注册全局方法供native调用
        window.iosInterface = window.iosInterface || {};
        var nativeWebviewBack = window.iosInterface.nativeWebviewBack;
        window.iosInterface.nativeWebviewBack = function () {
          nativeWebviewBack && nativeWebviewBack();
          param.callback();
        };
      }
    },

    /**
     * 功能: 初始化native头部标题栏
     * 用法:
     * native.custom.initHead({
        showHead: 1,
        showFoot: 0,
        backOnHead: 1,
        homeOnHead: 0,
        shareOnHead: 0,
        btnOnHead: 0,
        btnText: "",
        btnLink: "",
      })
     */
    initHead: function initHead() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 参数合并
      param = _jquery2.default.extend({}, defaultInitHead, param);
      // 调用Browser.initHead接口
      native.Browser.initHead({
        content: param
      });
    },

    /**
     * 功能: 初始化native头部标题栏
     * 用法:
     * native.custom.setHead({
        'showHead': '1',
        'title' : '修改后的标题',
        'backBtn' : '0', // 0表示头部不展示返回按钮，1表示展示
        'homeBtn' : '0', // 0表示头部不展示首页按钮，1表示展示
        'shareBtn' : '0', //0表示头部不展示分享按钮，1表示展示
        'shareMoney' : '分享获得返现数', //0表示分享返现为0不显示分享赚钱按钮，非0：展示分享赚钱按钮，在3.9.1之前用该字段
        'shareMoneyStr':'分享获取返现数显示的字符串',//在3.9.1中会用该字段
        'rightBtn' : {
          'text' : '头部右部展示的文字按钮文字',        
          'textColor':'头部右部按钮文字颜色',
          'action' : '文字按钮需要执行的JS'
        },
        'hideHead' : '0',
      })
     */
    setHead: function setHead() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var debug = arguments[1];

      // 参数合并
      param = _jquery2.default.extend({}, defaultSetHead, param);

      // 调用Browser.setHead接口
      native.Browser.setHead(param, debug);
    },

    /**
     * 功能: 分享
     * 用法:
     * native.custom.share({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    share: function share() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_dvdBaseJsRuntime2.default.isClient()) {
        // 分享信息(页面分享信息+默认分享信息)
        var shareInfo = _jquery2.default.extend({}, config.defaultShareInfo, window.iosInterface && window.iosInterface.getShareInfo && JSON.parse(window.iosInterface.getShareInfo()));

        // 默认参数(加入分享信息)
        var defaultParam = _jquery2.default.extend({
          show: '1',
          shareType: '0'
        }, shareInfo);

        // 覆盖默认参数
        param = _jquery2.default.extend({}, defaultParam, param);

        // 调用Share.shareInfo接口
        native.Share.shareInfo(param);
      }
    },

    /**
     * 功能: 分享朋友圈
     * 用法:
     * native.custom.shareWeixinTimeline({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    shareWeixinTimeline: function shareWeixinTimeline() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '0'
      }, param);
      this.share(param);
    },

    /**
     * 分享微信好友
     * 用法:
     * native.custom.shareWeixinFriend({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    shareWeixinFriend: function shareWeixinFriend() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '1'
      }, param);
      this.share(param);
    },

    /**
     * 分享QQ好友
     * 用法:
     * native.custom.shareQQFriend({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    shareQQFriend: function shareQQFriend() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '2'
      }, param);
      this.share(param);
    },

    /**
     * 分享QQ空间
     * 用法:
     * native.custom.shareQQZone({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    shareQQZone: function shareQQZone() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '3'
      }, param);
      this.share(param);
    },

    /**
     * 分享到短信
     * 用法:
     * native.custom.shareSms({
        title: 'MAMA+|大V店',
        desc: 'MAMA+|大V店',
        link: 'MAMA+|大V店',
        imgUrl: 'http://pic.davdian.com/goods/1/20151017104524.png'
      })
     */
    shareSms: function shareSms() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '4'
      }, param);
      this.share(param);
    },

    /**
     * 复制分享链接
     * 用法:
     * native.custom.shareCopyUrl({
        link: 'MAMA+|大V店'
      })
     */
    shareCopyUrl: function shareCopyUrl() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '0',
        sharePlatform: '5'
      }, param);
      this.share(param);
    },

    /**
     * 分享图片
     * 用法:
     * native.custom.shareImg({
        show: '1',  // 1弹窗,0不弹窗
        shareType: '1',
        bigImageUrl: 'http://pic.davdian.com/free/back_top_icon_0803.png'  // imgUrl无效,必须用bigImageUrl
      })
     */
    shareImg: function shareImg() {
      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // 默认参数
      param = _jquery2.default.extend({
        show: '1', // 1弹窗,0不弹窗
        shareType: '1',
        bigImageUrl: 'http://pic.davdian.com/free/back_top_icon_0803.png' // imgUrl无效,必须用bigImageUrl
      }, param);
      this.share(param);
    },

    /**
     * 功能: 唤起app首页,不执行cmd
     * 用法:
     * native.custom.invoke()
     */
    invoke: function invoke() {
      call({
        v: '0.0.0',
        host: '',
        action: '',
        param: {
          invoke: true
        }
      });
    },

    /**
     * 功能: 唤起app并打开页面
     * 用法:
     * native.custom.openUrlWithApp({
        url:"https://nemo.davdian.com"
     })
     */
    openUrlWithApp: function openUrlWithApp(param) {
      call({
        v: '2.5.0',
        host: 'Browser',
        action: 'open',
        param: param
      }, true);
    }
  }
};

/**
 * @module dvd-service-js-native
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-native.git)
 */
exports.default = native;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(3);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module dvd-base-js-runtime
 * @author sunweiguang [源码地址](http://gitlab.rd.vyohui.com/FE-Base/dvd-base-js-runtime.git)
 */
exports.default = {
  /**
   * 是否是server端（server端包括NodeJS）
   * @returns {Boolean}
   */
  isServer: function isServer() {
    return typeof global !== 'undefined' && typeof global.process !== 'undefined';
  },

  /**
   * 是否是client端（client端包括浏览器、微信、app）
   * @returns {Boolean}
   */
  isClient: function isClient() {
    return !this.isServer();
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsType = __webpack_require__(26);

var _dvdBaseJsType2 = _interopRequireDefault(_dvdBaseJsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// url正则，用于获取url中各部分信息
var UrlReg = /^((?:http|https):)?(?:\/\/)?(([^:/]*)?(?::(\d+))?)?(\/[^?]*)?(\?[^#]*)?(#.*)?$/;

/**
 * @module dvd-base-js-param
 * @author sunweiguang [源码地址](http://gitlab.rd.vyohui.com/FE-Base/dvd-base-js-param.git)
 */
exports.default = {
  /**
   * 将url转成window.location对象
   * @param url {String}
   * @returns {{}} 如果传url参数，则返回与window.location相同格式的对象；如果不传url参数，则直接返回window.location
   */
  getLocation: function getLocation(url) {
    if (url) {
      var result = UrlReg.exec(url);
      return {
        href: result[0],
        protocol: result[1],
        host: result[2],
        hostname: result[3],
        port: result[4],
        pathname: result[5],
        search: result[6],
        hash: result[7]
      };
    } else {
      return window.location;
    }
  },


  /**
   * 将字符串转换为对象
   * @param searchStr {String} location.search格式的字符串，如:'?a=1&b=2&c=3'
   * @returns {{}} 比如{a:1,b:2,c:3}
   */
  toObj: function toObj(searchStr) {
    var obj = {};
    searchStr = searchStr || location.search.split('?')[1];
    if (searchStr) {
      var paramMapArr = searchStr.split("&");
      for (var i in paramMapArr) {
        var paramMap = paramMapArr[i].split("=");
        obj[paramMap[0]] = paramMap[1] || '';
      }
    }
    return obj;
  },


  /**
   * 将对象转换为字符串，与toObj方法相反
   * @param searchObj {{}} 比如{a:1,b:2,c:3}
   * @returns {String} location.search格式的字符串，如:'?a=1&b=2&c=3'
   */
  toStr: function toStr(searchObj) {
    var str = '';
    if (searchObj) {
      for (var i in searchObj) {
        str += '&' + i + '=' + searchObj[i];
      }
    }
    return str.substr(1);
  },


  /**
   * 获取url中的所有参数
   * @param url {String} 默认取当前页面url
   * @returns {{}}
   */
  getAll: function getAll(url) {
    var location = this.getLocation(url);
    var searchStr = location.search ? location.search.split("?")[1] : location.search;
    return this.toObj(searchStr);
  },


  /**
   * 获取url中的某个参数
   * @param name {String} 参数名称
   * @param url {String} 默认取当前页面url
   * @returns {*}
   */
  get: function get(name, url) {
    if (name) {
      return this.getAll(url)[name];
    } else {
      throw new Error('name参数不能为空');
    }
  },


  /**
   * 替换url中的某个参数，如果不存在则添加
   * @param map {{}} 包含需要替换的key/value
   * @param url {String} 被替换的url，默认取当前页面url
   * @returns {string}
   */
  replace: function replace(map, url) {
    url = url || location.href;
    if (map) {
      var obj = this.getAll(url);
      for (var i in map) {
        obj[i] = map[i];
      }
      return url.split("?")[0] + '?' + this.toStr(obj);
    } else {
      throw new Error('map参数不能为空');
    }
  },


  /**
   * 向url中添加参数，如果已存在则修改
   * @param map {{}} 包含需要添加的key/value
   * @param url {String} 被操作的url，默认取当前页面url
   * @returns {string}
   */
  add: function add(map, url) {
    return this.replace(map, url);
  },


  /**
   * 移除url中参数
   * @param key {String|Array} 删除的参数名，可以是字符串或者字符串数组
   * @param url {String} 被操作的url，默认取当前页面url
   * @returns {string}
   */
  remove: function remove(key, url) {
    url = url || location.href;
    if (key) {
      var obj = this.getAll(url);
      if (_dvdBaseJsType2.default.isString(key)) {
        delete obj[key];
      } else if (_dvdBaseJsType2.default.isArray(key)) {
        for (var i in key) {
          delete obj[key[i]];
        }
      }
      return url.split("?")[0] + '?' + this.toStr(obj);
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(11);

var _vue2 = _interopRequireDefault(_vue);

var _dvdServiceComPopup = __webpack_require__(27);

var _dvdServiceComPopup2 = _interopRequireDefault(_dvdServiceComPopup);

var _dvdServiceComPopupToast = __webpack_require__(33);

var _dvdServiceComPopupToast2 = _interopRequireDefault(_dvdServiceComPopupToast);

var _dvdServiceComPopupShareCard = __webpack_require__(38);

var _dvdServiceComPopupShareCard2 = _interopRequireDefault(_dvdServiceComPopupShareCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEl = function getEl() {
  return (document.querySelector('.app') || document.body).appendChild(document.createElement('div'));
};

var loading = null;
var loading2 = null;

/**
 * @module dvd-service-js-popup
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-popup.git)
 */
exports.default = {
  /**
   * 功能: toast提示
   * @param html      toast内容，可传html
   * @param duration  toast存在时长，毫秒
   * @param className  类名
   * 示例：
   * popup.toast(html, duration);
   */
  toast: function toast(html, duration, className) {
    new _vue2.default({
      components: {
        'dvd-service-com-popup-toast': _dvdServiceComPopupToast2.default
      },
      el: getEl(),
      data: { html: html, duration: duration },
      template: '<dvd-service-com-popup-toast :html="html" :duration="duration" class="' + className + '"/>'
    });
  },

  /**
   * 功能：分享卡
   * 示例：
   * popup.shareCard(img);
   */
  shareCard: function shareCard(img) {
    new _vue2.default({
      components: {
        'dvd-service-com-popup-share-card': _dvdServiceComPopupShareCard2.default
      },
      el: getEl(),
      data: { img: img },
      template: '<dvd-service-com-popup-share-card :img="img"/>'
    });
  },

  /**
   * 功能：提示框
   * 示例：
   * popup.alert({
        className: '',    // 钩子（支持传入class名。一个页面需要多种弹窗时，可以根据传入的className在页面设定各种样式）
        title: '',        // 标题（支持传入html。有则显示。）
        text: '',         // 文本（支持传入html。有则显示。）
        btnTitle: '',     // 按钮标题（支持传入html。有则显示，无则显示默认'确定'。）
        okBtnCallback() {   // 按钮点击回调（有则执行该回调）
         },
        cancelBtnTitle: '',   // 取消按钮标题（支持传入html。有则显示，无则不显示，传''时显示默认值'取消'。）
        cancelBtnCallback() { // 取消按钮点击回调（有则执行该回调）
         }
      });
   */
  alert: function alert() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    new _vue2.default({
      components: {
        'dvd-service-com-popup': _dvdServiceComPopup2.default
      },
      el: getEl(),
      data: { param: param },
      template: '<dvd-service-com-popup :class-name="param.className" type="alert" :title="param.title" :text="param.text" :ok-btn-title="param.btnTitle" :ok-btn-callback="param.okBtnCallback" :cancel-btn-title="param.cancelBtnTitle" :cancel-btn-callback="param.cancelBtnCallback"/>'
    });
  },

  /**
   * 功能：确认框
   * 示例：
   * popup.confirm({
        className: '',        // 钩子（支持传入class名。一个页面需要多种弹窗时，可以根据传入的className在页面设定各种样式）
        title: '',            // 标题（支持传入html。有则显示。）
        text: '',             // 文本（支持传入html。有则显示。）
        okBtnTitle: '',       // 确定按钮标题（支持传入html。有则显示，无则显示默认'确定'。）
        okBtnCallback() {     // 确定按钮点击回调（有则执行该回调）
         },
        cancelBtnTitle: '',   // 取消按钮标题（支持传入html。有则显示，无则不显示，传''时显示默认值'取消'。）
        cancelBtnCallback() { // 取消按钮点击回调（有则执行该回调）
         }
      });
   */
  confirm: function confirm() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    new _vue2.default({
      components: {
        'dvd-service-com-popup': _dvdServiceComPopup2.default
      },
      el: getEl(),
      data: { param: param },
      template: '<dvd-service-com-popup :class-name="param.className" type="confirm" :title="param.title" :text="param.text" :ok-btn-title="param.okBtnTitle" :ok-btn-callback="param.okBtnCallback" :cancel-btn-title="param.cancelBtnTitle" :cancel-btn-callback="param.cancelBtnCallback"/>'
    });
  },

  /**
   * 功能：输入框
   * 示例：
   * popup.prompt({
        className: '',        // 钩子（支持传入class名。一个页面需要多种弹窗时，可以根据传入的className在页面设定各种样式）
        title: '',            // 标题（支持传入html。有则显示。）
        text: '',             // 文本（支持传入html。有则显示。）
        placeholder: '',      // 输入框占位符（有则显示。）
        btnTitle: '',         // 按钮标题（支持传入html。有则显示，无则显示默认'确定'。）
        okBtnCallback(result) { // 按钮点击回调（有则执行该回调，result是输入框输入的值）
         },
        cancelBtnTitle: '',   // 取消按钮标题（支持传入html。有则显示，无则不显示，传''时显示默认值'取消'。）
        cancelBtnCallback() { // 取消按钮点击回调（有则执行该回调）
         }
      });
   */
  prompt: function prompt() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    new _vue2.default({
      components: {
        'dvd-service-com-popup': _dvdServiceComPopup2.default
      },
      el: getEl(),
      data: { param: param },
      template: '<dvd-service-com-popup :class-name="param.className" type="prompt" :title="param.title" :text="param.text" :placeholder="param.placeholder" :ok-btn-title="param.btnTitle" :ok-btn-callback="param.okBtnCallback" :cancel-btn-title="param.cancelBtnTitle" :cancel-btn-callback="param.cancelBtnCallback"/>'
    });
  },

  /**
   * 功能：提示框
   * 示例：
   * popup.debug({
        className: '',    // 钩子（支持传入class名。一个页面需要多种弹窗时，可以根据传入的className在页面设定各种样式）
        title: '',        // 标题（支持传入html。有则显示。）
        text: '',         // 文本（支持传入html。有则显示。）
        btnTitle: '',     // 按钮标题（支持传入html。有则显示，无则显示默认'确定'。）
        okBtnCallback() {   // 按钮点击回调（有则执行该回调）
         },
        cancelBtnTitle: '',   // 取消按钮标题（支持传入html。有则显示，无则不显示，传''时显示默认值'取消'。）
        cancelBtnCallback() { // 取消按钮点击回调（有则执行该回调）
         }
      });
   */
  debug: function debug() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    new _vue2.default({
      components: {
        'dvd-service-com-popup': _dvdServiceComPopup2.default
      },
      el: getEl(),
      data: { param: param },
      template: '<dvd-service-com-popup :class-name="param.className" type="debug" :title="param.title" :text="param.text" :ok-btn-title="param.btnTitle" :ok-btn-callback="param.okBtnCallback" :cancel-btn-title="param.cancelBtnTitle" :cancel-btn-callback="param.cancelBtnCallback"/>'
    });
  },

  /**
   * 功能：loading条
   * @param show    true显示 || false关闭
   * 示例：
   * popup.loading(show)
   */
  loading: function loading(flag) {
    // 显示
    if (flag || flag === undefined) {
      document.body.className = document.body.className.replace(/loaded/g, '');
      // 隐藏
    } else {
      document.body.className += ' loaded';
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(53);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(20);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(20);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scriptjs = __webpack_require__(17);

var _scriptjs2 = _interopRequireDefault(_scriptjs);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _dvdServiceJsUtil = __webpack_require__(8);

var _dvdServiceJsUtil2 = _interopRequireDefault(_dvdServiceJsUtil);

var _dvdServiceJsTj = __webpack_require__(47);

var _dvdServiceJsTj2 = _interopRequireDefault(_dvdServiceJsTj);

var _dvdBaseJsParam = __webpack_require__(13);

var _dvdBaseJsParam2 = _interopRequireDefault(_dvdBaseJsParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  // 默认分享信息
  defaultShareInfo: {
    title: 'MAMA+|大V店', // 分享标题
    desc: 'MAMA+|大V店', // 分享描述
    link: window.location.href, // 分享链接
    imgUrl: 'http://pic.davdian.com/free/index0925_icon1.png?x-oss-process=image/resize,m_fill,w_80' // 分享图标
  }
};

// 项目所需所有微信接口列表
var jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'];

/**
 * @module dvd-service-js-weixin
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-weixin.git)
 */
exports.default = {
  /**
   * 设置微信分享信息
   * @param {Object} param 分享信息
   * @param {Object} response php接口(调用php接口时传js_wx_info参数会在公参返回微信验证信息)
   * 调用方法:
   share.setWeixinShareInfo({
      title: '大V店组团包邮', // 分享标题
      desc: '一件包邮！每天上新！好货低价又包邮，抢到了就赚翻啦', // 分享描述
      link: location.href, // 分享链接
      imgUrl: 'http://pic.davdian.com/free/2016/04/09/320_320_0fc3e0dbbadd249b7f1b93a525f0adf0.jpg', // 分享图标
    }, response);
   */
  setShareInfo: function setShareInfo(param, response) {
    // 开发模式不调用验证信息
    if (location.href.indexOf("localhost") > -1 || location.href.indexOf("//192.168") > -1) {
      return;
    }

    var shareSourceName = "默认";

    var shareSource = void 0;
    if (param.shareSource) {
      shareSource = param.shareSource;
    } else if (window && window.shareSource) {
      shareSource = window.shareSource;
    } else {
      shareSource = 15;
    }

    // 增加分享统计
    // by Nemo
    function shareInfoPost(msg) {
      var shareType = {
        'onMenuShareTimeline:ok': 1,
        'onMenuShareAppMessage:ok': 2,
        'sendAppMessage:ok': 2,
        'shareQQ:ok': 3,
        'shareQZone:ok': 4
      }[msg] || 0;
      if (shareSource) {
        _dvdServiceJsTj2.default.send({
          production_data: {
            share_source: shareSource + '', // 具体见上面的表格
            source_url: location.href, // 来源url
            share_type: shareType + '', // 具体见上面的表格
            dp: 'share_source_' + shareSource
          }
        });
      }
    }

    // param分享参数覆盖默认分享信息
    var shareInfo = _jquery2.default.extend({}, config.defaultShareInfo, {
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function success(obj) {
        try {
          shareInfoPost(obj.errMsg);
        } catch (e) {
          console.log(e);
        }
        param.success();
      }, // 用户确认分享后执行的回调函数
      cancel: function cancel() {
        param.cancel();
      } // 用户取消分享后执行的回调函数
    }, param);

    // 加载微信jssdk
    (0, _scriptjs2.default)('//res.wx.qq.com/open/js/jweixin-1.0.0.js', function () {
      // 更新cookie中weixin_verify_info
      var updateVerifyInfo = function updateVerifyInfo(callback) {
        // 从PHP获取微信token
        _jquery2.default.ajax({
          cache: false,
          async: true,
          url: '/wechatJsToken',
          type: 'get',
          dataType: 'json',
          data: {
            url: encodeURIComponent(location.href)
          },
          success: function success(response) {
            if (response && response.data) {
              _jsCookie2.default.set('weixin_verify_info', JSON.stringify(response.data), {
                domain: _dvdServiceJsUtil2.default.getBaseDomain(),
                path: '/',
                expires: 1 / 24 // 有效时间1小时
              });
              callback();
            }
          },
          error: function error(_error) {
            // alert('调用/wechatJsToken接口error');
            console.log('调用/wechatJsToken接口error');
          }
        });
      };

      // 进行微信验证
      var verify = function verify(response) {
        var appInfo = null;

        if (response && response.wx_info) {
          // alert('wx_info:' + JSON.stringify(response.wx_info));
          // 使用接口公参的微信验证信息
          appInfo = {
            appId: response.wx_info.appId,
            timestamp: response.sys_time,
            nonceStr: response.wx_info.nonceStr,
            signature: response.wx_info.signature
          };
        } else if (_jsCookie2.default.get('weixin_verify_info')) {
          // 使用cookie的微信验证信息
          appInfo = JSON.parse(_jsCookie2.default.get('weixin_verify_info'));
        } else {
          // 从wechatJsToken接口取微信验证信息
          updateVerifyInfo(verify);
          return;
        }

        // 通过config接口注入权限验证配置
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appInfo.appId, // 必填，公众号的唯一标识
          timestamp: appInfo.timestamp, // 必填，生成签名的时间戳
          nonceStr: appInfo.nonceStr, // 必填，生成签名的随机串
          signature: appInfo.signature, // 必填，签名，见附录1
          jsApiList: [].concat(jsApiList) // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
      };
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      wx.ready(function () {
        console.log('微信验证成功');
        // 为每个分享平台设置相同的分享信息
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = jsApiList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var api = _step.value;

            wx[api](shareInfo);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });

      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      wx.error(function (res) {
        console.error('微信验证失败');
        if (!updateVerifyInfo.execTimes || updateVerifyInfo.execTimes < 2) {
          updateVerifyInfo(verify);
          updateVerifyInfo.execTimes = updateVerifyInfo.execTimes ? updateVerifyInfo.execTimes + 1 : 1;
        }
      });
      verify(response);
    });

    // 增加分享统计
    // by Nemo
    function shareInfoPost(msg) {
      var shareType = {
        'onMenuShareTimeline:ok': 1,
        'onMenuShareAppMessage:ok': 2,
        'sendAppMessage:ok': 2,
        'shareQQ:ok': 3,
        'shareQZone:ok': 4
      }[msg] || 0;
      if (shareSource) {
        _dvdServiceJsTj2.default.send({
          production_data: {
            share_source: shareSource + '', // 具体见上面的表格
            source_url: location.href, // 来源url
            share_type: shareType + '', // 具体见上面的表格
            dp: 'share_source_' + shareSource
          }
        });
        if (window.gio) {
          gio('track', 'wechatShare', { shareSource: shareSource, shareSourceName: shareSourceName });
        }
      }
    }
  },

  /**
   * 功能：跳转微信授权页面
   * @param {Object} show true为显示授权，false为隐式授权
   */
  goAuthPage: function goAuthPage(show) {
    // 微信授权后回调页面url
    // var redirect_uri = `${location.protocol}//open.davdian.com/view_[[env_stage]]_[[env_num]]/weixin_auth_redirect.html?env_num=[[env_num]]&referrer_protocal=${encodeURIComponent(location.protocol)}&referrer_host=${encodeURIComponent(location.host)}&referrer_path=${encodeURIComponent(location.href.split(location.host)[1])}`;
    // var redirect_uri = `${location.protocol}//open.davdian.com/view_gray_9/weixin_auth_redirect.html?env_num=[[env_num]]&referrer_protocal=${encodeURIComponent(location.protocol)}&referrer_host=${encodeURIComponent(location.host)}&referrer_path=${encodeURIComponent(location.href.split(location.host)[1])}`;
    // var redirect_uri = `${location.protocol}//open.davdian.com/view/weixin_auth_redirect.html?env_num=[[env_num]]&referrer_protocal=${encodeURIComponent(location.protocol)}&referrer_host=${encodeURIComponent(location.host)}&referrer_path=${encodeURIComponent(location.href.split(location.host)[1])}`;
    var redirect_uri = location.protocol + '//open.davdian.com/view/weixin_auth_redirect.html?tag=index&referrer_protocal=' + encodeURIComponent(location.protocol) + '&referrer_host=' + encodeURIComponent(location.host) + '&referrer_path=' + encodeURIComponent(location.pathname + location.search);

    var referer_path = decodeURIComponent(_dvdBaseJsParam2.default.get('referer'));
    if (referer_path !== 'undefined') {
      var reg = /^http(s?):\/\/\w+\.\w+\.\w+\/([^\?]*)/,
          param = referer_path.split('?')[1],
          pathName = referer_path.match(reg)[2] + '?' + param;
      redirect_uri += '&loginPath=/' + encodeURIComponent(pathName);
    }

    // 微信授权页面url，davdian.com的appid=wx5f9796f55f5366b6，vyohui.cn的aooud=wx588f41c3ea092fe0
    var url = '//open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f9796f55f5366b6&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code&scope=snsapi_' + (show ? 'userinfo' : 'base') + '&state=' + Date.now();

    // 去微信授权页面
    location.href = url;
    throw new Error('\u5373\u5C06\u8DF3\u8F6C\u5FAE\u4FE1\u6388\u6743\u9875(' + location.href + ')\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(11);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {




module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(1);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(54);
var buildURL = __webpack_require__(56);
var parseHeaders = __webpack_require__(57);
var isURLSameOrigin = __webpack_require__(58);
var createError = __webpack_require__(21);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(59);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(60);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {




var enhanceError = __webpack_require__(55);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {




module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {




var _vue = __webpack_require__(11);

var _vue2 = _interopRequireDefault(_vue);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdBaseJsParam = __webpack_require__(13);

var _dvdBaseJsParam2 = _interopRequireDefault(_dvdBaseJsParam);

var _dvdServiceJsPopup = __webpack_require__(14);

var _dvdServiceJsPopup2 = _interopRequireDefault(_dvdServiceJsPopup);

var _dvdServiceJsLogin = __webpack_require__(9);

var _dvdServiceJsLogin2 = _interopRequireDefault(_dvdServiceJsLogin);

var _dvdServiceJsEncrypt = __webpack_require__(44);

var _dvdServiceJsEncrypt2 = _interopRequireDefault(_dvdServiceJsEncrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// H5项目间基础业务模块
// 第三方模块
__webpack_require__(46);

// H5项目间通用模块


// 验证登录
_dvdServiceJsLogin2.default.needLogin();

// 渲染页面
new _vue2.default({
  el: '.app',
  components: { 'dvd-service-com-title': __webpack_require__(68).default },
  data: function data() {
    return {

      // 全局属性
      window: window,
      document: document,
      location: location,

      // H5项目间通用模块
      ua: _dvdBaseJsUa2.default,
      popup: _dvdServiceJsPopup2.default,

      // 首屏返回数据
      response: null,
      orderId: null,
      deliveryId: null,
      showList: true
    };
  },

  computed: {},
  beforeCreate: function beforeCreate() {},
  created: function created() {
    window.that = this;

    // 获取首屏数据
    this.getData();
  },
  mounted: function mounted() {},

  watch: {

    // 监听response变化
    response: function response() {

      // response变化后并渲染完dom,设置其他事项
      this.$nextTick(function () {});
    }
  },
  filters: {},
  methods: {

    /**
         * 获取首屏数据
         * @see wiki /api/mg/order/orderShipping/orderTrace
         */
    getData: function getData() {
      var that = this;

      // 获取url中的参数
      that.deliveryId = _dvdBaseJsParam2.default.get('did');
      that.orderId = _dvdBaseJsParam2.default.get('oid');

      // 调接口
      _jquery2.default.ajax({
        cache: false,
        async: true,

        url: '/api/mg/order/orderShipping/orderTrace?_=' + Date.now(),

        // url: 'https://www.easy-mock.com/mock/5b55863a7186cb2cce7efe77/logistics_information/logistics_information?_=' + Date.now(),
        type: 'post',
        dataType: 'json',
        data: _dvdServiceJsEncrypt2.default.ajax({
          deliveryId: that.deliveryId,
          orderId: that.orderId
        }),
        success: function success(response) {
          try {
            if (response.code === 0) {
              that.response = response.data;
            } else {
              _dvdServiceJsPopup2.default.toast(response.msg || response.data.msg);
            }
          } catch (err) {

            // 这个try-catch不要去掉，因为有异常时会阻止强制跳转
          }
        },
        error: function error(_error) {
          console.warn(_error);
          _dvdServiceJsPopup2.default.toast('网络异常');
        }
      });
    },


    // 提醒发货
    remindingTheShipments: function remindingTheShipments() {
      var that = this;
      _jquery2.default.ajax({
        url: '/index.php?c=user&a=delivery_remind_response',
        type: 'POST',
        dataType: 'json',
        data: {
          id: that.deliveryId,
          time: Date.now()
        },
        success: function success(result) {
          _dvdServiceJsPopup2.default.toast(result['msg']);
        },
        error: function error() {
          _dvdServiceJsPopup2.default.toast('网络异常');
        }
      });
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module dvd-base-js-type
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Base/dvd-base-js-type.git)
 */
exports.default = {
  isNumber: function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
  },
  isString: function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
  },
  isBoolean: function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
  },
  isObject: function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  },
  isArray: function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  },
  isFunction: function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_a65a2d94_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue__ = __webpack_require__(32);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_a65a2d94_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/dvd-service-com-popup/dvd-service-com-popup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dvd-service-com-popup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a65a2d94", Component.options)
  } else {
    hotAPI.reload("data-v-a65a2d94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("75162a2c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65a2d94\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65a2d94\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\n 功能：Math方法\n 来自：http://blog.csdn.net/natsuyu/article/details/52191181\n*/\n@-webkit-keyframes dvd-service-com-popup-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes dvd-service-com-popup-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.dvd-service-com-popup {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  max-width: 640px;\n  height: 100%;\n  display: table;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9;\n  line-height: 1;\n}\n.dvd-service-com-popup * {\n    background: transparent;\n}\n.dvd-service-com-popup .table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n.dvd-service-com-popup .table-cell .box {\n      display: inline-block;\n      width: 2.7rem;\n      background: white;\n      border-radius: 0.04rem;\n      -webkit-animation: dvd-service-com-popup-animation 0.5s;\n              animation: dvd-service-com-popup-animation 0.5s;\n}\n.dvd-service-com-popup .table-cell .box .tip {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -moz-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n           -moz-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n           -moz-box-orient: vertical;\n           -moz-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-sizing: border-box;\n           -moz-box-sizing: border-box;\n                box-sizing: border-box;\n        padding: 0.15rem 0.15rem;\n        min-height: 0.72rem;\n        font-size: 0.14rem;\n        line-height: 0.21rem;\n        color: #666;\n}\n.dvd-service-com-popup .table-cell .box .tip > *:not(:first-child) {\n          margin-top: 0.1rem;\n}\n.dvd-service-com-popup .table-cell .box .tip .title {\n          width: 100%;\n          color: #333;\n          font-size: 0.16rem;\n}\n.dvd-service-com-popup .table-cell .box .tip .text {\n          width: 100%;\n          color: #666;\n}\n.dvd-service-com-popup .table-cell .box .tip .input {\n          -webkit-box-sizing: border-box;\n             -moz-box-sizing: border-box;\n                  box-sizing: border-box;\n          padding-left: 0.1rem;\n          width: 2.5rem;\n          height: 0.36rem;\n          background: #F9F9F9;\n          font-size: 0.12rem;\n          line-height: 0.17rem;\n          border: none;\n          outline: none;\n}\n.dvd-service-com-popup .table-cell .box .h-split {\n        height: 1px;\n        background: #E1E1E1;\n        -webkit-transform: scaleY(0.5);\n            -ms-transform: scaleY(0.5);\n                transform: scaleY(0.5);\n}\n.dvd-service-com-popup .table-cell .box .btns {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -moz-box;\n        display: -ms-flexbox;\n        display: flex;\n        /*align-items: center;*/\n        line-height: 0.44rem;\n}\n.dvd-service-com-popup .table-cell .box .btns .v-split {\n          width: 1px;\n          background: #E1E1E1;\n          -webkit-transform: scaleX(0.5);\n              -ms-transform: scaleX(0.5);\n                  transform: scaleX(0.5);\n}\n.dvd-service-com-popup .table-cell .box .btns .btn {\n          -webkit-box-flex: 1;\n          -webkit-flex: 1;\n             -moz-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          height: 0.44rem;\n          line-height: 0.44rem;\n          color: #FF4A7D;\n          font-size: 0.16rem;\n          text-align: center;\n}\n.dvd-service-com-popup .table-cell .box .btns .btn.cancel {\n            color: #666;\n}\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // 取值范围，
    className: {
      type: String,
      default: null
    },
    // 取值范围，'alert' || 'confirm' || 'prompt' || 'debug'
    type: {
      type: String,
      default: 'alert'
    },
    // 标题
    title: {
      type: String,
      default: null
    },
    // 文本
    text: {
      type: String,
      default: ''
    },
    // 确定按钮-标题
    okBtnTitle: {
      type: String,
      default: null
    },
    // 确定按钮-点击回调
    okBtnCallback: {
      type: Function,
      default: null
    },
    // 取消按钮-标题
    cancelBtnTitle: {
      type: String,
      default: null
    },
    // 取消按钮-点击回调
    cancelBtnCallback: {
      type: Function,
      default: null
    },
    // 输入框占位符
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    titleStyle: function titleStyle() {
      if (this.type == 'debug') {
        return {
          '-webkit-user-select': 'text',
          'user-select': 'text'
        };
      } else {
        return null;
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    if (this.type == 'prompt') {
      this.$refs.input.focus();
    }
  },

  methods: {
    // 销毁自身
    destroy: function destroy() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },

    // 确定按钮-点击事件
    okBtnClick: function okBtnClick() {
      var result = undefined;
      if (this.okBtnCallback) {
        if (this.type == 'prompt') {
          result = this.okBtnCallback(this.$refs.input.value);
        } else {
          result = this.okBtnCallback();
        }
      }
      // 如果返回结果不是false，则销毁组件
      if (result !== false) {
        this.destroy();
      }
    },

    // 取消按钮-点击事件
    cancelBtnClick: function cancelBtnClick() {
      var result = undefined;
      result = this.cancelBtnCallback && this.cancelBtnCallback();
      // 如果返回结果不是false，则销毁组件
      if (result !== false) {
        this.destroy();
      }
    }
  },
  filters: {},
  watch: {}
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dvd-service-com-popup",
    class: [_vm.className],
    on: {
      "touchmove": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
      },
      "mousemove": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
      }
    }
  }, [_c('div', {
    staticClass: "table-cell"
  }, [_c('div', {
    staticClass: "box",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "tip"
  }, [(_vm.title) ? _c('div', {
    staticClass: "title",
    style: (_vm.titleStyle),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type == 'prompt') ? _c('input', {
    ref: "input",
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    }
  }) : _vm._e(), _vm._v(" "), (_vm.text) ? _c('div', {
    staticClass: "text",
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "h-split"
  }), _vm._v(" "), _c('div', {
    staticClass: "btns"
  }, [(_vm.cancelBtnTitle !== null) ? _c('div', {
    staticClass: "btn cancel",
    domProps: {
      "innerHTML": _vm._s(_vm.cancelBtnTitle || '取消')
    },
    on: {
      "click": _vm.cancelBtnClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.cancelBtnTitle !== null) ? _c('div', {
    staticClass: "v-split"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn ok",
    domProps: {
      "innerHTML": _vm._s(_vm.okBtnTitle || '确定')
    },
    on: {
      "click": _vm.okBtnClick
    }
  })])])])])
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a65a2d94", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_264f71ea_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(34)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_264f71ea_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_toast_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/dvd-service-com-popup-toast/dvd-service-com-popup-toast.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dvd-service-com-popup-toast.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-264f71ea", Component.options)
  } else {
    hotAPI.reload("data-v-264f71ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("76d58268", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-264f71ea\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup-toast.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-264f71ea\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup-toast.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\n 功能：Math方法\n 来自：http://blog.csdn.net/natsuyu/article/details/52191181\n*/\n@-webkit-keyframes com-alert-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes com-alert-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.dvd-service-com-popup-toast {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  max-width: 640px;\n  height: 100%;\n  display: table;\n  z-index: 99;\n  line-height: 1;\n}\n.dvd-service-com-popup-toast .cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n.dvd-service-com-popup-toast .cell .box {\n      display: inline-block;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0.1rem 0.15rem;\n      min-width: 1.2rem;\n      max-width: 2rem;\n      min-height: 0.4rem;\n      border-radius: 0.04rem;\n      background: rgba(0, 0, 0, 0.65);\n      color: #fff;\n      font-size: 0.14rem;\n      line-height: 0.2rem;\n      -webkit-animation: com-alert-animation 0.3s;\n              animation: com-alert-animation 0.3s;\n}\n.dvd-service-com-popup-toast .cell .box .html {\n        display: inline-block;\n        text-align: left;\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // toast内容，可传html
    html: {
      type: String,
      default: ''
    },
    // toast存在时长，毫秒
    duration: {
      type: Number,
      default: 2000
    }
  },
  data: function data() {
    return {};
  },

  computed: {},
  created: function created() {},
  mounted: function mounted() {
    var ts = this;
    setTimeout(function () {
      ts.destroy();
    }, ts.duration);
  },

  watch: {},
  filters: {},
  methods: {
    // 销毁自身
    destroy: function destroy() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dvd-service-com-popup-toast"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "html",
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-264f71ea", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4eb9e64c_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4eb9e64c_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_popup_share_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/dvd-service-com-popup-share-card/dvd-service-com-popup-share-card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dvd-service-com-popup-share-card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eb9e64c", Component.options)
  } else {
    hotAPI.reload("data-v-4eb9e64c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("8da146fa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eb9e64c\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup-share-card.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4eb9e64c\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-popup-share-card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\n 功能：Math方法\n 来自：http://blog.csdn.net/natsuyu/article/details/52191181\n*/\n@-webkit-keyframes dvd-service-com-popup-share-card-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes dvd-service-com-popup-share-card-animation {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.dvd-service-com-popup-share-card {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  max-width: 640px;\n  height: 100%;\n  display: table;\n  /*background-color: rgba(0, 0, 0, 0.5);*/\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 9;\n  line-height: 1;\n}\n.dvd-service-com-popup-share-card * {\n    background: transparent;\n}\n.dvd-service-com-popup-share-card .table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n.dvd-service-com-popup-share-card .table-cell .box {\n      display: inline-block;\n      width: 2.7rem;\n      border-radius: 0.04rem;\n      -webkit-animation: dvd-service-com-popup-share-card-animation 0.5s;\n              animation: dvd-service-com-popup-share-card-animation 0.5s;\n      color: #666;\n}\n.dvd-service-com-popup-share-card .table-cell .box .top-tip {\n        margin-bottom: 0.1rem;\n}\n.dvd-service-com-popup-share-card .table-cell .box .pic img {\n        height: 4.5rem;\n        -webkit-box-shadow: 0 0 0.2rem rgba(105, 97, 79, 0.5);\n                box-shadow: 0 0 0.2rem rgba(105, 97, 79, 0.5);\n}\n.dvd-service-com-popup-share-card .table-cell .box .bottom-tip {\n        margin-top: 0.1rem;\n}\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    // 钩子
    className: {
      type: String,
      default: null
    },
    // 分享卡图片地址，
    img: {
      type: String,
      default: null
    },
    // 上方提示文字，
    topTip: {
      type: String,
      default: '长按保存图片'
    },
    // 下方提示文字，
    bottomTip: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    titleStyle: function titleStyle() {
      if (this.type == 'debug') {
        return {
          '-webkit-user-select': 'text',
          'user-select': 'text'
        };
      } else {
        return null;
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    if (this.type == 'prompt') {
      this.$refs.input.focus();
    }
  },

  methods: {
    // 销毁自身
    destroy: function destroy() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },

    // 确定按钮-点击事件
    okBtnClick: function okBtnClick() {
      if (this.okBtnCallback) {
        if (this.type == 'prompt') {
          this.okBtnCallback(this.$refs.input.value);
        } else {
          this.okBtnCallback();
        }
      }
      this.destroy();
    },

    // 取消按钮-点击事件
    cancelBtnClick: function cancelBtnClick() {
      this.cancelBtnCallback && this.cancelBtnCallback();
      this.destroy();
    }
  },
  filters: {},
  watch: {}
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dvd-service-com-popup-share-card",
    class: [_vm.className],
    on: {
      "click": _vm.destroy
    }
  }, [_c('div', {
    staticClass: "table-cell"
  }, [_c('div', {
    staticClass: "box",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "top-tip"
  }, [_vm._v(_vm._s(_vm.topTip))]), _vm._v(" "), _c('div', {
    staticClass: "pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.img
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bottom-tip"
  }, [_vm._v(_vm._s(_vm.bottomTip))])])])])
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4eb9e64c", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module dvd-base-js-ua
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Base/dvd-base-js-ua.git)
 */
exports.default = {
  // 当前页面ua
  ua: navigator.userAgent,
  // 缓存，
  cache: {},
  /**
   * 当前ua是否匹配入参正则
   * @param regex 正则
   * @returns {boolean}
   */
  match: function match(regex) {
    if (Object.prototype.toString.call(regex) === '[object String]') {
      regex = new RegExp(regex, 'g');
    }
    return regex.test(this.ua);
  },
  /**
   * 从缓存取匹配结果，如果未命中重新通过正则判断
   * @param cacheName {String}
   * @param regexArray {Regex}
   * @returns {boolean}
   */
  getFromCache: function getFromCache(cacheName, regexArray) {
    // 如果未缓存过cache[cacheName]，则缓存对正则数组regStrArray匹配的结果
    if (this.cache[cacheName] === undefined) {
      // 正则数组regStrArray匹配的结果
      var cacheValue;
      for (var i in regexArray) {
        cacheValue = this.match(regexArray[i]);
        if (cacheValue) {
          break;
        }
      }
      // 缓存
      this.cache[cacheName] = cacheValue;
    }
    // 返回缓存中的值
    return this.cache[cacheName];
  },
  /**
   * chrome浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36
  // * ios    Mozilla/5.0 (iPod; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.64 Mobile/13F69 Safari/601.1.46
  isChrome: function isChrome() {
    return this.getFromCache('isChrome', ['Chrome', 'CriOS']);
  },
  /**
   * uc浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-CN; MI 5 Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.10.3.810 U3/0.8.0 Mobile Safari/534.30
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13F69 UCBrowser/10.9.16.802 Mobile
  isUc: function isUc() {
    return this.getFromCache('isUc', ['UCBrowser']);
  },
  /**
   * QQ浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/6.7 Mobile Safari/537.36
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/6.0 MQQBrowser/6.7.2 Mobile/13F69 Safari/8536.25 MttCustomUA/2
  isQqBrowser: function isQqBrowser() {
    return this.getFromCache('isQqBrowser', ['MQQBrowser']);
  },
  /**
   * 小米系统浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.85 Mobile Safari/537.36 XiaoMi/MiuiBrowser/2.1.1
  isXiaoMiBrowser: function isXiaoMiBrowser() {
    return this.getFromCache('isXiaoMiBrowser', ['XiaoMi/MiuiBrowser']);
  },
  /**
   * safari浏览器
   * @returns {Boolean}
   */
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1
  isSafari: function isSafari() {
    return this.getFromCache('isSafari', ['Version/\\d?[.]\\d Mobile/.* Safari/.*']);
  },
  /**
   * 百度浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 baidubrowser/7.8.12.0 (Baidu; P1 6.0)
  // * ios
  isBaiduBrowser: function isBaiduBrowser() {
    return this.getFromCache('isBaiduBrowser', ['baidubrowser']);
  },
  /**
   * 搜狗浏览器
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5; Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.92 SDK/1.2.2.675 Mobile Safari/537.36 SogouMSE,SogouMobileBrowser/5.5.0
  // * ios
  isSougouBrowser: function isSougouBrowser() {
    return this.getFromCache('isSougouBrowser', ['SogouMobileBrowser']);
  },
  /**
   * 新浪微博
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 Weibo (Xiaomi-MI 5__weibo__6.6.0__android__android6.0)
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 Weibo (iPod5,1__weibo__5.4.0__iphone__os9.3.2)
  isSinaWeiBo: function isSinaWeiBo() {
    return this.getFromCache('isSinaWeiBo', ['Weibo']);
  },
  /**
   * QQ+QQ空间（QQ和QQ空间ua相同）
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036522 Safari/537.36 V1_AND_SQ_6.3.7_374_YYB_D QQ/6.3.7.2795 NetType/WIFI WebP/0.3.0 Pixel/1080
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 QQ/6.3.5.437 V1_IPH_SQ_6.3.5_1_APP_A Pixel/640 Core/UIWebView NetType/WIFI Mem/12
  isQq: function isQq() {
    return this.getFromCache('isQq', [/QQ\/[0-9]?/]);
  },
  /**
   * 微信+朋友圈（微信和朋友圈ua相同）
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036523 Safari/537.36 MicroMessenger/6.3.18.800 NetType/WIFI Language/zh_CN
  // * ios    Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.3.19 NetType/WIFI Language/zh_CN
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12D508 MicroMessenger/6.5.14 NetType/WIFI Language/zh_CN
  isWeiXin: function isWeiXin() {
    return this.getFromCache('isWeiXin', ['MicroMessenger']);
  },
  /**
   * 支付宝
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; U; Android 6.0; zh-cn; MI 5 Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/1.0.0.100 U3/0.8.0 Mobile Safari/534.30 AlipayDefined(nt:WIFI,ws:360|640|3.0) AliApp(AP/9.6.8.053103) AlipayClient/9.6.8.053103 Language/zh-Hans
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 ChannelId(12) Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/9.6.6.05070802) AlipayClient/9.6.6.05070802 Language/zh-Hans
  isAlipay: function isAlipay() {
    return this.getFromCache('isAlipay', ['AlipayClient']);
  },
  /**
   * 搜狐新闻客户端
   * @returns {Boolean}
   */
  // * android  Mozilla/5.0 (Linux; Android 6.0; MI 5 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36 SohuNews/5.6.0 BuildCode/106 JsKit/1.0 (Android)
  // * ios    Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 JsKit/1.0 (iOS)
  isSohuNewsClient: function isSohuNewsClient() {
    return this.getFromCache('isSohuNewsClient', ['SohuNews', 'JsKit']);
  },
  /**
   * android
   * @returns {Boolean}
   */
  isAndroid: function isAndroid() {
    return this.getFromCache('isAndroid', ['Android']);
  },
  /**
   * ios
   * @returns {Boolean}
   */
  isIos: function isIos() {
    return this.getFromCache('isIos', ['iPhone']);
  },
  /**
   * 手机端
   * @returns {Boolean}
   */
  isMobile: function isMobile() {
    return this.getFromCache('isMobile', ['Mobile']);
  },
  /**
   * 大V店客户端
   * @returns {Boolean}
   */
  // * android(正式环境):  Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.davdian.com/3.6.2
  // * android(beta环境):  Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.vyohui.cn/3.7.0/dvddomain=1
  // * ios(正式环境):  Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12D508 ios.davdian.com/5.0.0 /WebView=WKWeb
  isDvdApp: function isDvdApp() {
    return this.getFromCache('isDvdApp', ['davdian', 'vyohui', 'bravetime']);
  },
  /**
   * 获取大V店客户端版本号
   * @returns {String}
   */
  getDvdAppVersion: function getDvdAppVersion() {
    var result = /(ios|android)\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)/.exec(navigator.userAgent);
    if (result) {
      return result[3];
    }
  },

  /**
   * 获取大V店app当前环境
   * @returns {String}
   */
  getDvdAppEnv: function getDvdAppEnv() {
    var result = /(ios|android)\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)\/(dev|beta|gray)/.exec(navigator.userAgent);
    if (result) {
      return result[4];
    } else if (this.isDvdApp()) {
      return 'prod';
    } else {
      return '';
    }
    return (/(iPhone OS ([\d_]+))|(Android ([\d\.]+))/ig.exec(navigator.userAgent)
    );
  },

  /**
   * 获取大V店app当前环境分支
   * @returns {String}
   */
  // Mozilla/5.0 (Linux; Android 7.0; MI 5 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 android.davdian.com/5.2.0/gray/dvddomain=1
  getDvdAppNum: function getDvdAppNum() {
    var result = /(ios|android)\.(davdian\.com|vyohui\.cn|bravetime\.net)\/([\d\.]+)\/(dev|beta|gray)\/dvddomain=(\d+)/.exec(navigator.userAgent);
    if (result) {
      return result[5] || '';
    }
  },

  /**
   * 获取ios系统版本
   * @returns {String}
   */
  getIosVersion: function getIosVersion() {
    var result = /iPhone[ ]OS[ ](\d*_*\d*_*\d*)/.exec(navigator.userAgent);
    if (result) {
      return result[1] ? result[1].replace(/_/g, '.') : '';
    }
  },

  /**
   * 比较版本号
   * @param v1  版本号1
   * @param v2  版本号2
   * @returns {Number} 如果 > 0， 说明v1 > v2
   */
  compareVersion: function compareVersion(v1, v2) {
    // 用.分割版本号
    var subV1Arr = v1.split('.');
    var subV2Arr = v2.split('.');

    // 取.最多的数组长度
    var length = subV1Arr.length >= subV2Arr.length ? subV1Arr.length : subV2Arr.length;

    // 比较每个相对应的子版本号
    for (var i = 0; i < length; i++) {
      var subV1 = (subV1Arr[i] || 0) * 1;
      var subV2 = (subV2Arr[i] || 0) * 1;
      if (subV1 > subV2) {
        return 1;
      } else if (subV1 < subV2) {
        return -1;
      }
    }
    return 0;
  },

  /**
   * 获取手机系统版本号
   */
  getSysVersion: function getSysVersion() {
    var result = /(?:iPhone OS ([\d_]+))|(?:Android ([\d\.]+))/ig.exec(navigator.userAgent);
    return result[1] ? result[1].replace(/_/ig, '.') : result[2];
  },

  /**
   * 获取大V店app设备号
   */
  getDvdAppDeviceId: function getDvdAppDeviceId() {
    var result = /\/deviceId=([^/ =]+)/.exec(navigator.userAgent);
    return result ? result[1] : '';
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _md = __webpack_require__(45);

var _md2 = _interopRequireDefault(_md);

var _dvdBaseJsParam = __webpack_require__(13);

var _dvdBaseJsParam2 = _interopRequireDefault(_dvdBaseJsParam);

var _dvdBaseJsRuntime = __webpack_require__(12);

var _dvdBaseJsRuntime2 = _interopRequireDefault(_dvdBaseJsRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}
// import login from 'dvd-service-js-login';


function getDvdsid() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref.req;

  var dvdsid = req ? req.cookies.dvdsid : _jsCookie2.default.get('dvdsid');
  return Object.prototype.toString.call(dvdsid) === '[object String]' ? dvdsid : '';
}

/**
 * @module dvd-service-js-encrypt
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-encrypt.git)
 */
exports.default = {
  /**
   * ajax数据完整性加密
   * @param obj {Object} 将要被加密的参数
   * @param publicOptions {Object} 公参
   * @returns {string}
   */
  ajax: function ajax() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        req = _ref2.req,
        res = _ref2.res;

    // 公共参数
    var data = _defineProperty({
      data_version: '0',
      device_token: '',
      format: 'json',
      osv: function () {
        if (_dvdBaseJsUa2.default.isDvdApp()) {
          if (_dvdBaseJsUa2.default.isAndroid()) {
            return 'web_android_' + _dvdBaseJsUa2.default.getDvdAppVersion() + '_*';
          } else if (_dvdBaseJsUa2.default.isIos()) {
            return 'web_ios_' + _dvdBaseJsUa2.default.getDvdAppVersion() + '_*';
          }
        }
        return 'web_h5_*_*';
      }(),
      // ssr时才会使用默认值
      shop_url: _dvdBaseJsRuntime2.default.isServer() ? req.protocol + '://' + req.headers.host.split(':')[0] : location.protocol + '//' + location.host,
      // sess_key: login.getDvdsid(),
      sess_key: getDvdsid(),
      ts: Date.now(),
      wh: '750_1334'
    }, 'device_token', _dvdBaseJsUa2.default.getDvdAppDeviceId());

    if (_dvdBaseJsRuntime2.default.isClient()) {
      // 统计参数
      var tjKeys = ['rp', 'rl', 'logDp', 'dp', 'cq', 'cu'];
      var url = /* 如果有VueRouter则用hask提取url */window.VueRouter ? location.hash : location.href;
      for (var i in tjKeys) {
        var tjKey = tjKeys[i];
        var tjVal = _dvdBaseJsParam2.default.get(tjKey, url);
        if (tjVal) {
          data[tjKey] = tjVal;
          // param[tjKey] = tjVal.replace(/[ +]/g, '');
        }
      }
    }

    // 业务参数
    for (var _i in obj) {
      data[_i] = obj[_i];
    }

    // map转map数组，编码
    var signArr = [];
    var dataStrArr = [];
    Object.keys(data).sort().forEach(function (key, i) {
      signArr.push(key + '=' + data[key]);
      dataStrArr.push('' + (i === 0 ? '' : '&') + key + '=' + encodeURIComponent(data[key]));
    });

    // md5校验值
    var sign = (0, _md2.default)(signArr.join('')).toString().toUpperCase();

    return dataStrArr.join('') + '&sign=' + sign;
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(9);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsLogin = __webpack_require__(9);

var _dvdServiceJsLogin2 = _interopRequireDefault(_dvdServiceJsLogin);

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _dvdServiceJsUtil = __webpack_require__(8);

var _dvdServiceJsUtil2 = _interopRequireDefault(_dvdServiceJsUtil);

var _dvdServiceJsWeixin = __webpack_require__(16);

var _dvdServiceJsWeixin2 = _interopRequireDefault(_dvdServiceJsWeixin);

var _dvdServiceJsDebug = __webpack_require__(48);

var _dvdServiceJsDebug2 = _interopRequireDefault(_dvdServiceJsDebug);

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 功能：检测是否需要去微信授权
 */
(function () {
  // Cookies.remove('is_auto_login', {
  //   domain: util.getBaseDomain()
  // });
  // alert(Cookies.get('is_auto_login'));

  // Cookies.remove('weixin_auth_try_times', {
  //   domain: util.getBaseDomain()
  // });
  // alert(Cookies.get('weixin_auth_try_times'));
  // return;

  // 微信授权短时间内尝试次数
  var weixin_auth_try_times = _jsCookie2.default.get('weixin_auth_try_times');

  // 完成微信授权之后会在cookie设置is_auto_login=1,有这个标识了不需要再走授权逻辑
  if (_dvdBaseJsUa2.default.isWeiXin() && !_dvdServiceJsLogin2.default.isLogined() && _jsCookie2.default.get('is_auto_login') === undefined && (weixin_auth_try_times === undefined || weixin_auth_try_times < 1)) {
    // if (ua.isWeiXin()) {

    // 设置尝试授权次数，每次失败1天以后重新尝试
    _jsCookie2.default.set('weixin_auth_try_times', weixin_auth_try_times ? parseInt(weixin_auth_try_times) + 1 : 1, {
      domain: _dvdServiceJsUtil2.default.getBaseDomain(),
      path: '/',
      expires: 1 // 有效时间1天
      // expires: 1 / 24 / 60    // 有效时间1分钟
    });

    _dvdServiceJsWeixin2.default.goAuthPage();
  }
})();

// 检查是否开启debug控制台
_dvdServiceJsDebug2.default.check();

/**
 * 功能：检测是否需要domain跳转
 */
function checkRedirect(domain) {
  // 当前域名与强制域名和小写强制域名都不符时，跳转到强制域名
  if (domain && domain !== location.host && ''.toLowerCase && new String(domain).toLowerCase() !== location.host) {
    // 替换当前域名
    location.replace(location.href.replace(location.host, domain));
    // 中断程序执行
    throw new Error('\u5373\u5C06\u8DF3\u8F6C\u5F3A\u5236\u57DF\u540D(' + location.href + ')\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
  }
}

/**
 * 功能：检测接口是否需要domain跳转
 * 说明：每个接口公参会返回强制跳转字段，如果这个字段有值并且与当前域名不同则跳转
 */
function checkRedirectByResponse(response) {
  if (response && response.code === '10010') {
    // 跳转强制domain
    location.replace(location.href.replace(location.host, 'bravetime.' + _dvdServiceJsUtil2.default.getBaseDomain()));

    // 中断程序执行
    throw new Error('\u5373\u5C06\u8DF3\u8F6C\u5F3A\u5236\u57DF\u540D(' + location.href + ')\uFF0C\u5DF2\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38\u4E2D\u65AD\u5F53\u524D\u9875\u9762js\u6267\u884C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u5F02\u5E38\u4FE1\u606F~');
  } else {
    checkRedirect(_jsCookie2.default.get('force_domain'));

    // 接口response设置的cookie在部分手机上并不会立即生效
    setTimeout(function () {
      checkRedirect(_jsCookie2.default.get('force_domain'));
    }, 100);
  }
}

/**
 * 功能：注册全局ajax事件，检测cookie是否需要强制跳转
 */
(function () {
  // jquery接口返回后
  (0, _jquery2.default)(document).ajaxComplete(function (event, xhr, settings) {
    checkRedirectByResponse(xhr.responseJSON);
  });

  // axios接口返回后
  _axios2.default.interceptors.response.use(function (response) {
    checkRedirectByResponse(response.data);
    return response;
  }, function (error) {
    checkRedirectByResponse();
    return Promise.reject(error);
  });
})();

// 页面渲染完时关闭page-loading
(function () {
  var times = 0;
  // 关闭loading方法
  function close() {
    if (times <= 0 && document.body.className.indexOf('loaded') === -1) {
      document.body.className += ' loaded';
      times++;
    }
  }

  // vue初始化1秒之后
  // if (window.Vue) {
  //   window.Vue.nextTick(function () {
  //     setTimeout(close, 1000);
  //   });
  // }

  // jquery接口返回后
  (0, _jquery2.default)(document).ajaxComplete(close);

  // axios接口返回后
  _axios2.default.interceptors.response.use(function (response) {
    close();
    return response;
  }, function (error) {
    close();
    return Promise.reject(error);
  });
})();

/**
 * @module dvd-service-js-common
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-common.git)
 */
exports.default = {
  checkRedirect: checkRedirectByResponse
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _dvdServiceJsLogin = __webpack_require__(9);

var _dvdServiceJsLogin2 = _interopRequireDefault(_dvdServiceJsLogin);

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 前端点击数据采集格式，具体如下：
var defaultParam = {
  // ip
  ip: '',
  // ng时间，留空，数据由nginx生成
  nxtime: Date.now(),
  // 日志时间
  timestamp: Date.now(),
  // 业务线 默认为0，首页点击为1，
  production: 0,
  // 日志来源 默认为0，首页点击为1
  log_source: 0,
  // 浏览器UA
  user_agent: navigator.userAgent,
  // 来源市场，andriod是渠道号，ios为空
  market: '',
  // 用户id
  uid: _dvdServiceJsLogin2.default.getUserId(),
  // session id
  session: _dvdServiceJsLogin2.default.getSessionId(),
  // 卖家状态 (0：游客 1:买家 3:卖家)
  status: _dvdServiceJsLogin2.default.getUserStatusCode(),
  // 1：点击
  action: 1,
  // 1：模板
  action_type: 0,
  // 模板id
  object_id: '',
  // 设备号
  device_id: '',
  // 设备类型
  device: _dvdBaseJsUa2.default.isIos() ? 'ios' : _dvdBaseJsUa2.default.isAndroid() ? 'android' : '',
  // 设备版本号
  sys_version: '',
  // 分辨率
  resolution: window.screen.width + '*' + window.screen.height,
  // 当前位置
  location: location.href,
  // APP版本号
  app_version: '',
  // 详细信息
  production_data: {
    feed: {
      // 整个feed item的位置，透传服务端下发的position
      itemPosition: '',
      // 模板Id
      tplId: '',
      // title or body
      type: '',
      // 当前点击的内容在body中的位置，透传服务端下发的position，title无此字段
      dataPosition: '1',
      // 动作：点击，来自feed中的command->content
      cmdContent: '',
      // 当前点击imgUrl，可以为空
      imgUrl: ''
    }
  }
};

/**
 * @module dvd-service-js-tj
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-tj.git)
 * @see http://wiki.bravetime.net/pages/viewpage.action?pageId=14778431
 */
exports.default = {
  /**
   * 功能：发送统计信息
   * wiki :http://wiki.bravetime.net/pages/viewpage.action?pageId=14778431
   * 用法：
   * tj.send({
        production: 17,
        action: 1,
        action_type: action_type,
        production_data: {
          feed: {
            cmdContent: cmdContent || ''
          }
        }
      });
   */
  send: function send(param) {
    var newParam = _jquery2.default.extend(true, {}, defaultParam, param);
    _jquery2.default.ajax({
      cache: false,
      async: false,
      url: '//bravetime.davdian.com/appapi?_=' + Date.now(), // 这个接口值在davdian.com下存在
      type: 'post',
      dataType: 'text',
      data: JSON.stringify(newParam),
      success: function success(response) {
        console.log(response);
      },
      error: function error(_error) {
        console.error('ajax error:' + _error.status + ' ' + _error.statusText);
      }
    });
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsCookie = __webpack_require__(3);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _scriptjs = __webpack_require__(17);

var _scriptjs2 = _interopRequireDefault(_scriptjs);

var _dvdServiceJsUtil = __webpack_require__(8);

var _dvdServiceJsUtil2 = _interopRequireDefault(_dvdServiceJsUtil);

var _dvdServiceJsPopup = __webpack_require__(14);

var _dvdServiceJsPopup2 = _interopRequireDefault(_dvdServiceJsPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  threshold: 10, // 阈值：计步器达到阈值时开启开发者模式
  step: 0, // 计步器：达到阈值时开启开发者模式
  cookieFlag: {
    developer: 'h5_developer_mode_flag', // 开发者模式开关
    debug: 'h5_debug_flag' // 调试控制台开关
  },
  developerPageUrl: '/developer.html' // 开发者页面地址
};

/**
 * @module dvd-service-js-debug
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-debug.git)
 */
exports.default = {
  /**
   * 检测调试状态，自动开启某些功能
   */
  check: function check() {
    // 检测调试开关状态。如果开关打开，则在当前页面立即打开vConsole。
    if (this.checkDebugFlag()) {
      this.openDebug();
    }
  },


  /**
   * 检测-是否开启开发者模式
   * @returns {Boolean}
   */
  checkDeveloperFlag: function checkDeveloperFlag() {
    return _jsCookie2.default.get(config.cookieFlag.developer);
  },

  /**
   * 进入-开发者页面
   */
  goDeveloperPage: function goDeveloperPage() {
    var ts = this;

    // 如果已经是开发者模式，直接进入开发者页面
    if (_jsCookie2.default.get(config.cookieFlag.developer)) {
      ts.openDeveloper();
    } else {
      // 计步器+1
      var lastStep = ++config.step;
      console.log('\u8C03\u8BD5\u5F00\u5173\u8BA1\u6B65\u5668\u5F53\u524D\u4E3A' + config.step);

      // 如果达到门槛，输入密码正确后，进入开发者页面
      if (config.step >= config.threshold) {
        // 开启调试工具
        _dvdServiceJsPopup2.default.prompt({
          className: 'debug',
          title: '即将启动H5开发者模式',
          text: ' ',
          placeholder: '请输入密码',
          btnTitle: '',
          okBtnCallback: function okBtnCallback(result) {
            if (result == 'dvd@1ppt') {
              ts.openDeveloper();
            } else {
              _dvdServiceJsPopup2.default.toast('密码错误，请重新输入', 2000, 'debug');
              return false;
            }
          },

          cancelBtnTitle: '',
          cancelBtnCallback: function cancelBtnCallback() {}
        });

        // 重置计步器
        config.step = 0;
        // 如果以上2种情况都说不是，点击次数+1
      } else {
        // 如果没有连续调用，则计步器重置为0
        setTimeout(function () {
          if (config.step === lastStep) {
            config.step = 0;
            console.log('调试开关计步器已重置为0');
          }
        }, 500);
      }
    }
  },

  /**
   * 开启-开发者模式
   */
  openDeveloper: function openDeveloper() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // 自动设置调试开关
    if (!this.checkDeveloperFlag()) {
      _jsCookie2.default.set(config.cookieFlag.developer, 1, { domain: _dvdServiceJsUtil2.default.getBaseDomain(), expires: 365, path: '/' });
    }

    // 跳转开发者模式页
    location.href = config.developerPageUrl;
  },

  /**
   * 关闭-开发者模式
   */
  closeDeveloper: function closeDeveloper() {
    _jsCookie2.default.remove(config.cookieFlag.developer, { domain: _dvdServiceJsUtil2.default.getBaseDomain(), path: '/' });
    location.reload();
  },


  /**
   * 检测-是否开启调试控制台
   * @returns {Boolean}
   */
  checkDebugFlag: function checkDebugFlag() {
    return _jsCookie2.default.get(config.cookieFlag.debug);
  },

  /**
   * 开启-调试控制台
   */
  openDebug: function openDebug() {
    // vConsole需要手机支持Symbol类型
    if (window.Symbol) {
      var VConsole = __webpack_require__(49);
      // 自动设置调试开关
      if (!this.checkDebugFlag()) {
        _jsCookie2.default.set(config.cookieFlag.debug, 1, { domain: _dvdServiceJsUtil2.default.getBaseDomain(), expires: 365, path: '/' });
      }

      // 大V红
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '#__vconsole .vc-switch { background-color: #ff4a7d !important; right: 10px !important; bottom: 60px !important;}';
      document.head.appendChild(style);

      // 初始化VConsole调试工具
      /*if (VConsole) {
        VConsole.default ? new VConsole.default() : new VConsole();
      } else {
        scriptjs('//dcn-ws.davdian.com/vconsole/3.0.0/vconsole.min.js', function () {
          new window.VConsole();
        });
      }*/
      new VConsole();
    } else {
      alert('对不起，您的手机系统版本过低，不支持vConsole。');
    }
  },

  /**
   * 关闭-调试控制台
   */
  closeDebug: function closeDebug() {
    _jsCookie2.default.remove(config.cookieFlag.debug, { domain: _dvdServiceJsUtil2.default.getBaseDomain(), path: '/' });
    location.reload();
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = window.VConsole;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {




module.exports = __webpack_require__(51);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);
var bind = __webpack_require__(18);
var Axios = __webpack_require__(52);
var defaults = __webpack_require__(15);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(23);
axios.CancelToken = __webpack_require__(66);
axios.isCancel = __webpack_require__(22);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(67);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {




var defaults = __webpack_require__(15);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(61);
var dispatchRequest = __webpack_require__(62);
var isAbsoluteURL = __webpack_require__(64);
var combineURLs = __webpack_require__(65);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {




var createError = __webpack_require__(21);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {




// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);
var transformData = __webpack_require__(63);
var isCancel = __webpack_require__(22);
var defaults = __webpack_require__(15);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {




var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {




var Cancel = __webpack_require__(23);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {




/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5941978e_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue__ = __webpack_require__(86);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5941978e_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_title_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/dvd-service-com-title/dvd-service-com-title.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dvd-service-com-title.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5941978e", Component.options)
  } else {
    hotAPI.reload("data-v-5941978e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("b523038c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5941978e\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-title.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5941978e\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-title.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\n 功能：Math方法\n 来自：http://blog.csdn.net/natsuyu/article/details/52191181\n*/\n.dvd-service-com-title {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  max-width: 640px;\n  height: 44px;\n  line-height: 44px;\n  color: #333;\n  text-align: center;\n  font-size: 16px;\n  z-index: 1;\n  /* 内容面板区域 */\n  /* 左侧、右侧按钮区域 */\n  /* 左侧按钮区域 */\n  /* 左侧按钮区域 */\n}\n@-webkit-keyframes animation-top-title-slide-out {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n}\n@keyframes animation-top-title-slide-out {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n}\n.dvd-service-com-title.animate-out {\n    -webkit-animation: animation-top-title-slide-out 0.2s forwards;\n            animation: animation-top-title-slide-out 0.2s forwards;\n}\n@-webkit-keyframes animation-top-title-show-in {\n0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes animation-top-title-show-in {\n0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n.dvd-service-com-title.animate-in {\n    -webkit-animation: animation-top-title-show-in 0.2s forwards;\n            animation: animation-top-title-show-in 0.2s forwards;\n}\n.dvd-service-com-title .panel {\n    position: relative;\n    height: 44px;\n    background-color: rgba(250, 250, 250, 0.95);\n    /* 标题栏底部虚线（如果有opacity效果，那么opacity为1时才出现） */\n    /* 中间标题区域 */\n}\n.dvd-service-com-title .panel.bottom-line:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      display: block;\n      width: 100%;\n      height: 1px;\n      background: rgba(0, 0, 0, 0.05);\n      -webkit-transform: scaleY(0.5);\n          -ms-transform: scaleY(0.5);\n              transform: scaleY(0.5);\n}\n.dvd-service-com-title .panel .center-title-wrapper {\n      display: inline-block;\n      height: 44px;\n      line-height: 44px;\n      min-width: 30%;\n      max-width: 70%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n.dvd-service-com-title .panel .center-title-wrapper .title {\n        /* 标题兼容安卓垂直居中 */\n}\n.dvd-service-com-title .panel .center-title-wrapper .title.hack-android {\n          line-height: 46px;\n}\n.dvd-service-com-title .left-btn-wrapper, .dvd-service-com-title .right-btn-wrapper {\n    position: absolute;\n    top: 0;\n    height: 44px;\n    font-size: 0;\n    z-index: 1;\n    /* 按钮 */\n}\n.dvd-service-com-title .left-btn-wrapper .btn, .dvd-service-com-title .right-btn-wrapper .btn {\n      display: inline-block;\n      margin: 0;\n      width: 40px;\n      height: 44px;\n      line-height: 44px;\n      text-align: center;\n      font-size: 16px;\n      background: center no-repeat;\n      background-size: 100% 100%;\n      vertical-align: middle;\n      cursor: pointer;\n      /* 按钮-返回 */\n      /* 按钮-首页 */\n      /* 按钮-分享 */\n      /* 按钮-分享赚钱 */\n      /* 按钮-搜索 */\n}\n.dvd-service-com-title .left-btn-wrapper .btn.back, .dvd-service-com-title .right-btn-wrapper .btn.back {\n        background-image: url(" + __webpack_require__(71) + ");\n}\n.dvd-service-com-title .left-btn-wrapper .btn.home, .dvd-service-com-title .right-btn-wrapper .btn.home {\n        background-image: url(" + __webpack_require__(72) + ");\n}\n.dvd-service-com-title .left-btn-wrapper .btn.share, .dvd-service-com-title .right-btn-wrapper .btn.share {\n        background-image: url(" + __webpack_require__(73) + ");\n}\n.dvd-service-com-title .left-btn-wrapper .btn.share-money, .dvd-service-com-title .right-btn-wrapper .btn.share-money {\n        margin-right: 10px;\n        padding: 0 5px;\n        width: auto;\n        height: 28px;\n        line-height: 28px;\n        border: 1px solid #ccc;\n        border-radius: 2px;\n        /*box-sizing: border-box;*/\n        font-size: 0;\n}\n.dvd-service-com-title .left-btn-wrapper .btn.share-money .text, .dvd-service-com-title .right-btn-wrapper .btn.share-money .text {\n          margin-right: 5px;\n          vertical-align: middle;\n          color: #666;\n          font-size: 14px;\n}\n.dvd-service-com-title .left-btn-wrapper .btn.share-money .text.hack-android, .dvd-service-com-title .right-btn-wrapper .btn.share-money .text.hack-android {\n            position: relative;\n            top: 1px;\n}\n.dvd-service-com-title .left-btn-wrapper .btn.share-money i, .dvd-service-com-title .right-btn-wrapper .btn.share-money i {\n          display: inline-block;\n          width: 17px;\n          height: 16px;\n          background: url(" + __webpack_require__(74) + ") no-repeat;\n          background-size: 17px 16px;\n          vertical-align: middle;\n}\n.dvd-service-com-title .left-btn-wrapper .btn.search, .dvd-service-com-title .right-btn-wrapper .btn.search {\n        background-image: url(" + __webpack_require__(75) + ");\n}\n.dvd-service-com-title .left-btn-wrapper {\n    left: 0;\n}\n.dvd-service-com-title .right-btn-wrapper {\n    right: 0;\n}\n\n/* 按钮切换为带背景色的按钮 */\n.dvd-service-com-title.show-bg-btn .left-btn-wrapper .btn, .dvd-service-com-title.show-bg-btn .right-btn-wrapper .btn {\n  /* 按钮-返回 */\n  /* 按钮-首页 */\n  /* 按钮-分享 */\n  /* 按钮-分享赚钱 */\n}\n.dvd-service-com-title.show-bg-btn .left-btn-wrapper .btn.back, .dvd-service-com-title.show-bg-btn .right-btn-wrapper .btn.back {\n    background-image: url(" + __webpack_require__(76) + ");\n}\n.dvd-service-com-title.show-bg-btn .left-btn-wrapper .btn.home, .dvd-service-com-title.show-bg-btn .right-btn-wrapper .btn.home {\n    background-image: url(" + __webpack_require__(77) + ");\n}\n.dvd-service-com-title.show-bg-btn .left-btn-wrapper .btn.share, .dvd-service-com-title.show-bg-btn .right-btn-wrapper .btn.share {\n    background-image: url(" + __webpack_require__(78) + ");\n}\n.dvd-service-com-title.show-bg-btn .left-btn-wrapper .btn.share-money, .dvd-service-com-title.show-bg-btn .right-btn-wrapper .btn.share-money {\n    background-color: rgba(255, 255, 255, 0.7);\n}\n", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACEBAMAAACpGvKDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcWZmZmZmZmdnZ2ZmZmdnZ2VlZWZmZqaEPTQAAAAHdFJOUwCnv5IKdHTFD/HlAAAAZUlEQVRYw+3Xqw2AUBBFQT7B42iABIvD0gUloPkk2z4NIMjb4Gb8zdG3qgAA+E/bJ8bLkQhHYrxELywsLCz8zZQIN5nwHnf5uI5zLV8PMZaPu1R6k5aWlpZOpq/EQelmDw8A4M0D1Q8yPcWl5h4AAAAASUVORK5CYII="

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAAUVBMVEUAAABoaGhmZmZmZmZnZ2dmZmZmZmZsbGxoaGhnZ2dsbGxnZ2dnZ2dnZ2dnZ2dmZmZvb29paWlmZmZmZmZnZ2dnZ2dmZmZmZmZra2tnZ2dmZmaVCKCuAAAAGnRSTlMAQMD9Vd7TFhNbIdC7q1/WEDn2y5luqn0eL/wfSA8AAAFPSURBVGje7dbbboMwEIThNYcAgSacoX7/B60ERNOtFCkIvFWb+e9WtvTdjjDGGGOMMcYYY4z9jfJcfqVb297ELrix97GpDPch1331aJJgwe3KTR48+pRAwS3zfJNdDNhJyIrFFVnkQuTq1sqgMFzIW1FIGC5kGxguZAMYrpLDw3C1HA6Ge1ldyJdNBmzgKrnyvhEU2oWctJGg4C5kFMS1lhO4z+QE98luJk/LIBu6kA1cAxmurQzXVoZrK8O1leHaynBtZbh2Mtw73NfkO+SjrrVct5s717vltj4AZ/HqDj7dLceZHMgNC1i9vqXGdPlZD+6Iu3+oN95XuAxh531E+B/Ac//xrX42g0evGs3gSMORJTwlW5MtjNMRJkyYMGHCxRV1Gu6uqDgb1ilYdy5c+Z81GNK6c3d106W6Hm99qusaYYwxxhhjjDHGGGPv2hdysDZCH5z7kwAAAABJRU5ErkJggg=="

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUxpcWZmZmxsbGZmZmpqamhoaGZmZmdnZ2hoaGZmZmVlZWZmZmVlZWdnZ2ZmZmZmZmlpaWZmZmhoaGZmZjUJ0W0AAAATdFJOUwCNHOoLTMyAMLL0cthZY6Y/wlPe9U0EAAABbUlEQVRo3u3Y3bKCIBSGYcRVgj+Erfu/1w11sikhmVnIyfceq88EDGJKIYQQQgghhBBCCCGUiazr5DKLy7TY+0GUXLOzuKxXPoxUY3nnM7Ciu7DsmWdnDvqakShvcvDCPJxcC7LyxDydXYWrpFwBv9fhswMsKlfBb/nWARaUK2E5uRZ+ybPvAEvJeVgbfzvMjRLyMUybnbnY2gKm4YcaXN0A3sbXs8fVHhZfZ7NuMMdDVO9L7tE+jMaoG6xqGwcyvy1KuV9w/L2W2rufsOPi+9lE1zTYqyk8+HGJ+wGHgV7pEjeFdfEFYEZBN4XDAWy/yE3hvXCCFXYTmMJI64vcBNb5vT+6s6SbwD47xSTuJvAzbFrZc7+wm8BbYfdYhN3TsHiAAQPuCHvnjDBMod93hFPK0uNrETBgwID/fR7aujt2mX8VTfweniqyhVN/7cjVNki4iqrlgZRMxtUMtZM+YCOEEEIIIYQQQgih+v4ACzMw3BycBrIAAAAASUVORK5CYII="

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAMAAACL67K2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcWdnZ2ZmZmZmZmVlZWhoaGZmZmdnZ2ZmZmZmZmhoaGhoaHFxcWhoaGZmZmZmZmlpaWdnZ2ZmZmZmZmZmZmdnZ2ZmZmZmZnu6wpUAAAAXdFJOUwBAlqDyHwWAwd82Jw5fqUkuarXmiXbS7T4O/AAAARhJREFUSMft1NF2gyAMBuCUClagCraa93/ThZ0zBMk0brf9b/E7QggBoHh728VDjh6wC7CLV9jEbsuhwxaNeGjAEnq5ilj6ZH3sUn3Soog4wnEa1CP2cBFJzDca3DUDt4T0NVMjoYGpQFJTIrEpEGN0nNcO+QyeM27EgyjmP+aNp2Rn/JxW5hh8cxyVSW3MI4nAVSCRO3c/6Sh8FUtSmYkW4jkpjRnyjhkyGs486RV7jrxrUhqq2SIhhfF091pCCuOoMxjSp/Ib4A1VbWY6syWFeZbl3HJvyLmBaOCyYY/4MWLjQjBNv1mrj8yQ21E+3z7mv2b5bT7tY2hc+Px2O9ULQlPp9cNXFCdPMidGanvkZloke4sB/p4vOf8wEzb6IWQAAAAASUVORK5CYII="

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUxpcWVlZWlpaWhoaGVlZWZmZmZmZmZmZmpqamdnZ2ZmZmZmZlxcXGpqamdnZ2ZmZmZmZmdnZ2ZmZmZmZqrCkMUAAAATdFJOUwBvEULCrNX5H1Y+6gswY45zhZwo6wvjAAABnElEQVRo3u2Y6W7EIAyEE8KVbA4S3v9da7JtpVZLQiWMpe58P4O1s5ixOboOAAAAAAAAAAAAAIB3ZPbTGMI4+bmlqu+1i5843ftGsqONv7BjA9lJPydqtdk2o+1z6nriXlpzqppVfX1Rqzm1Deti+5Rlt6ufX9WepC3jUg8PEjheCPiDBh4Dmy5NzGV8NKYxJmVP830sudEljbJkW9nrX07/y3I4jPzslquAhbJtGOqX7HPTJ0YKqV/P1DeOuxjytq7eJynRt9bx7jYrf4actd9H7eSvyqVEE1YFzqcp1y2pvtCwZP2+trXWkri1sr1mV5TpM9durrvEttiEvm730MVrMtWt4sJmaOpWcohxK4vcYgz/QVgs1WLmEisnsQYi1jLlNgmxbVHsICB39BE77Mkdb8UO9PdXmHRXDQzCBZe2WLuKC6+pjMqXF3NO5aunCF5llX18cczK2eemgV0598DWQDnzpNhC+fUjahvlXKG/sbKbpJS3Tki5sfC38vXmzai8ds1Jm5gT0KXOFvalAwAAAAAAAAAAAADSfADfsSX/s7Q45wAAAABJRU5ErkJggg=="

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcYKCgpubm4+Pj/////////////////////////b29qysrP///////////////////////////////////////6ysrGZmZqd2w70AAAAXdFJOUwDs3uWUCzWzr0K11QNhpot3JZwXKW/UMRHS+AAAAlZJREFUaN7tmttuwyAMQNeMxLCGS+i6/v+frg97XImvsyZxXlvpKME4YPvtbTKZTCaTyeQfsB4ptxp6ibH0UFtOx2ov3XKAXwh5M5SvqUZ4SazJxr21gfXH3TZt654CoAhpV9V2QNP11J8BSIRPnZC6A5m7QphtBRgUaZTtGZhk0UrfKrCpN773KCCgHOzljSAiMhc6Cb1Pc2J5QYH09++Z+7YPFe/TTIywWwElCmlX7RXUqJRMkkGRTAgs+lKOfkQH2Epe4OV9ZC7YbxX5O7g8HkPzHfndZ3gf78N/oE4Ge1D3QtgNUiXCi0qdezfwQt+1HxjnxTxyMPFC0M0daO95FmlGXmgnSSsaeSGuaqFF8p6FVzXzQlV601Tv+F1vdt5xXGdD7/BAEAy9oxyyWnoBXi/yYeqFQ7iLud7BTs6m3kF0NVPvIF1XU+8gdwVT72A/dVMv9Jfis4P8ReSF8lIcTb0QmeKvp/fyYSIu508sMRd2cC0yc+dvp6vIHAQJRGSukpQpMTfRR0JgzrLPIt+chAcBtvmQHn245lV82OOZg8LxlmXOGgd6jnlTucLQzePrIv7SRjZXrWsq1ZzULuY088nFnFSKIJmbZvGFYt5Uy01482m5iVhgQ5vPC2zEkiLSjCgpUmuKODOm/0QtG2PMqLIxuVCOMCNb6HdtM7I1QG+GPM3L6CCPbtyT2z/XRZQ7/Btefi0+t6amXxvXr3Ht16r3G07wG8fwG0DxG7nxGzLyG6tyHCTzG51zHBb0G490HAj1HIF1HPr1HHOeTCaTyWQyUeAb3uLYT3aUUnEAAAAASUVORK5CYII="

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpccDAwLq6uv////Dw8Hp6ev///////87OzoKCgv///////3R0dObm5v///////////////////4+Pj////////////////4WFhf///////////9TU1Kurq2ZmZkRwMoIAAAAedFJOUwDMzq+58kKzxuyUNfW8YQOLpgrkJRN3nOtvKavD1roUX2wAAAMdSURBVGje7drZkqIwFAbg1gCB0IawCNgK7/+Y4zh0yZLlnCRWaqry37b2V0L2nK+vmJiYmJiYmJj/IE2X8V6woSakHpjoedY1n0dLzqgkjJcfxJtMEKoMEdln7LLXqIvdl77VKmMUFJZVXtmBgjP4o38YRYX9eGGvN4rO7eqhTdXUIrVrK6s4tQx3etNXQa0jHB53V1OH1J31671Tp9wtX3RGqGNIZuVSD7GQS+IDJuin3d2pl9yRLewKac9JAmnbqF5VQfrveZ7PkP6MGUk4zIXJHNGwoO4iJ+34m0ny0dLnC/7rpukiT/M7D4fXfAO6SbLI+QrOZbMkcN6Hus9nvMiX/F9SOUxBK4OKgd23vKRQwKzyMlS+3b2sgiFDZzVg3J2shIfK/Qdv3a2shAE/mSHdjayGmevYcXTXsho2jiI93l3Jo3QAeaU37MuIhfuWT3OhmrFI49C0VO6hP+Obl7BzIbKwftInjbvIJ90qqLFs03oXIJd2CwCTa5a51ehhdo2yZgxpnFyjrH7JnZtrkjt0L4a6BjnDti24q5c5cqDGuFq5x41bOFcnC1RvwroaWd2fBh+uWh6UcO3FVcq1Ej5MEcmve0nw8uErBAW/3Gn+xssI+Pio8+n19VG9ltqn/X59MplyxKNWLqkLMPyY51F5vIqfnODwc/9W4Kcn8VlY4Ne2fuAevwDxA3P84nYHX9pNLkA4wy8EdnA7b9IC4Q6/9NnBxRYugHCDX+wd4em0ZALDzGJ5e4RzhaSBucWC3gtcWmxhfMD67aL4HCxstqk+4MxmY+4BNmzMFcO1B7i3OnzxAJdWx03usPG4Sd683GHzAZv0SNEZBhwpSn+yMwy5f5IdG7vCoGNj2UH5Uzpf3km3cLr601kKA6/QbzJ4lzU8q6dn1NWA5DJkPPz3x2ohvctof+d1GEUe6fc27XrrsE36sL7+gV14gYO48IJd8QGDuuKDXWqCUiNLBUJd44a7uA53VR+uOCFcOUa4ApRwJTfhiozClVUFLCQLVzoXsFgwXHlkwILQkCWwAYt+Q5Y5x8TExMTExMR4yB/w+wCkOoT+qgAAAABJRU5ErkJggg=="

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACECAMAAABs6h+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURf///////3d3d7m5uf///////////0xpcZmZmcvLy66urmxsbP///////////////////////4CAgNbW1qGhoejo6JKSkvT09P///////////3Nzc4aGhoODg////////////2ZmZqfxRVwAAAAhdFJOU4Am5aUCaXwAv5qu9lMcdy1jB9qTuIvGhUhvMuzS1kILEV5FCBcAAANVSURBVGje7drJdqwgEAbgooPebtsxajvdHnj/l4yerDBWMXrY8G+T+J04QAEF/wIFIhzhCEc4whGOcIQN0hTVK6+TqUzTckrq/FUVzelww8YEDpKMrDkPbuYaiNRzcwbMWZ6CImnOuGeYVwloJam4R5jPE2hnmrkvuEjAKEnhBX7nYJz87Q6zEixSMkeYj2CZkbvAnxqsU3/s4aIEh5SFLcxScErK7ODK0V3lygauwEMqc5ilPmD8bmNw4cVd5cIM/pTgKeXHBOY1eEvNDeARPGbUh5nxxYdnh/+Q6cLv0twVApfLtyYsz4ND97wcZJB+5yKEyPBZUg8upD9qF3GYAQzkQgfmcr1xETow9KSccA14lv7ktl3vdpD9tWl5VsNcrus6IR56LxgpT1wJ7+aGqxBX8CBXKnj3hE1g6Bdc/vOUQTF2mMC/8pfeKALkN2wIU3JOw03qBBNy2pDwDG4wIc8kXLvCuFxTcAPOMC43BMwM4L79Ok52X+Wb6r0GRQFwDPfZ8y7ILKqCQIYTLXi4ClWW/mAMweG/j/gIzn7/2fvyfZht4Lz3oHrIgM/ECPzY1EvXIu/WNp0trXpWBsXi4Q/83C6MT/mbe281JgoJfqnh7f99Drh7x114oXCuhDNBzs+kKw/XQI5be7hfL/zf1pXHLqC/ph283uhlsHXl70mCJwXc49OthgsTCpcKeC3ALuhlW5ULJQqnCvhC1JFqF1JbeFjvdE+5N7CEFbe6PRz7tV3iViterhv6iHsdl3i5FJ/TOno8kWt2Gi7xOdVKGB09OrVLDCC5Pay1p2s7SbjCL9tp0RWubAsBV7iwLX1c4ca22HOEE+vy1hEerQt6R5hZL2H04FuHVKCN9aJtWKOGH8heW33uMhWH51MX5jisWJg7bkUQcH7m5gsFsxO3myhYud3ksMFGwpXplqInWGNLcfdFeYI1NlF3T9kPrLVtLM/KRIGH5PtgmaO1US5/y+22Hr4a5HlQ9WseDciHIQ9hnIftYYg0igzG8mOwPf7ZFQRtZnKrs9bhwCvcEV+wQ81wx7jhDq7DHdWHa04I144RrgElXMtNuCajcG1VARvJwrXOBWwWDNceGbAhNGALbMim35BtzrGVPcIRjnCEIxzhCHvID3J7S5jSjOnxAAAAAElFTkSuQmCC"

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsNative = __webpack_require__(10);

var _dvdServiceJsNative2 = _interopRequireDefault(_dvdServiceJsNative);

var _dvdServiceJsShare = __webpack_require__(80);

var _dvdServiceJsShare2 = _interopRequireDefault(_dvdServiceJsShare);

var _dvdServiceJsUtil = __webpack_require__(8);

var _dvdServiceJsUtil2 = _interopRequireDefault(_dvdServiceJsUtil);

var _dvdServiceJsLogin = __webpack_require__(9);

var _dvdServiceJsLogin2 = _interopRequireDefault(_dvdServiceJsLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    // 返回按钮
    back: {
      type: Boolean,
      default: false
    },
    // 返回按钮点击回调
    backClick: {
      type: Function,
      default: null
    },
    // 首页按钮
    home: {
      type: Boolean,
      default: false
    },
    // 首页按钮图片
    homeImg: {
      type: String,
      default: ''
    },
    // 首页按钮图片
    homeHref: {
      type: String,
      default: ''
    },
    // 首页按钮点击回调
    homeClick: {
      type: Function,
      default: null
    },
    // 分享按钮
    share: {
      type: Boolean,
      default: false
    },
    // 分享按钮点击回调
    shareClick: {
      type: Function,
      default: null
    },
    // 分享赚XX元按钮
    shareMoney: {
      type: String,
      default: ''
    },
    // 分享赚XX元按钮点击回调
    shareMoneyClick: {
      type: Function,
      default: null
    },
    // 搜索按钮
    search: {
      type: Boolean,
      default: false
    },
    // 搜索按钮点击回调
    searchClick: {
      type: Function,
      default: null
    },

    // 标题文案
    title: {
      type: String,
      default: ''
    },
    // 底部边框
    bottomLine: {
      type: Boolean,
      default: true
    },
    // 是否隐藏横条
    hideBar: {
      type: Boolean,
      default: false
    },
    // 如果为true，则不区分app版本始终系显示
    alwaysShow: {
      type: Boolean,
      default: false
    },

    // 动效-是否开启滚动时透明度渐变
    opacity: {
      type: Boolean,
      default: false
    },
    // 动效-是否开启上下滑
    slide: {
      type: Boolean,
      default: false
    },

    // 返回后刷新上一页面，只在app有效
    backRefresh: {
      type: Boolean,
      default: false
    },

    // 是否调用setHead隐藏头部
    setHead: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      // 全局变量
      window: window,
      document: document,

      // 工具模块
      ua: _dvdBaseJsUa2.default,
      native: _dvdServiceJsNative2.default,
      login: _dvdServiceJsLogin2.default,

      // 是否显示划入、滑出效果
      animateIn: false,
      animateOut: false,

      // 当前页面滚动高度
      scrollTop: 0
    };
  },

  computed: {
    // 是否显示-回首页
    showHome: function showHome() {
      return this.home && !this.showShare && !this.showShareMoney;
    },

    // 是否显示-分享
    showShare: function showShare() {
      // 如果设置了share，或者设置了shareMoney但因某些原因不能显示shareMoney，则退而显示share
      return _dvdBaseJsUa2.default.isDvdApp() && this.share || this.shareMoney && !this.showShareMoney;
    },

    // 是否显示-分享赚钱
    showShareMoney: function showShareMoney() {
      return _dvdBaseJsUa2.default.isDvdApp() && _dvdServiceJsLogin2.default.isSeller() && this.shareMoney && this.shareMoney !== '0';
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var ts = this;

    // title同步
    if (this.title) {
      document.title = this.title;
    }

    // 设置dvd-service-com-title父元素padding-top
    var setPaddingTop = function setPaddingTop() {
      if (!ts.hideBar && !ts.opacity) {
        var $el = ts.$el;

        // 兼容vue 1.x
        if ($el.className != 'dvd-service-com-title') {
          $el = document.querySelector('.dvd-service-com-title');
        }

        $el.parentNode.style.paddingTop = '44px';
      }
      // 标记页面现在用的是h5标题栏
      // document.body.className += ' h5-title';
    };

    // 如果是app
    if (_dvdBaseJsUa2.default.isDvdApp()) {
      // 如果app >= 520
      if (_dvdBaseJsUa2.default.compareVersion(_dvdBaseJsUa2.default.getDvdAppVersion(), '5.2.0') >= 0) {
        // 设置页面顶部paddingTop
        setPaddingTop();

        // 隐藏app头部
        if (this.setHead) {
          // 循环调用，以免被后面的命令覆盖，接到回调后不再循环
          var times = 0;
          var interval = setInterval(function () {
            times++;
            if (times >= 10) window.clearInterval(interval);
            _dvdServiceJsNative2.default.Browser.setHead({
              'hideHead': '1',
              success: function success() {
                window.clearInterval(interval);
              }
            });
          }, 300);
          // 兜底以免被后面的command覆盖
          /*setTimeout(function(){
           native.custom.setHead({
           'hideHead': '1',
           });
           }, 3000);*/
        }
        // 如果app老版本
      } else {
        // 设置app头部，全部切到H5标题时候该代码不需要了
        if (this.setHead) {
          // 设置app头部标题栏
          _dvdServiceJsNative2.default.custom.initHead({
            homeOnHead: ts.home ? 1 : 0,
            shareOnHead: ts.share ? 1 : 0
          });
          // 设置app头部标题栏
          _dvdServiceJsNative2.default.Browser.setHead({
            homeBtn: ts.home ? '1' : '0',
            shareBtn: ts.share ? '1' : '0',
            title: document.title
          });
        }
      }
    } else {
      // 设置页面顶部paddingTop
      setPaddingTop();
    }

    // 头部滚动渐隐渐现逻辑
    if (ts.opacity) {
      ts.opacity_callback = function () {
        ts.scrollTop = _dvdServiceJsUtil2.default.getDocumentScrollTop();
        ts.$refs.panel.style.opacity = ts.scrollTop / 200;
      };
      window.addEventListener('scroll', ts.opacity_callback, false);
    }

    // 标题是否自动划入滑出
    this.slide && !_dvdBaseJsUa2.default.isDvdApp() && this.autoSlideInOut();

    // 解决ios微信中标题栏置顶无法下拉问题
    _dvdBaseJsUa2.default.isIos() && _dvdBaseJsUa2.default.isWeiXin() && this.iosDownPullHack();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.autoSlideInOut_callback, false);
    window.removeEventListener('scroll', this.iosDownPullHack_callback, false);
    window.removeEventListener('scroll', this.opacity_callback, false);
  },

  methods: {
    /**
     * 返回按钮点击事件
     */
    backInterClick: function backInterClick() {
      // 如果指定了回调，则执行回调
      if (this.backClick) {
        this.backClick();
        // 如果未指定回调，则执行返回
      } else {
        // 如果在app中，调用app返回功能
        if (_dvdBaseJsUa2.default.isDvdApp()) {
          _dvdServiceJsNative2.default.Browser.goBack({
            needRefresh: this.backRefresh ? 1 : 0
          });
          // 如果不在app中，根据history返回或关闭页面
        } else {
          if (history.length > 1) {
            history.back();
            // 如果返回到了第一页，再返回就关闭窗口
          } else {
            // 微信
            if (_dvdBaseJsUa2.default.isWeiXin() && window.wx) {
              window.wx.closeWindow();
              // 大V店app
            } else if (_dvdBaseJsUa2.default.isDvdApp()) {
              _dvdServiceJsNative2.default.Browser.close();
              // 浏览器
            } else {
              window.location.href = "about:blank";
              window.close();
            }
          }
        }
      }
    },

    /**
     * 首页按钮点击事件
     */
    homeInterClick: function homeInterClick() {
      // 如果指定了回调，则执行回调
      if (this.homeClick) {
        this.homeClick();
        // 如果指定了跳转地址，则跳转
      } else if (this.homeHref) {
        // 跳转到app首页
        if (_dvdBaseJsUa2.default.isDvdApp()) {
          _dvdServiceJsNative2.default.Browser.open({
            url: this.homeHref
          });
          // 跳转到web首页
        } else {
          location.href = this.homeHref;
        }
        // 如果未指定回调，则跳转首页
      } else {
        // 跳转到app首页
        if (_dvdBaseJsUa2.default.isDvdApp()) {
          _dvdServiceJsNative2.default.Browser.goNativeHomePage();
          // 跳转到web首页
        } else {
          location.href = '/';
        }
      }
    },

    /**
     * 分享按钮点击事件
     */
    shareInterClick: function shareInterClick() {
      // 如果指定了回调，则执行回调
      if (this.shareClick) {
        this.shareClick();
        // 如果未指定回调，则跳转首页
      } else {
        // 唤起分享
        _dvdServiceJsShare2.default.callShare();
      }
    },

    /**
     * 分享赚xx元按钮点击事件
     */
    shareMoneyInterClick: function shareMoneyInterClick() {
      // 如果指定了回调，则执行回调
      if (this.shareMoneyClick) {
        this.shareMoneyClick();
        // 如果未指定回调，则跳转首页
      } else {
        // 唤起分享
        _dvdServiceJsShare2.default.callShare();
      }
    },

    /**
     * 搜索按钮点击事件
     */
    searchInterClick: function searchInterClick() {
      // 如果指定了回调，则执行回调
      if (this.searchClick) {
        this.searchClick();
      }
    },

    /**
     * 开启自动划入、滑出效果
     */
    autoSlideInOut: function autoSlideInOut() {
      var ts = this;

      // 动态获取标题栏的高度
      var titleBarHeight = ts.$el.clientHeight;

      // 记录每次滚动条移动的最后位置
      var lastY = 0;

      // 是否标题栏正在滑入、滑出
      var slidingIn = false;
      var slidingOut = false;

      ts.autoSlideInOut_callback = function () {
        // 滚动条移动的当前位置
        var y = _dvdServiceJsUtil2.default.getDocumentScrollTop();

        // 滚动条向下滚动时，标题栏滑出
        if (y - lastY > 0) {
          // 如果当前没有划入效果 && 滚动距离大于标题栏高度
          if (!slidingOut && y > titleBarHeight) {
            // 滑出
            ts.animateIn = false;
            ts.animateOut = true;

            // 延迟一定时间后可再次滑出
            slidingOut = true;
            setTimeout(function () {
              slidingOut = false;
            }, 50);
          }
          // 滚动条向上滚动时，标题栏滑入
        } else if (!slidingIn && y - lastY < 0) {
          // top-title向下滑入
          ts.animateIn = true;
          ts.animateOut = false;

          // 延迟一定时间后可再次滑入
          slidingIn = true;
          setTimeout(function () {
            slidingIn = false;
          }, 50);
        }

        // 记录每次滚动条移动的最后位置
        lastY = y;
      };

      // 监听滚动条移动事件
      window.addEventListener('scroll', ts.autoSlideInOut_callback, false);
    },

    /**
     * 兼容ios微信下拉时，看不到页面地址问题
     */
    iosDownPullHack: function iosDownPullHack() {
      var ts = this;
      ts.iosDownPullHack_callback = function () {
        var y = _dvdServiceJsUtil2.default.getDocumentScrollTop();
        if (y < 0) {
          ts.$refs.comTopTitle.style.position = 'absolute';
        } else {
          ts.$refs.comTopTitle.style.position = 'fixed';
        }
      };
      window.addEventListener('scroll', ts.iosDownPullHack_callback, false);
    }
  },
  filters: {},
  watch: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

var _dvdServiceJsNative = __webpack_require__(10);

var _dvdServiceJsNative2 = _interopRequireDefault(_dvdServiceJsNative);

var _dvdServiceJsWeixin = __webpack_require__(16);

var _dvdServiceJsWeixin2 = _interopRequireDefault(_dvdServiceJsWeixin);

var _vue = __webpack_require__(11);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEl = function getEl() {
  return (document.querySelector('.app') || document.body).appendChild(document.createElement('div'));
};

/**
 * @module dvd-service-js-share
 * @author swg [源码地址](http://gitlab.rd.vyohui.com/FE-Service/dvd-service-js-share.git)
 */
exports.default = {
  /**
   * 设置 微信&native 分享信息
   * 调用方法:
   share.setShareInfo({
      title: '大V店组团包邮', // 分享标题
      desc: '一件包邮！每天上新！好货低价又包邮，抢到了就赚翻啦', // 分享描述
      link: location.href, // 分享链接
      imgUrl: 'http://pic.davdian.com/free/2016/04/09/320_320_0fc3e0dbbadd249b7f1b93a525f0adf0.jpg', // 分享图标
    });
   跟app协商了 以后图文链接分享图片大小规定200X200 可以避免在app里分享不了的问题 oss上的图片可以加样式 ?x-oss-process=image/resize,m_lfit,h_200,w_200
   */
  setShareInfo: function setShareInfo() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var response = arguments[1];

    // add by Nemo
    // 分享文案里增加店铺名称
    if (response && response.share_seller_name && response.share_seller_name != '') {
      if (param.desc && param.desc != '') {
        param.desc = response.share_seller_name + ' 推荐：' + param.desc;
      } else {
        param.desc = response.share_seller_name + ' 推荐';
      }
    }
    if (_dvdBaseJsUa2.default.isWeiXin()) {
      _dvdServiceJsWeixin2.default.setShareInfo(param, response);
    } else if (_dvdBaseJsUa2.default.isDvdApp()) {
      _dvdServiceJsNative2.default.custom.setShareInfo(param);
    }
  },

  /**
   * 唤起浏览器分享(目前只支持弹出浮层引导分享)
   */
  callBrowserShare: function callBrowserShare(options) {
    new _vue2.default({
      components: {
        'com-share-pop-tip': __webpack_require__(81).default
      },
      el: getEl(),
      data: {
        browserTip: options && options.browserTip,
        showArrow: options && options.showArrow
      },
      template: '<com-share-pop-tip :browser-tip="browserTip" :show-arrow="showArrow"/>'
    });
  },

  /**
   * 唤起 浏览器|native 分享
   */
  callShare: function callShare(options) {
    if (_dvdBaseJsUa2.default.isDvdApp()) {
      _dvdServiceJsNative2.default.custom.share();
    } else {
      this.callBrowserShare(options);
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_99b4cef0_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_presets_es2015_stage_0_stage_1_stage_2_stage_3_plugins_transform_vue_jsx_transform_object_assign_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_babel_runtime_vux_loader_src_script_loader_js_vue_loader_lib_selector_type_script_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_99b4cef0_vux_loader_src_before_template_compiler_loader_js_vux_loader_src_template_loader_js_vue_loader_lib_selector_type_template_index_0_dvd_base_build_dist_loader_replace_loader_js_ref_1_2_dvd_service_com_web_share_guide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/dvd-service-com-web-share-guide/dvd-service-com-web-share-guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dvd-service-com-web-share-guide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99b4cef0", Component.options)
  } else {
    hotAPI.reload("data-v-99b4cef0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("166bc0a5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-99b4cef0\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-web-share-guide.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-99b4cef0\",\"scoped\":false,\"hasInlineConfig\":true}!../sass-loader/lib/loader.js!../vux-loader/src/style-loader.js!../vue-loader/lib/selector.js?type=styles&index=0!../dvd-base-build/dist/loader/replace-loader.js?{\"replacer\":{\"\":\"\",\"\":\"\",\"dvmama.com\":\"dvmama.com\",\"//5e.dvmama.com/m/static/dist/static\":\"//5e.dvmama.com/m/static/dist/static\",\"//3n.dvmama.com\":\"//3n.dvmama.com\",\"?v=2018-08-07_14:14:36\":\"?v=2018-08-07_14:14:27\",\"m\":\"m\"}}!./dvd-service-com-web-share-guide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\n 功能：Math方法\n 来自：http://blog.csdn.net/natsuyu/article/details/52191181\n*/\n.dvd-service-com-web-share-guide {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  max-width: 640px;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.8;\n  z-index: 99;\n  display: none;\n}\n.dvd-service-com-web-share-guide .arrow {\n    position: absolute;\n    top: 0;\n    right: 0.3rem;\n}\n.dvd-service-com-web-share-guide .tip {\n    margin-top: 1rem;\n    color: #ffffff;\n    font-size: 0.15rem;\n    padding: 0 0.3rem;\n    text-align: center;\n    line-height: 1.5;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvdBaseJsUa = __webpack_require__(1);

var _dvdBaseJsUa2 = _interopRequireDefault(_dvdBaseJsUa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      styleObject: {
        display: 'block'
      },
      isWeixin: _dvdBaseJsUa2.default.isWeiXin()
    };
  },
  props: {
    classObject: {},
    type: String, // 取值weixin
    browserTip: {
      type: String,
      default: null
    },
    // 是否显示箭头
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  methods: {
    show: function show() {
      //        this.styleObject.display = 'block';
    },
    close: function close() {
      //        this.styleObject.display = 'none';
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    touchmove: function touchmove(event) {
      event.preventDefault();
    }
  },
  filters: {},
  computed: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dvd-service-com-web-share-guide",
    style: (_vm.styleObject),
    on: {
      "click": _vm.close,
      "touchmove": _vm.touchmove
    }
  }, [(_vm.showArrow) ? _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "http://pic.davdian.com/free/pointer.png"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tip",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [(_vm.isWeixin) ? [_c('p', [_vm._v("请点击右上角“分享”按钮,")]), _vm._v(" "), _c('p', [_vm._v("然后可以选择“发送给朋友”、“分享到朋友圈”或者“复制链接”后发送链接给朋友。")])] : _vm._e(), _vm._v(" "), (!_vm.isWeixin) ? [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.browserTip || '请复制地址栏链接，将链接发送给朋友')
    }
  })] : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-99b4cef0", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.alwaysShow || !(_vm.ua.isDvdApp() && _vm.ua.compareVersion(_vm.ua.getDvdAppVersion(), '5.2.0') < 0)) ? _c('div', {
    ref: "comTopTitle",
    staticClass: "dvd-service-com-title",
    class: {
      'animate-out': _vm.animateOut, 'animate-in': _vm.animateIn, 'show-bg-btn': _vm.opacity && _vm.scrollTop < 200
    }
  }, [_c('div', {
    staticClass: "left-btn-wrapper"
  }, [(_vm.back) ? _c('span', {
    staticClass: "btn back",
    on: {
      "click": _vm.backInterClick
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("left")], 2), _vm._v(" "), _c('div', {
    ref: "panel",
    staticClass: "panel",
    class: {
      'bottom-line': this.bottomLine
    },
    style: ({
      display: _vm.hideBar ? 'none' : null,
      opacity: _vm.opacity ? 0 : null
    })
  }, [_c('div', {
    staticClass: "center-title-wrapper"
  }, [(_vm.title) ? _c('span', {
    staticClass: "title",
    class: {
      'hack-android': _vm.ua.isAndroid()
    }
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("center")], 2), _vm._v(" "), _vm._t("bottom")], 2), _vm._v(" "), _c('div', {
    staticClass: "right-btn-wrapper"
  }, [(_vm.showHome) ? _c('span', {
    staticClass: "btn home",
    style: ({
      backgroundImage: _vm.homeImg ? 'url(' + _vm.homeImg + ')' : null
    }),
    on: {
      "click": _vm.homeInterClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showShare) ? _c('span', {
    staticClass: "btn share",
    on: {
      "click": _vm.shareInterClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showShareMoney) ? _c('span', {
    staticClass: "btn share-money",
    on: {
      "click": _vm.shareMoneyInterClick
    }
  }, [_c('span', {
    staticClass: "text",
    class: {
      'hack-android': _vm.ua.isAndroid()
    }
  }, [_vm._v("赚" + _vm._s(_vm.shareMoney) + "元")]), _c('i')]) : _vm._e(), _vm._v(" "), _vm._t("right"), _vm._v(" "), (_vm.search) ? _c('span', {
    staticClass: "btn search",
    on: {
      "click": _vm.searchInterClick
    }
  }) : _vm._e()], 2)]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5941978e", module.exports)
  }
}

/***/ })
/******/ ]);