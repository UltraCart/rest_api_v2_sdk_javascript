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

/**
 * The AccountsReceivableRetryStatRevenue model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue
 * @version 4.1.16
 */
class AccountsReceivableRetryStatRevenue {
    /**
     * Constructs a new <code>AccountsReceivableRetryStatRevenue</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue
     */
    constructor() { 
        
        AccountsReceivableRetryStatRevenue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryStatRevenue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatRevenue} The populated <code>AccountsReceivableRetryStatRevenue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryStatRevenue();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} label
 */
AccountsReceivableRetryStatRevenue.prototype['label'] = undefined;

/**
 * @member {Number} revenue
 */
AccountsReceivableRetryStatRevenue.prototype['revenue'] = undefined;






export default AccountsReceivableRetryStatRevenue;

