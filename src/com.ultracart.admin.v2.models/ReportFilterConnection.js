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
    root.UltraCartRestApiV2.ReportFilterConnection = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportFilterConnection model module.
   * @module com.ultracart.admin.v2.models/ReportFilterConnection
   * @version 3.10.142
   */

  /**
   * Constructs a new <code>ReportFilterConnection</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportFilterConnection
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportFilterConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportFilterConnection} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportFilterConnection} The populated <code>ReportFilterConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'String');
      if (data.hasOwnProperty('data_source_name'))
        obj.data_source_name = ApiClient.convertToType(data['data_source_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} column
   */
  exports.prototype.column = undefined;

  /**
   * @member {String} data_source_name
   */
  exports.prototype.data_source_name = undefined;

  return exports;

}));
