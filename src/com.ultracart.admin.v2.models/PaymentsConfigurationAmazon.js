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
    root.UltraCartRestApiV2.PaymentsConfigurationAmazon = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationAmazon model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationAmazon
   * @version 3.6.37
   */

  /**
   * Constructs a new <code>PaymentsConfigurationAmazon</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationAmazon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon} The populated <code>PaymentsConfigurationAmazon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_amazon'))
        obj.accept_amazon = ApiClient.convertToType(data['accept_amazon'], 'Boolean');
      if (data.hasOwnProperty('access_key_id'))
        obj.access_key_id = ApiClient.convertToType(data['access_key_id'], 'String');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('amazon_merchant_id'))
        obj.amazon_merchant_id = ApiClient.convertToType(data['amazon_merchant_id'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('secret_access_key'))
        obj.secret_access_key = ApiClient.convertToType(data['secret_access_key'], 'String');
    }
    return obj;
  }

  /**
   * Master flag to determine if this merchant accepts Pay by Amazon
   * @member {Boolean} accept_amazon
   */
  exports.prototype.accept_amazon = undefined;

  /**
   * Amazon access key ID
   * @member {String} access_key_id
   */
  exports.prototype.access_key_id = undefined;

  /**
   * Optional accounting code for use with Quickbooks integrations
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Amazon merchant ID
   * @member {String} amazon_merchant_id
   */
  exports.prototype.amazon_merchant_id = undefined;

  /**
   * Optional deposit to account field for use with Quickbooks integrations
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * Environment
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationAmazon.EnvironmentEnum} environment
   */
  exports.prototype.environment = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * Amazon secret access key
   * @member {String} secret_access_key
   */
  exports.prototype.secret_access_key = undefined;


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
