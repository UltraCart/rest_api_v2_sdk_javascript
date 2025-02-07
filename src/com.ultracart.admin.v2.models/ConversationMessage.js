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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationMessageTranslation', 'com.ultracart.admin.v2.models/ConversationMessageTransportStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationMessageTranslation'), require('./ConversationMessageTransportStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationMessage = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationMessageTranslation, root.UltraCartRestApiV2.ConversationMessageTransportStatus);
  }
}(this, function(ApiClient, ConversationMessageTranslation, ConversationMessageTransportStatus) {
  'use strict';

  /**
   * The ConversationMessage model module.
   * @module com.ultracart.admin.v2.models/ConversationMessage
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationMessage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationMessage} The populated <code>ConversationMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('author_conversation_participant_arn'))
        obj.author_conversation_participant_arn = ApiClient.convertToType(data['author_conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('author_conversation_participant_name'))
        obj.author_conversation_participant_name = ApiClient.convertToType(data['author_conversation_participant_name'], 'String');
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('client_message_id'))
        obj.client_message_id = ApiClient.convertToType(data['client_message_id'], 'String');
      if (data.hasOwnProperty('conversation_message_uuid'))
        obj.conversation_message_uuid = ApiClient.convertToType(data['conversation_message_uuid'], 'String');
      if (data.hasOwnProperty('delay_until_dts'))
        obj.delay_until_dts = ApiClient.convertToType(data['delay_until_dts'], 'String');
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
      if (data.hasOwnProperty('media_urls'))
        obj.media_urls = ApiClient.convertToType(data['media_urls'], ['String']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('message_dts'))
        obj.message_dts = ApiClient.convertToType(data['message_dts'], 'String');
      if (data.hasOwnProperty('message_epoch'))
        obj.message_epoch = ApiClient.convertToType(data['message_epoch'], 'Number');
      if (data.hasOwnProperty('translations'))
        obj.translations = ApiClient.convertToType(data['translations'], [ConversationMessageTranslation]);
      if (data.hasOwnProperty('transport_statuses'))
        obj.transport_statuses = ApiClient.convertToType(data['transport_statuses'], [ConversationMessageTransportStatus]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('upload_keys'))
        obj.upload_keys = ApiClient.convertToType(data['upload_keys'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} author_conversation_participant_arn
   */
  exports.prototype.author_conversation_participant_arn = undefined;

  /**
   * @member {String} author_conversation_participant_name
   */
  exports.prototype.author_conversation_participant_name = undefined;

  /**
   * @member {String} body
   */
  exports.prototype.body = undefined;

  /**
   * @member {String} client_message_id
   */
  exports.prototype.client_message_id = undefined;

  /**
   * @member {String} conversation_message_uuid
   */
  exports.prototype.conversation_message_uuid = undefined;

  /**
   * Delay message transmission until date/time
   * @member {String} delay_until_dts
   */
  exports.prototype.delay_until_dts = undefined;

  /**
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * @member {Array.<String>} media_urls
   */
  exports.prototype.media_urls = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Message date/time
   * @member {String} message_dts
   */
  exports.prototype.message_dts = undefined;

  /**
   * Message epoch milliseconds
   * @member {Number} message_epoch
   */
  exports.prototype.message_epoch = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessageTranslation>} translations
   */
  exports.prototype.translations = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus>} transport_statuses
   */
  exports.prototype.transport_statuses = undefined;

  /**
   * Message type
   * @member {module:com.ultracart.admin.v2.models/ConversationMessage.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {Array.<String>} upload_keys
   */
  exports.prototype.upload_keys = undefined;


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
     * value: "notice"
     * @const
     */
    notice: "notice",

    /**
     * value: "engagement prompt"
     * @const
     */
    engagement_prompt: "engagement prompt"
  };

  return exports;

}));
