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
 * The LookupRequest model module.
 * @module com.ultracart.admin.v2.models/LookupRequest
 * @version 4.0.56-RC
 */
class LookupRequest {
    /**
     * Constructs a new <code>LookupRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/LookupRequest
     */
    constructor() { 
        
        LookupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LookupRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LookupRequest} The populated <code>LookupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookupRequest();

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], 'String');
            }
            if (data.hasOwnProperty('max_hits')) {
                obj['max_hits'] = ApiClient.convertToType(data['max_hits'], 'Number');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('subcategory')) {
                obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} category
 */
LookupRequest.prototype['category'] = undefined;

/**
 * @member {String} matches
 */
LookupRequest.prototype['matches'] = undefined;

/**
 * @member {Number} max_hits
 */
LookupRequest.prototype['max_hits'] = undefined;

/**
 * @member {Number} storefront_oid
 */
LookupRequest.prototype['storefront_oid'] = undefined;

/**
 * @member {String} subcategory
 */
LookupRequest.prototype['subcategory'] = undefined;






export default LookupRequest;

