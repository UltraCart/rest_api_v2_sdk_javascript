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
    root.UltraCartRestApiV2.WorkflowAttachment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WorkflowAttachment model module.
   * @module com.ultracart.admin.v2.models/WorkflowAttachment
   * @version 3.10.182
   */

  /**
   * Constructs a new <code>WorkflowAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowAttachment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowAttachment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowAttachment} The populated <code>WorkflowAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('download_key'))
        obj.download_key = ApiClient.convertToType(data['download_key'], 'String');
      if (data.hasOwnProperty('file_name'))
        obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
      if (data.hasOwnProperty('file_uuid'))
        obj.file_uuid = ApiClient.convertToType(data['file_uuid'], 'String');
      if (data.hasOwnProperty('mime_type'))
        obj.mime_type = ApiClient.convertToType(data['mime_type'], 'String');
      if (data.hasOwnProperty('upload_key'))
        obj.upload_key = ApiClient.convertToType(data['upload_key'], 'String');
    }
    return obj;
  }

  /**
   * Temporary download URL
   * @member {String} download_key
   */
  exports.prototype.download_key = undefined;

  /**
   * File name
   * @member {String} file_name
   */
  exports.prototype.file_name = undefined;

  /**
   * File UUID
   * @member {String} file_uuid
   */
  exports.prototype.file_uuid = undefined;

  /**
   * Mime Type
   * @member {String} mime_type
   */
  exports.prototype.mime_type = undefined;

  /**
   * Temporary upload key
   * @member {String} upload_key
   */
  exports.prototype.upload_key = undefined;

  return exports;

}));
