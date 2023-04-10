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
    root.UltraCartRestApiV2.ConversationSearchRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversationSearchRequest model module.
   * @module com.ultracart.admin.v2.models/ConversationSearchRequest
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>ConversationSearchRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationSearchRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationSearchRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationSearchRequest} The populated <code>ConversationSearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date_end'))
        obj.date_end = ApiClient.convertToType(data['date_end'], 'String');
      if (data.hasOwnProperty('date_start'))
        obj.date_start = ApiClient.convertToType(data['date_start'], 'String');
      if (data.hasOwnProperty('email_filter'))
        obj.email_filter = ApiClient.convertToType(data['email_filter'], 'String');
      if (data.hasOwnProperty('language_filter'))
        obj.language_filter = ApiClient.convertToType(data['language_filter'], 'String');
      if (data.hasOwnProperty('medium_filter'))
        obj.medium_filter = ApiClient.convertToType(data['medium_filter'], 'String');
      if (data.hasOwnProperty('order_by_newest'))
        obj.order_by_newest = ApiClient.convertToType(data['order_by_newest'], 'Boolean');
      if (data.hasOwnProperty('order_by_oldest'))
        obj.order_by_oldest = ApiClient.convertToType(data['order_by_oldest'], 'Boolean');
      if (data.hasOwnProperty('range_begin'))
        obj.range_begin = ApiClient.convertToType(data['range_begin'], 'Number');
      if (data.hasOwnProperty('range_end'))
        obj.range_end = ApiClient.convertToType(data['range_end'], 'Number');
      if (data.hasOwnProperty('sms_phone_number_filter'))
        obj.sms_phone_number_filter = ApiClient.convertToType(data['sms_phone_number_filter'], 'String');
      if (data.hasOwnProperty('text_search'))
        obj.text_search = ApiClient.convertToType(data['text_search'], 'String');
      if (data.hasOwnProperty('visible_filter'))
        obj.visible_filter = ApiClient.convertToType(data['visible_filter'], 'Boolean');
    }
    return obj;
  }

  /**
   * End of the range
   * @member {String} date_end
   */
  exports.prototype.date_end = undefined;

  /**
   * Start of the range
   * @member {String} date_start
   */
  exports.prototype.date_start = undefined;

  /**
   * @member {String} email_filter
   */
  exports.prototype.email_filter = undefined;

  /**
   * @member {String} language_filter
   */
  exports.prototype.language_filter = undefined;

  /**
   * @member {String} medium_filter
   */
  exports.prototype.medium_filter = undefined;

  /**
   * @member {Boolean} order_by_newest
   */
  exports.prototype.order_by_newest = undefined;

  /**
   * @member {Boolean} order_by_oldest
   */
  exports.prototype.order_by_oldest = undefined;

  /**
   * @member {Number} range_begin
   */
  exports.prototype.range_begin = undefined;

  /**
   * @member {Number} range_end
   */
  exports.prototype.range_end = undefined;

  /**
   * @member {String} sms_phone_number_filter
   */
  exports.prototype.sms_phone_number_filter = undefined;

  /**
   * @member {String} text_search
   */
  exports.prototype.text_search = undefined;

  /**
   * @member {Boolean} visible_filter
   */
  exports.prototype.visible_filter = undefined;

  return exports;

}));
