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
    root.UltraCartRestApiV2.ConversationPbxPhoneNumber = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxPhoneNumber model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxPhoneNumber
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>ConversationPbxPhoneNumber</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumber
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxPhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumber} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxPhoneNumber} The populated <code>ConversationPbxPhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('action_target'))
        obj.action_target = ApiClient.convertToType(data['action_target'], 'String');
      if (data.hasOwnProperty('conversation_pbx_time_range_uuid'))
        obj.conversation_pbx_time_range_uuid = ApiClient.convertToType(data['conversation_pbx_time_range_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phone_number = ApiClient.convertToType(data['phone_number'], 'String');
    }
    return obj;
  }

  /**
   * Action
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * Action target
   * @member {String} action_target
   */
  exports.prototype.action_target = undefined;

  /**
   * Conversation Pbx Phone Number UUID
   * @member {String} conversation_pbx_time_range_uuid
   */
  exports.prototype.conversation_pbx_time_range_uuid = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Phone number
   * @member {String} phone_number
   */
  exports.prototype.phone_number = undefined;

  return exports;

}));
