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
import ErrorResponse from '../com.ultracart.admin.v2.models/ErrorResponse';
import Webhook from '../com.ultracart.admin.v2.models/Webhook';
import WebhookLogResponse from '../com.ultracart.admin.v2.models/WebhookLogResponse';
import WebhookLogSummariesResponse from '../com.ultracart.admin.v2.models/WebhookLogSummariesResponse';
import WebhookResponse from '../com.ultracart.admin.v2.models/WebhookResponse';
import WebhookSampleRequestResponse from '../com.ultracart.admin.v2.models/WebhookSampleRequestResponse';
import WebhooksResponse from '../com.ultracart.admin.v2.models/WebhooksResponse';

/**
* Webhook service.
* @module com.ultracart.admin.v2/WebhookApi
* @version 4.0.82-RC
*/
export default class WebhookApi {

    /**
    * Constructs a new WebhookApi. 
    * @alias module:com.ultracart.admin.v2/WebhookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
    deleteWebhook(webhookOid, callback) {
      let postBody = null;
      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling deleteWebhook");
      }

      let pathParams = {
        'webhookOid': webhookOid
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
        '/webhook/webhooks/{webhookOid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    deleteWebhookByUrl(webhook, callback) {
      let postBody = webhook;
      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling deleteWebhookByUrl");
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
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getWebhookLog(webhookOid, requestId, callback) {
      let postBody = null;
      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLog");
      }
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getWebhookLog");
      }

      let pathParams = {
        'webhookOid': webhookOid,
        'requestId': requestId
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
      let returnType = WebhookLogResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/logs/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._since Fetch log summaries that have been delivered since this date/time.
     * @param {module:com.ultracart.admin.v2/WebhookApi~getWebhookLogSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookLogSummariesResponse}
     */
    getWebhookLogSummaries(webhookOid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLogSummaries");
      }

      let pathParams = {
        'webhookOid': webhookOid
      };
      let queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookLogSummariesResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the webhooks.  See documentation for examples
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~getWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhooksResponse}
     */
    getWebhooks(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_placeholders': opts['_placeholders']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhooksResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~insertWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookResponse}
     */
    insertWebhook(webhook, opts, callback) {
      opts = opts || {};
      let postBody = webhook;
      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling insertWebhook");
      }

      let pathParams = {
      };
      let queryParams = {
        '_placeholders': opts['_placeholders']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    resendEvent(webhookOid, eventName, callback) {
      let postBody = null;
      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling resendEvent");
      }
      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling resendEvent");
      }

      let pathParams = {
        'webhookOid': webhookOid,
        'eventName': eventName
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
      let returnType = WebhookSampleRequestResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}/reflow/{eventName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} webhookOid The webhook oid to update.
     * @param {module:com.ultracart.admin.v2.models/Webhook} webhook Webhook to update
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._placeholders Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {module:com.ultracart.admin.v2/WebhookApi~updateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/WebhookResponse}
     */
    updateWebhook(webhookOid, webhook, opts, callback) {
      opts = opts || {};
      let postBody = webhook;
      // verify the required parameter 'webhookOid' is set
      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling updateWebhook");
      }
      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling updateWebhook");
      }

      let pathParams = {
        'webhookOid': webhookOid
      };
      let queryParams = {
        '_placeholders': opts['_placeholders']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json; charset=UTF-8'];
      let accepts = ['application/json'];
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/webhook/webhooks/{webhookOid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
