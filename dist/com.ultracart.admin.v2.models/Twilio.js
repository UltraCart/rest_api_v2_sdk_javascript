"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Twilio model module.
 * @module com.ultracart.admin.v2.models/Twilio
 * @version 4.0.245
 */
var Twilio = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Twilio</code>.
   * @alias module:com.ultracart.admin.v2.models/Twilio
   */
  function Twilio() {
    _classCallCheck(this, Twilio);
    Twilio.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Twilio, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Twilio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Twilio} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Twilio} The populated <code>Twilio</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Twilio();
        if (data.hasOwnProperty('account_sid')) {
          obj['account_sid'] = _ApiClient["default"].convertToType(data['account_sid'], 'String');
        }
        if (data.hasOwnProperty('api_key_id')) {
          obj['api_key_id'] = _ApiClient["default"].convertToType(data['api_key_id'], 'String');
        }
        if (data.hasOwnProperty('api_key_name')) {
          obj['api_key_name'] = _ApiClient["default"].convertToType(data['api_key_name'], 'String');
        }
        if (data.hasOwnProperty('auth_token')) {
          obj['auth_token'] = _ApiClient["default"].convertToType(data['auth_token'], 'String');
        }
        if (data.hasOwnProperty('esp_twilio_uuid')) {
          obj['esp_twilio_uuid'] = _ApiClient["default"].convertToType(data['esp_twilio_uuid'], 'String');
        }
        if (data.hasOwnProperty('inbound_twiml_app_sid')) {
          obj['inbound_twiml_app_sid'] = _ApiClient["default"].convertToType(data['inbound_twiml_app_sid'], 'String');
        }
        if (data.hasOwnProperty('outbound_twiml_app_sid')) {
          obj['outbound_twiml_app_sid'] = _ApiClient["default"].convertToType(data['outbound_twiml_app_sid'], 'String');
        }
        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], ['String']);
        }
        if (data.hasOwnProperty('twilio_workspace_sid')) {
          obj['twilio_workspace_sid'] = _ApiClient["default"].convertToType(data['twilio_workspace_sid'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} account_sid
 */
Twilio.prototype['account_sid'] = undefined;

/**
 * @member {String} api_key_id
 */
Twilio.prototype['api_key_id'] = undefined;

/**
 * @member {String} api_key_name
 */
Twilio.prototype['api_key_name'] = undefined;

/**
 * @member {String} auth_token
 */
Twilio.prototype['auth_token'] = undefined;

/**
 * @member {String} esp_twilio_uuid
 */
Twilio.prototype['esp_twilio_uuid'] = undefined;

/**
 * @member {String} inbound_twiml_app_sid
 */
Twilio.prototype['inbound_twiml_app_sid'] = undefined;

/**
 * @member {String} outbound_twiml_app_sid
 */
Twilio.prototype['outbound_twiml_app_sid'] = undefined;

/**
 * @member {Array.<String>} phone_numbers
 */
Twilio.prototype['phone_numbers'] = undefined;

/**
 * @member {String} twilio_workspace_sid
 */
Twilio.prototype['twilio_workspace_sid'] = undefined;
var _default = exports["default"] = Twilio;