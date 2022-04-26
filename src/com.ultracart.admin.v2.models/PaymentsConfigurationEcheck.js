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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions', 'com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'), require('./PaymentsConfigurationTestMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationEcheck = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions, root.UltraCartRestApiV2.PaymentsConfigurationTestMethod);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions, PaymentsConfigurationTestMethod) {
  'use strict';

  /**
   * The PaymentsConfigurationEcheck model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationEcheck
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>PaymentsConfigurationEcheck</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationEcheck
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationEcheck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationEcheck} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationEcheck} The populated <code>PaymentsConfigurationEcheck</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_echeck'))
        obj.accept_echeck = ApiClient.convertToType(data['accept_echeck'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('test_methods'))
        obj.test_methods = ApiClient.convertToType(data['test_methods'], [PaymentsConfigurationTestMethod]);
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts eChecks
   * @member {Boolean} accept_echeck
   */
  exports.prototype.accept_echeck = undefined;

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
   * Test methods for this payment method
   * @member {Array.<module:com.ultracart.admin.v2.models/PaymentsConfigurationTestMethod>} test_methods
   */
  exports.prototype.test_methods = undefined;

  return exports;

}));
