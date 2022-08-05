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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationEventQueuePosition', 'com.ultracart.admin.v2.models/ConversationEventRRWeb', 'com.ultracart.admin.v2.models/ConversationEventTyping', 'com.ultracart.admin.v2.models/ConversationMessage', 'com.ultracart.admin.v2.models/ConversationSummary', 'com.ultracart.admin.v2.models/ConversationWebchatQueueStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationEventQueuePosition'), require('./ConversationEventRRWeb'), require('./ConversationEventTyping'), require('./ConversationMessage'), require('./ConversationSummary'), require('./ConversationWebchatQueueStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationWebsocketMessage = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationEventQueuePosition, root.UltraCartRestApiV2.ConversationEventRRWeb, root.UltraCartRestApiV2.ConversationEventTyping, root.UltraCartRestApiV2.ConversationMessage, root.UltraCartRestApiV2.ConversationSummary, root.UltraCartRestApiV2.ConversationWebchatQueueStatus);
  }
}(this, function(ApiClient, ConversationEventQueuePosition, ConversationEventRRWeb, ConversationEventTyping, ConversationMessage, ConversationSummary, ConversationWebchatQueueStatus) {
  'use strict';

  /**
   * The ConversationWebsocketMessage model module.
   * @module com.ultracart.admin.v2.models/ConversationWebsocketMessage
   * @version 3.10.34
   */

  /**
   * Constructs a new <code>ConversationWebsocketMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebsocketMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebsocketMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage} The populated <code>ConversationWebsocketMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_uuid'))
        obj.conversation_uuid = ApiClient.convertToType(data['conversation_uuid'], 'String');
      if (data.hasOwnProperty('event_conversation_closed'))
        obj.event_conversation_closed = ConversationSummary.constructFromObject(data['event_conversation_closed']);
      if (data.hasOwnProperty('event_new_conversation'))
        obj.event_new_conversation = ConversationSummary.constructFromObject(data['event_new_conversation']);
      if (data.hasOwnProperty('event_new_message'))
        obj.event_new_message = ConversationSummary.constructFromObject(data['event_new_message']);
      if (data.hasOwnProperty('event_participant_update'))
        obj.event_participant_update = ConversationSummary.constructFromObject(data['event_participant_update']);
      if (data.hasOwnProperty('event_queue_position'))
        obj.event_queue_position = ConversationEventQueuePosition.constructFromObject(data['event_queue_position']);
      if (data.hasOwnProperty('event_queue_status_update'))
        obj.event_queue_status_update = ConversationWebchatQueueStatus.constructFromObject(data['event_queue_status_update']);
      if (data.hasOwnProperty('event_rrweb'))
        obj.event_rrweb = ConversationEventRRWeb.constructFromObject(data['event_rrweb']);
      if (data.hasOwnProperty('event_type'))
        obj.event_type = ApiClient.convertToType(data['event_type'], 'String');
      if (data.hasOwnProperty('event_typing'))
        obj.event_typing = ConversationEventTyping.constructFromObject(data['event_typing']);
      if (data.hasOwnProperty('event_updated_message'))
        obj.event_updated_message = ConversationMessage.constructFromObject(data['event_updated_message']);
      if (data.hasOwnProperty('message'))
        obj.message = ConversationMessage.constructFromObject(data['message']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Conversation UUID if the websocket message is tied to a specific conversation
   * @member {String} conversation_uuid
   */
  exports.prototype.conversation_uuid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_conversation_closed
   */
  exports.prototype.event_conversation_closed = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_conversation
   */
  exports.prototype.event_new_conversation = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_new_message
   */
  exports.prototype.event_new_message = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationSummary} event_participant_update
   */
  exports.prototype.event_participant_update = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationEventQueuePosition} event_queue_position
   */
  exports.prototype.event_queue_position = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatus} event_queue_status_update
   */
  exports.prototype.event_queue_status_update = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationEventRRWeb} event_rrweb
   */
  exports.prototype.event_rrweb = undefined;

  /**
   * Type of event
   * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.EventTypeEnum} event_type
   */
  exports.prototype.event_type = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationEventTyping} event_typing
   */
  exports.prototype.event_typing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationMessage} event_updated_message
   */
  exports.prototype.event_updated_message = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationMessage} message
   */
  exports.prototype.message = undefined;

  /**
   * Type of message
   * @member {module:com.ultracart.admin.v2.models/ConversationWebsocketMessage.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "queue position"
     * @const
     */
    queue_position: "queue position",

    /**
     * value: "webchat start conversation"
     * @const
     */
    webchat_start_conversation: "webchat start conversation",

    /**
     * value: "conversation closed"
     * @const
     */
    conversation_closed: "conversation closed",

    /**
     * value: "new conversation"
     * @const
     */
    new_conversation: "new conversation",

    /**
     * value: "new message"
     * @const
     */
    new_message: "new message",

    /**
     * value: "updated message"
     * @const
     */
    updated_message: "updated message",

    /**
     * value: "queue status update"
     * @const
     */
    queue_status_update: "queue status update",

    /**
     * value: "rrweb"
     * @const
     */
    rrweb: "rrweb",

    /**
     * value: "participant update"
     * @const
     */
    participant_update: "participant update"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "message"
     * @const
     */
    message: "message",

    /**
     * value: "event"
     * @const
     */
    event: "event",

    /**
     * value: "ping"
     * @const
     */
    ping: "ping",

    /**
     * value: "check queue position"
     * @const
     */
    check_queue_position: "check queue position"
  };

  return exports;

}));
