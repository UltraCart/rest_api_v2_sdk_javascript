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
import AccountsReceivableRetryConfig from './AccountsReceivableRetryConfig';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The AccountsReceivableRetryConfigResponse model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse
 * @version 4.0.101-RC
 */
class AccountsReceivableRetryConfigResponse {
    /**
     * Constructs a new <code>AccountsReceivableRetryConfigResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse
     */
    constructor() { 
        
        AccountsReceivableRetryConfigResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfigResponse} The populated <code>AccountsReceivableRetryConfigResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryConfigResponse();

            if (data.hasOwnProperty('config')) {
                obj['config'] = AccountsReceivableRetryConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('coupon_codes')) {
                obj['coupon_codes'] = ApiClient.convertToType(data['coupon_codes'], ['String']);
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('has_linked_accounts')) {
                obj['has_linked_accounts'] = ApiClient.convertToType(data['has_linked_accounts'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
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
 * @member {module:com.ultracart.admin.v2.models/AccountsReceivableRetryConfig} config
 */
AccountsReceivableRetryConfigResponse.prototype['config'] = undefined;

/**
 * @member {Array.<String>} coupon_codes
 */
AccountsReceivableRetryConfigResponse.prototype['coupon_codes'] = undefined;

/**
 * @member {Array.<String>} emails
 */
AccountsReceivableRetryConfigResponse.prototype['emails'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
AccountsReceivableRetryConfigResponse.prototype['error'] = undefined;

/**
 * @member {Boolean} has_linked_accounts
 */
AccountsReceivableRetryConfigResponse.prototype['has_linked_accounts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
AccountsReceivableRetryConfigResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
AccountsReceivableRetryConfigResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
AccountsReceivableRetryConfigResponse.prototype['warning'] = undefined;






export default AccountsReceivableRetryConfigResponse;

