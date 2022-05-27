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
    define(['ApiClient', 'com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsConfigurationRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.PaymentsConfigurationWePay = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationWePay model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationWePay
   * @version 3.10.8
   */

  /**
   * Constructs a new <code>PaymentsConfigurationWePay</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationWePay
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationWePay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationWePay} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationWePay} The populated <code>PaymentsConfigurationWePay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_wepay'))
        obj.accept_wepay = ApiClient.convertToType(data['accept_wepay'], 'Boolean');
      if (data.hasOwnProperty('account_update_uri'))
        obj.account_update_uri = ApiClient.convertToType(data['account_update_uri'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], 'String');
      if (data.hasOwnProperty('canada_accept_debit_cards'))
        obj.canada_accept_debit_cards = ApiClient.convertToType(data['canada_accept_debit_cards'], 'Boolean');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('company_description'))
        obj.company_description = ApiClient.convertToType(data['company_description'], 'String');
      if (data.hasOwnProperty('console_hostname'))
        obj.console_hostname = ApiClient.convertToType(data['console_hostname'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('credit_card_rate'))
        obj.credit_card_rate = ApiClient.convertToType(data['credit_card_rate'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('expected_revenue'))
        obj.expected_revenue = ApiClient.convertToType(data['expected_revenue'], 'String');
      if (data.hasOwnProperty('hide_credit_card_non_ultracart_payments'))
        obj.hide_credit_card_non_ultracart_payments = ApiClient.convertToType(data['hide_credit_card_non_ultracart_payments'], 'Boolean');
      if (data.hasOwnProperty('hide_surcharge_amount'))
        obj.hide_surcharge_amount = ApiClient.convertToType(data['hide_surcharge_amount'], 'Boolean');
      if (data.hasOwnProperty('industry'))
        obj.industry = ApiClient.convertToType(data['industry'], 'String');
      if (data.hasOwnProperty('owner_email'))
        obj.owner_email = ApiClient.convertToType(data['owner_email'], 'String');
      if (data.hasOwnProperty('owner_name'))
        obj.owner_name = ApiClient.convertToType(data['owner_name'], 'String');
      if (data.hasOwnProperty('owner_phone'))
        obj.owner_phone = ApiClient.convertToType(data['owner_phone'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('short_paypal_marketing_text'))
        obj.short_paypal_marketing_text = ApiClient.convertToType(data['short_paypal_marketing_text'], 'Boolean');
      if (data.hasOwnProperty('show_ultracart_payments_disabled'))
        obj.show_ultracart_payments_disabled = ApiClient.convertToType(data['show_ultracart_payments_disabled'], 'Boolean');
      if (data.hasOwnProperty('show_ultracart_payments_intro'))
        obj.show_ultracart_payments_intro = ApiClient.convertToType(data['show_ultracart_payments_intro'], 'Boolean');
      if (data.hasOwnProperty('show_ultracart_payments_verification'))
        obj.show_ultracart_payments_verification = ApiClient.convertToType(data['show_ultracart_payments_verification'], 'Boolean');
      if (data.hasOwnProperty('show_ultracart_payments_verified'))
        obj.show_ultracart_payments_verified = ApiClient.convertToType(data['show_ultracart_payments_verified'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('website_url'))
        obj.website_url = ApiClient.convertToType(data['website_url'], 'String');
    }
    return obj;
  }

  /**
   * Master flag indicating this merchant accepts UltraCart Payments WePay
   * @member {Boolean} accept_wepay
   */
  exports.prototype.accept_wepay = undefined;

  /**
   * URI for updating the WePay account
   * @member {String} account_update_uri
   */
  exports.prototype.account_update_uri = undefined;

  /**
   * Address line 1
   * @member {String} address1
   */
  exports.prototype.address1 = undefined;

  /**
   * Address line 2
   * @member {String} address2
   */
  exports.prototype.address2 = undefined;

  /**
   * For Canadian merchants, true if they wish to accept debit cards
   * @member {Boolean} canada_accept_debit_cards
   */
  exports.prototype.canada_accept_debit_cards = undefined;

  /**
   * City
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * Company
   * @member {String} company
   */
  exports.prototype.company = undefined;

  /**
   * Company description
   * @member {String} company_description
   */
  exports.prototype.company_description = undefined;

  /**
   * Console hostname
   * @member {String} console_hostname
   */
  exports.prototype.console_hostname = undefined;

  /**
   * Country
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * WePay credit card rate
   * @member {String} credit_card_rate
   */
  exports.prototype.credit_card_rate = undefined;

  /**
   * Base currency for transactions
   * @member {String} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Expected Revenue
   * @member {String} expected_revenue
   */
  exports.prototype.expected_revenue = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} hide_credit_card_non_ultracart_payments
   */
  exports.prototype.hide_credit_card_non_ultracart_payments = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} hide_surcharge_amount
   */
  exports.prototype.hide_surcharge_amount = undefined;

  /**
   * Industry
   * @member {String} industry
   */
  exports.prototype.industry = undefined;

  /**
   * Owner email
   * @member {String} owner_email
   */
  exports.prototype.owner_email = undefined;

  /**
   * Owner name
   * @member {String} owner_name
   */
  exports.prototype.owner_name = undefined;

  /**
   * Owner phone
   * @member {String} owner_phone
   */
  exports.prototype.owner_phone = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * Internal UI aid
   * @member {Boolean} short_paypal_marketing_text
   */
  exports.prototype.short_paypal_marketing_text = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} show_ultracart_payments_disabled
   */
  exports.prototype.show_ultracart_payments_disabled = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} show_ultracart_payments_intro
   */
  exports.prototype.show_ultracart_payments_intro = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} show_ultracart_payments_verification
   */
  exports.prototype.show_ultracart_payments_verification = undefined;

  /**
   * Internal flag to aid UI
   * @member {Boolean} show_ultracart_payments_verified
   */
  exports.prototype.show_ultracart_payments_verified = undefined;

  /**
   * State
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * Website URL
   * @member {String} website_url
   */
  exports.prototype.website_url = undefined;

  return exports;

}));
