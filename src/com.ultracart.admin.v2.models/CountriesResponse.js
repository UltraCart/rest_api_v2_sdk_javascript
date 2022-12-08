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
import Country from './Country';

/**
 * The CountriesResponse model module.
 * @module com.ultracart.admin.v2.models/CountriesResponse
 * @version 4.0.94-RC
 */
class CountriesResponse {
    /**
     * Constructs a new <code>CountriesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CountriesResponse
     */
    constructor() { 
        
        CountriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CountriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CountriesResponse} The populated <code>CountriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountriesResponse();

            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
 */
CountriesResponse.prototype['countries'] = undefined;






export default CountriesResponse;

