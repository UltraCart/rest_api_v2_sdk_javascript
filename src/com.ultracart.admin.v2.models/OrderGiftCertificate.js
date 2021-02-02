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
    root.UltraCartRestApiV2.OrderGiftCertificate = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';

  /**
   * The OrderGiftCertificate model module.
   * @module com.ultracart.admin.v2.models/OrderGiftCertificate
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>OrderGiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderGiftCertificate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderGiftCertificate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderGiftCertificate} The populated <code>OrderGiftCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gift_certificate_amount'))
        obj.gift_certificate_amount = Currency.constructFromObject(data['gift_certificate_amount']);
      if (data.hasOwnProperty('gift_certificate_code'))
        obj.gift_certificate_code = ApiClient.convertToType(data['gift_certificate_code'], 'String');
      if (data.hasOwnProperty('gift_certificate_oid'))
        obj.gift_certificate_oid = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} gift_certificate_amount
   */
  exports.prototype.gift_certificate_amount = undefined;

  /**
   * Gift certificate code used on the order
   * @member {String} gift_certificate_code
   */
  exports.prototype.gift_certificate_code = undefined;

  /**
   * Gift certificate object identifier
   * @member {Number} gift_certificate_oid
   */
  exports.prototype.gift_certificate_oid = undefined;

  return exports;

}));
