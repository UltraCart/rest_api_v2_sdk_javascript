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
    root.UltraCartRestApiV2.ConversationParticipant = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationParticipant model module.
   * @module com.ultracart.admin.v2.models/ConversationParticipant
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>ConversationParticipant</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationParticipant
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationParticipant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationParticipant} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationParticipant} The populated <code>ConversationParticipant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_participant_arn'))
        obj.conversation_participant_arn = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('conversation_participant_name'))
        obj.conversation_participant_name = ApiClient.convertToType(data['conversation_participant_name'], 'String');
      if (data.hasOwnProperty('conversation_participant_uuid'))
        obj.conversation_participant_uuid = ApiClient.convertToType(data['conversation_participant_uuid'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('joined_dts'))
        obj.joined_dts = ApiClient.convertToType(data['joined_dts'], 'String');
      if (data.hasOwnProperty('language_iso_code'))
        obj.language_iso_code = ApiClient.convertToType(data['language_iso_code'], 'String');
      if (data.hasOwnProperty('last_message_dts'))
        obj.last_message_dts = ApiClient.convertToType(data['last_message_dts'], 'String');
      if (data.hasOwnProperty('left_dts'))
        obj.left_dts = ApiClient.convertToType(data['left_dts'], 'String');
      if (data.hasOwnProperty('profile_image_url'))
        obj.profile_image_url = ApiClient.convertToType(data['profile_image_url'], 'String');
      if (data.hasOwnProperty('sms_phone_number'))
        obj.sms_phone_number = ApiClient.convertToType(data['sms_phone_number'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('unread_messages'))
        obj.unread_messages = ApiClient.convertToType(data['unread_messages'], 'Number');
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
   * @member {String} conversation_participant_uuid
   */
  exports.prototype.conversation_participant_uuid = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Joined conversation date/time
   * @member {String} joined_dts
   */
  exports.prototype.joined_dts = undefined;

  /**
   * @member {String} language_iso_code
   */
  exports.prototype.language_iso_code = undefined;

  /**
   * Last message date/time
   * @member {String} last_message_dts
   */
  exports.prototype.last_message_dts = undefined;

  /**
   * Left conversation date/time
   * @member {String} left_dts
   */
  exports.prototype.left_dts = undefined;

  /**
   * @member {String} profile_image_url
   */
  exports.prototype.profile_image_url = undefined;

  /**
   * @member {String} sms_phone_number
   */
  exports.prototype.sms_phone_number = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * @member {Number} unread_messages
   */
  exports.prototype.unread_messages = undefined;

  return exports;

}));
