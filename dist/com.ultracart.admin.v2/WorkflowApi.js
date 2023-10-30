"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _WorkflowAttachmentUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowAttachmentUploadUrlResponse"));

var _WorkflowGroupsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowGroupsResponse"));

var _WorkflowTask = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowTask"));

var _WorkflowTaskResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowTaskResponse"));

var _WorkflowTasksRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowTasksRequest"));

var _WorkflowTasksResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowTasksResponse"));

var _WorkflowUsersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WorkflowUsersResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Workflow service.
* @module com.ultracart.admin.v2/WorkflowApi
* @version 4.0.183
*/
var WorkflowApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowApi. 
  * @alias module:com.ultracart.admin.v2/WorkflowApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowApi(apiClient) {
    _classCallCheck(this, WorkflowApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getWorkflowAssignmentGroups operation.
   * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAssignmentGroupsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/WorkflowGroupsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve a list of groups that workflow tasks can be assigned to
   * Retrieve a list of groups that workflow tasks can be assigned to 
   * @param {Object} opts Optional parameters
   * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
   * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
   * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAssignmentGroupsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowGroupsResponse}
   */


  _createClass(WorkflowApi, [{
    key: "getWorkflowAssignmentGroups",
    value: function getWorkflowAssignmentGroups(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowGroupsResponse["default"];
      return this.apiClient.callApi('/workflow/assignment_groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkflowAssignmentUsers operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAssignmentUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowUsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of users that workflow tasks can be assigned to
     * Retrieve a list of users that workflow tasks can be assigned to 
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAssignmentUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowUsersResponse}
     */

  }, {
    key: "getWorkflowAssignmentUsers",
    value: function getWorkflowAssignmentUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowUsersResponse["default"];
      return this.apiClient.callApi('/workflow/assignment_users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkflowTask operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a workflow task
     * Retrieve a workflow task 
     * @param {String} task_uuid 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskResponse}
     */

  }, {
    key: "getWorkflowTask",
    value: function getWorkflowTask(task_uuid, callback) {
      var postBody = null; // verify the required parameter 'task_uuid' is set

      if (task_uuid === undefined || task_uuid === null) {
        throw new Error("Missing the required parameter 'task_uuid' when calling getWorkflowTask");
      }

      var pathParams = {
        'task_uuid': task_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowTaskResponse["default"];
      return this.apiClient.callApi('/workflow/tasks/{task_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkflowTaskAttachmentUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskAttachmentUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowAttachmentUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a presigned workflow task attachment upload URL
     * Get a presigned workflow task attachment upload URL 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskAttachmentUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowAttachmentUploadUrlResponse}
     */

  }, {
    key: "getWorkflowTaskAttachmentUploadUrl",
    value: function getWorkflowTaskAttachmentUploadUrl(extension, callback) {
      var postBody = null; // verify the required parameter 'extension' is set

      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getWorkflowTaskAttachmentUploadUrl");
      }

      var pathParams = {
        'extension': extension
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowAttachmentUploadUrlResponse["default"];
      return this.apiClient.callApi('/workflow/tasks/attachments/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkflowTaskByObjectType operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskByObjectTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a workflow task by object type and id
     * Retrieve a workflow task by object type and id 
     * @param {String} object_type 
     * @param {String} object_id 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskByObjectTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskResponse}
     */

  }, {
    key: "getWorkflowTaskByObjectType",
    value: function getWorkflowTaskByObjectType(object_type, object_id, callback) {
      var postBody = null; // verify the required parameter 'object_type' is set

      if (object_type === undefined || object_type === null) {
        throw new Error("Missing the required parameter 'object_type' when calling getWorkflowTaskByObjectType");
      } // verify the required parameter 'object_id' is set


      if (object_id === undefined || object_id === null) {
        throw new Error("Missing the required parameter 'object_id' when calling getWorkflowTaskByObjectType");
      }

      var pathParams = {
        'object_type': object_type,
        'object_id': object_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowTaskResponse["default"];
      return this.apiClient.callApi('/workflow/tasks/by/{object_type}/{object_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkflowTasks operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTasksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search workflow tasks
     * Retrieves a set of workflow tasks from the account based on a query object. 
     * @param {module:com.ultracart.admin.v2.models/WorkflowTasksRequest} workflow_tasks_query Workflow tasks query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 500) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTasksResponse}
     */

  }, {
    key: "getWorkflowTasks",
    value: function getWorkflowTasks(workflow_tasks_query, opts, callback) {
      opts = opts || {};
      var postBody = workflow_tasks_query; // verify the required parameter 'workflow_tasks_query' is set

      if (workflow_tasks_query === undefined || workflow_tasks_query === null) {
        throw new Error("Missing the required parameter 'workflow_tasks_query' when calling getWorkflowTasks");
      }

      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowTasksResponse["default"];
      return this.apiClient.callApi('/workflow/tasks/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertWorkflowTask operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~insertWorkflowTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a workflow task
     * Insert a workflow task 
     * @param {module:com.ultracart.admin.v2.models/WorkflowTask} workflow_task workflow task
     * @param {module:com.ultracart.admin.v2/WorkflowApi~insertWorkflowTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskResponse}
     */

  }, {
    key: "insertWorkflowTask",
    value: function insertWorkflowTask(workflow_task, callback) {
      var postBody = workflow_task; // verify the required parameter 'workflow_task' is set

      if (workflow_task === undefined || workflow_task === null) {
        throw new Error("Missing the required parameter 'workflow_task' when calling insertWorkflowTask");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowTaskResponse["default"];
      return this.apiClient.callApi('/workflow/tasks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateWorkflowTask operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~updateWorkflowTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workflow task
     * Update a workflow task 
     * @param {String} task_uuid 
     * @param {module:com.ultracart.admin.v2.models/WorkflowTask} workflow_task Workflow task
     * @param {module:com.ultracart.admin.v2/WorkflowApi~updateWorkflowTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskResponse}
     */

  }, {
    key: "updateWorkflowTask",
    value: function updateWorkflowTask(task_uuid, workflow_task, callback) {
      var postBody = workflow_task; // verify the required parameter 'task_uuid' is set

      if (task_uuid === undefined || task_uuid === null) {
        throw new Error("Missing the required parameter 'task_uuid' when calling updateWorkflowTask");
      } // verify the required parameter 'workflow_task' is set


      if (workflow_task === undefined || workflow_task === null) {
        throw new Error("Missing the required parameter 'workflow_task' when calling updateWorkflowTask");
      }

      var pathParams = {
        'task_uuid': task_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowTaskResponse["default"];
      return this.apiClient.callApi('/workflow/tasks/{task_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowApi;
}();

exports["default"] = WorkflowApi;