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
import Report from '../com.ultracart.admin.v2.models/Report';
import ReportAuthResponse from '../com.ultracart.admin.v2.models/ReportAuthResponse';
import ReportDataSetPageResponse from '../com.ultracart.admin.v2.models/ReportDataSetPageResponse';
import ReportDataSetResponse from '../com.ultracart.admin.v2.models/ReportDataSetResponse';
import ReportDryRunQueriesRequest from '../com.ultracart.admin.v2.models/ReportDryRunQueriesRequest';
import ReportDryRunQueriesResponse from '../com.ultracart.admin.v2.models/ReportDryRunQueriesResponse';
import ReportExecuteQueriesRequest from '../com.ultracart.admin.v2.models/ReportExecuteQueriesRequest';
import ReportResponse from '../com.ultracart.admin.v2.models/ReportResponse';
import ReportsResponse from '../com.ultracart.admin.v2.models/ReportsResponse';

/**
* Datawarehouse service.
* @module com.ultracart.admin.v2/DatawarehouseApi
* @version 4.0.163
*/
export default class DatawarehouseApi {

    /**
    * Constructs a new DatawarehouseApi. 
    * @alias module:com.ultracart.admin.v2/DatawarehouseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~deleteReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a report
     * Delete a report on the UltraCart account. 
     * @param {Number} report_oid The report oid to delete.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~deleteReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteReport(report_oid, callback) {
      let postBody = null;
      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling deleteReport");
      }

      let pathParams = {
        'report_oid': report_oid
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
        '/datawarehouse/reports/{report_oid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dryRunReportQueries operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~dryRunReportQueriesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dry run the report queries
     * Dry run the report queries 
     * @param {module:com.ultracart.admin.v2.models/ReportDryRunQueriesRequest} query_request Dry run request
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~dryRunReportQueriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportDryRunQueriesResponse}
     */
    dryRunReportQueries(query_request, callback) {
      let postBody = query_request;
      // verify the required parameter 'query_request' is set
      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling dryRunReportQueries");
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
      let returnType = ReportDryRunQueriesResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/dryrun', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the executeReportQueries operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~executeReportQueriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute the report queries
     * Execute the report queries 
     * @param {module:com.ultracart.admin.v2.models/ReportExecuteQueriesRequest} query_request Query request
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~executeReportQueriesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    executeReportQueries(query_request, callback) {
      let postBody = query_request;
      // verify the required parameter 'query_request' is set
      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling executeReportQueries");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/datawarehouse/reports/execute', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a report
     * Retrieve a report 
     * @param {Number} report_oid 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportResponse}
     */
    getReport(report_oid, callback) {
      let postBody = null;
      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling getReport");
      }

      let pathParams = {
        'report_oid': report_oid
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
      let returnType = ReportResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/{report_oid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReportDataSet operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getReportDataSetCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a report data set
     * Retrieve a report data set 
     * @param {String} dataset_uuid 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getReportDataSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportDataSetResponse}
     */
    getReportDataSet(dataset_uuid, callback) {
      let postBody = null;
      // verify the required parameter 'dataset_uuid' is set
      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSet");
      }

      let pathParams = {
        'dataset_uuid': dataset_uuid
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
      let returnType = ReportDataSetResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/dataset/{dataset_uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReportDataSetPage operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getReportDataSetPageCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportDataSetPageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a report data set page
     * Retrieve a report data set page 
     * @param {String} dataset_uuid 
     * @param {Number} page_number 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getReportDataSetPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportDataSetPageResponse}
     */
    getReportDataSetPage(dataset_uuid, page_number, callback) {
      let postBody = null;
      // verify the required parameter 'dataset_uuid' is set
      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSetPage");
      }
      // verify the required parameter 'page_number' is set
      if (page_number === undefined || page_number === null) {
        throw new Error("Missing the required parameter 'page_number' when calling getReportDataSetPage");
      }

      let pathParams = {
        'dataset_uuid': dataset_uuid,
        'page_number': page_number
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
      let returnType = ReportDataSetPageResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/dataset/{dataset_uuid}/pages/{page_number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReportWebsocketAuthorization operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getReportWebsocketAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportAuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get report websocket authorization
     * Retrieve a JWT to authorize a report to make a websocket connection. 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getReportWebsocketAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportAuthResponse}
     */
    getReportWebsocketAuthorization(callback) {
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
      let returnType = ReportAuthResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/auth', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReports operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of reports available
     * Retrieve a list of reports available 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportsResponse}
     */
    getReports(callback) {
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
      let returnType = ReportsResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~insertReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a report
     * Create a new report on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/Report} report Report to create
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~insertReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportResponse}
     */
    insertReport(report, callback) {
      let postBody = report;
      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling insertReport");
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
      let returnType = ReportResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~updateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/ReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a report
     * Update a report on the UltraCart account. 
     * @param {Number} report_oid The report oid to update.
     * @param {module:com.ultracart.admin.v2.models/Report} report Report to update
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportResponse}
     */
    updateReport(report_oid, report, callback) {
      let postBody = report;
      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling updateReport");
      }
      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling updateReport");
      }

      let pathParams = {
        'report_oid': report_oid
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
      let returnType = ReportResponse;
      return this.apiClient.callApi(
        '/datawarehouse/reports/{report_oid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}