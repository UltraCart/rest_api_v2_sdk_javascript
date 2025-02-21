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
    root.UltraCartRestApiV2.ConversationPbxVoicemailMessage = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxVoicemailMessage model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage
   * @version 3.11.0
   */

  /**
   * Constructs a new <code>ConversationPbxVoicemailMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxVoicemailMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage} The populated <code>ConversationPbxVoicemailMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('call_sid'))
        obj.call_sid = ApiClient.convertToType(data['call_sid'], 'String');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('from'))
        obj.from = ApiClient.convertToType(data['from'], 'String');
      if (data.hasOwnProperty('from_caller_id'))
        obj.from_caller_id = ApiClient.convertToType(data['from_caller_id'], 'String');
      if (data.hasOwnProperty('listened'))
        obj.listened = ApiClient.convertToType(data['listened'], 'Boolean');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('recording_sid'))
        obj.recording_sid = ApiClient.convertToType(data['recording_sid'], 'String');
      if (data.hasOwnProperty('recording_size_bytes'))
        obj.recording_size_bytes = ApiClient.convertToType(data['recording_size_bytes'], 'Number');
      if (data.hasOwnProperty('recording_status'))
        obj.recording_status = ApiClient.convertToType(data['recording_status'], 'String');
      if (data.hasOwnProperty('recording_url'))
        obj.recording_url = ApiClient.convertToType(data['recording_url'], 'String');
      if (data.hasOwnProperty('transcript_json'))
        obj.transcript_json = ApiClient.convertToType(data['transcript_json'], 'String');
      if (data.hasOwnProperty('transcript_text'))
        obj.transcript_text = ApiClient.convertToType(data['transcript_text'], 'String');
      if (data.hasOwnProperty('voicemail_dts'))
        obj.voicemail_dts = ApiClient.convertToType(data['voicemail_dts'], 'String');
    }
    return obj;
  }

  /**
   * Call SID
   * @member {String} call_sid
   */
  exports.prototype.call_sid = undefined;

  /**
   * Duration in seconds
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * From phone number in E.164
   * @member {String} from
   */
  exports.prototype.from = undefined;

  /**
   * From caller id (if available)
   * @member {String} from_caller_id
   */
  exports.prototype.from_caller_id = undefined;

  /**
   * True if the voicemail has been listened to in the user interface
   * @member {Boolean} listened
   */
  exports.prototype.listened = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Recording SID
   * @member {String} recording_sid
   */
  exports.prototype.recording_sid = undefined;

  /**
   * Recording size in bytes
   * @member {Number} recording_size_bytes
   */
  exports.prototype.recording_size_bytes = undefined;

  /**
   * Recording Status
   * @member {module:com.ultracart.admin.v2.models/ConversationPbxVoicemailMessage.RecordingStatusEnum} recording_status
   */
  exports.prototype.recording_status = undefined;

  /**
   * Recording URL (expires in 4 hours)
   * @member {String} recording_url
   */
  exports.prototype.recording_url = undefined;

  /**
   * JSON version of the transcript
   * @member {String} transcript_json
   */
  exports.prototype.transcript_json = undefined;

  /**
   * Formatted text of the transcript
   * @member {String} transcript_text
   */
  exports.prototype.transcript_text = undefined;

  /**
   * Voicemail date/time
   * @member {String} voicemail_dts
   */
  exports.prototype.voicemail_dts = undefined;


  /**
   * Allowed values for the <code>recording_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecordingStatusEnum = {
    /**
     * value: "completed"
     * @const
     */
    completed: "completed"
  };

  return exports;

}));
