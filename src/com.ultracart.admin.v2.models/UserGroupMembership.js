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
    root.UltraCartRestApiV2.UserGroupMembership = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserGroupMembership model module.
   * @module com.ultracart.admin.v2.models/UserGroupMembership
   * @version 3.10.51
   */

  /**
   * Constructs a new <code>UserGroupMembership</code>.
   * @alias module:com.ultracart.admin.v2.models/UserGroupMembership
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserGroupMembership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/UserGroupMembership} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/UserGroupMembership} The populated <code>UserGroupMembership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('group_oid'))
        obj.group_oid = ApiClient.convertToType(data['group_oid'], 'Number');
      if (data.hasOwnProperty('member'))
        obj.member = ApiClient.convertToType(data['member'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * The unique object identifier (oid for short) for this group
   * @member {Number} group_oid
   */
  exports.prototype.group_oid = undefined;

  /**
   * True if this user is a member of the group.
   * @member {Boolean} member
   */
  exports.prototype.member = undefined;

  /**
   * The name of this group.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  return exports;

}));
