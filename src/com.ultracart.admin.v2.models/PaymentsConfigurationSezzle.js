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
    root.UltraCartRestApiV2.PaymentsConfigurationSezzle = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationSezzle model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationSezzle
   * @version 3.10.5
   */

  /**
   * Constructs a new <code>PaymentsConfigurationSezzle</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationSezzle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle} The populated <code>PaymentsConfigurationSezzle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_sezzle'))
        obj.accept_sezzle = ApiClient.convertToType(data['accept_sezzle'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('business_id'))
        obj.business_id = ApiClient.convertToType(data['business_id'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], 'String');
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
   * Master flag for this merchant accepting Sezzle payments
   * @member {Boolean} accept_sezzle
   */
  exports.prototype.accept_sezzle = undefined;

  /**
   * Optional Quickbooks code for this payment method
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Business ID
   * @member {String} business_id
   */
  exports.prototype.business_id = undefined;

  /**
   * Optional Quickbooks Deposit to Account value
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * Sezzle environment
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationSezzle.EnvironmentEnum} environment
   */
  exports.prototype.environment = undefined;

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
