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
    root.UltraCartRestApiV2.OrderChannelPartner = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderChannelPartner model module.
   * @module com.ultracart.admin.v2.models/OrderChannelPartner
   * @version 3.10.73
   */

  /**
   * Constructs a new <code>OrderChannelPartner</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderChannelPartner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderChannelPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderChannelPartner} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderChannelPartner} The populated <code>OrderChannelPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auto_approve_purchase_order'))
        obj.auto_approve_purchase_order = ApiClient.convertToType(data['auto_approve_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('channel_partner_code'))
        obj.channel_partner_code = ApiClient.convertToType(data['channel_partner_code'], 'String');
      if (data.hasOwnProperty('channel_partner_data'))
        obj.channel_partner_data = ApiClient.convertToType(data['channel_partner_data'], 'String');
      if (data.hasOwnProperty('channel_partner_oid'))
        obj.channel_partner_oid = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
      if (data.hasOwnProperty('channel_partner_order_id'))
        obj.channel_partner_order_id = ApiClient.convertToType(data['channel_partner_order_id'], 'String');
      if (data.hasOwnProperty('ignore_invalid_shipping_method'))
        obj.ignore_invalid_shipping_method = ApiClient.convertToType(data['ignore_invalid_shipping_method'], 'Boolean');
      if (data.hasOwnProperty('no_realtime_payment_processing'))
        obj.no_realtime_payment_processing = ApiClient.convertToType(data['no_realtime_payment_processing'], 'Boolean');
      if (data.hasOwnProperty('skip_payment_processing'))
        obj.skip_payment_processing = ApiClient.convertToType(data['skip_payment_processing'], 'Boolean');
      if (data.hasOwnProperty('store_completed'))
        obj.store_completed = ApiClient.convertToType(data['store_completed'], 'Boolean');
      if (data.hasOwnProperty('store_if_payment_declines'))
        obj.store_if_payment_declines = ApiClient.convertToType(data['store_if_payment_declines'], 'Boolean');
      if (data.hasOwnProperty('treat_warnings_as_errors'))
        obj.treat_warnings_as_errors = ApiClient.convertToType(data['treat_warnings_as_errors'], 'Boolean');
    }
    return obj;
  }

  /**
   * If true, any purchase order submitted is automatically approved
   * @member {Boolean} auto_approve_purchase_order
   */
  exports.prototype.auto_approve_purchase_order = undefined;

  /**
   * The code of the channel partner
   * @member {String} channel_partner_code
   */
  exports.prototype.channel_partner_code = undefined;

  /**
   * Additional data provided by the channel partner, read-only
   * @member {String} channel_partner_data
   */
  exports.prototype.channel_partner_data = undefined;

  /**
   * Channel partner object identifier, read-only and available on existing channel orders only.
   * @member {Number} channel_partner_oid
   */
  exports.prototype.channel_partner_oid = undefined;

  /**
   * The order ID assigned by the channel partner for this order.
   * @member {String} channel_partner_order_id
   */
  exports.prototype.channel_partner_order_id = undefined;

  /**
   * Set to true to ignore invalid shipping method being specified.  Only applicable on inserting orders.
   * @member {Boolean} ignore_invalid_shipping_method
   */
  exports.prototype.ignore_invalid_shipping_method = undefined;

  /**
   * Indicates this order should be placed in Account Receivable for later payment processing
   * @member {Boolean} no_realtime_payment_processing
   */
  exports.prototype.no_realtime_payment_processing = undefined;

  /**
   * Indicates this order was already paid for via a channel purchase and no payment collection should be attempted
   * @member {Boolean} skip_payment_processing
   */
  exports.prototype.skip_payment_processing = undefined;

  /**
   * Instructs UltraCart to skip shipping department and mark this order as fully complete.  This flag defaults to true.  Set this flag to false to shipped product for this order.
   * @member {Boolean} store_completed
   */
  exports.prototype.store_completed = undefined;

  /**
   * If true, any failed payment will place the order in Accounts Receivable rather than rejecting it.
   * @member {Boolean} store_if_payment_declines
   */
  exports.prototype.store_if_payment_declines = undefined;

  /**
   * Any warnings are raised as errors and halt the import of the order
   * @member {Boolean} treat_warnings_as_errors
   */
  exports.prototype.treat_warnings_as_errors = undefined;

  return exports;

}));
