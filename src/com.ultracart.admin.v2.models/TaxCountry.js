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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxState'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxCountry = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxState);
  }
}(this, function(ApiClient, TaxState) {
  'use strict';

  /**
   * The TaxCountry model module.
   * @module com.ultracart.admin.v2.models/TaxCountry
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>TaxCountry</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCountry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxCountry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxCountry} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxCountry} The populated <code>TaxCountry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('country_code'))
        obj.country_code = ApiClient.convertToType(data['country_code'], 'String');
      if (data.hasOwnProperty('country_oid'))
        obj.country_oid = ApiClient.convertToType(data['country_oid'], 'Number');
      if (data.hasOwnProperty('states'))
        obj.states = ApiClient.convertToType(data['states'], [TaxState]);
      if (data.hasOwnProperty('tax_gift_charge'))
        obj.tax_gift_charge = ApiClient.convertToType(data['tax_gift_charge'], 'Boolean');
      if (data.hasOwnProperty('tax_gift_wrap'))
        obj.tax_gift_wrap = ApiClient.convertToType(data['tax_gift_wrap'], 'Boolean');
      if (data.hasOwnProperty('tax_rate'))
        obj.tax_rate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('tax_rate_formatted'))
        obj.tax_rate_formatted = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
      if (data.hasOwnProperty('tax_shipping'))
        obj.tax_shipping = ApiClient.convertToType(data['tax_shipping'], 'Boolean');
    }
    return obj;
  }

  /**
   * Accounting code for programs such as QuickBooks
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Country code (2 characters
   * @member {String} country_code
   */
  exports.prototype.country_code = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} country_oid
   */
  exports.prototype.country_oid = undefined;

  /**
   * States (or regions or territories) within this country
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxState>} states
   */
  exports.prototype.states = undefined;

  /**
   * True if taxation within this jurisdiction should charge tax on gift charge
   * @member {Boolean} tax_gift_charge
   */
  exports.prototype.tax_gift_charge = undefined;

  /**
   * True if taxation within this jurisdiction should charge tax on gift wrap
   * @member {Boolean} tax_gift_wrap
   */
  exports.prototype.tax_gift_wrap = undefined;

  /**
   * Tax Rate
   * @member {Number} tax_rate
   */
  exports.prototype.tax_rate = undefined;

  /**
   * Tax rate formatted
   * @member {String} tax_rate_formatted
   */
  exports.prototype.tax_rate_formatted = undefined;

  /**
   * True if taxation within this jurisdiction should charge tax on shipping
   * @member {Boolean} tax_shipping
   */
  exports.prototype.tax_shipping = undefined;

  return exports;

}));
