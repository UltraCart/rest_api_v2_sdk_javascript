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
 * The CustomerPrivacy model module.
 * @module com.ultracart.admin.v2.models/CustomerPrivacy
 * @version 4.0.178
 */
class CustomerPrivacy {
    /**
     * Constructs a new <code>CustomerPrivacy</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerPrivacy
     */
    constructor() { 
        
        CustomerPrivacy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerPrivacy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerPrivacy} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerPrivacy} The populated <code>CustomerPrivacy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPrivacy();

            if (data.hasOwnProperty('last_update_dts')) {
                obj['last_update_dts'] = ApiClient.convertToType(data['last_update_dts'], 'String');
            }
            if (data.hasOwnProperty('marketing')) {
                obj['marketing'] = ApiClient.convertToType(data['marketing'], 'Boolean');
            }
            if (data.hasOwnProperty('preference')) {
                obj['preference'] = ApiClient.convertToType(data['preference'], 'Boolean');
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Last update date
 * @member {String} last_update_dts
 */
CustomerPrivacy.prototype['last_update_dts'] = undefined;

/**
 * The customer has opted in to marketing
 * @member {Boolean} marketing
 */
CustomerPrivacy.prototype['marketing'] = undefined;

/**
 * The customer has opted in to preference tracking
 * @member {Boolean} preference
 */
CustomerPrivacy.prototype['preference'] = undefined;

/**
 * The customer has opted in to statistics collection
 * @member {Boolean} statistics
 */
CustomerPrivacy.prototype['statistics'] = undefined;






export default CustomerPrivacy;

