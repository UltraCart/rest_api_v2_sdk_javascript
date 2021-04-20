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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram', 'com.ultracart.admin.v2.models/EmailPerformanceDaily'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailPerformanceCustomerHistogram'), require('./EmailPerformanceDaily'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailPerformance = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailPerformanceCustomerHistogram, root.UltraCartRestApiV2.EmailPerformanceDaily);
  }
}(this, function(ApiClient, EmailPerformanceCustomerHistogram, EmailPerformanceDaily) {
  'use strict';

  /**
   * The EmailPerformance model module.
   * @module com.ultracart.admin.v2.models/EmailPerformance
   * @version 3.1.26
   */

  /**
   * Constructs a new <code>EmailPerformance</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailPerformance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailPerformance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailPerformance} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailPerformance} The populated <code>EmailPerformance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_customers'))
        obj.active_customers = ApiClient.convertToType(data['active_customers'], 'Number');
      if (data.hasOwnProperty('actual_customers'))
        obj.actual_customers = ApiClient.convertToType(data['actual_customers'], 'Number');
      if (data.hasOwnProperty('bounce_count'))
        obj.bounce_count = ApiClient.convertToType(data['bounce_count'], 'Number');
      if (data.hasOwnProperty('bounce_percentage'))
        obj.bounce_percentage = ApiClient.convertToType(data['bounce_percentage'], 'Number');
      if (data.hasOwnProperty('bounce_percentage_formatted'))
        obj.bounce_percentage_formatted = ApiClient.convertToType(data['bounce_percentage_formatted'], 'String');
      if (data.hasOwnProperty('customer_histogram'))
        obj.customer_histogram = EmailPerformanceCustomerHistogram.constructFromObject(data['customer_histogram']);
      if (data.hasOwnProperty('daily_stats'))
        obj.daily_stats = ApiClient.convertToType(data['daily_stats'], [EmailPerformanceDaily]);
      if (data.hasOwnProperty('delivered_count'))
        obj.delivered_count = ApiClient.convertToType(data['delivered_count'], 'Number');
      if (data.hasOwnProperty('max_active_customers'))
        obj.max_active_customers = ApiClient.convertToType(data['max_active_customers'], 'Number');
      if (data.hasOwnProperty('max_emails_per_day'))
        obj.max_emails_per_day = ApiClient.convertToType(data['max_emails_per_day'], 'Number');
      if (data.hasOwnProperty('max_emails_per_hour'))
        obj.max_emails_per_hour = ApiClient.convertToType(data['max_emails_per_hour'], 'Number');
      if (data.hasOwnProperty('max_emails_per_month'))
        obj.max_emails_per_month = ApiClient.convertToType(data['max_emails_per_month'], 'Number');
      if (data.hasOwnProperty('paused_for_spam'))
        obj.paused_for_spam = ApiClient.convertToType(data['paused_for_spam'], 'Boolean');
      if (data.hasOwnProperty('revenue'))
        obj.revenue = ApiClient.convertToType(data['revenue'], 'Number');
      if (data.hasOwnProperty('sent_emails_per_day'))
        obj.sent_emails_per_day = ApiClient.convertToType(data['sent_emails_per_day'], 'Number');
      if (data.hasOwnProperty('sent_emails_per_hour'))
        obj.sent_emails_per_hour = ApiClient.convertToType(data['sent_emails_per_hour'], 'Number');
      if (data.hasOwnProperty('sent_emails_per_month'))
        obj.sent_emails_per_month = ApiClient.convertToType(data['sent_emails_per_month'], 'Number');
      if (data.hasOwnProperty('sequence_send_count'))
        obj.sequence_send_count = ApiClient.convertToType(data['sequence_send_count'], 'Number');
      if (data.hasOwnProperty('spam_count'))
        obj.spam_count = ApiClient.convertToType(data['spam_count'], 'Number');
      if (data.hasOwnProperty('spam_percentage'))
        obj.spam_percentage = ApiClient.convertToType(data['spam_percentage'], 'Number');
      if (data.hasOwnProperty('spam_percentage_formatted'))
        obj.spam_percentage_formatted = ApiClient.convertToType(data['spam_percentage_formatted'], 'String');
      if (data.hasOwnProperty('transactional_send_count'))
        obj.transactional_send_count = ApiClient.convertToType(data['transactional_send_count'], 'Number');
    }
    return obj;
  }

  /**
   * Active customers.  The value will be -1 if calculation is pending.
   * @member {Number} active_customers
   */
  exports.prototype.active_customers = undefined;

  /**
   * Actual customers that they have regardless of active state.  The value will be -1 if calculation is pending.
   * @member {Number} actual_customers
   */
  exports.prototype.actual_customers = undefined;

  /**
   * Bounce count
   * @member {Number} bounce_count
   */
  exports.prototype.bounce_count = undefined;

  /**
   * bounce percentage rate based upon our look back window.  This should be under five percent or the account will be paused for sending.
   * @member {Number} bounce_percentage
   */
  exports.prototype.bounce_percentage = undefined;

  /**
   * bounce percentage rate (formatted) based upon our look back window.  This should be under five percent or the account will be paused for sending.
   * @member {String} bounce_percentage_formatted
   */
  exports.prototype.bounce_percentage_formatted = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/EmailPerformanceCustomerHistogram} customer_histogram
   */
  exports.prototype.customer_histogram = undefined;

  /**
   * Daily statistics used for charting
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailPerformanceDaily>} daily_stats
   */
  exports.prototype.daily_stats = undefined;

  /**
   * Delivered count
   * @member {Number} delivered_count
   */
  exports.prototype.delivered_count = undefined;

  /**
   * Maximum active customers allowed under their billing plan
   * @member {Number} max_active_customers
   */
  exports.prototype.max_active_customers = undefined;

  /**
   * Max emails per day
   * @member {Number} max_emails_per_day
   */
  exports.prototype.max_emails_per_day = undefined;

  /**
   * Max emails per hour
   * @member {Number} max_emails_per_hour
   */
  exports.prototype.max_emails_per_hour = undefined;

  /**
   * Max emails per month
   * @member {Number} max_emails_per_month
   */
  exports.prototype.max_emails_per_month = undefined;

  /**
   * True if campaign/flow emails are paused due to spam complaints.
   * @member {Boolean} paused_for_spam
   */
  exports.prototype.paused_for_spam = undefined;

  /**
   * Revenue
   * @member {Number} revenue
   */
  exports.prototype.revenue = undefined;

  /**
   * Sent emails last 24 hours
   * @member {Number} sent_emails_per_day
   */
  exports.prototype.sent_emails_per_day = undefined;

  /**
   * Sent emails last hour
   * @member {Number} sent_emails_per_hour
   */
  exports.prototype.sent_emails_per_hour = undefined;

  /**
   * Sent emails last 31 days
   * @member {Number} sent_emails_per_month
   */
  exports.prototype.sent_emails_per_month = undefined;

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
   * Spam percentage rate based upon our look back window.  This should be under one half a percent or the account will be paused for sending.
   * @member {Number} spam_percentage
   */
  exports.prototype.spam_percentage = undefined;

  /**
   * Spam percentage rate (formatted) based upon our look back window.  This should be under one half a percent or the account will be paused for sending.
   * @member {String} spam_percentage_formatted
   */
  exports.prototype.spam_percentage_formatted = undefined;

  /**
   * Total transactions emails sent
   * @member {Number} transactional_send_count
   */
  exports.prototype.transactional_send_count = undefined;

  return exports;

}));
