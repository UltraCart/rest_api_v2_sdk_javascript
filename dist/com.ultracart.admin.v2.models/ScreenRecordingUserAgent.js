"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingUserAgentDevice = _interopRequireDefault(require("./ScreenRecordingUserAgentDevice"));

var _ScreenRecordingUserAgentOS = _interopRequireDefault(require("./ScreenRecordingUserAgentOS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingUserAgent model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingUserAgent
 * @version 4.0.79-RC
 */
var ScreenRecordingUserAgent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingUserAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent
   */
  function ScreenRecordingUserAgent() {
    _classCallCheck(this, ScreenRecordingUserAgent);

    ScreenRecordingUserAgent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingUserAgent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgent} The populated <code>ScreenRecordingUserAgent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingUserAgent();

        if (data.hasOwnProperty('device')) {
          obj['device'] = _ScreenRecordingUserAgentDevice["default"].constructFromObject(data['device']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }

        if (data.hasOwnProperty('os')) {
          obj['os'] = _ScreenRecordingUserAgentOS["default"].constructFromObject(data['os']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingUserAgent;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} device
 */


ScreenRecordingUserAgent.prototype['device'] = undefined;
/**
 * @member {String} name
 */

ScreenRecordingUserAgent.prototype['name'] = undefined;
/**
 * @member {String} original
 */

ScreenRecordingUserAgent.prototype['original'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentOS} os
 */

ScreenRecordingUserAgent.prototype['os'] = undefined;
/**
 * @member {String} version
 */

ScreenRecordingUserAgent.prototype['version'] = undefined;
var _default = ScreenRecordingUserAgent;
exports["default"] = _default;