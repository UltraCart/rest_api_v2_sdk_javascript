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
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderPaymentCreditCard = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderPaymentCreditCard model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderPaymentCreditCard
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>OrderPaymentCreditCard</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderPaymentCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>OrderPaymentCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderPaymentCreditCard} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderPaymentCreditCard} The populated <code>OrderPaymentCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card_auth_ticket')) {
        obj['card_auth_ticket'] = ApiClient.convertToType(data['card_auth_ticket'], 'String');
      }
      if (data.hasOwnProperty('card_authorization_amount')) {
        obj['card_authorization_amount'] = ApiClient.convertToType(data['card_authorization_amount'], 'Number');
      }
      if (data.hasOwnProperty('card_authorization_dts')) {
        obj['card_authorization_dts'] = ApiClient.convertToType(data['card_authorization_dts'], 'String');
      }
      if (data.hasOwnProperty('card_authorization_reference_number')) {
        obj['card_authorization_reference_number'] = ApiClient.convertToType(data['card_authorization_reference_number'], 'String');
      }
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
      if (data.hasOwnProperty('card_number_truncated')) {
        obj['card_number_truncated'] = ApiClient.convertToType(data['card_number_truncated'], 'Boolean');
      }
      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Card authorization ticket
   * @member {String} card_auth_ticket
   */
  exports.prototype['card_auth_ticket'] = undefined;
  /**
   * Card authorization amount
   * @member {Number} card_authorization_amount
   */
  exports.prototype['card_authorization_amount'] = undefined;
  /**
   * Card authorization date/time
   * @member {String} card_authorization_dts
   */
  exports.prototype['card_authorization_dts'] = undefined;
  /**
   * Card authorization reference number
   * @member {String} card_authorization_reference_number
   */
  exports.prototype['card_authorization_reference_number'] = undefined;
  /**
   * Card expiration month (1-12)
   * @member {Number} card_expiration_month
   */
  exports.prototype['card_expiration_month'] = undefined;
  /**
   * Card expiration year (Four digit year)
   * @member {Number} card_expiration_year
   */
  exports.prototype['card_expiration_year'] = undefined;
  /**
   * Card number (masked to last 4)
   * @member {String} card_number
   */
  exports.prototype['card_number'] = undefined;
  /**
   * Card number token from hosted fields used to update the cart number
   * @member {String} card_number_token
   */
  exports.prototype['card_number_token'] = undefined;
  /**
   * True if the card has been truncated
   * @member {Boolean} card_number_truncated
   */
  exports.prototype['card_number_truncated'] = undefined;
  /**
   * Card type
   * @member {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/OrderPaymentCreditCard.CardTypeEnum} card_type
   */
  exports.prototype['card_type'] = undefined;


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
    "AMEX": "AMEX",
    /**
     * value: "Diners Club"
     * @const
     */
    "Diners Club": "Diners Club",
    /**
     * value: "Discover"
     * @const
     */
    "Discover": "Discover",
    /**
     * value: "JCB"
     * @const
     */
    "JCB": "JCB",
    /**
     * value: "MasterCard"
     * @const
     */
    "MasterCard": "MasterCard",
    /**
     * value: "VISA"
     * @const
     */
    "VISA": "VISA"  };


  return exports;
}));


