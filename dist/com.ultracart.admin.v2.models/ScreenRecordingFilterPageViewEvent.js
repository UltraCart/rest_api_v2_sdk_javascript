"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterPageViewEventParam = _interopRequireDefault(require("./ScreenRecordingFilterPageViewEventParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingFilterPageViewEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
 * @version 4.0.166
 */
var ScreenRecordingFilterPageViewEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterPageViewEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent
   */
  function ScreenRecordingFilterPageViewEvent() {
    _classCallCheck(this, ScreenRecordingFilterPageViewEvent);

    ScreenRecordingFilterPageViewEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterPageViewEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterPageViewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEvent} The populated <code>ScreenRecordingFilterPageViewEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterPageViewEvent();

        if (data.hasOwnProperty('event_name')) {
          obj['event_name'] = _ApiClient["default"].convertToType(data['event_name'], 'String');
        }

        if (data.hasOwnProperty('event_params')) {
          obj['event_params'] = _ApiClient["default"].convertToType(data['event_params'], [_ScreenRecordingFilterPageViewEventParam["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterPageViewEvent;
}();
/**
 * @member {String} event_name
 */


ScreenRecordingFilterPageViewEvent.prototype['event_name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam>} event_params
 */

ScreenRecordingFilterPageViewEvent.prototype['event_params'] = undefined;
var _default = ScreenRecordingFilterPageViewEvent;
exports["default"] = _default;