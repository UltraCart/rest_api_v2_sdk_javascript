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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics', 'com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsReceivableRetryStatMetrics'), require('./AccountsReceivableRetryStatRevenue'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AccountsReceivableRetryStatAccount = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AccountsReceivableRetryStatMetrics, root.UltraCartRestApiV2.AccountsReceivableRetryStatRevenue);
  }
}(this, function(ApiClient, AccountsReceivableRetryStatMetrics, AccountsReceivableRetryStatRevenue) {
  'use strict';

  /**
   * The AccountsReceivableRetryStatAccount model module.
   * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
   * @version 3.0.38
   */

  /**
   * Constructs a new <code>AccountsReceivableRetryStatAccount</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsReceivableRetryStatAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} The populated <code>AccountsReceivableRetryStatAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('days'))
        obj.days = ApiClient.convertToType(data['days'], [AccountsReceivableRetryStatMetrics]);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('overall'))
        obj.overall = AccountsReceivableRetryStatMetrics.constructFromObject(data['overall']);
      if (data.hasOwnProperty('revenue_for_period'))
        obj.revenue_for_period = ApiClient.convertToType(data['revenue_for_period'], [AccountsReceivableRetryStatRevenue]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics>} days
   */
  exports.prototype.days = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} overall
   */
  exports.prototype.overall = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue>} revenue_for_period
   */
  exports.prototype.revenue_for_period = undefined;

  return exports;

}));
