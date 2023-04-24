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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationSearchResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationSummary);
  }
}(this, function(ApiClient, ConversationSummary) {
  'use strict';

  /**
   * The ConversationSearchResponse model module.
   * @module com.ultracart.admin.v2.models/ConversationSearchResponse
   * @version 3.10.134
   */

  /**
   * Constructs a new <code>ConversationSearchResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSearchResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationSearchResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationSearchResponse} The populated <code>ConversationSearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('range_begin'))
        obj.range_begin = ApiClient.convertToType(data['range_begin'], 'Number');
      if (data.hasOwnProperty('range_end'))
        obj.range_end = ApiClient.convertToType(data['range_end'], 'Number');
      if (data.hasOwnProperty('records'))
        obj.records = ApiClient.convertToType(data['records'], [ConversationSummary]);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} range_begin
   */
  exports.prototype.range_begin = undefined;

  /**
   * @member {Number} range_end
   */
  exports.prototype.range_end = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationSummary>} records
   */
  exports.prototype.records = undefined;

  /**
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  return exports;

}));
