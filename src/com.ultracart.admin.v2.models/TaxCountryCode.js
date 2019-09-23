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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxCountryCode = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaxCountryCode model module.
   * @module com.ultracart.admin.v2.models/TaxCountryCode
   * @version 2.4.34
   */

  /**
   * Constructs a new <code>TaxCountryCode</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxCountryCode
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TaxCountryCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxCountryCode} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxCountryCode} The populated <code>TaxCountryCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounting_code')) {
        obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('country_name')) {
        obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
      }
      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate_formatted')) {
        obj['tax_rate_formatted'] = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
      }
    }
    return obj;
  }

  /**
   * Accounting code for programs such as QuickBooks
   * @member {String} accounting_code
   */
  exports.prototype['accounting_code'] = undefined;
  /**
   * Country code (2 characters
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * Country name
   * @member {String} country_name
   */
  exports.prototype['country_name'] = undefined;
  /**
   * Tax Rate
   * @member {Number} tax_rate
   */
  exports.prototype['tax_rate'] = undefined;
  /**
   * Tax rate formatted
   * @member {String} tax_rate_formatted
   */
  exports.prototype['tax_rate_formatted'] = undefined;



  return exports;
}));


