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
    root.UltraCartRestApiV2.OrderItemOptionFileAttachment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderItemOptionFileAttachment model module.
   * @module com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>OrderItemOptionFileAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderItemOptionFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} The populated <code>OrderItemOptionFileAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('file_name'))
        obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mime_type = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
    }
    return obj;
  }

  /**
   * Expiration date/time
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * File name
   * @member {String} file_name
   */
  exports.prototype.file_name = undefined;

  /**
   * Mime type
   * @member {String} mime_type
   */
  exports.prototype.mime_type = undefined;

  /**
   * Size
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  return exports;

}));
