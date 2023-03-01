"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilter = _interopRequireDefault(require("./ScreenRecordingFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingSegment model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingSegment
 * @version 4.0.137
 */
var ScreenRecordingSegment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingSegment</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSegment
   */
  function ScreenRecordingSegment() {
    _classCallCheck(this, ScreenRecordingSegment);

    ScreenRecordingSegment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingSegment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} The populated <code>ScreenRecordingSegment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingSegment();

        if (data.hasOwnProperty('create_dts')) {
          obj['create_dts'] = _ApiClient["default"].convertToType(data['create_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ScreenRecordingFilter["default"].constructFromObject(data['filter']);
        }

        if (data.hasOwnProperty('histogram_data')) {
          obj['histogram_data'] = _ApiClient["default"].convertToType(data['histogram_data'], ['Number']);
        }

        if (data.hasOwnProperty('histogram_interval')) {
          obj['histogram_interval'] = _ApiClient["default"].convertToType(data['histogram_interval'], 'String');
        }

        if (data.hasOwnProperty('histogram_start_dts')) {
          obj['histogram_start_dts'] = _ApiClient["default"].convertToType(data['histogram_start_dts'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('screen_recording_segment_oid')) {
          obj['screen_recording_segment_oid'] = _ApiClient["default"].convertToType(data['screen_recording_segment_oid'], 'Number');
        }

        if (data.hasOwnProperty('session_count')) {
          obj['session_count'] = _ApiClient["default"].convertToType(data['session_count'], 'Number');
        }

        if (data.hasOwnProperty('session_count_last_update_dts')) {
          obj['session_count_last_update_dts'] = _ApiClient["default"].convertToType(data['session_count_last_update_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingSegment;
}();
/**
 * @member {String} create_dts
 */


ScreenRecordingSegment.prototype['create_dts'] = undefined;
/**
 * @member {String} description
 */

ScreenRecordingSegment.prototype['description'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
 */

ScreenRecordingSegment.prototype['filter'] = undefined;
/**
 * @member {Array.<Number>} histogram_data
 */

ScreenRecordingSegment.prototype['histogram_data'] = undefined;
/**
 * @member {String} histogram_interval
 */

ScreenRecordingSegment.prototype['histogram_interval'] = undefined;
/**
 * @member {String} histogram_start_dts
 */

ScreenRecordingSegment.prototype['histogram_start_dts'] = undefined;
/**
 * @member {String} name
 */

ScreenRecordingSegment.prototype['name'] = undefined;
/**
 * @member {Number} screen_recording_segment_oid
 */

ScreenRecordingSegment.prototype['screen_recording_segment_oid'] = undefined;
/**
 * @member {Number} session_count
 */

ScreenRecordingSegment.prototype['session_count'] = undefined;
/**
 * @member {String} session_count_last_update_dts
 */

ScreenRecordingSegment.prototype['session_count_last_update_dts'] = undefined;
var _default = ScreenRecordingSegment;
exports["default"] = _default;