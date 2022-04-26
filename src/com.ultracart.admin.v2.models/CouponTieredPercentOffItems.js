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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponTierQuantityPercent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponTierQuantityPercent'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponTieredPercentOffItems = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponTierQuantityPercent);
  }
}(this, function(ApiClient, CouponTierQuantityPercent) {
  'use strict';

  /**
   * The CouponTieredPercentOffItems model module.
   * @module com.ultracart.admin.v2.models/CouponTieredPercentOffItems
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>CouponTieredPercentOffItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponTieredPercentOffItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffItems} The populated <code>CouponTieredPercentOffItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('tiers'))
        obj.tiers = ApiClient.convertToType(data['tiers'], [CouponTierQuantityPercent]);
    }
    return obj;
  }

  /**
   * A list of items of which at least one must be purchased for coupon to be valid.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * The (optional) maximum quantity of discounted items.
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * A list of discount tiers.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierQuantityPercent>} tiers
   */
  exports.prototype.tiers = undefined;

  return exports;

}));
