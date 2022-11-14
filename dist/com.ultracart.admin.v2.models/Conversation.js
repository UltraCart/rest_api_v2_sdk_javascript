"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationMessage = _interopRequireDefault(require("./ConversationMessage"));

var _ConversationParticipant = _interopRequireDefault(require("./ConversationParticipant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Conversation model module.
 * @module com.ultracart.admin.v2.models/Conversation
 * @version 4.0.79-RC
 */
var Conversation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Conversation</code>.
   * @alias module:com.ultracart.admin.v2.models/Conversation
   */
  function Conversation() {
    _classCallCheck(this, Conversation);

    Conversation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Conversation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Conversation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Conversation} The populated <code>Conversation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Conversation();

        if (data.hasOwnProperty('closed')) {
          obj['closed'] = _ApiClient["default"].convertToType(data['closed'], 'Boolean');
        }

        if (data.hasOwnProperty('conversation_arn')) {
          obj['conversation_arn'] = _ApiClient["default"].convertToType(data['conversation_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_uuid')) {
          obj['conversation_uuid'] = _ApiClient["default"].convertToType(data['conversation_uuid'], 'String');
        }

        if (data.hasOwnProperty('last_conversation_message_body')) {
          obj['last_conversation_message_body'] = _ApiClient["default"].convertToType(data['last_conversation_message_body'], 'String');
        }

        if (data.hasOwnProperty('last_conversation_participant_arn')) {
          obj['last_conversation_participant_arn'] = _ApiClient["default"].convertToType(data['last_conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('last_conversation_participant_name')) {
          obj['last_conversation_participant_name'] = _ApiClient["default"].convertToType(data['last_conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('last_interactive_message_dts')) {
          obj['last_interactive_message_dts'] = _ApiClient["default"].convertToType(data['last_interactive_message_dts'], 'String');
        }

        if (data.hasOwnProperty('last_message_dts')) {
          obj['last_message_dts'] = _ApiClient["default"].convertToType(data['last_message_dts'], 'String');
        }

        if (data.hasOwnProperty('medium')) {
          obj['medium'] = _ApiClient["default"].convertToType(data['medium'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('message_count')) {
          obj['message_count'] = _ApiClient["default"].convertToType(data['message_count'], 'Number');
        }

        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], [_ConversationMessage["default"]]);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_ConversationParticipant["default"]]);
        }

        if (data.hasOwnProperty('start_dts')) {
          obj['start_dts'] = _ApiClient["default"].convertToType(data['start_dts'], 'String');
        }

        if (data.hasOwnProperty('unread_messages')) {
          obj['unread_messages'] = _ApiClient["default"].convertToType(data['unread_messages'], 'Boolean');
        }

        if (data.hasOwnProperty('visible')) {
          obj['visible'] = _ApiClient["default"].convertToType(data['visible'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Conversation;
}();
/**
 * @member {Boolean} closed
 */


Conversation.prototype['closed'] = undefined;
/**
 * @member {String} conversation_arn
 */

Conversation.prototype['conversation_arn'] = undefined;
/**
 * @member {String} conversation_uuid
 */

Conversation.prototype['conversation_uuid'] = undefined;
/**
 * @member {String} last_conversation_message_body
 */

Conversation.prototype['last_conversation_message_body'] = undefined;
/**
 * @member {String} last_conversation_participant_arn
 */

Conversation.prototype['last_conversation_participant_arn'] = undefined;
/**
 * @member {String} last_conversation_participant_name
 */

Conversation.prototype['last_conversation_participant_name'] = undefined;
/**
 * Last interactive message date/time
 * @member {String} last_interactive_message_dts
 */

Conversation.prototype['last_interactive_message_dts'] = undefined;
/**
 * Last message date/time
 * @member {String} last_message_dts
 */

Conversation.prototype['last_message_dts'] = undefined;
/**
 * The communication medium of the customer.
 * @member {module:com.ultracart.admin.v2.models/Conversation.MediumEnum} medium
 */

Conversation.prototype['medium'] = undefined;
/**
 * @member {String} merchant_id
 */

Conversation.prototype['merchant_id'] = undefined;
/**
 * @member {Number} message_count
 */

Conversation.prototype['message_count'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessage>} messages
 */

Conversation.prototype['messages'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationParticipant>} participants
 */

Conversation.prototype['participants'] = undefined;
/**
 * Start of the conversation date/time
 * @member {String} start_dts
 */

Conversation.prototype['start_dts'] = undefined;
/**
 * @member {Boolean} unread_messages
 */

Conversation.prototype['unread_messages'] = undefined;
/**
 * @member {Boolean} visible
 */

Conversation.prototype['visible'] = undefined;
/**
 * Allowed values for the <code>medium</code> property.
 * @enum {String}
 * @readonly
 */

Conversation['MediumEnum'] = {
  /**
   * value: "sms"
   * @const
   */
  "sms": "sms",

  /**
   * value: "websocket"
   * @const
   */
  "websocket": "websocket"
};
var _default = Conversation;
exports["default"] = _default;