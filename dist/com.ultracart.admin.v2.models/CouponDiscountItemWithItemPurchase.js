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
 * The CouponDiscountItemWithItemPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
 * @version 4.0.165
 */
var CouponDiscountItemWithItemPurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponDiscountItemWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
   */
  function CouponDiscountItemWithItemPurchase() {
    _classCallCheck(this, CouponDiscountItemWithItemPurchase);

    CouponDiscountItemWithItemPurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponDiscountItemWithItemPurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CouponDiscountItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} The populated <code>CouponDiscountItemWithItemPurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponDiscountItemWithItemPurchase();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('discount_item')) {
          obj['discount_item'] = _ApiClient["default"].convertToType(data['discount_item'], 'String');
        }

        if (data.hasOwnProperty('discount_price')) {
          obj['discount_price'] = _ApiClient["default"].convertToType(data['discount_price'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('required_purchase_item')) {
          obj['required_purchase_item'] = _ApiClient["default"].convertToType(data['required_purchase_item'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponDiscountItemWithItemPurchase;
}();
/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */


CouponDiscountItemWithItemPurchase.prototype['currency_code'] = undefined;
/**
 * The item that will be sold at the discount_price when required_purchase_item is purchased.
 * @member {String} discount_item
 */

CouponDiscountItemWithItemPurchase.prototype['discount_item'] = undefined;
/**
 * The price (unit cost) of the discounted item
 * @member {Number} discount_price
 */

CouponDiscountItemWithItemPurchase.prototype['discount_price'] = undefined;
/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */

CouponDiscountItemWithItemPurchase.prototype['limit'] = undefined;
/**
 * The item that must be purchased for the discount to be applied to the discount item.
 * @member {String} required_purchase_item
 */

CouponDiscountItemWithItemPurchase.prototype['required_purchase_item'] = undefined;
var _default = CouponDiscountItemWithItemPurchase;
exports["default"] = _default;