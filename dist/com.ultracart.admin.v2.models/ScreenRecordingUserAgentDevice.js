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
 * The ScreenRecordingUserAgentDevice model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice
 * @version 4.0.60-RC
 */
var ScreenRecordingUserAgentDevice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingUserAgentDevice</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice
   */
  function ScreenRecordingUserAgentDevice() {
    _classCallCheck(this, ScreenRecordingUserAgentDevice);

    ScreenRecordingUserAgentDevice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingUserAgentDevice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingUserAgentDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserAgentDevice} The populated <code>ScreenRecordingUserAgentDevice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingUserAgentDevice();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingUserAgentDevice;
}();
/**
 * @member {String} name
 */


ScreenRecordingUserAgentDevice.prototype['name'] = undefined;
var _default = ScreenRecordingUserAgentDevice;
exports["default"] = _default;