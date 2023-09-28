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
    root.UltraCartRestApiV2.SingleSignOnAuthorizeResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SingleSignOnAuthorizeResponse model module.
   * @module com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
   * @version 3.10.162
   */

  /**
   * Constructs a new <code>SingleSignOnAuthorizeResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SingleSignOnAuthorizeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/SingleSignOnAuthorizeResponse} The populated <code>SingleSignOnAuthorizeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('login_url'))
        obj.login_url = ApiClient.convertToType(data['login_url'], 'String');
    }
    return obj;
  }

  /**
   * Expiration date/time after which the single sign-on login operation will have timed out
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * The URL that you should redirect the customer's browser to.  This URL will begin the login process.
   * @member {String} login_url
   */
  exports.prototype.login_url = undefined;

  return exports;

}));
