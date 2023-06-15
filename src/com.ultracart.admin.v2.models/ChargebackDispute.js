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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChargebackDispute = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * The ChargebackDispute model module.
   * @module com.ultracart.admin.v2.models/ChargebackDispute
   * @version 3.10.144
   */

  /**
   * Constructs a new <code>ChargebackDispute</code>.
   * @alias module:com.ultracart.admin.v2.models/ChargebackDispute
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChargebackDispute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChargebackDispute} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChargebackDispute} The populated <code>ChargebackDispute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('account_number'))
        obj.account_number = ApiClient.convertToType(data['account_number'], 'String');
      if (data.hasOwnProperty('adjustment_request_text'))
        obj.adjustment_request_text = ApiClient.convertToType(data['adjustment_request_text'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('auth_code'))
        obj.auth_code = ApiClient.convertToType(data['auth_code'], 'String');
      if (data.hasOwnProperty('case_number'))
        obj.case_number = ApiClient.convertToType(data['case_number'], 'String');
      if (data.hasOwnProperty('chargeback_dispute_oid'))
        obj.chargeback_dispute_oid = ApiClient.convertToType(data['chargeback_dispute_oid'], 'Number');
      if (data.hasOwnProperty('chargeback_dts'))
        obj.chargeback_dts = ApiClient.convertToType(data['chargeback_dts'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('customer_care_notes'))
        obj.customer_care_notes = ApiClient.convertToType(data['customer_care_notes'], 'String');
      if (data.hasOwnProperty('encryption_key'))
        obj.encryption_key = ApiClient.convertToType(data['encryption_key'], 'String');
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('fax_failure_reason'))
        obj.fax_failure_reason = ApiClient.convertToType(data['fax_failure_reason'], 'String');
      if (data.hasOwnProperty('fax_number'))
        obj.fax_number = ApiClient.convertToType(data['fax_number'], 'String');
      if (data.hasOwnProperty('fax_transaction_id'))
        obj.fax_transaction_id = ApiClient.convertToType(data['fax_transaction_id'], 'Number');
      if (data.hasOwnProperty('icsid'))
        obj.icsid = ApiClient.convertToType(data['icsid'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_oid'))
        obj.merchant_account_profile_oid = ApiClient.convertToType(data['merchant_account_profile_oid'], 'Number');
      if (data.hasOwnProperty('order'))
        obj.order = Order.constructFromObject(data['order']);
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('partial_card_number'))
        obj.partial_card_number = ApiClient.convertToType(data['partial_card_number'], 'String');
      if (data.hasOwnProperty('pdf_file_oid'))
        obj.pdf_file_oid = ApiClient.convertToType(data['pdf_file_oid'], 'String');
      if (data.hasOwnProperty('reason_code'))
        obj.reason_code = ApiClient.convertToType(data['reason_code'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('website_url'))
        obj.website_url = ApiClient.convertToType(data['website_url'], 'String');
    }
    return obj;
  }

  /**
   * Account number
   * @member {String} account_number
   */
  exports.prototype.account_number = undefined;

  /**
   * Adjustment request text
   * @member {String} adjustment_request_text
   */
  exports.prototype.adjustment_request_text = undefined;

  /**
   * Amount
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Auth code
   * @member {String} auth_code
   */
  exports.prototype.auth_code = undefined;

  /**
   * Case number
   * @member {String} case_number
   */
  exports.prototype.case_number = undefined;

  /**
   * Chargeback Dispute Oid
   * @member {Number} chargeback_dispute_oid
   */
  exports.prototype.chargeback_dispute_oid = undefined;

  /**
   * Chargeback dts
   * @member {String} chargeback_dts
   */
  exports.prototype.chargeback_dts = undefined;

  /**
   * Currency
   * @member {String} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Customer care notes
   * @member {String} customer_care_notes
   */
  exports.prototype.customer_care_notes = undefined;

  /**
   * Encryption key
   * @member {String} encryption_key
   */
  exports.prototype.encryption_key = undefined;

  /**
   * Expiration Dts
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * Fax failure reason
   * @member {String} fax_failure_reason
   */
  exports.prototype.fax_failure_reason = undefined;

  /**
   * Fax number
   * @member {String} fax_number
   */
  exports.prototype.fax_number = undefined;

  /**
   * Fax transaction id
   * @member {Number} fax_transaction_id
   */
  exports.prototype.fax_transaction_id = undefined;

  /**
   * icsid
   * @member {String} icsid
   */
  exports.prototype.icsid = undefined;

  /**
   * Merchant account profile oid
   * @member {Number} merchant_account_profile_oid
   */
  exports.prototype.merchant_account_profile_oid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Order} order
   */
  exports.prototype.order = undefined;

  /**
   * Order Id
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * Partial card number
   * @member {String} partial_card_number
   */
  exports.prototype.partial_card_number = undefined;

  /**
   * PDF file oid
   * @member {String} pdf_file_oid
   */
  exports.prototype.pdf_file_oid = undefined;

  /**
   * Reason code
   * @member {String} reason_code
   */
  exports.prototype.reason_code = undefined;

  /**
   * Status
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Website URL
   * @member {String} website_url
   */
  exports.prototype.website_url = undefined;

  return exports;

}));
