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
 * The ItemWishlistMember model module.
 * @module com.ultracart.admin.v2.models/ItemWishlistMember
 * @version 4.0.81-RC
 */
var ItemWishlistMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemWishlistMember</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemWishlistMember
   */
  function ItemWishlistMember() {
    _classCallCheck(this, ItemWishlistMember);

    ItemWishlistMember.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemWishlistMember, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemWishlistMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemWishlistMember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemWishlistMember} The populated <code>ItemWishlistMember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemWishlistMember();

        if (data.hasOwnProperty('wishlist_member_instance_description')) {
          obj['wishlist_member_instance_description'] = _ApiClient["default"].convertToType(data['wishlist_member_instance_description'], 'String');
        }

        if (data.hasOwnProperty('wishlist_member_instance_oid')) {
          obj['wishlist_member_instance_oid'] = _ApiClient["default"].convertToType(data['wishlist_member_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('wishlist_member_sku')) {
          obj['wishlist_member_sku'] = _ApiClient["default"].convertToType(data['wishlist_member_sku'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemWishlistMember;
}();
/**
 * WishList Member instance description
 * @member {String} wishlist_member_instance_description
 */


ItemWishlistMember.prototype['wishlist_member_instance_description'] = undefined;
/**
 * WishList Member instance object identifier
 * @member {Number} wishlist_member_instance_oid
 */

ItemWishlistMember.prototype['wishlist_member_instance_oid'] = undefined;
/**
 * WishList Member SKU
 * @member {String} wishlist_member_sku
 */

ItemWishlistMember.prototype['wishlist_member_sku'] = undefined;
var _default = ItemWishlistMember;
exports["default"] = _default;