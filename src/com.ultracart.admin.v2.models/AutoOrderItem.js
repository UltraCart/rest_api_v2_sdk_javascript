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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule', 'com.ultracart.admin.v2.models/AutoOrderItemOption', 'com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoOrderItemFutureSchedule'), require('./AutoOrderItemOption'), require('./AutoOrderItemSimpleSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AutoOrderItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AutoOrderItemFutureSchedule, root.UltraCartRestApiV2.AutoOrderItemOption, root.UltraCartRestApiV2.AutoOrderItemSimpleSchedule);
  }
}(this, function(ApiClient, AutoOrderItemFutureSchedule, AutoOrderItemOption, AutoOrderItemSimpleSchedule) {
  'use strict';

  /**
   * The AutoOrderItem model module.
   * @module com.ultracart.admin.v2.models/AutoOrderItem
   * @version 3.4.2
   */

  /**
   * Constructs a new <code>AutoOrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderItem} The populated <code>AutoOrderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_item_id'))
        obj.arbitrary_item_id = ApiClient.convertToType(data['arbitrary_item_id'], 'String');
      if (data.hasOwnProperty('arbitrary_percentage_discount'))
        obj.arbitrary_percentage_discount = ApiClient.convertToType(data['arbitrary_percentage_discount'], 'Number');
      if (data.hasOwnProperty('arbitrary_quantity'))
        obj.arbitrary_quantity = ApiClient.convertToType(data['arbitrary_quantity'], 'Number');
      if (data.hasOwnProperty('arbitrary_schedule_days'))
        obj.arbitrary_schedule_days = ApiClient.convertToType(data['arbitrary_schedule_days'], 'Number');
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('arbitrary_unit_cost_remaining_orders'))
        obj.arbitrary_unit_cost_remaining_orders = ApiClient.convertToType(data['arbitrary_unit_cost_remaining_orders'], 'Number');
      if (data.hasOwnProperty('auto_order_item_oid'))
        obj.auto_order_item_oid = ApiClient.convertToType(data['auto_order_item_oid'], 'Number');
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'String');
      if (data.hasOwnProperty('future_schedules'))
        obj.future_schedules = ApiClient.convertToType(data['future_schedules'], [AutoOrderItemFutureSchedule]);
      if (data.hasOwnProperty('last_order_dts'))
        obj.last_order_dts = ApiClient.convertToType(data['last_order_dts'], 'String');
      if (data.hasOwnProperty('life_time_value'))
        obj.life_time_value = ApiClient.convertToType(data['life_time_value'], 'Number');
      if (data.hasOwnProperty('next_preshipment_notice_dts'))
        obj.next_preshipment_notice_dts = ApiClient.convertToType(data['next_preshipment_notice_dts'], 'String');
      if (data.hasOwnProperty('next_shipment_dts'))
        obj.next_shipment_dts = ApiClient.convertToType(data['next_shipment_dts'], 'String');
      if (data.hasOwnProperty('no_order_after_dts'))
        obj.no_order_after_dts = ApiClient.convertToType(data['no_order_after_dts'], 'String');
      if (data.hasOwnProperty('number_of_rebills'))
        obj.number_of_rebills = ApiClient.convertToType(data['number_of_rebills'], 'Number');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [AutoOrderItemOption]);
      if (data.hasOwnProperty('original_item_id'))
        obj.original_item_id = ApiClient.convertToType(data['original_item_id'], 'String');
      if (data.hasOwnProperty('original_quantity'))
        obj.original_quantity = ApiClient.convertToType(data['original_quantity'], 'Number');
      if (data.hasOwnProperty('paypal_payer_id'))
        obj.paypal_payer_id = ApiClient.convertToType(data['paypal_payer_id'], 'String');
      if (data.hasOwnProperty('paypal_recurring_payment_profile_id'))
        obj.paypal_recurring_payment_profile_id = ApiClient.convertToType(data['paypal_recurring_payment_profile_id'], 'String');
      if (data.hasOwnProperty('preshipment_notice_sent'))
        obj.preshipment_notice_sent = ApiClient.convertToType(data['preshipment_notice_sent'], 'Boolean');
      if (data.hasOwnProperty('rebill_value'))
        obj.rebill_value = ApiClient.convertToType(data['rebill_value'], 'Number');
      if (data.hasOwnProperty('remaining_repeat_count'))
        obj.remaining_repeat_count = ApiClient.convertToType(data['remaining_repeat_count'], 'Number');
      if (data.hasOwnProperty('simple_schedule'))
        obj.simple_schedule = AutoOrderItemSimpleSchedule.constructFromObject(data['simple_schedule']);
    }
    return obj;
  }

  /**
   * Arbitrary item id that should be rebilled instead of the normal schedule
   * @member {String} arbitrary_item_id
   */
  exports.prototype.arbitrary_item_id = undefined;

  /**
   * An arbitrary percentage discount to provide on future rebills
   * @member {Number} arbitrary_percentage_discount
   */
  exports.prototype.arbitrary_percentage_discount = undefined;

  /**
   * Arbitrary quantity to rebill
   * @member {Number} arbitrary_quantity
   */
  exports.prototype.arbitrary_quantity = undefined;

  /**
   * The number of days to rebill if the frequency is set to an arbitrary number of days
   * @member {Number} arbitrary_schedule_days
   */
  exports.prototype.arbitrary_schedule_days = undefined;

  /**
   * Arbitrary unit cost that rebills of this item should occur at
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * The number of rebills to give the arbitrary unit cost on before reverting to normal pricing.
   * @member {Number} arbitrary_unit_cost_remaining_orders
   */
  exports.prototype.arbitrary_unit_cost_remaining_orders = undefined;

  /**
   * Primary key of AutoOrderItem
   * @member {Number} auto_order_item_oid
   */
  exports.prototype.auto_order_item_oid = undefined;

  /**
   * Frequency of the rebill if not a fixed schedule
   * @member {module:com.ultracart.admin.v2.models/AutoOrderItem.FrequencyEnum} frequency
   */
  exports.prototype.frequency = undefined;

  /**
   * The future rebill schedule for this item up to the next ten rebills
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule>} future_schedules
   */
  exports.prototype.future_schedules = undefined;

  /**
   * Date/time of the last order of this item
   * @member {String} last_order_dts
   */
  exports.prototype.last_order_dts = undefined;

  /**
   * The life time value of this item including the original purchase
   * @member {Number} life_time_value
   */
  exports.prototype.life_time_value = undefined;

  /**
   * The date/time of when the next pre-shipment notice should be sent
   * @member {String} next_preshipment_notice_dts
   */
  exports.prototype.next_preshipment_notice_dts = undefined;

  /**
   * Date/time that this item is scheduled to rebill
   * @member {String} next_shipment_dts
   */
  exports.prototype.next_shipment_dts = undefined;

  /**
   * Date/time after which no additional rebills of this item should occur
   * @member {String} no_order_after_dts
   */
  exports.prototype.no_order_after_dts = undefined;

  /**
   * The number of times this item has rebilled
   * @member {Number} number_of_rebills
   */
  exports.prototype.number_of_rebills = undefined;

  /**
   * Options associated with this item
   * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItemOption>} options
   */
  exports.prototype.options = undefined;

  /**
   * The original item id purchased.  This item controls scheduling.  If you wish to modify a schedule, for example, from monthly to yearly, change this item from your monthly item to your yearly item, and then change the next_shipment_dts to your desired date.
   * @member {String} original_item_id
   */
  exports.prototype.original_item_id = undefined;

  /**
   * The original quantity purchased
   * @member {Number} original_quantity
   */
  exports.prototype.original_quantity = undefined;

  /**
   * The PayPal Payer ID tied to this item
   * @member {String} paypal_payer_id
   */
  exports.prototype.paypal_payer_id = undefined;

  /**
   * The PayPal Profile ID tied to this item
   * @member {String} paypal_recurring_payment_profile_id
   */
  exports.prototype.paypal_recurring_payment_profile_id = undefined;

  /**
   * True if the preshipment notice associated with the next rebill has been sent
   * @member {Boolean} preshipment_notice_sent
   */
  exports.prototype.preshipment_notice_sent = undefined;

  /**
   * The value of the rebills of this item
   * @member {Number} rebill_value
   */
  exports.prototype.rebill_value = undefined;

  /**
   * The number of rebills remaining before this item is complete
   * @member {Number} remaining_repeat_count
   */
  exports.prototype.remaining_repeat_count = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} simple_schedule
   */
  exports.prototype.simple_schedule = undefined;


  /**
   * Allowed values for the <code>frequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyEnum = {
    /**
     * value: "Weekly"
     * @const
     */
    Weekly: "Weekly",

    /**
     * value: "Biweekly"
     * @const
     */
    Biweekly: "Biweekly",

    /**
     * value: "Every..."
     * @const
     */
    Every___: "Every...",

    /**
     * value: "Every 10 Days"
     * @const
     */
    Every_10_Days: "Every 10 Days",

    /**
     * value: "Every 24 Days"
     * @const
     */
    Every_24_Days: "Every 24 Days",

    /**
     * value: "Every 28 Days"
     * @const
     */
    Every_28_Days: "Every 28 Days",

    /**
     * value: "Monthly"
     * @const
     */
    Monthly: "Monthly",

    /**
     * value: "Every 45 Days"
     * @const
     */
    Every_45_Days: "Every 45 Days",

    /**
     * value: "Every 2 Months"
     * @const
     */
    Every_2_Months: "Every 2 Months",

    /**
     * value: "Every 3 Months"
     * @const
     */
    Every_3_Months: "Every 3 Months",

    /**
     * value: "Every 4 Months"
     * @const
     */
    Every_4_Months: "Every 4 Months",

    /**
     * value: "Every 6 Months"
     * @const
     */
    Every_6_Months: "Every 6 Months",

    /**
     * value: "Yearly"
     * @const
     */
    Yearly: "Yearly"
  };

  return exports;

}));
