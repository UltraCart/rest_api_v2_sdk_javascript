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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance', 'com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch', 'com.ultracart.admin.v2.models/ScreenRecordingFilterPageView', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate', 'com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger', 'com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterGeoDistance'), require('./ScreenRecordingFilterIpSearch'), require('./ScreenRecordingFilterPageView'), require('./ScreenRecordingFilterRangeDate'), require('./ScreenRecordingFilterRangeInteger'), require('./ScreenRecordingFilterStringSearch'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilter = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterGeoDistance, root.UltraCartRestApiV2.ScreenRecordingFilterIpSearch, root.UltraCartRestApiV2.ScreenRecordingFilterPageView, root.UltraCartRestApiV2.ScreenRecordingFilterRangeDate, root.UltraCartRestApiV2.ScreenRecordingFilterRangeInteger, root.UltraCartRestApiV2.ScreenRecordingFilterStringSearch);
  }
}(this, function(ApiClient, ScreenRecordingFilterGeoDistance, ScreenRecordingFilterIpSearch, ScreenRecordingFilterPageView, ScreenRecordingFilterRangeDate, ScreenRecordingFilterRangeInteger, ScreenRecordingFilterStringSearch) {
  'use strict';

  /**
   * The ScreenRecordingFilter model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilter
   * @version 3.10.147
   */

  /**
   * Constructs a new <code>ScreenRecordingFilter</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} The populated <code>ScreenRecordingFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affiliate_email'))
        obj.affiliate_email = ApiClient.convertToType(data['affiliate_email'], 'String');
      if (data.hasOwnProperty('affiliate_id'))
        obj.affiliate_id = ApiClient.convertToType(data['affiliate_id'], 'Number');
      if (data.hasOwnProperty('communications_campaign_name'))
        obj.communications_campaign_name = ApiClient.convertToType(data['communications_campaign_name'], 'String');
      if (data.hasOwnProperty('communications_campaign_name_filter'))
        obj.communications_campaign_name_filter = ApiClient.convertToType(data['communications_campaign_name_filter'], 'Boolean');
      if (data.hasOwnProperty('communications_email_subject'))
        obj.communications_email_subject = ApiClient.convertToType(data['communications_email_subject'], 'String');
      if (data.hasOwnProperty('communications_email_subject_filter'))
        obj.communications_email_subject_filter = ApiClient.convertToType(data['communications_email_subject_filter'], 'Boolean');
      if (data.hasOwnProperty('communications_flow_name'))
        obj.communications_flow_name = ApiClient.convertToType(data['communications_flow_name'], 'String');
      if (data.hasOwnProperty('communications_flow_name_filter'))
        obj.communications_flow_name_filter = ApiClient.convertToType(data['communications_flow_name_filter'], 'Boolean');
      if (data.hasOwnProperty('email'))
        obj.email = ScreenRecordingFilterStringSearch.constructFromObject(data['email']);
      if (data.hasOwnProperty('email_domain'))
        obj.email_domain = ApiClient.convertToType(data['email_domain'], 'String');
      if (data.hasOwnProperty('email_domain_filter'))
        obj.email_domain_filter = ApiClient.convertToType(data['email_domain_filter'], 'Boolean');
      if (data.hasOwnProperty('email_identified'))
        obj.email_identified = ApiClient.convertToType(data['email_identified'], 'Boolean');
      if (data.hasOwnProperty('end_timestamp'))
        obj.end_timestamp = ScreenRecordingFilterRangeDate.constructFromObject(data['end_timestamp']);
      if (data.hasOwnProperty('esp_customer_uuid'))
        obj.esp_customer_uuid = ApiClient.convertToType(data['esp_customer_uuid'], 'String');
      if (data.hasOwnProperty('favorite'))
        obj.favorite = ApiClient.convertToType(data['favorite'], 'Boolean');
      if (data.hasOwnProperty('geolocation'))
        obj.geolocation = ScreenRecordingFilterGeoDistance.constructFromObject(data['geolocation']);
      if (data.hasOwnProperty('geolocation_country'))
        obj.geolocation_country = ScreenRecordingFilterStringSearch.constructFromObject(data['geolocation_country']);
      if (data.hasOwnProperty('geolocation_country_filter'))
        obj.geolocation_country_filter = ApiClient.convertToType(data['geolocation_country_filter'], 'Boolean');
      if (data.hasOwnProperty('geolocation_state'))
        obj.geolocation_state = ScreenRecordingFilterStringSearch.constructFromObject(data['geolocation_state']);
      if (data.hasOwnProperty('geolocation_state_filter'))
        obj.geolocation_state_filter = ApiClient.convertToType(data['geolocation_state_filter'], 'Boolean');
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ScreenRecordingFilterStringSearch.constructFromObject(data['language_iso_code']);
      if (data.hasOwnProperty('language_iso_code_filter'))
        obj.language_iso_code_filter = ApiClient.convertToType(data['language_iso_code_filter'], 'Boolean');
      if (data.hasOwnProperty('last_x_days'))
        obj.last_x_days = ApiClient.convertToType(data['last_x_days'], 'Number');
      if (data.hasOwnProperty('max_filter_values'))
        obj.max_filter_values = ApiClient.convertToType(data['max_filter_values'], 'Number');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ScreenRecordingFilterStringSearch.constructFromObject(data['order_id']);
      if (data.hasOwnProperty('page_view_count'))
        obj.page_view_count = ScreenRecordingFilterRangeInteger.constructFromObject(data['page_view_count']);
      if (data.hasOwnProperty('page_views'))
        obj.page_views = ApiClient.convertToType(data['page_views'], [ScreenRecordingFilterPageView]);
      if (data.hasOwnProperty('placed_order'))
        obj.placed_order = ApiClient.convertToType(data['placed_order'], 'Boolean');
      if (data.hasOwnProperty('preferred_language'))
        obj.preferred_language = ScreenRecordingFilterStringSearch.constructFromObject(data['preferred_language']);
      if (data.hasOwnProperty('preferred_language_filter'))
        obj.preferred_language_filter = ApiClient.convertToType(data['preferred_language_filter'], 'Boolean');
      if (data.hasOwnProperty('referrer_domain'))
        obj.referrer_domain = ApiClient.convertToType(data['referrer_domain'], 'String');
      if (data.hasOwnProperty('referrer_domain_filter'))
        obj.referrer_domain_filter = ApiClient.convertToType(data['referrer_domain_filter'], 'Boolean');
      if (data.hasOwnProperty('screen_recording_uuids'))
        obj.screen_recording_uuids = ApiClient.convertToType(data['screen_recording_uuids'], ['String']);
      if (data.hasOwnProperty('screen_sizes'))
        obj.screen_sizes = ApiClient.convertToType(data['screen_sizes'], ['String']);
      if (data.hasOwnProperty('skip_filter_values'))
        obj.skip_filter_values = ApiClient.convertToType(data['skip_filter_values'], 'Boolean');
      if (data.hasOwnProperty('skip_histogram'))
        obj.skip_histogram = ApiClient.convertToType(data['skip_histogram'], 'Boolean');
      if (data.hasOwnProperty('skip_hits'))
        obj.skip_hits = ApiClient.convertToType(data['skip_hits'], 'Boolean');
      if (data.hasOwnProperty('start_timestamp'))
        obj.start_timestamp = ScreenRecordingFilterRangeDate.constructFromObject(data['start_timestamp']);
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('time_on_site'))
        obj.time_on_site = ScreenRecordingFilterRangeInteger.constructFromObject(data['time_on_site']);
      if (data.hasOwnProperty('time_on_site_max_filter'))
        obj.time_on_site_max_filter = ApiClient.convertToType(data['time_on_site_max_filter'], 'Boolean');
      if (data.hasOwnProperty('time_on_site_min_filter'))
        obj.time_on_site_min_filter = ApiClient.convertToType(data['time_on_site_min_filter'], 'Boolean');
      if (data.hasOwnProperty('url_filter'))
        obj.url_filter = ApiClient.convertToType(data['url_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_device_name'))
        obj.user_agent_device_name = ApiClient.convertToType(data['user_agent_device_name'], 'String');
      if (data.hasOwnProperty('user_agent_device_name_filter'))
        obj.user_agent_device_name_filter = ApiClient.convertToType(data['user_agent_device_name_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_device_os_name_filter'))
        obj.user_agent_device_os_name_filter = ApiClient.convertToType(data['user_agent_device_os_name_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_device_os_version_filter'))
        obj.user_agent_device_os_version_filter = ApiClient.convertToType(data['user_agent_device_os_version_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_name'))
        obj.user_agent_name = ApiClient.convertToType(data['user_agent_name'], 'String');
      if (data.hasOwnProperty('user_agent_name_filter'))
        obj.user_agent_name_filter = ApiClient.convertToType(data['user_agent_name_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_original'))
        obj.user_agent_original = ScreenRecordingFilterStringSearch.constructFromObject(data['user_agent_original']);
      if (data.hasOwnProperty('user_agent_original_filter'))
        obj.user_agent_original_filter = ApiClient.convertToType(data['user_agent_original_filter'], 'Boolean');
      if (data.hasOwnProperty('user_agent_os_name'))
        obj.user_agent_os_name = ApiClient.convertToType(data['user_agent_os_name'], 'String');
      if (data.hasOwnProperty('user_agent_os_version'))
        obj.user_agent_os_version = ApiClient.convertToType(data['user_agent_os_version'], 'String');
      if (data.hasOwnProperty('user_ip'))
        obj.user_ip = ScreenRecordingFilterIpSearch.constructFromObject(data['user_ip']);
      if (data.hasOwnProperty('utm_campaign'))
        obj.utm_campaign = ApiClient.convertToType(data['utm_campaign'], 'String');
      if (data.hasOwnProperty('utm_campaign_filter'))
        obj.utm_campaign_filter = ApiClient.convertToType(data['utm_campaign_filter'], 'Boolean');
      if (data.hasOwnProperty('utm_source'))
        obj.utm_source = ApiClient.convertToType(data['utm_source'], 'String');
      if (data.hasOwnProperty('utm_source_filter'))
        obj.utm_source_filter = ApiClient.convertToType(data['utm_source_filter'], 'Boolean');
      if (data.hasOwnProperty('visitor_number'))
        obj.visitor_number = ApiClient.convertToType(data['visitor_number'], 'Number');
      if (data.hasOwnProperty('watched'))
        obj.watched = ApiClient.convertToType(data['watched'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} affiliate_email
   */
  exports.prototype.affiliate_email = undefined;

  /**
   * @member {Number} affiliate_id
   */
  exports.prototype.affiliate_id = undefined;

  /**
   * @member {String} communications_campaign_name
   */
  exports.prototype.communications_campaign_name = undefined;

  /**
   * @member {Boolean} communications_campaign_name_filter
   */
  exports.prototype.communications_campaign_name_filter = undefined;

  /**
   * @member {String} communications_email_subject
   */
  exports.prototype.communications_email_subject = undefined;

  /**
   * @member {Boolean} communications_email_subject_filter
   */
  exports.prototype.communications_email_subject_filter = undefined;

  /**
   * @member {String} communications_flow_name
   */
  exports.prototype.communications_flow_name = undefined;

  /**
   * @member {Boolean} communications_flow_name_filter
   */
  exports.prototype.communications_flow_name_filter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} email_domain
   */
  exports.prototype.email_domain = undefined;

  /**
   * @member {Boolean} email_domain_filter
   */
  exports.prototype.email_domain_filter = undefined;

  /**
   * @member {Boolean} email_identified
   */
  exports.prototype.email_identified = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} end_timestamp
   */
  exports.prototype.end_timestamp = undefined;

  /**
   * @member {String} esp_customer_uuid
   */
  exports.prototype.esp_customer_uuid = undefined;

  /**
   * @member {Boolean} favorite
   */
  exports.prototype.favorite = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} geolocation
   */
  exports.prototype.geolocation = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} geolocation_country
   */
  exports.prototype.geolocation_country = undefined;

  /**
   * @member {Boolean} geolocation_country_filter
   */
  exports.prototype.geolocation_country_filter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} geolocation_state
   */
  exports.prototype.geolocation_state = undefined;

  /**
   * @member {Boolean} geolocation_state_filter
   */
  exports.prototype.geolocation_state_filter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * @member {Boolean} language_iso_code_filter
   */
  exports.prototype.language_iso_code_filter = undefined;

  /**
   * @member {Number} last_x_days
   */
  exports.prototype.last_x_days = undefined;

  /**
   * @member {Number} max_filter_values
   */
  exports.prototype.max_filter_values = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} order_id
   */
  exports.prototype.order_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} page_view_count
   */
  exports.prototype.page_view_count = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView>} page_views
   */
  exports.prototype.page_views = undefined;

  /**
   * @member {Boolean} placed_order
   */
  exports.prototype.placed_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} preferred_language
   */
  exports.prototype.preferred_language = undefined;

  /**
   * @member {Boolean} preferred_language_filter
   */
  exports.prototype.preferred_language_filter = undefined;

  /**
   * @member {String} referrer_domain
   */
  exports.prototype.referrer_domain = undefined;

  /**
   * @member {Boolean} referrer_domain_filter
   */
  exports.prototype.referrer_domain_filter = undefined;

  /**
   * @member {Array.<String>} screen_recording_uuids
   */
  exports.prototype.screen_recording_uuids = undefined;

  /**
   * @member {Array.<String>} screen_sizes
   */
  exports.prototype.screen_sizes = undefined;

  /**
   * @member {Boolean} skip_filter_values
   */
  exports.prototype.skip_filter_values = undefined;

  /**
   * @member {Boolean} skip_histogram
   */
  exports.prototype.skip_histogram = undefined;

  /**
   * @member {Boolean} skip_hits
   */
  exports.prototype.skip_hits = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} start_timestamp
   */
  exports.prototype.start_timestamp = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} time_on_site
   */
  exports.prototype.time_on_site = undefined;

  /**
   * @member {Boolean} time_on_site_max_filter
   */
  exports.prototype.time_on_site_max_filter = undefined;

  /**
   * @member {Boolean} time_on_site_min_filter
   */
  exports.prototype.time_on_site_min_filter = undefined;

  /**
   * @member {Boolean} url_filter
   */
  exports.prototype.url_filter = undefined;

  /**
   * @member {String} user_agent_device_name
   */
  exports.prototype.user_agent_device_name = undefined;

  /**
   * @member {Boolean} user_agent_device_name_filter
   */
  exports.prototype.user_agent_device_name_filter = undefined;

  /**
   * @member {Boolean} user_agent_device_os_name_filter
   */
  exports.prototype.user_agent_device_os_name_filter = undefined;

  /**
   * @member {Boolean} user_agent_device_os_version_filter
   */
  exports.prototype.user_agent_device_os_version_filter = undefined;

  /**
   * @member {String} user_agent_name
   */
  exports.prototype.user_agent_name = undefined;

  /**
   * @member {Boolean} user_agent_name_filter
   */
  exports.prototype.user_agent_name_filter = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} user_agent_original
   */
  exports.prototype.user_agent_original = undefined;

  /**
   * @member {Boolean} user_agent_original_filter
   */
  exports.prototype.user_agent_original_filter = undefined;

  /**
   * @member {String} user_agent_os_name
   */
  exports.prototype.user_agent_os_name = undefined;

  /**
   * @member {String} user_agent_os_version
   */
  exports.prototype.user_agent_os_version = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} user_ip
   */
  exports.prototype.user_ip = undefined;

  /**
   * @member {String} utm_campaign
   */
  exports.prototype.utm_campaign = undefined;

  /**
   * @member {Boolean} utm_campaign_filter
   */
  exports.prototype.utm_campaign_filter = undefined;

  /**
   * @member {String} utm_source
   */
  exports.prototype.utm_source = undefined;

  /**
   * @member {Boolean} utm_source_filter
   */
  exports.prototype.utm_source_filter = undefined;

  /**
   * @member {Number} visitor_number
   */
  exports.prototype.visitor_number = undefined;

  /**
   * @member {Boolean} watched
   */
  exports.prototype.watched = undefined;

  return exports;

}));
