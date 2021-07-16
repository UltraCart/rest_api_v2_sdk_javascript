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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailListSegmentMembership'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailListSegmentMembership'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailCampaign = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailListSegmentMembership);
  }
}(this, function(ApiClient, EmailListSegmentMembership) {
  'use strict';

  /**
   * The EmailCampaign model module.
   * @module com.ultracart.admin.v2.models/EmailCampaign
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>EmailCampaign</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailCampaign} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailCampaign} The populated <code>EmailCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('click_rate_formatted'))
        obj.click_rate_formatted = ApiClient.convertToType(data['click_rate_formatted'], 'String');
      if (data.hasOwnProperty('created_dts'))
        obj.created_dts = ApiClient.convertToType(data['created_dts'], 'String');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('email_campaign_uuid'))
        obj.email_campaign_uuid = ApiClient.convertToType(data['email_campaign_uuid'], 'String');
      if (data.hasOwnProperty('email_communication_sequence_uuid'))
        obj.email_communication_sequence_uuid = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
      if (data.hasOwnProperty('end_once_customer_purchases'))
        obj.end_once_customer_purchases = ApiClient.convertToType(data['end_once_customer_purchases'], 'Boolean');
      if (data.hasOwnProperty('end_once_customer_purchases_anywhere'))
        obj.end_once_customer_purchases_anywhere = ApiClient.convertToType(data['end_once_customer_purchases_anywhere'], 'Boolean');
      if (data.hasOwnProperty('esp_campaign_folder_uuid'))
        obj.esp_campaign_folder_uuid = ApiClient.convertToType(data['esp_campaign_folder_uuid'], 'String');
      if (data.hasOwnProperty('esp_domain_user'))
        obj.esp_domain_user = ApiClient.convertToType(data['esp_domain_user'], 'String');
      if (data.hasOwnProperty('esp_domain_uuid'))
        obj.esp_domain_uuid = ApiClient.convertToType(data['esp_domain_uuid'], 'String');
      if (data.hasOwnProperty('esp_friendly_name'))
        obj.esp_friendly_name = ApiClient.convertToType(data['esp_friendly_name'], 'String');
      if (data.hasOwnProperty('library_item_oid'))
        obj.library_item_oid = ApiClient.convertToType(data['library_item_oid'], 'Number');
      if (data.hasOwnProperty('memberships'))
        obj.memberships = ApiClient.convertToType(data['memberships'], [EmailListSegmentMembership]);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('open_rate_formatted'))
        obj.open_rate_formatted = ApiClient.convertToType(data['open_rate_formatted'], 'String');
      if (data.hasOwnProperty('prevent_sending_due_to_spam'))
        obj.prevent_sending_due_to_spam = ApiClient.convertToType(data['prevent_sending_due_to_spam'], 'Boolean');
      if (data.hasOwnProperty('revenue_formatted'))
        obj.revenue_formatted = ApiClient.convertToType(data['revenue_formatted'], 'String');
      if (data.hasOwnProperty('revenue_per_customer_formatted'))
        obj.revenue_per_customer_formatted = ApiClient.convertToType(data['revenue_per_customer_formatted'], 'String');
      if (data.hasOwnProperty('scheduled_dts'))
        obj.scheduled_dts = ApiClient.convertToType(data['scheduled_dts'], 'String');
      if (data.hasOwnProperty('screenshot_large_full_url'))
        obj.screenshot_large_full_url = ApiClient.convertToType(data['screenshot_large_full_url'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('status_dts'))
        obj.status_dts = ApiClient.convertToType(data['status_dts'], 'String');
      if (data.hasOwnProperty('storefront_oid'))
        obj.storefront_oid = ApiClient.convertToType(data['storefront_oid'], 'Number');
    }
    return obj;
  }

  /**
   * Click rate of emails
   * @member {String} click_rate_formatted
   */
  exports.prototype.click_rate_formatted = undefined;

  /**
   * Created date
   * @member {String} created_dts
   */
  exports.prototype.created_dts = undefined;

  /**
   * True if this campaign was deleted
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * Email campaign UUID
   * @member {String} email_campaign_uuid
   */
  exports.prototype.email_campaign_uuid = undefined;

  /**
   * Email communication sequence UUID
   * @member {String} email_communication_sequence_uuid
   */
  exports.prototype.email_communication_sequence_uuid = undefined;

  /**
   * True if the customer should end the flow once they purchase from this campaign
   * @member {Boolean} end_once_customer_purchases
   */
  exports.prototype.end_once_customer_purchases = undefined;

  /**
   * True if the customer should end the flow once they purchase from anywhere
   * @member {Boolean} end_once_customer_purchases_anywhere
   */
  exports.prototype.end_once_customer_purchases_anywhere = undefined;

  /**
   * Campaign folder UUID.  Null for uncategorized
   * @member {String} esp_campaign_folder_uuid
   */
  exports.prototype.esp_campaign_folder_uuid = undefined;

  /**
   * User of the sending address
   * @member {String} esp_domain_user
   */
  exports.prototype.esp_domain_user = undefined;

  /**
   * UUID of the sending domain
   * @member {String} esp_domain_uuid
   */
  exports.prototype.esp_domain_uuid = undefined;

  /**
   * Friendly name of the sending email
   * @member {String} esp_friendly_name
   */
  exports.prototype.esp_friendly_name = undefined;

  /**
   * If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated.
   * @member {Number} library_item_oid
   */
  exports.prototype.library_item_oid = undefined;

  /**
   * List and segment memberships
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentMembership>} memberships
   */
  exports.prototype.memberships = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Name of email campaign
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Open rate of emails
   * @member {String} open_rate_formatted
   */
  exports.prototype.open_rate_formatted = undefined;

  /**
   * True if this campaign is prevented from sending at this time due to spam complaints.
   * @member {Boolean} prevent_sending_due_to_spam
   */
  exports.prototype.prevent_sending_due_to_spam = undefined;

  /**
   * Revenue associated with campaign
   * @member {String} revenue_formatted
   */
  exports.prototype.revenue_formatted = undefined;

  /**
   * Revenue per customer associated with campaign
   * @member {String} revenue_per_customer_formatted
   */
  exports.prototype.revenue_per_customer_formatted = undefined;

  /**
   * Scheduled date
   * @member {String} scheduled_dts
   */
  exports.prototype.scheduled_dts = undefined;

  /**
   * URL to a large full length screenshot
   * @member {String} screenshot_large_full_url
   */
  exports.prototype.screenshot_large_full_url = undefined;

  /**
   * Status of the campaign of draft, archived, and sent
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Timestamp when the last status change happened
   * @member {String} status_dts
   */
  exports.prototype.status_dts = undefined;

  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype.storefront_oid = undefined;

  return exports;

}));
