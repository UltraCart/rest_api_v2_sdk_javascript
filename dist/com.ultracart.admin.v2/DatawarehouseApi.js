"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _Report = _interopRequireDefault(require("../com.ultracart.admin.v2.models/Report"));

var _ReportAuthResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportAuthResponse"));

var _ReportDataSetPageResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportDataSetPageResponse"));

var _ReportDataSetResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportDataSetResponse"));

var _ReportDryRunQueriesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportDryRunQueriesRequest"));

var _ReportDryRunQueriesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportDryRunQueriesResponse"));

var _ReportExecuteQueriesRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportExecuteQueriesRequest"));

var _ReportResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportResponse"));

var _ReportsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ReportsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Datawarehouse service.
* @module com.ultracart.admin.v2/DatawarehouseApi
* @version 4.0.181
*/
var DatawarehouseApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DatawarehouseApi. 
  * @alias module:com.ultracart.admin.v2/DatawarehouseApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DatawarehouseApi(apiClient) {
    _classCallCheck(this, DatawarehouseApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(DatawarehouseApi, [{
    key: "deleteReport",
    value: function deleteReport(report_oid, callback) {
      var postBody = null; // verify the required parameter 'report_oid' is set

      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling deleteReport");
      }

      var pathParams = {
        'report_oid': report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/datawarehouse/reports/{report_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "dryRunReportQueries",
    value: function dryRunReportQueries(query_request, callback) {
      var postBody = query_request; // verify the required parameter 'query_request' is set

      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling dryRunReportQueries");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReportDryRunQueriesResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/dryrun', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "executeReportQueries",
    value: function executeReportQueries(query_request, callback) {
      var postBody = query_request; // verify the required parameter 'query_request' is set

      if (query_request === undefined || query_request === null) {
        throw new Error("Missing the required parameter 'query_request' when calling executeReportQueries");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/datawarehouse/reports/execute', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getReport",
    value: function getReport(report_oid, callback) {
      var postBody = null; // verify the required parameter 'report_oid' is set

      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling getReport");
      }

      var pathParams = {
        'report_oid': report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/{report_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getReportDataSet",
    value: function getReportDataSet(dataset_uuid, callback) {
      var postBody = null; // verify the required parameter 'dataset_uuid' is set

      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSet");
      }

      var pathParams = {
        'dataset_uuid': dataset_uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportDataSetResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/dataset/{dataset_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getReportDataSetPage",
    value: function getReportDataSetPage(dataset_uuid, page_number, callback) {
      var postBody = null; // verify the required parameter 'dataset_uuid' is set

      if (dataset_uuid === undefined || dataset_uuid === null) {
        throw new Error("Missing the required parameter 'dataset_uuid' when calling getReportDataSetPage");
      } // verify the required parameter 'page_number' is set


      if (page_number === undefined || page_number === null) {
        throw new Error("Missing the required parameter 'page_number' when calling getReportDataSetPage");
      }

      var pathParams = {
        'dataset_uuid': dataset_uuid,
        'page_number': page_number
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportDataSetPageResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/dataset/{dataset_uuid}/pages/{page_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getReportWebsocketAuthorization",
    value: function getReportWebsocketAuthorization(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportAuthResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/auth', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getReports",
    value: function getReports(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportsResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "insertReport",
    value: function insertReport(report, callback) {
      var postBody = report; // verify the required parameter 'report' is set

      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling insertReport");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "updateReport",
    value: function updateReport(report_oid, report, callback) {
      var postBody = report; // verify the required parameter 'report_oid' is set

      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling updateReport");
      } // verify the required parameter 'report' is set


      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling updateReport");
      }

      var pathParams = {
        'report_oid': report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _ReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/reports/{report_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DatawarehouseApi;
}();

exports["default"] = DatawarehouseApi;