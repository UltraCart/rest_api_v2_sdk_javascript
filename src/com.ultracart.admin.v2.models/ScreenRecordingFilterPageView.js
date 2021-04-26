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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent', 'com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam', 'com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger', 'com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterPageViewEvent'), require('./ScreenRecordingFilterPageViewParam'), require('./ScreenRecordingFilterPageViewReferrerParam'), require('./ScreenRecordingFilterRangeInteger'), require('./ScreenRecordingFilterStringSearch'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterPageView = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterPageViewEvent, root.UltraCartRestApiV2.ScreenRecordingFilterPageViewParam, root.UltraCartRestApiV2.ScreenRecordingFilterPageViewReferrerParam, root.UltraCartRestApiV2.ScreenRecordingFilterRangeInteger, root.UltraCartRestApiV2.ScreenRecordingFilterStringSearch);
  }
}(this, function(ApiClient, ScreenRecordingFilterPageViewEvent, ScreenRecordingFilterPageViewParam, ScreenRecordingFilterPageViewReferrerParam, ScreenRecordingFilterRangeInteger, ScreenRecordingFilterStringSearch) {
  'use strict';

  /**
   * The ScreenRecordingFilterPageView model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
   * @version 3.1.28
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterPageView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} The populated <code>ScreenRecordingFilterPageView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [ScreenRecordingFilterPageViewEvent]);
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], [ScreenRecordingFilterPageViewParam]);
      if (data.hasOwnProperty('referrer'))
        obj.referrer = ScreenRecordingFilterStringSearch.constructFromObject(data['referrer']);
      if (data.hasOwnProperty('referrer_params'))
        obj.referrer_params = ApiClient.convertToType(data['referrer_params'], [ScreenRecordingFilterPageViewReferrerParam]);
      if (data.hasOwnProperty('referrer_raw'))
        obj.referrer_raw = ScreenRecordingFilterStringSearch.constructFromObject(data['referrer_raw']);
      if (data.hasOwnProperty('time_on_page'))
        obj.time_on_page = ScreenRecordingFilterRangeInteger.constructFromObject(data['time_on_page']);
      if (data.hasOwnProperty('url'))
        obj.url = ScreenRecordingFilterStringSearch.constructFromObject(data['url']);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent>} events
   */
  exports.prototype.events = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam>} params
   */
  exports.prototype.params = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} referrer
   */
  exports.prototype.referrer = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam>} referrer_params
   */
  exports.prototype.referrer_params = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} referrer_raw
   */
  exports.prototype.referrer_raw = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} time_on_page
   */
  exports.prototype.time_on_page = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} url
   */
  exports.prototype.url = undefined;

  return exports;

}));
