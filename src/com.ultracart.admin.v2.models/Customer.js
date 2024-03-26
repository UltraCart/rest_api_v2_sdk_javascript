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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CustomerActivity', 'com.ultracart.admin.v2.models/CustomerAttachment', 'com.ultracart.admin.v2.models/CustomerBilling', 'com.ultracart.admin.v2.models/CustomerCard', 'com.ultracart.admin.v2.models/CustomerEDI', 'com.ultracart.admin.v2.models/CustomerEmail', 'com.ultracart.admin.v2.models/CustomerLoyalty', 'com.ultracart.admin.v2.models/CustomerOrdersSummary', 'com.ultracart.admin.v2.models/CustomerPricingTier', 'com.ultracart.admin.v2.models/CustomerPrivacy', 'com.ultracart.admin.v2.models/CustomerProperty', 'com.ultracart.admin.v2.models/CustomerQuotesSummary', 'com.ultracart.admin.v2.models/CustomerReviewer', 'com.ultracart.admin.v2.models/CustomerShipping', 'com.ultracart.admin.v2.models/CustomerSoftwareEntitlement', 'com.ultracart.admin.v2.models/CustomerTag', 'com.ultracart.admin.v2.models/CustomerTaxCodes', 'com.ultracart.admin.v2.models/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerActivity'), require('./CustomerAttachment'), require('./CustomerBilling'), require('./CustomerCard'), require('./CustomerEDI'), require('./CustomerEmail'), require('./CustomerLoyalty'), require('./CustomerOrdersSummary'), require('./CustomerPricingTier'), require('./CustomerPrivacy'), require('./CustomerProperty'), require('./CustomerQuotesSummary'), require('./CustomerReviewer'), require('./CustomerShipping'), require('./CustomerSoftwareEntitlement'), require('./CustomerTag'), require('./CustomerTaxCodes'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Customer = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CustomerActivity, root.UltraCartRestApiV2.CustomerAttachment, root.UltraCartRestApiV2.CustomerBilling, root.UltraCartRestApiV2.CustomerCard, root.UltraCartRestApiV2.CustomerEDI, root.UltraCartRestApiV2.CustomerEmail, root.UltraCartRestApiV2.CustomerLoyalty, root.UltraCartRestApiV2.CustomerOrdersSummary, root.UltraCartRestApiV2.CustomerPricingTier, root.UltraCartRestApiV2.CustomerPrivacy, root.UltraCartRestApiV2.CustomerProperty, root.UltraCartRestApiV2.CustomerQuotesSummary, root.UltraCartRestApiV2.CustomerReviewer, root.UltraCartRestApiV2.CustomerShipping, root.UltraCartRestApiV2.CustomerSoftwareEntitlement, root.UltraCartRestApiV2.CustomerTag, root.UltraCartRestApiV2.CustomerTaxCodes, root.UltraCartRestApiV2.Order);
  }
}(this, function(ApiClient, CustomerActivity, CustomerAttachment, CustomerBilling, CustomerCard, CustomerEDI, CustomerEmail, CustomerLoyalty, CustomerOrdersSummary, CustomerPricingTier, CustomerPrivacy, CustomerProperty, CustomerQuotesSummary, CustomerReviewer, CustomerShipping, CustomerSoftwareEntitlement, CustomerTag, CustomerTaxCodes, Order) {
  'use strict';

  /**
   * The Customer model module.
   * @module com.ultracart.admin.v2.models/Customer
   * @version 3.10.191
   */

  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:com.ultracart.admin.v2.models/Customer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Customer} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Customer} The populated <code>Customer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activity'))
        obj.activity = CustomerActivity.constructFromObject(data['activity']);
      if (data.hasOwnProperty('affiliate_oid'))
        obj.affiliate_oid = ApiClient.convertToType(data['affiliate_oid'], 'Number');
      if (data.hasOwnProperty('allow_3rd_party_billing'))
        obj.allow_3rd_party_billing = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
      if (data.hasOwnProperty('allow_cod'))
        obj.allow_cod = ApiClient.convertToType(data['allow_cod'], 'Boolean');
      if (data.hasOwnProperty('allow_drop_shipping'))
        obj.allow_drop_shipping = ApiClient.convertToType(data['allow_drop_shipping'], 'Boolean');
      if (data.hasOwnProperty('allow_purchase_order'))
        obj.allow_purchase_order = ApiClient.convertToType(data['allow_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('allow_quote_request'))
        obj.allow_quote_request = ApiClient.convertToType(data['allow_quote_request'], 'Boolean');
      if (data.hasOwnProperty('allow_selection_of_address_type'))
        obj.allow_selection_of_address_type = ApiClient.convertToType(data['allow_selection_of_address_type'], 'Boolean');
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [CustomerAttachment]);
      if (data.hasOwnProperty('auto_approve_cod'))
        obj.auto_approve_cod = ApiClient.convertToType(data['auto_approve_cod'], 'Boolean');
      if (data.hasOwnProperty('auto_approve_purchase_order'))
        obj.auto_approve_purchase_order = ApiClient.convertToType(data['auto_approve_purchase_order'], 'Boolean');
      if (data.hasOwnProperty('automatic_merchant_notes'))
        obj.automatic_merchant_notes = ApiClient.convertToType(data['automatic_merchant_notes'], 'String');
      if (data.hasOwnProperty('billing'))
        obj.billing = ApiClient.convertToType(data['billing'], [CustomerBilling]);
      if (data.hasOwnProperty('business_notes'))
        obj.business_notes = ApiClient.convertToType(data['business_notes'], 'String');
      if (data.hasOwnProperty('cards'))
        obj.cards = ApiClient.convertToType(data['cards'], [CustomerCard]);
      if (data.hasOwnProperty('cc_emails'))
        obj.cc_emails = ApiClient.convertToType(data['cc_emails'], [CustomerEmail]);
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('dhl_account_number'))
        obj.dhl_account_number = ApiClient.convertToType(data['dhl_account_number'], 'String');
      if (data.hasOwnProperty('dhl_duty_account_number'))
        obj.dhl_duty_account_number = ApiClient.convertToType(data['dhl_duty_account_number'], 'String');
      if (data.hasOwnProperty('do_not_send_mail'))
        obj.do_not_send_mail = ApiClient.convertToType(data['do_not_send_mail'], 'Boolean');
      if (data.hasOwnProperty('edi'))
        obj.edi = CustomerEDI.constructFromObject(data['edi']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('exempt_shipping_handling_charge'))
        obj.exempt_shipping_handling_charge = ApiClient.convertToType(data['exempt_shipping_handling_charge'], 'Boolean');
      if (data.hasOwnProperty('fedex_account_number'))
        obj.fedex_account_number = ApiClient.convertToType(data['fedex_account_number'], 'String');
      if (data.hasOwnProperty('free_shipping'))
        obj.free_shipping = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      if (data.hasOwnProperty('free_shipping_minimum'))
        obj.free_shipping_minimum = ApiClient.convertToType(data['free_shipping_minimum'], 'Number');
      if (data.hasOwnProperty('last_modified_by'))
        obj.last_modified_by = ApiClient.convertToType(data['last_modified_by'], 'String');
      if (data.hasOwnProperty('last_modified_dts'))
        obj.last_modified_dts = ApiClient.convertToType(data['last_modified_dts'], 'String');
      if (data.hasOwnProperty('loyalty'))
        obj.loyalty = CustomerLoyalty.constructFromObject(data['loyalty']);
      if (data.hasOwnProperty('maximum_item_count'))
        obj.maximum_item_count = ApiClient.convertToType(data['maximum_item_count'], 'Number');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('minimum_item_count'))
        obj.minimum_item_count = ApiClient.convertToType(data['minimum_item_count'], 'Number');
      if (data.hasOwnProperty('minimum_subtotal'))
        obj.minimum_subtotal = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
      if (data.hasOwnProperty('no_coupons'))
        obj.no_coupons = ApiClient.convertToType(data['no_coupons'], 'Boolean');
      if (data.hasOwnProperty('no_free_shipping'))
        obj.no_free_shipping = ApiClient.convertToType(data['no_free_shipping'], 'Boolean');
      if (data.hasOwnProperty('no_realtime_charge'))
        obj.no_realtime_charge = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
      if (data.hasOwnProperty('orders'))
        obj.orders = ApiClient.convertToType(data['orders'], [Order]);
      if (data.hasOwnProperty('orders_summary'))
        obj.orders_summary = CustomerOrdersSummary.constructFromObject(data['orders_summary']);
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('pricing_tiers'))
        obj.pricing_tiers = ApiClient.convertToType(data['pricing_tiers'], [CustomerPricingTier]);
      if (data.hasOwnProperty('privacy'))
        obj.privacy = CustomerPrivacy.constructFromObject(data['privacy']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [CustomerProperty]);
      if (data.hasOwnProperty('qb_class'))
        obj.qb_class = ApiClient.convertToType(data['qb_class'], 'String');
      if (data.hasOwnProperty('qb_code'))
        obj.qb_code = ApiClient.convertToType(data['qb_code'], 'String');
      if (data.hasOwnProperty('qb_tax_exemption_reason_code'))
        obj.qb_tax_exemption_reason_code = ApiClient.convertToType(data['qb_tax_exemption_reason_code'], 'Number');
      if (data.hasOwnProperty('quotes'))
        obj.quotes = ApiClient.convertToType(data['quotes'], [Order]);
      if (data.hasOwnProperty('quotes_summary'))
        obj.quotes_summary = CustomerQuotesSummary.constructFromObject(data['quotes_summary']);
      if (data.hasOwnProperty('referral_source'))
        obj.referral_source = ApiClient.convertToType(data['referral_source'], 'String');
      if (data.hasOwnProperty('reviewer'))
        obj.reviewer = CustomerReviewer.constructFromObject(data['reviewer']);
      if (data.hasOwnProperty('sales_rep_code'))
        obj.sales_rep_code = ApiClient.convertToType(data['sales_rep_code'], 'String');
      if (data.hasOwnProperty('send_signup_notification'))
        obj.send_signup_notification = ApiClient.convertToType(data['send_signup_notification'], 'Boolean');
      if (data.hasOwnProperty('shipping'))
        obj.shipping = ApiClient.convertToType(data['shipping'], [CustomerShipping]);
      if (data.hasOwnProperty('signup_dts'))
        obj.signup_dts = ApiClient.convertToType(data['signup_dts'], 'String');
      if (data.hasOwnProperty('software_entitlements'))
        obj.software_entitlements = ApiClient.convertToType(data['software_entitlements'], [CustomerSoftwareEntitlement]);
      if (data.hasOwnProperty('suppress_buysafe'))
        obj.suppress_buysafe = ApiClient.convertToType(data['suppress_buysafe'], 'Boolean');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [CustomerTag]);
      if (data.hasOwnProperty('tax_codes'))
        obj.tax_codes = CustomerTaxCodes.constructFromObject(data['tax_codes']);
      if (data.hasOwnProperty('tax_exempt'))
        obj.tax_exempt = ApiClient.convertToType(data['tax_exempt'], 'Boolean');
      if (data.hasOwnProperty('tax_id'))
        obj.tax_id = ApiClient.convertToType(data['tax_id'], 'String');
      if (data.hasOwnProperty('terms'))
        obj.terms = ApiClient.convertToType(data['terms'], 'String');
      if (data.hasOwnProperty('track_separately'))
        obj.track_separately = ApiClient.convertToType(data['track_separately'], 'Boolean');
      if (data.hasOwnProperty('unapproved'))
        obj.unapproved = ApiClient.convertToType(data['unapproved'], 'Boolean');
      if (data.hasOwnProperty('ups_account_number'))
        obj.ups_account_number = ApiClient.convertToType(data['ups_account_number'], 'String');
      if (data.hasOwnProperty('website_url'))
        obj.website_url = ApiClient.convertToType(data['website_url'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerActivity} activity
   */
  exports.prototype.activity = undefined;

  /**
   * Affiliate oid
   * @member {Number} affiliate_oid
   */
  exports.prototype.affiliate_oid = undefined;

  /**
   * Allow 3rd party billing
   * @member {Boolean} allow_3rd_party_billing
   */
  exports.prototype.allow_3rd_party_billing = undefined;

  /**
   * Allow COD
   * @member {Boolean} allow_cod
   */
  exports.prototype.allow_cod = undefined;

  /**
   * Allow Drop Shipping
   * @member {Boolean} allow_drop_shipping
   */
  exports.prototype.allow_drop_shipping = undefined;

  /**
   * Allow purchase orders by this customer
   * @member {Boolean} allow_purchase_order
   */
  exports.prototype.allow_purchase_order = undefined;

  /**
   * Allow quote request
   * @member {Boolean} allow_quote_request
   */
  exports.prototype.allow_quote_request = undefined;

  /**
   * Allow selection of residential or business address type
   * @member {Boolean} allow_selection_of_address_type
   */
  exports.prototype.allow_selection_of_address_type = undefined;

  /**
   * Attachments
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerAttachment>} attachments
   */
  exports.prototype.attachments = undefined;

  /**
   * Auto approve COD
   * @member {Boolean} auto_approve_cod
   */
  exports.prototype.auto_approve_cod = undefined;

  /**
   * Auto approve purchase orders by this customer
   * @member {Boolean} auto_approve_purchase_order
   */
  exports.prototype.auto_approve_purchase_order = undefined;

  /**
   * Automatic merchant notes are added to every order placed
   * @member {String} automatic_merchant_notes
   */
  exports.prototype.automatic_merchant_notes = undefined;

  /**
   * Billing addresses for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerBilling>} billing
   */
  exports.prototype.billing = undefined;

  /**
   * Business notes (internally visible only)
   * @member {String} business_notes
   */
  exports.prototype.business_notes = undefined;

  /**
   * Credit Cards for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerCard>} cards
   */
  exports.prototype.cards = undefined;

  /**
   * Additional emails to CC notification
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerEmail>} cc_emails
   */
  exports.prototype.cc_emails = undefined;

  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * DHL account number
   * @member {String} dhl_account_number
   */
  exports.prototype.dhl_account_number = undefined;

  /**
   * DHL duty account number
   * @member {String} dhl_duty_account_number
   */
  exports.prototype.dhl_duty_account_number = undefined;

  /**
   * Do not send mail (null will not update)
   * @member {Boolean} do_not_send_mail
   */
  exports.prototype.do_not_send_mail = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerEDI} edi
   */
  exports.prototype.edi = undefined;

  /**
   * Email address of this customer profile
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Exempt shipping handling charge
   * @member {Boolean} exempt_shipping_handling_charge
   */
  exports.prototype.exempt_shipping_handling_charge = undefined;

  /**
   * FedEx account number
   * @member {String} fedex_account_number
   */
  exports.prototype.fedex_account_number = undefined;

  /**
   * This customer always receives free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype.free_shipping = undefined;

  /**
   * If free_shipping is true, this is the minimum subtotal required for free shipping
   * @member {Number} free_shipping_minimum
   */
  exports.prototype.free_shipping_minimum = undefined;

  /**
   * Last modified by
   * @member {String} last_modified_by
   */
  exports.prototype.last_modified_by = undefined;

  /**
   * Last modified date
   * @member {String} last_modified_dts
   */
  exports.prototype.last_modified_dts = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerLoyalty} loyalty
   */
  exports.prototype.loyalty = undefined;

  /**
   * Maximum item count
   * @member {Number} maximum_item_count
   */
  exports.prototype.maximum_item_count = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Minimum item count
   * @member {Number} minimum_item_count
   */
  exports.prototype.minimum_item_count = undefined;

  /**
   * Minimum subtotal
   * @member {Number} minimum_subtotal
   */
  exports.prototype.minimum_subtotal = undefined;

  /**
   * No coupons
   * @member {Boolean} no_coupons
   */
  exports.prototype.no_coupons = undefined;

  /**
   * No free shipping regardless of coupons or item level settings
   * @member {Boolean} no_free_shipping
   */
  exports.prototype.no_free_shipping = undefined;

  /**
   * No realtime charge
   * @member {Boolean} no_realtime_charge
   */
  exports.prototype.no_realtime_charge = undefined;

  /**
   * Orders associated with this customer profile
   * @member {Array.<module:com.ultracart.admin.v2.models/Order>} orders
   */
  exports.prototype.orders = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} orders_summary
   */
  exports.prototype.orders_summary = undefined;

  /**
   * Password (may only be set, never read)
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * Pricing tiers for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerPricingTier>} pricing_tiers
   */
  exports.prototype.pricing_tiers = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerPrivacy} privacy
   */
  exports.prototype.privacy = undefined;

  /**
   * Properties for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * QuickBooks class to import this customer as
   * @member {String} qb_class
   */
  exports.prototype.qb_class = undefined;

  /**
   * QuickBooks name to import this customer as
   * @member {String} qb_code
   */
  exports.prototype.qb_code = undefined;

  /**
   * QuickBooks tax exemption reason code
   * @member {Number} qb_tax_exemption_reason_code
   */
  exports.prototype.qb_tax_exemption_reason_code = undefined;

  /**
   * Quotes associated with this customer profile
   * @member {Array.<module:com.ultracart.admin.v2.models/Order>} quotes
   */
  exports.prototype.quotes = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerQuotesSummary} quotes_summary
   */
  exports.prototype.quotes_summary = undefined;

  /**
   * Referral Source
   * @member {String} referral_source
   */
  exports.prototype.referral_source = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerReviewer} reviewer
   */
  exports.prototype.reviewer = undefined;

  /**
   * Sales rep code
   * @member {String} sales_rep_code
   */
  exports.prototype.sales_rep_code = undefined;

  /**
   * Send signup notification, if true during customer creation, will send a notification.
   * @member {Boolean} send_signup_notification
   */
  exports.prototype.send_signup_notification = undefined;

  /**
   * Shipping addresses for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerShipping>} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * Signup date
   * @member {String} signup_dts
   */
  exports.prototype.signup_dts = undefined;

  /**
   * Software entitlements owned by this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement>} software_entitlements
   */
  exports.prototype.software_entitlements = undefined;

  /**
   * Suppress buySAFE (deprecated)
   * @member {Boolean} suppress_buysafe
   */
  exports.prototype.suppress_buysafe = undefined;

  /**
   * Tags for this customer
   * @member {Array.<module:com.ultracart.admin.v2.models/CustomerTag>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/CustomerTaxCodes} tax_codes
   */
  exports.prototype.tax_codes = undefined;

  /**
   * True if the customer is tax exempt
   * @member {Boolean} tax_exempt
   */
  exports.prototype.tax_exempt = undefined;

  /**
   * Tax ID
   * @member {String} tax_id
   */
  exports.prototype.tax_id = undefined;

  /**
   * Terms for this customer
   * @member {String} terms
   */
  exports.prototype.terms = undefined;

  /**
   * True if the customer should be tracked separately in QuickBooks
   * @member {Boolean} track_separately
   */
  exports.prototype.track_separately = undefined;

  /**
   * Unapproved
   * @member {Boolean} unapproved
   */
  exports.prototype.unapproved = undefined;

  /**
   * UPS account number
   * @member {String} ups_account_number
   */
  exports.prototype.ups_account_number = undefined;

  /**
   * Website url
   * @member {String} website_url
   */
  exports.prototype.website_url = undefined;

  return exports;

}));
