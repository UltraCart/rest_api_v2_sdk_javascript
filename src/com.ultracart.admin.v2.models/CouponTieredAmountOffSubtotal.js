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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponTierAmount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponTierAmount'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponTieredAmountOffSubtotal = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponTierAmount);
  }
}(this, function(ApiClient, CouponTierAmount) {
  'use strict';

  /**
   * The CouponTieredAmountOffSubtotal model module.
   * @module com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>CouponTieredAmountOffSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponTieredAmountOffSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTieredAmountOffSubtotal} The populated <code>CouponTieredAmountOffSubtotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('tiers'))
        obj.tiers = ApiClient.convertToType(data['tiers'], [CouponTierAmount]);
    }
    return obj;
  }

  /**
   * An optional list of items of which a quantity of one or many must be purchased for coupon to be valid.  If empty, all items apply toward subtotal amount.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * A list of discount tiers.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierAmount>} tiers
   */
  exports.prototype.tiers = undefined;

  return exports;

}));
