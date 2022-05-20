/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency', 'com.ultracart.admin.v2.models/OrderPaymentCheck', 'com.ultracart.admin.v2.models/OrderPaymentCreditCard', 'com.ultracart.admin.v2.models/OrderPaymentECheck', 'com.ultracart.admin.v2.models/OrderPaymentInsurance', 'com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder', 'com.ultracart.admin.v2.models/OrderPaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'), require('./OrderPaymentCheck'), require('./OrderPaymentCreditCard'), require('./OrderPaymentECheck'), require('./OrderPaymentInsurance'), require('./OrderPaymentPurchaseOrder'), require('./OrderPaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPayment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency, root.UltraCartRestApiV2.OrderPaymentCheck, root.UltraCartRestApiV2.OrderPaymentCreditCard, root.UltraCartRestApiV2.OrderPaymentECheck, root.UltraCartRestApiV2.OrderPaymentInsurance, root.UltraCartRestApiV2.OrderPaymentPurchaseOrder, root.UltraCartRestApiV2.OrderPaymentTransaction);
  }
}(this, function(ApiClient, Currency, OrderPaymentCheck, OrderPaymentCreditCard, OrderPaymentECheck, OrderPaymentInsurance, OrderPaymentPurchaseOrder, OrderPaymentTransaction) {
  'use strict';

  /**
   * The OrderPayment model module.
   * @module com.ultracart.admin.v2.models/OrderPayment
   * @version 3.10.4
   */

  /**
   * Constructs a new <code>OrderPayment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderPayment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderPayment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderPayment} The populated <code>OrderPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('check'))
        obj.check = OrderPaymentCheck.constructFromObject(data['check']);
      if (data.hasOwnProperty('credit_card'))
        obj.credit_card = OrderPaymentCreditCard.constructFromObject(data['credit_card']);
      if (data.hasOwnProperty('echeck'))
        obj.echeck = OrderPaymentECheck.constructFromObject(data['echeck']);
      if (data.hasOwnProperty('hold_for_fraud_review'))
        obj.hold_for_fraud_review = ApiClient.convertToType(data['hold_for_fraud_review'], 'Boolean');
      if (data.hasOwnProperty('insurance'))
        obj.insurance = OrderPaymentInsurance.constructFromObject(data['insurance']);
      if (data.hasOwnProperty('payment_dts'))
        obj.payment_dts = ApiClient.convertToType(data['payment_dts'], 'String');
      if (data.hasOwnProperty('payment_method'))
        obj.payment_method = ApiClient.convertToType(data['payment_method'], 'String');
      if (data.hasOwnProperty('payment_method_accounting_code'))
        obj.payment_method_accounting_code = ApiClient.convertToType(data['payment_method_accounting_code'], 'String');
      if (data.hasOwnProperty('payment_method_deposit_to_account'))
        obj.payment_method_deposit_to_account = ApiClient.convertToType(data['payment_method_deposit_to_account'], 'String');
      if (data.hasOwnProperty('payment_status'))
        obj.payment_status = ApiClient.convertToType(data['payment_status'], 'String');
      if (data.hasOwnProperty('purchase_order'))
        obj.purchase_order = OrderPaymentPurchaseOrder.constructFromObject(data['purchase_order']);
      if (data.hasOwnProperty('rotating_transaction_gateway_code'))
        obj.rotating_transaction_gateway_code = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
      if (data.hasOwnProperty('surcharge'))
        obj.surcharge = Currency.constructFromObject(data['surcharge']);
      if (data.hasOwnProperty('surcharge_accounting_code'))
        obj.surcharge_accounting_code = ApiClient.convertToType(data['surcharge_accounting_code'], 'String');
      if (data.hasOwnProperty('surcharge_transaction_fee'))
        obj.surcharge_transaction_fee = ApiClient.convertToType(data['surcharge_transaction_fee'], 'Number');
      if (data.hasOwnProperty('surcharge_transaction_percentage'))
        obj.surcharge_transaction_percentage = ApiClient.convertToType(data['surcharge_transaction_percentage'], 'Number');
      if (data.hasOwnProperty('test_order'))
        obj.test_order = ApiClient.convertToType(data['test_order'], 'Boolean');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [OrderPaymentTransaction]);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentCheck} check
   */
  exports.prototype.check = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentCreditCard} credit_card
   */
  exports.prototype.credit_card = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentECheck} echeck
   */
  exports.prototype.echeck = undefined;

  /**
   * True if order has been held for fraud review
   * @member {Boolean} hold_for_fraud_review
   */
  exports.prototype.hold_for_fraud_review = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} insurance
   */
  exports.prototype.insurance = undefined;

  /**
   * Date/time that the payment was successfully processed, for new orders, this field is only considered if channel_partner.skip_payment_processing is true
   * @member {String} payment_dts
   */
  exports.prototype.payment_dts = undefined;

  /**
   * Payment method
   * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentMethodEnum} payment_method
   */
  exports.prototype.payment_method = undefined;

  /**
   * Payment method QuickBooks code
   * @member {String} payment_method_accounting_code
   */
  exports.prototype.payment_method_accounting_code = undefined;

  /**
   * Payment method QuickBooks deposit account
   * @member {String} payment_method_deposit_to_account
   */
  exports.prototype.payment_method_deposit_to_account = undefined;

  /**
   * Payment status
   * @member {module:com.ultracart.admin.v2.models/OrderPayment.PaymentStatusEnum} payment_status
   */
  exports.prototype.payment_status = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} purchase_order
   */
  exports.prototype.purchase_order = undefined;

  /**
   * Rotating transaction gateway code used to process this order
   * @member {String} rotating_transaction_gateway_code
   */
  exports.prototype.rotating_transaction_gateway_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} surcharge
   */
  exports.prototype.surcharge = undefined;

  /**
   * Surcharge accounting code
   * @member {String} surcharge_accounting_code
   */
  exports.prototype.surcharge_accounting_code = undefined;

  /**
   * Surcharge transaction fee
   * @member {Number} surcharge_transaction_fee
   */
  exports.prototype.surcharge_transaction_fee = undefined;

  /**
   * Surcharge transaction percentage
   * @member {Number} surcharge_transaction_percentage
   */
  exports.prototype.surcharge_transaction_percentage = undefined;

  /**
   * True if this is a test order
   * @member {Boolean} test_order
   */
  exports.prototype.test_order = undefined;

  /**
   * Transactions associated with processing this payment
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderPaymentTransaction>} transactions
   */
  exports.prototype.transactions = undefined;


  /**
   * Allowed values for the <code>payment_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentMethodEnum = {
    /**
     * value: "Affirm"
     * @const
     */
    Affirm: "Affirm",

    /**
     * value: "Amazon"
     * @const
     */
    Amazon: "Amazon",

    /**
     * value: "Amazon SC"
     * @const
     */
    Amazon_SC: "Amazon SC",

    /**
     * value: "Cash"
     * @const
     */
    Cash: "Cash",

    /**
     * value: "Check"
     * @const
     */
    Check: "Check",

    /**
     * value: "COD"
     * @const
     */
    COD: "COD",

    /**
     * value: "Credit Card"
     * @const
     */
    Credit_Card: "Credit Card",

    /**
     * value: "eBay"
     * @const
     */
    eBay: "eBay",

    /**
     * value: "eCheck"
     * @const
     */
    eCheck: "eCheck",

    /**
     * value: "Google Shopping"
     * @const
     */
    Google_Shopping: "Google Shopping",

    /**
     * value: "Insurance"
     * @const
     */
    Insurance: "Insurance",

    /**
     * value: "LoanHero"
     * @const
     */
    LoanHero: "LoanHero",

    /**
     * value: "Money Order"
     * @const
     */
    Money_Order: "Money Order",

    /**
     * value: "PayPal"
     * @const
     */
    PayPal: "PayPal",

    /**
     * value: "Purchase Order"
     * @const
     */
    Purchase_Order: "Purchase Order",

    /**
     * value: "Quote Request"
     * @const
     */
    Quote_Request: "Quote Request",

    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Wire Transfer"
     * @const
     */
    Wire_Transfer: "Wire Transfer",

    /**
     * value: "Walmart"
     * @const
     */
    Walmart: "Walmart"
  };


  /**
   * Allowed values for the <code>payment_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentStatusEnum = {
    /**
     * value: "Unprocessed"
     * @const
     */
    Unprocessed: "Unprocessed",

    /**
     * value: "Authorized"
     * @const
     */
    Authorized: "Authorized",

    /**
     * value: "Capture Failed"
     * @const
     */
    Capture_Failed: "Capture Failed",

    /**
     * value: "Processed"
     * @const
     */
    Processed: "Processed",

    /**
     * value: "Declined"
     * @const
     */
    Declined: "Declined",

    /**
     * value: "Voided"
     * @const
     */
    Voided: "Voided",

    /**
     * value: "Refunded"
     * @const
     */
    Refunded: "Refunded",

    /**
     * value: "Skipped"
     * @const
     */
    Skipped: "Skipped"
  };

  return exports;

}));
