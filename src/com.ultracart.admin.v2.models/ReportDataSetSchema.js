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
    root.UltraCartRestApiV2.ReportDataSetSchema = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportDataSetSchema model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetSchema
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>ReportDataSetSchema</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetSchema} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetSchema} The populated <code>ReportDataSetSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Type of the column.
   * @member {module:com.ultracart.admin.v2.models/ReportDataSetSchema.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "BIGNUMERIC"
     * @const
     */
    BIGNUMERIC: "BIGNUMERIC",

    /**
     * value: "BOOL"
     * @const
     */
    BOOL: "BOOL",

    /**
     * value: "DATE"
     * @const
     */
    DATE: "DATE",

    /**
     * value: "DATETIME"
     * @const
     */
    DATETIME: "DATETIME",

    /**
     * value: "FLOAT64"
     * @const
     */
    FLOAT64: "FLOAT64",

    /**
     * value: "INT64"
     * @const
     */
    INT64: "INT64",

    /**
     * value: "JSON"
     * @const
     */
    JSON: "JSON",

    /**
     * value: "NUMERIC"
     * @const
     */
    NUMERIC: "NUMERIC",

    /**
     * value: "STRING"
     * @const
     */
    STRING: "STRING",

    /**
     * value: "TIME"
     * @const
     */
    TIME: "TIME",

    /**
     * value: "TIMESTAMP"
     * @const
     */
    TIMESTAMP: "TIMESTAMP"
  };

  return exports;

}));
