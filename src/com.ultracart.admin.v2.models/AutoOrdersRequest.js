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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoOrdersRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrder);
  }
}(this, function(ApiClient, AutoOrder) {
  'use strict';

  /**
   * The AutoOrdersRequest model module.
   * @module com.ultracart.admin.v2.models/AutoOrdersRequest
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>AutoOrdersRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrdersRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrdersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrdersRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrdersRequest} The populated <code>AutoOrdersRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('autoOrders'))
        obj.autoOrders = ApiClient.convertToType(data['autoOrders'], [AutoOrder]);
    }
    return obj;
  }

  /**
   * auto_orders
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} autoOrders
   */
  exports.prototype.autoOrders = undefined;

  return exports;

}));
