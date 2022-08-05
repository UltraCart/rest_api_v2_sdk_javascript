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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartItemMultimediaThumbnail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartItemMultimediaThumbnail'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartItemMultimedia = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartItemMultimediaThumbnail);
  }
}(this, function(ApiClient, CartItemMultimediaThumbnail) {
  'use strict';

  /**
   * The CartItemMultimedia model module.
   * @module com.ultracart.admin.v2.models/CartItemMultimedia
   * @version 3.10.34
   */

  /**
   * Constructs a new <code>CartItemMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/CartItemMultimedia
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartItemMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartItemMultimedia} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartItemMultimedia} The populated <code>CartItemMultimedia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('exclude_from_gallery'))
        obj.exclude_from_gallery = ApiClient.convertToType(data['exclude_from_gallery'], 'Boolean');
      if (data.hasOwnProperty('image_height'))
        obj.image_height = ApiClient.convertToType(data['image_height'], 'Number');
      if (data.hasOwnProperty('image_width'))
        obj.image_width = ApiClient.convertToType(data['image_width'], 'Number');
      if (data.hasOwnProperty('is_default'))
        obj.is_default = ApiClient.convertToType(data['is_default'], 'Boolean');
      if (data.hasOwnProperty('thumbnails'))
        obj.thumbnails = ApiClient.convertToType(data['thumbnails'], [CartItemMultimediaThumbnail]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * Code assigned to the multimedia
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * True if the image should be excluded from galleries
   * @member {Boolean} exclude_from_gallery
   */
  exports.prototype.exclude_from_gallery = undefined;

  /**
   * Image height
   * @member {Number} image_height
   */
  exports.prototype.image_height = undefined;

  /**
   * Image width
   * @member {Number} image_width
   */
  exports.prototype.image_width = undefined;

  /**
   * True if the multimedia is the default for this type
   * @member {Boolean} is_default
   */
  exports.prototype.is_default = undefined;

  /**
   * Thumbnails of the images
   * @member {Array.<module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail>} thumbnails
   */
  exports.prototype.thumbnails = undefined;

  /**
   * Type of multimedia
   * @member {module:com.ultracart.admin.v2.models/CartItemMultimedia.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * URL to view multimedia at
   * @member {String} url
   */
  exports.prototype.url = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Video"
     * @const
     */
    Video: "Video"
  };

  return exports;

}));
