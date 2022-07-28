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
 * The ConversationWebchatQueueStatusQueueEntry model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
 * @version 4.0.43-RC
 */
var ConversationWebchatQueueStatusQueueEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatQueueStatusQueueEntry</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
   */
  function ConversationWebchatQueueStatusQueueEntry() {
    _classCallCheck(this, ConversationWebchatQueueStatusQueueEntry);

    ConversationWebchatQueueStatusQueueEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebchatQueueStatusQueueEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebchatQueueStatusQueueEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} The populated <code>ConversationWebchatQueueStatusQueueEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatQueueStatusQueueEntry();

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_name')) {
          obj['conversation_participant_name'] = _ApiClient["default"].convertToType(data['conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('conversation_webchat_queue_uuid')) {
          obj['conversation_webchat_queue_uuid'] = _ApiClient["default"].convertToType(data['conversation_webchat_queue_uuid'], 'String');
        }

        if (data.hasOwnProperty('join_dts')) {
          obj['join_dts'] = _ApiClient["default"].convertToType(data['join_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationWebchatQueueStatusQueueEntry;
}();
/**
 * @member {String} conversation_participant_arn
 */


ConversationWebchatQueueStatusQueueEntry.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} conversation_participant_name
 */

ConversationWebchatQueueStatusQueueEntry.prototype['conversation_participant_name'] = undefined;
/**
 * @member {String} conversation_webchat_queue_uuid
 */

ConversationWebchatQueueStatusQueueEntry.prototype['conversation_webchat_queue_uuid'] = undefined;
/**
 * Date/time the customer joined the queue
 * @member {String} join_dts
 */

ConversationWebchatQueueStatusQueueEntry.prototype['join_dts'] = undefined;
var _default = ConversationWebchatQueueStatusQueueEntry;
exports["default"] = _default;