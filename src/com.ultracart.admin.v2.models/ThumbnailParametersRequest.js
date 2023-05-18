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
    root.UltraCartRestApiV2.ThumbnailParametersRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThumbnailParametersRequest model module.
   * @module com.ultracart.admin.v2.models/ThumbnailParametersRequest
   * @version 3.10.138
   */

  /**
   * Constructs a new <code>ThumbnailParametersRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ThumbnailParametersRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThumbnailParametersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ThumbnailParametersRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ThumbnailParametersRequest} The populated <code>ThumbnailParametersRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('pngFormat'))
        obj.pngFormat = ApiClient.convertToType(data['pngFormat'], 'Boolean');
      if (data.hasOwnProperty('squareThumbnail'))
        obj.squareThumbnail = ApiClient.convertToType(data['squareThumbnail'], 'Boolean');
      if (data.hasOwnProperty('webp'))
        obj.webp = ApiClient.convertToType(data['webp'], 'Boolean');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Boolean} pngFormat
   */
  exports.prototype.pngFormat = undefined;

  /**
   * @member {Boolean} squareThumbnail
   */
  exports.prototype.squareThumbnail = undefined;

  /**
   * @member {Boolean} webp
   */
  exports.prototype.webp = undefined;

  /**
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  return exports;

}));
