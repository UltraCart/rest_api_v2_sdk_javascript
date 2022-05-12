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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType', 'com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationCreditCardType'), require('./PaymentsConfigurationTestMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationCreditCard = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationCreditCardType, root.UltraCartRestApiV2.PaymentsConfigurationTestMethod);
  }
}(this, function(ApiClient, PaymentsConfigurationCreditCardType, PaymentsConfigurationTestMethod) {
  'use strict';

  /**
   * The PaymentsConfigurationCreditCard model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard
   * @version 3.10.1
   */

  /**
   * Constructs a new <code>PaymentsConfigurationCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCard} The populated <code>PaymentsConfigurationCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_credit_card'))
        obj.accept_credit_card = ApiClient.convertToType(data['accept_credit_card'], 'Boolean');
      if (data.hasOwnProperty('billed_by'))
        obj.billed_by = ApiClient.convertToType(data['billed_by'], 'String');
      if (data.hasOwnProperty('charge_during_checkout'))
        obj.charge_during_checkout = ApiClient.convertToType(data['charge_during_checkout'], 'Boolean');
      if (data.hasOwnProperty('collect_cvv2'))
        obj.collect_cvv2 = ApiClient.convertToType(data['collect_cvv2'], 'Boolean');
      if (data.hasOwnProperty('configured_gateway_details'))
        obj.configured_gateway_details = ApiClient.convertToType(data['configured_gateway_details'], 'String');
      if (data.hasOwnProperty('failed_attempts'))
        obj.failed_attempts = ApiClient.convertToType(data['failed_attempts'], 'Number');
      if (data.hasOwnProperty('hide_connect_single_gateway'))
        obj.hide_connect_single_gateway = ApiClient.convertToType(data['hide_connect_single_gateway'], 'Boolean');
      if (data.hasOwnProperty('send_customer_billing_update_on_decline'))
        obj.send_customer_billing_update_on_decline = ApiClient.convertToType(data['send_customer_billing_update_on_decline'], 'Boolean');
      if (data.hasOwnProperty('supported_cards'))
        obj.supported_cards = ApiClient.convertToType(data['supported_cards'], [PaymentsConfigurationCreditCardType]);
      if (data.hasOwnProperty('test_methods'))
        obj.test_methods = ApiClient.convertToType(data['test_methods'], [PaymentsConfigurationTestMethod]);
    }
    return obj;
  }

  /**
   * Master flag indicating whether this merchant accepts credit card payments
   * @member {Boolean} accept_credit_card
   */
  exports.prototype.accept_credit_card = undefined;

  /**
   * Description that appears on customer statements
   * @member {String} billed_by
   */
  exports.prototype.billed_by = undefined;

  /**
   * If false, order will be accepted and placed into Accounts Receivable without charging card first
   * @member {Boolean} charge_during_checkout
   */
  exports.prototype.charge_during_checkout = undefined;

  /**
   * UltraCart will require customer to enter cvv if this is true
   * @member {Boolean} collect_cvv2
   */
  exports.prototype.collect_cvv2 = undefined;

  /**
   * Human readable description of the credit card gateway currently configured
   * @member {String} configured_gateway_details
   */
  exports.prototype.configured_gateway_details = undefined;

  /**
   * The number of failed attempts before the order is placed into Accounts Receivable for manual intervention
   * @member {Number} failed_attempts
   */
  exports.prototype.failed_attempts = undefined;

  /**
   * This internal flag aids the UI in determining which buttons to show.
   * @member {Boolean} hide_connect_single_gateway
   */
  exports.prototype.hide_connect_single_gateway = undefined;

  /**
   * UltraCart will send customers emails to update their credit card if the card is declined
   * @member {Boolean} send_customer_billing_update_on_decline
   */
  exports.prototype.send_customer_billing_update_on_decline = undefined;

  /**
   * A list of credit cards the merchant wishes to accept.
   * @member {Array.<module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType>} supported_cards
   */
  exports.prototype.supported_cards = undefined;

  /**
   * An array of test methods for placing test orders.  The cards defined here may be real or fake, but any order placed with them will be marked as Test orders
   * @member {Array.<module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod>} test_methods
   */
  exports.prototype.test_methods = undefined;

  return exports;

}));
