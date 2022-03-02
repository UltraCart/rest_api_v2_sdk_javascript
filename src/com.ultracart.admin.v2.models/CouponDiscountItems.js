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
    root.UltraCartRestApiV2.CouponDiscountItems = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponDiscountItems model module.
   * @module com.ultracart.admin.v2.models/CouponDiscountItems
   * @version 3.8.6
   */

  /**
   * Constructs a new <code>CouponDiscountItems</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDiscountItems
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponDiscountItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponDiscountItems} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponDiscountItems} The populated <code>CouponDiscountItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currency_code = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('discount_price'))
        obj.discount_price = ApiClient.convertToType(data['discount_price'], 'Number');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype.currency_code = undefined;

  /**
   * The price (unit cost) of the discounted item
   * @member {Number} discount_price
   */
  exports.prototype.discount_price = undefined;

  /**
   * A list of items that are eligible for this discount_price.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * The (optional) maximum quantity of discounted items.
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  return exports;

}));
