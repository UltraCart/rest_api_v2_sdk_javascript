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
import CartAffiliate from './CartAffiliate';
import CartBilling from './CartBilling';
import CartBuysafe from './CartBuysafe';
import CartCheckout from './CartCheckout';
import CartCoupon from './CartCoupon';
import CartCurrencyConversion from './CartCurrencyConversion';
import CartCustomerProfile from './CartCustomerProfile';
import CartGift from './CartGift';
import CartGiftCertificate from './CartGiftCertificate';
import CartItem from './CartItem';
import CartMarketing from './CartMarketing';
import CartPayment from './CartPayment';
import CartProperty from './CartProperty';
import CartSettings from './CartSettings';
import CartShipping from './CartShipping';
import CartSummary from './CartSummary';
import CartTaxes from './CartTaxes';
import CartUpsellAfter from './CartUpsellAfter';

/**
 * The Cart model module.
 * @module com.ultracart.admin.v2.models/Cart
 * @version 4.1.16
 */
class Cart {
    /**
     * Constructs a new <code>Cart</code>.
     * @alias module:com.ultracart.admin.v2.models/Cart
     */
    constructor() { 
        
        Cart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Cart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Cart} The populated <code>Cart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cart();

            if (data.hasOwnProperty('affiliate')) {
                obj['affiliate'] = CartAffiliate.constructFromObject(data['affiliate']);
            }
            if (data.hasOwnProperty('affiliate_network_pixel_oid')) {
                obj['affiliate_network_pixel_oid'] = ApiClient.convertToType(data['affiliate_network_pixel_oid'], 'Number');
            }
            if (data.hasOwnProperty('base_currency_code')) {
                obj['base_currency_code'] = ApiClient.convertToType(data['base_currency_code'], 'String');
            }
            if (data.hasOwnProperty('billing')) {
                obj['billing'] = CartBilling.constructFromObject(data['billing']);
            }
            if (data.hasOwnProperty('buysafe')) {
                obj['buysafe'] = CartBuysafe.constructFromObject(data['buysafe']);
            }
            if (data.hasOwnProperty('cart_id')) {
                obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
            }
            if (data.hasOwnProperty('checkout')) {
                obj['checkout'] = CartCheckout.constructFromObject(data['checkout']);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [CartCoupon]);
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('currency_conversion')) {
                obj['currency_conversion'] = CartCurrencyConversion.constructFromObject(data['currency_conversion']);
            }
            if (data.hasOwnProperty('customer_profile')) {
                obj['customer_profile'] = CartCustomerProfile.constructFromObject(data['customer_profile']);
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
            if (data.hasOwnProperty('gift')) {
                obj['gift'] = CartGift.constructFromObject(data['gift']);
            }
            if (data.hasOwnProperty('gift_certificate')) {
                obj['gift_certificate'] = CartGiftCertificate.constructFromObject(data['gift_certificate']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [CartItem]);
            }
            if (data.hasOwnProperty('language_iso_code')) {
                obj['language_iso_code'] = ApiClient.convertToType(data['language_iso_code'], 'String');
            }
            if (data.hasOwnProperty('logged_in')) {
                obj['logged_in'] = ApiClient.convertToType(data['logged_in'], 'Boolean');
            }
            if (data.hasOwnProperty('marketing')) {
                obj['marketing'] = CartMarketing.constructFromObject(data['marketing']);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = CartPayment.constructFromObject(data['payment']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CartProperty]);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = CartSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = CartShipping.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = CartSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = CartTaxes.constructFromObject(data['taxes']);
            }
            if (data.hasOwnProperty('upsell_after')) {
                obj['upsell_after'] = CartUpsellAfter.constructFromObject(data['upsell_after']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/CartAffiliate} affiliate
 */
Cart.prototype['affiliate'] = undefined;

/**
 * The affiliate network pixel identifier associated with the cart
 * @member {Number} affiliate_network_pixel_oid
 */
Cart.prototype['affiliate_network_pixel_oid'] = undefined;

/**
 * The ISO-4217 three letter base currency code of the account
 * @member {String} base_currency_code
 */
Cart.prototype['base_currency_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartBilling} billing
 */
Cart.prototype['billing'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartBuysafe} buysafe
 */
Cart.prototype['buysafe'] = undefined;

/**
 * Unique identifier for this cart
 * @member {String} cart_id
 */
Cart.prototype['cart_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartCheckout} checkout
 */
Cart.prototype['checkout'] = undefined;

/**
 * Coupons
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCoupon>} coupons
 */
Cart.prototype['coupons'] = undefined;

/**
 * The ISO-4217 three letter currency code the customer is viewing prices in
 * @member {String} currency_code
 */
Cart.prototype['currency_code'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartCurrencyConversion} currency_conversion
 */
Cart.prototype['currency_conversion'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartCustomerProfile} customer_profile
 */
Cart.prototype['customer_profile'] = undefined;

/**
 * The exchange rate if the customer is viewing a different currency than the base
 * @member {Number} exchange_rate
 */
Cart.prototype['exchange_rate'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartGift} gift
 */
Cart.prototype['gift'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartGiftCertificate} gift_certificate
 */
Cart.prototype['gift_certificate'] = undefined;

/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItem>} items
 */
Cart.prototype['items'] = undefined;

/**
 * The ISO-631 three letter code the customer would like to checkout with
 * @member {String} language_iso_code
 */
Cart.prototype['language_iso_code'] = undefined;

/**
 * True if the customer is logged into their profile
 * @member {Boolean} logged_in
 */
Cart.prototype['logged_in'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartMarketing} marketing
 */
Cart.prototype['marketing'] = undefined;

/**
 * Merchant ID this cart is associated with
 * @member {String} merchant_id
 */
Cart.prototype['merchant_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartPayment} payment
 */
Cart.prototype['payment'] = undefined;

/**
 * Properties associated with the cart
 * @member {Array.<module:com.ultracart.admin.v2.models/CartProperty>} properties
 */
Cart.prototype['properties'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettings} settings
 */
Cart.prototype['settings'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartShipping} shipping
 */
Cart.prototype['shipping'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSummary} summary
 */
Cart.prototype['summary'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartTaxes} taxes
 */
Cart.prototype['taxes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartUpsellAfter} upsell_after
 */
Cart.prototype['upsell_after'] = undefined;






export default Cart;

