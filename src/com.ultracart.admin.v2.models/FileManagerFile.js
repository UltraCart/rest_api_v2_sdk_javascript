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
    root.UltraCartRestApiV2.FileManagerFile = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileManagerFile model module.
   * @module com.ultracart.admin.v2.models/FileManagerFile
   * @version 3.10.74
   */

  /**
   * Constructs a new <code>FileManagerFile</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerFile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FileManagerFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/FileManagerFile} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/FileManagerFile} The populated <code>FileManagerFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('favorite'))
        obj.favorite = ApiClient.convertToType(data['favorite'], 'Boolean');
      if (data.hasOwnProperty('hostname'))
        obj.hostname = ApiClient.convertToType(data['hostname'], 'String');
      if (data.hasOwnProperty('i18n_violation'))
        obj.i18n_violation = ApiClient.convertToType(data['i18n_violation'], 'Boolean');
      if (data.hasOwnProperty('icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'String');
      if (data.hasOwnProperty('internal_version'))
        obj.internal_version = ApiClient.convertToType(data['internal_version'], 'Number');
      if (data.hasOwnProperty('last_modified'))
        obj.last_modified = ApiClient.convertToType(data['last_modified'], 'String');
      if (data.hasOwnProperty('merge_conflict'))
        obj.merge_conflict = ApiClient.convertToType(data['merge_conflict'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('parent_storefront_fs_directory_oid'))
        obj.parent_storefront_fs_directory_oid = ApiClient.convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('part_of_active_theme'))
        obj.part_of_active_theme = ApiClient.convertToType(data['part_of_active_theme'], 'Boolean');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('raw_size'))
        obj.raw_size = ApiClient.convertToType(data['raw_size'], 'Number');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'String');
      if (data.hasOwnProperty('storefront_fs_directory_oid'))
        obj.storefront_fs_directory_oid = ApiClient.convertToType(data['storefront_fs_directory_oid'], 'Number');
      if (data.hasOwnProperty('storefront_fs_file_oid'))
        obj.storefront_fs_file_oid = ApiClient.convertToType(data['storefront_fs_file_oid'], 'Number');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('thumbnail_16_url'))
        obj.thumbnail_16_url = ApiClient.convertToType(data['thumbnail_16_url'], 'String');
      if (data.hasOwnProperty('thumbnail_32_url'))
        obj.thumbnail_32_url = ApiClient.convertToType(data['thumbnail_32_url'], 'String');
      if (data.hasOwnProperty('thumbnail_64_url'))
        obj.thumbnail_64_url = ApiClient.convertToType(data['thumbnail_64_url'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('valid_velocity'))
        obj.valid_velocity = ApiClient.convertToType(data['valid_velocity'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} favorite
   */
  exports.prototype.favorite = undefined;

  /**
   * @member {String} hostname
   */
  exports.prototype.hostname = undefined;

  /**
   * @member {Boolean} i18n_violation
   */
  exports.prototype.i18n_violation = undefined;

  /**
   * @member {String} icon
   */
  exports.prototype.icon = undefined;

  /**
   * @member {Number} internal_version
   */
  exports.prototype.internal_version = undefined;

  /**
   * @member {String} last_modified
   */
  exports.prototype.last_modified = undefined;

  /**
   * @member {Boolean} merge_conflict
   */
  exports.prototype.merge_conflict = undefined;

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
   * @member {String} path
   */
  exports.prototype.path = undefined;

  /**
   * @member {Number} raw_size
   */
  exports.prototype.raw_size = undefined;

  /**
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  /**
   * @member {String} size
   */
  exports.prototype.size = undefined;

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
   * CDN thumbnail 16x16 size
   * @member {String} thumbnail_16_url
   */
  exports.prototype.thumbnail_16_url = undefined;

  /**
   * CDN thumbnail 32x32 size
   * @member {String} thumbnail_32_url
   */
  exports.prototype.thumbnail_32_url = undefined;

  /**
   * CDN thumbnail 64x64 size
   * @member {String} thumbnail_64_url
   */
  exports.prototype.thumbnail_64_url = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} valid_velocity
   */
  exports.prototype.valid_velocity = undefined;

  return exports;

}));
