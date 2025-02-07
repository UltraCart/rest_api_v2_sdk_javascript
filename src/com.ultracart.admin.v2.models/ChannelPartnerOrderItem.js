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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartnerOrderItemOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelPartnerOrderItemOption'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChannelPartnerOrderItem = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartnerOrderItemOption);
  }
}(this, function(ApiClient, ChannelPartnerOrderItemOption) {
  'use strict';

  /**
   * The ChannelPartnerOrderItem model module.
   * @module com.ultracart.admin.v2.models/ChannelPartnerOrderItem
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ChannelPartnerOrderItem</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartnerOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem} The populated <code>ChannelPartnerOrderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_unit_cost'))
        obj.arbitrary_unit_cost = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
      if (data.hasOwnProperty('auto_order_last_rebill_dts'))
        obj.auto_order_last_rebill_dts = ApiClient.convertToType(data['auto_order_last_rebill_dts'], 'String');
      if (data.hasOwnProperty('auto_order_schedule'))
        obj.auto_order_schedule = ApiClient.convertToType(data['auto_order_schedule'], 'String');
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [ChannelPartnerOrderItemOption]);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('upsell'))
        obj.upsell = ApiClient.convertToType(data['upsell'], 'Boolean');
    }
    return obj;
  }

  /**
   * Arbitrary unit cost for this item that differs from the listed price
   * @member {Number} arbitrary_unit_cost
   */
  exports.prototype.arbitrary_unit_cost = undefined;

  /**
   * Optional date/time of the last rebill if this item is part of an auto (recurring) order
   * @member {String} auto_order_last_rebill_dts
   */
  exports.prototype.auto_order_last_rebill_dts = undefined;

  /**
   * The frequency schedule for this item if this item is part of an auto (recurring) order
   * @member {module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem.AutoOrderScheduleEnum} auto_order_schedule
   */
  exports.prototype.auto_order_schedule = undefined;

  /**
   * Item ID
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * Item options
   * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderItemOption>} options
   */
  exports.prototype.options = undefined;

  /**
   * Quantity
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * True if this item was an upsell item.
   * @member {Boolean} upsell
   */
  exports.prototype.upsell = undefined;


  /**
   * Allowed values for the <code>auto_order_schedule</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoOrderScheduleEnum = {
    /**
     * value: "Weekly"
     * @const
     */
    Weekly: "Weekly",

    /**
     * value: "Every 10 Days"
     * @const
     */
    Every_10_Days: "Every 10 Days",

    /**
     * value: "Biweekly"
     * @const
     */
    Biweekly: "Biweekly",

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
     * value: "Every 5 Months"
     * @const
     */
    Every_5_Months: "Every 5 Months",

    /**
     * value: "Every 6 Months"
     * @const
     */
    Every_6_Months: "Every 6 Months",

    /**
     * value: "Yearly"
     * @const
     */
    Yearly: "Yearly",

    /**
     * value: "Every 4 Weeks"
     * @const
     */
    Every_4_Weeks: "Every 4 Weeks",

    /**
     * value: "Every 6 Weeks"
     * @const
     */
    Every_6_Weeks: "Every 6 Weeks",

    /**
     * value: "Every 8 Weeks"
     * @const
     */
    Every_8_Weeks: "Every 8 Weeks"
  };

  return exports;

}));
