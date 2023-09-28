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
 * The AutoOrderManagement model module.
 * @module com.ultracart.admin.v2.models/AutoOrderManagement
 * @version 4.0.179
 */
class AutoOrderManagement {
    /**
     * Constructs a new <code>AutoOrderManagement</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderManagement
     */
    constructor() { 
        
        AutoOrderManagement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderManagement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderManagement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderManagement} The populated <code>AutoOrderManagement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderManagement();

            if (data.hasOwnProperty('update_billing_url')) {
                obj['update_billing_url'] = ApiClient.convertToType(data['update_billing_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * URL where the customer can go to update their billing information.
 * @member {String} update_billing_url
 */
AutoOrderManagement.prototype['update_billing_url'] = undefined;






export default AutoOrderManagement;

