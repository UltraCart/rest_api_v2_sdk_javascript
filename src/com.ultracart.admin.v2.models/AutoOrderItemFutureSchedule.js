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
    root.UltraCartRestApiV2.AutoOrderItemFutureSchedule = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AutoOrderItemFutureSchedule model module.
   * @module com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
   * @version 2.4.83
   */

  /**
   * Constructs a new <code>AutoOrderItemFutureSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AutoOrderItemFutureSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} The populated <code>AutoOrderItemFutureSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
      }
      if (data.hasOwnProperty('rebill_count')) {
        obj['rebill_count'] = ApiClient.convertToType(data['rebill_count'], 'Number');
      }
      if (data.hasOwnProperty('shipment_dts')) {
        obj['shipment_dts'] = ApiClient.convertToType(data['shipment_dts'], 'String');
      }
      if (data.hasOwnProperty('unit_cost')) {
        obj['unit_cost'] = ApiClient.convertToType(data['unit_cost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Item ID that should rebill
   * @member {String} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The number of times this rebill represents
   * @member {Number} rebill_count
   */
  exports.prototype['rebill_count'] = undefined;
  /**
   * Date/time that this item is scheduled to rebill
   * @member {String} shipment_dts
   */
  exports.prototype['shipment_dts'] = undefined;
  /**
   * The unit cost of the item rebilling
   * @member {Number} unit_cost
   */
  exports.prototype['unit_cost'] = undefined;



  return exports;
}));


