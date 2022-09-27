"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationEventQueuePosition = _interopRequireDefault(require("./ConversationEventQueuePosition"));

var _ConversationEventRRWeb = _interopRequireDefault(require("./ConversationEventRRWeb"));

var _ConversationEventReadMessage = _interopRequireDefault(require("./ConversationEventReadMessage"));

var _ConversationEventTyping = _interopRequireDefault(require("./ConversationEventTyping"));

var _ConversationMessage = _interopRequireDefault(require("./ConversationMessage"));

var _ConversationSummary = _interopRequireDefault(require("./ConversationSummary"));

var _ConversationWebchatQueueStatus = _interopRequireDefault(require("./ConversationWebchatQueueStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationWebsocketMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationWebsocketMessage
 * @version 4.0.66-RC
 */
var ConversationWebsocketMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebsocketMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebsocketMessage
   */
  function ConversationWebsocketMessage() {
    _classCallCheck(this, ConversationWebsocketMessage);

    ConversationWebsocketMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebsocketMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebsocketMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} The populated <code>ConversationWebsocketMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebsocketMessage();

        if (data.hasOwnProperty('conversation_uuid')) {
          obj['conversation_uuid'] = _ApiClient["default"].convertToType(data['conversation_uuid'], 'String');
        }

        if (data.hasOwnProperty('event_conversation_closed')) {
          obj['event_conversation_closed'] = _ConversationSummary["default"].constructFromObject(data['event_conversation_closed']);
        }

        if (data.hasOwnProperty('event_new_conversation')) {
          obj['event_new_conversation'] = _ConversationSummary["default"].constructFromObject(data['event_new_conversation']);
        }

        if (data.hasOwnProperty('event_new_message')) {
          obj['event_new_message'] = _ConversationSummary["default"].constructFromObject(data['event_new_message']);
        }

        if (data.hasOwnProperty('event_participant_update')) {
          obj['event_participant_update'] = _ConversationSummary["default"].constructFromObject(data['event_participant_update']);
        }

        if (data.hasOwnProperty('event_queue_position')) {
          obj['event_queue_position'] = _ConversationEventQueuePosition["default"].constructFromObject(data['event_queue_position']);
        }

        if (data.hasOwnProperty('event_queue_status_update')) {
          obj['event_queue_status_update'] = _ConversationWebchatQueueStatus["default"].constructFromObject(data['event_queue_status_update']);
        }

        if (data.hasOwnProperty('event_read_message')) {
          obj['event_read_message'] = _ConversationEventReadMessage["default"].constructFromObject(data['event_read_message']);
        }

        if (data.hasOwnProperty('event_rrweb')) {
          obj['event_rrweb'] = _ConversationEventRRWeb["default"].constructFromObject(data['event_rrweb']);
        }

        if (data.hasOwnProperty('event_type')) {
          obj['event_type'] = _ApiClient["default"].convertToType(data['event_type'], 'String');
        }

        if (data.hasOwnProperty('event_typing')) {
          obj['event_typing'] = _ConversationEventTyping["default"].constructFromObject(data['event_typing']);
        }

        if (data.hasOwnProperty('event_updated_message')) {
          obj['event_updated_message'] = _ConversationMessage["default"].constructFromObject(data['event_updated_message']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ConversationMessage["default"].constructFromObject(data['message']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationWebsocketMessage;
}();
/**
 * Conversation UUID if the websocket message is tied to a specific conversation
 * @member {String} conversation_uuid
 */


ConversationWebsocketMessage.prototype['conversation_uuid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_conversation_closed
 */

ConversationWebsocketMessage.prototype['event_conversation_closed'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_conversation
 */

ConversationWebsocketMessage.prototype['event_new_conversation'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_message
 */

ConversationWebsocketMessage.prototype['event_new_message'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_participant_update
 */

ConversationWebsocketMessage.prototype['event_participant_update'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} event_queue_position
 */

ConversationWebsocketMessage.prototype['event_queue_position'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} event_queue_status_update
 */

ConversationWebsocketMessage.prototype['event_queue_status_update'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} event_read_message
 */

ConversationWebsocketMessage.prototype['event_read_message'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} event_rrweb
 */

ConversationWebsocketMessage.prototype['event_rrweb'] = undefined;
/**
 * Type of event
 * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.EventTypeEnum} event_type
 */

ConversationWebsocketMessage.prototype['event_type'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEventTyping} event_typing
 */

ConversationWebsocketMessage.prototype['event_typing'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage} event_updated_message
 */

ConversationWebsocketMessage.prototype['event_updated_message'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage} message
 */

ConversationWebsocketMessage.prototype['message'] = undefined;
/**
 * Type of message
 * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.TypeEnum} type
 */

ConversationWebsocketMessage.prototype['type'] = undefined;
/**
 * Allowed values for the <code>event_type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationWebsocketMessage['EventTypeEnum'] = {
  /**
   * value: "queue position"
   * @const
   */
  "queue position": "queue position",

  /**
   * value: "webchat start conversation"
   * @const
   */
  "webchat start conversation": "webchat start conversation",

  /**
   * value: "conversation closed"
   * @const
   */
  "conversation closed": "conversation closed",

  /**
   * value: "new conversation"
   * @const
   */
  "new conversation": "new conversation",

  /**
   * value: "new message"
   * @const
   */
  "new message": "new message",

  /**
   * value: "updated message"
   * @const
   */
  "updated message": "updated message",

  /**
   * value: "queue status update"
   * @const
   */
  "queue status update": "queue status update",

  /**
   * value: "rrweb"
   * @const
   */
  "rrweb": "rrweb",

  /**
   * value: "participant update"
   * @const
   */
  "participant update": "participant update",

  /**
   * value: "read message"
   * @const
   */
  "read message": "read message"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationWebsocketMessage['TypeEnum'] = {
  /**
   * value: "message"
   * @const
   */
  "message": "message",

  /**
   * value: "event"
   * @const
   */
  "event": "event",

  /**
   * value: "ping"
   * @const
   */
  "ping": "ping",

  /**
   * value: "check queue position"
   * @const
   */
  "check queue position": "check queue position"
};
var _default = ConversationWebsocketMessage;
exports["default"] = _default;