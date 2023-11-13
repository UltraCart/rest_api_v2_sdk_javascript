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
 * The EmailHistogramPropertyNamesResponse model module.
 * @module com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse
 * @version 4.0.188
 */
class EmailHistogramPropertyNamesResponse {
    /**
     * Constructs a new <code>EmailHistogramPropertyNamesResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse
     */
    constructor() { 
        
        EmailHistogramPropertyNamesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailHistogramPropertyNamesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailHistogramPropertyNamesResponse} The populated <code>EmailHistogramPropertyNamesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailHistogramPropertyNamesResponse();

            if (data.hasOwnProperty('property_names')) {
                obj['property_names'] = ApiClient.convertToType(data['property_names'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} property_names
 */
EmailHistogramPropertyNamesResponse.prototype['property_names'] = undefined;






export default EmailHistogramPropertyNamesResponse;

