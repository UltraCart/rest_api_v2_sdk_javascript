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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponType', 'com.ultracart.admin.v2.models/SimpleValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponType'), require('./SimpleValue'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponEditorValues = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponType, root.UltraCartRestApiV2.SimpleValue);
  }
}(this, function(ApiClient, CouponType, SimpleValue) {
  'use strict';

  /**
   * The CouponEditorValues model module.
   * @module com.ultracart.admin.v2.models/CouponEditorValues
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>CouponEditorValues</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponEditorValues
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponEditorValues} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponEditorValues} The populated <code>CouponEditorValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliates'))
        obj.affiliates = ApiClient.convertToType(data['affiliates'], [SimpleValue]);
      if (data.hasOwnProperty('coupon_types'))
        obj.coupon_types = ApiClient.convertToType(data['coupon_types'], ['String']);
      if (data.hasOwnProperty('coupon_types_for_display'))
        obj.coupon_types_for_display = ApiClient.convertToType(data['coupon_types_for_display'], [CouponType]);
      if (data.hasOwnProperty('currency_codes'))
        obj.currency_codes = ApiClient.convertToType(data['currency_codes'], ['String']);
      if (data.hasOwnProperty('deprecated_themes'))
        obj.deprecated_themes = ApiClient.convertToType(data['deprecated_themes'], [SimpleValue]);
      if (data.hasOwnProperty('item_tags'))
        obj.item_tags = ApiClient.convertToType(data['item_tags'], ['String']);
      if (data.hasOwnProperty('mix_and_match_names'))
        obj.mix_and_match_names = ApiClient.convertToType(data['mix_and_match_names'], ['String']);
      if (data.hasOwnProperty('shipping_methods'))
        obj.shipping_methods = ApiClient.convertToType(data['shipping_methods'], ['String']);
      if (data.hasOwnProperty('storefronts'))
        obj.storefronts = ApiClient.convertToType(data['storefronts'], [SimpleValue]);
      if (data.hasOwnProperty('usable_by'))
        obj.usable_by = ApiClient.convertToType(data['usable_by'], [SimpleValue]);
      if (data.hasOwnProperty('valid_with_other_coupons'))
        obj.valid_with_other_coupons = ApiClient.convertToType(data['valid_with_other_coupons'], ['String']);
    }
    return obj;
  }

  /**
   * affiliates
   * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} affiliates
   */
  exports.prototype.affiliates = undefined;

  /**
   * coupon_types
   * @member {Array.<String>} coupon_types
   */
  exports.prototype.coupon_types = undefined;

  /**
   * coupon_types_for_display
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponType>} coupon_types_for_display
   */
  exports.prototype.coupon_types_for_display = undefined;

  /**
   * currency_codes
   * @member {Array.<String>} currency_codes
   */
  exports.prototype.currency_codes = undefined;

  /**
   * deprecated_themes
   * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} deprecated_themes
   */
  exports.prototype.deprecated_themes = undefined;

  /**
   * Item tags
   * @member {Array.<String>} item_tags
   */
  exports.prototype.item_tags = undefined;

  /**
   * mix_and_match_names
   * @member {Array.<String>} mix_and_match_names
   */
  exports.prototype.mix_and_match_names = undefined;

  /**
   * shipping_methods
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype.shipping_methods = undefined;

  /**
   * storefronts
   * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} storefronts
   */
  exports.prototype.storefronts = undefined;

  /**
   * usable_by
   * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} usable_by
   */
  exports.prototype.usable_by = undefined;

  /**
   * valid_with_other_coupons
   * @member {Array.<String>} valid_with_other_coupons
   */
  exports.prototype.valid_with_other_coupons = undefined;

  return exports;

}));
