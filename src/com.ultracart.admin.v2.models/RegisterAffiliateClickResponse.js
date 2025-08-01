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
 * The RegisterAffiliateClickResponse model module.
 * @module com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
 * @version 4.1.16
 */
class RegisterAffiliateClickResponse {
    /**
     * Constructs a new <code>RegisterAffiliateClickResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse
     */
    constructor() { 
        
        RegisterAffiliateClickResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegisterAffiliateClickResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/RegisterAffiliateClickResponse} The populated <code>RegisterAffiliateClickResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterAffiliateClickResponse();

            if (data.hasOwnProperty('cookie_max_age')) {
                obj['cookie_max_age'] = ApiClient.convertToType(data['cookie_max_age'], 'Number');
            }
            if (data.hasOwnProperty('cookie_names')) {
                obj['cookie_names'] = ApiClient.convertToType(data['cookie_names'], ['String']);
            }
            if (data.hasOwnProperty('cookie_values')) {
                obj['cookie_values'] = ApiClient.convertToType(data['cookie_values'], ['String']);
            }
            if (data.hasOwnProperty('registered')) {
                obj['registered'] = ApiClient.convertToType(data['registered'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The cookie max age to use
 * @member {Number} cookie_max_age
 */
RegisterAffiliateClickResponse.prototype['cookie_max_age'] = undefined;

/**
 * The names of all the cookies to set on the browser
 * @member {Array.<String>} cookie_names
 */
RegisterAffiliateClickResponse.prototype['cookie_names'] = undefined;

/**
 * The values of all the cookies to set on the browser
 * @member {Array.<String>} cookie_values
 */
RegisterAffiliateClickResponse.prototype['cookie_values'] = undefined;

/**
 * True if a click was registered
 * @member {Boolean} registered
 */
RegisterAffiliateClickResponse.prototype['registered'] = undefined;






export default RegisterAffiliateClickResponse;

