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
    root.UltraCartRestApiV2.CustomerQuery = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerQuery model module.
   * @module com.ultracart.admin.v2.models/CustomerQuery
   * @version 3.10.133
   */

  /**
   * Constructs a new <code>CustomerQuery</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerQuery
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerQuery} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerQuery} The populated <code>CustomerQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('all_tags'))
        obj.all_tags = ApiClient.convertToType(data['all_tags'], ['String']);
      if (data.hasOwnProperty('any_tags'))
        obj.any_tags = ApiClient.convertToType(data['any_tags'], ['String']);
      if (data.hasOwnProperty('billing_city'))
        obj.billing_city = ApiClient.convertToType(data['billing_city'], 'String');
      if (data.hasOwnProperty('billing_company'))
        obj.billing_company = ApiClient.convertToType(data['billing_company'], 'String');
      if (data.hasOwnProperty('billing_country_code'))
        obj.billing_country_code = ApiClient.convertToType(data['billing_country_code'], 'String');
      if (data.hasOwnProperty('billing_day_phone'))
        obj.billing_day_phone = ApiClient.convertToType(data['billing_day_phone'], 'String');
      if (data.hasOwnProperty('billing_evening_phone'))
        obj.billing_evening_phone = ApiClient.convertToType(data['billing_evening_phone'], 'String');
      if (data.hasOwnProperty('billing_first_name'))
        obj.billing_first_name = ApiClient.convertToType(data['billing_first_name'], 'String');
      if (data.hasOwnProperty('billing_last_name'))
        obj.billing_last_name = ApiClient.convertToType(data['billing_last_name'], 'String');
      if (data.hasOwnProperty('billing_postal_code'))
        obj.billing_postal_code = ApiClient.convertToType(data['billing_postal_code'], 'String');
      if (data.hasOwnProperty('billing_state'))
        obj.billing_state = ApiClient.convertToType(data['billing_state'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('last_modified_dts_end'))
        obj.last_modified_dts_end = ApiClient.convertToType(data['last_modified_dts_end'], 'String');
      if (data.hasOwnProperty('last_modified_dts_start'))
        obj.last_modified_dts_start = ApiClient.convertToType(data['last_modified_dts_start'], 'String');
      if (data.hasOwnProperty('pricing_tier_name'))
        obj.pricing_tier_name = ApiClient.convertToType(data['pricing_tier_name'], 'String');
      if (data.hasOwnProperty('pricing_tier_oid'))
        obj.pricing_tier_oid = ApiClient.convertToType(data['pricing_tier_oid'], 'Number');
      if (data.hasOwnProperty('qb_class'))
        obj.qb_class = ApiClient.convertToType(data['qb_class'], 'String');
      if (data.hasOwnProperty('quickbooks_code'))
        obj.quickbooks_code = ApiClient.convertToType(data['quickbooks_code'], 'String');
      if (data.hasOwnProperty('shipping_city'))
        obj.shipping_city = ApiClient.convertToType(data['shipping_city'], 'String');
      if (data.hasOwnProperty('shipping_company'))
        obj.shipping_company = ApiClient.convertToType(data['shipping_company'], 'String');
      if (data.hasOwnProperty('shipping_country_code'))
        obj.shipping_country_code = ApiClient.convertToType(data['shipping_country_code'], 'String');
      if (data.hasOwnProperty('shipping_day_phone'))
        obj.shipping_day_phone = ApiClient.convertToType(data['shipping_day_phone'], 'String');
      if (data.hasOwnProperty('shipping_evening_phone'))
        obj.shipping_evening_phone = ApiClient.convertToType(data['shipping_evening_phone'], 'String');
      if (data.hasOwnProperty('shipping_first_name'))
        obj.shipping_first_name = ApiClient.convertToType(data['shipping_first_name'], 'String');
      if (data.hasOwnProperty('shipping_last_name'))
        obj.shipping_last_name = ApiClient.convertToType(data['shipping_last_name'], 'String');
      if (data.hasOwnProperty('shipping_postal_code'))
        obj.shipping_postal_code = ApiClient.convertToType(data['shipping_postal_code'], 'String');
      if (data.hasOwnProperty('shipping_state'))
        obj.shipping_state = ApiClient.convertToType(data['shipping_state'], 'String');
      if (data.hasOwnProperty('signup_dts_end'))
        obj.signup_dts_end = ApiClient.convertToType(data['signup_dts_end'], 'String');
      if (data.hasOwnProperty('signup_dts_start'))
        obj.signup_dts_start = ApiClient.convertToType(data['signup_dts_start'], 'String');
    }
    return obj;
  }

  /**
   * All tags the customer must have
   * @member {Array.<String>} all_tags
   */
  exports.prototype.all_tags = undefined;

  /**
   * Any of these tags the customer must have
   * @member {Array.<String>} any_tags
   */
  exports.prototype.any_tags = undefined;

  /**
   * Billing city
   * @member {String} billing_city
   */
  exports.prototype.billing_city = undefined;

  /**
   * Billing company
   * @member {String} billing_company
   */
  exports.prototype.billing_company = undefined;

  /**
   * Billing country code
   * @member {String} billing_country_code
   */
  exports.prototype.billing_country_code = undefined;

  /**
   * Billing day phone
   * @member {String} billing_day_phone
   */
  exports.prototype.billing_day_phone = undefined;

  /**
   * Billing evening phone
   * @member {String} billing_evening_phone
   */
  exports.prototype.billing_evening_phone = undefined;

  /**
   * Billing first name
   * @member {String} billing_first_name
   */
  exports.prototype.billing_first_name = undefined;

  /**
   * Billing last name
   * @member {String} billing_last_name
   */
  exports.prototype.billing_last_name = undefined;

  /**
   * Billing postal code
   * @member {String} billing_postal_code
   */
  exports.prototype.billing_postal_code = undefined;

  /**
   * Billing state
   * @member {String} billing_state
   */
  exports.prototype.billing_state = undefined;

  /**
   * Email address of this customer profile
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Last modified date end
   * @member {String} last_modified_dts_end
   */
  exports.prototype.last_modified_dts_end = undefined;

  /**
   * Last modified date start
   * @member {String} last_modified_dts_start
   */
  exports.prototype.last_modified_dts_start = undefined;

  /**
   * Pricing tier name
   * @member {String} pricing_tier_name
   */
  exports.prototype.pricing_tier_name = undefined;

  /**
   * Pricing tier oid
   * @member {Number} pricing_tier_oid
   */
  exports.prototype.pricing_tier_oid = undefined;

  /**
   * QuickBooks class to import this customer as
   * @member {String} qb_class
   */
  exports.prototype.qb_class = undefined;

  /**
   * QuickBooks name to import this customer as
   * @member {String} quickbooks_code
   */
  exports.prototype.quickbooks_code = undefined;

  /**
   * Billing city
   * @member {String} shipping_city
   */
  exports.prototype.shipping_city = undefined;

  /**
   * Billing company
   * @member {String} shipping_company
   */
  exports.prototype.shipping_company = undefined;

  /**
   * Billing country code
   * @member {String} shipping_country_code
   */
  exports.prototype.shipping_country_code = undefined;

  /**
   * Billing day phone
   * @member {String} shipping_day_phone
   */
  exports.prototype.shipping_day_phone = undefined;

  /**
   * Billing evening phone
   * @member {String} shipping_evening_phone
   */
  exports.prototype.shipping_evening_phone = undefined;

  /**
   * Billing first name
   * @member {String} shipping_first_name
   */
  exports.prototype.shipping_first_name = undefined;

  /**
   * Billing last name
   * @member {String} shipping_last_name
   */
  exports.prototype.shipping_last_name = undefined;

  /**
   * Billing postal code
   * @member {String} shipping_postal_code
   */
  exports.prototype.shipping_postal_code = undefined;

  /**
   * Billing state
   * @member {String} shipping_state
   */
  exports.prototype.shipping_state = undefined;

  /**
   * Signup date end
   * @member {String} signup_dts_end
   */
  exports.prototype.signup_dts_end = undefined;

  /**
   * Signup date start
   * @member {String} signup_dts_start
   */
  exports.prototype.signup_dts_start = undefined;

  return exports;

}));
