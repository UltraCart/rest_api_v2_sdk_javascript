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
import AccountsReceivableRetryStatAccount from './AccountsReceivableRetryStatAccount';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The AccountsReceivableRetryStatsResponse model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse
 * @version 4.0.50-RC
 */
class AccountsReceivableRetryStatsResponse {
    /**
     * Constructs a new <code>AccountsReceivableRetryStatsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse
     */
    constructor() { 
        
        AccountsReceivableRetryStatsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatsResponse} The populated <code>AccountsReceivableRetryStatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryStatsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('linked_accounts')) {
                obj['linked_accounts'] = ApiClient.convertToType(data['linked_accounts'], [AccountsReceivableRetryStatAccount]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('overall')) {
                obj['overall'] = AccountsReceivableRetryStatAccount.constructFromObject(data['overall']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
AccountsReceivableRetryStatsResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount>} linked_accounts
 */
AccountsReceivableRetryStatsResponse.prototype['linked_accounts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
AccountsReceivableRetryStatsResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatAccount} overall
 */
AccountsReceivableRetryStatsResponse.prototype['overall'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
AccountsReceivableRetryStatsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
AccountsReceivableRetryStatsResponse.prototype['warning'] = undefined;






export default AccountsReceivableRetryStatsResponse;

