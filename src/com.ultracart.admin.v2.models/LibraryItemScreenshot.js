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
    root.UltraCartRestApiV2.LibraryItemScreenshot = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LibraryItemScreenshot model module.
   * @module com.ultracart.admin.v2.models/LibraryItemScreenshot
   * @version 3.10.99
   */

  /**
   * Constructs a new <code>LibraryItemScreenshot</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemScreenshot
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LibraryItemScreenshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/LibraryItemScreenshot} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/LibraryItemScreenshot} The populated <code>LibraryItemScreenshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_url'))
        obj.default_url = ApiClient.convertToType(data['default_url'], 'Boolean');
      if (data.hasOwnProperty('screenshot_url'))
        obj.screenshot_url = ApiClient.convertToType(data['screenshot_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} default_url
   */
  exports.prototype.default_url = undefined;

  /**
   * @member {String} screenshot_url
   */
  exports.prototype.screenshot_url = undefined;

  return exports;

}));
