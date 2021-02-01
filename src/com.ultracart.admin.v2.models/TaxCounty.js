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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxCity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxCity'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxCounty = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxCity);
  }
}(this, function(ApiClient, TaxCity) {
  'use strict';

  /**
   * The TaxCounty model module.
   * @module com.ultracart.admin.v2.models/TaxCounty
   * @version 3.0.76
   */

  /**
   * Constructs a new <code>TaxCounty</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCounty
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxCounty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxCounty} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxCounty} The populated <code>TaxCounty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('cities'))
        obj.cities = ApiClient.convertToType(data['cities'], [TaxCity]);
      if (data.hasOwnProperty('county'))
        obj.county = ApiClient.convertToType(data['county'], 'String');
      if (data.hasOwnProperty('county_oid'))
        obj.county_oid = ApiClient.convertToType(data['county_oid'], 'Number');
      if (data.hasOwnProperty('dont_collect_city'))
        obj.dont_collect_city = ApiClient.convertToType(data['dont_collect_city'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_county'))
        obj.dont_collect_county = ApiClient.convertToType(data['dont_collect_county'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_postal_code'))
        obj.dont_collect_postal_code = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
      if (data.hasOwnProperty('state_oid'))
        obj.state_oid = ApiClient.convertToType(data['state_oid'], 'Number');
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
   * Cities within this city
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxCity>} cities
   */
  exports.prototype.cities = undefined;

  /**
   * County
   * @member {String} county
   */
  exports.prototype.county = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} county_oid
   */
  exports.prototype.county_oid = undefined;

  /**
   * Flag instructing engine to not collect city tax for this county
   * @member {Boolean} dont_collect_city
   */
  exports.prototype.dont_collect_city = undefined;

  /**
   * Flag instructing engine to not collect county tax for this county
   * @member {Boolean} dont_collect_county
   */
  exports.prototype.dont_collect_county = undefined;

  /**
   * Flag instructing engine to not collect postal code tax for this county
   * @member {Boolean} dont_collect_postal_code
   */
  exports.prototype.dont_collect_postal_code = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} state_oid
   */
  exports.prototype.state_oid = undefined;

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
