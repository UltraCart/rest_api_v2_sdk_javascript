"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingFilterRangeDate = _interopRequireDefault(require("./ScreenRecordingFilterRangeDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingHeatmapRequest model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
 * @version 4.0.103-RC
 */
var ScreenRecordingHeatmapRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingHeatmapRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
   */
  function ScreenRecordingHeatmapRequest() {
    _classCallCheck(this, ScreenRecordingHeatmapRequest);

    ScreenRecordingHeatmapRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingHeatmapRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingHeatmapRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} The populated <code>ScreenRecordingHeatmapRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingHeatmapRequest();

        if (data.hasOwnProperty('range')) {
          obj['range'] = _ScreenRecordingFilterRangeDate["default"].constructFromObject(data['range']);
        }

        if (data.hasOwnProperty('screen_sizes')) {
          obj['screen_sizes'] = _ApiClient["default"].convertToType(data['screen_sizes'], ['String']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingHeatmapRequest;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} range
 */


ScreenRecordingHeatmapRequest.prototype['range'] = undefined;
/**
 * @member {Array.<String>} screen_sizes
 */

ScreenRecordingHeatmapRequest.prototype['screen_sizes'] = undefined;
/**
 * @member {String} url
 */

ScreenRecordingHeatmapRequest.prototype['url'] = undefined;
var _default = ScreenRecordingHeatmapRequest;
exports["default"] = _default;