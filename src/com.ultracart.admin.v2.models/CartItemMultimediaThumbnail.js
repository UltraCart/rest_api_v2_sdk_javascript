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
    root.UltraCartRestApiV2.CartItemMultimediaThumbnail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartItemMultimediaThumbnail model module.
   * @module com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
   * @version 3.10.105
   */

  /**
   * Constructs a new <code>CartItemMultimediaThumbnail</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartItemMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} The populated <code>CartItemMultimediaThumbnail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('png'))
        obj.png = ApiClient.convertToType(data['png'], 'Boolean');
      if (data.hasOwnProperty('square'))
        obj.square = ApiClient.convertToType(data['square'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * Height in pixels
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * True if thumbnail is a PNG, otherwise its a JPEG
   * @member {Boolean} png
   */
  exports.prototype.png = undefined;

  /**
   * True if the thumbnail is square
   * @member {Boolean} square
   */
  exports.prototype.square = undefined;

  /**
   * URL for the thumbnail
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Width in pixels
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
