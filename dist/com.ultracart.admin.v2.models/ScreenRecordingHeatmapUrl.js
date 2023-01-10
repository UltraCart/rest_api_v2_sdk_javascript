"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingHeatmapUrl model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
 * @version 4.0.108-RC
 */
var ScreenRecordingHeatmapUrl = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingHeatmapUrl</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
   */
  function ScreenRecordingHeatmapUrl() {
    _classCallCheck(this, ScreenRecordingHeatmapUrl);

    ScreenRecordingHeatmapUrl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingHeatmapUrl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingHeatmapUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} The populated <code>ScreenRecordingHeatmapUrl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingHeatmapUrl();

        if (data.hasOwnProperty('histogram_data')) {
          obj['histogram_data'] = _ApiClient["default"].convertToType(data['histogram_data'], ['Number']);
        }

        if (data.hasOwnProperty('histogram_interval')) {
          obj['histogram_interval'] = _ApiClient["default"].convertToType(data['histogram_interval'], 'String');
        }

        if (data.hasOwnProperty('histogram_start_dts')) {
          obj['histogram_start_dts'] = _ApiClient["default"].convertToType(data['histogram_start_dts'], 'String');
        }

        if (data.hasOwnProperty('page_rank')) {
          obj['page_rank'] = _ApiClient["default"].convertToType(data['page_rank'], 'Number');
        }

        if (data.hasOwnProperty('session_count')) {
          obj['session_count'] = _ApiClient["default"].convertToType(data['session_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingHeatmapUrl;
}();
/**
 * @member {Array.<Number>} histogram_data
 */


ScreenRecordingHeatmapUrl.prototype['histogram_data'] = undefined;
/**
 * @member {String} histogram_interval
 */

ScreenRecordingHeatmapUrl.prototype['histogram_interval'] = undefined;
/**
 * @member {String} histogram_start_dts
 */

ScreenRecordingHeatmapUrl.prototype['histogram_start_dts'] = undefined;
/**
 * @member {Number} page_rank
 */

ScreenRecordingHeatmapUrl.prototype['page_rank'] = undefined;
/**
 * @member {Number} session_count
 */

ScreenRecordingHeatmapUrl.prototype['session_count'] = undefined;
/**
 * @member {String} url
 */

ScreenRecordingHeatmapUrl.prototype['url'] = undefined;
var _default = ScreenRecordingHeatmapUrl;
exports["default"] = _default;