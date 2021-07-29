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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterStringSearch'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterPageViewParam = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterStringSearch);
  }
}(this, function(ApiClient, ScreenRecordingFilterStringSearch) {
  'use strict';

  /**
   * The ScreenRecordingFilterPageViewParam model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterPageViewParam</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterPageViewParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam} The populated <code>ScreenRecordingFilterPageViewParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ScreenRecordingFilterStringSearch.constructFromObject(data['value']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
