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
    root.UltraCartRestApiV2.OrderDigitalItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderDigitalItem model module.
   * @module com.ultracart.admin.v2.models/OrderDigitalItem
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>OrderDigitalItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderDigitalItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderDigitalItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderDigitalItem} The populated <code>OrderDigitalItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('file_size'))
        obj.file_size = ApiClient.convertToType(data['file_size'], 'Number');
      if (data.hasOwnProperty('last_download'))
        obj.last_download = ApiClient.convertToType(data['last_download'], 'String');
      if (data.hasOwnProperty('last_download_ip_address'))
        obj.last_download_ip_address = ApiClient.convertToType(data['last_download_ip_address'], 'String');
      if (data.hasOwnProperty('original_filename'))
        obj.original_filename = ApiClient.convertToType(data['original_filename'], 'String');
      if (data.hasOwnProperty('product_code'))
        obj.product_code = ApiClient.convertToType(data['product_code'], 'String');
      if (data.hasOwnProperty('product_description'))
        obj.product_description = ApiClient.convertToType(data['product_description'], 'String');
      if (data.hasOwnProperty('remaining_downloads'))
        obj.remaining_downloads = ApiClient.convertToType(data['remaining_downloads'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * File size
   * @member {Number} file_size
   */
  exports.prototype.file_size = undefined;

  /**
   * Last download
   * @member {String} last_download
   */
  exports.prototype.last_download = undefined;

  /**
   * IP address that performed the last download
   * @member {String} last_download_ip_address
   */
  exports.prototype.last_download_ip_address = undefined;

  /**
   * Original file name
   * @member {String} original_filename
   */
  exports.prototype.original_filename = undefined;

  /**
   * Item id associated with this item
   * @member {String} product_code
   */
  exports.prototype.product_code = undefined;

  /**
   * Item description associated with this item
   * @member {String} product_description
   */
  exports.prototype.product_description = undefined;

  /**
   * Remaining number of downloads
   * @member {Number} remaining_downloads
   */
  exports.prototype.remaining_downloads = undefined;

  /**
   * URL that the customer can click to download the specific digital item
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
