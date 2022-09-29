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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Activity', 'com.ultracart.admin.v2.models/ListSegmentMembership', 'com.ultracart.admin.v2.models/Metric', 'com.ultracart.admin.v2.models/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Activity'), require('./ListSegmentMembership'), require('./Metric'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CustomerActivity = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Activity, root.UltraCartRestApiV2.ListSegmentMembership, root.UltraCartRestApiV2.Metric, root.UltraCartRestApiV2.Property);
  }
}(this, function(ApiClient, Activity, ListSegmentMembership, Metric, Property) {
  'use strict';

  /**
   * The CustomerActivity model module.
   * @module com.ultracart.admin.v2.models/CustomerActivity
   * @version 3.10.51
   */

  /**
   * Constructs a new <code>CustomerActivity</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerActivity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerActivity} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerActivity} The populated <code>CustomerActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activities'))
        obj.activities = ApiClient.convertToType(data['activities'], [Activity]);
      if (data.hasOwnProperty('global_unsubscribed'))
        obj.global_unsubscribed = ApiClient.convertToType(data['global_unsubscribed'], 'Boolean');
      if (data.hasOwnProperty('global_unsubscribed_dts'))
        obj.global_unsubscribed_dts = ApiClient.convertToType(data['global_unsubscribed_dts'], 'String');
      if (data.hasOwnProperty('memberships'))
        obj.memberships = ApiClient.convertToType(data['memberships'], [ListSegmentMembership]);
      if (data.hasOwnProperty('metrics'))
        obj.metrics = ApiClient.convertToType(data['metrics'], [Metric]);
      if (data.hasOwnProperty('properties_list'))
        obj.properties_list = ApiClient.convertToType(data['properties_list'], [Property]);
      if (data.hasOwnProperty('spam_complaint'))
        obj.spam_complaint = ApiClient.convertToType(data['spam_complaint'], 'Boolean');
      if (data.hasOwnProperty('spam_complaint_dts'))
        obj.spam_complaint_dts = ApiClient.convertToType(data['spam_complaint_dts'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Activity>} activities
   */
  exports.prototype.activities = undefined;

  /**
   * @member {Boolean} global_unsubscribed
   */
  exports.prototype.global_unsubscribed = undefined;

  /**
   * @member {String} global_unsubscribed_dts
   */
  exports.prototype.global_unsubscribed_dts = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ListSegmentMembership>} memberships
   */
  exports.prototype.memberships = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Metric>} metrics
   */
  exports.prototype.metrics = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Property>} properties_list
   */
  exports.prototype.properties_list = undefined;

  /**
   * @member {Boolean} spam_complaint
   */
  exports.prototype.spam_complaint = undefined;

  /**
   * @member {String} spam_complaint_dts
   */
  exports.prototype.spam_complaint_dts = undefined;

  return exports;

}));
