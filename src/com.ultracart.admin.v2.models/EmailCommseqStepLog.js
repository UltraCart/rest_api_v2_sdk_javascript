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
    root.UltraCartRestApiV2.EmailCommseqStepLog = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqStepLog model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqStepLog
   * @version 3.8.6
   */

  /**
   * Constructs a new <code>EmailCommseqStepLog</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqStepLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqStepLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} The populated <code>EmailCommseqStepLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('log'))
        obj.log = ApiClient.convertToType(data['log'], 'String');
      if (data.hasOwnProperty('log_dts'))
        obj.log_dts = ApiClient.convertToType(data['log_dts'], 'String');
    }
    return obj;
  }

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Log text
   * @member {String} log
   */
  exports.prototype.log = undefined;

  /**
   * Log date/time
   * @member {String} log_dts
   */
  exports.prototype.log_dts = undefined;

  return exports;

}));
