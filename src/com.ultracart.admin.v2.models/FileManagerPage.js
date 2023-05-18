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
    define(['ApiClient', 'com.ultracart.admin.v2.models/FileManagerDirectory', 'com.ultracart.admin.v2.models/FileManagerFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileManagerDirectory'), require('./FileManagerFile'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.FileManagerPage = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.FileManagerDirectory, root.UltraCartRestApiV2.FileManagerFile);
  }
}(this, function(ApiClient, FileManagerDirectory, FileManagerFile) {
  'use strict';

  /**
   * The FileManagerPage model module.
   * @module com.ultracart.admin.v2.models/FileManagerPage
   * @version 3.10.138
   */

  /**
   * Constructs a new <code>FileManagerPage</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerPage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FileManagerPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/FileManagerPage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/FileManagerPage} The populated <code>FileManagerPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('current_storefront_fs_directory_oid'))
        obj.current_storefront_fs_directory_oid = ApiClient.convertToType(data['current_storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('directories'))
        obj.directories = ApiClient.convertToType(data['directories'], [FileManagerDirectory]);
      if (data.hasOwnProperty('files'))
        obj.files = ApiClient.convertToType(data['files'], [FileManagerFile]);
      if (data.hasOwnProperty('hostname'))
        obj.hostname = ApiClient.convertToType(data['hostname'], 'String');
      if (data.hasOwnProperty('parent_storefront_fs_directory_oid'))
        obj.parent_storefront_fs_directory_oid = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('path_list'))
        obj.path_list = ApiClient.convertToType(data['path_list'], [FileManagerDirectory]);
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} current_storefront_fs_directory_oid
   */
  exports.prototype.current_storefront_fs_directory_oid = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} directories
   */
  exports.prototype.directories = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerFile>} files
   */
  exports.prototype.files = undefined;

  /**
   * @member {String} hostname
   */
  exports.prototype.hostname = undefined;

  /**
   * @member {Number} parent_storefront_fs_directory_oid
   */
  exports.prototype.parent_storefront_fs_directory_oid = undefined;

  /**
   * @member {String} path
   */
  exports.prototype.path = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} path_list
   */
  exports.prototype.path_list = undefined;

  /**
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
