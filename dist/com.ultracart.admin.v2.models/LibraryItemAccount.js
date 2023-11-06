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
 * The LibraryItemAccount model module.
 * @module com.ultracart.admin.v2.models/LibraryItemAccount
 * @version 4.0.185
 */
var LibraryItemAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemAccount
   */
  function LibraryItemAccount() {
    _classCallCheck(this, LibraryItemAccount);

    LibraryItemAccount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItemAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItemAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemAccount} The populated <code>LibraryItemAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemAccount();

        if (data.hasOwnProperty('library_item_account_oid')) {
          obj['library_item_account_oid'] = _ApiClient["default"].convertToType(data['library_item_account_oid'], 'Number');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('other_merchant_id')) {
          obj['other_merchant_id'] = _ApiClient["default"].convertToType(data['other_merchant_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LibraryItemAccount;
}();
/**
 * @member {Number} library_item_account_oid
 */


LibraryItemAccount.prototype['library_item_account_oid'] = undefined;
/**
 * @member {Number} library_item_oid
 */

LibraryItemAccount.prototype['library_item_oid'] = undefined;
/**
 * @member {String} other_merchant_id
 */

LibraryItemAccount.prototype['other_merchant_id'] = undefined;
var _default = LibraryItemAccount;
exports["default"] = _default;