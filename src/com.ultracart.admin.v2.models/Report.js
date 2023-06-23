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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSource', 'com.ultracart.admin.v2.models/ReportFilter', 'com.ultracart.admin.v2.models/ReportPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSource'), require('./ReportFilter'), require('./ReportPage'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Report = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSource, root.UltraCartRestApiV2.ReportFilter, root.UltraCartRestApiV2.ReportPage);
  }
}(this, function(ApiClient, ReportDataSource, ReportFilter, ReportPage) {
  'use strict';

  /**
   * The Report model module.
   * @module com.ultracart.admin.v2.models/Report
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>Report</code>.
   * @alias module:com.ultracart.admin.v2.models/Report
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Report} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Report} The populated <code>Report</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('data_sources'))
        obj.data_sources = ApiClient.convertToType(data['data_sources'], [ReportDataSource]);
      if (data.hasOwnProperty('default_dataset_id'))
        obj.default_dataset_id = ApiClient.convertToType(data['default_dataset_id'], 'String');
      if (data.hasOwnProperty('default_project_id'))
        obj.default_project_id = ApiClient.convertToType(data['default_project_id'], 'String');
      if (data.hasOwnProperty('filters'))
        obj.filters = ApiClient.convertToType(data['filters'], [ReportFilter]);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('pages'))
        obj.pages = ApiClient.convertToType(data['pages'], [ReportPage]);
      if (data.hasOwnProperty('report_oid'))
        obj.report_oid = ApiClient.convertToType(data['report_oid'], 'Number');
      if (data.hasOwnProperty('security_level'))
        obj.security_level = ApiClient.convertToType(data['security_level'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSource>} data_sources
   */
  exports.prototype.data_sources = undefined;

  /**
   * @member {String} default_dataset_id
   */
  exports.prototype.default_dataset_id = undefined;

  /**
   * @member {String} default_project_id
   */
  exports.prototype.default_project_id = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilter>} filters
   */
  exports.prototype.filters = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportPage>} pages
   */
  exports.prototype.pages = undefined;

  /**
   * Object identifier for this report.
   * @member {Number} report_oid
   */
  exports.prototype.report_oid = undefined;

  /**
   * Security level to execute report under
   * @member {module:com.ultracart.admin.v2.models/Report.SecurityLevelEnum} security_level
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
