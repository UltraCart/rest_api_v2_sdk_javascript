/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AccountsReceivableRetryDayActivity from './AccountsReceivableRetryDayActivity';

/**
 * The AccountsReceivableRetryConfig model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryConfig
 * @version 4.0.92-RC
 */
class AccountsReceivableRetryConfig {
    /**
     * Constructs a new <code>AccountsReceivableRetryConfig</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig
     */
    constructor() { 
        
        AccountsReceivableRetryConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} The populated <code>AccountsReceivableRetryConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryConfig();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_process_linked_accounts')) {
                obj['allow_process_linked_accounts'] = ApiClient.convertToType(data['allow_process_linked_accounts'], 'Boolean');
            }
            if (data.hasOwnProperty('cancel_auto_order')) {
                obj['cancel_auto_order'] = ApiClient.convertToType(data['cancel_auto_order'], 'Boolean');
            }
            if (data.hasOwnProperty('current_service_plan')) {
                obj['current_service_plan'] = ApiClient.convertToType(data['current_service_plan'], 'String');
            }
            if (data.hasOwnProperty('daily_activity_list')) {
                obj['daily_activity_list'] = ApiClient.convertToType(data['daily_activity_list'], [AccountsReceivableRetryDayActivity]);
            }
            if (data.hasOwnProperty('managed_by_linked_account_merchant_id')) {
                obj['managed_by_linked_account_merchant_id'] = ApiClient.convertToType(data['managed_by_linked_account_merchant_id'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('notify_emails')) {
                obj['notify_emails'] = ApiClient.convertToType(data['notify_emails'], ['String']);
            }
            if (data.hasOwnProperty('notify_rejections')) {
                obj['notify_rejections'] = ApiClient.convertToType(data['notify_rejections'], 'Boolean');
            }
            if (data.hasOwnProperty('notify_successes')) {
                obj['notify_successes'] = ApiClient.convertToType(data['notify_successes'], 'Boolean');
            }
            if (data.hasOwnProperty('process_linked_accounts')) {
                obj['process_linked_accounts'] = ApiClient.convertToType(data['process_linked_accounts'], 'Boolean');
            }
            if (data.hasOwnProperty('processing_percentage')) {
                obj['processing_percentage'] = ApiClient.convertToType(data['processing_percentage'], 'String');
            }
            if (data.hasOwnProperty('reject_at_end')) {
                obj['reject_at_end'] = ApiClient.convertToType(data['reject_at_end'], 'Boolean');
            }
            if (data.hasOwnProperty('trial_mode')) {
                obj['trial_mode'] = ApiClient.convertToType(data['trial_mode'], 'Boolean');
            }
            if (data.hasOwnProperty('trial_mode_expiration_dts')) {
                obj['trial_mode_expiration_dts'] = ApiClient.convertToType(data['trial_mode_expiration_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if the retry should run daily.  False puts the retry service into an inactive state for this merchant.
 * @member {Boolean} active
 */
AccountsReceivableRetryConfig.prototype['active'] = undefined;

/**
 * True if this account has linked accounts that it can process.
 * @member {Boolean} allow_process_linked_accounts
 */
AccountsReceivableRetryConfig.prototype['allow_process_linked_accounts'] = undefined;

/**
 * If true also cancel the auto order if the order is rejected at the end
 * @member {Boolean} cancel_auto_order
 */
AccountsReceivableRetryConfig.prototype['cancel_auto_order'] = undefined;

/**
 * The current service plan that the account is on.
 * @member {String} current_service_plan
 */
AccountsReceivableRetryConfig.prototype['current_service_plan'] = undefined;

/**
 * A list of days and what actions should take place on those days after an order reaches accounts receivable
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity>} daily_activity_list
 */
AccountsReceivableRetryConfig.prototype['daily_activity_list'] = undefined;

/**
 * If not null, this account is managed by the specified parent merchant id.
 * @member {Boolean} managed_by_linked_account_merchant_id
 */
AccountsReceivableRetryConfig.prototype['managed_by_linked_account_merchant_id'] = undefined;

/**
 * UltraCart merchant ID
 * @member {String} merchant_id
 */
AccountsReceivableRetryConfig.prototype['merchant_id'] = undefined;

/**
 * A list of email addresses to receive summary notifications from the retry service.
 * @member {Array.<String>} notify_emails
 */
AccountsReceivableRetryConfig.prototype['notify_emails'] = undefined;

/**
 * If true, email addresses are notified of rejections.
 * @member {Boolean} notify_rejections
 */
AccountsReceivableRetryConfig.prototype['notify_rejections'] = undefined;

/**
 * If true, email addresses are notified of successful charges.
 * @member {Boolean} notify_successes
 */
AccountsReceivableRetryConfig.prototype['notify_successes'] = undefined;

/**
 * If true, all linked accounts are also processed using the same rules.
 * @member {Boolean} process_linked_accounts
 */
AccountsReceivableRetryConfig.prototype['process_linked_accounts'] = undefined;

/**
 * The percentage rate charged for the service.
 * @member {String} processing_percentage
 */
AccountsReceivableRetryConfig.prototype['processing_percentage'] = undefined;

/**
 * If true, the order is rejected the day after the last configured activity day
 * @member {Boolean} reject_at_end
 */
AccountsReceivableRetryConfig.prototype['reject_at_end'] = undefined;

/**
 * True if the account is currently in trial mode.  Set to false to exit trial mode.
 * @member {Boolean} trial_mode
 */
AccountsReceivableRetryConfig.prototype['trial_mode'] = undefined;

/**
 * The date when trial mode expires.  If this date is reached without exiting trial mode, the service will de-activate.
 * @member {String} trial_mode_expiration_dts
 */
AccountsReceivableRetryConfig.prototype['trial_mode_expiration_dts'] = undefined;






export default AccountsReceivableRetryConfig;

