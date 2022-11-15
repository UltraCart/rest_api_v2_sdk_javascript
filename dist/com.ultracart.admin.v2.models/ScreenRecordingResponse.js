"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _ScreenRecording = _interopRequireDefault(require("./ScreenRecording"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingResponse
 * @version 4.0.83-RC
 */
var ScreenRecordingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingResponse
   */
  function ScreenRecordingResponse() {
    _classCallCheck(this, ScreenRecordingResponse);

    ScreenRecordingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingResponse} The populated <code>ScreenRecordingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingResponse();

        if (data.hasOwnProperty('checkout_only')) {
          obj['checkout_only'] = _ApiClient["default"].convertToType(data['checkout_only'], 'Boolean');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('screen_recording')) {
          obj['screen_recording'] = _ScreenRecording["default"].constructFromObject(data['screen_recording']);
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

  return ScreenRecordingResponse;
}();
/**
 * @member {Boolean} checkout_only
 */


ScreenRecordingResponse.prototype['checkout_only'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */

ScreenRecordingResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

ScreenRecordingResponse.prototype['metadata'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecording} screen_recording
 */

ScreenRecordingResponse.prototype['screen_recording'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

ScreenRecordingResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

ScreenRecordingResponse.prototype['warning'] = undefined;
var _default = ScreenRecordingResponse;
exports["default"] = _default;