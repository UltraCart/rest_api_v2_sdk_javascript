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
 * The ConversationStartRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationStartRequest
 * @version 4.0.93-RC
 */
var ConversationStartRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationStartRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationStartRequest
   */
  function ConversationStartRequest() {
    _classCallCheck(this, ConversationStartRequest);

    ConversationStartRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationStartRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationStartRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationStartRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationStartRequest} The populated <code>ConversationStartRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationStartRequest();

        if (data.hasOwnProperty('add_conversation_participant_arns')) {
          obj['add_conversation_participant_arns'] = _ApiClient["default"].convertToType(data['add_conversation_participant_arns'], ['String']);
        }

        if (data.hasOwnProperty('conversation_arn')) {
          obj['conversation_arn'] = _ApiClient["default"].convertToType(data['conversation_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_webchat_queue_uuid')) {
          obj['conversation_webchat_queue_uuid'] = _ApiClient["default"].convertToType(data['conversation_webchat_queue_uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationStartRequest;
}();
/**
 * @member {Array.<String>} add_conversation_participant_arns
 */


ConversationStartRequest.prototype['add_conversation_participant_arns'] = undefined;
/**
 * @member {String} conversation_arn
 */

ConversationStartRequest.prototype['conversation_arn'] = undefined;
/**
 * @member {String} conversation_webchat_queue_uuid
 */

ConversationStartRequest.prototype['conversation_webchat_queue_uuid'] = undefined;
var _default = ConversationStartRequest;
exports["default"] = _default;