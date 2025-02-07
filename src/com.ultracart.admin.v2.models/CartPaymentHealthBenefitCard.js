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
    root.UltraCartRestApiV2.CartPaymentHealthBenefitCard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartPaymentHealthBenefitCard model module.
   * @module com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>CartPaymentHealthBenefitCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartPaymentHealthBenefitCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartPaymentHealthBenefitCard} The populated <code>CartPaymentHealthBenefitCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('health_benefit_card_expiration_month'))
        obj.health_benefit_card_expiration_month = ApiClient.convertToType(data['health_benefit_card_expiration_month'], 'Number');
      if (data.hasOwnProperty('health_benefit_card_expiration_year'))
        obj.health_benefit_card_expiration_year = ApiClient.convertToType(data['health_benefit_card_expiration_year'], 'Number');
      if (data.hasOwnProperty('health_benefit_card_number'))
        obj.health_benefit_card_number = ApiClient.convertToType(data['health_benefit_card_number'], 'String');
      if (data.hasOwnProperty('health_benefit_card_number_token'))
        obj.health_benefit_card_number_token = ApiClient.convertToType(data['health_benefit_card_number_token'], 'String');
      if (data.hasOwnProperty('health_benefit_card_verification_number'))
        obj.health_benefit_card_verification_number = ApiClient.convertToType(data['health_benefit_card_verification_number'], 'String');
      if (data.hasOwnProperty('health_benefit_card_verification_number_token'))
        obj.health_benefit_card_verification_number_token = ApiClient.convertToType(data['health_benefit_card_verification_number_token'], 'String');
    }
    return obj;
  }

  /**
   * Health benefit expiration month (1-12)
   * @member {Number} health_benefit_card_expiration_month
   */
  exports.prototype.health_benefit_card_expiration_month = undefined;

  /**
   * Health benefit card expiration year (four digit year)
   * @member {Number} health_benefit_card_expiration_year
   */
  exports.prototype.health_benefit_card_expiration_year = undefined;

  /**
   * Health benefit card number (masked to the last 4)
   * @member {String} health_benefit_card_number
   */
  exports.prototype.health_benefit_card_number = undefined;

  /**
   * Hosted field token for the card number
   * @member {String} health_benefit_card_number_token
   */
  exports.prototype.health_benefit_card_number_token = undefined;

  /**
   * Health benefit card verification number (masked)
   * @member {String} health_benefit_card_verification_number
   */
  exports.prototype.health_benefit_card_verification_number = undefined;

  /**
   * Hosted field token for the health benefit card verification number
   * @member {String} health_benefit_card_verification_number_token
   */
  exports.prototype.health_benefit_card_verification_number_token = undefined;

  return exports;

}));
