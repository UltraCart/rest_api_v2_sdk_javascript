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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxCountryCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxCountryCode'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxProviderSelfCountriesResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxCountryCode);
  }
}(this, function(ApiClient, TaxCountryCode) {
  'use strict';

  /**
   * The TaxProviderSelfCountriesResponse model module.
   * @module com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>TaxProviderSelfCountriesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderSelfCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} The populated <code>TaxProviderSelfCountriesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], [TaxCountryCode]);
    }
    return obj;
  }

  /**
   * countries
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountryCode>} countries
   */
  exports.prototype.countries = undefined;

  return exports;

}));
