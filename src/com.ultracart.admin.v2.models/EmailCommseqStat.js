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
    root.UltraCartRestApiV2.EmailCommseqStat = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailCommseqStat model module.
   * @module com.ultracart.admin.v2.models/EmailCommseqStat
   * @version 3.0.38
   */

  /**
   * Constructs a new <code>EmailCommseqStat</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCommseqStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCommseqStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCommseqStat} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCommseqStat} The populated <code>EmailCommseqStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('click_count'))
        obj.click_count = ApiClient.convertToType(data['click_count'], 'Number');
      if (data.hasOwnProperty('click_count_formatted'))
        obj.click_count_formatted = ApiClient.convertToType(data['click_count_formatted'], 'String');
      if (data.hasOwnProperty('conversion_count'))
        obj.conversion_count = ApiClient.convertToType(data['conversion_count'], 'Number');
      if (data.hasOwnProperty('conversion_count_formatted'))
        obj.conversion_count_formatted = ApiClient.convertToType(data['conversion_count_formatted'], 'String');
      if (data.hasOwnProperty('delivered_count'))
        obj.delivered_count = ApiClient.convertToType(data['delivered_count'], 'Number');
      if (data.hasOwnProperty('delivered_count_formatted'))
        obj.delivered_count_formatted = ApiClient.convertToType(data['delivered_count_formatted'], 'String');
      if (data.hasOwnProperty('email_communication_sequence_uuid'))
        obj.email_communication_sequence_uuid = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
      if (data.hasOwnProperty('finished_count'))
        obj.finished_count = ApiClient.convertToType(data['finished_count'], 'Number');
      if (data.hasOwnProperty('finished_count_formatted'))
        obj.finished_count_formatted = ApiClient.convertToType(data['finished_count_formatted'], 'String');
      if (data.hasOwnProperty('in_progress_count'))
        obj.in_progress_count = ApiClient.convertToType(data['in_progress_count'], 'Number');
      if (data.hasOwnProperty('in_progress_count_formatted'))
        obj.in_progress_count_formatted = ApiClient.convertToType(data['in_progress_count_formatted'], 'String');
      if (data.hasOwnProperty('kickbox_count'))
        obj.kickbox_count = ApiClient.convertToType(data['kickbox_count'], 'Number');
      if (data.hasOwnProperty('kickbox_count_formatted'))
        obj.kickbox_count_formatted = ApiClient.convertToType(data['kickbox_count_formatted'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('open_count'))
        obj.open_count = ApiClient.convertToType(data['open_count'], 'Number');
      if (data.hasOwnProperty('open_count_formatted'))
        obj.open_count_formatted = ApiClient.convertToType(data['open_count_formatted'], 'String');
      if (data.hasOwnProperty('order_count'))
        obj.order_count = ApiClient.convertToType(data['order_count'], 'Number');
      if (data.hasOwnProperty('order_count_formatted'))
        obj.order_count_formatted = ApiClient.convertToType(data['order_count_formatted'], 'String');
      if (data.hasOwnProperty('permanent_bounce_count'))
        obj.permanent_bounce_count = ApiClient.convertToType(data['permanent_bounce_count'], 'Number');
      if (data.hasOwnProperty('permanent_bounce_count_formatted'))
        obj.permanent_bounce_count_formatted = ApiClient.convertToType(data['permanent_bounce_count_formatted'], 'String');
      if (data.hasOwnProperty('profit'))
        obj.profit = ApiClient.convertToType(data['profit'], 'Number');
      if (data.hasOwnProperty('profit_formatted'))
        obj.profit_formatted = ApiClient.convertToType(data['profit_formatted'], 'String');
      if (data.hasOwnProperty('revenue'))
        obj.revenue = ApiClient.convertToType(data['revenue'], 'Number');
      if (data.hasOwnProperty('revenue_formatted'))
        obj.revenue_formatted = ApiClient.convertToType(data['revenue_formatted'], 'String');
      if (data.hasOwnProperty('send_count'))
        obj.send_count = ApiClient.convertToType(data['send_count'], 'Number');
      if (data.hasOwnProperty('send_count_formatted'))
        obj.send_count_formatted = ApiClient.convertToType(data['send_count_formatted'], 'String');
      if (data.hasOwnProperty('skipped_count'))
        obj.skipped_count = ApiClient.convertToType(data['skipped_count'], 'Number');
      if (data.hasOwnProperty('skipped_count_formatted'))
        obj.skipped_count_formatted = ApiClient.convertToType(data['skipped_count_formatted'], 'String');
      if (data.hasOwnProperty('spam_count'))
        obj.spam_count = ApiClient.convertToType(data['spam_count'], 'Number');
      if (data.hasOwnProperty('spam_count_formatted'))
        obj.spam_count_formatted = ApiClient.convertToType(data['spam_count_formatted'], 'String');
      if (data.hasOwnProperty('started_count'))
        obj.started_count = ApiClient.convertToType(data['started_count'], 'Number');
      if (data.hasOwnProperty('started_count_formatted'))
        obj.started_count_formatted = ApiClient.convertToType(data['started_count_formatted'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
      if (data.hasOwnProperty('unsubscribe_count'))
        obj.unsubscribe_count = ApiClient.convertToType(data['unsubscribe_count'], 'Number');
      if (data.hasOwnProperty('unsubscribe_count_formatted'))
        obj.unsubscribe_count_formatted = ApiClient.convertToType(data['unsubscribe_count_formatted'], 'String');
      if (data.hasOwnProperty('view_count'))
        obj.view_count = ApiClient.convertToType(data['view_count'], 'Number');
      if (data.hasOwnProperty('view_count_formatted'))
        obj.view_count_formatted = ApiClient.convertToType(data['view_count_formatted'], 'String');
    }
    return obj;
  }

  /**
   * Count of clicked emails
   * @member {Number} click_count
   */
  exports.prototype.click_count = undefined;

  /**
   * Count of clicked emails, formatted
   * @member {String} click_count_formatted
   */
  exports.prototype.click_count_formatted = undefined;

  /**
   * Count of conversion
   * @member {Number} conversion_count
   */
  exports.prototype.conversion_count = undefined;

  /**
   * Count of conversions, formatted
   * @member {String} conversion_count_formatted
   */
  exports.prototype.conversion_count_formatted = undefined;

  /**
   * Count of delivered emails
   * @member {Number} delivered_count
   */
  exports.prototype.delivered_count = undefined;

  /**
   * Count of delivered emails, formatted
   * @member {String} delivered_count_formatted
   */
  exports.prototype.delivered_count_formatted = undefined;

  /**
   * UUID associated with the communication sequence
   * @member {String} email_communication_sequence_uuid
   */
  exports.prototype.email_communication_sequence_uuid = undefined;

  /**
   * Count of customers that finished the sequence
   * @member {Number} finished_count
   */
  exports.prototype.finished_count = undefined;

  /**
   * Count of customers that finished the sequence, formatted
   * @member {String} finished_count_formatted
   */
  exports.prototype.finished_count_formatted = undefined;

  /**
   * Count of customers in progress
   * @member {Number} in_progress_count
   */
  exports.prototype.in_progress_count = undefined;

  /**
   * Count of customers in progress, formatted
   * @member {String} in_progress_count_formatted
   */
  exports.prototype.in_progress_count_formatted = undefined;

  /**
   * Count of emails kicked
   * @member {Number} kickbox_count
   */
  exports.prototype.kickbox_count = undefined;

  /**
   * Count of emails kicked, formatted
   * @member {String} kickbox_count_formatted
   */
  exports.prototype.kickbox_count_formatted = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Count of opened emails
   * @member {Number} open_count
   */
  exports.prototype.open_count = undefined;

  /**
   * Count of opened emails, formatted
   * @member {String} open_count_formatted
   */
  exports.prototype.open_count_formatted = undefined;

  /**
   * Count of orders
   * @member {Number} order_count
   */
  exports.prototype.order_count = undefined;

  /**
   * Count of orders, formatted
   * @member {String} order_count_formatted
   */
  exports.prototype.order_count_formatted = undefined;

  /**
   * Count of emails permanently bounced
   * @member {Number} permanent_bounce_count
   */
  exports.prototype.permanent_bounce_count = undefined;

  /**
   * Count of emails permanently bounced, formatted
   * @member {String} permanent_bounce_count_formatted
   */
  exports.prototype.permanent_bounce_count_formatted = undefined;

  /**
   * Profit
   * @member {Number} profit
   */
  exports.prototype.profit = undefined;

  /**
   * Profit, formatted
   * @member {String} profit_formatted
   */
  exports.prototype.profit_formatted = undefined;

  /**
   * Revenue
   * @member {Number} revenue
   */
  exports.prototype.revenue = undefined;

  /**
   * Revenue, formatted
   * @member {String} revenue_formatted
   */
  exports.prototype.revenue_formatted = undefined;

  /**
   * Count of emails sent
   * @member {Number} send_count
   */
  exports.prototype.send_count = undefined;

  /**
   * Count of emails sent, formatted
   * @member {String} send_count_formatted
   */
  exports.prototype.send_count_formatted = undefined;

  /**
   * Count of skipped emails
   * @member {Number} skipped_count
   */
  exports.prototype.skipped_count = undefined;

  /**
   * Count of skipped emails, formatted
   * @member {String} skipped_count_formatted
   */
  exports.prototype.skipped_count_formatted = undefined;

  /**
   * Count of emails classified as spam
   * @member {Number} spam_count
   */
  exports.prototype.spam_count = undefined;

  /**
   * Count of emails classified as spam, formatted
   * @member {String} spam_count_formatted
   */
  exports.prototype.spam_count_formatted = undefined;

  /**
   * Count of customers that started the sequence
   * @member {Number} started_count
   */
  exports.prototype.started_count = undefined;

  /**
   * Count of customers that started the sequence, formatted
   * @member {String} started_count_formatted
   */
  exports.prototype.started_count_formatted = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  /**
   * Count of unsubscribes caused
   * @member {Number} unsubscribe_count
   */
  exports.prototype.unsubscribe_count = undefined;

  /**
   * Count of unsubscribes caused, formatted
   * @member {String} unsubscribe_count_formatted
   */
  exports.prototype.unsubscribe_count_formatted = undefined;

  /**
   * Count of views
   * @member {Number} view_count
   */
  exports.prototype.view_count = undefined;

  /**
   * Count of views, formatted
   * @member {String} view_count_formatted
   */
  exports.prototype.view_count_formatted = undefined;

  return exports;

}));
