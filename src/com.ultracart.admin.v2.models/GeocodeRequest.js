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
 * The GeocodeRequest model module.
 * @module com.ultracart.admin.v2.models/GeocodeRequest
 * @version 4.0.47-RC
 */
class GeocodeRequest {
    /**
     * Constructs a new <code>GeocodeRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/GeocodeRequest
     */
    constructor() { 
        
        GeocodeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeocodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GeocodeRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GeocodeRequest} The populated <code>GeocodeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeocodeRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * address
 * @member {String} address
 */
GeocodeRequest.prototype['address'] = undefined;

/**
 * city
 * @member {String} city
 */
GeocodeRequest.prototype['city'] = undefined;

/**
 * country_code
 * @member {String} country_code
 */
GeocodeRequest.prototype['country_code'] = undefined;

/**
 * postal_code
 * @member {String} postal_code
 */
GeocodeRequest.prototype['postal_code'] = undefined;

/**
 * state
 * @member {String} state
 */
GeocodeRequest.prototype['state'] = undefined;






export default GeocodeRequest;

