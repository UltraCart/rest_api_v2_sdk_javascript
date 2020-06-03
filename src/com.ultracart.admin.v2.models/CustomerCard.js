/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.CustomerCard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerCard model module.
   * @module com.ultracart.admin.v2.models/CustomerCard
   * @version 2.4.111
   */

  /**
   * Constructs a new <code>CustomerCard</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerCard
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CustomerCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerCard} The populated <code>CustomerCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card_expiration_month')) {
        obj['card_expiration_month'] = ApiClient.convertToType(data['card_expiration_month'], 'Number');
      }
      if (data.hasOwnProperty('card_expiration_year')) {
        obj['card_expiration_year'] = ApiClient.convertToType(data['card_expiration_year'], 'Number');
      }
      if (data.hasOwnProperty('card_number')) {
        obj['card_number'] = ApiClient.convertToType(data['card_number'], 'String');
      }
      if (data.hasOwnProperty('card_number_token')) {
        obj['card_number_token'] = ApiClient.convertToType(data['card_number_token'], 'String');
      }
      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }
      if (data.hasOwnProperty('customer_profile_credit_card_id')) {
        obj['customer_profile_credit_card_id'] = ApiClient.convertToType(data['customer_profile_credit_card_id'], 'Number');
      }
      if (data.hasOwnProperty('customer_profile_oid')) {
        obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      }
      if (data.hasOwnProperty('last_used_dts')) {
        obj['last_used_dts'] = ApiClient.convertToType(data['last_used_dts'], 'String');
      }
    }
    return obj;
  }

  /**
   * Card expiration month (1-12)
   * @member {Number} card_expiration_month
   */
  exports.prototype['card_expiration_month'] = undefined;
  /**
   * Card expiration year (four digit year)
   * @member {Number} card_expiration_year
   */
  exports.prototype['card_expiration_year'] = undefined;
  /**
   * Card number (masked to the last 4)
   * @member {String} card_number
   */
  exports.prototype['card_number'] = undefined;
  /**
   * Hosted field token for the card number
   * @member {String} card_number_token
   */
  exports.prototype['card_number_token'] = undefined;
  /**
   * Card type
   * @member {String} card_type
   */
  exports.prototype['card_type'] = undefined;
  /**
   * ID of the stored credit card to use
   * @member {Number} customer_profile_credit_card_id
   */
  exports.prototype['customer_profile_credit_card_id'] = undefined;
  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype['customer_profile_oid'] = undefined;
  /**
   * Last used date
   * @member {String} last_used_dts
   */
  exports.prototype['last_used_dts'] = undefined;



  return exports;
}));


