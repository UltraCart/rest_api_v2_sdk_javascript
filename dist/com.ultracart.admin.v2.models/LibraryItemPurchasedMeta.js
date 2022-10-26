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
 * The LibraryItemPurchasedMeta model module.
 * @module com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
 * @version 4.0.74-RC
 */
var LibraryItemPurchasedMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryItemPurchasedMeta</code>.
   * @alias module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta
   */
  function LibraryItemPurchasedMeta() {
    _classCallCheck(this, LibraryItemPurchasedMeta);

    LibraryItemPurchasedMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryItemPurchasedMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LibraryItemPurchasedMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryItemPurchasedMeta} The populated <code>LibraryItemPurchasedMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryItemPurchasedMeta();

        if (data.hasOwnProperty('most_recent_version')) {
          obj['most_recent_version'] = _ApiClient["default"].convertToType(data['most_recent_version'], 'Number');
        }

        if (data.hasOwnProperty('my_purchased_version')) {
          obj['my_purchased_version'] = _ApiClient["default"].convertToType(data['my_purchased_version'], 'Number');
        }

        if (data.hasOwnProperty('upgrade_available')) {
          obj['upgrade_available'] = _ApiClient["default"].convertToType(data['upgrade_available'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LibraryItemPurchasedMeta;
}();
/**
 * The most recent version of the item purchased
 * @member {Number} most_recent_version
 */


LibraryItemPurchasedMeta.prototype['most_recent_version'] = undefined;
/**
 * If this is a public item and the merchant has already purchased it, this is their version.  If not yet purchased, this will be zero.  This value will only be populated during a searchPublicItems() call.
 * @member {Number} my_purchased_version
 */

LibraryItemPurchasedMeta.prototype['my_purchased_version'] = undefined;
/**
 * True if the most recent version of this purchase it greater than what was purchased
 * @member {Boolean} upgrade_available
 */

LibraryItemPurchasedMeta.prototype['upgrade_available'] = undefined;
var _default = LibraryItemPurchasedMeta;
exports["default"] = _default;