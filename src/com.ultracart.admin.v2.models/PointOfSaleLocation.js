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
    root.UltraCartRestApiV2.PointOfSaleLocation = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PointOfSaleLocation model module.
   * @module com.ultracart.admin.v2.models/PointOfSaleLocation
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>PointOfSaleLocation</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PointOfSaleLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PointOfSaleLocation} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PointOfSaleLocation} The populated <code>PointOfSaleLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('adddress2'))
        obj.adddress2 = ApiClient.convertToType(data['adddress2'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('distribution_center_code'))
        obj.distribution_center_code = ApiClient.convertToType(data['distribution_center_code'], 'String');
      if (data.hasOwnProperty('external_id'))
        obj.external_id = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('pos_location_oid'))
        obj.pos_location_oid = ApiClient.convertToType(data['pos_location_oid'], 'Number');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state_province'))
        obj.state_province = ApiClient.convertToType(data['state_province'], 'String');
    }
    return obj;
  }

  /**
   * Address line 2
   * @member {String} adddress2
   */
  exports.prototype.adddress2 = undefined;

  /**
   * Address line 1
   * @member {String} address1
   */
  exports.prototype.address1 = undefined;

  /**
   * City
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * Country
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * The distribution center code where inventory is reduced from for this sale.
   * @member {String} distribution_center_code
   */
  exports.prototype.distribution_center_code = undefined;

  /**
   * External Id useful for syncing with a remote filesystem, this may be an MD5 hash or whatever suits your needs.
   * @member {String} external_id
   */
  exports.prototype.external_id = undefined;

  /**
   * Merchant ID that owns this location
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Object identifier of the point of sale location.
   * @member {Number} pos_location_oid
   */
  exports.prototype.pos_location_oid = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * State/province
   * @member {String} state_province
   */
  exports.prototype.state_province = undefined;

  return exports;

}));
