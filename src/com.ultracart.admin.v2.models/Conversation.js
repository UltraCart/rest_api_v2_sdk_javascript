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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationMessage', 'com.ultracart.admin.v2.models/ConversationParticipant', 'com.ultracart.admin.v2.models/ConversationSentiment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationMessage'), require('./ConversationParticipant'), require('./ConversationSentiment'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Conversation = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationMessage, root.UltraCartRestApiV2.ConversationParticipant, root.UltraCartRestApiV2.ConversationSentiment);
  }
}(this, function(ApiClient, ConversationMessage, ConversationParticipant, ConversationSentiment) {
  'use strict';

  /**
   * The Conversation model module.
   * @module com.ultracart.admin.v2.models/Conversation
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>Conversation</code>.
   * @alias module:com.ultracart.admin.v2.models/Conversation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Conversation} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Conversation} The populated <code>Conversation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('base_language_iso_code'))
        obj.base_language_iso_code = ApiClient.convertToType(data['base_language_iso_code'], 'String');
      if (data.hasOwnProperty('closed'))
        obj.closed = ApiClient.convertToType(data['closed'], 'Boolean');
      if (data.hasOwnProperty('conversation_arn'))
        obj.conversation_arn = ApiClient.convertToType(data['conversation_arn'], 'String');
      if (data.hasOwnProperty('conversation_uuid'))
        obj.conversation_uuid = ApiClient.convertToType(data['conversation_uuid'], 'String');
      if (data.hasOwnProperty('customer_first_message_unresponded_to_dts'))
        obj.customer_first_message_unresponded_to_dts = ApiClient.convertToType(data['customer_first_message_unresponded_to_dts'], 'String');
      if (data.hasOwnProperty('last_conversation_message_body'))
        obj.last_conversation_message_body = ApiClient.convertToType(data['last_conversation_message_body'], 'String');
      if (data.hasOwnProperty('last_conversation_participant_arn'))
        obj.last_conversation_participant_arn = ApiClient.convertToType(data['last_conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('last_conversation_participant_name'))
        obj.last_conversation_participant_name = ApiClient.convertToType(data['last_conversation_participant_name'], 'String');
      if (data.hasOwnProperty('last_interactive_message_dts'))
        obj.last_interactive_message_dts = ApiClient.convertToType(data['last_interactive_message_dts'], 'String');
      if (data.hasOwnProperty('last_message_dts'))
        obj.last_message_dts = ApiClient.convertToType(data['last_message_dts'], 'String');
      if (data.hasOwnProperty('medium'))
        obj.medium = ApiClient.convertToType(data['medium'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('message_count'))
        obj.message_count = ApiClient.convertToType(data['message_count'], 'Number');
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], [ConversationMessage]);
      if (data.hasOwnProperty('participants'))
        obj.participants = ApiClient.convertToType(data['participants'], [ConversationParticipant]);
      if (data.hasOwnProperty('sentiment'))
        obj.sentiment = ConversationSentiment.constructFromObject(data['sentiment']);
      if (data.hasOwnProperty('start_dts'))
        obj.start_dts = ApiClient.convertToType(data['start_dts'], 'String');
      if (data.hasOwnProperty('unread_messages'))
        obj.unread_messages = ApiClient.convertToType(data['unread_messages'], 'Boolean');
      if (data.hasOwnProperty('visible'))
        obj.visible = ApiClient.convertToType(data['visible'], 'Boolean');
    }
    return obj;
  }

  /**
   * The base language iso code for the StoreFront that everything is translated into
   * @member {String} base_language_iso_code
   */
  exports.prototype.base_language_iso_code = undefined;

  /**
   * @member {Boolean} closed
   */
  exports.prototype.closed = undefined;

  /**
   * @member {String} conversation_arn
   */
  exports.prototype.conversation_arn = undefined;

  /**
   * @member {String} conversation_uuid
   */
  exports.prototype.conversation_uuid = undefined;

  /**
   * Date/time of the first customer message that is unresponded to.
   * @member {String} customer_first_message_unresponded_to_dts
   */
  exports.prototype.customer_first_message_unresponded_to_dts = undefined;

  /**
   * @member {String} last_conversation_message_body
   */
  exports.prototype.last_conversation_message_body = undefined;

  /**
   * @member {String} last_conversation_participant_arn
   */
  exports.prototype.last_conversation_participant_arn = undefined;

  /**
   * @member {String} last_conversation_participant_name
   */
  exports.prototype.last_conversation_participant_name = undefined;

  /**
   * Last interactive message date/time
   * @member {String} last_interactive_message_dts
   */
  exports.prototype.last_interactive_message_dts = undefined;

  /**
   * Last message date/time
   * @member {String} last_message_dts
   */
  exports.prototype.last_message_dts = undefined;

  /**
   * The communication medium of the customer.
   * @member {module:com.ultracart.admin.v2.models/Conversation.MediumEnum} medium
   */
  exports.prototype.medium = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {Number} message_count
   */
  exports.prototype.message_count = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessage>} messages
   */
  exports.prototype.messages = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationParticipant>} participants
   */
  exports.prototype.participants = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationSentiment} sentiment
   */
  exports.prototype.sentiment = undefined;

  /**
   * Start of the conversation date/time
   * @member {String} start_dts
   */
  exports.prototype.start_dts = undefined;

  /**
   * @member {Boolean} unread_messages
   */
  exports.prototype.unread_messages = undefined;

  /**
   * @member {Boolean} visible
   */
  exports.prototype.visible = undefined;


  /**
   * Allowed values for the <code>medium</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MediumEnum = {
    /**
     * value: "sms"
     * @const
     */
    sms: "sms",

    /**
     * value: "websocket"
     * @const
     */
    websocket: "websocket"
  };

  return exports;

}));
