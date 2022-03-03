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
    root.UltraCartRestApiV2.CustomerBilling = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerBilling model module.
   * @module com.ultracart.admin.v2.models/CustomerBilling
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>CustomerBilling</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerBilling
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerBilling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerBilling} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerBilling} The populated <code>CustomerBilling</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('address2'))
        obj.address2 = ApiClient.convertToType(data['address2'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('customer_billing_oid'))
        obj.customer_billing_oid = ApiClient.convertToType(data['customer_billing_oid'], 'Number');
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('day_phone'))
        obj.day_phone = ApiClient.convertToType(data['day_phone'], 'String');
      if (data.hasOwnProperty('default_billing'))
        obj.default_billing = ApiClient.convertToType(data['default_billing'], 'Boolean');
      if (data.hasOwnProperty('evening_phone'))
        obj.evening_phone = ApiClient.convertToType(data['evening_phone'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.first_name = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.last_name = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('last_used_dts'))
        obj.last_used_dts = ApiClient.convertToType(data['last_used_dts'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state_region'))
        obj.state_region = ApiClient.convertToType(data['state_region'], 'String');
      if (data.hasOwnProperty('tax_county'))
        obj.tax_county = ApiClient.convertToType(data['tax_county'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }

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
   * ISO-3166 two letter country code
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * Customer profile billing object identifier
   * @member {Number} customer_billing_oid
   */
  exports.prototype.customer_billing_oid = undefined;

  /**
   * Customer profile object identifier
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * Day phone
   * @member {String} day_phone
   */
  exports.prototype.day_phone = undefined;

  /**
   * Default billing
   * @member {Boolean} default_billing
   */
  exports.prototype.default_billing = undefined;

  /**
   * Evening phone
   * @member {String} evening_phone
   */
  exports.prototype.evening_phone = undefined;

  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype.first_name = undefined;

  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype.last_name = undefined;

  /**
   * Last used date
   * @member {String} last_used_dts
   */
  exports.prototype.last_used_dts = undefined;

  /**
   * Postal code
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * State for United States otherwise region or province for other countries
   * @member {String} state_region
   */
  exports.prototype.state_region = undefined;

  /**
   * Tax County
   * @member {String} tax_county
   */
  exports.prototype.tax_county = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype.title = undefined;

  return exports;

}));
