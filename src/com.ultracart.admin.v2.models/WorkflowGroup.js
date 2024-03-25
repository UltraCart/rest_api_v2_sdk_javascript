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
    root.UltraCartRestApiV2.WorkflowGroup = factory(root.UltraCartRestApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WorkflowGroup model module.
   * @module com.ultracart.admin.v2.models/WorkflowGroup
   * @version 3.10.189
   */

  /**
   * Constructs a new <code>WorkflowGroup</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowGroup
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowGroup} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowGroup} The populated <code>WorkflowGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('group'))
        obj.group = ApiClient.convertToType(data['group'], 'String');
      if (data.hasOwnProperty('group_id'))
        obj.group_id = ApiClient.convertToType(data['group_id'], 'Number');
    }
    return obj;
  }

  /**
   * The group
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * Group ID
   * @member {Number} group_id
   */
  exports.prototype.group_id = undefined;

  return exports;

}));
