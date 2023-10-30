"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowUser = _interopRequireDefault(require("./WorkflowUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WorkflowTasksRequest model module.
 * @module com.ultracart.admin.v2.models/WorkflowTasksRequest
 * @version 4.0.183
 */
var WorkflowTasksRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTasksRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/WorkflowTasksRequest
   */
  function WorkflowTasksRequest() {
    _classCallCheck(this, WorkflowTasksRequest);

    WorkflowTasksRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTasksRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTasksRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WorkflowTasksRequest} The populated <code>WorkflowTasksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTasksRequest();

        if (data.hasOwnProperty('assigned_to_group_id')) {
          obj['assigned_to_group_id'] = _ApiClient["default"].convertToType(data['assigned_to_group_id'], 'Number');
        }

        if (data.hasOwnProperty('assigned_to_me')) {
          obj['assigned_to_me'] = _ApiClient["default"].convertToType(data['assigned_to_me'], 'Boolean');
        }

        if (data.hasOwnProperty('assigned_to_user_id')) {
          obj['assigned_to_user_id'] = _ApiClient["default"].convertToType(data['assigned_to_user_id'], 'Number');
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _WorkflowUser["default"].constructFromObject(data['created_by']);
        }

        if (data.hasOwnProperty('created_dts_begin')) {
          obj['created_dts_begin'] = _ApiClient["default"].convertToType(data['created_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('created_dts_end')) {
          obj['created_dts_end'] = _ApiClient["default"].convertToType(data['created_dts_end'], 'String');
        }

        if (data.hasOwnProperty('delay_until_dts_begin')) {
          obj['delay_until_dts_begin'] = _ApiClient["default"].convertToType(data['delay_until_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('delay_until_dts_end')) {
          obj['delay_until_dts_end'] = _ApiClient["default"].convertToType(data['delay_until_dts_end'], 'String');
        }

        if (data.hasOwnProperty('due_dts_begin')) {
          obj['due_dts_begin'] = _ApiClient["default"].convertToType(data['due_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('due_dts_end')) {
          obj['due_dts_end'] = _ApiClient["default"].convertToType(data['due_dts_end'], 'String');
        }

        if (data.hasOwnProperty('last_update_dts_begin')) {
          obj['last_update_dts_begin'] = _ApiClient["default"].convertToType(data['last_update_dts_begin'], 'String');
        }

        if (data.hasOwnProperty('last_update_dts_end')) {
          obj['last_update_dts_end'] = _ApiClient["default"].convertToType(data['last_update_dts_end'], 'String');
        }

        if (data.hasOwnProperty('object_email')) {
          obj['object_email'] = _ApiClient["default"].convertToType(data['object_email'], 'String');
        }

        if (data.hasOwnProperty('object_type')) {
          obj['object_type'] = _ApiClient["default"].convertToType(data['object_type'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('unassigned')) {
          obj['unassigned'] = _ApiClient["default"].convertToType(data['unassigned'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return WorkflowTasksRequest;
}();
/**
 * Assigned to group ID
 * @member {Number} assigned_to_group_id
 */


WorkflowTasksRequest.prototype['assigned_to_group_id'] = undefined;
/**
 * Tasks are assigned to me either by direct user id or a group that the user is a member of
 * @member {Boolean} assigned_to_me
 */

WorkflowTasksRequest.prototype['assigned_to_me'] = undefined;
/**
 * Assigned to user ID
 * @member {Number} assigned_to_user_id
 */

WorkflowTasksRequest.prototype['assigned_to_user_id'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/WorkflowUser} created_by
 */

WorkflowTasksRequest.prototype['created_by'] = undefined;
/**
 * Date/time that the workflow task was created
 * @member {String} created_dts_begin
 */

WorkflowTasksRequest.prototype['created_dts_begin'] = undefined;
/**
 * Date/time that the workflow task was created
 * @member {String} created_dts_end
 */

WorkflowTasksRequest.prototype['created_dts_end'] = undefined;
/**
 * Date/time that the workflow task should delay until
 * @member {String} delay_until_dts_begin
 */

WorkflowTasksRequest.prototype['delay_until_dts_begin'] = undefined;
/**
 * Date/time that the workflow task should delay until
 * @member {String} delay_until_dts_end
 */

WorkflowTasksRequest.prototype['delay_until_dts_end'] = undefined;
/**
 * Date/time that the workflow task is due
 * @member {String} due_dts_begin
 */

WorkflowTasksRequest.prototype['due_dts_begin'] = undefined;
/**
 * Date/time that the workflow task is due
 * @member {String} due_dts_end
 */

WorkflowTasksRequest.prototype['due_dts_end'] = undefined;
/**
 * Date/time that the workflow task was last updated
 * @member {String} last_update_dts_begin
 */

WorkflowTasksRequest.prototype['last_update_dts_begin'] = undefined;
/**
 * Date/time that the workflow task was last updated
 * @member {String} last_update_dts_end
 */

WorkflowTasksRequest.prototype['last_update_dts_end'] = undefined;
/**
 * Object is associated with customer email
 * @member {String} object_email
 */

WorkflowTasksRequest.prototype['object_email'] = undefined;
/**
 * Object Type
 * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.ObjectTypeEnum} object_type
 */

WorkflowTasksRequest.prototype['object_type'] = undefined;
/**
 * Priority
 * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.PriorityEnum} priority
 */

WorkflowTasksRequest.prototype['priority'] = undefined;
/**
 * Status of the workflow task
 * @member {module:com.ultracart.admin.v2.models/WorkflowTasksRequest.StatusEnum} status
 */

WorkflowTasksRequest.prototype['status'] = undefined;
/**
 * Tasks that are unassigned to a user or group
 * @member {Boolean} unassigned
 */

WorkflowTasksRequest.prototype['unassigned'] = undefined;
/**
 * Allowed values for the <code>object_type</code> property.
 * @enum {String}
 * @readonly
 */

WorkflowTasksRequest['ObjectTypeEnum'] = {
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

WorkflowTasksRequest['PriorityEnum'] = {
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

WorkflowTasksRequest['StatusEnum'] = {
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
var _default = WorkflowTasksRequest;
exports["default"] = _default;