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
 * The CustomerEmailListChanges model module.
 * @module com.ultracart.admin.v2.models/CustomerEmailListChanges
 * @version 4.0.146
 */
class CustomerEmailListChanges {
    /**
     * Constructs a new <code>CustomerEmailListChanges</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerEmailListChanges
     */
    constructor() { 
        
        CustomerEmailListChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerEmailListChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEmailListChanges} The populated <code>CustomerEmailListChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerEmailListChanges();

            if (data.hasOwnProperty('add_to_lists')) {
                obj['add_to_lists'] = ApiClient.convertToType(data['add_to_lists'], ['String']);
            }
            if (data.hasOwnProperty('remove_from_lists')) {
                obj['remove_from_lists'] = ApiClient.convertToType(data['remove_from_lists'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Add this customer to these email lists
 * @member {Array.<String>} add_to_lists
 */
CustomerEmailListChanges.prototype['add_to_lists'] = undefined;

/**
 * Remove this customer from these email lists
 * @member {Array.<String>} remove_from_lists
 */
CustomerEmailListChanges.prototype['remove_from_lists'] = undefined;






export default CustomerEmailListChanges;

