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
    root.UltraCartRestApiV2.RegisterAffiliateClickRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RegisterAffiliateClickRequest model module.
   * @module com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>RegisterAffiliateClickRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RegisterAffiliateClickRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickRequest} The populated <code>RegisterAffiliateClickRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affid'))
        obj.affid = ApiClient.convertToType(data['affid'], 'Number');
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('landing_page_url'))
        obj.landing_page_url = ApiClient.convertToType(data['landing_page_url'], 'String');
      if (data.hasOwnProperty('referrer_url'))
        obj.referrer_url = ApiClient.convertToType(data['referrer_url'], 'String');
      if (data.hasOwnProperty('subid'))
        obj.subid = ApiClient.convertToType(data['subid'], 'String');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ApiClient.convertToType(data['user_agent'], 'String');
    }
    return obj;
  }

  /**
   * Affiliate Id (must be specified if landing_page_url is not)
   * @member {Number} affid
   */
  exports.prototype.affid = undefined;

  /**
   * IP Address (must be specified for non-browser key authenticated)
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * Landing Page URL
   * @member {String} landing_page_url
   */
  exports.prototype.landing_page_url = undefined;

  /**
   * Referrer URL (used for detecting invisible linking)
   * @member {String} referrer_url
   */
  exports.prototype.referrer_url = undefined;

  /**
   * Sub Id (optional value if affid is specified.
   * @member {String} subid
   */
  exports.prototype.subid = undefined;

  /**
   * User agent of the browser (must be specified for non-browser key authenticated)
   * @member {String} user_agent
   */
  exports.prototype.user_agent = undefined;

  return exports;

}));
