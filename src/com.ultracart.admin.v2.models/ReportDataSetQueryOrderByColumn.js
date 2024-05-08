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
    root.UltraCartRestApiV2.ReportDataSetQueryOrderByColumn = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportDataSetQueryOrderByColumn model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>ReportDataSetQueryOrderByColumn</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetQueryOrderByColumn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetQueryOrderByColumn} The populated <code>ReportDataSetQueryOrderByColumn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ascending'))
        obj.ascending = ApiClient.convertToType(data['ascending'], 'Boolean');
      if (data.hasOwnProperty('column_name'))
        obj.column_name = ApiClient.convertToType(data['column_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} ascending
   */
  exports.prototype.ascending = undefined;

  /**
   * @member {String} column_name
   */
  exports.prototype.column_name = undefined;

  return exports;

}));
