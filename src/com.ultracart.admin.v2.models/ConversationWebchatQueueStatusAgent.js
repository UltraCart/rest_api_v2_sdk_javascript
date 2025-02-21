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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationWebchatQueueStatusAgent = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationWebchatQueueStatusAgent model module.
   * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ConversationWebchatQueueStatusAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebchatQueueStatusAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent} The populated <code>ConversationWebchatQueueStatusAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent_status'))
        obj.agent_status = ApiClient.convertToType(data['agent_status'], 'String');
      if (data.hasOwnProperty('conversation_participant_arn'))
        obj.conversation_participant_arn = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('conversation_participant_name'))
        obj.conversation_participant_name = ApiClient.convertToType(data['conversation_participant_name'], 'String');
      if (data.hasOwnProperty('last_chat_dts'))
        obj.last_chat_dts = ApiClient.convertToType(data['last_chat_dts'], 'String');
      if (data.hasOwnProperty('next_round_robin'))
        obj.next_round_robin = ApiClient.convertToType(data['next_round_robin'], 'Boolean');
      if (data.hasOwnProperty('profile_image_url'))
        obj.profile_image_url = ApiClient.convertToType(data['profile_image_url'], 'String');
    }
    return obj;
  }

  /**
   * Status of the agent
   * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusAgent.AgentStatusEnum} agent_status
   */
  exports.prototype.agent_status = undefined;

  /**
   * @member {String} conversation_participant_arn
   */
  exports.prototype.conversation_participant_arn = undefined;

  /**
   * @member {String} conversation_participant_name
   */
  exports.prototype.conversation_participant_name = undefined;

  /**
   * Date/time that this agent took their last chat
   * @member {String} last_chat_dts
   */
  exports.prototype.last_chat_dts = undefined;

  /**
   * @member {Boolean} next_round_robin
   */
  exports.prototype.next_round_robin = undefined;

  /**
   * Profile image URL
   * @member {String} profile_image_url
   */
  exports.prototype.profile_image_url = undefined;


  /**
   * Allowed values for the <code>agent_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AgentStatusEnum = {
    /**
     * value: "available"
     * @const
     */
    available: "available",

    /**
     * value: "busy"
     * @const
     */
    busy: "busy",

    /**
     * value: "unavailable"
     * @const
     */
    unavailable: "unavailable"
  };

  return exports;

}));
