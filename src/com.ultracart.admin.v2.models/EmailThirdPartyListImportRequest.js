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
    define(['ApiClient', 'com.ultracart.admin.v2.models/EmailThirdPartyProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailThirdPartyProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.EmailThirdPartyListImportRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.EmailThirdPartyProvider);
  }
}(this, function(ApiClient, EmailThirdPartyProvider) {
  'use strict';

  /**
   * The EmailThirdPartyListImportRequest model module.
   * @module com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
   * @version 3.10.96
   */

  /**
   * Constructs a new <code>EmailThirdPartyListImportRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailThirdPartyListImportRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyListImportRequest} The populated <code>EmailThirdPartyListImportRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('providers'))
        obj.providers = ApiClient.convertToType(data['providers'], [EmailThirdPartyProvider]);
    }
    return obj;
  }

  /**
   * providers
   * @member {Array.<module:com.ultracart.admin.v2.models/EmailThirdPartyProvider>} providers
   */
  exports.prototype.providers = undefined;

  return exports;

}));
