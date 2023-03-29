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
import ScreenRecording from './ScreenRecording';
import Warning from './Warning';

/**
 * The ScreenRecordingResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingResponse
 * @version 4.0.144
 */
class ScreenRecordingResponse {
    /**
     * Constructs a new <code>ScreenRecordingResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingResponse
     */
    constructor() { 
        
        ScreenRecordingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingResponse} The populated <code>ScreenRecordingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingResponse();

            if (data.hasOwnProperty('checkout_only')) {
                obj['checkout_only'] = ApiClient.convertToType(data['checkout_only'], 'Boolean');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('screen_recording')) {
                obj['screen_recording'] = ScreenRecording.constructFromObject(data['screen_recording']);
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
 * @member {Boolean} checkout_only
 */
ScreenRecordingResponse.prototype['checkout_only'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ScreenRecordingResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ScreenRecordingResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecording} screen_recording
 */
ScreenRecordingResponse.prototype['screen_recording'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ScreenRecordingResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ScreenRecordingResponse.prototype['warning'] = undefined;






export default ScreenRecordingResponse;

