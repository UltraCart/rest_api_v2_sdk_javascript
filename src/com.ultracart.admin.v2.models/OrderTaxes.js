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
    root.UltraCartRestApiV2.OrderTaxes = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderTaxes model module.
   * @module com.ultracart.admin.v2.models/OrderTaxes
   * @version 3.0.76
   */

  /**
   * Constructs a new <code>OrderTaxes</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderTaxes
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderTaxes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderTaxes} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderTaxes} The populated <code>OrderTaxes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('arbitrary_tax'))
        obj.arbitrary_tax = ApiClient.convertToType(data['arbitrary_tax'], 'Number');
      if (data.hasOwnProperty('arbitrary_tax_rate'))
        obj.arbitrary_tax_rate = ApiClient.convertToType(data['arbitrary_tax_rate'], 'Number');
      if (data.hasOwnProperty('arbitrary_taxable_subtotal'))
        obj.arbitrary_taxable_subtotal = ApiClient.convertToType(data['arbitrary_taxable_subtotal'], 'Number');
      if (data.hasOwnProperty('tax_city_accounting_code'))
        obj.tax_city_accounting_code = ApiClient.convertToType(data['tax_city_accounting_code'], 'String');
      if (data.hasOwnProperty('tax_country_accounting_code'))
        obj.tax_country_accounting_code = ApiClient.convertToType(data['tax_country_accounting_code'], 'String');
      if (data.hasOwnProperty('tax_county'))
        obj.tax_county = ApiClient.convertToType(data['tax_county'], 'String');
      if (data.hasOwnProperty('tax_county_accounting_code'))
        obj.tax_county_accounting_code = ApiClient.convertToType(data['tax_county_accounting_code'], 'String');
      if (data.hasOwnProperty('tax_gift_charge'))
        obj.tax_gift_charge = ApiClient.convertToType(data['tax_gift_charge'], 'Boolean');
      if (data.hasOwnProperty('tax_postal_code_accounting_code'))
        obj.tax_postal_code_accounting_code = ApiClient.convertToType(data['tax_postal_code_accounting_code'], 'String');
      if (data.hasOwnProperty('tax_rate'))
        obj.tax_rate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('tax_rate_city'))
        obj.tax_rate_city = ApiClient.convertToType(data['tax_rate_city'], 'Number');
      if (data.hasOwnProperty('tax_rate_country'))
        obj.tax_rate_country = ApiClient.convertToType(data['tax_rate_country'], 'Number');
      if (data.hasOwnProperty('tax_rate_county'))
        obj.tax_rate_county = ApiClient.convertToType(data['tax_rate_county'], 'Number');
      if (data.hasOwnProperty('tax_rate_postal_code'))
        obj.tax_rate_postal_code = ApiClient.convertToType(data['tax_rate_postal_code'], 'Number');
      if (data.hasOwnProperty('tax_rate_state'))
        obj.tax_rate_state = ApiClient.convertToType(data['tax_rate_state'], 'Number');
      if (data.hasOwnProperty('tax_shipping'))
        obj.tax_shipping = ApiClient.convertToType(data['tax_shipping'], 'Boolean');
      if (data.hasOwnProperty('tax_state_accounting_code'))
        obj.tax_state_accounting_code = ApiClient.convertToType(data['tax_state_accounting_code'], 'String');
    }
    return obj;
  }

  /**
   * Arbitrary Tax, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
   * @member {Number} arbitrary_tax
   */
  exports.prototype.arbitrary_tax = undefined;

  /**
   * Arbitrary tax rate, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
   * @member {Number} arbitrary_tax_rate
   */
  exports.prototype.arbitrary_tax_rate = undefined;

  /**
   * Arbitrary taxable subtotal, this is meaningless for updating an order.  For inserting a new order, this will override any internal tax calculations and should only be used for orders completed outside the system.
   * @member {Number} arbitrary_taxable_subtotal
   */
  exports.prototype.arbitrary_taxable_subtotal = undefined;

  /**
   * QuickBooks tax city code
   * @member {String} tax_city_accounting_code
   */
  exports.prototype.tax_city_accounting_code = undefined;

  /**
   * QuickBooks tax country code
   * @member {String} tax_country_accounting_code
   */
  exports.prototype.tax_country_accounting_code = undefined;

  /**
   * County used for tax calculation purposes (only in the United States)
   * @member {String} tax_county
   */
  exports.prototype.tax_county = undefined;

  /**
   * QuickBooks tax county code
   * @member {String} tax_county_accounting_code
   */
  exports.prototype.tax_county_accounting_code = undefined;

  /**
   * True if gift charge is taxed
   * @member {Boolean} tax_gift_charge
   */
  exports.prototype.tax_gift_charge = undefined;

  /**
   * QuickBooks tax postal code code
   * @member {String} tax_postal_code_accounting_code
   */
  exports.prototype.tax_postal_code_accounting_code = undefined;

  /**
   * Tax rate, this is meaningless for updating an order.  For inserting a new order, if you need to override internal tax calculations, use the arbitrary fields.
   * @member {Number} tax_rate
   */
  exports.prototype.tax_rate = undefined;

  /**
   * Tax rate at the city level
   * @member {Number} tax_rate_city
   */
  exports.prototype.tax_rate_city = undefined;

  /**
   * Tax rate at the country level
   * @member {Number} tax_rate_country
   */
  exports.prototype.tax_rate_country = undefined;

  /**
   * Tax rate at the county level
   * @member {Number} tax_rate_county
   */
  exports.prototype.tax_rate_county = undefined;

  /**
   * Tax rate at the postal code level
   * @member {Number} tax_rate_postal_code
   */
  exports.prototype.tax_rate_postal_code = undefined;

  /**
   * Tax rate at the state level
   * @member {Number} tax_rate_state
   */
  exports.prototype.tax_rate_state = undefined;

  /**
   * True if shipping is taxed
   * @member {Boolean} tax_shipping
   */
  exports.prototype.tax_shipping = undefined;

  /**
   * QuickBooks tax state code
   * @member {String} tax_state_accounting_code
   */
  exports.prototype.tax_state_accounting_code = undefined;

  return exports;

}));
