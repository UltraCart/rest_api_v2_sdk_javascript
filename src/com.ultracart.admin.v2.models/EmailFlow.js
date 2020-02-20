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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailFlow = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailFlow model module.
   * @module com.ultracart.admin.v2.models/EmailFlow
   * @version 2.4.76
   */

  /**
   * Constructs a new <code>EmailFlow</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlow
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>EmailFlow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailFlow} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailFlow} The populated <code>EmailFlow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allow_multiple_concurrent_enrollments')) {
        obj['allow_multiple_concurrent_enrollments'] = ApiClient.convertToType(data['allow_multiple_concurrent_enrollments'], 'Boolean');
      }
      if (data.hasOwnProperty('click_rate_formatted')) {
        obj['click_rate_formatted'] = ApiClient.convertToType(data['click_rate_formatted'], 'String');
      }
      if (data.hasOwnProperty('created_dts')) {
        obj['created_dts'] = ApiClient.convertToType(data['created_dts'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('email_communication_sequence_uuid')) {
        obj['email_communication_sequence_uuid'] = ApiClient.convertToType(data['email_communication_sequence_uuid'], 'String');
      }
      if (data.hasOwnProperty('email_flow_uuid')) {
        obj['email_flow_uuid'] = ApiClient.convertToType(data['email_flow_uuid'], 'String');
      }
      if (data.hasOwnProperty('esp_domain_user')) {
        obj['esp_domain_user'] = ApiClient.convertToType(data['esp_domain_user'], 'String');
      }
      if (data.hasOwnProperty('esp_domain_uuid')) {
        obj['esp_domain_uuid'] = ApiClient.convertToType(data['esp_domain_uuid'], 'String');
      }
      if (data.hasOwnProperty('esp_friendly_name')) {
        obj['esp_friendly_name'] = ApiClient.convertToType(data['esp_friendly_name'], 'String');
      }
      if (data.hasOwnProperty('filter_profile_equation_json')) {
        obj['filter_profile_equation_json'] = ApiClient.convertToType(data['filter_profile_equation_json'], 'String');
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('status_dts')) {
        obj['status_dts'] = ApiClient.convertToType(data['status_dts'], 'String');
      }
      if (data.hasOwnProperty('storefront_oid')) {
        obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
      }
      if (data.hasOwnProperty('trigger_parameter')) {
        obj['trigger_parameter'] = ApiClient.convertToType(data['trigger_parameter'], 'String');
      }
      if (data.hasOwnProperty('trigger_parameter_name')) {
        obj['trigger_parameter_name'] = ApiClient.convertToType(data['trigger_parameter_name'], 'String');
      }
      if (data.hasOwnProperty('trigger_type')) {
        obj['trigger_type'] = ApiClient.convertToType(data['trigger_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if a customer may be enrolled in this flow multiple times
   * @member {Boolean} allow_multiple_concurrent_enrollments
   */
  exports.prototype['allow_multiple_concurrent_enrollments'] = undefined;
  /**
   * Click rate of emails, formatted
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
   * Email communication sequence UUID
   * @member {String} email_communication_sequence_uuid
   */
  exports.prototype['email_communication_sequence_uuid'] = undefined;
  /**
   * Email flow UUID
   * @member {String} email_flow_uuid
   */
  exports.prototype['email_flow_uuid'] = undefined;
  /**
   * Username of sending email
   * @member {String} esp_domain_user
   */
  exports.prototype['esp_domain_user'] = undefined;
  /**
   * UUID of sending domain
   * @member {String} esp_domain_uuid
   */
  exports.prototype['esp_domain_uuid'] = undefined;
  /**
   * Friendly name of the sending email
   * @member {String} esp_friendly_name
   */
  exports.prototype['esp_friendly_name'] = undefined;
  /**
   * File profile equation json
   * @member {String} filter_profile_equation_json
   */
  exports.prototype['filter_profile_equation_json'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * Name of email flow
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Open rate of emails, formatted
   * @member {String} open_rate_formatted
   */
  exports.prototype['open_rate_formatted'] = undefined;
  /**
   * Revenue, formatted
   * @member {String} revenue_formatted
   */
  exports.prototype['revenue_formatted'] = undefined;
  /**
   * Status of the campaign of draft, archived, active, and inactive
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
  /**
   * Trigger parameter
   * @member {String} trigger_parameter
   */
  exports.prototype['trigger_parameter'] = undefined;
  /**
   * Trigger parameter name
   * @member {String} trigger_parameter_name
   */
  exports.prototype['trigger_parameter_name'] = undefined;
  /**
   * Trigger type
   * @member {String} trigger_type
   */
  exports.prototype['trigger_type'] = undefined;



  return exports;
}));


