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
    root.UltraCartRestApiV2.ConversationPbxVoicemailMailbox = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxVoicemailMailbox model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox
   * @version 3.10.205
   */

  /**
   * Constructs a new <code>ConversationPbxVoicemailMailbox</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxVoicemailMailbox</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox} The populated <code>ConversationPbxVoicemailMailbox</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_pbx_voicemail_mailbox_uuid'))
        obj.conversation_pbx_voicemail_mailbox_uuid = ApiClient.convertToType(data['conversation_pbx_voicemail_mailbox_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('send_notices_to_email'))
        obj.send_notices_to_email = ApiClient.convertToType(data['send_notices_to_email'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
      if (data.hasOwnProperty('voicemail_followup_play_audio_uuid'))
        obj.voicemail_followup_play_audio_uuid = ApiClient.convertToType(data['voicemail_followup_play_audio_uuid'], 'String');
      if (data.hasOwnProperty('voicemail_followup_say'))
        obj.voicemail_followup_say = ApiClient.convertToType(data['voicemail_followup_say'], 'String');
      if (data.hasOwnProperty('voicemail_followup_say_voice'))
        obj.voicemail_followup_say_voice = ApiClient.convertToType(data['voicemail_followup_say_voice'], 'String');
      if (data.hasOwnProperty('voicemail_mailbox_id'))
        obj.voicemail_mailbox_id = ApiClient.convertToType(data['voicemail_mailbox_id'], 'String');
      if (data.hasOwnProperty('voicemail_mailbox_type'))
        obj.voicemail_mailbox_type = ApiClient.convertToType(data['voicemail_mailbox_type'], 'String');
      if (data.hasOwnProperty('voicemail_prompt_play_audio_uuid'))
        obj.voicemail_prompt_play_audio_uuid = ApiClient.convertToType(data['voicemail_prompt_play_audio_uuid'], 'String');
      if (data.hasOwnProperty('voicemail_prompt_say'))
        obj.voicemail_prompt_say = ApiClient.convertToType(data['voicemail_prompt_say'], 'String');
      if (data.hasOwnProperty('voicemail_prompt_say_voice'))
        obj.voicemail_prompt_say_voice = ApiClient.convertToType(data['voicemail_prompt_say_voice'], 'String');
    }
    return obj;
  }

  /**
   * Conversation Pbx Voicemail Mailbox UUID
   * @member {String} conversation_pbx_voicemail_mailbox_uuid
   */
  exports.prototype.conversation_pbx_voicemail_mailbox_uuid = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Send notices to email
   * @member {String} send_notices_to_email
   */
  exports.prototype.send_notices_to_email = undefined;

  /**
   * User Id
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  /**
   * Voicemail follow play audio UUID
   * @member {String} voicemail_followup_play_audio_uuid
   */
  exports.prototype.voicemail_followup_play_audio_uuid = undefined;

  /**
   * Voicemail followup say
   * @member {String} voicemail_followup_say
   */
  exports.prototype.voicemail_followup_say = undefined;

  /**
   * Voicemail followup say voice
   * @member {String} voicemail_followup_say_voice
   */
  exports.prototype.voicemail_followup_say_voice = undefined;

  /**
   * Voicemail mailbox id
   * @member {String} voicemail_mailbox_id
   */
  exports.prototype.voicemail_mailbox_id = undefined;

  /**
   * Voicemail mailbox type
   * @member {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMailbox.VoicemailMailboxTypeEnum} voicemail_mailbox_type
   */
  exports.prototype.voicemail_mailbox_type = undefined;

  /**
   * Voicemail prompt play audio UUID
   * @member {String} voicemail_prompt_play_audio_uuid
   */
  exports.prototype.voicemail_prompt_play_audio_uuid = undefined;

  /**
   * Voicemail prompt say
   * @member {String} voicemail_prompt_say
   */
  exports.prototype.voicemail_prompt_say = undefined;

  /**
   * Voicemail prompt say voice
   * @member {String} voicemail_prompt_say_voice
   */
  exports.prototype.voicemail_prompt_say_voice = undefined;


  /**
   * Allowed values for the <code>voicemail_mailbox_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VoicemailMailboxTypeEnum = {
    /**
     * value: "agent"
     * @const
     */
    agent: "agent",

    /**
     * value: "shared"
     * @const
     */
    shared: "shared"
  };

  return exports;

}));
