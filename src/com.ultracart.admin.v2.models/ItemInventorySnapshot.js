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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemInventorySnapshotDistributionCenter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemInventorySnapshotDistributionCenter'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemInventorySnapshot = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemInventorySnapshotDistributionCenter);
  }
}(this, function(ApiClient, ItemInventorySnapshotDistributionCenter) {
  'use strict';

  /**
   * The ItemInventorySnapshot model module.
   * @module com.ultracart.admin.v2.models/ItemInventorySnapshot
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ItemInventorySnapshot</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemInventorySnapshot
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemInventorySnapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemInventorySnapshot} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemInventorySnapshot} The populated <code>ItemInventorySnapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allocated_to_placed_orders'))
        obj.allocated_to_placed_orders = ApiClient.convertToType(data['allocated_to_placed_orders'], 'Number');
      if (data.hasOwnProperty('allocated_to_shopping_carts'))
        obj.allocated_to_shopping_carts = ApiClient.convertToType(data['allocated_to_shopping_carts'], 'Number');
      if (data.hasOwnProperty('available_to_allocate'))
        obj.available_to_allocate = ApiClient.convertToType(data['available_to_allocate'], 'Number');
      if (data.hasOwnProperty('distribution_centers'))
        obj.distribution_centers = ApiClient.convertToType(data['distribution_centers'], [ItemInventorySnapshotDistributionCenter]);
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} allocated_to_placed_orders
   */
  exports.prototype.allocated_to_placed_orders = undefined;

  /**
   * @member {Number} allocated_to_shopping_carts
   */
  exports.prototype.allocated_to_shopping_carts = undefined;

  /**
   * @member {Number} available_to_allocate
   */
  exports.prototype.available_to_allocate = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemInventorySnapshotDistributionCenter>} distribution_centers
   */
  exports.prototype.distribution_centers = undefined;

  /**
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));
