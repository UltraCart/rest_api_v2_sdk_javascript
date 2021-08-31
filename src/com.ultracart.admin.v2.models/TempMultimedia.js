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
    root.UltraCartRestApiV2.TempMultimedia = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TempMultimedia model module.
   * @module com.ultracart.admin.v2.models/TempMultimedia
   * @version 3.6.8
   */

  /**
   * Constructs a new <code>TempMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/TempMultimedia
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TempMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TempMultimedia} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TempMultimedia} The populated <code>TempMultimedia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('multimedia_type'))
        obj.multimedia_type = ApiClient.convertToType(data['multimedia_type'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('temp_multimedia_oid'))
        obj.temp_multimedia_oid = ApiClient.convertToType(data['temp_multimedia_oid'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * Filename
   * @member {String} filename
   */
  exports.prototype.filename = undefined;

  /**
   * Height
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * Multimedia type
   * @member {module:com.ultracart.admin.v2.models/TempMultimedia.MultimediaTypeEnum} multimedia_type
   */
  exports.prototype.multimedia_type = undefined;

  /**
   * Size
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * Temporary multimedia object identifier
   * @member {Number} temp_multimedia_oid
   */
  exports.prototype.temp_multimedia_oid = undefined;

  /**
   * URL
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Width
   * @member {Number} width
   */
  exports.prototype.width = undefined;


  /**
   * Allowed values for the <code>multimedia_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MultimediaTypeEnum = {
    /**
     * value: "Image"
     * @const
     */
    Image: "Image",

    /**
     * value: "PDF"
     * @const
     */
    PDF: "PDF",

    /**
     * value: "Text"
     * @const
     */
    Text: "Text",

    /**
     * value: "Video"
     * @const
     */
    Video: "Video"
  };

  return exports;

}));
