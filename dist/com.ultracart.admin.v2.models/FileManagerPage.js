"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileManagerDirectory = _interopRequireDefault(require("./FileManagerDirectory"));

var _FileManagerFile = _interopRequireDefault(require("./FileManagerFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FileManagerPage model module.
 * @module com.ultracart.admin.v2.models/FileManagerPage
 * @version 4.0.93-RC
 */
var FileManagerPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileManagerPage</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerPage
   */
  function FileManagerPage() {
    _classCallCheck(this, FileManagerPage);

    FileManagerPage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileManagerPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileManagerPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerPage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerPage} The populated <code>FileManagerPage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileManagerPage();

        if (data.hasOwnProperty('current_storefront_fs_directory_oid')) {
          obj['current_storefront_fs_directory_oid'] = _ApiClient["default"].convertToType(data['current_storefront_fs_directory_oid'], 'Number');
        }

        if (data.hasOwnProperty('directories')) {
          obj['directories'] = _ApiClient["default"].convertToType(data['directories'], [_FileManagerDirectory["default"]]);
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_FileManagerFile["default"]]);
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
          obj['parent_storefront_fs_directory_oid'] = _ApiClient["default"].convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('path_list')) {
          obj['path_list'] = _ApiClient["default"].convertToType(data['path_list'], [_FileManagerDirectory["default"]]);
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FileManagerPage;
}();
/**
 * @member {Number} current_storefront_fs_directory_oid
 */


FileManagerPage.prototype['current_storefront_fs_directory_oid'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} directories
 */

FileManagerPage.prototype['directories'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerFile>} files
 */

FileManagerPage.prototype['files'] = undefined;
/**
 * @member {String} hostname
 */

FileManagerPage.prototype['hostname'] = undefined;
/**
 * @member {Number} parent_storefront_fs_directory_oid
 */

FileManagerPage.prototype['parent_storefront_fs_directory_oid'] = undefined;
/**
 * @member {String} path
 */

FileManagerPage.prototype['path'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/FileManagerDirectory>} path_list
 */

FileManagerPage.prototype['path_list'] = undefined;
/**
 * @member {Number} storefront_oid
 */

FileManagerPage.prototype['storefront_oid'] = undefined;
var _default = FileManagerPage;
exports["default"] = _default;