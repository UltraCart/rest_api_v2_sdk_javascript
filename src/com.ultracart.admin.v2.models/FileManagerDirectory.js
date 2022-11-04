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
    root.UltraCartRestApiV2.FileManagerDirectory = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileManagerDirectory model module.
   * @module com.ultracart.admin.v2.models/FileManagerDirectory
   * @version 3.10.61
   */

  /**
   * Constructs a new <code>FileManagerDirectory</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerDirectory
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FileManagerDirectory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/FileManagerDirectory} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/FileManagerDirectory} The populated <code>FileManagerDirectory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_theme_directory'))
        obj.active_theme_directory = ApiClient.convertToType(data['active_theme_directory'], 'Boolean');
      if (data.hasOwnProperty('favorite'))
        obj.favorite = ApiClient.convertToType(data['favorite'], 'Boolean');
      if (data.hasOwnProperty('hostname'))
        obj.hostname = ApiClient.convertToType(data['hostname'], 'String');
      if (data.hasOwnProperty('icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'String');
      if (data.hasOwnProperty('last_modified'))
        obj.last_modified = ApiClient.convertToType(data['last_modified'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('parent_storefront_fs_directory_oid'))
        obj.parent_storefront_fs_directory_oid = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('part_of_active_theme'))
        obj.part_of_active_theme = ApiClient.convertToType(data['part_of_active_theme'], 'Boolean');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
      if (data.hasOwnProperty('storefront_fs_directory_oid'))
        obj.storefront_fs_directory_oid = ApiClient.convertToType(data['storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('storefront_fs_file_oid'))
        obj.storefront_fs_file_oid = ApiClient.convertToType(data['storefront_fs_file_oid'], 'Number');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} active_theme_directory
   */
  exports.prototype.active_theme_directory = undefined;

  /**
   * @member {Boolean} favorite
   */
  exports.prototype.favorite = undefined;

  /**
   * @member {String} hostname
   */
  exports.prototype.hostname = undefined;

  /**
   * @member {String} icon
   */
  exports.prototype.icon = undefined;

  /**
   * @member {String} last_modified
   */
  exports.prototype.last_modified = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} parent_storefront_fs_directory_oid
   */
  exports.prototype.parent_storefront_fs_directory_oid = undefined;

  /**
   * @member {Boolean} part_of_active_theme
   */
  exports.prototype.part_of_active_theme = undefined;

  /**
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  /**
   * @member {Number} storefront_fs_directory_oid
   */
  exports.prototype.storefront_fs_directory_oid = undefined;

  /**
   * @member {Number} storefront_fs_file_oid
   */
  exports.prototype.storefront_fs_file_oid = undefined;

  /**
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
