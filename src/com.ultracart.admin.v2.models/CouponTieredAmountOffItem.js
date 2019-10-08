/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponTierQuantityAmount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponTierQuantityAmount'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponTieredAmountOffItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponTierQuantityAmount);
  }
}(this, function(ApiClient, CouponTierQuantityAmount) {
  'use strict';




  /**
   * The CouponTieredAmountOffItem model module.
   * @module com.ultracart.admin.v2.models/CouponTieredAmountOffItem
   * @version 2.4.44
   */

  /**
   * Constructs a new <code>CouponTieredAmountOffItem</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredAmountOffItem
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CouponTieredAmountOffItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTieredAmountOffItem} The populated <code>CouponTieredAmountOffItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('item')) {
        obj['item'] = ApiClient.convertToType(data['item'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('tiers')) {
        obj['tiers'] = ApiClient.convertToType(data['tiers'], [CouponTierQuantityAmount]);
      }
    }
    return obj;
  }

  /**
   * The item being discounted by this coupon.
   * @member {String} item
   */
  exports.prototype['item'] = undefined;
  /**
   * The maximum amount of total discount by this coupon.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * A list of discount tiers.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierQuantityAmount>} tiers
   */
  exports.prototype['tiers'] = undefined;



  return exports;
}));


