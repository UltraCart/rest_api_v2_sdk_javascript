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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailCommseqStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailCommseqStep'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailCommseq = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailCommseqStep);
  }
}(this, function(ApiClient, EmailCommseqStep) {
  'use strict';

  /**
   * The EmailCommseq model module.
   * @module com.ultracart.admin.v2.models/EmailCommseq
   * @version 3.10.144
   */

  /**
   * Constructs a new <code>EmailCommseq</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseq
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseq} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseq} The populated <code>EmailCommseq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_communication_sequence_steps'))
        obj.email_communication_sequence_steps = ApiClient.convertToType(data['email_communication_sequence_steps'], [EmailCommseqStep]);
      if (data.hasOwnProperty('email_communication_sequence_uuid'))
        obj.email_communication_sequence_uuid = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Array of steps
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailCommseqStep>} email_communication_sequence_steps
   */
  exports.prototype.email_communication_sequence_steps = undefined;

  /**
   * Email commseq UUID
   * @member {String} email_communication_sequence_uuid
   */
  exports.prototype.email_communication_sequence_uuid = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
