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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingPageViewEventParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingPageViewEvent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingPageViewEventParameter);
  }
}(this, function(ApiClient, ScreenRecordingPageViewEventParameter) {
  'use strict';

  /**
   * The ScreenRecordingPageViewEvent model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
   * @version 3.10.96
   */

  /**
   * Constructs a new <code>ScreenRecordingPageViewEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} The populated <code>ScreenRecordingPageViewEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], [ScreenRecordingPageViewEventParameter]);
      if (data.hasOwnProperty('prior_page_view'))
        obj.prior_page_view = ApiClient.convertToType(data['prior_page_view'], 'Boolean');
      if (data.hasOwnProperty('sub_text'))
        obj.sub_text = ApiClient.convertToType(data['sub_text'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'String');
      if (data.hasOwnProperty('ts'))
        obj.ts = ApiClient.convertToType(data['ts'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter>} params
   */
  exports.prototype.params = undefined;

  /**
   * @member {Boolean} prior_page_view
   */
  exports.prototype.prior_page_view = undefined;

  /**
   * @member {String} sub_text
   */
  exports.prototype.sub_text = undefined;

  /**
   * Timestamp of the event
   * @member {String} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {Number} ts
   */
  exports.prototype.ts = undefined;

  return exports;

}));
