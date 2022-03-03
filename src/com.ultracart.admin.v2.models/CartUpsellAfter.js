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
    root.UltraCartRestApiV2.CartUpsellAfter = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartUpsellAfter model module.
   * @module com.ultracart.admin.v2.models/CartUpsellAfter
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>CartUpsellAfter</code>.
   * @alias module:com.ultracart.admin.v2.models/CartUpsellAfter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CartUpsellAfter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartUpsellAfter} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartUpsellAfter} The populated <code>CartUpsellAfter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('finalize_after_dts'))
        obj.finalize_after_dts = ApiClient.convertToType(data['finalize_after_dts'], 'String');
      if (data.hasOwnProperty('finalize_after_minutes'))
        obj.finalize_after_minutes = ApiClient.convertToType(data['finalize_after_minutes'], 'Number');
      if (data.hasOwnProperty('upsell_path_code'))
        obj.upsell_path_code = ApiClient.convertToType(data['upsell_path_code'], 'String');
    }
    return obj;
  }

  /**
   * The date/time after which the cart will finalize into an order.
   * @member {String} finalize_after_dts
   */
  exports.prototype.finalize_after_dts = undefined;

  /**
   * The amount of inactivity in minutes after which the cart should be finalized into an order.  This will calculate the finalize_after_dts field.
   * @member {Number} finalize_after_minutes
   */
  exports.prototype.finalize_after_minutes = undefined;

  /**
   * Upsell path code
   * @member {String} upsell_path_code
   */
  exports.prototype.upsell_path_code = undefined;

  return exports;

}));
