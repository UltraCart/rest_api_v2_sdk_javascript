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
    define(['ApiClient', 'com.ultracart.admin.v2.models/LinkedAccount', 'com.ultracart.admin.v2.models/Notification', 'com.ultracart.admin.v2.models/Permission', 'com.ultracart.admin.v2.models/UserGroupMembership', 'com.ultracart.admin.v2.models/UserLogin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LinkedAccount'), require('./Notification'), require('./Permission'), require('./UserGroupMembership'), require('./UserLogin'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.User = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.LinkedAccount, root.UltraCartRestApiV2.Notification, root.UltraCartRestApiV2.Permission, root.UltraCartRestApiV2.UserGroupMembership, root.UltraCartRestApiV2.UserLogin);
  }
}(this, function(ApiClient, LinkedAccount, Notification, Permission, UserGroupMembership, UserLogin) {
  'use strict';

  /**
   * The User model module.
   * @module com.ultracart.admin.v2.models/User
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:com.ultracart.admin.v2.models/User
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/User} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('api_ip_address_masks'))
        obj.api_ip_address_masks = ApiClient.convertToType(data['api_ip_address_masks'], ['String']);
      if (data.hasOwnProperty('change_ftp_password_to'))
        obj.change_ftp_password_to = ApiClient.convertToType(data['change_ftp_password_to'], 'String');
      if (data.hasOwnProperty('change_password_to'))
        obj.change_password_to = ApiClient.convertToType(data['change_password_to'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('full_name'))
        obj.full_name = ApiClient.convertToType(data['full_name'], 'String');
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [UserGroupMembership]);
      if (data.hasOwnProperty('linked_accounts'))
        obj.linked_accounts = ApiClient.convertToType(data['linked_accounts'], [LinkedAccount]);
      if (data.hasOwnProperty('login'))
        obj.login = ApiClient.convertToType(data['login'], 'String');
      if (data.hasOwnProperty('login_histories'))
        obj.login_histories = ApiClient.convertToType(data['login_histories'], [UserLogin]);
      if (data.hasOwnProperty('notifications'))
        obj.notifications = ApiClient.convertToType(data['notifications'], [Notification]);
      if (data.hasOwnProperty('otp_serial_number'))
        obj.otp_serial_number = ApiClient.convertToType(data['otp_serial_number'], 'String');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [Permission]);
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
    }
    return obj;
  }

  /**
   * A list of IP addresses whitelisted for any user with API Access permission.  Without this list, each ip address must be authenticated by a user, which can be a pain for some servers.
   * @member {Array.<String>} api_ip_address_masks
   */
  exports.prototype.api_ip_address_masks = undefined;

  /**
   * Supply a new FTP password using this field.  Password are stored using one-way encryption, so they are never available anywhere in the system.  The FTP password cannot be the same as the normal password.
   * @member {String} change_ftp_password_to
   */
  exports.prototype.change_ftp_password_to = undefined;

  /**
   * Supply a new password using this field.  Password are stored using one-way encryption, so they are never available anywhere in the system.
   * @member {String} change_password_to
   */
  exports.prototype.change_password_to = undefined;

  /**
   * Email address of user
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Full name of user.  This is used solely for human assistance and so the UltraCart staff knows who they are calling when there is a problem.
   * @member {String} full_name
   */
  exports.prototype.full_name = undefined;

  /**
   * A list of groups for this merchant and whether or not this user is a member of those groups.
   * @member {Array.<module:com.ultracart.admin.v2.models/UserGroupMembership>} groups
   */
  exports.prototype.groups = undefined;

  /**
   * A list of linked accounts and whether or not this user is mirrored to any of those accounts.
   * @member {Array.<module:com.ultracart.admin.v2.models/LinkedAccount>} linked_accounts
   */
  exports.prototype.linked_accounts = undefined;

  /**
   * User name of user.  Must be unique across a merchant account.
   * @member {String} login
   */
  exports.prototype.login = undefined;

  /**
   * A list of user logins over the past 90 days
   * @member {Array.<module:com.ultracart.admin.v2.models/UserLogin>} login_histories
   */
  exports.prototype.login_histories = undefined;

  /**
   * A list of notifications the user receives.
   * @member {Array.<module:com.ultracart.admin.v2.models/Notification>} notifications
   */
  exports.prototype.notifications = undefined;

  /**
   * OTP Serial Number such as Google Authenticator or Crypto Card.
   * @member {String} otp_serial_number
   */
  exports.prototype.otp_serial_number = undefined;

  /**
   * A list of permissions the user enjoys for accessing the backend of UltraCart.
   * @member {Array.<module:com.ultracart.admin.v2.models/Permission>} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * Phone number of user.  Please supply a valid phone number.  When something breaks on your account, we need to be able to reach you.
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * User id is a unique identifier for this user
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  return exports;

}));
