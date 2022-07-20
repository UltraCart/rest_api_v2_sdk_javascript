"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionEmailOption = _interopRequireDefault(require("./TransactionEmailOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TransactionEmail model module.
 * @module com.ultracart.admin.v2.models/TransactionEmail
 * @version 4.0.36-RC
 */
var TransactionEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionEmail
   */
  function TransactionEmail() {
    _classCallCheck(this, TransactionEmail);

    TransactionEmail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TransactionEmail} The populated <code>TransactionEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionEmail();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('esp_domain_uuid')) {
          obj['esp_domain_uuid'] = _ApiClient["default"].convertToType(data['esp_domain_uuid'], 'String');
        }

        if (data.hasOwnProperty('esp_friendly_name')) {
          obj['esp_friendly_name'] = _ApiClient["default"].convertToType(data['esp_friendly_name'], 'String');
        }

        if (data.hasOwnProperty('esp_user')) {
          obj['esp_user'] = _ApiClient["default"].convertToType(data['esp_user'], 'String');
        }

        if (data.hasOwnProperty('file_exists')) {
          obj['file_exists'] = _ApiClient["default"].convertToType(data['file_exists'], 'Boolean');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], 'String');
        }

        if (data.hasOwnProperty('handlebar_variables')) {
          obj['handlebar_variables'] = _ApiClient["default"].convertToType(data['handlebar_variables'], ['String']);
        }

        if (data.hasOwnProperty('invalid')) {
          obj['invalid'] = _ApiClient["default"].convertToType(data['invalid'], 'Boolean');
        }

        if (data.hasOwnProperty('last_modified')) {
          obj['last_modified'] = _ApiClient["default"].convertToType(data['last_modified'], 'String');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_TransactionEmailOption["default"]]);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }

        if (data.hasOwnProperty('store_front_fs_directory_oid')) {
          obj['store_front_fs_directory_oid'] = _ApiClient["default"].convertToType(data['store_front_fs_directory_oid'], 'Number');
        }

        if (data.hasOwnProperty('store_front_fs_file_oid')) {
          obj['store_front_fs_file_oid'] = _ApiClient["default"].convertToType(data['store_front_fs_file_oid'], 'Number');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('syntax_errors')) {
          obj['syntax_errors'] = _ApiClient["default"].convertToType(data['syntax_errors'], 'String');
        }

        if (data.hasOwnProperty('template_path_relative_path')) {
          obj['template_path_relative_path'] = _ApiClient["default"].convertToType(data['template_path_relative_path'], 'String');
        }

        if (data.hasOwnProperty('theme_relative_path')) {
          obj['theme_relative_path'] = _ApiClient["default"].convertToType(data['theme_relative_path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionEmail;
}();
/**
 * Actual template contents
 * @member {String} content
 */


TransactionEmail.prototype['content'] = undefined;
/**
 * The uuid of the sending domain
 * @member {String} esp_domain_uuid
 */

TransactionEmail.prototype['esp_domain_uuid'] = undefined;
/**
 * Friendly from that will appear in customer email clients.
 * @member {String} esp_friendly_name
 */

TransactionEmail.prototype['esp_friendly_name'] = undefined;
/**
 * The username of the sending email.  This is not the full email.  Only the username which is everything before the @ sign.
 * @member {String} esp_user
 */

TransactionEmail.prototype['esp_user'] = undefined;
/**
 * An internal identifier used to aid in retrieving templates from the filesystem.
 * @member {Boolean} file_exists
 */

TransactionEmail.prototype['file_exists'] = undefined;
/**
 * File name
 * @member {String} file_name
 */

TransactionEmail.prototype['file_name'] = undefined;
/**
 * Group
 * @member {String} group
 */

TransactionEmail.prototype['group'] = undefined;
/**
 * Handlebar Variables available for email template
 * @member {Array.<String>} handlebar_variables
 */

TransactionEmail.prototype['handlebar_variables'] = undefined;
/**
 * Invalid will be true if the template cannot compile
 * @member {Boolean} invalid
 */

TransactionEmail.prototype['invalid'] = undefined;
/**
 * Last modified timestamp
 * @member {String} last_modified
 */

TransactionEmail.prototype['last_modified'] = undefined;
/**
 * If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated.
 * @member {Number} library_item_oid
 */

TransactionEmail.prototype['library_item_oid'] = undefined;
/**
 * Options that help govern how and when this template is used
 * @member {Array.<module:com.ultracart.admin.v2.models/TransactionEmailOption>} options
 */

TransactionEmail.prototype['options'] = undefined;
/**
 * directory path where template is stored in file system
 * @member {String} path
 */

TransactionEmail.prototype['path'] = undefined;
/**
 * Size of file in friendly description
 * @member {String} size
 */

TransactionEmail.prototype['size'] = undefined;
/**
 * Internal identifier used to store and retrieve template from filesystem
 * @member {Number} store_front_fs_directory_oid
 */

TransactionEmail.prototype['store_front_fs_directory_oid'] = undefined;
/**
 * Internal identifier used to store and retrieve template from filesystem
 * @member {Number} store_front_fs_file_oid
 */

TransactionEmail.prototype['store_front_fs_file_oid'] = undefined;
/**
 * Subject
 * @member {String} subject
 */

TransactionEmail.prototype['subject'] = undefined;
/**
 * Any syntax errors contained within the tempalate
 * @member {String} syntax_errors
 */

TransactionEmail.prototype['syntax_errors'] = undefined;
/**
 * Internal value used to locate the template in the filesystem
 * @member {String} template_path_relative_path
 */

TransactionEmail.prototype['template_path_relative_path'] = undefined;
/**
 * Theme relative path in the filesystem.
 * @member {String} theme_relative_path
 */

TransactionEmail.prototype['theme_relative_path'] = undefined;
var _default = TransactionEmail;
exports["default"] = _default;