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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemRestrictionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemRestrictionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemRestriction = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemRestrictionItem);
  }
}(this, function(ApiClient, ItemRestrictionItem) {
  'use strict';

  /**
   * The ItemRestriction model module.
   * @module com.ultracart.admin.v2.models/ItemRestriction
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>ItemRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemRestriction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemRestriction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemRestriction} The populated <code>ItemRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exclude_coupon'))
        obj.exclude_coupon = ApiClient.convertToType(data['exclude_coupon'], 'Boolean');
      if (data.hasOwnProperty('exclude_from_free_promotion'))
        obj.exclude_from_free_promotion = ApiClient.convertToType(data['exclude_from_free_promotion'], 'Boolean');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ItemRestrictionItem]);
      if (data.hasOwnProperty('maximum_quantity'))
        obj.maximum_quantity = ApiClient.convertToType(data['maximum_quantity'], 'Number');
      if (data.hasOwnProperty('minimum_quantity'))
        obj.minimum_quantity = ApiClient.convertToType(data['minimum_quantity'], 'Number');
      if (data.hasOwnProperty('multiple_quantity'))
        obj.multiple_quantity = ApiClient.convertToType(data['multiple_quantity'], 'Number');
      if (data.hasOwnProperty('one_per_customer'))
        obj.one_per_customer = ApiClient.convertToType(data['one_per_customer'], 'Boolean');
      if (data.hasOwnProperty('purchase_separately'))
        obj.purchase_separately = ApiClient.convertToType(data['purchase_separately'], 'Boolean');
    }
    return obj;
  }

  /**
   * Exclude coupons
   * @member {Boolean} exclude_coupon
   */
  exports.prototype.exclude_coupon = undefined;

  /**
   * Exclude from free promotion
   * @member {Boolean} exclude_from_free_promotion
   */
  exports.prototype.exclude_from_free_promotion = undefined;

  /**
   * Items
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemRestrictionItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * Maximum quantity
   * @member {Number} maximum_quantity
   */
  exports.prototype.maximum_quantity = undefined;

  /**
   * Minimum quantity (defaults to 1)
   * @member {Number} minimum_quantity
   */
  exports.prototype.minimum_quantity = undefined;

  /**
   * Multiple of quantity
   * @member {Number} multiple_quantity
   */
  exports.prototype.multiple_quantity = undefined;

  /**
   * One per customer
   * @member {Boolean} one_per_customer
   */
  exports.prototype.one_per_customer = undefined;

  /**
   * Purchase separately
   * @member {Boolean} purchase_separately
   */
  exports.prototype.purchase_separately = undefined;

  return exports;

}));
