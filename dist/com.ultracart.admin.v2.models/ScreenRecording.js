"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeoPoint = _interopRequireDefault(require("./GeoPoint"));

var _ScreenRecordingAdPlatform = _interopRequireDefault(require("./ScreenRecordingAdPlatform"));

var _ScreenRecordingPageView = _interopRequireDefault(require("./ScreenRecordingPageView"));

var _ScreenRecordingStoreFront = _interopRequireDefault(require("./ScreenRecordingStoreFront"));

var _ScreenRecordingUserAgent = _interopRequireDefault(require("./ScreenRecordingUserAgent"));

var _ScreenRecordingUserProperty = _interopRequireDefault(require("./ScreenRecordingUserProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecording model module.
 * @module com.ultracart.admin.v2.models/ScreenRecording
 * @version 4.0.48-RC
 */
var ScreenRecording = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecording</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecording
   */
  function ScreenRecording() {
    _classCallCheck(this, ScreenRecording);

    ScreenRecording.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecording, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecording</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecording} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecording} The populated <code>ScreenRecording</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecording();

        if (data.hasOwnProperty('ad_platform')) {
          obj['ad_platform'] = _ScreenRecordingAdPlatform["default"].constructFromObject(data['ad_platform']);
        }

        if (data.hasOwnProperty('analytics_client_oid')) {
          obj['analytics_client_oid'] = _ApiClient["default"].convertToType(data['analytics_client_oid'], 'Number');
        }

        if (data.hasOwnProperty('analytics_session_dts')) {
          obj['analytics_session_dts'] = _ApiClient["default"].convertToType(data['analytics_session_dts'], 'Number');
        }

        if (data.hasOwnProperty('analytics_session_oid')) {
          obj['analytics_session_oid'] = _ApiClient["default"].convertToType(data['analytics_session_oid'], 'Number');
        }

        if (data.hasOwnProperty('communications_campaign_name')) {
          obj['communications_campaign_name'] = _ApiClient["default"].convertToType(data['communications_campaign_name'], 'String');
        }

        if (data.hasOwnProperty('communications_campaign_uuid')) {
          obj['communications_campaign_uuid'] = _ApiClient["default"].convertToType(data['communications_campaign_uuid'], 'String');
        }

        if (data.hasOwnProperty('communications_email_subject')) {
          obj['communications_email_subject'] = _ApiClient["default"].convertToType(data['communications_email_subject'], 'String');
        }

        if (data.hasOwnProperty('communications_email_uuid')) {
          obj['communications_email_uuid'] = _ApiClient["default"].convertToType(data['communications_email_uuid'], 'String');
        }

        if (data.hasOwnProperty('communications_flow_name')) {
          obj['communications_flow_name'] = _ApiClient["default"].convertToType(data['communications_flow_name'], 'String');
        }

        if (data.hasOwnProperty('communications_flow_uuid')) {
          obj['communications_flow_uuid'] = _ApiClient["default"].convertToType(data['communications_flow_uuid'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('email_domain')) {
          obj['email_domain'] = _ApiClient["default"].convertToType(data['email_domain'], 'String');
        }

        if (data.hasOwnProperty('end_timestamp')) {
          obj['end_timestamp'] = _ApiClient["default"].convertToType(data['end_timestamp'], 'String');
        }

        if (data.hasOwnProperty('esp_customer_uuid')) {
          obj['esp_customer_uuid'] = _ApiClient["default"].convertToType(data['esp_customer_uuid'], 'String');
        }

        if (data.hasOwnProperty('events_gz_size')) {
          obj['events_gz_size'] = _ApiClient["default"].convertToType(data['events_gz_size'], 'Number');
        }

        if (data.hasOwnProperty('events_json_key')) {
          obj['events_json_key'] = _ApiClient["default"].convertToType(data['events_json_key'], 'String');
        }

        if (data.hasOwnProperty('favorite')) {
          obj['favorite'] = _ApiClient["default"].convertToType(data['favorite'], 'Boolean');
        }

        if (data.hasOwnProperty('favorites')) {
          obj['favorites'] = _ApiClient["default"].convertToType(data['favorites'], ['Number']);
        }

        if (data.hasOwnProperty('geolocation')) {
          obj['geolocation'] = _GeoPoint["default"].constructFromObject(data['geolocation']);
        }

        if (data.hasOwnProperty('geolocation_country')) {
          obj['geolocation_country'] = _ApiClient["default"].convertToType(data['geolocation_country'], 'String');
        }

        if (data.hasOwnProperty('geolocation_state')) {
          obj['geolocation_state'] = _ApiClient["default"].convertToType(data['geolocation_state'], 'String');
        }

        if (data.hasOwnProperty('language_iso_code')) {
          obj['language_iso_code'] = _ApiClient["default"].convertToType(data['language_iso_code'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_notes')) {
          obj['merchant_notes'] = _ApiClient["default"].convertToType(data['merchant_notes'], 'String');
        }

        if (data.hasOwnProperty('missing_external_tracking')) {
          obj['missing_external_tracking'] = _ApiClient["default"].convertToType(data['missing_external_tracking'], 'Boolean');
        }

        if (data.hasOwnProperty('order_id')) {
          obj['order_id'] = _ApiClient["default"].convertToType(data['order_id'], 'String');
        }

        if (data.hasOwnProperty('page_view_count')) {
          obj['page_view_count'] = _ApiClient["default"].convertToType(data['page_view_count'], 'Number');
        }

        if (data.hasOwnProperty('page_views')) {
          obj['page_views'] = _ApiClient["default"].convertToType(data['page_views'], [_ScreenRecordingPageView["default"]]);
        }

        if (data.hasOwnProperty('preferred_language')) {
          obj['preferred_language'] = _ApiClient["default"].convertToType(data['preferred_language'], 'String');
        }

        if (data.hasOwnProperty('referrer_domain')) {
          obj['referrer_domain'] = _ApiClient["default"].convertToType(data['referrer_domain'], 'String');
        }

        if (data.hasOwnProperty('rrweb_version')) {
          obj['rrweb_version'] = _ApiClient["default"].convertToType(data['rrweb_version'], 'String');
        }

        if (data.hasOwnProperty('screen_recording_uuid')) {
          obj['screen_recording_uuid'] = _ApiClient["default"].convertToType(data['screen_recording_uuid'], 'String');
        }

        if (data.hasOwnProperty('signed_download_url')) {
          obj['signed_download_url'] = _ApiClient["default"].convertToType(data['signed_download_url'], 'String');
        }

        if (data.hasOwnProperty('start_timestamp')) {
          obj['start_timestamp'] = _ApiClient["default"].convertToType(data['start_timestamp'], 'String');
        }

        if (data.hasOwnProperty('storefront_oids')) {
          obj['storefront_oids'] = _ApiClient["default"].convertToType(data['storefront_oids'], ['Number']);
        }

        if (data.hasOwnProperty('storefronts')) {
          obj['storefronts'] = _ApiClient["default"].convertToType(data['storefronts'], [_ScreenRecordingStoreFront["default"]]);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('time_on_site')) {
          obj['time_on_site'] = _ApiClient["default"].convertToType(data['time_on_site'], 'Number');
        }

        if (data.hasOwnProperty('ucacid')) {
          obj['ucacid'] = _ApiClient["default"].convertToType(data['ucacid'], 'String');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ScreenRecordingUserAgent["default"].constructFromObject(data['user_agent']);
        }

        if (data.hasOwnProperty('user_agent_raw')) {
          obj['user_agent_raw'] = _ApiClient["default"].convertToType(data['user_agent_raw'], 'String');
        }

        if (data.hasOwnProperty('user_ip')) {
          obj['user_ip'] = _ApiClient["default"].convertToType(data['user_ip'], 'String');
        }

        if (data.hasOwnProperty('user_properties')) {
          obj['user_properties'] = _ApiClient["default"].convertToType(data['user_properties'], [_ScreenRecordingUserProperty["default"]]);
        }

        if (data.hasOwnProperty('utm_campaign')) {
          obj['utm_campaign'] = _ApiClient["default"].convertToType(data['utm_campaign'], 'String');
        }

        if (data.hasOwnProperty('utm_source')) {
          obj['utm_source'] = _ApiClient["default"].convertToType(data['utm_source'], 'String');
        }

        if (data.hasOwnProperty('visitor_first_seen')) {
          obj['visitor_first_seen'] = _ApiClient["default"].convertToType(data['visitor_first_seen'], 'String');
        }

        if (data.hasOwnProperty('visitor_number')) {
          obj['visitor_number'] = _ApiClient["default"].convertToType(data['visitor_number'], 'Number');
        }

        if (data.hasOwnProperty('watched')) {
          obj['watched'] = _ApiClient["default"].convertToType(data['watched'], 'Boolean');
        }

        if (data.hasOwnProperty('window_height')) {
          obj['window_height'] = _ApiClient["default"].convertToType(data['window_height'], 'Number');
        }

        if (data.hasOwnProperty('window_width')) {
          obj['window_width'] = _ApiClient["default"].convertToType(data['window_width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecording;
}();
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
var _default = ScreenRecording;
exports["default"] = _default;