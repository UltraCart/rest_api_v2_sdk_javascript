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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ReportDataSetColumn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportDataSetColumn'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ReportDataSetRow = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ReportDataSetColumn);
  }
}(this, function(ApiClient, ReportDataSetColumn) {
  'use strict';

  /**
   * The ReportDataSetRow model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetRow
   * @version 3.10.189
   */

  /**
   * Constructs a new <code>ReportDataSetRow</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetRow
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetRow} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetRow} The populated <code>ReportDataSetRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('c'))
        obj.c = ApiClient.convertToType(data['c'], [ReportDataSetColumn]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ReportDataSetColumn>} c
   */
  exports.prototype.c = undefined;

  return exports;

}));
