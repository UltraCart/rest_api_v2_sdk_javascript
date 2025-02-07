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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/WorkflowAgentAuthResponse', 'com.ultracart.admin.v2.models/WorkflowAttachmentUploadUrlResponse', 'com.ultracart.admin.v2.models/WorkflowGroupsResponse', 'com.ultracart.admin.v2.models/WorkflowTask', 'com.ultracart.admin.v2.models/WorkflowTaskOpenCountResponse', 'com.ultracart.admin.v2.models/WorkflowTaskResponse', 'com.ultracart.admin.v2.models/WorkflowTaskTagsResponse', 'com.ultracart.admin.v2.models/WorkflowTasksRequest', 'com.ultracart.admin.v2.models/WorkflowTasksResponse', 'com.ultracart.admin.v2.models/WorkflowUserResponse', 'com.ultracart.admin.v2.models/WorkflowUsersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/WorkflowAgentAuthResponse'), require('../com.ultracart.admin.v2.models/WorkflowAttachmentUploadUrlResponse'), require('../com.ultracart.admin.v2.models/WorkflowGroupsResponse'), require('../com.ultracart.admin.v2.models/WorkflowTask'), require('../com.ultracart.admin.v2.models/WorkflowTaskOpenCountResponse'), require('../com.ultracart.admin.v2.models/WorkflowTaskResponse'), require('../com.ultracart.admin.v2.models/WorkflowTaskTagsResponse'), require('../com.ultracart.admin.v2.models/WorkflowTasksRequest'), require('../com.ultracart.admin.v2.models/WorkflowTasksResponse'), require('../com.ultracart.admin.v2.models/WorkflowUserResponse'), require('../com.ultracart.admin.v2.models/WorkflowUsersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WorkflowApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.WorkflowAgentAuthResponse, root.UltraCartRestApiV2.WorkflowAttachmentUploadUrlResponse, root.UltraCartRestApiV2.WorkflowGroupsResponse, root.UltraCartRestApiV2.WorkflowTask, root.UltraCartRestApiV2.WorkflowTaskOpenCountResponse, root.UltraCartRestApiV2.WorkflowTaskResponse, root.UltraCartRestApiV2.WorkflowTaskTagsResponse, root.UltraCartRestApiV2.WorkflowTasksRequest, root.UltraCartRestApiV2.WorkflowTasksResponse, root.UltraCartRestApiV2.WorkflowUserResponse, root.UltraCartRestApiV2.WorkflowUsersResponse);
  }
}(this, function(ApiClient, ErrorResponse, WorkflowAgentAuthResponse, WorkflowAttachmentUploadUrlResponse, WorkflowGroupsResponse, WorkflowTask, WorkflowTaskOpenCountResponse, WorkflowTaskResponse, WorkflowTaskTagsResponse, WorkflowTasksRequest, WorkflowTasksResponse, WorkflowUserResponse, WorkflowUsersResponse) {
  'use strict';

  /**
   * Workflow service.
   * @module com.ultracart.admin.v2/WorkflowApi
   * @version 3.10.224
   */

  /**
   * Constructs a new WorkflowApi. 
   * @alias module:com.ultracart.admin.v2/WorkflowApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWorkflowAgentWebsocketAuthorization operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAgentWebsocketAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowAgentAuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent websocket authorization
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowAgentWebsocketAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowAgentAuthResponse}
     */
    this.getWorkflowAgentWebsocketAuthorization = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowAgentAuthResponse;

      return this.apiClient.callApi(
        '/workflow/agent/auth', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getWorkflowAssignmentGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowGroupsResponse;

      return this.apiClient.callApi(
        '/workflow/assignment_groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getWorkflowAssignmentUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowUsersResponse;

      return this.apiClient.callApi(
        '/workflow/assignment_users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkflowMe operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowMeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowUserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user object for myself
     * Retrieve a user object for myself 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowMeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowUserResponse}
     */
    this.getWorkflowMe = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowUserResponse;

      return this.apiClient.callApi(
        '/workflow/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getWorkflowTask = function(task_uuid, callback) {
      var postBody = null;

      // verify the required parameter 'task_uuid' is set
      if (task_uuid === undefined || task_uuid === null) {
        throw new Error("Missing the required parameter 'task_uuid' when calling getWorkflowTask");
      }


      var pathParams = {
        'task_uuid': task_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTaskResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/{task_uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getWorkflowTaskAttachmentUploadUrl = function(extension, callback) {
      var postBody = null;

      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getWorkflowTaskAttachmentUploadUrl");
      }


      var pathParams = {
        'extension': extension
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowAttachmentUploadUrlResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/attachments/{extension}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkflowTaskByObjectType operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskByObjectTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTasksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a workflow task by object type and id
     * Retrieve a workflow task by object type and id 
     * @param {String} object_type 
     * @param {String} object_id 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskByObjectTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTasksResponse}
     */
    this.getWorkflowTaskByObjectType = function(object_type, object_id, callback) {
      var postBody = null;

      // verify the required parameter 'object_type' is set
      if (object_type === undefined || object_type === null) {
        throw new Error("Missing the required parameter 'object_type' when calling getWorkflowTaskByObjectType");
      }

      // verify the required parameter 'object_id' is set
      if (object_id === undefined || object_id === null) {
        throw new Error("Missing the required parameter 'object_id' when calling getWorkflowTaskByObjectType");
      }


      var pathParams = {
        'object_type': object_type,
        'object_id': object_id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTasksResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/by/{object_type}/{object_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkflowTaskOpenCount operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskOpenCountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskOpenCountResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve workflow task open count
     * Retrieve workflow task open count 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskOpenCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskOpenCountResponse}
     */
    this.getWorkflowTaskOpenCount = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTaskOpenCountResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/open_count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkflowTaskTags operation.
     * @callback module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WorkflowTaskTagsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of existing workflow task tags
     * Retrieves a unique list of all the existing workflow task tags. 
     * @param {module:com.ultracart.admin.v2/WorkflowApi~getWorkflowTaskTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WorkflowTaskTagsResponse}
     */
    this.getWorkflowTaskTags = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTaskTagsResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getWorkflowTasks = function(workflow_tasks_query, opts, callback) {
      opts = opts || {};
      var postBody = workflow_tasks_query;

      // verify the required parameter 'workflow_tasks_query' is set
      if (workflow_tasks_query === undefined || workflow_tasks_query === null) {
        throw new Error("Missing the required parameter 'workflow_tasks_query' when calling getWorkflowTasks");
      }


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTasksResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.insertWorkflowTask = function(workflow_task, callback) {
      var postBody = workflow_task;

      // verify the required parameter 'workflow_task' is set
      if (workflow_task === undefined || workflow_task === null) {
        throw new Error("Missing the required parameter 'workflow_task' when calling insertWorkflowTask");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTaskResponse;

      return this.apiClient.callApi(
        '/workflow/tasks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.updateWorkflowTask = function(task_uuid, workflow_task, callback) {
      var postBody = workflow_task;

      // verify the required parameter 'task_uuid' is set
      if (task_uuid === undefined || task_uuid === null) {
        throw new Error("Missing the required parameter 'task_uuid' when calling updateWorkflowTask");
      }

      // verify the required parameter 'workflow_task' is set
      if (workflow_task === undefined || workflow_task === null) {
        throw new Error("Missing the required parameter 'workflow_task' when calling updateWorkflowTask");
      }


      var pathParams = {
        'task_uuid': task_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowTaskResponse;

      return this.apiClient.callApi(
        '/workflow/tasks/{task_uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
