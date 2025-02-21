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
 * The ConversationPbxVoicemailMessageSummary model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummary
 * @version 4.0.245
 */
var ConversationPbxVoicemailMessageSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationPbxVoicemailMessageSummary</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummary
   */
  function ConversationPbxVoicemailMessageSummary() {
    _classCallCheck(this, ConversationPbxVoicemailMessageSummary);
    ConversationPbxVoicemailMessageSummary.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationPbxVoicemailMessageSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationPbxVoicemailMessageSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummary} The populated <code>ConversationPbxVoicemailMessageSummary</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationPbxVoicemailMessageSummary();
        if (data.hasOwnProperty('call_sid')) {
          obj['call_sid'] = _ApiClient["default"].convertToType(data['call_sid'], 'String');
        }
        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }
        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }
        if (data.hasOwnProperty('from_caller_id')) {
          obj['from_caller_id'] = _ApiClient["default"].convertToType(data['from_caller_id'], 'String');
        }
        if (data.hasOwnProperty('listened')) {
          obj['listened'] = _ApiClient["default"].convertToType(data['listened'], 'Boolean');
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('recording_sid')) {
          obj['recording_sid'] = _ApiClient["default"].convertToType(data['recording_sid'], 'String');
        }
        if (data.hasOwnProperty('recording_size_bytes')) {
          obj['recording_size_bytes'] = _ApiClient["default"].convertToType(data['recording_size_bytes'], 'Number');
        }
        if (data.hasOwnProperty('recording_status')) {
          obj['recording_status'] = _ApiClient["default"].convertToType(data['recording_status'], 'String');
        }
        if (data.hasOwnProperty('voicemail_dts')) {
          obj['voicemail_dts'] = _ApiClient["default"].convertToType(data['voicemail_dts'], 'String');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * Call SID
 * @member {String} call_sid
 */
ConversationPbxVoicemailMessageSummary.prototype['call_sid'] = undefined;

/**
 * Duration in seconds
 * @member {Number} duration
 */
ConversationPbxVoicemailMessageSummary.prototype['duration'] = undefined;

/**
 * From phone number in E.164
 * @member {String} from
 */
ConversationPbxVoicemailMessageSummary.prototype['from'] = undefined;

/**
 * From caller id (if available)
 * @member {String} from_caller_id
 */
ConversationPbxVoicemailMessageSummary.prototype['from_caller_id'] = undefined;

/**
 * True if the voicemail has been listened to in the user interface
 * @member {Boolean} listened
 */
ConversationPbxVoicemailMessageSummary.prototype['listened'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
ConversationPbxVoicemailMessageSummary.prototype['merchant_id'] = undefined;

/**
 * Recording SID
 * @member {String} recording_sid
 */
ConversationPbxVoicemailMessageSummary.prototype['recording_sid'] = undefined;

/**
 * Recording size in bytes
 * @member {Number} recording_size_bytes
 */
ConversationPbxVoicemailMessageSummary.prototype['recording_size_bytes'] = undefined;

/**
 * Recording Status
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessageSummary.RecordingStatusEnum} recording_status
 */
ConversationPbxVoicemailMessageSummary.prototype['recording_status'] = undefined;

/**
 * Voicemail date/time
 * @member {String} voicemail_dts
 */
ConversationPbxVoicemailMessageSummary.prototype['voicemail_dts'] = undefined;

/**
 * Allowed values for the <code>recording_status</code> property.
 * @enum {String}
 * @readonly
 */
ConversationPbxVoicemailMessageSummary['RecordingStatusEnum'] = {
  /**
   * value: "completed"
   * @const
   */
  "completed": "completed"
};
var _default = exports["default"] = ConversationPbxVoicemailMessageSummary;