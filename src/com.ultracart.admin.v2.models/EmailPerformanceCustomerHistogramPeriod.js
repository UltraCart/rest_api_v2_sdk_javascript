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
    root.UltraCartRestApiV2.EmailPerformanceCustomerHistogramPeriod = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailPerformanceCustomerHistogramPeriod model module.
   * @module com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
   * @version 3.10.96
   */

  /**
   * Constructs a new <code>EmailPerformanceCustomerHistogramPeriod</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPerformanceCustomerHistogramPeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogramPeriod} The populated <code>EmailPerformanceCustomerHistogramPeriod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Number');
      if (data.hasOwnProperty('inactive'))
        obj.inactive = ApiClient.convertToType(data['inactive'], 'Number');
      if (data.hasOwnProperty('month'))
        obj.month = ApiClient.convertToType(data['month'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
    }
    return obj;
  }

  /**
   * Active customers last active in this period
   * @member {Number} active
   */
  exports.prototype.active = undefined;

  /**
   * Inactive customers last active in this period
   * @member {Number} inactive
   */
  exports.prototype.inactive = undefined;

  /**
   * Month (1 = January)
   * @member {Number} month
   */
  exports.prototype.month = undefined;

  /**
   * Total customers last active in this period
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * Year (four digits)
   * @member {Number} year
   */
  exports.prototype.year = undefined;

  return exports;

}));
