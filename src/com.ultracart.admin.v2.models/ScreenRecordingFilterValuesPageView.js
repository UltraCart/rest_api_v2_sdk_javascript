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
import ScreenRecordingFilterValuesEvent from './ScreenRecordingFilterValuesEvent';
import ScreenRecordingFilterValuesPageParam from './ScreenRecordingFilterValuesPageParam';

/**
 * The ScreenRecordingFilterValuesPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
 * @version 4.0.63-RC
 */
class ScreenRecordingFilterValuesPageView {
    /**
     * Constructs a new <code>ScreenRecordingFilterValuesPageView</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
     */
    constructor() { 
        
        ScreenRecordingFilterValuesPageView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterValuesPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} The populated <code>ScreenRecordingFilterValuesPageView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterValuesPageView();

            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], ['String']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [ScreenRecordingFilterValuesEvent]);
            }
            if (data.hasOwnProperty('page_params')) {
                obj['page_params'] = ApiClient.convertToType(data['page_params'], [ScreenRecordingFilterValuesPageParam]);
            }
            if (data.hasOwnProperty('time_on_page_max')) {
                obj['time_on_page_max'] = ApiClient.convertToType(data['time_on_page_max'], 'Number');
            }
            if (data.hasOwnProperty('time_on_page_min')) {
                obj['time_on_page_min'] = ApiClient.convertToType(data['time_on_page_min'], 'Number');
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} domains
 */
ScreenRecordingFilterValuesPageView.prototype['domains'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent>} events
 */
ScreenRecordingFilterValuesPageView.prototype['events'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam>} page_params
 */
ScreenRecordingFilterValuesPageView.prototype['page_params'] = undefined;

/**
 * @member {Number} time_on_page_max
 */
ScreenRecordingFilterValuesPageView.prototype['time_on_page_max'] = undefined;

/**
 * @member {Number} time_on_page_min
 */
ScreenRecordingFilterValuesPageView.prototype['time_on_page_min'] = undefined;

/**
 * @member {Array.<String>} urls
 */
ScreenRecordingFilterValuesPageView.prototype['urls'] = undefined;






export default ScreenRecordingFilterValuesPageView;

