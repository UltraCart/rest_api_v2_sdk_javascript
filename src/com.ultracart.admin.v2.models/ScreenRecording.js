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
import GeoPoint from './GeoPoint';
import ScreenRecordingAdPlatform from './ScreenRecordingAdPlatform';
import ScreenRecordingPageView from './ScreenRecordingPageView';
import ScreenRecordingStoreFront from './ScreenRecordingStoreFront';
import ScreenRecordingUserAgent from './ScreenRecordingUserAgent';
import ScreenRecordingUserProperty from './ScreenRecordingUserProperty';

/**
 * The ScreenRecording model module.
 * @module com.ultracart.admin.v2.models/ScreenRecording
 * @version 4.0.163
 */
class ScreenRecording {
    /**
     * Constructs a new <code>ScreenRecording</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecording
     */
    constructor() { 
        
        ScreenRecording.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecording</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecording} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecording} The populated <code>ScreenRecording</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecording();

            if (data.hasOwnProperty('ad_platform')) {
                obj['ad_platform'] = ScreenRecordingAdPlatform.constructFromObject(data['ad_platform']);
            }
            if (data.hasOwnProperty('analytics_client_oid')) {
                obj['analytics_client_oid'] = ApiClient.convertToType(data['analytics_client_oid'], 'Number');
            }
            if (data.hasOwnProperty('analytics_session_dts')) {
                obj['analytics_session_dts'] = ApiClient.convertToType(data['analytics_session_dts'], 'Number');
            }
            if (data.hasOwnProperty('analytics_session_oid')) {
                obj['analytics_session_oid'] = ApiClient.convertToType(data['analytics_session_oid'], 'Number');
            }
            if (data.hasOwnProperty('communications_campaign_name')) {
                obj['communications_campaign_name'] = ApiClient.convertToType(data['communications_campaign_name'], 'String');
            }
            if (data.hasOwnProperty('communications_campaign_uuid')) {
                obj['communications_campaign_uuid'] = ApiClient.convertToType(data['communications_campaign_uuid'], 'String');
            }
            if (data.hasOwnProperty('communications_email_subject')) {
                obj['communications_email_subject'] = ApiClient.convertToType(data['communications_email_subject'], 'String');
            }
            if (data.hasOwnProperty('communications_email_uuid')) {
                obj['communications_email_uuid'] = ApiClient.convertToType(data['communications_email_uuid'], 'String');
            }
            if (data.hasOwnProperty('communications_flow_name')) {
                obj['communications_flow_name'] = ApiClient.convertToType(data['communications_flow_name'], 'String');
            }
            if (data.hasOwnProperty('communications_flow_uuid')) {
                obj['communications_flow_uuid'] = ApiClient.convertToType(data['communications_flow_uuid'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_domain')) {
                obj['email_domain'] = ApiClient.convertToType(data['email_domain'], 'String');
            }
            if (data.hasOwnProperty('end_timestamp')) {
                obj['end_timestamp'] = ApiClient.convertToType(data['end_timestamp'], 'String');
            }
            if (data.hasOwnProperty('esp_customer_uuid')) {
                obj['esp_customer_uuid'] = ApiClient.convertToType(data['esp_customer_uuid'], 'String');
            }
            if (data.hasOwnProperty('events_gz_size')) {
                obj['events_gz_size'] = ApiClient.convertToType(data['events_gz_size'], 'Number');
            }
            if (data.hasOwnProperty('events_json_key')) {
                obj['events_json_key'] = ApiClient.convertToType(data['events_json_key'], 'String');
            }
            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('favorites')) {
                obj['favorites'] = ApiClient.convertToType(data['favorites'], ['Number']);
            }
            if (data.hasOwnProperty('geolocation')) {
                obj['geolocation'] = GeoPoint.constructFromObject(data['geolocation']);
            }
            if (data.hasOwnProperty('geolocation_country')) {
                obj['geolocation_country'] = ApiClient.convertToType(data['geolocation_country'], 'String');
            }
            if (data.hasOwnProperty('geolocation_state')) {
                obj['geolocation_state'] = ApiClient.convertToType(data['geolocation_state'], 'String');
            }
            if (data.hasOwnProperty('language_iso_code')) {
                obj['language_iso_code'] = ApiClient.convertToType(data['language_iso_code'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_notes')) {
                obj['merchant_notes'] = ApiClient.convertToType(data['merchant_notes'], 'String');
            }
            if (data.hasOwnProperty('missing_external_tracking')) {
                obj['missing_external_tracking'] = ApiClient.convertToType(data['missing_external_tracking'], 'Boolean');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('page_view_count')) {
                obj['page_view_count'] = ApiClient.convertToType(data['page_view_count'], 'Number');
            }
            if (data.hasOwnProperty('page_views')) {
                obj['page_views'] = ApiClient.convertToType(data['page_views'], [ScreenRecordingPageView]);
            }
            if (data.hasOwnProperty('preferred_language')) {
                obj['preferred_language'] = ApiClient.convertToType(data['preferred_language'], 'String');
            }
            if (data.hasOwnProperty('referrer_domain')) {
                obj['referrer_domain'] = ApiClient.convertToType(data['referrer_domain'], 'String');
            }
            if (data.hasOwnProperty('rrweb_version')) {
                obj['rrweb_version'] = ApiClient.convertToType(data['rrweb_version'], 'String');
            }
            if (data.hasOwnProperty('screen_recording_uuid')) {
                obj['screen_recording_uuid'] = ApiClient.convertToType(data['screen_recording_uuid'], 'String');
            }
            if (data.hasOwnProperty('signed_download_url')) {
                obj['signed_download_url'] = ApiClient.convertToType(data['signed_download_url'], 'String');
            }
            if (data.hasOwnProperty('start_timestamp')) {
                obj['start_timestamp'] = ApiClient.convertToType(data['start_timestamp'], 'String');
            }
            if (data.hasOwnProperty('storefront_oids')) {
                obj['storefront_oids'] = ApiClient.convertToType(data['storefront_oids'], ['Number']);
            }
            if (data.hasOwnProperty('storefronts')) {
                obj['storefronts'] = ApiClient.convertToType(data['storefronts'], [ScreenRecordingStoreFront]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('time_on_site')) {
                obj['time_on_site'] = ApiClient.convertToType(data['time_on_site'], 'Number');
            }
            if (data.hasOwnProperty('ucacid')) {
                obj['ucacid'] = ApiClient.convertToType(data['ucacid'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ScreenRecordingUserAgent.constructFromObject(data['user_agent']);
            }
            if (data.hasOwnProperty('user_agent_raw')) {
                obj['user_agent_raw'] = ApiClient.convertToType(data['user_agent_raw'], 'String');
            }
            if (data.hasOwnProperty('user_ip')) {
                obj['user_ip'] = ApiClient.convertToType(data['user_ip'], 'String');
            }
            if (data.hasOwnProperty('user_properties')) {
                obj['user_properties'] = ApiClient.convertToType(data['user_properties'], [ScreenRecordingUserProperty]);
            }
            if (data.hasOwnProperty('utm_campaign')) {
                obj['utm_campaign'] = ApiClient.convertToType(data['utm_campaign'], 'String');
            }
            if (data.hasOwnProperty('utm_source')) {
                obj['utm_source'] = ApiClient.convertToType(data['utm_source'], 'String');
            }
            if (data.hasOwnProperty('visitor_first_seen')) {
                obj['visitor_first_seen'] = ApiClient.convertToType(data['visitor_first_seen'], 'String');
            }
            if (data.hasOwnProperty('visitor_number')) {
                obj['visitor_number'] = ApiClient.convertToType(data['visitor_number'], 'Number');
            }
            if (data.hasOwnProperty('watched')) {
                obj['watched'] = ApiClient.convertToType(data['watched'], 'Boolean');
            }
            if (data.hasOwnProperty('window_height')) {
                obj['window_height'] = ApiClient.convertToType(data['window_height'], 'Number');
            }
            if (data.hasOwnProperty('window_width')) {
                obj['window_width'] = ApiClient.convertToType(data['window_width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} ad_platform
 */
ScreenRecording.prototype['ad_platform'] = undefined;

/**
 * @member {Number} analytics_client_oid
 */
ScreenRecording.prototype['analytics_client_oid'] = undefined;

/**
 * @member {Number} analytics_session_dts
 */
ScreenRecording.prototype['analytics_session_dts'] = undefined;

/**
 * @member {Number} analytics_session_oid
 */
ScreenRecording.prototype['analytics_session_oid'] = undefined;

/**
 * Campaign Name
 * @member {String} communications_campaign_name
 */
ScreenRecording.prototype['communications_campaign_name'] = undefined;

/**
 * Campaign UUID
 * @member {String} communications_campaign_uuid
 */
ScreenRecording.prototype['communications_campaign_uuid'] = undefined;

/**
 * Email subject
 * @member {String} communications_email_subject
 */
ScreenRecording.prototype['communications_email_subject'] = undefined;

/**
 * Email UUID
 * @member {String} communications_email_uuid
 */
ScreenRecording.prototype['communications_email_uuid'] = undefined;

/**
 * Flow Name
 * @member {String} communications_flow_name
 */
ScreenRecording.prototype['communications_flow_name'] = undefined;

/**
 * Flow UUID
 * @member {String} communications_flow_uuid
 */
ScreenRecording.prototype['communications_flow_uuid'] = undefined;

/**
 * @member {String} email
 */
ScreenRecording.prototype['email'] = undefined;

/**
 * @member {String} email_domain
 */
ScreenRecording.prototype['email_domain'] = undefined;

/**
 * Ending timestamp
 * @member {String} end_timestamp
 */
ScreenRecording.prototype['end_timestamp'] = undefined;

/**
 * @member {String} esp_customer_uuid
 */
ScreenRecording.prototype['esp_customer_uuid'] = undefined;

/**
 * @member {Number} events_gz_size
 */
ScreenRecording.prototype['events_gz_size'] = undefined;

/**
 * @member {String} events_json_key
 */
ScreenRecording.prototype['events_json_key'] = undefined;

/**
 * True if the user calling the API has favorited this particular screen recording.
 * @member {Boolean} favorite
 */
ScreenRecording.prototype['favorite'] = undefined;

/**
 * Array of user ids that favorited this particular screen recording.
 * @member {Array.<Number>} favorites
 */
ScreenRecording.prototype['favorites'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/GeoPoint} geolocation
 */
ScreenRecording.prototype['geolocation'] = undefined;

/**
 * @member {String} geolocation_country
 */
ScreenRecording.prototype['geolocation_country'] = undefined;

/**
 * @member {String} geolocation_state
 */
ScreenRecording.prototype['geolocation_state'] = undefined;

/**
 * Language ISO code
 * @member {String} language_iso_code
 */
ScreenRecording.prototype['language_iso_code'] = undefined;

/**
 * @member {String} merchant_id
 */
ScreenRecording.prototype['merchant_id'] = undefined;

/**
 * @member {String} merchant_notes
 */
ScreenRecording.prototype['merchant_notes'] = undefined;

/**
 * True if external page view was not tracked
 * @member {Boolean} missing_external_tracking
 */
ScreenRecording.prototype['missing_external_tracking'] = undefined;

/**
 * @member {String} order_id
 */
ScreenRecording.prototype['order_id'] = undefined;

/**
 * @member {Number} page_view_count
 */
ScreenRecording.prototype['page_view_count'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageView>} page_views
 */
ScreenRecording.prototype['page_views'] = undefined;

/**
 * ISO 3 Letter language code that the customer would prefer
 * @member {String} preferred_language
 */
ScreenRecording.prototype['preferred_language'] = undefined;

/**
 * @member {String} referrer_domain
 */
ScreenRecording.prototype['referrer_domain'] = undefined;

/**
 * @member {String} rrweb_version
 */
ScreenRecording.prototype['rrweb_version'] = undefined;

/**
 * @member {String} screen_recording_uuid
 */
ScreenRecording.prototype['screen_recording_uuid'] = undefined;

/**
 * @member {String} signed_download_url
 */
ScreenRecording.prototype['signed_download_url'] = undefined;

/**
 * Starting timestamp
 * @member {String} start_timestamp
 */
ScreenRecording.prototype['start_timestamp'] = undefined;

/**
 * @member {Array.<Number>} storefront_oids
 */
ScreenRecording.prototype['storefront_oids'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront>} storefronts
 */
ScreenRecording.prototype['storefronts'] = undefined;

/**
 * @member {Array.<String>} tags
 */
ScreenRecording.prototype['tags'] = undefined;

/**
 * @member {Number} time_on_site
 */
ScreenRecording.prototype['time_on_site'] = undefined;

/**
 * @member {String} ucacid
 */
ScreenRecording.prototype['ucacid'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} user_agent
 */
ScreenRecording.prototype['user_agent'] = undefined;

/**
 * @member {String} user_agent_raw
 */
ScreenRecording.prototype['user_agent_raw'] = undefined;

/**
 * @member {String} user_ip
 */
ScreenRecording.prototype['user_ip'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingUserProperty>} user_properties
 */
ScreenRecording.prototype['user_properties'] = undefined;

/**
 * UTM Campaign
 * @member {String} utm_campaign
 */
ScreenRecording.prototype['utm_campaign'] = undefined;

/**
 * UTM Source
 * @member {String} utm_source
 */
ScreenRecording.prototype['utm_source'] = undefined;

/**
 * Timestamp this visitor was first seen
 * @member {String} visitor_first_seen
 */
ScreenRecording.prototype['visitor_first_seen'] = undefined;

/**
 * @member {Number} visitor_number
 */
ScreenRecording.prototype['visitor_number'] = undefined;

/**
 * @member {Boolean} watched
 */
ScreenRecording.prototype['watched'] = undefined;

/**
 * @member {Number} window_height
 */
ScreenRecording.prototype['window_height'] = undefined;

/**
 * @member {Number} window_width
 */
ScreenRecording.prototype['window_width'] = undefined;






export default ScreenRecording;

