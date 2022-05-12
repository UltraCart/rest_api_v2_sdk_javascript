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
    root.UltraCartRestApiV2.PaymentsConfigurationPayPal = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.PaymentsConfigurationRestrictions);
  }
}(this, function(ApiClient, PaymentsConfigurationRestrictions) {
  'use strict';

  /**
   * The PaymentsConfigurationPayPal model module.
   * @module com.ultracart.admin.v2.models/PaymentsConfigurationPayPal
   * @version 3.10.1
   */

  /**
   * Constructs a new <code>PaymentsConfigurationPayPal</code>.
   * @alias module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentsConfigurationPayPal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal} The populated <code>PaymentsConfigurationPayPal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_paypal'))
        obj.accept_paypal = ApiClient.convertToType(data['accept_paypal'], 'Boolean');
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('api_password'))
        obj.api_password = ApiClient.convertToType(data['api_password'], 'String');
      if (data.hasOwnProperty('api_username'))
        obj.api_username = ApiClient.convertToType(data['api_username'], 'String');
      if (data.hasOwnProperty('certificate_on_file'))
        obj.certificate_on_file = ApiClient.convertToType(data['certificate_on_file'], 'Boolean');
      if (data.hasOwnProperty('deposit_to_account'))
        obj.deposit_to_account = ApiClient.convertToType(data['deposit_to_account'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], 'String');
      if (data.hasOwnProperty('header_image_url'))
        obj.header_image_url = ApiClient.convertToType(data['header_image_url'], 'String');
      if (data.hasOwnProperty('hide_bill_me_later'))
        obj.hide_bill_me_later = ApiClient.convertToType(data['hide_bill_me_later'], 'Boolean');
      if (data.hasOwnProperty('hide_express_checkout_on_view_cart'))
        obj.hide_express_checkout_on_view_cart = ApiClient.convertToType(data['hide_express_checkout_on_view_cart'], 'Boolean');
      if (data.hasOwnProperty('hide_for_unshipped_orders'))
        obj.hide_for_unshipped_orders = ApiClient.convertToType(data['hide_for_unshipped_orders'], 'Boolean');
      if (data.hasOwnProperty('hold_in_ar'))
        obj.hold_in_ar = ApiClient.convertToType(data['hold_in_ar'], 'Boolean');
      if (data.hasOwnProperty('landing_page'))
        obj.landing_page = ApiClient.convertToType(data['landing_page'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('private_key_password'))
        obj.private_key_password = ApiClient.convertToType(data['private_key_password'], 'String');
      if (data.hasOwnProperty('processing_fee'))
        obj.processing_fee = ApiClient.convertToType(data['processing_fee'], 'Number');
      if (data.hasOwnProperty('processing_percentage'))
        obj.processing_percentage = ApiClient.convertToType(data['processing_percentage'], 'Number');
      if (data.hasOwnProperty('push_paypal'))
        obj.push_paypal = ApiClient.convertToType(data['push_paypal'], 'Boolean');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = PaymentsConfigurationRestrictions.constructFromObject(data['restrictions']);
      if (data.hasOwnProperty('send_recurring'))
        obj.send_recurring = ApiClient.convertToType(data['send_recurring'], 'Boolean');
      if (data.hasOwnProperty('short_paypal_marketing_text'))
        obj.short_paypal_marketing_text = ApiClient.convertToType(data['short_paypal_marketing_text'], 'Boolean');
      if (data.hasOwnProperty('show_card_logos_not_directly_supported'))
        obj.show_card_logos_not_directly_supported = ApiClient.convertToType(data['show_card_logos_not_directly_supported'], 'Boolean');
      if (data.hasOwnProperty('show_signature'))
        obj.show_signature = ApiClient.convertToType(data['show_signature'], 'Boolean');
      if (data.hasOwnProperty('signature'))
        obj.signature = ApiClient.convertToType(data['signature'], 'String');
      if (data.hasOwnProperty('solution_type'))
        obj.solution_type = ApiClient.convertToType(data['solution_type'], 'String');
      if (data.hasOwnProperty('summary_email'))
        obj.summary_email = ApiClient.convertToType(data['summary_email'], 'String');
      if (data.hasOwnProperty('summary_mode'))
        obj.summary_mode = ApiClient.convertToType(data['summary_mode'], 'String');
      if (data.hasOwnProperty('zero_dollar_penny'))
        obj.zero_dollar_penny = ApiClient.convertToType(data['zero_dollar_penny'], 'Boolean');
    }
    return obj;
  }

  /**
   * Master flag that determine if PayPal is an active payment for this account
   * @member {Boolean} accept_paypal
   */
  exports.prototype.accept_paypal = undefined;

  /**
   * Optional accounting code that is set to Quickbooks when an order uses this payment method.
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * PayPal API password
   * @member {String} api_password
   */
  exports.prototype.api_password = undefined;

  /**
   * PayPal API username
   * @member {String} api_username
   */
  exports.prototype.api_username = undefined;

  /**
   * (Legacy) true if there is a PayPal certificate already on file. Used to manage the internal UI
   * @member {Boolean} certificate_on_file
   */
  exports.prototype.certificate_on_file = undefined;

  /**
   * The account to deposit funds
   * @member {String} deposit_to_account
   */
  exports.prototype.deposit_to_account = undefined;

  /**
   * The main PayPal email address
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * PayPal configuration, live or sandbox
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal.EnvironmentEnum} environment
   */
  exports.prototype.environment = undefined;

  /**
   * The URL for the PayPal header
   * @member {String} header_image_url
   */
  exports.prototype.header_image_url = undefined;

  /**
   * True if the Bill Me Later button should be hidden during checkout
   * @member {Boolean} hide_bill_me_later
   */
  exports.prototype.hide_bill_me_later = undefined;

  /**
   * True if the PayPal express checkout button should be hidden on the view cart page.  This will force the customer to enter address information before being able to checkout with PayPal
   * @member {Boolean} hide_express_checkout_on_view_cart
   */
  exports.prototype.hide_express_checkout_on_view_cart = undefined;

  /**
   * True if PayPal should be hidden for orders with no shippable product, such as digital orders
   * @member {Boolean} hide_for_unshipped_orders
   */
  exports.prototype.hide_for_unshipped_orders = undefined;

  /**
   * If true, PayPal orders are held in Accounts Receivable for review
   * @member {Boolean} hold_in_ar
   */
  exports.prototype.hold_in_ar = undefined;

  /**
   * PayPal landing page
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal.LandingPageEnum} landing_page
   */
  exports.prototype.landing_page = undefined;

  /**
   * The PayPal mode
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal.ModeEnum} mode
   */
  exports.prototype.mode = undefined;

  /**
   * PayPal API private key password
   * @member {String} private_key_password
   */
  exports.prototype.private_key_password = undefined;

  /**
   * Optional additional fee to charge if PayPal is used.  It is rare for this to be used.
   * @member {Number} processing_fee
   */
  exports.prototype.processing_fee = undefined;

  /**
   * The processing percentage charged by PayPal
   * @member {Number} processing_percentage
   */
  exports.prototype.processing_percentage = undefined;

  /**
   * True if the internal UI should recommend opening a PayPal account
   * @member {Boolean} push_paypal
   */
  exports.prototype.push_paypal = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationRestrictions} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * True if UltraCart should send recurring orders to PayPal.  There are restrictions to what PayPal will accept for recurring orders.  Be careful.
   * @member {Boolean} send_recurring
   */
  exports.prototype.send_recurring = undefined;

  /**
   * Short marketing text
   * @member {Boolean} short_paypal_marketing_text
   */
  exports.prototype.short_paypal_marketing_text = undefined;

  /**
   * internal ui flag
   * @member {Boolean} show_card_logos_not_directly_supported
   */
  exports.prototype.show_card_logos_not_directly_supported = undefined;

  /**
   * Internal flag used to manage UI
   * @member {Boolean} show_signature
   */
  exports.prototype.show_signature = undefined;

  /**
   * PayPal signature
   * @member {String} signature
   */
  exports.prototype.signature = undefined;

  /**
   * PayPal solution type
   * @member {module:com.ultracart.admin.v2.models/PaymentsConfigurationPayPal.SolutionTypeEnum} solution_type
   */
  exports.prototype.solution_type = undefined;

  /**
   * The email where PayPal summaries should be sent
   * @member {String} summary_email
   */
  exports.prototype.summary_email = undefined;

  /**
   * Description of what mode PayPal is operating
   * @member {String} summary_mode
   */
  exports.prototype.summary_mode = undefined;

  /**
   * Send free items to PayPal as one cent items and subtract this penny from shipping.  PayPal does not allow the sale of free items.
   * @member {Boolean} zero_dollar_penny
   */
  exports.prototype.zero_dollar_penny = undefined;


  /**
   * Allowed values for the <code>environment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnvironmentEnum = {
    /**
     * value: "Live"
     * @const
     */
    Live: "Live",

    /**
     * value: "Sandbox"
     * @const
     */
    Sandbox: "Sandbox"
  };


  /**
   * Allowed values for the <code>landing_page</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LandingPageEnum = {
    /**
     * value: "Billing"
     * @const
     */
    Billing: "Billing",

    /**
     * value: "Login"
     * @const
     */
    Login: "Login"
  };


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "WPPECO"
     * @const
     */
    WPPECO: "WPPECO",

    /**
     * value: "WPPECDP"
     * @const
     */
    WPPECDP: "WPPECDP"
  };


  /**
   * Allowed values for the <code>solution_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SolutionTypeEnum = {
    /**
     * value: "Sole"
     * @const
     */
    Sole: "Sole",

    /**
     * value: "Mark"
     * @const
     */
    Mark: "Mark"
  };

  return exports;

}));
