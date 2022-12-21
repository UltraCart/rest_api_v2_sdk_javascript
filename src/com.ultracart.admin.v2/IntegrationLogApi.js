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
import IntegrationLogQueryRequest from '../com.ultracart.admin.v2.models/IntegrationLogQueryRequest';
import IntegrationLogQueryResponse from '../com.ultracart.admin.v2.models/IntegrationLogQueryResponse';
import IntegrationLogResponse from '../com.ultracart.admin.v2.models/IntegrationLogResponse';
import IntegrationLogSummaryQueryRequest from '../com.ultracart.admin.v2.models/IntegrationLogSummaryQueryRequest';
import IntegrationLogSummaryQueryResponse from '../com.ultracart.admin.v2.models/IntegrationLogSummaryQueryResponse';

/**
* IntegrationLog service.
* @module com.ultracart.admin.v2/IntegrationLogApi
* @version 4.0.102-RC
*/
export default class IntegrationLogApi {

    /**
    * Constructs a new IntegrationLogApi. 
    * @alias module:com.ultracart.admin.v2/IntegrationLogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    getIntegrationLog(pk, sk, callback) {
      let postBody = null;
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLog");
      }
      // verify the required parameter 'sk' is set
      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLog");
      }

      let pathParams = {
        'pk': pk,
        'sk': sk
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
      let returnType = IntegrationLogResponse;
      return this.apiClient.callApi(
        '/integration_log/query/{pk}/{sk}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getIntegrationLogFile(pk, sk, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLogFile");
      }
      // verify the required parameter 'sk' is set
      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLogFile");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getIntegrationLogFile");
      }

      let pathParams = {
        'pk': pk,
        'sk': sk,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = File;
      return this.apiClient.callApi(
        '/integration_log/query/{pk}/{sk}/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getIntegrationLogFilePdf(pk, sk, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling getIntegrationLogFilePdf");
      }
      // verify the required parameter 'sk' is set
      if (sk === undefined || sk === null) {
        throw new Error("Missing the required parameter 'sk' when calling getIntegrationLogFilePdf");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getIntegrationLogFilePdf");
      }

      let pathParams = {
        'pk': pk,
        'sk': sk,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = File;
      return this.apiClient.callApi(
        '/integration_log/query/{pk}/{sk}/{uuid}/pdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getIntegrationLogSummariesQuery(integration_log_summaries_query, callback) {
      let postBody = integration_log_summaries_query;
      // verify the required parameter 'integration_log_summaries_query' is set
      if (integration_log_summaries_query === undefined || integration_log_summaries_query === null) {
        throw new Error("Missing the required parameter 'integration_log_summaries_query' when calling getIntegrationLogSummariesQuery");
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
      let returnType = IntegrationLogSummaryQueryResponse;
      return this.apiClient.callApi(
        '/integration_log/summary/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getIntegrationLogsQuery(integration_log_query, opts, callback) {
      opts = opts || {};
      let postBody = integration_log_query;
      // verify the required parameter 'integration_log_query' is set
      if (integration_log_query === undefined || integration_log_query === null) {
        throw new Error("Missing the required parameter 'integration_log_query' when calling getIntegrationLogsQuery");
      }

      let pathParams = {
      };
      let queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_sort': opts['_sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationLogQueryResponse;
      return this.apiClient.callApi(
        '/integration_log/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
