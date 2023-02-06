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
 * The CouponFreeItemWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
 * @version 4.0.129
 */
var CouponFreeItemWithItemPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponFreeItemWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase
   */
  function CouponFreeItemWithItemPurchase() {
    _classCallCheck(this, CouponFreeItemWithItemPurchase);

    CouponFreeItemWithItemPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponFreeItemWithItemPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponFreeItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} The populated <code>CouponFreeItemWithItemPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponFreeItemWithItemPurchase();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('match_required_purchase_item_to_free_item')) {
          obj['match_required_purchase_item_to_free_item'] = _ApiClient["default"].convertToType(data['match_required_purchase_item_to_free_item'], 'Boolean');
        }

        if (data.hasOwnProperty('required_purchase_items')) {
          obj['required_purchase_items'] = _ApiClient["default"].convertToType(data['required_purchase_items'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponFreeItemWithItemPurchase;
}();
/**
 * A list of free items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */


CouponFreeItemWithItemPurchase.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponFreeItemWithItemPurchase.prototype['limit'] = undefined;
/**
 * If true then the free item is matched 1:1 with the free item in the list.
 * @member {Boolean} match_required_purchase_item_to_free_item
 */

CouponFreeItemWithItemPurchase.prototype['match_required_purchase_item_to_free_item'] = undefined;
/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */

CouponFreeItemWithItemPurchase.prototype['required_purchase_items'] = undefined;
var _default = CouponFreeItemWithItemPurchase;
exports["default"] = _default;