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
    root.UltraCartRestApiV2.ScreenRecordingHeatmapUrl = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingHeatmapUrl model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>ScreenRecordingHeatmapUrl</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingHeatmapUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} The populated <code>ScreenRecordingHeatmapUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('histogram_data'))
        obj.histogram_data = ApiClient.convertToType(data['histogram_data'], ['Number']);
      if (data.hasOwnProperty('histogram_interval'))
        obj.histogram_interval = ApiClient.convertToType(data['histogram_interval'], 'String');
      if (data.hasOwnProperty('histogram_start_dts'))
        obj.histogram_start_dts = ApiClient.convertToType(data['histogram_start_dts'], 'String');
      if (data.hasOwnProperty('page_rank'))
        obj.page_rank = ApiClient.convertToType(data['page_rank'], 'Number');
      if (data.hasOwnProperty('session_count'))
        obj.session_count = ApiClient.convertToType(data['session_count'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

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
   * @member {Number} page_rank
   */
  exports.prototype.page_rank = undefined;

  /**
   * @member {Number} session_count
   */
  exports.prototype.session_count = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
