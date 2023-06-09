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
    root.UltraCartRestApiV2.CouponFreeItemAndShippingWithSubtotal = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponFreeItemAndShippingWithSubtotal model module.
   * @module com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>CouponFreeItemAndShippingWithSubtotal</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponFreeItemAndShippingWithSubtotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponFreeItemAndShippingWithSubtotal} The populated <code>CouponFreeItemAndShippingWithSubtotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('shipping_methods'))
        obj.shipping_methods = ApiClient.convertToType(data['shipping_methods'], ['String']);
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
   * A list of items that are eligible for this discount_price.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * The limit of free items that may be received when purchasing multiple items
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * One or more shipping methods that may be free
   * @member {Array.<String>} shipping_methods
   */
  exports.prototype.shipping_methods = undefined;

  /**
   * The amount of subtotal required to receive the discount percent
   * @member {Number} subtotal_amount
   */
  exports.prototype.subtotal_amount = undefined;

  return exports;

}));
