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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Customer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customer'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.DataTablesServerSideResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Customer);
  }
}(this, function(ApiClient, Customer) {
  'use strict';

  /**
   * The DataTablesServerSideResponse model module.
   * @module com.ultracart.admin.v2.models/DataTablesServerSideResponse
   * @version 3.2.9
   */

  /**
   * Constructs a new <code>DataTablesServerSideResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/DataTablesServerSideResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DataTablesServerSideResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/DataTablesServerSideResponse} The populated <code>DataTablesServerSideResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [Customer]);
      if (data.hasOwnProperty('draw'))
        obj.draw = ApiClient.convertToType(data['draw'], 'Number');
      if (data.hasOwnProperty('recordsFiltered'))
        obj.recordsFiltered = ApiClient.convertToType(data['recordsFiltered'], 'Number');
      if (data.hasOwnProperty('recordsTotal'))
        obj.recordsTotal = ApiClient.convertToType(data['recordsTotal'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Customer>} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {Number} draw
   */
  exports.prototype.draw = undefined;

  /**
   * @member {Number} recordsFiltered
   */
  exports.prototype.recordsFiltered = undefined;

  /**
   * @member {Number} recordsTotal
   */
  exports.prototype.recordsTotal = undefined;

  return exports;

}));
