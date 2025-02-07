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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrderAddonItem', 'com.ultracart.admin.v2.models/AutoOrderItem', 'com.ultracart.admin.v2.models/AutoOrderLog', 'com.ultracart.admin.v2.models/AutoOrderManagement', 'com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoOrderAddonItem'), require('./AutoOrderItem'), require('./AutoOrderLog'), require('./AutoOrderManagement'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrderAddonItem, root.UltraCartRestApiV2.AutoOrderItem, root.UltraCartRestApiV2.AutoOrderLog, root.UltraCartRestApiV2.AutoOrderManagement, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, AutoOrderAddonItem, AutoOrderItem, AutoOrderLog, AutoOrderManagement, Order) {
  'use strict';

  /**
   * The AutoOrder model module.
   * @module com.ultracart.admin.v2.models/AutoOrder
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>AutoOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrder} The populated <code>AutoOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_ons'))
        obj.add_ons = ApiClient.convertToType(data['add_ons'], [AutoOrderAddonItem]);
      if (data.hasOwnProperty('auto_order_code'))
        obj.auto_order_code = ApiClient.convertToType(data['auto_order_code'], 'String');
      if (data.hasOwnProperty('auto_order_oid'))
        obj.auto_order_oid = ApiClient.convertToType(data['auto_order_oid'], 'Number');
      if (data.hasOwnProperty('cancel_after_next_x_orders'))
        obj.cancel_after_next_x_orders = ApiClient.convertToType(data['cancel_after_next_x_orders'], 'Number');
      if (data.hasOwnProperty('cancel_downgrade'))
        obj.cancel_downgrade = ApiClient.convertToType(data['cancel_downgrade'], 'Boolean');
      if (data.hasOwnProperty('cancel_reason'))
        obj.cancel_reason = ApiClient.convertToType(data['cancel_reason'], 'String');
      if (data.hasOwnProperty('cancel_upgrade'))
        obj.cancel_upgrade = ApiClient.convertToType(data['cancel_upgrade'], 'Boolean');
      if (data.hasOwnProperty('canceled_by_user'))
        obj.canceled_by_user = ApiClient.convertToType(data['canceled_by_user'], 'String');
      if (data.hasOwnProperty('canceled_dts'))
        obj.canceled_dts = ApiClient.convertToType(data['canceled_dts'], 'String');
      if (data.hasOwnProperty('completed'))
        obj.completed = ApiClient.convertToType(data['completed'], 'Boolean');
      if (data.hasOwnProperty('credit_card_attempt'))
        obj.credit_card_attempt = ApiClient.convertToType(data['credit_card_attempt'], 'Number');
      if (data.hasOwnProperty('disabled_dts'))
        obj.disabled_dts = ApiClient.convertToType(data['disabled_dts'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failure_reason'))
        obj.failure_reason = ApiClient.convertToType(data['failure_reason'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [AutoOrderItem]);
      if (data.hasOwnProperty('logs'))
        obj.logs = ApiClient.convertToType(data['logs'], [AutoOrderLog]);
      if (data.hasOwnProperty('management'))
        obj.management = AutoOrderManagement.constructFromObject(data['management']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('merged_dts'))
        obj.merged_dts = ApiClient.convertToType(data['merged_dts'], 'String');
      if (data.hasOwnProperty('merged_into_auto_order_oid'))
        obj.merged_into_auto_order_oid = ApiClient.convertToType(data['merged_into_auto_order_oid'], 'Number');
      if (data.hasOwnProperty('next_attempt'))
        obj.next_attempt = ApiClient.convertToType(data['next_attempt'], 'String');
      if (data.hasOwnProperty('original_order'))
        obj.original_order = Order.constructFromObject(data['original_order']);
      if (data.hasOwnProperty('original_order_id'))
        obj.original_order_id = ApiClient.convertToType(data['original_order_id'], 'String');
      if (data.hasOwnProperty('override_affiliate_id'))
        obj.override_affiliate_id = ApiClient.convertToType(data['override_affiliate_id'], 'Number');
      if (data.hasOwnProperty('rebill_orders'))
        obj.rebill_orders = ApiClient.convertToType(data['rebill_orders'], [Order]);
      if (data.hasOwnProperty('rotating_transaction_gateway_code'))
        obj.rotating_transaction_gateway_code = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * Array of addon objects instructing which items to add to auto order and how many times they should be added.
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderAddonItem>} add_ons
   */
  exports.prototype.add_ons = undefined;

  /**
   * Unique code assigned to this auto order
   * @member {String} auto_order_code
   */
  exports.prototype.auto_order_code = undefined;

  /**
   * Auto order object identifier
   * @member {Number} auto_order_oid
   */
  exports.prototype.auto_order_oid = undefined;

  /**
   * Cancel this auto order after X additional rebills
   * @member {Number} cancel_after_next_x_orders
   */
  exports.prototype.cancel_after_next_x_orders = undefined;

  /**
   * True if the auto order was canceled because the customer purchased a downgrade item
   * @member {Boolean} cancel_downgrade
   */
  exports.prototype.cancel_downgrade = undefined;

  /**
   * The reason this auto order was canceled by either merchant or customer
   * @member {String} cancel_reason
   */
  exports.prototype.cancel_reason = undefined;

  /**
   * True if the auto order was canceled because the customer purchased an upgrade item
   * @member {Boolean} cancel_upgrade
   */
  exports.prototype.cancel_upgrade = undefined;

  /**
   * The user that canceled the auto order
   * @member {String} canceled_by_user
   */
  exports.prototype.canceled_by_user = undefined;

  /**
   * The date/time that the auto order was canceled
   * @member {String} canceled_dts
   */
  exports.prototype.canceled_dts = undefined;

  /**
   * True if the auto order ran successfully to completion
   * @member {Boolean} completed
   */
  exports.prototype.completed = undefined;

  /**
   * The number of credit card attempts that have taken place
   * @member {Number} credit_card_attempt
   */
  exports.prototype.credit_card_attempt = undefined;

  /**
   * The date/time the auto order was disabled due to failed rebills
   * @member {String} disabled_dts
   */
  exports.prototype.disabled_dts = undefined;

  /**
   * True if this auto order is enabled
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * The reason this auto order failed during the last rebill attempt
   * @member {String} failure_reason
   */
  exports.prototype.failure_reason = undefined;

  /**
   * The items that are setup to rebill
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * Logs associated with this auto order
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderLog>} logs
   */
  exports.prototype.logs = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AutoOrderManagement} management
   */
  exports.prototype.management = undefined;

  /**
   * UltraCart merchant ID owning this order
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * The date/time the auto order was merged into another auto order
   * @member {String} merged_dts
   */
  exports.prototype.merged_dts = undefined;

  /**
   * The auto order that this auto order was merged into
   * @member {Number} merged_into_auto_order_oid
   */
  exports.prototype.merged_into_auto_order_oid = undefined;

  /**
   * The next time that the auto order will be attempted for processing
   * @member {String} next_attempt
   */
  exports.prototype.next_attempt = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Order} original_order
   */
  exports.prototype.original_order = undefined;

  /**
   * The original order id that this auto order is associated with.
   * @member {String} original_order_id
   */
  exports.prototype.original_order_id = undefined;

  /**
   * Override the affiliate id given credit for rebills of this auto order
   * @member {Number} override_affiliate_id
   */
  exports.prototype.override_affiliate_id = undefined;

  /**
   * Rebill orders that have taken place on this auto order
   * @member {Array.<module:com.ultracart.admin.v2.models/Order>} rebill_orders
   */
  exports.prototype.rebill_orders = undefined;

  /**
   * The RTG code associated with this order for future rebills
   * @member {String} rotating_transaction_gateway_code
   */
  exports.prototype.rotating_transaction_gateway_code = undefined;

  /**
   * The status of the auto order
   * @member {module:com.ultracart.admin.v2.models/AutoOrder.StatusEnum} status
   */
  exports.prototype.status = undefined;


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
    active: "active",

    /**
     * value: "canceled"
     * @const
     */
    canceled: "canceled",

    /**
     * value: "disabled"
     * @const
     */
    disabled: "disabled",

    /**
     * value: "merged"
     * @const
     */
    merged: "merged"
  };

  return exports;

}));
