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
    root.UltraCartRestApiV2.CartSettingsPaymentPayPal = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartSettingsPaymentPayPal model module.
   * @module com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
   * @version 2.4.105
   */

  /**
   * Constructs a new <code>CartSettingsPaymentPayPal</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CartSettingsPaymentPayPal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentPayPal} The populated <code>CartSettingsPaymentPayPal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paypal_button_alt_text')) {
        obj['paypal_button_alt_text'] = ApiClient.convertToType(data['paypal_button_alt_text'], 'String');
      }
      if (data.hasOwnProperty('paypal_button_url')) {
        obj['paypal_button_url'] = ApiClient.convertToType(data['paypal_button_url'], 'String');
      }
      if (data.hasOwnProperty('paypal_credit_button_url')) {
        obj['paypal_credit_button_url'] = ApiClient.convertToType(data['paypal_credit_button_url'], 'String');
      }
      if (data.hasOwnProperty('paypal_credit_legal_image_url')) {
        obj['paypal_credit_legal_image_url'] = ApiClient.convertToType(data['paypal_credit_legal_image_url'], 'String');
      }
      if (data.hasOwnProperty('paypal_credit_legal_url')) {
        obj['paypal_credit_legal_url'] = ApiClient.convertToType(data['paypal_credit_legal_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * PayPal button alt text
   * @member {String} paypal_button_alt_text
   */
  exports.prototype['paypal_button_alt_text'] = undefined;
  /**
   * PayPal button URL
   * @member {String} paypal_button_url
   */
  exports.prototype['paypal_button_url'] = undefined;
  /**
   * PayPal Credit button URL
   * @member {String} paypal_credit_button_url
   */
  exports.prototype['paypal_credit_button_url'] = undefined;
  /**
   * PayPal Credit legal image URL
   * @member {String} paypal_credit_legal_image_url
   */
  exports.prototype['paypal_credit_legal_image_url'] = undefined;
  /**
   * PayPal Credit legal URL
   * @member {String} paypal_credit_legal_url
   */
  exports.prototype['paypal_credit_legal_url'] = undefined;



  return exports;
}));


