/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponAmountOffItems', 'com.ultracart.admin.v2.models/CouponAmountOffShipping', 'com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotal', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotalAndShipping', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase', 'com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase', 'com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal', 'com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes', 'com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit', 'com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase', 'com.ultracart.admin.v2.models/CouponDiscountItems', 'com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal', 'com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase', 'com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal', 'com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase', 'com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase', 'com.ultracart.admin.v2.models/CouponFreeShipping', 'com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems', 'com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase', 'com.ultracart.admin.v2.models/CouponFreeShippingWithSubtotal', 'com.ultracart.admin.v2.models/CouponMoreLoyaltyCashback', 'com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints', 'com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems', 'com.ultracart.admin.v2.models/CouponNoDiscount', 'com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback', 'com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints', 'com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase', 'com.ultracart.admin.v2.models/CouponPercentOffItems', 'com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping', 'com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase', 'com.ultracart.admin.v2.models/CouponPercentOffMsrpItems', 'com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems', 'com.ultracart.admin.v2.models/CouponPercentOffShipping', 'com.ultracart.admin.v2.models/CouponPercentOffSubtotal', 'com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping', 'com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit', 'com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase', 'com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal', 'com.ultracart.admin.v2.models/CouponRestriction', 'com.ultracart.admin.v2.models/CouponTieredAmountOffItems', 'com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal', 'com.ultracart.admin.v2.models/CouponTieredPercentOffItems', 'com.ultracart.admin.v2.models/CouponTieredPercentOffShipping', 'com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal', 'com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotalBasedOnMSRP'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponAmountOffItems'), require('./CouponAmountOffShipping'), require('./CouponAmountOffShippingWithItemsPurchase'), require('./CouponAmountOffSubtotal'), require('./CouponAmountOffSubtotalAndShipping'), require('./CouponAmountOffSubtotalFreeShippingWithPurchase'), require('./CouponAmountOffSubtotalWithBlockPurchase'), require('./CouponAmountOffSubtotalWithItemsPurchase'), require('./CouponAmountOffSubtotalWithPurchase'), require('./CouponAmountShippingWithSubtotal'), require('./CouponAutomaticallyApplyCouponCodes'), require('./CouponBuyOneGetOneLimit'), require('./CouponDiscountItemWithItemPurchase'), require('./CouponDiscountItems'), require('./CouponFreeItemAndShippingWithSubtotal'), require('./CouponFreeItemWithItemPurchase'), require('./CouponFreeItemWithSubtotal'), require('./CouponFreeItemsWithItemPurchase'), require('./CouponFreeItemsWithMixMatchPurchase'), require('./CouponFreeShipping'), require('./CouponFreeShippingSpecificItems'), require('./CouponFreeShippingWithItemsPurchase'), require('./CouponFreeShippingWithSubtotal'), require('./CouponMoreLoyaltyCashback'), require('./CouponMoreLoyaltyPoints'), require('./CouponMultipleAmountsOffItems'), require('./CouponNoDiscount'), require('./CouponPercentMoreLoyaltyCashback'), require('./CouponPercentMoreLoyaltyPoints'), require('./CouponPercentOffItemWithItemsQuantityPurchase'), require('./CouponPercentOffItems'), require('./CouponPercentOffItemsAndFreeShipping'), require('./CouponPercentOffItemsWithItemsPurchase'), require('./CouponPercentOffMsrpItems'), require('./CouponPercentOffRetailPriceItems'), require('./CouponPercentOffShipping'), require('./CouponPercentOffSubtotal'), require('./CouponPercentOffSubtotalAndFreeShipping'), require('./CouponPercentOffSubtotalLimit'), require('./CouponPercentOffSubtotalWithItemsPurchase'), require('./CouponPercentOffSubtotalWithSubtotal'), require('./CouponRestriction'), require('./CouponTieredAmountOffItems'), require('./CouponTieredAmountOffSubtotal'), require('./CouponTieredPercentOffItems'), require('./CouponTieredPercentOffShipping'), require('./CouponTieredPercentOffSubtotal'), require('./CouponTieredPercentOffSubtotalBasedOnMSRP'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Coupon = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponAmountOffItems, root.UltraCartRestApiV2.CouponAmountOffShipping, root.UltraCartRestApiV2.CouponAmountOffShippingWithItemsPurchase, root.UltraCartRestApiV2.CouponAmountOffSubtotal, root.UltraCartRestApiV2.CouponAmountOffSubtotalAndShipping, root.UltraCartRestApiV2.CouponAmountOffSubtotalFreeShippingWithPurchase, root.UltraCartRestApiV2.CouponAmountOffSubtotalWithBlockPurchase, root.UltraCartRestApiV2.CouponAmountOffSubtotalWithItemsPurchase, root.UltraCartRestApiV2.CouponAmountOffSubtotalWithPurchase, root.UltraCartRestApiV2.CouponAmountShippingWithSubtotal, root.UltraCartRestApiV2.CouponAutomaticallyApplyCouponCodes, root.UltraCartRestApiV2.CouponBuyOneGetOneLimit, root.UltraCartRestApiV2.CouponDiscountItemWithItemPurchase, root.UltraCartRestApiV2.CouponDiscountItems, root.UltraCartRestApiV2.CouponFreeItemAndShippingWithSubtotal, root.UltraCartRestApiV2.CouponFreeItemWithItemPurchase, root.UltraCartRestApiV2.CouponFreeItemWithSubtotal, root.UltraCartRestApiV2.CouponFreeItemsWithItemPurchase, root.UltraCartRestApiV2.CouponFreeItemsWithMixMatchPurchase, root.UltraCartRestApiV2.CouponFreeShipping, root.UltraCartRestApiV2.CouponFreeShippingSpecificItems, root.UltraCartRestApiV2.CouponFreeShippingWithItemsPurchase, root.UltraCartRestApiV2.CouponFreeShippingWithSubtotal, root.UltraCartRestApiV2.CouponMoreLoyaltyCashback, root.UltraCartRestApiV2.CouponMoreLoyaltyPoints, root.UltraCartRestApiV2.CouponMultipleAmountsOffItems, root.UltraCartRestApiV2.CouponNoDiscount, root.UltraCartRestApiV2.CouponPercentMoreLoyaltyCashback, root.UltraCartRestApiV2.CouponPercentMoreLoyaltyPoints, root.UltraCartRestApiV2.CouponPercentOffItemWithItemsQuantityPurchase, root.UltraCartRestApiV2.CouponPercentOffItems, root.UltraCartRestApiV2.CouponPercentOffItemsAndFreeShipping, root.UltraCartRestApiV2.CouponPercentOffItemsWithItemsPurchase, root.UltraCartRestApiV2.CouponPercentOffMsrpItems, root.UltraCartRestApiV2.CouponPercentOffRetailPriceItems, root.UltraCartRestApiV2.CouponPercentOffShipping, root.UltraCartRestApiV2.CouponPercentOffSubtotal, root.UltraCartRestApiV2.CouponPercentOffSubtotalAndFreeShipping, root.UltraCartRestApiV2.CouponPercentOffSubtotalLimit, root.UltraCartRestApiV2.CouponPercentOffSubtotalWithItemsPurchase, root.UltraCartRestApiV2.CouponPercentOffSubtotalWithSubtotal, root.UltraCartRestApiV2.CouponRestriction, root.UltraCartRestApiV2.CouponTieredAmountOffItems, root.UltraCartRestApiV2.CouponTieredAmountOffSubtotal, root.UltraCartRestApiV2.CouponTieredPercentOffItems, root.UltraCartRestApiV2.CouponTieredPercentOffShipping, root.UltraCartRestApiV2.CouponTieredPercentOffSubtotal, root.UltraCartRestApiV2.CouponTieredPercentOffSubtotalBasedOnMSRP);
  }
}(this, function(ApiClient, CouponAmountOffItems, CouponAmountOffShipping, CouponAmountOffShippingWithItemsPurchase, CouponAmountOffSubtotal, CouponAmountOffSubtotalAndShipping, CouponAmountOffSubtotalFreeShippingWithPurchase, CouponAmountOffSubtotalWithBlockPurchase, CouponAmountOffSubtotalWithItemsPurchase, CouponAmountOffSubtotalWithPurchase, CouponAmountShippingWithSubtotal, CouponAutomaticallyApplyCouponCodes, CouponBuyOneGetOneLimit, CouponDiscountItemWithItemPurchase, CouponDiscountItems, CouponFreeItemAndShippingWithSubtotal, CouponFreeItemWithItemPurchase, CouponFreeItemWithSubtotal, CouponFreeItemsWithItemPurchase, CouponFreeItemsWithMixMatchPurchase, CouponFreeShipping, CouponFreeShippingSpecificItems, CouponFreeShippingWithItemsPurchase, CouponFreeShippingWithSubtotal, CouponMoreLoyaltyCashback, CouponMoreLoyaltyPoints, CouponMultipleAmountsOffItems, CouponNoDiscount, CouponPercentMoreLoyaltyCashback, CouponPercentMoreLoyaltyPoints, CouponPercentOffItemWithItemsQuantityPurchase, CouponPercentOffItems, CouponPercentOffItemsAndFreeShipping, CouponPercentOffItemsWithItemsPurchase, CouponPercentOffMsrpItems, CouponPercentOffRetailPriceItems, CouponPercentOffShipping, CouponPercentOffSubtotal, CouponPercentOffSubtotalAndFreeShipping, CouponPercentOffSubtotalLimit, CouponPercentOffSubtotalWithItemsPurchase, CouponPercentOffSubtotalWithSubtotal, CouponRestriction, CouponTieredAmountOffItems, CouponTieredAmountOffSubtotal, CouponTieredPercentOffItems, CouponTieredPercentOffShipping, CouponTieredPercentOffSubtotal, CouponTieredPercentOffSubtotalBasedOnMSRP) {
  'use strict';

  /**
   * The Coupon model module.
   * @module com.ultracart.admin.v2.models/Coupon
   * @version 3.10.140
   */

  /**
   * Constructs a new <code>Coupon</code>.
   * @alias module:com.ultracart.admin.v2.models/Coupon
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Coupon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Coupon} The populated <code>Coupon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('allow_multiple_one_time_codes'))
        obj.allow_multiple_one_time_codes = ApiClient.convertToType(data['allow_multiple_one_time_codes'], 'Boolean');
      if (data.hasOwnProperty('amount_off_items'))
        obj.amount_off_items = CouponAmountOffItems.constructFromObject(data['amount_off_items']);
      if (data.hasOwnProperty('amount_off_shipping'))
        obj.amount_off_shipping = CouponAmountOffShipping.constructFromObject(data['amount_off_shipping']);
      if (data.hasOwnProperty('amount_off_shipping_with_items_purchase'))
        obj.amount_off_shipping_with_items_purchase = CouponAmountOffShippingWithItemsPurchase.constructFromObject(data['amount_off_shipping_with_items_purchase']);
      if (data.hasOwnProperty('amount_off_subtotal'))
        obj.amount_off_subtotal = CouponAmountOffSubtotal.constructFromObject(data['amount_off_subtotal']);
      if (data.hasOwnProperty('amount_off_subtotal_and_free_shipping'))
        obj.amount_off_subtotal_and_free_shipping = CouponAmountOffSubtotalFreeShippingWithPurchase.constructFromObject(data['amount_off_subtotal_and_free_shipping']);
      if (data.hasOwnProperty('amount_off_subtotal_and_shipping'))
        obj.amount_off_subtotal_and_shipping = CouponAmountOffSubtotalAndShipping.constructFromObject(data['amount_off_subtotal_and_shipping']);
      if (data.hasOwnProperty('amount_off_subtotal_with_block_purchase'))
        obj.amount_off_subtotal_with_block_purchase = CouponAmountOffSubtotalWithBlockPurchase.constructFromObject(data['amount_off_subtotal_with_block_purchase']);
      if (data.hasOwnProperty('amount_off_subtotal_with_items_purchase'))
        obj.amount_off_subtotal_with_items_purchase = CouponAmountOffSubtotalWithItemsPurchase.constructFromObject(data['amount_off_subtotal_with_items_purchase']);
      if (data.hasOwnProperty('amount_off_subtotal_with_purchase'))
        obj.amount_off_subtotal_with_purchase = CouponAmountOffSubtotalWithPurchase.constructFromObject(data['amount_off_subtotal_with_purchase']);
      if (data.hasOwnProperty('amount_shipping_with_subtotal'))
        obj.amount_shipping_with_subtotal = CouponAmountShippingWithSubtotal.constructFromObject(data['amount_shipping_with_subtotal']);
      if (data.hasOwnProperty('automatically_apply_coupon_codes'))
        obj.automatically_apply_coupon_codes = CouponAutomaticallyApplyCouponCodes.constructFromObject(data['automatically_apply_coupon_codes']);
      if (data.hasOwnProperty('buy_one_get_one'))
        obj.buy_one_get_one = CouponBuyOneGetOneLimit.constructFromObject(data['buy_one_get_one']);
      if (data.hasOwnProperty('calculated_description'))
        obj.calculated_description = ApiClient.convertToType(data['calculated_description'], 'String');
      if (data.hasOwnProperty('can_be_used_with_other_coupons'))
        obj.can_be_used_with_other_coupons = ApiClient.convertToType(data['can_be_used_with_other_coupons'], 'Boolean');
      if (data.hasOwnProperty('coupon_oid'))
        obj.coupon_oid = ApiClient.convertToType(data['coupon_oid'], 'Number');
      if (data.hasOwnProperty('coupon_type'))
        obj.coupon_type = ApiClient.convertToType(data['coupon_type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('discount_item_with_item_purchase'))
        obj.discount_item_with_item_purchase = CouponDiscountItemWithItemPurchase.constructFromObject(data['discount_item_with_item_purchase']);
      if (data.hasOwnProperty('discount_items'))
        obj.discount_items = CouponDiscountItems.constructFromObject(data['discount_items']);
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('free_item_and_shipping_with_subtotal'))
        obj.free_item_and_shipping_with_subtotal = CouponFreeItemAndShippingWithSubtotal.constructFromObject(data['free_item_and_shipping_with_subtotal']);
      if (data.hasOwnProperty('free_item_with_item_purchase'))
        obj.free_item_with_item_purchase = CouponFreeItemWithItemPurchase.constructFromObject(data['free_item_with_item_purchase']);
      if (data.hasOwnProperty('free_item_with_subtotal'))
        obj.free_item_with_subtotal = CouponFreeItemWithSubtotal.constructFromObject(data['free_item_with_subtotal']);
      if (data.hasOwnProperty('free_items_with_item_purchase'))
        obj.free_items_with_item_purchase = CouponFreeItemsWithItemPurchase.constructFromObject(data['free_items_with_item_purchase']);
      if (data.hasOwnProperty('free_items_with_mixmatch_purchase'))
        obj.free_items_with_mixmatch_purchase = CouponFreeItemsWithMixMatchPurchase.constructFromObject(data['free_items_with_mixmatch_purchase']);
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = CouponFreeShipping.constructFromObject(data['free_shipping']);
      if (data.hasOwnProperty('free_shipping_specific_items'))
        obj.free_shipping_specific_items = CouponFreeShippingSpecificItems.constructFromObject(data['free_shipping_specific_items']);
      if (data.hasOwnProperty('free_shipping_with_items_purchase'))
        obj.free_shipping_with_items_purchase = CouponFreeShippingWithItemsPurchase.constructFromObject(data['free_shipping_with_items_purchase']);
      if (data.hasOwnProperty('free_shipping_with_subtotal'))
        obj.free_shipping_with_subtotal = CouponFreeShippingWithSubtotal.constructFromObject(data['free_shipping_with_subtotal']);
      if (data.hasOwnProperty('hide_from_customer'))
        obj.hide_from_customer = ApiClient.convertToType(data['hide_from_customer'], 'Boolean');
      if (data.hasOwnProperty('merchant_code'))
        obj.merchant_code = ApiClient.convertToType(data['merchant_code'], 'String');
      if (data.hasOwnProperty('merchant_notes'))
        obj.merchant_notes = ApiClient.convertToType(data['merchant_notes'], 'String');
      if (data.hasOwnProperty('more_loyalty_cashback'))
        obj.more_loyalty_cashback = CouponMoreLoyaltyCashback.constructFromObject(data['more_loyalty_cashback']);
      if (data.hasOwnProperty('more_loyalty_points'))
        obj.more_loyalty_points = CouponMoreLoyaltyPoints.constructFromObject(data['more_loyalty_points']);
      if (data.hasOwnProperty('multiple_amounts_off_items'))
        obj.multiple_amounts_off_items = CouponMultipleAmountsOffItems.constructFromObject(data['multiple_amounts_off_items']);
      if (data.hasOwnProperty('no_discount'))
        obj.no_discount = CouponNoDiscount.constructFromObject(data['no_discount']);
      if (data.hasOwnProperty('percent_more_loyalty_cashback'))
        obj.percent_more_loyalty_cashback = CouponPercentMoreLoyaltyCashback.constructFromObject(data['percent_more_loyalty_cashback']);
      if (data.hasOwnProperty('percent_more_loyalty_points'))
        obj.percent_more_loyalty_points = CouponPercentMoreLoyaltyPoints.constructFromObject(data['percent_more_loyalty_points']);
      if (data.hasOwnProperty('percent_off_item_with_items_quantity_purchase'))
        obj.percent_off_item_with_items_quantity_purchase = CouponPercentOffItemWithItemsQuantityPurchase.constructFromObject(data['percent_off_item_with_items_quantity_purchase']);
      if (data.hasOwnProperty('percent_off_items'))
        obj.percent_off_items = CouponPercentOffItems.constructFromObject(data['percent_off_items']);
      if (data.hasOwnProperty('percent_off_items_and_free_shipping'))
        obj.percent_off_items_and_free_shipping = CouponPercentOffItemsAndFreeShipping.constructFromObject(data['percent_off_items_and_free_shipping']);
      if (data.hasOwnProperty('percent_off_items_with_items_purchase'))
        obj.percent_off_items_with_items_purchase = CouponPercentOffItemsWithItemsPurchase.constructFromObject(data['percent_off_items_with_items_purchase']);
      if (data.hasOwnProperty('percent_off_msrp_items'))
        obj.percent_off_msrp_items = CouponPercentOffMsrpItems.constructFromObject(data['percent_off_msrp_items']);
      if (data.hasOwnProperty('percent_off_retail_price_items'))
        obj.percent_off_retail_price_items = CouponPercentOffRetailPriceItems.constructFromObject(data['percent_off_retail_price_items']);
      if (data.hasOwnProperty('percent_off_shipping'))
        obj.percent_off_shipping = CouponPercentOffShipping.constructFromObject(data['percent_off_shipping']);
      if (data.hasOwnProperty('percent_off_subtotal'))
        obj.percent_off_subtotal = CouponPercentOffSubtotal.constructFromObject(data['percent_off_subtotal']);
      if (data.hasOwnProperty('percent_off_subtotal_and_free_shipping'))
        obj.percent_off_subtotal_and_free_shipping = CouponPercentOffSubtotalAndFreeShipping.constructFromObject(data['percent_off_subtotal_and_free_shipping']);
      if (data.hasOwnProperty('percent_off_subtotal_limit'))
        obj.percent_off_subtotal_limit = CouponPercentOffSubtotalLimit.constructFromObject(data['percent_off_subtotal_limit']);
      if (data.hasOwnProperty('percent_off_subtotal_with_items_purchase'))
        obj.percent_off_subtotal_with_items_purchase = CouponPercentOffSubtotalWithItemsPurchase.constructFromObject(data['percent_off_subtotal_with_items_purchase']);
      if (data.hasOwnProperty('percent_off_subtotal_with_subtotal'))
        obj.percent_off_subtotal_with_subtotal = CouponPercentOffSubtotalWithSubtotal.constructFromObject(data['percent_off_subtotal_with_subtotal']);
      if (data.hasOwnProperty('quickbooks_code'))
        obj.quickbooks_code = ApiClient.convertToType(data['quickbooks_code'], 'String');
      if (data.hasOwnProperty('restrict_by_postal_codes'))
        obj.restrict_by_postal_codes = ApiClient.convertToType(data['restrict_by_postal_codes'], ['String']);
      if (data.hasOwnProperty('restrict_by_screen_branding_theme_codes'))
        obj.restrict_by_screen_branding_theme_codes = ApiClient.convertToType(data['restrict_by_screen_branding_theme_codes'], [CouponRestriction]);
      if (data.hasOwnProperty('restrict_by_storefronts'))
        obj.restrict_by_storefronts = ApiClient.convertToType(data['restrict_by_storefronts'], [CouponRestriction]);
      if (data.hasOwnProperty('skip_on_rebill'))
        obj.skip_on_rebill = ApiClient.convertToType(data['skip_on_rebill'], 'Boolean');
      if (data.hasOwnProperty('start_dts'))
        obj.start_dts = ApiClient.convertToType(data['start_dts'], 'String');
      if (data.hasOwnProperty('super_coupon'))
        obj.super_coupon = ApiClient.convertToType(data['super_coupon'], 'Boolean');
      if (data.hasOwnProperty('tiered_amount_off_items'))
        obj.tiered_amount_off_items = CouponTieredAmountOffItems.constructFromObject(data['tiered_amount_off_items']);
      if (data.hasOwnProperty('tiered_amount_off_subtotal'))
        obj.tiered_amount_off_subtotal = CouponTieredAmountOffSubtotal.constructFromObject(data['tiered_amount_off_subtotal']);
      if (data.hasOwnProperty('tiered_percent_off_items'))
        obj.tiered_percent_off_items = CouponTieredPercentOffItems.constructFromObject(data['tiered_percent_off_items']);
      if (data.hasOwnProperty('tiered_percent_off_shipping'))
        obj.tiered_percent_off_shipping = CouponTieredPercentOffShipping.constructFromObject(data['tiered_percent_off_shipping']);
      if (data.hasOwnProperty('tiered_percent_off_subtotal'))
        obj.tiered_percent_off_subtotal = CouponTieredPercentOffSubtotal.constructFromObject(data['tiered_percent_off_subtotal']);
      if (data.hasOwnProperty('tiered_percent_off_subtotal_based_on_msrp'))
        obj.tiered_percent_off_subtotal_based_on_msrp = CouponTieredPercentOffSubtotalBasedOnMSRP.constructFromObject(data['tiered_percent_off_subtotal_based_on_msrp']);
      if (data.hasOwnProperty('usable_by'))
        obj.usable_by = ApiClient.convertToType(data['usable_by'], 'String');
    }
    return obj;
  }

  /**
   * Associates an order with an affiliate when this value is set.
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * True if multiple one time codes for this coupon can be used on a cart at the same time.
   * @member {Boolean} allow_multiple_one_time_codes
   */
  exports.prototype.allow_multiple_one_time_codes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffItems} amount_off_items
   */
  exports.prototype.amount_off_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffShipping} amount_off_shipping
   */
  exports.prototype.amount_off_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} amount_off_shipping_with_items_purchase
   */
  exports.prototype.amount_off_shipping_with_items_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotal} amount_off_subtotal
   */
  exports.prototype.amount_off_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalFreeShippingWithPurchase} amount_off_subtotal_and_free_shipping
   */
  exports.prototype.amount_off_subtotal_and_free_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalAndShipping} amount_off_subtotal_and_shipping
   */
  exports.prototype.amount_off_subtotal_and_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} amount_off_subtotal_with_block_purchase
   */
  exports.prototype.amount_off_subtotal_with_block_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithItemsPurchase} amount_off_subtotal_with_items_purchase
   */
  exports.prototype.amount_off_subtotal_with_items_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithPurchase} amount_off_subtotal_with_purchase
   */
  exports.prototype.amount_off_subtotal_with_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAmountShippingWithSubtotal} amount_shipping_with_subtotal
   */
  exports.prototype.amount_shipping_with_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponAutomaticallyApplyCouponCodes} automatically_apply_coupon_codes
   */
  exports.prototype.automatically_apply_coupon_codes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} buy_one_get_one
   */
  exports.prototype.buy_one_get_one = undefined;

  /**
   * Calculated description displayed to the customer if no description is specified.
   * @member {String} calculated_description
   */
  exports.prototype.calculated_description = undefined;

  /**
   * True if this coupon can be used with other coupons in a single order.
   * @member {Boolean} can_be_used_with_other_coupons
   */
  exports.prototype.can_be_used_with_other_coupons = undefined;

  /**
   * Coupon oid.
   * @member {Number} coupon_oid
   */
  exports.prototype.coupon_oid = undefined;

  /**
   * Coupon type.
   * @member {String} coupon_type
   */
  exports.prototype.coupon_type = undefined;

  /**
   * Description of the coupon up to 50 characters.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} discount_item_with_item_purchase
   */
  exports.prototype.discount_item_with_item_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponDiscountItems} discount_items
   */
  exports.prototype.discount_items = undefined;

  /**
   * Date/time when coupon expires
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} free_item_and_shipping_with_subtotal
   */
  exports.prototype.free_item_and_shipping_with_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchase} free_item_with_item_purchase
   */
  exports.prototype.free_item_with_item_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeItemWithSubtotal} free_item_with_subtotal
   */
  exports.prototype.free_item_with_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} free_items_with_item_purchase
   */
  exports.prototype.free_items_with_item_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeItemsWithMixMatchPurchase} free_items_with_mixmatch_purchase
   */
  exports.prototype.free_items_with_mixmatch_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeShipping} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems} free_shipping_specific_items
   */
  exports.prototype.free_shipping_specific_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingWithItemsPurchase} free_shipping_with_items_purchase
   */
  exports.prototype.free_shipping_with_items_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponFreeShippingWithSubtotal} free_shipping_with_subtotal
   */
  exports.prototype.free_shipping_with_subtotal = undefined;

  /**
   * Hide coupon from customer during checkout.  Often used when coupons are automatic discounting mechanisms.
   * @member {Boolean} hide_from_customer
   */
  exports.prototype.hide_from_customer = undefined;

  /**
   * Merchant code of coupon up to 20 characters.
   * @member {String} merchant_code
   */
  exports.prototype.merchant_code = undefined;

  /**
   * Internal notes about this coupon.  These are not visible to customer.
   * @member {String} merchant_notes
   */
  exports.prototype.merchant_notes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyCashback} more_loyalty_cashback
   */
  exports.prototype.more_loyalty_cashback = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints} more_loyalty_points
   */
  exports.prototype.more_loyalty_points = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} multiple_amounts_off_items
   */
  exports.prototype.multiple_amounts_off_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponNoDiscount} no_discount
   */
  exports.prototype.no_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyCashback} percent_more_loyalty_cashback
   */
  exports.prototype.percent_more_loyalty_cashback = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints} percent_more_loyalty_points
   */
  exports.prototype.percent_more_loyalty_points = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemWithItemsQuantityPurchase} percent_off_item_with_items_quantity_purchase
   */
  exports.prototype.percent_off_item_with_items_quantity_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItems} percent_off_items
   */
  exports.prototype.percent_off_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemsAndFreeShipping} percent_off_items_and_free_shipping
   */
  exports.prototype.percent_off_items_and_free_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffItemsWithItemsPurchase} percent_off_items_with_items_purchase
   */
  exports.prototype.percent_off_items_with_items_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} percent_off_msrp_items
   */
  exports.prototype.percent_off_msrp_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffRetailPriceItems} percent_off_retail_price_items
   */
  exports.prototype.percent_off_retail_price_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffShipping} percent_off_shipping
   */
  exports.prototype.percent_off_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotal} percent_off_subtotal
   */
  exports.prototype.percent_off_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping} percent_off_subtotal_and_free_shipping
   */
  exports.prototype.percent_off_subtotal_and_free_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalLimit} percent_off_subtotal_limit
   */
  exports.prototype.percent_off_subtotal_limit = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase} percent_off_subtotal_with_items_purchase
   */
  exports.prototype.percent_off_subtotal_with_items_purchase = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} percent_off_subtotal_with_subtotal
   */
  exports.prototype.percent_off_subtotal_with_subtotal = undefined;

  /**
   * Quickbooks accounting code.
   * @member {String} quickbooks_code
   */
  exports.prototype.quickbooks_code = undefined;

  /**
   * Optional list of postal codes which restrict a coupon to within these postal codes.
   * @member {Array.<String>} restrict_by_postal_codes
   */
  exports.prototype.restrict_by_postal_codes = undefined;

  /**
   * Optional list of legacy screen branding theme codes to limit coupon use to only those themes.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponRestriction>} restrict_by_screen_branding_theme_codes
   */
  exports.prototype.restrict_by_screen_branding_theme_codes = undefined;

  /**
   * Optional list of storefronts to limit coupon use to only those storefronts.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponRestriction>} restrict_by_storefronts
   */
  exports.prototype.restrict_by_storefronts = undefined;

  /**
   * Skip this coupon when it is on a rebill of an auto order.
   * @member {Boolean} skip_on_rebill
   */
  exports.prototype.skip_on_rebill = undefined;

  /**
   * Date/time when coupon is valid
   * @member {String} start_dts
   */
  exports.prototype.start_dts = undefined;

  /**
   * If true, this coupon can be used with ANY other coupon regardless of the other coupons configuration
   * @member {Boolean} super_coupon
   */
  exports.prototype.super_coupon = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItems} tiered_amount_off_items
   */
  exports.prototype.tiered_amount_off_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} tiered_amount_off_subtotal
   */
  exports.prototype.tiered_amount_off_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} tiered_percent_off_items
   */
  exports.prototype.tiered_percent_off_items = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} tiered_percent_off_shipping
   */
  exports.prototype.tiered_percent_off_shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotal} tiered_percent_off_subtotal
   */
  exports.prototype.tiered_percent_off_subtotal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CouponTieredPercentOffSubtotalBasedOnMSRP} tiered_percent_off_subtotal_based_on_msrp
   */
  exports.prototype.tiered_percent_off_subtotal_based_on_msrp = undefined;

  /**
   * Who may use this coupon.
   * @member {String} usable_by
   */
  exports.prototype.usable_by = undefined;

  return exports;

}));
