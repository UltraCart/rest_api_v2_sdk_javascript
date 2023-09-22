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
 * The ConversationWebchatQueueStatusAgent model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
 * @version 4.0.177
 */
var ConversationWebchatQueueStatusAgent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatQueueStatusAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
   */
  function ConversationWebchatQueueStatusAgent() {
    _classCallCheck(this, ConversationWebchatQueueStatusAgent);

    ConversationWebchatQueueStatusAgent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebchatQueueStatusAgent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebchatQueueStatusAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} The populated <code>ConversationWebchatQueueStatusAgent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatQueueStatusAgent();

        if (data.hasOwnProperty('agent_status')) {
          obj['agent_status'] = _ApiClient["default"].convertToType(data['agent_status'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_name')) {
          obj['conversation_participant_name'] = _ApiClient["default"].convertToType(data['conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('last_chat_dts')) {
          obj['last_chat_dts'] = _ApiClient["default"].convertToType(data['last_chat_dts'], 'String');
        }

        if (data.hasOwnProperty('next_round_robin')) {
          obj['next_round_robin'] = _ApiClient["default"].convertToType(data['next_round_robin'], 'Boolean');
        }

        if (data.hasOwnProperty('profile_image_url')) {
          obj['profile_image_url'] = _ApiClient["default"].convertToType(data['profile_image_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationWebchatQueueStatusAgent;
}();
/**
 * Status of the agent
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent.AgentStatusEnum} agent_status
 */


ConversationWebchatQueueStatusAgent.prototype['agent_status'] = undefined;
/**
 * @member {String} conversation_participant_arn
 */

ConversationWebchatQueueStatusAgent.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} conversation_participant_name
 */

ConversationWebchatQueueStatusAgent.prototype['conversation_participant_name'] = undefined;
/**
 * Date/time that this agent took their last chat
 * @member {String} last_chat_dts
 */

ConversationWebchatQueueStatusAgent.prototype['last_chat_dts'] = undefined;
/**
 * @member {Boolean} next_round_robin
 */

ConversationWebchatQueueStatusAgent.prototype['next_round_robin'] = undefined;
/**
 * Profile image URL
 * @member {String} profile_image_url
 */

ConversationWebchatQueueStatusAgent.prototype['profile_image_url'] = undefined;
/**
 * Allowed values for the <code>agent_status</code> property.
 * @enum {String}
 * @readonly
 */

ConversationWebchatQueueStatusAgent['AgentStatusEnum'] = {
  /**
   * value: "available"
   * @const
   */
  "available": "available",

  /**
   * value: "busy"
   * @const
   */
  "busy": "busy",

  /**
   * value: "unavailable"
   * @const
   */
  "unavailable": "unavailable"
};
var _default = ConversationWebchatQueueStatusAgent;
exports["default"] = _default;