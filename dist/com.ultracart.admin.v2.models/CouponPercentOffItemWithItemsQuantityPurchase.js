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
 * The CouponPercentOffItemWithItemsQuantityPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase
 * @version 4.0.171
 */
var CouponPercentOffItemWithItemsQuantityPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponPercentOffItemWithItemsQuantityPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase
   */
  function CouponPercentOffItemWithItemsQuantityPurchase() {
    _classCallCheck(this, CouponPercentOffItemWithItemsQuantityPurchase);

    CouponPercentOffItemWithItemsQuantityPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponPercentOffItemWithItemsQuantityPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponPercentOffItemWithItemsQuantityPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} The populated <code>CouponPercentOffItemWithItemsQuantityPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponPercentOffItemWithItemsQuantityPurchase();

        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], ['String']);
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('required_purchase_items')) {
          obj['required_purchase_items'] = _ApiClient["default"].convertToType(data['required_purchase_items'], ['String']);
        }

        if (data.hasOwnProperty('required_purchase_quantity')) {
          obj['required_purchase_quantity'] = _ApiClient["default"].convertToType(data['required_purchase_quantity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CouponPercentOffItemWithItemsQuantityPurchase;
}();
/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */


CouponPercentOffItemWithItemsQuantityPurchase.prototype['discount_percent'] = undefined;
/**
 * A list of items which will receive a discount if one of the required purchase items is purchased.
 * @member {Array.<String>} items
 */

CouponPercentOffItemWithItemsQuantityPurchase.prototype['items'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponPercentOffItemWithItemsQuantityPurchase.prototype['limit'] = undefined;
/**
 * Required items (at least one from the list) that must be purchased for coupon to be valid
 * @member {Array.<String>} required_purchase_items
 */

CouponPercentOffItemWithItemsQuantityPurchase.prototype['required_purchase_items'] = undefined;
/**
 * The quantity of items that must be purchased for the discount to be applied.
 * @member {Number} required_purchase_quantity
 */

CouponPercentOffItemWithItemsQuantityPurchase.prototype['required_purchase_quantity'] = undefined;
var _default = CouponPercentOffItemWithItemsQuantityPurchase;
exports["default"] = _default;