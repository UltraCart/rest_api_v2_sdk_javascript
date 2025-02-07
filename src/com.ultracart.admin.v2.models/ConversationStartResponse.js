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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Conversation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Conversation'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationStartResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Conversation);
  }
}(this, function(ApiClient, Conversation) {
  'use strict';

  /**
   * The ConversationStartResponse model module.
   * @module com.ultracart.admin.v2.models/ConversationStartResponse
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>ConversationStartResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationStartResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationStartResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationStartResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationStartResponse} The populated <code>ConversationStartResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation'))
        obj.conversation = Conversation.constructFromObject(data['conversation']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/Conversation} conversation
   */
  exports.prototype.conversation = undefined;

  return exports;

}));
