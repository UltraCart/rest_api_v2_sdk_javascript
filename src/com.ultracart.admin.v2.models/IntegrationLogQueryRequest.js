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
    root.UltraCartRestApiV2.IntegrationLogQueryRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegrationLogQueryRequest model module.
   * @module com.ultracart.admin.v2.models/IntegrationLogQueryRequest
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>IntegrationLogQueryRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IntegrationLogQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest} The populated <code>IntegrationLogQueryRequest</code> instance.
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
      if (data.hasOwnProperty('file_names'))
        obj.file_names = ApiClient.convertToType(data['file_names'], ['String']);
      if (data.hasOwnProperty('item_id'))
        obj.item_id = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('item_ipn_oid'))
        obj.item_ipn_oid = ApiClient.convertToType(data['item_ipn_oid'], 'Number');
      if (data.hasOwnProperty('log_dts_begin'))
        obj.log_dts_begin = ApiClient.convertToType(data['log_dts_begin'], 'String');
      if (data.hasOwnProperty('log_dts_end'))
        obj.log_dts_end = ApiClient.convertToType(data['log_dts_end'], 'String');
      if (data.hasOwnProperty('log_type'))
        obj.log_type = ApiClient.convertToType(data['log_type'], 'String');
      if (data.hasOwnProperty('logger_id'))
        obj.logger_id = ApiClient.convertToType(data['logger_id'], 'String');
      if (data.hasOwnProperty('logger_name'))
        obj.logger_name = ApiClient.convertToType(data['logger_name'], 'String');
      if (data.hasOwnProperty('order_ids'))
        obj.order_ids = ApiClient.convertToType(data['order_ids'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
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
   * @member {Array.<String>} file_names
   */
  exports.prototype.file_names = undefined;

  /**
   * @member {String} item_id
   */
  exports.prototype.item_id = undefined;

  /**
   * @member {Number} item_ipn_oid
   */
  exports.prototype.item_ipn_oid = undefined;

  /**
   * Log date/time begin
   * @member {String} log_dts_begin
   */
  exports.prototype.log_dts_begin = undefined;

  /**
   * Log date/time end
   * @member {String} log_dts_end
   */
  exports.prototype.log_dts_end = undefined;

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
   * @member {Array.<String>} order_ids
   */
  exports.prototype.order_ids = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  return exports;

}));
