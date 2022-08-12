"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingPageViewEvent = _interopRequireDefault(require("./ScreenRecordingPageViewEvent"));

var _ScreenRecordingPageViewParameter = _interopRequireDefault(require("./ScreenRecordingPageViewParameter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingPageView
 * @version 4.0.54-RC
 */
var ScreenRecordingPageView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageView
   */
  function ScreenRecordingPageView() {
    _classCallCheck(this, ScreenRecordingPageView);

    ScreenRecordingPageView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingPageView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageView} The populated <code>ScreenRecordingPageView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingPageView();

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ApiClient["default"].convertToType(data['domain'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_ScreenRecordingPageViewEvent["default"]]);
        }

        if (data.hasOwnProperty('first_event_timestamp')) {
          obj['first_event_timestamp'] = _ApiClient["default"].convertToType(data['first_event_timestamp'], 'String');
        }

        if (data.hasOwnProperty('http_post')) {
          obj['http_post'] = _ApiClient["default"].convertToType(data['http_post'], 'Boolean');
        }

        if (data.hasOwnProperty('last_event_timestamp')) {
          obj['last_event_timestamp'] = _ApiClient["default"].convertToType(data['last_event_timestamp'], 'String');
        }

        if (data.hasOwnProperty('missing_events')) {
          obj['missing_events'] = _ApiClient["default"].convertToType(data['missing_events'], 'Boolean');
        }

        if (data.hasOwnProperty('params')) {
          obj['params'] = _ApiClient["default"].convertToType(data['params'], [_ScreenRecordingPageViewParameter["default"]]);
        }

        if (data.hasOwnProperty('range_end')) {
          obj['range_end'] = _ApiClient["default"].convertToType(data['range_end'], 'Number');
        }

        if (data.hasOwnProperty('range_start')) {
          obj['range_start'] = _ApiClient["default"].convertToType(data['range_start'], 'Number');
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ApiClient["default"].convertToType(data['referrer'], 'String');
        }

        if (data.hasOwnProperty('referrer_params')) {
          obj['referrer_params'] = _ApiClient["default"].convertToType(data['referrer_params'], [_ScreenRecordingPageViewParameter["default"]]);
        }

        if (data.hasOwnProperty('referrer_raw')) {
          obj['referrer_raw'] = _ApiClient["default"].convertToType(data['referrer_raw'], 'String');
        }

        if (data.hasOwnProperty('screen_recording_page_view_uuid')) {
          obj['screen_recording_page_view_uuid'] = _ApiClient["default"].convertToType(data['screen_recording_page_view_uuid'], 'String');
        }

        if (data.hasOwnProperty('time_on_page')) {
          obj['time_on_page'] = _ApiClient["default"].convertToType(data['time_on_page'], 'Number');
        }

        if (data.hasOwnProperty('timing_dom_content_loaded')) {
          obj['timing_dom_content_loaded'] = _ApiClient["default"].convertToType(data['timing_dom_content_loaded'], 'Number');
        }

        if (data.hasOwnProperty('timing_loaded')) {
          obj['timing_loaded'] = _ApiClient["default"].convertToType(data['timing_loaded'], 'Number');
        }

        if (data.hasOwnProperty('truncated_events')) {
          obj['truncated_events'] = _ApiClient["default"].convertToType(data['truncated_events'], 'Boolean');
        }

        if (data.hasOwnProperty('ucapv')) {
          obj['ucapv'] = _ApiClient["default"].convertToType(data['ucapv'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingPageView;
}();
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
var _default = ScreenRecordingPageView;
exports["default"] = _default;