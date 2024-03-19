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
    root.UltraCartRestApiV2.OrderTransactionalMerchantNote = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderTransactionalMerchantNote model module.
   * @module com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>OrderTransactionalMerchantNote</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderTransactionalMerchantNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} The populated <code>OrderTransactionalMerchantNote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('note_dts'))
        obj.note_dts = ApiClient.convertToType(data['note_dts'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
    }
    return obj;
  }

  /**
   * IP Address
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * note
   * @member {String} note
   */
  exports.prototype.note = undefined;

  /**
   * Timestamp when the note was added
   * @member {String} note_dts
   */
  exports.prototype.note_dts = undefined;

  /**
   * User that wrote the merchant note
   * @member {String} user
   */
  exports.prototype.user = undefined;

  return exports;

}));
