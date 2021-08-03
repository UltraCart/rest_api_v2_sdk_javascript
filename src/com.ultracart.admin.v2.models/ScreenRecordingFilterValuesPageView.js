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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterValuesEvent'), require('./ScreenRecordingFilterValuesPageParam'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterValuesPageView = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterValuesEvent, root.UltraCartRestApiV2.ScreenRecordingFilterValuesPageParam);
  }
}(this, function(ApiClient, ScreenRecordingFilterValuesEvent, ScreenRecordingFilterValuesPageParam) {
  'use strict';

  /**
   * The ScreenRecordingFilterValuesPageView model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
   * @version 3.4.3
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterValuesPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterValuesPageView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} The populated <code>ScreenRecordingFilterValuesPageView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domains'))
        obj.domains = ApiClient.convertToType(data['domains'], ['String']);
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [ScreenRecordingFilterValuesEvent]);
      if (data.hasOwnProperty('page_params'))
        obj.page_params = ApiClient.convertToType(data['page_params'], [ScreenRecordingFilterValuesPageParam]);
      if (data.hasOwnProperty('time_on_page_max'))
        obj.time_on_page_max = ApiClient.convertToType(data['time_on_page_max'], 'Number');
      if (data.hasOwnProperty('time_on_page_min'))
        obj.time_on_page_min = ApiClient.convertToType(data['time_on_page_min'], 'Number');
      if (data.hasOwnProperty('urls'))
        obj.urls = ApiClient.convertToType(data['urls'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} domains
   */
  exports.prototype.domains = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent>} events
   */
  exports.prototype.events = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam>} page_params
   */
  exports.prototype.page_params = undefined;

  /**
   * @member {Number} time_on_page_max
   */
  exports.prototype.time_on_page_max = undefined;

  /**
   * @member {Number} time_on_page_min
   */
  exports.prototype.time_on_page_min = undefined;

  /**
   * @member {Array.<String>} urls
   */
  exports.prototype.urls = undefined;

  return exports;

}));
