"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationMessageTranslation = _interopRequireDefault(require("./ConversationMessageTranslation"));

var _ConversationMessageTransportStatus = _interopRequireDefault(require("./ConversationMessageTransportStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationMessage
 * @version 4.0.106-RC
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

        if (data.hasOwnProperty('client_message_id')) {
          obj['client_message_id'] = _ApiClient["default"].convertToType(data['client_message_id'], 'String');
        }

        if (data.hasOwnProperty('conversation_message_uuid')) {
          obj['conversation_message_uuid'] = _ApiClient["default"].convertToType(data['conversation_message_uuid'], 'String');
        }

        if (data.hasOwnProperty('delay_until_dts')) {
          obj['delay_until_dts'] = _ApiClient["default"].convertToType(data['delay_until_dts'], 'String');
        }

        if (data.hasOwnProperty('language_iso_code')) {
          obj['language_iso_code'] = _ApiClient["default"].convertToType(data['language_iso_code'], 'String');
        }

        if (data.hasOwnProperty('media_urls')) {
          obj['media_urls'] = _ApiClient["default"].convertToType(data['media_urls'], ['String']);
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('message_dts')) {
          obj['message_dts'] = _ApiClient["default"].convertToType(data['message_dts'], 'String');
        }

        if (data.hasOwnProperty('message_epoch')) {
          obj['message_epoch'] = _ApiClient["default"].convertToType(data['message_epoch'], 'Number');
        }

        if (data.hasOwnProperty('translations')) {
          obj['translations'] = _ApiClient["default"].convertToType(data['translations'], [_ConversationMessageTranslation["default"]]);
        }

        if (data.hasOwnProperty('transport_statuses')) {
          obj['transport_statuses'] = _ApiClient["default"].convertToType(data['transport_statuses'], [_ConversationMessageTransportStatus["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('upload_keys')) {
          obj['upload_keys'] = _ApiClient["default"].convertToType(data['upload_keys'], ['String']);
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
 * @member {String} client_message_id
 */

ConversationMessage.prototype['client_message_id'] = undefined;
/**
 * @member {String} conversation_message_uuid
 */

ConversationMessage.prototype['conversation_message_uuid'] = undefined;
/**
 * Delay message transmission until date/time
 * @member {String} delay_until_dts
 */

ConversationMessage.prototype['delay_until_dts'] = undefined;
/**
 * @member {String} language_iso_code
 */

ConversationMessage.prototype['language_iso_code'] = undefined;
/**
 * @member {Array.<String>} media_urls
 */

ConversationMessage.prototype['media_urls'] = undefined;
/**
 * @member {String} merchant_id
 */

ConversationMessage.prototype['merchant_id'] = undefined;
/**
 * Message date/time
 * @member {String} message_dts
 */

ConversationMessage.prototype['message_dts'] = undefined;
/**
 * Message epoch milliseconds
 * @member {Number} message_epoch
 */

ConversationMessage.prototype['message_epoch'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessageTranslation>} translations
 */

ConversationMessage.prototype['translations'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus>} transport_statuses
 */

ConversationMessage.prototype['transport_statuses'] = undefined;
/**
 * Message type
 * @member {module:com.ultracart.admin.v2.models/ConversationMessage.TypeEnum} type
 */

ConversationMessage.prototype['type'] = undefined;
/**
 * @member {Array.<String>} upload_keys
 */

ConversationMessage.prototype['upload_keys'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationMessage['TypeEnum'] = {
  /**
   * value: "message"
   * @const
   */
  "message": "message",

  /**
   * value: "notice"
   * @const
   */
  "notice": "notice"
};
var _default = ConversationMessage;
exports["default"] = _default;