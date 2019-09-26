/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
   * @version 2.4.36
   */

  /**
   * Constructs a new <code>EmailCampaign</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailCampaign
   * @class
   */
  var exports = function() {
    var _this = this;















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

      if (data.hasOwnProperty('click_rate_formatted')) {
        obj['click_rate_formatted'] = ApiClient.convertToType(data['click_rate_formatted'], 'String');
      }
      if (data.hasOwnProperty('created_dts')) {
        obj['created_dts'] = ApiClient.convertToType(data['created_dts'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('email_campaign_uuid')) {
        obj['email_campaign_uuid'] = ApiClient.convertToType(data['email_campaign_uuid'], 'String');
      }
      if (data.hasOwnProperty('email_communication_sequence_uuid')) {
        obj['email_communication_sequence_uuid'] = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
      }
      if (data.hasOwnProperty('memberships')) {
        obj['memberships'] = ApiClient.convertToType(data['memberships'], [EmailListSegmentMembership]);
      }
      if (data.hasOwnProperty('merchant_id')) {
        obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('open_rate_formatted')) {
        obj['open_rate_formatted'] = ApiClient.convertToType(data['open_rate_formatted'], 'String');
      }
      if (data.hasOwnProperty('revenue_formatted')) {
        obj['revenue_formatted'] = ApiClient.convertToType(data['revenue_formatted'], 'String');
      }
      if (data.hasOwnProperty('scheduled_dts')) {
        obj['scheduled_dts'] = ApiClient.convertToType(data['scheduled_dts'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('status_dts')) {
        obj['status_dts'] = ApiClient.convertToType(data['status_dts'], 'String');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Click rate of emails
   * @member {String} click_rate_formatted
   */
  exports.prototype['click_rate_formatted'] = undefined;
  /**
   * Created date
   * @member {String} created_dts
   */
  exports.prototype['created_dts'] = undefined;
  /**
   * True if this campaign was deleted
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * Email campaign UUID
   * @member {String} email_campaign_uuid
   */
  exports.prototype['email_campaign_uuid'] = undefined;
  /**
   * Email communication sequence UUID
   * @member {String} email_communication_sequence_uuid
   */
  exports.prototype['email_communication_sequence_uuid'] = undefined;
  /**
   * List and segment memberships
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailListSegmentMembership>} memberships
   */
  exports.prototype['memberships'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * Name of email campaign
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Open rate of emails
   * @member {String} open_rate_formatted
   */
  exports.prototype['open_rate_formatted'] = undefined;
  /**
   * Revenue associated with campaign
   * @member {String} revenue_formatted
   */
  exports.prototype['revenue_formatted'] = undefined;
  /**
   * Scheduled date
   * @member {String} scheduled_dts
   */
  exports.prototype['scheduled_dts'] = undefined;
  /**
   * Status of the campaign of draft, archived, and sent
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Timestamp when the last status change happened
   * @member {String} status_dts
   */
  exports.prototype['status_dts'] = undefined;
  /**
   * Storefront oid
   * @member {Number} storefront_oid
   */
  exports.prototype['storefront_oid'] = undefined;



  return exports;
}));


