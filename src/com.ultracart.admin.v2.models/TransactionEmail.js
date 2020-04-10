/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/TransactionEmailOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TransactionEmailOption'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TransactionEmail = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TransactionEmailOption);
  }
}(this, function(ApiClient, TransactionEmailOption) {
  'use strict';




  /**
   * The TransactionEmail model module.
   * @module com.ultracart.admin.v2.models/TransactionEmail
   * @version 2.4.91
   */

  /**
   * Constructs a new <code>TransactionEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionEmail
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>TransactionEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TransactionEmail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TransactionEmail} The populated <code>TransactionEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('esp_domain_uuid')) {
        obj['esp_domain_uuid'] = ApiClient.convertToType(data['esp_domain_uuid'], 'String');
      }
      if (data.hasOwnProperty('esp_friendly_name')) {
        obj['esp_friendly_name'] = ApiClient.convertToType(data['esp_friendly_name'], 'String');
      }
      if (data.hasOwnProperty('esp_user')) {
        obj['esp_user'] = ApiClient.convertToType(data['esp_user'], 'String');
      }
      if (data.hasOwnProperty('file_exists')) {
        obj['file_exists'] = ApiClient.convertToType(data['file_exists'], 'Boolean');
      }
      if (data.hasOwnProperty('file_name')) {
        obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('invalid')) {
        obj['invalid'] = ApiClient.convertToType(data['invalid'], 'Boolean');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [TransactionEmailOption]);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('store_front_fs_directory_oid')) {
        obj['store_front_fs_directory_oid'] = ApiClient.convertToType(data['store_front_fs_directory_oid'], 'Number');
      }
      if (data.hasOwnProperty('store_front_fs_file_oid')) {
        obj['store_front_fs_file_oid'] = ApiClient.convertToType(data['store_front_fs_file_oid'], 'Number');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('syntax_errors')) {
        obj['syntax_errors'] = ApiClient.convertToType(data['syntax_errors'], 'String');
      }
      if (data.hasOwnProperty('template_path_relative_path')) {
        obj['template_path_relative_path'] = ApiClient.convertToType(data['template_path_relative_path'], 'String');
      }
      if (data.hasOwnProperty('theme_relative_path')) {
        obj['theme_relative_path'] = ApiClient.convertToType(data['theme_relative_path'], 'String');
      }
    }
    return obj;
  }

  /**
   * Actual template contents
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The uuid of the sending domain
   * @member {String} esp_domain_uuid
   */
  exports.prototype['esp_domain_uuid'] = undefined;
  /**
   * Friendly from that will appear in customer email clients.
   * @member {String} esp_friendly_name
   */
  exports.prototype['esp_friendly_name'] = undefined;
  /**
   * The username of the sending email.  This is not the full email.  Only the username which is everything before the @ sign.
   * @member {String} esp_user
   */
  exports.prototype['esp_user'] = undefined;
  /**
   * An internal identifier used to aid in retrieving templates from the filesystem.
   * @member {Boolean} file_exists
   */
  exports.prototype['file_exists'] = undefined;
  /**
   * File name
   * @member {String} file_name
   */
  exports.prototype['file_name'] = undefined;
  /**
   * Group
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * Invalid will be true if the template cannot compile
   * @member {Boolean} invalid
   */
  exports.prototype['invalid'] = undefined;
  /**
   * Last modified timestamp
   * @member {String} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * Options that help govern how and when this template is used
   * @member {Array.<module:com.ultracart.admin.v2.models/TransactionEmailOption>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * directory path where template is stored in file system
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Size of file in friendly description
   * @member {String} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Internal identifier used to store and retrieve template from filesystem
   * @member {Number} store_front_fs_directory_oid
   */
  exports.prototype['store_front_fs_directory_oid'] = undefined;
  /**
   * Internal identifier used to store and retrieve template from filesystem
   * @member {Number} store_front_fs_file_oid
   */
  exports.prototype['store_front_fs_file_oid'] = undefined;
  /**
   * Subject
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Any syntax errors contained within the tempalate
   * @member {String} syntax_errors
   */
  exports.prototype['syntax_errors'] = undefined;
  /**
   * Internal value used to locate the template in the filesystem
   * @member {String} template_path_relative_path
   */
  exports.prototype['template_path_relative_path'] = undefined;
  /**
   * Theme relative path in the filesystem.
   * @member {String} theme_relative_path
   */
  exports.prototype['theme_relative_path'] = undefined;



  return exports;
}));


