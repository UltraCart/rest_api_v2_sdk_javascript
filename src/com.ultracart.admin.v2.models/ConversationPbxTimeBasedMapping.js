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
    root.UltraCartRestApiV2.ConversationPbxTimeBasedMapping = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxTimeBasedMapping model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>ConversationPbxTimeBasedMapping</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxTimeBasedMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMapping} The populated <code>ConversationPbxTimeBasedMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('action_target'))
        obj.action_target = ApiClient.convertToType(data['action_target'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('time_range_uuid'))
        obj.time_range_uuid = ApiClient.convertToType(data['time_range_uuid'], 'String');
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
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Time range UUID
   * @member {String} time_range_uuid
   */
  exports.prototype.time_range_uuid = undefined;

  return exports;

}));
