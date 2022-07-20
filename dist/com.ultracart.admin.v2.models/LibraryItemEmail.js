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
 * The LibraryItemEmail model module.
 * @module com.ultracart.admin.v2.models/LibraryItemEmail
 * @version 4.0.36-RC
 */
var LibraryItemEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemEmail</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemEmail
   */
  function LibraryItemEmail() {
    _classCallCheck(this, LibraryItemEmail);

    LibraryItemEmail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItemEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItemEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemEmail} The populated <code>LibraryItemEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemEmail();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('library_item_email_oid')) {
          obj['library_item_email_oid'] = _ApiClient["default"].convertToType(data['library_item_email_oid'], 'Number');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LibraryItemEmail;
}();
/**
 * @member {String} email
 */


LibraryItemEmail.prototype['email'] = undefined;
/**
 * @member {Number} library_item_email_oid
 */

LibraryItemEmail.prototype['library_item_email_oid'] = undefined;
/**
 * @member {Number} library_item_oid
 */

LibraryItemEmail.prototype['library_item_oid'] = undefined;
var _default = LibraryItemEmail;
exports["default"] = _default;