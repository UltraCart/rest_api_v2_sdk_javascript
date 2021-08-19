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
    root.UltraCartRestApiV2.CouponTierAmount = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponTierAmount model module.
   * @module com.ultracart.admin.v2.models/CouponTierAmount
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>CouponTierAmount</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponTierAmount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponTierAmount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponTierAmount} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponTierAmount} The populated <code>CouponTierAmount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('discount_amount'))
        obj.discount_amount = ApiClient.convertToType(data['discount_amount'], 'Number');
      if (data.hasOwnProperty('quickbooks_code'))
        obj.quickbooks_code = ApiClient.convertToType(data['quickbooks_code'], 'String');
      if (data.hasOwnProperty('subtotal_amount'))
        obj.subtotal_amount = ApiClient.convertToType(data['subtotal_amount'], 'Number');
    }
    return obj;
  }

  /**
   * The amount of subtotal discount
   * @member {Number} discount_amount
   */
  exports.prototype.discount_amount = undefined;

  /**
   * Quickbooks accounting code.
   * @member {String} quickbooks_code
   */
  exports.prototype.quickbooks_code = undefined;

  /**
   * The amount of subtotal required to receive the discount amount
   * @member {Number} subtotal_amount
   */
  exports.prototype.subtotal_amount = undefined;

  return exports;

}));
