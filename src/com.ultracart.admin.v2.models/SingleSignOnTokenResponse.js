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
    root.UltraCartRestApiV2.SingleSignOnTokenResponse = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SingleSignOnTokenResponse model module.
   * @module com.ultracart.admin.v2.models/SingleSignOnTokenResponse
   * @version 3.10.50
   */

  /**
   * Constructs a new <code>SingleSignOnTokenResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SingleSignOnTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/SingleSignOnTokenResponse} The populated <code>SingleSignOnTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('simple_key'))
        obj.simple_key = ApiClient.convertToType(data['simple_key'], 'String');
    }
    return obj;
  }

  /**
   * Expiration date/time after which time the key is no longer valid
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * IP address of the user which we recommend you lock the simple key's usage to.
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * The simple key that can then be used to make SDK calls on the users behalf.
   * @member {String} simple_key
   */
  exports.prototype.simple_key = undefined;

  return exports;

}));
