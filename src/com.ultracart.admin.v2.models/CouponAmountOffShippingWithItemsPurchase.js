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
    root.UltraCartRestApiV2.CouponAmountOffShippingWithItemsPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponAmountOffShippingWithItemsPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CouponAmountOffShippingWithItemsPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponAmountOffShippingWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponAmountOffShippingWithItemsPurchase} The populated <code>CouponAmountOffShippingWithItemsPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('discount_amount'))
        obj.discount_amount = ApiClient.convertToType(data['discount_amount'], 'Number');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('shipping_methods'))
        obj.shipping_methods = ApiClient.convertToType(data['shipping_methods'], ['String']);
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * The amount of shipping discount
   * @member {Number} discount_amount
   */
  exports.prototype.discount_amount = undefined;

  /**
   * A list of items of which at least one must be purchased for coupon to be valid.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * One or more shipping methods that may receive this discount
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype.shipping_methods = undefined;

  return exports;

}));
