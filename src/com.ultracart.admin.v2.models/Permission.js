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
    root.UltraCartRestApiV2.Permission = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Permission model module.
   * @module com.ultracart.admin.v2.models/Permission
   * @version 3.10.198
   */

  /**
   * Constructs a new <code>Permission</code>.
   * @alias module:com.ultracart.admin.v2.models/Permission
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Permission} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Permission} The populated <code>Permission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('permission_group'))
        obj.permission_group = ApiClient.convertToType(data['permission_group'], 'String');
      if (data.hasOwnProperty('permission_Name'))
        obj.permission_Name = ApiClient.convertToType(data['permission_Name'], 'String');
      if (data.hasOwnProperty('selected'))
        obj.selected = ApiClient.convertToType(data['selected'], 'Boolean');
    }
    return obj;
  }

  /**
   * A group for this permission.  This name is only used for visual grouping within interfaces.
   * @member {String} permission_group
   */
  exports.prototype.permission_group = undefined;

  /**
   * The name of this permission.
   * @member {String} permission_Name
   */
  exports.prototype.permission_Name = undefined;

  /**
   * True if this user has this permission.
   * @member {Boolean} selected
   */
  exports.prototype.selected = undefined;

  return exports;

}));
