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
    define(['ApiClient', 'com.ultracart.admin.v2.models/GeoPoint', 'com.ultracart.admin.v2.models/ScreenRecordingPageView', 'com.ultracart.admin.v2.models/ScreenRecordingStoreFront', 'com.ultracart.admin.v2.models/ScreenRecordingUserAgent', 'com.ultracart.admin.v2.models/ScreenRecordingUserProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoPoint'), require('./ScreenRecordingPageView'), require('./ScreenRecordingStoreFront'), require('./ScreenRecordingUserAgent'), require('./ScreenRecordingUserProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ScreenRecording = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.GeoPoint, root.UltraCartRestApiV2.ScreenRecordingPageView, root.UltraCartRestApiV2.ScreenRecordingStoreFront, root.UltraCartRestApiV2.ScreenRecordingUserAgent, root.UltraCartRestApiV2.ScreenRecordingUserProperty);
  }
}(this, function(ApiClient, GeoPoint, ScreenRecordingPageView, ScreenRecordingStoreFront, ScreenRecordingUserAgent, ScreenRecordingUserProperty) {
  'use strict';

  /**
   * The ScreenRecording model module.
   * @module com.ultracart.admin.v2.models/ScreenRecording
   * @version 3.1.2
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
      if (data.hasOwnProperty('analytics_client_oid'))
        obj.analytics_client_oid = ApiClient.convertToType(data['analytics_client_oid'], 'Number');
      if (data.hasOwnProperty('analytics_session_dts'))
        obj.analytics_session_dts = ApiClient.convertToType(data['analytics_session_dts'], 'Number');
      if (data.hasOwnProperty('analytics_session_oid'))
        obj.analytics_session_oid = ApiClient.convertToType(data['analytics_session_oid'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
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
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.order_id = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('page_view_count'))
        obj.page_view_count = ApiClient.convertToType(data['page_view_count'], 'Number');
      if (data.hasOwnProperty('page_views'))
        obj.page_views = ApiClient.convertToType(data['page_views'], [ScreenRecordingPageView]);
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
   * @member {String} email
   */
  exports.prototype.email = undefined;

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
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

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
