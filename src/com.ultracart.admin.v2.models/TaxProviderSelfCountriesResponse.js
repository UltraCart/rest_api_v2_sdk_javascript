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
import TaxCountryCode from './TaxCountryCode';

/**
 * The TaxProviderSelfCountriesResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
 * @version 4.0.116-RC
 */
class TaxProviderSelfCountriesResponse {
    /**
     * Constructs a new <code>TaxProviderSelfCountriesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
     */
    constructor() { 
        
        TaxProviderSelfCountriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderSelfCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} The populated <code>TaxProviderSelfCountriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderSelfCountriesResponse();

            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [TaxCountryCode]);
            }
        }
        return obj;
    }


}

/**
 * countries
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountryCode>} countries
 */
TaxProviderSelfCountriesResponse.prototype['countries'] = undefined;






export default TaxProviderSelfCountriesResponse;

