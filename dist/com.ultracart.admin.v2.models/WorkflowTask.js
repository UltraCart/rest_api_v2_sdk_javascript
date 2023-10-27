"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowAttachment = _interopRequireDefault(require("./WorkflowAttachment"));

var _WorkflowNote = _interopRequireDefault(require("./WorkflowNote"));

var _WorkflowTaskHistory = _interopRequireDefault(require("./WorkflowTaskHistory"));

var _WorkflowUser = _interopRequireDefault(require("./WorkflowUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WorkflowTask model module.
 * @module com.ultracart.admin.v2.models/WorkflowTask
 * @version 4.0.182
 */
var WorkflowTask = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTask</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowTask
   */
  function WorkflowTask() {
    _classCallCheck(this, WorkflowTask);

    WorkflowTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTask} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowTask} The populated <code>WorkflowTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTask();

        if (data.hasOwnProperty('assigned_to_group')) {
          obj['assigned_to_group'] = _ApiClient["default"].convertToType(data['assigned_to_group'], 'String');
        }

        if (data.hasOwnProperty('assigned_to_group_id')) {
          obj['assigned_to_group_id'] = _ApiClient["default"].convertToType(data['assigned_to_group_id'], 'Number');
        }

        if (data.hasOwnProperty('assigned_to_user')) {
          obj['assigned_to_user'] = _ApiClient["default"].convertToType(data['assigned_to_user'], 'String');
        }

        if (data.hasOwnProperty('assigned_to_user_id')) {
          obj['assigned_to_user_id'] = _ApiClient["default"].convertToType(data['assigned_to_user_id'], 'Number');
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], [_WorkflowAttachment["default"]]);
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _WorkflowUser["default"].constructFromObject(data['created_by']);
        }

        if (data.hasOwnProperty('created_dts')) {
          obj['created_dts'] = _ApiClient["default"].convertToType(data['created_dts'], 'String');
        }

        if (data.hasOwnProperty('delay_until_dts')) {
          obj['delay_until_dts'] = _ApiClient["default"].convertToType(data['delay_until_dts'], 'String');
        }

        if (data.hasOwnProperty('due_dts')) {
          obj['due_dts'] = _ApiClient["default"].convertToType(data['due_dts'], 'String');
        }

        if (data.hasOwnProperty('histories')) {
          obj['histories'] = _ApiClient["default"].convertToType(data['histories'], [_WorkflowTaskHistory["default"]]);
        }

        if (data.hasOwnProperty('last_update_dts')) {
          obj['last_update_dts'] = _ApiClient["default"].convertToType(data['last_update_dts'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], [_WorkflowNote["default"]]);
        }

        if (data.hasOwnProperty('object_email')) {
          obj['object_email'] = _ApiClient["default"].convertToType(data['object_email'], 'String');
        }

        if (data.hasOwnProperty('object_id')) {
          obj['object_id'] = _ApiClient["default"].convertToType(data['object_id'], 'String');
        }

        if (data.hasOwnProperty('object_type')) {
          obj['object_type'] = _ApiClient["default"].convertToType(data['object_type'], 'String');
        }

        if (data.hasOwnProperty('object_url')) {
          obj['object_url'] = _ApiClient["default"].convertToType(data['object_url'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('task_details')) {
          obj['task_details'] = _ApiClient["default"].convertToType(data['task_details'], 'String');
        }

        if (data.hasOwnProperty('task_name')) {
          obj['task_name'] = _ApiClient["default"].convertToType(data['task_name'], 'String');
        }

        if (data.hasOwnProperty('workflow_task_uuid')) {
          obj['workflow_task_uuid'] = _ApiClient["default"].convertToType(data['workflow_task_uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowTask;
}();
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
 * Date/time that the workflow task is due
 * @member {String} due_dts
 */

WorkflowTask.prototype['due_dts'] = undefined;
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
 * Status of the workflow task
 * @member {module:com.ultracart.admin.v2.models/WorkflowTask.StatusEnum} status
 */

WorkflowTask.prototype['status'] = undefined;
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
  "customer profile": "customer profile"
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
  "awaiting customer feedback": "awaiting customer feedback"
};
var _default = WorkflowTask;
exports["default"] = _default;