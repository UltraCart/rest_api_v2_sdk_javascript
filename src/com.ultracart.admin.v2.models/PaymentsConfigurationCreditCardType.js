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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationCreditCardType = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationCreditCardType model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>PaymentsConfigurationCreditCardType</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationCreditCardType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType} The populated <code>PaymentsConfigurationCreditCardType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('card_type_icon'))
        obj.card_type_icon = ApiClient.convertToType(data['card_type_icon'], 'String');
      if (data.hasOwnProperty('credit_card'))
        obj.credit_card = ApiClient.convertToType(data['credit_card'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('processing_fee'))
        obj.processing_fee = ApiClient.convertToType(data['processing_fee'], 'Number');
      if (data.hasOwnProperty('processing_percentage'))
        obj.processing_percentage = ApiClient.convertToType(data['processing_percentage'], 'Number');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('surcharge_accounting_code'))
        obj.surcharge_accounting_code = ApiClient.convertToType(data['surcharge_accounting_code'], 'String');
      if (data.hasOwnProperty('transaction_fee'))
        obj.transaction_fee = ApiClient.convertToType(data['transaction_fee'], 'Number');
      if (data.hasOwnProperty('transaction_percentage'))
        obj.transaction_percentage = ApiClient.convertToType(data['transaction_percentage'], 'Number');
    }
    return obj;
  }

  /**
   * Optional field used for Quickbooks integrations to match this credit card with the corresponding payment type in Quickbooks
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Internally used icon information for this card type
   * @member {String} card_type_icon
   */
  exports.prototype.card_type_icon = undefined;

  /**
   * Credit card type
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationCreditCardType.CreditCardEnum} credit_card
   */
  exports.prototype.credit_card = undefined;

  /**
   * The name of the account to deposit funds
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * If true, this card type will be accepted during checkout
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * Optional additional fee applied to order for this card
   * @member {Number} processing_fee
   */
  exports.prototype.processing_fee = undefined;

  /**
   * Optional additional fee applied to order for this card
   * @member {Number} processing_percentage
   */
  exports.prototype.processing_percentage = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * Optional field. If integrated with Quickbooks, this code will be used when informing Quickbooks about any surcharges applied to orders
   * @member {String} surcharge_accounting_code
   */
  exports.prototype.surcharge_accounting_code = undefined;

  /**
   * An optional additional fee to charge the customer for using this card.
   * @member {Number} transaction_fee
   */
  exports.prototype.transaction_fee = undefined;

  /**
   * An optional transaction percentage to charge the customer for using this card
   * @member {Number} transaction_percentage
   */
  exports.prototype.transaction_percentage = undefined;


  /**
   * Allowed values for the <code>credit_card</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CreditCardEnum = {
    /**
     * value: "AMEX"
     * @const
     */
    AMEX: "AMEX",

    /**
     * value: "Diners Club"
     * @const
     */
    Diners_Club: "Diners Club",

    /**
     * value: "Discover"
     * @const
     */
    Discover: "Discover",

    /**
     * value: "MasterCard"
     * @const
     */
    MasterCard: "MasterCard",

    /**
     * value: "JCB"
     * @const
     */
    JCB: "JCB",

    /**
     * value: "VISA"
     * @const
     */
    VISA: "VISA"
  };

  return exports;

}));
