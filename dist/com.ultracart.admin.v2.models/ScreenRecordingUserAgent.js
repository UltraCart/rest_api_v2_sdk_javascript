"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ScreenRecordingUserAgentDevice = _interopRequireDefault(require("./ScreenRecordingUserAgentDevice"));
var _ScreenRecordingUserAgentOS = _interopRequireDefault(require("./ScreenRecordingUserAgentOS"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ScreenRecordingUserAgent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingUserAgent
 * @version 4.1.15
 */
var ScreenRecordingUserAgent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingUserAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent
   */
  function ScreenRecordingUserAgent() {
    _classCallCheck(this, ScreenRecordingUserAgent);
    ScreenRecordingUserAgent.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ScreenRecordingUserAgent, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ScreenRecordingUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} The populated <code>ScreenRecordingUserAgent</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingUserAgent();
        if (data.hasOwnProperty('device')) {
          obj['device'] = _ScreenRecordingUserAgentDevice["default"].constructFromObject(data['device']);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('os')) {
          obj['os'] = _ScreenRecordingUserAgentOS["default"].constructFromObject(data['os']);
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} device
 */
ScreenRecordingUserAgent.prototype['device'] = undefined;

/**
 * @member {String} name
 */
ScreenRecordingUserAgent.prototype['name'] = undefined;

/**
 * @member {String} original
 */
ScreenRecordingUserAgent.prototype['original'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentOS} os
 */
ScreenRecordingUserAgent.prototype['os'] = undefined;

/**
 * @member {String} version
 */
ScreenRecordingUserAgent.prototype['version'] = undefined;
var _default = exports["default"] = ScreenRecordingUserAgent;