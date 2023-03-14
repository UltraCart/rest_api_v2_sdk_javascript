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
 * The HitSessionStart model module.
 * @module com.ultracart.admin.v2.models/HitSessionStart
 * @version 4.0.138
 */
var HitSessionStart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HitSessionStart</code>.
   * @alias module:com.ultracart.admin.v2.models/HitSessionStart
   */
  function HitSessionStart() {
    _classCallCheck(this, HitSessionStart);

    HitSessionStart.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HitSessionStart, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HitSessionStart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/HitSessionStart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/HitSessionStart} The populated <code>HitSessionStart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HitSessionStart();

        if (data.hasOwnProperty('bot')) {
          obj['bot'] = _ApiClient["default"].convertToType(data['bot'], 'Boolean');
        }

        if (data.hasOwnProperty('bounce')) {
          obj['bounce'] = _ApiClient["default"].convertToType(data['bounce'], 'Boolean');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'String');
        }

        if (data.hasOwnProperty('device_switch_detected')) {
          obj['device_switch_detected'] = _ApiClient["default"].convertToType(data['device_switch_detected'], 'Boolean');
        }

        if (data.hasOwnProperty('fake_bot')) {
          obj['fake_bot'] = _ApiClient["default"].convertToType(data['fake_bot'], 'Boolean');
        }

        if (data.hasOwnProperty('geolocation_country')) {
          obj['geolocation_country'] = _ApiClient["default"].convertToType(data['geolocation_country'], 'String');
        }

        if (data.hasOwnProperty('geolocation_latitude')) {
          obj['geolocation_latitude'] = _ApiClient["default"].convertToType(data['geolocation_latitude'], 'Number');
        }

        if (data.hasOwnProperty('geolocation_longitude')) {
          obj['geolocation_longitude'] = _ApiClient["default"].convertToType(data['geolocation_longitude'], 'Number');
        }

        if (data.hasOwnProperty('geolocation_province')) {
          obj['geolocation_province'] = _ApiClient["default"].convertToType(data['geolocation_province'], 'String');
        }

        if (data.hasOwnProperty('no_cookie_support')) {
          obj['no_cookie_support'] = _ApiClient["default"].convertToType(data['no_cookie_support'], 'Boolean');
        }

        if (data.hasOwnProperty('prefetch')) {
          obj['prefetch'] = _ApiClient["default"].convertToType(data['prefetch'], 'Boolean');
        }

        if (data.hasOwnProperty('referrer')) {
          obj['referrer'] = _ApiClient["default"].convertToType(data['referrer'], 'String');
        }

        if (data.hasOwnProperty('screen_height')) {
          obj['screen_height'] = _ApiClient["default"].convertToType(data['screen_height'], 'Number');
        }

        if (data.hasOwnProperty('screen_width')) {
          obj['screen_width'] = _ApiClient["default"].convertToType(data['screen_width'], 'Number');
        }

        if (data.hasOwnProperty('time_on_Site')) {
          obj['time_on_Site'] = _ApiClient["default"].convertToType(data['time_on_Site'], 'Number');
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }

        if (data.hasOwnProperty('user_ip')) {
          obj['user_ip'] = _ApiClient["default"].convertToType(data['user_ip'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HitSessionStart;
}();
/**
 * @member {Boolean} bot
 */


HitSessionStart.prototype['bot'] = undefined;
/**
 * @member {Boolean} bounce
 */

HitSessionStart.prototype['bounce'] = undefined;
/**
 * @member {String} channel
 */

HitSessionStart.prototype['channel'] = undefined;
/**
 * @member {Boolean} device_switch_detected
 */

HitSessionStart.prototype['device_switch_detected'] = undefined;
/**
 * @member {Boolean} fake_bot
 */

HitSessionStart.prototype['fake_bot'] = undefined;
/**
 * @member {String} geolocation_country
 */

HitSessionStart.prototype['geolocation_country'] = undefined;
/**
 * @member {Number} geolocation_latitude
 */

HitSessionStart.prototype['geolocation_latitude'] = undefined;
/**
 * @member {Number} geolocation_longitude
 */

HitSessionStart.prototype['geolocation_longitude'] = undefined;
/**
 * @member {String} geolocation_province
 */

HitSessionStart.prototype['geolocation_province'] = undefined;
/**
 * @member {Boolean} no_cookie_support
 */

HitSessionStart.prototype['no_cookie_support'] = undefined;
/**
 * @member {Boolean} prefetch
 */

HitSessionStart.prototype['prefetch'] = undefined;
/**
 * @member {String} referrer
 */

HitSessionStart.prototype['referrer'] = undefined;
/**
 * @member {Number} screen_height
 */

HitSessionStart.prototype['screen_height'] = undefined;
/**
 * @member {Number} screen_width
 */

HitSessionStart.prototype['screen_width'] = undefined;
/**
 * @member {Number} time_on_Site
 */

HitSessionStart.prototype['time_on_Site'] = undefined;
/**
 * @member {String} user_agent
 */

HitSessionStart.prototype['user_agent'] = undefined;
/**
 * @member {String} user_ip
 */

HitSessionStart.prototype['user_ip'] = undefined;
var _default = HitSessionStart;
exports["default"] = _default;