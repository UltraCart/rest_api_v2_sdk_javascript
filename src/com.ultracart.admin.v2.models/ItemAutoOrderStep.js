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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule', 'com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemAutoOrderStepArbitraryUnitCostSchedule'), require('./ItemAutoOrderStepGrandfatherPricing'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemAutoOrderStep = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemAutoOrderStepArbitraryUnitCostSchedule, root.UltraCartRestApiV2.ItemAutoOrderStepGrandfatherPricing);
  }
}(this, function(ApiClient, ItemAutoOrderStepArbitraryUnitCostSchedule, ItemAutoOrderStepGrandfatherPricing) {
  'use strict';

  /**
   * The ItemAutoOrderStep model module.
   * @module com.ultracart.admin.v2.models/ItemAutoOrderStep
   * @version 3.0.64
   */

  /**
   * Constructs a new <code>ItemAutoOrderStep</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStep
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ItemAutoOrderStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStep} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStep} The populated <code>ItemAutoOrderStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_schedule_days'))
        obj.arbitrary_schedule_days = ApiClient.convertToType(data['arbitrary_schedule_days'], 'Number');
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('arbitrary_unit_cost_schedules'))
        obj.arbitrary_unit_cost_schedules = ApiClient.convertToType(data['arbitrary_unit_cost_schedules'], [ItemAutoOrderStepArbitraryUnitCostSchedule]);
      if (data.hasOwnProperty('grandfather_pricing'))
        obj.grandfather_pricing = ApiClient.convertToType(data['grandfather_pricing'], [ItemAutoOrderStepGrandfatherPricing]);
      if (data.hasOwnProperty('managed_by'))
        obj.managed_by = ApiClient.convertToType(data['managed_by'], 'String');
      if (data.hasOwnProperty('pause_days'))
        obj.pause_days = ApiClient.convertToType(data['pause_days'], 'Number');
      if (data.hasOwnProperty('pause_until_date'))
        obj.pause_until_date = ApiClient.convertToType(data['pause_until_date'], 'String');
      if (data.hasOwnProperty('preshipment_notice_days'))
        obj.preshipment_notice_days = ApiClient.convertToType(data['preshipment_notice_days'], 'Number');
      if (data.hasOwnProperty('recurring_merchant_item_id'))
        obj.recurring_merchant_item_id = ApiClient.convertToType(data['recurring_merchant_item_id'], 'String');
      if (data.hasOwnProperty('recurring_merchant_item_oid'))
        obj.recurring_merchant_item_oid = ApiClient.convertToType(data['recurring_merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('repeat_count'))
        obj.repeat_count = ApiClient.convertToType(data['repeat_count'], 'Number');
      if (data.hasOwnProperty('schedule'))
        obj.schedule = ApiClient.convertToType(data['schedule'], 'String');
      if (data.hasOwnProperty('subscribe_email_list_name'))
        obj.subscribe_email_list_name = ApiClient.convertToType(data['subscribe_email_list_name'], 'String');
      if (data.hasOwnProperty('subscribe_email_list_oid'))
        obj.subscribe_email_list_oid = ApiClient.convertToType(data['subscribe_email_list_oid'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * If the schedule is arbitrary, then this is the number of days
   * @member {Number} arbitrary_schedule_days
   */
  exports.prototype.arbitrary_schedule_days = undefined;

  /**
   * Arbitrary unit cost used to override the regular item cost
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * Arbitrary unit costs schedules for more advanced discounting by rebill attempt
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule>} arbitrary_unit_cost_schedules
   */
  exports.prototype.arbitrary_unit_cost_schedules = undefined;

  /**
   * Grand-father pricing configuration if the rebill schedule has changed over time
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing>} grandfather_pricing
   */
  exports.prototype.grandfather_pricing = undefined;

  /**
   * Managed by (defaults to UltraCart)
   * @member {String} managed_by
   */
  exports.prototype.managed_by = undefined;

  /**
   * Number of days to pause
   * @member {Number} pause_days
   */
  exports.prototype.pause_days = undefined;

  /**
   * Wait for this step to happen until the specified date
   * @member {String} pause_until_date
   */
  exports.prototype.pause_until_date = undefined;

  /**
   * If set, a pre-shipment notice is sent to the customer this many days in advance
   * @member {Number} preshipment_notice_days
   */
  exports.prototype.preshipment_notice_days = undefined;

  /**
   * Item id to rebill
   * @member {String} recurring_merchant_item_id
   */
  exports.prototype.recurring_merchant_item_id = undefined;

  /**
   * Item object identifier to rebill
   * @member {Number} recurring_merchant_item_oid
   */
  exports.prototype.recurring_merchant_item_oid = undefined;

  /**
   * Number of times to rebill.  Last step can be null for infinite
   * @member {Number} repeat_count
   */
  exports.prototype.repeat_count = undefined;

  /**
   * Frequency of the rebill
   * @member {String} schedule
   */
  exports.prototype.schedule = undefined;

  /**
   * Email list name to subscribe the customer to when the rebill occurs
   * @member {String} subscribe_email_list_name
   */
  exports.prototype.subscribe_email_list_name = undefined;

  /**
   * Email list identifier to subscribe the customer to when this rebill occurs
   * @member {Number} subscribe_email_list_oid
   */
  exports.prototype.subscribe_email_list_oid = undefined;

  /**
   * Type of step (item or pause)
   * @member {module:com.ultracart.admin.v2.models/ItemAutoOrderStep.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "item"
     * @const
     */
    item: "item",

    /**
     * value: "pause"
     * @const
     */
    pause: "pause"
  };

  return exports;

}));
