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
    root.UltraCartRestApiV2.ConversationCannedMessage = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationCannedMessage model module.
   * @module com.ultracart.admin.v2.models/ConversationCannedMessage
   * @version 3.10.144
   */

  /**
   * Constructs a new <code>ConversationCannedMessage</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationCannedMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessage} The populated <code>ConversationCannedMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('canned_message'))
        obj.canned_message = ApiClient.convertToType(data['canned_message'], 'String');
      if (data.hasOwnProperty('conversation_canned_message_oid'))
        obj.conversation_canned_message_oid = ApiClient.convertToType(data['conversation_canned_message_oid'], 'Number');
      if (data.hasOwnProperty('conversation_department_oids'))
        obj.conversation_department_oids = ApiClient.convertToType(data['conversation_department_oids'], ['Number']);
      if (data.hasOwnProperty('short_code'))
        obj.short_code = ApiClient.convertToType(data['short_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} canned_message
   */
  exports.prototype.canned_message = undefined;

  /**
   * @member {Number} conversation_canned_message_oid
   */
  exports.prototype.conversation_canned_message_oid = undefined;

  /**
   * @member {Array.<Number>} conversation_department_oids
   */
  exports.prototype.conversation_department_oids = undefined;

  /**
   * @member {String} short_code
   */
  exports.prototype.short_code = undefined;

  return exports;

}));
