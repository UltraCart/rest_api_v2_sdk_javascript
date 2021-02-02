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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxPostalCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxPostalCode'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxCity = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxPostalCode);
  }
}(this, function(ApiClient, TaxPostalCode) {
  'use strict';

  /**
   * The TaxCity model module.
   * @module com.ultracart.admin.v2.models/TaxCity
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>TaxCity</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxCity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxCity} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxCity} The populated <code>TaxCity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('city_oid'))
        obj.city_oid = ApiClient.convertToType(data['city_oid'], 'Number');
      if (data.hasOwnProperty('county_oid'))
        obj.county_oid = ApiClient.convertToType(data['county_oid'], 'Number');
      if (data.hasOwnProperty('dont_collect_city'))
        obj.dont_collect_city = ApiClient.convertToType(data['dont_collect_city'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_postal_code'))
        obj.dont_collect_postal_code = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
      if (data.hasOwnProperty('postal_codes'))
        obj.postal_codes = ApiClient.convertToType(data['postal_codes'], [TaxPostalCode]);
      if (data.hasOwnProperty('tax_rate'))
        obj.tax_rate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('tax_rate_formatted'))
        obj.tax_rate_formatted = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
    }
    return obj;
  }

  /**
   * Accounting code for programs such as QuickBooks
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * City
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} city_oid
   */
  exports.prototype.city_oid = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} county_oid
   */
  exports.prototype.county_oid = undefined;

  /**
   * Flag instructing engine to not collect city tax for this city
   * @member {Boolean} dont_collect_city
   */
  exports.prototype.dont_collect_city = undefined;

  /**
   * Flag instructing engine to not collect postal code tax for this city
   * @member {Boolean} dont_collect_postal_code
   */
  exports.prototype.dont_collect_postal_code = undefined;

  /**
   * Postal Codes within this city
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxPostalCode>} postal_codes
   */
  exports.prototype.postal_codes = undefined;

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

  return exports;

}));
