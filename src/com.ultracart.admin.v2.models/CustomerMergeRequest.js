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
    root.UltraCartRestApiV2.CustomerMergeRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerMergeRequest model module.
   * @module com.ultracart.admin.v2.models/CustomerMergeRequest
   * @version 3.10.73
   */

  /**
   * Constructs a new <code>CustomerMergeRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerMergeRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerMergeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/CustomerMergeRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/CustomerMergeRequest} The populated <code>CustomerMergeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customer_profile_oid'))
        obj.customer_profile_oid = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }

  /**
   * Customer profile oid to merge
   * @member {Number} customer_profile_oid
   */
  exports.prototype.customer_profile_oid = undefined;

  /**
   * Email of the customer profile to merge
   * @member {String} email
   */
  exports.prototype.email = undefined;

  return exports;

}));
