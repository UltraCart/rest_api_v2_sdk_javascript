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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationTwilioAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationTwilioAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationAgentAuth = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationTwilioAccount);
  }
}(this, function(ApiClient, ConversationTwilioAccount) {
  'use strict';

  /**
   * The ConversationAgentAuth model module.
   * @module com.ultracart.admin.v2.models/ConversationAgentAuth
   * @version 3.10.149
   */

  /**
   * Constructs a new <code>ConversationAgentAuth</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationAgentAuth
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationAgentAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuth} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationAgentAuth} The populated <code>ConversationAgentAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_participant_arn'))
        obj.conversation_participant_arn = ApiClient.convertToType(data['conversation_participant_arn'], 'String');
      if (data.hasOwnProperty('conversation_participant_name'))
        obj.conversation_participant_name = ApiClient.convertToType(data['conversation_participant_name'], 'String');
      if (data.hasOwnProperty('jwt'))
        obj.jwt = ApiClient.convertToType(data['jwt'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('twilio_accounts'))
        obj.twilio_accounts = ApiClient.convertToType(data['twilio_accounts'], [ConversationTwilioAccount]);
      if (data.hasOwnProperty('websocket_url'))
        obj.websocket_url = ApiClient.convertToType(data['websocket_url'], 'String');
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
   * @member {String} jwt
   */
  exports.prototype.jwt = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationTwilioAccount>} twilio_accounts
   */
  exports.prototype.twilio_accounts = undefined;

  /**
   * @member {String} websocket_url
   */
  exports.prototype.websocket_url = undefined;

  return exports;

}));
