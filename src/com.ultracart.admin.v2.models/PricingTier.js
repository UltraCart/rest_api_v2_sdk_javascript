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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PricingTierNotification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PricingTierNotification'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PricingTier = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PricingTierNotification);
  }
}(this, function(ApiClient, PricingTierNotification) {
  'use strict';

  /**
   * The PricingTier model module.
   * @module com.ultracart.admin.v2.models/PricingTier
   * @version 3.10.108
   */

  /**
   * Constructs a new <code>PricingTier</code>.
   * @alias module:com.ultracart.admin.v2.models/PricingTier
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PricingTier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PricingTier} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PricingTier} The populated <code>PricingTier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allow_3rd_party_billing'))
        obj.allow_3rd_party_billing = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
      if (data.hasOwnProperty('allow_cod'))
        obj.allow_cod = ApiClient.convertToType(data['allow_cod'], 'Boolean');
      if (data.hasOwnProperty('allow_purchase_order'))
        obj.allow_purchase_order = ApiClient.convertToType(data['allow_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('allow_quote_request'))
        obj.allow_quote_request = ApiClient.convertToType(data['allow_quote_request'], 'Boolean');
      if (data.hasOwnProperty('approval_notification'))
        obj.approval_notification = PricingTierNotification.constructFromObject(data['approval_notification']);
      if (data.hasOwnProperty('auto_approve_cod'))
        obj.auto_approve_cod = ApiClient.convertToType(data['auto_approve_cod'], 'Boolean');
      if (data.hasOwnProperty('auto_approve_purchase_order'))
        obj.auto_approve_purchase_order = ApiClient.convertToType(data['auto_approve_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('default_on_wholesale_signup'))
        obj.default_on_wholesale_signup = ApiClient.convertToType(data['default_on_wholesale_signup'], 'Boolean');
      if (data.hasOwnProperty('default_percentage_discount'))
        obj.default_percentage_discount = ApiClient.convertToType(data['default_percentage_discount'], 'Number');
      if (data.hasOwnProperty('default_shipping_method_oid'))
        obj.default_shipping_method_oid = ApiClient.convertToType(data['default_shipping_method_oid'], 'Number');
      if (data.hasOwnProperty('default_tier'))
        obj.default_tier = ApiClient.convertToType(data['default_tier'], 'Boolean');
      if (data.hasOwnProperty('display_on_wholesale_signup'))
        obj.display_on_wholesale_signup = ApiClient.convertToType(data['display_on_wholesale_signup'], 'Boolean');
      if (data.hasOwnProperty('exclude_from_free_promotion'))
        obj.exclude_from_free_promotion = ApiClient.convertToType(data['exclude_from_free_promotion'], 'Boolean');
      if (data.hasOwnProperty('exempt_shipping_handling_charge'))
        obj.exempt_shipping_handling_charge = ApiClient.convertToType(data['exempt_shipping_handling_charge'], 'Boolean');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('free_shipping_minimum'))
        obj.free_shipping_minimum = ApiClient.convertToType(data['free_shipping_minimum'], 'Number');
      if (data.hasOwnProperty('maximum_item_count'))
        obj.maximum_item_count = ApiClient.convertToType(data['maximum_item_count'], 'Number');
      if (data.hasOwnProperty('minimum_item_count'))
        obj.minimum_item_count = ApiClient.convertToType(data['minimum_item_count'], 'Number');
      if (data.hasOwnProperty('minimum_subtotal'))
        obj.minimum_subtotal = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('no_coupons'))
        obj.no_coupons = ApiClient.convertToType(data['no_coupons'], 'Boolean');
      if (data.hasOwnProperty('no_free_shipping'))
        obj.no_free_shipping = ApiClient.convertToType(data['no_free_shipping'], 'Boolean');
      if (data.hasOwnProperty('no_realtime_charge'))
        obj.no_realtime_charge = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
      if (data.hasOwnProperty('not_valid_when_coupon_present'))
        obj.not_valid_when_coupon_present = ApiClient.convertToType(data['not_valid_when_coupon_present'], 'Boolean');
      if (data.hasOwnProperty('pricing_tier_oid'))
        obj.pricing_tier_oid = ApiClient.convertToType(data['pricing_tier_oid'], 'Number');
      if (data.hasOwnProperty('realtime_percentage_discount'))
        obj.realtime_percentage_discount = ApiClient.convertToType(data['realtime_percentage_discount'], 'Number');
      if (data.hasOwnProperty('signup_notification'))
        obj.signup_notification = PricingTierNotification.constructFromObject(data['signup_notification']);
      if (data.hasOwnProperty('suppress_buysafe'))
        obj.suppress_buysafe = ApiClient.convertToType(data['suppress_buysafe'], 'Boolean');
      if (data.hasOwnProperty('suppress_mailing_list'))
        obj.suppress_mailing_list = ApiClient.convertToType(data['suppress_mailing_list'], 'Boolean');
      if (data.hasOwnProperty('tax_exempt'))
        obj.tax_exempt = ApiClient.convertToType(data['tax_exempt'], 'Boolean');
      if (data.hasOwnProperty('track_separately'))
        obj.track_separately = ApiClient.convertToType(data['track_separately'], 'Boolean');
    }
    return obj;
  }

  /**
   * Allow 3rd party billing
   * @member {Boolean} allow_3rd_party_billing
   */
  exports.prototype.allow_3rd_party_billing = undefined;

  /**
   * Allow COD
   * @member {Boolean} allow_cod
   */
  exports.prototype.allow_cod = undefined;

  /**
   * Allow purchase order
   * @member {Boolean} allow_purchase_order
   */
  exports.prototype.allow_purchase_order = undefined;

  /**
   * Allow quote request
   * @member {Boolean} allow_quote_request
   */
  exports.prototype.allow_quote_request = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PricingTierNotification} approval_notification
   */
  exports.prototype.approval_notification = undefined;

  /**
   * Auto approve COD
   * @member {Boolean} auto_approve_cod
   */
  exports.prototype.auto_approve_cod = undefined;

  /**
   * Auto approve purchase order
   * @member {Boolean} auto_approve_purchase_order
   */
  exports.prototype.auto_approve_purchase_order = undefined;

  /**
   * Default on wholesale signup
   * @member {Boolean} default_on_wholesale_signup
   */
  exports.prototype.default_on_wholesale_signup = undefined;

  /**
   * Default percentage discount
   * @member {Number} default_percentage_discount
   */
  exports.prototype.default_percentage_discount = undefined;

  /**
   * Default shipping method oid
   * @member {Number} default_shipping_method_oid
   */
  exports.prototype.default_shipping_method_oid = undefined;

  /**
   * Default tier
   * @member {Boolean} default_tier
   */
  exports.prototype.default_tier = undefined;

  /**
   * Display on wholesale signup
   * @member {Boolean} display_on_wholesale_signup
   */
  exports.prototype.display_on_wholesale_signup = undefined;

  /**
   * Exclude from free promotion
   * @member {Boolean} exclude_from_free_promotion
   */
  exports.prototype.exclude_from_free_promotion = undefined;

  /**
   * Exempt shipping handling charge
   * @member {Boolean} exempt_shipping_handling_charge
   */
  exports.prototype.exempt_shipping_handling_charge = undefined;

  /**
   * Free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * Free shipping minimum
   * @member {Number} free_shipping_minimum
   */
  exports.prototype.free_shipping_minimum = undefined;

  /**
   * Maximum item count
   * @member {Number} maximum_item_count
   */
  exports.prototype.maximum_item_count = undefined;

  /**
   * Minimum item count
   * @member {Number} minimum_item_count
   */
  exports.prototype.minimum_item_count = undefined;

  /**
   * Minimum subtotal
   * @member {Number} minimum_subtotal
   */
  exports.prototype.minimum_subtotal = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * No coupons
   * @member {Boolean} no_coupons
   */
  exports.prototype.no_coupons = undefined;

  /**
   * No free shipping
   * @member {Boolean} no_free_shipping
   */
  exports.prototype.no_free_shipping = undefined;

  /**
   * No realtime charge
   * @member {Boolean} no_realtime_charge
   */
  exports.prototype.no_realtime_charge = undefined;

  /**
   * Not valid when coupon present
   * @member {Boolean} not_valid_when_coupon_present
   */
  exports.prototype.not_valid_when_coupon_present = undefined;

  /**
   * Pricing Tier Oid
   * @member {Number} pricing_tier_oid
   */
  exports.prototype.pricing_tier_oid = undefined;

  /**
   * Realtime percentage discount
   * @member {Number} realtime_percentage_discount
   */
  exports.prototype.realtime_percentage_discount = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PricingTierNotification} signup_notification
   */
  exports.prototype.signup_notification = undefined;

  /**
   * Suppress buySAFE (deprecated)
   * @member {Boolean} suppress_buysafe
   */
  exports.prototype.suppress_buysafe = undefined;

  /**
   * Suppress mailing list
   * @member {Boolean} suppress_mailing_list
   */
  exports.prototype.suppress_mailing_list = undefined;

  /**
   * Tax Exempt
   * @member {Boolean} tax_exempt
   */
  exports.prototype.tax_exempt = undefined;

  /**
   * Track separately
   * @member {Boolean} track_separately
   */
  exports.prototype.track_separately = undefined;

  return exports;

}));
