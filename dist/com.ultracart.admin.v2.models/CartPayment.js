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

var _CartPaymentPurchaseOrder = _interopRequireDefault(require("./CartPaymentPurchaseOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CartPayment model module.
 * @module com.ultracart.admin.v2.models/CartPayment
 * @version 4.0.121-RC
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


  _createClass(CartPayment, null, [{
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

  return CartPayment;
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
var _default = CartPayment;
exports["default"] = _default;