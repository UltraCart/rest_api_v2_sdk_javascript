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
    define(['ApiClient', 'com.ultracart.admin.v2.models/Property', 'com.ultracart.admin.v2.models/WorkflowAttachment', 'com.ultracart.admin.v2.models/WorkflowNote', 'com.ultracart.admin.v2.models/WorkflowTaskHistory', 'com.ultracart.admin.v2.models/WorkflowUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./WorkflowAttachment'), require('./WorkflowNote'), require('./WorkflowTaskHistory'), require('./WorkflowUser'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WorkflowTask = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Property, root.UltraCartRestApiV2.WorkflowAttachment, root.UltraCartRestApiV2.WorkflowNote, root.UltraCartRestApiV2.WorkflowTaskHistory, root.UltraCartRestApiV2.WorkflowUser);
  }
}(this, function(ApiClient, Property, WorkflowAttachment, WorkflowNote, WorkflowTaskHistory, WorkflowUser) {
  'use strict';

  /**
   * The WorkflowTask model module.
   * @module com.ultracart.admin.v2.models/WorkflowTask
   * @version 3.10.224
   */

  /**
   * Constructs a new <code>WorkflowTask</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowTask
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WorkflowTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/WorkflowTask} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/WorkflowTask} The populated <code>WorkflowTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assigned_to_group'))
        obj.assigned_to_group = ApiClient.convertToType(data['assigned_to_group'], 'String');
      if (data.hasOwnProperty('assigned_to_group_id'))
        obj.assigned_to_group_id = ApiClient.convertToType(data['assigned_to_group_id'], 'Number');
      if (data.hasOwnProperty('assigned_to_user'))
        obj.assigned_to_user = ApiClient.convertToType(data['assigned_to_user'], 'String');
      if (data.hasOwnProperty('assigned_to_user_id'))
        obj.assigned_to_user_id = ApiClient.convertToType(data['assigned_to_user_id'], 'Number');
      if (data.hasOwnProperty('assigned_to_user_or_group'))
        obj.assigned_to_user_or_group = ApiClient.convertToType(data['assigned_to_user_or_group'], 'String');
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [WorkflowAttachment]);
      if (data.hasOwnProperty('created_by'))
        obj.created_by = WorkflowUser.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('created_dts'))
        obj.created_dts = ApiClient.convertToType(data['created_dts'], 'String');
      if (data.hasOwnProperty('delay_until_dts'))
        obj.delay_until_dts = ApiClient.convertToType(data['delay_until_dts'], 'String');
      if (data.hasOwnProperty('dependant_workflow_task_uuid'))
        obj.dependant_workflow_task_uuid = ApiClient.convertToType(data['dependant_workflow_task_uuid'], 'String');
      if (data.hasOwnProperty('due_dts'))
        obj.due_dts = ApiClient.convertToType(data['due_dts'], 'String');
      if (data.hasOwnProperty('expiration_dts'))
        obj.expiration_dts = ApiClient.convertToType(data['expiration_dts'], 'String');
      if (data.hasOwnProperty('global_task_number'))
        obj.global_task_number = ApiClient.convertToType(data['global_task_number'], 'Number');
      if (data.hasOwnProperty('histories'))
        obj.histories = ApiClient.convertToType(data['histories'], [WorkflowTaskHistory]);
      if (data.hasOwnProperty('last_update_dts'))
        obj.last_update_dts = ApiClient.convertToType(data['last_update_dts'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], [WorkflowNote]);
      if (data.hasOwnProperty('object_email'))
        obj.object_email = ApiClient.convertToType(data['object_email'], 'String');
      if (data.hasOwnProperty('object_id'))
        obj.object_id = ApiClient.convertToType(data['object_id'], 'String');
      if (data.hasOwnProperty('object_task_number'))
        obj.object_task_number = ApiClient.convertToType(data['object_task_number'], 'Number');
      if (data.hasOwnProperty('object_type'))
        obj.object_type = ApiClient.convertToType(data['object_type'], 'String');
      if (data.hasOwnProperty('object_url'))
        obj.object_url = ApiClient.convertToType(data['object_url'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'String');
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [Property]);
      if (data.hasOwnProperty('related_workflow_task_uuid'))
        obj.related_workflow_task_uuid = ApiClient.convertToType(data['related_workflow_task_uuid'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('system_task_type'))
        obj.system_task_type = ApiClient.convertToType(data['system_task_type'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('task_context'))
        obj.task_context = ApiClient.convertToType(data['task_context'], 'String');
      if (data.hasOwnProperty('task_details'))
        obj.task_details = ApiClient.convertToType(data['task_details'], 'String');
      if (data.hasOwnProperty('task_name'))
        obj.task_name = ApiClient.convertToType(data['task_name'], 'String');
      if (data.hasOwnProperty('workflow_task_uuid'))
        obj.workflow_task_uuid = ApiClient.convertToType(data['workflow_task_uuid'], 'String');
    }
    return obj;
  }

  /**
   * Assigned to group
   * @member {String} assigned_to_group
   */
  exports.prototype.assigned_to_group = undefined;

  /**
   * Assigned to group ID
   * @member {Number} assigned_to_group_id
   */
  exports.prototype.assigned_to_group_id = undefined;

  /**
   * Assigned to user
   * @member {String} assigned_to_user
   */
  exports.prototype.assigned_to_user = undefined;

  /**
   * Assigned to user ID
   * @member {Number} assigned_to_user_id
   */
  exports.prototype.assigned_to_user_id = undefined;

  /**
   * Assigned to user or group (used for sorting)
   * @member {String} assigned_to_user_or_group
   */
  exports.prototype.assigned_to_user_or_group = undefined;

  /**
   * Attachments to the Workflow Task
   * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowAttachment>} attachments
   */
  exports.prototype.attachments = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/WorkflowUser} created_by
   */
  exports.prototype.created_by = undefined;

  /**
   * Date/time that the workflow task was created
   * @member {String} created_dts
   */
  exports.prototype.created_dts = undefined;

  /**
   * Date/time that the workflow task should delay until
   * @member {String} delay_until_dts
   */
  exports.prototype.delay_until_dts = undefined;

  /**
   * Dependant Workflow Task UUID (must be completed before this task can be completed)
   * @member {String} dependant_workflow_task_uuid
   */
  exports.prototype.dependant_workflow_task_uuid = undefined;

  /**
   * Date/time that the workflow task is due
   * @member {String} due_dts
   */
  exports.prototype.due_dts = undefined;

  /**
   * Date/time that the workflow task will expire and be closed.  This is set by system generated tasks.
   * @member {String} expiration_dts
   */
  exports.prototype.expiration_dts = undefined;

  /**
   * Global task number
   * @member {Number} global_task_number
   */
  exports.prototype.global_task_number = undefined;

  /**
   * Array of history records for the task
   * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowTaskHistory>} histories
   */
  exports.prototype.histories = undefined;

  /**
   * Date/time that the workflow task was last updated
   * @member {String} last_update_dts
   */
  exports.prototype.last_update_dts = undefined;

  /**
   * Merchant ID
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Notes on the Workflow Task
   * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowNote>} notes
   */
  exports.prototype.notes = undefined;

  /**
   * Object is associated with customer email
   * @member {String} object_email
   */
  exports.prototype.object_email = undefined;

  /**
   * Object ID
   * @member {String} object_id
   */
  exports.prototype.object_id = undefined;

  /**
   * Object specific task number
   * @member {Number} object_task_number
   */
  exports.prototype.object_task_number = undefined;

  /**
   * Object Type
   * @member {module:com.ultracart.admin.v2.models/WorkflowTask.ObjectTypeEnum} object_type
   */
  exports.prototype.object_type = undefined;

  /**
   * Object URL
   * @member {String} object_url
   */
  exports.prototype.object_url = undefined;

  /**
   * Priority
   * @member {module:com.ultracart.admin.v2.models/WorkflowTask.PriorityEnum} priority
   */
  exports.prototype.priority = undefined;

  /**
   * Properties
   * @member {Array.<module:com.ultracart.admin.v2.models/Property>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * Related Workflow Task UUID
   * @member {String} related_workflow_task_uuid
   */
  exports.prototype.related_workflow_task_uuid = undefined;

  /**
   * Status of the workflow task
   * @member {module:com.ultracart.admin.v2.models/WorkflowTask.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Constant for the type of system generated task
   * @member {module:com.ultracart.admin.v2.models/WorkflowTask.SystemTaskTypeEnum} system_task_type
   */
  exports.prototype.system_task_type = undefined;

  /**
   * Tags
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * User friendly string of the task context
   * @member {String} task_context
   */
  exports.prototype.task_context = undefined;

  /**
   * Task Details
   * @member {String} task_details
   */
  exports.prototype.task_details = undefined;

  /**
   * Task Name
   * @member {String} task_name
   */
  exports.prototype.task_name = undefined;

  /**
   * Workflow Task UUID
   * @member {String} workflow_task_uuid
   */
  exports.prototype.workflow_task_uuid = undefined;


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
    customer_profile: "customer profile",

    /**
     * value: "storefront"
     * @const
     */
    storefront: "storefront"
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
    awaiting_customer_feedback: "awaiting customer feedback",

    /**
     * value: "closed - system"
     * @const
     */
    closed___system: "closed - system",

    /**
     * value: "closed - customer"
     * @const
     */
    closed___customer: "closed - customer",

    /**
     * value: "closed - expiration"
     * @const
     */
    closed___expiration: "closed - expiration"
  };


  /**
   * Allowed values for the <code>system_task_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SystemTaskTypeEnum = {
    /**
     * value: "order_accounts_receivable"
     * @const
     */
    order_accounts_receivable: "order_accounts_receivable",

    /**
     * value: "order_fraud_review"
     * @const
     */
    order_fraud_review: "order_fraud_review",

    /**
     * value: "auto_order_card_update_issue"
     * @const
     */
    auto_order_card_update_issue: "auto_order_card_update_issue",

    /**
     * value: "auto_order_canceled_payment"
     * @const
     */
    auto_order_canceled_payment: "auto_order_canceled_payment",

    /**
     * value: "item_low_stock"
     * @const
     */
    item_low_stock: "item_low_stock",

    /**
     * value: "item_out_of_stock"
     * @const
     */
    item_out_of_stock: "item_out_of_stock"
  };

  return exports;

}));
