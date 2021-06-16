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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/IntegrationLog', 'com.ultracart.admin.v2.models/IntegrationLogQueryRequest', 'com.ultracart.admin.v2.models/IntegrationLogQueryResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/IntegrationLog'), require('../com.ultracart.admin.v2.models/IntegrationLogQueryRequest'), require('../com.ultracart.admin.v2.models/IntegrationLogQueryResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.IntegrationLogApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.IntegrationLog, root.UltraCartRestApiV2.IntegrationLogQueryRequest, root.UltraCartRestApiV2.IntegrationLogQueryResponse);
  }
}(this, function(ApiClient, ErrorResponse, IntegrationLog, IntegrationLogQueryRequest, IntegrationLogQueryResponse) {
  'use strict';

  /**
   * IntegrationLog service.
   * @module com.ultracart.admin.v2/IntegrationLogApi
   * @version 3.1.48
   */

  /**
   * Constructs a new IntegrationLogApi. 
   * @alias module:com.ultracart.admin.v2/IntegrationLogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getIntegrationLog operation.
     * @callback module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an integration log
     * Retrieve an integration logs from the account based identifiers 
     * @param {String} pk 
     * @param {String} sk 
     * @param {module:com.ultracart.admin.v2/IntegrationLogApi~getIntegrationLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/IntegrationLog}
     */
    this.getIntegrationLog = function(pk, sk, callback) {
      var postBody = null;

      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLog");
      }

      // verify the required parameter 'sk' is set
      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLog");
      }


      var pathParams = {
        'pk': pk,
        'sk': sk
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
      var returnType = IntegrationLog;

      return this.apiClient.callApi(
        '/integration_log/query/{pk}/{sk}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
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
    this.getIntegrationLogsQuery = function(integration_log_query, opts, callback) {
      opts = opts || {};
      var postBody = integration_log_query;

      // verify the required parameter 'integration_log_query' is set
      if (integration_log_query === undefined || integration_log_query === null) {
        throw new Error("Missing the required parameter 'integration_log_query' when calling getIntegrationLogsQuery");
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
      var returnType = IntegrationLogQueryResponse;

      return this.apiClient.callApi(
        '/integration_log/query', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));