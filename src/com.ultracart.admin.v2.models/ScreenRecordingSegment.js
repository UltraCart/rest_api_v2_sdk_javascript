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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingSegment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilter);
  }
}(this, function(ApiClient, ScreenRecordingFilter) {
  'use strict';

  /**
   * The ScreenRecordingSegment model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingSegment
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>ScreenRecordingSegment</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSegment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} The populated <code>ScreenRecordingSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('create_dts'))
        obj.create_dts = ApiClient.convertToType(data['create_dts'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('filter'))
        obj.filter = ScreenRecordingFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('histogram_data'))
        obj.histogram_data = ApiClient.convertToType(data['histogram_data'], ['Number']);
      if (data.hasOwnProperty('histogram_interval'))
        obj.histogram_interval = ApiClient.convertToType(data['histogram_interval'], 'String');
      if (data.hasOwnProperty('histogram_start_dts'))
        obj.histogram_start_dts = ApiClient.convertToType(data['histogram_start_dts'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('screen_recording_segment_oid'))
        obj.screen_recording_segment_oid = ApiClient.convertToType(data['screen_recording_segment_oid'], 'Number');
      if (data.hasOwnProperty('session_count'))
        obj.session_count = ApiClient.convertToType(data['session_count'], 'Number');
      if (data.hasOwnProperty('session_count_last_update_dts'))
        obj.session_count_last_update_dts = ApiClient.convertToType(data['session_count_last_update_dts'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} create_dts
   */
  exports.prototype.create_dts = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {Array.<Number>} histogram_data
   */
  exports.prototype.histogram_data = undefined;

  /**
   * @member {String} histogram_interval
   */
  exports.prototype.histogram_interval = undefined;

  /**
   * @member {String} histogram_start_dts
   */
  exports.prototype.histogram_start_dts = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} screen_recording_segment_oid
   */
  exports.prototype.screen_recording_segment_oid = undefined;

  /**
   * @member {Number} session_count
   */
  exports.prototype.session_count = undefined;

  /**
   * @member {String} session_count_last_update_dts
   */
  exports.prototype.session_count_last_update_dts = undefined;

  return exports;

}));
