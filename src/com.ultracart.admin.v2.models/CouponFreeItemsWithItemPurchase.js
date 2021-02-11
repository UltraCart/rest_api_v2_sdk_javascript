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
    root.UltraCartRestApiV2.CouponFreeItemsWithItemPurchase = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponFreeItemsWithItemPurchase model module.
   * @module com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>CouponFreeItemsWithItemPurchase</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponFreeItemsWithItemPurchase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponFreeItemsWithItemPurchase} The populated <code>CouponFreeItemsWithItemPurchase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('free_item'))
        obj.free_item = ApiClient.convertToType(data['free_item'], 'String');
      if (data.hasOwnProperty('free_quantity'))
        obj.free_quantity = ApiClient.convertToType(data['free_quantity'], 'Number');
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('required_purchase_item'))
        obj.required_purchase_item = ApiClient.convertToType(data['required_purchase_item'], 'String');
      if (data.hasOwnProperty('required_purchase_quantity'))
        obj.required_purchase_quantity = ApiClient.convertToType(data['required_purchase_quantity'], 'Number');
    }
    return obj;
  }

  /**
   * The item id of the free item that will be received when the required mix and match group quantity is purchased.
   * @member {String} free_item
   */
  exports.prototype.free_item = undefined;

  /**
   * The quantity of free item that will be received.
   * @member {Number} free_quantity
   */
  exports.prototype.free_quantity = undefined;

  /**
   * The limit of free items that may be received when purchasing multiple items
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Required item that must be purchased for coupon to be valid
   * @member {String} required_purchase_item
   */
  exports.prototype.required_purchase_item = undefined;

  /**
   * Required quantity of mix and match group items that must be purchased for coupon to be valid
   * @member {Number} required_purchase_quantity
   */
  exports.prototype.required_purchase_quantity = undefined;

  return exports;

}));
