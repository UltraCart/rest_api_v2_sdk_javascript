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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSource', 'com.ultracart.admin.v2.models/ReportFilter', 'com.ultracart.admin.v2.models/ReportPageVisualizationDimension', 'com.ultracart.admin.v2.models/ReportPageVisualizationMetric'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSource'), require('./ReportFilter'), require('./ReportPageVisualizationDimension'), require('./ReportPageVisualizationMetric'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportDataSetQuery = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSource, root.UltraCartRestApiV2.ReportFilter, root.UltraCartRestApiV2.ReportPageVisualizationDimension, root.UltraCartRestApiV2.ReportPageVisualizationMetric);
  }
}(this, function(ApiClient, ReportDataSource, ReportFilter, ReportPageVisualizationDimension, ReportPageVisualizationMetric) {
  'use strict';

  /**
   * The ReportDataSetQuery model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetQuery
   * @version 3.10.140
   */

  /**
   * Constructs a new <code>ReportDataSetQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetQuery} The populated <code>ReportDataSetQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('comparison_results'))
        obj.comparison_results = ApiClient.convertToType(data['comparison_results'], 'Boolean');
      if (data.hasOwnProperty('data_set_query_uuid'))
        obj.data_set_query_uuid = ApiClient.convertToType(data['data_set_query_uuid'], 'String');
      if (data.hasOwnProperty('data_source'))
        obj.data_source = ReportDataSource.constructFromObject(data['data_source']);
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = ApiClient.convertToType(data['dimensions'], [ReportPageVisualizationDimension]);
      if (data.hasOwnProperty('filter'))
        obj.filter = ReportFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('for_object_id'))
        obj.for_object_id = ApiClient.convertToType(data['for_object_id'], 'String');
      if (data.hasOwnProperty('for_object_type'))
        obj.for_object_type = ApiClient.convertToType(data['for_object_type'], 'String');
      if (data.hasOwnProperty('metrics'))
        obj.metrics = ApiClient.convertToType(data['metrics'], [ReportPageVisualizationMetric]);
      if (data.hasOwnProperty('page_size'))
        obj.page_size = ApiClient.convertToType(data['page_size'], 'Number');
      if (data.hasOwnProperty('selected_filters'))
        obj.selected_filters = ApiClient.convertToType(data['selected_filters'], [ReportFilter]);
      if (data.hasOwnProperty('skip_cache'))
        obj.skip_cache = ApiClient.convertToType(data['skip_cache'], 'Boolean');
      if (data.hasOwnProperty('user_data'))
        obj.user_data = ApiClient.convertToType(data['user_data'], 'String');
    }
    return obj;
  }

  /**
   * True if a date range filter is provided with comparison date ranges and two results should be returned for the query.
   * @member {Boolean} comparison_results
   */
  exports.prototype.comparison_results = undefined;

  /**
   * A unique identifier assigned to the data set query that is returned.
   * @member {String} data_set_query_uuid
   */
  exports.prototype.data_set_query_uuid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ReportDataSource} data_source
   */
  exports.prototype.data_source = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension>} dimensions
   */
  exports.prototype.dimensions = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ReportFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * An identifier that can be used to help match up the returned data set
   * @member {String} for_object_id
   */
  exports.prototype.for_object_id = undefined;

  /**
   * The type of object this data set is for
   * @member {module:com.ultracart.admin.v2.models/ReportDataSetQuery.ForObjectTypeEnum} for_object_type
   */
  exports.prototype.for_object_type = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric>} metrics
   */
  exports.prototype.metrics = undefined;

  /**
   * Result set page size.  The default value is 200 records.  Max is 10000.
   * @member {Number} page_size
   */
  exports.prototype.page_size = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilter>} selected_filters
   */
  exports.prototype.selected_filters = undefined;

  /**
   * True if the 15 minute cache should be skipped.
   * @member {Boolean} skip_cache
   */
  exports.prototype.skip_cache = undefined;

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
