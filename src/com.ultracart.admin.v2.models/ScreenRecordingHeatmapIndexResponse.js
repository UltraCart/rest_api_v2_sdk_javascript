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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Error', 'com.ultracart.admin.v2.models/ResponseMetadata', 'com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl', 'com.ultracart.admin.v2.models/Warning'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ResponseMetadata'), require('./ScreenRecordingHeatmapUrl'), require('./Warning'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingHeatmapIndexResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Error, root.UltraCartRestApiV2.ResponseMetadata, root.UltraCartRestApiV2.ScreenRecordingHeatmapUrl, root.UltraCartRestApiV2.Warning);
  }
}(this, function(ApiClient, Error, ResponseMetadata, ScreenRecordingHeatmapUrl, Warning) {
  'use strict';

  /**
   * The ScreenRecordingHeatmapIndexResponse model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>ScreenRecordingHeatmapIndexResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingHeatmapIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse} The populated <code>ScreenRecordingHeatmapIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
      if (data.hasOwnProperty('heatmap_urls'))
        obj.heatmap_urls = ApiClient.convertToType(data['heatmap_urls'], [ScreenRecordingHeatmapUrl]);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ResponseMetadata.constructFromObject(data['metadata']);
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
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl>} heatmap_urls
   */
  exports.prototype.heatmap_urls = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

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
