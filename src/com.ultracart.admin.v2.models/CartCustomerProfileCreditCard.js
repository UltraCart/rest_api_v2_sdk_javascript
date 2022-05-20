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
    root.UltraCartRestApiV2.CartCustomerProfileCreditCard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartCustomerProfileCreditCard model module.
   * @module com.ultracart.admin.v2.models/CartCustomerProfileCreditCard
   * @version 3.10.3
   */

  /**
   * Constructs a new <code>CartCustomerProfileCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartCustomerProfileCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard} The populated <code>CartCustomerProfileCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('card_expiration_month'))
        obj.card_expiration_month = ApiClient.convertToType(data['card_expiration_month'], 'Number');
      if (data.hasOwnProperty('card_expiration_year'))
        obj.card_expiration_year = ApiClient.convertToType(data['card_expiration_year'], 'Number');
      if (data.hasOwnProperty('card_number'))
        obj.card_number = ApiClient.convertToType(data['card_number'], 'String');
      if (data.hasOwnProperty('card_type'))
        obj.card_type = ApiClient.convertToType(data['card_type'], 'String');
      if (data.hasOwnProperty('customer_profile_credit_card_id'))
        obj.customer_profile_credit_card_id = ApiClient.convertToType(data['customer_profile_credit_card_id'], 'Number');
      if (data.hasOwnProperty('last_used_date'))
        obj.last_used_date = ApiClient.convertToType(data['last_used_date'], 'String');
    }
    return obj;
  }

  /**
   * Card expiration month (1-12)
   * @member {Number} card_expiration_month
   */
  exports.prototype.card_expiration_month = undefined;

  /**
   * Card expiration year (four digit)
   * @member {Number} card_expiration_year
   */
  exports.prototype.card_expiration_year = undefined;

  /**
   * Card number (masked last 4 digits)
   * @member {String} card_number
   */
  exports.prototype.card_number = undefined;

  /**
   * Card type
   * @member {module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard.CardTypeEnum} card_type
   */
  exports.prototype.card_type = undefined;

  /**
   * Unique identifier for this stored card
   * @member {Number} customer_profile_credit_card_id
   */
  exports.prototype.customer_profile_credit_card_id = undefined;

  /**
   * Last used
   * @member {String} last_used_date
   */
  exports.prototype.last_used_date = undefined;


  /**
   * Allowed values for the <code>card_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CardTypeEnum = {
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
