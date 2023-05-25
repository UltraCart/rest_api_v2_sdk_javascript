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
 * The ConversationCannedMessage model module.
 * @module com.ultracart.admin.v2.models/ConversationCannedMessage
 * @version 4.0.155
 */
var ConversationCannedMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationCannedMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessage
   */
  function ConversationCannedMessage() {
    _classCallCheck(this, ConversationCannedMessage);

    ConversationCannedMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationCannedMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationCannedMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessage} The populated <code>ConversationCannedMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationCannedMessage();

        if (data.hasOwnProperty('canned_message')) {
          obj['canned_message'] = _ApiClient["default"].convertToType(data['canned_message'], 'String');
        }

        if (data.hasOwnProperty('conversation_canned_message_oid')) {
          obj['conversation_canned_message_oid'] = _ApiClient["default"].convertToType(data['conversation_canned_message_oid'], 'Number');
        }

        if (data.hasOwnProperty('conversation_department_oids')) {
          obj['conversation_department_oids'] = _ApiClient["default"].convertToType(data['conversation_department_oids'], ['Number']);
        }

        if (data.hasOwnProperty('short_code')) {
          obj['short_code'] = _ApiClient["default"].convertToType(data['short_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationCannedMessage;
}();
/**
 * @member {String} canned_message
 */


ConversationCannedMessage.prototype['canned_message'] = undefined;
/**
 * @member {Number} conversation_canned_message_oid
 */

ConversationCannedMessage.prototype['conversation_canned_message_oid'] = undefined;
/**
 * @member {Array.<Number>} conversation_department_oids
 */

ConversationCannedMessage.prototype['conversation_department_oids'] = undefined;
/**
 * @member {String} short_code
 */

ConversationCannedMessage.prototype['short_code'] = undefined;
var _default = ConversationCannedMessage;
exports["default"] = _default;