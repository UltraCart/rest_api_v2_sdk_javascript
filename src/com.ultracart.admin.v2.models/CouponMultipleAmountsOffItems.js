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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponTierItemDiscount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponTierItemDiscount'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponMultipleAmountsOffItems = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponTierItemDiscount);
  }
}(this, function(ApiClient, CouponTierItemDiscount) {
  'use strict';




  /**
   * The CouponMultipleAmountsOffItems model module.
   * @module com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>CouponMultipleAmountsOffItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CouponMultipleAmountsOffItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponMultipleAmountsOffItems} The populated <code>CouponMultipleAmountsOffItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('discounts')) {
        obj['discounts'] = ApiClient.convertToType(data['discounts'], [CouponTierItemDiscount]);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A list of item discounts.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierItemDiscount>} discounts
   */
  exports.prototype['discounts'] = undefined;
  /**
   * The (optional) maximum quantity of items that may receive a discount.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));

