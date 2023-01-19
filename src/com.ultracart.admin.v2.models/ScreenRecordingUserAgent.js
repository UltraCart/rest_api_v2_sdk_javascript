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
import ScreenRecordingUserAgentDevice from './ScreenRecordingUserAgentDevice';
import ScreenRecordingUserAgentOS from './ScreenRecordingUserAgentOS';

/**
 * The ScreenRecordingUserAgent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingUserAgent
 * @version 4.0.120-RC
 */
class ScreenRecordingUserAgent {
    /**
     * Constructs a new <code>ScreenRecordingUserAgent</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent
     */
    constructor() { 
        
        ScreenRecordingUserAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} The populated <code>ScreenRecordingUserAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingUserAgent();

            if (data.hasOwnProperty('device')) {
                obj['device'] = ScreenRecordingUserAgentDevice.constructFromObject(data['device']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('os')) {
                obj['os'] = ScreenRecordingUserAgentOS.constructFromObject(data['os']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} device
 */
ScreenRecordingUserAgent.prototype['device'] = undefined;

/**
 * @member {String} name
 */
ScreenRecordingUserAgent.prototype['name'] = undefined;

/**
 * @member {String} original
 */
ScreenRecordingUserAgent.prototype['original'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentOS} os
 */
ScreenRecordingUserAgent.prototype['os'] = undefined;

/**
 * @member {String} version
 */
ScreenRecordingUserAgent.prototype['version'] = undefined;






export default ScreenRecordingUserAgent;

