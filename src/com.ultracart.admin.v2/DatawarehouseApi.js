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
    define(['ApiClient', 'com.ultracart.admin.v2.models/ErrorResponse', 'com.ultracart.admin.v2.models/Report', 'com.ultracart.admin.v2.models/ReportAuthResponse', 'com.ultracart.admin.v2.models/ReportDataSetPageResponse', 'com.ultracart.admin.v2.models/ReportDataSetResponse', 'com.ultracart.admin.v2.models/ReportDryRunQueriesRequest', 'com.ultracart.admin.v2.models/ReportDryRunQueriesResponse', 'com.ultracart.admin.v2.models/ReportExecuteQueriesRequest', 'com.ultracart.admin.v2.models/ReportResponse', 'com.ultracart.admin.v2.models/ReportsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.ultracart.admin.v2.models/ErrorResponse'), require('../com.ultracart.admin.v2.models/Report'), require('../com.ultracart.admin.v2.models/ReportAuthResponse'), require('../com.ultracart.admin.v2.models/ReportDataSetPageResponse'), require('../com.ultracart.admin.v2.models/ReportDataSetResponse'), require('../com.ultracart.admin.v2.models/ReportDryRunQueriesRequest'), require('../com.ultracart.admin.v2.models/ReportDryRunQueriesResponse'), require('../com.ultracart.admin.v2.models/ReportExecuteQueriesRequest'), require('../com.ultracart.admin.v2.models/ReportResponse'), require('../com.ultracart.admin.v2.models/ReportsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.DatawarehouseApi = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ErrorResponse, root.UltraCartRestApiV2.Report, root.UltraCartRestApiV2.ReportAuthResponse, root.UltraCartRestApiV2.ReportDataSetPageResponse, root.UltraCartRestApiV2.ReportDataSetResponse, root.UltraCartRestApiV2.ReportDryRunQueriesRequest, root.UltraCartRestApiV2.ReportDryRunQueriesResponse, root.UltraCartRestApiV2.ReportExecuteQueriesRequest, root.UltraCartRestApiV2.ReportResponse, root.UltraCartRestApiV2.ReportsResponse);
  }
}(this, function(ApiClient, ErrorResponse, Report, ReportAuthResponse, ReportDataSetPageResponse, ReportDataSetResponse, ReportDryRunQueriesRequest, ReportDryRunQueriesResponse, ReportExecuteQueriesRequest, ReportResponse, ReportsResponse) {
  'use strict';

  /**
   * Datawarehouse service.
   * @module com.ultracart.admin.v2/DatawarehouseApi
   * @version 3.10.128
   */

  /**
   * Constructs a new DatawarehouseApi. 
   * @alias module:com.ultracart.admin.v2/DatawarehouseApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
    this.deleteReport = function(report_oid, callback) {
      var postBody = null;

      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling deleteReport");
      }


      var pathParams = {
        'report_oid': report_oid
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
        '/datawarehouse/reports/{report_oid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.dryRunReportQueries = function(query_request, callback) {
      var postBody = query_request;

      // verify the required parameter 'query_request' is set
      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling dryRunReportQueries");
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
      var returnType = ReportDryRunQueriesResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/dryrun', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.executeReportQueries = function(query_request, callback) {
      var postBody = query_request;

      // verify the required parameter 'query_request' is set
      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling executeReportQueries");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/datawarehouse/reports/execute', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getReport = function(report_oid, callback) {
      var postBody = null;

      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling getReport");
      }


      var pathParams = {
        'report_oid': report_oid
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
      var returnType = ReportResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/{report_oid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getReportDataSet = function(dataset_uuid, callback) {
      var postBody = null;

      // verify the required parameter 'dataset_uuid' is set
      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSet");
      }


      var pathParams = {
        'dataset_uuid': dataset_uuid
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
      var returnType = ReportDataSetResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/dataset/{dataset_uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getReportDataSetPage = function(dataset_uuid, page_number, callback) {
      var postBody = null;

      // verify the required parameter 'dataset_uuid' is set
      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSetPage");
      }

      // verify the required parameter 'page_number' is set
      if (page_number === undefined || page_number === null) {
        throw new Error("Missing the required parameter 'page_number' when calling getReportDataSetPage");
      }


      var pathParams = {
        'dataset_uuid': dataset_uuid,
        'page_number': page_number
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
      var returnType = ReportDataSetPageResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/dataset/{dataset_uuid}/pages/{page_number}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getReportWebsocketAuthorization = function(callback) {
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
      var returnType = ReportAuthResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/auth', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.getReports = function(callback) {
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
      var returnType = ReportsResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.insertReport = function(report, callback) {
      var postBody = report;

      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling insertReport");
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
      var returnType = ReportResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {module:com.ultracart.admin.v2.models/Report} report Report to update
     * @param {Number} report_oid The report oid to update.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/ReportResponse}
     */
    this.updateReport = function(report, report_oid, callback) {
      var postBody = report;

      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling updateReport");
      }

      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling updateReport");
      }


      var pathParams = {
        'report_oid': report_oid
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
      var returnType = ReportResponse;

      return this.apiClient.callApi(
        '/datawarehouse/reports/{report_oid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
