"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenRecordingMultifield = _interopRequireDefault(require("./ScreenRecordingMultifield"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenRecordingUserProperty model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingUserProperty
 * @version 4.0.184
 */
var ScreenRecordingUserProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingUserProperty</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingUserProperty
   */
  function ScreenRecordingUserProperty() {
    _classCallCheck(this, ScreenRecordingUserProperty);

    ScreenRecordingUserProperty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingUserProperty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingUserProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingUserProperty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingUserProperty} The populated <code>ScreenRecordingUserProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingUserProperty();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ScreenRecordingMultifield["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingUserProperty;
}();
/**
 * @member {String} name
 */


ScreenRecordingUserProperty.prototype['name'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} value
 */

ScreenRecordingUserProperty.prototype['value'] = undefined;
var _default = ScreenRecordingUserProperty;
exports["default"] = _default;