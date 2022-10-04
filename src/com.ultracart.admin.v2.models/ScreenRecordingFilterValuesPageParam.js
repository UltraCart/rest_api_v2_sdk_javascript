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
 * The ScreenRecordingFilterValuesPageParam model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam
 * @version 4.0.71-RC
 */
class ScreenRecordingFilterValuesPageParam {
    /**
     * Constructs a new <code>ScreenRecordingFilterValuesPageParam</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam
     */
    constructor() { 
        
        ScreenRecordingFilterValuesPageParam.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterValuesPageParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam} The populated <code>ScreenRecordingFilterValuesPageParam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterValuesPageParam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingFilterValuesPageParam.prototype['name'] = undefined;

/**
 * @member {Array.<String>} values
 */
ScreenRecordingFilterValuesPageParam.prototype['values'] = undefined;






export default ScreenRecordingFilterValuesPageParam;

