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
    root.UltraCartRestApiV2.ScreenRecordingFilterRangeBigDecimal = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingFilterRangeBigDecimal model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
   * @version 3.10.73
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterRangeBigDecimal</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterRangeBigDecimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} The populated <code>ScreenRecordingFilterRangeBigDecimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('eq'))
        obj.eq = ApiClient.convertToType(data['eq'], 'Number');
      if (data.hasOwnProperty('gt'))
        obj.gt = ApiClient.convertToType(data['gt'], 'Number');
      if (data.hasOwnProperty('gte'))
        obj.gte = ApiClient.convertToType(data['gte'], 'Number');
      if (data.hasOwnProperty('lt'))
        obj.lt = ApiClient.convertToType(data['lt'], 'Number');
      if (data.hasOwnProperty('lte'))
        obj.lte = ApiClient.convertToType(data['lte'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} eq
   */
  exports.prototype.eq = undefined;

  /**
   * @member {Number} gt
   */
  exports.prototype.gt = undefined;

  /**
   * @member {Number} gte
   */
  exports.prototype.gte = undefined;

  /**
   * @member {Number} lt
   */
  exports.prototype.lt = undefined;

  /**
   * @member {Number} lte
   */
  exports.prototype.lte = undefined;

  return exports;

}));
