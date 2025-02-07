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
    root.UltraCartRestApiV2.ConversationAgentProfile = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationAgentProfile model module.
   * @module com.ultracart.admin.v2.models/ConversationAgentProfile
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationAgentProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationAgentProfile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationAgentProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationAgentProfile} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationAgentProfile} The populated <code>ConversationAgentProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chat_limit'))
        obj.chat_limit = ApiClient.convertToType(data['chat_limit'], 'Number');
      if (data.hasOwnProperty('default_language_iso_code'))
        obj.default_language_iso_code = ApiClient.convertToType(data['default_language_iso_code'], 'String');
      if (data.hasOwnProperty('default_status'))
        obj.default_status = ApiClient.convertToType(data['default_status'], 'String');
      if (data.hasOwnProperty('display_name'))
        obj.display_name = ApiClient.convertToType(data['display_name'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('profile_image_upload_key'))
        obj.profile_image_upload_key = ApiClient.convertToType(data['profile_image_upload_key'], 'String');
      if (data.hasOwnProperty('profile_image_url'))
        obj.profile_image_url = ApiClient.convertToType(data['profile_image_url'], 'String');
    }
    return obj;
  }

  /**
   * The number of engagement chats that can be pushed on them at any given time.
   * @member {Number} chat_limit
   */
  exports.prototype.chat_limit = undefined;

  /**
   * The default language the agent is chatting in
   * @member {String} default_language_iso_code
   */
  exports.prototype.default_language_iso_code = undefined;

  /**
   * Default status when the agent loads conversations app.
   * @member {module:com.ultracart.admin.v2.models/ConversationAgentProfile.DefaultStatusEnum} default_status
   */
  exports.prototype.default_status = undefined;

  /**
   * An alternate name that the agent wants to use in chat.
   * @member {String} display_name
   */
  exports.prototype.display_name = undefined;

  /**
   * Their actual user name for profile settings display as placeholder test
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * An upload key used to update the profile image.
   * @member {String} profile_image_upload_key
   */
  exports.prototype.profile_image_upload_key = undefined;

  /**
   * Their current profile image URL
   * @member {String} profile_image_url
   */
  exports.prototype.profile_image_url = undefined;


  /**
   * Allowed values for the <code>default_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DefaultStatusEnum = {
    /**
     * value: "available"
     * @const
     */
    available: "available",

    /**
     * value: "busy"
     * @const
     */
    busy: "busy",

    /**
     * value: "unavailable"
     * @const
     */
    unavailable: "unavailable"
  };

  return exports;

}));
