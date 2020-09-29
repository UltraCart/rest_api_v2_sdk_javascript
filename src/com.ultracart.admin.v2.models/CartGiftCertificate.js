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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartGiftCertificate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The CartGiftCertificate model module.
   * @module com.ultracart.admin.v2.models/CartGiftCertificate
   * @version 3.0.27
   */

  /**
   * Constructs a new <code>CartGiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/CartGiftCertificate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartGiftCertificate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartGiftCertificate} The populated <code>CartGiftCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gift_certificate_amount'))
        obj.gift_certificate_amount = Currency.constructFromObject(data['gift_certificate_amount']);
      if (data.hasOwnProperty('gift_certificate_code'))
        obj.gift_certificate_code = ApiClient.convertToType(data['gift_certificate_code'], 'String');
      if (data.hasOwnProperty('gift_certificate_remaining_balance_after_order'))
        obj.gift_certificate_remaining_balance_after_order = Currency.constructFromObject(data['gift_certificate_remaining_balance_after_order']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_amount
   */
  exports.prototype.gift_certificate_amount = undefined;

  /**
   * Gift certificate code
   * @member {String} gift_certificate_code
   */
  exports.prototype.gift_certificate_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_remaining_balance_after_order
   */
  exports.prototype.gift_certificate_remaining_balance_after_order = undefined;

  return exports;

}));
