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
    root.UltraCartRestApiV2.CouponPercentOffSubtotalWithSubtotal = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponPercentOffSubtotalWithSubtotal model module.
   * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>CouponPercentOffSubtotalWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponPercentOffSubtotalWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithSubtotal} The populated <code>CouponPercentOffSubtotalWithSubtotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('discount_percent'))
        obj.discount_percent = ApiClient.convertToType(data['discount_percent'], 'Number');
      if (data.hasOwnProperty('subtotal_amount'))
        obj.subtotal_amount = ApiClient.convertToType(data['subtotal_amount'], 'Number');
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * The percentage of subtotal discount
   * @member {Number} discount_percent
   */
  exports.prototype.discount_percent = undefined;

  /**
   * The amount of subtotal required to receive the discount percent
   * @member {Number} subtotal_amount
   */
  exports.prototype.subtotal_amount = undefined;

  return exports;

}));
