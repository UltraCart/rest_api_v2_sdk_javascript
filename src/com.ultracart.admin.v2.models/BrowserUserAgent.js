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
    root.UltraCartRestApiV2.BrowserUserAgent = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BrowserUserAgent model module.
   * @module com.ultracart.admin.v2.models/BrowserUserAgent
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>BrowserUserAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/BrowserUserAgent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BrowserUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/BrowserUserAgent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/BrowserUserAgent} The populated <code>BrowserUserAgent</code> instance.
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

  return exports;

}));
