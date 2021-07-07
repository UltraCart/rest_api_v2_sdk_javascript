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
    root.UltraCartRestApiV2.OrderTrackingNumberDetail = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderTrackingNumberDetail model module.
   * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetail
   * @version 3.2.9
   */

  /**
   * Constructs a new <code>OrderTrackingNumberDetail</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderTrackingNumberDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} The populated <code>OrderTrackingNumberDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('event_local_date'))
        obj.event_local_date = ApiClient.convertToType(data['event_local_date'], 'String');
      if (data.hasOwnProperty('event_local_time'))
        obj.event_local_time = ApiClient.convertToType(data['event_local_time'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('subtag'))
        obj.subtag = ApiClient.convertToType(data['subtag'], 'String');
      if (data.hasOwnProperty('subtag_message'))
        obj.subtag_message = ApiClient.convertToType(data['subtag_message'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('tag_description'))
        obj.tag_description = ApiClient.convertToType(data['tag_description'], 'String');
      if (data.hasOwnProperty('tag_icon'))
        obj.tag_icon = ApiClient.convertToType(data['tag_icon'], 'String');
      if (data.hasOwnProperty('zip'))
        obj.zip = ApiClient.convertToType(data['zip'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} event_local_date
   */
  exports.prototype.event_local_date = undefined;

  /**
   * @member {String} event_local_time
   */
  exports.prototype.event_local_time = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * @member {String} subtag
   */
  exports.prototype.subtag = undefined;

  /**
   * @member {String} subtag_message
   */
  exports.prototype.subtag_message = undefined;

  /**
   * @member {String} tag
   */
  exports.prototype.tag = undefined;

  /**
   * @member {String} tag_description
   */
  exports.prototype.tag_description = undefined;

  /**
   * @member {String} tag_icon
   */
  exports.prototype.tag_icon = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype.zip = undefined;

  return exports;

}));
