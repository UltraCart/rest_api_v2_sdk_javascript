"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _Webhook = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Webhook"));

var _WebhookLogResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WebhookLogResponse"));

var _WebhookLogSummariesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WebhookLogSummariesResponse"));

var _WebhookResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WebhookResponse"));

var _WebhookSampleRequestResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WebhookSampleRequestResponse"));

var _WebhooksResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/WebhooksResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Webhook service.
* @module com.ultracart.admin.v2/WebhookApi
* @version 4.0.104-RC
*/
var WebhookApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhookApi. 
  * @alias module:com.ultracart.admin.v2/WebhookApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhookApi(apiClient) {
    _classCallCheck(this, WebhookApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(WebhookApi, [{
    key: "deleteWebhook",
    value: function deleteWebhook(webhookOid, callback) {
      var postBody = null; // verify the required parameter 'webhookOid' is set

      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling deleteWebhook");
      }

      var pathParams = {
        'webhookOid': webhookOid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/webhook/webhooks/{webhookOid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "deleteWebhookByUrl",
    value: function deleteWebhookByUrl(webhook, callback) {
      var postBody = webhook; // verify the required parameter 'webhook' is set

      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling deleteWebhookByUrl");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _WebhookResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getWebhookLog",
    value: function getWebhookLog(webhookOid, requestId, callback) {
      var postBody = null; // verify the required parameter 'webhookOid' is set

      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLog");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getWebhookLog");
      }

      var pathParams = {
        'webhookOid': webhookOid,
        'requestId': requestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookLogResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks/{webhookOid}/logs/{requestId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getWebhookLogSummaries",
    value: function getWebhookLogSummaries(webhookOid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'webhookOid' is set

      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling getWebhookLogSummaries");
      }

      var pathParams = {
        'webhookOid': webhookOid
      };
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_since': opts['_since']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookLogSummariesResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks/{webhookOid}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getWebhooks",
    value: function getWebhooks(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort'],
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhooksResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertWebhook",
    value: function insertWebhook(webhook, opts, callback) {
      opts = opts || {};
      var postBody = webhook; // verify the required parameter 'webhook' is set

      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling insertWebhook");
      }

      var pathParams = {};
      var queryParams = {
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _WebhookResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "resendEvent",
    value: function resendEvent(webhookOid, eventName, callback) {
      var postBody = null; // verify the required parameter 'webhookOid' is set

      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling resendEvent");
      } // verify the required parameter 'eventName' is set


      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling resendEvent");
      }

      var pathParams = {
        'webhookOid': webhookOid,
        'eventName': eventName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSampleRequestResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks/{webhookOid}/reflow/{eventName}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "updateWebhook",
    value: function updateWebhook(webhookOid, webhook, opts, callback) {
      opts = opts || {};
      var postBody = webhook; // verify the required parameter 'webhookOid' is set

      if (webhookOid === undefined || webhookOid === null) {
        throw new Error("Missing the required parameter 'webhookOid' when calling updateWebhook");
      } // verify the required parameter 'webhook' is set


      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling updateWebhook");
      }

      var pathParams = {
        'webhookOid': webhookOid
      };
      var queryParams = {
        '_placeholders': opts['_placeholders']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _WebhookResponse["default"];
      return this.apiClient.callApi('/webhook/webhooks/{webhookOid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhookApi;
}();

exports["default"] = WebhookApi;