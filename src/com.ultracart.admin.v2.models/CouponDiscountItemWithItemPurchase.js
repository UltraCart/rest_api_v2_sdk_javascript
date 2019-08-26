/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.CouponDiscountItemWithItemPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponDiscountItemWithItemPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
   * @version 2.4.27
   */

  /**
   * Constructs a new <code>CouponDiscountItemWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CouponDiscountItemWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponDiscountItemWithItemPurchase} The populated <code>CouponDiscountItemWithItemPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discount_item')) {
        obj['discount_item'] = ApiClient.convertToType(data['discount_item'], 'String');
      }
      if (data.hasOwnProperty('discount_price')) {
        obj['discount_price'] = ApiClient.convertToType(data['discount_price'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('required_purchase_item')) {
        obj['required_purchase_item'] = ApiClient.convertToType(data['required_purchase_item'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ISO-4217 three letter currency code the customer is viewing prices in
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The item that will be sold at the discount_price when required_purchase_item is purchased.
   * @member {String} discount_item
   */
  exports.prototype['discount_item'] = undefined;
  /**
   * The price (unit cost) of the discounted item
   * @member {Number} discount_price
   */
  exports.prototype['discount_price'] = undefined;
  /**
   * The (optional) maximum quantity of discounted items.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The item that must be purchased for the discount to be applied to the discount item.
   * @member {String} required_purchase_item
   */
  exports.prototype['required_purchase_item'] = undefined;



  return exports;
}));


