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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.CartCurrencyConversion = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency);
  }
}(this, function(ApiClient, Currency) {
  'use strict';




  /**
   * The CartCurrencyConversion model module.
   * @module com.ultracart.admin.v2.models/CartCurrencyConversion
   * @version 2.4.9
   */

  /**
   * Constructs a new <code>CartCurrencyConversion</code>.
   * @alias module:com.ultracart.admin.v2.models/CartCurrencyConversion
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CartCurrencyConversion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CartCurrencyConversion} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CartCurrencyConversion} The populated <code>CartCurrencyConversion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('base_currency_Code')) {
        obj['base_currency_Code'] = ApiClient.convertToType(data['base_currency_Code'], 'String');
      }
      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], [Currency]);
      }
    }
    return obj;
  }

  /**
   * Base currency code for this merchant
   * @member {String} base_currency_Code
   */
  exports.prototype['base_currency_Code'] = undefined;
  /**
   * Conversion information for 1 unit of base currency to target currencies
   * @member {Array.<module:com.ultracart.admin.v2.models/Currency>} currencies
   */
  exports.prototype['currencies'] = undefined;



  return exports;
}));

