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
 * The ConversationAgentAuthResponse model module.
 * @module com.ultracart.admin.v2.models/ConversationAgentAuthResponse
 * @version 4.0.35-RC
 */
var ConversationAgentAuthResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationAgentAuthResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse
   */
  function ConversationAgentAuthResponse() {
    _classCallCheck(this, ConversationAgentAuthResponse);

    ConversationAgentAuthResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationAgentAuthResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationAgentAuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} The populated <code>ConversationAgentAuthResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationAgentAuthResponse();

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('jwt')) {
          obj['jwt'] = _ApiClient["default"].convertToType(data['jwt'], 'String');
        }

        if (data.hasOwnProperty('websocket_url')) {
          obj['websocket_url'] = _ApiClient["default"].convertToType(data['websocket_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationAgentAuthResponse;
}();
/**
 * @member {String} conversation_participant_arn
 */


ConversationAgentAuthResponse.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} jwt
 */

ConversationAgentAuthResponse.prototype['jwt'] = undefined;
/**
 * @member {String} websocket_url
 */

ConversationAgentAuthResponse.prototype['websocket_url'] = undefined;
var _default = ConversationAgentAuthResponse;
exports["default"] = _default;