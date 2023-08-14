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
    root.UltraCartRestApiV2.CouponAutoApplyCondition = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponAutoApplyCondition model module.
   * @module com.ultracart.admin.v2.models/CouponAutoApplyCondition
   * @version 3.10.154
   */

  /**
   * Constructs a new <code>CouponAutoApplyCondition</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAutoApplyCondition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponAutoApplyCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponAutoApplyCondition} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponAutoApplyCondition} The populated <code>CouponAutoApplyCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('coupon_code'))
        obj.coupon_code = ApiClient.convertToType(data['coupon_code'], 'String');
      if (data.hasOwnProperty('minimum_subtotal'))
        obj.minimum_subtotal = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
      if (data.hasOwnProperty('required_item_id'))
        obj.required_item_id = ApiClient.convertToType(data['required_item_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} coupon_code
   */
  exports.prototype.coupon_code = undefined;

  /**
   * The minimum subtotal that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
   * @member {Number} minimum_subtotal
   */
  exports.prototype.minimum_subtotal = undefined;

  /**
   * The item that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
   * @member {String} required_item_id
   */
  exports.prototype.required_item_id = undefined;

  return exports;

}));
