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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationMoneyOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationMoneyOrder model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>PaymentsConfigurationMoneyOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationMoneyOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationMoneyOrder} The populated <code>PaymentsConfigurationMoneyOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_money_orders'))
        obj.accept_money_orders = ApiClient.convertToType(data['accept_money_orders'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
    }
    return obj;
  }

  /**
   * Master flag for this merchant accepting money orders
   * @member {Boolean} accept_money_orders
   */
  exports.prototype.accept_money_orders = undefined;

  /**
   * Optional Quickbooks accounting code
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Optional Quickbooks deposit to account
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  return exports;

}));
