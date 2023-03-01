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
    root.UltraCartRestApiV2.AffiliateClickQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AffiliateClickQuery model module.
   * @module com.ultracart.admin.v2.models/AffiliateClickQuery
   * @version 3.10.121
   */

  /**
   * Constructs a new <code>AffiliateClickQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/AffiliateClickQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AffiliateClickQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AffiliateClickQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AffiliateClickQuery} The populated <code>AffiliateClickQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_link_oid'))
        obj.affiliate_link_oid = ApiClient.convertToType(data['affiliate_link_oid'], 'Number');
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('click_dts_begin'))
        obj.click_dts_begin = ApiClient.convertToType(data['click_dts_begin'], 'String');
      if (data.hasOwnProperty('click_dts_end'))
        obj.click_dts_end = ApiClient.convertToType(data['click_dts_end'], 'String');
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('sub_id'))
        obj.sub_id = ApiClient.convertToType(data['sub_id'], 'String');
    }
    return obj;
  }

  /**
   * Unique object identifier for for the link that this click is associated with
   * @member {Number} affiliate_link_oid
   */
  exports.prototype.affiliate_link_oid = undefined;

  /**
   * Affiliate ID associated with the click
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * Minimum click date/time to return
   * @member {String} click_dts_begin
   */
  exports.prototype.click_dts_begin = undefined;

  /**
   * Maximum click date/time to return
   * @member {String} click_dts_end
   */
  exports.prototype.click_dts_end = undefined;

  /**
   * IP address that generated the click
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * Sub ID value passed on the click
   * @member {String} sub_id
   */
  exports.prototype.sub_id = undefined;

  return exports;

}));
