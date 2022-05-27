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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemPricingTierDiscount', 'com.ultracart.admin.v2.models/ItemPricingTierLimit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemPricingTierDiscount'), require('./ItemPricingTierLimit'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemPricingTier = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemPricingTierDiscount, root.UltraCartRestApiV2.ItemPricingTierLimit);
  }
}(this, function(ApiClient, ItemPricingTierDiscount, ItemPricingTierLimit) {
  'use strict';

  /**
   * The ItemPricingTier model module.
   * @module com.ultracart.admin.v2.models/ItemPricingTier
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>ItemPricingTier</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemPricingTier
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemPricingTier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemPricingTier} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemPricingTier} The populated <code>ItemPricingTier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('default_tier'))
        obj.default_tier = ApiClient.convertToType(data['default_tier'], 'Boolean');
      if (data.hasOwnProperty('discounts'))
        obj.discounts = ApiClient.convertToType(data['discounts'], [ItemPricingTierDiscount]);
      if (data.hasOwnProperty('limit'))
        obj.limit = ItemPricingTierLimit.constructFromObject(data['limit']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('pricing_tier_oid'))
        obj.pricing_tier_oid = ApiClient.convertToType(data['pricing_tier_oid'], 'Number');
    }
    return obj;
  }

  /**
   * True if this is the default tier
   * @member {Boolean} default_tier
   */
  exports.prototype.default_tier = undefined;

  /**
   * Discounts
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemPricingTierDiscount>} discounts
   */
  exports.prototype.discounts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Pricing tier name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Pricing tier object identifier
   * @member {Number} pricing_tier_oid
   */
  exports.prototype.pricing_tier_oid = undefined;

  return exports;

}));
