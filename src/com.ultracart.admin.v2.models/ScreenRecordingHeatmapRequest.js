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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterRangeDate'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingHeatmapRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterRangeDate);
  }
}(this, function(ApiClient, ScreenRecordingFilterRangeDate) {
  'use strict';

  /**
   * The ScreenRecordingHeatmapRequest model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>ScreenRecordingHeatmapRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingHeatmapRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} The populated <code>ScreenRecordingHeatmapRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('range'))
        obj.range = ScreenRecordingFilterRangeDate.constructFromObject(data['range']);
      if (data.hasOwnProperty('screen_sizes'))
        obj.screen_sizes = ApiClient.convertToType(data['screen_sizes'], ['String']);
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} range
   */
  exports.prototype.range = undefined;

  /**
   * @member {Array.<String>} screen_sizes
   */
  exports.prototype.screen_sizes = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
