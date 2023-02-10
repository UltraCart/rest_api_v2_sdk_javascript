"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterValuesEventParams = _interopRequireDefault(require("./ScreenRecordingFilterValuesEventParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingFilterValuesEvent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
 * @version 4.0.132
 */
var ScreenRecordingFilterValuesEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingFilterValuesEvent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent
   */
  function ScreenRecordingFilterValuesEvent() {
    _classCallCheck(this, ScreenRecordingFilterValuesEvent);

    ScreenRecordingFilterValuesEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingFilterValuesEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingFilterValuesEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEvent} The populated <code>ScreenRecordingFilterValuesEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingFilterValuesEvent();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('params')) {
          obj['params'] = _ApiClient["default"].convertToType(data['params'], [_ScreenRecordingFilterValuesEventParams["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingFilterValuesEvent;
}();
/**
 * @member {String} name
 */


ScreenRecordingFilterValuesEvent.prototype['name'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams>} params
 */

ScreenRecordingFilterValuesEvent.prototype['params'] = undefined;
var _default = ScreenRecordingFilterValuesEvent;
exports["default"] = _default;