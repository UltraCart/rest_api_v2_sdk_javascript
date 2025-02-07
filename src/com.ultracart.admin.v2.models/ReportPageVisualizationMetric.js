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
    root.UltraCartRestApiV2.ReportPageVisualizationMetric = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportPageVisualizationMetric model module.
   * @module com.ultracart.admin.v2.models/ReportPageVisualizationMetric
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ReportPageVisualizationMetric</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportPageVisualizationMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric} The populated <code>ReportPageVisualizationMetric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggregation'))
        obj.aggregation = ApiClient.convertToType(data['aggregation'], 'String');
      if (data.hasOwnProperty('as'))
        obj.as = ApiClient.convertToType(data['as'], 'String');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'String');
      if (data.hasOwnProperty('round'))
        obj.round = ApiClient.convertToType(data['round'], 'Number');
    }
    return obj;
  }

  /**
   * Aggregation to perform
   * @member {module:com.ultracart.admin.v2.models/ReportPageVisualizationMetric.AggregationEnum} aggregation
   */
  exports.prototype.aggregation = undefined;

  /**
   * Return the column as a different name
   * @member {String} as
   */
  exports.prototype.as = undefined;

  /**
   * @member {String} column
   */
  exports.prototype.column = undefined;

  /**
   * Number of places after the decimal point to round the number to.
   * @member {Number} round
   */
  exports.prototype.round = undefined;


  /**
   * Allowed values for the <code>aggregation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AggregationEnum = {
    /**
     * value: "sum"
     * @const
     */
    sum: "sum",

    /**
     * value: "count"
     * @const
     */
    count: "count",

    /**
     * value: "min"
     * @const
     */
    min: "min",

    /**
     * value: "max"
     * @const
     */
    max: "max",

    /**
     * value: "avg"
     * @const
     */
    avg: "avg",

    /**
     * value: "none"
     * @const
     */
    none: "none"
  };

  return exports;

}));
