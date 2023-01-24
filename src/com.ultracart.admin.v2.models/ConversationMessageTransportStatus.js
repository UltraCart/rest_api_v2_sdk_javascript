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
    root.UltraCartRestApiV2.ConversationMessageTransportStatus = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationMessageTransportStatus model module.
   * @module com.ultracart.admin.v2.models/ConversationMessageTransportStatus
   * @version 3.10.105
   */

  /**
   * Constructs a new <code>ConversationMessageTransportStatus</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationMessageTransportStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus} The populated <code>ConversationMessageTransportStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_participant_arn'))
        obj.conversation_participant_arn = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} conversation_participant_arn
   */
  exports.prototype.conversation_participant_arn = undefined;

  /**
   * The status of the message transport
   * @member {module:com.ultracart.admin.v2.models/ConversationMessageTransportStatus.StatusEnum} status
   */
  exports.prototype.status = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "accepted"
     * @const
     */
    accepted: "accepted",

    /**
     * value: "scheduled"
     * @const
     */
    scheduled: "scheduled",

    /**
     * value: "queued"
     * @const
     */
    queued: "queued",

    /**
     * value: "sending"
     * @const
     */
    sending: "sending",

    /**
     * value: "sent"
     * @const
     */
    sent: "sent",

    /**
     * value: "read"
     * @const
     */
    read: "read",

    /**
     * value: "TWILIO_CREDENTIALS_MISSING"
     * @const
     */
    TWILIO_CREDENTIALS_MISSING: "TWILIO_CREDENTIALS_MISSING",

    /**
     * value: "SENT_TO_TWILIO"
     * @const
     */
    SENT_TO_TWILIO: "SENT_TO_TWILIO",

    /**
     * value: "TWILIO_ERROR"
     * @const
     */
    TWILIO_ERROR: "TWILIO_ERROR",

    /**
     * value: "SENT_TO_PINPOINT"
     * @const
     */
    SENT_TO_PINPOINT: "SENT_TO_PINPOINT",

    /**
     * value: "PINPOINT_ERROR"
     * @const
     */
    PINPOINT_ERROR: "PINPOINT_ERROR"
  };

  return exports;

}));
