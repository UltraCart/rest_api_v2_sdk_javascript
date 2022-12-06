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
 * The ConversationEventTyping model module.
 * @module com.ultracart.admin.v2.models/ConversationEventTyping
 * @version 4.0.91-RC
 */
var ConversationEventTyping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEventTyping</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEventTyping
   */
  function ConversationEventTyping() {
    _classCallCheck(this, ConversationEventTyping);

    ConversationEventTyping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEventTyping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEventTyping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEventTyping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEventTyping} The populated <code>ConversationEventTyping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEventTyping();

        if (data.hasOwnProperty('author_conversation_participant_arn')) {
          obj['author_conversation_participant_arn'] = _ApiClient["default"].convertToType(data['author_conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('author_conversation_participant_name')) {
          obj['author_conversation_participant_name'] = _ApiClient["default"].convertToType(data['author_conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEventTyping;
}();
/**
 * @member {String} author_conversation_participant_arn
 */


ConversationEventTyping.prototype['author_conversation_participant_arn'] = undefined;
/**
 * @member {String} author_conversation_participant_name
 */

ConversationEventTyping.prototype['author_conversation_participant_name'] = undefined;
/**
 * @member {String} value
 */

ConversationEventTyping.prototype['value'] = undefined;
var _default = ConversationEventTyping;
exports["default"] = _default;