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
    root.UltraCartRestApiV2.OrderItemEdiLot = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderItemEdiLot model module.
   * @module com.ultracart.admin.v2.models/OrderItemEdiLot
   * @version 3.10.155
   */

  /**
   * Constructs a new <code>OrderItemEdiLot</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemEdiLot
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderItemEdiLot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderItemEdiLot} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderItemEdiLot} The populated <code>OrderItemEdiLot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lot_expiration'))
        obj.lot_expiration = ApiClient.convertToType(data['lot_expiration'], 'String');
      if (data.hasOwnProperty('lot_number'))
        obj.lot_number = ApiClient.convertToType(data['lot_number'], 'String');
      if (data.hasOwnProperty('lot_quantity'))
        obj.lot_quantity = ApiClient.convertToType(data['lot_quantity'], 'Number');
    }
    return obj;
  }

  /**
   * Log expiration
   * @member {String} lot_expiration
   */
  exports.prototype.lot_expiration = undefined;

  /**
   * Lot number
   * @member {String} lot_number
   */
  exports.prototype.lot_number = undefined;

  /**
   * Lot quantity
   * @member {Number} lot_quantity
   */
  exports.prototype.lot_quantity = undefined;

  return exports;

}));
