"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterPageViewEvent = _interopRequireDefault(require("./ScreenRecordingFilterPageViewEvent"));

var _ScreenRecordingFilterPageViewParam = _interopRequireDefault(require("./ScreenRecordingFilterPageViewParam"));

var _ScreenRecordingFilterPageViewReferrerParam = _interopRequireDefault(require("./ScreenRecordingFilterPageViewReferrerParam"));

var _ScreenRecordingFilterRangeInteger = _interopRequireDefault(require("./ScreenRecordingFilterRangeInteger"));

var _ScreenRecordingFilterStringSearch = _interopRequireDefault(require("./ScreenRecordingFilterStringSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingFilterPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
 * @version 4.0.126-RC
 */
var ScreenRecordingFilterPageView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView
   */
  function ScreenRecordingFilterPageView() {
    _classCallCheck(this, ScreenRecordingFilterPageView);

    ScreenRecordingFilterPageView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterPageView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageView} The populated <code>ScreenRecordingFilterPageView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterPageView();

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ScreenRecordingFilterStringSearch["default"].constructFromObject(data['domain']);
        }

        if (data.hasOwnProperty('domain_filter')) {
          obj['domain_filter'] = _ApiClient["default"].convertToType(data['domain_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('event_name_filter')) {
          obj['event_name_filter'] = _ApiClient["default"].convertToType(data['event_name_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('event_param_name_filter')) {
          obj['event_param_name_filter'] = _ApiClient["default"].convertToType(data['event_param_name_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('event_param_value_filter')) {
          obj['event_param_value_filter'] = _ApiClient["default"].convertToType(data['event_param_value_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_ScreenRecordingFilterPageViewEvent["default"]]);
        }

        if (data.hasOwnProperty('param_name_filter')) {
          obj['param_name_filter'] = _ApiClient["default"].convertToType(data['param_name_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('param_value_filter')) {
          obj['param_value_filter'] = _ApiClient["default"].convertToType(data['param_value_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('params')) {
          obj['params'] = _ApiClient["default"].convertToType(data['params'], [_ScreenRecordingFilterPageViewParam["default"]]);
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ScreenRecordingFilterStringSearch["default"].constructFromObject(data['referrer']);
        }

        if (data.hasOwnProperty('referrer_params')) {
          obj['referrer_params'] = _ApiClient["default"].convertToType(data['referrer_params'], [_ScreenRecordingFilterPageViewReferrerParam["default"]]);
        }

        if (data.hasOwnProperty('referrer_raw')) {
          obj['referrer_raw'] = _ScreenRecordingFilterStringSearch["default"].constructFromObject(data['referrer_raw']);
        }

        if (data.hasOwnProperty('time_on_page')) {
          obj['time_on_page'] = _ScreenRecordingFilterRangeInteger["default"].constructFromObject(data['time_on_page']);
        }

        if (data.hasOwnProperty('time_on_page_max_filter')) {
          obj['time_on_page_max_filter'] = _ApiClient["default"].convertToType(data['time_on_page_max_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('time_on_page_min_filter')) {
          obj['time_on_page_min_filter'] = _ApiClient["default"].convertToType(data['time_on_page_min_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ScreenRecordingFilterStringSearch["default"].constructFromObject(data['url']);
        }

        if (data.hasOwnProperty('url_filter')) {
          obj['url_filter'] = _ApiClient["default"].convertToType(data['url_filter'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterPageView;
}();
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
var _default = ScreenRecordingFilterPageView;
exports["default"] = _default;