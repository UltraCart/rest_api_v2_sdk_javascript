"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _IntegrationLogQueryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/IntegrationLogQueryRequest"));

var _IntegrationLogQueryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/IntegrationLogQueryResponse"));

var _IntegrationLogResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/IntegrationLogResponse"));

var _IntegrationLogSummaryQueryRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest"));

var _IntegrationLogSummaryQueryResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* IntegrationLog service.
* @module com.ultracart.admin.v2/IntegrationLogApi
* @version 4.0.113-RC
*/
var IntegrationLogApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IntegrationLogApi. 
  * @alias module:com.ultracart.admin.v2/IntegrationLogApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IntegrationLogApi(apiClient) {
    _classCallCheck(this, IntegrationLogApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getIntegrationLog operation.
   * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/IntegrationLogResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve an integration log
   * Retrieve an integration logs from the account based identifiers 
   * @param {String} pk 
   * @param {String} sk 
   * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/IntegrationLogResponse}
   */


  _createClass(IntegrationLogApi, [{
    key: "getIntegrationLog",
    value: function getIntegrationLog(pk, sk, callback) {
      var postBody = null; // verify the required parameter 'pk' is set

      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLog");
      } // verify the required parameter 'sk' is set


      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLog");
      }

      var pathParams = {
        'pk': pk,
        'sk': sk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IntegrationLogResponse["default"];
      return this.apiClient.callApi('/integration_log/query/{pk}/{sk}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getIntegrationLogFile operation.
     * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an integration log file
     * Retrieve an integration log file from the account based identifiers 
     * @param {String} pk 
     * @param {String} sk 
     * @param {String} uuid 
     * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "getIntegrationLogFile",
    value: function getIntegrationLogFile(pk, sk, uuid, callback) {
      var postBody = null; // verify the required parameter 'pk' is set

      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLogFile");
      } // verify the required parameter 'sk' is set


      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLogFile");
      } // verify the required parameter 'uuid' is set


      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getIntegrationLogFile");
      }

      var pathParams = {
        'pk': pk,
        'sk': sk,
        'uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/integration_log/query/{pk}/{sk}/{uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getIntegrationLogFilePdf operation.
     * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogFilePdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an integration log file converted to PDF
     * Retrieve an integration log file from the account based identifiers 
     * @param {String} pk 
     * @param {String} sk 
     * @param {String} uuid 
     * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogFilePdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "getIntegrationLogFilePdf",
    value: function getIntegrationLogFilePdf(pk, sk, uuid, callback) {
      var postBody = null; // verify the required parameter 'pk' is set

      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLogFilePdf");
      } // verify the required parameter 'sk' is set


      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLogFilePdf");
      } // verify the required parameter 'uuid' is set


      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getIntegrationLogFilePdf");
      }

      var pathParams = {
        'pk': pk,
        'sk': sk,
        'uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/integration_log/query/{pk}/{sk}/{uuid}/pdf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getIntegrationLogSummariesQuery operation.
     * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogSummariesQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve integration log summaries
     * Retrieves a set of integration log summaries from the account based on a query object. 
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest} integration_log_summaries_query Integration log summaries query
     * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogSummariesQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse}
     */

  }, {
    key: "getIntegrationLogSummariesQuery",
    value: function getIntegrationLogSummariesQuery(integration_log_summaries_query, callback) {
      var postBody = integration_log_summaries_query; // verify the required parameter 'integration_log_summaries_query' is set

      if (integration_log_summaries_query === undefined || integration_log_summaries_query === null) {
        throw new Error("Missing the required parameter 'integration_log_summaries_query' when calling getIntegrationLogSummariesQuery");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationLogSummaryQueryResponse["default"];
      return this.apiClient.callApi('/integration_log/summary/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getIntegrationLogsQuery operation.
     * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogsQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve integration logs
     * Retrieves a set of integration logs from the account based on a query object. 
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryRequest} integration_log_query Integration log query
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Default 100, Max 500) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._sort The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogsQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/IntegrationLogQueryResponse}
     */

  }, {
    key: "getIntegrationLogsQuery",
    value: function getIntegrationLogsQuery(integration_log_query, opts, callback) {
      opts = opts || {};
      var postBody = integration_log_query; // verify the required parameter 'integration_log_query' is set

      if (integration_log_query === undefined || integration_log_query === null) {
        throw new Error("Missing the required parameter 'integration_log_query' when calling getIntegrationLogsQuery");
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
      var returnType = _IntegrationLogQueryResponse["default"];
      return this.apiClient.callApi('/integration_log/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IntegrationLogApi;
}();

exports["default"] = IntegrationLogApi;