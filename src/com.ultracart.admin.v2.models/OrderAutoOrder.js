/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.UltraCartRestApiV2.OrderAutoOrder = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderAutoOrder model module.
   * @module com.ultracart.admin.v2.models/OrderAutoOrder
   * @version 2.3.10
   */

  /**
   * Constructs a new <code>OrderAutoOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderAutoOrder
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OrderAutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderAutoOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderAutoOrder} The populated <code>OrderAutoOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auto_order_code')) {
        obj['auto_order_code'] = ApiClient.convertToType(data['auto_order_code'], 'String');
      }
      if (data.hasOwnProperty('auto_order_oid')) {
        obj['auto_order_oid'] = ApiClient.convertToType(data['auto_order_oid'], 'Number');
      }
      if (data.hasOwnProperty('original_order_id')) {
        obj['original_order_id'] = ApiClient.convertToType(data['original_order_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique code assigned to the auto order
   * @member {String} auto_order_code
   */
  exports.prototype['auto_order_code'] = undefined;
  /**
   * Unique identifier assigned to the auto order
   * @member {Number} auto_order_oid
   */
  exports.prototype['auto_order_oid'] = undefined;
  /**
   * Orignal order id that started this auto order sequence
   * @member {String} original_order_id
   */
  exports.prototype['original_order_id'] = undefined;
  /**
   * The status of the auto order
   * @member {module:com.ultracart.admin.v2.models/OrderAutoOrder.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"  };


  return exports;
}));


