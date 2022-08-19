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
 * The LinkedAccount model module.
 * @module com.ultracart.admin.v2.models/LinkedAccount
 * @version 4.0.56-RC
 */
class LinkedAccount {
    /**
     * Constructs a new <code>LinkedAccount</code>.
     * @alias module:com.ultracart.admin.v2.models/LinkedAccount
     */
    constructor() { 
        
        LinkedAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LinkedAccount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LinkedAccount} The populated <code>LinkedAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedAccount();

            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The company name of this linked account.
 * @member {String} company
 */
LinkedAccount.prototype['company'] = undefined;

/**
 * A merchant id that is linked to this account.
 * @member {String} merchant_id
 */
LinkedAccount.prototype['merchant_id'] = undefined;

/**
 * If true, this user configuration (permissions, notifications, everything) is cascaded to this linked account.
 * @member {Boolean} selected
 */
LinkedAccount.prototype['selected'] = undefined;






export default LinkedAccount;

