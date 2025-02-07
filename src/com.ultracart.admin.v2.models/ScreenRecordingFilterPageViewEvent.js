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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterPageViewEventParam'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterPageViewEvent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterPageViewEventParam);
  }
}(this, function(ApiClient, ScreenRecordingFilterPageViewEventParam) {
  'use strict';

  /**
   * The ScreenRecordingFilterPageViewEvent model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterPageViewEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} The populated <code>ScreenRecordingFilterPageViewEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('event_name'))
        obj.event_name = ApiClient.convertToType(data['event_name'], 'String');
      if (data.hasOwnProperty('event_params'))
        obj.event_params = ApiClient.convertToType(data['event_params'], [ScreenRecordingFilterPageViewEventParam]);
    }
    return obj;
  }

  /**
   * @member {String} event_name
   */
  exports.prototype.event_name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam>} event_params
   */
  exports.prototype.event_params = undefined;

  return exports;

}));
