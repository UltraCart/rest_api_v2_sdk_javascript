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
    define(['ApiClient', 'com.ultracart.admin.v2.models/TaxProviderAvalaraCompany'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxProviderAvalaraCompany'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.TaxProviderAvalaraCompaniesResult = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.TaxProviderAvalaraCompany);
  }
}(this, function(ApiClient, TaxProviderAvalaraCompany) {
  'use strict';

  /**
   * The TaxProviderAvalaraCompaniesResult model module.
   * @module com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
   * @version 3.6.34
   */

  /**
   * Constructs a new <code>TaxProviderAvalaraCompaniesResult</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderAvalaraCompaniesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} The populated <code>TaxProviderAvalaraCompaniesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('companies'))
        obj.companies = ApiClient.convertToType(data['companies'], [TaxProviderAvalaraCompany]);
    }
    return obj;
  }

  /**
   * Tax companies configured by the merchant
   * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompany>} companies
   */
  exports.prototype.companies = undefined;

  return exports;

}));
