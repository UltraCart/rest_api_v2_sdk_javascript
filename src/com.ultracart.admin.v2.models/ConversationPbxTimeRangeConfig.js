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
    root.UltraCartRestApiV2.ConversationPbxTimeRangeConfig = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationPbxTimeRangeConfig model module.
   * @module com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig
   * @version 3.10.192
   */

  /**
   * Constructs a new <code>ConversationPbxTimeRangeConfig</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationPbxTimeRangeConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationPbxTimeRangeConfig} The populated <code>ConversationPbxTimeRangeConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('end_date'))
        obj.end_date = ApiClient.convertToType(data['end_date'], 'String');
      if (data.hasOwnProperty('end_day_of_week'))
        obj.end_day_of_week = ApiClient.convertToType(data['end_day_of_week'], 'Number');
      if (data.hasOwnProperty('end_time'))
        obj.end_time = ApiClient.convertToType(data['end_time'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.start_date = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('start_day_of_week'))
        obj.start_day_of_week = ApiClient.convertToType(data['start_day_of_week'], 'Number');
      if (data.hasOwnProperty('start_time'))
        obj.start_time = ApiClient.convertToType(data['start_time'], 'String');
    }
    return obj;
  }

  /**
   * End date
   * @member {String} end_date
   */
  exports.prototype.end_date = undefined;

  /**
   * End day of week
   * @member {Number} end_day_of_week
   */
  exports.prototype.end_day_of_week = undefined;

  /**
   * End time
   * @member {String} end_time
   */
  exports.prototype.end_time = undefined;

  /**
   * Start date
   * @member {String} start_date
   */
  exports.prototype.start_date = undefined;

  /**
   * Start day of week
   * @member {Number} start_day_of_week
   */
  exports.prototype.start_day_of_week = undefined;

  /**
   * Start time
   * @member {String} start_time
   */
  exports.prototype.start_time = undefined;

  return exports;

}));
