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
    root.UltraCartRestApiV2.IntegrationLogSummary = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegrationLogSummary model module.
   * @module com.ultracart.admin.v2.models/IntegrationLogSummary
   * @version 3.10.78
   */

  /**
   * Constructs a new <code>IntegrationLogSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummary
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IntegrationLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummary} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummary} The populated <code>IntegrationLogSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('critical'))
        obj.critical = ApiClient.convertToType(data['critical'], 'Number');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'Number');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], 'Number');
      if (data.hasOwnProperty('log_type'))
        obj.log_type = ApiClient.convertToType(data['log_type'], 'String');
      if (data.hasOwnProperty('logger_id'))
        obj.logger_id = ApiClient.convertToType(data['logger_id'], 'String');
      if (data.hasOwnProperty('logger_name'))
        obj.logger_name = ApiClient.convertToType(data['logger_name'], 'String');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Number');
      if (data.hasOwnProperty('view_url'))
        obj.view_url = ApiClient.convertToType(data['view_url'], 'String');
      if (data.hasOwnProperty('warning'))
        obj.warning = ApiClient.convertToType(data['warning'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} critical
   */
  exports.prototype.critical = undefined;

  /**
   * @member {Number} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {Number} events
   */
  exports.prototype.events = undefined;

  /**
   * @member {String} log_type
   */
  exports.prototype.log_type = undefined;

  /**
   * @member {String} logger_id
   */
  exports.prototype.logger_id = undefined;

  /**
   * @member {String} logger_name
   */
  exports.prototype.logger_name = undefined;

  /**
   * @member {Number} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {String} view_url
   */
  exports.prototype.view_url = undefined;

  /**
   * @member {Number} warning
   */
  exports.prototype.warning = undefined;

  return exports;

}));
