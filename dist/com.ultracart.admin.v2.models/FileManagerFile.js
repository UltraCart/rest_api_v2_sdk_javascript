"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FileManagerFile model module.
 * @module com.ultracart.admin.v2.models/FileManagerFile
 * @version 4.0.161
 */
var FileManagerFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileManagerFile</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerFile
   */
  function FileManagerFile() {
    _classCallCheck(this, FileManagerFile);

    FileManagerFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileManagerFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileManagerFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerFile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerFile} The populated <code>FileManagerFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileManagerFile();

        if (data.hasOwnProperty('favorite')) {
          obj['favorite'] = _ApiClient["default"].convertToType(data['favorite'], 'Boolean');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('i18n_violation')) {
          obj['i18n_violation'] = _ApiClient["default"].convertToType(data['i18n_violation'], 'Boolean');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }

        if (data.hasOwnProperty('internal_version')) {
          obj['internal_version'] = _ApiClient["default"].convertToType(data['internal_version'], 'Number');
        }

        if (data.hasOwnProperty('last_modified')) {
          obj['last_modified'] = _ApiClient["default"].convertToType(data['last_modified'], 'String');
        }

        if (data.hasOwnProperty('merge_conflict')) {
          obj['merge_conflict'] = _ApiClient["default"].convertToType(data['merge_conflict'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
          obj['parent_storefront_fs_directory_oid'] = _ApiClient["default"].convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
        }

        if (data.hasOwnProperty('part_of_active_theme')) {
          obj['part_of_active_theme'] = _ApiClient["default"].convertToType(data['part_of_active_theme'], 'Boolean');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('raw_size')) {
          obj['raw_size'] = _ApiClient["default"].convertToType(data['raw_size'], 'Number');
        }

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }

        if (data.hasOwnProperty('storefront_fs_directory_oid')) {
          obj['storefront_fs_directory_oid'] = _ApiClient["default"].convertToType(data['storefront_fs_directory_oid'], 'Number');
        }

        if (data.hasOwnProperty('storefront_fs_file_oid')) {
          obj['storefront_fs_file_oid'] = _ApiClient["default"].convertToType(data['storefront_fs_file_oid'], 'Number');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('thumbnail_16_url')) {
          obj['thumbnail_16_url'] = _ApiClient["default"].convertToType(data['thumbnail_16_url'], 'String');
        }

        if (data.hasOwnProperty('thumbnail_32_url')) {
          obj['thumbnail_32_url'] = _ApiClient["default"].convertToType(data['thumbnail_32_url'], 'String');
        }

        if (data.hasOwnProperty('thumbnail_64_url')) {
          obj['thumbnail_64_url'] = _ApiClient["default"].convertToType(data['thumbnail_64_url'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('valid_velocity')) {
          obj['valid_velocity'] = _ApiClient["default"].convertToType(data['valid_velocity'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FileManagerFile;
}();
/**
 * @member {Boolean} favorite
 */


FileManagerFile.prototype['favorite'] = undefined;
/**
 * @member {String} hostname
 */

FileManagerFile.prototype['hostname'] = undefined;
/**
 * @member {Boolean} i18n_violation
 */

FileManagerFile.prototype['i18n_violation'] = undefined;
/**
 * @member {String} icon
 */

FileManagerFile.prototype['icon'] = undefined;
/**
 * @member {Number} internal_version
 */

FileManagerFile.prototype['internal_version'] = undefined;
/**
 * @member {String} last_modified
 */

FileManagerFile.prototype['last_modified'] = undefined;
/**
 * @member {Boolean} merge_conflict
 */

FileManagerFile.prototype['merge_conflict'] = undefined;
/**
 * @member {String} name
 */

FileManagerFile.prototype['name'] = undefined;
/**
 * @member {Number} parent_storefront_fs_directory_oid
 */

FileManagerFile.prototype['parent_storefront_fs_directory_oid'] = undefined;
/**
 * @member {Boolean} part_of_active_theme
 */

FileManagerFile.prototype['part_of_active_theme'] = undefined;
/**
 * @member {String} path
 */

FileManagerFile.prototype['path'] = undefined;
/**
 * @member {Number} raw_size
 */

FileManagerFile.prototype['raw_size'] = undefined;
/**
 * @member {Boolean} selected
 */

FileManagerFile.prototype['selected'] = undefined;
/**
 * @member {String} size
 */

FileManagerFile.prototype['size'] = undefined;
/**
 * @member {Number} storefront_fs_directory_oid
 */

FileManagerFile.prototype['storefront_fs_directory_oid'] = undefined;
/**
 * @member {Number} storefront_fs_file_oid
 */

FileManagerFile.prototype['storefront_fs_file_oid'] = undefined;
/**
 * @member {Number} storefront_oid
 */

FileManagerFile.prototype['storefront_oid'] = undefined;
/**
 * CDN thumbnail 16x16 size
 * @member {String} thumbnail_16_url
 */

FileManagerFile.prototype['thumbnail_16_url'] = undefined;
/**
 * CDN thumbnail 32x32 size
 * @member {String} thumbnail_32_url
 */

FileManagerFile.prototype['thumbnail_32_url'] = undefined;
/**
 * CDN thumbnail 64x64 size
 * @member {String} thumbnail_64_url
 */

FileManagerFile.prototype['thumbnail_64_url'] = undefined;
/**
 * @member {String} type
 */

FileManagerFile.prototype['type'] = undefined;
/**
 * @member {String} valid_velocity
 */

FileManagerFile.prototype['valid_velocity'] = undefined;
var _default = FileManagerFile;
exports["default"] = _default;