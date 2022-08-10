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
 * The ConversationParticipant model module.
 * @module com.ultracart.admin.v2.models/ConversationParticipant
 * @version 4.0.52-RC
 */
var ConversationParticipant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationParticipant</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationParticipant
   */
  function ConversationParticipant() {
    _classCallCheck(this, ConversationParticipant);

    ConversationParticipant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationParticipant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationParticipant} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationParticipant} The populated <code>ConversationParticipant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationParticipant();

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_name')) {
          obj['conversation_participant_name'] = _ApiClient["default"].convertToType(data['conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_uuid')) {
          obj['conversation_participant_uuid'] = _ApiClient["default"].convertToType(data['conversation_participant_uuid'], 'String');
        }

        if (data.hasOwnProperty('joined_dts')) {
          obj['joined_dts'] = _ApiClient["default"].convertToType(data['joined_dts'], 'String');
        }

        if (data.hasOwnProperty('last_message_dts')) {
          obj['last_message_dts'] = _ApiClient["default"].convertToType(data['last_message_dts'], 'String');
        }

        if (data.hasOwnProperty('left_dts')) {
          obj['left_dts'] = _ApiClient["default"].convertToType(data['left_dts'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationParticipant;
}();
/**
 * @member {String} conversation_participant_arn
 */


ConversationParticipant.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} conversation_participant_name
 */

ConversationParticipant.prototype['conversation_participant_name'] = undefined;
/**
 * @member {String} conversation_participant_uuid
 */

ConversationParticipant.prototype['conversation_participant_uuid'] = undefined;
/**
 * Joined conversation date/time
 * @member {String} joined_dts
 */

ConversationParticipant.prototype['joined_dts'] = undefined;
/**
 * Last message date/time
 * @member {String} last_message_dts
 */

ConversationParticipant.prototype['last_message_dts'] = undefined;
/**
 * Left conversation date/time
 * @member {String} left_dts
 */

ConversationParticipant.prototype['left_dts'] = undefined;
/**
 * @member {String} status
 */

ConversationParticipant.prototype['status'] = undefined;
var _default = ConversationParticipant;
exports["default"] = _default;