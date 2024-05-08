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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Coupon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coupon'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponsRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Coupon);
  }
}(this, function(ApiClient, Coupon) {
  'use strict';

  /**
   * The CouponsRequest model module.
   * @module com.ultracart.admin.v2.models/CouponsRequest
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>CouponsRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponsRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponsRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponsRequest} The populated <code>CouponsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('coupons'))
        obj.coupons = ApiClient.convertToType(data['coupons'], [Coupon]);
    }
    return obj;
  }

  /**
   * coupons
   * @member {Array.<module:com.ultracart.admin.v2.models/Coupon>} coupons
   */
  exports.prototype.coupons = undefined;

  return exports;

}));
