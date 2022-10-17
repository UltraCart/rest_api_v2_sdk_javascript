"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _ScreenRecording = _interopRequireDefault(require("./ScreenRecording"));

var _ScreenRecordingFilter = _interopRequireDefault(require("./ScreenRecordingFilter"));

var _ScreenRecordingFilterValues = _interopRequireDefault(require("./ScreenRecordingFilterValues"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingQueryResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
 * @version 4.0.73-RC
 */
var ScreenRecordingQueryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingQueryResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
   */
  function ScreenRecordingQueryResponse() {
    _classCallCheck(this, ScreenRecordingQueryResponse);

    ScreenRecordingQueryResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingQueryResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} The populated <code>ScreenRecordingQueryResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingQueryResponse();

        if (data.hasOwnProperty('checkout_only')) {
          obj['checkout_only'] = _ApiClient["default"].convertToType(data['checkout_only'], 'Boolean');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ScreenRecordingFilter["default"].constructFromObject(data['filter']);
        }

        if (data.hasOwnProperty('filter_values')) {
          obj['filter_values'] = _ScreenRecordingFilterValues["default"].constructFromObject(data['filter_values']);
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

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('screen_recordings')) {
          obj['screen_recordings'] = _ApiClient["default"].convertToType(data['screen_recordings'], [_ScreenRecording["default"]]);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingQueryResponse;
}();
/**
 * @member {Boolean} checkout_only
 */


ScreenRecordingQueryResponse.prototype['checkout_only'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

ScreenRecordingQueryResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
 */

ScreenRecordingQueryResponse.prototype['filter'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} filter_values
 */

ScreenRecordingQueryResponse.prototype['filter_values'] = undefined;
/**
 * @member {Array.<Number>} histogram_data
 */

ScreenRecordingQueryResponse.prototype['histogram_data'] = undefined;
/**
 * @member {String} histogram_interval
 */

ScreenRecordingQueryResponse.prototype['histogram_interval'] = undefined;
/**
 * @member {String} histogram_start_dts
 */

ScreenRecordingQueryResponse.prototype['histogram_start_dts'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ScreenRecordingQueryResponse.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecording>} screen_recordings
 */

ScreenRecordingQueryResponse.prototype['screen_recordings'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ScreenRecordingQueryResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ScreenRecordingQueryResponse.prototype['warning'] = undefined;
var _default = ScreenRecordingQueryResponse;
exports["default"] = _default;