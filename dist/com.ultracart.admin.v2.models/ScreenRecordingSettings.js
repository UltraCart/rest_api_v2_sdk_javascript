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
 * The ScreenRecordingSettings model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingSettings
 * @version 4.0.180
 */
var ScreenRecordingSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenRecordingSettings</code>.
   * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSettings
   */
  function ScreenRecordingSettings() {
    _classCallCheck(this, ScreenRecordingSettings);

    ScreenRecordingSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenRecordingSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenRecordingSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSettings} The populated <code>ScreenRecordingSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenRecordingSettings();

        if (data.hasOwnProperty('cost_per_thousand')) {
          obj['cost_per_thousand'] = _ApiClient["default"].convertToType(data['cost_per_thousand'], 'Number');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('retention_interval')) {
          obj['retention_interval'] = _ApiClient["default"].convertToType(data['retention_interval'], 'String');
        }

        if (data.hasOwnProperty('sessions_current_billing_period')) {
          obj['sessions_current_billing_period'] = _ApiClient["default"].convertToType(data['sessions_current_billing_period'], 'Number');
        }

        if (data.hasOwnProperty('sessions_last_billing_period')) {
          obj['sessions_last_billing_period'] = _ApiClient["default"].convertToType(data['sessions_last_billing_period'], 'Number');
        }

        if (data.hasOwnProperty('sessions_trial_billing_period')) {
          obj['sessions_trial_billing_period'] = _ApiClient["default"].convertToType(data['sessions_trial_billing_period'], 'Number');
        }

        if (data.hasOwnProperty('trial_expiration')) {
          obj['trial_expiration'] = _ApiClient["default"].convertToType(data['trial_expiration'], 'String');
        }

        if (data.hasOwnProperty('trial_expired')) {
          obj['trial_expired'] = _ApiClient["default"].convertToType(data['trial_expired'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ScreenRecordingSettings;
}();
/**
 * Cost per one thousand sessions
 * @member {Number} cost_per_thousand
 */


ScreenRecordingSettings.prototype['cost_per_thousand'] = undefined;
/**
 * @member {Boolean} enabled
 */

ScreenRecordingSettings.prototype['enabled'] = undefined;
/**
 * How long screen recording data is retained
 * @member {String} retention_interval
 */

ScreenRecordingSettings.prototype['retention_interval'] = undefined;
/**
 * @member {Number} sessions_current_billing_period
 */

ScreenRecordingSettings.prototype['sessions_current_billing_period'] = undefined;
/**
 * @member {Number} sessions_last_billing_period
 */

ScreenRecordingSettings.prototype['sessions_last_billing_period'] = undefined;
/**
 * @member {Number} sessions_trial_billing_period
 */

ScreenRecordingSettings.prototype['sessions_trial_billing_period'] = undefined;
/**
 * @member {String} trial_expiration
 */

ScreenRecordingSettings.prototype['trial_expiration'] = undefined;
/**
 * @member {Boolean} trial_expired
 */

ScreenRecordingSettings.prototype['trial_expired'] = undefined;
var _default = ScreenRecordingSettings;
exports["default"] = _default;