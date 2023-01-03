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
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ScreenshotsResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenshotsResponse
 * @version 4.0.105-RC
 */
class ScreenshotsResponse {
    /**
     * Constructs a new <code>ScreenshotsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenshotsResponse
     */
    constructor() { 
        
        ScreenshotsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenshotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenshotsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenshotsResponse} The populated <code>ScreenshotsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenshotsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('screenshots')) {
                obj['screenshots'] = ApiClient.convertToType(data['screenshots'], ['String']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
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
ScreenshotsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ScreenshotsResponse.prototype['metadata'] = undefined;

/**
 * List of screenshot urls related to the object (depends on which method was called).
 * @member {Array.<String>} screenshots
 */
ScreenshotsResponse.prototype['screenshots'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ScreenshotsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ScreenshotsResponse.prototype['warning'] = undefined;






export default ScreenshotsResponse;

