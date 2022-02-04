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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationTestMethod = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaymentsConfigurationTestMethod model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>PaymentsConfigurationTestMethod</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationTestMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod} The populated <code>PaymentsConfigurationTestMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bank_account_number'))
        obj.bank_account_number = ApiClient.convertToType(data['bank_account_number'], 'String');
      if (data.hasOwnProperty('bank_routing_number'))
        obj.bank_routing_number = ApiClient.convertToType(data['bank_routing_number'], 'String');
      if (data.hasOwnProperty('credit_card_number'))
        obj.credit_card_number = ApiClient.convertToType(data['credit_card_number'], 'String');
      if (data.hasOwnProperty('credit_card_number_existing'))
        obj.credit_card_number_existing = ApiClient.convertToType(data['credit_card_number_existing'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('payment_action'))
        obj.payment_action = ApiClient.convertToType(data['payment_action'], 'String');
      if (data.hasOwnProperty('payment_method'))
        obj.payment_method = ApiClient.convertToType(data['payment_method'], 'String');
      if (data.hasOwnProperty('payment_method_test_oid'))
        obj.payment_method_test_oid = ApiClient.convertToType(data['payment_method_test_oid'], 'Number');
      if (data.hasOwnProperty('skip_affiliate_transaction'))
        obj.skip_affiliate_transaction = ApiClient.convertToType(data['skip_affiliate_transaction'], 'Boolean');
      if (data.hasOwnProperty('skip_conversion_pixels'))
        obj.skip_conversion_pixels = ApiClient.convertToType(data['skip_conversion_pixels'], 'Boolean');
      if (data.hasOwnProperty('skip_fraud_filter'))
        obj.skip_fraud_filter = ApiClient.convertToType(data['skip_fraud_filter'], 'Boolean');
    }
    return obj;
  }

  /**
   * Bank account number
   * @member {String} bank_account_number
   */
  exports.prototype.bank_account_number = undefined;

  /**
   * Bank routing number
   * @member {String} bank_routing_number
   */
  exports.prototype.bank_routing_number = undefined;

  /**
   * Credit card number
   * @member {String} credit_card_number
   */
  exports.prototype.credit_card_number = undefined;

  /**
   * The existing credit card number
   * @member {String} credit_card_number_existing
   */
  exports.prototype.credit_card_number_existing = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Payment action
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod.PaymentActionEnum} payment_action
   */
  exports.prototype.payment_action = undefined;

  /**
   * Payment method
   * @member {String} payment_method
   */
  exports.prototype.payment_method = undefined;

  /**
   * Payment method test oid
   * @member {Number} payment_method_test_oid
   */
  exports.prototype.payment_method_test_oid = undefined;

  /**
   * Skip affiliate transaction
   * @member {Boolean} skip_affiliate_transaction
   */
  exports.prototype.skip_affiliate_transaction = undefined;

  /**
   * If true, skips recording any conversion pixels to avoid sending test orders to your analysis sites
   * @member {Boolean} skip_conversion_pixels
   */
  exports.prototype.skip_conversion_pixels = undefined;

  /**
   * Skip fraud filter
   * @member {Boolean} skip_fraud_filter
   */
  exports.prototype.skip_fraud_filter = undefined;


  /**
   * Allowed values for the <code>payment_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentActionEnum = {
    /**
     * value: "skip payment"
     * @const
     */
    skip_payment: "skip payment",

    /**
     * value: "skip pmt rej"
     * @const
     */
    skip_pmt_rej: "skip pmt rej",

    /**
     * value: "skip pmt co"
     * @const
     */
    skip_pmt_co: "skip pmt co",

    /**
     * value: "hold in ar"
     * @const
     */
    hold_in_ar: "hold in ar"
  };

  return exports;

}));
