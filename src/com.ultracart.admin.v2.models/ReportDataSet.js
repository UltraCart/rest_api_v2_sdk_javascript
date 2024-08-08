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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSetPage', 'com.ultracart.admin.v2.models/ReportDataSetSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSetPage'), require('./ReportDataSetSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportDataSet = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSetPage, root.UltraCartRestApiV2.ReportDataSetSchema);
  }
}(this, function(ApiClient, ReportDataSetPage, ReportDataSetSchema) {
  'use strict';

  /**
   * The ReportDataSet model module.
   * @module com.ultracart.admin.v2.models/ReportDataSet
   * @version 3.10.214
   */

  /**
   * Constructs a new <code>ReportDataSet</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSet
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSet} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSet} The populated <code>ReportDataSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data_set_query_uuid'))
        obj.data_set_query_uuid = ApiClient.convertToType(data['data_set_query_uuid'], 'String');
      if (data.hasOwnProperty('data_set_uuid'))
        obj.data_set_uuid = ApiClient.convertToType(data['data_set_uuid'], 'String');
      if (data.hasOwnProperty('destination_table_id'))
        obj.destination_table_id = ApiClient.convertToType(data['destination_table_id'], 'String');
      if (data.hasOwnProperty('error_message'))
        obj.error_message = ApiClient.convertToType(data['error_message'], 'String');
      if (data.hasOwnProperty('executed_sql'))
        obj.executed_sql = ApiClient.convertToType(data['executed_sql'], 'String');
      if (data.hasOwnProperty('for_object_id'))
        obj.for_object_id = ApiClient.convertToType(data['for_object_id'], 'String');
      if (data.hasOwnProperty('for_object_type'))
        obj.for_object_type = ApiClient.convertToType(data['for_object_type'], 'String');
      if (data.hasOwnProperty('initial_pages'))
        obj.initial_pages = ApiClient.convertToType(data['initial_pages'], [ReportDataSetPage]);
      if (data.hasOwnProperty('max_results'))
        obj.max_results = ApiClient.convertToType(data['max_results'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('page_count'))
        obj.page_count = ApiClient.convertToType(data['page_count'], 'Number');
      if (data.hasOwnProperty('page_size'))
        obj.page_size = ApiClient.convertToType(data['page_size'], 'Number');
      if (data.hasOwnProperty('request_dts'))
        obj.request_dts = ApiClient.convertToType(data['request_dts'], 'String');
      if (data.hasOwnProperty('schema'))
        obj.schema = ApiClient.convertToType(data['schema'], [ReportDataSetSchema]);
      if (data.hasOwnProperty('security_level'))
        obj.security_level = ApiClient.convertToType(data['security_level'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('user_data'))
        obj.user_data = ApiClient.convertToType(data['user_data'], 'String');
    }
    return obj;
  }

  /**
   * A unique identifier assigned to the data set query that is returned.
   * @member {String} data_set_query_uuid
   */
  exports.prototype.data_set_query_uuid = undefined;

  /**
   * A unique identifier assigned to the data set that is returned.
   * @member {String} data_set_uuid
   */
  exports.prototype.data_set_uuid = undefined;

  /**
   * The BigQuery destination table id that contains the result.
   * @member {String} destination_table_id
   */
  exports.prototype.destination_table_id = undefined;

  /**
   * Error message if the query failed.
   * @member {String} error_message
   */
  exports.prototype.error_message = undefined;

  /**
   * @member {String} executed_sql
   */
  exports.prototype.executed_sql = undefined;

  /**
   * An identifier that can be used to help match up the returned data set
   * @member {String} for_object_id
   */
  exports.prototype.for_object_id = undefined;

  /**
   * The type of object this data set is for
   * @member {module:com.ultracart.admin.v2.models/ReportDataSet.ForObjectTypeEnum} for_object_type
   */
  exports.prototype.for_object_type = undefined;

  /**
   * Initial pages returned in the dataset
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetPage>} initial_pages
   */
  exports.prototype.initial_pages = undefined;

  /**
   * The total number of results
   * @member {Number} max_results
   */
  exports.prototype.max_results = undefined;

  /**
   * Merchant that owns this data set
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * The total number of pages in the result set
   * @member {Number} page_count
   */
  exports.prototype.page_count = undefined;

  /**
   * The size of the pages
   * @member {Number} page_size
   */
  exports.prototype.page_size = undefined;

  /**
   * Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results
   * @member {String} request_dts
   */
  exports.prototype.request_dts = undefined;

  /**
   * The schema associated with the data set.
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetSchema>} schema
   */
  exports.prototype.schema = undefined;

  /**
   * Security level this dataset was read from.
   * @member {String} security_level
   */
  exports.prototype.security_level = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * Any other data that needs to be returned with the response to help the UI
   * @member {String} user_data
   */
  exports.prototype.user_data = undefined;


  /**
   * Allowed values for the <code>for_object_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ForObjectTypeEnum = {
    /**
     * value: "schema"
     * @const
     */
    schema: "schema",

    /**
     * value: "filter"
     * @const
     */
    filter: "filter",

    /**
     * value: "visualization"
     * @const
     */
    visualization: "visualization"
  };

  return exports;

}));
