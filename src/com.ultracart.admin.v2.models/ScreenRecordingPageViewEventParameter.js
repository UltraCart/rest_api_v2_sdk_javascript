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
import ScreenRecordingMultifield from './ScreenRecordingMultifield';

/**
 * The ScreenRecordingPageViewEventParameter model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter
 * @version 4.0.39-RC
 */
class ScreenRecordingPageViewEventParameter {
    /**
     * Constructs a new <code>ScreenRecordingPageViewEventParameter</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter
     */
    constructor() { 
        
        ScreenRecordingPageViewEventParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingPageViewEventParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter} The populated <code>ScreenRecordingPageViewEventParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingPageViewEventParameter();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ScreenRecordingMultifield.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingPageViewEventParameter.prototype['name'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} value
 */
ScreenRecordingPageViewEventParameter.prototype['value'] = undefined;






export default ScreenRecordingPageViewEventParameter;

