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
 * The ItemPaymentProcessing model module.
 * @module com.ultracart.admin.v2.models/ItemPaymentProcessing
 * @version 4.0.244
 */
var ItemPaymentProcessing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemPaymentProcessing</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPaymentProcessing
   */
  function ItemPaymentProcessing() {
    _classCallCheck(this, ItemPaymentProcessing);
    ItemPaymentProcessing.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ItemPaymentProcessing, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ItemPaymentProcessing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} The populated <code>ItemPaymentProcessing</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemPaymentProcessing();
        if (data.hasOwnProperty('block_prepaid')) {
          obj['block_prepaid'] = _ApiClient["default"].convertToType(data['block_prepaid'], 'Boolean');
        }
        if (data.hasOwnProperty('block_refunds')) {
          obj['block_refunds'] = _ApiClient["default"].convertToType(data['block_refunds'], 'Boolean');
        }
        if (data.hasOwnProperty('credit_card_transaction_type')) {
          obj['credit_card_transaction_type'] = _ApiClient["default"].convertToType(data['credit_card_transaction_type'], 'String');
        }
        if (data.hasOwnProperty('no_realtime_charge')) {
          obj['no_realtime_charge'] = _ApiClient["default"].convertToType(data['no_realtime_charge'], 'Boolean');
        }
        if (data.hasOwnProperty('payment_method_validity')) {
          obj['payment_method_validity'] = _ApiClient["default"].convertToType(data['payment_method_validity'], ['String']);
        }
        if (data.hasOwnProperty('rotating_transaction_gateway_codes')) {
          obj['rotating_transaction_gateway_codes'] = _ApiClient["default"].convertToType(data['rotating_transaction_gateway_codes'], ['String']);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if prepaid cards should be blocked from buying this item
 * @member {Boolean} block_prepaid
 */
ItemPaymentProcessing.prototype['block_prepaid'] = undefined;

/**
 * True if this item should block any refund attempts
 * @member {Boolean} block_refunds
 */
ItemPaymentProcessing.prototype['block_refunds'] = undefined;

/**
 * Credit card transaction type
 * @member {String} credit_card_transaction_type
 */
ItemPaymentProcessing.prototype['credit_card_transaction_type'] = undefined;

/**
 * True if no real-time charge should be performed on this item.
 * @member {Boolean} no_realtime_charge
 */
ItemPaymentProcessing.prototype['no_realtime_charge'] = undefined;

/**
 * Payment method validity
 * @member {Array.<String>} payment_method_validity
 */
ItemPaymentProcessing.prototype['payment_method_validity'] = undefined;

/**
 * Rotating transaction gateway codes
 * @member {Array.<String>} rotating_transaction_gateway_codes
 */
ItemPaymentProcessing.prototype['rotating_transaction_gateway_codes'] = undefined;
var _default = exports["default"] = ItemPaymentProcessing;