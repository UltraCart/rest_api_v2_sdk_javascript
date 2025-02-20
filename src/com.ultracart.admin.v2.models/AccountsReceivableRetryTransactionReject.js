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
 * The AccountsReceivableRetryTransactionReject model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject
 * @version 4.0.244
 */
class AccountsReceivableRetryTransactionReject {
    /**
     * Constructs a new <code>AccountsReceivableRetryTransactionReject</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject
     */
    constructor() { 
        
        AccountsReceivableRetryTransactionReject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryTransactionReject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryTransactionReject} The populated <code>AccountsReceivableRetryTransactionReject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryTransactionReject();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Transaction response name
 * @member {String} name
 */
AccountsReceivableRetryTransactionReject.prototype['name'] = undefined;

/**
 * Transaction response value
 * @member {String} value
 */
AccountsReceivableRetryTransactionReject.prototype['value'] = undefined;






export default AccountsReceivableRetryTransactionReject;

