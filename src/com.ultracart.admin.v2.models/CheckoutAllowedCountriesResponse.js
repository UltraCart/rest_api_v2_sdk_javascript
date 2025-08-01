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
 * The CheckoutAllowedCountriesResponse model module.
 * @module com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
 * @version 4.1.16
 */
class CheckoutAllowedCountriesResponse {
    /**
     * Constructs a new <code>CheckoutAllowedCountriesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
     */
    constructor() { 
        
        CheckoutAllowedCountriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutAllowedCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} The populated <code>CheckoutAllowedCountriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutAllowedCountriesResponse();

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
CheckoutAllowedCountriesResponse.prototype['countries'] = undefined;






export default CheckoutAllowedCountriesResponse;

