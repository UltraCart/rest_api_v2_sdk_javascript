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
    root.UltraCartRestApiV2.RtgDayOfWeekRestriction = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RtgDayOfWeekRestriction model module.
   * @module com.ultracart.admin.v2.models/RtgDayOfWeekRestriction
   * @version 3.5.0
   */

  /**
   * Constructs a new <code>RtgDayOfWeekRestriction</code>.
   * @alias module:com.ultracart.admin.v2.models/RtgDayOfWeekRestriction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RtgDayOfWeekRestriction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/RtgDayOfWeekRestriction} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/RtgDayOfWeekRestriction} The populated <code>RtgDayOfWeekRestriction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('abbreviation'))
        obj.abbreviation = ApiClient.convertToType(data['abbreviation'], 'String');
      if (data.hasOwnProperty('day_of_week'))
        obj.day_of_week = ApiClient.convertToType(data['day_of_week'], 'Number');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
    }
    return obj;
  }

  /**
   * Human readable day of week abbreviation
   * @member {String} abbreviation
   */
  exports.prototype.abbreviation = undefined;

  /**
   * 1=Sun,2=Mon,3=Tue,4=Wed,5=Thu,6=Fri,7=Sat
   * @member {Number} day_of_week
   */
  exports.prototype.day_of_week = undefined;

  /**
   * True if this rotating gateway is allowed to operate on this day of week.  If no days are selected, all days are allowed.
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  return exports;

}));