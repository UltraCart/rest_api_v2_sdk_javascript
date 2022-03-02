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
    root.UltraCartRestApiV2.PaymentsConfigurationLoanHero = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationLoanHero model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero
   * @version 3.8.6
   */

  /**
   * Constructs a new <code>PaymentsConfigurationLoanHero</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationLoanHero</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationLoanHero} The populated <code>PaymentsConfigurationLoanHero</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_loan_hero'))
        obj.accept_loan_hero = ApiClient.convertToType(data['accept_loan_hero'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('show_loan_hero'))
        obj.show_loan_hero = ApiClient.convertToType(data['show_loan_hero'], 'Boolean');
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts Loan Hero
   * @member {Boolean} accept_loan_hero
   */
  exports.prototype.accept_loan_hero = undefined;

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

  /**
   * Internal field to aid UI
   * @member {Boolean} show_loan_hero
   */
  exports.prototype.show_loan_hero = undefined;

  return exports;

}));
