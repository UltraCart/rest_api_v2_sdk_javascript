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
 * The ConversationMessageTransportStatus model module.
 * @module com.ultracart.admin.v2.models/ConversationMessageTransportStatus
 * @version 4.0.245
 */
var ConversationMessageTransportStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationMessageTransportStatus</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus
   */
  function ConversationMessageTransportStatus() {
    _classCallCheck(this, ConversationMessageTransportStatus);
    ConversationMessageTransportStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationMessageTransportStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationMessageTransportStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} The populated <code>ConversationMessageTransportStatus</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationMessageTransportStatus();
        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} conversation_participant_arn
 */
ConversationMessageTransportStatus.prototype['conversation_participant_arn'] = undefined;

/**
 * The status of the message transport
 * @member {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus.StatusEnum} status
 */
ConversationMessageTransportStatus.prototype['status'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ConversationMessageTransportStatus['StatusEnum'] = {
  /**
   * value: "accepted"
   * @const
   */
  "accepted": "accepted",
  /**
   * value: "scheduled"
   * @const
   */
  "scheduled": "scheduled",
  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",
  /**
   * value: "sending"
   * @const
   */
  "sending": "sending",
  /**
   * value: "sent"
   * @const
   */
  "sent": "sent",
  /**
   * value: "read"
   * @const
   */
  "read": "read",
  /**
   * value: "TWILIO_CREDENTIALS_MISSING"
   * @const
   */
  "TWILIO_CREDENTIALS_MISSING": "TWILIO_CREDENTIALS_MISSING",
  /**
   * value: "SENT_TO_TWILIO"
   * @const
   */
  "SENT_TO_TWILIO": "SENT_TO_TWILIO",
  /**
   * value: "TWILIO_ERROR"
   * @const
   */
  "TWILIO_ERROR": "TWILIO_ERROR",
  /**
   * value: "SENT_TO_PINPOINT"
   * @const
   */
  "SENT_TO_PINPOINT": "SENT_TO_PINPOINT",
  /**
   * value: "PINPOINT_ERROR"
   * @const
   */
  "PINPOINT_ERROR": "PINPOINT_ERROR"
};
var _default = exports["default"] = ConversationMessageTransportStatus;