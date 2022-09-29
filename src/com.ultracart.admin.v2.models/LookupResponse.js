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
import Error from './Error';
import KeyValue from './KeyValue';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The LookupResponse model module.
 * @module com.ultracart.admin.v2.models/LookupResponse
 * @version 4.0.70-RC
 */
class LookupResponse {
    /**
     * Constructs a new <code>LookupResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/LookupResponse
     */
    constructor() { 
        
        LookupResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LookupResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LookupResponse} The populated <code>LookupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookupResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [KeyValue]);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
LookupResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
LookupResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
LookupResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/KeyValue>} values
 */
LookupResponse.prototype['values'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
LookupResponse.prototype['warning'] = undefined;






export default LookupResponse;

