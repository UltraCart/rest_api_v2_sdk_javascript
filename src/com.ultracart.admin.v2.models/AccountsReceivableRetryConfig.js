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
    define(['ApiClient', 'com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity', 'com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsReceivableRetryDayActivity'), require('./AccountsReceivableRetryTransactionReject'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.AccountsReceivableRetryConfig = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.AccountsReceivableRetryDayActivity, root.UltraCartRestApiV2.AccountsReceivableRetryTransactionReject);
  }
}(this, function(ApiClient, AccountsReceivableRetryDayActivity, AccountsReceivableRetryTransactionReject) {
  'use strict';

  /**
   * The AccountsReceivableRetryConfig model module.
   * @module com.ultracart.admin.v2.models/AccountsReceivableRetryConfig
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>AccountsReceivableRetryConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsReceivableRetryConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} The populated <code>AccountsReceivableRetryConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('allow_process_linked_accounts'))
        obj.allow_process_linked_accounts = ApiClient.convertToType(data['allow_process_linked_accounts'], 'Boolean');
      if (data.hasOwnProperty('cancel_auto_order'))
        obj.cancel_auto_order = ApiClient.convertToType(data['cancel_auto_order'], 'Boolean');
      if (data.hasOwnProperty('current_service_plan'))
        obj.current_service_plan = ApiClient.convertToType(data['current_service_plan'], 'String');
      if (data.hasOwnProperty('daily_activity_list'))
        obj.daily_activity_list = ApiClient.convertToType(data['daily_activity_list'], [AccountsReceivableRetryDayActivity]);
      if (data.hasOwnProperty('managed_by_linked_account_merchant_id'))
        obj.managed_by_linked_account_merchant_id = ApiClient.convertToType(data['managed_by_linked_account_merchant_id'], 'Boolean');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('notify_emails'))
        obj.notify_emails = ApiClient.convertToType(data['notify_emails'], ['String']);
      if (data.hasOwnProperty('notify_rejections'))
        obj.notify_rejections = ApiClient.convertToType(data['notify_rejections'], 'Boolean');
      if (data.hasOwnProperty('notify_successes'))
        obj.notify_successes = ApiClient.convertToType(data['notify_successes'], 'Boolean');
      if (data.hasOwnProperty('process_linked_accounts'))
        obj.process_linked_accounts = ApiClient.convertToType(data['process_linked_accounts'], 'Boolean');
      if (data.hasOwnProperty('processing_percentage'))
        obj.processing_percentage = ApiClient.convertToType(data['processing_percentage'], 'String');
      if (data.hasOwnProperty('reject_at_end'))
        obj.reject_at_end = ApiClient.convertToType(data['reject_at_end'], 'Boolean');
      if (data.hasOwnProperty('transaction_rejects'))
        obj.transaction_rejects = ApiClient.convertToType(data['transaction_rejects'], [AccountsReceivableRetryTransactionReject]);
      if (data.hasOwnProperty('trial_mode'))
        obj.trial_mode = ApiClient.convertToType(data['trial_mode'], 'Boolean');
      if (data.hasOwnProperty('trial_mode_expiration_dts'))
        obj.trial_mode_expiration_dts = ApiClient.convertToType(data['trial_mode_expiration_dts'], 'String');
    }
    return obj;
  }

  /**
   * True if the retry should run daily.  False puts the retry service into an inactive state for this merchant.
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * True if this account has linked accounts that it can process.
   * @member {Boolean} allow_process_linked_accounts
   */
  exports.prototype.allow_process_linked_accounts = undefined;

  /**
   * If true also cancel the auto order if the order is rejected at the end
   * @member {Boolean} cancel_auto_order
   */
  exports.prototype.cancel_auto_order = undefined;

  /**
   * The current service plan that the account is on.
   * @member {String} current_service_plan
   */
  exports.prototype.current_service_plan = undefined;

  /**
   * A list of days and what actions should take place on those days after an order reaches accounts receivable
   * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity>} daily_activity_list
   */
  exports.prototype.daily_activity_list = undefined;

  /**
   * If not null, this account is managed by the specified parent merchant id.
   * @member {Boolean} managed_by_linked_account_merchant_id
   */
  exports.prototype.managed_by_linked_account_merchant_id = undefined;

  /**
   * UltraCart merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * A list of email addresses to receive summary notifications from the retry service.
   * @member {Array.<String>} notify_emails
   */
  exports.prototype.notify_emails = undefined;

  /**
   * If true, email addresses are notified of rejections.
   * @member {Boolean} notify_rejections
   */
  exports.prototype.notify_rejections = undefined;

  /**
   * If true, email addresses are notified of successful charges.
   * @member {Boolean} notify_successes
   */
  exports.prototype.notify_successes = undefined;

  /**
   * If true, all linked accounts are also processed using the same rules.
   * @member {Boolean} process_linked_accounts
   */
  exports.prototype.process_linked_accounts = undefined;

  /**
   * The percentage rate charged for the service.
   * @member {String} processing_percentage
   */
  exports.prototype.processing_percentage = undefined;

  /**
   * If true, the order is rejected the day after the last configured activity day
   * @member {Boolean} reject_at_end
   */
  exports.prototype.reject_at_end = undefined;

  /**
   * Array of key/value pairs that when found in the response cause the rejection of the transaction.
   * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject>} transaction_rejects
   */
  exports.prototype.transaction_rejects = undefined;

  /**
   * True if the account is currently in trial mode.  Set to false to exit trial mode.
   * @member {Boolean} trial_mode
   */
  exports.prototype.trial_mode = undefined;

  /**
   * The date when trial mode expires.  If this date is reached without exiting trial mode, the service will de-activate.
   * @member {String} trial_mode_expiration_dts
   */
  exports.prototype.trial_mode_expiration_dts = undefined;

  return exports;

}));
