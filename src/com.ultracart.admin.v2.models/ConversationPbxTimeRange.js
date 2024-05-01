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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationPbxTimeRangeConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationPbxTimeRange = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationPbxTimeRangeConfig);
  }
}(this, function(ApiClient, ConversationPbxTimeRangeConfig) {
  'use strict';

  /**
   * The ConversationPbxTimeRange model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxTimeRange
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>ConversationPbxTimeRange</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeRange
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeRange} The populated <code>ConversationPbxTimeRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('configs'))
        obj.configs = ApiClient.convertToType(data['configs'], [ConversationPbxTimeRangeConfig]);
      if (data.hasOwnProperty('conversation_pbx_time_range_uuid'))
        obj.conversation_pbx_time_range_uuid = ApiClient.convertToType(data['conversation_pbx_time_range_uuid'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('time_range_name'))
        obj.time_range_name = ApiClient.convertToType(data['time_range_name'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
    }
    return obj;
  }

  /**
   * Configurations for all ranges in this time range
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig>} configs
   */
  exports.prototype.configs = undefined;

  /**
   * Conversation Pbx Time Range UUID
   * @member {String} conversation_pbx_time_range_uuid
   */
  exports.prototype.conversation_pbx_time_range_uuid = undefined;

  /**
   * Merchant Id
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Time range name
   * @member {String} time_range_name
   */
  exports.prototype.time_range_name = undefined;

  /**
   * Timezone
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  return exports;

}));
