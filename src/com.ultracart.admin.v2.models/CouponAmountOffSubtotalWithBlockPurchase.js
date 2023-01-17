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
    root.UltraCartRestApiV2.CouponAmountOffSubtotalWithBlockPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponAmountOffSubtotalWithBlockPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
   * @version 3.10.98
   */

  /**
   * Constructs a new <code>CouponAmountOffSubtotalWithBlockPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponAmountOffSubtotalWithBlockPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponAmountOffSubtotalWithBlockPurchase} The populated <code>CouponAmountOffSubtotalWithBlockPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('discount_amount'))
        obj.discount_amount = ApiClient.convertToType(data['discount_amount'], 'Number');
      if (data.hasOwnProperty('required_purchase_item'))
        obj.required_purchase_item = ApiClient.convertToType(data['required_purchase_item'], 'String');
      if (data.hasOwnProperty('required_purchase_quantity'))
        obj.required_purchase_quantity = ApiClient.convertToType(data['required_purchase_quantity'], 'Number');
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * The amount of subtotal discount
   * @member {Number} discount_amount
   */
  exports.prototype.discount_amount = undefined;

  /**
   * Required item that must be purchased for coupon to be valid
   * @member {String} required_purchase_item
   */
  exports.prototype.required_purchase_item = undefined;

  /**
   * Discount amount is multiplied by the number of blocks.  A block is this many quantity of the required item.
   * @member {Number} required_purchase_quantity
   */
  exports.prototype.required_purchase_quantity = undefined;

  return exports;

}));
