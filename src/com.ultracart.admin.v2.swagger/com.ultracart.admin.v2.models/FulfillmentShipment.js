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
    define(['com.ultracart.admin.v2.swagger/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.FulfillmentShipment = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FulfillmentShipment model module.
   * @module com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/FulfillmentShipment
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>FulfillmentShipment</code>.
   * @alias module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/FulfillmentShipment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>FulfillmentShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/FulfillmentShipment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.swagger/com.ultracart.admin.v2.models/FulfillmentShipment} The populated <code>FulfillmentShipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fulfillment_fee')) {
        obj['fulfillment_fee'] = ApiClient.convertToType(data['fulfillment_fee'], 'Number');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
      }
      if (data.hasOwnProperty('package_cost')) {
        obj['package_cost'] = ApiClient.convertToType(data['package_cost'], 'Number');
      }
      if (data.hasOwnProperty('shipping_cost')) {
        obj['shipping_cost'] = ApiClient.convertToType(data['shipping_cost'], 'Number');
      }
      if (data.hasOwnProperty('tracking_numbers')) {
        obj['tracking_numbers'] = ApiClient.convertToType(data['tracking_numbers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Fees charged by the fulfillment company other than the shipping cost to process the order.
   * @member {Number} fulfillment_fee
   */
  exports.prototype['fulfillment_fee'] = undefined;
  /**
   * Order ID that was shipped
   * @member {String} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * The cost of the packaging used to sent this shipment
   * @member {Number} package_cost
   */
  exports.prototype['package_cost'] = undefined;
  /**
   * The actual total cost of shipping this order
   * @member {Number} shipping_cost
   */
  exports.prototype['shipping_cost'] = undefined;
  /**
   * Tracking numbers associated with the shipment
   * @member {Array.<String>} tracking_numbers
   */
  exports.prototype['tracking_numbers'] = undefined;



  return exports;
}));


