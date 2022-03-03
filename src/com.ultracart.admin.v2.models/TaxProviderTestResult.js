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
    root.UltraCartRestApiV2.TaxProviderTestResult = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxProviderTestResult model module.
   * @module com.ultracart.admin.v2.models/TaxProviderTestResult
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>TaxProviderTestResult</code>.
   * @alias module:com.ultracart.admin.v2.models/TaxProviderTestResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaxProviderTestResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/TaxProviderTestResult} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/TaxProviderTestResult} The populated <code>TaxProviderTestResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} details
   */
  exports.prototype.details = undefined;

  /**
   * True if the connection was successful
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  return exports;

}));
