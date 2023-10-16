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
    root.UltraCartRestApiV2.CouponFreeItemWithItemPurchaseAndFreeShipping = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CouponFreeItemWithItemPurchaseAndFreeShipping model module.
   * @module com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchaseAndFreeShipping
   * @version 3.10.163
   */

  /**
   * Constructs a new <code>CouponFreeItemWithItemPurchaseAndFreeShipping</code>.
   * @alias module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchaseAndFreeShipping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CouponFreeItemWithItemPurchaseAndFreeShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchaseAndFreeShipping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CouponFreeItemWithItemPurchaseAndFreeShipping} The populated <code>CouponFreeItemWithItemPurchaseAndFreeShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], ['String']);
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('match_required_purchase_item_to_free_item'))
        obj.match_required_purchase_item_to_free_item = ApiClient.convertToType(data['match_required_purchase_item_to_free_item'], 'Boolean');
      if (data.hasOwnProperty('required_purchase_items'))
        obj.required_purchase_items = ApiClient.convertToType(data['required_purchase_items'], ['String']);
    }
    return obj;
  }

  /**
   * A list of free items which will receive a discount if one of the required purchase items is purchased.
   * @member {Array.<String>} items
   */
  exports.prototype.items = undefined;

  /**
   * The (optional) maximum quantity of discounted items.  Free shipping will apply to all units of the free item ids though.
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * If true then the free item is matched 1:1 with the free item in the list.
   * @member {Boolean} match_required_purchase_item_to_free_item
   */
  exports.prototype.match_required_purchase_item_to_free_item = undefined;

  /**
   * Required items (at least one from the list) that must be purchased for coupon to be valid
   * @member {Array.<String>} required_purchase_items
   */
  exports.prototype.required_purchase_items = undefined;

  return exports;

}));