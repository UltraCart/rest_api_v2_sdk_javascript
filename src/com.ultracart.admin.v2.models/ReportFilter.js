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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportFilterConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportFilterConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportFilter = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportFilterConnection);
  }
}(this, function(ApiClient, ReportFilterConnection) {
  'use strict';

  /**
   * The ReportFilter model module.
   * @module com.ultracart.admin.v2.models/ReportFilter
   * @version 3.10.179
   */

  /**
   * Constructs a new <code>ReportFilter</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportFilter} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportFilter} The populated <code>ReportFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('connections'))
        obj.connections = ApiClient.convertToType(data['connections'], [ReportFilterConnection]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], ['String']);
    }
    return obj;
  }

  /**
   * How this filter connects to the data sources and columns
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilterConnection>} connections
   */
  exports.prototype.connections = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The timezone that the date range is querying on.
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * Type of filter
   * @member {module:com.ultracart.admin.v2.models/ReportFilter.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * The selected values for the filter.  When used, some type conversion will need to occur.
   * @member {Array.<String>} values
   */
  exports.prototype.values = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "date range"
     * @const
     */
    date_range: "date range",

    /**
     * value: "date comparison"
     * @const
     */
    date_comparison: "date comparison",

    /**
     * value: "single value"
     * @const
     */
    single_value: "single value",

    /**
     * value: "multiple values"
     * @const
     */
    multiple_values: "multiple values"
  };

  return exports;

}));
