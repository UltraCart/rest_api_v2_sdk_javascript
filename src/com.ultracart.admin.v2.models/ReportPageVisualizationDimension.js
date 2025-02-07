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
    root.UltraCartRestApiV2.ReportPageVisualizationDimension = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportPageVisualizationDimension model module.
   * @module com.ultracart.admin.v2.models/ReportPageVisualizationDimension
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ReportPageVisualizationDimension</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportPageVisualizationDimension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportPageVisualizationDimension} The populated <code>ReportPageVisualizationDimension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('as'))
        obj.as = ApiClient.convertToType(data['as'], 'String');
      if (data.hasOwnProperty('cast'))
        obj.cast = ApiClient.convertToType(data['cast'], 'String');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'String');
      if (data.hasOwnProperty('datetime_timezone'))
        obj.datetime_timezone = ApiClient.convertToType(data['datetime_timezone'], 'String');
      if (data.hasOwnProperty('datetime_trunc'))
        obj.datetime_trunc = ApiClient.convertToType(data['datetime_trunc'], 'String');
      if (data.hasOwnProperty('extract'))
        obj.extract = ApiClient.convertToType(data['extract'], 'String');
      if (data.hasOwnProperty('function'))
        obj._function = ApiClient.convertToType(data['function'], 'String');
    }
    return obj;
  }

  /**
   * Return the column as a different name
   * @member {String} as
   */
  exports.prototype.as = undefined;

  /**
   * Cast the column to a different data type such as DATETIME -> DATE
   * @member {String} cast
   */
  exports.prototype.cast = undefined;

  /**
   * @member {String} column
   */
  exports.prototype.column = undefined;

  /**
   * The timezone to shift the date to
   * @member {String} datetime_timezone
   */
  exports.prototype.datetime_timezone = undefined;

  /**
   * The type of truncation to perform on the date, DAY, WEEK(MONDAY), etc.
   * @member {String} datetime_trunc
   */
  exports.prototype.datetime_trunc = undefined;

  /**
   * Part of a datetime to extract
   * @member {String} extract
   */
  exports.prototype.extract = undefined;

  /**
   * The function to perform around the column such as DATE_TRUNC(@column, day)
   * @member {String} _function
   */
  exports.prototype._function = undefined;

  return exports;

}));
