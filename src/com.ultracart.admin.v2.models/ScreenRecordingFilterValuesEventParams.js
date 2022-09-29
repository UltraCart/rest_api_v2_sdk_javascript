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
    root.UltraCartRestApiV2.ScreenRecordingFilterValuesEventParams = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingFilterValuesEventParams model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
   * @version 3.10.53
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterValuesEventParams</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterValuesEventParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} The populated <code>ScreenRecordingFilterValuesEventParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('values_bd'))
        obj.values_bd = ApiClient.convertToType(data['values_bd'], ['Number']);
      if (data.hasOwnProperty('values_bool'))
        obj.values_bool = ApiClient.convertToType(data['values_bool'], ['Boolean']);
      if (data.hasOwnProperty('values_num'))
        obj.values_num = ApiClient.convertToType(data['values_num'], ['Number']);
      if (data.hasOwnProperty('values_text'))
        obj.values_text = ApiClient.convertToType(data['values_text'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<Number>} values_bd
   */
  exports.prototype.values_bd = undefined;

  /**
   * @member {Array.<Boolean>} values_bool
   */
  exports.prototype.values_bool = undefined;

  /**
   * @member {Array.<Number>} values_num
   */
  exports.prototype.values_num = undefined;

  /**
   * @member {Array.<String>} values_text
   */
  exports.prototype.values_text = undefined;

  return exports;

}));
