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
import ScreenRecordingFilterValuesEventParams from './ScreenRecordingFilterValuesEventParams';

/**
 * The ScreenRecordingFilterValuesEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
 * @version 4.0.90-RC
 */
class ScreenRecordingFilterValuesEvent {
    /**
     * Constructs a new <code>ScreenRecordingFilterValuesEvent</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
     */
    constructor() { 
        
        ScreenRecordingFilterValuesEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterValuesEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} The populated <code>ScreenRecordingFilterValuesEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterValuesEvent();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [ScreenRecordingFilterValuesEventParams]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingFilterValuesEvent.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams>} params
 */
ScreenRecordingFilterValuesEvent.prototype['params'] = undefined;






export default ScreenRecordingFilterValuesEvent;

