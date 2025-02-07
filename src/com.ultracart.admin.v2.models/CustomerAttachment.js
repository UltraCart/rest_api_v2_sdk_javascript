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
    root.UltraCartRestApiV2.CustomerAttachment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerAttachment model module.
   * @module com.ultracart.admin.v2.models/CustomerAttachment
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>CustomerAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerAttachment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerAttachment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerAttachment} The populated <code>CustomerAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customer_profile_attachment_oid'))
        obj.customer_profile_attachment_oid = ApiClient.convertToType(data['customer_profile_attachment_oid'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('file_name'))
        obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mime_type = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('upload_dts'))
        obj.upload_dts = ApiClient.convertToType(data['upload_dts'], 'String');
    }
    return obj;
  }

  /**
   * Attachment identifier
   * @member {Number} customer_profile_attachment_oid
   */
  exports.prototype.customer_profile_attachment_oid = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

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
   * Upload date/time
   * @member {String} upload_dts
   */
  exports.prototype.upload_dts = undefined;

  return exports;

}));
