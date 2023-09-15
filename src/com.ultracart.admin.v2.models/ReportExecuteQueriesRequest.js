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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSetQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSetQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportExecuteQueriesRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSetQuery);
  }
}(this, function(ApiClient, ReportDataSetQuery) {
  'use strict';

  /**
   * The ReportExecuteQueriesRequest model module.
   * @module com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>ReportExecuteQueriesRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportExecuteQueriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} The populated <code>ReportExecuteQueriesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('client_uuid'))
        obj.client_uuid = ApiClient.convertToType(data['client_uuid'], 'String');
      if (data.hasOwnProperty('connection_id'))
        obj.connection_id = ApiClient.convertToType(data['connection_id'], 'String');
      if (data.hasOwnProperty('default_dataset_id'))
        obj.default_dataset_id = ApiClient.convertToType(data['default_dataset_id'], 'String');
      if (data.hasOwnProperty('default_project_id'))
        obj.default_project_id = ApiClient.convertToType(data['default_project_id'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('queries'))
        obj.queries = ApiClient.convertToType(data['queries'], [ReportDataSetQuery]);
      if (data.hasOwnProperty('request_dts'))
        obj.request_dts = ApiClient.convertToType(data['request_dts'], 'String');
      if (data.hasOwnProperty('security_level'))
        obj.security_level = ApiClient.convertToType(data['security_level'], 'String');
    }
    return obj;
  }

  /**
   * Unique UUID assigned to this client during the auth.  This will be used to locate the websocket connect id.
   * @member {String} client_uuid
   */
  exports.prototype.client_uuid = undefined;

  /**
   * The websocket connection id that should receive back notices of query completion.
   * @member {String} connection_id
   */
  exports.prototype.connection_id = undefined;

  /**
   * @member {String} default_dataset_id
   */
  exports.prototype.default_dataset_id = undefined;

  /**
   * @member {String} default_project_id
   */
  exports.prototype.default_project_id = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * An array of queries that we want the lambda function to execute.
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetQuery>} queries
   */
  exports.prototype.queries = undefined;

  /**
   * Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results
   * @member {String} request_dts
   */
  exports.prototype.request_dts = undefined;

  /**
   * Security level to execute report under
   * @member {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest.SecurityLevelEnum} security_level
   */
  exports.prototype.security_level = undefined;


  /**
   * Allowed values for the <code>security_level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SecurityLevelEnum = {
    /**
     * value: "standard"
     * @const
     */
    standard: "standard",

    /**
     * value: "low"
     * @const
     */
    low: "low",

    /**
     * value: "medium"
     * @const
     */
    medium: "medium",

    /**
     * value: "high"
     * @const
     */
    high: "high"
  };

  return exports;

}));
