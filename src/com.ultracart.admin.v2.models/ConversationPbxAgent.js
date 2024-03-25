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
    root.UltraCartRestApiV2.ConversationPbxAgent = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxAgent model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxAgent
   * @version 3.10.189
   */

  /**
   * Constructs a new <code>ConversationPbxAgent</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxAgent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxAgent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxAgent} The populated <code>ConversationPbxAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cellphone'))
        obj.cellphone = ApiClient.convertToType(data['cellphone'], 'String');
      if (data.hasOwnProperty('conversation_pbx_agent_uuid'))
        obj.conversation_pbx_agent_uuid = ApiClient.convertToType(data['conversation_pbx_agent_uuid'], 'String');
      if (data.hasOwnProperty('conversation_pbx_voicemail_mailbox_uuid'))
        obj.conversation_pbx_voicemail_mailbox_uuid = ApiClient.convertToType(data['conversation_pbx_voicemail_mailbox_uuid'], 'String');
      if (data.hasOwnProperty('forward_calls_to_cellphone'))
        obj.forward_calls_to_cellphone = ApiClient.convertToType(data['forward_calls_to_cellphone'], 'Boolean');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('record_outgoing_automatically'))
        obj.record_outgoing_automatically = ApiClient.convertToType(data['record_outgoing_automatically'], 'Boolean');
      if (data.hasOwnProperty('twilio_taskrouter_worker_id'))
        obj.twilio_taskrouter_worker_id = ApiClient.convertToType(data['twilio_taskrouter_worker_id'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
      if (data.hasOwnProperty('voicemail'))
        obj.voicemail = ApiClient.convertToType(data['voicemail'], 'Boolean');
    }
    return obj;
  }

  /**
   * Cellphone number of agent in E.164 format
   * @member {String} cellphone
   */
  exports.prototype.cellphone = undefined;

  /**
   * Conversation Pbx Agent unique identifier
   * @member {String} conversation_pbx_agent_uuid
   */
  exports.prototype.conversation_pbx_agent_uuid = undefined;

  /**
   * Conversation Pbx Voicemail Mailbox UUID
   * @member {String} conversation_pbx_voicemail_mailbox_uuid
   */
  exports.prototype.conversation_pbx_voicemail_mailbox_uuid = undefined;

  /**
   * True if calls to this agent should be forwarded to their cellphone
   * @member {Boolean} forward_calls_to_cellphone
   */
  exports.prototype.forward_calls_to_cellphone = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * True if outgoing calls should be automatically recorded
   * @member {Boolean} record_outgoing_automatically
   */
  exports.prototype.record_outgoing_automatically = undefined;

  /**
   * Twilio taskrouter worker Id
   * @member {String} twilio_taskrouter_worker_id
   */
  exports.prototype.twilio_taskrouter_worker_id = undefined;

  /**
   * User Id
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  /**
   * True if this agent has voicemail configured
   * @member {Boolean} voicemail
   */
  exports.prototype.voicemail = undefined;

  return exports;

}));
