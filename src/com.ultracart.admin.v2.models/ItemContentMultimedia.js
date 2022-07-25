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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemContentMultimediaThumbnail'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemContentMultimedia = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemContentMultimediaThumbnail);
  }
}(this, function(ApiClient, ItemContentMultimediaThumbnail) {
  'use strict';

  /**
   * The ItemContentMultimedia model module.
   * @module com.ultracart.admin.v2.models/ItemContentMultimedia
   * @version 3.10.24
   */

  /**
   * Constructs a new <code>ItemContentMultimedia</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentMultimedia
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemContentMultimedia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemContentMultimedia} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemContentMultimedia} The populated <code>ItemContentMultimedia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cloud_url'))
        obj.cloud_url = ApiClient.convertToType(data['cloud_url'], 'String');
      if (data.hasOwnProperty('cloud_url_expiration'))
        obj.cloud_url_expiration = ApiClient.convertToType(data['cloud_url_expiration'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('exclude_from_gallery'))
        obj.exclude_from_gallery = ApiClient.convertToType(data['exclude_from_gallery'], 'Boolean');
      if (data.hasOwnProperty('file_name'))
        obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('merchant_item_multimedia_oid'))
        obj.merchant_item_multimedia_oid = ApiClient.convertToType(data['merchant_item_multimedia_oid'], 'Number');
      if (data.hasOwnProperty('orphan'))
        obj.orphan = ApiClient.convertToType(data['orphan'], 'Boolean');
      if (data.hasOwnProperty('placeholder'))
        obj.placeholder = ApiClient.convertToType(data['placeholder'], 'Boolean');
      if (data.hasOwnProperty('temp_multimedia_oid'))
        obj.temp_multimedia_oid = ApiClient.convertToType(data['temp_multimedia_oid'], 'Number');
      if (data.hasOwnProperty('thumbnails'))
        obj.thumbnails = ApiClient.convertToType(data['thumbnails'], [ItemContentMultimediaThumbnail]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }

  /**
   * URL where the image can be downloaded from the cloud
   * @member {String} cloud_url
   */
  exports.prototype.cloud_url = undefined;

  /**
   * Expiration date of the cloud URL
   * @member {String} cloud_url_expiration
   */
  exports.prototype.cloud_url_expiration = undefined;

  /**
   * Code assigned to the file
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * True to exclude from multimedia gallery
   * @member {Boolean} exclude_from_gallery
   */
  exports.prototype.exclude_from_gallery = undefined;

  /**
   * File name
   * @member {String} file_name
   */
  exports.prototype.file_name = undefined;

  /**
   * Height of the image
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * Item multimedia object identifier
   * @member {Number} merchant_item_multimedia_oid
   */
  exports.prototype.merchant_item_multimedia_oid = undefined;

  /**
   * True if the multimedia is an orphan of the active StoreFront themes
   * @member {Boolean} orphan
   */
  exports.prototype.orphan = undefined;

  /**
   * True if the object is a place holder that can be populated
   * @member {Boolean} placeholder
   */
  exports.prototype.placeholder = undefined;

  /**
   * Temporary multimedia object identifier assigned if uploading new multimedia
   * @member {Number} temp_multimedia_oid
   */
  exports.prototype.temp_multimedia_oid = undefined;

  /**
   * Thumbnails of this image
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentMultimediaThumbnail>} thumbnails
   */
  exports.prototype.thumbnails = undefined;

  /**
   * Type of file
   * @member {module:com.ultracart.admin.v2.models/ItemContentMultimedia.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * URL to download file (on new multimedia record this can be a URL for UltraCart to fetch)
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Width of the image
   * @member {Number} width
   */
  exports.prototype.width = undefined;


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
