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
import ScreenRecordingFilterPageViewEventParam from './ScreenRecordingFilterPageViewEventParam';

/**
 * The ScreenRecordingFilterPageViewEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
 * @version 4.0.5
 */
class ScreenRecordingFilterPageViewEvent {
    /**
     * Constructs a new <code>ScreenRecordingFilterPageViewEvent</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
     */
    constructor() { 
        
        ScreenRecordingFilterPageViewEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} The populated <code>ScreenRecordingFilterPageViewEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterPageViewEvent();

            if (data.hasOwnProperty('event_name')) {
                obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
            }
            if (data.hasOwnProperty('event_params')) {
                obj['event_params'] = ApiClient.convertToType(data['event_params'], [ScreenRecordingFilterPageViewEventParam]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} event_name
 */
ScreenRecordingFilterPageViewEvent.prototype['event_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam>} event_params
 */
ScreenRecordingFilterPageViewEvent.prototype['event_params'] = undefined;






export default ScreenRecordingFilterPageViewEvent;

