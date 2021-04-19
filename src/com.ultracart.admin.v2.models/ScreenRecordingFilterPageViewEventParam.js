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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger', 'com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterRangeBigDecimal'), require('./ScreenRecordingFilterRangeInteger'), require('./ScreenRecordingFilterStringSearch'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterPageViewEventParam = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterRangeBigDecimal, root.UltraCartRestApiV2.ScreenRecordingFilterRangeInteger, root.UltraCartRestApiV2.ScreenRecordingFilterStringSearch);
  }
}(this, function(ApiClient, ScreenRecordingFilterRangeBigDecimal, ScreenRecordingFilterRangeInteger, ScreenRecordingFilterStringSearch) {
  'use strict';

  /**
   * The ScreenRecordingFilterPageViewEventParam model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
   * @version 3.1.25
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterPageViewEventParam</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterPageViewEventParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} The populated <code>ScreenRecordingFilterPageViewEventParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value_bd'))
        obj.value_bd = ScreenRecordingFilterRangeBigDecimal.constructFromObject(data['value_bd']);
      if (data.hasOwnProperty('value_bool'))
        obj.value_bool = ApiClient.convertToType(data['value_bool'], 'Boolean');
      if (data.hasOwnProperty('value_num'))
        obj.value_num = ScreenRecordingFilterRangeInteger.constructFromObject(data['value_num']);
      if (data.hasOwnProperty('value_text'))
        obj.value_text = ScreenRecordingFilterStringSearch.constructFromObject(data['value_text']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} value_bd
   */
  exports.prototype.value_bd = undefined;

  /**
   * @member {Boolean} value_bool
   */
  exports.prototype.value_bool = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} value_num
   */
  exports.prototype.value_num = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} value_text
   */
  exports.prototype.value_text = undefined;

  return exports;

}));
