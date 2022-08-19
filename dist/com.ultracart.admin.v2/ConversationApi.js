"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversationAgentAuthResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationAgentAuthResponse"));

var _ConversationMultimediaUploadUrlResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse"));

var _ConversationResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationResponse"));

var _ConversationStartRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartRequest"));

var _ConversationStartResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ConversationStartResponse"));

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
* @version 4.0.55-RC
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


  _createClass(ConversationApi, [{
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
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationResponse}
     */

  }, {
    key: "getConversation",
    value: function getConversation(conversation_uuid, callback) {
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversation");
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
      var returnType = _ConversationResponse["default"];
      return this.apiClient.callApi('/conversation/conversations/{conversation_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {module:com.ultracart.admin.v2/ConversationApi~joinConversationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "joinConversation",
    value: function joinConversation(conversation_uuid, callback) {
      var postBody = null; // verify the required parameter 'conversation_uuid' is set

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
      var contentTypes = [];
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