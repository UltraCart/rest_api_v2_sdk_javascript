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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemAutoOrderStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemAutoOrderStep'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemAutoOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemAutoOrderStep);
  }
}(this, function(ApiClient, ItemAutoOrderStep) {
  'use strict';




  /**
   * The ItemAutoOrder model module.
   * @module com.ultracart.admin.v2.models/ItemAutoOrder
   * @version 2.3.14
   */

  /**
   * Constructs a new <code>ItemAutoOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrder
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>ItemAutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemAutoOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemAutoOrder} The populated <code>ItemAutoOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth_future_amount')) {
        obj['auth_future_amount'] = ApiClient.convertToType(data['auth_future_amount'], 'Number');
      }
      if (data.hasOwnProperty('auth_test_amount')) {
        obj['auth_test_amount'] = ApiClient.convertToType(data['auth_test_amount'], 'Number');
      }
      if (data.hasOwnProperty('auto_order_cancel_item_id')) {
        obj['auto_order_cancel_item_id'] = ApiClient.convertToType(data['auto_order_cancel_item_id'], 'String');
      }
      if (data.hasOwnProperty('auto_order_cancel_item_oid')) {
        obj['auto_order_cancel_item_oid'] = ApiClient.convertToType(data['auto_order_cancel_item_oid'], 'Number');
      }
      if (data.hasOwnProperty('auto_order_downgrade_items')) {
        obj['auto_order_downgrade_items'] = ApiClient.convertToType(data['auto_order_downgrade_items'], ['String']);
      }
      if (data.hasOwnProperty('auto_order_paused')) {
        obj['auto_order_paused'] = ApiClient.convertToType(data['auto_order_paused'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_order_schedules')) {
        obj['auto_order_schedules'] = ApiClient.convertToType(data['auto_order_schedules'], ['String']);
      }
      if (data.hasOwnProperty('auto_order_upgrade_items')) {
        obj['auto_order_upgrade_items'] = ApiClient.convertToType(data['auto_order_upgrade_items'], ['String']);
      }
      if (data.hasOwnProperty('auto_order_upsell')) {
        obj['auto_order_upsell'] = ApiClient.convertToType(data['auto_order_upsell'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_order_upsell_no_easy_cancel')) {
        obj['auto_order_upsell_no_easy_cancel'] = ApiClient.convertToType(data['auto_order_upsell_no_easy_cancel'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_order_upsell_one_per_customer')) {
        obj['auto_order_upsell_one_per_customer'] = ApiClient.convertToType(data['auto_order_upsell_one_per_customer'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_orderable')) {
        obj['auto_orderable'] = ApiClient.convertToType(data['auto_orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('cancel_other_auto_orders')) {
        obj['cancel_other_auto_orders'] = ApiClient.convertToType(data['cancel_other_auto_orders'], 'Boolean');
      }
      if (data.hasOwnProperty('free_shipping_auto_order')) {
        obj['free_shipping_auto_order'] = ApiClient.convertToType(data['free_shipping_auto_order'], 'Boolean');
      }
      if (data.hasOwnProperty('refund_other_auto_orders')) {
        obj['refund_other_auto_orders'] = ApiClient.convertToType(data['refund_other_auto_orders'], 'Boolean');
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [ItemAutoOrderStep]);
      }
    }
    return obj;
  }

  /**
   * Amount to try and authorize for the future rebill
   * @member {Number} auth_future_amount
   */
  exports.prototype['auth_future_amount'] = undefined;
  /**
   * Amount to try and test authorize
   * @member {Number} auth_test_amount
   */
  exports.prototype['auth_test_amount'] = undefined;
  /**
   * Item id to attempt charging the customer for if they cancel
   * @member {String} auto_order_cancel_item_id
   */
  exports.prototype['auto_order_cancel_item_id'] = undefined;
  /**
   * Item object identifier to attempt charging the customer for if they cancel
   * @member {Number} auto_order_cancel_item_oid
   */
  exports.prototype['auto_order_cancel_item_oid'] = undefined;
  /**
   * List of downgrade items presented to customer service representatives
   * @member {Array.<String>} auto_order_downgrade_items
   */
  exports.prototype['auto_order_downgrade_items'] = undefined;
  /**
   * True if the rebill processing of this item is paused
   * @member {Boolean} auto_order_paused
   */
  exports.prototype['auto_order_paused'] = undefined;
  /**
   * The user selectable schedules that are available
   * @member {Array.<String>} auto_order_schedules
   */
  exports.prototype['auto_order_schedules'] = undefined;
  /**
   * List of upgrade items presented to customer service representatives
   * @member {Array.<String>} auto_order_upgrade_items
   */
  exports.prototype['auto_order_upgrade_items'] = undefined;
  /**
   * True if this item uses a fixed upsell step schedule
   * @member {Boolean} auto_order_upsell
   */
  exports.prototype['auto_order_upsell'] = undefined;
  /**
   * Do not send the easy cancel email to the customer
   * @member {Boolean} auto_order_upsell_no_easy_cancel
   */
  exports.prototype['auto_order_upsell_no_easy_cancel'] = undefined;
  /**
   * Limit the purchase of this item to one per customer
   * @member {Boolean} auto_order_upsell_one_per_customer
   */
  exports.prototype['auto_order_upsell_one_per_customer'] = undefined;
  /**
   * True if this item can be automatically ordered by the customer
   * @member {Boolean} auto_orderable
   */
  exports.prototype['auto_orderable'] = undefined;
  /**
   * True if other auto orders for this customer should be canceled when this item is ordered
   * @member {Boolean} cancel_other_auto_orders
   */
  exports.prototype['cancel_other_auto_orders'] = undefined;
  /**
   * True if the customer should be given free shipping
   * @member {Boolean} free_shipping_auto_order
   */
  exports.prototype['free_shipping_auto_order'] = undefined;
  /**
   * True if other auto orders for this customer should refunded if this item is refunded.
   * @member {Boolean} refund_other_auto_orders
   */
  exports.prototype['refund_other_auto_orders'] = undefined;
  /**
   * The rebill steps if this auto order is an upsell
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStep>} steps
   */
  exports.prototype['steps'] = undefined;



  return exports;
}));


