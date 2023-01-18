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
    root.UltraCartRestApiV2.PointOfSaleRegister = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PointOfSaleRegister model module.
   * @module com.ultracart.admin.v2.models/PointOfSaleRegister
   * @version 3.10.100
   */

  /**
   * Constructs a new <code>PointOfSaleRegister</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleRegister
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PointOfSaleRegister</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PointOfSaleRegister} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PointOfSaleRegister} The populated <code>PointOfSaleRegister</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('pos_location_oid'))
        obj.pos_location_oid = ApiClient.convertToType(data['pos_location_oid'], 'Number');
      if (data.hasOwnProperty('pos_register_oid'))
        obj.pos_register_oid = ApiClient.convertToType(data['pos_register_oid'], 'Number');
    }
    return obj;
  }

  /**
   * The merchant id that owns this point of sale register.
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of the register.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Object identifier of the point of sale location where this register is located.
   * @member {Number} pos_location_oid
   */
  exports.prototype.pos_location_oid = undefined;

  /**
   * Object identifier of the point of sale register.
   * @member {Number} pos_register_oid
   */
  exports.prototype.pos_register_oid = undefined;

  return exports;

}));