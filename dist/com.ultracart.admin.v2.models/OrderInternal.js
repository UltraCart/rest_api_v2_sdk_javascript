"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderTransactionalMerchantNote = _interopRequireDefault(require("./OrderTransactionalMerchantNote"));
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
 * The OrderInternal model module.
 * @module com.ultracart.admin.v2.models/OrderInternal
 * @version 4.0.245
 */
var OrderInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderInternal</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderInternal
   */
  function OrderInternal() {
    _classCallCheck(this, OrderInternal);
    OrderInternal.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OrderInternal, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderInternal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderInternal} The populated <code>OrderInternal</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderInternal();
        if (data.hasOwnProperty('exported_to_accounting')) {
          obj['exported_to_accounting'] = _ApiClient["default"].convertToType(data['exported_to_accounting'], 'Boolean');
        }
        if (data.hasOwnProperty('merchant_notes')) {
          obj['merchant_notes'] = _ApiClient["default"].convertToType(data['merchant_notes'], 'String');
        }
        if (data.hasOwnProperty('placed_by_user')) {
          obj['placed_by_user'] = _ApiClient["default"].convertToType(data['placed_by_user'], 'String');
        }
        if (data.hasOwnProperty('refund_by_user')) {
          obj['refund_by_user'] = _ApiClient["default"].convertToType(data['refund_by_user'], 'String');
        }
        if (data.hasOwnProperty('sales_rep_code')) {
          obj['sales_rep_code'] = _ApiClient["default"].convertToType(data['sales_rep_code'], 'String');
        }
        if (data.hasOwnProperty('transactional_merchant_notes')) {
          obj['transactional_merchant_notes'] = _ApiClient["default"].convertToType(data['transactional_merchant_notes'], [_OrderTransactionalMerchantNote["default"]]);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true
 * @member {Boolean} exported_to_accounting
 */
OrderInternal.prototype['exported_to_accounting'] = undefined;

/**
 * Merchant notes.  Full notes in non-transactional mode.  Just used to write a new merchant note when transaction merchant notes enabled.
 * @member {String} merchant_notes
 */
OrderInternal.prototype['merchant_notes'] = undefined;

/**
 * If placed via the BEOE, this is the user that placed the order
 * @member {String} placed_by_user
 */
OrderInternal.prototype['placed_by_user'] = undefined;

/**
 * User that issued the refund
 * @member {String} refund_by_user
 */
OrderInternal.prototype['refund_by_user'] = undefined;

/**
 * Sales rep code associated with the order
 * @member {String} sales_rep_code
 */
OrderInternal.prototype['sales_rep_code'] = undefined;

/**
 * Transactional merchant notes
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote>} transactional_merchant_notes
 */
OrderInternal.prototype['transactional_merchant_notes'] = undefined;
var _default = exports["default"] = OrderInternal;