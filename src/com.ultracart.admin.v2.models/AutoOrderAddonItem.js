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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrderAddonItemOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoOrderAddonItemOption'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoOrderAddonItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrderAddonItemOption);
  }
}(this, function(ApiClient, AutoOrderAddonItemOption) {
  'use strict';

  /**
   * The AutoOrderAddonItem model module.
   * @module com.ultracart.admin.v2.models/AutoOrderAddonItem
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>AutoOrderAddonItem</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderAddonItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrderAddonItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} The populated <code>AutoOrderAddonItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('next_x_orders'))
        obj.next_x_orders = ApiClient.convertToType(data['next_x_orders'], 'Number');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [AutoOrderAddonItemOption]);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * @member {Number} next_x_orders
   */
  exports.prototype.next_x_orders = undefined;

  /**
   * Options associated with this item
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderAddonItemOption>} options
   */
  exports.prototype.options = undefined;

  /**
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));
