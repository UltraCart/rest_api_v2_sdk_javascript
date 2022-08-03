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


import ApiClient from "../ApiClient";
import ConversationAgentAuthResponse from '../com.ultracart.admin.v2.models/ConversationAgentAuthResponse';
import ConversationMultimediaUploadUrlResponse from '../com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse';
import ConversationResponse from '../com.ultracart.admin.v2.models/ConversationResponse';
import ConversationStartRequest from '../com.ultracart.admin.v2.models/ConversationStartRequest';
import ConversationStartResponse from '../com.ultracart.admin.v2.models/ConversationStartResponse';
import ConversationWebchatQueueStatusUpdateRequest from '../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusUpdateRequest';
import ConversationWebchatQueueStatusesResponse from '../com.ultracart.admin.v2.models/ConversationWebchatQueueStatusesResponse';
import ConversationsResponse from '../com.ultracart.admin.v2.models/ConversationsResponse';
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';

/**
* Conversation service.
* @module com.ultracart.admin.v2/ConversationApi
* @version 4.0.50-RC
*/
export default class ConversationApi {

    /**
    * Constructs a new ConversationApi. 
    * @alias module:com.ultracart.admin.v2/ConversationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    getAgentWebsocketAuthorization(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationAgentAuthResponse;
      return this.apiClient.callApi(
        '/conversation/agent/auth', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getConversation(conversation_uuid, callback) {
      let postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversation");
      }

      let pathParams = {
        'conversation_uuid': conversation_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationResponse;
      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getConversationMultimediaUploadUrl(extension, callback) {
      let postBody = null;
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationMultimediaUploadUrl");
      }

      let pathParams = {
        'extension': extension
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationMultimediaUploadUrlResponse;
      return this.apiClient.callApi(
        '/conversation/upload_url/{extension}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getConversationWebchatQueueStatuses(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationWebchatQueueStatusesResponse;
      return this.apiClient.callApi(
        '/conversation/conversations/queues/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {module:com.ultracart.admin.v2/ConversationApi~getConversationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ConversationsResponse}
     */
    getConversations(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationsResponse;
      return this.apiClient.callApi(
        '/conversation/conversations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    joinConversation(conversation_uuid, callback) {
      let postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling joinConversation");
      }

      let pathParams = {
        'conversation_uuid': conversation_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}/join', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    leaveConversation(conversation_uuid, callback) {
      let postBody = null;
      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling leaveConversation");
      }

      let pathParams = {
        'conversation_uuid': conversation_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}/leave', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    startConversation(start_request, callback) {
      let postBody = start_request;
      // verify the required parameter 'start_request' is set
      if (start_request === undefined || start_request === null) {
        throw new Error("Missing the required parameter 'start_request' when calling startConversation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConversationStartResponse;
      return this.apiClient.callApi(
        '/conversation/conversations', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    updateConversationWebchatQueueStatus(queue_name, status_request, callback) {
      let postBody = status_request;
      // verify the required parameter 'queue_name' is set
      if (queue_name === undefined || queue_name === null) {
        throw new Error("Missing the required parameter 'queue_name' when calling updateConversationWebchatQueueStatus");
      }
      // verify the required parameter 'status_request' is set
      if (status_request === undefined || status_request === null) {
        throw new Error("Missing the required parameter 'status_request' when calling updateConversationWebchatQueueStatus");
      }

      let pathParams = {
        'queue_name': queue_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/conversation/conversations/queues/{queue_name}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
