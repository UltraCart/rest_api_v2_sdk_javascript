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
    define(['ApiClient', 'com.ultracart.admin.v2.models/CartCustomerProfileAddress', 'com.ultracart.admin.v2.models/CartCustomerProfileCreditCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartCustomerProfileAddress'), require('./CartCustomerProfileCreditCard'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartCustomerProfile = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.CartCustomerProfileAddress, root.UltraCartRestApiV2.CartCustomerProfileCreditCard);
  }
}(this, function(ApiClient, CartCustomerProfileAddress, CartCustomerProfileCreditCard) {
  'use strict';




  /**
   * The CartCustomerProfile model module.
   * @module com.ultracart.admin.v2.models/CartCustomerProfile
   * @version 2.4.21
   */

  /**
   * Constructs a new <code>CartCustomerProfile</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCustomerProfile
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>CartCustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartCustomerProfile} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartCustomerProfile} The populated <code>CartCustomerProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allow_3rd_party_billing')) {
        obj['allow_3rd_party_billing'] = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
      }
      if (data.hasOwnProperty('allow_cod')) {
        obj['allow_cod'] = ApiClient.convertToType(data['allow_cod'], 'Boolean');
      }
      if (data.hasOwnProperty('allow_purchase_order')) {
        obj['allow_purchase_order'] = ApiClient.convertToType(data['allow_purchase_order'], 'Boolean');
      }
      if (data.hasOwnProperty('billing_addresses')) {
        obj['billing_addresses'] = ApiClient.convertToType(data['billing_addresses'], [CartCustomerProfileAddress]);
      }
      if (data.hasOwnProperty('credit_cards')) {
        obj['credit_cards'] = ApiClient.convertToType(data['credit_cards'], [CartCustomerProfileCreditCard]);
      }
      if (data.hasOwnProperty('customer_profile_oid')) {
        obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      }
      if (data.hasOwnProperty('dhl_account_number')) {
        obj['dhl_account_number'] = ApiClient.convertToType(data['dhl_account_number'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fedex_account_number')) {
        obj['fedex_account_number'] = ApiClient.convertToType(data['fedex_account_number'], 'String');
      }
      if (data.hasOwnProperty('free_shipping')) {
        obj['free_shipping'] = ApiClient.convertToType(data['free_shipping'], 'Boolean');
      }
      if (data.hasOwnProperty('free_shipping_minimum')) {
        obj['free_shipping_minimum'] = ApiClient.convertToType(data['free_shipping_minimum'], 'Number');
      }
      if (data.hasOwnProperty('maximum_item_count')) {
        obj['maximum_item_count'] = ApiClient.convertToType(data['maximum_item_count'], 'Number');
      }
      if (data.hasOwnProperty('minimum_item_count')) {
        obj['minimum_item_count'] = ApiClient.convertToType(data['minimum_item_count'], 'Number');
      }
      if (data.hasOwnProperty('minimum_subtotal')) {
        obj['minimum_subtotal'] = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
      }
      if (data.hasOwnProperty('no_coupons')) {
        obj['no_coupons'] = ApiClient.convertToType(data['no_coupons'], 'Boolean');
      }
      if (data.hasOwnProperty('no_free_shipping')) {
        obj['no_free_shipping'] = ApiClient.convertToType(data['no_free_shipping'], 'Boolean');
      }
      if (data.hasOwnProperty('no_realtime_charge')) {
        obj['no_realtime_charge'] = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
      }
      if (data.hasOwnProperty('pricing_tiers')) {
        obj['pricing_tiers'] = ApiClient.convertToType(data['pricing_tiers'], ['String']);
      }
      if (data.hasOwnProperty('shipping_addresses')) {
        obj['shipping_addresses'] = ApiClient.convertToType(data['shipping_addresses'], [CartCustomerProfileAddress]);
      }
      if (data.hasOwnProperty('tax_exempt')) {
        obj['tax_exempt'] = ApiClient.convertToType(data['tax_exempt'], 'Boolean');
      }
      if (data.hasOwnProperty('ups_account_number')) {
        obj['ups_account_number'] = ApiClient.convertToType(data['ups_account_number'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if profile is allowed to bill to their 3rd party shipping account
   * @member {Boolean} allow_3rd_party_billing
   */
  exports.prototype['allow_3rd_party_billing'] = undefined;
  /**
   * True if this profile is allowed to use a COD
   * @member {Boolean} allow_cod
   */
  exports.prototype['allow_cod'] = undefined;
  /**
   * True if this profile is allowed to use a purchase order
   * @member {Boolean} allow_purchase_order
   */
  exports.prototype['allow_purchase_order'] = undefined;
  /**
   * Billing addresses on file for this profile
   * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} billing_addresses
   */
  exports.prototype['billing_addresses'] = undefined;
  /**
   * Credit cards on file for this profile (masked)
   * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard>} credit_cards
   */
  exports.prototype['credit_cards'] = undefined;
  /**
   * Unique identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype['customer_profile_oid'] = undefined;
  /**
   * DHL account number on file
   * @member {String} dhl_account_number
   */
  exports.prototype['dhl_account_number'] = undefined;
  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * FedEx account number on file
   * @member {String} fedex_account_number
   */
  exports.prototype['fedex_account_number'] = undefined;
  /**
   * True if this profile always qualifies for free shipping
   * @member {Boolean} free_shipping
   */
  exports.prototype['free_shipping'] = undefined;
  /**
   * The minimum aount that this profile has to purchase to qualify for free shipping
   * @member {Number} free_shipping_minimum
   */
  exports.prototype['free_shipping_minimum'] = undefined;
  /**
   * Maximum item count this profile can purchase
   * @member {Number} maximum_item_count
   */
  exports.prototype['maximum_item_count'] = undefined;
  /**
   * Minimum item count this profile must purchase
   * @member {Number} minimum_item_count
   */
  exports.prototype['minimum_item_count'] = undefined;
  /**
   * Minimum subtotal this profile must purchase
   * @member {Number} minimum_subtotal
   */
  exports.prototype['minimum_subtotal'] = undefined;
  /**
   * True if this profile is prevented from using coupons
   * @member {Boolean} no_coupons
   */
  exports.prototype['no_coupons'] = undefined;
  /**
   * True if this profile is never given free shipping
   * @member {Boolean} no_free_shipping
   */
  exports.prototype['no_free_shipping'] = undefined;
  /**
   * True if this customers orders are not charged in real-time
   * @member {Boolean} no_realtime_charge
   */
  exports.prototype['no_realtime_charge'] = undefined;
  /**
   * Pricing tier names this profile qualifies for
   * @member {Array.<String>} pricing_tiers
   */
  exports.prototype['pricing_tiers'] = undefined;
  /**
   * Shipping addresses on file for this profile
   * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} shipping_addresses
   */
  exports.prototype['shipping_addresses'] = undefined;
  /**
   * True if this profile is exempt from sales tax
   * @member {Boolean} tax_exempt
   */
  exports.prototype['tax_exempt'] = undefined;
  /**
   * UPS account number on file
   * @member {String} ups_account_number
   */
  exports.prototype['ups_account_number'] = undefined;



  return exports;
}));


