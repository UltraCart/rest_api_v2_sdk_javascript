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
    root.UltraCartRestApiV2.ReportDataSetColumn = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportDataSetColumn model module.
   * @module com.ultracart.admin.v2.models/ReportDataSetColumn
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ReportDataSetColumn</code>.
   * @alias module:com.ultracart.admin.v2.models/ReportDataSetColumn
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportDataSetColumn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ReportDataSetColumn} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ReportDataSetColumn} The populated <code>ReportDataSetColumn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('in'))
        obj._in = ApiClient.convertToType(data['in'], 'Boolean');
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'String');
      if (data.hasOwnProperty('vd'))
        obj.vd = ApiClient.convertToType(data['vd'], 'String');
      if (data.hasOwnProperty('vdt'))
        obj.vdt = ApiClient.convertToType(data['vdt'], 'String');
      if (data.hasOwnProperty('vn'))
        obj.vn = ApiClient.convertToType(data['vn'], 'Number');
      if (data.hasOwnProperty('vs'))
        obj.vs = ApiClient.convertToType(data['vs'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} _in
   */
  exports.prototype._in = undefined;

  /**
   * @member {String} n
   */
  exports.prototype.n = undefined;

  /**
   * @member {String} vd
   */
  exports.prototype.vd = undefined;

  /**
   * @member {String} vdt
   */
  exports.prototype.vdt = undefined;

  /**
   * @member {Number} vn
   */
  exports.prototype.vn = undefined;

  /**
   * @member {String} vs
   */
  exports.prototype.vs = undefined;

  return exports;

}));
