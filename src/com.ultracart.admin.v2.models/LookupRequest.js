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
    root.UltraCartRestApiV2.LookupRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LookupRequest model module.
   * @module com.ultracart.admin.v2.models/LookupRequest
   * @version 3.10.149
   */

  /**
   * Constructs a new <code>LookupRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/LookupRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LookupRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LookupRequest} The populated <code>LookupRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('matches'))
        obj.matches = ApiClient.convertToType(data['matches'], 'String');
      if (data.hasOwnProperty('max_hits'))
        obj.max_hits = ApiClient.convertToType(data['max_hits'], 'Number');
      if (data.hasOwnProperty('storefront_host_name'))
        obj.storefront_host_name = ApiClient.convertToType(data['storefront_host_name'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('subcategory'))
        obj.subcategory = ApiClient.convertToType(data['subcategory'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {String} matches
   */
  exports.prototype.matches = undefined;

  /**
   * @member {Number} max_hits
   */
  exports.prototype.max_hits = undefined;

  /**
   * @member {String} storefront_host_name
   */
  exports.prototype.storefront_host_name = undefined;

  /**
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * @member {String} subcategory
   */
  exports.prototype.subcategory = undefined;

  return exports;

}));
