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
import ScreenRecordingFilterPageViewEvent from './ScreenRecordingFilterPageViewEvent';
import ScreenRecordingFilterPageViewParam from './ScreenRecordingFilterPageViewParam';
import ScreenRecordingFilterPageViewReferrerParam from './ScreenRecordingFilterPageViewReferrerParam';
import ScreenRecordingFilterRangeInteger from './ScreenRecordingFilterRangeInteger';
import ScreenRecordingFilterStringSearch from './ScreenRecordingFilterStringSearch';

/**
 * The ScreenRecordingFilterPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
 * @version 4.0.165
 */
class ScreenRecordingFilterPageView {
    /**
     * Constructs a new <code>ScreenRecordingFilterPageView</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
     */
    constructor() { 
        
        ScreenRecordingFilterPageView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} The populated <code>ScreenRecordingFilterPageView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterPageView();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ScreenRecordingFilterStringSearch.constructFromObject(data['domain']);
            }
            if (data.hasOwnProperty('domain_filter')) {
                obj['domain_filter'] = ApiClient.convertToType(data['domain_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('event_name_filter')) {
                obj['event_name_filter'] = ApiClient.convertToType(data['event_name_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('event_param_name_filter')) {
                obj['event_param_name_filter'] = ApiClient.convertToType(data['event_param_name_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('event_param_value_filter')) {
                obj['event_param_value_filter'] = ApiClient.convertToType(data['event_param_value_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [ScreenRecordingFilterPageViewEvent]);
            }
            if (data.hasOwnProperty('param_name_filter')) {
                obj['param_name_filter'] = ApiClient.convertToType(data['param_name_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('param_value_filter')) {
                obj['param_value_filter'] = ApiClient.convertToType(data['param_value_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [ScreenRecordingFilterPageViewParam]);
            }
            if (data.hasOwnProperty('referrer')) {
                obj['referrer'] = ScreenRecordingFilterStringSearch.constructFromObject(data['referrer']);
            }
            if (data.hasOwnProperty('referrer_params')) {
                obj['referrer_params'] = ApiClient.convertToType(data['referrer_params'], [ScreenRecordingFilterPageViewReferrerParam]);
            }
            if (data.hasOwnProperty('referrer_raw')) {
                obj['referrer_raw'] = ScreenRecordingFilterStringSearch.constructFromObject(data['referrer_raw']);
            }
            if (data.hasOwnProperty('time_on_page')) {
                obj['time_on_page'] = ScreenRecordingFilterRangeInteger.constructFromObject(data['time_on_page']);
            }
            if (data.hasOwnProperty('time_on_page_max_filter')) {
                obj['time_on_page_max_filter'] = ApiClient.convertToType(data['time_on_page_max_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('time_on_page_min_filter')) {
                obj['time_on_page_min_filter'] = ApiClient.convertToType(data['time_on_page_min_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ScreenRecordingFilterStringSearch.constructFromObject(data['url']);
            }
            if (data.hasOwnProperty('url_filter')) {
                obj['url_filter'] = ApiClient.convertToType(data['url_filter'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} domain
 */
ScreenRecordingFilterPageView.prototype['domain'] = undefined;

/**
 * @member {Boolean} domain_filter
 */
ScreenRecordingFilterPageView.prototype['domain_filter'] = undefined;

/**
 * @member {Boolean} event_name_filter
 */
ScreenRecordingFilterPageView.prototype['event_name_filter'] = undefined;

/**
 * @member {Boolean} event_param_name_filter
 */
ScreenRecordingFilterPageView.prototype['event_param_name_filter'] = undefined;

/**
 * @member {Boolean} event_param_value_filter
 */
ScreenRecordingFilterPageView.prototype['event_param_value_filter'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent>} events
 */
ScreenRecordingFilterPageView.prototype['events'] = undefined;

/**
 * @member {Boolean} param_name_filter
 */
ScreenRecordingFilterPageView.prototype['param_name_filter'] = undefined;

/**
 * @member {Boolean} param_value_filter
 */
ScreenRecordingFilterPageView.prototype['param_value_filter'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewParam>} params
 */
ScreenRecordingFilterPageView.prototype['params'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} referrer
 */
ScreenRecordingFilterPageView.prototype['referrer'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam>} referrer_params
 */
ScreenRecordingFilterPageView.prototype['referrer_params'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} referrer_raw
 */
ScreenRecordingFilterPageView.prototype['referrer_raw'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} time_on_page
 */
ScreenRecordingFilterPageView.prototype['time_on_page'] = undefined;

/**
 * @member {Boolean} time_on_page_max_filter
 */
ScreenRecordingFilterPageView.prototype['time_on_page_max_filter'] = undefined;

/**
 * @member {Boolean} time_on_page_min_filter
 */
ScreenRecordingFilterPageView.prototype['time_on_page_min_filter'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} url
 */
ScreenRecordingFilterPageView.prototype['url'] = undefined;

/**
 * @member {Boolean} url_filter
 */
ScreenRecordingFilterPageView.prototype['url_filter'] = undefined;






export default ScreenRecordingFilterPageView;

