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
import ScreenRecordingPageViewEvent from './ScreenRecordingPageViewEvent';
import ScreenRecordingPageViewParameter from './ScreenRecordingPageViewParameter';

/**
 * The ScreenRecordingPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingPageView
 * @version 4.1.16
 */
class ScreenRecordingPageView {
    /**
     * Constructs a new <code>ScreenRecordingPageView</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageView
     */
    constructor() { 
        
        ScreenRecordingPageView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageView} The populated <code>ScreenRecordingPageView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingPageView();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [ScreenRecordingPageViewEvent]);
            }
            if (data.hasOwnProperty('first_event_timestamp')) {
                obj['first_event_timestamp'] = ApiClient.convertToType(data['first_event_timestamp'], 'String');
            }
            if (data.hasOwnProperty('http_post')) {
                obj['http_post'] = ApiClient.convertToType(data['http_post'], 'Boolean');
            }
            if (data.hasOwnProperty('last_event_timestamp')) {
                obj['last_event_timestamp'] = ApiClient.convertToType(data['last_event_timestamp'], 'String');
            }
            if (data.hasOwnProperty('missing_events')) {
                obj['missing_events'] = ApiClient.convertToType(data['missing_events'], 'Boolean');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [ScreenRecordingPageViewParameter]);
            }
            if (data.hasOwnProperty('range_end')) {
                obj['range_end'] = ApiClient.convertToType(data['range_end'], 'Number');
            }
            if (data.hasOwnProperty('range_start')) {
                obj['range_start'] = ApiClient.convertToType(data['range_start'], 'Number');
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ApiClient.convertToType(data['referrer'], 'String');
            }
            if (data.hasOwnProperty('referrer_params')) {
                obj['referrer_params'] = ApiClient.convertToType(data['referrer_params'], [ScreenRecordingPageViewParameter]);
            }
            if (data.hasOwnProperty('referrer_raw')) {
                obj['referrer_raw'] = ApiClient.convertToType(data['referrer_raw'], 'String');
            }
            if (data.hasOwnProperty('screen_recording_page_view_uuid')) {
                obj['screen_recording_page_view_uuid'] = ApiClient.convertToType(data['screen_recording_page_view_uuid'], 'String');
            }
            if (data.hasOwnProperty('time_on_page')) {
                obj['time_on_page'] = ApiClient.convertToType(data['time_on_page'], 'Number');
            }
            if (data.hasOwnProperty('timing_dom_content_loaded')) {
                obj['timing_dom_content_loaded'] = ApiClient.convertToType(data['timing_dom_content_loaded'], 'Number');
            }
            if (data.hasOwnProperty('timing_loaded')) {
                obj['timing_loaded'] = ApiClient.convertToType(data['timing_loaded'], 'Number');
            }
            if (data.hasOwnProperty('truncated_events')) {
                obj['truncated_events'] = ApiClient.convertToType(data['truncated_events'], 'Boolean');
            }
            if (data.hasOwnProperty('ucapv')) {
                obj['ucapv'] = ApiClient.convertToType(data['ucapv'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} domain
 */
ScreenRecordingPageView.prototype['domain'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent>} events
 */
ScreenRecordingPageView.prototype['events'] = undefined;

/**
 * First event timestamp
 * @member {String} first_event_timestamp
 */
ScreenRecordingPageView.prototype['first_event_timestamp'] = undefined;

/**
 * @member {Boolean} http_post
 */
ScreenRecordingPageView.prototype['http_post'] = undefined;

/**
 * Last event timestamp
 * @member {String} last_event_timestamp
 */
ScreenRecordingPageView.prototype['last_event_timestamp'] = undefined;

/**
 * @member {Boolean} missing_events
 */
ScreenRecordingPageView.prototype['missing_events'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewParameter>} params
 */
ScreenRecordingPageView.prototype['params'] = undefined;

/**
 * @member {Number} range_end
 */
ScreenRecordingPageView.prototype['range_end'] = undefined;

/**
 * @member {Number} range_start
 */
ScreenRecordingPageView.prototype['range_start'] = undefined;

/**
 * @member {String} referrer
 */
ScreenRecordingPageView.prototype['referrer'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewParameter>} referrer_params
 */
ScreenRecordingPageView.prototype['referrer_params'] = undefined;

/**
 * @member {String} referrer_raw
 */
ScreenRecordingPageView.prototype['referrer_raw'] = undefined;

/**
 * @member {String} screen_recording_page_view_uuid
 */
ScreenRecordingPageView.prototype['screen_recording_page_view_uuid'] = undefined;

/**
 * @member {Number} time_on_page
 */
ScreenRecordingPageView.prototype['time_on_page'] = undefined;

/**
 * Amount of time for DOMContentLoaded event to fire (milliseconds)
 * @member {Number} timing_dom_content_loaded
 */
ScreenRecordingPageView.prototype['timing_dom_content_loaded'] = undefined;

/**
 * Amount of time for loaded event to fire (milliseconds)
 * @member {Number} timing_loaded
 */
ScreenRecordingPageView.prototype['timing_loaded'] = undefined;

/**
 * @member {Boolean} truncated_events
 */
ScreenRecordingPageView.prototype['truncated_events'] = undefined;

/**
 * @member {String} ucapv
 */
ScreenRecordingPageView.prototype['ucapv'] = undefined;

/**
 * @member {String} url
 */
ScreenRecordingPageView.prototype['url'] = undefined;






export default ScreenRecordingPageView;

