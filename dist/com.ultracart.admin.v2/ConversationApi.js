"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationAgentAuthResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentAuthResponse"));

var _ConversationAutocompleteRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAutocompleteRequest"));

var _ConversationAutocompleteResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAutocompleteResponse"));

var _ConversationCannedMessage = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessage"));

var _ConversationCannedMessageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessageResponse"));

var _ConversationCannedMessagesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessagesResponse"));

var _ConversationCannedMessagesSearch = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationCannedMessagesSearch"));

var _ConversationDepartment = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartment"));

var _ConversationDepartmentResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartmentResponse"));

var _ConversationDepartmentsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationDepartmentsResponse"));

var _ConversationEngagement = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagement"));

var _ConversationEngagementResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagementResponse"));

var _ConversationEngagementsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationEngagementsResponse"));

var _ConversationJoinRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationJoinRequest"));

var _ConversationMessagesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMessagesResponse"));

var _ConversationMultimediaUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse"));

var _ConversationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationResponse"));

var _ConversationSearchRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationSearchRequest"));

var _ConversationSearchResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationSearchResponse"));

var _ConversationStartRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartRequest"));

var _ConversationStartResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartResponse"));

var _ConversationWebchatContext = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatContext"));

var _ConversationWebchatQueueStatusUpdateRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest"));

var _ConversationWebchatQueueStatusesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse"));

var _ConversationsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationsResponse"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Conversation service.
* @module com.ultracart.admin.v2/ConversationApi
* @version 4.0.115-RC
*/
var ConversationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConversationApi. 
  * @alias module:com.ultracart.admin.v2/ConversationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConversationApi(apiClient) {
    _classCallCheck(this, ConversationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteConversationCannedMessage operation.
   * @callback module:com.ultracart.admin.v2/ConversationApi~deleteConversationCannedMessageCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a conversation canned message
   * Delete a conversation canned message 
   * @param {Number} conversation_canned_message_oid 
   * @param {module:com.ultracart.admin.v2/ConversationApi~deleteConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ConversationApi, [{
    key: "deleteConversationCannedMessage",
    value: function deleteConversationCannedMessage(conversation_canned_message_oid, callback) {
      var postBody = null; // verify the required parameter 'conversation_canned_message_oid' is set

      if (conversation_canned_message_oid === undefined || conversation_canned_message_oid === null) {
        throw new Error("Missing the required parameter 'conversation_canned_message_oid' when calling deleteConversationCannedMessage");
      }

      var pathParams = {
        'conversation_canned_message_oid': conversation_canned_message_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/canned_messages/{conversation_canned_message_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteDepartmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a conversation department
     * Delete a conversation department 
     * @param {Number} conversation_department_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteDepartment",
    value: function deleteDepartment(conversation_department_oid, callback) {
      var postBody = null; // verify the required parameter 'conversation_department_oid' is set

      if (conversation_department_oid === undefined || conversation_department_oid === null) {
        throw new Error("Missing the required parameter 'conversation_department_oid' when calling deleteDepartment");
      }

      var pathParams = {
        'conversation_department_oid': conversation_department_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/departments/{conversation_department_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~deleteEngagementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a conversation engagement
     * Delete a conversation engagement 
     * @param {Number} conversation_engagement_oid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~deleteEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEngagement",
    value: function deleteEngagement(conversation_engagement_oid, callback) {
      var postBody = null; // verify the required parameter 'conversation_engagement_oid' is set

      if (conversation_engagement_oid === undefined || conversation_engagement_oid === null) {
        throw new Error("Missing the required parameter 'conversation_engagement_oid' when calling deleteEngagement");
      }

      var pathParams = {
        'conversation_engagement_oid': conversation_engagement_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/engagements/{conversation_engagement_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAgentKeepAlive operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentKeepAliveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Agent keep alive
     * Called periodically by the conversation API to keep the session alive. 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentKeepAliveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getAgentKeepAlive",
    value: function getAgentKeepAlive(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/agent/keepalive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAgentWebsocketAuthorization operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getAgentWebsocketAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent websocket authorization
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getAgentWebsocketAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAgentAuthResponse}
     */

  }, {
    key: "getAgentWebsocketAuthorization",
    value: function getAgentWebsocketAuthorization(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationAgentAuthResponse["default"];
      return this.apiClient.callApi('/conversation/agent/auth', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a conversation
     * Retrieve a conversation including the participants and messages 
     * @param {String} conversation_uuid 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationResponse}
     */

  }, {
    key: "getConversation",
    value: function getConversation(conversation_uuid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversation");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationCannedMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationCannedMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of canned messages ordered by short_code
     * Retrieve a list of canned messages ordered by short_code 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationCannedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse}
     */

  }, {
    key: "getConversationCannedMessages",
    value: function getConversationCannedMessages(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationContext operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationContextCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatContext} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a webchat conversation context
     * Get a webchat conversation context 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationContextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationWebchatContext}
     */

  }, {
    key: "getConversationContext",
    value: function getConversationContext(conversation_uuid, callback) {
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversationContext");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationWebchatContext["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/context', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationDepartments operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of departments ordered by name
     * Retrieve a list of departments ordered by name 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationDepartmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentsResponse}
     */

  }, {
    key: "getConversationDepartments",
    value: function getConversationDepartments(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentsResponse["default"];
      return this.apiClient.callApi('/conversation/departments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationEngagements operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of engagements ordered by name
     * Retrieve a list of engagements ordered by name 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationEngagementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementsResponse}
     */

  }, {
    key: "getConversationEngagements",
    value: function getConversationEngagements(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementsResponse["default"];
      return this.apiClient.callApi('/conversation/engagements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve conversation messages
     * Retrieve conversation messages since a particular time 
     * @param {String} conversation_uuid 
     * @param {Number} since 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMessagesResponse}
     */

  }, {
    key: "getConversationMessages",
    value: function getConversationMessages(conversation_uuid, since, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversationMessages");
      } // verify the required parameter 'since' is set


      if (since === undefined || since === null) {
        throw new Error("Missing the required parameter 'since' when calling getConversationMessages");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid,
        'since': since
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/messages/{since}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationMultimediaUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationMultimediaUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a presigned conersation multimedia upload URL
     * Get a presigned conersation multimedia upload URL 
     * @param {String} extension 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationMultimediaUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse}
     */

  }, {
    key: "getConversationMultimediaUploadUrl",
    value: function getConversationMultimediaUploadUrl(extension, callback) {
      var postBody = null; // verify the required parameter 'extension' is set

      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationMultimediaUploadUrl");
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
      var returnType = _ConversationMultimediaUploadUrlResponse["default"];
      return this.apiClient.callApi('/conversation/upload_url/{extension}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationWebchatQueueStatuses operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationWebchatQueueStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a conversation webchat queue statuses
     * Retrieve a conversation webchat queue statuses including agent status and queue entries 
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationWebchatQueueStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse}
     */

  }, {
    key: "getConversationWebchatQueueStatuses",
    value: function getConversationWebchatQueueStatuses(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationWebchatQueueStatusesResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/queues/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversations operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of conversation summaries newest to oldest
     * Retrieve a list of conversation summaries that are ordered newest to oldest, include the most recent message and whether its been read. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.medium 
     * @param {String} opts.before 
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationsResponse}
     */

  }, {
    key: "getConversations",
    value: function getConversations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'medium': opts['medium'],
        'before': opts['before'],
        '_limit': opts['_limit'],
        '_offset': opts['_offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConversationsResponse["default"];
      return this.apiClient.callApi('/conversation/conversations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationsAutocomplete operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsAutocompleteCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationAutocompleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of matching terms for a search field
     * Retrieve a list of matching terms for a search field 
     * @param {module:com.ultracart.admin.v2.models/ConversationAutocompleteRequest} autocomplete_request Autocomplete Request
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsAutocompleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationAutocompleteResponse}
     */

  }, {
    key: "getConversationsAutocomplete",
    value: function getConversationsAutocomplete(autocomplete_request, callback) {
      var postBody = autocomplete_request; // verify the required parameter 'autocomplete_request' is set

      if (autocomplete_request === undefined || autocomplete_request === null) {
        throw new Error("Missing the required parameter 'autocomplete_request' when calling getConversationsAutocomplete");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationAutocompleteResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/autocomplete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConversationsSearch operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~getConversationsSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search conversations
     * Search conversations 
     * @param {module:com.ultracart.admin.v2.models/ConversationSearchRequest} search_request Search Request
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationSearchResponse}
     */

  }, {
    key: "getConversationsSearch",
    value: function getConversationsSearch(search_request, callback) {
      var postBody = search_request; // verify the required parameter 'search_request' is set

      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling getConversationsSearch");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationSearchResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertConversationCannedMessage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationCannedMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a canned message
     * Insert a canned message 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} canned_message Canned message
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse}
     */

  }, {
    key: "insertConversationCannedMessage",
    value: function insertConversationCannedMessage(canned_message, callback) {
      var postBody = canned_message; // verify the required parameter 'canned_message' is set

      if (canned_message === undefined || canned_message === null) {
        throw new Error("Missing the required parameter 'canned_message' when calling insertConversationCannedMessage");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessageResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertConversationDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationDepartmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a department
     * Insert a department 
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} department Department
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentResponse}
     */

  }, {
    key: "insertConversationDepartment",
    value: function insertConversationDepartment(department, callback) {
      var postBody = department; // verify the required parameter 'department' is set

      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling insertConversationDepartment");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentResponse["default"];
      return this.apiClient.callApi('/conversation/departments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertConversationEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~insertConversationEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a engagement
     * Insert a engagement 
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} engagement Engagement
     * @param {module:com.ultracart.admin.v2/ConversationApi~insertConversationEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementResponse}
     */

  }, {
    key: "insertConversationEngagement",
    value: function insertConversationEngagement(engagement, callback) {
      var postBody = engagement; // verify the required parameter 'engagement' is set

      if (engagement === undefined || engagement === null) {
        throw new Error("Missing the required parameter 'engagement' when calling insertConversationEngagement");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementResponse["default"];
      return this.apiClient.callApi('/conversation/engagements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the joinConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~joinConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join a conversation
     * Join a conversation 
     * @param {String} conversation_uuid 
     * @param {Object} opts Optional parameters
     * @param {module:com.ultracart.admin.v2.models/ConversationJoinRequest} opts.join_request Join request
     * @param {module:com.ultracart.admin.v2/ConversationApi~joinConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "joinConversation",
    value: function joinConversation(conversation_uuid, opts, callback) {
      opts = opts || {};
      var postBody = opts['join_request']; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling joinConversation");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/join', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the leaveConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~leaveConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave a conversation
     * Leave a conversation 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~leaveConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "leaveConversation",
    value: function leaveConversation(conversation_uuid, callback) {
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling leaveConversation");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/leave', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markReadConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~markReadConversationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a conversation as read
     * Mark a conversation as read 
     * @param {String} conversation_uuid 
     * @param {module:com.ultracart.admin.v2/ConversationApi~markReadConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "markReadConversation",
    value: function markReadConversation(conversation_uuid, callback) {
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling markReadConversation");
      }

      var pathParams = {
        'conversation_uuid': conversation_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}/markread', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchConversationCannedMessages operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~searchConversationCannedMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for canned messages by short_code
     * Search for canned messages by short_code 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessagesSearch} search_request Search request
     * @param {module:com.ultracart.admin.v2/ConversationApi~searchConversationCannedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessagesResponse}
     */

  }, {
    key: "searchConversationCannedMessages",
    value: function searchConversationCannedMessages(search_request, callback) {
      var postBody = search_request; // verify the required parameter 'search_request' is set

      if (search_request === undefined || search_request === null) {
        throw new Error("Missing the required parameter 'search_request' when calling searchConversationCannedMessages");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessagesResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the startConversation operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~startConversationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationStartResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a conversation
     * Start a new conversation 
     * @param {module:com.ultracart.admin.v2.models/ConversationStartRequest} start_request Start request
     * @param {module:com.ultracart.admin.v2/ConversationApi~startConversationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationStartResponse}
     */

  }, {
    key: "startConversation",
    value: function startConversation(start_request, callback) {
      var postBody = start_request; // verify the required parameter 'start_request' is set

      if (start_request === undefined || start_request === null) {
        throw new Error("Missing the required parameter 'start_request' when calling startConversation");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationStartResponse["default"];
      return this.apiClient.callApi('/conversation/conversations', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateConversationCannedMessage operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationCannedMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a canned message
     * Update a canned message 
     * @param {Number} conversation_canned_message_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationCannedMessage} canned_message Canned message
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationCannedMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationCannedMessageResponse}
     */

  }, {
    key: "updateConversationCannedMessage",
    value: function updateConversationCannedMessage(conversation_canned_message_oid, canned_message, callback) {
      var postBody = canned_message; // verify the required parameter 'conversation_canned_message_oid' is set

      if (conversation_canned_message_oid === undefined || conversation_canned_message_oid === null) {
        throw new Error("Missing the required parameter 'conversation_canned_message_oid' when calling updateConversationCannedMessage");
      } // verify the required parameter 'canned_message' is set


      if (canned_message === undefined || canned_message === null) {
        throw new Error("Missing the required parameter 'canned_message' when calling updateConversationCannedMessage");
      }

      var pathParams = {
        'conversation_canned_message_oid': conversation_canned_message_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationCannedMessageResponse["default"];
      return this.apiClient.callApi('/conversation/canned_messages/{conversation_canned_message_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateConversationDepartment operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationDepartmentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a department
     * Update a department 
     * @param {Number} conversation_department_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationDepartment} department Department
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationDepartmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationDepartmentResponse}
     */

  }, {
    key: "updateConversationDepartment",
    value: function updateConversationDepartment(conversation_department_oid, department, callback) {
      var postBody = department; // verify the required parameter 'conversation_department_oid' is set

      if (conversation_department_oid === undefined || conversation_department_oid === null) {
        throw new Error("Missing the required parameter 'conversation_department_oid' when calling updateConversationDepartment");
      } // verify the required parameter 'department' is set


      if (department === undefined || department === null) {
        throw new Error("Missing the required parameter 'department' when calling updateConversationDepartment");
      }

      var pathParams = {
        'conversation_department_oid': conversation_department_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationDepartmentResponse["default"];
      return this.apiClient.callApi('/conversation/departments/{conversation_department_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateConversationEngagement operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationEngagementCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a engagement
     * Update a engagement 
     * @param {Number} conversation_engagement_oid 
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} engagement Engagement
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationEngagementResponse}
     */

  }, {
    key: "updateConversationEngagement",
    value: function updateConversationEngagement(conversation_engagement_oid, engagement, callback) {
      var postBody = engagement; // verify the required parameter 'conversation_engagement_oid' is set

      if (conversation_engagement_oid === undefined || conversation_engagement_oid === null) {
        throw new Error("Missing the required parameter 'conversation_engagement_oid' when calling updateConversationEngagement");
      } // verify the required parameter 'engagement' is set


      if (engagement === undefined || engagement === null) {
        throw new Error("Missing the required parameter 'engagement' when calling updateConversationEngagement");
      }

      var pathParams = {
        'conversation_engagement_oid': conversation_engagement_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConversationEngagementResponse["default"];
      return this.apiClient.callApi('/conversation/engagements/{conversation_engagement_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateConversationWebchatQueueStatus operation.
     * @callback module:com.ultracart.admin.v2/ConversationApi~updateConversationWebchatQueueStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update status within the queue
     * Update status within the queue 
     * @param {String} queue_name 
     * @param {module:com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest} status_request Status request
     * @param {module:com.ultracart.admin.v2/ConversationApi~updateConversationWebchatQueueStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateConversationWebchatQueueStatus",
    value: function updateConversationWebchatQueueStatus(queue_name, status_request, callback) {
      var postBody = status_request; // verify the required parameter 'queue_name' is set

      if (queue_name === undefined || queue_name === null) {
        throw new Error("Missing the required parameter 'queue_name' when calling updateConversationWebchatQueueStatus");
      } // verify the required parameter 'status_request' is set


      if (status_request === undefined || status_request === null) {
        throw new Error("Missing the required parameter 'status_request' when calling updateConversationWebchatQueueStatus");
      }

      var pathParams = {
        'queue_name': queue_name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/conversation/conversations/queues/{queue_name}/status', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ConversationApi;
}();

exports["default"] = ConversationApi;