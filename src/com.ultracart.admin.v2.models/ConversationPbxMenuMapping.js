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
    root.UltraCartRestApiV2.ConversationPbxMenuMapping = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxMenuMapping model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxMenuMapping
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationPbxMenuMapping</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxMenuMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping} The populated <code>ConversationPbxMenuMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('action_target'))
        obj.action_target = ApiClient.convertToType(data['action_target'], 'String');
      if (data.hasOwnProperty('digits'))
        obj.digits = ApiClient.convertToType(data['digits'], 'Number');
      if (data.hasOwnProperty('speech'))
        obj.speech = ApiClient.convertToType(data['speech'], 'String');
    }
    return obj;
  }

  /**
   * Action
   * @member {module:com.ultracart.admin.v2.models/ConversationPbxMenuMapping.ActionEnum} action
   */
  exports.prototype.action = undefined;

  /**
   * Action target.  This is the UUID associated with the configuration object of that particular type.
   * @member {String} action_target
   */
  exports.prototype.action_target = undefined;

  /**
   * Digits
   * @member {Number} digits
   */
  exports.prototype.digits = undefined;

  /**
   * Speech
   * @member {String} speech
   */
  exports.prototype.speech = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "time based"
     * @const
     */
    time_based: "time based",

    /**
     * value: "menu"
     * @const
     */
    menu: "menu",

    /**
     * value: "queue"
     * @const
     */
    queue: "queue",

    /**
     * value: "voicemail"
     * @const
     */
    voicemail: "voicemail",

    /**
     * value: "agent"
     * @const
     */
    agent: "agent"
  };

  return exports;

}));
