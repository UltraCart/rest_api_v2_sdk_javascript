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
    root.UltraCartRestApiV2.ItemFulfillmentAddon = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemFulfillmentAddon model module.
   * @module com.ultracart.admin.v2.models/ItemFulfillmentAddon
   * @version 3.10.98
   */

  /**
   * Constructs a new <code>ItemFulfillmentAddon</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemFulfillmentAddon
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemFulfillmentAddon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} The populated <code>ItemFulfillmentAddon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_item_id'))
        obj.add_item_id = ApiClient.convertToType(data['add_item_id'], 'String');
      if (data.hasOwnProperty('add_item_oid'))
        obj.add_item_oid = ApiClient.convertToType(data['add_item_oid'], 'Number');
      if (data.hasOwnProperty('initial_order_only'))
        obj.initial_order_only = ApiClient.convertToType(data['initial_order_only'], 'Boolean');
      if (data.hasOwnProperty('once_per_order'))
        obj.once_per_order = ApiClient.convertToType(data['once_per_order'], 'Boolean');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * Add Item Id
   * @member {String} add_item_id
   */
  exports.prototype.add_item_id = undefined;

  /**
   * Add Item object identifier
   * @member {Number} add_item_oid
   */
  exports.prototype.add_item_oid = undefined;

  /**
   * Initial Order Only
   * @member {Boolean} initial_order_only
   */
  exports.prototype.initial_order_only = undefined;

  /**
   * Once Per Order
   * @member {Boolean} once_per_order
   */
  exports.prototype.once_per_order = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));
