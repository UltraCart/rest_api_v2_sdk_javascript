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
    root.UltraCartRestApiV2.AutoOrderLog = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AutoOrderLog model module.
   * @module com.ultracart.admin.v2.models/AutoOrderLog
   * @version 3.10.105
   */

  /**
   * Constructs a new <code>AutoOrderLog</code>.
   * @alias module:com.ultracart.admin.v2.models/AutoOrderLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AutoOrderLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AutoOrderLog} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AutoOrderLog} The populated <code>AutoOrderLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('log_dts'))
        obj.log_dts = ApiClient.convertToType(data['log_dts'], 'String');
      if (data.hasOwnProperty('log_message'))
        obj.log_message = ApiClient.convertToType(data['log_message'], 'String');
    }
    return obj;
  }

  /**
   * Date/time that the log message was added
   * @member {String} log_dts
   */
  exports.prototype.log_dts = undefined;

  /**
   * Log message
   * @member {String} log_message
   */
  exports.prototype.log_message = undefined;

  return exports;

}));
