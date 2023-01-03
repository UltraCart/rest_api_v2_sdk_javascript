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
 * The Country model module.
 * @module com.ultracart.admin.v2.models/Country
 * @version 4.0.105-RC
 */
class Country {
    /**
     * Constructs a new <code>Country</code>.
     * @alias module:com.ultracart.admin.v2.models/Country
     */
    constructor() { 
        
        Country.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Country} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Country} The populated <code>Country</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Country();

            if (data.hasOwnProperty('iso_2_code')) {
                obj['iso_2_code'] = ApiClient.convertToType(data['iso_2_code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * iso_2_code
 * @member {String} iso_2_code
 */
Country.prototype['iso_2_code'] = undefined;

/**
 * name
 * @member {String} name
 */
Country.prototype['name'] = undefined;






export default Country;

