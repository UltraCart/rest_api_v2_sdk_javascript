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
import ScreenRecordingFilterValuesPageView from './ScreenRecordingFilterValuesPageView';

/**
 * The ScreenRecordingFilterValues model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValues
 * @version 4.0.142
 */
class ScreenRecordingFilterValues {
    /**
     * Constructs a new <code>ScreenRecordingFilterValues</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues
     */
    constructor() { 
        
        ScreenRecordingFilterValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} The populated <code>ScreenRecordingFilterValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterValues();

            if (data.hasOwnProperty('communications_campaign_names')) {
                obj['communications_campaign_names'] = ApiClient.convertToType(data['communications_campaign_names'], ['String']);
            }
            if (data.hasOwnProperty('communications_email_subjects')) {
                obj['communications_email_subjects'] = ApiClient.convertToType(data['communications_email_subjects'], ['String']);
            }
            if (data.hasOwnProperty('communications_flow_names')) {
                obj['communications_flow_names'] = ApiClient.convertToType(data['communications_flow_names'], ['String']);
            }
            if (data.hasOwnProperty('email_domains')) {
                obj['email_domains'] = ApiClient.convertToType(data['email_domains'], ['String']);
            }
            if (data.hasOwnProperty('geolocation_countries')) {
                obj['geolocation_countries'] = ApiClient.convertToType(data['geolocation_countries'], ['String']);
            }
            if (data.hasOwnProperty('geolocation_states')) {
                obj['geolocation_states'] = ApiClient.convertToType(data['geolocation_states'], ['String']);
            }
            if (data.hasOwnProperty('language_iso_codes')) {
                obj['language_iso_codes'] = ApiClient.convertToType(data['language_iso_codes'], ['String']);
            }
            if (data.hasOwnProperty('max_values')) {
                obj['max_values'] = ApiClient.convertToType(data['max_values'], 'Number');
            }
            if (data.hasOwnProperty('page_views')) {
                obj['page_views'] = ApiClient.convertToType(data['page_views'], [ScreenRecordingFilterValuesPageView]);
            }
            if (data.hasOwnProperty('preferred_languages')) {
                obj['preferred_languages'] = ApiClient.convertToType(data['preferred_languages'], ['String']);
            }
            if (data.hasOwnProperty('referrer_domains')) {
                obj['referrer_domains'] = ApiClient.convertToType(data['referrer_domains'], ['String']);
            }
            if (data.hasOwnProperty('time_on_site_max')) {
                obj['time_on_site_max'] = ApiClient.convertToType(data['time_on_site_max'], 'Number');
            }
            if (data.hasOwnProperty('time_on_site_min')) {
                obj['time_on_site_min'] = ApiClient.convertToType(data['time_on_site_min'], 'Number');
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], ['String']);
            }
            if (data.hasOwnProperty('user_agent_device_names')) {
                obj['user_agent_device_names'] = ApiClient.convertToType(data['user_agent_device_names'], ['String']);
            }
            if (data.hasOwnProperty('user_agent_device_os_names')) {
                obj['user_agent_device_os_names'] = ApiClient.convertToType(data['user_agent_device_os_names'], ['String']);
            }
            if (data.hasOwnProperty('user_agent_device_os_versions')) {
                obj['user_agent_device_os_versions'] = ApiClient.convertToType(data['user_agent_device_os_versions'], ['String']);
            }
            if (data.hasOwnProperty('user_agent_names')) {
                obj['user_agent_names'] = ApiClient.convertToType(data['user_agent_names'], ['String']);
            }
            if (data.hasOwnProperty('user_agent_originals')) {
                obj['user_agent_originals'] = ApiClient.convertToType(data['user_agent_originals'], ['String']);
            }
            if (data.hasOwnProperty('utm_campaigns')) {
                obj['utm_campaigns'] = ApiClient.convertToType(data['utm_campaigns'], ['String']);
            }
            if (data.hasOwnProperty('utm_sources')) {
                obj['utm_sources'] = ApiClient.convertToType(data['utm_sources'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} communications_campaign_names
 */
ScreenRecordingFilterValues.prototype['communications_campaign_names'] = undefined;

/**
 * @member {Array.<String>} communications_email_subjects
 */
ScreenRecordingFilterValues.prototype['communications_email_subjects'] = undefined;

/**
 * @member {Array.<String>} communications_flow_names
 */
ScreenRecordingFilterValues.prototype['communications_flow_names'] = undefined;

/**
 * @member {Array.<String>} email_domains
 */
ScreenRecordingFilterValues.prototype['email_domains'] = undefined;

/**
 * @member {Array.<String>} geolocation_countries
 */
ScreenRecordingFilterValues.prototype['geolocation_countries'] = undefined;

/**
 * @member {Array.<String>} geolocation_states
 */
ScreenRecordingFilterValues.prototype['geolocation_states'] = undefined;

/**
 * @member {Array.<String>} language_iso_codes
 */
ScreenRecordingFilterValues.prototype['language_iso_codes'] = undefined;

/**
 * @member {Number} max_values
 */
ScreenRecordingFilterValues.prototype['max_values'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView>} page_views
 */
ScreenRecordingFilterValues.prototype['page_views'] = undefined;

/**
 * @member {Array.<String>} preferred_languages
 */
ScreenRecordingFilterValues.prototype['preferred_languages'] = undefined;

/**
 * @member {Array.<String>} referrer_domains
 */
ScreenRecordingFilterValues.prototype['referrer_domains'] = undefined;

/**
 * @member {Number} time_on_site_max
 */
ScreenRecordingFilterValues.prototype['time_on_site_max'] = undefined;

/**
 * @member {Number} time_on_site_min
 */
ScreenRecordingFilterValues.prototype['time_on_site_min'] = undefined;

/**
 * @member {Array.<String>} urls
 */
ScreenRecordingFilterValues.prototype['urls'] = undefined;

/**
 * @member {Array.<String>} user_agent_device_names
 */
ScreenRecordingFilterValues.prototype['user_agent_device_names'] = undefined;

/**
 * @member {Array.<String>} user_agent_device_os_names
 */
ScreenRecordingFilterValues.prototype['user_agent_device_os_names'] = undefined;

/**
 * @member {Array.<String>} user_agent_device_os_versions
 */
ScreenRecordingFilterValues.prototype['user_agent_device_os_versions'] = undefined;

/**
 * @member {Array.<String>} user_agent_names
 */
ScreenRecordingFilterValues.prototype['user_agent_names'] = undefined;

/**
 * @member {Array.<String>} user_agent_originals
 */
ScreenRecordingFilterValues.prototype['user_agent_originals'] = undefined;

/**
 * @member {Array.<String>} utm_campaigns
 */
ScreenRecordingFilterValues.prototype['utm_campaigns'] = undefined;

/**
 * @member {Array.<String>} utm_sources
 */
ScreenRecordingFilterValues.prototype['utm_sources'] = undefined;






export default ScreenRecordingFilterValues;

