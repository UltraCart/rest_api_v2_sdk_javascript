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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ConversationAgentAuthResponse', 'com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse', 'com.ultracart.admin.v2.models/ConversationResponse', 'com.ultracart.admin.v2.models/ConversationStartRequest', 'com.ultracart.admin.v2.models/ConversationStartResponse', 'com.ultracart.admin.v2.models/ConversationsResponse', 'com.ultracart.admin.v2.models/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ConversationAgentAuthResponse'), require('../com.ultracart.admin.v2.models/ConversationMultimediaUploadUrlResponse'), require('../com.ultracart.admin.v2.models/ConversationResponse'), require('../com.ultracart.admin.v2.models/ConversationStartRequest'), require('../com.ultracart.admin.v2.models/ConversationStartResponse'), require('../com.ultracart.admin.v2.models/ConversationsResponse'), require('../com.ultracart.admin.v2.models/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ConversationApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ConversationAgentAuthResponse, root.UltraCartRestApiV2.ConversationMultimediaUploadUrlResponse, root.UltraCartRestApiV2.ConversationResponse, root.UltraCartRestApiV2.ConversationStartRequest, root.UltraCartRestApiV2.ConversationStartResponse, root.UltraCartRestApiV2.ConversationsResponse, root.UltraCartRestApiV2.ErrorResponse);
  }
}(this, function(ApiClient, ConversationAgentAuthResponse, ConversationMultimediaUploadUrlResponse, ConversationResponse, ConversationStartRequest, ConversationStartResponse, ConversationsResponse, ErrorResponse) {
  'use strict';

  /**
   * Conversation service.
   * @module com.ultracart.admin.v2/ConversationApi
   * @version 3.10.24
   */

  /**
   * Constructs a new ConversationApi. 
   * @alias module:com.ultracart.admin.v2/ConversationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
    this.getAgentWebsocketAuthorization = function(callback) {
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
      var returnType = ConversationAgentAuthResponse;

      return this.apiClient.callApi(
        '/conversation/agent/auth', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getConversation = function(conversation_uuid, callback) {
      var postBody = null;

      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling getConversation");
      }


      var pathParams = {
        'conversation_uuid': conversation_uuid
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
      var returnType = ConversationResponse;

      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getConversationMultimediaUploadUrl = function(extension, callback) {
      var postBody = null;

      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling getConversationMultimediaUploadUrl");
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
      var returnType = ConversationMultimediaUploadUrlResponse;

      return this.apiClient.callApi(
        '/conversation/upload_url/{extension}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getConversations = function(opts, callback) {
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
      var returnType = ConversationsResponse;

      return this.apiClient.callApi(
        '/conversation/conversations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.joinConversation = function(conversation_uuid, callback) {
      var postBody = null;

      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling joinConversation");
      }


      var pathParams = {
        'conversation_uuid': conversation_uuid
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
      var returnType = null;

      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}/join', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.leaveConversation = function(conversation_uuid, callback) {
      var postBody = null;

      // verify the required parameter 'conversation_uuid' is set
      if (conversation_uuid === undefined || conversation_uuid === null) {
        throw new Error("Missing the required parameter 'conversation_uuid' when calling leaveConversation");
      }


      var pathParams = {
        'conversation_uuid': conversation_uuid
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
      var returnType = null;

      return this.apiClient.callApi(
        '/conversation/conversations/{conversation_uuid}/leave', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.startConversation = function(start_request, callback) {
      var postBody = start_request;

      // verify the required parameter 'start_request' is set
      if (start_request === undefined || start_request === null) {
        throw new Error("Missing the required parameter 'start_request' when calling startConversation");
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
      var returnType = ConversationStartResponse;

      return this.apiClient.callApi(
        '/conversation/conversations', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
