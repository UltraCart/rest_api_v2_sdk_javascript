"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CartPaymentAffirm = _interopRequireDefault(require("./CartPaymentAffirm"));
var _CartPaymentAmazon = _interopRequireDefault(require("./CartPaymentAmazon"));
var _CartPaymentCheck = _interopRequireDefault(require("./CartPaymentCheck"));
var _CartPaymentCreditCard = _interopRequireDefault(require("./CartPaymentCreditCard"));
var _CartPaymentHealthBenefitCard = _interopRequireDefault(require("./CartPaymentHealthBenefitCard"));
var _CartPaymentPurchaseOrder = _interopRequireDefault(require("./CartPaymentPurchaseOrder"));
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
 * The CartPayment model module.
 * @module com.ultracart.admin.v2.models/CartPayment
 * @version 4.0.244
 */
var CartPayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartPayment</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPayment
   */
  function CartPayment() {
    _classCallCheck(this, CartPayment);
    CartPayment.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CartPayment, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CartPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPayment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPayment} The populated <code>CartPayment</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartPayment();
        if (data.hasOwnProperty('affirm')) {
          obj['affirm'] = _CartPaymentAffirm["default"].constructFromObject(data['affirm']);
        }
        if (data.hasOwnProperty('amazon')) {
          obj['amazon'] = _CartPaymentAmazon["default"].constructFromObject(data['amazon']);
        }
        if (data.hasOwnProperty('check')) {
          obj['check'] = _CartPaymentCheck["default"].constructFromObject(data['check']);
        }
        if (data.hasOwnProperty('credit_card')) {
          obj['credit_card'] = _CartPaymentCreditCard["default"].constructFromObject(data['credit_card']);
        }
        if (data.hasOwnProperty('health_benefit_card')) {
          obj['health_benefit_card'] = _CartPaymentHealthBenefitCard["default"].constructFromObject(data['health_benefit_card']);
        }
        if (data.hasOwnProperty('payment_method')) {
          obj['payment_method'] = _ApiClient["default"].convertToType(data['payment_method'], 'String');
        }
        if (data.hasOwnProperty('purchase_order')) {
          obj['purchase_order'] = _CartPaymentPurchaseOrder["default"].constructFromObject(data['purchase_order']);
        }
        if (data.hasOwnProperty('rtg_code')) {
          obj['rtg_code'] = _ApiClient["default"].convertToType(data['rtg_code'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentAffirm} affirm
 */
CartPayment.prototype['affirm'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentAmazon} amazon
 */
CartPayment.prototype['amazon'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentCheck} check
 */
CartPayment.prototype['check'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentCreditCard} credit_card
 */
CartPayment.prototype['credit_card'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} health_benefit_card
 */
CartPayment.prototype['health_benefit_card'] = undefined;

/**
 * Payment method
 * @member {String} payment_method
 */
CartPayment.prototype['payment_method'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder} purchase_order
 */
CartPayment.prototype['purchase_order'] = undefined;

/**
 * Rotating transaction gateway code
 * @member {String} rtg_code
 */
CartPayment.prototype['rtg_code'] = undefined;
var _default = exports["default"] = CartPayment;