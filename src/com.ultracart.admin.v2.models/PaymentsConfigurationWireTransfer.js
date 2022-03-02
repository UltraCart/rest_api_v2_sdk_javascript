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
    root.UltraCartRestApiV2.PaymentsConfigurationWireTransfer = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationWireTransfer model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer
   * @version 3.8.6
   */

  /**
   * Constructs a new <code>PaymentsConfigurationWireTransfer</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationWireTransfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationWireTransfer} The populated <code>PaymentsConfigurationWireTransfer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_wire_transfer'))
        obj.accept_wire_transfer = ApiClient.convertToType(data['accept_wire_transfer'], 'Boolean');
      if (data.hasOwnProperty('account_number'))
        obj.account_number = ApiClient.convertToType(data['account_number'], 'String');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('bank_address'))
        obj.bank_address = ApiClient.convertToType(data['bank_address'], 'String');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('intermediate_routing_number'))
        obj.intermediate_routing_number = ApiClient.convertToType(data['intermediate_routing_number'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('routing_number'))
        obj.routing_number = ApiClient.convertToType(data['routing_number'], 'String');
      if (data.hasOwnProperty('surcharge_accounting_code'))
        obj.surcharge_accounting_code = ApiClient.convertToType(data['surcharge_accounting_code'], 'String');
      if (data.hasOwnProperty('surcharge_fee'))
        obj.surcharge_fee = ApiClient.convertToType(data['surcharge_fee'], 'Number');
      if (data.hasOwnProperty('surcharge_percentage'))
        obj.surcharge_percentage = ApiClient.convertToType(data['surcharge_percentage'], 'Number');
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts wire transfers
   * @member {Boolean} accept_wire_transfer
   */
  exports.prototype.accept_wire_transfer = undefined;

  /**
   * account_number
   * @member {String} account_number
   */
  exports.prototype.account_number = undefined;

  /**
   * Optional Quickbooks accounting code
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Bank address
   * @member {String} bank_address
   */
  exports.prototype.bank_address = undefined;

  /**
   * Optional Quickbooks deposit to account
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * Intermediate routing number
   * @member {String} intermediate_routing_number
   */
  exports.prototype.intermediate_routing_number = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * Routing number
   * @member {String} routing_number
   */
  exports.prototype.routing_number = undefined;

  /**
   * If a surcharge is present and this merchant is integrated with Quickbooks, this is the accounting code for the surcharge amount
   * @member {String} surcharge_accounting_code
   */
  exports.prototype.surcharge_accounting_code = undefined;

  /**
   * surcharge_fee
   * @member {Number} surcharge_fee
   */
  exports.prototype.surcharge_fee = undefined;

  /**
   * surcharge_percentage
   * @member {Number} surcharge_percentage
   */
  exports.prototype.surcharge_percentage = undefined;

  return exports;

}));
