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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationPbxQueueMembers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationPbxQueueMembers'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationPbxQueue = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationPbxQueueMembers);
  }
}(this, function(ApiClient, ConversationPbxQueueMembers) {
  'use strict';

  /**
   * The ConversationPbxQueue model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxQueue
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>ConversationPbxQueue</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxQueue
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxQueue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxQueue} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxQueue} The populated <code>ConversationPbxQueue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('announce_queue_position'))
        obj.announce_queue_position = ApiClient.convertToType(data['announce_queue_position'], 'Boolean');
      if (data.hasOwnProperty('conversation_pbx_queue_uuid'))
        obj.conversation_pbx_queue_uuid = ApiClient.convertToType(data['conversation_pbx_queue_uuid'], 'String');
      if (data.hasOwnProperty('conversation_voicemail_mailbox_uuid'))
        obj.conversation_voicemail_mailbox_uuid = ApiClient.convertToType(data['conversation_voicemail_mailbox_uuid'], 'String');
      if (data.hasOwnProperty('hold_conversation_pbx_audio_uuid'))
        obj.hold_conversation_pbx_audio_uuid = ApiClient.convertToType(data['hold_conversation_pbx_audio_uuid'], 'String');
      if (data.hasOwnProperty('max_hold_seconds'))
        obj.max_hold_seconds = ApiClient.convertToType(data['max_hold_seconds'], 'Number');
      if (data.hasOwnProperty('members'))
        obj.members = ConversationPbxQueueMembers.constructFromObject(data['members']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('no_agent_available_play_audio_uuid'))
        obj.no_agent_available_play_audio_uuid = ApiClient.convertToType(data['no_agent_available_play_audio_uuid'], 'String');
      if (data.hasOwnProperty('no_agent_available_say'))
        obj.no_agent_available_say = ApiClient.convertToType(data['no_agent_available_say'], 'String');
      if (data.hasOwnProperty('no_agent_available_say_voice'))
        obj.no_agent_available_say_voice = ApiClient.convertToType(data['no_agent_available_say_voice'], 'String');
      if (data.hasOwnProperty('play_audio_uuid'))
        obj.play_audio_uuid = ApiClient.convertToType(data['play_audio_uuid'], 'String');
      if (data.hasOwnProperty('record_call'))
        obj.record_call = ApiClient.convertToType(data['record_call'], 'Boolean');
      if (data.hasOwnProperty('say'))
        obj.say = ApiClient.convertToType(data['say'], 'String');
      if (data.hasOwnProperty('say_voice'))
        obj.say_voice = ApiClient.convertToType(data['say_voice'], 'String');
      if (data.hasOwnProperty('twilio_taskrouter_workflow_sid'))
        obj.twilio_taskrouter_workflow_sid = ApiClient.convertToType(data['twilio_taskrouter_workflow_sid'], 'String');
      if (data.hasOwnProperty('twilio_workspace_queue_sid'))
        obj.twilio_workspace_queue_sid = ApiClient.convertToType(data['twilio_workspace_queue_sid'], 'String');
      if (data.hasOwnProperty('voicemail'))
        obj.voicemail = ApiClient.convertToType(data['voicemail'], 'Boolean');
      if (data.hasOwnProperty('wait_critical_seconds'))
        obj.wait_critical_seconds = ApiClient.convertToType(data['wait_critical_seconds'], 'Number');
      if (data.hasOwnProperty('wait_warning_seconds'))
        obj.wait_warning_seconds = ApiClient.convertToType(data['wait_warning_seconds'], 'Number');
      if (data.hasOwnProperty('wrap_up_seconds'))
        obj.wrap_up_seconds = ApiClient.convertToType(data['wrap_up_seconds'], 'Number');
    }
    return obj;
  }

  /**
   * If true, the customer is told their queue position upon entering the queue
   * @member {Boolean} announce_queue_position
   */
  exports.prototype.announce_queue_position = undefined;

  /**
   * Conversation Pbx Queue unique identifier
   * @member {String} conversation_pbx_queue_uuid
   */
  exports.prototype.conversation_pbx_queue_uuid = undefined;

  /**
   * The voicemail mailbox associated with this queue
   * @member {String} conversation_voicemail_mailbox_uuid
   */
  exports.prototype.conversation_voicemail_mailbox_uuid = undefined;

  /**
   * The audio to play while holding in a queue
   * @member {String} hold_conversation_pbx_audio_uuid
   */
  exports.prototype.hold_conversation_pbx_audio_uuid = undefined;

  /**
   * The maximum number of seconds for a customer to hold in a queue
   * @member {Number} max_hold_seconds
   */
  exports.prototype.max_hold_seconds = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationPbxQueueMembers} members
   */
  exports.prototype.members = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of queue
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * When no agent is available after the max_hold_seconds, say this
   * @member {String} no_agent_available_play_audio_uuid
   */
  exports.prototype.no_agent_available_play_audio_uuid = undefined;

  /**
   * When no agent is available after the max_hold_seconds, say this
   * @member {String} no_agent_available_say
   */
  exports.prototype.no_agent_available_say = undefined;

  /**
   * The type of voice used to say text when no agent is available
   * @member {String} no_agent_available_say_voice
   */
  exports.prototype.no_agent_available_say_voice = undefined;

  /**
   * Audio played when customer enters a queue
   * @member {String} play_audio_uuid
   */
  exports.prototype.play_audio_uuid = undefined;

  /**
   * If true, any calls in this queue are recorded
   * @member {Boolean} record_call
   */
  exports.prototype.record_call = undefined;

  /**
   * Say text when a customer enters queue
   * @member {String} say
   */
  exports.prototype.say = undefined;

  /**
   * The type of voice to use when say text is spoken
   * @member {String} say_voice
   */
  exports.prototype.say_voice = undefined;

  /**
   * Twilio taskrouter workflow sid
   * @member {String} twilio_taskrouter_workflow_sid
   */
  exports.prototype.twilio_taskrouter_workflow_sid = undefined;

  /**
   * Twilio workspace queue sid
   * @member {String} twilio_workspace_queue_sid
   */
  exports.prototype.twilio_workspace_queue_sid = undefined;

  /**
   * If true, this queue has a voicemail associated with it
   * @member {Boolean} voicemail
   */
  exports.prototype.voicemail = undefined;

  /**
   * Wait time in seconds before critical
   * @member {Number} wait_critical_seconds
   */
  exports.prototype.wait_critical_seconds = undefined;

  /**
   * Wait time in seconds before warning
   * @member {Number} wait_warning_seconds
   */
  exports.prototype.wait_warning_seconds = undefined;

  /**
   * Wrap up time in seconds
   * @member {Number} wrap_up_seconds
   */
  exports.prototype.wrap_up_seconds = undefined;

  return exports;

}));
