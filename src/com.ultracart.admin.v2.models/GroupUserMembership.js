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
    root.UltraCartRestApiV2.GroupUserMembership = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupUserMembership model module.
   * @module com.ultracart.admin.v2.models/GroupUserMembership
   * @version 3.9.8
   */

  /**
   * Constructs a new <code>GroupUserMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/GroupUserMembership
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GroupUserMembership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/GroupUserMembership} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/GroupUserMembership} The populated <code>GroupUserMembership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('login'))
        obj.login = ApiClient.convertToType(data['login'], 'String');
      if (data.hasOwnProperty('member'))
        obj.member = ApiClient.convertToType(data['member'], 'Boolean');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
    }
    return obj;
  }

  /**
   * The email for this user.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * The full name for this user.
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * The login for this user.
   * @member {String} login
   */
  exports.prototype.login = undefined;

  /**
   * True if this user belongs to the parent group, false otherwise.
   * @member {Boolean} member
   */
  exports.prototype.member = undefined;

  /**
   * The user id for this user.
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  return exports;

}));
