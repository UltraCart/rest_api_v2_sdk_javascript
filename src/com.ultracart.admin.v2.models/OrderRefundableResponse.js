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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/OrderReason', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./OrderReason'), require('./ResponseMetadata'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderRefundableResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.OrderReason, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, OrderReason, ResponseMetadata, Warning) {
  'use strict';

  /**
   * The OrderRefundableResponse model module.
   * @module com.ultracart.admin.v2.models/OrderRefundableResponse
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>OrderRefundableResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderRefundableResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderRefundableResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderRefundableResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderRefundableResponse} The populated <code>OrderRefundableResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('item_level_refund_reason_required'))
        obj.item_level_refund_reason_required = ApiClient.convertToType(data['item_level_refund_reason_required'], 'Boolean');
      if (data.hasOwnProperty('item_level_refund_reasons'))
        obj.item_level_refund_reasons = ApiClient.convertToType(data['item_level_refund_reasons'], [OrderReason]);
      if (data.hasOwnProperty('item_level_return_reasons'))
        obj.item_level_return_reasons = ApiClient.convertToType(data['item_level_return_reasons'], [OrderReason]);
      if (data.hasOwnProperty('manual_because_multiple_charges'))
        obj.manual_because_multiple_charges = ApiClient.convertToType(data['manual_because_multiple_charges'], 'Boolean');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('order_level_refund_reason_required'))
        obj.order_level_refund_reason_required = ApiClient.convertToType(data['order_level_refund_reason_required'], 'Boolean');
      if (data.hasOwnProperty('order_level_refund_reasons'))
        obj.order_level_refund_reasons = ApiClient.convertToType(data['order_level_refund_reasons'], [OrderReason]);
      if (data.hasOwnProperty('order_level_reject_reasons'))
        obj.order_level_reject_reasons = ApiClient.convertToType(data['order_level_reject_reasons'], [OrderReason]);
      if (data.hasOwnProperty('refundable'))
        obj.refundable = ApiClient.convertToType(data['refundable'], 'Boolean');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * True if the item level refund reason is required
   * @member {Boolean} item_level_refund_reason_required
   */
  exports.prototype.item_level_refund_reason_required = undefined;

  /**
   * Reason codes available at the item level.
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_refund_reasons
   */
  exports.prototype.item_level_refund_reasons = undefined;

  /**
   * Return codes available at the item level.
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_return_reasons
   */
  exports.prototype.item_level_return_reasons = undefined;

  /**
   * If true, this refund will have to be manually done because of additional charges with the virtual terminal were made
   * @member {Boolean} manual_because_multiple_charges
   */
  exports.prototype.manual_because_multiple_charges = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * True if the order level refund reason is required
   * @member {Boolean} order_level_refund_reason_required
   */
  exports.prototype.order_level_refund_reason_required = undefined;

  /**
   * Reason codes available at the order level.
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_refund_reasons
   */
  exports.prototype.order_level_refund_reasons = undefined;

  /**
   * Reject codes available at the order level.
   * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_reject_reasons
   */
  exports.prototype.order_level_reject_reasons = undefined;

  /**
   * Whether the order is refundable or not.  Null should be interpreted as false.
   * @member {Boolean} refundable
   */
  exports.prototype.refundable = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
