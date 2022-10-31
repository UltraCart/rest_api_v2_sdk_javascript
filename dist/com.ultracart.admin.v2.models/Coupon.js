"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponAmountOffItems = _interopRequireDefault(require("./CouponAmountOffItems"));

var _CouponAmountOffShipping = _interopRequireDefault(require("./CouponAmountOffShipping"));

var _CouponAmountOffShippingWithItemsPurchase = _interopRequireDefault(require("./CouponAmountOffShippingWithItemsPurchase"));

var _CouponAmountOffSubtotal = _interopRequireDefault(require("./CouponAmountOffSubtotal"));

var _CouponAmountOffSubtotalAndShipping = _interopRequireDefault(require("./CouponAmountOffSubtotalAndShipping"));

var _CouponAmountOffSubtotalFreeShippingWithPurchase = _interopRequireDefault(require("./CouponAmountOffSubtotalFreeShippingWithPurchase"));

var _CouponAmountOffSubtotalWithBlockPurchase = _interopRequireDefault(require("./CouponAmountOffSubtotalWithBlockPurchase"));

var _CouponAmountOffSubtotalWithItemsPurchase = _interopRequireDefault(require("./CouponAmountOffSubtotalWithItemsPurchase"));

var _CouponAmountOffSubtotalWithPurchase = _interopRequireDefault(require("./CouponAmountOffSubtotalWithPurchase"));

var _CouponAmountShippingWithSubtotal = _interopRequireDefault(require("./CouponAmountShippingWithSubtotal"));

var _CouponAutomaticallyApplyCouponCodes = _interopRequireDefault(require("./CouponAutomaticallyApplyCouponCodes"));

var _CouponBuyOneGetOneLimit = _interopRequireDefault(require("./CouponBuyOneGetOneLimit"));

var _CouponDiscountItemWithItemPurchase = _interopRequireDefault(require("./CouponDiscountItemWithItemPurchase"));

var _CouponDiscountItems = _interopRequireDefault(require("./CouponDiscountItems"));

var _CouponFreeItemAndShippingWithSubtotal = _interopRequireDefault(require("./CouponFreeItemAndShippingWithSubtotal"));

var _CouponFreeItemWithItemPurchase = _interopRequireDefault(require("./CouponFreeItemWithItemPurchase"));

var _CouponFreeItemWithSubtotal = _interopRequireDefault(require("./CouponFreeItemWithSubtotal"));

var _CouponFreeItemsWithItemPurchase = _interopRequireDefault(require("./CouponFreeItemsWithItemPurchase"));

var _CouponFreeItemsWithMixMatchPurchase = _interopRequireDefault(require("./CouponFreeItemsWithMixMatchPurchase"));

var _CouponFreeShipping = _interopRequireDefault(require("./CouponFreeShipping"));

var _CouponFreeShippingSpecificItems = _interopRequireDefault(require("./CouponFreeShippingSpecificItems"));

var _CouponFreeShippingWithItemsPurchase = _interopRequireDefault(require("./CouponFreeShippingWithItemsPurchase"));

var _CouponFreeShippingWithSubtotal = _interopRequireDefault(require("./CouponFreeShippingWithSubtotal"));

var _CouponMultipleAmountsOffItems = _interopRequireDefault(require("./CouponMultipleAmountsOffItems"));

var _CouponNoDiscount = _interopRequireDefault(require("./CouponNoDiscount"));

var _CouponPercentOffItemWithItemsQuantityPurchase = _interopRequireDefault(require("./CouponPercentOffItemWithItemsQuantityPurchase"));

var _CouponPercentOffItems = _interopRequireDefault(require("./CouponPercentOffItems"));

var _CouponPercentOffItemsAndFreeShipping = _interopRequireDefault(require("./CouponPercentOffItemsAndFreeShipping"));

var _CouponPercentOffItemsWithItemsPurchase = _interopRequireDefault(require("./CouponPercentOffItemsWithItemsPurchase"));

var _CouponPercentOffMsrpItems = _interopRequireDefault(require("./CouponPercentOffMsrpItems"));

var _CouponPercentOffRetailPriceItems = _interopRequireDefault(require("./CouponPercentOffRetailPriceItems"));

var _CouponPercentOffShipping = _interopRequireDefault(require("./CouponPercentOffShipping"));

var _CouponPercentOffSubtotal = _interopRequireDefault(require("./CouponPercentOffSubtotal"));

var _CouponPercentOffSubtotalAndFreeShipping = _interopRequireDefault(require("./CouponPercentOffSubtotalAndFreeShipping"));

var _CouponPercentOffSubtotalLimit = _interopRequireDefault(require("./CouponPercentOffSubtotalLimit"));

var _CouponPercentOffSubtotalWithItemsPurchase = _interopRequireDefault(require("./CouponPercentOffSubtotalWithItemsPurchase"));

var _CouponPercentOffSubtotalWithSubtotal = _interopRequireDefault(require("./CouponPercentOffSubtotalWithSubtotal"));

var _CouponRestriction = _interopRequireDefault(require("./CouponRestriction"));

var _CouponTieredAmountOffItems = _interopRequireDefault(require("./CouponTieredAmountOffItems"));

var _CouponTieredAmountOffSubtotal = _interopRequireDefault(require("./CouponTieredAmountOffSubtotal"));

var _CouponTieredPercentOffItems = _interopRequireDefault(require("./CouponTieredPercentOffItems"));

var _CouponTieredPercentOffShipping = _interopRequireDefault(require("./CouponTieredPercentOffShipping"));

var _CouponTieredPercentOffSubtotal = _interopRequireDefault(require("./CouponTieredPercentOffSubtotal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Coupon model module.
 * @module com.ultracart.admin.v2.models/Coupon
 * @version 4.0.76-RC
 */
var Coupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Coupon</code>.
   * @alias module:com.ultracart.admin.v2.models/Coupon
   */
  function Coupon() {
    _classCallCheck(this, Coupon);

    Coupon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Coupon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Coupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Coupon} The populated <code>Coupon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Coupon();

        if (data.hasOwnProperty('affiliate_oid')) {
          obj['affiliate_oid'] = _ApiClient["default"].convertToType(data['affiliate_oid'], 'Number');
        }

        if (data.hasOwnProperty('allow_multiple_one_time_codes')) {
          obj['allow_multiple_one_time_codes'] = _ApiClient["default"].convertToType(data['allow_multiple_one_time_codes'], 'Boolean');
        }

        if (data.hasOwnProperty('amount_off_items')) {
          obj['amount_off_items'] = _CouponAmountOffItems["default"].constructFromObject(data['amount_off_items']);
        }

        if (data.hasOwnProperty('amount_off_shipping')) {
          obj['amount_off_shipping'] = _CouponAmountOffShipping["default"].constructFromObject(data['amount_off_shipping']);
        }

        if (data.hasOwnProperty('amount_off_shipping_with_items_purchase')) {
          obj['amount_off_shipping_with_items_purchase'] = _CouponAmountOffShippingWithItemsPurchase["default"].constructFromObject(data['amount_off_shipping_with_items_purchase']);
        }

        if (data.hasOwnProperty('amount_off_subtotal')) {
          obj['amount_off_subtotal'] = _CouponAmountOffSubtotal["default"].constructFromObject(data['amount_off_subtotal']);
        }

        if (data.hasOwnProperty('amount_off_subtotal_and_free_shipping')) {
          obj['amount_off_subtotal_and_free_shipping'] = _CouponAmountOffSubtotalFreeShippingWithPurchase["default"].constructFromObject(data['amount_off_subtotal_and_free_shipping']);
        }

        if (data.hasOwnProperty('amount_off_subtotal_and_shipping')) {
          obj['amount_off_subtotal_and_shipping'] = _CouponAmountOffSubtotalAndShipping["default"].constructFromObject(data['amount_off_subtotal_and_shipping']);
        }

        if (data.hasOwnProperty('amount_off_subtotal_with_block_purchase')) {
          obj['amount_off_subtotal_with_block_purchase'] = _CouponAmountOffSubtotalWithBlockPurchase["default"].constructFromObject(data['amount_off_subtotal_with_block_purchase']);
        }

        if (data.hasOwnProperty('amount_off_subtotal_with_items_purchase')) {
          obj['amount_off_subtotal_with_items_purchase'] = _CouponAmountOffSubtotalWithItemsPurchase["default"].constructFromObject(data['amount_off_subtotal_with_items_purchase']);
        }

        if (data.hasOwnProperty('amount_off_subtotal_with_purchase')) {
          obj['amount_off_subtotal_with_purchase'] = _CouponAmountOffSubtotalWithPurchase["default"].constructFromObject(data['amount_off_subtotal_with_purchase']);
        }

        if (data.hasOwnProperty('amount_shipping_with_subtotal')) {
          obj['amount_shipping_with_subtotal'] = _CouponAmountShippingWithSubtotal["default"].constructFromObject(data['amount_shipping_with_subtotal']);
        }

        if (data.hasOwnProperty('automatically_apply_coupon_codes')) {
          obj['automatically_apply_coupon_codes'] = _CouponAutomaticallyApplyCouponCodes["default"].constructFromObject(data['automatically_apply_coupon_codes']);
        }

        if (data.hasOwnProperty('buy_one_get_one')) {
          obj['buy_one_get_one'] = _CouponBuyOneGetOneLimit["default"].constructFromObject(data['buy_one_get_one']);
        }

        if (data.hasOwnProperty('calculated_description')) {
          obj['calculated_description'] = _ApiClient["default"].convertToType(data['calculated_description'], 'String');
        }

        if (data.hasOwnProperty('can_be_used_with_other_coupons')) {
          obj['can_be_used_with_other_coupons'] = _ApiClient["default"].convertToType(data['can_be_used_with_other_coupons'], 'Boolean');
        }

        if (data.hasOwnProperty('coupon_oid')) {
          obj['coupon_oid'] = _ApiClient["default"].convertToType(data['coupon_oid'], 'Number');
        }

        if (data.hasOwnProperty('coupon_type')) {
          obj['coupon_type'] = _ApiClient["default"].convertToType(data['coupon_type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('discount_item_with_item_purchase')) {
          obj['discount_item_with_item_purchase'] = _CouponDiscountItemWithItemPurchase["default"].constructFromObject(data['discount_item_with_item_purchase']);
        }

        if (data.hasOwnProperty('discount_items')) {
          obj['discount_items'] = _CouponDiscountItems["default"].constructFromObject(data['discount_items']);
        }

        if (data.hasOwnProperty('expiration_dts')) {
          obj['expiration_dts'] = _ApiClient["default"].convertToType(data['expiration_dts'], 'String');
        }

        if (data.hasOwnProperty('free_item_and_shipping_with_subtotal')) {
          obj['free_item_and_shipping_with_subtotal'] = _CouponFreeItemAndShippingWithSubtotal["default"].constructFromObject(data['free_item_and_shipping_with_subtotal']);
        }

        if (data.hasOwnProperty('free_item_with_item_purchase')) {
          obj['free_item_with_item_purchase'] = _CouponFreeItemWithItemPurchase["default"].constructFromObject(data['free_item_with_item_purchase']);
        }

        if (data.hasOwnProperty('free_item_with_subtotal')) {
          obj['free_item_with_subtotal'] = _CouponFreeItemWithSubtotal["default"].constructFromObject(data['free_item_with_subtotal']);
        }

        if (data.hasOwnProperty('free_items_with_item_purchase')) {
          obj['free_items_with_item_purchase'] = _CouponFreeItemsWithItemPurchase["default"].constructFromObject(data['free_items_with_item_purchase']);
        }

        if (data.hasOwnProperty('free_items_with_mixmatch_purchase')) {
          obj['free_items_with_mixmatch_purchase'] = _CouponFreeItemsWithMixMatchPurchase["default"].constructFromObject(data['free_items_with_mixmatch_purchase']);
        }

        if (data.hasOwnProperty('free_shipping')) {
          obj['free_shipping'] = _CouponFreeShipping["default"].constructFromObject(data['free_shipping']);
        }

        if (data.hasOwnProperty('free_shipping_specific_items')) {
          obj['free_shipping_specific_items'] = _CouponFreeShippingSpecificItems["default"].constructFromObject(data['free_shipping_specific_items']);
        }

        if (data.hasOwnProperty('free_shipping_with_items_purchase')) {
          obj['free_shipping_with_items_purchase'] = _CouponFreeShippingWithItemsPurchase["default"].constructFromObject(data['free_shipping_with_items_purchase']);
        }

        if (data.hasOwnProperty('free_shipping_with_subtotal')) {
          obj['free_shipping_with_subtotal'] = _CouponFreeShippingWithSubtotal["default"].constructFromObject(data['free_shipping_with_subtotal']);
        }

        if (data.hasOwnProperty('hide_from_customer')) {
          obj['hide_from_customer'] = _ApiClient["default"].convertToType(data['hide_from_customer'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_code')) {
          obj['merchant_code'] = _ApiClient["default"].convertToType(data['merchant_code'], 'String');
        }

        if (data.hasOwnProperty('merchant_notes')) {
          obj['merchant_notes'] = _ApiClient["default"].convertToType(data['merchant_notes'], 'String');
        }

        if (data.hasOwnProperty('multiple_amounts_off_items')) {
          obj['multiple_amounts_off_items'] = _CouponMultipleAmountsOffItems["default"].constructFromObject(data['multiple_amounts_off_items']);
        }

        if (data.hasOwnProperty('no_discount')) {
          obj['no_discount'] = _CouponNoDiscount["default"].constructFromObject(data['no_discount']);
        }

        if (data.hasOwnProperty('percent_off_item_with_items_quantity_purchase')) {
          obj['percent_off_item_with_items_quantity_purchase'] = _CouponPercentOffItemWithItemsQuantityPurchase["default"].constructFromObject(data['percent_off_item_with_items_quantity_purchase']);
        }

        if (data.hasOwnProperty('percent_off_items')) {
          obj['percent_off_items'] = _CouponPercentOffItems["default"].constructFromObject(data['percent_off_items']);
        }

        if (data.hasOwnProperty('percent_off_items_and_free_shipping')) {
          obj['percent_off_items_and_free_shipping'] = _CouponPercentOffItemsAndFreeShipping["default"].constructFromObject(data['percent_off_items_and_free_shipping']);
        }

        if (data.hasOwnProperty('percent_off_items_with_items_purchase')) {
          obj['percent_off_items_with_items_purchase'] = _CouponPercentOffItemsWithItemsPurchase["default"].constructFromObject(data['percent_off_items_with_items_purchase']);
        }

        if (data.hasOwnProperty('percent_off_msrp_items')) {
          obj['percent_off_msrp_items'] = _CouponPercentOffMsrpItems["default"].constructFromObject(data['percent_off_msrp_items']);
        }

        if (data.hasOwnProperty('percent_off_retail_price_items')) {
          obj['percent_off_retail_price_items'] = _CouponPercentOffRetailPriceItems["default"].constructFromObject(data['percent_off_retail_price_items']);
        }

        if (data.hasOwnProperty('percent_off_shipping')) {
          obj['percent_off_shipping'] = _CouponPercentOffShipping["default"].constructFromObject(data['percent_off_shipping']);
        }

        if (data.hasOwnProperty('percent_off_subtotal')) {
          obj['percent_off_subtotal'] = _CouponPercentOffSubtotal["default"].constructFromObject(data['percent_off_subtotal']);
        }

        if (data.hasOwnProperty('percent_off_subtotal_and_free_shipping')) {
          obj['percent_off_subtotal_and_free_shipping'] = _CouponPercentOffSubtotalAndFreeShipping["default"].constructFromObject(data['percent_off_subtotal_and_free_shipping']);
        }

        if (data.hasOwnProperty('percent_off_subtotal_limit')) {
          obj['percent_off_subtotal_limit'] = _CouponPercentOffSubtotalLimit["default"].constructFromObject(data['percent_off_subtotal_limit']);
        }

        if (data.hasOwnProperty('percent_off_subtotal_with_items_purchase')) {
          obj['percent_off_subtotal_with_items_purchase'] = _CouponPercentOffSubtotalWithItemsPurchase["default"].constructFromObject(data['percent_off_subtotal_with_items_purchase']);
        }

        if (data.hasOwnProperty('percent_off_subtotal_with_subtotal')) {
          obj['percent_off_subtotal_with_subtotal'] = _CouponPercentOffSubtotalWithSubtotal["default"].constructFromObject(data['percent_off_subtotal_with_subtotal']);
        }

        if (data.hasOwnProperty('quickbooks_code')) {
          obj['quickbooks_code'] = _ApiClient["default"].convertToType(data['quickbooks_code'], 'String');
        }

        if (data.hasOwnProperty('restrict_by_postal_codes')) {
          obj['restrict_by_postal_codes'] = _ApiClient["default"].convertToType(data['restrict_by_postal_codes'], ['String']);
        }

        if (data.hasOwnProperty('restrict_by_screen_branding_theme_codes')) {
          obj['restrict_by_screen_branding_theme_codes'] = _ApiClient["default"].convertToType(data['restrict_by_screen_branding_theme_codes'], [_CouponRestriction["default"]]);
        }

        if (data.hasOwnProperty('restrict_by_storefronts')) {
          obj['restrict_by_storefronts'] = _ApiClient["default"].convertToType(data['restrict_by_storefronts'], [_CouponRestriction["default"]]);
        }

        if (data.hasOwnProperty('start_dts')) {
          obj['start_dts'] = _ApiClient["default"].convertToType(data['start_dts'], 'String');
        }

        if (data.hasOwnProperty('super_coupon')) {
          obj['super_coupon'] = _ApiClient["default"].convertToType(data['super_coupon'], 'Boolean');
        }

        if (data.hasOwnProperty('tiered_amount_off_items')) {
          obj['tiered_amount_off_items'] = _CouponTieredAmountOffItems["default"].constructFromObject(data['tiered_amount_off_items']);
        }

        if (data.hasOwnProperty('tiered_amount_off_subtotal')) {
          obj['tiered_amount_off_subtotal'] = _CouponTieredAmountOffSubtotal["default"].constructFromObject(data['tiered_amount_off_subtotal']);
        }

        if (data.hasOwnProperty('tiered_percent_off_items')) {
          obj['tiered_percent_off_items'] = _CouponTieredPercentOffItems["default"].constructFromObject(data['tiered_percent_off_items']);
        }

        if (data.hasOwnProperty('tiered_percent_off_shipping')) {
          obj['tiered_percent_off_shipping'] = _CouponTieredPercentOffShipping["default"].constructFromObject(data['tiered_percent_off_shipping']);
        }

        if (data.hasOwnProperty('tiered_percent_off_subtotal')) {
          obj['tiered_percent_off_subtotal'] = _CouponTieredPercentOffSubtotal["default"].constructFromObject(data['tiered_percent_off_subtotal']);
        }

        if (data.hasOwnProperty('usable_by')) {
          obj['usable_by'] = _ApiClient["default"].convertToType(data['usable_by'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Coupon;
}();
/**
 * Associates an order with an affiliate when this value is set.
 * @member {Number} affiliate_oid
 */


Coupon.prototype['affiliate_oid'] = undefined;
/**
 * True if multiple one time codes for this coupon can be used on a cart at the same time.
 * @member {Boolean} allow_multiple_one_time_codes
 */

Coupon.prototype['allow_multiple_one_time_codes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffItems} amount_off_items
 */

Coupon.prototype['amount_off_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffShipping} amount_off_shipping
 */

Coupon.prototype['amount_off_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} amount_off_shipping_with_items_purchase
 */

Coupon.prototype['amount_off_shipping_with_items_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotal} amount_off_subtotal
 */

Coupon.prototype['amount_off_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} amount_off_subtotal_and_free_shipping
 */

Coupon.prototype['amount_off_subtotal_and_free_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalAndShipping} amount_off_subtotal_and_shipping
 */

Coupon.prototype['amount_off_subtotal_and_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} amount_off_subtotal_with_block_purchase
 */

Coupon.prototype['amount_off_subtotal_with_block_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} amount_off_subtotal_with_items_purchase
 */

Coupon.prototype['amount_off_subtotal_with_items_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase} amount_off_subtotal_with_purchase
 */

Coupon.prototype['amount_off_subtotal_with_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal} amount_shipping_with_subtotal
 */

Coupon.prototype['amount_shipping_with_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes} automatically_apply_coupon_codes
 */

Coupon.prototype['automatically_apply_coupon_codes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} buy_one_get_one
 */

Coupon.prototype['buy_one_get_one'] = undefined;
/**
 * Calculated description displayed to the customer if no description is specified.
 * @member {String} calculated_description
 */

Coupon.prototype['calculated_description'] = undefined;
/**
 * True if this coupon can be used with other coupons in a single order.
 * @member {Boolean} can_be_used_with_other_coupons
 */

Coupon.prototype['can_be_used_with_other_coupons'] = undefined;
/**
 * Coupon oid.
 * @member {Number} coupon_oid
 */

Coupon.prototype['coupon_oid'] = undefined;
/**
 * Coupon type.
 * @member {String} coupon_type
 */

Coupon.prototype['coupon_type'] = undefined;
/**
 * Description of the coupon up to 50 characters.
 * @member {String} description
 */

Coupon.prototype['description'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} discount_item_with_item_purchase
 */

Coupon.prototype['discount_item_with_item_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponDiscountItems} discount_items
 */

Coupon.prototype['discount_items'] = undefined;
/**
 * Date/time when coupon expires
 * @member {String} expiration_dts
 */

Coupon.prototype['expiration_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} free_item_and_shipping_with_subtotal
 */

Coupon.prototype['free_item_and_shipping_with_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} free_item_with_item_purchase
 */

Coupon.prototype['free_item_with_item_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} free_item_with_subtotal
 */

Coupon.prototype['free_item_with_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} free_items_with_item_purchase
 */

Coupon.prototype['free_items_with_item_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase} free_items_with_mixmatch_purchase
 */

Coupon.prototype['free_items_with_mixmatch_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeShipping} free_shipping
 */

Coupon.prototype['free_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems} free_shipping_specific_items
 */

Coupon.prototype['free_shipping_specific_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase} free_shipping_with_items_purchase
 */

Coupon.prototype['free_shipping_with_items_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingWithSubtotal} free_shipping_with_subtotal
 */

Coupon.prototype['free_shipping_with_subtotal'] = undefined;
/**
 * Hide coupon from customer during checkout.  Often used when coupons are automatic discounting mechanisms.
 * @member {Boolean} hide_from_customer
 */

Coupon.prototype['hide_from_customer'] = undefined;
/**
 * Merchant code of coupon up to 20 characters.
 * @member {String} merchant_code
 */

Coupon.prototype['merchant_code'] = undefined;
/**
 * Internal notes about this coupon.  These are not visible to customer.
 * @member {String} merchant_notes
 */

Coupon.prototype['merchant_notes'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} multiple_amounts_off_items
 */

Coupon.prototype['multiple_amounts_off_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponNoDiscount} no_discount
 */

Coupon.prototype['no_discount'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} percent_off_item_with_items_quantity_purchase
 */

Coupon.prototype['percent_off_item_with_items_quantity_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItems} percent_off_items
 */

Coupon.prototype['percent_off_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping} percent_off_items_and_free_shipping
 */

Coupon.prototype['percent_off_items_and_free_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} percent_off_items_with_items_purchase
 */

Coupon.prototype['percent_off_items_with_items_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} percent_off_msrp_items
 */

Coupon.prototype['percent_off_msrp_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} percent_off_retail_price_items
 */

Coupon.prototype['percent_off_retail_price_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffShipping} percent_off_shipping
 */

Coupon.prototype['percent_off_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotal} percent_off_subtotal
 */

Coupon.prototype['percent_off_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping} percent_off_subtotal_and_free_shipping
 */

Coupon.prototype['percent_off_subtotal_and_free_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit} percent_off_subtotal_limit
 */

Coupon.prototype['percent_off_subtotal_limit'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase} percent_off_subtotal_with_items_purchase
 */

Coupon.prototype['percent_off_subtotal_with_items_purchase'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} percent_off_subtotal_with_subtotal
 */

Coupon.prototype['percent_off_subtotal_with_subtotal'] = undefined;
/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */

Coupon.prototype['quickbooks_code'] = undefined;
/**
 * Optional list of postal codes which restrict a coupon to within these postal codes.
 * @member {Array.<String>} restrict_by_postal_codes
 */

Coupon.prototype['restrict_by_postal_codes'] = undefined;
/**
 * Optional list of legacy screen branding theme codes to limit coupon use to only those themes.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponRestriction>} restrict_by_screen_branding_theme_codes
 */

Coupon.prototype['restrict_by_screen_branding_theme_codes'] = undefined;
/**
 * Optional list of storefronts to limit coupon use to only those storefronts.
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponRestriction>} restrict_by_storefronts
 */

Coupon.prototype['restrict_by_storefronts'] = undefined;
/**
 * Date/time when coupon is valid
 * @member {String} start_dts
 */

Coupon.prototype['start_dts'] = undefined;
/**
 * If true, this coupon can be used with ANY other coupon regardless of the other coupons configuration
 * @member {Boolean} super_coupon
 */

Coupon.prototype['super_coupon'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItems} tiered_amount_off_items
 */

Coupon.prototype['tiered_amount_off_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} tiered_amount_off_subtotal
 */

Coupon.prototype['tiered_amount_off_subtotal'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} tiered_percent_off_items
 */

Coupon.prototype['tiered_percent_off_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} tiered_percent_off_shipping
 */

Coupon.prototype['tiered_percent_off_shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal} tiered_percent_off_subtotal
 */

Coupon.prototype['tiered_percent_off_subtotal'] = undefined;
/**
 * Who may use this coupon.
 * @member {String} usable_by
 */

Coupon.prototype['usable_by'] = undefined;
var _default = Coupon;
exports["default"] = _default;