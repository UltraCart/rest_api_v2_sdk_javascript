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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSetRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSetRow'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportDataSetPage = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSetRow);
  }
}(this, function(ApiClient, ReportDataSetRow) {
  'use strict';

  /**
   * The ReportDataSetPage model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetPage
   * @version 3.10.205
   */

  /**
   * Constructs a new <code>ReportDataSetPage</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetPage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetPage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetPage} The populated <code>ReportDataSetPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data_set_uuid'))
        obj.data_set_uuid = ApiClient.convertToType(data['data_set_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('next_page_token'))
        obj.next_page_token = ApiClient.convertToType(data['next_page_token'], 'String');
      if (data.hasOwnProperty('next_start_index'))
        obj.next_start_index = ApiClient.convertToType(data['next_start_index'], 'Number');
      if (data.hasOwnProperty('page_number'))
        obj.page_number = ApiClient.convertToType(data['page_number'], 'Number');
      if (data.hasOwnProperty('row_count'))
        obj.row_count = ApiClient.convertToType(data['row_count'], 'Number');
      if (data.hasOwnProperty('rows'))
        obj.rows = ApiClient.convertToType(data['rows'], [ReportDataSetRow]);
      if (data.hasOwnProperty('rows_s3_url'))
        obj.rows_s3_url = ApiClient.convertToType(data['rows_s3_url'], 'String');
      if (data.hasOwnProperty('start_index'))
        obj.start_index = ApiClient.convertToType(data['start_index'], 'Number');
      if (data.hasOwnProperty('table_id'))
        obj.table_id = ApiClient.convertToType(data['table_id'], 'String');
    }
    return obj;
  }

  /**
   * A unique identifier assigned to the data set that is returned.
   * @member {String} data_set_uuid
   */
  exports.prototype.data_set_uuid = undefined;

  /**
   * Merchant that owns this data set
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} next_page_token
   */
  exports.prototype.next_page_token = undefined;

  /**
   * @member {Number} next_start_index
   */
  exports.prototype.next_start_index = undefined;

  /**
   * @member {Number} page_number
   */
  exports.prototype.page_number = undefined;

  /**
   * @member {Number} row_count
   */
  exports.prototype.row_count = undefined;

  /**
   * Rows returned for the data set
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetRow>} rows
   */
  exports.prototype.rows = undefined;

  /**
   * Signed S3 URL where the page rows can be downloaded from
   * @member {String} rows_s3_url
   */
  exports.prototype.rows_s3_url = undefined;

  /**
   * Zero based index of the starting row
   * @member {Number} start_index
   */
  exports.prototype.start_index = undefined;

  /**
   * The BigQuery destination table id that contains the result.
   * @member {String} table_id
   */
  exports.prototype.table_id = undefined;

  return exports;

}));
