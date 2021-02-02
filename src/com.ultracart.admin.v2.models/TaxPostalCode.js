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
    root.UltraCartRestApiV2.TaxPostalCode = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxPostalCode model module.
   * @module com.ultracart.admin.v2.models/TaxPostalCode
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>TaxPostalCode</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxPostalCode
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxPostalCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxPostalCode} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxPostalCode} The populated <code>TaxPostalCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting_code'))
        obj.accounting_code = ApiClient.convertToType(data['accounting_code'], 'String');
      if (data.hasOwnProperty('city_oid'))
        obj.city_oid = ApiClient.convertToType(data['city_oid'], 'Number');
      if (data.hasOwnProperty('dont_collect_postal_code'))
        obj.dont_collect_postal_code = ApiClient.convertToType(data['dont_collect_postal_code'], 'Boolean');
      if (data.hasOwnProperty('postal_code'))
        obj.postal_code = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('postal_code_oid'))
        obj.postal_code_oid = ApiClient.convertToType(data['postal_code_oid'], 'Number');
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
   * Tax record object identifier used internally by database
   * @member {Number} city_oid
   */
  exports.prototype.city_oid = undefined;

  /**
   * Flag instructing engine to not collect postal code tax for this postal code
   * @member {Boolean} dont_collect_postal_code
   */
  exports.prototype.dont_collect_postal_code = undefined;

  /**
   * Postal Code (5 digits)
   * @member {String} postal_code
   */
  exports.prototype.postal_code = undefined;

  /**
   * Tax record object identifier used internally by database
   * @member {Number} postal_code_oid
   */
  exports.prototype.postal_code_oid = undefined;

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
