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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartAffiliate', 'com.ultracart.admin.v2.models/CartBilling', 'com.ultracart.admin.v2.models/CartBuysafe', 'com.ultracart.admin.v2.models/CartCheckout', 'com.ultracart.admin.v2.models/CartCoupon', 'com.ultracart.admin.v2.models/CartCurrencyConversion', 'com.ultracart.admin.v2.models/CartCustomerProfile', 'com.ultracart.admin.v2.models/CartGift', 'com.ultracart.admin.v2.models/CartGiftCertificate', 'com.ultracart.admin.v2.models/CartItem', 'com.ultracart.admin.v2.models/CartMarketing', 'com.ultracart.admin.v2.models/CartPayment', 'com.ultracart.admin.v2.models/CartProperty', 'com.ultracart.admin.v2.models/CartSettings', 'com.ultracart.admin.v2.models/CartShipping', 'com.ultracart.admin.v2.models/CartSummary', 'com.ultracart.admin.v2.models/CartTaxes', 'com.ultracart.admin.v2.models/CartUpsellAfter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartAffiliate'), require('./CartBilling'), require('./CartBuysafe'), require('./CartCheckout'), require('./CartCoupon'), require('./CartCurrencyConversion'), require('./CartCustomerProfile'), require('./CartGift'), require('./CartGiftCertificate'), require('./CartItem'), require('./CartMarketing'), require('./CartPayment'), require('./CartProperty'), require('./CartSettings'), require('./CartShipping'), require('./CartSummary'), require('./CartTaxes'), require('./CartUpsellAfter'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Cart = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartAffiliate, root.UltraCartRestApiV2.CartBilling, root.UltraCartRestApiV2.CartBuysafe, root.UltraCartRestApiV2.CartCheckout, root.UltraCartRestApiV2.CartCoupon, root.UltraCartRestApiV2.CartCurrencyConversion, root.UltraCartRestApiV2.CartCustomerProfile, root.UltraCartRestApiV2.CartGift, root.UltraCartRestApiV2.CartGiftCertificate, root.UltraCartRestApiV2.CartItem, root.UltraCartRestApiV2.CartMarketing, root.UltraCartRestApiV2.CartPayment, root.UltraCartRestApiV2.CartProperty, root.UltraCartRestApiV2.CartSettings, root.UltraCartRestApiV2.CartShipping, root.UltraCartRestApiV2.CartSummary, root.UltraCartRestApiV2.CartTaxes, root.UltraCartRestApiV2.CartUpsellAfter);
  }
}(this, function(ApiClient, CartAffiliate, CartBilling, CartBuysafe, CartCheckout, CartCoupon, CartCurrencyConversion, CartCustomerProfile, CartGift, CartGiftCertificate, CartItem, CartMarketing, CartPayment, CartProperty, CartSettings, CartShipping, CartSummary, CartTaxes, CartUpsellAfter) {
  'use strict';

  /**
   * The Cart model module.
   * @module com.ultracart.admin.v2.models/Cart
   * @version 3.10.144
   */

  /**
   * Constructs a new <code>Cart</code>.
   * @alias module:com.ultracart.admin.v2.models/Cart
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Cart} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Cart} The populated <code>Cart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate'))
        obj.affiliate = CartAffiliate.constructFromObject(data['affiliate']);
      if (data.hasOwnProperty('affiliate_network_pixel_oid'))
        obj.affiliate_network_pixel_oid = ApiClient.convertToType(data['affiliate_network_pixel_oid'], 'Number');
      if (data.hasOwnProperty('base_currency_code'))
        obj.base_currency_code = ApiClient.convertToType(data['base_currency_code'], 'String');
      if (data.hasOwnProperty('billing'))
        obj.billing = CartBilling.constructFromObject(data['billing']);
      if (data.hasOwnProperty('buysafe'))
        obj.buysafe = CartBuysafe.constructFromObject(data['buysafe']);
      if (data.hasOwnProperty('cart_id'))
        obj.cart_id = ApiClient.convertToType(data['cart_id'], 'String');
      if (data.hasOwnProperty('checkout'))
        obj.checkout = CartCheckout.constructFromObject(data['checkout']);
      if (data.hasOwnProperty('coupons'))
        obj.coupons = ApiClient.convertToType(data['coupons'], [CartCoupon]);
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('currency_conversion'))
        obj.currency_conversion = CartCurrencyConversion.constructFromObject(data['currency_conversion']);
      if (data.hasOwnProperty('customer_profile'))
        obj.customer_profile = CartCustomerProfile.constructFromObject(data['customer_profile']);
      if (data.hasOwnProperty('exchange_rate'))
        obj.exchange_rate = ApiClient.convertToType(data['exchange_rate'], 'Number');
      if (data.hasOwnProperty('gift'))
        obj.gift = CartGift.constructFromObject(data['gift']);
      if (data.hasOwnProperty('gift_certificate'))
        obj.gift_certificate = CartGiftCertificate.constructFromObject(data['gift_certificate']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CartItem]);
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
      if (data.hasOwnProperty('logged_in'))
        obj.logged_in = ApiClient.convertToType(data['logged_in'], 'Boolean');
      if (data.hasOwnProperty('marketing'))
        obj.marketing = CartMarketing.constructFromObject(data['marketing']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('payment'))
        obj.payment = CartPayment.constructFromObject(data['payment']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [CartProperty]);
      if (data.hasOwnProperty('settings'))
        obj.settings = CartSettings.constructFromObject(data['settings']);
      if (data.hasOwnProperty('shipping'))
        obj.shipping = CartShipping.constructFromObject(data['shipping']);
      if (data.hasOwnProperty('summary'))
        obj.summary = CartSummary.constructFromObject(data['summary']);
      if (data.hasOwnProperty('taxes'))
        obj.taxes = CartTaxes.constructFromObject(data['taxes']);
      if (data.hasOwnProperty('upsell_after'))
        obj.upsell_after = CartUpsellAfter.constructFromObject(data['upsell_after']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/CartAffiliate} affiliate
   */
  exports.prototype.affiliate = undefined;

  /**
   * The affiliate network pixel identifier associated with the cart
   * @member {Number} affiliate_network_pixel_oid
   */
  exports.prototype.affiliate_network_pixel_oid = undefined;

  /**
   * The ISO-4217 three letter base currency code of the account
   * @member {String} base_currency_code
   */
  exports.prototype.base_currency_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartBilling} billing
   */
  exports.prototype.billing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartBuysafe} buysafe
   */
  exports.prototype.buysafe = undefined;

  /**
   * Unique identifier for this cart
   * @member {String} cart_id
   */
  exports.prototype.cart_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartCheckout} checkout
   */
  exports.prototype.checkout = undefined;

  /**
   * Coupons
   * @member {Array.<module:com.ultracart.admin.v2.models/CartCoupon>} coupons
   */
  exports.prototype.coupons = undefined;

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartCurrencyConversion} currency_conversion
   */
  exports.prototype.currency_conversion = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartCustomerProfile} customer_profile
   */
  exports.prototype.customer_profile = undefined;

  /**
   * The exchange rate if the customer is viewing a different currency than the base
   * @member {Number} exchange_rate
   */
  exports.prototype.exchange_rate = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartGift} gift
   */
  exports.prototype.gift = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartGiftCertificate} gift_certificate
   */
  exports.prototype.gift_certificate = undefined;

  /**
   * Items
   * @member {Array.<module:com.ultracart.admin.v2.models/CartItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * The ISO-631 three letter code the customer would like to checkout with
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * True if the customer is logged into their profile
   * @member {Boolean} logged_in
   */
  exports.prototype.logged_in = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartMarketing} marketing
   */
  exports.prototype.marketing = undefined;

  /**
   * Merchant ID this cart is associated with
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartPayment} payment
   */
  exports.prototype.payment = undefined;

  /**
   * Properties associated with the cart
   * @member {Array.<module:com.ultracart.admin.v2.models/CartProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSettings} settings
   */
  exports.prototype.settings = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartShipping} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartSummary} summary
   */
  exports.prototype.summary = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartTaxes} taxes
   */
  exports.prototype.taxes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CartUpsellAfter} upsell_after
   */
  exports.prototype.upsell_after = undefined;

  return exports;

}));
