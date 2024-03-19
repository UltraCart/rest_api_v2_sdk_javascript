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
    root.UltraCartRestApiV2.ConversationWebchatQueueStatusQueueEntry = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationWebchatQueueStatusQueueEntry model module.
   * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>ConversationWebchatQueueStatusQueueEntry</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebchatQueueStatusQueueEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusQueueEntry} The populated <code>ConversationWebchatQueueStatusQueueEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_participant_arn'))
        obj.conversation_participant_arn = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('conversation_participant_name'))
        obj.conversation_participant_name = ApiClient.convertToType(data['conversation_participant_name'], 'String');
      if (data.hasOwnProperty('conversation_webchat_queue_uuid'))
        obj.conversation_webchat_queue_uuid = ApiClient.convertToType(data['conversation_webchat_queue_uuid'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('join_dts'))
        obj.join_dts = ApiClient.convertToType(data['join_dts'], 'String');
      if (data.hasOwnProperty('participant_language_iso_code'))
        obj.participant_language_iso_code = ApiClient.convertToType(data['participant_language_iso_code'], 'String');
      if (data.hasOwnProperty('question'))
        obj.question = ApiClient.convertToType(data['question'], 'String');
      if (data.hasOwnProperty('queue_name'))
        obj.queue_name = ApiClient.convertToType(data['queue_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} conversation_participant_arn
   */
  exports.prototype.conversation_participant_arn = undefined;

  /**
   * @member {String} conversation_participant_name
   */
  exports.prototype.conversation_participant_name = undefined;

  /**
   * @member {String} conversation_webchat_queue_uuid
   */
  exports.prototype.conversation_webchat_queue_uuid = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Date/time the customer joined the queue
   * @member {String} join_dts
   */
  exports.prototype.join_dts = undefined;

  /**
   * @member {String} participant_language_iso_code
   */
  exports.prototype.participant_language_iso_code = undefined;

  /**
   * @member {String} question
   */
  exports.prototype.question = undefined;

  /**
   * @member {String} queue_name
   */
  exports.prototype.queue_name = undefined;

  return exports;

}));
