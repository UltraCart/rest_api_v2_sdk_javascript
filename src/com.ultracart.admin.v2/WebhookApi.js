/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/Webhook', 'com.ultracart.admin.v2.models/WebhookLogResponse', 'com.ultracart.admin.v2.models/WebhookLogSummariesResponse', 'com.ultracart.admin.v2.models/WebhookResponse', 'com.ultracart.admin.v2.models/WebhookSampleRequestResponse', 'com.ultracart.admin.v2.models/WebhooksResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/Webhook'), require('../com.ultracart.admin.v2.models/WebhookLogResponse'), require('../com.ultracart.admin.v2.models/WebhookLogSummariesResponse'), require('../com.ultracart.admin.v2.models/WebhookResponse'), require('../com.ultracart.admin.v2.models/WebhookSampleRequestResponse'), require('../com.ultracart.admin.v2.models/WebhooksResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.WebhookApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.Webhook, root.UltraCartRestApiV2.WebhookLogResponse, root.UltraCartRestApiV2.WebhookLogSummariesResponse, root.UltraCartRestApiV2.WebhookResponse, root.UltraCartRestApiV2.WebhookSampleRequestResponse, root.UltraCartRestApiV2.WebhooksResponse);
  }
}(this, function(ApiClient, ErrorResponse, Webhook, WebhookLogResponse, WebhookLogSummariesResponse, WebhookResponse, WebhookSampleRequestResponse, WebhooksResponse) {
  'use strict';

  /**
   * Webhook service.
   * @module com.ultracart.admin.v2/WebhookApi
   * @version 2.4.44
   */

  /**
   * Constructs a new WebhookApi. 
   * @alias module:com.ultracart.admin.v2/WebhookApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteWebhook operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~deleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a webhook
     * Delete a webhook on the UltraCart account. 
     * @param {Number} webhookOid The webhook oid to delete.
     * @param {module:com.ultracart.admin.v2/WebhookApi~deleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhook = function(webhookOid, callback) {
      var postBody = null;

      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling deleteWebhook");
      }


      var pathParams = {
        'webhookOid': webhookOid
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
        '/webhook/webhooks/{webhookOid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookByUrl operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~deleteWebhookByUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a webhook by URL
     * Delete a webhook based upon the URL on the webhook_url matching an existing webhook. 
     * @param {module:com.ultracart.admin.v2.models/Webhook} webhook Webhook to delete
     * @param {module:com.ultracart.admin.v2/WebhookApi~deleteWebhookByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookResponse}
     */
    this.deleteWebhookByUrl = function(webhook, callback) {
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling deleteWebhookByUrl");
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
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = WebhookResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookLog operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~getWebhookLogCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an individual log
     * Retrieves an individual log for a webhook given the webhook oid the request id. 
     * @param {Number} webhookOid The webhook oid that owns the log.
     * @param {String} requestId The request id associated with the log to view.
     * @param {module:com.ultracart.admin.v2/WebhookApi~getWebhookLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookLogResponse}
     */
    this.getWebhookLog = function(webhookOid, requestId, callback) {
      var postBody = null;

      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLog");
      }

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getWebhookLog");
      }


      var pathParams = {
        'webhookOid': webhookOid,
        'requestId': requestId
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
      var returnType = WebhookLogResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/logs/{requestId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookLogSummaries operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~getWebhookLogSummariesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the log summaries
     * Retrieves the log summary information for a given webhook.  This is useful for displaying all the various logs that can be viewed. 
     * @param {Number} webhookOid The webhook oid to retrieve log summaries for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.since Fetch log summaries that have been delivered since this date/time.
     * @param {module:com.ultracart.admin.v2/WebhookApi~getWebhookLogSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse}
     */
    this.getWebhookLogSummaries = function(webhookOid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLogSummaries");
      }


      var pathParams = {
        'webhookOid': webhookOid
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_since': opts['since'],
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
      var returnType = WebhookLogSummariesResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooks operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~getWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhooksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve webhooks
     * Retrieves the webhooks associated with this application. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of records to return on this one API call. (default to 100)
     * @param {Number} opts.offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts.sort The sort order of the webhooks.  See documentation for examples
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~getWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhooksResponse}
     */
    this.getWebhooks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_limit': opts['limit'],
        '_offset': opts['offset'],
        '_sort': opts['sort'],
        '_placeholders': opts['placeholders'],
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
      var returnType = WebhooksResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the insertWebhook operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~insertWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a webhook
     * Adds a new webhook on the account.  If you add a new webhook with the authentication_type set to basic, but do not specify the basic_username and basic_password, UltraCart will automatically generate random ones and return them.  This allows your application to have simpler logic on the setup of a secure webhook. 
     * @param {module:com.ultracart.admin.v2.models/Webhook} webhook Webhook to create
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~insertWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookResponse}
     */
    this.insertWebhook = function(webhook, opts, callback) {
      opts = opts || {};
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling insertWebhook");
      }


      var pathParams = {
      };
      var queryParams = {
        '_placeholders': opts['placeholders'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = WebhookResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resendEvent operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~resendEventCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookSampleRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend events to the webhook endpoint.
     * This method will resend events to the webhook endpoint.  This method can be used for example to send all the existing items on an account to a webhook. 
     * @param {Number} webhookOid The webhook oid that is receiving the reflowed events.
     * @param {String} eventName The event to reflow.
     * @param {module:com.ultracart.admin.v2/WebhookApi~resendEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookSampleRequestResponse}
     */
    this.resendEvent = function(webhookOid, eventName, callback) {
      var postBody = null;

      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling resendEvent");
      }

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling resendEvent");
      }


      var pathParams = {
        'webhookOid': webhookOid,
        'eventName': eventName
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
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = WebhookSampleRequestResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/reflow/{eventName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhook operation.
     * @callback module:com.ultracart.admin.v2/WebhookApi~updateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/WebhookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook
     * Update a webhook on the account 
     * @param {module:com.ultracart.admin.v2.models/Webhook} webhook Webhook to update
     * @param {Number} webhookOid The webhook oid to update.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~updateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookResponse}
     */
    this.updateWebhook = function(webhook, webhookOid, opts, callback) {
      opts = opts || {};
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling updateWebhook");
      }

      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling updateWebhook");
      }


      var pathParams = {
        'webhookOid': webhookOid
      };
      var queryParams = {
        '_placeholders': opts['placeholders'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = WebhookResponse;

      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
