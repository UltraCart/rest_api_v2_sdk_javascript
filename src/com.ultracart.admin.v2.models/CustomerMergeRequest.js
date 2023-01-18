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
 * The CustomerMergeRequest model module.
 * @module com.ultracart.admin.v2.models/CustomerMergeRequest
 * @version 4.0.116-RC
 */
class CustomerMergeRequest {
    /**
     * Constructs a new <code>CustomerMergeRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerMergeRequest
     */
    constructor() { 
        
        CustomerMergeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerMergeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerMergeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerMergeRequest} The populated <code>CustomerMergeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerMergeRequest();

            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Customer profile oid to merge
 * @member {Number} customer_profile_oid
 */
CustomerMergeRequest.prototype['customer_profile_oid'] = undefined;

/**
 * Email of the customer profile to merge
 * @member {String} email
 */
CustomerMergeRequest.prototype['email'] = undefined;






export default CustomerMergeRequest;

