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
    root.UltraCartRestApiV2.ItemContentMultimediaThumbnail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemContentMultimediaThumbnail model module.
   * @module com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
   * @version 3.2.3
   */

  /**
   * Constructs a new <code>ItemContentMultimediaThumbnail</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemContentMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail} The populated <code>ItemContentMultimediaThumbnail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('http_url'))
        obj.http_url = ApiClient.convertToType(data['http_url'], 'String');
      if (data.hasOwnProperty('https_url'))
        obj.https_url = ApiClient.convertToType(data['https_url'], 'String');
      if (data.hasOwnProperty('png_format'))
        obj.png_format = ApiClient.convertToType(data['png_format'], 'Boolean');
      if (data.hasOwnProperty('square'))
        obj.square = ApiClient.convertToType(data['square'], 'Boolean');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * Height of the thumbnail
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * HTTP URL to view the thumbnail
   * @member {String} http_url
   */
  exports.prototype.http_url = undefined;

  /**
   * HTTPS URL to view the thumbnail
   * @member {String} https_url
   */
  exports.prototype.https_url = undefined;

  /**
   * True if PNG, false if JPEG
   * @member {Boolean} png_format
   */
  exports.prototype.png_format = undefined;

  /**
   * True if the thumbnail is square
   * @member {Boolean} square
   */
  exports.prototype.square = undefined;

  /**
   * Width of the thumbnail
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
