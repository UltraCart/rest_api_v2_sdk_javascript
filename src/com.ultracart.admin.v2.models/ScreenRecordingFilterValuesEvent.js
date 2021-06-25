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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterValuesEventParams'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterValuesEvent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterValuesEventParams);
  }
}(this, function(ApiClient, ScreenRecordingFilterValuesEventParams) {
  'use strict';

  /**
   * The ScreenRecordingFilterValuesEvent model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
   * @version 3.2.3
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterValuesEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterValuesEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} The populated <code>ScreenRecordingFilterValuesEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], [ScreenRecordingFilterValuesEventParams]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams>} params
   */
  exports.prototype.params = undefined;

  return exports;

}));
