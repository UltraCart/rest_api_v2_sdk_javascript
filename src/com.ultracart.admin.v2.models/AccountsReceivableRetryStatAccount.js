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
import AccountsReceivableRetryStatMetrics from './AccountsReceivableRetryStatMetrics';
import AccountsReceivableRetryStatRevenue from './AccountsReceivableRetryStatRevenue';

/**
 * The AccountsReceivableRetryStatAccount model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
 * @version 4.0.144
 */
class AccountsReceivableRetryStatAccount {
    /**
     * Constructs a new <code>AccountsReceivableRetryStatAccount</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount
     */
    constructor() { 
        
        AccountsReceivableRetryStatAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryStatAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} The populated <code>AccountsReceivableRetryStatAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryStatAccount();

            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], [AccountsReceivableRetryStatMetrics]);
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('overall')) {
                obj['overall'] = AccountsReceivableRetryStatMetrics.constructFromObject(data['overall']);
            }
            if (data.hasOwnProperty('revenue_for_period')) {
                obj['revenue_for_period'] = ApiClient.convertToType(data['revenue_for_period'], [AccountsReceivableRetryStatRevenue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics>} days
 */
AccountsReceivableRetryStatAccount.prototype['days'] = undefined;

/**
 * @member {String} merchant_id
 */
AccountsReceivableRetryStatAccount.prototype['merchant_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} overall
 */
AccountsReceivableRetryStatAccount.prototype['overall'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue>} revenue_for_period
 */
AccountsReceivableRetryStatAccount.prototype['revenue_for_period'] = undefined;






export default AccountsReceivableRetryStatAccount;

