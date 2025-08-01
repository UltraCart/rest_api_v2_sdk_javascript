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
 * The TaxJarConfig model module.
 * @module com.ultracart.admin.v2.models/TaxJarConfig
 * @version 4.1.15
 */
var TaxJarConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxJarConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxJarConfig
   */
  function TaxJarConfig() {
    _classCallCheck(this, TaxJarConfig);
    TaxJarConfig.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(TaxJarConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TaxJarConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxJarConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxJarConfig} The populated <code>TaxJarConfig</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxJarConfig();
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('api_key')) {
          obj['api_key'] = _ApiClient["default"].convertToType(data['api_key'], 'String');
        }
        if (data.hasOwnProperty('estimate_only')) {
          obj['estimate_only'] = _ApiClient["default"].convertToType(data['estimate_only'], 'Boolean');
        }
        if (data.hasOwnProperty('send_outside_nexus')) {
          obj['send_outside_nexus'] = _ApiClient["default"].convertToType(data['send_outside_nexus'], 'Boolean');
        }
        if (data.hasOwnProperty('send_test_orders')) {
          obj['send_test_orders'] = _ApiClient["default"].convertToType(data['send_test_orders'], 'Boolean');
        }
        if (data.hasOwnProperty('skip_channel_orders')) {
          obj['skip_channel_orders'] = _ApiClient["default"].convertToType(data['skip_channel_orders'], 'Boolean');
        }
        if (data.hasOwnProperty('use_distribution_center_from')) {
          obj['use_distribution_center_from'] = _ApiClient["default"].convertToType(data['use_distribution_center_from'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if TaxJar is active for this merchant
 * @member {Boolean} active
 */
TaxJarConfig.prototype['active'] = undefined;

/**
 * TaxJar API key
 * @member {String} api_key
 */
TaxJarConfig.prototype['api_key'] = undefined;

/**
 * True if this TaxJar configuration is to estimate taxes only and not report placed orders to TaxJar
 * @member {Boolean} estimate_only
 */
TaxJarConfig.prototype['estimate_only'] = undefined;

/**
 * Send orders outside your nexus TaxJar.  The default is to not transmit outside orders to TaxJar to reduce API calls.  However, this will prevent TaxJar from dynamically creating new Nexus when thresholds are exceeded for a state.
 * @member {Boolean} send_outside_nexus
 */
TaxJarConfig.prototype['send_outside_nexus'] = undefined;

/**
 * Send test orders through to TaxJar.  The default is to not transmit test orders to TaxJar.
 * @member {Boolean} send_test_orders
 */
TaxJarConfig.prototype['send_test_orders'] = undefined;

/**
 * Do not send channel partner orders to TaxJar.  Set this to true if your channel partner reports tax on their own.
 * @member {Boolean} skip_channel_orders
 */
TaxJarConfig.prototype['skip_channel_orders'] = undefined;

/**
 * Use distribution center from address
 * @member {Boolean} use_distribution_center_from
 */
TaxJarConfig.prototype['use_distribution_center_from'] = undefined;
var _default = exports["default"] = TaxJarConfig;