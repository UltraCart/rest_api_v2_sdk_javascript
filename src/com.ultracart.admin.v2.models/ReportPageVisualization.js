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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportPageVisualizationDimension', 'com.ultracart.admin.v2.models/ReportPageVisualizationMetric'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportPageVisualizationDimension'), require('./ReportPageVisualizationMetric'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportPageVisualization = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportPageVisualizationDimension, root.UltraCartRestApiV2.ReportPageVisualizationMetric);
  }
}(this, function(ApiClient, ReportPageVisualizationDimension, ReportPageVisualizationMetric) {
  'use strict';

  /**
   * The ReportPageVisualization model module.
   * @module com.ultracart.admin.v2.models/ReportPageVisualization
   * @version 3.10.149
   */

  /**
   * Constructs a new <code>ReportPageVisualization</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualization
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportPageVisualization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportPageVisualization} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportPageVisualization} The populated <code>ReportPageVisualization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('config'))
        obj.config = ApiClient.convertToType(data['config'], 'String');
      if (data.hasOwnProperty('data_source_name'))
        obj.data_source_name = ApiClient.convertToType(data['data_source_name'], 'String');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = ApiClient.convertToType(data['dimensions'], [ReportPageVisualizationDimension]);
      if (data.hasOwnProperty('metrics'))
        obj.metrics = ApiClient.convertToType(data['metrics'], [ReportPageVisualizationMetric]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('show_comparison'))
        obj.show_comparison = ApiClient.convertToType(data['show_comparison'], 'Boolean');
      if (data.hasOwnProperty('styles'))
        obj.styles = ApiClient.convertToType(data['styles'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('visualization_uuid'))
        obj.visualization_uuid = ApiClient.convertToType(data['visualization_uuid'], 'String');
    }
    return obj;
  }

  /**
   * A JSON representation of the configuration for this visualization
   * @member {String} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {String} data_source_name
   */
  exports.prototype.data_source_name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension>} dimensions
   */
  exports.prototype.dimensions = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric>} metrics
   */
  exports.prototype.metrics = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * True if the visualization should show a comparison based upon the date range
   * @member {Boolean} show_comparison
   */
  exports.prototype.show_comparison = undefined;

  /**
   * A JSON representation of the style configuration for this visualization
   * @member {String} styles
   */
  exports.prototype.styles = undefined;

  /**
   * Type of visualization
   * @member {module:com.ultracart.admin.v2.models/ReportPageVisualization.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * A UUID for the visualization
   * @member {String} visualization_uuid
   */
  exports.prototype.visualization_uuid = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "score card"
     * @const
     */
    score_card: "score card",

    /**
     * value: "line chart"
     * @const
     */
    line_chart: "line chart",

    /**
     * value: "bar chart"
     * @const
     */
    bar_chart: "bar chart",

    /**
     * value: "text"
     * @const
     */
    text: "text",

    /**
     * value: "table"
     * @const
     */
    table: "table",

    /**
     * value: "gauge"
     * @const
     */
    gauge: "gauge",

    /**
     * value: "pie chart"
     * @const
     */
    pie_chart: "pie chart"
  };

  return exports;

}));
