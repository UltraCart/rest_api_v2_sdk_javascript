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
    root.UltraCartRestApiV2.PaymentsConfigurationAffirm = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationAffirm model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationAffirm
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>PaymentsConfigurationAffirm</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationAffirm
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationAffirm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationAffirm} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationAffirm} The populated <code>PaymentsConfigurationAffirm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_affirm'))
        obj.accept_affirm = ApiClient.convertToType(data['accept_affirm'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], 'String');
      if (data.hasOwnProperty('financial_product_key'))
        obj.financial_product_key = ApiClient.convertToType(data['financial_product_key'], 'String');
      if (data.hasOwnProperty('private_api_key'))
        obj.private_api_key = ApiClient.convertToType(data['private_api_key'], 'String');
      if (data.hasOwnProperty('public_api_key'))
        obj.public_api_key = ApiClient.convertToType(data['public_api_key'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts Affirm payments
   * @member {Boolean} accept_affirm
   */
  exports.prototype.accept_affirm = undefined;

  /**
   * Optional Quickbooks code for this payment method
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Optional Quickbooks Deposit to Account value
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * Environment
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationAffirm.EnvironmentEnum} environment
   */
  exports.prototype.environment = undefined;

  /**
   * Financial product key
   * @member {String} financial_product_key
   */
  exports.prototype.financial_product_key = undefined;

  /**
   * Private API key
   * @member {String} private_api_key
   */
  exports.prototype.private_api_key = undefined;

  /**
   * Public API key
   * @member {String} public_api_key
   */
  exports.prototype.public_api_key = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;


  /**
   * Allowed values for the <code>environment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnvironmentEnum = {
    /**
     * value: "Live"
     * @const
     */
    Live: "Live",

    /**
     * value: "Sandbox"
     * @const
     */
    Sandbox: "Sandbox"
  };

  return exports;

}));
