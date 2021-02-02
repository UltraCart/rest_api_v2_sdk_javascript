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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterValuesEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterValues = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterValuesEvent);
  }
}(this, function(ApiClient, ScreenRecordingFilterValuesEvent) {
  'use strict';

  /**
   * The ScreenRecordingFilterValues model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValues
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterValues</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} The populated <code>ScreenRecordingFilterValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [ScreenRecordingFilterValuesEvent]);
      if (data.hasOwnProperty('geolocation_countries'))
        obj.geolocation_countries = ApiClient.convertToType(data['geolocation_countries'], ['String']);
      if (data.hasOwnProperty('geolocation_states'))
        obj.geolocation_states = ApiClient.convertToType(data['geolocation_states'], ['String']);
      if (data.hasOwnProperty('max_values'))
        obj.max_values = ApiClient.convertToType(data['max_values'], 'Number');
      if (data.hasOwnProperty('urls'))
        obj.urls = ApiClient.convertToType(data['urls'], ['String']);
      if (data.hasOwnProperty('user_agent_device_names'))
        obj.user_agent_device_names = ApiClient.convertToType(data['user_agent_device_names'], ['String']);
      if (data.hasOwnProperty('user_agent_device_os_names'))
        obj.user_agent_device_os_names = ApiClient.convertToType(data['user_agent_device_os_names'], ['String']);
      if (data.hasOwnProperty('user_agent_device_os_versions'))
        obj.user_agent_device_os_versions = ApiClient.convertToType(data['user_agent_device_os_versions'], ['String']);
      if (data.hasOwnProperty('user_agent_names'))
        obj.user_agent_names = ApiClient.convertToType(data['user_agent_names'], ['String']);
      if (data.hasOwnProperty('user_agent_originals'))
        obj.user_agent_originals = ApiClient.convertToType(data['user_agent_originals'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent>} events
   */
  exports.prototype.events = undefined;

  /**
   * @member {Array.<String>} geolocation_countries
   */
  exports.prototype.geolocation_countries = undefined;

  /**
   * @member {Array.<String>} geolocation_states
   */
  exports.prototype.geolocation_states = undefined;

  /**
   * @member {Number} max_values
   */
  exports.prototype.max_values = undefined;

  /**
   * @member {Array.<String>} urls
   */
  exports.prototype.urls = undefined;

  /**
   * @member {Array.<String>} user_agent_device_names
   */
  exports.prototype.user_agent_device_names = undefined;

  /**
   * @member {Array.<String>} user_agent_device_os_names
   */
  exports.prototype.user_agent_device_os_names = undefined;

  /**
   * @member {Array.<String>} user_agent_device_os_versions
   */
  exports.prototype.user_agent_device_os_versions = undefined;

  /**
   * @member {Array.<String>} user_agent_names
   */
  exports.prototype.user_agent_names = undefined;

  /**
   * @member {Array.<String>} user_agent_originals
   */
  exports.prototype.user_agent_originals = undefined;

  return exports;

}));
