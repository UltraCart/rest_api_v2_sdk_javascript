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
    root.UltraCartRestApiV2.ItemShippingDistributionCenter = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemShippingDistributionCenter model module.
   * @module com.ultracart.admin.v2.models/ItemShippingDistributionCenter
   * @version 3.1.26
   */

  /**
   * Constructs a new <code>ItemShippingDistributionCenter</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemShippingDistributionCenter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemShippingDistributionCenter} The populated <code>ItemShippingDistributionCenter</code> instance.
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
      if (data.hasOwnProperty('desired_inventory_level'))
        obj.desired_inventory_level = ApiClient.convertToType(data['desired_inventory_level'], 'Number');
      if (data.hasOwnProperty('distribution_center_code'))
        obj.distribution_center_code = ApiClient.convertToType(data['distribution_center_code'], 'String');
      if (data.hasOwnProperty('distribution_center_oid'))
        obj.distribution_center_oid = ApiClient.convertToType(data['distribution_center_oid'], 'Number');
      if (data.hasOwnProperty('eta'))
        obj.eta = ApiClient.convertToType(data['eta'], 'String');
      if (data.hasOwnProperty('handles'))
        obj.handles = ApiClient.convertToType(data['handles'], 'Boolean');
      if (data.hasOwnProperty('inventory_level'))
        obj.inventory_level = ApiClient.convertToType(data['inventory_level'], 'Number');
      if (data.hasOwnProperty('maximum_backorder'))
        obj.maximum_backorder = ApiClient.convertToType(data['maximum_backorder'], 'Number');
      if (data.hasOwnProperty('reorder_inventory_level'))
        obj.reorder_inventory_level = ApiClient.convertToType(data['reorder_inventory_level'], 'Number');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('stock_picking_location'))
        obj.stock_picking_location = ApiClient.convertToType(data['stock_picking_location'], 'String');
    }
    return obj;
  }

  /**
   * Allocated to placed orders
   * @member {Number} allocated_to_placed_orders
   */
  exports.prototype.allocated_to_placed_orders = undefined;

  /**
   * Allocated to shopping carts
   * @member {Number} allocated_to_shopping_carts
   */
  exports.prototype.allocated_to_shopping_carts = undefined;

  /**
   * Available to allocate
   * @member {Number} available_to_allocate
   */
  exports.prototype.available_to_allocate = undefined;

  /**
   * Desired inventory level
   * @member {Number} desired_inventory_level
   */
  exports.prototype.desired_inventory_level = undefined;

  /**
   * Distribution center code
   * @member {String} distribution_center_code
   */
  exports.prototype.distribution_center_code = undefined;

  /**
   * Distribution center object identifier
   * @member {Number} distribution_center_oid
   */
  exports.prototype.distribution_center_oid = undefined;

  /**
   * Estimated time of arrival
   * @member {String} eta
   */
  exports.prototype.eta = undefined;

  /**
   * True if this distribution center handles this item
   * @member {Boolean} handles
   */
  exports.prototype.handles = undefined;

  /**
   * Inventory level
   * @member {Number} inventory_level
   */
  exports.prototype.inventory_level = undefined;

  /**
   * Maximum back-order
   * @member {Number} maximum_backorder
   */
  exports.prototype.maximum_backorder = undefined;

  /**
   * Reorder inventory level (triggers notification)
   * @member {Number} reorder_inventory_level
   */
  exports.prototype.reorder_inventory_level = undefined;

  /**
   * SKU
   * @member {String} sku
   */
  exports.prototype.sku = undefined;

  /**
   * Stock picking location
   * @member {String} stock_picking_location
   */
  exports.prototype.stock_picking_location = undefined;

  return exports;

}));
