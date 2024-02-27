/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent', 'com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationWebchatQueueStatusAgent'), require('./ConversationWebchatQueueStatusQueueEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationWebchatQueueStatus = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationWebchatQueueStatusAgent, root.UltraCartRestApiV2.ConversationWebchatQueueStatusQueueEntry);
  }
}(this, function(ApiClient, ConversationWebchatQueueStatusAgent, ConversationWebchatQueueStatusQueueEntry) {
  'use strict';

  /**
   * The ConversationWebchatQueueStatus model module.
   * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatus
   * @version 3.10.184
   */

  /**
   * Constructs a new <code>ConversationWebchatQueueStatus</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebchatQueueStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} The populated <code>ConversationWebchatQueueStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent_available_count'))
        obj.agent_available_count = ApiClient.convertToType(data['agent_available_count'], 'Number');
      if (data.hasOwnProperty('agent_busy_count'))
        obj.agent_busy_count = ApiClient.convertToType(data['agent_busy_count'], 'Number');
      if (data.hasOwnProperty('agent_count'))
        obj.agent_count = ApiClient.convertToType(data['agent_count'], 'Number');
      if (data.hasOwnProperty('agent_unavailable_count'))
        obj.agent_unavailable_count = ApiClient.convertToType(data['agent_unavailable_count'], 'Number');
      if (data.hasOwnProperty('agents'))
        obj.agents = ApiClient.convertToType(data['agents'], [ConversationWebchatQueueStatusAgent]);
      if (data.hasOwnProperty('customer_abandon_count'))
        obj.customer_abandon_count = ApiClient.convertToType(data['customer_abandon_count'], 'Number');
      if (data.hasOwnProperty('customer_active_count'))
        obj.customer_active_count = ApiClient.convertToType(data['customer_active_count'], 'Number');
      if (data.hasOwnProperty('customer_average_abandon_time_seconds'))
        obj.customer_average_abandon_time_seconds = ApiClient.convertToType(data['customer_average_abandon_time_seconds'], 'Number');
      if (data.hasOwnProperty('customer_average_chat_time_seconds'))
        obj.customer_average_chat_time_seconds = ApiClient.convertToType(data['customer_average_chat_time_seconds'], 'Number');
      if (data.hasOwnProperty('customer_average_hold_time_seconds'))
        obj.customer_average_hold_time_seconds = ApiClient.convertToType(data['customer_average_hold_time_seconds'], 'Number');
      if (data.hasOwnProperty('customer_chat_count'))
        obj.customer_chat_count = ApiClient.convertToType(data['customer_chat_count'], 'Number');
      if (data.hasOwnProperty('customer_waiting_count'))
        obj.customer_waiting_count = ApiClient.convertToType(data['customer_waiting_count'], 'Number');
      if (data.hasOwnProperty('customer_waiting_join_dts'))
        obj.customer_waiting_join_dts = ApiClient.convertToType(data['customer_waiting_join_dts'], 'String');
      if (data.hasOwnProperty('queue_entries'))
        obj.queue_entries = ApiClient.convertToType(data['queue_entries'], [ConversationWebchatQueueStatusQueueEntry]);
      if (data.hasOwnProperty('queue_name'))
        obj.queue_name = ApiClient.convertToType(data['queue_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} agent_available_count
   */
  exports.prototype.agent_available_count = undefined;

  /**
   * @member {Number} agent_busy_count
   */
  exports.prototype.agent_busy_count = undefined;

  /**
   * @member {Number} agent_count
   */
  exports.prototype.agent_count = undefined;

  /**
   * @member {Number} agent_unavailable_count
   */
  exports.prototype.agent_unavailable_count = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent>} agents
   */
  exports.prototype.agents = undefined;

  /**
   * @member {Number} customer_abandon_count
   */
  exports.prototype.customer_abandon_count = undefined;

  /**
   * @member {Number} customer_active_count
   */
  exports.prototype.customer_active_count = undefined;

  /**
   * @member {Number} customer_average_abandon_time_seconds
   */
  exports.prototype.customer_average_abandon_time_seconds = undefined;

  /**
   * @member {Number} customer_average_chat_time_seconds
   */
  exports.prototype.customer_average_chat_time_seconds = undefined;

  /**
   * @member {Number} customer_average_hold_time_seconds
   */
  exports.prototype.customer_average_hold_time_seconds = undefined;

  /**
   * @member {Number} customer_chat_count
   */
  exports.prototype.customer_chat_count = undefined;

  /**
   * @member {Number} customer_waiting_count
   */
  exports.prototype.customer_waiting_count = undefined;

  /**
   * Date/time that the oldest person joined the queue
   * @member {String} customer_waiting_join_dts
   */
  exports.prototype.customer_waiting_join_dts = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry>} queue_entries
   */
  exports.prototype.queue_entries = undefined;

  /**
   * @member {String} queue_name
   */
  exports.prototype.queue_name = undefined;

  return exports;

}));
