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
    root.UltraCartRestApiV2.WorkflowUser = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WorkflowUser model module.
   * @module com.ultracart.admin.v2.models/WorkflowUser
   * @version 3.10.178
   */

  /**
   * Constructs a new <code>WorkflowUser</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowUser
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowUser} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowUser} The populated <code>WorkflowUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('user_icon_url'))
        obj.user_icon_url = ApiClient.convertToType(data['user_icon_url'], 'String');
      if (data.hasOwnProperty('user_id'))
        obj.user_id = ApiClient.convertToType(data['user_id'], 'Number');
    }
    return obj;
  }

  /**
   * The user
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * The user icon URL if available
   * @member {String} user_icon_url
   */
  exports.prototype.user_icon_url = undefined;

  /**
   * User ID
   * @member {Number} user_id
   */
  exports.prototype.user_id = undefined;

  return exports;

}));
