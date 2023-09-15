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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailPlanAdditional'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailPlanAdditional'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailPlan = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailPlanAdditional);
  }
}(this, function(ApiClient, EmailPlanAdditional) {
  'use strict';

  /**
   * The EmailPlan model module.
   * @module com.ultracart.admin.v2.models/EmailPlan
   * @version 3.10.160
   */

  /**
   * Constructs a new <code>EmailPlan</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPlan
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPlan} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPlan} The populated <code>EmailPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_customers'))
        obj.additional_customers = ApiClient.convertToType(data['additional_customers'], 'Number');
      if (data.hasOwnProperty('additional_emails'))
        obj.additional_emails = ApiClient.convertToType(data['additional_emails'], 'Number');
      if (data.hasOwnProperty('additional_fee'))
        obj.additional_fee = ApiClient.convertToType(data['additional_fee'], 'Number');
      if (data.hasOwnProperty('allow_list_import'))
        obj.allow_list_import = ApiClient.convertToType(data['allow_list_import'], 'Boolean');
      if (data.hasOwnProperty('allow_tracking_emails'))
        obj.allow_tracking_emails = ApiClient.convertToType(data['allow_tracking_emails'], 'Boolean');
      if (data.hasOwnProperty('customer_tiers'))
        obj.customer_tiers = ApiClient.convertToType(data['customer_tiers'], [EmailPlanAdditional]);
      if (data.hasOwnProperty('initial_sending_limits'))
        obj.initial_sending_limits = ApiClient.convertToType(data['initial_sending_limits'], 'Number');
      if (data.hasOwnProperty('plan_customers'))
        obj.plan_customers = ApiClient.convertToType(data['plan_customers'], 'Number');
      if (data.hasOwnProperty('plan_emails'))
        obj.plan_emails = ApiClient.convertToType(data['plan_emails'], 'Number');
      if (data.hasOwnProperty('plan_name'))
        obj.plan_name = ApiClient.convertToType(data['plan_name'], 'String');
      if (data.hasOwnProperty('plan_name_formatted'))
        obj.plan_name_formatted = ApiClient.convertToType(data['plan_name_formatted'], 'String');
      if (data.hasOwnProperty('require_order_within_last_days'))
        obj.require_order_within_last_days = ApiClient.convertToType(data['require_order_within_last_days'], 'Number');
      if (data.hasOwnProperty('revenue_percent'))
        obj.revenue_percent = ApiClient.convertToType(data['revenue_percent'], 'Number');
      if (data.hasOwnProperty('spam_percent_limit'))
        obj.spam_percent_limit = ApiClient.convertToType(data['spam_percent_limit'], 'Number');
      if (data.hasOwnProperty('total_customers'))
        obj.total_customers = ApiClient.convertToType(data['total_customers'], 'Number');
      if (data.hasOwnProperty('total_emails'))
        obj.total_emails = ApiClient.convertToType(data['total_emails'], 'Number');
      if (data.hasOwnProperty('upgrade_to'))
        obj.upgrade_to = ApiClient.convertToType(data['upgrade_to'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} additional_customers
   */
  exports.prototype.additional_customers = undefined;

  /**
   * @member {Number} additional_emails
   */
  exports.prototype.additional_emails = undefined;

  /**
   * @member {Number} additional_fee
   */
  exports.prototype.additional_fee = undefined;

  /**
   * @member {Boolean} allow_list_import
   */
  exports.prototype.allow_list_import = undefined;

  /**
   * @member {Boolean} allow_tracking_emails
   */
  exports.prototype.allow_tracking_emails = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailPlanAdditional>} customer_tiers
   */
  exports.prototype.customer_tiers = undefined;

  /**
   * @member {Number} initial_sending_limits
   */
  exports.prototype.initial_sending_limits = undefined;

  /**
   * @member {Number} plan_customers
   */
  exports.prototype.plan_customers = undefined;

  /**
   * @member {Number} plan_emails
   */
  exports.prototype.plan_emails = undefined;

  /**
   * @member {String} plan_name
   */
  exports.prototype.plan_name = undefined;

  /**
   * @member {String} plan_name_formatted
   */
  exports.prototype.plan_name_formatted = undefined;

  /**
   * @member {Number} require_order_within_last_days
   */
  exports.prototype.require_order_within_last_days = undefined;

  /**
   * @member {Number} revenue_percent
   */
  exports.prototype.revenue_percent = undefined;

  /**
   * @member {Number} spam_percent_limit
   */
  exports.prototype.spam_percent_limit = undefined;

  /**
   * @member {Number} total_customers
   */
  exports.prototype.total_customers = undefined;

  /**
   * @member {Number} total_emails
   */
  exports.prototype.total_emails = undefined;

  /**
   * @member {Number} upgrade_to
   */
  exports.prototype.upgrade_to = undefined;

  return exports;

}));
