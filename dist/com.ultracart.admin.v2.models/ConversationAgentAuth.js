"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationTwilioAccount = _interopRequireDefault(require("./ConversationTwilioAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationAgentAuth model module.
 * @module com.ultracart.admin.v2.models/ConversationAgentAuth
 * @version 4.0.87-RC
 */
var ConversationAgentAuth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationAgentAuth</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationAgentAuth
   */
  function ConversationAgentAuth() {
    _classCallCheck(this, ConversationAgentAuth);

    ConversationAgentAuth.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationAgentAuth, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationAgentAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuth} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationAgentAuth} The populated <code>ConversationAgentAuth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationAgentAuth();

        if (data.hasOwnProperty('conversation_participant_arn')) {
          obj['conversation_participant_arn'] = _ApiClient["default"].convertToType(data['conversation_participant_arn'], 'String');
        }

        if (data.hasOwnProperty('conversation_participant_name')) {
          obj['conversation_participant_name'] = _ApiClient["default"].convertToType(data['conversation_participant_name'], 'String');
        }

        if (data.hasOwnProperty('jwt')) {
          obj['jwt'] = _ApiClient["default"].convertToType(data['jwt'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('twilio_accounts')) {
          obj['twilio_accounts'] = _ApiClient["default"].convertToType(data['twilio_accounts'], [_ConversationTwilioAccount["default"]]);
        }

        if (data.hasOwnProperty('websocket_url')) {
          obj['websocket_url'] = _ApiClient["default"].convertToType(data['websocket_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationAgentAuth;
}();
/**
 * @member {String} conversation_participant_arn
 */


ConversationAgentAuth.prototype['conversation_participant_arn'] = undefined;
/**
 * @member {String} conversation_participant_name
 */

ConversationAgentAuth.prototype['conversation_participant_name'] = undefined;
/**
 * @member {String} jwt
 */

ConversationAgentAuth.prototype['jwt'] = undefined;
/**
 * @member {String} merchant_id
 */

ConversationAgentAuth.prototype['merchant_id'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationTwilioAccount>} twilio_accounts
 */

ConversationAgentAuth.prototype['twilio_accounts'] = undefined;
/**
 * @member {String} websocket_url
 */

ConversationAgentAuth.prototype['websocket_url'] = undefined;
var _default = ConversationAgentAuth;
exports["default"] = _default;