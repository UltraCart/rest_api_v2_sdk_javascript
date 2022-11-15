"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingPageViewEventParameter = _interopRequireDefault(require("./ScreenRecordingPageViewEventParameter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingPageViewEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
 * @version 4.0.82-RC
 */
var ScreenRecordingPageViewEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingPageViewEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent
   */
  function ScreenRecordingPageViewEvent() {
    _classCallCheck(this, ScreenRecordingPageViewEvent);

    ScreenRecordingPageViewEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingPageViewEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEvent} The populated <code>ScreenRecordingPageViewEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingPageViewEvent();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('params')) {
          obj['params'] = _ApiClient["default"].convertToType(data['params'], [_ScreenRecordingPageViewEventParameter["default"]]);
        }

        if (data.hasOwnProperty('prior_page_view')) {
          obj['prior_page_view'] = _ApiClient["default"].convertToType(data['prior_page_view'], 'Boolean');
        }

        if (data.hasOwnProperty('sub_text')) {
          obj['sub_text'] = _ApiClient["default"].convertToType(data['sub_text'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('ts')) {
          obj['ts'] = _ApiClient["default"].convertToType(data['ts'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingPageViewEvent;
}();
/**
 * @member {String} name
 */


ScreenRecordingPageViewEvent.prototype['name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingPageViewEventParameter>} params
 */

ScreenRecordingPageViewEvent.prototype['params'] = undefined;
/**
 * @member {Boolean} prior_page_view
 */

ScreenRecordingPageViewEvent.prototype['prior_page_view'] = undefined;
/**
 * @member {String} sub_text
 */

ScreenRecordingPageViewEvent.prototype['sub_text'] = undefined;
/**
 * Timestamp of the event
 * @member {String} timestamp
 */

ScreenRecordingPageViewEvent.prototype['timestamp'] = undefined;
/**
 * @member {Number} ts
 */

ScreenRecordingPageViewEvent.prototype['ts'] = undefined;
var _default = ScreenRecordingPageViewEvent;
exports["default"] = _default;