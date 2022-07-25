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
    root.UltraCartRestApiV2.AdjustInternalCertificateRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdjustInternalCertificateRequest model module.
   * @module com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
   * @version 3.10.24
   */

  /**
   * Constructs a new <code>AdjustInternalCertificateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AdjustInternalCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} The populated <code>AdjustInternalCertificateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adjustment_amount'))
        obj.adjustment_amount = ApiClient.convertToType(data['adjustment_amount'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('entry_dts'))
        obj.entry_dts = ApiClient.convertToType(data['entry_dts'], 'String');
      if (data.hasOwnProperty('expiration_days'))
        obj.expiration_days = ApiClient.convertToType(data['expiration_days'], 'Number');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('vesting_days'))
        obj.vesting_days = ApiClient.convertToType(data['vesting_days'], 'Number');
    }
    return obj;
  }

  /**
   * The adjustment amount
   * @member {Number} adjustment_amount
   */
  exports.prototype.adjustment_amount = undefined;

  /**
   * Description of this adjustment, 50 characters max
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Optional timestamp for the adjustment, defaults to current time
   * @member {String} entry_dts
   */
  exports.prototype.entry_dts = undefined;

  /**
   * Optional expiration days from the entry_dts when these adjustment becomes worthless
   * @member {Number} expiration_days
   */
  exports.prototype.expiration_days = undefined;

  /**
   * Optional order id if this adjustment is related to a particular order
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * Optional days required for this adjustment to vest
   * @member {Number} vesting_days
   */
  exports.prototype.vesting_days = undefined;

  return exports;

}));
