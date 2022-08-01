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
import EmailCustomer from './EmailCustomer';

/**
 * The EmailCustomersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCustomersResponse
 * @version 4.0.47-RC
 */
class EmailCustomersResponse {
    /**
     * Constructs a new <code>EmailCustomersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCustomersResponse
     */
    constructor() { 
        
        EmailCustomersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCustomersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCustomersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCustomersResponse} The populated <code>EmailCustomersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCustomersResponse();

            if (data.hasOwnProperty('customers')) {
                obj['customers'] = ApiClient.convertToType(data['customers'], [EmailCustomer]);
            }
            if (data.hasOwnProperty('page_number')) {
                obj['page_number'] = ApiClient.convertToType(data['page_number'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('total_customers')) {
                obj['total_customers'] = ApiClient.convertToType(data['total_customers'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Customers on the page
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailCustomer>} customers
 */
EmailCustomersResponse.prototype['customers'] = undefined;

/**
 * Page number (one based offset)
 * @member {Number} page_number
 */
EmailCustomersResponse.prototype['page_number'] = undefined;

/**
 * Number of records per page
 * @member {Number} page_size
 */
EmailCustomersResponse.prototype['page_size'] = undefined;

/**
 * Total customers
 * @member {Number} total_customers
 */
EmailCustomersResponse.prototype['total_customers'] = undefined;

/**
 * Total number of pages
 * @member {Number} total_pages
 */
EmailCustomersResponse.prototype['total_pages'] = undefined;






export default EmailCustomersResponse;

