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
import ScreenRecordingPageViewEventParameter from './ScreenRecordingPageViewEventParameter';

/**
 * The ScreenRecordingPageViewEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
 * @version 4.0.144
 */
class ScreenRecordingPageViewEvent {
    /**
     * Constructs a new <code>ScreenRecordingPageViewEvent</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
     */
    constructor() { 
        
        ScreenRecordingPageViewEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} The populated <code>ScreenRecordingPageViewEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingPageViewEvent();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [ScreenRecordingPageViewEventParameter]);
            }
            if (data.hasOwnProperty('prior_page_view')) {
                obj['prior_page_view'] = ApiClient.convertToType(data['prior_page_view'], 'Boolean');
            }
            if (data.hasOwnProperty('sub_text')) {
                obj['sub_text'] = ApiClient.convertToType(data['sub_text'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('ts')) {
                obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingPageViewEvent.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter>} params
 */
ScreenRecordingPageViewEvent.prototype['params'] = undefined;

/**
 * @member {Boolean} prior_page_view
 */
ScreenRecordingPageViewEvent.prototype['prior_page_view'] = undefined;

/**
 * @member {String} sub_text
 */
ScreenRecordingPageViewEvent.prototype['sub_text'] = undefined;

/**
 * Timestamp of the event
 * @member {String} timestamp
 */
ScreenRecordingPageViewEvent.prototype['timestamp'] = undefined;

/**
 * @member {Number} ts
 */
ScreenRecordingPageViewEvent.prototype['ts'] = undefined;






export default ScreenRecordingPageViewEvent;

