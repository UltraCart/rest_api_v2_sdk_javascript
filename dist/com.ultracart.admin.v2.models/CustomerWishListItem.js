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
 * The CustomerWishListItem model module.
 * @module com.ultracart.admin.v2.models/CustomerWishListItem
 * @version 4.0.187
 */
var CustomerWishListItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerWishListItem</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerWishListItem
   */
  function CustomerWishListItem() {
    _classCallCheck(this, CustomerWishListItem);

    CustomerWishListItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerWishListItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerWishListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerWishListItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerWishListItem} The populated <code>CustomerWishListItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerWishListItem();

        if (data.hasOwnProperty('add_dts')) {
          obj['add_dts'] = _ApiClient["default"].convertToType(data['add_dts'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('customer_profile_oid')) {
          obj['customer_profile_oid'] = _ApiClient["default"].convertToType(data['customer_profile_oid'], 'Number');
        }

        if (data.hasOwnProperty('customer_wishlist_item_oid')) {
          obj['customer_wishlist_item_oid'] = _ApiClient["default"].convertToType(data['customer_wishlist_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('merchant_item_oid')) {
          obj['merchant_item_oid'] = _ApiClient["default"].convertToType(data['merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerWishListItem;
}();
/**
 * Add date
 * @member {String} add_dts
 */


CustomerWishListItem.prototype['add_dts'] = undefined;
/**
 * Comments
 * @member {String} comments
 */

CustomerWishListItem.prototype['comments'] = undefined;
/**
 * Customer profile object identifier
 * @member {Number} customer_profile_oid
 */

CustomerWishListItem.prototype['customer_profile_oid'] = undefined;
/**
 * Customer wishlist item object identifier
 * @member {Number} customer_wishlist_item_oid
 */

CustomerWishListItem.prototype['customer_wishlist_item_oid'] = undefined;
/**
 * Merchant item object identifier
 * @member {Number} merchant_item_oid
 */

CustomerWishListItem.prototype['merchant_item_oid'] = undefined;
/**
 * Position in wishlist
 * @member {Number} position
 */

CustomerWishListItem.prototype['position'] = undefined;
/**
 * Priority of wishlist item, 3 being low priority and 5 is high priority.
 * @member {Number} priority
 */

CustomerWishListItem.prototype['priority'] = undefined;
var _default = CustomerWishListItem;
exports["default"] = _default;