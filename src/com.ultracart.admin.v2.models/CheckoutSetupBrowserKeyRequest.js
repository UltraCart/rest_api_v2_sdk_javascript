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
    root.UltraCartRestApiV2.CheckoutSetupBrowserKeyRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CheckoutSetupBrowserKeyRequest model module.
   * @module com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>CheckoutSetupBrowserKeyRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckoutSetupBrowserKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CheckoutSetupBrowserKeyRequest} The populated <code>CheckoutSetupBrowserKeyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allowed_referrers'))
        obj.allowed_referrers = ApiClient.convertToType(data['allowed_referrers'], ['String']);
    }
    return obj;
  }

  /**
   * Allowed referrers.  If URLs are specified, automatic translation will convert them to proper allowed referrer maskes.
   * @member {Array.<String>} allowed_referrers
   */
  exports.prototype.allowed_referrers = undefined;

  return exports;

}));
