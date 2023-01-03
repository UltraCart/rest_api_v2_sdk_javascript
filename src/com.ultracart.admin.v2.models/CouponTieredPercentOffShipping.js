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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CouponTierPercent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponTierPercent'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponTieredPercentOffShipping = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CouponTierPercent);
  }
}(this, function(ApiClient, CouponTierPercent) {
  'use strict';

  /**
   * The CouponTieredPercentOffShipping model module.
   * @module com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
   * @version 3.10.88
   */

  /**
   * Constructs a new <code>CouponTieredPercentOffShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponTieredPercentOffShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTieredPercentOffShipping} The populated <code>CouponTieredPercentOffShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('quickbooks_code'))
        obj.quickbooks_code = ApiClient.convertToType(data['quickbooks_code'], 'String');
      if (data.hasOwnProperty('shipping_methods'))
        obj.shipping_methods = ApiClient.convertToType(data['shipping_methods'], ['String']);
      if (data.hasOwnProperty('tiers'))
        obj.tiers = ApiClient.convertToType(data['tiers'], [CouponTierPercent]);
    }
    return obj;
  }

  /**
   * Quickbooks accounting code.
   * @member {String} quickbooks_code
   */
  exports.prototype.quickbooks_code = undefined;

  /**
   * One or more shipping methods that may receive this discount
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype.shipping_methods = undefined;

  /**
   * A list of discount tiers.
   * @member {Array.<module:com.ultracart.admin.v2.models/CouponTierPercent>} tiers
   */
  exports.prototype.tiers = undefined;

  return exports;

}));
