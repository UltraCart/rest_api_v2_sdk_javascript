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
 * The StateProvince model module.
 * @module com.ultracart.admin.v2.models/StateProvince
 * @version 4.0.179
 */
class StateProvince {
    /**
     * Constructs a new <code>StateProvince</code>.
     * @alias module:com.ultracart.admin.v2.models/StateProvince
     */
    constructor() { 
        
        StateProvince.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StateProvince</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StateProvince} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StateProvince} The populated <code>StateProvince</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateProvince();

            if (data.hasOwnProperty('abbreviation')) {
                obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * abbreviation
 * @member {String} abbreviation
 */
StateProvince.prototype['abbreviation'] = undefined;

/**
 * name
 * @member {String} name
 */
StateProvince.prototype['name'] = undefined;






export default StateProvince;

