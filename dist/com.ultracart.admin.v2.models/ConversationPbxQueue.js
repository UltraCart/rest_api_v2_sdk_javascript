"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConversationPbxQueueMembers = _interopRequireDefault(require("./ConversationPbxQueueMembers"));
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
 * The ConversationPbxQueue model module.
 * @module com.ultracart.admin.v2.models/ConversationPbxQueue
 * @version 4.0.244
 */
var ConversationPbxQueue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationPbxQueue</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxQueue
   */
  function ConversationPbxQueue() {
    _classCallCheck(this, ConversationPbxQueue);
    ConversationPbxQueue.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ConversationPbxQueue, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ConversationPbxQueue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationPbxQueue} The populated <code>ConversationPbxQueue</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationPbxQueue();
        if (data.hasOwnProperty('announce_queue_position')) {
          obj['announce_queue_position'] = _ApiClient["default"].convertToType(data['announce_queue_position'], 'Boolean');
        }
        if (data.hasOwnProperty('conversation_pbx_queue_uuid')) {
          obj['conversation_pbx_queue_uuid'] = _ApiClient["default"].convertToType(data['conversation_pbx_queue_uuid'], 'String');
        }
        if (data.hasOwnProperty('conversation_voicemail_mailbox_uuid')) {
          obj['conversation_voicemail_mailbox_uuid'] = _ApiClient["default"].convertToType(data['conversation_voicemail_mailbox_uuid'], 'String');
        }
        if (data.hasOwnProperty('hold_conversation_pbx_audio_uuid')) {
          obj['hold_conversation_pbx_audio_uuid'] = _ApiClient["default"].convertToType(data['hold_conversation_pbx_audio_uuid'], 'String');
        }
        if (data.hasOwnProperty('max_hold_seconds')) {
          obj['max_hold_seconds'] = _ApiClient["default"].convertToType(data['max_hold_seconds'], 'Number');
        }
        if (data.hasOwnProperty('members')) {
          obj['members'] = _ConversationPbxQueueMembers["default"].constructFromObject(data['members']);
        }
        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('no_agent_available_play_audio_uuid')) {
          obj['no_agent_available_play_audio_uuid'] = _ApiClient["default"].convertToType(data['no_agent_available_play_audio_uuid'], 'String');
        }
        if (data.hasOwnProperty('no_agent_available_say')) {
          obj['no_agent_available_say'] = _ApiClient["default"].convertToType(data['no_agent_available_say'], 'String');
        }
        if (data.hasOwnProperty('no_agent_available_say_voice')) {
          obj['no_agent_available_say_voice'] = _ApiClient["default"].convertToType(data['no_agent_available_say_voice'], 'String');
        }
        if (data.hasOwnProperty('play_audio_uuid')) {
          obj['play_audio_uuid'] = _ApiClient["default"].convertToType(data['play_audio_uuid'], 'String');
        }
        if (data.hasOwnProperty('record_call')) {
          obj['record_call'] = _ApiClient["default"].convertToType(data['record_call'], 'Boolean');
        }
        if (data.hasOwnProperty('say')) {
          obj['say'] = _ApiClient["default"].convertToType(data['say'], 'String');
        }
        if (data.hasOwnProperty('say_voice')) {
          obj['say_voice'] = _ApiClient["default"].convertToType(data['say_voice'], 'String');
        }
        if (data.hasOwnProperty('twilio_taskrouter_workflow_sid')) {
          obj['twilio_taskrouter_workflow_sid'] = _ApiClient["default"].convertToType(data['twilio_taskrouter_workflow_sid'], 'String');
        }
        if (data.hasOwnProperty('twilio_workspace_queue_sid')) {
          obj['twilio_workspace_queue_sid'] = _ApiClient["default"].convertToType(data['twilio_workspace_queue_sid'], 'String');
        }
        if (data.hasOwnProperty('voicemail')) {
          obj['voicemail'] = _ApiClient["default"].convertToType(data['voicemail'], 'Boolean');
        }
        if (data.hasOwnProperty('wait_critical_seconds')) {
          obj['wait_critical_seconds'] = _ApiClient["default"].convertToType(data['wait_critical_seconds'], 'Number');
        }
        if (data.hasOwnProperty('wait_warning_seconds')) {
          obj['wait_warning_seconds'] = _ApiClient["default"].convertToType(data['wait_warning_seconds'], 'Number');
        }
        if (data.hasOwnProperty('wrap_up_seconds')) {
          obj['wrap_up_seconds'] = _ApiClient["default"].convertToType(data['wrap_up_seconds'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * If true, the customer is told their queue position upon entering the queue
 * @member {Boolean} announce_queue_position
 */
ConversationPbxQueue.prototype['announce_queue_position'] = undefined;

/**
 * Conversation Pbx Queue unique identifier
 * @member {String} conversation_pbx_queue_uuid
 */
ConversationPbxQueue.prototype['conversation_pbx_queue_uuid'] = undefined;

/**
 * The voicemail mailbox associated with this queue
 * @member {String} conversation_voicemail_mailbox_uuid
 */
ConversationPbxQueue.prototype['conversation_voicemail_mailbox_uuid'] = undefined;

/**
 * The audio to play while holding in a queue
 * @member {String} hold_conversation_pbx_audio_uuid
 */
ConversationPbxQueue.prototype['hold_conversation_pbx_audio_uuid'] = undefined;

/**
 * The maximum number of seconds for a customer to hold in a queue
 * @member {Number} max_hold_seconds
 */
ConversationPbxQueue.prototype['max_hold_seconds'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationPbxQueueMembers} members
 */
ConversationPbxQueue.prototype['members'] = undefined;

/**
 * Merchant Id
 * @member {String} merchant_id
 */
ConversationPbxQueue.prototype['merchant_id'] = undefined;

/**
 * Name of queue
 * @member {String} name
 */
ConversationPbxQueue.prototype['name'] = undefined;

/**
 * When no agent is available after the max_hold_seconds, say this
 * @member {String} no_agent_available_play_audio_uuid
 */
ConversationPbxQueue.prototype['no_agent_available_play_audio_uuid'] = undefined;

/**
 * When no agent is available after the max_hold_seconds, say this
 * @member {String} no_agent_available_say
 */
ConversationPbxQueue.prototype['no_agent_available_say'] = undefined;

/**
 * The type of voice used to say text when no agent is available
 * @member {String} no_agent_available_say_voice
 */
ConversationPbxQueue.prototype['no_agent_available_say_voice'] = undefined;

/**
 * Audio played when customer enters a queue
 * @member {String} play_audio_uuid
 */
ConversationPbxQueue.prototype['play_audio_uuid'] = undefined;

/**
 * If true, any calls in this queue are recorded
 * @member {Boolean} record_call
 */
ConversationPbxQueue.prototype['record_call'] = undefined;

/**
 * Say text when a customer enters queue
 * @member {String} say
 */
ConversationPbxQueue.prototype['say'] = undefined;

/**
 * The type of voice to use when say text is spoken
 * @member {String} say_voice
 */
ConversationPbxQueue.prototype['say_voice'] = undefined;

/**
 * Twilio taskrouter workflow sid
 * @member {String} twilio_taskrouter_workflow_sid
 */
ConversationPbxQueue.prototype['twilio_taskrouter_workflow_sid'] = undefined;

/**
 * Twilio workspace queue sid
 * @member {String} twilio_workspace_queue_sid
 */
ConversationPbxQueue.prototype['twilio_workspace_queue_sid'] = undefined;

/**
 * If true, this queue has a voicemail associated with it
 * @member {Boolean} voicemail
 */
ConversationPbxQueue.prototype['voicemail'] = undefined;

/**
 * Wait time in seconds before critical
 * @member {Number} wait_critical_seconds
 */
ConversationPbxQueue.prototype['wait_critical_seconds'] = undefined;

/**
 * Wait time in seconds before warning
 * @member {Number} wait_warning_seconds
 */
ConversationPbxQueue.prototype['wait_warning_seconds'] = undefined;

/**
 * Wrap up time in seconds
 * @member {Number} wrap_up_seconds
 */
ConversationPbxQueue.prototype['wrap_up_seconds'] = undefined;
var _default = exports["default"] = ConversationPbxQueue;