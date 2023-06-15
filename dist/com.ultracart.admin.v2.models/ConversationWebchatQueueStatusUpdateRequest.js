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
 * The ConversationWebchatQueueStatusUpdateRequest model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
 * @version 4.0.160
 */
var ConversationWebchatQueueStatusUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatQueueStatusUpdateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
   */
  function ConversationWebchatQueueStatusUpdateRequest() {
    _classCallCheck(this, ConversationWebchatQueueStatusUpdateRequest);

    ConversationWebchatQueueStatusUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebchatQueueStatusUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebchatQueueStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} The populated <code>ConversationWebchatQueueStatusUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatQueueStatusUpdateRequest();

        if (data.hasOwnProperty('agent_status')) {
          obj['agent_status'] = _ApiClient["default"].convertToType(data['agent_status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationWebchatQueueStatusUpdateRequest;
}();
/**
 * Status of the agent
 * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest.AgentStatusEnum} agent_status
 */


ConversationWebchatQueueStatusUpdateRequest.prototype['agent_status'] = undefined;
/**
 * Allowed values for the <code>agent_status</code> property.
 * @enum {String}
 * @readonly
 */

ConversationWebchatQueueStatusUpdateRequest['AgentStatusEnum'] = {
  /**
   * value: "available"
   * @const
   */
  "available": "available",

  /**
   * value: "busy"
   * @const
   */
  "busy": "busy",

  /**
   * value: "unavailable"
   * @const
   */
  "unavailable": "unavailable"
};
var _default = ConversationWebchatQueueStatusUpdateRequest;
exports["default"] = _default;