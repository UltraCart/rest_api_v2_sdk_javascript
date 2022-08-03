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
 * @version 4.0.48-RC
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

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], [_ConversationMessage["default"]]);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_ConversationParticipant["default"]]);
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
 * @member {String} merchant_id
 */

Conversation.prototype['merchant_id'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessage>} messages
 */

Conversation.prototype['messages'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationParticipant>} participants
 */

Conversation.prototype['participants'] = undefined;
var _default = Conversation;
exports["default"] = _default;