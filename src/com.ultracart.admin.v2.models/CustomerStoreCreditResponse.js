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
import CustomerStoreCredit from './CustomerStoreCredit';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CustomerStoreCreditResponse model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditResponse
 * @version 4.0.35-RC
 */
class CustomerStoreCreditResponse {
    /**
     * Constructs a new <code>CustomerStoreCreditResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditResponse
     */
    constructor() { 
        
        CustomerStoreCreditResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerStoreCreditResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditResponse} The populated <code>CustomerStoreCreditResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerStoreCreditResponse();

            if (data.hasOwnProperty('customer_store_credit')) {
                obj['customer_store_credit'] = CustomerStoreCredit.constructFromObject(data['customer_store_credit']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
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
 * @member {module:com.ultracart.admin.v2.models/CustomerStoreCredit} customer_store_credit
 */
CustomerStoreCreditResponse.prototype['customer_store_credit'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CustomerStoreCreditResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CustomerStoreCreditResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CustomerStoreCreditResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CustomerStoreCreditResponse.prototype['warning'] = undefined;






export default CustomerStoreCreditResponse;

