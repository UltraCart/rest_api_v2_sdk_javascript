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
    root.UltraCartRestApiV2.ConversationCannedMessagesSearch = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationCannedMessagesSearch model module.
   * @module com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>ConversationCannedMessagesSearch</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationCannedMessagesSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} The populated <code>ConversationCannedMessagesSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('max_results'))
        obj.max_results = ApiClient.convertToType(data['max_results'], 'Number');
      if (data.hasOwnProperty('short_code'))
        obj.short_code = ApiClient.convertToType(data['short_code'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} max_results
   */
  exports.prototype.max_results = undefined;

  /**
   * @member {String} short_code
   */
  exports.prototype.short_code = undefined;

  return exports;

}));
