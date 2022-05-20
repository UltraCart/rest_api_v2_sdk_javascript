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
    root.UltraCartRestApiV2.ItemKitComponent = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemKitComponent model module.
   * @module com.ultracart.admin.v2.models/ItemKitComponent
   * @version 3.10.3
   */

  /**
   * Constructs a new <code>ItemKitComponent</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemKitComponent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemKitComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemKitComponent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemKitComponent} The populated <code>ItemKitComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('component_cost'))
        obj.component_cost = ApiClient.convertToType(data['component_cost'], 'Number');
      if (data.hasOwnProperty('component_description'))
        obj.component_description = ApiClient.convertToType(data['component_description'], 'String');
      if (data.hasOwnProperty('component_merchant_item_id'))
        obj.component_merchant_item_id = ApiClient.convertToType(data['component_merchant_item_id'], 'String');
      if (data.hasOwnProperty('component_merchant_item_oid'))
        obj.component_merchant_item_oid = ApiClient.convertToType(data['component_merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * Component item cost
   * @member {Number} component_cost
   */
  exports.prototype.component_cost = undefined;

  /**
   * Component item description
   * @member {String} component_description
   */
  exports.prototype.component_description = undefined;

  /**
   * Component item ID
   * @member {String} component_merchant_item_id
   */
  exports.prototype.component_merchant_item_id = undefined;

  /**
   * Component item object identifier
   * @member {Number} component_merchant_item_oid
   */
  exports.prototype.component_merchant_item_oid = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));
