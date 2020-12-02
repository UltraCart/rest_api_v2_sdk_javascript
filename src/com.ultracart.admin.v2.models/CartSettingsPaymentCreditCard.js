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
    root.UltraCartRestApiV2.CartSettingsPaymentCreditCard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartSettingsPaymentCreditCard model module.
   * @module com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
   * @version 3.0.43
   */

  /**
   * Constructs a new <code>CartSettingsPaymentCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartSettingsPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentCreditCard} The populated <code>CartSettingsPaymentCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('collect_credit_card_verification_number'))
        obj.collect_credit_card_verification_number = ApiClient.convertToType(data['collect_credit_card_verification_number'], 'Boolean');
      if (data.hasOwnProperty('credit_card_types'))
        obj.credit_card_types = ApiClient.convertToType(data['credit_card_types'], ['String']);
      if (data.hasOwnProperty('hosted_fields_shopping_cart_token'))
        obj.hosted_fields_shopping_cart_token = ApiClient.convertToType(data['hosted_fields_shopping_cart_token'], 'String');
    }
    return obj;
  }

  /**
   * True if the credit card verification number should be collected
   * @member {Boolean} collect_credit_card_verification_number
   */
  exports.prototype.collect_credit_card_verification_number = undefined;

  /**
   * Available credit card types
   * @member {Array.<String>} credit_card_types
   */
  exports.prototype.credit_card_types = undefined;

  /**
   * The shoppingCartToken needed for proper initialization of hosted fields collection
   * @member {String} hosted_fields_shopping_cart_token
   */
  exports.prototype.hosted_fields_shopping_cart_token = undefined;

  return exports;

}));
