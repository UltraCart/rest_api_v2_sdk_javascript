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
 * The ConversationMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationMessage
 * @version 4.0.36-RC
 */
var ConversationMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessage
   */
  function ConversationMessage() {
    _classCallCheck(this, ConversationMessage);

    ConversationMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessage} The populated <code>ConversationMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationMessage();

        if (data.hasOwnProperty('author_conversation_participant_arn')) {
          obj['author_conversation_participant_arn'] = _ApiClient["default"].convertToType(data['author_conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('author_conversation_participant_name')) {
          obj['author_conversation_participant_name'] = _ApiClient["default"].convertToType(data['author_conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('media_urls')) {
          obj['media_urls'] = _ApiClient["default"].convertToType(data['media_urls'], ['String']);
        }

        if (data.hasOwnProperty('message_dts')) {
          obj['message_dts'] = _ApiClient["default"].convertToType(data['message_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationMessage;
}();
/**
 * @member {String} author_conversation_participant_arn
 */


ConversationMessage.prototype['author_conversation_participant_arn'] = undefined;
/**
 * @member {String} author_conversation_participant_name
 */

ConversationMessage.prototype['author_conversation_participant_name'] = undefined;
/**
 * @member {String} body
 */

ConversationMessage.prototype['body'] = undefined;
/**
 * @member {Array.<String>} media_urls
 */

ConversationMessage.prototype['media_urls'] = undefined;
/**
 * Message date/time
 * @member {String} message_dts
 */

ConversationMessage.prototype['message_dts'] = undefined;
var _default = ConversationMessage;
exports["default"] = _default;