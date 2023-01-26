"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationWebchatQueueStatusAgent = _interopRequireDefault(require("./ConversationWebchatQueueStatusAgent"));

var _ConversationWebchatQueueStatusQueueEntry = _interopRequireDefault(require("./ConversationWebchatQueueStatusQueueEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConversationWebchatQueueStatus model module.
 * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatus
 * @version 4.0.124-RC
 */
var ConversationWebchatQueueStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationWebchatQueueStatus</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus
   */
  function ConversationWebchatQueueStatus() {
    _classCallCheck(this, ConversationWebchatQueueStatus);

    ConversationWebchatQueueStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationWebchatQueueStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationWebchatQueueStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} The populated <code>ConversationWebchatQueueStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationWebchatQueueStatus();

        if (data.hasOwnProperty('agent_available_count')) {
          obj['agent_available_count'] = _ApiClient["default"].convertToType(data['agent_available_count'], 'Number');
        }

        if (data.hasOwnProperty('agent_busy_count')) {
          obj['agent_busy_count'] = _ApiClient["default"].convertToType(data['agent_busy_count'], 'Number');
        }

        if (data.hasOwnProperty('agent_count')) {
          obj['agent_count'] = _ApiClient["default"].convertToType(data['agent_count'], 'Number');
        }

        if (data.hasOwnProperty('agent_unavailable_count')) {
          obj['agent_unavailable_count'] = _ApiClient["default"].convertToType(data['agent_unavailable_count'], 'Number');
        }

        if (data.hasOwnProperty('agents')) {
          obj['agents'] = _ApiClient["default"].convertToType(data['agents'], [_ConversationWebchatQueueStatusAgent["default"]]);
        }

        if (data.hasOwnProperty('customer_abandon_count')) {
          obj['customer_abandon_count'] = _ApiClient["default"].convertToType(data['customer_abandon_count'], 'Number');
        }

        if (data.hasOwnProperty('customer_active_count')) {
          obj['customer_active_count'] = _ApiClient["default"].convertToType(data['customer_active_count'], 'Number');
        }

        if (data.hasOwnProperty('customer_average_abandon_time_seconds')) {
          obj['customer_average_abandon_time_seconds'] = _ApiClient["default"].convertToType(data['customer_average_abandon_time_seconds'], 'Number');
        }

        if (data.hasOwnProperty('customer_average_chat_time_seconds')) {
          obj['customer_average_chat_time_seconds'] = _ApiClient["default"].convertToType(data['customer_average_chat_time_seconds'], 'Number');
        }

        if (data.hasOwnProperty('customer_average_hold_time_seconds')) {
          obj['customer_average_hold_time_seconds'] = _ApiClient["default"].convertToType(data['customer_average_hold_time_seconds'], 'Number');
        }

        if (data.hasOwnProperty('customer_chat_count')) {
          obj['customer_chat_count'] = _ApiClient["default"].convertToType(data['customer_chat_count'], 'Number');
        }

        if (data.hasOwnProperty('customer_waiting_count')) {
          obj['customer_waiting_count'] = _ApiClient["default"].convertToType(data['customer_waiting_count'], 'Number');
        }

        if (data.hasOwnProperty('customer_waiting_join_dts')) {
          obj['customer_waiting_join_dts'] = _ApiClient["default"].convertToType(data['customer_waiting_join_dts'], 'String');
        }

        if (data.hasOwnProperty('queue_entries')) {
          obj['queue_entries'] = _ApiClient["default"].convertToType(data['queue_entries'], [_ConversationWebchatQueueStatusQueueEntry["default"]]);
        }

        if (data.hasOwnProperty('queue_name')) {
          obj['queue_name'] = _ApiClient["default"].convertToType(data['queue_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationWebchatQueueStatus;
}();
/**
 * @member {Number} agent_available_count
 */


ConversationWebchatQueueStatus.prototype['agent_available_count'] = undefined;
/**
 * @member {Number} agent_busy_count
 */

ConversationWebchatQueueStatus.prototype['agent_busy_count'] = undefined;
/**
 * @member {Number} agent_count
 */

ConversationWebchatQueueStatus.prototype['agent_count'] = undefined;
/**
 * @member {Number} agent_unavailable_count
 */

ConversationWebchatQueueStatus.prototype['agent_unavailable_count'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent>} agents
 */

ConversationWebchatQueueStatus.prototype['agents'] = undefined;
/**
 * @member {Number} customer_abandon_count
 */

ConversationWebchatQueueStatus.prototype['customer_abandon_count'] = undefined;
/**
 * @member {Number} customer_active_count
 */

ConversationWebchatQueueStatus.prototype['customer_active_count'] = undefined;
/**
 * @member {Number} customer_average_abandon_time_seconds
 */

ConversationWebchatQueueStatus.prototype['customer_average_abandon_time_seconds'] = undefined;
/**
 * @member {Number} customer_average_chat_time_seconds
 */

ConversationWebchatQueueStatus.prototype['customer_average_chat_time_seconds'] = undefined;
/**
 * @member {Number} customer_average_hold_time_seconds
 */

ConversationWebchatQueueStatus.prototype['customer_average_hold_time_seconds'] = undefined;
/**
 * @member {Number} customer_chat_count
 */

ConversationWebchatQueueStatus.prototype['customer_chat_count'] = undefined;
/**
 * @member {Number} customer_waiting_count
 */

ConversationWebchatQueueStatus.prototype['customer_waiting_count'] = undefined;
/**
 * Date/time that the oldest person joined the queue
 * @member {String} customer_waiting_join_dts
 */

ConversationWebchatQueueStatus.prototype['customer_waiting_join_dts'] = undefined;
/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry>} queue_entries
 */

ConversationWebchatQueueStatus.prototype['queue_entries'] = undefined;
/**
 * @member {String} queue_name
 */

ConversationWebchatQueueStatus.prototype['queue_name'] = undefined;
var _default = ConversationWebchatQueueStatus;
exports["default"] = _default;