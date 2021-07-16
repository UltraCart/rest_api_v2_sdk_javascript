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
    root.UltraCartRestApiV2.EmailPerformanceDaily = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailPerformanceDaily model module.
   * @module com.ultracart.admin.v2.models/EmailPerformanceDaily
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>EmailPerformanceDaily</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformanceDaily
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPerformanceDaily</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} The populated <code>EmailPerformanceDaily</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bounce_count'))
        obj.bounce_count = ApiClient.convertToType(data['bounce_count'], 'Number');
      if (data.hasOwnProperty('delivered_count'))
        obj.delivered_count = ApiClient.convertToType(data['delivered_count'], 'Number');
      if (data.hasOwnProperty('revenue'))
        obj.revenue = ApiClient.convertToType(data['revenue'], 'Number');
      if (data.hasOwnProperty('sequence_send_count'))
        obj.sequence_send_count = ApiClient.convertToType(data['sequence_send_count'], 'Number');
      if (data.hasOwnProperty('spam_count'))
        obj.spam_count = ApiClient.convertToType(data['spam_count'], 'Number');
      if (data.hasOwnProperty('stat_dts'))
        obj.stat_dts = ApiClient.convertToType(data['stat_dts'], 'String');
      if (data.hasOwnProperty('transactional_send_count'))
        obj.transactional_send_count = ApiClient.convertToType(data['transactional_send_count'], 'Number');
    }
    return obj;
  }

  /**
   * Bounce count
   * @member {Number} bounce_count
   */
  exports.prototype.bounce_count = undefined;

  /**
   * Delivered count
   * @member {Number} delivered_count
   */
  exports.prototype.delivered_count = undefined;

  /**
   * Revenue
   * @member {Number} revenue
   */
  exports.prototype.revenue = undefined;

  /**
   * Total sequence (campaign/flow) emails sent
   * @member {Number} sequence_send_count
   */
  exports.prototype.sequence_send_count = undefined;

  /**
   * Spam complaints
   * @member {Number} spam_count
   */
  exports.prototype.spam_count = undefined;

  /**
   * The date that these statistcs are for
   * @member {String} stat_dts
   */
  exports.prototype.stat_dts = undefined;

  /**
   * Total transactions emails sent
   * @member {Number} transactional_send_count
   */
  exports.prototype.transactional_send_count = undefined;

  return exports;

}));
