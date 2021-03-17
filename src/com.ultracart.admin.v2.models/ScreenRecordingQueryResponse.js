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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/ScreenRecording', 'com.ultracart.admin.v2.models/ScreenRecordingFilter', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValues', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./ScreenRecording'), require('./ScreenRecordingFilter'), require('./ScreenRecordingFilterValues'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingQueryResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.ScreenRecording, root.UltraCartRestApiV2.ScreenRecordingFilter, root.UltraCartRestApiV2.ScreenRecordingFilterValues, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, ScreenRecording, ScreenRecordingFilter, ScreenRecordingFilterValues, Warning) {
  'use strict';

  /**
   * The ScreenRecordingQueryResponse model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
   * @version 3.1.17
   */

  /**
   * Constructs a new <code>ScreenRecordingQueryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} The populated <code>ScreenRecordingQueryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('filter'))
        obj.filter = ScreenRecordingFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('filter_values'))
        obj.filter_values = ScreenRecordingFilterValues.constructFromObject(data['filter_values']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('screen_recordings'))
        obj.screen_recordings = ApiClient.convertToType(data['screen_recordings'], [ScreenRecording]);
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('warning'))
        obj.warning = Warning.constructFromObject(data['warning']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Error} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} filter_values
   */
  exports.prototype.filter_values = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecording>} screen_recordings
   */
  exports.prototype.screen_recordings = undefined;

  /**
   * Indicates if API call was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Warning} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
