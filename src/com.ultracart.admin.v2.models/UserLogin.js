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
    root.UltraCartRestApiV2.UserLogin = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserLogin model module.
   * @module com.ultracart.admin.v2.models/UserLogin
   * @version 3.6.8
   */

  /**
   * Constructs a new <code>UserLogin</code>.
   * @alias module:com.ultracart.admin.v2.models/UserLogin
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserLogin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/UserLogin} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/UserLogin} The populated <code>UserLogin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ip_address'))
        obj.ip_address = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('login'))
        obj.login = ApiClient.convertToType(data['login'], 'String');
      if (data.hasOwnProperty('login_dts'))
        obj.login_dts = ApiClient.convertToType(data['login_dts'], 'String');
      if (data.hasOwnProperty('user_agent'))
        obj.user_agent = ApiClient.convertToType(data['user_agent'], 'String');
    }
    return obj;
  }

  /**
   * IP Address
   * @member {String} ip_address
   */
  exports.prototype.ip_address = undefined;

  /**
   * login
   * @member {String} login
   */
  exports.prototype.login = undefined;

  /**
   * Login date/time
   * @member {String} login_dts
   */
  exports.prototype.login_dts = undefined;

  /**
   * User Agent
   * @member {String} user_agent
   */
  exports.prototype.user_agent = undefined;

  return exports;

}));
