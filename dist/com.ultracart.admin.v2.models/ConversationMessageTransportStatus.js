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
 * The ConversationMessageTransportStatus model module.
 * @module com.ultracart.admin.v2.models/ConversationMessageTransportStatus
 * @version 4.0.38-RC
 */
var ConversationMessageTransportStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationMessageTransportStatus</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus
   */
  function ConversationMessageTransportStatus() {
    _classCallCheck(this, ConversationMessageTransportStatus);

    ConversationMessageTransportStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationMessageTransportStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationMessageTransportStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} The populated <code>ConversationMessageTransportStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationMessageTransportStatus();

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationMessageTransportStatus;
}();
/**
 * @member {String} conversation_participant_arn
 */


ConversationMessageTransportStatus.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} status
 */

ConversationMessageTransportStatus.prototype['status'] = undefined;
var _default = ConversationMessageTransportStatus;
exports["default"] = _default;