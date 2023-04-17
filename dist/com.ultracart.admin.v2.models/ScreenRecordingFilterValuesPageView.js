"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterValuesEvent = _interopRequireDefault(require("./ScreenRecordingFilterValuesEvent"));

var _ScreenRecordingFilterValuesPageParam = _interopRequireDefault(require("./ScreenRecordingFilterValuesPageParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingFilterValuesPageView model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
 * @version 4.0.146
 */
var ScreenRecordingFilterValuesPageView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterValuesPageView</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView
   */
  function ScreenRecordingFilterValuesPageView() {
    _classCallCheck(this, ScreenRecordingFilterValuesPageView);

    ScreenRecordingFilterValuesPageView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterValuesPageView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterValuesPageView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageView} The populated <code>ScreenRecordingFilterValuesPageView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterValuesPageView();

        if (data.hasOwnProperty('domains')) {
          obj['domains'] = _ApiClient["default"].convertToType(data['domains'], ['String']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_ScreenRecordingFilterValuesEvent["default"]]);
        }

        if (data.hasOwnProperty('page_params')) {
          obj['page_params'] = _ApiClient["default"].convertToType(data['page_params'], [_ScreenRecordingFilterValuesPageParam["default"]]);
        }

        if (data.hasOwnProperty('time_on_page_max')) {
          obj['time_on_page_max'] = _ApiClient["default"].convertToType(data['time_on_page_max'], 'Number');
        }

        if (data.hasOwnProperty('time_on_page_min')) {
          obj['time_on_page_min'] = _ApiClient["default"].convertToType(data['time_on_page_min'], 'Number');
        }

        if (data.hasOwnProperty('urls')) {
          obj['urls'] = _ApiClient["default"].convertToType(data['urls'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterValuesPageView;
}();
/**
 * @member {Array.<String>} domains
 */


ScreenRecordingFilterValuesPageView.prototype['domains'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent>} events
 */

ScreenRecordingFilterValuesPageView.prototype['events'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesPageParam>} page_params
 */

ScreenRecordingFilterValuesPageView.prototype['page_params'] = undefined;
/**
 * @member {Number} time_on_page_max
 */

ScreenRecordingFilterValuesPageView.prototype['time_on_page_max'] = undefined;
/**
 * @member {Number} time_on_page_min
 */

ScreenRecordingFilterValuesPageView.prototype['time_on_page_min'] = undefined;
/**
 * @member {Array.<String>} urls
 */

ScreenRecordingFilterValuesPageView.prototype['urls'] = undefined;
var _default = ScreenRecordingFilterValuesPageView;
exports["default"] = _default;