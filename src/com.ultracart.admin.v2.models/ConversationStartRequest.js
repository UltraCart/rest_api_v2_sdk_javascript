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
    root.UltraCartRestApiV2.ConversationStartRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationStartRequest model module.
   * @module com.ultracart.admin.v2.models/ConversationStartRequest
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationStartRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationStartRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationStartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationStartRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationStartRequest} The populated <code>ConversationStartRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('add_conversation_participant_arns'))
        obj.add_conversation_participant_arns = ApiClient.convertToType(data['add_conversation_participant_arns'], ['String']);
      if (data.hasOwnProperty('conversation_arn'))
        obj.conversation_arn = ApiClient.convertToType(data['conversation_arn'], 'String');
      if (data.hasOwnProperty('conversation_webchat_queue_uuid'))
        obj.conversation_webchat_queue_uuid = ApiClient.convertToType(data['conversation_webchat_queue_uuid'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<String>} add_conversation_participant_arns
   */
  exports.prototype.add_conversation_participant_arns = undefined;

  /**
   * @member {String} conversation_arn
   */
  exports.prototype.conversation_arn = undefined;

  /**
   * @member {String} conversation_webchat_queue_uuid
   */
  exports.prototype.conversation_webchat_queue_uuid = undefined;

  return exports;

}));
