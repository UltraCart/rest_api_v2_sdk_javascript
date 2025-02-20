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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationPbxTimeBasedMappingConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationPbxTimeBased = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationPbxTimeBasedMappingConfig);
  }
}(this, function(ApiClient, ConversationPbxTimeBasedMappingConfig) {
  'use strict';

  /**
   * The ConversationPbxTimeBased model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxTimeBased
   * @version 3.10.226
   */

  /**
   * Constructs a new <code>ConversationPbxTimeBased</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeBased
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxTimeBased</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeBased} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeBased} The populated <code>ConversationPbxTimeBased</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_pbx_time_based_uuid'))
        obj.conversation_pbx_time_based_uuid = ApiClient.convertToType(data['conversation_pbx_time_based_uuid'], 'String');
      if (data.hasOwnProperty('mapping_config'))
        obj.mapping_config = ConversationPbxTimeBasedMappingConfig.constructFromObject(data['mapping_config']);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('time_based_name'))
        obj.time_based_name = ApiClient.convertToType(data['time_based_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} conversation_pbx_time_based_uuid
   */
  exports.prototype.conversation_pbx_time_based_uuid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationPbxTimeBasedMappingConfig} mapping_config
   */
  exports.prototype.mapping_config = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {String} time_based_name
   */
  exports.prototype.time_based_name = undefined;

  return exports;

}));
