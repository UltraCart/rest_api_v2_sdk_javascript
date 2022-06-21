/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CouponAmountOffItems from './CouponAmountOffItems';
import CouponAmountOffShipping from './CouponAmountOffShipping';
import CouponAmountOffShippingWithItemsPurchase from './CouponAmountOffShippingWithItemsPurchase';
import CouponAmountOffSubtotal from './CouponAmountOffSubtotal';
import CouponAmountOffSubtotalAndShipping from './CouponAmountOffSubtotalAndShipping';
import CouponAmountOffSubtotalFreeShippingWithPurchase from './CouponAmountOffSubtotalFreeShippingWithPurchase';
import CouponAmountOffSubtotalWithBlockPurchase from './CouponAmountOffSubtotalWithBlockPurchase';
import CouponAmountOffSubtotalWithItemsPurchase from './CouponAmountOffSubtotalWithItemsPurchase';
import CouponAmountOffSubtotalWithPurchase from './CouponAmountOffSubtotalWithPurchase';
import CouponAmountShippingWithSubtotal from './CouponAmountShippingWithSubtotal';
import CouponAutomaticallyApplyCouponCodes from './CouponAutomaticallyApplyCouponCodes';
import CouponBuyOneGetOneLimit from './CouponBuyOneGetOneLimit';
import CouponDiscountItemWithItemPurchase from './CouponDiscountItemWithItemPurchase';
import CouponDiscountItems from './CouponDiscountItems';
import CouponFreeItemAndShippingWithSubtotal from './CouponFreeItemAndShippingWithSubtotal';
import CouponFreeItemWithItemPurchase from './CouponFreeItemWithItemPurchase';
import CouponFreeItemWithSubtotal from './CouponFreeItemWithSubtotal';
import CouponFreeItemsWithItemPurchase from './CouponFreeItemsWithItemPurchase';
import CouponFreeItemsWithMixMatchPurchase from './CouponFreeItemsWithMixMatchPurchase';
import CouponFreeShipping from './CouponFreeShipping';
import CouponFreeShippingSpecificItems from './CouponFreeShippingSpecificItems';
import CouponFreeShippingWithItemsPurchase from './CouponFreeShippingWithItemsPurchase';
import CouponFreeShippingWithSubtotal from './CouponFreeShippingWithSubtotal';
import CouponMultipleAmountsOffItems from './CouponMultipleAmountsOffItems';
import CouponPercentOffItemWithItemsQuantityPurchase from './CouponPercentOffItemWithItemsQuantityPurchase';
import CouponPercentOffItems from './CouponPercentOffItems';
import CouponPercentOffItemsAndFreeShipping from './CouponPercentOffItemsAndFreeShipping';
import CouponPercentOffItemsWithItemsPurchase from './CouponPercentOffItemsWithItemsPurchase';
import CouponPercentOffMsrpItems from './CouponPercentOffMsrpItems';
import CouponPercentOffRetailPriceItems from './CouponPercentOffRetailPriceItems';
import CouponPercentOffShipping from './CouponPercentOffShipping';
import CouponPercentOffSubtotal from './CouponPercentOffSubtotal';
import CouponPercentOffSubtotalAndFreeShipping from './CouponPercentOffSubtotalAndFreeShipping';
import CouponPercentOffSubtotalLimit from './CouponPercentOffSubtotalLimit';
import CouponPercentOffSubtotalWithItemsPurchase from './CouponPercentOffSubtotalWithItemsPurchase';
import CouponPercentOffSubtotalWithSubtotal from './CouponPercentOffSubtotalWithSubtotal';
import CouponRestriction from './CouponRestriction';
import CouponTieredAmountOffItems from './CouponTieredAmountOffItems';
import CouponTieredAmountOffSubtotal from './CouponTieredAmountOffSubtotal';
import CouponTieredPercentOffItems from './CouponTieredPercentOffItems';
import CouponTieredPercentOffShipping from './CouponTieredPercentOffShipping';
import CouponTieredPercentOffSubtotal from './CouponTieredPercentOffSubtotal';

/**
 * The Coupon model module.
 * @module com.ultracart.admin.v2.models/Coupon
 * @version 4.0.3
 */
class Coupon {
    /**
     * Constructs a new <code>Coupon</code>.
     * @alias module:com.ultracart.admin.v2.models/Coupon
     */
    constructor() { 
        
        Coupon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Coupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Coupon} The populated <code>Coupon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Coupon();

            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('allow_multiple_one_time_codes')) {
                obj['allow_multiple_one_time_codes'] = ApiClient.convertToType(data['allow_multiple_one_time_codes'], 'Boolean');
            }
            if (data.hasOwnProperty('amount_off_items')) {
                obj['amount_off_items'] = CouponAmountOffItems.constructFromObject(data['amount_off_items']);
            }
            if (data.hasOwnProperty('amount_off_shipping')) {
                obj['amount_off_shipping'] = CouponAmountOffShipping.constructFromObject(data['amount_off_shipping']);
            }
            if (data.hasOwnProperty('amount_off_shipping_with_items_purchase')) {
                obj['amount_off_shipping_with_items_purchase'] = CouponAmountOffShippingWithItemsPurchase.constructFromObject(data['amount_off_shipping_with_items_purchase']);
            }
            if (data.hasOwnProperty('amount_off_subtotal')) {
                obj['amount_off_subtotal'] = CouponAmountOffSubtotal.constructFromObject(data['amount_off_subtotal']);
            }
            if (data.hasOwnProperty('amount_off_subtotal_and_free_shipping')) {
                obj['amount_off_subtotal_and_free_shipping'] = CouponAmountOffSubtotalFreeShippingWithPurchase.constructFromObject(data['amount_off_subtotal_and_free_shipping']);
            }
            if (data.hasOwnProperty('amount_off_subtotal_and_shipping')) {
                obj['amount_off_subtotal_and_shipping'] = CouponAmountOffSubtotalAndShipping.constructFromObject(data['amount_off_subtotal_and_shipping']);
            }
            if (data.hasOwnProperty('amount_off_subtotal_with_block_purchase')) {
                obj['amount_off_subtotal_with_block_purchase'] = CouponAmountOffSubtotalWithBlockPurchase.constructFromObject(data['amount_off_subtotal_with_block_purchase']);
            }
            if (data.hasOwnProperty('amount_off_subtotal_with_items_purchase')) {
                obj['amount_off_subtotal_with_items_purchase'] = CouponAmountOffSubtotalWithItemsPurchase.constructFromObject(data['amount_off_subtotal_with_items_purchase']);
            }
            if (data.hasOwnProperty('amount_off_subtotal_with_purchase')) {
                obj['amount_off_subtotal_with_purchase'] = CouponAmountOffSubtotalWithPurchase.constructFromObject(data['amount_off_subtotal_with_purchase']);
            }
            if (data.hasOwnProperty('amount_shipping_with_subtotal')) {
                obj['amount_shipping_with_subtotal'] = CouponAmountShippingWithSubtotal.constructFromObject(data['amount_shipping_with_subtotal']);
            }
            if (data.hasOwnProperty('automatically_apply_coupon_codes')) {
                obj['automatically_apply_coupon_codes'] = CouponAutomaticallyApplyCouponCodes.constructFromObject(data['automatically_apply_coupon_codes']);
            }
            if (data.hasOwnProperty('buy_one_get_one')) {
                obj['buy_one_get_one'] = CouponBuyOneGetOneLimit.constructFromObject(data['buy_one_get_one']);
            }
            if (data.hasOwnProperty('calculated_description')) {
                obj['calculated_description'] = ApiClient.convertToType(data['calculated_description'], 'String');
            }
            if (data.hasOwnProperty('can_be_used_with_other_coupons')) {
                obj['can_be_used_with_other_coupons'] = ApiClient.convertToType(data['can_be_used_with_other_coupons'], 'Boolean');
            }
            if (data.hasOwnProperty('coupon_oid')) {
                obj['coupon_oid'] = ApiClient.convertToType(data['coupon_oid'], 'Number');
            }
            if (data.hasOwnProperty('coupon_type')) {
                obj['coupon_type'] = ApiClient.convertToType(data['coupon_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_item_with_item_purchase')) {
                obj['discount_item_with_item_purchase'] = CouponDiscountItemWithItemPurchase.constructFromObject(data['discount_item_with_item_purchase']);
            }
            if (data.hasOwnProperty('discount_items')) {
                obj['discount_items'] = CouponDiscountItems.constructFromObject(data['discount_items']);
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('free_item_and_shipping_with_subtotal')) {
                obj['free_item_and_shipping_with_subtotal'] = CouponFreeItemAndShippingWithSubtotal.constructFromObject(data['free_item_and_shipping_with_subtotal']);
            }
            if (data.hasOwnProperty('free_item_with_item_purchase')) {
                obj['free_item_with_item_purchase'] = CouponFreeItemWithItemPurchase.constructFromObject(data['free_item_with_item_purchase']);
            }
            if (data.hasOwnProperty('free_item_with_subtotal')) {
                obj['free_item_with_subtotal'] = CouponFreeItemWithSubtotal.constructFromObject(data['free_item_with_subtotal']);
            }
            if (data.hasOwnProperty('free_items_with_item_purchase')) {
                obj['free_items_with_item_purchase'] = CouponFreeItemsWithItemPurchase.constructFromObject(data['free_items_with_item_purchase']);
            }
            if (data.hasOwnProperty('free_items_with_mixmatch_purchase')) {
                obj['free_items_with_mixmatch_purchase'] = CouponFreeItemsWithMixMatchPurchase.constructFromObject(data['free_items_with_mixmatch_purchase']);
            }
            if (data.hasOwnProperty('free_shipping')) {
                obj['free_shipping'] = CouponFreeShipping.constructFromObject(data['free_shipping']);
            }
            if (data.hasOwnProperty('free_shipping_specific_items')) {
                obj['free_shipping_specific_items'] = CouponFreeShippingSpecificItems.constructFromObject(data['free_shipping_specific_items']);
            }
            if (data.hasOwnProperty('free_shipping_with_items_purchase')) {
                obj['free_shipping_with_items_purchase'] = CouponFreeShippingWithItemsPurchase.constructFromObject(data['free_shipping_with_items_purchase']);
            }
            if (data.hasOwnProperty('free_shipping_with_subtotal')) {
                obj['free_shipping_with_subtotal'] = CouponFreeShippingWithSubtotal.constructFromObject(data['free_shipping_with_subtotal']);
            }
            if (data.hasOwnProperty('hide_from_customer')) {
                obj['hide_from_customer'] = ApiClient.convertToType(data['hide_from_customer'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_code')) {
                obj['merchant_code'] = ApiClient.convertToType(data['merchant_code'], 'String');
            }
            if (data.hasOwnProperty('merchant_notes')) {
                obj['merchant_notes'] = ApiClient.convertToType(data['merchant_notes'], 'String');
            }
            if (data.hasOwnProperty('multiple_amounts_off_items')) {
                obj['multiple_amounts_off_items'] = CouponMultipleAmountsOffItems.constructFromObject(data['multiple_amounts_off_items']);
            }
            if (data.hasOwnProperty('no_discount')) {
                obj['no_discount'] = ApiClient.convertToType(data['no_discount'], Object);
            }
            if (data.hasOwnProperty('percent_off_item_with_items_quantity_purchase')) {
                obj['percent_off_item_with_items_quantity_purchase'] = CouponPercentOffItemWithItemsQuantityPurchase.constructFromObject(data['percent_off_item_with_items_quantity_purchase']);
            }
            if (data.hasOwnProperty('percent_off_items')) {
                obj['percent_off_items'] = CouponPercentOffItems.constructFromObject(data['percent_off_items']);
            }
            if (data.hasOwnProperty('percent_off_items_and_free_shipping')) {
                obj['percent_off_items_and_free_shipping'] = CouponPercentOffItemsAndFreeShipping.constructFromObject(data['percent_off_items_and_free_shipping']);
            }
            if (data.hasOwnProperty('percent_off_items_with_items_purchase')) {
                obj['percent_off_items_with_items_purchase'] = CouponPercentOffItemsWithItemsPurchase.constructFromObject(data['percent_off_items_with_items_purchase']);
            }
            if (data.hasOwnProperty('percent_off_msrp_items')) {
                obj['percent_off_msrp_items'] = CouponPercentOffMsrpItems.constructFromObject(data['percent_off_msrp_items']);
            }
            if (data.hasOwnProperty('percent_off_retail_price_items')) {
                obj['percent_off_retail_price_items'] = CouponPercentOffRetailPriceItems.constructFromObject(data['percent_off_retail_price_items']);
            }
            if (data.hasOwnProperty('percent_off_shipping')) {
                obj['percent_off_shipping'] = CouponPercentOffShipping.constructFromObject(data['percent_off_shipping']);
            }
            if (data.hasOwnProperty('percent_off_subtotal')) {
                obj['percent_off_subtotal'] = CouponPercentOffSubtotal.constructFromObject(data['percent_off_subtotal']);
            }
            if (data.hasOwnProperty('percent_off_subtotal_and_free_shipping')) {
                obj['percent_off_subtotal_and_free_shipping'] = CouponPercentOffSubtotalAndFreeShipping.constructFromObject(data['percent_off_subtotal_and_free_shipping']);
            }
            if (data.hasOwnProperty('percent_off_subtotal_limit')) {
                obj['percent_off_subtotal_limit'] = CouponPercentOffSubtotalLimit.constructFromObject(data['percent_off_subtotal_limit']);
            }
            if (data.hasOwnProperty('percent_off_subtotal_with_items_purchase')) {
                obj['percent_off_subtotal_with_items_purchase'] = CouponPercentOffSubtotalWithItemsPurchase.constructFromObject(data['percent_off_subtotal_with_items_purchase']);
            }
            if (data.hasOwnProperty('percent_off_subtotal_with_subtotal')) {
                obj['percent_off_subtotal_with_subtotal'] = CouponPercentOffSubtotalWithSubtotal.constructFromObject(data['percent_off_subtotal_with_subtotal']);
            }
            if (data.hasOwnProperty('quickbooks_code')) {
                obj['quickbooks_code'] = ApiClient.convertToType(data['quickbooks_code'], 'String');
            }
            if (data.hasOwnProperty('restrict_by_postal_codes')) {
                obj['restrict_by_postal_codes'] = ApiClient.convertToType(data['restrict_by_postal_codes'], ['String']);
            }
            if (data.hasOwnProperty('restrict_by_screen_branding_theme_codes')) {
                obj['restrict_by_screen_branding_theme_codes'] = ApiClient.convertToType(data['restrict_by_screen_branding_theme_codes'], [CouponRestriction]);
            }
            if (data.hasOwnProperty('restrict_by_storefronts')) {
                obj['restrict_by_storefronts'] = ApiClient.convertToType(data['restrict_by_storefronts'], [CouponRestriction]);
            }
            if (data.hasOwnProperty('start_dts')) {
                obj['start_dts'] = ApiClient.convertToType(data['start_dts'], 'String');
            }
            if (data.hasOwnProperty('super_coupon')) {
                obj['super_coupon'] = ApiClient.convertToType(data['super_coupon'], 'Boolean');
            }
            if (data.hasOwnProperty('tiered_amount_off_items')) {
                obj['tiered_amount_off_items'] = CouponTieredAmountOffItems.constructFromObject(data['tiered_amount_off_items']);
            }
            if (data.hasOwnProperty('tiered_amount_off_subtotal')) {
                obj['tiered_amount_off_subtotal'] = CouponTieredAmountOffSubtotal.constructFromObject(data['tiered_amount_off_subtotal']);
            }
            if (data.hasOwnProperty('tiered_percent_off_items')) {
                obj['tiered_percent_off_items'] = CouponTieredPercentOffItems.constructFromObject(data['tiered_percent_off_items']);
            }
            if (data.hasOwnProperty('tiered_percent_off_shipping')) {
                obj['tiered_percent_off_shipping'] = CouponTieredPercentOffShipping.constructFromObject(data['tiered_percent_off_shipping']);
            }
            if (data.hasOwnProperty('tiered_percent_off_subtotal')) {
                obj['tiered_percent_off_subtotal'] = CouponTieredPercentOffSubtotal.constructFromObject(data['tiered_percent_off_subtotal']);
            }
            if (data.hasOwnProperty('usable_by')) {
                obj['usable_by'] = ApiClient.convertToType(data['usable_by'], 'String');
            }
        }
        return obj;
    }


}

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
 * @member {Object} no_discount
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






export default Coupon;

