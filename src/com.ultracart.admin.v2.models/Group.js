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
    define(['ApiClient', 'com.ultracart.admin.v2.models/GroupUserMembership', 'com.ultracart.admin.v2.models/Notification', 'com.ultracart.admin.v2.models/Permission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupUserMembership'), require('./Notification'), require('./Permission'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Group = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.GroupUserMembership, root.UltraCartRestApiV2.Notification, root.UltraCartRestApiV2.Permission);
  }
}(this, function(ApiClient, GroupUserMembership, Notification, Permission) {
  'use strict';

  /**
   * The Group model module.
   * @module com.ultracart.admin.v2.models/Group
   * @version 3.10.128
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:com.ultracart.admin.v2.models/Group
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Group} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('group_oid'))
        obj.group_oid = ApiClient.convertToType(data['group_oid'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('notifications'))
        obj.notifications = ApiClient.convertToType(data['notifications'], [Notification]);
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [Permission]);
      if (data.hasOwnProperty('users'))
        obj.users = ApiClient.convertToType(data['users'], [GroupUserMembership]);
    }
    return obj;
  }

  /**
   * The unique object identifier (oid for short) for this group
   * @member {Number} group_oid
   */
  exports.prototype.group_oid = undefined;

  /**
   * The name of this group.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * A list of notifications the user receives.
   * @member {Array.<module:com.ultracart.admin.v2.models/Notification>} notifications
   */
  exports.prototype.notifications = undefined;

  /**
   * A list of permissions the user enjoys for accessing the backend of UltraCart.
   * @member {Array.<module:com.ultracart.admin.v2.models/Permission>} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * A list of users that belong to this group.
   * @member {Array.<module:com.ultracart.admin.v2.models/GroupUserMembership>} users
   */
  exports.prototype.users = undefined;

  return exports;

}));
