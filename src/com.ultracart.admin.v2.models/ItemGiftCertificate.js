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
    root.UltraCartRestApiV2.ItemGiftCertificate = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemGiftCertificate model module.
   * @module com.ultracart.admin.v2.models/ItemGiftCertificate
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ItemGiftCertificate</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemGiftCertificate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemGiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemGiftCertificate} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemGiftCertificate} The populated <code>ItemGiftCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gift_certificate'))
        obj.gift_certificate = ApiClient.convertToType(data['gift_certificate'], 'Boolean');
      if (data.hasOwnProperty('gift_certificate_expiration_days'))
        obj.gift_certificate_expiration_days = ApiClient.convertToType(data['gift_certificate_expiration_days'], 'Number');
    }
    return obj;
  }

  /**
   * True if the purchase of this item generates a gift certificate
   * @member {Boolean} gift_certificate
   */
  exports.prototype.gift_certificate = undefined;

  /**
   * The number of days that the gift certificate is good for (optional)
   * @member {Number} gift_certificate_expiration_days
   */
  exports.prototype.gift_certificate_expiration_days = undefined;

  return exports;

}));
