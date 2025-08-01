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
 * The ConversationParticipant model module.
 * @module com.ultracart.admin.v2.models/ConversationParticipant
 * @version 4.1.15
 */
var ConversationParticipant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationParticipant</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationParticipant
   */
  function ConversationParticipant() {
    _classCallCheck(this, ConversationParticipant);
    ConversationParticipant.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationParticipant, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationParticipant} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationParticipant} The populated <code>ConversationParticipant</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationParticipant();
        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }
        if (data.hasOwnProperty('conversation_participant_name')) {
          obj['conversation_participant_name'] = _ApiClient["default"].convertToType(data['conversation_participant_name'], 'String');
        }
        if (data.hasOwnProperty('conversation_participant_uuid')) {
          obj['conversation_participant_uuid'] = _ApiClient["default"].convertToType(data['conversation_participant_uuid'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('joined_dts')) {
          obj['joined_dts'] = _ApiClient["default"].convertToType(data['joined_dts'], 'String');
        }
        if (data.hasOwnProperty('language_iso_code')) {
          obj['language_iso_code'] = _ApiClient["default"].convertToType(data['language_iso_code'], 'String');
        }
        if (data.hasOwnProperty('last_message_dts')) {
          obj['last_message_dts'] = _ApiClient["default"].convertToType(data['last_message_dts'], 'String');
        }
        if (data.hasOwnProperty('left_dts')) {
          obj['left_dts'] = _ApiClient["default"].convertToType(data['left_dts'], 'String');
        }
        if (data.hasOwnProperty('profile_image_url')) {
          obj['profile_image_url'] = _ApiClient["default"].convertToType(data['profile_image_url'], 'String');
        }
        if (data.hasOwnProperty('sms_phone_number')) {
          obj['sms_phone_number'] = _ApiClient["default"].convertToType(data['sms_phone_number'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('unread_messages')) {
          obj['unread_messages'] = _ApiClient["default"].convertToType(data['unread_messages'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} conversation_participant_arn
 */
ConversationParticipant.prototype['conversation_participant_arn'] = undefined;

/**
 * @member {String} conversation_participant_name
 */
ConversationParticipant.prototype['conversation_participant_name'] = undefined;

/**
 * @member {String} conversation_participant_uuid
 */
ConversationParticipant.prototype['conversation_participant_uuid'] = undefined;

/**
 * @member {String} email
 */
ConversationParticipant.prototype['email'] = undefined;

/**
 * Joined conversation date/time
 * @member {String} joined_dts
 */
ConversationParticipant.prototype['joined_dts'] = undefined;

/**
 * @member {String} language_iso_code
 */
ConversationParticipant.prototype['language_iso_code'] = undefined;

/**
 * Last message date/time
 * @member {String} last_message_dts
 */
ConversationParticipant.prototype['last_message_dts'] = undefined;

/**
 * Left conversation date/time
 * @member {String} left_dts
 */
ConversationParticipant.prototype['left_dts'] = undefined;

/**
 * @member {String} profile_image_url
 */
ConversationParticipant.prototype['profile_image_url'] = undefined;

/**
 * @member {String} sms_phone_number
 */
ConversationParticipant.prototype['sms_phone_number'] = undefined;

/**
 * @member {String} status
 */
ConversationParticipant.prototype['status'] = undefined;

/**
 * @member {String} timezone
 */
ConversationParticipant.prototype['timezone'] = undefined;

/**
 * @member {Number} unread_messages
 */
ConversationParticipant.prototype['unread_messages'] = undefined;
var _default = exports["default"] = ConversationParticipant;