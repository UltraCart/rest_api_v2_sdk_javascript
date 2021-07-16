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
    root.UltraCartRestApiV2.CustomerOrdersSummary = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerOrdersSummary model module.
   * @module com.ultracart.admin.v2.models/CustomerOrdersSummary
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>CustomerOrdersSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerOrdersSummary
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerOrdersSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} The populated <code>CustomerOrdersSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('first_order_dts'))
        obj.first_order_dts = ApiClient.convertToType(data['first_order_dts'], 'String');
      if (data.hasOwnProperty('last_order_dts'))
        obj.last_order_dts = ApiClient.convertToType(data['last_order_dts'], 'String');
      if (data.hasOwnProperty('order_count'))
        obj.order_count = ApiClient.convertToType(data['order_count'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }

  /**
   * First order date
   * @member {String} first_order_dts
   */
  exports.prototype.first_order_dts = undefined;

  /**
   * Last order date
   * @member {String} last_order_dts
   */
  exports.prototype.last_order_dts = undefined;

  /**
   * Total number of orders
   * @member {Number} order_count
   */
  exports.prototype.order_count = undefined;

  /**
   * Total amount associated with the orders
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  return exports;

}));
