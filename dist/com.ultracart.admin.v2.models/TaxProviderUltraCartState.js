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
 * The TaxProviderUltraCartState model module.
 * @module com.ultracart.admin.v2.models/TaxProviderUltraCartState
 * @version 4.1.15
 */
var TaxProviderUltraCartState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaxProviderUltraCartState</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCartState
   */
  function TaxProviderUltraCartState() {
    _classCallCheck(this, TaxProviderUltraCartState);
    TaxProviderUltraCartState.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(TaxProviderUltraCartState, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TaxProviderUltraCartState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCartState} The populated <code>TaxProviderUltraCartState</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaxProviderUltraCartState();
        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('exempt_digital_items')) {
          obj['exempt_digital_items'] = _ApiClient["default"].convertToType(data['exempt_digital_items'], 'Boolean');
        }
        if (data.hasOwnProperty('exempt_physical_items')) {
          obj['exempt_physical_items'] = _ApiClient["default"].convertToType(data['exempt_physical_items'], 'Boolean');
        }
        if (data.hasOwnProperty('exempt_service_items')) {
          obj['exempt_service_items'] = _ApiClient["default"].convertToType(data['exempt_service_items'], 'Boolean');
        }
        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }
        if (data.hasOwnProperty('state_name')) {
          obj['state_name'] = _ApiClient["default"].convertToType(data['state_name'], 'String');
        }
        if (data.hasOwnProperty('tax_gift_charge')) {
          obj['tax_gift_charge'] = _ApiClient["default"].convertToType(data['tax_gift_charge'], 'Boolean');
        }
        if (data.hasOwnProperty('tax_gift_wrap')) {
          obj['tax_gift_wrap'] = _ApiClient["default"].convertToType(data['tax_gift_wrap'], 'Boolean');
        }
        if (data.hasOwnProperty('tax_rate_formatted')) {
          obj['tax_rate_formatted'] = _ApiClient["default"].convertToType(data['tax_rate_formatted'], 'String');
        }
        if (data.hasOwnProperty('tax_shipping')) {
          obj['tax_shipping'] = _ApiClient["default"].convertToType(data['tax_shipping'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if this state taxes are managed by UltraCart
 * @member {Boolean} enabled
 */
TaxProviderUltraCartState.prototype['enabled'] = undefined;

/**
 * True if digital items are exempt from sales tax in this state.
 * @member {Boolean} exempt_digital_items
 */
TaxProviderUltraCartState.prototype['exempt_digital_items'] = undefined;

/**
 * True if physical items are exempt from sales tax in this state.
 * @member {Boolean} exempt_physical_items
 */
TaxProviderUltraCartState.prototype['exempt_physical_items'] = undefined;

/**
 * True if service items are exempt from sales tax in this state.
 * @member {Boolean} exempt_service_items
 */
TaxProviderUltraCartState.prototype['exempt_service_items'] = undefined;

/**
 * State Code (2 digits)
 * @member {String} state_code
 */
TaxProviderUltraCartState.prototype['state_code'] = undefined;

/**
 * Fully spelled out state name
 * @member {String} state_name
 */
TaxProviderUltraCartState.prototype['state_name'] = undefined;

/**
 * True if gift charges should be taxed in this state.
 * @member {Boolean} tax_gift_charge
 */
TaxProviderUltraCartState.prototype['tax_gift_charge'] = undefined;

/**
 * True if gift wrap should be taxed in this state.
 * @member {Boolean} tax_gift_wrap
 */
TaxProviderUltraCartState.prototype['tax_gift_wrap'] = undefined;

/**
 * State tax rate formatted for display
 * @member {String} tax_rate_formatted
 */
TaxProviderUltraCartState.prototype['tax_rate_formatted'] = undefined;

/**
 * True if shipping should be taxed in this state.
 * @member {Boolean} tax_shipping
 */
TaxProviderUltraCartState.prototype['tax_shipping'] = undefined;
var _default = exports["default"] = TaxProviderUltraCartState;