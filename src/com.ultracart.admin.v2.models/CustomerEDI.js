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
    root.UltraCartRestApiV2.CustomerEDI = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerEDI model module.
   * @module com.ultracart.admin.v2.models/CustomerEDI
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>CustomerEDI</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerEDI
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerEDI</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerEDI} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerEDI} The populated <code>CustomerEDI</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('channel_partner_oid'))
        obj.channel_partner_oid = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      if (data.hasOwnProperty('distribution_center_number'))
        obj.distribution_center_number = ApiClient.convertToType(data['distribution_center_number'], 'String');
      if (data.hasOwnProperty('store_number'))
        obj.store_number = ApiClient.convertToType(data['store_number'], 'String');
    }
    return obj;
  }

  /**
   * EDI channel partner this customer profile is associated with
   * @member {Number} channel_partner_oid
   */
  exports.prototype.channel_partner_oid = undefined;

  /**
   * The EDI distribution center number associated with this customer profile.
   * @member {String} distribution_center_number
   */
  exports.prototype.distribution_center_number = undefined;

  /**
   * The EDI store number associated with this customer profile.
   * @member {String} store_number
   */
  exports.prototype.store_number = undefined;

  return exports;

}));
