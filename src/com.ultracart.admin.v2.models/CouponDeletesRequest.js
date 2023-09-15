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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CouponDeletesRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponDeletesRequest model module.
   * @module com.ultracart.admin.v2.models/CouponDeletesRequest
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>CouponDeletesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDeletesRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponDeletesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponDeletesRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponDeletesRequest} The populated <code>CouponDeletesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('coupon_codes'))
        obj.coupon_codes = ApiClient.convertToType(data['coupon_codes'], ['String']);
      if (data.hasOwnProperty('coupon_oids'))
        obj.coupon_oids = ApiClient.convertToType(data['coupon_oids'], ['Number']);
    }
    return obj;
  }

  /**
   * Coupon codes
   * @member {Array.<String>} coupon_codes
   */
  exports.prototype.coupon_codes = undefined;

  /**
   * Coupon oids
   * @member {Array.<Number>} coupon_oids
   */
  exports.prototype.coupon_oids = undefined;

  return exports;

}));
