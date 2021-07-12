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
    root.UltraCartRestApiV2.EmailVerifyTokenRequest = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailVerifyTokenRequest model module.
   * @module com.ultracart.admin.v2.models/EmailVerifyTokenRequest
   * @version 3.2.13
   */

  /**
   * Constructs a new <code>EmailVerifyTokenRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmailVerifyTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/EmailVerifyTokenRequest} The populated <code>EmailVerifyTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }

  /**
   * email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * password
   * @member {String} password
   */
  exports.prototype.password = undefined;

  return exports;

}));
