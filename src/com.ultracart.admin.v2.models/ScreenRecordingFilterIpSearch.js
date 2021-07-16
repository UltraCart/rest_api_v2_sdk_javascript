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
    root.UltraCartRestApiV2.ScreenRecordingFilterIpSearch = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScreenRecordingFilterIpSearch model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterIpSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterIpSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} The populated <code>ScreenRecordingFilterIpSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('does_not_exist'))
        obj.does_not_exist = ApiClient.convertToType(data['does_not_exist'], 'Boolean');
      if (data.hasOwnProperty('exists'))
        obj.exists = ApiClient.convertToType(data['exists'], 'Boolean');
      if (data.hasOwnProperty('is'))
        obj.is = ApiClient.convertToType(data['is'], 'String');
      if (data.hasOwnProperty('is_not'))
        obj.is_not = ApiClient.convertToType(data['is_not'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} does_not_exist
   */
  exports.prototype.does_not_exist = undefined;

  /**
   * @member {Boolean} exists
   */
  exports.prototype.exists = undefined;

  /**
   * @member {String} is
   */
  exports.prototype.is = undefined;

  /**
   * @member {String} is_not
   */
  exports.prototype.is_not = undefined;

  return exports;

}));
