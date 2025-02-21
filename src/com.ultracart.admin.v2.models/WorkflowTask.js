/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Property from './Property';
import WorkflowAttachment from './WorkflowAttachment';
import WorkflowNote from './WorkflowNote';
import WorkflowTaskHistory from './WorkflowTaskHistory';
import WorkflowUser from './WorkflowUser';

/**
 * The WorkflowTask model module.
 * @module com.ultracart.admin.v2.models/WorkflowTask
 * @version 4.1.0
 */
class WorkflowTask {
    /**
     * Constructs a new <code>WorkflowTask</code>.
     * @alias module:com.ultracart.admin.v2.models/WorkflowTask
     */
    constructor() { 
        
        WorkflowTask.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTask} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowTask} The populated <code>WorkflowTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowTask();

            if (data.hasOwnProperty('assigned_to_group')) {
                obj['assigned_to_group'] = ApiClient.convertToType(data['assigned_to_group'], 'String');
            }
            if (data.hasOwnProperty('assigned_to_group_id')) {
                obj['assigned_to_group_id'] = ApiClient.convertToType(data['assigned_to_group_id'], 'Number');
            }
            if (data.hasOwnProperty('assigned_to_user')) {
                obj['assigned_to_user'] = ApiClient.convertToType(data['assigned_to_user'], 'String');
            }
            if (data.hasOwnProperty('assigned_to_user_id')) {
                obj['assigned_to_user_id'] = ApiClient.convertToType(data['assigned_to_user_id'], 'Number');
            }
            if (data.hasOwnProperty('assigned_to_user_or_group')) {
                obj['assigned_to_user_or_group'] = ApiClient.convertToType(data['assigned_to_user_or_group'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [WorkflowAttachment]);
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = WorkflowUser.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('created_dts')) {
                obj['created_dts'] = ApiClient.convertToType(data['created_dts'], 'String');
            }
            if (data.hasOwnProperty('delay_until_dts')) {
                obj['delay_until_dts'] = ApiClient.convertToType(data['delay_until_dts'], 'String');
            }
            if (data.hasOwnProperty('dependant_workflow_task_uuid')) {
                obj['dependant_workflow_task_uuid'] = ApiClient.convertToType(data['dependant_workflow_task_uuid'], 'String');
            }
            if (data.hasOwnProperty('due_dts')) {
                obj['due_dts'] = ApiClient.convertToType(data['due_dts'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('global_task_number')) {
                obj['global_task_number'] = ApiClient.convertToType(data['global_task_number'], 'Number');
            }
            if (data.hasOwnProperty('histories')) {
                obj['histories'] = ApiClient.convertToType(data['histories'], [WorkflowTaskHistory]);
            }
            if (data.hasOwnProperty('last_update_dts')) {
                obj['last_update_dts'] = ApiClient.convertToType(data['last_update_dts'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], [WorkflowNote]);
            }
            if (data.hasOwnProperty('object_email')) {
                obj['object_email'] = ApiClient.convertToType(data['object_email'], 'String');
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('object_task_number')) {
                obj['object_task_number'] = ApiClient.convertToType(data['object_task_number'], 'Number');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
            }
            if (data.hasOwnProperty('object_url')) {
                obj['object_url'] = ApiClient.convertToType(data['object_url'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Property]);
            }
            if (data.hasOwnProperty('related_workflow_task_uuid')) {
                obj['related_workflow_task_uuid'] = ApiClient.convertToType(data['related_workflow_task_uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('system_task_type')) {
                obj['system_task_type'] = ApiClient.convertToType(data['system_task_type'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('task_context')) {
                obj['task_context'] = ApiClient.convertToType(data['task_context'], 'String');
            }
            if (data.hasOwnProperty('task_details')) {
                obj['task_details'] = ApiClient.convertToType(data['task_details'], 'String');
            }
            if (data.hasOwnProperty('task_name')) {
                obj['task_name'] = ApiClient.convertToType(data['task_name'], 'String');
            }
            if (data.hasOwnProperty('workflow_task_uuid')) {
                obj['workflow_task_uuid'] = ApiClient.convertToType(data['workflow_task_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Assigned to group
 * @member {String} assigned_to_group
 */
WorkflowTask.prototype['assigned_to_group'] = undefined;

/**
 * Assigned to group ID
 * @member {Number} assigned_to_group_id
 */
WorkflowTask.prototype['assigned_to_group_id'] = undefined;

/**
 * Assigned to user
 * @member {String} assigned_to_user
 */
WorkflowTask.prototype['assigned_to_user'] = undefined;

/**
 * Assigned to user ID
 * @member {Number} assigned_to_user_id
 */
WorkflowTask.prototype['assigned_to_user_id'] = undefined;

/**
 * Assigned to user or group (used for sorting)
 * @member {String} assigned_to_user_or_group
 */
WorkflowTask.prototype['assigned_to_user_or_group'] = undefined;

/**
 * Attachments to the Workflow Task
 * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowAttachment>} attachments
 */
WorkflowTask.prototype['attachments'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/WorkflowUser} created_by
 */
WorkflowTask.prototype['created_by'] = undefined;

/**
 * Date/time that the workflow task was created
 * @member {String} created_dts
 */
WorkflowTask.prototype['created_dts'] = undefined;

/**
 * Date/time that the workflow task should delay until
 * @member {String} delay_until_dts
 */
WorkflowTask.prototype['delay_until_dts'] = undefined;

/**
 * Dependant Workflow Task UUID (must be completed before this task can be completed)
 * @member {String} dependant_workflow_task_uuid
 */
WorkflowTask.prototype['dependant_workflow_task_uuid'] = undefined;

/**
 * Date/time that the workflow task is due
 * @member {String} due_dts
 */
WorkflowTask.prototype['due_dts'] = undefined;

/**
 * Date/time that the workflow task will expire and be closed.  This is set by system generated tasks.
 * @member {String} expiration_dts
 */
WorkflowTask.prototype['expiration_dts'] = undefined;

/**
 * Global task number
 * @member {Number} global_task_number
 */
WorkflowTask.prototype['global_task_number'] = undefined;

/**
 * Array of history records for the task
 * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowTaskHistory>} histories
 */
WorkflowTask.prototype['histories'] = undefined;

/**
 * Date/time that the workflow task was last updated
 * @member {String} last_update_dts
 */
WorkflowTask.prototype['last_update_dts'] = undefined;

/**
 * Merchant ID
 * @member {String} merchant_id
 */
WorkflowTask.prototype['merchant_id'] = undefined;

/**
 * Notes on the Workflow Task
 * @member {Array.<module:com.ultracart.admin.v2.models/WorkflowNote>} notes
 */
WorkflowTask.prototype['notes'] = undefined;

/**
 * Object is associated with customer email
 * @member {String} object_email
 */
WorkflowTask.prototype['object_email'] = undefined;

/**
 * Object ID
 * @member {String} object_id
 */
WorkflowTask.prototype['object_id'] = undefined;

/**
 * Object specific task number
 * @member {Number} object_task_number
 */
WorkflowTask.prototype['object_task_number'] = undefined;

/**
 * Object Type
 * @member {module:com.ultracart.admin.v2.models/WorkflowTask.ObjectTypeEnum} object_type
 */
WorkflowTask.prototype['object_type'] = undefined;

/**
 * Object URL
 * @member {String} object_url
 */
WorkflowTask.prototype['object_url'] = undefined;

/**
 * Priority
 * @member {module:com.ultracart.admin.v2.models/WorkflowTask.PriorityEnum} priority
 */
WorkflowTask.prototype['priority'] = undefined;

/**
 * Properties
 * @member {Array.<module:com.ultracart.admin.v2.models/Property>} properties
 */
WorkflowTask.prototype['properties'] = undefined;

/**
 * Related Workflow Task UUID
 * @member {String} related_workflow_task_uuid
 */
WorkflowTask.prototype['related_workflow_task_uuid'] = undefined;

/**
 * Status of the workflow task
 * @member {module:com.ultracart.admin.v2.models/WorkflowTask.StatusEnum} status
 */
WorkflowTask.prototype['status'] = undefined;

/**
 * Constant for the type of system generated task
 * @member {module:com.ultracart.admin.v2.models/WorkflowTask.SystemTaskTypeEnum} system_task_type
 */
WorkflowTask.prototype['system_task_type'] = undefined;

/**
 * Tags
 * @member {Array.<String>} tags
 */
WorkflowTask.prototype['tags'] = undefined;

/**
 * User friendly string of the task context
 * @member {String} task_context
 */
WorkflowTask.prototype['task_context'] = undefined;

/**
 * Task Details
 * @member {String} task_details
 */
WorkflowTask.prototype['task_details'] = undefined;

/**
 * Task Name
 * @member {String} task_name
 */
WorkflowTask.prototype['task_name'] = undefined;

/**
 * Workflow Task UUID
 * @member {String} workflow_task_uuid
 */
WorkflowTask.prototype['workflow_task_uuid'] = undefined;





/**
 * Allowed values for the <code>object_type</code> property.
 * @enum {String}
 * @readonly
 */
WorkflowTask['ObjectTypeEnum'] = {

    /**
     * value: "order"
     * @const
     */
    "order": "order",

    /**
     * value: "auto order"
     * @const
     */
    "auto order": "auto order",

    /**
     * value: "item"
     * @const
     */
    "item": "item",

    /**
     * value: "customer profile"
     * @const
     */
    "customer profile": "customer profile",

    /**
     * value: "storefront"
     * @const
     */
    "storefront": "storefront"
};


/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
WorkflowTask['PriorityEnum'] = {

    /**
     * value: "1 - low"
     * @const
     */
    "1 - low": "1 - low",

    /**
     * value: "2 - medium"
     * @const
     */
    "2 - medium": "2 - medium",

    /**
     * value: "3 - high"
     * @const
     */
    "3 - high": "3 - high",

    /**
     * value: "4 - critical"
     * @const
     */
    "4 - critical": "4 - critical"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
WorkflowTask['StatusEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",

    /**
     * value: "delayed"
     * @const
     */
    "delayed": "delayed",

    /**
     * value: "awaiting customer feedback"
     * @const
     */
    "awaiting customer feedback": "awaiting customer feedback",

    /**
     * value: "closed - system"
     * @const
     */
    "closed - system": "closed - system",

    /**
     * value: "closed - customer"
     * @const
     */
    "closed - customer": "closed - customer",

    /**
     * value: "closed - expiration"
     * @const
     */
    "closed - expiration": "closed - expiration"
};


/**
 * Allowed values for the <code>system_task_type</code> property.
 * @enum {String}
 * @readonly
 */
WorkflowTask['SystemTaskTypeEnum'] = {

    /**
     * value: "order_accounts_receivable"
     * @const
     */
    "order_accounts_receivable": "order_accounts_receivable",

    /**
     * value: "order_fraud_review"
     * @const
     */
    "order_fraud_review": "order_fraud_review",

    /**
     * value: "auto_order_card_update_issue"
     * @const
     */
    "auto_order_card_update_issue": "auto_order_card_update_issue",

    /**
     * value: "auto_order_canceled_payment"
     * @const
     */
    "auto_order_canceled_payment": "auto_order_canceled_payment",

    /**
     * value: "item_low_stock"
     * @const
     */
    "item_low_stock": "item_low_stock",

    /**
     * value: "item_out_of_stock"
     * @const
     */
    "item_out_of_stock": "item_out_of_stock"
};



export default WorkflowTask;

