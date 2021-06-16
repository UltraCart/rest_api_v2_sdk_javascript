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
    define(['ApiClient', 'com.ultracart.admin.v2.models/OrderTrackingNumberDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderTrackingNumberDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderTrackingNumberDetails = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.OrderTrackingNumberDetail);
  }
}(this, function(ApiClient, OrderTrackingNumberDetail) {
  'use strict';

  /**
   * The OrderTrackingNumberDetails model module.
   * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetails
   * @version 3.1.48
   */

  /**
   * Constructs a new <code>OrderTrackingNumberDetails</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderTrackingNumberDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} The populated <code>OrderTrackingNumberDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('actual_delivery_date'))
        obj.actual_delivery_date = ApiClient.convertToType(data['actual_delivery_date'], 'String');
      if (data.hasOwnProperty('actual_delivery_date_formatted'))
        obj.actual_delivery_date_formatted = ApiClient.convertToType(data['actual_delivery_date_formatted'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [OrderTrackingNumberDetail]);
      if (data.hasOwnProperty('expected_delivery_date'))
        obj.expected_delivery_date = ApiClient.convertToType(data['expected_delivery_date'], 'String');
      if (data.hasOwnProperty('expected_delivery_date_formatted'))
        obj.expected_delivery_date_formatted = ApiClient.convertToType(data['expected_delivery_date_formatted'], 'String');
      if (data.hasOwnProperty('map_url'))
        obj.map_url = ApiClient.convertToType(data['map_url'], 'String');
      if (data.hasOwnProperty('order_placed_date'))
        obj.order_placed_date = ApiClient.convertToType(data['order_placed_date'], 'String');
      if (data.hasOwnProperty('order_placed_date_formatted'))
        obj.order_placed_date_formatted = ApiClient.convertToType(data['order_placed_date_formatted'], 'String');
      if (data.hasOwnProperty('payment_processed_date'))
        obj.payment_processed_date = ApiClient.convertToType(data['payment_processed_date'], 'String');
      if (data.hasOwnProperty('payment_processed_date_formatted'))
        obj.payment_processed_date_formatted = ApiClient.convertToType(data['payment_processed_date_formatted'], 'String');
      if (data.hasOwnProperty('shipped_date'))
        obj.shipped_date = ApiClient.convertToType(data['shipped_date'], 'String');
      if (data.hasOwnProperty('shipped_date_formatted'))
        obj.shipped_date_formatted = ApiClient.convertToType(data['shipped_date_formatted'], 'String');
      if (data.hasOwnProperty('shipping_method'))
        obj.shipping_method = ApiClient.convertToType(data['shipping_method'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('status_description'))
        obj.status_description = ApiClient.convertToType(data['status_description'], 'String');
      if (data.hasOwnProperty('tracking_number'))
        obj.tracking_number = ApiClient.convertToType(data['tracking_number'], 'String');
      if (data.hasOwnProperty('tracking_url'))
        obj.tracking_url = ApiClient.convertToType(data['tracking_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} actual_delivery_date
   */
  exports.prototype.actual_delivery_date = undefined;

  /**
   * @member {String} actual_delivery_date_formatted
   */
  exports.prototype.actual_delivery_date_formatted = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail>} details
   */
  exports.prototype.details = undefined;

  /**
   * @member {String} expected_delivery_date
   */
  exports.prototype.expected_delivery_date = undefined;

  /**
   * @member {String} expected_delivery_date_formatted
   */
  exports.prototype.expected_delivery_date_formatted = undefined;

  /**
   * @member {String} map_url
   */
  exports.prototype.map_url = undefined;

  /**
   * @member {String} order_placed_date
   */
  exports.prototype.order_placed_date = undefined;

  /**
   * @member {String} order_placed_date_formatted
   */
  exports.prototype.order_placed_date_formatted = undefined;

  /**
   * @member {String} payment_processed_date
   */
  exports.prototype.payment_processed_date = undefined;

  /**
   * @member {String} payment_processed_date_formatted
   */
  exports.prototype.payment_processed_date_formatted = undefined;

  /**
   * @member {String} shipped_date
   */
  exports.prototype.shipped_date = undefined;

  /**
   * @member {String} shipped_date_formatted
   */
  exports.prototype.shipped_date_formatted = undefined;

  /**
   * @member {String} shipping_method
   */
  exports.prototype.shipping_method = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} status_description
   */
  exports.prototype.status_description = undefined;

  /**
   * @member {String} tracking_number
   */
  exports.prototype.tracking_number = undefined;

  /**
   * @member {String} tracking_url
   */
  exports.prototype.tracking_url = undefined;

  return exports;

}));
