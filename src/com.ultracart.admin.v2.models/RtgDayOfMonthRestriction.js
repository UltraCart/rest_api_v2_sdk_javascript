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
    root.UltraCartRestApiV2.RtgDayOfMonthRestriction = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RtgDayOfMonthRestriction model module.
   * @module com.ultracart.admin.v2.models/RtgDayOfMonthRestriction
   * @version 3.8.6
   */

  /**
   * Constructs a new <code>RtgDayOfMonthRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgDayOfMonthRestriction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgDayOfMonthRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgDayOfMonthRestriction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgDayOfMonthRestriction} The populated <code>RtgDayOfMonthRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('day_of_month'))
        obj.day_of_month = ApiClient.convertToType(data['day_of_month'], 'Number');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
    }
    return obj;
  }

  /**
   * The day of the month. 1 equals the first day of the month, 31 is the last possible value.
   * @member {Number} day_of_month
   */
  exports.prototype.day_of_month = undefined;

  /**
   * True if this rotating gateway is allowed to operate on this day of month.  If no days are selected, all days are allowed.
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  return exports;

}));
