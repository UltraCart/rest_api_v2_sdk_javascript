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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ChannelPartnerOrderItem', 'com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChannelPartnerOrderItem'), require('./ChannelPartnerOrderTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ChannelPartnerOrder = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ChannelPartnerOrderItem, root.UltraCartRestApiV2.ChannelPartnerOrderTransaction);
  }
}(this, function(ApiClient, ChannelPartnerOrderItem, ChannelPartnerOrderTransaction) {
  'use strict';

  /**
   * The ChannelPartnerOrder model module.
   * @module com.ultracart.admin.v2.models/ChannelPartnerOrder
   * @version 3.10.145
   */

  /**
   * Constructs a new <code>ChannelPartnerOrder</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChannelPartnerOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrder} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrder} The populated <code>ChannelPartnerOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('advertisingSource'))
        obj.advertisingSource = ApiClient.convertToType(data['advertisingSource'], 'String');
      if (data.hasOwnProperty('affiliate_id'))
        obj.affiliate_id = ApiClient.convertToType(data['affiliate_id'], 'String');
      if (data.hasOwnProperty('affiliate_sub_id'))
        obj.affiliate_sub_id = ApiClient.convertToType(data['affiliate_sub_id'], 'String');
      if (data.hasOwnProperty('arbitrary_shipping_handling_total'))
        obj.arbitrary_shipping_handling_total = ApiClient.convertToType(data['arbitrary_shipping_handling_total'], 'Number');
      if (data.hasOwnProperty('arbitrary_tax'))
        obj.arbitrary_tax = ApiClient.convertToType(data['arbitrary_tax'], 'Number');
      if (data.hasOwnProperty('arbitrary_tax_rate'))
        obj.arbitrary_tax_rate = ApiClient.convertToType(data['arbitrary_tax_rate'], 'Number');
      if (data.hasOwnProperty('arbitrary_taxable_subtotal'))
        obj.arbitrary_taxable_subtotal = ApiClient.convertToType(data['arbitrary_taxable_subtotal'], 'Number');
      if (data.hasOwnProperty('associate_with_customer_profile_if_present'))
        obj.associate_with_customer_profile_if_present = ApiClient.convertToType(data['associate_with_customer_profile_if_present'], 'Boolean');
      if (data.hasOwnProperty('auto_approve_purchase_order'))
        obj.auto_approve_purchase_order = ApiClient.convertToType(data['auto_approve_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('billto_address1'))
        obj.billto_address1 = ApiClient.convertToType(data['billto_address1'], 'String');
      if (data.hasOwnProperty('billto_address2'))
        obj.billto_address2 = ApiClient.convertToType(data['billto_address2'], 'String');
      if (data.hasOwnProperty('billto_city'))
        obj.billto_city = ApiClient.convertToType(data['billto_city'], 'String');
      if (data.hasOwnProperty('billto_company'))
        obj.billto_company = ApiClient.convertToType(data['billto_company'], 'String');
      if (data.hasOwnProperty('billto_country_code'))
        obj.billto_country_code = ApiClient.convertToType(data['billto_country_code'], 'String');
      if (data.hasOwnProperty('billto_day_phone'))
        obj.billto_day_phone = ApiClient.convertToType(data['billto_day_phone'], 'String');
      if (data.hasOwnProperty('billto_evening_phone'))
        obj.billto_evening_phone = ApiClient.convertToType(data['billto_evening_phone'], 'String');
      if (data.hasOwnProperty('billto_first_name'))
        obj.billto_first_name = ApiClient.convertToType(data['billto_first_name'], 'String');
      if (data.hasOwnProperty('billto_last_name'))
        obj.billto_last_name = ApiClient.convertToType(data['billto_last_name'], 'String');
      if (data.hasOwnProperty('billto_postal_code'))
        obj.billto_postal_code = ApiClient.convertToType(data['billto_postal_code'], 'String');
      if (data.hasOwnProperty('billto_state_region'))
        obj.billto_state_region = ApiClient.convertToType(data['billto_state_region'], 'String');
      if (data.hasOwnProperty('billto_title'))
        obj.billto_title = ApiClient.convertToType(data['billto_title'], 'String');
      if (data.hasOwnProperty('cc_email'))
        obj.cc_email = ApiClient.convertToType(data['cc_email'], 'String');
      if (data.hasOwnProperty('channel_partner_order_id'))
        obj.channel_partner_order_id = ApiClient.convertToType(data['channel_partner_order_id'], 'String');
      if (data.hasOwnProperty('consider_recurring'))
        obj.consider_recurring = ApiClient.convertToType(data['consider_recurring'], 'Boolean');
      if (data.hasOwnProperty('coupons'))
        obj.coupons = ApiClient.convertToType(data['coupons'], ['String']);
      if (data.hasOwnProperty('credit_card_authorization_amount'))
        obj.credit_card_authorization_amount = ApiClient.convertToType(data['credit_card_authorization_amount'], 'Number');
      if (data.hasOwnProperty('credit_card_authorization_dts'))
        obj.credit_card_authorization_dts = ApiClient.convertToType(data['credit_card_authorization_dts'], 'String');
      if (data.hasOwnProperty('credit_card_authorization_number'))
        obj.credit_card_authorization_number = ApiClient.convertToType(data['credit_card_authorization_number'], 'String');
      if (data.hasOwnProperty('credit_card_expiration_month'))
        obj.credit_card_expiration_month = ApiClient.convertToType(data['credit_card_expiration_month'], 'Number');
      if (data.hasOwnProperty('credit_card_expiration_year'))
        obj.credit_card_expiration_year = ApiClient.convertToType(data['credit_card_expiration_year'], 'Number');
      if (data.hasOwnProperty('credit_card_type'))
        obj.credit_card_type = ApiClient.convertToType(data['credit_card_type'], 'String');
      if (data.hasOwnProperty('custom_field1'))
        obj.custom_field1 = ApiClient.convertToType(data['custom_field1'], 'String');
      if (data.hasOwnProperty('custom_field2'))
        obj.custom_field2 = ApiClient.convertToType(data['custom_field2'], 'String');
      if (data.hasOwnProperty('custom_field3'))
        obj.custom_field3 = ApiClient.convertToType(data['custom_field3'], 'String');
      if (data.hasOwnProperty('custom_field4'))
        obj.custom_field4 = ApiClient.convertToType(data['custom_field4'], 'String');
      if (data.hasOwnProperty('custom_field5'))
        obj.custom_field5 = ApiClient.convertToType(data['custom_field5'], 'String');
      if (data.hasOwnProperty('custom_field6'))
        obj.custom_field6 = ApiClient.convertToType(data['custom_field6'], 'String');
      if (data.hasOwnProperty('custom_field7'))
        obj.custom_field7 = ApiClient.convertToType(data['custom_field7'], 'String');
      if (data.hasOwnProperty('delivery_date'))
        obj.delivery_date = ApiClient.convertToType(data['delivery_date'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('gift'))
        obj.gift = ApiClient.convertToType(data['gift'], 'Boolean');
      if (data.hasOwnProperty('gift_email'))
        obj.gift_email = ApiClient.convertToType(data['gift_email'], 'String');
      if (data.hasOwnProperty('gift_message'))
        obj.gift_message = ApiClient.convertToType(data['gift_message'], 'String');
      if (data.hasOwnProperty('hosted_fields_card_token'))
        obj.hosted_fields_card_token = ApiClient.convertToType(data['hosted_fields_card_token'], 'String');
      if (data.hasOwnProperty('hosted_fields_cvv_token'))
        obj.hosted_fields_cvv_token = ApiClient.convertToType(data['hosted_fields_cvv_token'], 'String');
      if (data.hasOwnProperty('insurance_application_id'))
        obj.insurance_application_id = ApiClient.convertToType(data['insurance_application_id'], 'String');
      if (data.hasOwnProperty('insurance_claim_id'))
        obj.insurance_claim_id = ApiClient.convertToType(data['insurance_claim_id'], 'String');
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ChannelPartnerOrderItem]);
      if (data.hasOwnProperty('least_cost_route'))
        obj.least_cost_route = ApiClient.convertToType(data['least_cost_route'], 'Boolean');
      if (data.hasOwnProperty('least_cost_route_shipping_methods'))
        obj.least_cost_route_shipping_methods = ApiClient.convertToType(data['least_cost_route_shipping_methods'], ['String']);
      if (data.hasOwnProperty('mailing_list_opt_in'))
        obj.mailing_list_opt_in = ApiClient.convertToType(data['mailing_list_opt_in'], 'Boolean');
      if (data.hasOwnProperty('no_realtime_payment_processing'))
        obj.no_realtime_payment_processing = ApiClient.convertToType(data['no_realtime_payment_processing'], 'Boolean');
      if (data.hasOwnProperty('payment_method'))
        obj.payment_method = ApiClient.convertToType(data['payment_method'], 'String');
      if (data.hasOwnProperty('purchase_order_number'))
        obj.purchase_order_number = ApiClient.convertToType(data['purchase_order_number'], 'String');
      if (data.hasOwnProperty('rotating_transaction_gateway_code'))
        obj.rotating_transaction_gateway_code = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
      if (data.hasOwnProperty('screen_branding_theme_code'))
        obj.screen_branding_theme_code = ApiClient.convertToType(data['screen_branding_theme_code'], 'String');
      if (data.hasOwnProperty('ship_on_date'))
        obj.ship_on_date = ApiClient.convertToType(data['ship_on_date'], 'String');
      if (data.hasOwnProperty('ship_to_residential'))
        obj.ship_to_residential = ApiClient.convertToType(data['ship_to_residential'], 'Boolean');
      if (data.hasOwnProperty('shipping_method'))
        obj.shipping_method = ApiClient.convertToType(data['shipping_method'], 'String');
      if (data.hasOwnProperty('shipto_address1'))
        obj.shipto_address1 = ApiClient.convertToType(data['shipto_address1'], 'String');
      if (data.hasOwnProperty('shipto_address2'))
        obj.shipto_address2 = ApiClient.convertToType(data['shipto_address2'], 'String');
      if (data.hasOwnProperty('shipto_city'))
        obj.shipto_city = ApiClient.convertToType(data['shipto_city'], 'String');
      if (data.hasOwnProperty('shipto_company'))
        obj.shipto_company = ApiClient.convertToType(data['shipto_company'], 'String');
      if (data.hasOwnProperty('shipto_country_code'))
        obj.shipto_country_code = ApiClient.convertToType(data['shipto_country_code'], 'String');
      if (data.hasOwnProperty('shipto_day_phone'))
        obj.shipto_day_phone = ApiClient.convertToType(data['shipto_day_phone'], 'String');
      if (data.hasOwnProperty('shipto_evening_phone'))
        obj.shipto_evening_phone = ApiClient.convertToType(data['shipto_evening_phone'], 'String');
      if (data.hasOwnProperty('shipto_first_name'))
        obj.shipto_first_name = ApiClient.convertToType(data['shipto_first_name'], 'String');
      if (data.hasOwnProperty('shipto_last_name'))
        obj.shipto_last_name = ApiClient.convertToType(data['shipto_last_name'], 'String');
      if (data.hasOwnProperty('shipto_postal_code'))
        obj.shipto_postal_code = ApiClient.convertToType(data['shipto_postal_code'], 'String');
      if (data.hasOwnProperty('shipto_state_region'))
        obj.shipto_state_region = ApiClient.convertToType(data['shipto_state_region'], 'String');
      if (data.hasOwnProperty('shipto_title'))
        obj.shipto_title = ApiClient.convertToType(data['shipto_title'], 'String');
      if (data.hasOwnProperty('skip_payment_processing'))
        obj.skip_payment_processing = ApiClient.convertToType(data['skip_payment_processing'], 'Boolean');
      if (data.hasOwnProperty('special_instructions'))
        obj.special_instructions = ApiClient.convertToType(data['special_instructions'], 'String');
      if (data.hasOwnProperty('store_completed'))
        obj.store_completed = ApiClient.convertToType(data['store_completed'], 'Boolean');
      if (data.hasOwnProperty('store_if_payment_declines'))
        obj.store_if_payment_declines = ApiClient.convertToType(data['store_if_payment_declines'], 'Boolean');
      if (data.hasOwnProperty('tax_county'))
        obj.tax_county = ApiClient.convertToType(data['tax_county'], 'String');
      if (data.hasOwnProperty('tax_exempt'))
        obj.tax_exempt = ApiClient.convertToType(data['tax_exempt'], 'Boolean');
      if (data.hasOwnProperty('transaction'))
        obj.transaction = ChannelPartnerOrderTransaction.constructFromObject(data['transaction']);
      if (data.hasOwnProperty('treat_warnings_as_errors'))
        obj.treat_warnings_as_errors = ApiClient.convertToType(data['treat_warnings_as_errors'], 'Boolean');
    }
    return obj;
  }

  /**
   * advertising_source
   * @member {String} advertisingSource
   */
  exports.prototype.advertisingSource = undefined;

  /**
   * Affiliate Id
   * @member {String} affiliate_id
   */
  exports.prototype.affiliate_id = undefined;

  /**
   * Affiliate Sub Id
   * @member {String} affiliate_sub_id
   */
  exports.prototype.affiliate_sub_id = undefined;

  /**
   * Arbitrary shipping handling total
   * @member {Number} arbitrary_shipping_handling_total
   */
  exports.prototype.arbitrary_shipping_handling_total = undefined;

  /**
   * Arbitrary tax for overriding calculated taxes
   * @member {Number} arbitrary_tax
   */
  exports.prototype.arbitrary_tax = undefined;

  /**
   * Arbitrary tax rate
   * @member {Number} arbitrary_tax_rate
   */
  exports.prototype.arbitrary_tax_rate = undefined;

  /**
   * Arbitrary taxable subtotal
   * @member {Number} arbitrary_taxable_subtotal
   */
  exports.prototype.arbitrary_taxable_subtotal = undefined;

  /**
   * If true any matching customer profile based on email is associated with this order
   * @member {Boolean} associate_with_customer_profile_if_present
   */
  exports.prototype.associate_with_customer_profile_if_present = undefined;

  /**
   * If true any purchase orders are automatically approved
   * @member {Boolean} auto_approve_purchase_order
   */
  exports.prototype.auto_approve_purchase_order = undefined;

  /**
   * Billing Address line 1
   * @member {String} billto_address1
   */
  exports.prototype.billto_address1 = undefined;

  /**
   * Billing Address line 2
   * @member {String} billto_address2
   */
  exports.prototype.billto_address2 = undefined;

  /**
   * Billing City
   * @member {String} billto_city
   */
  exports.prototype.billto_city = undefined;

  /**
   * Billing Company
   * @member {String} billto_company
   */
  exports.prototype.billto_company = undefined;

  /**
   * Billing ISO-3166 two letter country code
   * @member {String} billto_country_code
   */
  exports.prototype.billto_country_code = undefined;

  /**
   * Billing Day phone
   * @member {String} billto_day_phone
   */
  exports.prototype.billto_day_phone = undefined;

  /**
   * Billing Evening phone
   * @member {String} billto_evening_phone
   */
  exports.prototype.billto_evening_phone = undefined;

  /**
   * Billing First name
   * @member {String} billto_first_name
   */
  exports.prototype.billto_first_name = undefined;

  /**
   * Billing Last name
   * @member {String} billto_last_name
   */
  exports.prototype.billto_last_name = undefined;

  /**
   * Billing Postal code
   * @member {String} billto_postal_code
   */
  exports.prototype.billto_postal_code = undefined;

  /**
   * Billing State for United States otherwise region or province for other countries
   * @member {String} billto_state_region
   */
  exports.prototype.billto_state_region = undefined;

  /**
   * Billing Title
   * @member {String} billto_title
   */
  exports.prototype.billto_title = undefined;

  /**
   * CC email.
   * @member {String} cc_email
   */
  exports.prototype.cc_email = undefined;

  /**
   * The id for this order within the channel partner system.
   * @member {String} channel_partner_order_id
   */
  exports.prototype.channel_partner_order_id = undefined;

  /**
   * If true this order is marked as an auto order (recurring)
   * @member {Boolean} consider_recurring
   */
  exports.prototype.consider_recurring = undefined;

  /**
   * Array of coupon codes
   * @member {Array.<String>} coupons
   */
  exports.prototype.coupons = undefined;

  /**
   * The amount authorized externally
   * @member {Number} credit_card_authorization_amount
   */
  exports.prototype.credit_card_authorization_amount = undefined;

  /**
   * Date/Time of credit card authorization in ISO8601 format
   * @member {String} credit_card_authorization_dts
   */
  exports.prototype.credit_card_authorization_dts = undefined;

  /**
   * The reference number provided by an externally processed transaction
   * @member {String} credit_card_authorization_number
   */
  exports.prototype.credit_card_authorization_number = undefined;

  /**
   * Credit card expiration month
   * @member {Number} credit_card_expiration_month
   */
  exports.prototype.credit_card_expiration_month = undefined;

  /**
   * Credit card expiration year
   * @member {Number} credit_card_expiration_year
   */
  exports.prototype.credit_card_expiration_year = undefined;

  /**
   * Credit card type
   * @member {String} credit_card_type
   */
  exports.prototype.credit_card_type = undefined;

  /**
   * Custom field 1
   * @member {String} custom_field1
   */
  exports.prototype.custom_field1 = undefined;

  /**
   * Custom field 2
   * @member {String} custom_field2
   */
  exports.prototype.custom_field2 = undefined;

  /**
   * Custom field 3
   * @member {String} custom_field3
   */
  exports.prototype.custom_field3 = undefined;

  /**
   * Custom field 4
   * @member {String} custom_field4
   */
  exports.prototype.custom_field4 = undefined;

  /**
   * Custom field 5
   * @member {String} custom_field5
   */
  exports.prototype.custom_field5 = undefined;

  /**
   * Custom field 6
   * @member {String} custom_field6
   */
  exports.prototype.custom_field6 = undefined;

  /**
   * Custom field 7
   * @member {String} custom_field7
   */
  exports.prototype.custom_field7 = undefined;

  /**
   * Date the customer is requesting delivery on. Typically used for perishable product delivery.
   * @member {String} delivery_date
   */
  exports.prototype.delivery_date = undefined;

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * True if this order is a gift
   * @member {Boolean} gift
   */
  exports.prototype.gift = undefined;

  /**
   * Email address of the gift recipient
   * @member {String} gift_email
   */
  exports.prototype.gift_email = undefined;

  /**
   * Message to the gift recipient
   * @member {String} gift_message
   */
  exports.prototype.gift_message = undefined;

  /**
   * The token provided by UltraCart hosted fields when a credit card number is uploaded into the system.  This is the only way to provide a credit card number.
   * @member {String} hosted_fields_card_token
   */
  exports.prototype.hosted_fields_card_token = undefined;

  /**
   * The token provided by UltraCart hosted fields when a credit card cvv is uploaded into the system.  This is the only way to provide a cvv number.
   * @member {String} hosted_fields_cvv_token
   */
  exports.prototype.hosted_fields_cvv_token = undefined;

  /**
   * Insurance application id
   * @member {String} insurance_application_id
   */
  exports.prototype.insurance_application_id = undefined;

  /**
   * Insurance claim id
   * @member {String} insurance_claim_id
   */
  exports.prototype.insurance_claim_id = undefined;

  /**
   * IP Address of the customer
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * Items
   * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * If true the least expensive shipping method is automatically chosen during the order import
   * @member {Boolean} least_cost_route
   */
  exports.prototype.least_cost_route = undefined;

  /**
   * An optional array of shipping methods to restict choices if least_cost_route is true
   * @member {Array.<String>} least_cost_route_shipping_methods
   */
  exports.prototype.least_cost_route_shipping_methods = undefined;

  /**
   * If true the customer is subscribed to any configured mailing lists
   * @member {Boolean} mailing_list_opt_in
   */
  exports.prototype.mailing_list_opt_in = undefined;

  /**
   * If true no payment processing is done and the order is placed into Accounts Receivable
   * @member {Boolean} no_realtime_payment_processing
   */
  exports.prototype.no_realtime_payment_processing = undefined;

  /**
   * Payment method
   * @member {module:com.ultracart.admin.v2.models/ChannelPartnerOrder.PaymentMethodEnum} payment_method
   */
  exports.prototype.payment_method = undefined;

  /**
   * Purchase order number
   * @member {String} purchase_order_number
   */
  exports.prototype.purchase_order_number = undefined;

  /**
   * The rotating transaction gateway code for the gateway used to charge this order
   * @member {String} rotating_transaction_gateway_code
   */
  exports.prototype.rotating_transaction_gateway_code = undefined;

  /**
   * Screen branding theme code
   * @member {String} screen_branding_theme_code
   */
  exports.prototype.screen_branding_theme_code = undefined;

  /**
   * Date the customer is requesting that the order ship on.  Typically used for perishable product delivery.
   * @member {String} ship_on_date
   */
  exports.prototype.ship_on_date = undefined;

  /**
   * True if the shipping adress is residential.  Effects the methods that are available to the customer as well as the price of the shipping method.
   * @member {Boolean} ship_to_residential
   */
  exports.prototype.ship_to_residential = undefined;

  /**
   * Shipping method
   * @member {String} shipping_method
   */
  exports.prototype.shipping_method = undefined;

  /**
   * Shipping Address line 1
   * @member {String} shipto_address1
   */
  exports.prototype.shipto_address1 = undefined;

  /**
   * Shipping Address line 2
   * @member {String} shipto_address2
   */
  exports.prototype.shipto_address2 = undefined;

  /**
   * Shipping City
   * @member {String} shipto_city
   */
  exports.prototype.shipto_city = undefined;

  /**
   * Shipping Company
   * @member {String} shipto_company
   */
  exports.prototype.shipto_company = undefined;

  /**
   * Shipping ISO-3166 two letter country code
   * @member {String} shipto_country_code
   */
  exports.prototype.shipto_country_code = undefined;

  /**
   * Shipping Day phone
   * @member {String} shipto_day_phone
   */
  exports.prototype.shipto_day_phone = undefined;

  /**
   * Shipping Evening phone
   * @member {String} shipto_evening_phone
   */
  exports.prototype.shipto_evening_phone = undefined;

  /**
   * Shipping First name
   * @member {String} shipto_first_name
   */
  exports.prototype.shipto_first_name = undefined;

  /**
   * Shipping Last name
   * @member {String} shipto_last_name
   */
  exports.prototype.shipto_last_name = undefined;

  /**
   * Shipping Postal code
   * @member {String} shipto_postal_code
   */
  exports.prototype.shipto_postal_code = undefined;

  /**
   * Shipping State for United States otherwise region or province for other countries
   * @member {String} shipto_state_region
   */
  exports.prototype.shipto_state_region = undefined;

  /**
   * Shipping Title
   * @member {String} shipto_title
   */
  exports.prototype.shipto_title = undefined;

  /**
   * If true the order is placed directly into the shipping department
   * @member {Boolean} skip_payment_processing
   */
  exports.prototype.skip_payment_processing = undefined;

  /**
   * Special instructions from the customer regarding shipping
   * @member {String} special_instructions
   */
  exports.prototype.special_instructions = undefined;

  /**
   * If true the order bypasses shipping and is marked completed
   * @member {Boolean} store_completed
   */
  exports.prototype.store_completed = undefined;

  /**
   * If true any failed payments are placed into Accounts Receivable.  If false any failed payments result in a rejected order resulting in errors thrown during the insert routine
   * @member {Boolean} store_if_payment_declines
   */
  exports.prototype.store_if_payment_declines = undefined;

  /**
   * The optional shipping county used to determine exact taxes
   * @member {String} tax_county
   */
  exports.prototype.tax_county = undefined;

  /**
   * If true this order is marked as being tax exempt
   * @member {Boolean} tax_exempt
   */
  exports.prototype.tax_exempt = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} transaction
   */
  exports.prototype.transaction = undefined;

  /**
   * If true all warnings are considered errors, this is true by default
   * @member {Boolean} treat_warnings_as_errors
   */
  exports.prototype.treat_warnings_as_errors = undefined;


  /**
   * Allowed values for the <code>payment_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentMethodEnum = {
    /**
     * value: "Affirm"
     * @const
     */
    Affirm: "Affirm",

    /**
     * value: "Amazon"
     * @const
     */
    Amazon: "Amazon",

    /**
     * value: "Check"
     * @const
     */
    Check: "Check",

    /**
     * value: "COD"
     * @const
     */
    COD: "COD",

    /**
     * value: "Credit Card"
     * @const
     */
    Credit_Card: "Credit Card",

    /**
     * value: "LoanHero"
     * @const
     */
    LoanHero: "LoanHero",

    /**
     * value: "Money Order"
     * @const
     */
    Money_Order: "Money Order",

    /**
     * value: "PayPal"
     * @const
     */
    PayPal: "PayPal",

    /**
     * value: "Purchase Order"
     * @const
     */
    Purchase_Order: "Purchase Order",

    /**
     * value: "Quote Request"
     * @const
     */
    Quote_Request: "Quote Request",

    /**
     * value: "Wire Transfer"
     * @const
     */
    Wire_Transfer: "Wire Transfer"
  };

  return exports;

}));
