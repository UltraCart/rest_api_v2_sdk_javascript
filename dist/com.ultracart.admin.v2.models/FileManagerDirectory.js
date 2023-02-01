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
 * The FileManagerDirectory model module.
 * @module com.ultracart.admin.v2.models/FileManagerDirectory
 * @version 4.0.128
 */
var FileManagerDirectory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileManagerDirectory</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerDirectory
   */
  function FileManagerDirectory() {
    _classCallCheck(this, FileManagerDirectory);

    FileManagerDirectory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileManagerDirectory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileManagerDirectory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerDirectory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerDirectory} The populated <code>FileManagerDirectory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileManagerDirectory();

        if (data.hasOwnProperty('active_theme_directory')) {
          obj['active_theme_directory'] = _ApiClient["default"].convertToType(data['active_theme_directory'], 'Boolean');
        }

        if (data.hasOwnProperty('favorite')) {
          obj['favorite'] = _ApiClient["default"].convertToType(data['favorite'], 'Boolean');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }

        if (data.hasOwnProperty('last_modified')) {
          obj['last_modified'] = _ApiClient["default"].convertToType(data['last_modified'], 'String');
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

        if (data.hasOwnProperty('selected')) {
          obj['selected'] = _ApiClient["default"].convertToType(data['selected'], 'Boolean');
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

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FileManagerDirectory;
}();
/**
 * @member {Boolean} active_theme_directory
 */


FileManagerDirectory.prototype['active_theme_directory'] = undefined;
/**
 * @member {Boolean} favorite
 */

FileManagerDirectory.prototype['favorite'] = undefined;
/**
 * @member {String} hostname
 */

FileManagerDirectory.prototype['hostname'] = undefined;
/**
 * @member {String} icon
 */

FileManagerDirectory.prototype['icon'] = undefined;
/**
 * @member {String} last_modified
 */

FileManagerDirectory.prototype['last_modified'] = undefined;
/**
 * @member {String} name
 */

FileManagerDirectory.prototype['name'] = undefined;
/**
 * @member {Number} parent_storefront_fs_directory_oid
 */

FileManagerDirectory.prototype['parent_storefront_fs_directory_oid'] = undefined;
/**
 * @member {Boolean} part_of_active_theme
 */

FileManagerDirectory.prototype['part_of_active_theme'] = undefined;
/**
 * @member {Boolean} selected
 */

FileManagerDirectory.prototype['selected'] = undefined;
/**
 * @member {Number} storefront_fs_directory_oid
 */

FileManagerDirectory.prototype['storefront_fs_directory_oid'] = undefined;
/**
 * @member {Number} storefront_fs_file_oid
 */

FileManagerDirectory.prototype['storefront_fs_file_oid'] = undefined;
/**
 * @member {Number} storefront_oid
 */

FileManagerDirectory.prototype['storefront_oid'] = undefined;
/**
 * @member {String} type
 */

FileManagerDirectory.prototype['type'] = undefined;
var _default = FileManagerDirectory;
exports["default"] = _default;