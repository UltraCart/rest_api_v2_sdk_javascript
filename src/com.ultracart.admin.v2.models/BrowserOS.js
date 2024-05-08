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
    root.UltraCartRestApiV2.BrowserOS = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BrowserOS model module.
   * @module com.ultracart.admin.v2.models/BrowserOS
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>BrowserOS</code>.
   * @alias module:com.ultracart.admin.v2.models/BrowserOS
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BrowserOS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/BrowserOS} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/BrowserOS} The populated <code>BrowserOS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('family'))
        obj.family = ApiClient.convertToType(data['family'], 'String');
      if (data.hasOwnProperty('major'))
        obj.major = ApiClient.convertToType(data['major'], 'String');
      if (data.hasOwnProperty('minor'))
        obj.minor = ApiClient.convertToType(data['minor'], 'String');
      if (data.hasOwnProperty('patch'))
        obj.patch = ApiClient.convertToType(data['patch'], 'String');
      if (data.hasOwnProperty('patch_minor'))
        obj.patch_minor = ApiClient.convertToType(data['patch_minor'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} family
   */
  exports.prototype.family = undefined;

  /**
   * @member {String} major
   */
  exports.prototype.major = undefined;

  /**
   * @member {String} minor
   */
  exports.prototype.minor = undefined;

  /**
   * @member {String} patch
   */
  exports.prototype.patch = undefined;

  /**
   * @member {String} patch_minor
   */
  exports.prototype.patch_minor = undefined;

  return exports;

}));
