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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSourceSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSourceSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportDataSource = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSourceSchema);
  }
}(this, function(ApiClient, ReportDataSourceSchema) {
  'use strict';

  /**
   * The ReportDataSource model module.
   * @module com.ultracart.admin.v2.models/ReportDataSource
   * @version 3.10.178
   */

  /**
   * Constructs a new <code>ReportDataSource</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSource
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSource} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSource} The populated <code>ReportDataSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data_source_uuid'))
        obj.data_source_uuid = ApiClient.convertToType(data['data_source_uuid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('partition_date_column'))
        obj.partition_date_column = ApiClient.convertToType(data['partition_date_column'], 'String');
      if (data.hasOwnProperty('partition_date_safety_days'))
        obj.partition_date_safety_days = ApiClient.convertToType(data['partition_date_safety_days'], 'Number');
      if (data.hasOwnProperty('partition_date_strategy'))
        obj.partition_date_strategy = ApiClient.convertToType(data['partition_date_strategy'], 'String');
      if (data.hasOwnProperty('schema'))
        obj.schema = ApiClient.convertToType(data['schema'], [ReportDataSourceSchema]);
      if (data.hasOwnProperty('sql'))
        obj.sql = ApiClient.convertToType(data['sql'], 'String');
    }
    return obj;
  }

  /**
   * A unique identifier assigned to the data source.
   * @member {String} data_source_uuid
   */
  exports.prototype.data_source_uuid = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} partition_date_column
   */
  exports.prototype.partition_date_column = undefined;

  /**
   * @member {Number} partition_date_safety_days
   */
  exports.prototype.partition_date_safety_days = undefined;

  /**
   * The partition date strategy, defaults to weekly sunday
   * @member {String} partition_date_strategy
   */
  exports.prototype.partition_date_strategy = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSourceSchema>} schema
   */
  exports.prototype.schema = undefined;

  /**
   * @member {String} sql
   */
  exports.prototype.sql = undefined;

  return exports;

}));
