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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CheckoutAllowedCountriesResponse = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';

  /**
   * The CheckoutAllowedCountriesResponse model module.
   * @module com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
   * @version 3.10.74
   */

  /**
   * Constructs a new <code>CheckoutAllowedCountriesResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckoutAllowedCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CheckoutAllowedCountriesResponse} The populated <code>CheckoutAllowedCountriesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], [Country]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/Country>} countries
   */
  exports.prototype.countries = undefined;

  return exports;

}));
