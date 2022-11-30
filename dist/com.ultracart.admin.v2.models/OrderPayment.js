"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _OrderPaymentCheck = _interopRequireDefault(require("./OrderPaymentCheck"));

var _OrderPaymentCreditCard = _interopRequireDefault(require("./OrderPaymentCreditCard"));

var _OrderPaymentECheck = _interopRequireDefault(require("./OrderPaymentECheck"));

var _OrderPaymentInsurance = _interopRequireDefault(require("./OrderPaymentInsurance"));

var _OrderPaymentPurchaseOrder = _interopRequireDefault(require("./OrderPaymentPurchaseOrder"));

var _OrderPaymentTransaction = _interopRequireDefault(require("./OrderPaymentTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderPayment model module.
 * @module com.ultracart.admin.v2.models/OrderPayment
 * @version 4.0.88-RC
 */
var OrderPayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderPayment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPayment
   */
  function OrderPayment() {
    _classCallCheck(this, OrderPayment);

    OrderPayment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderPayment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPayment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPayment} The populated <code>OrderPayment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderPayment();

        if (data.hasOwnProperty('check')) {
          obj['check'] = _OrderPaymentCheck["default"].constructFromObject(data['check']);
        }

        if (data.hasOwnProperty('credit_card')) {
          obj['credit_card'] = _OrderPaymentCreditCard["default"].constructFromObject(data['credit_card']);
        }

        if (data.hasOwnProperty('echeck')) {
          obj['echeck'] = _OrderPaymentECheck["default"].constructFromObject(data['echeck']);
        }

        if (data.hasOwnProperty('hold_for_fraud_review')) {
          obj['hold_for_fraud_review'] = _ApiClient["default"].convertToType(data['hold_for_fraud_review'], 'Boolean');
        }

        if (data.hasOwnProperty('insurance')) {
          obj['insurance'] = _OrderPaymentInsurance["default"].constructFromObject(data['insurance']);
        }

        if (data.hasOwnProperty('payment_dts')) {
          obj['payment_dts'] = _ApiClient["default"].convertToType(data['payment_dts'], 'String');
        }

        if (data.hasOwnProperty('payment_method')) {
          obj['payment_method'] = _ApiClient["default"].convertToType(data['payment_method'], 'String');
        }

        if (data.hasOwnProperty('payment_method_accounting_code')) {
          obj['payment_method_accounting_code'] = _ApiClient["default"].convertToType(data['payment_method_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('payment_method_deposit_to_account')) {
          obj['payment_method_deposit_to_account'] = _ApiClient["default"].convertToType(data['payment_method_deposit_to_account'], 'String');
        }

        if (data.hasOwnProperty('payment_status')) {
          obj['payment_status'] = _ApiClient["default"].convertToType(data['payment_status'], 'String');
        }

        if (data.hasOwnProperty('purchase_order')) {
          obj['purchase_order'] = _OrderPaymentPurchaseOrder["default"].constructFromObject(data['purchase_order']);
        }

        if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
          obj['rotating_transaction_gateway_code'] = _ApiClient["default"].convertToType(data['rotating_transaction_gateway_code'], 'String');
        }

        if (data.hasOwnProperty('surcharge')) {
          obj['surcharge'] = _Currency["default"].constructFromObject(data['surcharge']);
        }

        if (data.hasOwnProperty('surcharge_accounting_code')) {
          obj['surcharge_accounting_code'] = _ApiClient["default"].convertToType(data['surcharge_accounting_code'], 'String');
        }

        if (data.hasOwnProperty('surcharge_transaction_fee')) {
          obj['surcharge_transaction_fee'] = _ApiClient["default"].convertToType(data['surcharge_transaction_fee'], 'Number');
        }

        if (data.hasOwnProperty('surcharge_transaction_percentage')) {
          obj['surcharge_transaction_percentage'] = _ApiClient["default"].convertToType(data['surcharge_transaction_percentage'], 'Number');
        }

        if (data.hasOwnProperty('test_order')) {
          obj['test_order'] = _ApiClient["default"].convertToType(data['test_order'], 'Boolean');
        }

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_OrderPaymentTransaction["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrderPayment;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCheck} check
 */


OrderPayment.prototype['check'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard} credit_card
 */

OrderPayment.prototype['credit_card'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck} echeck
 */

OrderPayment.prototype['echeck'] = undefined;
/**
 * True if order has been held for fraud review
 * @member {Boolean} hold_for_fraud_review
 */

OrderPayment.prototype['hold_for_fraud_review'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} insurance
 */

OrderPayment.prototype['insurance'] = undefined;
/**
 * Date/time that the payment was successfully processed, for new orders, this field is only considered if channel_partner.skip_payment_processing is true
 * @member {String} payment_dts
 */

OrderPayment.prototype['payment_dts'] = undefined;
/**
 * Payment method
 * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentMethodEnum} payment_method
 */

OrderPayment.prototype['payment_method'] = undefined;
/**
 * Payment method QuickBooks code
 * @member {String} payment_method_accounting_code
 */

OrderPayment.prototype['payment_method_accounting_code'] = undefined;
/**
 * Payment method QuickBooks deposit account
 * @member {String} payment_method_deposit_to_account
 */

OrderPayment.prototype['payment_method_deposit_to_account'] = undefined;
/**
 * Payment status
 * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentStatusEnum} payment_status
 */

OrderPayment.prototype['payment_status'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} purchase_order
 */

OrderPayment.prototype['purchase_order'] = undefined;
/**
 * Rotating transaction gateway code used to process this order
 * @member {String} rotating_transaction_gateway_code
 */

OrderPayment.prototype['rotating_transaction_gateway_code'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
 */

OrderPayment.prototype['surcharge'] = undefined;
/**
 * Surcharge accounting code
 * @member {String} surcharge_accounting_code
 */

OrderPayment.prototype['surcharge_accounting_code'] = undefined;
/**
 * Surcharge transaction fee
 * @member {Number} surcharge_transaction_fee
 */

OrderPayment.prototype['surcharge_transaction_fee'] = undefined;
/**
 * Surcharge transaction percentage
 * @member {Number} surcharge_transaction_percentage
 */

OrderPayment.prototype['surcharge_transaction_percentage'] = undefined;
/**
 * True if this is a test order
 * @member {Boolean} test_order
 */

OrderPayment.prototype['test_order'] = undefined;
/**
 * Transactions associated with processing this payment
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransaction>} transactions
 */

OrderPayment.prototype['transactions'] = undefined;
/**
 * Allowed values for the <code>payment_method</code> property.
 * @enum {String}
 * @readonly
 */

OrderPayment['PaymentMethodEnum'] = {
  /**
   * value: "Affirm"
   * @const
   */
  "Affirm": "Affirm",

  /**
   * value: "Amazon"
   * @const
   */
  "Amazon": "Amazon",

  /**
   * value: "Amazon SC"
   * @const
   */
  "Amazon SC": "Amazon SC",

  /**
   * value: "Cash"
   * @const
   */
  "Cash": "Cash",

  /**
   * value: "Check"
   * @const
   */
  "Check": "Check",

  /**
   * value: "COD"
   * @const
   */
  "COD": "COD",

  /**
   * value: "Credit Card"
   * @const
   */
  "Credit Card": "Credit Card",

  /**
   * value: "eBay"
   * @const
   */
  "eBay": "eBay",

  /**
   * value: "eCheck"
   * @const
   */
  "eCheck": "eCheck",

  /**
   * value: "Google Shopping"
   * @const
   */
  "Google Shopping": "Google Shopping",

  /**
   * value: "Insurance"
   * @const
   */
  "Insurance": "Insurance",

  /**
   * value: "LoanHero"
   * @const
   */
  "LoanHero": "LoanHero",

  /**
   * value: "Money Order"
   * @const
   */
  "Money Order": "Money Order",

  /**
   * value: "PayPal"
   * @const
   */
  "PayPal": "PayPal",

  /**
   * value: "Purchase Order"
   * @const
   */
  "Purchase Order": "Purchase Order",

  /**
   * value: "Quote Request"
   * @const
   */
  "Quote Request": "Quote Request",

  /**
   * value: "Unknown"
   * @const
   */
  "Unknown": "Unknown",

  /**
   * value: "Wire Transfer"
   * @const
   */
  "Wire Transfer": "Wire Transfer",

  /**
   * value: "Walmart"
   * @const
   */
  "Walmart": "Walmart"
};
/**
 * Allowed values for the <code>payment_status</code> property.
 * @enum {String}
 * @readonly
 */

OrderPayment['PaymentStatusEnum'] = {
  /**
   * value: "Unprocessed"
   * @const
   */
  "Unprocessed": "Unprocessed",

  /**
   * value: "Authorized"
   * @const
   */
  "Authorized": "Authorized",

  /**
   * value: "Capture Failed"
   * @const
   */
  "Capture Failed": "Capture Failed",

  /**
   * value: "Processed"
   * @const
   */
  "Processed": "Processed",

  /**
   * value: "Declined"
   * @const
   */
  "Declined": "Declined",

  /**
   * value: "Voided"
   * @const
   */
  "Voided": "Voided",

  /**
   * value: "Refunded"
   * @const
   */
  "Refunded": "Refunded",

  /**
   * value: "Skipped"
   * @const
   */
  "Skipped": "Skipped"
};
var _default = OrderPayment;
exports["default"] = _default;