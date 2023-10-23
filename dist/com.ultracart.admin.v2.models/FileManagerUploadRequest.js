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
 * The FileManagerUploadRequest model module.
 * @module com.ultracart.admin.v2.models/FileManagerUploadRequest
 * @version 4.0.180
 */
var FileManagerUploadRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileManagerUploadRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/FileManagerUploadRequest
   */
  function FileManagerUploadRequest() {
    _classCallCheck(this, FileManagerUploadRequest);

    FileManagerUploadRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileManagerUploadRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileManagerUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FileManagerUploadRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FileManagerUploadRequest} The populated <code>FileManagerUploadRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileManagerUploadRequest();

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('parent_storefront_fs_directory_oid')) {
          obj['parent_storefront_fs_directory_oid'] = _ApiClient["default"].convertToType(data['parent_storefront_fs_directory_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FileManagerUploadRequest;
}();
/**
 * @member {String} filename
 */


FileManagerUploadRequest.prototype['filename'] = undefined;
/**
 * @member {String} key
 */

FileManagerUploadRequest.prototype['key'] = undefined;
/**
 * @member {Number} parent_storefront_fs_directory_oid
 */

FileManagerUploadRequest.prototype['parent_storefront_fs_directory_oid'] = undefined;
var _default = FileManagerUploadRequest;
exports["default"] = _default;