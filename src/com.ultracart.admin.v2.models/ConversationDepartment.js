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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationDepartmentMember', 'com.ultracart.admin.v2.models/ConversationDepartmentSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationDepartmentMember'), require('./ConversationDepartmentSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationDepartment = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationDepartmentMember, root.UltraCartRestApiV2.ConversationDepartmentSettings);
  }
}(this, function(ApiClient, ConversationDepartmentMember, ConversationDepartmentSettings) {
  'use strict';

  /**
   * The ConversationDepartment model module.
   * @module com.ultracart.admin.v2.models/ConversationDepartment
   * @version 3.10.117
   */

  /**
   * Constructs a new <code>ConversationDepartment</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationDepartment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationDepartment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ConversationDepartment} The populated <code>ConversationDepartment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('conversation_department_oid'))
        obj.conversation_department_oid = ApiClient.convertToType(data['conversation_department_oid'], 'Number');
      if (data.hasOwnProperty('department_name'))
        obj.department_name = ApiClient.convertToType(data['department_name'], 'String');
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], [ConversationDepartmentMember]);
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('settings'))
        obj.settings = ConversationDepartmentSettings.constructFromObject(data['settings']);
    }
    return obj;
  }

  /**
   * @member {Number} conversation_department_oid
   */
  exports.prototype.conversation_department_oid = undefined;

  /**
   * @member {String} department_name
   */
  exports.prototype.department_name = undefined;

  /**
   * @member {Array.<module:com.ultracart.admin.v2.models/ConversationDepartmentMember>} members
   */
  exports.prototype.members = undefined;

  /**
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ConversationDepartmentSettings} settings
   */
  exports.prototype.settings = undefined;

  return exports;

}));
