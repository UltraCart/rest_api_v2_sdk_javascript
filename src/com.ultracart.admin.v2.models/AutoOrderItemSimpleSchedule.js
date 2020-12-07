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
    root.UltraCartRestApiV2.AutoOrderItemSimpleSchedule = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AutoOrderItemSimpleSchedule model module.
   * @module com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
   * @version 3.0.48
   */

  /**
   * Constructs a new <code>AutoOrderItemSimpleSchedule</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrderItemSimpleSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} The populated <code>AutoOrderItemSimpleSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'String');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('repeat_count'))
        obj.repeat_count = ApiClient.convertToType(data['repeat_count'], 'Number');
    }
    return obj;
  }

  /**
   * Frequency of the rebill if not a fixed schedule
   * @member {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule.FrequencyEnum} frequency
   */
  exports.prototype.frequency = undefined;

  /**
   * Item ID that should rebill
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * The number of times this simple schedule is configured for
   * @member {Number} repeat_count
   */
  exports.prototype.repeat_count = undefined;


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
