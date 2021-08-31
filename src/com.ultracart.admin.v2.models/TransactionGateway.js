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
    root.UltraCartRestApiV2.TransactionGateway = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransactionGateway model module.
   * @module com.ultracart.admin.v2.models/TransactionGateway
   * @version 3.6.8
   */

  /**
   * Constructs a new <code>TransactionGateway</code>.
   * @alias module:com.ultracart.admin.v2.models/TransactionGateway
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TransactionGateway</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TransactionGateway} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TransactionGateway} The populated <code>TransactionGateway</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_html'))
        obj.arbitrary_html = ApiClient.convertToType(data['arbitrary_html'], 'String');
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('credit_card_capable'))
        obj.credit_card_capable = ApiClient.convertToType(data['credit_card_capable'], 'Boolean');
      if (data.hasOwnProperty('echeck_capable'))
        obj.echeck_capable = ApiClient.convertToType(data['echeck_capable'], 'Boolean');
      if (data.hasOwnProperty('echeck_supported'))
        obj.echeck_supported = ApiClient.convertToType(data['echeck_supported'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('gateway_cert_pem'))
        obj.gateway_cert_pem = ApiClient.convertToType(data['gateway_cert_pem'], 'String');
      if (data.hasOwnProperty('gateway_cert_pem_label'))
        obj.gateway_cert_pem_label = ApiClient.convertToType(data['gateway_cert_pem_label'], 'String');
      if (data.hasOwnProperty('gateway_email'))
        obj.gateway_email = ApiClient.convertToType(data['gateway_email'], 'String');
      if (data.hasOwnProperty('gateway_email_label'))
        obj.gateway_email_label = ApiClient.convertToType(data['gateway_email_label'], 'String');
      if (data.hasOwnProperty('gateway_environment'))
        obj.gateway_environment = ApiClient.convertToType(data['gateway_environment'], 'String');
      if (data.hasOwnProperty('gateway_environment_label'))
        obj.gateway_environment_label = ApiClient.convertToType(data['gateway_environment_label'], 'String');
      if (data.hasOwnProperty('gateway_environments'))
        obj.gateway_environments = ApiClient.convertToType(data['gateway_environments'], ['String']);
      if (data.hasOwnProperty('gateway_header_back_color'))
        obj.gateway_header_back_color = ApiClient.convertToType(data['gateway_header_back_color'], 'String');
      if (data.hasOwnProperty('gateway_header_border_color'))
        obj.gateway_header_border_color = ApiClient.convertToType(data['gateway_header_border_color'], 'String');
      if (data.hasOwnProperty('gateway_header_image_url'))
        obj.gateway_header_image_url = ApiClient.convertToType(data['gateway_header_image_url'], 'String');
      if (data.hasOwnProperty('gateway_key'))
        obj.gateway_key = ApiClient.convertToType(data['gateway_key'], 'String');
      if (data.hasOwnProperty('gateway_key_label'))
        obj.gateway_key_label = ApiClient.convertToType(data['gateway_key_label'], 'String');
      if (data.hasOwnProperty('gateway_key_pem'))
        obj.gateway_key_pem = ApiClient.convertToType(data['gateway_key_pem'], 'String');
      if (data.hasOwnProperty('gateway_key_pem_label'))
        obj.gateway_key_pem_label = ApiClient.convertToType(data['gateway_key_pem_label'], 'String');
      if (data.hasOwnProperty('gateway_landing_page'))
        obj.gateway_landing_page = ApiClient.convertToType(data['gateway_landing_page'], 'String');
      if (data.hasOwnProperty('gateway_merchant_id'))
        obj.gateway_merchant_id = ApiClient.convertToType(data['gateway_merchant_id'], 'String');
      if (data.hasOwnProperty('gateway_merchant_id_label'))
        obj.gateway_merchant_id_label = ApiClient.convertToType(data['gateway_merchant_id_label'], 'String');
      if (data.hasOwnProperty('gateway_mode'))
        obj.gateway_mode = ApiClient.convertToType(data['gateway_mode'], 'String');
      if (data.hasOwnProperty('gateway_mode_label'))
        obj.gateway_mode_label = ApiClient.convertToType(data['gateway_mode_label'], 'String');
      if (data.hasOwnProperty('gateway_modes'))
        obj.gateway_modes = ApiClient.convertToType(data['gateway_modes'], ['String']);
      if (data.hasOwnProperty('gateway_page_style'))
        obj.gateway_page_style = ApiClient.convertToType(data['gateway_page_style'], 'String');
      if (data.hasOwnProperty('gateway_page_style_label'))
        obj.gateway_page_style_label = ApiClient.convertToType(data['gateway_page_style_label'], 'String');
      if (data.hasOwnProperty('gateway_page_styles'))
        obj.gateway_page_styles = ApiClient.convertToType(data['gateway_page_styles'], ['String']);
      if (data.hasOwnProperty('gateway_partner'))
        obj.gateway_partner = ApiClient.convertToType(data['gateway_partner'], 'String');
      if (data.hasOwnProperty('gateway_partner_label'))
        obj.gateway_partner_label = ApiClient.convertToType(data['gateway_partner_label'], 'String');
      if (data.hasOwnProperty('gateway_password'))
        obj.gateway_password = ApiClient.convertToType(data['gateway_password'], 'String');
      if (data.hasOwnProperty('gateway_password_label'))
        obj.gateway_password_label = ApiClient.convertToType(data['gateway_password_label'], 'String');
      if (data.hasOwnProperty('gateway_payflow_color'))
        obj.gateway_payflow_color = ApiClient.convertToType(data['gateway_payflow_color'], 'String');
      if (data.hasOwnProperty('gateway_private_key_password'))
        obj.gateway_private_key_password = ApiClient.convertToType(data['gateway_private_key_password'], 'String');
      if (data.hasOwnProperty('gateway_private_key_password_label'))
        obj.gateway_private_key_password_label = ApiClient.convertToType(data['gateway_private_key_password_label'], 'String');
      if (data.hasOwnProperty('gateway_solution_type'))
        obj.gateway_solution_type = ApiClient.convertToType(data['gateway_solution_type'], 'String');
      if (data.hasOwnProperty('gateway_solution_type_label'))
        obj.gateway_solution_type_label = ApiClient.convertToType(data['gateway_solution_type_label'], 'String');
      if (data.hasOwnProperty('gateway_solution_types'))
        obj.gateway_solution_types = ApiClient.convertToType(data['gateway_solution_types'], ['String']);
      if (data.hasOwnProperty('gateway_url'))
        obj.gateway_url = ApiClient.convertToType(data['gateway_url'], 'String');
      if (data.hasOwnProperty('gateway_url_label'))
        obj.gateway_url_label = ApiClient.convertToType(data['gateway_url_label'], 'String');
      if (data.hasOwnProperty('gateway_username'))
        obj.gateway_username = ApiClient.convertToType(data['gateway_username'], 'String');
      if (data.hasOwnProperty('gateway_username_label'))
        obj.gateway_username_label = ApiClient.convertToType(data['gateway_username_label'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_amex'))
        obj.merchant_account_profile_amex = ApiClient.convertToType(data['merchant_account_profile_amex'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_diners_club'))
        obj.merchant_account_profile_diners_club = ApiClient.convertToType(data['merchant_account_profile_diners_club'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_discover'))
        obj.merchant_account_profile_discover = ApiClient.convertToType(data['merchant_account_profile_discover'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_jcb'))
        obj.merchant_account_profile_jcb = ApiClient.convertToType(data['merchant_account_profile_jcb'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_mastercard'))
        obj.merchant_account_profile_mastercard = ApiClient.convertToType(data['merchant_account_profile_mastercard'], 'String');
      if (data.hasOwnProperty('merchant_account_profile_visa'))
        obj.merchant_account_profile_visa = ApiClient.convertToType(data['merchant_account_profile_visa'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('multi_currency_details'))
        obj.multi_currency_details = ApiClient.convertToType(data['multi_currency_details'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('refund_supported'))
        obj.refund_supported = ApiClient.convertToType(data['refund_supported'], 'Boolean');
      if (data.hasOwnProperty('require_echeck_tax_id_or_drivers_license'))
        obj.require_echeck_tax_id_or_drivers_license = ApiClient.convertToType(data['require_echeck_tax_id_or_drivers_license'], 'Boolean');
      if (data.hasOwnProperty('support_vbv_3ds'))
        obj.support_vbv_3ds = ApiClient.convertToType(data['support_vbv_3ds'], 'Boolean');
      if (data.hasOwnProperty('supports_amex'))
        obj.supports_amex = ApiClient.convertToType(data['supports_amex'], 'Boolean');
      if (data.hasOwnProperty('supports_diners_club'))
        obj.supports_diners_club = ApiClient.convertToType(data['supports_diners_club'], 'Boolean');
      if (data.hasOwnProperty('supports_discover'))
        obj.supports_discover = ApiClient.convertToType(data['supports_discover'], 'Boolean');
      if (data.hasOwnProperty('supports_echeck'))
        obj.supports_echeck = ApiClient.convertToType(data['supports_echeck'], 'Boolean');
      if (data.hasOwnProperty('supports_electronic_gift_card'))
        obj.supports_electronic_gift_card = ApiClient.convertToType(data['supports_electronic_gift_card'], 'Boolean');
      if (data.hasOwnProperty('supports_jcb'))
        obj.supports_jcb = ApiClient.convertToType(data['supports_jcb'], 'Boolean');
      if (data.hasOwnProperty('supports_mastercard'))
        obj.supports_mastercard = ApiClient.convertToType(data['supports_mastercard'], 'Boolean');
      if (data.hasOwnProperty('supports_visa'))
        obj.supports_visa = ApiClient.convertToType(data['supports_visa'], 'Boolean');
      if (data.hasOwnProperty('third_party'))
        obj.third_party = ApiClient.convertToType(data['third_party'], 'Boolean');
    }
    return obj;
  }

  /**
   * Additional html to display for this transaction gateway.  This html will include instructions and connection links
   * @member {String} arbitrary_html
   */
  exports.prototype.arbitrary_html = undefined;

  /**
   * Additional comments
   * @member {String} comment
   */
  exports.prototype.comment = undefined;

  /**
   * True if this gateway supports credit cards
   * @member {Boolean} credit_card_capable
   */
  exports.prototype.credit_card_capable = undefined;

  /**
   * True if this gateway supports eChecks
   * @member {Boolean} echeck_capable
   */
  exports.prototype.echeck_capable = undefined;

  /**
   * True if this gateway supports eChecks
   * @member {String} echeck_supported
   */
  exports.prototype.echeck_supported = undefined;

  /**
   * True if this transaction gateway is the currently active gateway.
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * Cryptographic public certificate allowing UltraCart to communicate securely with this gateway.
   * @member {String} gateway_cert_pem
   */
  exports.prototype.gateway_cert_pem = undefined;

  /**
   * The label for the gateway certificate pem.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_cert_pem_label
   */
  exports.prototype.gateway_cert_pem_label = undefined;

  /**
   * Gateway Email
   * @member {String} gateway_email
   */
  exports.prototype.gateway_email = undefined;

  /**
   * The label for the gateway email.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_email_label
   */
  exports.prototype.gateway_email_label = undefined;

  /**
   * Gateway Environment to indicate sandbox versus production environments
   * @member {String} gateway_environment
   */
  exports.prototype.gateway_environment = undefined;

  /**
   * The label for the gateway environment.  The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_environment_label
   */
  exports.prototype.gateway_environment_label = undefined;

  /**
   * Used to populate drop down lists for the gateway environment.  Varies by gateway.
   * @member {Array.<String>} gateway_environments
   */
  exports.prototype.gateway_environments = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_header_back_color
   */
  exports.prototype.gateway_header_back_color = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_header_border_color
   */
  exports.prototype.gateway_header_border_color = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_header_image_url
   */
  exports.prototype.gateway_header_image_url = undefined;

  /**
   * Gateway Key
   * @member {String} gateway_key
   */
  exports.prototype.gateway_key = undefined;

  /**
   * The label for the gateway key.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_key_label
   */
  exports.prototype.gateway_key_label = undefined;

  /**
   * Cryptographic private key allowing UltraCart to communicate securely with this gateway.
   * @member {String} gateway_key_pem
   */
  exports.prototype.gateway_key_pem = undefined;

  /**
   * The label for the gateway key pem.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_key_pem_label
   */
  exports.prototype.gateway_key_pem_label = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_landing_page
   */
  exports.prototype.gateway_landing_page = undefined;

  /**
   * Gateway Merchant ID
   * @member {String} gateway_merchant_id
   */
  exports.prototype.gateway_merchant_id = undefined;

  /**
   * The label for the gateway merchant id.  The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_merchant_id_label
   */
  exports.prototype.gateway_merchant_id_label = undefined;

  /**
   * Gateway Mode
   * @member {String} gateway_mode
   */
  exports.prototype.gateway_mode = undefined;

  /**
   * The label for the gateway mode.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_mode_label
   */
  exports.prototype.gateway_mode_label = undefined;

  /**
   * Used to populate drop down lists for gateway modes
   * @member {Array.<String>} gateway_modes
   */
  exports.prototype.gateway_modes = undefined;

  /**
   * Gateway Page Style
   * @member {String} gateway_page_style
   */
  exports.prototype.gateway_page_style = undefined;

  /**
   * Gateway page style label
   * @member {String} gateway_page_style_label
   */
  exports.prototype.gateway_page_style_label = undefined;

  /**
   * Used to populate drop down lists for gateway page style
   * @member {Array.<String>} gateway_page_styles
   */
  exports.prototype.gateway_page_styles = undefined;

  /**
   * Gateway Partner
   * @member {String} gateway_partner
   */
  exports.prototype.gateway_partner = undefined;

  /**
   * The label for the gateway partner.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_partner_label
   */
  exports.prototype.gateway_partner_label = undefined;

  /**
   * Gateway Password
   * @member {String} gateway_password
   */
  exports.prototype.gateway_password = undefined;

  /**
   * The label for the gateway password.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_password_label
   */
  exports.prototype.gateway_password_label = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_payflow_color
   */
  exports.prototype.gateway_payflow_color = undefined;

  /**
   * Gateway private key password
   * @member {String} gateway_private_key_password
   */
  exports.prototype.gateway_private_key_password = undefined;

  /**
   * The label for the gateway private key password.  The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_private_key_password_label
   */
  exports.prototype.gateway_private_key_password_label = undefined;

  /**
   * Optional Look and feel setting for Verified-by-VISA.  Only needed if you are using 3DS
   * @member {String} gateway_solution_type
   */
  exports.prototype.gateway_solution_type = undefined;

  /**
   * The label for the gateway solution type.  The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_solution_type_label
   */
  exports.prototype.gateway_solution_type_label = undefined;

  /**
   * Used to populate drop down lists for gateway solution types
   * @member {Array.<String>} gateway_solution_types
   */
  exports.prototype.gateway_solution_types = undefined;

  /**
   * Gateway URL
   * @member {String} gateway_url
   */
  exports.prototype.gateway_url = undefined;

  /**
   * The label for the gateway url.   The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_url_label
   */
  exports.prototype.gateway_url_label = undefined;

  /**
   * Gateway Username
   * @member {String} gateway_username
   */
  exports.prototype.gateway_username = undefined;

  /**
   * The label for the gateway username.  The actual value stored may vary by gateway, so the label will vary too.
   * @member {String} gateway_username_label
   */
  exports.prototype.gateway_username_label = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for American Express cards.
   * @member {String} merchant_account_profile_amex
   */
  exports.prototype.merchant_account_profile_amex = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for Diners Club cards.
   * @member {String} merchant_account_profile_diners_club
   */
  exports.prototype.merchant_account_profile_diners_club = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for Discover cards.
   * @member {String} merchant_account_profile_discover
   */
  exports.prototype.merchant_account_profile_discover = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for JCB cards.
   * @member {String} merchant_account_profile_jcb
   */
  exports.prototype.merchant_account_profile_jcb = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for MasterCard cards.
   * @member {String} merchant_account_profile_mastercard
   */
  exports.prototype.merchant_account_profile_mastercard = undefined;

  /**
   * If a merchant has multiple card processing accounts, this is the one to use for VISA cards.
   * @member {String} merchant_account_profile_visa
   */
  exports.prototype.merchant_account_profile_visa = undefined;

  /**
   * UltraCart Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * True if this gateway provides details for multiple currency transactions
   * @member {Boolean} multi_currency_details
   */
  exports.prototype.multi_currency_details = undefined;

  /**
   * Name of this transaction gateway
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * True if this gateway supports refunds
   * @member {Boolean} refund_supported
   */
  exports.prototype.refund_supported = undefined;

  /**
   * If true, e-Check transaction will require either a Tax ID or a Driver License
   * @member {Boolean} require_echeck_tax_id_or_drivers_license
   */
  exports.prototype.require_echeck_tax_id_or_drivers_license = undefined;

  /**
   * True if this gateway supported Verified-by-VISA 3D Secure
   * @member {Boolean} support_vbv_3ds
   */
  exports.prototype.support_vbv_3ds = undefined;

  /**
   * If true, this gateway will attempt to process American Express transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_amex
   */
  exports.prototype.supports_amex = undefined;

  /**
   * If true, this gateway will attempt to process Diners Club transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_diners_club
   */
  exports.prototype.supports_diners_club = undefined;

  /**
   * If true, this gateway will attempt to process Discover transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_discover
   */
  exports.prototype.supports_discover = undefined;

  /**
   * If true, this gateway will attempt to process e-Check transactions.  If false, the customer will not be allowed to use e-Checks.
   * @member {Boolean} supports_echeck
   */
  exports.prototype.supports_echeck = undefined;

  /**
   * if true, this gateway will attempt to process electronic gift cards.
   * @member {Boolean} supports_electronic_gift_card
   */
  exports.prototype.supports_electronic_gift_card = undefined;

  /**
   * If true, this gateway will attempt to process JCB transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_jcb
   */
  exports.prototype.supports_jcb = undefined;

  /**
   * If true, this gateway will attempt to process MasterCard transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_mastercard
   */
  exports.prototype.supports_mastercard = undefined;

  /**
   * If true, this gateway will attempt to process VISA transactions.  If false, the customer will not be allowed to use this type of Credit Card.
   * @member {Boolean} supports_visa
   */
  exports.prototype.supports_visa = undefined;

  /**
   * True if this gateway supports third parties
   * @member {Boolean} third_party
   */
  exports.prototype.third_party = undefined;

  return exports;

}));
