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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScreenRecordingFilterValuesPageView'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecordingFilterValues = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ScreenRecordingFilterValuesPageView);
  }
}(this, function(ApiClient, ScreenRecordingFilterValuesPageView) {
  'use strict';

  /**
   * The ScreenRecordingFilterValues model module.
   * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValues
   * @version 3.1.37
   */

  /**
   * Constructs a new <code>ScreenRecordingFilterValues</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScreenRecordingFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} The populated <code>ScreenRecordingFilterValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('communications_campaign_names'))
        obj.communications_campaign_names = ApiClient.convertToType(data['communications_campaign_names'], ['String']);
      if (data.hasOwnProperty('communications_email_subjects'))
        obj.communications_email_subjects = ApiClient.convertToType(data['communications_email_subjects'], ['String']);
      if (data.hasOwnProperty('communications_flow_names'))
        obj.communications_flow_names = ApiClient.convertToType(data['communications_flow_names'], ['String']);
      if (data.hasOwnProperty('email_domains'))
        obj.email_domains = ApiClient.convertToType(data['email_domains'], ['String']);
      if (data.hasOwnProperty('geolocation_countries'))
        obj.geolocation_countries = ApiClient.convertToType(data['geolocation_countries'], ['String']);
      if (data.hasOwnProperty('geolocation_states'))
        obj.geolocation_states = ApiClient.convertToType(data['geolocation_states'], ['String']);
      if (data.hasOwnProperty('language_iso_codes'))
        obj.language_iso_codes = ApiClient.convertToType(data['language_iso_codes'], ['String']);
      if (data.hasOwnProperty('max_values'))
        obj.max_values = ApiClient.convertToType(data['max_values'], 'Number');
      if (data.hasOwnProperty('page_views'))
        obj.page_views = ApiClient.convertToType(data['page_views'], [ScreenRecordingFilterValuesPageView]);
      if (data.hasOwnProperty('preferred_languages'))
        obj.preferred_languages = ApiClient.convertToType(data['preferred_languages'], ['String']);
      if (data.hasOwnProperty('referrer_domains'))
        obj.referrer_domains = ApiClient.convertToType(data['referrer_domains'], ['String']);
      if (data.hasOwnProperty('time_on_site_max'))
        obj.time_on_site_max = ApiClient.convertToType(data['time_on_site_max'], 'Number');
      if (data.hasOwnProperty('time_on_site_min'))
        obj.time_on_site_min = ApiClient.convertToType(data['time_on_site_min'], 'Number');
      if (data.hasOwnProperty('urls'))
        obj.urls = ApiClient.convertToType(data['urls'], ['String']);
      if (data.hasOwnProperty('user_agent_device_names'))
        obj.user_agent_device_names = ApiClient.convertToType(data['user_agent_device_names'], ['String']);
      if (data.hasOwnProperty('user_agent_device_os_names'))
        obj.user_agent_device_os_names = ApiClient.convertToType(data['user_agent_device_os_names'], ['String']);
      if (data.hasOwnProperty('user_agent_device_os_versions'))
        obj.user_agent_device_os_versions = ApiClient.convertToType(data['user_agent_device_os_versions'], ['String']);
      if (data.hasOwnProperty('user_agent_names'))
        obj.user_agent_names = ApiClient.convertToType(data['user_agent_names'], ['String']);
      if (data.hasOwnProperty('user_agent_originals'))
        obj.user_agent_originals = ApiClient.convertToType(data['user_agent_originals'], ['String']);
      if (data.hasOwnProperty('utm_campaigns'))
        obj.utm_campaigns = ApiClient.convertToType(data['utm_campaigns'], ['String']);
      if (data.hasOwnProperty('utm_sources'))
        obj.utm_sources = ApiClient.convertToType(data['utm_sources'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} communications_campaign_names
   */
  exports.prototype.communications_campaign_names = undefined;

  /**
   * @member {Array.<String>} communications_email_subjects
   */
  exports.prototype.communications_email_subjects = undefined;

  /**
   * @member {Array.<String>} communications_flow_names
   */
  exports.prototype.communications_flow_names = undefined;

  /**
   * @member {Array.<String>} email_domains
   */
  exports.prototype.email_domains = undefined;

  /**
   * @member {Array.<String>} geolocation_countries
   */
  exports.prototype.geolocation_countries = undefined;

  /**
   * @member {Array.<String>} geolocation_states
   */
  exports.prototype.geolocation_states = undefined;

  /**
   * @member {Array.<String>} language_iso_codes
   */
  exports.prototype.language_iso_codes = undefined;

  /**
   * @member {Number} max_values
   */
  exports.prototype.max_values = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView>} page_views
   */
  exports.prototype.page_views = undefined;

  /**
   * @member {Array.<String>} preferred_languages
   */
  exports.prototype.preferred_languages = undefined;

  /**
   * @member {Array.<String>} referrer_domains
   */
  exports.prototype.referrer_domains = undefined;

  /**
   * @member {Number} time_on_site_max
   */
  exports.prototype.time_on_site_max = undefined;

  /**
   * @member {Number} time_on_site_min
   */
  exports.prototype.time_on_site_min = undefined;

  /**
   * @member {Array.<String>} urls
   */
  exports.prototype.urls = undefined;

  /**
   * @member {Array.<String>} user_agent_device_names
   */
  exports.prototype.user_agent_device_names = undefined;

  /**
   * @member {Array.<String>} user_agent_device_os_names
   */
  exports.prototype.user_agent_device_os_names = undefined;

  /**
   * @member {Array.<String>} user_agent_device_os_versions
   */
  exports.prototype.user_agent_device_os_versions = undefined;

  /**
   * @member {Array.<String>} user_agent_names
   */
  exports.prototype.user_agent_names = undefined;

  /**
   * @member {Array.<String>} user_agent_originals
   */
  exports.prototype.user_agent_originals = undefined;

  /**
   * @member {Array.<String>} utm_campaigns
   */
  exports.prototype.utm_campaigns = undefined;

  /**
   * @member {Array.<String>} utm_sources
   */
  exports.prototype.utm_sources = undefined;

  return exports;

}));