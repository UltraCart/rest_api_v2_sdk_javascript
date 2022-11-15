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
    root.UltraCartRestApiV2.GiftCertificateQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GiftCertificateQuery model module.
   * @module com.ultracart.admin.v2.models/GiftCertificateQuery
   * @version 3.10.65
   */

  /**
   * Constructs a new <code>GiftCertificateQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/GiftCertificateQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GiftCertificateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/GiftCertificateQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/GiftCertificateQuery} The populated <code>GiftCertificateQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('expiration_dts_end'))
        obj.expiration_dts_end = ApiClient.convertToType(data['expiration_dts_end'], 'String');
      if (data.hasOwnProperty('expiration_dts_start'))
        obj.expiration_dts_start = ApiClient.convertToType(data['expiration_dts_start'], 'String');
      if (data.hasOwnProperty('original_balance_end'))
        obj.original_balance_end = ApiClient.convertToType(data['original_balance_end'], 'Number');
      if (data.hasOwnProperty('original_balance_start'))
        obj.original_balance_start = ApiClient.convertToType(data['original_balance_start'], 'Number');
      if (data.hasOwnProperty('reference_order_id'))
        obj.reference_order_id = ApiClient.convertToType(data['reference_order_id'], 'String');
      if (data.hasOwnProperty('remaining_balance_end'))
        obj.remaining_balance_end = ApiClient.convertToType(data['remaining_balance_end'], 'Number');
      if (data.hasOwnProperty('remaining_balance_start'))
        obj.remaining_balance_start = ApiClient.convertToType(data['remaining_balance_start'], 'Number');
    }
    return obj;
  }

  /**
   * Gift certificate code
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * Email address of this gift certificate
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Expiration date end
   * @member {String} expiration_dts_end
   */
  exports.prototype.expiration_dts_end = undefined;

  /**
   * Expiration date start
   * @member {String} expiration_dts_start
   */
  exports.prototype.expiration_dts_start = undefined;

  /**
   * Original balance end
   * @member {Number} original_balance_end
   */
  exports.prototype.original_balance_end = undefined;

  /**
   * Original balance start
   * @member {Number} original_balance_start
   */
  exports.prototype.original_balance_start = undefined;

  /**
   * Gift certificate reference order id
   * @member {String} reference_order_id
   */
  exports.prototype.reference_order_id = undefined;

  /**
   * Remaining balance end
   * @member {Number} remaining_balance_end
   */
  exports.prototype.remaining_balance_end = undefined;

  /**
   * Remaining balance start
   * @member {Number} remaining_balance_start
   */
  exports.prototype.remaining_balance_start = undefined;

  return exports;

}));
