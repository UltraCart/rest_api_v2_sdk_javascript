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
    root.UltraCartRestApiV2.OrderReplacementItem = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderReplacementItem model module.
   * @module com.ultracart.admin.v2.models/OrderReplacementItem
   * @version 3.10.55
   */

  /**
   * Constructs a new <code>OrderReplacementItem</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderReplacementItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderReplacementItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderReplacementItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderReplacementItem} The populated <code>OrderReplacementItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }

  /**
   * Cost to charge the customer if specified.  If not specified then the default item cost is used.
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * Item ID
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;

}));
