/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/GeoPoint', 'com.ultracart.admin.v2.models/ScreenRecordingAdPlatform', 'com.ultracart.admin.v2.models/ScreenRecordingPageView', 'com.ultracart.admin.v2.models/ScreenRecordingStoreFront', 'com.ultracart.admin.v2.models/ScreenRecordingUserAgent', 'com.ultracart.admin.v2.models/ScreenRecordingUserProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoPoint'), require('./ScreenRecordingAdPlatform'), require('./ScreenRecordingPageView'), require('./ScreenRecordingStoreFront'), require('./ScreenRecordingUserAgent'), require('./ScreenRecordingUserProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecording = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.GeoPoint, root.UltraCartRestApiV2.ScreenRecordingAdPlatform, root.UltraCartRestApiV2.ScreenRecordingPageView, root.UltraCartRestApiV2.ScreenRecordingStoreFront, root.UltraCartRestApiV2.ScreenRecordingUserAgent, root.UltraCartRestApiV2.ScreenRecordingUserProperty);
  }
}(this, function(ApiClient, GeoPoint, ScreenRecordingAdPlatform, ScreenRecordingPageView, ScreenRecordingStoreFront, ScreenRecordingUserAgent, ScreenRecordingUserProperty) {
  'use strict';

  /**
   * The ScreenRecording model module.
   * @module com.ultracart.admin.v2.models/ScreenRecording
   * @version 3.10.105
   */

  /**
   * Constructs a new <code>ScreenRecording</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecording
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecording</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecording} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecording} The populated <code>ScreenRecording</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ad_platform'))
        obj.ad_platform = ScreenRecordingAdPlatform.constructFromObject(data['ad_platform']);
      if (data.hasOwnProperty('analytics_client_oid'))
        obj.analytics_client_oid = ApiClient.convertToType(data['analytics_client_oid'], 'Number');
      if (data.hasOwnProperty('analytics_session_dts'))
        obj.analytics_session_dts = ApiClient.convertToType(data['analytics_session_dts'], 'Number');
      if (data.hasOwnProperty('analytics_session_oid'))
        obj.analytics_session_oid = ApiClient.convertToType(data['analytics_session_oid'], 'Number');
      if (data.hasOwnProperty('communications_campaign_name'))
        obj.communications_campaign_name = ApiClient.convertToType(data['communications_campaign_name'], 'String');
      if (data.hasOwnProperty('communications_campaign_uuid'))
        obj.communications_campaign_uuid = ApiClient.convertToType(data['communications_campaign_uuid'], 'String');
      if (data.hasOwnProperty('communications_email_subject'))
        obj.communications_email_subject = ApiClient.convertToType(data['communications_email_subject'], 'String');
      if (data.hasOwnProperty('communications_email_uuid'))
        obj.communications_email_uuid = ApiClient.convertToType(data['communications_email_uuid'], 'String');
      if (data.hasOwnProperty('communications_flow_name'))
        obj.communications_flow_name = ApiClient.convertToType(data['communications_flow_name'], 'String');
      if (data.hasOwnProperty('communications_flow_uuid'))
        obj.communications_flow_uuid = ApiClient.convertToType(data['communications_flow_uuid'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('email_domain'))
        obj.email_domain = ApiClient.convertToType(data['email_domain'], 'String');
      if (data.hasOwnProperty('end_timestamp'))
        obj.end_timestamp = ApiClient.convertToType(data['end_timestamp'], 'String');
      if (data.hasOwnProperty('esp_customer_uuid'))
        obj.esp_customer_uuid = ApiClient.convertToType(data['esp_customer_uuid'], 'String');
      if (data.hasOwnProperty('events_gz_size'))
        obj.events_gz_size = ApiClient.convertToType(data['events_gz_size'], 'Number');
      if (data.hasOwnProperty('events_json_key'))
        obj.events_json_key = ApiClient.convertToType(data['events_json_key'], 'String');
      if (data.hasOwnProperty('favorite'))
        obj.favorite = ApiClient.convertToType(data['favorite'], 'Boolean');
      if (data.hasOwnProperty('favorites'))
        obj.favorites = ApiClient.convertToType(data['favorites'], ['Number']);
      if (data.hasOwnProperty('geolocation'))
        obj.geolocation = GeoPoint.constructFromObject(data['geolocation']);
      if (data.hasOwnProperty('geolocation_country'))
        obj.geolocation_country = ApiClient.convertToType(data['geolocation_country'], 'String');
      if (data.hasOwnProperty('geolocation_state'))
        obj.geolocation_state = ApiClient.convertToType(data['geolocation_state'], 'String');
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('merchant_notes'))
        obj.merchant_notes = ApiClient.convertToType(data['merchant_notes'], 'String');
      if (data.hasOwnProperty('missing_external_tracking'))
        obj.missing_external_tracking = ApiClient.convertToType(data['missing_external_tracking'], 'Boolean');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('page_view_count'))
        obj.page_view_count = ApiClient.convertToType(data['page_view_count'], 'Number');
      if (data.hasOwnProperty('page_views'))
        obj.page_views = ApiClient.convertToType(data['page_views'], [ScreenRecordingPageView]);
      if (data.hasOwnProperty('preferred_language'))
        obj.preferred_language = ApiClient.convertToType(data['preferred_language'], 'String');
      if (data.hasOwnProperty('referrer_domain'))
        obj.referrer_domain = ApiClient.convertToType(data['referrer_domain'], 'String');
      if (data.hasOwnProperty('rrweb_version'))
        obj.rrweb_version = ApiClient.convertToType(data['rrweb_version'], 'String');
      if (data.hasOwnProperty('screen_recording_uuid'))
        obj.screen_recording_uuid = ApiClient.convertToType(data['screen_recording_uuid'], 'String');
      if (data.hasOwnProperty('signed_download_url'))
        obj.signed_download_url = ApiClient.convertToType(data['signed_download_url'], 'String');
      if (data.hasOwnProperty('start_timestamp'))
        obj.start_timestamp = ApiClient.convertToType(data['start_timestamp'], 'String');
      if (data.hasOwnProperty('storefront_oids'))
        obj.storefront_oids = ApiClient.convertToType(data['storefront_oids'], ['Number']);
      if (data.hasOwnProperty('storefronts'))
        obj.storefronts = ApiClient.convertToType(data['storefronts'], [ScreenRecordingStoreFront]);
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('time_on_site'))
        obj.time_on_site = ApiClient.convertToType(data['time_on_site'], 'Number');
      if (data.hasOwnProperty('ucacid'))
        obj.ucacid = ApiClient.convertToType(data['ucacid'], 'String');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ScreenRecordingUserAgent.constructFromObject(data['user_agent']);
      if (data.hasOwnProperty('user_agent_raw'))
        obj.user_agent_raw = ApiClient.convertToType(data['user_agent_raw'], 'String');
      if (data.hasOwnProperty('user_ip'))
        obj.user_ip = ApiClient.convertToType(data['user_ip'], 'String');
      if (data.hasOwnProperty('user_properties'))
        obj.user_properties = ApiClient.convertToType(data['user_properties'], [ScreenRecordingUserProperty]);
      if (data.hasOwnProperty('utm_campaign'))
        obj.utm_campaign = ApiClient.convertToType(data['utm_campaign'], 'String');
      if (data.hasOwnProperty('utm_source'))
        obj.utm_source = ApiClient.convertToType(data['utm_source'], 'String');
      if (data.hasOwnProperty('visitor_first_seen'))
        obj.visitor_first_seen = ApiClient.convertToType(data['visitor_first_seen'], 'String');
      if (data.hasOwnProperty('visitor_number'))
        obj.visitor_number = ApiClient.convertToType(data['visitor_number'], 'Number');
      if (data.hasOwnProperty('watched'))
        obj.watched = ApiClient.convertToType(data['watched'], 'Boolean');
      if (data.hasOwnProperty('window_height'))
        obj.window_height = ApiClient.convertToType(data['window_height'], 'Number');
      if (data.hasOwnProperty('window_width'))
        obj.window_width = ApiClient.convertToType(data['window_width'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingAdPlatform} ad_platform
   */
  exports.prototype.ad_platform = undefined;

  /**
   * @member {Number} analytics_client_oid
   */
  exports.prototype.analytics_client_oid = undefined;

  /**
   * @member {Number} analytics_session_dts
   */
  exports.prototype.analytics_session_dts = undefined;

  /**
   * @member {Number} analytics_session_oid
   */
  exports.prototype.analytics_session_oid = undefined;

  /**
   * Campaign Name
   * @member {String} communications_campaign_name
   */
  exports.prototype.communications_campaign_name = undefined;

  /**
   * Campaign UUID
   * @member {String} communications_campaign_uuid
   */
  exports.prototype.communications_campaign_uuid = undefined;

  /**
   * Email subject
   * @member {String} communications_email_subject
   */
  exports.prototype.communications_email_subject = undefined;

  /**
   * Email UUID
   * @member {String} communications_email_uuid
   */
  exports.prototype.communications_email_uuid = undefined;

  /**
   * Flow Name
   * @member {String} communications_flow_name
   */
  exports.prototype.communications_flow_name = undefined;

  /**
   * Flow UUID
   * @member {String} communications_flow_uuid
   */
  exports.prototype.communications_flow_uuid = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} email_domain
   */
  exports.prototype.email_domain = undefined;

  /**
   * Ending timestamp
   * @member {String} end_timestamp
   */
  exports.prototype.end_timestamp = undefined;

  /**
   * @member {String} esp_customer_uuid
   */
  exports.prototype.esp_customer_uuid = undefined;

  /**
   * @member {Number} events_gz_size
   */
  exports.prototype.events_gz_size = undefined;

  /**
   * @member {String} events_json_key
   */
  exports.prototype.events_json_key = undefined;

  /**
   * True if the user calling the API has favorited this particular screen recording.
   * @member {Boolean} favorite
   */
  exports.prototype.favorite = undefined;

  /**
   * Array of user ids that favorited this particular screen recording.
   * @member {Array.<Number>} favorites
   */
  exports.prototype.favorites = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/GeoPoint} geolocation
   */
  exports.prototype.geolocation = undefined;

  /**
   * @member {String} geolocation_country
   */
  exports.prototype.geolocation_country = undefined;

  /**
   * @member {String} geolocation_state
   */
  exports.prototype.geolocation_state = undefined;

  /**
   * Language ISO code
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} merchant_notes
   */
  exports.prototype.merchant_notes = undefined;

  /**
   * True if external page view was not tracked
   * @member {Boolean} missing_external_tracking
   */
  exports.prototype.missing_external_tracking = undefined;

  /**
   * @member {String} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {Number} page_view_count
   */
  exports.prototype.page_view_count = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageView>} page_views
   */
  exports.prototype.page_views = undefined;

  /**
   * ISO 3 Letter language code that the customer would prefer
   * @member {String} preferred_language
   */
  exports.prototype.preferred_language = undefined;

  /**
   * @member {String} referrer_domain
   */
  exports.prototype.referrer_domain = undefined;

  /**
   * @member {String} rrweb_version
   */
  exports.prototype.rrweb_version = undefined;

  /**
   * @member {String} screen_recording_uuid
   */
  exports.prototype.screen_recording_uuid = undefined;

  /**
   * @member {String} signed_download_url
   */
  exports.prototype.signed_download_url = undefined;

  /**
   * Starting timestamp
   * @member {String} start_timestamp
   */
  exports.prototype.start_timestamp = undefined;

  /**
   * @member {Array.<Number>} storefront_oids
   */
  exports.prototype.storefront_oids = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront>} storefronts
   */
  exports.prototype.storefronts = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {Number} time_on_site
   */
  exports.prototype.time_on_site = undefined;

  /**
   * @member {String} ucacid
   */
  exports.prototype.ucacid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} user_agent
   */
  exports.prototype.user_agent = undefined;

  /**
   * @member {String} user_agent_raw
   */
  exports.prototype.user_agent_raw = undefined;

  /**
   * @member {String} user_ip
   */
  exports.prototype.user_ip = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingUserProperty>} user_properties
   */
  exports.prototype.user_properties = undefined;

  /**
   * UTM Campaign
   * @member {String} utm_campaign
   */
  exports.prototype.utm_campaign = undefined;

  /**
   * UTM Source
   * @member {String} utm_source
   */
  exports.prototype.utm_source = undefined;

  /**
   * Timestamp this visitor was first seen
   * @member {String} visitor_first_seen
   */
  exports.prototype.visitor_first_seen = undefined;

  /**
   * @member {Number} visitor_number
   */
  exports.prototype.visitor_number = undefined;

  /**
   * @member {Boolean} watched
   */
  exports.prototype.watched = undefined;

  /**
   * @member {Number} window_height
   */
  exports.prototype.window_height = undefined;

  /**
   * @member {Number} window_width
   */
  exports.prototype.window_width = undefined;

  return exports;

}));
