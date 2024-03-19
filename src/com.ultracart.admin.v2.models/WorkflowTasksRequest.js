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
    define(['ApiClient', 'com.ultracart.admin.v2.models/WorkflowUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowUser'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WorkflowTasksRequest = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.WorkflowUser);
  }
}(this, function(ApiClient, WorkflowUser) {
  'use strict';

  /**
   * The WorkflowTasksRequest model module.
   * @module com.ultracart.admin.v2.models/WorkflowTasksRequest
   * @version 3.10.188
   */

  /**
   * Constructs a new <code>WorkflowTasksRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowTasksRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowTasksRequest} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowTasksRequest} The populated <code>WorkflowTasksRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assigned_to_group_id'))
        obj.assigned_to_group_id = ApiClient.convertToType(data['assigned_to_group_id'], 'Number');
      if (data.hasOwnProperty('assigned_to_me'))
        obj.assigned_to_me = ApiClient.convertToType(data['assigned_to_me'], 'Boolean');
      if (data.hasOwnProperty('assigned_to_user_id'))
        obj.assigned_to_user_id = ApiClient.convertToType(data['assigned_to_user_id'], 'Number');
      if (data.hasOwnProperty('created_by'))
        obj.created_by = WorkflowUser.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('created_dts_begin'))
        obj.created_dts_begin = ApiClient.convertToType(data['created_dts_begin'], 'String');
      if (data.hasOwnProperty('created_dts_end'))
        obj.created_dts_end = ApiClient.convertToType(data['created_dts_end'], 'String');
      if (data.hasOwnProperty('delay_until_dts_begin'))
        obj.delay_until_dts_begin = ApiClient.convertToType(data['delay_until_dts_begin'], 'String');
      if (data.hasOwnProperty('delay_until_dts_end'))
        obj.delay_until_dts_end = ApiClient.convertToType(data['delay_until_dts_end'], 'String');
      if (data.hasOwnProperty('due_dts_begin'))
        obj.due_dts_begin = ApiClient.convertToType(data['due_dts_begin'], 'String');
      if (data.hasOwnProperty('due_dts_end'))
        obj.due_dts_end = ApiClient.convertToType(data['due_dts_end'], 'String');
      if (data.hasOwnProperty('last_update_dts_begin'))
        obj.last_update_dts_begin = ApiClient.convertToType(data['last_update_dts_begin'], 'String');
      if (data.hasOwnProperty('last_update_dts_end'))
        obj.last_update_dts_end = ApiClient.convertToType(data['last_update_dts_end'], 'String');
      if (data.hasOwnProperty('object_email'))
        obj.object_email = ApiClient.convertToType(data['object_email'], 'String');
      if (data.hasOwnProperty('object_type'))
        obj.object_type = ApiClient.convertToType(data['object_type'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('unassigned'))
        obj.unassigned = ApiClient.convertToType(data['unassigned'], 'Boolean');
    }
    return obj;
  }

  /**
   * Assigned to group ID
   * @member {Number} assigned_to_group_id
   */
  exports.prototype.assigned_to_group_id = undefined;

  /**
   * Tasks are assigned to me either by direct user id or a group that the user is a member of
   * @member {Boolean} assigned_to_me
   */
  exports.prototype.assigned_to_me = undefined;

  /**
   * Assigned to user ID
   * @member {Number} assigned_to_user_id
   */
  exports.prototype.assigned_to_user_id = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/WorkflowUser} created_by
   */
  exports.prototype.created_by = undefined;

  /**
   * Date/time that the workflow task was created
   * @member {String} created_dts_begin
   */
  exports.prototype.created_dts_begin = undefined;

  /**
   * Date/time that the workflow task was created
   * @member {String} created_dts_end
   */
  exports.prototype.created_dts_end = undefined;

  /**
   * Date/time that the workflow task should delay until
   * @member {String} delay_until_dts_begin
   */
  exports.prototype.delay_until_dts_begin = undefined;

  /**
   * Date/time that the workflow task should delay until
   * @member {String} delay_until_dts_end
   */
  exports.prototype.delay_until_dts_end = undefined;

  /**
   * Date/time that the workflow task is due
   * @member {String} due_dts_begin
   */
  exports.prototype.due_dts_begin = undefined;

  /**
   * Date/time that the workflow task is due
   * @member {String} due_dts_end
   */
  exports.prototype.due_dts_end = undefined;

  /**
   * Date/time that the workflow task was last updated
   * @member {String} last_update_dts_begin
   */
  exports.prototype.last_update_dts_begin = undefined;

  /**
   * Date/time that the workflow task was last updated
   * @member {String} last_update_dts_end
   */
  exports.prototype.last_update_dts_end = undefined;

  /**
   * Object is associated with customer email
   * @member {String} object_email
   */
  exports.prototype.object_email = undefined;

  /**
   * Object Type
   * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.ObjectTypeEnum} object_type
   */
  exports.prototype.object_type = undefined;

  /**
   * Priority
   * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.PriorityEnum} priority
   */
  exports.prototype.priority = undefined;

  /**
   * Status of the workflow task
   * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Tasks that are tagged with the specified tags
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * Tasks that are unassigned to a user or group
   * @member {Boolean} unassigned
   */
  exports.prototype.unassigned = undefined;


  /**
   * Allowed values for the <code>object_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectTypeEnum = {
    /**
     * value: "order"
     * @const
     */
    order: "order",

    /**
     * value: "auto order"
     * @const
     */
    auto_order: "auto order",

    /**
     * value: "item"
     * @const
     */
    item: "item",

    /**
     * value: "customer profile"
     * @const
     */
    customer_profile: "customer profile"
  };


  /**
   * Allowed values for the <code>priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriorityEnum = {
    /**
     * value: "1 - low"
     * @const
     */
    _1___low: "1 - low",

    /**
     * value: "2 - medium"
     * @const
     */
    _2___medium: "2 - medium",

    /**
     * value: "3 - high"
     * @const
     */
    _3___high: "3 - high",

    /**
     * value: "4 - critical"
     * @const
     */
    _4___critical: "4 - critical"
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "open"
     * @const
     */
    open: "open",

    /**
     * value: "closed"
     * @const
     */
    closed: "closed",

    /**
     * value: "delayed"
     * @const
     */
    delayed: "delayed",

    /**
     * value: "awaiting customer feedback"
     * @const
     */
    awaiting_customer_feedback: "awaiting customer feedback"
  };

  return exports;

}));
