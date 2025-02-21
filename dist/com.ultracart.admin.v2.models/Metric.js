"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The Metric model module.
 * @module com.ultracart.admin.v2.models/Metric
 * @version 4.0.245
 */
var Metric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Metric</code>.
   * @alias module:com.ultracart.admin.v2.models/Metric
   */
  function Metric() {
    _classCallCheck(this, Metric);
    Metric.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Metric, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Metric} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Metric} The populated <code>Metric</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Metric();
        if (data.hasOwnProperty('all_time')) {
          obj['all_time'] = _ApiClient["default"].convertToType(data['all_time'], 'Number');
        }
        if (data.hasOwnProperty('all_time_formatted')) {
          obj['all_time_formatted'] = _ApiClient["default"].convertToType(data['all_time_formatted'], 'String');
        }
        if (data.hasOwnProperty('last_30')) {
          obj['last_30'] = _ApiClient["default"].convertToType(data['last_30'], 'Number');
        }
        if (data.hasOwnProperty('last_30_formatted')) {
          obj['last_30_formatted'] = _ApiClient["default"].convertToType(data['last_30_formatted'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('prior_30')) {
          obj['prior_30'] = _ApiClient["default"].convertToType(data['prior_30'], 'Number');
        }
        if (data.hasOwnProperty('prior_30_formatted')) {
          obj['prior_30_formatted'] = _ApiClient["default"].convertToType(data['prior_30_formatted'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {Number} all_time
 */
Metric.prototype['all_time'] = undefined;

/**
 * @member {String} all_time_formatted
 */
Metric.prototype['all_time_formatted'] = undefined;

/**
 * @member {Number} last_30
 */
Metric.prototype['last_30'] = undefined;

/**
 * @member {String} last_30_formatted
 */
Metric.prototype['last_30_formatted'] = undefined;

/**
 * @member {String} name
 */
Metric.prototype['name'] = undefined;

/**
 * @member {Number} prior_30
 */
Metric.prototype['prior_30'] = undefined;

/**
 * @member {String} prior_30_formatted
 */
Metric.prototype['prior_30_formatted'] = undefined;

/**
 * @member {String} type
 */
Metric.prototype['type'] = undefined;
var _default = exports["default"] = Metric;