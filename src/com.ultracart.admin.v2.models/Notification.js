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
    root.UltraCartRestApiV2.Notification = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Notification model module.
   * @module com.ultracart.admin.v2.models/Notification
   * @version 3.10.195
   */

  /**
   * Constructs a new <code>Notification</code>.
   * @alias module:com.ultracart.admin.v2.models/Notification
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Notification} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Notification} The populated <code>Notification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('can_filter_by_distribution_centers'))
        obj.can_filter_by_distribution_centers = ApiClient.convertToType(data['can_filter_by_distribution_centers'], 'Boolean');
      if (data.hasOwnProperty('can_include_affiliate'))
        obj.can_include_affiliate = ApiClient.convertToType(data['can_include_affiliate'], 'Boolean');
      if (data.hasOwnProperty('can_include_order'))
        obj.can_include_order = ApiClient.convertToType(data['can_include_order'], 'Boolean');
      if (data.hasOwnProperty('can_include_order_plain_text'))
        obj.can_include_order_plain_text = ApiClient.convertToType(data['can_include_order_plain_text'], 'Boolean');
      if (data.hasOwnProperty('distribution_center_filters'))
        obj.distribution_center_filters = ApiClient.convertToType(data['distribution_center_filters'], ['String']);
      if (data.hasOwnProperty('include_affiliate'))
        obj.include_affiliate = ApiClient.convertToType(data['include_affiliate'], 'Boolean');
      if (data.hasOwnProperty('include_order'))
        obj.include_order = ApiClient.convertToType(data['include_order'], 'Boolean');
      if (data.hasOwnProperty('include_order_plain_text'))
        obj.include_order_plain_text = ApiClient.convertToType(data['include_order_plain_text'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('notification_group'))
        obj.notification_group = ApiClient.convertToType(data['notification_group'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if this notification can be filtered to only send for one or more distribution centers.
   * @member {Boolean} can_filter_by_distribution_centers
   */
  exports.prototype.can_filter_by_distribution_centers = undefined;

  /**
   * True if this notification can include an affiliate information.
   * @member {Boolean} can_include_affiliate
   */
  exports.prototype.can_include_affiliate = undefined;

  /**
   * True if this notification can include an order attachment.
   * @member {Boolean} can_include_order
   */
  exports.prototype.can_include_order = undefined;

  /**
   * True if this notification can include a plain text rendering of an order directly within an email.  Some desire this over an attachment
   * @member {Boolean} can_include_order_plain_text
   */
  exports.prototype.can_include_order_plain_text = undefined;

  /**
   * If this notification supports it, this list of distribution center CODES will filter the notification to just those distribution centers.
   * @member {Array.<String>} distribution_center_filters
   */
  exports.prototype.distribution_center_filters = undefined;

  /**
   * If true, and this notification supports it, affiliate information will be attached to all notifications of this type
   * @member {Boolean} include_affiliate
   */
  exports.prototype.include_affiliate = undefined;

  /**
   * If true, and this notification supports it, the order will be attached to all notifications of this type
   * @member {Boolean} include_order
   */
  exports.prototype.include_order = undefined;

  /**
   * If true, and this notification supports it, a plain text order will be directly inserted into all notifications of this type
   * @member {Boolean} include_order_plain_text
   */
  exports.prototype.include_order_plain_text = undefined;

  /**
   * The name of this notification.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * A group for this notification.  This name is only used for visual grouping within interfaces.
   * @member {String} notification_group
   */
  exports.prototype.notification_group = undefined;

  /**
   * True if this user wishes to receive this email notification.
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  return exports;

}));
