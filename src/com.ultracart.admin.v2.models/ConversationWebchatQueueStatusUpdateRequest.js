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
    root.UltraCartRestApiV2.ConversationWebchatQueueStatusUpdateRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationWebchatQueueStatusUpdateRequest model module.
   * @module com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>ConversationWebchatQueueStatusUpdateRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationWebchatQueueStatusUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} The populated <code>ConversationWebchatQueueStatusUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agent_status'))
        obj.agent_status = ApiClient.convertToType(data['agent_status'], 'String');
    }
    return obj;
  }

  /**
   * Status of the agent
   * @member {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest.AgentStatusEnum} agent_status
   */
  exports.prototype.agent_status = undefined;


  /**
   * Allowed values for the <code>agent_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AgentStatusEnum = {
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
