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
 * The CouponPercentOffSubtotalWithSubtotal model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
 * @version 4.0.244
 */
var CouponPercentOffSubtotalWithSubtotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffSubtotalWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
   */
  function CouponPercentOffSubtotalWithSubtotal() {
    _classCallCheck(this, CouponPercentOffSubtotalWithSubtotal);
    CouponPercentOffSubtotalWithSubtotal.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CouponPercentOffSubtotalWithSubtotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CouponPercentOffSubtotalWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} The populated <code>CouponPercentOffSubtotalWithSubtotal</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffSubtotalWithSubtotal();
        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }
        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }
        if (data.hasOwnProperty('subtotal_amount')) {
          obj['subtotal_amount'] = _ApiClient["default"].convertToType(data['subtotal_amount'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
CouponPercentOffSubtotalWithSubtotal.prototype['currency_code'] = undefined;

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffSubtotalWithSubtotal.prototype['discount_percent'] = undefined;

/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */
CouponPercentOffSubtotalWithSubtotal.prototype['subtotal_amount'] = undefined;
var _default = exports["default"] = CouponPercentOffSubtotalWithSubtotal;