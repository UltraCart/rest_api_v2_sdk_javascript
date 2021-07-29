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
    define(['ApiClient', 'com.ultracart.admin.v2.models/IntegrationLogFile', 'com.ultracart.admin.v2.models/IntegrationLogLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntegrationLogFile'), require('./IntegrationLogLog'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.IntegrationLog = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.IntegrationLogFile, root.UltraCartRestApiV2.IntegrationLogLog);
  }
}(this, function(ApiClient, IntegrationLogFile, IntegrationLogLog) {
  'use strict';

  /**
   * The IntegrationLog model module.
   * @module com.ultracart.admin.v2.models/IntegrationLog
   * @version 3.4.2
   */

  /**
   * Constructs a new <code>IntegrationLog</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IntegrationLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/IntegrationLog} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/IntegrationLog} The populated <code>IntegrationLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('files'))
        obj.files = ApiClient.convertToType(data['files'], [IntegrationLogFile]);
      if (data.hasOwnProperty('integration_log_oid'))
        obj.integration_log_oid = ApiClient.convertToType(data['integration_log_oid'], 'Number');
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('item_ipn_oid'))
        obj.item_ipn_oid = ApiClient.convertToType(data['item_ipn_oid'], 'Number');
      if (data.hasOwnProperty('log_dts'))
        obj.log_dts = ApiClient.convertToType(data['log_dts'], 'String');
      if (data.hasOwnProperty('log_type'))
        obj.log_type = ApiClient.convertToType(data['log_type'], 'String');
      if (data.hasOwnProperty('logger_id'))
        obj.logger_id = ApiClient.convertToType(data['logger_id'], 'String');
      if (data.hasOwnProperty('logger_name'))
        obj.logger_name = ApiClient.convertToType(data['logger_name'], 'String');
      if (data.hasOwnProperty('logs'))
        obj.logs = ApiClient.convertToType(data['logs'], [IntegrationLogLog]);
      if (data.hasOwnProperty('omit_log_map'))
        obj.omit_log_map = ApiClient.convertToType(data['omit_log_map'], 'Boolean');
      if (data.hasOwnProperty('order_ids'))
        obj.order_ids = ApiClient.convertToType(data['order_ids'], ['String']);
      if (data.hasOwnProperty('pk'))
        obj.pk = ApiClient.convertToType(data['pk'], 'String');
      if (data.hasOwnProperty('sk'))
        obj.sk = ApiClient.convertToType(data['sk'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('status_code'))
        obj.status_code = ApiClient.convertToType(data['status_code'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * @member {String} direction
   */
  exports.prototype.direction = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogFile>} files
   */
  exports.prototype.files = undefined;

  /**
   * @member {Number} integration_log_oid
   */
  exports.prototype.integration_log_oid = undefined;

  /**
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * @member {Number} item_ipn_oid
   */
  exports.prototype.item_ipn_oid = undefined;

  /**
   * Date/time the integration log was created
   * @member {String} log_dts
   */
  exports.prototype.log_dts = undefined;

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
   * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogLog>} logs
   */
  exports.prototype.logs = undefined;

  /**
   * @member {Boolean} omit_log_map
   */
  exports.prototype.omit_log_map = undefined;

  /**
   * @member {Array.<String>} order_ids
   */
  exports.prototype.order_ids = undefined;

  /**
   * @member {String} pk
   */
  exports.prototype.pk = undefined;

  /**
   * @member {String} sk
   */
  exports.prototype.sk = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} status_code
   */
  exports.prototype.status_code = undefined;

  return exports;

}));
