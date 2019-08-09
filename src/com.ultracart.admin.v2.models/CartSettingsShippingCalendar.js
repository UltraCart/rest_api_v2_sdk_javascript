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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartSettingsShippingCalendar = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartSettingsShippingCalendar model module.
   * @module com.ultracart.admin.v2.models/CartSettingsShippingCalendar
   * @version 2.4.17
   */

  /**
   * Constructs a new <code>CartSettingsShippingCalendar</code>.
   * @alias module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CartSettingsShippingCalendar</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} The populated <code>CartSettingsShippingCalendar</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blackouts')) {
        obj['blackouts'] = ApiClient.convertToType(data['blackouts'], ['String']);
      }
      if (data.hasOwnProperty('days_of_week')) {
        obj['days_of_week'] = ApiClient.convertToType(data['days_of_week'], ['Boolean']);
      }
      if (data.hasOwnProperty('earliest')) {
        obj['earliest'] = ApiClient.convertToType(data['earliest'], 'String');
      }
      if (data.hasOwnProperty('require')) {
        obj['require'] = ApiClient.convertToType(data['require'], 'Boolean');
      }
      if (data.hasOwnProperty('show')) {
        obj['show'] = ApiClient.convertToType(data['show'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Specified dates that are blacked out on the calendar in ISO8601 format
   * @member {Array.<String>} blackouts
   */
  exports.prototype['blackouts'] = undefined;
  /**
   * Days of week that should be enabled on the calendar (0 - Sunday through 6 - Saturday)
   * @member {Array.<Boolean>} days_of_week
   */
  exports.prototype['days_of_week'] = undefined;
  /**
   * The earliest date that can be selected on the calendar
   * @member {String} earliest
   */
  exports.prototype['earliest'] = undefined;
  /**
   * True if the customer is required to select a date
   * @member {Boolean} require
   */
  exports.prototype['require'] = undefined;
  /**
   * True if this calendar should be shown to the customer
   * @member {Boolean} show
   */
  exports.prototype['show'] = undefined;



  return exports;
}));


