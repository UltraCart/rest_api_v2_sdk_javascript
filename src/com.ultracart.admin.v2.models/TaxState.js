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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxCounty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxCounty'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxState = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxCounty);
  }
}(this, function(ApiClient, TaxCounty) {
  'use strict';

  /**
   * The TaxState model module.
   * @module com.ultracart.admin.v2.models/TaxState
   * @version 3.2.3
   */

  /**
   * Constructs a new <code>TaxState</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxState
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxState} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxState} The populated <code>TaxState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('counties'))
        obj.counties = ApiClient.convertToType(data['counties'], [TaxCounty]);
      if (data.hasOwnProperty('country_oid'))
        obj.country_oid = ApiClient.convertToType(data['country_oid'], 'Number');
      if (data.hasOwnProperty('dont_collect_city'))
        obj.dont_collect_city = ApiClient.convertToType(data['dont_collect_city'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_county'))
        obj.dont_collect_county = ApiClient.convertToType(data['dont_collect_county'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_postal_code'))
        obj.dont_collect_postal_code = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
      if (data.hasOwnProperty('dont_collect_state'))
        obj.dont_collect_state = ApiClient.convertToType(data['dont_collect_state'], 'Boolean');
      if (data.hasOwnProperty('state_code'))
        obj.state_code = ApiClient.convertToType(data['state_code'], 'String');
      if (data.hasOwnProperty('state_oid'))
        obj.state_oid = ApiClient.convertToType(data['state_oid'], 'Number');
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
      if (data.hasOwnProperty('use_ultracart_managed_rates'))
        obj.use_ultracart_managed_rates = ApiClient.convertToType(data['use_ultracart_managed_rates'], 'Boolean');
    }
    return obj;
  }

  /**
   * Accounting code for programs such as QuickBooks
   * @member {String} accounting_code
   */
  exports.prototype.accounting_code = undefined;

  /**
   * Counties within this state
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxCounty>} counties
   */
  exports.prototype.counties = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} country_oid
   */
  exports.prototype.country_oid = undefined;

  /**
   * Flag instructing engine to not collect city tax for this state
   * @member {Boolean} dont_collect_city
   */
  exports.prototype.dont_collect_city = undefined;

  /**
   * Flag instructing engine to not collect county tax for this state
   * @member {Boolean} dont_collect_county
   */
  exports.prototype.dont_collect_county = undefined;

  /**
   * Flag instructing engine to not collect postal code tax for this state
   * @member {Boolean} dont_collect_postal_code
   */
  exports.prototype.dont_collect_postal_code = undefined;

  /**
   * Flag instructing engine to not collect state tax for this state
   * @member {Boolean} dont_collect_state
   */
  exports.prototype.dont_collect_state = undefined;

  /**
   * State code
   * @member {String} state_code
   */
  exports.prototype.state_code = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} state_oid
   */
  exports.prototype.state_oid = undefined;

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

  /**
   * If true, use UltraCart managed rates for this state
   * @member {Boolean} use_ultracart_managed_rates
   */
  exports.prototype.use_ultracart_managed_rates = undefined;

  return exports;

}));
