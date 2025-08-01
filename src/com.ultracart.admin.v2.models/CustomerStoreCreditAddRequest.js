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
 * The CustomerStoreCreditAddRequest model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
 * @version 4.1.16
 */
class CustomerStoreCreditAddRequest {
    /**
     * Constructs a new <code>CustomerStoreCreditAddRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest
     */
    constructor() { 
        
        CustomerStoreCreditAddRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerStoreCreditAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditAddRequest} The populated <code>CustomerStoreCreditAddRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerStoreCreditAddRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration_days')) {
                obj['expiration_days'] = ApiClient.convertToType(data['expiration_days'], 'Number');
            }
            if (data.hasOwnProperty('vesting_days')) {
                obj['vesting_days'] = ApiClient.convertToType(data['vesting_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Amount of store credit
 * @member {Number} amount
 */
CustomerStoreCreditAddRequest.prototype['amount'] = undefined;

/**
 * Description or reason for the store credit
 * @member {String} description
 */
CustomerStoreCreditAddRequest.prototype['description'] = undefined;

/**
 * Optional days for store credit to expire or zero for no expiration
 * @member {Number} expiration_days
 */
CustomerStoreCreditAddRequest.prototype['expiration_days'] = undefined;

/**
 * Optional days for store credit to vesting or zero for immediately available
 * @member {Number} vesting_days
 */
CustomerStoreCreditAddRequest.prototype['vesting_days'] = undefined;






export default CustomerStoreCreditAddRequest;

