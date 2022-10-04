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
 * The ConversationEventReadMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationEventReadMessage
 * @version 4.0.70-RC
 */
var ConversationEventReadMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventReadMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventReadMessage
   */
  function ConversationEventReadMessage() {
    _classCallCheck(this, ConversationEventReadMessage);

    ConversationEventReadMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventReadMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventReadMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventReadMessage} The populated <code>ConversationEventReadMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventReadMessage();

        if (data.hasOwnProperty('conversation_message_uuid')) {
          obj['conversation_message_uuid'] = _ApiClient["default"].convertToType(data['conversation_message_uuid'], 'String');
        }

        if (data.hasOwnProperty('message_dts')) {
          obj['message_dts'] = _ApiClient["default"].convertToType(data['message_dts'], 'String');
        }

        if (data.hasOwnProperty('message_epoch')) {
          obj['message_epoch'] = _ApiClient["default"].convertToType(data['message_epoch'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventReadMessage;
}();
/**
 * @member {String} conversation_message_uuid
 */


ConversationEventReadMessage.prototype['conversation_message_uuid'] = undefined;
/**
 * Message date/time
 * @member {String} message_dts
 */

ConversationEventReadMessage.prototype['message_dts'] = undefined;
/**
 * @member {Number} message_epoch
 */

ConversationEventReadMessage.prototype['message_epoch'] = undefined;
var _default = ConversationEventReadMessage;
exports["default"] = _default;