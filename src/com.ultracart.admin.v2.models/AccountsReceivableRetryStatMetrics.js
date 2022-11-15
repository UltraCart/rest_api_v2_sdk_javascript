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
    root.UltraCartRestApiV2.AccountsReceivableRetryStatMetrics = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountsReceivableRetryStatMetrics model module.
   * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
   * @version 3.10.64
   */

  /**
   * Constructs a new <code>AccountsReceivableRetryStatMetrics</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsReceivableRetryStatMetrics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} The populated <code>AccountsReceivableRetryStatMetrics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attempts'))
        obj.attempts = ApiClient.convertToType(data['attempts'], 'Number');
      if (data.hasOwnProperty('attempts_formatted'))
        obj.attempts_formatted = ApiClient.convertToType(data['attempts_formatted'], 'String');
      if (data.hasOwnProperty('conversion_rate'))
        obj.conversion_rate = ApiClient.convertToType(data['conversion_rate'], 'Number');
      if (data.hasOwnProperty('conversion_rate_formatted'))
        obj.conversion_rate_formatted = ApiClient.convertToType(data['conversion_rate_formatted'], 'String');
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], 'Number');
      if (data.hasOwnProperty('discounts'))
        obj.discounts = ApiClient.convertToType(data['discounts'], 'Number');
      if (data.hasOwnProperty('discounts_formatted'))
        obj.discounts_formatted = ApiClient.convertToType(data['discounts_formatted'], 'String');
      if (data.hasOwnProperty('revenue'))
        obj.revenue = ApiClient.convertToType(data['revenue'], 'Number');
      if (data.hasOwnProperty('revenue_formatted'))
        obj.revenue_formatted = ApiClient.convertToType(data['revenue_formatted'], 'String');
      if (data.hasOwnProperty('successes'))
        obj.successes = ApiClient.convertToType(data['successes'], 'Number');
      if (data.hasOwnProperty('successes_formatted'))
        obj.successes_formatted = ApiClient.convertToType(data['successes_formatted'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} attempts
   */
  exports.prototype.attempts = undefined;

  /**
   * @member {String} attempts_formatted
   */
  exports.prototype.attempts_formatted = undefined;

  /**
   * @member {Number} conversion_rate
   */
  exports.prototype.conversion_rate = undefined;

  /**
   * @member {String} conversion_rate_formatted
   */
  exports.prototype.conversion_rate_formatted = undefined;

  /**
   * @member {Number} day
   */
  exports.prototype.day = undefined;

  /**
   * @member {Number} discounts
   */
  exports.prototype.discounts = undefined;

  /**
   * @member {String} discounts_formatted
   */
  exports.prototype.discounts_formatted = undefined;

  /**
   * @member {Number} revenue
   */
  exports.prototype.revenue = undefined;

  /**
   * @member {String} revenue_formatted
   */
  exports.prototype.revenue_formatted = undefined;

  /**
   * @member {Number} successes
   */
  exports.prototype.successes = undefined;

  /**
   * @member {String} successes_formatted
   */
  exports.prototype.successes_formatted = undefined;

  return exports;

}));
