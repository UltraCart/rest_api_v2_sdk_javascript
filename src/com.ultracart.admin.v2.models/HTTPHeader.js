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
 * The HTTPHeader model module.
 * @module com.ultracart.admin.v2.models/HTTPHeader
 * @version 4.0.123-RC
 */
class HTTPHeader {
    /**
     * Constructs a new <code>HTTPHeader</code>.
     * @alias module:com.ultracart.admin.v2.models/HTTPHeader
     */
    constructor() { 
        
        HTTPHeader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HTTPHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HTTPHeader} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HTTPHeader} The populated <code>HTTPHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HTTPHeader();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the HTTP header
 * @member {String} name
 */
HTTPHeader.prototype['name'] = undefined;

/**
 * Value of the HTTP header
 * @member {String} value
 */
HTTPHeader.prototype['value'] = undefined;






export default HTTPHeader;

